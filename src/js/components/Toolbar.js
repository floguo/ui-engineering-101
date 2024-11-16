// Define the Toolbar class, which renders toolbar and hides it
export class Toolbar {
    // Constructor to initialize the container
    // Constructor method is called when an object is created
    // containerId defaults to 'app'
    constructor(containerId = 'app') {
        // Finds and stores the container element
        this.container = document.getElementById(containerId);
    }

    // Method to render the toolbar
    render() {
        // HTML string for the toolbar
        const toolbar = `
             <div class="w-full h-screen relative">
        <div class="absolute bg-black/90 flex items-center gap-1.5 p-1.5 px-1.5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-[0px 16px 32px -8px rgba(0, 0, 0, 0.24)]">
          <div class="flex">
            <button type="button" aria-label="Crop" class="text-white flex hover:bg-white/5 hover:text-[#B7FE05] transition-colors duration-150 ease-out gap-1.5 px-2 py-1.5 rounded-[10px] font-medium text-sm">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.79166 4.79166H14.0417C14.9622 4.79166 15.7083 5.53785 15.7083 6.45832V17.7083M5.29166 2.29166V13.5417C5.29166 14.4622 6.03785 15.2083 6.95832 15.2083H18.2083" stroke="currentColor" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
               Crop
            </button>
            <button type="button" aria-label="Crop" class="text-white px-2 flex hover:bg-white/5 hover:text-[#B7FE05] transition-colors duration-150 ease-out gap-1.5 py-1.5 rounded-[10px] font-medium text-sm">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M4.45832 2.91666H9.04166V1.66666H4.45832V2.91666ZM10.0833 3.95832V13.75H11.3333V3.95832H10.0833ZM3.41666 13.75V3.95832H2.16666V13.75H3.41666ZM6.74999 17.0833C4.90904 17.0833 3.41666 15.5909 3.41666 13.75H2.16666C2.16666 16.2813 4.21868 18.3333 6.74999 18.3333V17.0833ZM10.0833 13.75C10.0833 15.5909 8.59094 17.0833 6.74999 17.0833V18.3333C9.28132 18.3333 11.3333 16.2813 11.3333 13.75H10.0833ZM4.45832 1.66666C3.19267 1.66666 2.16666 2.69267 2.16666 3.95832H3.41666C3.41666 3.38302 3.88302 2.91666 4.45832 2.91666V1.66666ZM10.1823 3.22222L14.1516 5.51389L14.7766 4.43136L10.8073 2.13969L10.1823 3.22222ZM14.5328 6.93683L9.63699 15.4167L10.7196 16.0417L15.6154 7.56183L14.5328 6.93683ZM14.9864 6.34868L17.2781 10.318L18.3606 9.69299L16.0689 5.72368L14.9864 6.34868ZM16.8968 11.7409L8.41695 16.6367L9.04199 17.7192L17.5218 12.8234L16.8968 11.7409ZM17.2781 10.318C17.5657 10.8162 17.395 11.4532 16.8968 11.7409L17.5218 12.8234C18.6179 12.1907 18.9934 10.7891 18.3606 9.69299L17.2781 10.318ZM10.8073 2.13969C10.4949 1.95932 10.156 1.86042 9.81682 1.83756L9.73274 3.08474C9.88557 3.09503 10.0389 3.13941 10.1823 3.22222L10.8073 2.13969ZM9.04166 2.91666C9.20724 2.91666 9.36207 2.95482 9.49949 3.02226L10.0501 1.90004C9.74507 1.75039 9.40224 1.66666 9.04166 1.66666V2.91666ZM9.49949 3.02226C9.84657 3.19253 10.0833 3.54836 10.0833 3.95832H11.3333C11.3333 3.05346 10.8088 2.27229 10.0501 1.90004L9.49949 3.02226ZM16.0689 5.72368C15.8887 5.41138 15.6447 5.15635 15.3625 4.96701L14.666 6.00495C14.7932 6.09027 14.9036 6.20531 14.9864 6.34868L16.0689 5.72368ZM14.1516 5.51389C14.2949 5.59666 14.41 5.70714 14.4953 5.83427L15.5332 5.13768C15.3438 4.85556 15.0888 4.61165 14.7766 4.43136L14.1516 5.51389ZM14.4953 5.83427C14.7107 6.15526 14.7378 6.5818 14.5328 6.93683L15.6154 7.56183C16.0678 6.7782 16.0042 5.83942 15.5332 5.13768L14.4953 5.83427ZM7.58332 13.75C7.58332 14.2102 7.21022 14.5833 6.74999 14.5833V15.8333C7.90058 15.8333 8.83332 14.9006 8.83332 13.75H7.58332ZM6.74999 14.5833C6.28976 14.5833 5.91666 14.2102 5.91666 13.75H4.66666C4.66666 14.9006 5.5994 15.8333 6.74999 15.8333V14.5833ZM5.91666 13.75C5.91666 13.2897 6.28976 12.9167 6.74999 12.9167V11.6667C5.5994 11.6667 4.66666 12.5994 4.66666 13.75H5.91666ZM6.74999 12.9167C7.21022 12.9167 7.58332 13.2897 7.58332 13.75H8.83332C8.83332 12.5994 7.90058 11.6667 6.74999 11.6667V12.9167Z" fill="currentColor" fill-opacity="0.8"/>
                </svg>
              Color
            </button>
            <button type="button" aria-label="Crop" class="text-white flex px-2 gap-1.5 hover:bg-white/5 hover:text-[#B7FE05] transition-colors duration-150 ease-out py-1.5 rounded-[10px] font-medium text-sm">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.625 5.20833V3.125H10.5M10.5 3.125H17.375V5.20833M10.5 3.125V16.875M10.5 16.875H8.625M10.5 16.875H12.375" stroke="currentColor" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               Text
            </button>
          </div>
          <div class="bg-white/20 w-px h-8 rounded-full"></div>
          <div class="flex items-center">
                <button type="button" aria-label="Crop" class="text-white flex hover:text-[#B7FE05] hover:bg-white/5 transition-colors duration-150 ease-out rounded-[10px] font-medium p-1.5 text-sm">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 3.125V12.5M10.5 3.125L14.25 6.875M10.5 3.125L6.75 6.875M17.375 10.625V15.2083C17.375 16.1288 16.6288 16.875 15.7083 16.875H5.29167C4.37119 16.875 3.625 16.1288 3.625 15.2083V10.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button type="button" aria-label="Crop" class="text-white flex p-1.5 hover:bg-white/5 hover:text-[#B7FE05] transition-colors duration-150 ease-out rounded-[10px] font-medium text-sm">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.29166 10H17.7083M2.29166 4.79167H17.7083M2.29166 15.2083H17.7083" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                
                </button>
          </div>
                </div>
            </div>
        `;
        
        // 
        this.container.innerHTML = toolbar;
    }

    hide() {
        this.container.innerHTML = '';
    }
} 