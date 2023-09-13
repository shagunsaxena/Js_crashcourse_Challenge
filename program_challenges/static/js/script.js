// challenge age in days
function ageInDays(){
var birthyear = prompt("what year were you born...");
var ageInDayss = (2023 - birthyear)* 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are '+ ageInDayss +' days old.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}

//challenge 2 cat generator
function generatCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="https://cdn.dribbble.com/users/499982/screenshots/3943676/___.gif";
    image.style.height = '200px';
    image.style.width = '250px';
    div.appendChild(image);            
}