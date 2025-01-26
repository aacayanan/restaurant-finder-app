from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import string
import requests
from dotenv import find_dotenv, load_dotenv

# Yelp Fusion API requests

def restaurantGeneration():
    location = "riverside"
    attributes = []

    url = f"https://api.yelp.com/v3/businesses/search?location=" + location + "&term=restaurant"

    for att in attributes:
        url += f"&categories={att}"

    url += f"&limit=10"

    dotenv_path = find_dotenv()
    load_dotenv(dotenv_path)
    auth_key = str(os.getenv("YELP_API_KEY"))

    headers = {
        "accept": "application/json",
        "authorization": f"Bearer {auth_key}"
    }

    response = requests.get(url, headers=headers)

    return response.json()

# Localhost ports and request handling

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/api/getStartedButtonPress', methods=['POST'])
def getStartedButtonPress():

    return None

if __name__ == '__main__':
    app.run(debug=True, port=8080)