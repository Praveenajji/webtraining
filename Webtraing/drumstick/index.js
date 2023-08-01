 
// for(let i=1;i<7;i++){
// let box=document.createElement("div");
// box.style.backgroundColor="red";
// box.style.width="100px";
// box.style.height="100px";
// box.style.display="grid";
// box.style.gap="50px";
// box.style.gridTemplateColumns= "auto"+"auto" +"auto";
// box.style.marginLeft="20px";
// box.innerHTML=i;
// document.body.appendChild(box);
// }

var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j].addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	
});
}



document.addEventListener("keypress", (e)=> {
    sound(e.key);
    
    });
    

    
function sound(key) {
    switch (key) {
        case "w":
        var sound1 = new Audio("mp31.wav");
        sound1.play();
        break;
    
        case "a":
        var sound2 = new Audio("MP32.mp3");
        sound2.play();
        break;
    
        case "s":
        var sound3 = new Audio('mp33.wav');
        sound3.play();
        break;
    
        case "d":
        var sound4 = new Audio('mp34.wav');
        sound4.play();
        break;
    
        case "j":
        var sound5 = new Audio('mp35.wav');
        sound5.play();
        break;
    
        case "k":
        var sound6 = new Audio('mp36.wav');
        sound6.play();
        break;
    
        
    
        default: console.log(key);
    }
    }
    