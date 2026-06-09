
const loginBtn = document.querySelector('#loginForm');

if(loginBtn){
    loginBtn.addEventListener('submit',(e)=>{
    
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;


    if(email === ''){
        alert('Please email is requier')
        return false;
    }
    if( pass ===''){
        alert('Please password is requier')
        return false;
    }
    const passPettern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;                      
    if(!passPettern.test(pass)){
        alert('password must be \n at least one Upper Case \n at least one Lower Case \n at least one Letter \n at least one Spaciel Charecter  ')
        return false;
    }
    
    window.location.href = "index.html";
})
}

const registerForm = document.getElementById('registerForm')

if(registerForm){
    registerForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const confirmpass = document.getElementById('confirmpass').value;
    if( username=== ''){
        alert('Please username is requier')
        return false;
    }
    if(email === ''){
        alert('Please email is requier')
        return false;
    }
    if( pass ===''){
        alert('Please password is requier')
        return false;
    }
    
    
    const passPettern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if(!passPettern.test(pass)){
        alert('password must be \n at least one Upper Case \n at least one Lower Case \n at least one Letter \n at least one Spaciel Charecter  ')
        return false;
    }
    if(confirmpass === ''){
        alert('Please confirm password is requier')
        return false;
    }
    if(pass !== confirmpass){
        alert('confirm password not metch')
        return false;
    }
    window.location.href = "login.html";

})
}

