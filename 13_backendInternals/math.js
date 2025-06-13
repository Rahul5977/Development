const add = function (x, y) {
  return x + y;
};
const sub = function (x, y) {
  return x - y;
};
//default export
module.exports = {
  add,
  sub,
}; //now we can require with different name other than add sub

//per file only one default export ->name badal skte he
//any nmber of named export ->name ni badal skte
