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

// Function to generate a random pastel color
function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360); // Full range of hues
    const saturation = 70; // Slightly lower saturation for pastel
    const lightness = 80 + Math.random() * 10; // Lightness between 80% and 90% for pastel effect
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to generate a contrasting pastel color
function getContrastingPastelColor(baseColor) {
    const baseHue = parseInt(baseColor.match(/hsl\((\d+),/)[1]);
    const contrastingHue = (baseHue + 150 + Math.random() * 60) % 360; // Shift hue to ensure contrast
    const saturation = 70; // Keep saturation the same for harmony
    const lightness = 80 + Math.random() * 10; // Keep within pastel range
    return `hsl(${contrastingHue}, ${saturation}%, ${lightness}%)`;
}

// Function to change text and background colors ensuring pastel contrast
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
