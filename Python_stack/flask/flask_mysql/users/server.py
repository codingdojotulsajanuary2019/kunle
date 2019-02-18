from flask import Flask, render_template, redirect, request, session, url_for
from mysqlconnection import connectToMySQL

app = Flask(__name__)
@app.route("/users")
def users():
    mysql = connectToMySQL("users")
    my_users = mysql.query_db('SELECT * FROM users')

    print(my_users)
    return render_template("index.html", all_users=my_users)

@app.route("/users/new")
def add_user():
    return render_template("add_user.html")

@app.route("/users/create", methods=['POST'])
def create_user():
    mysql = connectToMySQL("users")

    query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(ufname)s, %(ulname)s, %(umail)s, NOW(), NOW())"

    data = {
        "ufname" : request.form['fname'],
        "ulname" : request.form['lname'],
        "umail" : request.form['email']
    }
    new_user = mysql.query_db(query, data)

    print(new_user)

    return redirect(url_for('this_user',id=new_user))
   

@app.route("/users/<id>")
def this_user(id):
    my_id = id
    mysql = connectToMySQL("users")
    query = "SELECT * FROM users WHERE id = %(uid)s;"

    data = {"uid" : my_id}
    this_user = mysql.query_db(query, data)

    print(this_user)
    return render_template("new_user.html", user=this_user)

@app.route("/users/<id>/edit")
def new_user(id):
    edit_id = id
    mysql = connectToMySQL("users")
    query = "SELECT * FROM users WHERE id = %(uid)s;"

    data = {"uid" : edit_id}
    edit_user = mysql.query_db(query, data)

    print(edit_user)
    return render_template("user_update.html", edit_this_user=edit_user)

@app.route("/users/<id>/update", methods=['POST'])
def update_user(id):
    update_id = id
    mysql = connectToMySQL("users")
    query = "UPDATE users SET first_name = %(form_fn)s, last_name = %(form_ln)s, email = %(form_mail)s WHERE id = %(form_id)s;"

    data = {
        "form_fn" : request.form['fname'],
        "form_ln" : request.form['lname'],
        "form_mail" : request.form['email'],
        "form_id" : update_id
    }
    update_user = mysql.query_db(query, data)

    print(update_user)
    return redirect(url_for("this_user", id=update_id))

@app.route("/users/<id>/destroy")
def destroy_user(id):
    destroy_id = id
    mysql = connectToMySQL("users")
    query = "DELETE FROM users WHERE id = %(uid)s;"

    data = {"uid" : destroy_id}
    destroy_user = mysql.query_db(query, data)

    print(destroy_user)
    return redirect("/users")


if __name__ == "__main__":
    app.run(debug=True)