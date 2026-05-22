// ── Formatear moneda ──────────────────────────────────────────
function formatearSaldo(monto) {
    return `$${parseFloat(monto).toLocaleString('es-CO', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}

// ── Validar monto de apuesta ──────────────────────────────────
function validarMonto(monto, saldoActual, min = 1) {
    if (!monto || isNaN(monto))         return { valido: false, error: 'Monto inválido' };
    if (monto < min)                    return { valido: false, error: `Monto mínimo es $${min}` };
    if (monto > saldoActual)            return { valido: false, error: 'Saldo insuficiente' };
    return { valido: true };
}

// ── Calcular ganancia neta ────────────────────────────────────
function calcularGanancia(monto, multiplicador) {
    return parseFloat((monto * multiplicador - monto).toFixed(2));
}

// ── Calcular nuevo saldo ──────────────────────────────────────
function calcularNuevoSaldo(saldoActual, monto, gano, ganancia) {
    if (gano) return parseFloat((saldoActual + monto + ganancia).toFixed(2));
    return parseFloat((saldoActual - monto).toFixed(2));
}

// ── Respuesta de éxito estandarizada ─────────────────────────
function respuestaOk(res, data, status = 200) {
    return res.status(status).json({ ok: true, ...data });
}

// ── Respuesta de error estandarizada ─────────────────────────
function respuestaError(res, mensaje, status = 400) {
    return res.status(status).json({ ok: false, error: mensaje });
}

module.exports = {
    formatearSaldo,
    validarMonto,
    calcularGanancia,
    calcularNuevoSaldo,
    respuestaOk,
    respuestaError
};