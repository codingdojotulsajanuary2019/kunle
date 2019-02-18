from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = "Bananas"

@app.route("/")
def survey_dojo():
    mysql = connectToMySQL("dojo_survey")
    locations = mysql.query_db('SELECT * FROM locations;')
    mysql = connectToMySQL("dojo_survey")
    languages = mysql.query_db('SELECT * FROM languages;')
    return render_template("survey.html", location=locations, language=languages)

@app.route("/survey", methods=["POST"])
def dojo_input():
    session['name'] = request.form["fname"]
    session['location'] = request.form["location"]
    session['lang'] = request.form["language"]
    session['comm'] = request.form["comment"]

    if len(request.form["fname"]) < 3:
        flash("Please enter a first name")

    if len(request.form["location"]) < 1:
        flash("Please choose a location")

    if len(request.form["language"]) < 1:
        flash("Please choose a language")

    if len(request.form["comment"]) > 120:
        flash("Comment too long")

    if not '_flashes' in session.keys():
        mysql = connectToMySQL("dojo_survey")
        query = "INSERT INTO students (`name`, `location_id`, `language_id`, `comment`) VALUES (%(fn)s, %(loc)s, %(lang)s,  %(comm)s);"
        data = {
            "fn": request.form["fname"],
            "loc": request.form["location"],
            "lang": request.form["language"],
            "comm": request.form['comment']
        }
        student_survey = mysql.query_db(query, data)
        print(student_survey)
        flash("Message successfully submited!")
        return redirect("/result")
    
    return redirect("/")

@app.route("/result")
def result():
    num=session['location']
    mysql = connectToMySQL("dojo_survey")
    query = "SELECT location FROM locations WHERE id = %(loc_num)s;"
    data = {"loc_num" : num}
    student_location = mysql.query_db(query, data)
    print(student_location)

    lang_num= session['lang']
    mysql = connectToMySQL("dojo_survey")
    query = "SELECT name FROM languages WHERE id = %(lang)s;"
    data = {"lang" : lang_num}
    fav_language = mysql.query_db(query, data)
    print(fav_language)

    return render_template("result.html", location=student_location, language=fav_language)

    
if __name__ == "__main__":
    app.run(debug = True)

