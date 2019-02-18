from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = 'my counter code'

@app.route("/")
def count_page():
    if 'count' in session:
        session['count'] += 1
    else:
        session['count']=1
    # for count in session:
    #     session['count'] += 1
    print("im working fine")
    

    print(session['count'])

    return render_template("counter.html", count=session['count'])

@app.route("/destroy")
def clear_count():
    for count in session:
        session['count']=0
    return redirect("/")

@app.route("/clear", methods=["post"])
def counter():
    session.clear()
    return redirect("/")

@app.route("/add", methods=["post"])
def add2():
    session['count'] +=1
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)