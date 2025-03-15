const moodButtons = document.querySelectorAll('.mood-btn');
const body = document.body;
const historyList = document.getElementById('history-list');

// Mood colors mapping
const moodColors = {
  happy: '#FFD700',
  sad: '#87CEEB',
  excited: '#FF4500',
  calm: '#98FB98'
};

// Mood emojis mapping
const moodEmojis = {
  happy: '😊',
  sad: '😢',
  excited: '😃',
  calm: '😌'
};
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Add event listeners to mood buttons
moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedMood = button.getAttribute('data-mood');
    body.style.backgroundColor = moodColors[selectedMood];

    // Add mood to history
    const historyItem = document.createElement('li');
    historyItem.textContent = `${moodEmojis[selectedMood]} ${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} - ${new Date().toLocaleString()}`;
    historyList.appendChild(historyItem);
  });
});