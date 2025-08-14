class NotificationHandler {
    constructor() {
        this.activeNotifications = new Set();
    }

    show(message, duration = 2000) {
        // Buat elemen notifikasi
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        // Tambahkan animasi
        notification.style.animation = 'fadeIn 0.2s ease-out';

        // Atur posisi berdasarkan notifikasi yang sudah ada
        const offset = 16 + (this.activeNotifications.size * 56); // 16px margin + 40px height
        notification.style.bottom = `${offset}px`;

        // Tambahkan ke DOM
        document.body.appendChild(notification);
        this.activeNotifications.add(notification);

        // Hapus notifikasi setelah durasi tertentu
        setTimeout(() => {
            notification.style.animation = 'fadeIn 0.2s ease-out reverse';
            setTimeout(() => {
                notification.remove();
                this.activeNotifications.delete(notification);
                // Reposisi notifikasi yang tersisa
                this.repositionNotifications();
            }, 200);
        }, duration);
    }

    repositionNotifications() {
        let index = 0;
        this.activeNotifications.forEach(notification => {
            const offset = 16 + (index * 56);
            notification.style.bottom = `${offset}px`;
            index++;
        });
    }
}

// Initialize notification handler
const notificationHandler = new NotificationHandler();

// Export untuk akses global
window.showNotification = (message, duration) => notificationHandler.show(message, duration);

// assets/js/components/notification.js
window.showNotification = function(message) {
    const notification = document.createElement('div');
    notification.className = `
        fixed bottom-4 right-4 
        px-4 py-2 
        bg-gray-900 dark:bg-white 
        text-white dark:text-gray-900 
        rounded-lg shadow-lg 
        transition-all duration-300
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
};