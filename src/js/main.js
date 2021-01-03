/**************************\
  Micromodal Example Snippet
  latest: https://cdn.jsdelivr.net/npm/micromodal@0.4.2/dist/micromodal.min.js
\**************************/

/**************************\
  Important: Micromodal 0.4.2 is currently not IE11 compatible. A temp
  replacement could be https://codepen.io/brifiction/pen/GRgoLgQ. Or revert
  back to https://cdn.jsdelivr.net/npm/micromodal@0.3.2/dist/micromodal.min.js
\**************************/

MicroModal.init({
    // onShow: modal => console.info(`${modal.id} is shown`), // [1]
    // onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-micromodal-trigger', // [3]
    closeTrigger: 'data-custom-close', // [4]
    disableScroll: true, // [5]
    disableFocus: false, // [6]
    awaitOpenAnimation: false, // [7]
    awaitCloseAnimation: false, // [8]
    debugMode: false // [9]
});



var slider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1, //'auto',
        slidesToScroll: 1,
        itemWidth: 150,
        draggable: true,
        scrollLock: false,
        dots: '#dots',
        rewind: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    // slidesToScroll: 'auto',
                    // itemWidth: 320,
                    slidesToScroll: 5,
                    slidesToShow: 5,
                    // slidesToShow: 'auto',
                    // exactWidth: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToScroll: 4,
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    dots: false,
                    arrows: false,
                    scrollLock: true
                }
            }
        ]
});

slideAutoPaly(slider, '.glider');

function slideAutoPaly(glider, selector, delay = 5000, repeat = true) {
    let autoplay = null;
    const slidesCount = glider.track.childElementCount;
    let nextIndex = 1;
    let pause = true;

    function slide() {
        autoplay = setInterval(() => {
            if (nextIndex >= slidesCount) {
                if (!repeat) {
                    clearInterval(autoplay);
                } else {
                    nextIndex = 0;
                }
            }
            glider.scrollItem(nextIndex++);
        }, delay);
    }

    slide();

    var element = document.querySelector(selector);
    element.addEventListener('mouseover', (event) => {
        if (pause) {
            clearInterval(autoplay);
            pause = false;
        }
    }, 300);

    element.addEventListener('mouseout', (event) => {
        if (!pause) {
            slide();
            pause = true;
        }
    }, 300);
}