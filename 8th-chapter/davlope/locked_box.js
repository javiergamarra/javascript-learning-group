function withBoxUnlocked(body) {
    // Your code here.
    var keepUnlocked = false;
    try {
        if (!box.locked) {
            keepUnlocked = true
        }
        box.unlock();
        body()
    } finally {
        if (!keepUnlocked) {
            box.lock();
        }
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});
console.log(box.locked);
// → true

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}
console.log(box.locked);
// → true
