//assign the sentece string to a variable//
var testSentence = "The brown fox is quick."
//place the variable in an array on the page//
for (var i =0; i < testSentence.length; i++) {
var $letter = document.createElement('span')
$letter.textContent = testSentence[i]
document.body.appendChild($letter)
}
//style each character, then reference the css file for formatting//
var $firstletter=document.querySelector('span')
$firstletter.classList.add('current')
