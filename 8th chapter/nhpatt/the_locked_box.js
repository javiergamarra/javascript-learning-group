"use strict";

var box = {
    locked: true,
    unlock: function () {
        this.locked = false;
    },
    lock: function () {
        this.locked = true;
    },
    _content: [],
    get
        content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(fun) {
    try {
        box.unlock();
        console.log(box.content);
        fun();
    } finally {
        box.lock();
        console.log(box.locked);
    }
}

var danger = function () {
    throw new Error('fail!')
};

var safe = function () {
};

withBoxUnlocked(safe);
withBoxUnlocked(danger);

