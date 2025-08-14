// Preset colors untuk inspirasi dan random generation
const PRESET_COLORS = {
    'slate': {
        '50': '#f8fafc',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',
        '950': '#020617'
    },
    'red': {
        '50': '#fef2f2',
        '100': '#fee2e2',
        '200': '#fecaca',
        '300': '#fca5a5',
        '400': '#f87171',
        '500': '#ef4444',
        '600': '#dc2626',
        '700': '#b91c1c',
        '800': '#991b1b',
        '900': '#7f1d1d',
        '950': '#450a0a'
    },
    'orange': {
        '50': '#fff7ed',
        '100': '#ffedd5',
        '200': '#fed7aa',
        '300': '#fdba74',
        '400': '#fb923c',
        '500': '#f97316',
        '600': '#ea580c',
        '700': '#c2410c',
        '800': '#9a3412',
        '900': '#7c2d12',
        '950': '#431407'
    },
    'amber': {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde68a',
        '300': '#fcd34d',
        '400': '#fbbf24',
        '500': '#f59e0b',
        '600': '#d97706',
        '700': '#b45309',
        '800': '#92400e',
        '900': '#78350f',
        '950': '#451a03'
    },
    'yellow': {
        '50': '#fefce8',
        '100': '#fef9c3',
        '200': '#fef08a',
        '300': '#fde047',
        '400': '#facc15',
        '500': '#eab308',
        '600': '#ca8a04',
        '700': '#a16207',
        '800': '#854d0e',
        '900': '#713f12',
        '950': '#422006'
    },
    'lime': {
        '50': '#f7fee7',
        '100': '#ecfccb',
        '200': '#d9f99d',
        '300': '#bef264',
        '400': '#a3e635',
        '500': '#84cc16',
        '600': '#65a30d',
        '700': '#4d7c0f',
        '800': '#3f6212',
        '900': '#365314',
        '950': '#1a2e05'
    },
    'green': {
        '50': '#f0fdf4',
        '100': '#dcfce7',
        '200': '#bbf7d0',
        '300': '#86efac',
        '400': '#4ade80',
        '500': '#22c55e',
        '600': '#16a34a',
        '700': '#15803d',
        '800': '#166534',
        '900': '#14532d',
        '950': '#052e16'
    },
    'emerald': {
        '50': '#ecfdf5',
        '100': '#d1fae5',
        '200': '#a7f3d0',
        '300': '#6ee7b7',
        '400': '#34d399',
        '500': '#10b981',
        '600': '#059669',
        '700': '#047857',
        '800': '#065f46',
        '900': '#064e3b',
        '950': '#022c22'
    },
    'teal': {
        '50': '#f0fdfa',
        '100': '#ccfbf1',
        '200': '#99f6e4',
        '300': '#5eead4',
        '400': '#2dd4bf',
        '500': '#14b8a6',
        '600': '#0d9488',
        '700': '#0f766e',
        '800': '#115e59',
        '900': '#134e4a',
        '950': '#042f2e'
    },
    'cyan': {
        '50': '#ecfeff',
        '100': '#cffafe',
        '200': '#a5f3fc',
        '300': '#67e8f9',
        '400': '#22d3ee',
        '500': '#06b6d4',
        '600': '#0891b2',
        '700': '#0e7490',
        '800': '#155e75',
        '900': '#164e63',
        '950': '#083344'
    },
    'sky': {
        '50': '#f0f9ff',
        '100': '#e0f2fe',
        '200': '#bae6fd',
        '300': '#7dd3fc',
        '400': '#38bdf8',
        '500': '#0ea5e9',
        '600': '#0284c7',
        '700': '#0369a1',
        '800': '#075985',
        '900': '#0c4a6e',
        '950': '#082f49'
    },
    'blue': {
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#bfdbfe',
        '300': '#93c5fd',
        '400': '#60a5fa',
        '500': '#3b82f6',
        '600': '#2563eb',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a',
        '950': '#172554'
    },
    'indigo': {
        '50': '#eef2ff',
        '100': '#e0e7ff',
        '200': '#c7d2fe',
        '300': '#a5b4fc',
        '400': '#818cf8',
        '500': '#6366f1',
        '600': '#4f46e5',
        '700': '#4338ca',
        '800': '#3730a3',
        '900': '#312e81',
        '950': '#1e1b4b'
    },
    'violet': {
        '50': '#f5f3ff',
        '100': '#ede9fe',
        '200': '#ddd6fe',
        '300': '#c4b5fd',
        '400': '#a78bfa',
        '500': '#8b5cf6',
        '600': '#7c3aed',
        '700': '#6d28d9',
        '800': '#5b21b6',
        '900': '#4c1d95',
        '950': '#2e1065'
    },
    'purple': {
        '50': '#faf5ff',
        '100': '#f3e8ff',
        '200': '#e9d5ff',
        '300': '#d8b4fe',
        '400': '#c084fc',
        '500': '#a855f7',
        '600': '#9333ea',
        '700': '#7e22ce',
        '800': '#6b21a8',
        '900': '#581c87',
        '950': '#3b0764'
    },
    'fuchsia': {
        '50': '#fdf4ff',
        '100': '#fae8ff',
        '200': '#f5d0fe',
        '300': '#f0abfc',
        '400': '#e879f9',
        '500': '#d946ef',
        '600': '#c026d3',
        '700': '#a21caf',
        '800': '#86198f',
        '900': '#701a75',
        '950': '#4a044e'
    },
    'pink': {
        '50': '#fdf2f8',
        '100': '#fce7f3',
        '200': '#fbcfe8',
        '300': '#f9a8d4',
        '400': '#f472b6',
        '500': '#ec4899',
        '600': '#db2777',
        '700': '#be185d',
        '800': '#9d174d',
        '900': '#831843',
        '950': '#500724'
    },
    'rose': {
        '50': '#fff1f2',
        '100': '#ffe4e6',
        '200': '#fecdd3',
        '300': '#fda4af',
        '400': '#fb7185',
        '500': '#f43f5e',
        '600': '#e11d48',
        '700': '#be123c',
        '800': '#9f1239',
        '900': '#881337',
        '950': '#4c0519'
    }
    // ... (preset colors lainnya tetap sama)
};

