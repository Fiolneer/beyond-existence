
ServerEvents.recipes(event => {
    event.replaceInput({input: '#c:foods/milk'}, 'minecraft:sugar', Ingredient.of('minecraft:sugar_cane'))
})
