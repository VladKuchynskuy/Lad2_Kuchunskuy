console.log("Running Staging Verification...");
const statusCode = 500; 
if (statusCode === 200) {
  console.log("Staging Verification Passed!");
  process.exit(0);
} else {
  console.error("Staging Verification Failed!");
  process.exit(1);
}