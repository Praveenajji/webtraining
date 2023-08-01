
function getValue() {
    event.preventDefault();
    var t = document.getElementById("range1").value;
    document.getElementById("weight").innerHTML = "Weight : "+t+"kg";


    var k = document.getElementById("range2").value;
    document.getElementById("height").innerHTML = "Height : "+k+"cm";
  
     var n=t/(k*k);
     var m=(n*1000);
     document.getElementById("result").innerHTML = "BMI : "+m;
 }

 