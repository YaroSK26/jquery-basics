$(function(){
   /*
   $(".red-box").fadeOut(2000);
   $(".blue-box").fadeOut(4000);
   $(".green-box").fadeOut(6000);*/

$("a.important").fadeOut(5000).fadeIn(3000); //fadeToggle - prepinač 

 $(".red-box").delay(3000).fadeTo(2000,0.0);  // jak fade out len to tam stale zabera miesto , ma 100% nepriehladnost
 $(".blue-box").hide(2000); // prepinač toggle
 $(".blue-box").show(2000);  //  prepinač toggle
 $(".green-box").slideUp(2000); // prepinač slideToggle
 $(".green-box").slideDown(2000,function(){
     alert("toto sa stane po animate green box")
 }); // prepinač slideToggle

 $(".blue-box").animate({
   "margin-left" : "+=350px"  // += k zakladnej hodnote napr 50px prida 200px  cize 250p
 },2000/*cas*/);

 $(".blue-box").animate({
   "margin-left": "-=350px"
 },2000);


 $(".green-box").animate({
     marginLeft:"200px",
     opacity:"0.4", // 60% priehladne
     width:"50px",
     height:"50px"
 });

 $("a").animate({
    fontSize: "30px"//nejde animovat farby
 },2000);

 $("p:first").filter(function(index){
    return index % 2 === 0 ;
 }) .css("background-color","rgba(150,150,40,0.8)");
  v               

 $("ul").append("<li>serus</li>");
 $("ul").prepend("<li>serus</li>");
 //$("<li>serus</li>").appendTo($("ul"));




});


/*.filter(":even") filtrovat co chceme*/


/*$(".nieco").children("li").css("background-color","rgba(150,150,40,0,8)") hladanie pomocou children   , alebo .find , 
.parent, .parents , siblings (nadriadeny element) */

//:Email nevie

/*:even - 1,3,5,7,9,11 element , odd - 2,4,6,8,10 element vybere*/
/* modulo , zbytok po celociselnom deleni
5 % 2 = 1 
6 % 2 = 0
14 % 5 = 4*/

// append pridaj za , prepend pridaj pred