// script.js

const textElement = document.getElementById('text');

// Original and additional words related to Berlin, Neukölln, art, and nightlife
const words = [
    "truth", "story", "news", "deal", "thing", "event", "moment", "case", "point", "matter", "affair", "incident", "issue", "topic", "subject", "theme", "notion", "concept", "idea", "thought", "opinion", "belief", "view", "perception", "insight", "wisdom", "knowledge", "reality", "existence", "phenomenon", "circumstance", "context", "detail", "aspect", "element", "feature", "component", "piece", "fragment", "part", "section", "portion", "segment", "fraction", "division", "category", "class", "group", "type", "floating", "nexus", 
    // Additional words related to Berlin, Neukölln, art, and nightlife
    "rave", "graffiti", "underground", "canvas", "installation", "dance", "beat", "vibe", "darkness", "dawn", "neon", "smoke", "alley", "speakeasy", "revelry", "bohemian", "raw", "immersive", "subculture", "edge", "bass", "pulse", "fusion", "freedom", "ecstasy", "grit", "spontaneity", "minimal", "deep", "electric", "clandestine", "flow", "avant-garde", "threshold", "frenzy", "decadence", "maze", "psyche", "echo", "solitude", "shadow", "urge", "trance", "solace", "exhibit", "bustle", "twilight", "desire", "concrete", "dreamscape", "exodus", "void", "pulse"
];

// Function to generate random pastel colors
function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const pastelColor = `hsl(${hue}, 100%, 85%)`;
    return pastelColor;
}

// Function to change text and background colors
function changeColorsAndText() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const newWord = words[randomIndex];
    const newColor = getRandomPastelColor();
    const newBgColor = getRandomPastelColor();

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

// Debounce function to limit how often changeColorsAndText is called
let scrollTimeout;
function debounceScroll(event) {
    event.preventDefault();

    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
        let maxChanges = Math.floor(Math.random() * 3) + 1; // Randomly select between 1 to 3 changes per scroll
        for (let i = 0; i < maxChanges; i++) {
            setTimeout(changeColorsAndText, i * 300); // Spread changes over 300ms intervals for smooth effect
        }
    }, 100); // Debounce delay of 100ms to limit how often the function is called
}

// Add event listeners for hover and touch to text element
textElement.addEventListener('mouseenter', changeColorsAndText);
textElement.addEventListener('touchstart', changeColorsAndText);

// Add scroll and touchmove event listeners to the whole document
document.addEventListener('touchmove', function(event) {
    event.preventDefault();  // Prevent scrolling
    debounceScroll(event);  // Trigger the debounced scroll function
}, { passive: false });

document.addEventListener('scroll', (event) => {
    event.preventDefault();  // Prevent scrolling
    debounceScroll(event);  // Trigger the debounced scroll function
}, { passive: false });