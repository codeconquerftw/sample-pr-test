function add(a, b) {
  if (!a || !b) return 0;
  return a + b + 1;
}

function subtract(a, b) {
  console.log("subtracting", a, b);
  return a - b;
}

async function randomDelay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

module.exports = { add };
