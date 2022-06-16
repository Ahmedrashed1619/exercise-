

// console.log(018-013); outptu => 7 



/*var firstNameInp = document.getElementById("fName");
var lastNameInp = document.getElementById("lName");
var salaryInp = document.getElementById("salary");

function showData() {
    var name = firstNameInp.value + " " + lastNameInp.value;
    document.getElementById("show").innerHTML = `welcome : ${name} , you will get ${salaryInp.value} $`;
};*/



/*var productNameInp = document.getElementById("productNameInp");
var productPriceInp = document.getElementById("productPriceInp");
var productCategoryInp = document.getElementById("productCategoryInp");
var productDescInpInp = document.getElementById("productDescInpInp");

var productsContainer = [];
function addProduct() {
    var product = {
        productName : productNameInp.value,
        productPrice : productPriceInp.value,
        productCat : productCategoryInp.value,
        productDesc : productDescInpInp.value
    }
    productsContainer.push(product);
    displayProducts();
}

function displayProducts() {
    var car = ``;

    for (var i = 0; i < productsContainer.length; i++) {
    
    car +=
    `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].productName}</td>
        <td>${productsContainer[i].productPrice}</td>
        <td>${productsContainer[i].productCat}</td>
        <td>${productsContainer[i].productDesc}</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button class="btn btn-danger onclick="deleteProduct(${i})">Delete</button></td>
    </tr>`
    }
    document.getElementById("myTable").innerHTML = car;
}

function classForm() {
    productNameInp.value = "";
    productPriceInp.value = "";
    productNameInp.value = "";
    productCateogryInp.value = "";
    productDescInp.value = "";
}

function deleteProduct(index) {
    productsContainer.splice(index,1);
    localStorage.setItem("ourProductslatest");
    JSON.stringify(productsContainer);

    displayProducts();

}*/




/*var productNameInp = document.getElementById('pName');
var productPriceInp = document.getElementById('pPrice');
var productCategoryInp = document.getElementById('pCat');
var productDescInp = document.getElementById('pDesc');

var addBtn = document.getElementById('addBtn');

var currentIndex ;

var products = [];
if(JSON.parse(localStorage.getItem('listProducts')) != null) {
    products = JSON.parse(localStorage.getItem('listProducts'));
    displayProduct();
}

addBtn.onclick = function() {
    if (addBtn.innerHTML == 'Add Product') {
        addProduct ();
    } else {
        updateProduct();
    }
    
    displayProduct ();
    resetForm ();
}

function addProduct (){
    if (validationProductName()){
        var product =
        {
            name : productNameInp.value,
            price : productPriceInp.value,
            category : productCategoryInp.value,
            desc : productDescInp.value,
        }
        products.push(product);
        localStorage.setItem('listProducts',JSON.stringify(products));
    }
    else {
        alert("ay 7aga");
    }
}

function displayProduct (array){
    var row = '';
    for (var i = 0; i < products.length; i++) {
        row += 
            `<tr>
                <td>${i+1}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].category}</td>
                <td>${products[i].desc}</td>
                <td><button class="btn btn-warning" onclick="getProductInfo(${i})">Update</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`;
    };
    document.getElementById('myTable').innerHTML = row ;
}

function resetForm (){
    var resetInputs = document.getElementsByClassName('form-control');
    for (var i = 0; i < resetInputs.length; i++) {
        resetInputs[i].value = ``;
    }
}

function deleteProduct(index){
    products.splice(index,1);
    displayProduct();
    localStorage.setItem('listProducts',JSON.stringify(products));
}

function getProductInfo(index){
    currentIndex = index;
    var currentProduct = products[index];
    productNameInp.value = currentProduct.name;
    productPriceInp.value = currentProduct.price;
    productCategoryInp.value = currentProduct.category;
    productDescInp.value = currentProduct.desc;

    addBtn.innerHTML = "Update Product";
}

function updateProduct (){
    var product =
    {
        name : productNameInp.value,
        price : productPriceInp.value,
        category : productCategoryInp.value,
        desc : productDescInp.value,
    }
    products[currentIndex] = product;
    localStorage.setItem('listProducts',JSON.stringify(products));
}

function searchProduct (index){
    var searchContainer = [];

    for (var i = 0; i < productContainer.length; i++) {
        if ((productContainer[i].name.toLowerCase().include(index.toLowerCase())) || (productContainer[i].category.toLowerCase().include(index.toLowerCase()))) {
            searchContainer.push(productContainer[i]);
        }
        displayProduct(searchContainer);
    }
}


function validationProductName(){
    var regx = /^[A-Z][a-z]{1,4}$/
    if (regx.test(productNameInp.value)){
        return true;
    }
    else {
        return false
    }
}*/






