import requests #dependency

url = "https://discordapp.com/api/webhooks/1090303823119130786/cWrwFU6xs77q8dnOsJEHwgxLw-Xn3Bq_bwgkWFujMGIaPo4y1Lf7zfom1W-mGB5-W-VS" #webhook url

#for all params, see https://discordapp.com/developers/docs/resources/webhook#execute-webhook
data = {
    "content" : "this is a test",
    "username" : "Hello World"
}

#leave this out if you dont want an embed
#for all params, see https://discordapp.com/developers/docs/resources/channel#embed-object
data["embeds"] = [
    {
        "description" : "text in embed",
        "title" : "embed title"
    }
]

result = requests.post(url, json = data)

try:
    result.raise_for_status()
except requests.exceptions.HTTPError as err:
    print(err)
else:
    print("Payload delivered successfully, code {}.".format(result.status_code))

#this is the webhook to my debug log
#https://discordapp.com/api/webhooks/1090303823119130786/cWrwFU6xs77q8dnOsJEHwgxLw-Xn3Bq_bwgkWFujMGIaPo4y1Lf7zfom1W-mGB5-W-VS