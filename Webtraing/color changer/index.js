
function my() {
    let box=document.createElement("div");
    let first=document.getElementById("first")
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      
    }

    box.innerHTML=color;
    box.style.backgroundColor=color;
    box.style.width="100px";
    box.style.height="100px";
    box.style.display="inline-block"
    document.body.appendChild(box);
   
  }
  setInterval(my, 1000);
  
 
  
  