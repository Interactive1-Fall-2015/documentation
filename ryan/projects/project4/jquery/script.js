var words = ["jolifanto bambla o falli bambla", "ßßß ß", "j", "f", "aaaaa aaaaa a", "großiga m’pfa habla horem", "egiga goramen", "e eee ee e eeee", "higo bloiko russula huju", "i", "hollaka hollala", "anlogo bung", "blago bung blago bung", "bosso fataka", "s", "ü üü ü", "schampa wulla wussa olobo", "hej tatta gorem", "g", "eschige zunbada", "wulubu ssubudu uluwu ssubudu", "w", "–umf", "kusa gauma", "ba–umf"];

window.addEventListener("load", function() {
		var randoms = window.document.getElementsByClassName("randoms");
		for (i = 0; i < randoms.length; i++)
				changeWord(randoms[i]);
}, false);

function changeWord(a) {
		a.style.opacity = '0.1';
		a.innerHTML = words[getRandomInt(0, words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 700);
		setTimeout(function() {
				changeWord(a);
		}, getRandomInt(2000, 4000, 10000)); /*this is the speed*/
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
