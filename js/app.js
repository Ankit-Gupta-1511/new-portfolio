$(document).ready(function(){
    $("#chat-btn").click(function(){

        var responseContainer = document.getElementsByClassName("response")[0];

        var input = document.getElementById("chat-input").value;

        var data = {
            "msg": input
        };

        // $.post("https://chat-web-app-ankit.herokuapp.com/chat/get/response", data).done(function(response){
        //     responseContainer.textContent = response;
        // });

        $.ajax({

            url: "https://chat-web-app-ankit.herokuapp.com/chat/get/response",
            data: data,
            type: 'POST',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(data) { 
                console.log(data);
                responseContainer.textContent = data;
             },
            error: function() { alert('Failed!'); },
        });
    });
});