const products = [
    {
        name: "Gojo Satoru T-shirt",
        price: 19.99,
        category: "Clothing",
        anime: "Jujutsu Kaisen"
    },
    {
        name: "Demon Slayer Poster",
        price: 9.99,
        category: "Posters",
        anime: "Demon Slayer"
    },
    {
        name: "Naruto Hoodie",
        price: 29.99,
        category: "Clothing",
        anime: "Naruto"
    },
    {
        name: "One Piece Mug",
        price: 12.99,
        category: "Accessories",
        anime: "One Piece"
    }
]

const figuresFilter = products.filter(product => product.category === "Clothing");

console.log(figuresFilter); 
