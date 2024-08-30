document.getElementById('turno').addEventListener('change', function() {
    var turno = this.value;
    document.getElementById('turno1').style.display = turno == 1 ? 'block' : 'none';
    document.getElementById('turno2').style.display = turno == 2 ? 'block' : 'none';
});

function calcularRecaudo() {
    var turno = document.getElementById('turno').value;
    var recaudoRojos, recaudoBlancos;

    if (turno == 1) {
        var r1 = parseInt(document.getElementById('r1').value) || 0;
        var r2 = parseInt(document.getElementById('r2').value) || 0;
        var b1 = parseInt(document.getElementById('b1').value) || 0;
        var b2 = parseInt(document.getElementById('b2').value) || 0;
        recaudoRojos = r1 * 1500 + r2 * 1000;
        recaudoBlancos = b1 * 1200 + b2 * 900;
    } else {
        var x1 = parseInt(document.getElementById('x1').value) || 0;
        var x2 = parseInt(document.getElementById('x2').value) || 0;
        var y1 = parseInt(document.getElementById('y1').value) || 0;
        var y2 = parseInt(document.getElementById('y2').value) || 0;
        recaudoRojos = x1 * 1500 + x2 * 1000;
        recaudoBlancos = y1 * 1200 + y2 * 900;
    }

    document.getElementById('resultado').innerHTML = `
        Recaudo Huevos Rojos: $${recaudoRojos}<br>
        Recaudo Huevos Blancos: $${recaudoBlancos}
    `;
    mostrarOpciones();
}

function mostrarOpciones() {
    document.getElementById('otroTurnoBtn').style.display = 'block';
    document.getElementById('finalizarBtn').style.display = 'block';
}

function resetForm() {
    document.getElementById('huevosForm').reset(); // Reinicia el formulario
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('otroTurnoBtn').style.display = 'none';
    document.getElementById('finalizarBtn').style.display = 'none';
    document.getElementById('turno1').style.display = 'block'; // Restablece la visibilidad del primer turno
    document.getElementById('turno2').style.display = 'none'; // Oculta el segundo turno
}

function finalizarProceso() {
    alert('Proceso finalizado.');
    location.reload();  // Recarga la página para reiniciar el proceso
}
