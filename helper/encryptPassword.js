const crypto = require('crypto');
const hash = crypto.createHash('sha256');

function encrypt(password){
  let hasil ;
  hash.on('readable', () => {
    const data = hash.read();
    if (data) {
      hasil = data.toString('hex');
    }
      // console.log(data.toString('hex'));
      // return data.toString('hex')
      // Prints:
      //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
  });

  hash.write(password);
  hash.end();
  return hasil
};

module.exports =encrypt;
