from flask import render_template ,redirect,request
from flask_app import app 
from flask_app.models.dojo import Dojo



@app.route('/')
def index ():
    return redirect('/dojos')


@app.route('/dojos')
def dojos ():
    dojos=Dojo.dojo()
    return render_template('index.html' ,dojo=dojos )


@app.route('/create/dojo', methods=['post'])
def create_dojo():
    Dojo.save(request.form)
    return redirect('/dojos')
@app.route('/dojo/<int:id>')
def show_dojo(id):
    data={ "id":id}
    return render_template('dojo.html', dojos=Dojo.get_one_with_ninjas(data))
