// * Comparisons 比较
// * 比较的结果 为 Boolean类型，即true, false

// * 1. 字符串比较
// * 通过 “字典” 或 “词典” 顺序进行判定

// * 2. 不同类型间的比较
// * step 1: Number()
{
  console.log("2" > 1); // step 1. Number('2') = 2; step 2. 2 > 1? true
  console.log("-01" == -1); // step 1. Number('-01') = -1; step 2. -1 == -1? true
}

// * 3. 严格相等 ===
// * == 普通相等性检查 会先自动进行Number()类型转换，后比较
// * == 不能区分出 0 和 false
{
  console.log(0 == false); // true    1. Number(0) = 0; 2. Number(false) = 0; 3. so return true;
}
// * == 不能区分出 '' 和 false
{
  console.log("" == false); // true    1. Number('') = 0; 2. Number(false) = 0; 3. so return true;
}
// * === 严格相等性检查，不进行自动类型转换

// * 4. null vs undefined
{
  console.log("null vs undefined:");
  console.log(null === undefined); // false
  console.log(null == undefined); // ! true
  console.log(null >= undefined); // false Number(null) = 0; Number(undefined)=NaN
  console.log(null <= undefined); // false
  console.log(null != undefined); // false
}

// * 5. null vs 0
{
  console.log("null vs 0:");
  console.log(null > 0); // false
  console.log(null == 0); // false
  console.log(null >= 0); // true
  console.log(null <= 0); // true
  console.log(null != 0); // true
  // ! 相等性检查 == 和普通比较符 > < >= <= 的代码逻辑是相互独立的。进行值的比较时，null会被转化为数字，即得0。这就是为什么null >= 0 返回值是 true，null > 0 返回值是 false。
  // ! undefined 和 null 在相等性检查 == 中不会进行任何的类型转换，有自己独立的比较规则，所以除了它们之间互等外，不会等于任何其他的值。这就解释了为什么 null == 0 会返回 false。
}

// * 6. An incomparable undefined
// ! 不应该与其他值进行比较
{
  console.log("An incomparable undefined:");
  console.log(undefined > 0); // false
  console.log(undefined < 0); // false
  console.log(undefined == 0); // false
  /*
    $ undefined > 0 和 undefined < 0 的比较为false，是因为先进行了Number(undefined)，即返回 NaN 值，NaN 是一个特殊的数值类型，任何与其进行比较都会返回 NaN
    $ undefined == 0 的比较为false，是因为这是一个相等性检查，而 undefined 只与 null 相等，不会与其他值相等，故比较结果为 false
  */
}

// quiz
{
  console.log("Quiz:");
  console.log(5 > 4); // true
  console.log("apple" > "pineapple"); // false
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  console.log(null == "\n0\n"); // true ❌ 相等性检查下 null只与undefined相等，undefined只与null相等
  console.log(null === +"\n0\n"); // false
  console.log(1<2<3); // true
  console.log(3<2<1); // true
}
