function bestelProduct(productNaam) {
    const kleur = event.target
        .closest(".product")
        .querySelector("select").value;

    const aantal = event.target
        .closest(".product")
        .querySelector("input").value;

    const telefoonNummer = "31623010458";

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
