main.remove();


const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");

const newContent = document.createTextNode("Raquel is the champion");
    
newHeader.appendChild(newContent);
    
document.body.appendChild(newHeader); 