/*var productNameInp = document.getElementById('pName');
var productPriceInp = document.getElementById('pPrice');
var productCategoryInp = document.getElementById('pCat');
var productDescriptionInp = document.getElementById('pDesc');
var addBtn = document.getElementById('addBtn');
var resetBtn = document.getElementById('resetBtn');
var updateBtn = document.getElementById('updateBtn');
updateBtn.style.display = "none";
var currentIndex;
var alertName = document.getElementById('alertName');
var alertPrice = document.getElementById('alertPrice');
var alertCate = document.getElementById('alertCate');
var alertDesc = document.getElementById('alertDesc');


var products = [];
if(JSON.parse (localStorage.getItem('productsList')) != null) {
    products = JSON.parse (localStorage.getItem('productsList'));
    displatProduct();
}

addBtn.onclick = function(){
    if(validProductName () == true && validProductPrice () == true && validProductCate () == true && validProductDesc () == true)
    {
        addProduct ();
        displatProduct ();
        resetForm ();
    }
    else
    {
        alert('The Register is not Valid..');
    }
}    

resetBtn.onclick = function(){
    resetForm ();
}

updateBtn.onclick = function(){
    updateProduct();
    displatProduct();
    resetForm ();
    updateBtn.style.display = "none";
}

function addProduct (){
    var product =
    {
        name : productNameInp.value,
        price : productPriceInp.value,
        cate : productCategoryInp.value,
        desc : productDescriptionInp.value,
    }
        products.push(product);
        localStorage.setItem('productsList' , JSON.stringify(products));
}

function displatProduct (){
    var row = '';
    for (var i = 0; i < products.length; i++){
        row += 
        `<tr>
            <td>${i+1}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].cate}</td>
            <td>${products[i].desc}</td>
            <td><button class="btn btn-warning" onclick = "getProductInfo(${i})">Update</button></td>
            <td><button class="btn btn-danger" onclick = "deleteProduct(${i})">Delete</button></td>
        </tr>`
    }
    document.getElementById('myTable').innerHTML = row;
}

function resetForm (){
    var inputs = document.getElementsByClassName('form-control');
    for (var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
    }
}

function deleteProduct (index){
    products.splice(index,1);
    displatProduct();
    localStorage.setItem('productsList' , JSON.stringify(products));
}

function getProductInfo (index){
    currentIndex = index;
    var currentProduct = products[index];
        productNameInp.value = currentProduct.name;
        productPriceInp.value = currentProduct.price;
        productCategoryInp.value = currentProduct.cate;
        productDescriptionInp.value = currentProduct.desc;
        updateBtn.style.display = "block";
}

function updateProduct (){
    var product = {
        name : productNameInp.value,
        price : productPriceInp.value,
        cate : productCategoryInp.value,
        desc : productDescriptionInp.value,
    }
    products[currentIndex] = product;
    localStorage.setItem('productsList' , JSON.stringify(products));
}

function searchName(searchText){
    var row = '';
    for (var i = 0; i < products.length; i++){
        if(products[i].name.toLowerCase().includes(searchText.toLowerCase())){
            row += 
            `<tr>
                <td>${i+1}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].cate}</td>
                <td>${products[i].desc}</td>
                <td><button class="btn btn-warning" onclick = "getProductInfo(${i})">Update</button></td>
                <td><button class="btn btn-danger" onclick = "deleteProduct(${i})">Delete</button></td>
            </tr>`
        }
        document.getElementById('myTable').innerHTML = row;
    }
}

function searchCate(searchText){
    var row = '';
    for (var i = 0; i < products.length; i++){
        if(products[i].cate.toLowerCase().includes(searchText.toLowerCase())){
            row += 
            `<tr>
                <td>${i+1}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].cate}</td>
                <td>${products[i].desc}</td>
                <td><button class="btn btn-warning" onclick = "getProductInfo(${i})">Update</button></td>
                <td><button class="btn btn-danger" onclick = "deleteProduct(${i})">Delete</button></td>
            </tr>`
        }
        document.getElementById('myTable').innerHTML = row;
    }
}


function validProductName (){
    var regexName = /^[A-Z][a-z]{2,5}$/;
    if(regexName.test(productNameInp.value))
    {
        productNameInp.classList.add('is-valid');
        productNameInp.classList.remove('is-invalid');
        alertName.classList.add('d-none');
        return true;
    }
    else
    {
        productNameInp.classList.add('is-invalid');
        productNameInp.classList.remove('is-valid');
        alertName.classList.remove('d-none');
        return false;
    }
}


function validProductPrice (){
    var regexPrice = /^([1-9][0-9][0-9]|1000)$/;
    if(regexPrice.test(productPriceInp.value))
    {
        productPriceInp.classList.add('is-valid');
        productPriceInp.classList.remove('is-invalid');
        alertPrice.classList.add('d-none');
        return true;
    }
    else
    {
        productPriceInp.classList.add('is-invalid');
        productPriceInp.classList.remove('is-valid');
        alertPrice.classList.remove('d-none');
        return false;
    }
}

function validProductCate (){
    if(productCategoryInp.value == productNameInp.value)
    {
        productCategoryInp.classList.add('is-valid');
        productCategoryInp.classList.remove('is-invalid');
        alertCate.classList.add('d-none');
        return true;
    }
    else
    {
        productCategoryInp.classList.add('is-invalid');
        productCategoryInp.classList.remove('is-valid');
        alertCate.classList.remove('d-none');
        return false;
    }
}

function validProductDesc (){
    var regexDesc = /^(Bad|Medium|Good|V.good|Excellent)$/;
    if(regexDesc.test(productDescriptionInp.value))
    {
        productDescriptionInp.classList.add('is-valid');
        productDescriptionInp.classList.remove('is-invalid');
        alertDesc.classList.add('d-none');
        return true;
    }
    else
    {
        productDescriptionInp.classList.add('is-invalid');
        productDescriptionInp.classList.remove('is-valid');
        alertDesc.classList.remove('d-none');
        return false;
    }
}*/


