"use strice";

let elForm = document.querySelector(".form__el");
let elSelect = document.querySelector(".form__select");
let elSearch = document.querySelector(".form__seafrch");
let elList = document.querySelector('.books__list');
let elBtn = document.querySelector(".books__btn");
let elBtnSave = document.querySelector(".form__save");


books = books.map(item => {
    item.id = Math.random()
    return item
})

renderUi(books);


function renderUi(arr) {

    arr.forEach((el, index) => {

        let elItem = document.createElement('li');
        elItem.setAttribute('class', 'books__item');

        elItem.innerHTML = `
    
    <div class="books__img">
        <img style="border-radius: 15px;" width="200" height="200" src="${el.imageLink}" alt="${el.title}">
    </div>
    <div class="books__info">
        <h3 class="books__name">${el.author}: ${el.title}</h3>
        <span class="books__country">${el.country}</span>
        <a class="books__link" href="${el.link}">wikipedia</a>
        <span class="books__years">year: ${el.year}     Pages: ${el.pages}</span>
    </div>
    <button class="books__btn" data-basket-id=${el.id}>
    </button>
    
    `

        elList.append(elItem);

    })
};

elForm.addEventListener("keyup", evt => {
    evt.preventDefault();

    let value = evt.target.value;
    elList.innerHTML = '';

    arrTitle = books.filter(item => {
        return item.title.includes(value);
    });
    renderUi(arrTitle);

})

// const lang = books.map(item => {
//     return lang.includes(item.language);
// })
// console.log(lang);

let lang = [];
selectUi(lang);

function selectUi(arr) {

    books.forEach(item => {
        if (!arr.includes(item.language)) {
            arr.push(item.language);
        }
    });

    arr.forEach(item => {
        let elOption = document.createElement('option');
        elOption.textContent = item;
        elSelect.append(elOption);
    });

}


elSelect.addEventListener("change", (evt) => {
    evt.preventDefault();
    let value = evt.target.value;

    elList.innerHTML = '';

    let select = books.filter(item => {
        return value == item.language;
    });

    renderUi(select);
})

let basket = [];
elList.addEventListener("click", function(evt) {
    if (evt.target.matches(".books__btn")) {
        let id = evt.target.dataset.basketId
        let obj = books.find(item => item.id == id)
        if (!basket.includes(obj)) {
            basket.push(obj);
        } else {
            let index = basket.indexOf(obj);
            basket.splice(index, index + 1);
        }
        // console.log(basket);


    }

});


let elSave = document.querySelector(".form__basket");

elBtnSave.addEventListener("click", evt => {
    evt.preventDefault();

    if (basket.length > 0) {
        elSave.classList.toggle("toggle");
    } else {
        alert("Hech qaysi kitob tanlanmagan !!!");
    }

    saveArr(basket);


})



function saveArr(arr) {
    console.log(arr);
    arr.forEach((el, index) => {

        let elItem = document.createElement('li');
        elItem.setAttribute('class', 'books__item');

        elItem.innerHTML = `

<div class="books__img">
    <img style="border-radius: 15px;" width="200" height="200" src="${el.imageLink}" alt="${el.title}">
</div>
<div class="books__info">
    <h3 class="books__name">${el.author}: ${el.title}</h3>
    <span class="books__country">${el.country}</span>
    <a class="books__link" href="${el.link}">wikipedia</a>
    <span class="books__years">year: ${el.year}     Pages: ${el.pages}</span>
</div>
<button class="books__btn" data-basket-id=${el.id}>
</button>

`

        elSave.append(elItem);


    });
}