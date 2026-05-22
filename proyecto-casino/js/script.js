// ============================================
// MIDNIGHT INGENIUM - main.js
// ============================================

/* ===== RELOJ EN TIEMPO REAL ===== */
function actualizarHora() {
    const el = document.getElementById('hora-actual');
    if (el) {
        const ahora = new Date();
        el.textContent = ahora.toLocaleTimeString('es-CO', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}

/* ===== SALDO - compatible con API ===== */
function actualizarSaldoUI() {
    const saldoEl = document.getElementById('saldo-display');
    if (!saldoEl) return;

    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
    const token   = localStorage.getItem('token');

    if (usuario && token) {
        // Usuario logueado: mostrar saldo real
        const saldo = parseFloat(usuario.saldo || 0);
        saldoEl.textContent = `💰 $${saldo.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
    } else {
        // Invitado
        saldoEl.textContent = '💰 $0.00';
    }
}

// Para uso desde los juegos (actualiza localStorage y la UI)
function actualizarSaldo(cantidad) {
    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
    if (!usuario) return 0;

    usuario.saldo = Math.max(0, parseFloat(usuario.saldo || 0) + cantidad);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    actualizarSaldoUI();
    return usuario.saldo;
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

/* ===== ANIMACIONES AL SCROLL ===== */
function animarAlScroll() {
    const elementos = document.querySelectorAll('.card, .game-card, .dashboard-card');
    const observer  = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity   = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        el.style.opacity    = '0';
        el.style.transform  = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===== NOTIFICACIONES TOAST ===== */
function mostrarToast(mensaje, tipo = 'exito') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 14px 22px;
        border-radius: 10px;
        font-weight: 700;
        font-size: 0.95rem;
        z-index: 99999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        transition: opacity 0.4s ease, transform 0.4s ease;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        background: ${
            tipo === 'exito'   ? 'linear-gradient(90deg, #00ffae, #00d4ff)' :
            tipo === 'error'   ? 'linear-gradient(90deg, #ff4444, #ff0000)' :
                                 'linear-gradient(90deg, #f5c518, #ff9a00)'
        };
        color: #000;
    `;

    const icono = tipo === 'exito' ? '✅' : tipo === 'error' ? '❌' : '⚠️';

    toast.innerHTML = `
        <span>${icono}</span>
        <span>${mensaje}</span>
        <span style="margin-left:8px; font-size:1rem; opacity:0.6; font-weight:900;">✕</span>
    `;

    const cerrar = () => {
        toast.style.opacity   = '0';
        toast.style.transform = 'translateX(50px)';
        setTimeout(() => toast.remove(), 400);
    };

    toast.addEventListener('click', cerrar);
    document.body.appendChild(toast);
    setTimeout(cerrar, 3000);
}

/* ===== CERRAR SESIÓN (disponible globalmente) ===== */
function cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    sessionStorage.clear();
    window.location.href = '/cuenta/login.html';
}

/* ===== EXPIRACIÓN DE SESIÓN POR INACTIVIDAD ===== */
const INACTIVIDAD_MS   = 20 * 60 * 1000; // 20 minutos
const AVISO_ANTES_MS   =  2 * 60 * 1000; //  2 minutos antes avisa
let timerInactividad   = null;
let timerAviso         = null;
let toastAvisoActivo   = null;

function resetearInactividad() {
    const token = localStorage.getItem('token');
    if (!token) return; // Solo aplica si hay sesión activa

    clearTimeout(timerInactividad);
    clearTimeout(timerAviso);

    // Quitar toast de aviso si estaba visible
    if (toastAvisoActivo) {
        toastAvisoActivo.style.opacity   = '0';
        toastAvisoActivo.style.transform = 'translateX(50px)';
        setTimeout(() => { if (toastAvisoActivo) toastAvisoActivo.remove(); toastAvisoActivo = null; }, 400);
    }

    // Aviso 2 minutos antes
    timerAviso = setTimeout(() => {
        const aviso = document.createElement('div');
        aviso.style.cssText = `
            position: fixed; top: 80px; right: 20px;
            padding: 16px 22px; border-radius: 10px;
            font-weight: 700; font-size: 0.95rem;
            z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            display: flex; align-items: center; gap: 12px; cursor: pointer;
            background: linear-gradient(90deg, #f5c518, #ff9a00); color: #000;
            transition: opacity 0.4s ease, transform 0.4s ease;
        `;
        aviso.innerHTML = `
            <span>⏰</span>
            <span>Tu sesión cerrará en 2 minutos por inactividad</span>
            <span style="margin-left:8px; opacity:0.6; font-weight:900;">✕</span>
        `;
        aviso.addEventListener('click', () => {
            aviso.style.opacity = '0';
            setTimeout(() => aviso.remove(), 400);
            toastAvisoActivo = null;
            resetearInactividad();
        });
        document.body.appendChild(aviso);
        toastAvisoActivo = aviso;
    }, INACTIVIDAD_MS - AVISO_ANTES_MS);

    // Cierre de sesión
    timerInactividad = setTimeout(() => {
        mostrarToast('Sesión cerrada por inactividad', 'advertencia');
        setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('usuario');
            sessionStorage.clear();
            window.location.href = '/cuenta/login.html';
        }, 1500);
    }, INACTIVIDAD_MS);
}

// Eventos que reinician el contador
['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'].forEach(evento => {
    document.addEventListener(evento, resetearInactividad, { passive: true });
});

/* ===== EXPORTAR AL SCOPE GLOBAL ===== */
window.mostrarToast    = mostrarToast;
window.actualizarSaldo = actualizarSaldo;
window.cerrarSesion    = cerrarSesion;

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    actualizarHora();
    setInterval(actualizarHora, 1000);
    actualizarSaldoUI();
    animarAlScroll();
    resetearInactividad(); // Arrancar contador si hay sesión activa
});