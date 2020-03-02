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





//Variabele "easing" wordt aangemaakt
var easing = {
  //Er wordt linear naar het aangegeven getal geteld
    quadratic: function (x){
      return Math.sqrt(x);
    }
};

//Functie "range" wordt aangemaakt met parameters
function range(start, stop, step){
  //Variabele array wordt aangemaakt met for en return statement
  var array = [];
  for(var i = start; i < stop; i += step) array.push(i);
  //Stopt de uitvoering van functie "range" en retourneert de variabele.
  return array;
}

//Functie "interpolation" wordt aangemaakt met parameters
function interpolation(fps, easing, finalValue){
  //Functie "scaleIt" wordt aangemaakt met return statement
  function scaleIt(value){return finalValue * value; }

  //Variabele X en Y worden aangemaakt
  var x = range(0, 1, 1/fps),
      y = x.map(easing).map(scaleIt);

  //Stopt de uitvoering van functie "interpolation" en retourneert de variabele.
  return y;
}

//Functie "animateEl" wordt aangemaakt met parameters
function animateEl(values, duration, onAnimate){
  //Variabele wordt aangemaakt voor de animatie van optellen
  var frameIndex = 0,
      //Er worden betekenissen gegeven aan de parameters
      fps = values.length,
      id = setInterval(anime, duration/fps );

  //Functie "anime" wordt aangemaakt
  function anime(){
    //Variabele "current" wordt aangemaakt
    var current = values[frameIndex],
        isLastFrame = (frameIndex === fps - 1);

    onAnimate(current, frameIndex, values);

    //If-else statement wordt aangemaakt
    //Als het interval bij laatste frame is, wordt het interval stopgezet.
    if(isLastFrame){
      clearInterval(id);
    }
    //Anders blijf optellen
    else{
      frameIndex++;
    }
  }
}

//Functie "round" wordt aangemaakt met parameters
function round(value, decimals) {
  //Stopt de uitvoering van functie "round" en retourneert het nieuwe getal.
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//Functie "unformat" wordt aangemaakt met parameters
function unformat(content){
  //Variabele "unlocalized" wordt aangemaakt
  //Er wordt een betekenis gegeven aan parameter "content"
  var unlocalized = content.replace('.', '').replace(',', '.'),
      value = parseFloat(unlocalized);
  //Stopt de uitvoering van functie "unformat" en retourneert de waarde.
  return value;
}

//Functie "format" wordt aangemaakt
function format(value){

  //Stopt de uitvoering van functie "format" en retourneert de waarde.
  return value.toString().replace('.', ',');
}

//Functie wordt gekoppeld aan het docuement
window.addEventListener("DOMContentLoaded", function(){
  //Variabale "fps" wordt aangemaakt met als waarde 30
  var fps = 30,
  //Laat het optellen zien met de class "aantalVoedsel"
  els = [].slice.call(document.querySelectorAll('.aantalVoedsel'));

  els.forEach(function(el){
    //Variabele "content" wordt gemaakt en er wordt een betekenis aan gegeven
    var content = (el.firstChild.textContent).trim(),
    decimalPlaces = content.split(',')[1] || '',
    //Er worden waarden gegeven aan de voorgenoemde functies.
    value = unformat(content),
    values = interpolation(fps, easing.quadratic, value);

    //Functie wordt opnieuw benoemd met nieuwe parameters
    animateEl(values, 1000, function (current, i, values){
      //Variabele wordt aangemaakt met waarde
      var isLast = (i === values.length - 1),
      //Er wordt een betekenis gegeven aan de waarde
      value = round(current, decimalPlaces.length);
      el.firstChild.textContent = isLast? content : format(value);
    });
  });
});