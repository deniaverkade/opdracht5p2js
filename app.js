lijst = document.getElementById("resultaten")

let verlanglijst = ["100 cl fles Jack Daniels", "Ten Pots of Jet Black Dye van de Final Fantasy XIV Mogstation", "Bloodborne for the Playstation 4", "Christmas with Weezer CD", "Devil May Cry 5 ARTFXJ 27cm beeld van Nero"]
for (item of verlanglijst) {
    lijst.innerHTML += item + "<br>";
}
