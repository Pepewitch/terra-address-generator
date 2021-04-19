const { MnemonicKey } = require("@terra-money/terra.js");
const fs = require("fs");

const target = /^terra1nkw(a|4)/;
const preciseTarget = /^terra1nkw(a|4)r/;
while (1) {
  const mk = new MnemonicKey();
  if (preciseTarget.test(mk.accAddress)) {
    fs.writeFile(
      `./precise_output/${Date.now()}.json`,
      JSON.stringify({
        accAddress: mk.accAddress,
        mnemonic: mk.mnemonic,
      })
    );
  } else if (target.test(mk.accAddress)) {
    fs.writeFile(
      `./output/${Date.now()}.json`,
      JSON.stringify({
        accAddress: mk.accAddress,
        mnemonic: mk.mnemonic,
      })
    );
  }
}
