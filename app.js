/*for(var i=1 ;i<11;i++){
    console.log(i);
    console.log("hi");
}
for(var i=10; i>=1; i--){
    console.log(i);
}
var sum=0
for(var i=1;i<=10; i++){
    sum=sum+i
    console.log(sum);
}
var sum=1
for(var i=1;i<=10; i++){
    sum=sum*i
    console.log(sum);
}
for(var i=1;i<=100; i++){
 if(i%3 && i%5==0){
    console.log("3t bolon 6y huvagddag too"+i);
 }else{
    console.log("3t bolon 5t huvagddagui too");
 }
}
var b=1
var a= +prompt("too")
for(var i=1; i<=a; i++){
    b=b*i
}
console.log(b);
var niilber=0, niilber2=1;
var n=6;
for(var i=1 ; i<=n;i++){
    niilber = niilber + 100;
    niilber2 = n *100;
}
console.log(niilber);
console.log(niilber2);
var random = Math.floor(Math.random()*10)+1;
for(var chance=1;chance<=3;chance++){
    var too = +prompt("1 ees 10 iin hoorond toog taana uu")
    if(random==too){
        alert("ta yallaa");
        break;
    }else if (too==""){
        alert("hooson baij bolohgui");
    }else if(random<too){
        alert("random toogoos ih bna")
    }else if(random>too){
        alert("random toogoos baga bna")
    }
}
function hello(ner,age){
    console.log("hello"+ner);
    console.log("Your age" + age);
}
function test(){
    alert("button clicked");
}
function sum(a,b){
    console.log(a+b);
}
sum(50,88);
sum(880,6658);*/
function color(){
   document.getElementsByTagName('body')[0].style.backgroundColor="aqua"
   
}
var computer = document.querySelector('.computer');
   var player = document.querySelector('.player');
   var winner = document.querySelector('.winner');
function play(playerChoice){
    random=Math.floor(Math.random()*3);
    var computerChoice;
    console.log(random);
    if(random==0){
        computerChoice="paper";
        computer.innerText="computerChoice paper";
    }else if(random==1){
       computerChoice="scissor";
       computer.innerText="computerChoice scissor";
    }
    else if(random==2){
        computerChoice="rock";
        computer.innerText="computerChoice rock";
     }
     player.innerText = "Player choice : " + playerChoice
     if(playerChoice==computerChoice){
        winner.innerText=('Tie')
     }else if(
     (playerChoice=="paper"&&computerChoice=="rock") ||
     (playerChoice=="rock"&&computerChoice=="scissor") ||
     (playerChoice=="scissor"&&computerChoice=="rock")
    ){
        winner.innerText="You win";
     }else{
        winner.innerText="Computer win";
     }
   }