// jQuery for 360 tabs

$('.tabs_360').click( function() {
     
	var TabID360 = $(this).attr('data-tab');
	// to active timeline list
	$(this).addClass('tabs_360_active').siblings().removeClass('tabs_360_active');
    // To display 360/Panorama block
	
	$('#wrapper_360_'+TabID360).addClass('wrapper_360_show').siblings().removeClass('wrapper_360_show');
});


// jQuery for 360 Colors

$('.model_color_image').click( function() {
     
	var TabID360Color = $(this).attr('data-tab');
	// to select color
	$(this).addClass('selected').parent('li').siblings().children().removeClass('selected');

});


// Panorama Effect JS


$(document).ready(function(){
    var panorama, viewer, container, infospot;
    var containerBaseWidth = 700;
    var containerBaseHeight = 400;
    var deltaSize = 100;

    container = document.querySelector( '.panorama_block' );

    panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );

    viewer = new PANOLENS.Viewer( { container: container } );
    viewer.add( panorama );

    function changeContainerSize ( width, height ) {
    viewer.container.style.width = width + "px";
    viewer.container.style.height = height + "px";
    viewer.onWindowResize( width, height );
    }

})

// **************************************************************************************
// 360 js for model rotations



$(function() {

    var num = 23; // the total number of images 
    
    // Preload all the images into hidden div
    for (var i=1 ; i<=num ; i++) {
        var img = document.createElement('img');
        img.src = 'coolray_360/coolray-'+i+'.png';
        document.getElementById('preload-imgs').appendChild(img);
    }
    
    // Control swipes using jquery.touchSwipe.min.js
    // http://labs.rampinteractive.co.uk/touchSwipe/
    var swipeOptions=
    {
        triggerOnTouchEnd : true,	
        swipeStatus : swipeStatus,
        allowPageScroll:"vertical",
        threshold:75			
    }
    
    $(function()
    {				
        imgs = $(".img-container"); // the element that will be swipeable
        imgs.swipe( swipeOptions );
    });
    
    function swipeStatus(event, phase, direction, distance) {
        var duration = 0;
        if(direction == "left") {
            changeImg(distance);
        }
        else if (direction == "right") {
            changeImgR(-distance);
        }
    }
    
    function changeImg (imgNum) {
    
        // divide by 8 (or any number) to spread 
        // it out so it doesn't load new img 
        // every single px of swipe distance
        imgNum = Math.floor(imgNum/8); 
    
        if (imgNum < 1) {
            imgNum += num;
        }
        if (imgNum > num) {
            imgNum -= num;
        }
    
        // change the image src
        document.getElementById("myImg").src="coolray_360/coolray-"+imgNum+".png";
    }
    
    function changeImgR (imgNum) {
    
        // divide by 8 (or any number) to spread 
        // it out so it doesn't load new img 
        // every single px of swipe distance
        imgNum = Math.floor(imgNum/8); 
    
        var num2 = -Math.abs(num); 
        if (imgNum > num2) {
            imgNum += num;
        }
        if (imgNum <= num2) {
            imgNum += num*2;
        }
    
        // change the image src
        document.getElementById("myImg").src="coolray_360/coolray-"+imgNum+".png";
    }
    })