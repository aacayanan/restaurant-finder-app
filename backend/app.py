import requests
import urllib
from flask import Flask
import json
import os

app = Flask(__name__)
auth_key = os.environ["YELP_KEY"]

@app.route("/")
def hello():
	return ":)"
@app.route("/api/<location>/<category>")
def search(location, category):
	url = "https://api.yelp.com/v3/businesses/search?"
	category = "Woman Owned " + category
	limit = 20
	
	dict = { "category": category,
		"location": location}
	for key in dict:
		url += key + "=" + urllib.parse.quote_plus(dict[key]) + "&"
	print(url)

	headers = {"Authorization": "Bearer " + auth_key,
		"accept": "application/json"}

	response = requests.get(url, headers=headers)
	print(response.text)
	return "Working so far."

@app.route('/api/atest', methods=['POST'])
def mtest():
    return "This is a test from the app.py file"