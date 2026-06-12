global.shapedToolRecipe = (event, tool) => {return (item, pattern, key) => {
    let newKey = key;
    newKey.X = tool;
    event.remove({
        output: item
    });
    event.shaped(item, pattern, newKey).damageIngredient(tool);
}}