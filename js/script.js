fetch('components/header.html')
.then((response)=>response.text())
.then((data)=>{
    document.querySelector('#header').innerHTML = data;

    const navLinks = document.querySelector('.nav-links')
    const hamburger = document.querySelector('.hamburger')

    hamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('active')
    })

    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', () => {

        if(window.innerWidth <= 768){
            searchInput.classList.toggle('active');
        }
    });



    searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const value = searchInput.value.trim();

        window.location.href =
            `categories.html?search=${encodeURIComponent(value)}`;
    }
    });
        const params = new URLSearchParams(window.location.search);
    const searchValue = params.get("search");

    if (searchValue) {
        searchInput.value = searchValue;

        document.querySelectorAll(".product-card").forEach(card => {
            const name = card.dataset.name.toLowerCase();
            const category = card.dataset.category.toLowerCase();

            if (
                name.includes(searchValue.toLowerCase()) ||
                category.includes(searchValue.toLowerCase())
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
            
    })

    fetch('components/footer.html')
    .then((response)=>response.text())
    .then((data)=>{
        document.getElementById('footer').innerHTML = data;
    })



