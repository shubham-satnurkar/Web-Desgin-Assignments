$(document).ready(function(){
    $("#ftogbtn").click(function(){
        $("#img1").fadeToggle(1000, function(){

            $("#img2").fadeToggle(1000, function(){

                $("#img3").fadeToggle(1000, function(){

                    $("#img4").fadeToggle(1000, function(){

                        $("#img5").fadeToggle(1000, function(){

                            $("#img6").fadeToggle(1000, function(){
                                
                                let btnNode = $('#ftogbtn');
                                if(btnNode.text()== 'Fade Out'){
                                    btnNode.text("Fade In");   
                                }
                                else{
                                
                                    btnNode.text("Fade Out");
                                        
                                }
                                
                            });
                        });

                    });

                });
            });
        });

    });
});        


$(document).ready(function(){
    $('#stogbtn').click(function(){

        $("#img7").slideToggle(500, function(){

            $("#img8").slideToggle(500, function(){

                $("#img9").slideToggle(500, function(){

                    $("#img10").slideToggle(500,function(){

                        $("#img11").slideToggle(500, function(){

                            $("#img12").slideToggle(500, function(){

                                let btnNode = $('#stogbtn');
                                if(btnNode.text()== 'Slide Up'){
                                    btnNode.text("Slide Down");   
                                }
                                else{
                                
                                    btnNode.text("Slide Up");
                                        
                                }
                            })
                        })
                    })
                })
            })
        })
    });
});

        
        

       

        
