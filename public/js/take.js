let count = 0;
window.onload = function() {
  document.getElementById("nextBtn").onclick = counter;
}

function counter() {	
  count = count + 1
  if (count === 1) {
	let q1 = document.getElementById("q1").textContent
    let ra = document.getElementById("question1RAinpt").value
    let fa1 = document.getElementById("question1FA1inpt").value
    let fa2 = document.getElementById("question1FA2inpt").value
    let fa3 = document.getElementById("question1FA3inpt").value
    let arr = ['<h2 id="q1"><%=quiz.question1%></h2>','<input type="radio" name="q1answBtns" value="<%=quiz.question1RA%>"><label for="question1RA" id="question1RA"><%=quiz.question1RA%></label><br>','<input type="radio" name="q1answBtns" value="<%=quiz.question1FA1%>"><label for="question1FA1" id="question1FA1"><%=quiz.question1FA1%></label><br>','<input type="radio" name="q1answBtns" value="<%=quiz.question1FA2%>"><label for="question1FA2" id="question1FA2"><%=quiz.question1FA1%></label><br>',' <input type="radio" name="q1answBtns" value="<%=quiz.question1FA3%>"><label for="question1FA3" id="question1FA3"><%=quiz.question1FA3%></label><br>'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question1").innerHTML = arr.shift() + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
	document.getElementById("q1").innerHTML = q1;
    document.getElementById("question1RA").innerHTML = ra;
    document.getElementById("question1FA1").innerHTML = fa1;
    document.getElementById("question1FA2").innerHTML = fa2;
    document.getElementById("question1FA3").innerHTML = fa3;
    document.getElementById("question1").style.display = "block"
  } else if (count === 2) {
    document.getElementById("question1").style.display = "none"
let q2 = document.getElementById("q2").textContent
    let ra = document.getElementById("question2RAinpt").value
    let fa1 = document.getElementById("question2FA1inpt").value
    let fa2 = document.getElementById("question2FA2inpt").value
    let fa3 = document.getElementById("question2FA3inpt").value
    let arr = ['<h2 id="q2"><%=quiz.question2%></h2>','<input type="radio" name="q2answBtns" value="<%=quiz.question2RA%>"><label for="question2RA" id="question2RA"><%=quiz.question2RA%></label><br>','<input type="radio" name="q2answBtns" value="<%=quiz.question2FA1%>"><label for="question2FA1" id="question2FA1"><%=quiz.question2FA1%></label><br>','<input type="radio" name="q2answBtns" value="<%=quiz.question2FA2%>"><label for="question2FA2" id="question2FA2"><%=quiz.question2FA1%></label><br>',' <input type="radio" name="q2answBtns" value="<%=quiz.question2FA3%>"><label for="question2FA3" id="question2FA3"><%=quiz.question2FA3%></label><br>'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question2").innerHTML = arr.shift() + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
	document.getElementById("q2").innerHTML = q2;
    document.getElementById("question2RA").innerHTML = ra;
    document.getElementById("question2FA1").innerHTML = fa1;
    document.getElementById("question2FA2").innerHTML = fa2;
    document.getElementById("question2FA3").innerHTML = fa3;
    document.getElementById("question2").style.display = "block"
  } else if (count === 3) {
    document.getElementById("question2").style.display = "none"
let q3 = document.getElementById("q3").textContent
    let ra = document.getElementById("question3RAinpt").value
    let fa1 = document.getElementById("question3FA1inpt").value
    let fa2 = document.getElementById("question3FA2inpt").value
    let fa3 = document.getElementById("question3FA3inpt").value
    let arr = ['<h2 id="q3"><%=quiz.question3%></h2>','<input type="radio" name="q3answBtns" value="<%=quiz.question3RA%>"><label for="question3RA" id="question3RA"><%=quiz.question3RA%></label><br>','<input type="radio" name="q3answBtns" value="<%=quiz.question3FA1%>"><label for="question3FA1" id="question3FA1"><%=quiz.question3FA1%></label><br>','<input type="radio" name="q3answBtns" value="<%=quiz.question3FA2%>"><label for="question3FA2" id="question3FA2"><%=quiz.question3FA1%></label><br>',' <input type="radio" name="q3answBtns" value="<%=quiz.question3FA3%>"><label for="question3FA3" id="question3FA3"><%=quiz.question3FA3%></label><br>'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question3").innerHTML = arr.shift() + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
	document.getElementById("q3").innerHTML = q3;
    document.getElementById("question3RA").innerHTML = ra;
    document.getElementById("question3FA1").innerHTML = fa1;
    document.getElementById("question3FA2").innerHTML = fa2;
    document.getElementById("question3FA3").innerHTML = fa3;
    document.getElementById("question3").style.display = "block"
  } else if (count === 4) {
    document.getElementById("question3").style.display = "none"
let q4 = document.getElementById("q4").textContent
    let ra = document.getElementById("question4RAinpt").value
    let fa1 = document.getElementById("question4FA1inpt").value
    let fa2 = document.getElementById("question4FA2inpt").value
    let fa3 = document.getElementById("question4FA3inpt").value
    let arr = ['<h2 id="q4"><%=quiz.question4%></h2>','<input type="radio" name="q4answBtns" value="<%=quiz.question4RA%>"><label for="question4RA" id="question4RA"><%=quiz.question4RA%></label><br>','<input type="radio" name="q4answBtns" value="<%=quiz.question4FA1%>"><label for="question4FA1" id="question4FA1"><%=quiz.question4FA1%></label><br>','<input type="radio" name="q4answBtns" value="<%=quiz.question4FA2%>"><label for="question4FA2" id="question4FA2"><%=quiz.question4FA1%></label><br>',' <input type="radio" name="q4answBtns" value="<%=quiz.question4FA3%>"><label for="question4FA3" id="question4FA3"><%=quiz.question4FA3%></label><br>'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question4").innerHTML = arr.shift() + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
	document.getElementById("q4").innerHTML = q4;
    document.getElementById("question4RA").innerHTML = ra;
    document.getElementById("question4FA1").innerHTML = fa1;
    document.getElementById("question4FA2").innerHTML = fa2;
    document.getElementById("question4FA3").innerHTML = fa3;
    document.getElementById("question4").style.display = "block"
  } else if (count === 5) {
    document.getElementById("question4").style.display = "none"
    let q5 = document.getElementById("q5").textContent
    let ra = document.getElementById("question5RAinpt").value
    let fa1 = document.getElementById("question5FA1inpt").value
    let fa2 = document.getElementById("question5FA2inpt").value
    let fa3 = document.getElementById("question5FA3inpt").value
    let arr = ['<h2 id="q5"><%=quiz.question5%></h2>','<input type="radio" name="q5answBtns" value="<%=quiz.question5RA%>"><label for="question5RA" id="question5RA"><%=quiz.question5RA%></label><br>','<input type="radio" name="q5answBtns" value="<%=quiz.question5FA1%>"><label for="question5FA1" id="question5FA1"><%=quiz.question5FA1%></label><br>','<input type="radio" name="q5answBtns" value="<%=quiz.question5FA2%>"><label for="question5FA2" id="question5FA2"><%=quiz.question5FA1%></label><br>',' <input type="radio" name="q5answBtns" value="<%=quiz.question5FA3%>"><label for="question5FA3" id="question5FA3"><%=quiz.question5FA3%></label><br>'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question5").innerHTML = arr.shift() + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
	document.getElementById("q5").innerHTML = q5;
    document.getElementById("question5RA").innerHTML = ra;
    document.getElementById("question5FA1").innerHTML = fa1;
    document.getElementById("question5FA2").innerHTML = fa2;
    document.getElementById("question5FA3").innerHTML = fa3;
    document.getElementById("question5").style.display = "block"
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("final").style.display = "block";
  }
};
