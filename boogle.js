var die = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dice = {
    sides: 6,
    roll: function () {
        return Math.floor(Math.random() * this.sides) + 1;
    }
};
function roll() {
	var die = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	document.getElementById("result").innerHTML = '';
	for ( a = 0; 1 < 2; a +=1) {
		var result = die.reduce(function(accumulator, currentValue) {
			return accumulator + currentValue;
		});
		if (result == 60 ) {
		   break;
		}
		for (b = 0; b < 10; b += 1){ 
			if (die[b] != 6) { 
				die[b] = dice.roll(); 
			}	
		}
		document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + JSON.stringify(die) + '<br>';
	}
	document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + '<br> you have rolled a ' + a;
}