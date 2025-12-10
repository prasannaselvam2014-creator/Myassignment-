const browserVersion = "Chrome";
console.log("Global:", browserVersion);
{
    var browserVersion = "Chrome from VAR block";
    console.log("Inside block (var):", browserVersion);
}

console.log("After block (var):", browserVersion);

const browserVersion2 = "Chrome";
console.log("\nGlobal:", browserVersion2);

{
    let browserVersion2 = "Chrome from LET block";
    console.log("Inside block (let):", browserVersion2);
}

console.log("After block (let):", browserVersion2);