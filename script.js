// script.js

const textElement = document.getElementById('text');

// Array of words to change "fact" to
const words = [
    "truth", "story", "news", "deal", "thing", "event", "moment", "case", 
    "point", "matter", "affair", "incident", "issue", "topic", "subject", 
    "theme", "notion", "concept", "idea", "thought", "opinion", "belief", 
    "view", "perception", "insight", "wisdom", "knowledge", "reality", 
    "existence", "phenomenon", "circumstance", "context", "detail", "aspect", 
    "element", "feature", "component", "piece", "fragment", "part", "section", 
    "portion", "segment", "fraction", "division", "category", "class", "group", 
    "type", "floating", "nexus"
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

// Add event listeners for hover, touch, and scroll
textElement.addEventListener('mouseenter', changeColorsAndText);
textElement.addEventListener('touchstart', changeColorsAndText);
document.addEventListener('scroll', (event) => {
    event.preventDefault();
    changeColorsAndText();
});
