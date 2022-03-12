const selectElement = (selector) => {
        
    let element = document.querySelector(selector);
    if(!element){
        throw new Error('Element doesn\'t exist');
    }else{
        return element;
    }
}



document.addEventListener('DOMContentLoaded', function(){
    let sun = selectElement('#sun');
    let moon  = selectElement('#moon');
    let bars = selectElement('#bars');
    let cross = selectElement('#cross');
    let menuLeft = selectElement('.menu-left');

    if(localStorage.getItem('theme')){
        document.body.classList.add('theme-change');
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
    }else{
        document.body.classList.remove('theme-change');
        moon.classList.add('hidden');
        sun.classList.remove('hidden');

    }


    sun.addEventListener('click', ()=>{
        sun.classList.toggle('hidden');
        moon.classList.toggle('hidden');
        document.body.classList.add('theme-change');
        localStorage.setItem('theme', 'there is theme');
    });
    moon.addEventListener('click', ()=>{
        sun.classList.toggle('hidden');
        moon.classList.toggle('hidden');
        document.body.classList.remove('theme-change');
        localStorage.removeItem('theme');

    });


    bars.addEventListener('click', ()=>{
        bars.classList.toggle('hidden');
        cross.classList.toggle('hidden');
        menuLeft.classList.toggle('show');
    });

    cross.addEventListener('click', ()=>{
        bars.classList.toggle('hidden');
        cross.classList.toggle('hidden');
        menuLeft.classList.toggle('show');
    });

    let searchClass = selectElement('.search');

    let searchId = selectElement('#search');
    searchId.addEventListener('click', ()=>{
        searchClass.classList.add('search-activated');
    });
    let crossId1 = selectElement('#cross1');
    crossId1.addEventListener('click', ()=>{
        searchClass.classList.remove('search-activated');
    });
    document.addEventListener('keyup', (e)=>{
        if(searchClass.classList.contains('search-activated') && e.key=='Escape'){
            searchClass.classList.remove('search-activated');
        }
    });
    


    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        700:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200:{
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
    });
    
});