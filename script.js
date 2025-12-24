function bestelProduct() {
    const kleur = document.getElementById("kleur").value;
    const aantal = document.getElementById("aantal").value;

    const productNaam = "Blikjes opener met deksel";
    const telefoonNummer = "31623010458"; // jouw WhatsApp nummer zonder +

    const bericht = 
        "Hallo! Ik wil graag bestellen:\n\n" +
        "Product: " + productNaam + "\n" +
        "Kleur: " + kleur + "\n" +
        "Aantal: " + aantal;

    const whatsappLink =
        "https://wa.me/" + telefoonNummer + "?text=" + encodeURIComponent(bericht);

    window.open(whatsappLink, "_blank");
}