// if( productNameInp.onkeyup == true && productPriceInp.onkeyup == true && productCategoryInp.onkeyup == true && productDescriptionInp.onkeyup == true)
// {
//     addBtn.removeAttribute('disabled');
// }
// else
// {
//     addBtn.disabled = 'true';
// }





/*var fire = document.getElementById('demo');

document.addEventListener('mousemove',function(e){
    fire.style.left = e.clientX;
    fire.style.top = e.clientY;
})*/






/*async function getNews (cat){
    var res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cat}`);
    var finalResult = await res.json();
    console.log(finalResult.articals);
}

(async function () {
    await getNews('general');
    await getNews('health');
    await getNews('sports');
})*/




/*var imges = Array.from(document.querySelectorAll('.myTist img'));
var lightBoxContainer = document.querySelector('.lightBoxContainer');
var lightBoxItem = document.querySelector('.lightBoxItem');
var currentIndex = 0;
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');
var closeBtn = document.getElementById('close');

for(var i = 0; i < imges.length; i++)
{
    imges[i].addEventListener('click' , function (e) {
        currentIndex = imges.indexOf(e.target);
        var currentImg = e.target.src;
        lightBoxItem.style.backgroundImage = `url(${currentImg})`;
        lightBoxContainer.classList.replace('d-none','d-flex');
    })
}

function closeSlider() {
    lightBoxContainer.classList.replace('d-flex','d-none');
}

closeBtn.addEventListener('click' , closeSlider)

function getNextSlide() {
    currentIndex++;
    if(currentIndex == imges.length)
    {
        currentIndex = 0;
    }
    var currentImg = imges[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${currentImg})`;
}

function getPrevSlide() {
    currentIndex--;
    if(currentIndex < 0)
    {
        currentIndex = imges.length-1;
    }
    var currentImg = imges[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${currentImg})`;
}

nextBtn.addEventListener('dblclick' , getNextSlide);
prevBtn.addEventListener('dblclick' , getPrevSlide);

document.addEventListener("keydown" , function(e){
    if(e.key == 'ArrowRight')
    {
        getNextSlide();
    }
    else if(e.key == 'ArrowLeft')
    {
        getPrevSlide();
    }
    else if(e.key == 'Escape')
    {
        closeSlider();
    }
})*/




