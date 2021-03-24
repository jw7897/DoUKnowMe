let count = 0;

window.onload = function() {
document.getElementById("final").style.display = "none"
document.getElementById("nameinput").style.display = "block"
document.getElementById("question1input").style.display = "none"
document.getElementById("nextBtn").onclick = counter;
}

function counter(){
   count = count + 1
	if(count === 1){
	    document.getElementById("nameinput").style.display = "none"
		document.getElementById("question1input").style.display = "block"
	} else if(count === 2){
		document.getElementById("question1input").style.display = "none"
	    document.getElementById("question1RAinput").style.display = "block"
	} else if( count === 3){
		document.getElementById("question1RAinput").style.display = "none"
	    document.getElementById("question1FA1input").style.display = "block"
	} else if( count === 4){
		document.getElementById("question1FA1input").style.display = "none"
	    document.getElementById("question1FA2input").style.display = "block"
	} else if( count === 5){
		document.getElementById("question1FA2input").style.display = "none"
	    document.getElementById("question1FA3input").style.display = "block"
	} else if( count === 6){
		document.getElementById("question1FA3input").style.display = "none"
	    document.getElementById("question2input").style.display = "block"
	} else if( count === 7){
		document.getElementById("question2input").style.display = "none"
	    document.getElementById("question2RAinput").style.display = "block"
	} else if( count === 8){
		document.getElementById("question2RAinput").style.display = "none"
	    document.getElementById("question2FA1input").style.display = "block"
	} else if( count === 9){
		document.getElementById("question2FA1input").style.display = "none"
	    document.getElementById("question2FA2input").style.display = "block"
	} else if( count === 10){
		document.getElementById("question2FA2input").style.display = "none"
	    document.getElementById("question2FA3input").style.display = "block"
	} else if( count === 11){
		document.getElementById("question2FA3input").style.display = "none"
	    document.getElementById("question3input").style.display = "block"
	} else if( count === 12){
		document.getElementById("question3input").style.display = "none"
	    document.getElementById("question3RAinput").style.display = "block"
	} else if( count === 13){
		document.getElementById("question3RAinput").style.display = "none"
	    document.getElementById("question3FA1input").style.display = "block"
	} else if( count === 14){
		document.getElementById("question3FA1input").style.display = "none"
	    document.getElementById("question3FA2input").style.display = "block"
	} else if( count === 15){
		document.getElementById("question3FA2input").style.display = "none"
	    document.getElementById("question3FA3input").style.display = "block"
	} else if( count === 16){
		document.getElementById("question3FA3input").style.display = "none"
	    document.getElementById("question4input").style.display = "block"
	} else if( count === 17){
		document.getElementById("question4input").style.display = "none"
	    document.getElementById("question4RAinput").style.display = "block"
	} else if( count === 18){
		document.getElementById("question4RAinput").style.display = "none"
	    document.getElementById("question4FA1input").style.display = "block"
	} else if( count === 19){
		document.getElementById("question4FA1input").style.display = "none"
	    document.getElementById("question4FA2input").style.display = "block"
	} else if( count === 20){
		document.getElementById("question4FA2input").style.display = "none"
	    document.getElementById("question4FA3input").style.display = "block"
	} else if( count === 21){
		document.getElementById("question4FA3input").style.display = "none"
	    document.getElementById("question5input").style.display = "block"
	} else if( count === 22){
		document.getElementById("question5input").style.display = "none"
	    document.getElementById("question5RAinput").style.display = "block"
	} else if( count === 23){
		document.getElementById("question5RAinput").style.display = "none"
	    document.getElementById("question5FA1input").style.display = "block"
	} else if( count === 24){
		document.getElementById("question5FA1input").style.display = "none"
	    document.getElementById("question5FA2input").style.display = "block"
	} else if( count === 25){
		document.getElementById("question5FA2input").style.display = "none"
	    document.getElementById("question5FA3input").style.display = "block"
		document.getElementById("nextBtn").style.display = "none";
		document.getElementById("final").style.display = "block";
	}
};