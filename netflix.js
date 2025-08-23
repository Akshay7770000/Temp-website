let a=document.querySelector(".herosub button")
a.addEventListener("click",()=>{
    let temp=document.createElement("div");
    temp.setAttribute("class","buttontemp")
    temp.innerHTML=`<h5>This project is under the building phase So some of the features might not work properly.....Kindly Corporate</h5>
    <img width="90px" src="samples/vidhu.jpg" alt="">`
    document.body.append(temp);
    let b=document.querySelectorAll("footer,main,.imggdown,header")
    for (let index = 0; index < b.length; index++) {
        const element = b[index];
        element.classList.add("tblur")
    }

})
