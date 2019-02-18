from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)

    berry_qty= request.form['strawberry']
    raspberry_qty = request.form['raspberry']
    apple_qty = request.form['apple']
    firstname= request.form['first_name']
    lastname= request.form['last_name']
    count = int(berry_qty)+int(raspberry_qty)+int(apple_qty)

    print(f"Charging {firstname} {lastname} for {count} fruits")


    return render_template("checkout.html", berry_qty= request.form['strawberry'], raspberry_qty = request.form['raspberry'], apple_qty = request.form['apple'], firstname= request.form['first_name'], lastname= request.form['last_name'], studentid= request.form['student_id'], order= count)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)    