//variables for nav
const iconMenu = document.getElementById('icon-menu')
const iconClose = document.getElementById('icon-close')
const navLinks = document.querySelector('.nav-link-container')

iconMenu.addEventListener('click', ()=>{
    navLinks.classList.add('nav-active')
})
iconClose.addEventListener('click', ()=>{
    navLinks.classList.remove('nav-active')
})


//Images array of objects to display the products when the next or prev icon is clicked
const productImages = [
    {
        id: 1,
        src : 'images/image-product-1.jpg'
    },
    {
        id: 2,
        src : 'images/image-product-2.jpg'
    },
    {
        id: 3,
        src : 'images/image-product-3.jpg'
    },
    {
        id: 4,
        src : 'images/image-product-4.jpg'
    }
]

const productThumbnails = [
    {
        id: 1,
        src : 'images/image-product-1-thumbnail.jpg'
    },
    {
        id: 2,
        src : 'images/image-product-2-thumbnail.jpg'
    },
    {
        id: 3,
        src : 'images/image-product-3-thumbnail.jpg'
    },
    {
        id: 4,
        src : 'images/image-product-4-thumbnail.jpg'
    },
]

//next and prev icons variables and event listeners
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const heroImg = document.getElementById('hero-img')

let currentImg = 0

window.addEventListener('DOMContentLoaded', ()=> {
    // showProduct()

    function slide(){
        const slideimg = productImages[currentImg]
        heroImg.src = slideimg.src
        currentImg++

        if(currentImg > productImages.length - 1){
            currentImg = 0
        }

        setTimeout(slide, 5000)
    }

    slide()
})

function showProduct(){
    const productImg = productImages[currentImg]
    heroImg.src = productImg.src
}

next.addEventListener('click', ()=>{
    currentImg++

    if(currentImg > productImages.length - 1){
        currentImg = 0 
    }

    showProduct()
})

prev.addEventListener('click', ()=>{
    currentImg--

    if(currentImg < 0){
        currentImg = productImages.length - 1
    }

    showProduct()
})


//adding and minusing from cart variables/functions/event-listeners
const operationIcons = document.querySelectorAll('.operation')
const itemCount = document.getElementById('item-count')

let count = 0
operationIcons.forEach( operationIcon => {
    operationIcon.addEventListener('click', ()=>{
        if(operationIcon.classList.contains('add')){
            count++
            itemCount.innerText = count;
        }else{
            count--
            if(itemCount.innerText == 0){
                count = 0
            }
            itemCount.innerText = count
        }
    })
});


//adding the product and no. of times selected once the add-to-cart-btn is clicked
const addtoCartBtn = document.getElementById('add-to-cart-btn')
const cartTotalNoItems = document.querySelector('.cart-total-items')

//cart variables and functionalities
const cartIcon = document.querySelector('.icon-cart-container')
const cart = document.querySelector('.cart')
const cartItems = document.querySelector('.cart-items')
const cartSalesPrice = document.getElementById('cart-sales-price')
const cartTotalCost = document.getElementById('cart-total-cost')
const noOfTimes = document.getElementById('no-of-times')
const deleteIcon = document.querySelector('.icon-delete')
const cartBtn = document.querySelector('.cart-btn')
const cartItemPresent = document.querySelector('.cart-item-present')
const emptyCart = document.querySelector('.empty-basket')
const salesPriceContainer = document.querySelector('#sales-price')
const costPriceContainer = document.querySelector('#cost-price')

let costPrice = 500 //Dynamically add your cost price
let salesPrice = costPrice/2

costPriceContainer.textContent = '$'+ costPrice + '.00'
salesPriceContainer.textContent = '$'+ salesPrice + '.00'

//toggle cart
cartIcon.addEventListener('click', ()=> {
    cart.classList.toggle('show-cart')
})

//solving for total cost of items in the cart
function solveforTotalCost(){
    noOfTimes.innerText = itemCount.innerText

    //multiplying the noOfTimes with cartSalesPrice
    cartSalesPrice.innerText = '$' + salesPrice + '.00'
    let productOperation = salesPrice * (noOfTimes.innerText/1)
    cartTotalCost.innerText = productOperation + '.00'

    //displaying items in the cart when item count is not equals zero
    if(noOfTimes.innerText == '' || noOfTimes.innerText == 0){
        cartItemPresent.style.display= 'none'
        emptyCart.style.display= 'flex'
        cartTotalNoItems.style.visibility = 'hidden'
    }else{
        emptyCart.style.display= 'none'
        cartItemPresent.style.display= 'block'
        cartTotalNoItems.style.visibility= 'visible'

        window.scroll(0,0)
    }
}


//Adding items to cart
addtoCartBtn.addEventListener('click', ()=>{
    solveforTotalCost()
    cartTotalNoItems.innerText = noOfTimes.innerText
})



//deleting items in cart
deleteIcon.addEventListener('click', (e)=>{
    e.target.parentElement.parentElement.style.display= 'none'
    emptyCart.style.display= 'flex';

    cartTotalNoItems.innerText= ''
})


//JavaScript for tablet and desktop design for the display of different hero-img once thumbnail of its like is clicked
const thumbnails = document.querySelectorAll('.product-thumbnail')

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', ()=>{
        if(thumbnail.classList.contains('0')){
            heroImg.src = productImages[0].src
        }else if(thumbnail.classList.contains('1')){
            heroImg.src = productImages[1].src
        }else if(thumbnail.classList.contains('2')){
            heroImg.src = productImages[2].src
        }else if(thumbnail.classList.contains('3')){
            heroImg.src = productImages[3].src
        }
    })
})