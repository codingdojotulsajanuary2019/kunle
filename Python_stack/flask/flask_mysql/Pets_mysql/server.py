from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL

app = Flask(__name__)
@app.route("/")
def index():
    mysql = connectToMySQL('C+R_Pets')
    pets = mysql.query_db('SELECT * FROM pets')
    
    print(pets)
    return render_template("index.html", all_pets=pets)

@app.route("/add_pet", methods=["POST"])
def add_pet_db():
    mysql = connectToMySQL('C+R_Pets')

    query = "INSERT INTO pets (name, type, created_at, updated_at) VALUES (%(pn)s, %(pt)s, NOW(), NOW());"
    data = {
        "pn": request.form['pname'],
        "pt": request.form['ptype']
    }
    new_pet = mysql.query_db(query, data)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)