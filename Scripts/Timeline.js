$(function(){

  //dislessia
	var getTextNodesIn = function(el) { // Look at all the page elements and returns the text nodes
	    return $(el).find(":not(iframe,script)").addBack().contents().filter(function() {
	        return this.nodeType == 3; // Text node types are type 3
	    });
	};

	// var textNodes = getTextNodesIn($("p, h1, h2, h3","*"));
	var textNodes = getTextNodesIn($("p"));


	var wordsInTextNodes = [];
	for (var i = 0; i < textNodes.length; i++) {
		var node = textNodes[i];

		var words = []

		var re = /\w+/g;
		var match;
		while ((match = re.exec(node.nodeValue)) != null) {

			var word = match[0];
			var position = match.index;

			words.push({
				length: word.length,
				position: position
			});
		}

		wordsInTextNodes[i] = words;
	};

	function messUpWords () {

		for (var i = 0; i < textNodes.length; i++) {

			var node = textNodes[i];

			for (var j = 0; j < wordsInTextNodes[i].length; j++) {

				// Only change a third of the words each round.
				if (Math.random() > 1/3) {

					continue;
				}

				var wordMeta = wordsInTextNodes[i][j];

				var word = node.nodeValue.slice(wordMeta.position, wordMeta.position + wordMeta.length);
				var before = node.nodeValue.slice(0, wordMeta.position);
				var after  = node.nodeValue.slice(wordMeta.position + wordMeta.length);

				node.nodeValue = before + messUpWord(word) + after;
			};
		};
	}

	function messUpWord (word) {

		if (word.length < 2) {

			return word;
		}

		return messUpMessyPart(word);
	}

	function messUpMessyPart (messyPart) {

		if (messyPart.length < 2) {

			return messyPart;
		}

		var a, b;
		while (!(a < b)) {

			a = getRandomInt(0, messyPart.length - 1);
			b = getRandomInt(0, messyPart.length - 1);
		}

		return messyPart.slice(0, a) + messyPart[b] + messyPart.slice(a+1, b) + messyPart[a] + messyPart.slice(b+1);
	}

	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	function getRandomInt(min, max) {
		
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

//size randomizer

	function size() {
	document.getElementById(getRandomInt(0,155)).style.fontSize = getRandomInt(17,23)+"px";
}

//bigscare

var x = getRandomInt(0,155);

	function bigScare(){
		
		document.getElementById(x).style.fontSize = getRandomInt(50,200)+"px";
		setTimeout(reset, 500);
	}

function reset(){
	document.getElementById(x).style.fontSize = getRandomInt(17,23)+"px";
}


//colors

const colors = [
  '#003300',
  '#000033',
  '#330000',
  '#003333',
  '#333333',
  '#330033',
  '#333300',
  '#660000',
  '#000066',
  '#006600',
  '#333366',
  '#330066',
  '#006633',
  '#003366',
  '#003366',
];

function color()
{
	document.getElementById(getRandomInt(0,155)).style.color = colors[getRandomInt(0,14)] ;
}

//corrompere ulteriormente

function corrompo ()
{
	document.getElementById(getRandomInt(0,155)).innerHTML = "c̵̬͒'̶͕̤͋ ̸̹̂̊y̷͓̹͋̕m̸̢̬͐͆g̸̙̣̕'̵̦̊́ͅ ̵̺͈̿m̶̠͘g̶̻̭͒ȑ̶̲̚'̷͈̩̅̐ḻ̵͂͌ṳ̶̃̍h̸̫͊ ";
}

function traduco ()
{
	var x = getRandomInt(0,155);
	if (document.getElementById(x).innerHTML == "c̵̬͒'̶͕̤͋ ̸̹̂̊y̷͓̹͋̕m̸̢̬͐͆g̸̙̣̕'̵̦̊́ͅ ̵̺͈̿m̶̠͘g̶̻̭͒ȑ̶̲̚'̷͈̩̅̐ḻ̵͂͌ṳ̶̃̍h̸̫͊ ")
	{
		document.getElementById(x).innerHTML = "WE SEE YOU ";
		document.getElementById(x).style.textDecoration= "line-through";
	}
}




//executions
setInterval(traduco, 3000);
setInterval(corrompo, 1000);
setInterval(bigScare, 7000);
setInterval(size, 50);
setInterval(messUpWords, 150);
setInterval(color, 50);
});