// Update color names dengan range yang lebih detail
const COLOR_NAMES = [
    // Reds
    { range: [355, 360], name: 'Pure Red' },
    { range: [0, 5], name: 'Pure Red' },
    { range: [5, 10], name: 'Scarlet' },
    { range: [10, 15], name: 'Ruby' },
    { range: [15, 20], name: 'Crimson' },
    { range: [20, 25], name: 'Rose Red' },

    // Oranges
    { range: [25, 30], name: 'Vermillion' },
    { range: [30, 35], name: 'Orange Red' },
    { range: [35, 40], name: 'Orange' },
    { range: [40, 45], name: 'Tangerine' },
    { range: [45, 50], name: 'Amber' },

    // Yellows
    { range: [50, 55], name: 'Golden' },
    { range: [55, 60], name: 'Yellow' },
    { range: [60, 65], name: 'Lime Yellow' },
    { range: [65, 70], name: 'Chartreuse' },

    // Greens
    { range: [70, 80], name: 'Lime' },
    { range: [80, 90], name: 'Light Green' },
    { range: [90, 100], name: 'Green' },
    { range: [100, 110], name: 'Emerald' },
    { range: [110, 120], name: 'Forest Green' },
    { range: [120, 130], name: 'Viridian' },

    // Teals
    { range: [130, 140], name: 'Teal' },
    { range: [140, 150], name: 'Ocean' },
    { range: [150, 160], name: 'Turquoise' },
    { range: [160, 170], name: 'Aqua' },

    // Blues
    { range: [170, 180], name: 'Sky Blue' },
    { range: [180, 190], name: 'Azure' },
    { range: [190, 200], name: 'Cerulean' },
    { range: [200, 210], name: 'Blue' },
    { range: [210, 220], name: 'Royal Blue' },
    { range: [220, 230], name: 'Navy Blue' },
    { range: [230, 240], name: 'Sapphire' },

    // Indigos
    { range: [240, 250], name: 'Indigo' },
    { range: [250, 260], name: 'Deep Indigo' },

    // Purples
    { range: [260, 270], name: 'Amethyst' },
    { range: [270, 280], name: 'Purple' },
    { range: [280, 290], name: 'Royal Purple' },
    { range: [290, 300], name: 'Electric Purple' },
    { range: [300, 310], name: 'Violet' },

    // Magentas & Pinks
    { range: [310, 320], name: 'Magenta' },
    { range: [320, 330], name: 'Fuchsia' },
    { range: [330, 340], name: 'Hot Pink' },
    { range: [340, 345], name: 'Deep Pink' },
    { range: [345, 350], name: 'Pink' },
    { range: [350, 355], name: 'Light Pink' }
];

// Helper functions untuk modifier warna
const getSaturationModifier = (s) => {
    if (s < 10) return 'Greyish';
    if (s < 25) return 'Muted';
    if (s < 40) return 'Soft';
    if (s > 90) return 'Vivid';
    if (s > 75) return 'Bright';
    return '';
};

const getLightnessModifier = (l) => {
    if (l < 15) return 'Darkest';
    if (l < 25) return 'Darker';
    if (l < 35) return 'Dark';
    if (l > 85) return 'Lightest';
    if (l > 75) return 'Lighter';
    if (l > 65) return 'Light';
    return '';
};

// Update SHADE_DEFINITIONS di constants/colors.js
const SHADE_DEFINITIONS = {
    50:  { l: 98, s: 0.15 },  // Paling terang
    100: { l: 94, s: 0.25 },  // Sangat terang
    200: { l: 88, s: 0.35 },  // Terang
    300: { l: 82, s: 0.45 },  // Agak terang
    400: { l: 76, s: 0.55 },  // Light mid
    500: { l: 70, s: 0.65 },  // Base color
    600: { l: 60, s: 0.75 },  // Mid dark
    700: { l: 45, s: 0.85 },  // Dark
    800: { l: 32, s: 0.90 },  // Very dark
    900: { l: 20, s: 0.95 },  // Ultra dark
    950: { l: 12, s: 1.00 }   // Darkest
};

// Export constants ke window object
window.COLOR_CONSTANTS = {
    PRESET_COLORS,
    COLOR_NAMES,
    SHADE_DEFINITIONS,
    getSaturationModifier,
    getLightnessModifier
};