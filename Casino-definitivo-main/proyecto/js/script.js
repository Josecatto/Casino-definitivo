// ============================================
// MIDNIGHT INGENIUM - main.js
// Temas JS: Interactividad, Storage (T28),
// Animaciones, Efectos, Reloj
// ============================================

/* ===== RELOJ EN TIEMPO REAL ===== */
function actualizarHora() {
    const el = document.getElementById('hora-actual');
    if (el) {
        const ahora = new Date();
        el.textContent = ahora.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
    }
}
setInterval(actualizarHora, 1000);
actualizarHora();

/* ===== TEMA 28: STORAGE - Saldo del jugador ===== */
function inicializarStorage() {
    if (!localStorage.getItem('saldo')) {
        localStorage.setItem('saldo', '1250');
    }
    if (!localStorage.getItem('usuario')) {
        localStorage.setItem('usuario', 'Invitado');
    }
    actualizarSaldoUI();
}

function actualizarSaldoUI() {
    const saldoEl = document.getElementById('saldo-display');
    if (saldoEl) {
        const saldo = parseFloat(localStorage.getItem('saldo') || '1250');
        saldoEl.textContent = '💰 Saldo: $' + saldo.toLocaleString('es-CO');
    }
}

function actualizarSaldo(cantidad) {
    let saldo = parseFloat(localStorage.getItem('saldo') || '1250');
    saldo += cantidad;
    if (saldo < 0) saldo = 0;
    localStorage.setItem('saldo', saldo.toFixed(2));
    actualizarSaldoUI();
    return saldo;
}

/* ===== MÚSICA DE FONDO ===== */
const btnMusica = document.getElementById('btn-musica');
const bgMusic   = document.getElementById('bg-music');
let musicaActiva = false;

if (btnMusica && bgMusic) {
    btnMusica.addEventListener('click', function () {
        if (!musicaActiva) {
            bgMusic.play();
            btnMusica.textContent = '🔇 Música';
            musicaActiva = true;
        } else {
            bgMusic.pause();
            btnMusica.textContent = '🎵 Música';
            musicaActiva = false;
        }
    });
}

/* ===== ANIMACIONES AL HACER SCROLL ===== */
function animarAlScroll() {
    const elementos = document.querySelectorAll('.card, .game-card, .dashboard-card');
    const observer  = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity    = '1';
                entry.target.style.transform  = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===== NOTIFICACIONES TOAST ===== */
function mostrarToast(mensaje, tipo = 'exito') {
    const toast = document.createElement('div');
    toast.textContent = mensaje;
    toast.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 14px 22px;
        border-radius: 10px;
        font-weight: 700;
        font-size: 0.95rem;
        z-index: 99999;
        animation: fadeDropdown 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        transition: all 0.4s ease;
        background: ${tipo === 'exito' ? 'linear-gradient(90deg, #00ffae, #00d4ff)' :
                    tipo === 'error'  ? 'linear-gradient(90deg, #ff4444, #ff0000)' :
                                       'linear-gradient(90deg, #f5c518, #ff9a00)'};
        color: #000;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(50px)';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

window.mostrarToast   = mostrarToast;
window.actualizarSaldo = actualizarSaldo;

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    inicializarStorage();
    animarAlScroll();
});
