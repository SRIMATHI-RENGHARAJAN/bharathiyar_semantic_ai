# Bharathiyar AI - Semantic Song Finder

A web application to search and explore Mahakavi Bharathiyar's Tamil poems using semantic search. Instead of matching exact keywords, the app understands the meaning behind your query and finds relevant poems by theme or concept.

## About

Mahakavi Bharathiyar (1882-1921) was one of the greatest Tamil poets and freedom fighters. This application makes his poetry accessible through modern AI-powered search. You can search in English or Tamil, and the app will find poems that match your query's meaning - not just the words.

For example, searching "happiness" will also find poems about "joy" and "bliss", even if those exact words don't appear in the text.

## Features

- Semantic search using LaBSE multilingual model
- Search in English or Tamil
- Quick search buttons for popular themes (freedom, love, courage, Krishna, women, knowledge)
- Displays original Tamil verses with English and Tamil meanings
- Dark theme UI with responsive design

## Tech Stack

**Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui

**Backend:** Python, FastAPI, Sentence Transformers, PyTorch

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

## How It Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   User Query    │────▶│   FastAPI       │────▶│   LaBSE Model   │
│  (English/Tamil)│     │   Backend       │     │   (Embeddings)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                │                        │
                                ▼                        ▼
                        ┌─────────────────┐     ┌─────────────────┐
                        │ Cosine Similarity│◀───│ Song Embeddings │
                        │    Ranking      │     │  (Pre-computed) │
                        └─────────────────┘     └─────────────────┘
                                │
                                ▼
                        ┌─────────────────┐
                        │  Top 5 Results  │
                        │  (React Cards)  │
                        └─────────────────┘
```

1. The backend loads the LaBSE (Language-agnostic BERT Sentence Encoder) model
2. All song texts are converted into vector embeddings at startup
3. When you search, your query is also converted to a vector
4. Cosine similarity is computed between your query and all songs
5. The top 5 most similar songs are returned

## Project Structure

```
├── backend/
│   └── main.py           # FastAPI server with semantic search
├── src/
│   ├── components/
│   │   ├── SearchInterface.tsx
│   │   └── SongCard.tsx
│   ├── data/
│   │   └── bharathiyar-songs.ts
│   └── hooks/
│       └── useSemanticSearch.ts
├── index.html
└── package.json
```

## Sample Queries

| Query | Finds poems about |
|-------|-------------------|
| freedom | Independence, patriotism |
| love | Affection, family, devotion |
| courage | Bravery, determination |
| Krishna | Spirituality, divine love |
| women | Empowerment, equality |
