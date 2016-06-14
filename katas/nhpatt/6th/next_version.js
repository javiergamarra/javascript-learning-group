"use strict";

function nextVersion(version) {
    let i = version.lastIndexOf('.');
    if (i == -1) {
        return '' + (parseInt(version) + 1);
    }
    let d = parseInt(version.slice(i + 1)) + 1;
    return d < 10 ? version.slice(0, i + 1) + d : nextVersion(version.slice(0, i)) + '.0'
}

let Test = {
    assertEquals: console.log
};

Test.assertEquals(nextVersion("1.2.3"), "1.2.4");
Test.assertEquals(nextVersion("0.9.9"), "1.0.0");
Test.assertEquals(nextVersion("1"), "2");
Test.assertEquals(nextVersion("1.2.3.4.5.6.7.8"), "1.2.3.4.5.6.7.9");
Test.assertEquals(nextVersion("9.9"), "10.0");