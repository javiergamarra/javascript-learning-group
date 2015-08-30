function Tiger() {
    this.energy = 1000;
}

Tiger.prototype.act = function (context) {
    var space = context.find(" ");
    if (this.energy > 200 && space)
        return {type: "reproduce", direction: space};

    var plantEater = context.find("O");
    if (plantEater) {
        return {type: "eat", direction: plantEater};
    }

    var plant = context.find("*");
    if (plant) {
        return {type: "destroy", direction: plant};
    }

    var spaceAgain = context.find(" ");
    if (spaceAgain) {
        return {type: "move", direction: spaceAgain};
    }
};

actionTypes.destroy = function (critter, vector, action) {
    var dest = this.checkDestination(action, vector);
    if (dest == null ||
        critter.energy <= 1)
        return false;
    critter.energy -= 1;
    this.grid.set(vector, null);
    this.grid.set(dest, critter);
    return true;
};

world = new LifelikeWorld(
    ["####################################################",
        "#                 ####         ****              ###",
        "#   *  @  ##                 ########       OO    ##",
        "#   *    ##        O O                 ****       *#",
        "#       ##*                        ##########     *#",
        "#      ##***  *         ****                     **#",
        "#* **  #  *  ***      #########                  **#",
        "#* **  #      *               #   *              **#",
        "#     ##              #   O   #  ***          ######",
        "#*            @       #       #   *        O  #    #",
        "#*                    #  ######                 ** #",
        "###          ****          ***                  ** #",
        "#       O                        @         O       #",
        "#   *     ##  ##  ##  ##               ###      *  #",
        "#   **         #              *       #####  O     #",
        "##  **  O   O  #  #    ***  ***        ###      ** #",
        "###               #   *****                    ****#",
        "####################################################"],
    {
        "#": Wall,
        "@": Tiger,
        "O": SmartPlantEater, // from previous exercise
        "*": Plant
    }
);