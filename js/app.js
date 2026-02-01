// Page-specific initialization
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === 'zodiac.html') {
    initZodiacPage();
  } else if (currentPage === 'horoscope-type.html') {
    initHoroscopeTypePage();
  } else if (currentPage === 'result.html') {
    initResultPage();
  }
});

// ====================
// Index Page Functions
// ====================

let selectedGender = null;

function selectGender(gender) {
  selectedGender = gender;

  // Update card selection
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('selected');
  });
  document.querySelector(`[data-gender="${gender}"]`).classList.add('selected');

  // Enable continue button
  document.getElementById('continueBtn').disabled = false;
}

function continueToZodiac() {
  sessionStorage.setItem('horoscope_gender', selectedGender);
  window.location.href = 'zodiac.html';
}

// ====================
// Zodiac Page Functions
// ====================

let selectedSign = null;

function initZodiacPage() {
  // Validate that gender was selected
  if (!sessionStorage.getItem('horoscope_gender')) {
    window.location.href = 'index.html';
    return;
  }

  // Generate zodiac cards
  const grid = document.getElementById('zodiacGrid');
  zodiacSigns.forEach(sign => {
    const card = document.createElement('div');
    card.className = 'card zodiac-card';
    card.dataset.sign = sign.id;
    card.onclick = () => selectSign(sign.id);
    card.innerHTML = `
      <div class="card-icon">${sign.symbol}</div>
      <div class="card-title">${sign.name}</div>
      <div class="card-subtitle">${sign.dates}</div>
    `;
    grid.appendChild(card);
  });
}

function selectSign(signId) {
  selectedSign = signId;

  // Update card selection
  document.querySelectorAll('.zodiac-card').forEach(card => {
    card.classList.remove('selected');
  });
  document.querySelector(`[data-sign="${signId}"]`).classList.add('selected');

  // Enable continue button
  document.getElementById('continueBtn').disabled = false;
}

function continueToHoroscopeType() {
  sessionStorage.setItem('horoscope_sign', selectedSign);
  window.location.href = 'horoscope-type.html';
}

// ====================
// Horoscope Type Page Functions
// ====================

let selectedType = null;

const typeIcons = {
  daily: '',
  money: '',
  love: '',
  career: '',
  family: '',
  health: ''
};

const typeNames = {
  daily: 'Daily',
  money: 'Money',
  love: 'Love',
  career: 'Career',
  family: 'Family',
  health: 'Health'
};

function initHoroscopeTypePage() {
  // Validate that gender and sign were selected
  if (!sessionStorage.getItem('horoscope_gender') || !sessionStorage.getItem('horoscope_sign')) {
    window.location.href = 'index.html';
    return;
  }

  // Set icons for cards
  document.querySelectorAll('.card').forEach(card => {
    const type = card.dataset.type;
    card.querySelector('.card-icon').textContent = typeIcons[type];
  });
}

function selectHoroscopeType(type) {
  selectedType = type;

  // Update card selection
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('selected');
  });
  document.querySelector(`[data-type="${type}"]`).classList.add('selected');

  // Enable continue button
  document.getElementById('continueBtn').disabled = false;
}

function getHoroscope() {
  sessionStorage.setItem('horoscope_type', selectedType);

  // Generate and store horoscope result
  const gender = sessionStorage.getItem('horoscope_gender');
  const sign = sessionStorage.getItem('horoscope_sign');
  const type = selectedType;

  const horoscope = generateHoroscope(sign, type);
  sessionStorage.setItem('horoscope_result', JSON.stringify(horoscope));

  window.location.href = 'result.html';
}

// ====================
// Result Page Functions
// ====================

function initResultPage() {
  // Validate all selections
  const gender = sessionStorage.getItem('horoscope_gender');
  const sign = sessionStorage.getItem('horoscope_sign');
  const type = sessionStorage.getItem('horoscope_type');

  if (!gender || !sign || !type) {
    window.location.href = 'index.html';
    return;
  }

  // Get horoscope result from sessionStorage or generate new one
  let horoscope = sessionStorage.getItem('horoscope_result');
  if (!horoscope) {
    horoscope = generateHoroscope(sign, type);
  } else {
    horoscope = JSON.parse(horoscope);
  }

  // Display result
  displayResult(gender, sign, type, horoscope);
}

function displayResult(gender, signId, type, horoscope) {
  // Get sign info
  const sign = zodiacSigns.find(s => s.id === signId);

  // Set title
  document.getElementById('resultTitle').textContent =
    `${sign.name} ${typeNames[type]} Horoscope`;

  // Display selections
  document.getElementById('selectionDisplay').innerHTML = `
    <span class="selection-badge">${gender.charAt(0).toUpperCase() + gender.slice(1)}</span>
    <span class="selection-badge">${sign.symbol} ${sign.name}</span>
    <span class="selection-badge">${typeNames[type]}</span>
  `;

  // Display horoscope text
  document.getElementById('horoscopeText').textContent = horoscope.text;

  // Display lucky elements
  document.getElementById('starRating').textContent = horoscope.rating;
  document.getElementById('luckyNumber').textContent = horoscope.number;
  document.getElementById('luckyTime').textContent = horoscope.time;

  // Display lucky color with background
  const colorElement = document.getElementById('luckyColor');
  colorElement.textContent = horoscope.color;
  colorElement.style.backgroundColor = horoscope.color;

  // Ensure text contrast for the color background
  const isDarkColor = isColorDark(horoscope.color);
  colorElement.style.color = isDarkColor ? 'white' : 'black';
}

function startOver() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}

// ====================
// Horoscope Generation
// ====================

function generateHoroscope(sign, type) {
  // Get available content for this sign and type
  const contentArray = horoscopeContent[type][sign];

  // Select random content
  const text = getRandomItem(contentArray);

  // Generate random star rating (1-5)
  let rating = '';
  const starCount = Math.floor(Math.random() * 5) + 1;
  for (let i = 0; i < starCount; i++) {
    rating += '★';
  }

  // Generate random lucky number (1-99)
  const number = Math.floor(Math.random() * 99) + 1;

  // Select random lucky color
  const color = getRandomItem(luckyColors);

  // Select random lucky time
  const time = getRandomItem(luckyTimes);

  return {
    text,
    rating,
    number,
    color,
    time
  };
}

// ====================
// Utility Functions
// ====================

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function isColorDark(color) {
  // List of colors that need white text
  const darkColors = [
    'Black', 'Blue', 'Purple', 'Brown', 'Indigo',
    'Green', 'Navy', 'Maroon', 'Olive', 'Teal',
    'DarkRed', 'DarkBlue', 'DarkGreen', 'DarkPurple'
  ];

  return darkColors.some(dc => color.includes(dc) || color === dc);
}