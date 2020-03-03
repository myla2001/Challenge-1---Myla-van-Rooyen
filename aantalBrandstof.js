//Variabele beginwaarde is 0
var i = 0;
//Functie "aantalBrandstof" wordt aangemakt
function aantalBrandstof() {
  //If statement wordt aangemaakt met als beginwaarde i is gelijk aan 0
  if (i == 0) {
    //Beginwaarde wordt 1
    i = 1;
    //Variabele elem laat resultaat zien in het element met id "percentage"
    var elem = document.getElementById("percentage");
    //Variabele waarin een interval wordt gemaakt van 10 als de progressiebar opvult.
    var width = 10;
    var id = setInterval(frame, 10);
    //Functie "frame" wordt aangemaakt
    function frame() {
      //If-else statement wordt aangemaakt
      //Als width groter is dan 78%, wordt de opvulling stilgezet
      if (width >= 78) {
        clearInterval(id);
      } else {
        width++;
        //Er wordt een % toegevoeg bij het element met id "percentage" 
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}