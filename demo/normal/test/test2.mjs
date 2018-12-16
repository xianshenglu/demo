// export let counter = 1;
let counter = 1;

// export { counter };
function foo() {
  return counter++;
}

// export default (counter = 3);
// export { foo as fn, counter };
module.exports = {
  get counter() {
    return counter;
  },
  num: counter,
  fn: foo
};
