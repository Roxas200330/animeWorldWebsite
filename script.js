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

const cart = [];

const newStock = [];

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
displayCart();

function displayCart(){
    console.log("DISPLAYINg");
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
        let index = cart.indexOf(item);
        cart.splice(index,1)
        item.stock++;
        console.log(item.stock);
        displayCart();
        const productElement = document.createElement("div");
        productElement.textContent = `${products[i].name} - QR ${products[i].price} - ${products[i].anime} - ${products[i].category} - Stock: ${item.stock}`;  
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

for (let i = 0; i < products.length; i++) {
    const productElement = document.createElement("div");
    productElement.textContent = `${products[i].name} - QR ${products[i].price} - ${products[i].anime} - ${products[i].category} - Stock: ${products[i].stock}`;  
    displayProducts.appendChild(productElement);
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.addEventListener("click", () => {
        
        //console.log(total)
        if(products[i].stock > 0){
        productElement.textContent = `${products[i].name} - QR ${products[i].price} - ${products[i].anime} - ${products[i].category} - Stock: ${products[i].stock}`;  
        products[i].stock--;
        cart.push(products[i]);
        displayCart();
        const total = cart.reduce((total, product) => total + product.price, 0);
        const totalElement = document.getElementById("Total");
        totalElement.textContent = `Total Price: QR ${total.toFixed(2)}`;
        //console.log(total)
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














    