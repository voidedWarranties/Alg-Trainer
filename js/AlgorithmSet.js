this.AlgorithmSet = class AlgorithmSet {
  constructor(dataObj) {
    this.alglist = [];
    var sets = dataObj.sets;
    for(var i = 0; i < sets.length; i++) {
      var set = sets[i];
      var algs = set.algs;
      for(var j = 0; j < algs.length; j++) {
        var alg = algs[j];
        this.alglist.push(new Algorithm(alg.alg, alg.arrows));
      }
    }
  }

  getAlg() {
    var alg = this.alglist[Math.floor(Math.random()*this.alglist.length)];
    return alg;
  }
}
