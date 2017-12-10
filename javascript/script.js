$(function(){
  console.log("Ready!");

  $(".volunteer-type").change(function(e){
    console.log("Rafi taught me this");
    console.log(e.currentTarget.value);
    $("#step-2 > h1").html(e.currentTarget.value)
  });


});
