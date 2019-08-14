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
		document.getElementById('answer').text = thisColor
		currentColor = thisColor
	}else{
		changebgcolor()
	}

}


document.onkeydown = function(evt) {
    changebgcolor()
};
