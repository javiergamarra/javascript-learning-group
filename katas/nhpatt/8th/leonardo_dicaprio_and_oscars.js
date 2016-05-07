function leo(oscar) {
    if (oscar == 88) {
        return "Leo finally won the oscar! Leo is happy";
    }
    else if (oscar == 86) {
        return "Not even for Wolf of wallstreet?!";
    }
    else if (oscar < 88) {
        return "When will you give Leo an Oscar?";
    }
    else {
        return "Leo got one already!";
    }
}

console.log(leo(88));