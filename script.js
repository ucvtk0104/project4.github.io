var banan=0;
var step=1;
var row=1;
var pole=[];
var banrow=3;
var banstep=8;

for (i=0;i<24;i++){
    pole[i]=0;
}
for (i=1;i<=5;i++){
    idImg=document.getElementById("banan"+i);
    idImg.src="img/ice.png"
}
pole11.src="img/mama.png"
function move(event){
    switch (event.key){
        case "ArrowRight":
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/spacer.gif";
            step++;
            if(step>8){step=8;}
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/mama.png";
            proverka();
            break;
        case "ArrowLeft":
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/spacer.gif";
            step--;
            if(step<1){step=1;}
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/mama.png";
            proverka();
            break;
        case "ArrowUp":
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/spacer.gif";
            row--;
            if(row<1){row=1;}
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/mama.png";
            proverka();
            break;
        case "ArrowDown":
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/spacer.gif";
            row++;
            if(row>3){row=3;}
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/mama.png";
            proverka();
            break;
    }
   
}
document.addEventListener("keydown",move)
function setice(){
    pole[(banrow-1)*8+banstep-1]=0;
    idBan=document.getElementById("pole"+banrow+banstep);
    idBan.src="img/spacer.gif";
    banstep=Math.floor(Math.random()*8+1);
    banrow=Math.floor(Math.random()*3+1);
    idBan=document.getElementById("pole"+banrow+banstep);
    idBan.src="img/ice.png";
    pole[(banrow-1)*8+banstep-1]=1;
}
interval=setInterval(setice,2000);
function proverka(){
        if(pole[(row-1)*8+(step-1)]==1){
            pole[(row-1)*8+(step-1)]=0;
            idImg=document.getElementById("pole"+row+step);
            idImg.src="img/mama.png";
            banan++;
            idImg=document.getElementById("banan"+banan);
            idImg.src="img/banan.png";
        if (banan==5){
           clearInterval(interval); 
           win.src="img/winner.gif";
            document.removeEventListener("keydown",move)
            ban.style.visibility="hidden";
            igra.style.visibility="hidden";
        }
    }  
}