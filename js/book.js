const Book = {
    currentPage: 1,
    isOpen: false,

    // Garantiza que siempre devuelva una ruta válida
    getCurrentImagePath() {
        const pageNum = this.currentPage || 1;
        const paddedNumber = String(pageNum).padStart(3, '0');
        return `${CONFIG.imageFolder}${paddedNumber}${CONFIG.imageExtension}`;
    },

    open() {
        this.isOpen = true;
        this.currentPage = 1; // SIEMPRE arranca en la página 1 al abrir
    },

    close() {
        this.isOpen = false;
    },

    next() {
        if (this.currentPage < CONFIG.totalPages) {
            this.currentPage++;
            return true;
        }
        return false;
    },

    prev() {
        if (this.currentPage > 1) {
            this.currentPage--;
            return true;
        }
        return false;
    }
};