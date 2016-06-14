"use strict";

var memo = [];

function sum(n, m = n) {
    if (n == 0) return 1;
    if (n < 0 || m == 0) return 0;
    if (memo[n] && memo[n][m]) return memo[n][m];
    let total = sum(n, m - 1) + sum(n - m, m);
    if (!memo[n]) {
        memo[n] = [];
    }
    memo[n][m] = total;
    return total;
}

let Test = {
    assertEquals: console.log
};

Test.assertEquals(sum(-1), 0);
Test.assertEquals(sum(1), 1);
Test.assertEquals(sum(2), 2);
Test.assertEquals(sum(3), 3);
Test.assertEquals(sum(4), 5);

Test.assertEquals(sum(5), 7);

Test.assertEquals(sum(10), 42);