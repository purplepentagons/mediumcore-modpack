BlockEvents.modification(event => {
    [
        "minecraft:oak_leaves",
        "minecraft:birch_leaves",
        "minecraft:jungle_leaves",
        "minecraft:dark_oak_leaves",
        "minecraft:mangrove_leaves",
        "minecraft:azalea_leaves",
        "minecraft:flowering_azalea_leaves",
        "minecraft:cherry_leaves",
        "minecraft:spruce_leaves",
        "minecraft:acacia_leaves"
    ].forEach((leaves) => {
        event.modify(leaves, block => {
            block.hasCollision = false;
        })
    })
})