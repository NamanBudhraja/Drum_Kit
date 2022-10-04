var n=document.querySelectorAll(".drum").length;
//element.addEventListener("click", function(){ alert("Hello World!"); });
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var b=this.innerHTML;
        makesound(b);
        anim(b);
    });
   
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    anim(event.key);
});
  function makesound(sou)
   {
    switch(sou)
        {
            case "w":
                var audi=new Audio("sounds/tom-1.mp3");
                audi.play();
                break;
            case "a":
                var audi=new Audio("sounds/tom-2.mp3");
                audi.play();
                break;
            case "s":
                var audi=new Audio("sounds/tom-3.mp3");
                audi.play();
                break;
            case "d":
                var audi=new Audio("sounds/tom-4.mp3");
                audi.play();
                break;
            case "j":
                var audi=new Audio("sounds/snare.mp3");
                audi.play();
                break;
            case "k":
                var audi=new Audio("sounds/crash.mp3");
                audi.play();
                break;
            case "l":
                var audi=new Audio("sounds/kick-bass.mp3");
                audi.play();
                break;
            default:
                var audi=new Audio("sounds/oh_no.mp3");
                audi.play();
        }
}
function anim(k)
{
 var a=document.querySelector("."+k);
 a.classList.add("pressed");
 setTimeout(function(){
    a.classList.remove("pressed");
},100);
}
