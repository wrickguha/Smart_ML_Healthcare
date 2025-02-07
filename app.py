from flask import Flask, request,render_template
import numpy as np
import pandas as pd
import sklearn 
import pickle

model = pickle.load(open('model.pkl','rb'))
sc = pickle.load(open('standardscaler.pkl','rb'))
ms = pickle.load(open('minmaxscaler.pkl','rb'))
label_encoder = pickle.load(open('label_encoder.pkl', 'rb'))

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/predict",methods=["POST"])
def predict():
    Symptom_1 = request.form['Symptom_1']
    Symptom_2 = request.form['Symptom_2']
    Symptom_3 = request.form['Symptom_3']
    Symptom_4 = request.form['Symptom_4']

    feature_list = [
        label_encoder.transform([Symptom_1])[0],
        label_encoder.transform([Symptom_2])[0],
        label_encoder.transform([Symptom_3])[0],
        label_encoder.transform([Symptom_4])[0],
    ]
    single_predict = np.array(feature_list).reshape(1,-1)

    scaled_feature = ms.transform(single_predict)
    final_feature = sc.transform(scaled_feature)
    prediction = model.predict(final_feature)

    disease= {
        1: "Drug Reaction", 2:"Malaria", 3:"Allergy", 4:"Hypothyroidism", 5:"Psoriasis", 6:"GERD",
        7:"Chronic cholestasis", 8:"hepatitis A", 9:"Osteoarthristis", 10:"(vertigo) Paroymsal  Positional Vertig",
        11:"Hypoglycemia", 12:"Acne", 13:"Diabetes", 14:"Impetigo", 15:"Hypertension", 16:"Peptic ulcer diseae",
        17:"Dimorphic hemorrhoids(piles)", 18:"Common Cold", 19:"Chicken pox", 20:"Cervical spondylosis", 21:"Hyperthyroidism",
        22: "Urinary tract infection", 23:"Varicose veins", 24:"AIDS", 25:"Paralysis (brain hemorrhage)", 26:"Typhoid",
        27:"Hepatitis B", 28:"Fungal infection", 29:"Hepatitis C", 30:"Migraine", 31:"Bronchial Asthma", 32: "Alcoholic hepatitis",
        33:"Jaundice", 34:"Hepatitis E", 35:"Dengue", 36:"Hepatitis D", 37:"Heart attack", 38:"Pneumonia", 39:"Arthritis",
        40:"Gastroenteritis", 41:"Tuberculosis"
    }

    if prediction[0] in disease: 
        disease_on = disease[prediction[0]]
        result = "{} is the best crop to be cultivated right there". format(disease_on)
    else:
        result="Sorry we could not find your disease"
    return render_template('index.html',result=result)


if __name__ == "__main__":
    app.run(debug=True)