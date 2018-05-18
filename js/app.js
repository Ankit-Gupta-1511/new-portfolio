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

        responseImage.src = "images/my-chat.jpg";
        responseImage.className = "chat-image";

        responseContainer.className = "chat-msg-container response-container";
        p.className = "response";

        
        // getting the input msg
        var input = document.getElementById("chat-input").value;

        //putting msg in a container
        var inputContainer = document.createElement('div');
        var pInput = document.createElement('p');
        var inputImage = document.createElement('img');

        inputImage.src = "images/my-chat1.jpg";
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
        });

     
    });
});