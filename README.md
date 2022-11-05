# Aurorae - Web app setup
## SQL Setup
**Schema Name:** aurorae <br>
> *Setup for tables given in /setup*<br>
> Import data for table `courses`. JSON given in `courses-data.json`

<br><br>
## Web app dependencies
**Python Version:** 3.8+
> Run `pip install -r requirements.txt` in the directory of the project

<br><br>
## Discord oAuth Setup
**Discord Account Required** <br>
> Go to [Discord Developer Portal](https://discord.com/developers/applications) <br >
> Create a new application <br>
> Copy and store the `Client ID` from the oAuth2 Tab <br>
> Reset the `Client Secret` <br>
> Copy and store the `Client Secret` <br>
> Add a redirect to `https://127.0.0.1:5000/oauth/callback` (or the URL of your server + `/oauth/callback`<br>
> Go to the `Bots` Tab and click on `Add Bot` <br>
> Click on `Reset Token`, Copy and store the `Token`

<br><br>
## Config.py
**Open File:** config.py <br>
> Change `TOKEN = "DISCORD_TOKEN"` where `DISCORD_TOKEN` is the **Token** stored from the Bot Tab <br>
> Change `CLIENT_SECRET = "SECRET"` where `SECRET` is the **Client Secret** stored from the oAuth2 Tab <br>
> Change the variable `OAUTH_URL` after `?client_id=` and before `&redirect_uri=` to the **Client ID** from the oAuth2 Tab


That should be it :)
