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

    // if (index == 0) {
    //     divElement.classList.add("active");
    //     currentIndex = 0;
    // }

    if (active) {
        divElement.classList.add('active');
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

slideItem.forEach(({item, active}, index) => {
    
    
    imgThumbElement = document.createElement('img');
    imgThumbElement.src = `${item}`;

    // if (index == 0) {
    //     imgThumbElement.classList.add("active");
    //     currentIndex = 0;
    // }

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


const next = document.querySelector('.next')

let divElements = document.querySelectorAll('.slider-wrapper > div'); //creazione array
let imgThumbElements = document.querySelectorAll('.control-wrapper > img');

next.addEventListener("click", function() {
    console.log("next!")
    
    // divElements[currentIndex].classList.remove("active");
    // imgThumbElements[currentIndex].classList.remove("active");

    slideItem[currentIndex].active = false;
    console.log(slideItem[currentIndex].active)

    if ( currentIndex < slideItem.length -1 ) {
        currentIndex++
    
        // divElements[currentIndex].classList.add("active");
        // imgThumbElements[currentIndex].classList.add("active");

        slideItem[currentIndex].active = true;
    } else {
        currentIndex = 0;
    
        // divElements[currentIndex].classList.add("active");
        // imgThumbElements[currentIndex].classList.add("active");

        slideItem[currentIndex].active = true;
    }
    
    controlActive();
});

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

const prev = document.querySelector('.prev')


prev.addEventListener("click", function() {
    console.log("prev!")
    // divElements[currentIndex].classList.remove("active");
    // imgThumbElements[currentIndex].classList.remove("active");

    slideItem[currentIndex].active = false;
    
    if ( currentIndex > 0 ) {
        currentIndex--
    
        // divElements[currentIndex].classList.add("active");
        // imgThumbElements[currentIndex].classList.add("active");

        slideItem[currentIndex].active = true;
    } else {
        currentIndex = slideItem.length - 1;
    
        // divElements[currentIndex].classList.add("active");
        // imgThumbElements[currentIndex].classList.add("active");

        slideItem[currentIndex].active = true;
    }

    controlActive();
      
});