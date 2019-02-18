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

    found = False
    mysql = connectToMySQL("registration")
    query = "SELECT email FROM users WHERE email = %(rmail)s;" 
    data = {"rmail" : request.form['email']}
    existing_user =  mysql.query_db(query, data)
    print(existing_user)
    print("$"*50)
    if existing_user != ():
        found = True
        print("i found it")
        return render_template('partials/email.html', found=found)

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

        mysql = connectToMySQL("registration")
        query = "INSERT INTO users (`first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES (%(fname)s, %(lname)s, %(usermail)s, %(password)s, NOW(), NOW());"

        data = {
            "fname" : request.form["firstname"],
            "lname" : request.form["lastname"],
            "usermail" : request.form['email'],
            "password" : pw_hash
        }
        new_user = mysql.query_db(query, data)
        print(new_user)
        flash("You've successfully registered")
        return redirect("/success")

    return redirect("/")

@app.route("/success")
def my_user():
    if session:
        return render_template("reg_user.html", username = session['name'])

    else:
        flash(u"You must be logged in to enter the website", "login")
        return redirect("/") 
        
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@app.route("/userlogin", methods=['POST'])
def userlogin():
    mysql = connectToMySQL("registration")
    query = "SELECT * FROM users WHERE email = %(rmail)s;" 
    data = {"rmail" : request.form['email']}
    result =  mysql.query_db(query, data)
    print(result)
    print("#"*50)

    if result != ():
        if bcrypt.check_password_hash(result[0]['password'], request.form['p_word']):
            session['name']=result[0]['first_name']
            return redirect("/success")

    flash("You could not be logged in", "login")
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)