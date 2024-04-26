
function openAndCloseModal (){
    
}


let BUTTONS_MODALS = document.querySelectorAll(".modal-btn");
let BUTTONS_MODALS_EXTERN = document.querySelectorAll(".modal-btn-external");



BUTTONS_MODALS.forEach(btn=>{
    btn.addEventListener("click",function () {
        let status = this.parentNode.getAttribute("data-modal");
        this.parentNode.setAttribute("data-modal",status == "close" ? "open" : "close");   
    });
});

BUTTONS_MODALS_EXTERN.forEach(btn=>{
    btn.addEventListener("click",function () {
        let modalID = this.getAttribute("data-modal-select");
        console.log("click");
        document.getElementById(modalID).setAttribute("data-modal","open");
    });
});