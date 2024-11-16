import { ToolbarButton } from './ToolbarButton.js';
import { Icons } from '../Icons.js';

export class Toolbar {
    constructor() {
        this.container = document.getElementById('app');
        this.buttons = [
            new ToolbarButton({ label: 'Crop', icon: Icons.crop }),
            new ToolbarButton({ label: 'Color', icon: Icons.color }),
            new ToolbarButton({ label: 'Text', icon: Icons.text }),
            new ToolbarButton({ icon: Icons.download, iconOnly: true }),
            new ToolbarButton({ icon: Icons.menu, iconOnly: true })
        ];
    }

    render() {
        const toolbar = `
            <div class="w-full h-screen relative">
                <div class="absolute bg-black/90 flex items-center gap-1.5 p-1.5 px-1.5 
                            left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            rounded-2xl shadow-[0px 16px 32px -8px rgba(0, 0, 0, 0.24)]">
                    <div class="flex">
                        ${this.buttons.slice(0, 3).map(btn => btn.render()).join('')}
                    </div>
                    
                    <div class="bg-white/20 w-px h-8 rounded-full"></div>
                    
                    <div class="flex items-center">
                        ${this.buttons.slice(3).map(btn => btn.render()).join('')}
                    </div>
                </div>
            </div>
        `;
        
        this.container.innerHTML = toolbar;
    }

    hide() {
        this.container.innerHTML = '';
    }
} 