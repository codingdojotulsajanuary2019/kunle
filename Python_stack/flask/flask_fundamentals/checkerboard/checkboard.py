from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def checkboard():
    return render_template("checkboard.html")

@app.route("/<count>/<color1>/<color2>")
def task1(count, color1, color2):
    number1 = int((int(count)/2))
    return render_template("checkboard.html", number=number1, z=color1, y=color2)


if __name__ == "__main__":
    app.run(debug=True)