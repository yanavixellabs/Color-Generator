class ModalHandler {
    constructor() {
        this.modal = document.getElementById('exportModal');
        this.colorConfig = document.getElementById('colorConfig');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Close modal on outside click
        this.modal.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.closeModal();
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Initialize close button
        const closeButton = this.modal.querySelector('button[onclick="closeModal()"]');
        closeButton.onclick = () => this.closeModal();

        // Initialize copy button
        const copyButton = this.modal.querySelector('button[onclick="copyConfig()"]');
        copyButton.onclick = () => this.copyConfig();
    }

    showModal(colorName, currentColor) {
        const colorConfig = ColorUtils.formatExport(
            colorName,
            ColorUtils.generateShades(currentColor)
        );
        this.colorConfig.textContent = JSON.stringify(colorConfig, null, 2);
        this.modal.classList.remove('hidden');
    }

    closeModal() {
        this.modal.classList.add('hidden');
    }

    async copyConfig() {
        try {
            const config = this.colorConfig.textContent;
            await navigator.clipboard.writeText(config);
            window.showNotification('copied to clipboard!');
            this.closeModal();
        } catch (err) {
            window.showNotification('Failed to copy configuration');
        }
    }
}

// Initialize modal handler
const modalHandler = new ModalHandler();

// Export for global access
window.modalHandler = modalHandler;
window.showExportModal = (colorName, currentColor) => modalHandler.showModal(colorName, currentColor);
window.closeModal = () => modalHandler.closeModal();
window.copyConfig = () => modalHandler.copyConfig();

