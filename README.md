# 🎵 Bharathiyar AI - Semantic Song Finder

> **Discover the timeless verses of Mahakavi Bharathiyar through AI-powered semantic search**

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![FastAPI](https://img.shields.io/badge/FastAPI-0.103-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.7+-3776AB?logo=python)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss)

---

## 📖 About

**Bharathiyar AI** is a semantic search application that helps you explore the profound poetry of **Mahakavi Bharathiyar** (1882-1921), one of the greatest Tamil poets and freedom fighters. Unlike traditional keyword search, this app uses AI to understand the *meaning* behind your queries, allowing you to find poems by theme, emotion, or concept.

### ✨ Features

- 🔍 **Semantic Search** - Search by meaning, not just keywords (e.g., search "happiness" to find poems about "joy")
- 🌐 **Bilingual Support** - Search in English or Tamil, get results in both languages
- ⚡ **Instant Results** - Pre-computed embeddings enable lightning-fast search
- 🎨 **Beautiful UI** - Dark theme with saffron/gold accents honoring Indian aesthetics
- 🏷️ **Quick Tags** - Pre-defined buttons for popular themes like freedom, love, courage
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| shadcn/ui | UI Components |
| React Query | Data Fetching |

### Backend
| Technology | Purpose |
|------------|---------|
| FastAPI | REST API Framework |
| Python | Backend Language |
| LaBSE | Multilingual Sentence Embeddings |
| PyTorch | ML Framework |
| Sentence Transformers | Semantic Search |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.7+
- pip (Python package manager)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/SRIMATHI-RENGHARAJAN/Bharathiyar_AI.git
cd Bharathiyar_AI
```

#### 2. Install Frontend Dependencies
```bash
npm install
```

#### 3. Install Backend Dependencies
```bash
cd backend
pip install fastapi uvicorn sentence-transformers torch pydantic
```

### Running the Application

#### 1. Start the Backend Server
```bash
cd backend
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The backend will:
- Load the LaBSE multilingual model
- Pre-compute embeddings for all songs
- Start the API at `http://127.0.0.1:8000`

#### 2. Start the Frontend (in a new terminal)
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

## 🔧 How It Works

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

1. **User enters a query** (e.g., "songs about freedom")
2. **LaBSE model** converts the query into a 768-dimensional vector
3. **Cosine similarity** is computed against pre-computed song embeddings
4. **Top 5 most similar** songs are returned and displayed

---

## 📁 Project Structure

```
bharathiyar-ai/
├── backend/
│   └── main.py              # FastAPI server with semantic search
├── src/
│   ├── components/
│   │   ├── SearchInterface.tsx  # Main search UI
│   │   ├── SongCard.tsx         # Song display card
│   │   └── ui/                  # shadcn/ui components
│   ├── data/
│   │   └── bharathiyar-songs.ts # Song dataset (TypeScript)
│   ├── hooks/
│   │   └── useSemanticSearch.ts # Search API hook
│   └── pages/
│       └── Index.tsx            # Main page
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

---

## 🎯 Sample Queries

| Query | Finds poems about... |
|-------|---------------------|
| freedom | Independence, liberation, patriotism |
| love | Affection, family, devotion |
| courage | Bravery, strength, determination |
| Krishna | Divine love, spirituality, bhakti |
| women | Empowerment, equality, feminism |
| knowledge | Wisdom, education, enlightenment |

---

## 🙏 About Mahakavi Bharathiyar

**Subramania Bharathi** (1882-1921), popularly known as **Mahakavi Bharathiyar**, was a pioneering Tamil poet, freedom fighter, and social reformer. His works championed:

- 🇮🇳 **Indian Independence** - Wrote fiery patriotic songs
- 👩 **Women's Liberation** - Advocated for women's rights and education
- 🕊️ **Social Equality** - Fought against caste discrimination
- 🎵 **Literary Innovation** - Modernized Tamil poetry

His poems continue to inspire millions and are sung across Tamil Nadu to this day.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more Bharathiyar songs to the dataset
- Improve the UI/UX
- Add new features like favorites or sharing
- Fix bugs and improve performance

---

<div align="center">

**Built with ❤️ for Mahakavi Bharathiyar's eternal verses**

*"யாதும் ஊரே யாவரும் கேளிர்" - Every place is our home, everyone is our kin*

</div>
