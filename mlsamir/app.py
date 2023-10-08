import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from flask import Flask, render_template, request

# dummy intrest data 
interest_data = pd.DataFrame({
    'projects': ['Quantum Computing', 'Social Science', 'Volunteer Management App', 'E-commerce Website', 'Weather Forecasting', 'Are We Alone In Universe?', 'Landslide Reporter'],
    'Interests': ['space', 'Environment', 'Society', 'Web', 'mobile', 'Android', 'Programming']
})

# Sample user preferences
initial_user_preferences = {
    'space': 1,
    'Environment': 0,
    'Society': 1,
    'Web': 0,
    'mobile': 1,
    'Android': 0,
    'Programming': 1,
}


# Demo for the project to be given according to the intrest above
project_interests = {
    'Quantum Computing': ['space', 'Programming'],
    'Social Science': ['Environment', 'Society'],
    'Volunteer Management App': ['Society', 'Web'],
    'E-commerce Website': ['Web', 'mobile'],
    'Weather Forecasting': ['Android', 'Programming'],
    'Are We Alone In The Universe': ['space', 'Environment'],
    'Landslide Reporter': ['Environment', 'society'],
}


# converting to the numerical features
tfidf_vectorizer = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf_vectorizer.fit_transform(interest_data['Interests'])


cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

# creating a flask app
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get user data from index html form
        user_form_preferences = {}
        for interest in interest_data['Interests']:
            user_form_preferences[interest] = int(request.form.get(interest, 0))

        # creating user peferences based on data
        user_profile = [user_form_preferences[interest] for interest in interest_data['Interests']]
        weighted_scores = cosine_sim.dot(user_profile)

        # Create a DataFrame to store interest titles and their weighted scores
        interest_scores = pd.DataFrame({'Interest': interest_data['Interests'], 'Weighted_Score': weighted_scores})
        recommended_interests = interest_scores.sort_values(by='Weighted_Score', ascending=False)

        # recommand the intrest to the users
        suggested_interest = recommended_interests.iloc[0]['Interest']

        # suggest the projects
        suggested_projects = []
        for project, interests in project_interests.items():
            if suggested_interest in interests:
                suggested_projects.append(project)
# render the template with the intrest 
        return render_template('index.html', interest_data=interest_data, suggested_projects=suggested_projects)

    return render_template('index.html', interest_data=interest_data)
# run the app.py on the local host at the port 49
if __name__ == '__main__':
    app.run(debug=False, port=49)
