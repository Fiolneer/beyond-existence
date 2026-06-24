
ServerEvents.recipes(event => {
    event.remove({output: 'immersiveengineering:cloche'})
    event.remove({output: 'immersiveengineering:component_electronic_adv'})
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        result: {item: 'immersiveengineering:component_electronic_adv'},
        inputs: [{tag: 'c:plates/plastic'}, {basePredicate: {item: 'immersiveengineering:electron_tube'},count: 2},{tag: 'c:wires/aluminum'},
            {item: 'immersiveengineering:component_electronic'}
        ],
    })
    event.shaped(
        Item.of('immersiveengineering:cloche', 1),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            A: 'minecraft:glass',
            B: 'immersiveengineering:light_bulb',
            C: 'immersiveengineering:component_electronic',
            D: '#immersiveengineering:treated_wood',
            E: 'immersiveengineering:component_iron'
        }
    )
})
