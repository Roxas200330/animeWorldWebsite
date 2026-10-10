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
    }
]

const cart = [
    products[1],
    products[2],
];

const newStock = [];


//let cartCount = 0;

//const totalPrice = cart.reduce((total, product) => total + product.price, 0);

const names = products.map(product => product.name);

const figuresFilter = products.filter(product => product.category === "Clothing");

const animeFilter = products.filter(product => product.anime === "One Piece");

const stockFilter = products.filter(product => product.stock > 10);

const displayProducts = document.getElementById("product-list");



/*function totalPrice() {
    const total = cart.reduce((total, product) => total + product.price, 0);
    return total;
}*/

/*function displayEverything(total) {
    //cartCount++;
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = `In Cart: ${cart.length}`;
    const totalElement = document.getElementById("Total");
    totalElement.textContent = `Total Price: QR ${total.toFixed(2)}`;
    const totalInCartElement = document.getElementById("In Cart:");
    totalInCartElement.textContent = `In Cart: ${cart.map(product => product.name).join(", ")}`;
}*/



for (let i = 0; i < products.length; i++) {
    const productElement = document.createElement("div");
    productElement.textContent = `${products[i].name} - QR ${products[i].price} - ${products[i].anime} - ${products[i].category} - Stock: ${products[i].stock}`;  
    displayProducts.appendChild(productElement);
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.addEventListener("click", () => {
        //console.log(total)
        if(products[i].stock > 0){
        products[i].stock--;
        cart.push(products[i]);
        const total = cart.reduce((total, product) => total + product.price, 0);
        const totalElement = document.getElementById("Total");
        totalElement.textContent = `Total Price: QR ${total.toFixed(2)}`;
        //console.log(total)
        }

 
        
        const cartCountElement = document.getElementById("cart-count");
        cartCountElement.textContent = `In Cart: ${cart.length}`;
        const totalInCartElement = document.getElementById("In Cart:");

        if(cart.lenght == 0 ){
            totalInCartElement.textContent = `In Cart: ${cart.map(product => product.name).join(", ")}`;
        }
        

        if (products[i].stock > 0) {
        const totalStockElement = document.getElementById("Stock");
        totalStockElement.textContent = `Stock: ${products[i].stock}`
        }

        else if (products[i].stock <= 0) {
            const totalStockElement = document.getElementById("Stock");
            totalStockElement.textContent = `Sorry this item is out of stock`;
        }
            
    });
    displayProducts.appendChild(button);
}

for(let i = 0; i < cart.length; i++){
       const button2 = document.createElement("button");
       button2.textContent = "Remove";
       document.getElementById("cart-items").appendChild(button2);
       button2.addEventListener("click", () =>{
       const inCart = cart.reduce((total, product) => total + product.name[1], 0);
       //randomElement.textContent ='this test worked ';

    
})
    }














    