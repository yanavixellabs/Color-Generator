// assets/js/components/examples.js
class ExamplesHandler {
    constructor() {
        this.productCard = document.getElementById('productCard');
        this.uiElements = document.getElementById('uiElements');
        this.formElements = document.getElementById('formElements');
    }

    updateExamples(shades) {
        this.updateProductCard(shades);
        this.updateUIElements(shades);
        this.updateFormElements(shades);
    }

    getContrastColor(backgroundColor) {
        const hex = backgroundColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5 ? '#1a1a1a' : '#ffffff';
    }

    updateProductCard(shades) {
        if (this.productCard) {
            // Badge
            const badge = this.productCard.querySelector('.product-badge');
            badge.style.backgroundColor = shades.find(s => s.shade === 100).color;
            badge.style.color = shades.find(s => s.shade === 700).color;

            // Category
            const category = this.productCard.querySelector('.product-category');
            category.style.color = shades.find(s => s.shade === 700).color;

            // Price
            const price = this.productCard.querySelector('.product-price');
            price.style.color = document.documentElement.classList.contains('dark') ? '#ffffff' : shades.find(s => s.shade === 800).color;

            // Discount badge
            const discountBadge = this.productCard.querySelector('.product-discount-badge');
            discountBadge.style.backgroundColor = shades.find(s => s.shade === 100).color;
            discountBadge.style.color = shades.find(s => s.shade === 700).color;

            // Add to Cart button
            const addToCartBtn = this.productCard.querySelector('.product-btn');
            const btnColor = shades.find(s => s.shade === 700).color;
            addToCartBtn.style.backgroundColor = btnColor;
            addToCartBtn.style.color = this.getContrastColor(btnColor);
            
            // Hover effects
            addToCartBtn.addEventListener('mouseenter', () => {
                const hoverColor = shades.find(s => s.shade === 800).color;
                addToCartBtn.style.backgroundColor = hoverColor;
                addToCartBtn.style.color = this.getContrastColor(hoverColor);
            });
            addToCartBtn.addEventListener('mouseleave', () => {
                addToCartBtn.style.backgroundColor = btnColor;
                addToCartBtn.style.color = this.getContrastColor(btnColor);
            });
        }
    }

