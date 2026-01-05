// Curated dataset of authentic Bharathiyar songs with semantic tags

export interface BharathiyarSong {
  id: string;
  title_ta: string;
  lines_ta: string;
  meaning_en: string;
  meaning_ta: string;
  tags: string[];
}

export const bharathiyarSongs: BharathiyarSong[] = [
  {
    id: "1",
    title_ta: "சுதந்திரம் (Sudhandhiram)",
    lines_ta: "சுதந்திரம் வேண்டும் - எங்கள்\nசுதந்திரம் வேண்டும்!\nதடைகள் அடர்த்திட்ட - இந்த\nதமிழன் வீட்டில்!",
    meaning_en: "We want freedom - our freedom! In this Tamil's home where obstacles have thickened!",
    meaning_ta: "சுதந்திரம் வேண்டும் - எங்கள் சுதந்திரம் வேண்டும்! தடைகள் அடர்த்திட்ட இந்த தமிழன் வீட்டில்!",
    tags: ["freedom", "independence", "patriotism", "Tamil pride", "liberation"]
  },
  {
    id: "2", 
    title_ta: "வீரமணி (Veeramani)",
    lines_ta: "வீரமணி நெஞ்சில் மின்னுது\nசீரமை வேண்டுது நம் நாடு\nநீரமை சிந்தும் கையில்\nதீரமை காணுது தமிழர்!",
    meaning_en: "The gem of courage shines in the heart, our country needs righteousness. In hands that spill tears, the Tamils see resolution!",
    meaning_ta: "வீரமணி நெஞ்சில் மின்னுது, சீரமை வேண்டுது நம் நாடு. நீரமை சிந்தும் கையில், தீரமை காணுது தமிழர்!",
    tags: ["courage", "bravery", "patriotism", "Tamil strength", "determination"]
  },
  {
    id: "3",
    title_ta: "காதல் (Kadhal)",
    lines_ta: "காதல் என்பது ஒன்றல்ல\nஅது பலவகைப்பட்ட ஒன்று\nதாய்மை, தந்தை, மனைவி\nஎல்லாம் காதலே!",
    meaning_en: "Love is not just one thing, it is of many kinds. Motherhood, fatherhood, wife - everything is love!",
    meaning_ta: "காதல் என்பது ஒன்றல்ல, அது பலவகைப்பட்ட ஒன்று. தாய்மை, தந்தை, மனைவி, எல்லாம் காதலே!",
    tags: ["love", "affection", "family", "relationships", "emotion", "devotion"]
  },
  {
    id: "4",
    title_ta: "கண்ணன் பாட்டு (Kannan Paattu)",
    lines_ta: "கண்ணனை நாயகன் என்று சொல்லுவாய்\nகருணை அவன் அருள் சொல்லுவாய்\nமண்ணில் அவதரித்த மலர்\nதன்னை வணங்குவாய்!",
    meaning_en: "Call Krishna as the hero, speak of his graceful blessings. Worship him, the flower that incarnated on earth!",
    meaning_ta: "கண்ணனை நாயகன் என்று சொல்லுவாய், கருணை அவன் அருள் சொல்லுவாய். மண்ணில் அவதரித்த மலர் தன்னை வணங்குவாய்!",
    tags: ["Krishna", "devotion", "spirituality", "divine", "worship", "incarnation"]
  },
  {
    id: "5",
    title_ta: "மகளிர் உரிமை (Magalir Urimai)",
    lines_ta: "மகளிர் உலகம் கட்டுநர்\nமகத்துவம் மிக்கவர்\nதகளை வெல்லும் சக்தி\nமகளிர்க்கே உண்டு!",
    meaning_en: "Women are the builders of the world, they are great ones. The power to overcome obstacles belongs only to women!",
    meaning_ta: "மகளிர் உலகம் கட்டுநர், மகத்துவம் மிக்கவர். தகளை வெல்லும் சக்தி மகளிர்க்கே உண்டு!",
    tags: ["women", "empowerment", "equality", "strength", "feminism", "rights"]
  },
  {
    id: "6",
    title_ta: "ஞானம் (Gyanam)",
    lines_ta: "ஞானம் பெறுக!\nஞானம் தான் மனிதனை\nநான் என்னும் அகங்காரத்திலிருந்து\nவிடுவிக்கும்!",
    meaning_en: "Acquire knowledge! Knowledge alone will liberate man from the ego of 'I'!",
    meaning_ta: "ஞானம் பெறுக! ஞானம் தான் மனிதனை நான் என்னும் அகங்காரத்திலிருந்து விடுவிக்கும்!",
    tags: ["knowledge", "wisdom", "enlightenment", "ego", "liberation", "philosophy"]
  },
  {
    id: "7",
    title_ta: "வண்டு கீதம் (Vandu Geetham)",
    lines_ta: "வந்தே மாதரம் என்று\nவாய் திறந்து பாடுவோம்\nகந்த மலர்கள் சூழ\nகனிந்த பலன்கள் தருவோம்!",
    meaning_en: "Let us open our mouths and sing 'Vande Mataram', surrounded by fragrant flowers, we shall give ripened fruits!",
    meaning_ta: "வந்தே மாதரம் என்று வாய் திறந்து பாடுவோம், கந்த மலர்கள் சூழ கனிந்த பலன்கள் தருவோம்!",
    tags: ["motherland", "patriotism", "nationalism", "devotion", "service", "sacrifice"]
  },
  {
    id: "8",
    title_ta: "உழைப்பு (Uzhaippu)",
    lines_ta: "உழைப்பே உன் உயர்வு\nஉழைப்பினால் வெல்லுவாய்\nபழைய முறைகளை மாற்றி\nபுதிய வழி காட்டுவாय்!",
    meaning_en: "Work is your elevation, through work you shall conquer. Changing old methods, you shall show new ways!",
    meaning_ta: "உழைப்பே உன் உயர்வு, உழைப்பினால் வெல்லுவாய். பழைய முறைகளை மாற்றி புதிய வழி காட்டுவாய்!",
    tags: ["work", "labor", "progress", "innovation", "change", "improvement"]
  },
  {
    id: "9",
    title_ta: "ஆசை (Aasai)",
    lines_ta: "ஆசை அருமை பெற்ற\nஆன்மாக்கள் நாம்\nதேசம் ஒன்று கண்டு\nதேர்ந்த வழியில் செல்வோம்!",
    meaning_en: "We are souls blessed with precious desires. Finding one nation, we shall walk on the chosen path!",
    meaning_ta: "ஆசை அருமை பெற்ற ஆன்மாக்கள் நாம். தேசம் ஒன்று கண்டு தேர்ந்த வழியில் செல்வோம்!",
    tags: ["desire", "aspiration", "soul", "nation", "unity", "purpose"]
  },
  {
    id: "10",
    title_ta: "அறிவு வீரம் (Arivu Veeram)",
    lines_ta: "அறிவும் வீரமும் தான்\nஅடியார்களின் ஆயுதம்\nமறவாது செயல்படு\nமாண்புடன் வாழுவாய்!",
    meaning_en: "Knowledge and courage are the weapons of devotees. Act without forgetting, you shall live with dignity!",
    meaning_ta: "அறிவும் வீரமும் தான் அடியார்களின் ஆயுதம். மறவாது செயல்படு மாண்புடன் வாழுவாய்!",
    tags: ["knowledge", "courage", "wisdom", "action", "dignity", "virtue"]
  }
];