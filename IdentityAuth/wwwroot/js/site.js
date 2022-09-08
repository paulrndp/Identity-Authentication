// Show/Hide required msg
$(".input-box input").focusout(function () {
    if ($(this).val() == "") {
        $(this).siblings().removeClass("hide-msg");
    } else {
        $(this).siblings().addClass("hide-msg");
    }
});

// Login button able and disabled
$(".input-box input").keyup(function () {
    var inputs = $(".input-box input");
    if (inputs[0].value != "" && inputs[1].value) {
        $(".login-btn").attr("disabled", false);
        $(".login-btn").addClass("active");
    }
    else {
        $(".login-btn").attr("disabled", true);
        $(".login-btn").removeClass("active");
    }
});