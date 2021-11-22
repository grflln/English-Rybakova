$('document').ready(() => {
    $( ".faq-accordion" ).accordion({
    collapsible: true,
    active: false
    });

    $('.buy-button').click(function (e) { 
        e.preventDefault();
        $('.modal-container').css('display', 'flex');     
    });

    $('#modal-container, #close-mark').click(function (e) { 
        if (e.target.id === 'modal-container' || e.target.id === 'close-mark') {
        $('.modal-container').hide();     
        }
    });
});