    updateUIElements(shades) {
        if (this.uiElements) {
            // Alerts
            const alerts = this.uiElements.querySelectorAll('.alert-box');
            alerts.forEach(alert => {
                alert.style.backgroundColor = shades.find(s => s.shade === 50).color;
                alert.style.color = shades.find(s => s.shade === 700).color;
            });

            // Badges
            const primaryBadge = this.uiElements.querySelector('.badge-primary');
            const secondaryBadge = this.uiElements.querySelector('.badge-secondary');
            
            primaryBadge.style.backgroundColor = shades.find(s => s.shade === 700).color;
            primaryBadge.style.color = this.getContrastColor(shades.find(s => s.shade === 700).color);
            
            secondaryBadge.style.backgroundColor = shades.find(s => s.shade === 100).color;
            secondaryBadge.style.color = shades.find(s => s.shade === 700).color;

            // Toggle Switch
            const toggleBg = this.uiElements.querySelector('.toggle-bg');
            const toggleCheckbox = this.uiElements.querySelector('.toggle-checkbox');
            const toggleDot = this.uiElements.querySelector('.toggle-dot');

            toggleBg.style.backgroundColor = shades.find(s => s.shade === 200).color;
            toggleCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    toggleBg.style.backgroundColor = shades.find(s => s.shade === 700).color;
                    toggleDot.style.transform = 'translateX(100%)';
                } else {
                    toggleBg.style.backgroundColor = shades.find(s => s.shade === 200).color;
                    toggleDot.style.transform = 'translateX(0)';
                }
            });

            // Buttons
            const buttons = {
                primary: this.uiElements.querySelector('.primary-btn'),
                secondary: this.uiElements.querySelector('.secondary-btn'),
                outline: this.uiElements.querySelector('.outline-btn')
            };

            // Primary Button
            const primaryColor = shades.find(s => s.shade === 700).color;
            buttons.primary.style.backgroundColor = primaryColor;
            buttons.primary.style.color = this.getContrastColor(primaryColor);

            // Secondary Button
            buttons.secondary.style.backgroundColor = shades.find(s => s.shade === 100).color;
            buttons.secondary.style.color = shades.find(s => s.shade === 700).color;

            // Outline Button
            buttons.outline.style.borderColor = shades.find(s => s.shade === 700).color;
            buttons.outline.style.color = shades.find(s => s.shade === 700).color;

            // Hover Effects
            Object.values(buttons).forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    if (btn.classList.contains('primary-btn')) {
                        const hoverColor = shades.find(s => s.shade === 800).color;
                        btn.style.backgroundColor = hoverColor;
                        btn.style.color = this.getContrastColor(hoverColor);
                    } else if (btn.classList.contains('secondary-btn')) {
                        btn.style.backgroundColor = shades.find(s => s.shade === 200).color;
                        btn.style.color = shades.find(s => s.shade === 800).color;
                    } else if (btn.classList.contains('outline-btn')) {
                        btn.style.backgroundColor = shades.find(s => s.shade === 50).color;
                        btn.style.color = shades.find(s => s.shade === 800).color;
                    }
                });

                btn.addEventListener('mouseleave', () => {
                    if (btn.classList.contains('primary-btn')) {
                        btn.style.backgroundColor = primaryColor;
                        btn.style.color = this.getContrastColor(primaryColor);
                    } else if (btn.classList.contains('secondary-btn')) {
                        btn.style.backgroundColor = shades.find(s => s.shade === 100).color;
                        btn.style.color = shades.find(s => s.shade === 700).color;
                    } else if (btn.classList.contains('outline-btn')) {
                        btn.style.backgroundColor = 'transparent';
                        btn.style.color = shades.find(s => s.shade === 700).color;
                    }
                });
            });
        }
    }

    updateFormElements(shades) {
        if (this.formElements) {
            // Input fields
            const inputs = this.formElements.querySelectorAll('.form-input');
            inputs.forEach(input => {
                input.style.borderColor = shades.find(s => s.shade === 200).color;
                
                input.addEventListener('focus', () => {
                    input.style.borderColor = shades.find(s => s.shade === 700).color;
                    input.style.boxShadow = `0 0 0 1px ${shades.find(s => s.shade === 700).color}`;
                });
                
                input.addEventListener('blur', () => {
                    input.style.borderColor = shades.find(s => s.shade === 200).color;
                    input.style.boxShadow = 'none';
                });
            });

            // Select
            const selects = this.formElements.querySelectorAll('.form-select');
            selects.forEach(select => {
                select.style.borderColor = shades.find(s => s.shade === 200).color;
                
                select.addEventListener('focus', () => {
                    select.style.borderColor = shades.find(s => s.shade === 700).color;
                    select.style.boxShadow = `0 0 0 1px ${shades.find(s => s.shade === 700).color}`;
                });
                
                select.addEventListener('blur', () => {
                    select.style.borderColor = shades.find(s => s.shade === 200).color;
                    select.style.boxShadow = 'none';
                });
            });

            // Checkbox and Radio
            const checkboxes = this.formElements.querySelectorAll('.form-checkbox, .form-radio');
            checkboxes.forEach(checkbox => {
                checkbox.style.accentColor = shades.find(s => s.shade === 700).color;
            });

            // Submit Button
            const submitBtn = this.formElements.querySelector('button[type="submit"]');
            const btnColor = shades.find(s => s.shade === 700).color;
            submitBtn.style.backgroundColor = btnColor;
            submitBtn.style.color = this.getContrastColor(btnColor);
            
            submitBtn.addEventListener('mouseenter', () => {
                const hoverColor = shades.find(s => s.shade === 800).color;
                submitBtn.style.backgroundColor = hoverColor;
                submitBtn.style.color = this.getContrastColor(hoverColor);
            });
            
            submitBtn.addEventListener('mouseleave', () => {
                submitBtn.style.backgroundColor = btnColor;
                submitBtn.style.color = this.getContrastColor(btnColor);
            });
        }
    }
}

// Initialize dan export untuk penggunaan global
window.examplesHandler = new ExamplesHandler();