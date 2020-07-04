
  $(document).ready(function(){
    $("#myform").submit(function(event){
      event.preventDefault(); var textinp=$("#myinput").val(); 
      
      $("#li1").append(textinp) ;
 
    
    })
  
    $("#myform").submit(function(event){
      event.preventDefault(); var textinp=$("#myinput").val();
      
      $("#li2").append(textinp) ;})

   }
   )
   idea: if item exists in before container(li1) {then li2 is good to go }+need callback function
  
   
    
 
  























  



  