let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let p=document.querySelectorAll("p")
let div=document.querySelector("div")
let card=document.getElementsByClassName("card")
let li=[];
let arr=['praveen','asvanth','vishnu','shiva']
b1.addEventListener('click',function(){
    for(let i=0;i<p.length;i++){
        p[i].style.textAlign="center";
        p[i].style.border="1px dotted red";
        p[i].style.backgroundColor="skyblue";
    }
})
let h1 = document.querySelectorAll('h1');

b2.addEventListener('click',function(){
   
    h1[0].innerHTML="praveen";
    h1[0].style.border="1px dotted gray";
    h1[0].style.textAlign="center";
    document.body.style.backgroundColor="gray";
    for(let i=0;i<4;i++){
        li[i]=document.createElement('li');
        li[i].innerHTML=arr[i];
        div.append(li[i]);

        
        
    }
   
   
  
})
let ul=document.getElementsByClassName('card')
let list=[{person:'baba.avif',name:'praveen',age:'18'},
          {person:'baba.avif',name:'asvath',age:'20'},
          {person:'baba.avif',name:'vishnu',age:'23'}]
for(let i=0;i<list.length;i++){
li[i]=document.createElement('img');
li[i].src=list[i].person;
let h1=document.createElement('h1');
 h1.innerHTML=list[i].name;
 h1.style.color="red";
 let p1=document.createElement('p');
 p1.innerHTML=list[i].age;

li[i].setAttribute('style','width:200px;height:200px;border-radius:50%; margin-left:100px;');


document.body.append(li[i]);
document.body.append(h1);
document.body.append(p1);

}