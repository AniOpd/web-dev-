const inputSlider = document.querySelector("[data-length-slider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwardDesplay = document.querySelector("[data-passwordDisplay]");
const copyBtn= document.querySelector("[data-copyButton]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck=document.querySelector("#uppercase");
const lowerCaseCheck=document.querySelector("#lowercase");
const numberCheck=document.querySelector("#number");
const symbolCheck=document.querySelector("#symbol");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-pass");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");


let password="";
let passwordLength=15;
let checkCount=0;
handleSlider();
setIndicator("#ccc");
// sets password length
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min))+"% 100%";
}


// set indicator
function setIndicator(color){
    indicator.style.backgroundColor=color;
    indicator.style.boxShadow=color+" 0px 0px 10px 0px";
}
//get random integer
function getrandominteger(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
function grenraterandomnumber(){
    return getrandominteger(0,9);
}
function genratelowercase(){
   return String.fromCharCode(getrandominteger(97,123));
}
function genrateuppercase(){
    return String.fromCharCode(getrandominteger(65,91));
}
function genratesymbol(){
    const symbols="!@#$%^&*()_-";
    return symbols[getrandominteger(0,symbols.length)];
}

function calcstrength(){
    let hasUpper=false;
    let haslower=false;
    let hassymbols=false;
    let hasnumbers=false;
    if(upperCaseCheck.checked)hasUpper=true;
    if(lowerCaseCheck.checked)haslower=true;
    if(symbolCheck.checked)hassymbols=true;
    if(numberCheck.checked)hasnumbers=true;
    if(hasUpper&&haslower&&hassymbols&&hasnumbers&&passwordLength>=8){
        setIndicator("green");
    }
    else if(hasUpper && haslower && hasnumbers && passwordLength>=8){
        setIndicator("orange");
    }
    else if((hasUpper && haslower) || (hasUpper && hasnumbers) || (hasUpper && hassymbols) || (haslower && hasnumbers) || (haslower && hassymbols) || (hasnumbers && hassymbols) && passwordLength>=8){
        setIndicator("yellow");

    }else{
        setIndicator("red");
    }
}
async function copycontent(){
    try{
        await   navigator.clipboard.writeText(passwardDesplay.value);
        copyMsg.innerText="Copied";
    }
    catch(e){
        copyMsg.innerText="Failed to copy";
    }
    // to make copy wala span visible
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}

function handleCheckBoxChange(e){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
}

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
});
copyBtn.addEventListener('click',()=>{
    if(passwardDesplay.value){
        copycontent();
    }
});

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
});

function shufflePassword(array){
    // fisher yates algorithm
    for(let i=shufflePassword.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    let str="";
    array.forEach((char)=>{
        str+=char;
    });
    return str;
}


generateBtn.addEventListener('click',()=>{
    // none of the checkbox are selected
    if(checkCount==0){
        return;
    }
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
    // lets start the journey to find new password
  let  password="";
    let funcArr=[];
    if(upperCaseCheck.checked){
        funcArr.push(genrateuppercase);
    }
    if(lowerCaseCheck.checked){
        funcArr.push(genratelowercase);
    }
    if(symbolCheck.checked){
        funcArr.push(genratesymbol);
    }
    if(numberCheck.checked){
        funcArr.push(grenraterandomnumber);
    }

    // compulsory addition 
    for(let i=0;i<funcArr.length;i++){
        password+=funcArr[i]();
    }
    // remainnig addition
    for(let i=0;i<passwordLength-funcArr.length;i++){
        let randomIndex=getrandominteger(0,funcArr.length);
        password+=funcArr[randomIndex]();
    }


    // lets shuffle the password
    password=shufflePassword(Array.from(password));
    passwardDesplay.value=password;
    calcstrength();
});