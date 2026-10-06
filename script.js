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
    products[0],
    products[2],
    products[3]
];

const totalPrice = cart.reduce((total, product) => total + product.price, 0);

const names = products.map(product => product.name);

const figuresFilter = products.filter(product => product.category === "Clothing");

const animeFilter = products.filter(product => product.anime === "One Piece");

const stockFilter = products.filter(product => product.stock > 10);

console.log(stockFilter);
//console.log(animeFilter); 
