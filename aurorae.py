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
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    if 'loggedin' in session:
        cur.execute("SELECT * FROM accounts WHERE email = %s", [session['email']])
        usrdata = cur.fetchone()
        return render_template("index.html", usrdata = usrdata)
    else:
        return render_template("index.html")


@app.route('/discover', methods=["GET", "POST"])
def discover():
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    if 'loggedin' in session:
        cur.execute("SELECT * FROM accounts WHERE email = %s", [session['email']])
        usrdata = cur.fetchone()
        return render_template("discover.html", usrdata = usrdata)
    else:
        return render_template("discover.html")

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
        session['loggedin'] = True
        session['name'] = account['Name']
        session['email'] = account['email']
        session['username'] = account['Username']
        session['password'] = account['Password']
        return redirect('/profile')
    else:
        if request.method == "POST" and "discord-oauth-name" in request.form and "discord-oauth-email" in request.form and "discord-oauth-password" in request.form:
            name = request.form.get("discord-oauth-name")
            email = request.form.get("discord-oauth-email")
            password = request.form.get("discord-oauth-password")
            cur.execute("INSERT INTO accounts VALUES(NULL, %s, %s, %s, %s, %s, %s, DEFAULT, DEFAULT, DEFAULT, DEFAULT, NULL, DEFAULT, DEFAULT, DEFAULT)", (name, email, current_user.username, password, str(current_user.id), current_user.avatar_url))
            mysql.connection.commit()
            cur.execute("SELECT * FROM accounts WHERE discordid = %s AND email = %s", [str(current_user.id), email])
            account = cur.fetchone()
            session['loggedin'] = True
            session['name'] = account['Name']
            session['email'] = account['email']
            session['username'] = account['Username']
            session['password'] = account['Password']
            return redirect('/')
    return render_template("oauth.html", auth = "discordauth", current_user = current_user)
@app.route('/auth', methods=['GET', "POST"])
def auth():
    msg = ''
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    if 'loggedin' in session:
        return redirect('/profile')
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
            return redirect('/profile')
        else:
            cur.execute("INSERT INTO accounts VALUES(NULL, %s, %s, %s, %s, NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, NULL, DEFAULT, DEFAULT, DEFAULT)", (name, email, username, password))
            mysql.connection.commit()
            cur.execute("SELECT * FROM accounts WHERE email = %s", [email])
            account = cur.fetchone()
            session['loggedin'] = True
            session['name'] = account['Name']
            session['email'] = account['email']
            session['username'] = account['Username']
            session['password'] = account['Password']
            return redirect('/profile')
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

@app.route('/profile', methods=["GET", "POST"])
def userprofile():
    if 'loggedin' in session:
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("SELECT * FROM accounts WHERE email = %s", [session['email']])
        usrdata = cur.fetchone()
        if request.method == "POST":
            if 'pfp' not in request.files:
                flash("No file part")
                return redirect(request.url)
            file = request.files['pfp']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                cur.execute("UPDATE accounts SET pfp = %s WHERE email = %s", ["/" + os.path.join(app.config['UPLOAD_FOLDER'], filename) ,session['email']])
                mysql.connection.commit()
                return redirect('/profile')
                # return redirect(url_for('download_file', name=filename))
        return render_template("profile.html", usrdata = usrdata)

    return redirect('/auth')

@app.route('/uploads/<name>')
def file(name):
    return send_from_directory(app.config['UPLOAD_FOLDER'], name)

@app.route('/user/<int:id>', methods=["GET", "POST"])
def user(id):
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT * FROM accounts WHERE id = %s", [str(id)])
    user = cur.fetchone()
    if 'loggedin' in session:
        following = False
        cur.execute("SELECT * FROM accounts WHERE email = %s", [session['email']])
        usrdata = cur.fetchone()
        followers = usrdata['followers']
        followingaccs = list(usrdata['followingaccs'])
        if user['id'] in followingaccs:
            following = True
        if request.method == "POST" and "follow" in request.form:
            if usrdata['id'] not in followingaccs:
                list2 =[]
                for usrdata['id'] in followingaccs:
                    try:
                        x = id
                        list2.append(x)
                        print(list2)
                    except:
                        pass
                followers+=1
                cur.execute("UPDATE accounts SET followers = %s WHERE email = %s", (followers, user['email']))
                mysql.connection.commit()
                cur.execute("UPDATE accounts SET followingaccs = %s WHERE email = %s", (list2, usrdata['email']))
                # mysql.connection.commit()
                return redirect(request.url)
        return render_template("user.html", usrdata = usrdata, user = user, following = following)
    else:
        return render_template("user.html", user = user)

if __name__ == "__main__":
    app.run(debug=True)