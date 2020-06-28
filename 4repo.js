
  $(document).ready(function(){
    $("input").keyup( function(){
        var value=$(this).val();
        $("p").text(value);})
        .keyup();
    })