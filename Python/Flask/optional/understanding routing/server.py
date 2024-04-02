from flask import Flask 
app = Flask(__name__)
@app.route('/')
def hello ():
    return 'hello world '
@app.route('/Dojo')
def dojo ():
    return 'Dojo'
@app.route('/say/<flask>')
def flask (flask):
    return 'hi'+ flask
@app.route('/say/<michael>')
def michael (michael):
    return 'hi'+ michael
@app.route('/say/<john>')
def john (john):
    return 'hi'+john
@app.route('/repeat/<int:num>/<hello>')
def repeat_word (hello ,num):
    return f"{hello * num}"
@app.route('/repeat/<int:num>/<bye>')
def repeat_wrd (bye ,num):
    return f"{bye * num}"
@app.route('/repeat/<int:num>/<dogs>')
def repeat_rd (dogs ,num):
    return f"{dogs * num}"
if __name__=="__main__":
    app.run(debug=True)