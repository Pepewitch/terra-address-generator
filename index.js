const { MnemonicKey } = require('@terra-money/terra.js');
const fs =  require('fs')

const target = /^terra1nkw(a|4)run/

while(1) {
  const mk = new MnemonicKey();
  if(target.test(mk.accAddress)) {
    fs.writeFile(`./output/${Date.now()}.json`, JSON.stringify({
      accAddress: mk.accAddress,
      mnemonic: mk.mnemonic
    }))
  }
}