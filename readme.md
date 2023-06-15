# Jobbsokeren Backend

Jobbsokeren is a backend service designed to assist job seekers. It provides various APIs to facilitate job application processes using OpenAI.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/matsgund/jobbsokeren-be.git
```

2. Navigate to the project directory:
```bash
cd jobbsokeren-be
```

3. Install the dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm start
```

The server runs on port 3000 by default.

## Documentation
- [Swagger](https://jobbsoknader.no/api-docs) -Link to swagger documentation

## API Endpoints

- `POST /api/firebase/firebase-store-cv-content`: Stores CV content in Firebase.
- `POST /api/mailchimp/subscribe-to-mailchimp`: Stores job application data in Firebase.
- `POST /job-application-editor/job-application-data`: Fetches job application data.
- `POST /job-application-editor/generate-export-file`: Generates a PDF or DOCX file from HTML data.

## Deployment

Deployed to azure app service using github actions.

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [Firebase](https://firebase.google.com/) - Database service
- [Mailchimp](https://mailchimp.com/) - Email service
- [OpenAI](https://openai.com/) - AI service


## Authors

- **Mats Gundersen** - *Initial work* - [matsgund](https://github.com/matsgund)



