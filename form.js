$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/jaredhlukhovetsky@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val()
            },
            dataType: "json"
        })
         .done(function() {
             $('form').html('<h1>Thank you!</h1>');
         });
    });
});
