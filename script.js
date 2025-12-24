function bestelProduct(productNaam, knop) {
    const product = knop.closest(".product");
    const kleur = product.querySelector("select").value;
    const aantal = product.querySelector("input").value;

    const telefoonNummer = "31623010458"; // jouw WhatsApp nummer zonder +

    const bericht =
        "Hallo! Ik wil graag bestellen:\n\n" +
        "Product: " + productNaam + "\n" +
        "Kleur: " + kleur + "\n" +
        "Aantal: " + aantal;

    const whatsappLink =
        "https://wa.me/" + telefoonNummer +
        "?text=" + encodeURIComponent(bericht);

    window.open(whatsappLink, "_blank");
}
