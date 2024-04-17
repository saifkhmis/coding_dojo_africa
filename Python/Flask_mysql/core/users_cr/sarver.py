from flask import Flask,render_template,request,redirect
from users import User 
app=Flask(__name__)
@app.route('/')
def home():
    return redirect('/users')
@app.route('/users')
def users():
    return render_template('index.html', users=User.all_users())
@app.route('/users/new')
def new_users ():
    return render_template('new_user.html')
@app.route('/create/new', methods=['post'])
def new_user ():
    print(request.form)
    User.save(request.form)
    return redirect('/users')



if __name__=='__main__':
    app.run(debug=True)

