let num = 0;
let root = document.querySelector(":root");
let color = document.getElementById("coll");
function add(){
    num++;
    document.getElementById("number").innerText = num;
}
function del(){
    num = 0;
    document.getElementById("number").innerText = num;
}
// start popup box close&open
document.getElementById("settings").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex" ;

})
document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none" ;

})
// end popup box close&open

color.oninput = () => {
    document.body.style.background = color.value ;
}
