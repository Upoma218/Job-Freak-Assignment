const homeLink = document.getElementById('home-link');
const redLink = document.getElementById('red-link');
const blueLink = document.getElementById('blue-link');
const greenLink = document.getElementById('green-link');
const yellowLink = document.getElementById('yellow-link');

const homeSection = document.getElementById('home');
const redSection = document.getElementById('red');
const blueSection = document.getElementById('blue');
const greenSection = document.getElementById('green');
const yellowSection = document.getElementById('yellow');

homeLink.addEventListener('click', e => {
    e.preventDefault();
    homeSection.classList.remove('active');
    redSection.classList.remove('active');
    blueSection.classList.remove('active');
    greenSection.classList.remove('active');
    yellowSection.classList.remove('active');
    homeSection.classList.add('active');
    document.body.style.backgroundColor = '#ece4e4';
});

redLink.addEventListener('click', e => {
    e.preventDefault();
    homeSection.classList.remove('active');
    redSection.classList.remove('active');
    blueSection.classList.remove('active');
    greenSection.classList.remove('active');
    yellowSection.classList.remove('active');
    redSection.classList.add('active');
    document.body.style.backgroundColor = '#ffadad';
});

blueLink.addEventListener('click', e => {
    e.preventDefault();
    homeSection.classList.remove('active');
    redSection.classList.remove('active');
    blueSection.classList.remove('active');
    greenSection.classList.remove('active');
    yellowSection.classList.remove('active');
    blueSection.classList.add('active');
    document.body.style.backgroundColor = '#87cdf0';
});

greenLink.addEventListener('click', e => {
    e.preventDefault();
    homeSection.classList.remove('active');
    redSection.classList.remove('active');
    blueSection.classList.remove('active');
    greenSection.classList.remove('active');
    yellowSection.classList.remove('active');
    greenSection.classList.add('active');
    document.body.style.backgroundColor = '#9ceb9c';
});

yellowLink.addEventListener('click', e => {
    e.preventDefault();
    homeSection.classList.remove('active');
    redSection.classList.remove('active');
    blueSection.classList.remove('active');
    greenSection.classList.remove('active');
    yellowSection.classList.remove('active');
    yellowSection.classList.add('active');
    document.body.style.backgroundColor = '#f1f192';
});
