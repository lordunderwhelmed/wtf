// script.js

const textElement = document.getElementById('text');

// Array of words to change "fact" to, including additional Berlin-related terms
const words = [
    "truth", "story", "news", "deal", "thing", "event", "moment", "case", 
    "point", "matter", "affair", "incident", "issue", "topic", "subject", 
    "theme", "notion", "concept", "idea", "thought", "opinion", "belief", 
    "view", "perception", "insight", "wisdom", "knowledge", "reality", 
    "existence", "phenomenon", "circumstance", "context", "detail", "aspect", 
    "element", "feature", "component", "piece", "fragment", "part", "section", 
    "portion", "segment", "fraction", "division", "category", "class", "group", 
    "type", "floating", "nexus", 
    // Additional words related to Berlin, Neukölln, art, and nightlife
    "rave", "graffiti", "underground", "canvas", "installation", "dance", 
    "beat", "vibe", "darkness", "dawn", "neon", "smoke", "alley", "speakeasy", 
    "revelry", "bohemian", "raw", "immersive", "subculture", "edge", "bass", 
    "pulse", "fusion", "freedom", "ecstasy", "grit", "spontaneity", "minimal", 
    "deep", "electric", "clandestine", "flow", "avant-garde", "threshold", 
    "frenzy", "decadence", "maze", "psyche", "echo", "solitude", "shadow", 
    "urge", "trance", "solace", "exhibit", "bustle", "twilight", "desire", 
    "concrete", "dreamscape", "exodus", "void", "pulse"
];

// Function to generate a random pastel color with a high lightness value
function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 100;
    const lightness = 85;  // Pastel-like lightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to generate a contrasting pastel color
function getContrastingPastelColor(baseColor) {
    const baseHue = parseInt(baseColor.match(/hsl\((\d+),/)[1]);
    const hue = (baseHue + 180) % 360; // Opposite hue for high contrast
    const saturation = 100;
    const lightness = 40;  // Lower lightness to increase contrast
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to change text and background colors ensuring high contrast
function changeColorsAndText() {
    const newColor = getRandomPastelColor();
    const newBgColor = getContrastingPastelColor(newColor);
    const randomIndex = Math.floor(Math.random() * words.length);
    const newWord = words[randomIndex];

    textElement.style.color = newColor;
    document.body.style.backgroundColor = newBgColor;

    // Change the last word of the text
    textElement.textContent = `what the ${newWord}`;

    // Revert back after 1 second
    setTimeout(() => {
        textElement.textContent = "what the fact";
        textElement.style.color = '#333333';
        document.body.style.backgroundColor = '#f0f0f0';
    }, 1000);
}

// Add event listeners for hover, touch, and scroll
textElement.addEventListener('mouseenter', changeColorsAndText);
textElement.addEventListener('touchstart', changeColorsAndText);
document.addEventListener('scroll', (event) => {
    event.preventDefault();
    changeColorsAndText();
});
