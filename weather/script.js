const usertab=document.querySelector("[data-userWeater]")
const searchtab=document.querySelector("[data-SearchWeather]")
const userContainer=document.querySelector(".weather-container")
const grantAccessContiner=document.querySelector(".grant-location-container")
const searchForm=document.querySelector("[data-search-form]")
const loadingScreen=document.querySelector(".loading-container")
const userInfoContainer=document.querySelector(".user-info-container")


// intially api key varibale
// current tab varible
let currentTab=usertab;
const Api_key="6b092714ba9a0f98ace901e8c967d285";
currentTab.classList.add("current-tab");

// event listener for user tab

function switchTab(clickedtab){
    if(clickedtab!=currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedtab;
        currentTab.classList.add("current-tab");
    }
}

usertab.addEventListener("click",()=>{
    switchTab(usertab);
})

searchtab.addEventListener("click",()=>{
    switchTab(searchtab);
})



