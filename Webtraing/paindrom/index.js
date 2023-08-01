function my(){
    event.preventDefault();
const input=document.getElementById("input").value
const res=document.getElementById("result")

let n=input;

let reverse="";
let length = n.length;   
for ( let i = length -1; i >= 0; i-- )  
   reverse = reverse + n.charAt(i);  


let k="";
let sep=reverse.split('')
for(let i=0;i<sep[i]+1;i++){
    for(let j=0;j<=i;j++){
        
        k+=sep[j];
    }
       k+='<br/>'
}
res.innerHTML=k;

   

}
