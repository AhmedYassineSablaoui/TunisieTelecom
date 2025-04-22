# TunisieTelecom

A network management application for Tunisie Telecom with a Django backend and React frontend.

## Features
- Backend: Django REST Framework for network configuration APIs.
- Frontend: React interface for managing network settings.


## Setup Instructions

### Prerequisites
- Python 3.x
- Node.js and npm
- Git

### Backend Setup
1. Navigate to the backend:
   cd NetworkManagement
2. Activate virtual environment:
venv\Scripts\activate
3. Install dependencies:
  pip install -r requirements.txt
4. Apply Migrations: 
 python manage.py migrate
5. Run the server: 
python manage.py runserver

### Frontend Setup
1. Navigate to the frontend:
cd tuntel 
2. Install dependencies:
npm install 
3. Start the development server:
npm start 

### Running the App
Backend: http://localhost:8000
Frontend: http://localhost:3000

### License
MIT License