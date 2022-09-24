$(document).ready(function(){
	$('#btn1').click(function(){
		$('.txt').text("Welcome To Neosoft Technologies International");

	});

	$('#btn2').click(function(){
		$('input[type="checkbox"]').attr("checked", "checked");

	});

	$('#btn3').click(function(){
		$('#appTxt').append(" Logn Live Mother India " );
	});

	$('#btn4').click(function(){
		$('#appTxt').prepend(" Logn Live Mother India " );
	});

	$('#btn5').click(function(){
		$('.html').before(" What is HTML &quest;" );
	});

	$('#btn6').click(function(){
		$('.html').after(" HTML is Hypertext Markup Language. " );
	});

	$('#btn7').click(function(){
		$('#appTxt').remove();
	})
});