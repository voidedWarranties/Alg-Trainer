this.AlgorithmSet = class AlgorithmSet {
  constructor(dataObj) {
    this.disabledSets = [];
    this.disabledAlgs = [];
    this.sets = dataObj.sets;
  }

  getAlg() {
    var alglist = [];
    for(var i = 0; i < this.sets.length; i++) {
      var set = this.sets[i];
      if(this.disabledSets.includes(set.name)) {
        continue;
      }
      var algs = set.algs;
      for(var j = 0; j < algs.length; j++) {
        var alg = algs[j];
        if(this.disabledAlgs.includes(alg.name)) {
          continue;
        }
        alglist.push(new Algorithm(alg.alg, alg.arrows));
      }
    }
    return alglist[Math.floor(Math.random()*alglist.length)];
  }

  setAlgSetEnabled(setName, enabled) {
    if(!enabled) {
      if(!this.disabledSets.includes(setName)) {
        this.disabledSets.push(setName);
      }
    } else {
      this.disabledSets.splice(this.disabledSets.indexOf(setName), enabled);
    }
  }

  setAlgEnabled(algName, enabled) {
    if(!enabled) {
      if(!this.disabledAlgs.includes(algName)) {
        this.disabledAlgs.push(algName);
      }
    } else {
      this.disabledAlgs.splice(this.disabledAlgs.indexOf(algName), enabled);
    }
  }
}
