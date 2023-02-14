

const carouselNavEl = document.querySelector('#nav-btn');
const sliderEl = document.querySelector('.carousel .slider');
const btns = carouselNavEl.getElementsByClassName('btn');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  

const carouselNavEl2 = document.querySelector('#ref-nav-btn');
const sliderEl2 = document.querySelector('.carousel.references .slider');
const btnsRef = carouselNavEl2.getElementsByClassName('btn');




carouselNavEl.addEventListener('click', handleClick)
carouselNavEl2.addEventListener('click', handleClick)



function handleClick(e){
    const target = e.target;
    const targetIndex = Number(target.dataset.index);
    const targetNumber = Number(target.dataset.number);
    
    sliderEl.style.marginLeft = `${-1 * targetIndex * 100}%`
    sliderEl2.style.marginLeft = `${-1 * targetNumber * 100}%`
}



