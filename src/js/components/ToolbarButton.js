export class ToolbarButton {
    constructor({ label, icon, iconOnly = false }) {
        this.label = label;
        this.icon = icon;
        this.iconOnly = iconOnly;
    }

    render() {
        return `
            <button 
                type="button"
                aria-label="${this.label}"
                class="text-white flex hover:bg-white/5 hover:text-[#B7FE05] 
                       transition-colors duration-150 ease-out rounded-[10px] 
                       font-medium text-sm
                       ${this.iconOnly ? 'p-1.5' : 'px-2 py-1.5 gap-1.5'}"
            >
                ${this.icon}
                ${!this.iconOnly ? this.label : ''}
            </button>
        `;
    }
} 