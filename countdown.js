//Variabele aftellen tot datum
var countDownDate = new Date("Jul 20, 2020 00:00:00").getTime();
//Update de afteller iedere seconde
var x = setInterval(function() {
  //De datum en tijd van vandaag
  var now = new Date().getTime();
  //Het verschil tussen nu en de datum van aftelling
  var distance = countDownDate - now;
  //Tijdberekeningen voor dagen, uren, minuten en seconden
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Laat het resultaat zien in het element met de id "countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "u "
  + minutes + "m " + seconds + "s ";
    
  //Als de afteller op de datum is, komt deze tekst er te staan.
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Aangekomen op Mars!";
  }
}, 1000);