
  $(document).ready(function(){
  
   $("#myform").submit(function(event){
     event.preventDefault(); var textinp=$("#myinput").val();
     $("#apple").html(textinp);
   });
  
  })



  