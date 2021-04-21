const { MnemonicKey } = require("@terra-money/terra.js");
const fs = require("fs");

const target = /^terra1nkw/;
const preciseTarget = /^terra1nkw(a|4)/;
while (1) {
  const mk = new MnemonicKey();
  if (preciseTarget.test(mk.accAddress)) {
    fs.writeFileSync(
      `./precise_output/${Date.now()}.json`,
      JSON.stringify({
        accAddress: mk.accAddress,
        mnemonic: mk.mnemonic,
      })
    );
  } else if (target.test(mk.accAddress)) {
    fs.writeFileSync(
      `./output/${Date.now()}.json`,
      JSON.stringify({
        accAddress: mk.accAddress,
        mnemonic: mk.mnemonic,
      })
    );
  }
}
