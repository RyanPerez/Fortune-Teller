$("button").click(function(){
    var name = $(".yourname").val();
    var age = $(".yourage").val();
    var job = $(".dreamjob").val();
    age=parseInt(age) + 10;
    $("p").text(name + " in 10 years you will be a " + age + " year old " + job);


});
