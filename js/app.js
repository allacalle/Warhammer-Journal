// --- LISTENERS DE EVENTOS ---

// 1. Abrir cuaderno al hacer clic en la portada
UI.bookClosed.addEventListener('click', () => {
    Book.open();
    UI.showOpenBook();
});

// 2. Cerrar cuaderno
UI.btnClose.addEventListener('click', () => {
    Book.close();
    UI.showClosedBook();
});

// 3. Pasar a la página siguiente
UI.btnNext.addEventListener('click', () => {
    if (Book.next()) {
        UI.render();
    }
});

// 4. Volver a la página anterior
UI.btnPrev.addEventListener('click', () => {
    if (Book.prev()) {
        UI.render();
    }
});

// 5. Control con Teclado (Flechas y Escape)
document.addEventListener('keydown', (e) => {
    if (!Book.isOpen) return;

    if (e.key === 'ArrowRight') {
        if (Book.next()) UI.render();
    } else if (e.key === 'ArrowLeft') {
        if (Book.prev()) UI.render();
    } else if (e.key === 'Escape') {
        Book.close();
        UI.showClosedBook();
    }
});