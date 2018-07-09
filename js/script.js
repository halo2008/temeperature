'use strict';


var output = document.getElementById('output-temp');

var output_2 =document.getElementById('output-text');

var button = document.getElementById('btn-cel');

var button_2 = document.getElementById('btn-cel-2');



button.addEventListener('click', function(){  
    
  temp = window.prompt('wpisz temperature w stopniach celciusza');
  
  var temp = parseFloat(temp);
  
  var tempx;
  
  tempx = temp * 1.8 + 32;
  
  output.innerHTML = 'temperatura w stopniach celsjusza ' +temp+ ' temperatura w stopniach farenchaita '+ tempx;
  
   if (isNaN(temp)) {
    window.prompt('nie podałeś liczby');
    return 0;
  }
  
  else if (temp < 0) {
    output_2.innerHTML = 'brrr zimno';
  }
  
  else if (temp === 0){
   output_2.innerHTML = 'chyba woda zamarzła';
  }
  
  else if (18 > temp && temp > 0 ) {
    output_2.innerHTML ='nie za ciepło';
  }
  
  else if ( 30 > temp && temp > 18) {
    output_2.innerHTML ='mmm przyjemnie ciepło';
  }
  
  else {
    output_2.innerHTML ='za gorąco';
  }
 
});

button_2.addEventListener('click', function(){  
    
  temp = window.prompt('wpisz temperature w stopniach celciusza');
  
  var tempx;
  
  tempx = (temp - 32) / 1.8;
  
  output.innerHTML = 'temperatura w stopniach fahrenheita ' +temp+ ' temperatura w stopniach celsjusza '+ tempx;
  
  if (isNaN(temp)) {
    window.prompt('nie podałeś liczby');
  }
  
  else if (tempx < 0) {
    output_2.innerHTML = 'brrr zimno';
  }
  
  else if (tempx === 0){
   output_2.innerHTML = 'chyba woda zamarzła';
  }
  
  else if (18 > tempx && tempx > 0 ) {
    output_2.innerHTML ='nie za ciepło';
  }
  
  else if ( 30 > tempx && tempx > 18) {
    output_2.innerHTML ='mmm przyjemnie ciepło';
  }
  
  else {
    output_2.innerHTML ='za gorąco';
  }
 
}); 