Cube.initSolver();

var listener = new window.keypress.Listener();
listener.simple_combo("enter", function() {
  render();
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
  }
  fr.readAsText(document.getElementById("file-input").files[0]);
}
