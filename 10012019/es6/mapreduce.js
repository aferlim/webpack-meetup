// arr = [{ key: 1 }, { key: 7 }, { key: 2 }];

// var result = arr.map(function(item, i) {
//   return item;
// });

// console.log(result);

// // var resultFilter = arr.filter(function(item, i) {
// //   return item > 3;
// // });

// var resultArr = [];

// var resultFilter = arr.reduce(function(prev, curr, ix, ar) {
//   return curr.key > prev.key ? curr : prev;

//   //if (ar.indexOf(curr) === ix) resultArr.push(curr);
// });

// console.log(resultFilter);

var margins = [
  { catalog: 1, sku: null, margin: 100, importance: 1 },
  { catalog: null, sku: 1, margin: 200, importance: 2 },
  { catalog: null, sku: 2, margin: 300, importance: 2 },
  { catalog: 1, sku: 1, margin: 400, importance: 3 }
];

const calcmargin = (catalog, sku, price) =>
  [
    margins
      .filter(
        elem =>
          (elem.catalog === null || elem.catalog === catalog) &&
          (elem.sku === null || elem.sku === sku)
      )
      .reduce((prev, next, ix) =>
        prev.importance > next.importance ? prev : next
      )
  ].map(item => ({ price: price + item.margin, margin: item.margin }));

console.log(calcmargin(1, 1, 30));
