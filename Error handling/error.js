function checkWeight(weight) {
    if (weight > 60) {
        throw "You must be less than 60Kgs to enter";
    } else {
        console.log("Access granted!");
    }
}

try {
    checkWeight(90);
} catch (error) {
    console.error("Error:", error);
} finally {
    console.log("Verification complete.");
}
