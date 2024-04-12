from flask import Flask ,render_template,session,redirect
app=Flask(__name__)
app.secret_key='suiii'
@app.route("/")
def home ():
    if 'count'not in session:
        session['count']=0
    
    return render_template('index.html')
@app.route('/count')
def count ():
    session['count']+=1
    return redirect('/')
@app.route('/rest')
def rest ():
    session['count']=0
    return redirect('/')
if __name__=='__main__':
    app.run(debug=True)