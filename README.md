# Cognitive Skills & Student Performance Dashboard

An end-to-end data science project that analyzes synthetic student data, builds machine learning models to predict academic performance, identifies learning personas through clustering, and visualizes insights in an interactive Next.js dashboard.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [How to Run](#how-to-run)
- [Sample Output](#sample-output)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## 📖 Project Overview
This project demonstrates a complete data science workflow:
1. **Synthetic Data Generation**: Created a realistic dataset of 200 students with cognitive skills (comprehension, attention, focus, retention), engagement metrics, and assessment scores.
2. **Exploratory Data Analysis (EDA)**: Analyzed feature distributions, correlations, and trends using Pandas, NumPy, and Plotly.
3. **Predictive Modeling**: Trained a RandomForestRegressor to predict assessment scores from cognitive features.
4. **Clustering**: Applied KMeans to segment students into distinct learning personas based on their skill profiles.
5. **Interactive Dashboard**: Built a Next.js frontend with Recharts to visualize key metrics, predictions, and personas.

The project showcases full-stack capabilities: backend data science (Python) and frontend visualization (React/Next.js).

---

## ✨ Features
- **Synthetic Data Generator**: Customizable student data with realistic distributions and correlations.
- **Interactive EDA**: Correlation heatmaps and distribution plots (in Jupyter notebook).
- **Performance Prediction**: RandomForestRegressor model with evaluation metrics (R², RMSE).
- **Learning Persona Clustering**: KMeans clustering (k=3) to identify student archetypes.
- **Data Export**: Processed data saved as CSV and JSON for downstream use.
- **Next.js Dashboard**: Responsive UI with:
  - Overview statistics (total students, average scores, etc.)
  - Skill distribution bar chart
  - Attention vs. engagement scatter plot
  - Radar chart for persona profiling
  - Detailed student table with search/sort
  - Automated insights panel
- **Reproducible Environment**: Requirements file and virtual environment setup.

---

## 🛠️ Technologies Used
**Backend/Data Science:**
- Python 3.12
- Pandas, NumPy
- Scikit-learn (RandomForestRegressor, KMeans, train_test_split)
- Matplotlib, Plotly
- Jupyter Notebook

**Frontend/Dashboard:**
- Next.js 14.2.5
- React 18.2.0
- Recharts 2.12.7 (for data visualization)
- JavaScript/ES6

**Tools & Practices:**
- Git/GitHub for version control
- Virtual environment (.venv)
- Modular code organization

---

## 📂 Project Structure
```
SkillTrack/
├── notebooks/
│   └── analysis.ipynb          # Jupyter notebook: data generation, EDA, ML, clustering
├── data/
│   └── sample_students.csv     # Exported synthetic dataset (first 20 rows)
├── dashboard/                  # Next.js frontend application
│   ├── components/
│   │   ├── Overview.js         # Key statistics cards
│   │   ├── BarChartSkill.js    # Skill distribution visualization
│   │   ├── ScatterAttention.js # Attention vs. engagement scatter plot
│   │   ├── RadarProfile.js     # Persona profiling radar chart
│   │   ├── StudentTable.js     # Searchable/sortable student data table
│   │   └── Insights.js         # Automated insights generation
│   ├── pages/
│   │   ├── _app.js             # Custom Next.js app
│   │   └── index.js            # Main dashboard page
│   ├── public/
│   │   └── data/
│   │       └── students.json   # Exported student data for dashboard
│   ├── styles/
│   │   └── globals.css         # Global styling
│   ├── package.json            # Frontend dependencies & scripts
│   └── next.config.js          # Next.js configuration
├── .gitignore
├── requirements.txt            # Python dependencies
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Backend (Data + Notebook)
```bash
# Clone repository
git clone https://github.com/49pratham/SkillTrack.git
cd SkillTrack

# Create and activate virtual environment
python -m venv .venv
# Windows:
# .venv\Scripts\activate
# Unix/MacOS:
source .venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Launch Jupyter notebook
jupyter notebook notebooks/analysis.ipynb
```
**Notebook Execution:**
- Run cells sequentially to:
  1. Generate synthetic student dataset (`data/sample_students.csv`)
  2. Perform exploratory data analysis (correlation heatmap)
  3. Train RandomForestRegressor model (predicts assessment_score)
  4. Apply KMeans clustering (adds `persona` column)
  5. Export processed data to `dashboard/public/data/students.json`

### 2. Frontend (Dashboard)
```bash
# Navigate to dashboard directory
cd dashboard

# Install Node.js dependencies
npm install

# Start development server
npm run dev
```
The dashboard will be available at [http://localhost:3000](http://localhost:3000).

---

## ▶️ How to Run the Full Project
1. **Backend First**: Complete the backend setup and run the notebook through all cells to generate the latest `students.json`.
2. **Frontend**: While the backend is running (or after data generation), start the Next.js development server.
3. **View Dashboard**: Open [http://localhost:3000](http://localhost:3000) in your browser to see the interactive visualizations.

> 💡 **Note**: The dashboard automatically loads the most recently exported `students.json`. Re-run the notebook export cells to update the dashboard with new analyses.

---

## 📊 Sample Output
The dashboard displays:
- **Overview Cards**: Total students, average assessment score, average engagement time, and persona distribution.
- **Bar Chart**: Average cognitive skill scores per persona.
- **Scatter Plot**: Relationship between attention scores and engagement time, colored by persona.
- **Radar Chart**: Comparative skill profiles of each learning persona.
- **Student Table**: Searchable, sortable table with all student data and predicted scores.
- **Insights Panel**: Automated observations (e.g., "Persona 2 shows highest retention but lowest engagement").

*(Actual visualizations depend on the random seed; re-running the notebook with different seeds yields varied but consistent patterns.)*

---

## 🔮 Future Improvements
- **Model Enhancement**: Experiment with XGBoost or neural networks for better prediction accuracy.
- **Feature Engineering**: Add interaction terms or polynomial features for cognitive skills.
- **Dashboard Enhancements**:
  - Add time-series simulation to track student progress.
  - Implement filtering by class or persona.
  - Export dashboard views as PDF/PNG.
- **Deployment**:
  - Containerize with Docker for consistent deployment.
  - Deploy backend as a FastAPI service and frontend on Vercel/Netlify.
- **Real Data Integration**: Adapt pipeline to work with actual student performance datasets (with proper anonymization).
- **User Authentication**: Add login system for personalized dashboards (in educational institution context).

---

## 📄 License
MIT

---

## 🙌 Acknowledgements
- Synthetic data generation inspired by educational data mining literature.
- Visualization components built with Recharts library.
- Created as a portfolio piece to demonstrate full-stack data science skills.
