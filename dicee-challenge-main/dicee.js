
function player1(){
    var pla1=Math.floor((Math.random()*6)+1);
    var sor1="dice"+pla1+".png";
    var para1=document.querySelector("#player-1");
    para1.setAttribute("src",sor1);
    return pla1;
}
function player2(){
    var pla2=Math.floor((Math.random()*6)+1);
    var sor2="dice"+pla2+".png";
    var para2=document.querySelector("#player-2");
    para2.setAttribute("src",sor2);
    return pla2;
}
function winner(){
    let a=player1();
    let b=player2();
    console.log(a);
    console.log(b);
    if( a > b){

        var g1=document.getElementById("win");
        g1.style.display="block";
        document.getElementById("win").innerHTML="winner is player1";
       g1.scrollIntoView({behavior:'smooth'});

      
    }
    else if( a == b){
        var g1=document.getElementById("win");
        g1.style.display="block";
        document.getElementById("win").innerHTML="Challenge Draw...";
        g1.scrollIntoView({behavior:"smooth"});
    }
    else{
        var g1=document.getElementById("win");
        g1.style.display="block";
        document.getElementById("win").innerHTML="winner is player2";
        g1.scrollIntoView({behavior:"smooth"});
    }
}
