from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
# import the class from user.py
from flask_app.models.user import User

@app.route("/")
def index():
    return render_template("create_page.html")


@app.route('/create', methods=["POST"])
def create():
    user_info = request.form
    if User.validate_register(user_info):
        User.save(user_info)
        print("PASS")
        return redirect('/')
    print("FAIL")
    return redirect('/users/new')

@app.route('/login', methods=['POST'])
def login():
    # see if the username provided exists in the database
    data = { "email" : request.form["email"] }
    if User.login(data):
        return redirect("/dashboard")
    return redirect('/')
@app.route('/dashboard')
def home ():
    return render_template('dashboard.html')
