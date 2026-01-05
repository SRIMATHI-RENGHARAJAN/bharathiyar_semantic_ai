# Bharathiyar AI - Semantic Song Finder

A web application to search and explore Mahakavi Bharathiyar's Tamil poems using semantic search. Instead of matching exact keywords, the app understands the meaning behind your query and finds relevant poems by theme or concept.

## Tech Stack

**Frontend:** React, TypeScript, Vite, Tailwind CSS

**Backend:** Python, FastAPI, Sentence Transformers (LaBSE model)

## Setup

### Prerequisites
- Node.js 18+
- Python 3.7+

### Installation

1. Clone the repository
```bash
git clone https://github.com/SRIMATHI-RENGHARAJAN/Bharathiyar_AI.git
cd Bharathiyar_AI
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd backend
pip install fastapi uvicorn sentence-transformers torch pydantic
```

### Running

1. Start the backend
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

2. Start the frontend (new terminal)
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Project Structure

```
├── backend/
│   └── main.py           # FastAPI server with semantic search
├── src/
│   ├── components/       # React components
│   ├── data/             # Song dataset
│   └── hooks/            # Custom hooks
├── index.html
└── package.json
```

## License

MIT
