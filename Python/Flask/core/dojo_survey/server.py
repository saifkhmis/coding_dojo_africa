from flask import Flask,render_template,session,redirect,request
app=Flask(__name__)
app.secret_key='suiiiiiiiiiiiiiiiiiii'
@app.route('/')
def home ():
    return render_template('index.html')
@app.route('/localhost', methods=['post'])
def local ():
    session['name']= request.form['name']
    session['location']=request.form['location']
    session['language']=request.form['language']
    session['comment']=request.form['comment']
    return redirect('/result')
@app.route('/result')
def result():
    return render_template('result.html')



if __name__=='__main__':
    app.run(debug=True)