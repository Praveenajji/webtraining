function my(){
    event.preventDefault();
const input=document.getElementById("input").value
const res=document.getElementById("result")
const total=document.getElementById("total")
// let n=input;
// let sum="";
// let p=0;

// let m=n.split('');


// for(let i=0;i<m.length;i++){
//     let v=(m[i].toLowerCase().charCodeAt())-96  ;
//     let l=parseInt(v);
//     sum+=m[i].toLowerCase()+' '+l+'<br/>';
//     p+=l;
    
//     res.innerHTML=sum ;
// }   
   
//    total.innerHTML="Total ="+p ;


let sum=0;
let str1=input;
let str2="!abcdefghijklmnopqrstuvwxyz"
for(let i=0;i<str1.length;i++){
    for(let j=0;j<str2.length;j++){
       
        if(str1[i]==str2[j]){
           sum+=j;
           
           res.innerHTML=str1+'<br/>';
           
           
        }
       
    }
   
}

total.innerHTML=sum;



}

