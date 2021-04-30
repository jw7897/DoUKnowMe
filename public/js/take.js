let count = 0;
window.onload = function() {
  // document.getElementById("final").style.display = "none"
  // document.getElementById("nameinput").style.display = "block"
  // document.getElementById("question1input").style.display = "none"
  document.getElementById("nextBtn").onclick = counter;
}

function counter() {
  count = count + 1
  if (count === 1) {
    let ra = document.getElementById("question1RA").value
    let fa1 = document.getElementById("question1FA1").value
    let fa2 = document.getElementById("question1FA2").value
    let fa3 = document.getElementById("question1FA3").value
    let arr = ['<input type="button" id="question1RA">', '<input type="button" id="question1FA1">', '<input type="button" id="question1FA2">', '<input type="button" id="question1FA3">'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question1").innerHTML = arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    document.getElementById("question1RA").value = ra;
    document.getElementById("question1FA1").value = fa1;
    document.getElementById("question1FA2").value = fa2;
    document.getElementById("question1FA3").value = fa3;
    document.getElementById("question1").style.display = "block"
  } else if (count === 2) {
    document.getElementById("question1").style.display = "none"

    let ra = document.getElementById("question2RA").value
    let fa1 = document.getElementById("question2FA1").value
    let fa2 = document.getElementById("question2FA2").value
    let fa3 = document.getElementById("question2FA3").value
    let arr = ['<input type="button" id="question2RA">', '<input type="button" id="question2FA1">', '<input type="button" id="question2FA2">', '<input type="button" id="question2FA3">'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question2").innerHTML = arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    document.getElementById("question2RA").value = ra;
    document.getElementById("question2FA1").value = fa1;
    document.getElementById("question2FA2").value = fa2;
    document.getElementById("question2FA3").value = fa3;

    document.getElementById("question2").style.display = "block"
  } else if (count === 3) {
    document.getElementById("question2").style.display = "none"

    let ra = document.getElementById("question3RA").value
    let fa1 = document.getElementById("question3FA1").value
    let fa2 = document.getElementById("question3FA2").value
    let fa3 = document.getElementById("question3FA3").value
    let arr = ['<input type="button" id="question3RA">', '<input type="button" id="question3FA1">', '<input type="button" id="question3FA2">', '<input type="button" id="question3FA3">'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question3").innerHTML = arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    document.getElementById("question3RA").value = ra;
    document.getElementById("question3FA1").value = fa1;
    document.getElementById("question3FA2").value = fa2;
    document.getElementById("question3FA3").value = fa3;

    document.getElementById("question3").style.display = "block"
  } else if (count === 4) {
    document.getElementById("question3").style.display = "none"

    let ra = document.getElementById("question4RA").value
    let fa1 = document.getElementById("question4FA1").value
    let fa2 = document.getElementById("question4FA2").value
    let fa3 = document.getElementById("question4FA3").value
    let arr = ['<input type="button" id="question4RA">', '<input type="button" id="question4FA1">', '<input type="button" id="question4FA2">', '<input type="button" id="question4FA3">'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question4").innerHTML = arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    document.getElementById("question4RA").value = ra;
    document.getElementById("question4FA1").value = fa1;
    document.getElementById("question4FA2").value = fa2;
    document.getElementById("question4FA3").value = fa3;
    document.getElementById("question4").style.display = "block"
  } else if (count === 5) {
    document.getElementById("question4").style.display = "none"
    let ra = document.getElementById("question5RA").value
    let fa1 = document.getElementById("question5FA1").value
    let fa2 = document.getElementById("question5FA2").value
    let fa3 = document.getElementById("question5FA3").value
    let arr = ['<input type="button" id="question5RA">', '<input type="button" id="question5FA1">', '<input type="button" id="question5FA2">', '<input type="button" id="question5FA3">'];
    document.getElementById("nameinput").style.display = "none"
    document.getElementById("question5").innerHTML = arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0] + arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    document.getElementById("question5RA").value = ra;
    document.getElementById("question5FA1").value = fa1;
    document.getElementById("question5FA2").value = fa2;
    document.getElementById("question5FA3").value = fa3;
    document.getElementById("question5").style.display = "block"
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("final").style.display = "block";
  }
};

function select() {
  let answBtns = document.querySelectorAll("input.answBtn")
  for (var i = 0; i < answBtns.length; i++) {
    var self = answBtns[i];
    self.addEventListener('click', function(event) {
      // prevent browser's default action
      event.preventDefault();

      // call your awesome function here
      self.style.color = "blue";
    }, false);
  }
}