from urllib import parse
TOKEN = "DISCORD_TOKEN"
CLIENT_SECRET = "CLIENT_SECRET"
REDIRECT_URI = "http://127.0.0.1:5000/oauth/callback"
OAUTH_URL = f"https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&redirect_uri={parse.quote(REDIRECT_URI)}&response_type=code&scope=identify"
