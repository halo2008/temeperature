'use strict';


var output = document.getElementById('output-temp');

var output_2 = document.getElementById('output-text');

var output_3 = document.getElementById('water');

var button = document.getElementById('btn-cel');

var button_2 = document.getElementById('btn-cel-2');

var temp;

var tempx;

button.addEventListener('click', function(){  
    
  temp = window.prompt('wpisz temperature w stopniach celciusza');
  
  temp = parseFloat(temp);
  
  tempx = temp * 1.8 + 32;
  
  output.innerHTML = 'temperatura w stopniach celsjusza ' +temp;
  
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
  
  waterOfStateCondition();
 
});

button_2.addEventListener('click', function(){  
    
  temp = window.prompt('wpisz temperature w stopniach celciusza');  
  
  tempx = (temp - 32) / 1.8;
  
  output.innerHTML = 'temperatura w stopniach fahrenheita ' +temp;
  
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
  
  waterOfStateCondition();
 
});

function waterOfStateCondition () {
  if (temp < 0 || tempx < 0) {
    output_3.innerHTML ='woda zamarzła';
  }
  
  else if (temp === 0 || tempx === 0) {
    output_3.innerHTML ='trzeba sprawdzić ;)';
  }
  
  else if (temp > 0 && temp < 100 || tempx > 0 && tempx < 100) {
    output_3.innerHTML ='woda w stanie ciekłym';
  }
  
  else {
    output_3.innerHTML ='woda w stanie gazowym';
  }
}
