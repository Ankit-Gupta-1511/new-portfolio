$(document).ready(function(){
    $("#chat-btn").click(function(){

        var responseContainer = document.getElementsByClassName("response")[0];

        var input = document.getElementById("chat-input").value;

        var data = {
            "msg": input
        };

        var url ="https://chat-web-app-ankit.herokuapp.com/chat/get/response";

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            headers: {
                'Access-Control-Allow-Origin': 'https://ankit-gupta-1511.github.io'
            }
          }).done(function(response){
            responseContainer.textContent = response;
          });

        // $.post("https://chat-web-app-ankit.herokuapp.com/chat/get/response", data).done(function(response){
        //     responseContainer.textContent = response;
        // });

     
    });
});