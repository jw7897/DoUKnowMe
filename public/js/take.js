let count = 0;

window.onload = function() {
// document.getElementById("final").style.display = "none"
// document.getElementById("nameinput").style.display = "block"
// document.getElementById("question1input").style.display = "none"
document.getElementById("nextBtn").onclick = counter;
}

function counter(){
   count = count + 1
	if(count === 1){
	    document.getElementById("nameinput").style.display = "none"
		document.getElementById("question1").style.display = "block"
	} else if(count === 2){
		document.getElementById("question1").style.display = "none"
	    document.getElementById("question2").style.display = "block"
	} else if( count === 3){
		document.getElementById("question2").style.display = "none"
	    document.getElementById("question3").style.display = "block"
	} else if( count === 4){
		document.getElementById("question3").style.display = "none"
	    document.getElementById("question4").style.display = "block"
	} else if( count === 5){
		document.getElementById("question4").style.display = "none"
	    document.getElementById("question5").style.display = "block"
		document.getElementById("nextBtn").style.display = "none";
		document.getElementById("final").style.display = "block";
	} 
};