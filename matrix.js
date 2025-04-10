const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Canvas boyutunu pencere boyutuna ayarla
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix karakterleri
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
const charArray = chars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

// Her sütun için y pozisyonları
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Matrix yağmuru efekti
function draw() {
    // Arka planı daha saydam yap
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Karakterleri daha parlak yap
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Animasyonu başlat
setInterval(draw, 33); 