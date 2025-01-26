from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import string
import requests
from dotenv import find_dotenv, load_dotenv

# Global Variable to store JSON after API Request
yelp_data = {}

# Yelp Fusion API requests
def restaurantGeneration(location):
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

@app.route('/api/getText', methods=['POST'])
def getText():
    global yelp_data
    data = request.get_json()  # Parse the JSON body
    location = data.get('location', '')  # Extract 'location' from the request

    if location:  # Check if location is provided
        # Pass the location to the restaurantGeneration function
        result = restaurantGeneration(location)
        yelp_data = result
#         print(result)
        return jsonify({'success': True, 'result': result})
    else:
        return jsonify({'success': False, 'error': 'Location is required'}), 400

    return input_value

@app.route('/api/skibidi', methods=['GET'])
def skibidi():
    global yelp_data
    meow = yelp_data["businesses"].pop(0)
    print(meow)
    return meow

if __name__ == '__main__':
    app.run(debug=True, port=8080)