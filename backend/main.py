from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

frontPageData = ["", "", "", ""]

@app.route('/api/getStartedButtonPress', methods=['POST'])
def getStartedButtonPress():

    return None

if __name__ == '__main__':
    app.run(debug=True, port=8080)