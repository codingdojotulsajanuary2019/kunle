from flask import Flask, render_template
app = Flask(__name__)

@app.route("/play/")
def level1():
    print ("I'm here")
    return render_template("play.html", view="box")

@app.route("/play/<dig>")
def level2(dig):
    print ("I'm here")
    return render_template("play.html", view="box", num=int(dig))

@app.route("/play/<dig>/<color1>")
def level3(dig,color1):
    print ("I'm here")
    return render_template("play.html", view="box", num=int(dig), col=color1)
    

if __name__ == "__main__":
    app.run(debug=True)