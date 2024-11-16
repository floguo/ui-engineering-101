import { Toolbar } from './components/Toolbar/Toolbar.js';
import { ToggleButton } from './components/Toolbar/ToggleButton.js';
import { EmptyState } from './components/EmptyState/EmptyState.js';

// Create instances
const toolbar = new Toolbar();
const emptyState = new EmptyState();
const toggleButton = new ToggleButton(() => {
    if (toolbar.container.innerHTML) {
        toolbar.hide();
    } else {
        toolbar.render();
    }
});

// Show toggle button when pressing 'T' key
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't') {
        toggleButton.toggle();
    }
});

// Show toolbar initially
// toolbar.render();
emptyState.render();