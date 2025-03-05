import nltk
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.stem import WordNetLemmatizer
from transformers import BartTokenizer, BartForConditionalGeneration
import torch

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')
nltk.download('averaged_perceptron_tagger')

model_name = 'facebook/bart-large-cnn'
tokenizer = BartTokenizer.from_pretrained(model_name)
model = BartForConditionalGeneration.from_pretrained(model_name)

corpus = " "

sentences = sent_tokenize(corpus)

stopwords = set(stopwords.words("english"))
lemmatizer = WordNetLemmatizer()
filtered_sentences = []
for sentence in sentences:
    tokens = word_tokenize(sentence.lower())
    filtered_tokens = [lemmatizer.lemmatize(word) for word in tokens if word not in stopwords]
    filtered_sentence = " ".join(filtered_tokens)
    filtered_sentences.append(filtered_sentence)

bullet_points = []
for sentence in filtered_sentences:
    input_ids = tokenizer.encode(sentence, add_special_tokens=True, truncation=True, max_length=512, padding='max_length')
    input_ids = input_ids[:512]  
    input_ids = torch.tensor(input_ids).unsqueeze(0)

    summary_ids = model.generate(input_ids, num_beams=4, min_length=10, max_length=150, length_penalty=2.0)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

    bullet_points.append(summary.strip())

if not bullet_points:
    print("No bullet points found.")
else:
    print("Bullet Points:")
    for point in bullet_points:
        print("- " + point)
