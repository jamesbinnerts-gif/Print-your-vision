const buttons = document.querySelectorAll('.whatsapp-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const naam = product.querySelector('h3').innerText;
        const kleur = product.querySelector('.kleur').value;
        const aantal = product.querySelector('.aantal').value;
        const telefoon = '31623010458'; // jouw WhatsApp-nummer

        const bericht = `Hoi Print Your Vision!\n\nIk wil graag bestellen:\nProduct: ${naam}\nKleur: ${kleur}\nAantal: ${aantal}`;
        const url = `https://wa.me/${telefoon}?text=${encodeURIComponent(bericht)}`;

        window.open(url, '_blank');
    });
});
