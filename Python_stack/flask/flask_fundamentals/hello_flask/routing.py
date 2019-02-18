from flask import Flask 
app = Flask(__name__)

@app.route("/")
def world():
    return "Hello World"

@app.route("/dojo")
def dojo():
    return "Dojo!"

@app.route("/say/<name>")
def flask(name):
    return f"Hi {name}!"

@app.route("/repeat/<val>/<name>")
def repeat(name, val):
    return name * int(val)

@app.errorhandler("404")
def error(e):
    return "Sorry! No response. Try again."

if __name__ == "__main__":
    app.run(debug=True)
    