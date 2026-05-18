const sum = (a, b) => a + b;
console.log("Running Unit Tests...");
if (sum(2, 2) === 5) {
  console.log("Unit Tests Passed!");
  process.exit(0);
} else {
  console.error("Unit Tests Failed!");
  process.exit(1);
}
