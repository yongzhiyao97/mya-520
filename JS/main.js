$( document ).ready(function() {
    var t1 = gsap.timeline({ paused: true }); 

    t1
    .to(".paper", {
        translateY: -300,
        duration: 0.9, 
        width: $(window).width() < 700 ? "325px":"750px",
        height: $(window).width() < 700 ? "250px":"500px",
        ease: "back.inOut(1.5)",
    })
    .set(".fly-envelope .heart", {
        zIndex: -1
    })
    .set(".envelope .bottom", { 
        zIndex: -1
    }) 
    .set(".envelope .left", { 
        zIndex: -1
    }) 
    .set(".envelope .right", { 
        zIndex: -1
    })
    .set(".fly-envelope .wing", {
        duration: 0.1, 
        display: "none"
    })
    .set(".paper", {
        zIndex: 100
    })
    .to(".paper", {
        duration: 0.7,  
        ease: "back.out(.4)",
        translateY: -5,
        translateZ: 250,
    });

    var close_notification_pop_up_flag = 0;
    var open_envelope_flag = 0; 

    close_notification_pop_up_flag == 0 ? $("div.envelope").addClass("fold") : null;

    /**
     * MESSAGE: THIS FUNCTION IS TO LET THE BODY ON-LOAD POP-UP BOX FADED AND MOVE THE FLYING ENVELOPE
     */
    $( "a.close" ).click(function() {
        $("div#pop-up-box.overlay").css({
            "visibility" : "hidden",
            "opacity" : "0" 
        });
    
        $("div.fly-envelope").css({
            "top" : "20%",
            "transform": "scale(1.1)",
            "cursor" : "pointer"
        });
    
        close_notification_pop_up_flag = 1;
    });
    
    $( "div.fly-envelope" ).click(function() {
        if(close_notification_pop_up_flag) {
            open_envelope_flag == 0 ? open_envelope_flag = 1:open_envelope_flag = 0;
            console.log(open_envelope_flag);
            if(open_envelope_flag) {
                $("div.envelope").removeClass("fold");
                setTimeout(function(){
                    $("div.little-heart > div").addClass("visible-little-heart");
                }, 1500);
                
                setTimeout(function(){
                    t1.play();
                }, 2000);

                setTimeout(function(){
                    $("div.paper > span.line").css({
                        "width" : "0%",
                        "visibility" : "hidden"
                    });
                    $("div.paper > span.text").css({
                        "visibility" : "visible",
                        "width" : "100%",
                    });
                }, 3000);

                setTimeout(function(){
                    $("div.paper").css({
                        "background": `url(https://lh3.googleusercontent.com/proxy/4KfirSAS6tJnzbhM3jAa8cKugBR5AA1-n7hsN9DaXXUmxnIBWmEgw_uAeQy_myLJWqk8GHTQNspjYMCuxzD-iAyt_65t602g) no-repeat`,
                        "background-size": "cover",
                        "background-position": "center"
                    });
                    $("div.paper > span.text.one").html("TO MY CUTE WIFE &hearts; MYA,");
                    $("div.paper > span.text.two").html("Please be happy because<br/><q>Your SMILE &#128516; Gives COLOR To MY LIFE</q>");
                    $("div.paper > span.text.three").html("<q>Loving You Is A FULL Time Job<br/>&nbsp;BUT I Love My Carreer.</q>");
                    $("div.paper > span.text.four").html("I Love You Forever and Always");
                    $("div.paper > span.text.five").html("Your Unofficial Husband,");
                    $("div.paper > span.text.six").html("Y.Z.Y");
                }, 3500);

            } else {
                t1.reverse();
                $("div.paper > span.text").css({
                    "visibility" : "hidden",
                    "width" : "0%",
                });
                setTimeout(function(){
                    $("div.little-heart > div").removeClass("visible-little-heart");
                    $("div.envelope").addClass("fold");
                }, 2000);
            }
        }
    });

});

