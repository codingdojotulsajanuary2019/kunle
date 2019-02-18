from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL

app = Flask(__name__)

@app.route("/")
def index():
    print("*"*50, "\nIN INDEX METHOD\n", "*"*50)
    mysql = connectToMySQL("art_works")
    all_artists = mysql.query_db('SELECT * FROM artists') 
    return render_template("index.html", artists = all_artists)

@app.route("/create", methods=["POST"])
def add_artist_to_db():
    mysql = connectToMySQL("art_works")
    print("*"*50, "\nIN CREATE METHOD\n", "*"*50)
    query = "INSERT INTO artists(name, birthday, deathday) VALUES (%(n)s, %(b)s, %(d)s);"
    data = {
        'n': request.form["name"],
        'b': request.form["bday"],
        'd': request.form["death"],
    }
    new_artist_id = mysql.query_db(query, data)
    print(new_artist_id)

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)