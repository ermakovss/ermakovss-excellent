$(document).ready(function(){


$('.burger_menu').click(function(event){

  $('.burger_menu').toggleClass('active_burger');
  $('.header_navigation').toggleClass('active_menu');
  $('body').toggleClass('lock');

})



$('.next').click(function(){

var leftimage = $('.img_left');
var centerimage = $('.center');
var rigthimage = $('.img_rigth');


centerimage.removeClass('center');
centerimage.addClass('img_rigth');

rigthimage.removeClass('img_rigth');
rigthimage.addClass('center');


});

$('.prev').click(function(){

var leftimage = $('.img_left');
var centerimage = $('.center');
var rigthimage = $('.img_rigth');


centerimage.removeClass('center');
centerimage.addClass('img_left');

leftimage.removeClass('img_left');
leftimage.addClass('center');

});



});

/* Projects Button */

    var all = $('.all');
    var web = $('.web');
    var mobile= $('.mobile');
    var photography = $('.photography');
    var illustration = $('.illustration');
    
let arr = [all, web, mobile, photography, illustration];



  function frameAll() {


    for (var i = 0; i < all.length; i++) {
      arr[0][i].style.display = "block";
    }

  }


  function Web() {


     for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        
        if(i==1){
          arr[i][j].style.display="block";
        }else
        {
        arr[i][j].style.display="none";
        }


        }
      }

  }

  function Mobile() {


    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j <  arr[i].length; j++) {
        
        if(i==2){
          arr[i][j].style.display="block";
        }else
        {
        arr[i][j].style.display="none";
        }

        }
      }

  }


  function Illustration() {


    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j <  arr[i].length; j++) {
        
        if(i==3){
          arr[i][j].style.display="block";
        }else
        {
        arr[i][j].style.display="none";
        }

        }
      }

  }


  function Photography() {


    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j <  arr[i].length; j++) {
        
        if(i==4){
          arr[i][j].style.display="block";
        }else
        {
        arr[i][j].style.display="none";
        }

        }
      }

  }


/* Video */
var video = document.getElementsByTagName('video')[0];

var audio = document.getElementsByTagName('audio')[0];

var pause = $('.start');

var text = $('.video_text');


   video.addEventListener("ended",Pause,false);


function Pause(){
    audio.currentTime = 0;
    audio.pause(); 
    pause.removeClass('effect');
    pause.removeClass('pause');

    text[0].style.opacity = 1;
    pause.addClass('start'); 
};

function Video_start(){

if(video.paused){
video.play();
audio.play();
pause.removeClass('start');
pause.addClass('pause');
pause.addClass('effect');

text[0].style.opacity = "0";

}else{
  video.pause();
  audio.pause();
  pause.removeClass('pause');
  pause.addClass('start');

  text[0].style.opacity = "1";

}


};





/* Accrodion */

var accord = document.querySelector('opened');

document.querySelectorAll('.list_image').forEach(function(section){
  section.addEventListener('click', function(e){

    document.querySelectorAll('.excelent_accord').forEach(function(section){
      section.classList.remove('opened');
    });
      
        e.target.closest('.excelent_accord').classList.add('opened')
      
      
  })
});

/* Karusel */


let position = 0;
let slidesToShow = 3;
const slidesToScroll = 1; 

let margin = 64;

if($(window).width() < 740){
  slidesToShow = 2;

  margin = 20;
}
if($(window).width() < 860){
  margin = 48;
}

if($(window).width() < 560){
  slidesToShow = 1;
  margin = 20.5;
}


const container = $('.wrapper');
const track = $('.post_inner');
const item = $('.post_item');
const itemCount = item.length;

const btn_prev = $('.slider_prev');
const btn_next = $('.slider_next');


// const itemWidth = container.width() / slidesToShow;
const itemWidth =  (container.width()-margin) / slidesToShow  
const itemWidthProc = (itemWidth*100) / container.width();
if($(window).width() < 855){
  const movePosition = slidesToScroll * ((container.width() * itemWidthProc)/100) + margin;
}
const movePosition = slidesToScroll * ((container.width() * itemWidthProc)/100) + margin/2;




item.each(function(index, item){


  $(item)[0].style.minWidth = `${itemWidthProc}%`

});



  btn_prev.click(function(){

    position +=movePosition;

    setPosition();
    checkButton();

});

  btn_next.click(function(){

       position -=movePosition;


       setPosition();
       checkButton();
  });


const setPosition = () =>{

  track.css({

    transform: `translateX(${position}px)`

  });

};

const checkButton = () =>{


  btn_prev.prop('disabled', position===0);
  btn_next.prop('disabled', 
    position <= -(itemCount - slidesToShow) *itemWidth
  );


};



checkButton();








