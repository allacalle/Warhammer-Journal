const UI = {
    bookClosed: document.getElementById('book-closed'),
    bookOpen: document.getElementById('book-open'),
    currentPageImg: document.getElementById('current-page'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnClose: document.getElementById('btn-close'),

    showOpenBook() {
        if (this.bookClosed) this.bookClosed.classList.add('hidden');
        if (this.bookOpen) this.bookOpen.classList.remove('hidden');
        this.render();
    },

    showClosedBook() {
        if (this.bookOpen) this.bookOpen.classList.add('hidden');
        if (this.bookClosed) this.bookClosed.classList.remove('hidden');
    },

    render() {
        if (!this.currentPageImg) return;

        // Carga la ruta de la imagen actual
        const imagePath = Book.getCurrentImagePath();
        this.currentPageImg.src = imagePath;

        // Actualiza el estado de las flechas (deshabilita al inicio o final)
        if (this.btnPrev) this.btnPrev.disabled = (Book.currentPage === 1);
        if (this.btnNext) this.btnNext.disabled = (Book.currentPage === CONFIG.totalPages);
    }
};