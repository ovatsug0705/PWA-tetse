// console.log("teste");

let element = document.getElementById('calcular').addEventListener('click', ()=>{
    var node = document.createElement("span");                
    var textnode = document.createTextNode("OI ");
    node.appendChild(textnode);                 
    document.getElementsByClassName("container")[0].appendChild(node);     
});