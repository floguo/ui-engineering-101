import { Icons } from "../Icons.js";
export class EmptyState {
    constructor() {
        this.container = document.getElementById('empty-state');
    }
    render() {
        const emptyState = `
        <div class="w-full h-screen relative">
            <div class="absolute text-center w-full max-w-[620px]
                border border-dashed border-[#E6E6E6] bg-[#FCFCFC] 
                rounded-xl p-14 isolate group
                hover:bg-[#F5F5F5] transition duration-500 hover:duration-200
                left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="flex justify-center">
                    <div class="shadow-lg bg-white grid place-items-center
                    relative left-2 top-2 -rotate-6 
                    group-hover:-translate-x-4 transition
                    group-hover:-rotate-12
                    group-hover:-translate-y-0.5 duration-500
                    group-hover:duration-200
                    ring-black/[0.08] ring-1 size-12 rounded-xl">
                        ${Icons.calendar}
                    </div>
                    <div class="shadow-lg bg-white grid place-items-center rounded-xl 
                    z-10 group-hover:-translate-y-0.5 transition duration-500
                    group-hover:duration-200
                    ring-black/[0.08] ring-1 size-12">
                        ${Icons.chainLink}
                    </div>
                    <div class="shadow-lg bg-white grid place-items-center
                    relative right-2 top-2 rotate-6 
                    ring-black/[0.08] ring-1 size-12 rounded-xl duration-500
                    group-hover:translate-x-4 transition
                    group-hover:rotate-12 
                    group-hover:duration-200
                    group-hover:-translate-y-0.5">
                        ${Icons.code}
                    </div>
                </div>
                <h2 class="text-gray-900 font-medium mt-6">No Forms Created</h2>
                <p class="text-sm text-gray-500 mt-1">You can create a new template to add in <br/> your pages.</p>
                <button class="bg-white font-medium rounded-lg 
                    ring-black/[0.08] ring-1 shadow
                    hover:bg-[#EDEDED] transition
                    active:shadow-none duration-500 hover:duration-200
                    px-4 py-2.5 mt-4">Create Form</button>
                </div>
            </div>
        </div>
        `;

        this.container.innerHTML = emptyState;
    }
}