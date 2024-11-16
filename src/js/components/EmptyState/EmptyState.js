
export class EmptyState {
    constructor() {
        this.container = document.getElementById('empty-state');
    }
    render() {
        const emptyState = `
        <div class="w-full h-screen relative">
            <div class="absolute text-center w-full max-w-[620px]
                border border-dashed border-[#E6E6E6] bg-[#FCFCFC] 
                rounded-xl p-14 isolate
                left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="flex justify-center">
                    <div class="bg-white border border-[#ECECEC] size-12 rounded-xl relative left-2 top-2 -rotate-6"></div>
                    <div class="bg-white border border-[#ECECEC] size-12 rounded-xl z-10"></div>
                    <div class="bg-white border border-[#ECECEC] size-12 rounded-xl relative right-2 top-2 rotate-6"></div>
                </div>
                <h2 class="text-gray-900 font-medium mt-6">No Forms Created</h2>
                <p class="text-sm text-gray-500 mt-1">You can create a new template to add in your pages.</p>
                <button class="bg-white border border-[#ECECEC] font-medium rounded-lg 
                        px-4 py-2.5 mt-4">Create Form</button>
                </div>
            </div>
        </div>
        `;

        this.container.innerHTML = emptyState;
    }
}