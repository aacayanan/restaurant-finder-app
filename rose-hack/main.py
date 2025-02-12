from flask import Flask, request, jsonify, abort
from flask_cors import CORS
import os
import requests
from dotenv import find_dotenv, load_dotenv

# Global Variable to store JSON after API Request
yelp_data = {}
offset = 0
location = ""
attributes = []

# Localhost ports and request handling
app = Flask(__name__)
cors = CORS(app, origins='*')
application = app

# Yelp Fusion API requests
def restaurantGeneration(location, attributes):
    url = f"https://api.yelp.com/v3/businesses/search?location=" + location + "&term=fastfood"

    for att in attributes:
        print(att)
        url += f"&categories={att}"

    if (offset > 0):
        url += f"&offset={10 * offset}"

    print(url)

    dotenv_path = find_dotenv()
    load_dotenv(dotenv_path)
    auth_key = os.getenv("YELP_API_KEY")

    headers = {
        "accept": "application/json",
        "authorization": f"Bearer {auth_key}"
    }

    response = requests.get(url, headers=headers)
    print(url)
    return response.json()


@app.route('/getStartedButtonPress', methods=['POST'])
def getStartedButtonPress():
    return None

@app.route('/getText', methods=['POST'])
def getText():
    global yelp_data, offset, location, attributes

    print(f"getText offset={offset}")
    offset = 0
    data = request.get_json()  # Parse the JSON body
    location = data.get('location', '').replace(' ', '-')  # Replace spaces with dashes
    raw_attributes = data.get('attributes', {})  # Extract 'attributes' dictionary from the request

    if location:  # Check if location is provided
        # Create a list of keys where the value is True
        attributes = [key for key, value in raw_attributes.items() if value]

        # Pass the location and filtered attributes to the restaurantGeneration function
        result = restaurantGeneration(location, attributes)
        yelp_data = result
    else:
        print("Error: No location passed.")


@app.route('/skibidi', methods=['GET'])
def skibidi():
    global yelp_data, offset, location, attributes

    print(f"skibidi offset={offset}")

    try:
        meow = yelp_data["businesses"].pop(0)
    except:
        offset += 1
        if offset > 0:
            print(f"new yelp_data! offset={offset}")
            yelp_data = restaurantGeneration(location, attributes)
        abort(500)

    return meow


@app.route('/mtest')
def mtest():
    return "meow"


@app.route('/')
def root_route():
    return "Root Route"


if __name__ == '__main__':
    app.run(debug=True, port=8080)
