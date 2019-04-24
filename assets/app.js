$(document).ready(function () {

  $(".submit").on("click", function () {
    event.preventDefault();
    console.log("clicked button");

    var name = $(".nameSubmit").val();
    var email = $(".emailSubmit").val();
    var message = $(".messageSubmit").val();
    var statusElm = $(".status");
    statusElm.empty();

    statusElm.append("<div>Contact Form not operational at this time. Please email me with personal email.</div>").css({"color": "red", "font-size": "12px"});

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      console.log("email is valid");
    }
    else {
      event.preventDefault();
      statusElm.append("<div>Email not valid.</div>").css({"color": "red", "font-size": "12px"});
    }

    if (message.length >= 10) {
      console.log("Message is valid");
      
    } else {
      event.preventDefault();
      statusElm.append("<div>Message Invalid. Must contain more than 10 characters.</div>").css({"color": "red", "font-size": "12px"});
      // statusElm.append("<div>Contact Form not operational</div>").css({"color": "red", "font-size": "12px"});
    }
    

  })
});