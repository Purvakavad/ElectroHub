const filterBtn = document.getElementById('filterBtn')

    const sideBar = document.querySelector('.sidebar')
    // console.log(filterBtn)
    filterBtn.addEventListener('click',()=>{
        sideBar.classList.toggle('active')

    })

const categoryLink = document.querySelectorAll('.category')
const productCard = document.querySelectorAll('.product-card')

    categoryLink.forEach(links=>{
    links.addEventListener('click',()=>{
        // e.preventDefault();
        categoryLink.forEach(c=>c.classList.remove('active'))
        links.classList.add('active')

        const category = links.dataset.category;
        console.log(category)

        productCard.forEach(product => {
            console.log(product)

        if(category === "all"){
            product.style.display = "block";
        }
        else if(product.dataset.category === category){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
    })
})
})


const closeSidebar = document.getElementById('closeSidebar')

closeSidebar.addEventListener('click',()=>{
    sideBar.classList.remove("active");
})


function filterProducts(category) {

    productCard.forEach(product => {

        if (category === "all") {
            product.style.display = "block";
        }
        else if (product.dataset.category === category) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }

    });
}

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
if(category){
    filterProducts(category);
}