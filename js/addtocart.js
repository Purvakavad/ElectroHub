function addToCart(img,name,price){
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const existing = cart.find((item)=> {return item.name == name})

    if(existing){
        existing.qty +=1;
    }
    else{
        cart.push({
            img:img,
            name:name,
            price:price,
            qty: 1
        })

    }
    // console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}

        



