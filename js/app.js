$(document).ready(function(){
    $("#chat-btn").click(function(){

        var responseContainer = document.getElementsByClassName("response")[0];

        var input = document.getElementById("chat-input").value;

        var data = {
            "msg": input
        };

        $.ajaxSetup({
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        });

        $.post("https://chat-web-app-ankit.herokuapp.com/chat/get/response", data).done(function(response){
            responseContainer.textContent = response;
        });

     
    });
});