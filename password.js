const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton =document.querySelector("button");

password.addEventListener("input",function(){

    const passwordValue = password.value;
    const passwordLength =passwordValue.length;
    let strengthValue='';
    if(password === 0){
        strengthValue = '';
    }
    else if(passwordLength<=2){
        strengthValue = ' too weak';
        password.style.borderColor = '#ff0000';
        message.style.color = '#ff0000';
    }
    else if(passwordLength<4){
        strengthValue = ' weak';
        password.style.borderColor = '#ff5925';
        message.style.color = '#ff5925';
    }
    else if(passwordLength>=4 && passwordLength<8){
        strengthValue = 'medium';
        password.style.borderColor = 'yellow';
        message.style.color = 'yellow';
    }
    else if(passwordLength>=8){
        strengthValue = 'Strong';
        password.style.borderColor = '#008000';
        message.style.color = '#008000';
    }
    strength.textContent = strengthValue;
    message.style.display = "block"
});

submitButton.addEventListener("click",function(){
    const  passwordType = password.getAttribute('type');

    if(passwordType === 'password'){
        password.setAttribute('type','text')
    }else{
        password.setAttribute('type','password')
    }

});
