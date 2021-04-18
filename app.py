import flask
# from flaskext.mysql import FlaskSQL

app = flask.Flask(__name__)

@app.route("/")
def home():
    return flask.render_template("index.html")

@app.route("/about")
def about():
    return flask.render_template("about.html")

app.run(debug=True)