/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

const makeChange = total => {
  const currencyList = [1, 2, 5, 10, 20, 50, 100, 200];
  let combosList = [];

  const findCombos = (amount, index, combo) => {
    if (amount === 0) {
      combosList.push(combo);
      return;
    }
    let curCurrency = currencyList[index];

    while (amount >= curCurrency) {
      let curCombo = combo.slice();
      curCombo[index] = curCombo[index] + 1 || 1;
      findCombos(amount - curCurrency, index, curCombo);
      curCurrency = currencyList[++index];
    }
  };

  findCombos(total, 0, []);
  console.log(combosList);
  return combosList.length;
};

console.log(makeChange(1)); // === 1
console.log(makeChange(2)); // === 2
console.log(makeChange(6)); // === 5

