// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ];

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ];


const slideItem = [
    {
        item: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
    },

    {
        item: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum'
    },

    {
        item: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },

    {
        item: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },

    {
        item: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
    }
]

console.log(slideItem)

let currentIndex = 0;
let divElement;
const sliderWrapper = document.querySelector('.slider-wrapper');

// for (i = 0; i < items.length; i++) {
//     divElement = document.createElement('div');
//     console.log(divElement);
//     const divInfo = document.createElement('div');
//     console.log(divInfo);
//     const imgElement = document.createElement('img');
//     imgElement.src = `${items[i]}`;
//     console.log(imgElement);
//     const divTitle = `<h1>${title[i]}</h1>`;
//     console.log(divTitle)
//     const divText = `<p>${text[i]}</p>`;
//     console.log(divText);
    
//     console.log(sliderWrapper);

//     if (i == 0) {
//         divElement.classList.add("active");
//         currentIndex = 0;
//     }
    
//     sliderWrapper.append(divElement);
//     divInfo.innerHTML += divTitle + divText;
//     divElement.append(imgElement, divInfo);
    

//     divElement.classList.add("item");
//     divInfo.classList.add("item-info");

//     // console.log(divInfo, divElement)
    
// };

slideItem.forEach(({item, title, text}, index) => {
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

    if (index == 0) {
        divElement.classList.add("active");
        currentIndex = 0;
    }
    
    sliderWrapper.append(divElement);
    divInfo.innerHTML += divTitle + divText;
    divElement.append(imgElement, divInfo);
    

    divElement.classList.add("item");
    divInfo.classList.add("item-info");
})


let imgThumbElement;
let prevControl;
let nextControl;
const controlWrapper = document.querySelector('.control-wrapper');

slideItem.forEach(({item}, index) => {
    
    
    imgThumbElement = document.createElement('img');
    imgThumbElement.src = `${item}`;

    if (index == 0) {
        imgThumbElement.classList.add("active");
        currentIndex = 0;
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


const next = document.querySelector('.next')

let divElements = document.querySelectorAll('.slider-wrapper > div'); //creazione array
let imgThumbElements = document.querySelectorAll('.control-wrapper > img');

next.addEventListener("click", function() {
    console.log("next!")
    
    
    if ( currentIndex < slideItem.length -1 ) {
        
        divElements[currentIndex].classList.remove("active");
        imgThumbElements[currentIndex].classList.remove("active");

        currentIndex++
    
        divElements[currentIndex].classList.add("active");
        imgThumbElements[currentIndex].classList.add("active");
    } else {
        divElements[currentIndex].classList.remove("active");
        imgThumbElements[currentIndex].classList.remove("active");
    
        currentIndex = 0;
    
        divElements[currentIndex].classList.add("active");
        imgThumbElements[currentIndex].classList.add("active");
    }
       
});

const prev = document.querySelector('.prev')


prev.addEventListener("click", function() {
    console.log("prev!")
    if ( currentIndex > 0 ) {
        divElements[currentIndex].classList.remove("active");
        imgThumbElements[currentIndex].classList.remove("active");
    
        currentIndex--
    
        divElements[currentIndex].classList.add("active");
        imgThumbElements[currentIndex].classList.add("active");
    } else {
        divElements[currentIndex].classList.remove("active");
        imgThumbElements[currentIndex].classList.remove("active");
    
        currentIndex = slideItem.length - 1;
    
        divElements[currentIndex].classList.add("active");
        imgThumbElements[currentIndex].classList.add("active");
    }
      
});