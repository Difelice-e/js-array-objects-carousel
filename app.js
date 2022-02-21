// dichiarazione array    
const slideItem = [
    {
        item: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        active: true
    },

    {
        item: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',
        active: false
    },

    {
        item: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        active: false
    },

    {
        item: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        active: false
    },

    {
        item: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        active: false
    }
]


// creazione della parte principale del carosello
let currentIndex = 0;
let divElement;
const sliderWrapper = document.querySelector('.slider-wrapper');

slideItem.forEach(({item, title, text, active}, index) => {
    divElement = document.createElement('div');
    console.log(divElement);
    const divInfo = document.createElement('div');
    console.log(divInfo);
    const imgElement = document.createElement('img');
    imgElement.src = `${item}`;
    console.log(imgElement);
    const divTitle = `<h1>${title}</h1>`;
    console.log(divTitle)
    const divText = `<p>${text}</p>`;
    console.log(divText);
    
    console.log(sliderWrapper);

    if (active) {
        divElement.classList.add('active');
    }
    
    sliderWrapper.append(divElement);
    divInfo.innerHTML += divTitle + divText;
    divElement.append(imgElement, divInfo);
    

    divElement.classList.add("item");
    divInfo.classList.add("item-info");
})


// creazione zona dei controlli   
let imgThumbElement;
let prevControl;
let nextControl;
const controlWrapper = document.querySelector('.control-wrapper');

slideItem.forEach(({item, active}, index) => {
    
    
    imgThumbElement = document.createElement('img');
    imgThumbElement.src = `${item}`;

    if (active) {
        imgThumbElement.classList.add('active');
    }

    controlWrapper.append(imgThumbElement);
})

prevControl = document.createElement('span');
    nextControl = document.createElement('span');

    
    prevControl.innerHTML = "&uarr;";
    nextControl.innerHTML = "&darr;"

    prevControl.classList.add("prev");
    nextControl.classList.add("next");

controlWrapper.append(prevControl, nextControl);

// dichiarazione funzione di controllo classe active 
function controlActive() {
    slideItem.forEach( (element, index, array) => {
        if (element.active) {
            divElements[index].classList.add("active");
            imgThumbElements[index].classList.add("active");
        } else {
            divElements[index].classList.remove('active');
            imgThumbElements[index].classList.remove("active");
        }
    } )
}

// controllo next
const next = document.querySelector('.next')

let divElements = document.querySelectorAll('.slider-wrapper > div'); //creazione array
let imgThumbElements = document.querySelectorAll('.control-wrapper > img');

next.addEventListener("click", function() {
    console.log("next!")

    slideItem[currentIndex].active = false;
    console.log(slideItem[currentIndex].active)

    if ( currentIndex < slideItem.length -1 ) {
        currentIndex++

        slideItem[currentIndex].active = true;
    } else {
        currentIndex = 0;

        slideItem[currentIndex].active = true;
    }
    
    controlActive();
});


// controllo prev
const prev = document.querySelector('.prev')

prev.addEventListener("click", function() {
    console.log("prev!")

    slideItem[currentIndex].active = false;
    
    if ( currentIndex > 0 ) {
        currentIndex--

        slideItem[currentIndex].active = true;
    } else {
        currentIndex = slideItem.length - 1;

        slideItem[currentIndex].active = true;
    }

    controlActive();
      
});