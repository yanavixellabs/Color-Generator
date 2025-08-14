// assets/js/components/accessibility.js
class AccessibilityChecker {
    constructor() {
        this.contrastPreview = document.getElementById('contrastPreview');
        this.contrastRatio = document.getElementById('contrastRatio');
        this.wcagAA = document.getElementById('wcagAA');
        this.wcagAALarge = document.getElementById('wcagAALarge');
        this.wcagAAA = document.getElementById('wcagAAA');
        this.safeBackgrounds = document.getElementById('safeBackgrounds');
        this.safeText = document.getElementById('safeText');
    }

    // Menghitung relative luminance
    getLuminance(hex) {
        const rgb = ColorUtils.hexToRGB(hex);
        const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
            c = c / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    // Menghitung contrast ratio
    calculateContrastRatio(color1, color2) {
        const l1 = this.getLuminance(color1);
        const l2 = this.getLuminance(color2);
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
    }

    // Update contrast checker
    updateContrastChecker(color) {
        // Hitung contrast dengan background putih dan hitam
        const whiteRatio = this.calculateContrastRatio(color, '#FFFFFF');
        const blackRatio = this.calculateContrastRatio(color, '#000000');
        
        // Pilih warna teks yang memiliki contrast lebih baik
        const textColor = whiteRatio > blackRatio ? '#FFFFFF' : '#000000';
        const ratio = Math.max(whiteRatio, blackRatio).toFixed(2);

        // Update preview
        this.contrastPreview.style.backgroundColor = color;
        this.contrastPreview.style.color = textColor;
        
        // Update contrast ratio
        this.contrastRatio.textContent = `${ratio}:1`;
        
        // Update WCAG status
        this.wcagAA.innerHTML = this.getWCAGStatus(ratio, 4.5);
        this.wcagAALarge.innerHTML = this.getWCAGStatus(ratio, 3);
        this.wcagAAA.innerHTML = this.getWCAGStatus(ratio, 7);

        // Generate safe colors
        this.updateSafeColors(color);
    }

    // Get WCAG status dengan icon
    getWCAGStatus(ratio, target) {
        const passed = ratio >= target;
        return `
            ${passed ? 
                '<svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' :
                '<svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
            }
            <span class="${passed ? 'text-green-500' : 'text-red-500'}">${passed ? 'Pass' : 'Fail'}</span>
        `;
    }

    // Generate safe colors
    updateSafeColors(baseColor) {
        const { h, s, l } = ColorUtils.hexToHSL(baseColor);
        
        // Generate safe backgrounds (lebih terang)
        const backgrounds = Array.from({ length: 5 }, (_, i) => {
            const newL = Math.max(20, Math.min(95, l + (i - 2) * 15));
            return ColorUtils.hslToHex(h, s, newL);
        });

        // Generate safe text colors (lebih gelap)
        const textColors = Array.from({ length: 5 }, (_, i) => {
            const newL = Math.max(5, Math.min(95, 100 - l + (i - 2) * 15));
            return ColorUtils.hslToHex(h, s, newL);
        });

        // Update UI
        this.safeBackgrounds.innerHTML = backgrounds
            .map(color => this.createColorSwatch(color, true))
            .join('');
            
        this.safeText.innerHTML = textColors
            .map(color => this.createColorSwatch(color, false))
            .join('');
    }

    // Create color swatch
    createColorSwatch(color, isBackground) {
        const ratio = this.calculateContrastRatio(color, isBackground ? '#000000' : '#FFFFFF');
        const isAccessible = ratio >= 4.5;
        
        return `
            <div class="relative group">
                <div class="w-full h-10 rounded-lg cursor-pointer transition-transform hover:scale-105 ${isBackground ? '' : 'border border-gray-200 dark:border-gray-700'}" 
                     style="background-color: ${color}"
                     onclick="navigator.clipboard.writeText('${color}'); window.showNotification('Copied ${color}');">
                </div>
                <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-xs bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${color.toUpperCase()} (${ratio.toFixed(1)}:1)
                </div>
            </div>
        `;
    }
}

// Initialize dan export untuk penggunaan global
window.accessibilityChecker = new AccessibilityChecker();