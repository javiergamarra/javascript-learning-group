"use strict";

function leo(oscar) {
    let msg = "When will you give Leo an Oscar?";

    if(oscar === 88) {
        msg = "Leo finally won the oscar! Leo is happy";
    }
    else if(oscar === 86) {
        msg = "Not even for Wolf of wallstreet?!";
    }
    else if(oscar > 88) {
        msg = "Leo got one already!";
    }

    return msg;
}
