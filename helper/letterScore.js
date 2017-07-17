module.exports = function letterScore(score){
  hasil = []
  score.forEach(data=>{
    if (data.Score >=85) {
      hasil.push('A')
    }else if (data.Score>=70 && data.Score<85) {
      hasil.push('B')
    }else if (data.Score>=55 && data.Score<70) {
      hasil.push('C')
    }else if(data.Score == null){
      hasil.push('Empty')
    }else {
      hasil.push('D')
    }
  })
  return hasil
};
