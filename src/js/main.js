// Import the Toolbar class from the Toolbar.js file
import { Toolbar } from './components/Toolbar.js';

// Create a new Toolbar instance
// 'window' is the global object in the browser
window.toolbar = new Toolbar();

// Show the toolbar
function showToolbar() {
    window.toolbar.render();
}

// Hide the toolbar
function hideToolbar() {
    window.toolbar.hide();
}   

// Make functions available globally so they can be used in the HTML
window.showToolbar = showToolbar;
window.hideToolbar = hideToolbar;