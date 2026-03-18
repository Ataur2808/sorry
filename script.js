const startDate = new Date(2025, 1, 24); // এখানে তোমাদের সম্পর্কের তারিখ দাও (Year, Month-1, Day)
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainCard = document.getElementById('mainCard');
const successMessage = document.getElementById('successMessage');
const typewriterText = document.getElementById('typewriterText');
const openLetterBtn = document.getElementById('openLetter');
const bgMusic = document.getElementById('bgMusic');

// ১. লাইভ কাউন্টার
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    document.getElementById('timer').innerText = `${days} দিন, ${hours} ঘণ্টা, ${mins} মিনিট, ${secs} সেকেন্ড`;
}
setInterval(updateTimer, 1000);

// ২. বাটন পালানো (Mouse & Touch)
const moveButton = () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

// ৩. টাইপরাইটার লেটার
const message = "দেখো, আমি জানি আমি অনেক সময় জেদ করি, কিন্তু তোমার হাসিমুখটা না দেখলে আমার সারাটা দিন অন্ধকার লাগে। আমি আমাদের কাটানো সব সুন্দর মুহূর্তকে অনেক বেশি ভালোবাসি। প্লিজ এই পাগলটাকে মাফ করে দাও। আই লাভ ইউ সো মাচ! ❤️";
let i = 0;
openLetterBtn.onclick = () => {
    openLetterBtn.style.display = 'none';
    typewriterText.style.display = 'block';
    bgMusic.play().catch(() => console.log("Music needs interaction"));
    function type() {
        if (i < message.length) {
            typewriterText.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
};

// ৪. হ্যাঁ বাটন ক্লিক
yesBtn.onclick = () => {
    mainCard.classList.add('hidden');
    successMessage.classList.remove('hidden');
    for(let j=0; j<50; j++) {
        setTimeout(createHeart, j * 100);
    }
};

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}