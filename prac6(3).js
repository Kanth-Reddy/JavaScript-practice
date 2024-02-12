let newBtn = document.createElement("button");
newBtn.innerHTML="Click Me!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
newBtn.style.height="100px";
newBtn.style.width= "100px";

document.querySelector("body").prepend(newBtn);

newBtn.onclick = () =>{
    console.log("Btn is clicked");
}