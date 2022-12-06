//  const option = document.querySelector(".options-wrapper .option");
// option.addEventListener("click", ()=>{
//     option.querySelector(".sub-options").classList.toggle('hidden');
    
// })

const parentEle = document.querySelectorAll(".options-wrapper .option");
parentEle.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        el.querySelector(".sub-options").classList.toggle('hidden');
        el.querySelector(".fa-chevron-down.rotate").classList.toggle('down');
    })
})
