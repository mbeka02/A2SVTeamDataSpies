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

dis

# # Trying to normalize data
# normalized_disease_symptoms_df = pd.get_dummies(disease_symptoms_df, columns=disease_symptoms_df.columns[1:])
# print("Normalized Disease Symptoms")
# print(normalized_disease_symptoms_df.head())

# # print(disease_symptoms_df.to_json(orient='records'))

# # ChatGPT implementation
# # Initialize a set to store all unique symptoms
# all_symptoms = set()

# # Get symptoms from each row
# for column in disease_symptoms_df.columns[1:]: # Gets each column name
#     all_symptoms.update(disease_symptoms_df[column].unique()) # Gets each unique symptom

# # Add column for each symptom
# df2 = disease_symptoms_df.copy()

# for symptom in all_symptoms:
#     df2[symptom] = df2['Symptom_1']

# # For every disease update the symptom column with 1
# for index, row in df2.iterrows():
#     # Update each symptom
#     for symptom in all_symptoms:
#         if row[symptom] == symptom:
#             df2.at[index, symptom] = 1
#         else:
#             df2.at[index, symptom] = 0

# print(df2.head())
# print(df2.loc["Symptom_1", "itching"])

# df3 = df2.copy()
# df3 = df3.iloc[:, 18:]

# print(df3.head())

# for index, row in df3.iterrows():
#     print(row.loc[list(df2.iloc[index, 1:18])])

# print(df3.head())


