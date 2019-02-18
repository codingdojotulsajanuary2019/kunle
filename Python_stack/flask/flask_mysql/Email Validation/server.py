from flask import Flask, render_template, session, redirect, request, flash
from mysqlconnection import connectToMySQL

app = Flask(__name__)
app.secret_key = "Bananas"

@app.route("/")
def validate():
    return render_template("index.html")

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
@app.route("/register", methods=['POST'])
def register():

    mysql = connectToMySQL("email_validation")
    query = "SELECT email FROM users WHERE email = %(rmail)s;" 
    data = {"rmail" : request.form['email']}
    existing_user =  mysql.query_db(query, data)
    print(existing_user)
    print("$"*50)

    if existing_user != ():
        flash("Email already exist!")

    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
        flash("Email cannot be blank!", 'email')
        
    if len(request.form["fullname"]) < 3:
        flash("Please enter a first name")
        flash("Name cannot be blank!", 'name')

    if not '_flashes' in session.keys():
        mysql = connectToMySQL("email_validation")
        query = "INSERT INTO users (`name`, `email`, `created_at`, `updated_at`) VALUES (%(fn)s, %(mail)s, NOW(),  NOW());"
        
        data = {
            "fn" : request.form['fullname'],
            "mail" : request.form['email']
        }
        new_user = mysql.query_db(query, data)
        print(new_user)
        flash(f"Email address {request.form['email']} entered is VALID! Thank you!")
        return redirect("/success")

    return redirect("/")
    
@app.route("/success")
def users():
    mysql = connectToMySQL("email_validation")
    users = mysql.query_db('SELECT * FROM users;')

    print(users)
    return render_template("users.html", all_user=users)

@app.route("/destroy/<id>")
def destroy(id):
    del_id = id
    mysql = connectToMySQL("email_validation")
    query = "DELETE FROM users WHERE id = %(user_id)s;"

    data = {"user_id" : del_id}

    del_user = mysql.query_db(query, data)
    print(del_user)
    flash("Delete successful")

    return redirect("/success")


if __name__ == "__main__":
    app.run(debug = True)