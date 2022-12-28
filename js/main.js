

const carouselNavEl = document.querySelector('.carousel  nav');
const sliderEl = document.querySelector('.carousel .slider');

const carouselNavEl2 = document.querySelector('.carousel.references  nav');
const sliderEl2 = document.querySelector('.carousel.references .slider');


carouselNavEl.addEventListener('click', handleClick)
carouselNavEl2.addEventListener('click', handleClick)



function handleClick(e){
    const target = e.target;
    const targetIndex = Number(target.dataset.index);
    const targetNumber = Number(target.dataset.number);
    
    sliderEl.style.marginLeft = `${-1 * targetIndex * 100}%`
    sliderEl2.style.marginLeft = `${-1 * targetNumber * 100}%`
}



