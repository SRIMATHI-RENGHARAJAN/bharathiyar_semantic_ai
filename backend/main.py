
# backend.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer, util
import torch

# --- Mock Data (your Bharathiyar songs) ---
bharathiyar_songs = [
    {
        "id": "1",
        "title_ta": "சின்னஞ்சிறு கிளியே",
        "lines_ta": """சின்னஞ்சிறு கிளியே குயிலே, சித்திரப் பொன்னாங்கண்ணியே!
என் செல்வக் குழந்தையே கண்ணே! என் செல்லக் குழந்தையே!
நின்னைக் காணாத நாளெல்லாம் நினைவில் வாழ்ந்திடுவேன்!
உன்னோடு இருக்கையில் உயிரோடு வாழ்ந்திடுவேன்!""",
        "meaning_en": "O my little parrot, little nightingale, my gem-like darling child! Days without you, I live only in memory; when with you, I live truly alive.",
        "meaning_ta": "சின்னக் கிளி போன்ற இனிய குழந்தையே; உன்னை காணாத நாள் நினைவில் வாழ்கிறேன்; உன்னோடு இருக்கும் போது உயிரோடு வாழ்கிறேன்.",
        "tags": ["love", "child", "affection", "family"]
    },
    {
        "id": "2",
        "title_ta": "வந்தே மாதரம்",
        "lines_ta": """வந்தே மாதரம், வந்து வந்தே மாதரம்!
சுயதேசம் நமதே! சுதந்திரம் நமதே! வந்தே மாதரம்!""",
        "meaning_en": "Vande Mataram! This is our motherland, freedom is ours, we salute you Mother!",
        "meaning_ta": "வந்தே மாதரம்! இது நம் தாய் நாடு; சுதந்திரம் நமதே; தாயே உனக்கு வணக்கம்!",
        "tags": ["patriotism", "freedom", "nation"]
    },
    {
        "id": "3",
        "title_ta": "ஆச்சுதன் கண்டேன்",
        "lines_ta": """ஆச்சுதன் கண்டேன் கண்ணே கண்ணே!
ஆனந்தக் கண்டேன், ஆனந்தக் கண்டேன்!""",
        "meaning_en": "I have seen Lord Krishna (Achudhan), I have seen bliss, joy beyond compare!",
        "meaning_ta": "கண்ணனை கண்டேன்; பேரானந்தத்தை அடைந்தேன்.",
        "tags": ["devotion", "krishna", "bhakti", "joy"]
    },
    {
        "id": "4",
        "title_ta": "கண்ணன் என் கதை",
        "lines_ta": """கண்ணன் என் கதையல்லவோ? கண்ணனை வாழ்த்துவோம்!
வண்ணமிகு மலரினை, வாசனை சேர்த்துவோம்!""",
        "meaning_en": "Is not my story all about Krishna? Let us praise him with fragrant flowers!",
        "meaning_ta": "என் கதை எல்லாம் கண்ணனைப் பற்றியது தான்; அவரை மலர்களால் வணங்குவோம்.",
        "tags": ["krishna", "devotion", "bhakti"]
    },
    {
        "id": "5",
        "title_ta": "எழுந்திரு மானிடா",
        "lines_ta": """எழுந்திரு மானிடா! இனி உனக்குத் தாழ்ச்சி இல்லை.
சுதந்திரத் தீபமிதோ! சுடரொளி தரும் நாள் இது!""",
        "meaning_en": "Rise up, human! No more slavery for you. The lamp of freedom shines today!",
        "meaning_ta": "மனிதனே எழுந்திரு; அடிமைத்தனம் இனி இல்லை; சுதந்திர தீபம் இன்று ஒளிர்கிறது.",
        "tags": ["freedom", "revolution", "patriotism"]
    },
    {
        "id": "6",
        "title_ta": "பாருக்கெல்லாம்",
        "lines_ta": """பாருக்கெல்லாம் வாழந்தந்த பசும்பொன் தமிழ் நாடே!
உலகுக்கு எல்லாம் தாய் நீயே! உன்னையே வாழ்த்துவோம்!""",
        "meaning_en": "O golden Tamil land that gave life to all the world! You are the mother of all, we praise you!",
        "meaning_ta": "உலகுக்கு உயிர் தந்த பொற்கொடி தமிழ் நாடு; நீயே உலகின் தாய்.",
        "tags": ["tamil", "language", "motherland", "culture"]
    },
    {
        "id": "7",
        "title_ta": "கண்ணன் பாட்டு",
        "lines_ta": """முத்துக்கற்கள் மலரில் வீசும் காற்றே!
என் கண்ணன் வந்தானடி! ஓடுவோம் ஓடுவோம்!""",
        "meaning_en": "O breeze passing through pearls and flowers! My Krishna has come, let us run to see him!",
        "meaning_ta": "முத்தும் மலரும் சூழ்ந்த காற்றே, என் கண்ணன் வந்துவிட்டார்.",
        "tags": ["krishna", "love", "devotion"]
    },
    {
        "id": "8",
        "title_ta": "ஜெய பாரதம்",
        "lines_ta": """ஜெய பாரதம்! ஜெய ஜெய பாரதம்!
இந்திய தேசம் வெல்லும் நாளிது!""",
        "meaning_en": "Victory to India! Victory! This is the day our nation triumphs!",
        "meaning_ta": "இந்திய தேசம் வெற்றி பெறும் நாள் இன்று.",
        "tags": ["patriotism", "freedom", "india"]
    },
    {
        "id": "9",
        "title_ta": "சகோதரிகள்",
        "lines_ta": """பெண்ணே! உன் சுதந்திரம் எங்கள் சுதந்திரம்.
நீயும் எழுந்து நில்! வானத்தை வெல்லுவாய்!""",
        "meaning_en": "O woman! Your freedom is our freedom. Rise up, you too shall conquer the skies!",
        "meaning_ta": "பெண்களின் சுதந்திரம் சமூக சுதந்திரமே. எழுந்திரு, வானத்தை வெல்லுவாய்.",
        "tags": ["women", "freedom", "empowerment"]
    },
    {
        "id": "10",
        "title_ta": "தேனிசை பாடல்",
        "lines_ta": """தேனிசை பாடுவோம்! தமிழிசை பாடுவோம்!
மெய்ஞ்ஞானத் தந்தையை வாழ்த்துவோம்!""",
        "meaning_en": "Let us sing sweet honey-like songs! Let us praise Tamil music and the father of wisdom!",
        "meaning_ta": "தேனிசை போல இனிய பாடல்கள் பாடுவோம்; தமிழிசையை வாழ்த்துவோம்.",
        "tags": ["music", "tamil", "culture"]
    },
    {
        "id": "11",
        "title_ta": "விடுதலை",
        "lines_ta": """விடுதலை! விடுதலை! எங்கள் சுதந்திரம்!
நாட்டெங்கும் பாடுவோம்! நாட்டெங்கும் வாழ்வோம்!""",
        "meaning_en": "Freedom! Freedom! Our liberty! We shall sing and live it across the nation!",
        "meaning_ta": "சுதந்திரம் எங்கும் பரவட்டும்; அதைப் பாடி வாழ்வோம்.",
        "tags": ["freedom", "independence", "revolution"]
    },
    {
        "id": "12",
        "title_ta": "சுடர் ஒளி",
        "lines_ta": """சுடர் ஒளி தந்திடும் சூரியனே!
எங்களை எழுப்பிடும் வீரனே!""",
        "meaning_en": "O Sun who gives light! O hero who awakens us!",
        "meaning_ta": "ஒளி தரும் சூரியனே, எங்களை எழுப்பும் வீரனே.",
        "tags": ["nature", "inspiration", "sun"]
    },
    {
        "id": "13",
        "title_ta": "பாரத தேசம்",
        "lines_ta": """பாரத தேசம், பவானி தேசம்!
பவனி செய்யும் புனித தேசம்!""",
        "meaning_en": "India, the sacred land, where noble pilgrimages take place!",
        "meaning_ta": "புனிதமான பாரத தேசம்; யாத்திரை நடைபெறும் தலம்.",
        "tags": ["india", "spirituality", "nation"]
    },
    {
        "id": "14",
        "title_ta": "உயிர் எழுச்சி",
        "lines_ta": """உயிரே எழுச்சி கொள்! உழைப்பே வளம் தரும்!
உலகமே உனது! உழைப்பால் வெல்லுவாய்!""",
        "meaning_en": "O life, rise up! Labor brings wealth. The whole world is yours through work!",
        "meaning_ta": "உயிரே, எழுந்து உழை; உழைப்பால் உலகை வெல்லலாம்.",
        "tags": ["labor", "hardwork", "motivation"]
    },
    {
        "id": "15",
        "title_ta": "கடவுள் வாழ்த்து",
        "lines_ta": """கடவுளே வாழ்த்து, கருணை தந்தருள்வாய்!
காலம் எங்கள் பக்கம் சாய்ந்து காப்பாய்!""",
        "meaning_en": "O Lord, bless us! Show mercy, let time favor us and protect us.",
        "meaning_ta": "கடவுளே, அருள் புரிந்து வாழ்த்து; காலம் எங்களை காப்பாற்றட்டும்.",
        "tags": ["devotion", "prayer", "faith"]
    },
    {
        "id": "16",
        "title_ta": "நேசம்",
        "lines_ta": """நேசமே வாழ்வின் மூலமாமே!
நீயே மனித குலம் தழைக்கத் துணை.""",
        "meaning_en": "Love is the root of life; it is love that helps mankind flourish.",
        "meaning_ta": "வாழ்வின் அடிப்படை நேசம் தான்; அது மனித குலம் தழைக்க உதவுகிறது.",
        "tags": ["love", "humanity", "philosophy"]
    },
    {
        "id": "17",
        "title_ta": "தாய்",
        "lines_ta": """தாயே! உன் அருளால் தான் வாழ்வோம்.
உன் கரம் பிடித்தாலே நாமும் வெல்வோம்.""",
        "meaning_en": "Mother! With your grace we live, by holding your hand we succeed.",
        "meaning_ta": "தாயின் அருளால் வாழ்கிறோம்; அவள் கையைப் பிடித்தால் வெற்றியடைவோம்.",
        "tags": ["mother", "family", "love"]
    },
    {
        "id": "18",
        "title_ta": "இளமையர் பாடல்",
        "lines_ta": """இளமையரே! எழுந்திருங்கள்!
உலகம் உங்கள்தே! உழைப்பால் வெல்லுங்கள்!""",
        "meaning_en": "O youth! Rise up! The world is yours, conquer it through labor!",
        "meaning_ta": "இளையோர்கள் எழுந்திருங்கள்; உழைப்பால் உலகை வெல்லுங்கள்.",
        "tags": ["youth", "motivation", "hardwork"]
    },
    {
        "id": "19",
        "title_ta": "பசுமை",
        "lines_ta": """பசுமை தரும் பூமியே! உன்னையே வாழ்த்துவோம்.
வளமளிக்கும் மண்ணே! உன்னையே போற்றுவோம்.""",
        "meaning_en": "O green earth! We praise you. O fertile soil! We worship you.",
        "meaning_ta": "பசுமை தரும் பூமியை வாழ்த்துவோம்; வளமளிக்கும் மண்ணை போற்றுவோம்.",
        "tags": ["nature", "earth", "environment"]
    },
    {
        "id": "20",
        "title_ta": "சுதந்திரம்",
        "lines_ta": """சுதந்திரம் நமதே! சுதந்திரம் நமதே!
அதை அடைய பாடுவோம்! உயிரை கொடுப்போம்!""",
        "meaning_en": "Freedom is ours! We shall sing for it, we shall even give our lives for it!",
        "meaning_ta": "சுதந்திரம் நமதே; அதை பெற உயிரையே கொடுப்போம்.",
        "tags": ["freedom", "sacrifice", "nation"]
    }
]

