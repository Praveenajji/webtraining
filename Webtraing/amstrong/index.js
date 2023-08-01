function my(){
    event.preventDefault();
const input=Number(document.getElementById("input").value)
const res=document.getElementById("result")

let r;
let n=input;
let sum=0;
let temp=n;


while(n>0){
    r=n % 10;
       
    sum=sum + (r*r*r);
    
    n=parseInt(n/10);
    
}
if(temp==sum){
    let res1="The number:"+sum+" is  Amstrong Number";
    res.innerHTML= res1;

}
else{
    let res1="The number:"+sum+" is Not  Amstrong Number";
    res.innerHTML= res1;
}


}

