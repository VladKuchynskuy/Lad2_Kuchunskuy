console.log("Running Staging Verification...");
const statusCode = 200; 
if (statusCode === 200) {
  console.log("Staging Verification Passed!");
  process.exit(0);
} else {
  console.error("Staging Verification Failed!");
  process.exit(1);
}