# --- FastAPI setup ---
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development; restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Request model ---
class SearchRequest(BaseModel):
    query: str

# --- Load SentenceTransformer model ---
print("Loading LaBSE model...")
model = SentenceTransformer('sentence-transformers/LaBSE')

# --- Precompute song embeddings for fast search ---
print("Computing embeddings for all songs...")
song_texts = [f"{song['title_ta']} {song['lines_ta']} {song['meaning_en']}" for song in bharathiyar_songs]
song_embeddings = model.encode(song_texts, convert_to_tensor=True)
print("Embeddings ready ✅")

# --- Routes ---
@app.get("/")
def root():
    return {"message": "Bharathiyar AI Backend with Semantic Search is running ✅"}

@app.post("/search")
def semantic_search(request: SearchRequest):
    query = request.query.strip()
    if not query:
        # If query is empty, return all songs
        return {"results": bharathiyar_songs}

    # Compute embedding for the query
    query_embedding = model.encode(query, convert_to_tensor=True)

    # Compute cosine similarity with all songs
    cos_scores = util.cos_sim(query_embedding, song_embeddings)[0]

    # Get top 5 results
    top_results = torch.topk(cos_scores, k=min(5, len(bharathiyar_songs)))

    results = []
    for score, idx in zip(top_results.values, top_results.indices):
        song = bharathiyar_songs[idx.item()]
        results.append({**song, "score": score.item()})

    return {"results": results}
