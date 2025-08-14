$(document).ready(function(){
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });

    $('.dish-image').on('click', function() {
        let src = $(this).attr('src');
        $('#modalImg').attr('src', src);
        $('#imageModal').fadeIn(); // abre com efeito
    });

    $('.close').on('click', function() {
        $('#imageModal').fadeOut();
    });

    $('#imageModal').on('click', function(e) {
        if (e.target.id === 'imageModal') {
            $(this).fadeOut();
        }
    });

    // Seleciona todos os botões com a nova classe
    $('.whatsapp-redirect').on('click', function() {
        // Pega o nome do item do atributo 'data-item-name'
        const itemName = $(this).data('item-name');

        // Se o atributo não existir, define um nome padrão
        const productName = itemName || 'um item';

        // Define o número de telefone (com código do país e DDD, sem símbolos)
        const phoneNumber = '5561982040839';

        // Define a mensagem que será enviada
        const message = `Olá, gostaria de mais informações sobre a pulseira ${productName}.`;

        // Codifica a mensagem para que ela possa ser usada em uma URL
        const encodedMessage = encodeURIComponent(message);

        // Monta a URL completa para o WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Redireciona o usuário para a URL do WhatsApp
        window.open(whatsappUrl, '_blank');
    });

});