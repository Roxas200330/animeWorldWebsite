const products = [
    {
        name: "Gojo Satoru T-shirt",
        price: 19.99,
        category: "Clothing",
        anime: "Jujutsu Kaisen",
        stock: 10
    },
    {
        name: "Demon Slayer Poster",
        price: 9.99,
        category: "Posters",
        anime: "Demon Slayer",
        stock: 5
    },
    {
        name: "Naruto Hoodie",
        price: 29.99,
        category: "Clothing",
        anime: "Naruto",
        stock: 13
    },
    {
        name: "One Piece Mug",
        price: 12.99,
        category: "Accessories",
        anime: "One Piece",
        stock: 14
    },
    {
        name: "One Piece Poster",
        price: 4,
        category: "Accessories",
        anime: "One Piece",
        stock: 2
    },
    {
        name: "Gurren Lagann STTGL gundam",
        price: 500,
        category: "Figure",
        anime: "Gurren Lagann",
        stock: 1
    },
    {
        name: "Reaver Vandal",
        price: 1000,
        category: "Props",
        game: "Valorant",
        stock: 2
    },
]

const cart = [];

const productElements = [];

const addToCartElements = [];

const detailElements = []

const names = products.map(product => product.name);

const clothingFilter = products.filter(product => product.category === "Clothing");

//const animeFilter = products.filter(product => product.anime === userChoice);

const stockFilter = products.filter(product => product.stock > 10);

const displayProducts = document.getElementById("product-list");

const buttonSection = document.getElementById("hello");

let userChoice = "";

let userMerch = "";



displayCart();
showAll(products);

const clearButton = document.createElement("button");
clearButton.textContent = "Reset";
buttonSection.appendChild(clearButton);



const selectElement = document.getElementById("animes")
const selectMerch = document.getElementById("merchandise")

selectMerch.addEventListener("change", (event) =>{
userMerch = event.target.value;

const merchFilter = products.filter(product => product.category === userMerch);
filter(merchFilter);
});

selectElement.addEventListener("change", (event) => {
userChoice = event.target.value;

if(userChoice === "All"){
    showAll(products);
    console.log("WORKING");
}else{
    const animeFilter = products.filter(product => product.anime === userChoice);
   filter(animeFilter);
}

});

clearButton.addEventListener("click", () =>{
       clear();
});




function displayCart(){
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
     for (let i = 0; i < cart.length; i ++){
        const item = cart[i];
        const itemElement = document.createElement("div");
        itemElement.textContent = item.name;

        const button = document.createElement("button");
        button.textContent = ("Remove");

        button.addEventListener("click", ()=>
        {        
        item.stock++;
        let index = cart.indexOf(item);
        cart.splice(index,1)
        //item.stock++;
        console.log(item.stock);
        const productIndex = products.indexOf(item);
        addToCartElements[productIndex].disabled = false;
        
        detailElements[productIndex].textContent = 
        `${item.name} - QR ${item.price} - ${item.anime} - ${item.category} - Stock: ${item.stock}`;

        displayCart();

     });
        
        itemElement.appendChild(button);
        cartItemsElement.appendChild(itemElement);
    }

    const total = cart.reduce(
        (total, product) => total + product.price,
        0
    );
    document.getElementById ("Total").textContent = 
    `Total Price: QR ${total.toFixed(2)}`;
    document.getElementById("cart-count").textContent = 
    `In Cart: ${cart.length}`;
    
     }

