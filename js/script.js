
let slideContentP = document.querySelectorAll('.slideContent > p');

if(document.documentElement.clientWidth < 768) {
    for (let i = 0; i < slideContentP.length; i++) {
        slideContentP[i].innerHTML = 'Тест на внимательность';
    }
}

let summonerOfSliders = document.getElementById('summonerOfSliders');
let carousel = document.getElementById('carouselExampleIndicators');


function timer(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    summonerOfSliders.innerHTML = current+'...';
    if (current == to) {
      clearInterval(timerId);
    }
    current--;
  }, 1000);
}



summonerOfSliders.addEventListener("click", function() {
    timer(5, 0);
    setTimeout(classToggler, 6000, summonerOfSliders, 'slideOut');
    setTimeout(classToggler, 6000, summonerOfSliders, 'noExist');
    setTimeout(classToggler, 6000, carousel, 'noExist');
    setTimeout(classToggler, 6000, carousel, 'slideIn');
});

function classToggler (elem, elemCl) {
    elem.classList.toggle(elemCl);
};

$('.carousel').carousel({
        interval: 3000,
        ride: 'carousel'
    })

$('.carousel').bcSwipe({ threshold: 50 });

