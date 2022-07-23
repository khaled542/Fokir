
let aboutOffset=$(".about").offset().top;
console.log(aboutOffset);


$(window).scroll(function(){
    if($(window).scrollTop() >=aboutOffset)
    {
        $(".navbar").css("backgroundColor","rgba(0,0,0,0.7)");
    }
    else
    {
        $(".navbar").css("backgroundColor","transparent")
    }
})