import os
from flask import Flask, render_template, request, session, jsonify, redirect, url_for, flash, send_from_directory
import MySQLdb.cursors
from flask_mysqldb import MySQL
import mysql.connector
import mysql
from zenora import APIClient
from config import TOKEN, CLIENT_SECRET, OAUTH_URL, REDIRECT_URI
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config["SECRET_KEY"] = "157193d1577cea433f3982b1b24b811374d39a048115a29d9a47c4d6fb054b27cd5be948f30385bf7137073731c233ac60cdb2e481200080cc0284650e8ffcb1"
app.config["MYSQL_DB"] = "aurorae"
client = APIClient(TOKEN, client_secret=CLIENT_SECRET)
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "toor"
app.config["MYSQL_HOST"] = "localhost"
UPLOAD_FOLDER = "uploads/"
ALLOWED_EXTENSIONS = {'png', 'jpg', 'gif', 'jpeg'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
mysql = MySQL(app)

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=["GET", "POST"])
def index():
    if 'token' in session:
        bearer_client = APIClient(session.get('token'), bearer=True)
        current_user = bearer_client.users.get_current_user()
    return render_template("index.html")

@app.route("/oauth/callback")
def callback():
    code = request.args['code']
    access_token = client.oauth.get_access_token(code, REDIRECT_URI).access_token
    session['token'] = access_token
    session['loggedin'] = True
    return redirect("/auth/discord")

@app.route('/auth/discord', methods=["GET", "POST"])
def discordauth():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    bearer_client = APIClient(session.get('token'), bearer=True)
    current_user = bearer_client.users.get_current_user()
    cur.execute("SELECT * FROM accounts WHERE discordid = %s", [str(current_user.id)])
    account = cur.fetchone()
    if account:
        return redirect('/')
    else:
        if request.method == "POST" and "discord-oauth-name" in request.form and "discord-oauth-email" in request.form and "discord-oauth-password" in request.form:
            name = request.form.get("discord-oauth-name")
            email = request.form.get("discord-oauth-email")
            password = request.form.get("discord-oauth-password")
            cur.execute("INSERT INTO accounts VALUES(NULL, %s, %s, %s, %s, %s, %s)", (name, email, current_user.username, password, str(current_user.id), current_user.avatar_url))
            mysql.connection.commit()
            cur.execute("SELECT * FROM accounts WHERE discordid = %s AND email = %s", [str(current_user.id), email])
            acc = cur.fetchone()
            session['loggedin'] = True
            session['name'] = acc['Name']
            session['email'] = acc['email']
            session['username'] = acc['Username']
            session['password'] = acc['Password']
            return redirect('/')
    return render_template("oauth.html", auth = "discordauth", current_user = current_user)
@app.route('/auth', methods=['GET', "POST"])
def auth():
    msg = ''
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    if 'loggedin' in session:
        return redirect('/user')
    if request.method == "POST" and "signup-name" in request.form and "signup-email" in request.form and "signup-username" in request.form and "signup-password" in request.form:
        name = request.form.get("signup-name")
        email = request.form.get("signup-email")
        username = request.form.get("signup-username")
        password = request.form.get("signup-password")
        cur.execute("SELECT * FROM accounts WHERE email = %s", [email])
        account = cur.fetchone()
        if account:
            session['loggedin'] = True
            session['name'] = account['Name']
            session['email'] = account['email']
            session['username'] = account['Username']
            session['password'] = account['Password']
            return redirect('/user')
        else:
            cur.execute("INSERT INTO accounts VALUES(NULL, %s, %s, %s, %s, NULL, NULL)", (name, email, username, password))
            mysql.connection.commit()
            cur.execute("SELECT * FROM accounts WHERE email = %s", [email])
            account = cur.fetchone()
            session['loggedin'] = True
            session['name'] = account['Name']
            session['email'] = account['email']
            session['username'] = account['Username']
            session['password'] = account['Password']
            return redirect('/user')
    if request.method == "POST" and "login-email" in request.form and "login-password":
        email = request.form.get("login-email")
        password = request.form.get("login-password")
        cur.execute("SELECT * FROM accounts WHERE email = %s and Password = %s", [email, password])
        account = cur.fetchone()
        if account:
            session['loggedin'] = True
            session['name'] = account['Name']
            session['email'] = account['email']
            session['username'] = account['Username']
            session['password'] = account['Password']
            return redirect('/auth')
        else:
            msg = 'err2'
    return render_template('oauth.html', msg = msg, OAUTH_URL = OAUTH_URL, auth = " ")

@app.route('/auth/logout')
def logout():
    session.clear()
    session.pop('loggedin', None)
    session.pop('name', None)
    session.pop('email', None)
    session.pop('password', None)
    session.pop('username', None)
    session.pop('discordid', None)
    return redirect('/')

@app.route('/user', methods=["GET", "POST"])
def userprofile():
    if request.method == "POST":
        if 'file' not in request.files:
            flash("No file part")
            return redirect(request.url)
        file = request.files['file']
        if file.filename == "":
            flash('No Selected File')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            # return redirect(url_for('download_file', name=filename))
    return render_template("user.html")

@app.route('/uploads/<name>')
def file(name):
    return send_from_directory(app.config['UPLOAD_FOLDER'], name)

if __name__ == "__main__":
    app.run(debug=True)