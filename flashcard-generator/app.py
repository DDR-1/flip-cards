from flask import Flask, request, jsonify
import main

app = Flask(__name__)

@app.route('/generate_flashcards', methods=['POST'])
def generate_flashcards():
    text = request.json['text']
    num_flashcards = request.json['num_flashcards_limit']

    flashcards = main.generate_flashcards(text, num_flashcards)

    response = {
        'flashcards': flashcards
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run()