function Weather(){
  Weather.prototype.isStormy = function () {
    if(Math.random()>0.8) {
      return true;
    }
    return false;
  };
};
