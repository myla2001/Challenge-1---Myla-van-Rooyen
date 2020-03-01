var countDownDate = new Date("Jul 20, 2020 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "u "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);





var i = 0;
function aantalBrandstof() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("percentage");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 78) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}





var easing = {
    quadratic: function (x){
      return Math.sqrt(x);
    }
};

function range(start, stop, step){
  var array = [];
  for(var i = start; i < stop; i += step) array.push(i);
  return array;
}

function interpolation(fps, easing, finalValue){
  function scaleIt(value){return finalValue * value; }

  var x = range(0, 1, 1/fps),
      y = x.map(easing).map(scaleIt);

  return y;
}

function animateEl(values, duration, onAnimate){
  var frameIndex = 0,
      fps = values.length,
      id = setInterval(anime, duration/fps );

  function anime(){
    var current = values[frameIndex],
        isLastFrame = (frameIndex === fps - 1);

    onAnimate(current, frameIndex, values);

    if(isLastFrame){
      clearInterval(id);
    }else{
      frameIndex++;
    }
  }
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function unformat(content){
  var unlocalized = content.replace('.', '').replace(',', '.'),
      value = parseFloat(unlocalized);
  return value;
}

function format(value){
  return value.toString().replace('.', ',');
}

window.addEventListener("DOMContentLoaded", function(){
    var fps = 30,
        els = [].slice.call(document.querySelectorAll('.aantalWater'));

    els.forEach(function(el){
        var content = (el.firstChild.textContent).trim(),
            decimalPlaces = content.split(',')[1] || '',
            value = unformat(content),
            values = interpolation(fps, easing.quadratic, value);

        animateEl(values, 1000, function (current, i, values){
          var isLast = (i === values.length - 1),
              value = round(current, decimalPlaces.length);
          el.firstChild.textContent = isLast? content : format(value);
        });
    });
});