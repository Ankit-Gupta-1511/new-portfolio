$(document).ready(function(){
    $("#chat-btn").click(function(){

        // var responseContainer = document.getElementsByClassName("response")[0];
        var chatScreen = document.getElementById('chat-screen');
        var inputChatBox = document.createElement('div');
        inputChatBox.className = "chat-box";
        var responseChatBox = document.createElement('div');
        responseChatBox.className = "chat-box";

        // creating new response container
        var responseContainer = document.createElement('div');
        var p = document.createElement('p');
        var responseImage = document.createElement('img');

        responseImage.src = "images/my-chat1.jpg";
        responseImage.className = "chat-image";

        responseContainer.className = "chat-msg-container response-container";
        p.className = "response";

        
        // getting the input msg
        var input = document.getElementById("chat-input").value;

        //putting msg in a container
        var inputContainer = document.createElement('div');
        var pInput = document.createElement('p');
        var inputImage = document.createElement('img');

        inputImage.src = "images/user.png";
        inputImage.className = "chat-image";

        inputContainer.className = "chat-msg-container input-container";
        pInput.className = "input";
        // adding value in container
        pInput.textContent = input;
        
        //appending container
        inputContainer.appendChild(pInput);
        
        inputChatBox.appendChild(inputContainer);
        inputChatBox.appendChild(inputImage);

        chatScreen.appendChild(inputChatBox);
        

        var data = {
            "msg": input
        };

        var url ="https://chat-web-app-ankit.herokuapp.com/chat/get/response";

        
        $.post("https://chat-web-app-ankit.herokuapp.com/chat/get/response", data).done(function(response){
            p.textContent = response.response;
            responseContainer.appendChild(p);
            
            responseChatBox.appendChild(responseImage);
            responseChatBox.appendChild(responseContainer);
            chatScreen.appendChild(responseChatBox);

            $.post("https://chat-web-app-ankit.herokuapp.com/chat/send/input", {'msg': input}).done(function(res){
                console.log(res)
                var id = res.data.id;
                console.log("id is "+ id);
                $.post("https://chat-web-app-ankit.herokuapp.com/chat/send/response", {'response': response.response, 'input_msg': id}).done(function(){
                    console.log("response logged");
                });
            })
        });

     
    });


    // query form submit 

    $("#query-form").submit(function(evt){
        evt.preventDefault();
        var url = $(this).attr("action");
        var method = $(this).attr("method");
        var data = {
           email: $("#query-email").val(),
           query: $("#query").val()
        };

        $.post(url, data).done(function(res){
            alert(res.msg);
        });
    });

    /*
        Hover options configurations
    */

    // $(".internship").hover(function(){
    //     $(".work").removeClass("pink").addClass("blue");
    //     $(".work h2").hide();
    //     $(".projects").hide();
    // });

    // $(".projects").hover(function(){
    //     $(".work").addClass("pink").removeClass("blue");
    //     $(".work h2").hide();
    //     $(".internship").hide();
    // });

    // $(".internship").mouseout(function(){
    //     $(".work").removeClass("pink").removeClass("blue");
    //     $(".work h2").show();
    //     $(".projects").show();
    // });

    // $(".projects").mouseout(function(){
    //     $(".work").removeClass("pink").removeClass("blue");
    //     $(".work h2").show();
    //     $(".internship").show();
    // });
});