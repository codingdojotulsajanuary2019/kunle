from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route("/")
def survey_dojo():
    return render_template("survey.html")


@app.route("/results", methods=["POST"])
def result_dojo():
    print(request.form)
    return render_template("response.html", ename=request.form["email"], p_word=request.form["password"], add=request.form["address"], comment=request.form  ["comment"], sex=request.form["gender"], fav=request.form["language"], advert=request.form.getlist("media") )

if __name__ == "__main__":
    app.run(debug = True)