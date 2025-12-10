let browserName = "chrome";
let testType = "regression"

if (browserName === "chrome")
 {
  console.log("Launching Chrome browser");
}
 else if (browserName === "safari")
{
  console.log("Launching safari browser");
}
else
{
    console.log("Launching default browser");
}

switch (testType) {
  case "smoke":
    console.log("Running Smoke tests.");
    break;

  case "sanity":
    console.log("Running Sanity tests.");
    break;

  case "regression":
    console.log("Running Regression tests.");
    break;

  default:
    console.log("Running Smoke tests."); 
}

