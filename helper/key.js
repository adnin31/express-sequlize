module.exports = function makeKey(){
  let maxKey = 8
  let hasil = []
  let charRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < maxKey; i++) {
    hasil.push(charRandom.charAt(Math.floor(Math.random() * charRandom.length)))
  }
  return  hasil.join("")
}
