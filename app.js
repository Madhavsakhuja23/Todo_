// event bubbling 
// kisi bhi parent ke undaar child h aur dono par event listner lgate h toh parent aur child dono event listner ko trigger krega isse event bubbling kehte h toprevent this we use event.stopPropagation();

let tsk = document.querySelector("input");
let btns = document.querySelector("button");
let ul = document.querySelector("ul");

btns.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = tsk.value;
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("dlt");
    item.appendChild(dltbtn);
    ul.appendChild(item);
    tsk.value = "";
});


// let dltbtns=document.querySelectorAll(".dlt");

// for(dltebtn of dltbtns){
//     dltebtn.addEventListener("click",function(event){
//         event.();
//         let prnt=this.parentElement;
//         prnt.remove();
//     });
// }

// ad yah isley comment kiya bcz jo bydefault thee unka delete kaam kr ra tha new added task par nhi 

ul.addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
});
tsk.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && tsk.value != "") {
        let item = document.createElement("li");
        item.innerText = tsk.value;
        let dltbtn = document.createElement("button");
        dltbtn.innerText = "Delete";
        dltbtn.classList.add("dlt");
        item.appendChild(dltbtn);
        ul.appendChild(item);
        tsk.value = "";
    }
})