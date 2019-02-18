from flask import Flask, render_template, session, redirect, request, flash
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = "Bananas"
bcrypt = Bcrypt(app)

@app.route("/")
def login_page():
    return render_template("index.html")

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route("/createUser", methods=['POST'])
def create_user():

    mysql = connectToMySQL("wall_users")
    query = "SELECT email FROM users WHERE email = %(rmail)s;" 
    data = {"rmail" : request.form['email']}
    existing_user =  mysql.query_db(query, data)
    print(existing_user)
    print("$"*50)

    if existing_user != ():
        flash(u"Email already exist!", 'email')

    if not EMAIL_REGEX.match(request.form['email']) and len(request.form['email']) == 0:
        flash(u"Email cannot be blank!", 'email')
    elif not EMAIL_REGEX.match(request.form['email']): 
        flash(u"Invalid email address!", 'email')

    if len(request.form["firstname"]) < 3 or request.form["firstname"].isalpha() == False:
        flash(u"Please enter a first name", 'first_name')

    if len(request.form["lastname"]) < 3 or request.form["firstname"].isalpha() == False:
        flash(u"Please enter a last name", 'last_name')

    if len(request.form["password"]) < 5 :
        flash(u"Password must be between 8-15 characters", 'password')

    if request.form["password"].islower()  == True or request.form["password"].isupper() == True or request.form["password"].isalpha() == True:
        flash(u"Password must have at least a number and a uppercase letter", 'password')

    if request.form['password'] != request.form['confirm_password']:
        flash(u"Passwords do not match", 'ppassword')

    if not '_flashes' in session.keys():
        session['name'] = request.form["firstname"]
        pw_hash = bcrypt.generate_password_hash(request.form['password']) 
        print(pw_hash)

        mysql = connectToMySQL("wall_users")
        query = "INSERT INTO users (`first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES (%(fname)s, %(lname)s, %(usermail)s, %(password)s, NOW(), NOW());"

        data = {
            "fname" : request.form["firstname"],
            "lname" : request.form["lastname"],
            "usermail" : request.form['email'],
            "password" : pw_hash
        }
        new_user = mysql.query_db(query, data)
        print(new_user)
        session['user'] = int(new_user)
        flash("You've successfully registered")
        return redirect("/wall")

    return redirect("/")

@app.route("/wall")
def my_user():
    if session:
        mysql = connectToMySQL("wall_users")
        query = "SELECT * FROM users WHERE id != %(uid)s ORDER by first_name;" 
        data = {"uid" : session['user']}
        other_users =  mysql.query_db(query, data)
        print(other_users)
        
        mysql = connectToMySQL("wall_users")
        query = "SELECT messages.id, messages.message, first_name, users.last_name, messages.created_at FROM messages JOIN users ON messages.user1_id = users.id WHERE user2_id = %(userid)s;"

        data = {"userid" : session['user']}

        this_message = mysql.query_db(query, data)
        print (this_message)

        count = 0
        for x in this_message:
            count +=1
      
        if 'count' in session:
            session['count'] 
        else:
            session['count']=0
        
        return render_template("wall.html", username = session['name'], user = session['user'], others=other_users, message=this_message, msg_num = count, num_sent = session['count'])

    else:
        flash(u"You must be logged in to enter the website", "login")
        return redirect("/") 

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@app.route("/userlogin", methods=['POST'])
def userlogin():
    mysql = connectToMySQL("wall_users")
    query = "SELECT * FROM users WHERE email = %(rmail)s;" 
    data = {"rmail" : request.form['email']}
    result =  mysql.query_db(query, data)
    print(result)
    print("#"*50)

    if result != ():
        if bcrypt.check_password_hash(result[0]['password'], request.form['p_word']):
            session['name']=result[0]['first_name']
            session['user']= result[0]['id']
            return redirect("/wall")

    flash("You could not be logged in", "login")
    return redirect("/")

@app.route("/user/<id>", methods=['POST'])
def sendmessage(id):

    if 'count' in session:
        session['count'] += 1
    else:
        session['count']=0

    user2 = id
    mysql = connectToMySQL("wall_users")
    query = "INSERT INTO messages (`message`, `user1_id`, `user2_id`, created_at) VALUES (%(msg)s, %(uid1)s, %(uid2)s, NOW());"
    data = {
        "msg" : request.form['message'],
        "uid1" : session['user'],
        "uid2" : user2
    }
    msg_sent = mysql.query_db(query, data)
    print (msg_sent)

    return redirect("/wall")

@app.route("/delete/<id>")
def deletemsg(id):
    message_to_delete_id = id
    mysql = connectToMySQL("wall_users")
    query = "DELETE FROM messages WHERE `id` = %(msg_id)s;"
    data = { "msg_id" : message_to_delete_id }

    msg_delete = mysql.query_db(query, data)

    return redirect("/wall")
    

if __name__ == "__main__":
    app.run(debug=True)