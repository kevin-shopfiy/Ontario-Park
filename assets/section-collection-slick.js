$(document).ready(function(){
    // var count = $('[data-collection-count]').data('collection-count');   
    $('.collection-slick').slick({
        dots: true,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `<button class="slide-arrow prev-arrow">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="6" transform="matrix(-1 0 0 1 44 0)" fill="#045D96"/>
        <path d="M26 33L16 22L26 11" stroke="white" stroke-width="2.5"/>
        </svg>      
        </button>`,
        
        nextArrow: `<button class="slide-arrow next-arrow">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="6" fill="#045D96"/>
        <path d="M18 33L28 22L18 11" stroke="white" stroke-width="2.5"/>
        </svg>
 
        </button>`,
        
        responsive: [
            
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: `<button class="slide-arrow prev-arrow">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="6" transform="matrix(-1 0 0 1 27 0.266724)" fill="#045D96"/>
                <g clip-path="url(#clip0_70_218)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5501 5.8728L8.37379 13.7667L15.5501 21.6606L16.7833 20.5395L10.6262 13.7667L16.7833 6.99392L15.5501 5.8728Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_70_218">
                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 21.5 5.76672)"/>
                </clipPath>
                </defs>
                </svg>   
                </button>`,
                
                nextArrow: `<button class="slide-arrow next-arrow">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="6" transform="matrix(-1 0 0 1 27 0.266724)" fill="#045D96"/>
                <g clip-path="url(#clip0_70_218)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5501 5.8728L8.37379 13.7667L15.5501 21.6606L16.7833 20.5395L10.6262 13.7667L16.7833 6.99392L15.5501 5.8728Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_70_218">
                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 21.5 5.76672)"/>
                </clipPath>
                </defs>
                </svg>     
                </button>`
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: `<button class="slide-arrow prev-arrow">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="6" transform="matrix(-1 0 0 1 27 0.266724)" fill="#045D96"/>
                <g clip-path="url(#clip0_70_218)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5501 5.8728L8.37379 13.7667L15.5501 21.6606L16.7833 20.5395L10.6262 13.7667L16.7833 6.99392L15.5501 5.8728Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_70_218">
                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 21.5 5.76672)"/>
                </clipPath>
                </defs>
                </svg>   
                </button>`,
                
                nextArrow: `<button class="slide-arrow next-arrow">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="6" transform="matrix(-1 0 0 1 27 0.266724)" fill="#045D96"/>
                <g clip-path="url(#clip0_70_218)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5501 5.8728L8.37379 13.7667L15.5501 21.6606L16.7833 20.5395L10.6262 13.7667L16.7833 6.99392L15.5501 5.8728Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_70_218">
                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 21.5 5.76672)"/>
                </clipPath>
                </defs>
                </svg>     
                </button>`
                }
            }            

        ]
    });
    
  });