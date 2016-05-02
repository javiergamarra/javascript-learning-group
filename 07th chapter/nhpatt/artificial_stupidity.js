function SmartPlantEater() {
    this.energy = 20;
    this.daysWithoutEating = 0;
}

SmartPlantEater.prototype.act = function (context) {
    this.daysWithoutEating++;


    var space = context.find(" ");
    if (this.energy > 120 && space) {
        this.energy -= 100;
        return {type: "reproduce", direction: space};
    }

    var plant = context.find("*");
    if (plant && this.daysWithoutEating > 4) {
        this.daysWithoutEating = 0;
        return {type: "eat", direction: plant};
    }

    var plantAgain = context.find("*");

    if (plantAgain) {
        return {type: "move", direction: plantAgain};
    } else if (space) {
        return {type: "move", direction: space};
    }
};

world = new LifelikeWorld(
    [
        "############################",
        "#####                 ######",
        "##   ***                **##",
        "#   *##**         **  O  *##",
        "#    ***     O    ##**    *#",
        "#       O         ##***    #",
        "#                 ##**     #",
        "#   O       #*             #",
        "#*          #**       O    #",
        "#***        ##**    O    **#",
        "##****     ###***       *###",
        "############################"],
    {
        "#": Wall,
        "O": SmartPlantEater,
        "*": Plant
    }
);