function showAll(productArray){
for (let i = 0; i < productArray.length; i++) {
    const productElement = document.createElement("div");
    productElement.classList.add("product-card");
    //displayProducts.classList.add("product-card");
    console.log(productArray);
    //create image
    const image = document.createElement("img");
    image.src = "witch.png";
    image.alt = productArray[i].name;
    productElement.appendChild(image);

    productElements[i] = productElement;

    //create details
    const details = document.createElement("p");
    details.textContent = 
    `${productArray[i].name} - QR ${productArray[i].price} - ${productArray[i].anime} - ${productArray[i].category} - Stock: ${productArray[i].stock}`;    
    detailElements[i] = details;
    productElement.appendChild(details);
     
    //create buttons
    const button = document.createElement("button");
    //const filterButton = document.createElement("button");
    //const clothingButton = document.createElement("button");
    //const clearButton = document.createElement("button");
    productElement.appendChild(button);
    //productElement.appendChild(filterButton);
    //productElement.appendChild(clothingButton);
    //productElement.appendChild(clearButton);


    //filterButton[i] = filterButton;  //keep track of all the filter button elements
    addToCartElements[i] = button;  //keep track of all the addtocart button elements 
    button.textContent = "Add to Cart";
    //filterButton.textContent = "Filter by anime";
    //clothingButton.textContent = "Filter by clothing";
    //clearButton.textContent = "Clear Filter";

    button.addEventListener("click", () => {
        //console.log(total)
        if(productArray[i].stock > 0){
        productArray[i].stock--;
        cart.push(productArray[i]);
        displayCart();

           if(productArray[i].stock === 0){
          details.textContent = 
         `${productArray[i].name} - QR ${productArray[i].price} - ${productArray[i].anime} - ${productArray[i].category} - Stock: This Item is out of stock!`;
         button.disabled = true; 
        } else {
        //cart.push(products[i]);
        details.textContent = 
        `${productArray[i].name} - QR ${productArray[i].price} - ${productArray[i].anime} - ${productArray[i].category} - Stock: ${productArray[i].stock}`;
        const total = cart.reduce((total, product) => total + product.price, 0);
        const totalElement = document.getElementById("Total");
        totalElement.textContent = `Total Price: QR ${total.toFixed(2)}`;
        }
        }
    });
        displayProducts.appendChild(productElement);
}
}


 function filter(filterArray){
    while (displayProducts.hasChildNodes()){
        displayProducts.removeChild(displayProducts.firstChild);
        
    } 
        for(let i = 0; i < filterArray.length; i++){
         console.log(filterArray[i]);
         const productElement = document.createElement("div");
         productElement.classList.add("product-card");
         const image = document.createElement("img");
         image.src = "witch.png";
         image.alt = filterArray[i].name;
         productElement.appendChild(image);

         productElements[i] = productElement;

        //create details
         const details = document.createElement("p");
         details.textContent = 
         `${filterArray[i].name} - QR ${filterArray[i].price} - ${filterArray[i].anime} - ${filterArray[i].category} - Stock: ${filterArray[i].stock}`;    
         detailElements[i] = details;
         productElement.appendChild(details);
     
        //create button
          const button = document.createElement("button");
          productElement.appendChild(button);
         button.textContent = "Add to Cart";

        addToCartElements[i] = button;  //keep track of all the addtocart button elements 

        button.addEventListener("click", () => {
        //console.log(total)
        if(filterArray[i].stock > 0){
        filterArray[i].stock--;
        cart.push(filterArray[i]);
        displayCart();

           if(filterArray[i].stock === 0){
          details.textContent = 
         `${filterArray[i].name} - QR ${filterArray[i].price} - ${filterArray[i].anime} - ${filterArray[i].category} - Stock: This Item is out of stock!`;
         button.disabled = true; 
        } else {
        //cart.push(products[i]);
        details.textContent = 
        `${filterArray[i].name} - QR ${filterArray[i].price} - ${filterArray[i].anime} - ${filterArray[i].category} - Stock: ${filterArray[i].stock}`;
        const total = cart.reduce((total, product) => total + product.price, 0);
        const totalElement = document.getElementById("Total");
        totalElement.textContent = `Total Price: QR ${total.toFixed(2)}`;
        }
        }
    });
        displayProducts.appendChild(productElement);

    }
 }

 function clear(){
    while (displayProducts.hasChildNodes()){
        displayProducts.removeChild(displayProducts.firstChild);    
 }
 showAll(products);
}






        
    

    //displayProducts.appendChild(productElement);
    //displayProducts.appendChild(button);
    //displayProducts.appendChild(filterButton);






















    