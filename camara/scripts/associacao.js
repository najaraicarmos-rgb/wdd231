document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    const modalButtons = document.querySelectorAll('.modal-btn');
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.showModal();
        });
    });

    const closeButtons = document.querySelectorAll('dialog .close-modal, dialog button');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('dialog');
            if (modal) modal.close();
        });
    });
});