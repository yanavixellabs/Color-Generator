document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const hexInput = document.getElementById('hexInput');
    const colorName = document.getElementById('colorName');
    const colorPalette = document.getElementById('colorPalette');
    const exportBtn = document.getElementById('exportBtn');
    const randomBtn = document.getElementById('randomBtn');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Set initial color
    updateColor(colorPicker.value);

    // Event Listeners
    colorPicker.addEventListener('input', (e) => {
        const color = e.target.value.toUpperCase();
        hexInput.value = color;
        updateColor(color);
    });

    hexInput.addEventListener('input', (e) => {
        let color = e.target.value;
        if (!color.startsWith('#')) {
            color = '#' + color;
        }
        if (ColorUtils.isValidHex(color)) {
            colorPicker.value = color;
            updateColor(color);
        }
    });

    randomBtn.addEventListener('click', () => {
        const randomColor = ColorUtils.generateRandomColor();
        colorPicker.value = randomColor;
        hexInput.value = randomColor;
        updateColor(randomColor);
    });

    // Spacebar for random color
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            const randomColor = ColorUtils.generateRandomColor();
            colorPicker.value = randomColor;
            hexInput.value = randomColor;
            updateColor(randomColor);
        }
    });

    exportBtn.addEventListener('click', () => {
        window.showExportModal(
            ColorUtils.getColorName(colorPicker.value),
            colorPicker.value
        );
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        updateColor(colorPicker.value);
    });

    function updateColor(color) {
        const shades = ColorUtils.generateShades(color);
        const name = ColorUtils.getColorName(color);
        colorName.textContent = name;
        updatePalette(shades);
        window.examplesHandler.updateExamples(shades);
        window.accessibilityChecker.updateContrastChecker(color); //accessibility
    }

    function updatePalette(shades) {
        colorPalette.innerHTML = '';
        
        shades.forEach(({ shade, color, isInput }) => {
            const card = document.createElement('div');
            card.className = `
                flex flex-col
                group relative 
                transition-all cursor-pointer 
                w-full
            `;
            
            const contrastColor = ColorUtils.getContrastColor(color);
            
            card.innerHTML = `
                <!-- Color Card -->
                <div class="relative w-full h-16 rounded-lg overflow-hidden" style="background-color: ${color}">
                    <!-- Hapus bagian icon gembok ini
                    ${isInput ? `
                        <div class="absolute">
                            <svg class="w-4 h-4 ${contrastColor === '#FFFFFF' ? 'text-white/70' : 'text-gray-900/70'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                        </div>
                    ` : ''}
                    -->
                </div>
                
                <!-- Shade Info -->
                <div class="mt-1.5 px-1.5 flex items-center justify-between text-xs">
                    <span class="font-medium text-gray-500 dark:text-gray-400">${shade}</span>
                    <span class="font-mono text-gray-500 dark:text-gray-400">${color}</span>
                </div>
            `;
    
            card.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(color);
                    window.showNotification(`Copied ${color}`);
                } catch (err) {
                    window.showNotification('Failed to copy color');
                }
            });
    
            colorPalette.appendChild(card);
        });
    }
});