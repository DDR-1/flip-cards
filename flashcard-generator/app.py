from flask import Flask, request, jsonify
from flask_cors import CORS
import ollama

app = Flask(__name__)
CORS(app)

@app.route('/generate_flashcards', methods=['POST'])
def generate_flashcards():
    text = request.json['text']
    num_flashcards = request.json['num_flashcards_limit']

    model_name = "mistral"
    prompt = f"""
    Generate {num_flashcards} flashcards on the topic "{text}". Each flashcard should be in the following format:
    Word: [word]
    Description: [description]
    
    Example:
    Word: Ephemeral
    Description: Lasting for a very short time.
    
    Word: Serendipity
    Description: The occurrence of events by chance in a happy or beneficial way.
    
    Now generate the flashcards:
    """

    response = ollama.chat(model=model_name, messages=[{"role": "user", "content": prompt}])
    flashcards_raw = response['message']['content']

    # Parse the response and format it into the desired structure
    flashcards = []
    idx = 0
    for item in flashcards_raw.split('\n\n'):
        if 'Word:' in item and 'Description:' in item:
            word = item.split('Word:')[1].split('Description:')[0].strip()
            description = item.split('Description:')[1].strip()
            flashcards.append({
                'id': idx,
                'title': word,
                'info': description
            })
            idx += 1

    response = {
        'flashcards': flashcards
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run()