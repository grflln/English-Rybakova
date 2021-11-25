$('document').ready(() => {
    $( ".faq-accordion" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: "content"
    });

    $('#tarifes .buy-button').click(function (e) { 
        e.preventDefault();
        let targetTitle = $(e.target).closest('.tarifes-content-item').find($('.tarifes-content-item-title')).text();
        $('.modal-title span').text(targetTitle);
        $('.modal-container').css('display', 'flex');     
    });

    $('#modal-container, #close-mark').click(function (e) { 
        if (e.target.id === 'modal-container' || e.target.id === 'close-mark') {
        $('.modal-container').hide();     
        }
    });

    $('.burger').click(function (e) { 
        $('.menu-close').show();
        $('.menu').addClass('open');
        $('.menu-item, .menu-close').click(function (e) { 
         $('.menu-close').hide();
            $('.menu').removeClass('open');                
        });
    });

    
});