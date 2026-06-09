fetch('components/header.html')
.then((response)=>response.text())
.then((data)=>{
    document.querySelector('#header').innnerHTML = data;
})

fetch('components/footer.html')
.then((response)=>response.text())
.then((data)=>{
    document.getElementById('footer').innnerHTML = data;
})