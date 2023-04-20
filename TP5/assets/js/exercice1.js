$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        console.log("la");
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: {
                username: username,
                password: password
            },
            success: function (response) {
                console.log("good");
                $('#messages').html('<p style="color:green;">Connexion réussie !</p>');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                print();
                console.log("error");
                $('#messages').html('<p style="color:red;">Erreur lors de la connexion.</p>');
            }
        });
    });

    $(":input").on('input', function () {
        var value = $(this).val();
        if (value.length > 0) {
            $(this).css('border-color', '');
        } else {
            $(this).css('border-color', 'red');
        }
        if (value.length > 255) {
            $(this).css('border-color', 'red');
        }
    });

});
