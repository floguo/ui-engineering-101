export class ToggleButton {
    constructor(onClick) {
        this.button = document.createElement('button');
        this.button.id = 'toggleButton';
        this.button.onclick = onClick;
        this.button.className = 'fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hidden';
        this.button.textContent = 'Toggle Toolbar';
        
        document.body.appendChild(this.button);
    }

    toggle() {
        this.button.classList.toggle('hidden');
    }
} 