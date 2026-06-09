    function loadCart(){
        const cart = JSON.parse(localStorage.getItem("cart"))
        let container = document.querySelector('.cartContainer')
        container.innerHTML=''

        let total = 0;

        cart.forEach((item, index) => {

            total += item.price * item.qty;
            container.innerHTML += `
                <div class="cart-item">
                    
                    <div class="left">
                        <img src="${item.img}" alt="${item.name}">
                        <div class="details">
                            <h3>${item.name}</h3>
                            <p class="price">₹${item.price}</p>
                        </div>
                    </div>

                    
                        <div class="qtyBox">
                            <button onclick="decreaseQty(${index})">-</button>
                            <span>${item.qty}</span>
                            <button onclick="increaseQty(${index})">+</button>
                        </div>

                        <button class="removeBtn" onclick="removeItem(${index})">Remove</button>
                    
                </div>
            `;
        });

        totalPrice.innerText = total;
    }

    function increaseQty(index){
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart[index].qty++;
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }


    function decreaseQty(index){
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if(cart[index].qty > 1){
            cart[index].qty--;
        }else{
            cart.splice(index, 1);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }

    function removeItem(index){
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }

    loadCart();
    const checkoutBtn = document.querySelector('.checkoutBtn')
    checkoutBtn.addEventListener("click", () => {
        window.location.href = "order_success.html";
    });
