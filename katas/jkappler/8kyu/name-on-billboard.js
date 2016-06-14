function billboard(name, price = 30){
    return name.split("").reduce(function(a, _) { return a + price; }, 0)
}
