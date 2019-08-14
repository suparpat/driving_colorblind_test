console.log('Driving Colorblind Test')

var colors = ["red", 'green', 'yellow']
var currentColor = ''

function changebgcolor(){
	var random = Math.random() * colors.length
	var floor = Math.floor(random)
	var thisColor = colors[floor]
	if(currentColor != thisColor){
		console.log(random, floor)
		document.body.style.backgroundColor = thisColor;
		document.getElementById('answer').textContent = thisColor
		currentColor = thisColor
	}else{
		changebgcolor()
	}

}
var body = document.getElementsByTagName('body')[0]


window.addEventListener("touchstart", function(evt){
	console.log('touch')
	changebgcolor()
}, false);

body.onclick = function(){
	console.log('click')
	changebgcolor()
}

document.onkeydown = function(evt) {
	console.log('keydown')
    changebgcolor()
};
