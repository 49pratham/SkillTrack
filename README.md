# Cognitive Skills & Student Performance Dashboard

This project analyzes synthetic student data, builds ML models to predict performance, clusters students into learning personas, and provides an interactive Next.js dashboard.

---

## 📂 Project Structure
- `notebooks/analysis.ipynb` – Data generation, EDA, ML, clustering.
- `data/sample_students.csv` – Synthetic dataset (first 20 rows).
- `dashboard/` – Next.js frontend dashboard.
- `dashboard/public/data/students.json` – Exported data for dashboard.

---

## ⚙️ Setup Instructions

### 1. Backend (Data + Notebook)
```bash
# Clone repo
git clone <your-repo-url>
cd cognitive-dashboard

# Python env
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# Install requirements
pip install -r requirements.txt

# Launch notebook
jupyter notebook notebooks/analysis.ipynb
The notebook will:
Generate a synthetic student dataset.
Perform exploratory data analysis (EDA) & correlations.
Train a RandomForestRegressor to predict assessment_score.
Cluster students into learning personas (KMeans).
Export processed data to:
data/sample_students.csv (CSV preview).
dashboard/public/data/students.json (used by the dashboard).
