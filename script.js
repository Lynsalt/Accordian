const open = document.querySelectorAll(".open");
const dropDowns = document.querySelectorAll(".accordian-text")

open.forEach(item=>{
    item.addEventListener("click", (e)=>{
       e.target.classList.add('openAcc')

        if(e.target.getAttribute("class").includes("openAcc")){
            e.target.nextElementSibling.classList.toggle("show")
            if(e.target.nextElementSibling){
                e.target.previousElementSibling.nextElementSibling.innerText="+"
            }
            
        }
        if(e.target.nextElementSibling.getAttribute("class").includes("show")){
            e.target.previousElementSibling.nextElementSibling.innerText="-"
        }
       
    })
});
