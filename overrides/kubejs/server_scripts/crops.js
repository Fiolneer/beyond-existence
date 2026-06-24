// Visit the wiki for more info - https://kubejs.com/

// Crops Table
const cropsT = [
    {input: 'occultism:datura_seeds', soil: 'minecraft:dirt', results: [{item: 'occultism:datura', count: 1}], renderBlock: 'occultism:datura', renderType: 'immersiveengineering:crop', time: 120},
    {input: 'ars_nouveau:sourceberry_bush', soil: 'minecraft:dirt', results: [{item: 'ars_nouveau:sourceberry_bush', count: 1}], renderBlock: 'ars_nouveau:sourceberry_bush', renderType: 'immersiveengineering:crop',  time: 120},
    {input: 'ars_nouveau:magebloom_crop', soil: 'minecraft:dirt', results: [{item: 'ars_nouveau:magebloom', count: 1}], renderBlock: 'ars_nouveau:magebloom_crop', renderType: 'immersiveengineering:crop',  time: 120},
    {input: 'fruitsdelight:hamimelon_seeds', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:hamimelon', count: 1}], renderBlock: 'fruitsdelight:hamimelon_stem', renderType: 'immersiveengineering:crop',  time: 120},
    {input: 'fruitsdelight:lemon_seeds', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:lemon', count: 2}], renderBlock: 'fruitsdelight:lemon_tree', renderType: 'immersiveengineering:crop',  time: 120},
    {input: 'fruitsdelight:durian_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:durian', count: 2}, {item: 'minecraft:jungle_log', count: 1}], renderBlock: 'fruitsdelight:durian_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:hawberry_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:hawberry', count: 2}, {item: 'minecraft:spruce_log', count: 1}], renderBlock: 'fruitsdelight:hawberry_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:bayberry_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:bayberry', count: 2}, {item: 'minecraft:spruce_log', count: 1}], renderBlock: 'fruitsdelight:bayberry_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:blueberry_bush', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:blueberry', count: 2}], renderBlock: 'fruitsdelight:blueberry_bush', renderType: 'immersiveengineering:crop',  time: 120},
    {input: 'fruitsdelight:cranberry', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:cranberry', count: 2}], renderBlock: 'fruitsdelight:cranberry_bush', renderType: 'immersiveengineering:crop',  time: 120},
    {input: 'fruitsdelight:apple_sapling', soil: 'minecraft:dirt', results: [{item: 'minecraft:apple', count: 2}, {item: 'minecraft:oak_log', count: 1}], renderBlock: 'fruitsdelight:apple_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:pear_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:pear', count: 2}, {item: 'minecraft:birch_log', count: 1}], renderBlock: 'fruitsdelight:pear_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:orange_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:orange', count: 2}, {item: 'minecraft:oak_log', count: 1}], renderBlock: 'fruitsdelight:orange_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:mango_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:mango', count: 2}, {item: 'minecraft:jungle_log', count: 1}], renderBlock: 'fruitsdelight:mango_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:peach_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:peach', count: 2}, {item: 'minecraft:jungle_log', count: 1}], renderBlock: 'fruitsdelight:peach_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:lychee_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:lychee', count: 2}, {item: 'minecraft:jungle_log', count: 1}], renderBlock: 'fruitsdelight:lychee_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:persimmon_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:persimmon', count: 2}, {item: 'minecraft:spruce_log', count: 1}], renderBlock: 'fruitsdelight:persimmon_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:fig_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:fig', count: 2}, {item: 'minecraft:oak_log', count: 1}], renderBlock: 'fruitsdelight:fig_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:kiwi_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:kiwi', count: 2}, {item: 'minecraft:jungle_log', count: 1}], renderBlock: 'fruitsdelight:kiwi_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:mangosteen_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:mangosteen', count: 2}, {item: 'minecraft:oak_log', count: 1}], renderBlock: 'fruitsdelight:mangosteen_sapling', renderType: 'immersiveengineering:generic',  time: 300},
    {input: 'fruitsdelight:pineapple_sapling', soil: 'minecraft:dirt', results: [{item: 'fruitsdelight:pineapple', count: 1}, {item: 'minecraft:oak_log', count: 1}], renderBlock: 'fruitsdelight:pineapple', renderType: 'immersiveengineering:crop',  time: 300}
]

// Immersive Engineering Garden Cloche Recipes
ServerEvents.recipes(event => {
    cropsT.forEach(elt => {
        event.custom({
            type: 'immersiveengineering:cloche',
            results: elt['results'],
            input: {item: elt['input']},
            soil: {item: elt['soil']},
            time: elt['time'] * 20,
            render: {
            type: elt['renderType'],
            block: elt['renderBlock']
            }
        })
        if (elt['soil'] == 'minecraft:dirt') {
            event.custom({
                type: 'immersiveengineering:cloche',
                results: elt['results'],
                input: {item: elt['input']},
                soil: {item: 'farmersdelight:rich_soil'},
                time: Math.floor(elt['time'] * 20 * 0.8), //Reduce grow time by 25%
                render: {
                type: elt['renderType'],
                block: elt['renderBlock']
                }
            })
        }
    })
})
