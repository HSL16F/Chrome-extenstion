# app.py
from flask import Flask, request

app = Flask(__name__)

@app.route('/process-text', methods=['POST'])
def process_text():
    # Parse the JSON data sent from the browser
    data = request.get_json()

    # Process the text data
    text = data['text']
    processed_text = text.upper()

    # Return the processed text as a JSON response
    return {'processed_text': processed_text}

print("Function runs successfully")