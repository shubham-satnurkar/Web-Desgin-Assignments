// // const array =['img1','img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];




// $(document).ready(function(){

// 	$('#next').click(function(){
// 		$('#img-1').fadeOut(1000, function(){
// 			console.log('img-1')
// 			$('#img-2').fadeOut(1000, function(){
// 				console.log('img-2')
// 				$('#img-3').fadeOut(1000, function(){
// 					console.log('img-3')
// 					$('#img-4').fadeOut(1000, function(){
// 						console.log('img-4')
// 						$('#img-5').fadeOut(1000, function(){
// 							console.log('img-5')
// 							$('#img-6').fadeOut(1000, function(){
// 								console.log('img-6')
// 								$('#img-7').fadeOut(1000, function(){
// 									console.log('img-7')
// 									$('#img-8').fadeOut(1000, function(){
// 										console.log('img-8')
										
// 										// for(var i = 0, img = array.length; i < img; i++){
// 										// 	array[i]
// 										// }
// 									});	
// 								});	
// 							});
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });



$(document).ready(function(){

	// Configuration
	let width = 800;
	let animateSpeed = 1000;
	let pause = 500;
	let currentSlide =1;

	// DOM
	let $container = $('#container');
	let $slideContainer = $container.find('.slides');
	let $slides = $slideContainer.find('.slide');

	var interval;

	function startSlide(){

		interval=	setInterval(function(){
					$slideContainer.animate({'margin-left': '-='+width}, animateSpeed, ()=>{
					currentSlide++;
					if(currentSlide == $slides.length){
						currentSlide = 1;
						$slideContainer.css('margin-left', 0);
						}
					});
				}, pause);
	}

	function stopSlide(){
		clearInterval(interval);
	}

	$container.on('mouseenter', stopSlide).on('mouseleave', startSlide);	

	stopSlide();

});

