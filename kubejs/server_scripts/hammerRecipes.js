ServerEvents.recipes(event => {
    let shapedHammerRecipe = global.shapedToolRecipe(event, "#kubejs:hammers");

    // i have to define the list before using it because kubejs
    let metals = ["iron", "copper"]
    metals.forEach((metal) => {
            shapedHammerRecipe(
                Item.of(`minecraft:${metal}_bars`, 16),
                [
                    "BBB",
                    "BBB",
                    " X "
                ],
                {
                    B: `minecraft:${metal}_ingot`
                }
            )
        }
    )

    let shieldRecipes = [
        {
            result: "basicshields:copper_shield",
            material: "minecraft:copper_ingot"
        },
        {
            result: "minecraft:shield",
            material: "minecraft:iron_ingot"
        },
        {
            result: "basicshields:diamond_shield",
            material: "minecraft:diamond"
        }
    ];
    shieldRecipes.forEach((shieldRecipe) => {
        shapedHammerRecipe(
            Item.of(shieldRecipe.result),
            [
                "MWM",
                "WWW",
                "XW "
            ],
            {
                M: shieldRecipe.material,
                W: "#minecraft:planks"
            }
        )
    })

    shapedHammerRecipe(
        Item.of("minecraft:shears"),
        [
            "IX",
            " I"
        ],
        {
            I: "minecraft:iron_ingot"
        }
    )
})