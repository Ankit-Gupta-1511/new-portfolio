var $window = $(window);

var caption = "Hi I am Ankit Gupta,based in India, connecting the world through web apps offering easy to use interfaces and amazing experience.";
var captionLength =0;

var introContainer = $("#intro");




function typingEffect() {
   
    introContainer.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('typingEffect()', 50);
    } else {
        captionLength = 0;
        caption = '';
        
    }
    
}




$("document").ready(function(){
    
    setTimeout('typingEffect()',500);
    
    
});

