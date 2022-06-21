from flask import Flask
from flask_cors import cross_origin

app = Flask(__name__)


@app.route('/api', methods=['GET'])
@cross_origin()
def api():
    return{
        'userID': 1,
        'title': 'Flask React Application',
        'completed': False

    }