/*var imgList = Array.from( document.querySelectorAll('.myTist img') );
var lightBoxContainer = document.querySelector('.lightBoxContainer');
var lightBoxItem = document.querySelector('.lightBoxItem');
var currentIndex;
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');
var closeBtn = document.getElementById('close');

for (var i = 0; i < imgList.length; i++){
    imgList[i].addEventListener('click' , function(e){
        currentIndex = imgList.indexOf(e.target);
        var imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace('d-none' , 'd-flex');
    })
}

function getCloseShow (){
    lightBoxContainer.classList.replace('d-flex' , 'd-none');
}

function getNextSlide (){
    currentIndex++;
    if (currentIndex == imgList.length){
        currentIndex = 0;
    }
    var imgSrc = imgList[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function getPrevSlide (){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = imgList.length-1;
    }
    var imgSrc = imgList[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

nextBtn.addEventListener('click' , getNextSlide);
prevBtn.addEventListener('click' , getPrevSlide);
closeBtn.addEventListener('click' , getCloseShow);

document.addEventListener("keydown" , function(e){
    if (e.key == 'ArrowRight'){
        getNextSlide();
    }
    else if(e.key == 'ArrowLeft'){
        getPrevSlide();
    }
    else if(e.key == 'Escape'){
        getCloseShow();
    }
})*/




/*var showData = document.querySelector('.row');

function getMovie(){
    return new Promise(function(callback){
        var myHttp = new XMLHttpRequest();
        var userPosts =[];
        myHttp.open('GET','https://api.themoviedb.org/3/trending/movie/week?api_key=679be9df413c0b58a1bfd3e47cfcaf06');
        
        myHttp.send();
        
        myHttp.addEventListener('readystatechange',function(){
            if(myHttp.readyState == 4 && myHttp.status == 200){
                userPosts = JSON.parse(myHttp.response).results;
                console.log( userPosts);
                // displayPosts(title);
                callback();
            }
        })
    })
    
}


function getTv(){
    return new Promise(function(callback){
        var myHttp = new XMLHttpRequest();
        var userPosts =[];
        myHttp.open('GET','https://api.themoviedb.org/3/trending/tv/week?api_key=679be9df413c0b58a1bfd3e47cfcaf06');
        
        myHttp.send();
        
        myHttp.addEventListener('readystatechange',function(){
            if(myHttp.readyState == 4 && myHttp.status == 200){
                userPosts = JSON.parse(myHttp.response).results;
                console.log( userPosts);
                // displayPosts(title);
                callback();
            }
        })
    })
}


function getAllShow(){
    return new Promise(function(callback){
        var myHttp = new XMLHttpRequest();
        var userPosts =[];
        myHttp.open('GET','https://api.themoviedb.org/3/trending/all/day?api_key=679be9df413c0b58a1bfd3e47cfcaf06');
        
        myHttp.send();
        
        myHttp.addEventListener('readystatechange',function(){
            if(myHttp.readyState == 4 && myHttp.status == 200){
                userPosts = JSON.parse(myHttp.response).results;
                console.log( userPosts);
                // displayPosts(name);
                callback();
            }
        })
    })
}

function getPerson(){
    return new Promise(function(callback){
        var myHttp = new XMLHttpRequest();
        var userPosts =[];
        myHttp.open('GET','https://api.themoviedb.org/3/trending/person/day?api_key=679be9df413c0b58a1bfd3e47cfcaf06');
        
        myHttp.send();
        
        myHttp.addEventListener('readystatechange',function(){
            if(myHttp.readyState == 4 && myHttp.status == 200){
                userPosts = JSON.parse(myHttp.response).results;
                console.log( userPosts);
                // displayPosts(name);
                callback();
            }
        })
    })
}

function endNews(){
    console.log('5lsnaaa');
}




/*getAllShow(function() {
    getTv(function() {
        getPerson(function() {
            getMovie(function() {
                endNews();
            });
        });
    });
});*/

