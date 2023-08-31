import pandas as pd;

# Load the dataset
disease_symptoms_df = pd.read_csv('./csvData/disease_symptoms.csv', sep=",")
print("Disease Symptoms")
print(disease_symptoms_df.head())

print("Disease Medicine")
disease_medicine_df = pd.read_csv('./csvData/disease_medicine2_utf8only.csv', sep=",")
print(disease_medicine_df.head())

print("Disease Precaution")
disease_precaution_df = pd.read_csv('./csvData/disease_precaution.csv', sep=",")
print(disease_precaution_df.head())

print("Disease Risk Factors")
disease_risk_factors_df = pd.read_csv('./csvData/disease_riskFactors2_utfonly.csv', sep=",")
print(disease_risk_factors_df.head())