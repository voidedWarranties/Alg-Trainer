this.Algorithm = class Algorithm {
  constructor(alg, arrows) {
    this.alg = alg;
    this.arrows = arrows;
  }

  getScramble() {
    var cube = new Cube();
    cube.move(Cube.inverse(this.alg));
    return Cube.inverse(cube.solve());
  }

  getAlg() {
    return this.alg;
  }

  getImageTD() {
    var s = this.alg.replace(/\s+/g, ''),
    url = "http://cube.crider.co.uk/visualcube.png?size=150&view=plan&alg=" + s + "&arw=" + this.arrows;
    return url;
  }

  getImageTransparent() {
    var s = this.alg.replace(/\s+/g, ''),
    url = "http://cube.crider.co.uk/visualcube.png?size=150&co=12&fo=50&alg=" + s + "&arw=" + this.arrows;
    return url;
  }
}