/*getAllShow()
.then(function () { return getTv () })
.then(function () { return getPerson () })
.then(function () { return getMovie() })
.then(function () {  endNews() })*/



// getMovie();
// getAllShow();




// function one(){
//     console.log('One')
// }

// function two(index){
//     console.log('Two')

//     index();
// }

// two(one);



/*function displayPosts(index){
    var row = ``;
    for(var i = 0; i < userPosts.length; i++){
        row +=
            `<div class="col-md-4">
                <div class="test text-center">
                <img src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}" class="w-100" alt="">
                <h3>${userPosts[i].index}</h3>
                    <p>${userPosts[i].overview}</p>
                </div>
            </div>`
    }
    showData.innerHTML = row;
}*/


// var anchors = Array.from(document.querySelectorAll('ul li a'));
// var showData = document.getElementById('show');
// var searchInput = document.getElementById('search')
// var member = document.getElementById('car');
// var meals = [];
// var showModal = document.getElementById('showModal');
// var result ;
// // var currentMeal ;


// for(var i = 0; i < anchors.length; i++){
//     anchors[i].addEventListener('click' , function (e) {
//         currentMeal = e.target.text.toLowerCase();
//         getAllRecipes(currentMeal);
//         showData.classList.replace('d-none','d-block');
//     })
// }

// async function getAllRecipes(index){
//     var myHttp = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${index}`);
//     myHttp = await myHttp.json();
//     meals = myHttp.recipes;
//     displayData();
// }

// async function getRecipeModal(index){
//     result = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${index}`);
//     result = await result.json();
//     displayModal();
// }

// function displayData(){
//     var row = '';
//     for(var i = 0; i < meals.length; i++){
//         row +=
//         `<div class="col-md-4">
//             <div class="mael p-3">
//                 <img src="${meals[i].image_url}" class="w-100 h-50" alt="">
//                 <h3 class="text-center my-2">${meals[i].title}</h3>
//                 <a href="${meals[i].source_url}" class="text-decoration-none text-white btn btn-primary">Source</a>
//                 <a onclick='getRecipeModal(${meals[i].recipe_id})' href="" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning text-decoration-none text-white">Deteles</a>
//             </div>
//         </div>
//         `
//     }
//     member.innerHTML = row;
// }

// function displayModal(){
//     var row =
//     `
//     <img src="${result.recipe.image_url}" class="w-100 h-50" alt="">
//     <h3 class="text-center my-3 bg-warning text-black w-75 mx-auto p-2">${result.recipe.title}</h3>
//     `
//     // if()
//     showModal.innerHTML = row;
// }


// class Person {
//     constructor(name,age,salary){
        
//     }
// }


// $('#start').click(function(){
//     $('section').animate({width : '100%'}, 2000);
//     $('section').animate({height : '100vh'}, 2000);
// })




// let Person = function(name, age, salary)
// {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.work =function (){
//         alert(this.name + ' ay7aga');
//     }
// }

// let user = new Person('Ahmed', 25, 7000);

// console.log(Person);
// console.log(user);
// user.work();





// import * as item from './validation.js';

// item.calcSum();




$('.btn').click(function(){
    $('.test').toggle(1000).css({'backgroundColor':'#09c','color':'#fff'}, 2000 , function(){
        $('.btn').fadeTo(1000,0.5);
    });
})











// class Person {
//     constructor(name, age, salary){
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     work(){
//         console.log('ay7aga');
//     }
//     test(){
//         console.log('teeeest');
//     }
// }

// let user = new Person ('Ahmed', 25, 7000);

// console.log(Person);
// console.log(user);
// user.work();
// user.test();


// class Doctor extends Person {
//     constructor(name, age, salary, id, category){
//         super(name, age, salary);
//         this.id = id;
//         this.category = category;
//     }
// }

// let omar = new Doctor('omar', 27, 8000, 2, 'goood');

// console.log(omar);