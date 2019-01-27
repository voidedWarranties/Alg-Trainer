Cube.initSolver();

var listener = new window.keypress.Listener();
var started = false;
listener.simple_combo("enter", function() {
  if(!started) {
    render();
    started = true;
  }
});

function render() {
  var fr = new FileReader();
  $("#solutions").html("");
  fr.onload = function() {
    var algset = new AlgorithmSet(JSON.parse(fr.result));
    var alg = algset.getAlg();
    $("#result").html(alg.getScramble() + "<img src=\"" + alg.getImageTD() + "\">" + "<img src=\"" + alg.getImageTransparent() + "\">");
    listener.simple_combo("backspace", function() {
      $("#solutions").html(alg.getAlg());
    });
    listener.simple_combo("space", function() {
      $("#solutions").html("");
      alg = algset.getAlg();
      if(alg != null) {
        $("#result").html(alg.getScramble() + "<img src=\"" + alg.getImageTD() + "\">" + "<img src=\"" + alg.getImageTransparent() + "\">");
      }
    });
    listener.simple_combo("up", function() {
      algset.setAlgSetEnabled(prompt("Disable Set"), false);
    });
    listener.simple_combo("down", function() {
      algset.setAlgSetEnabled(prompt("Enable Set"), true);
    });
    listener.simple_combo("left", function() {
      algset.setAlgEnabled(prompt("Disable Alg"), false);
    });
    listener.simple_combo("right", function() {
      algset.setAlgEnabled(prompt("Enable Alg"), true);
    });
  }
  fr.readAsText(document.getElementById("file-input").files[0]);
}
