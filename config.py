from urllib import parse
TOKEN = "MTAxMTYyODI1NDY3MjcyODA3NQ.GeqL2V.Jx0Dq_d8xVUKg-PPc6NejAm7hHNIJ9JangfEP4"
CLIENT_SECRET = "IrKPmkmIXFW11o31f4KcgGad9Aqh6ly-"
REDIRECT_URI = "http://127.0.0.1:5000/oauth/callback"
OAUTH_URL = f"https://discord.com/api/oauth2/authorize?client_id=1011628254672728075&redirect_uri={parse.quote(REDIRECT_URI)}&response_type=code&scope=identify"