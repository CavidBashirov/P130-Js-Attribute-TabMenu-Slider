
// let text = document.querySelector(".text-input");

// console.log(text.getAttribute("type"));

// text.setAttribute("type","password");

// if(text.getAttribute("type") === "text"){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// if(text.hasAttribute("type")){
//     console.log("var")
// }


//tab-menu


// document.querySelector("#test").addEventListener("mouseover",function(){
//     console.log("hover olundu");
// })

// document.querySelector("#test").addEventListener("mouseleave",function(){
//     console.log("hover legv olundu");
// })

// let headers = document.querySelectorAll(".tab-menu .tab-header div");
// let contents = document.querySelectorAll(".tab-menu .tab-body div");

//with javascript

// headers.forEach(header => {
//     header.addEventListener("click", function () {
//         let activeElem = document.querySelector(".active");
//         activeElem.classList.remove("active");
//         this.classList.add("active");
//         contents.forEach(content => {
//             if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
//                 content.classList.remove("d-none")
//             } else {
//                 content.classList.add("d-none")
//             }
//         });
//     })
// });



//with jquery

// $(function(){
//     $(document).on("click",".tab-menu .tab-header div",function(){
//         $(".active").removeClass("active");
//         $(this).addClass("active");
//         let id = $(this).attr("data-id");
//         $(".tab-menu .tab-body  div").addClass("d-none");
//         $(`.tab-menu .tab-body > div[data-id = "${id}"]`).removeClass("d-none");
//     })
// })






// headers.forEach(header => {
//     header.addEventListener("mouseover",function(){
//         let activeElem = document.querySelector(".active");
//         activeElem.classList.remove("active");
//         this.classList.add("active");
//         contents.forEach(content => {
//             if(this.getAttribute("data-id") == content.getAttribute("data-id")){
//                 content.classList.remove("d-none")
//             }else{
//                 content.classList.add("d-none")
//             }
//         });
//     })
// });


//slider

// let rightIcon = document.querySelector("#slider-area .slider .icons .right i");
// let leftIcon = document.querySelector("#slider-area .slider .icons .left i");

// setInterval(function () {
//     sliderRight();

// }, 3000);


// rightIcon.addEventListener("click", function () {
//     sliderRight();
// })


// function sliderRight(){
//     let activeImg = document.querySelector("#slider-area .slider .img .active");

//     if (activeImg.nextElementSibling != null) {
//         activeImg.classList.remove("active");
//         activeImg.nextElementSibling.classList.add("active");
//     } else {
//         activeImg.classList.remove("active");
//         activeImg.parentNode.firstElementChild.classList.add("active")
//     }
// }

// leftIcon.addEventListener("click", function () {
//     let activeImg = document.querySelector("#slider-area .slider .img .active");

//     if (activeImg.previousElementSibling != null) {
//         activeImg.classList.remove("active");
//         activeImg.previousElementSibling.classList.add("active");
//     } else {
//         activeImg.classList.remove("active");
//         activeImg.parentNode.lastElementChild.classList.add("active")
//     }


// })






















$(function(){



    let rightIcon = $("#slider-area .slider .icons .right i");
    let leftIcon = $("#slider-area .slider .icons .left i");

    setInterval(function(){
        let activeImg = $("#slider-area .slider .img .active");
    
        if ($(activeImg).next().length != 0) {
            $(activeImg).removeClass("active");
            $(activeImg).next().addClass("active");
        } else {
            $(activeImg).removeClass("active");
            $(activeImg).siblings().first().addClass("active")
        }
    },2000)


    $(rightIcon).on("click", function(){
        let activeImg = $("#slider-area .slider .img .active");
    
        if ($(activeImg).next().length != 0) {
            $(activeImg).removeClass("active");
            $(activeImg).next().addClass("active");
        } else {
            $(activeImg).removeClass("active");
            $(activeImg).siblings().first().addClass("active")
        }
    })

    $(leftIcon).on("click", function () {
        let activeImg = $("#slider-area .slider .img .active");
    
        if ($(activeImg).prev().length != 0) {
            $(activeImg).removeClass("active");
            $(activeImg).prev().addClass("active");
        } else {
            $(activeImg).removeClass("active");
            $(activeImg).siblings().last().addClass("active")
        }
    })

});