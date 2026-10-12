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

const productElements = [];

const addToCartElements = [];

const names = products.map(product => product.name);

const figuresFilter = products.filter(product => product.category === "Clothing");

const animeFilter = products.filter(product => product.anime === "One Piece");

const stockFilter = products.filter(product => product.stock > 10);

const displayProducts = document.getElementById("product-list");

displayCart();
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
        let index = cart.indexOf(item);
        cart.splice(index,1)
        item.stock++;
        console.log(item.stock);
        const productIndex = products.indexOf(item);
        addToCartElements[productIndex].disabled = false;
        productElements[productIndex].textContent = 
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

function filter(){

}

for (let i = 0; i < products.length; i++) {
    const productElement = document.createElement("div");
    const image = document.createElement("img");
    productElement.classList.add("product-card");
    image.src = "witch.png";
    displayProducts.appendChild(image);
    productElements[i] = productElement;
    productElement.textContent = 
    `${products[i].name} - QR ${products[i].price} - ${products[i].anime} - ${products[i].category} - Stock: ${products[i].stock}`;    
    displayProducts.appendChild(productElement); 
    const button = document.createElement("button");
    const filterButton = document.createElement("button");
    filterButton.textContent = "Filter";
    addToCartElements[i] = button;
    button.textContent = "Add to Cart";
    button.addEventListener("click", () => {
        //console.log(total)
        if(products[i].stock > 0){
        products[i].stock--;
           if(products[i].stock === 0){
          productElement.textContent = 
         `${products[i].name} - QR ${products[i].price} - ${products[i].anime} - ${products[i].category} - Stock: This Item is out of stock!`;
         button.disabled = true; 
        } else {
        cart.push(products[i]);
        productElement.textContent = 
        `${products[i].name} - QR ${products[i].price} - ${products[i].anime} - ${products[i].category} - Stock: ${products[i].stock}`;
        displayCart();
        const total = cart.reduce((total, product) => total + product.price, 0);
        const totalElement = document.getElementById("Total");
        totalElement.textContent = `Total Price: QR ${total.toFixed(2)}`;
        }
        
        }
    });

    filterButton.addEventListener("click", () => {

    });
    displayProducts.appendChild(button);
    displayProducts.appendChild(filterButton);
}

















    