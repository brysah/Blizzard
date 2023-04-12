var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetweem: 20,
    watchSlidesProgress: true
});


var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    }
});

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter , index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();
        allFilters.forEach(item => {
            item.classList.remove('active');
        })

        tabPane.forEach(item => {
            item.classList.remove('active');
        })

        tabPane[index].classList.add('active');
        filter.classList.add('active');

    })
})

const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
const overlayModal = document.querySelector('.js-overlay');

overlayModal.addEventListener('click',() => {
    let tagHtml = document.documentElement;
    tagHtml.classList.remove('show-modal');
})

btnCloseModal.addEventListener('click',() => {
    let tagHtml = document.documentElement;
    tagHtml.classList.remove('show-modal');
})

btnOpenModal.addEventListener('click',(event) =>{
    event.preventDefault();
    let tagHtml = document.documentElement;
    tagHtml.classList.add('show-modal');
});

const btnMenu = document.querySelectorAll('.js-btn-menu');
const menu = document.querySelectorAll('.js-menu');

btnMenu.forEach( (btn,index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        menu.forEach( item =>{
            item.classList.remove('active');
            item.addEventListener('mouseleave', () => {
                item.classList.remove('active');
                btnMenu.forEach( item => {
                    item.classList.remove('active');
                })
            })
        })

        btnMenu.forEach( item => {
            item.classList.remove('active');
        })

        btn.classList.add('active');
        menu[index].classList.add('active');
    })
})

