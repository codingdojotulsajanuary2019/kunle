from flask import Flask, render_template, session, redirect, request
from random import randint

app = Flask(__name__)
app.secret_key = "not a cool project"

@app.route("/")
def ninja():
    if 'total' in session:
        session['total'] += 0
    else:
        session['total']=0

    if 'history' in session:
        session['history'] += ""
    else:
        session['history']="No activities"

    return render_template("ninja.html")

@app.route("/process", methods=['post'])
def gold():
    session['gold'] = request.form['gold']
    if session['gold'] == "cave":
        number = randint(1,10)
        print(number)
        session['total'] += number
        session['history'] += f"<ul><li>You earned {number} golds at the cave</li></ul>"

    if session['gold'] == "house":
        number = randint(0,5)
        print(number)
        session['total'] += number
        session['history'] += f"<ul><li>You earned {number} golds at the House</li></ul>"

    if session['gold'] == "farm":
        number = randint(0,20)
        print(number)
        session['total'] += number
        session['history'] += f"<ul><li>You earned {number} golds at the farm</li></ul>"

    if session['gold'] == "casino":
        number = randint(-50,50)
        print(number)
        session['total'] += number
        if number <0:
            session['history'] += f"<ul><li>You lost {number} golds</li></ul>"
        else: session['history'] += f"<ul><li>You won {number} golds at the casino</li></ul>"

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)