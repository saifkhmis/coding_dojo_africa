from flask import render_template ,redirect,request
from flask_app import app
from flask_app.models import dojo , ninja


@app.route('/ninjas')
def ninjas():
    return render_template('ninja.html',dojos=dojo.Dojo.dojo())
@app.route('/create/ninja', methods=['post'])
def save():
    ninja.Ninjas.user(request)
    return redirect('/')