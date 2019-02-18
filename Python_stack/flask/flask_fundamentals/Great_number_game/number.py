from flask import Flask, render_template, session, request, redirect
from random import randint 
app = Flask(__name__)
app.secret_key = "great number games"

@app.route("/")
def number_game():
    print(request.form)
    session['image']="good.png"
    return render_template("index.html",image=session['image'] )

@app.route("/mynumber", methods=['POST'])
def number():
    session['number']= request.form['num']
    random_number = randint(1,100)

    if 'count' in session:
        session['count'] += 1
    else:
        session['count']=1
   
    if session['count'] %5 == 0:
        session['display']="YOU LOSE!!!"
        session['replay']="Play again"
        session['image']="good.png"
        print('you lose'*10)
        return redirect("/")

    if random_number < int(session['number']):
        session['color']="red"
        session['display']="Too high!"
        session['replay']=""
        session['image']="good.png"
        print('Too high'*10)
    
    if random_number > int(session['number']):
        session['color']="red"
        session['display']="Too low!"
        session['replay']=""
        session['image']="good.png"
        print('Too low'*10)

    if random_number == int(session['number']):
        session['color']="green"
        session['display']=f"{session['number']} was the number!"
        session['replay']="Play again"
        session['image']="smiley.png"
        print('WINNER'*10)

    print(session['number'],random_number,session['color'],session['display'])
    return redirect("/")

@app.route("/replay")
def replay():
    session['display']=""
    session['replay']=""
    return redirect("/")
    

if __name__ == "__main__":
    app.run(debug=True)