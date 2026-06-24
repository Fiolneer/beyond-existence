// Visit the wiki for more info - https://kubejs.com/

// Occultism Rituals

ServerEvents.recipes(event => {
    // Enhanced Celestials
    event.recipes.occultism.ritual(
        'kubejs:ritual_blood_moon',
        ['minecraft:skeleton_skull', 'minecraft:wither_skeleton_skull', 'minecraft:redstone_block',
        'minecraft:blaze_powder', 'minecraft:fermented_spider_eye', 'minecraft:nether_wart_block'],
        'occultism:book_of_binding_bound_afrit',
        'occultism:possess_afrit'
    ).ritualType('occultism:execute_command')
    .command('enhancedcelestials setLunarEvent enhancedcelestials:blood_moon')
    .dummy('kubejs:ritual_blood_moon')
    .entityToSacrifice(EntityToSacrifice.of('occultism:humans', 'Village or Player'))
    /*event.recipes.occultism.ritual(
        'kubejs:ritual_super_blood_moon',
        ['minecraft:skeleton_skull', 'minecraft:wither_skeleton_skull', 'minecraft:redstone_block',
        'minecraft:blaze_powder', 'minecraft:fermented_spider_eye', 'minecraft:nether_wart_block'],
        'occultism:book_of_binding_bound_afrit',
        'occultism:possess_afrit'
    ).ritualType('occultism:execute_command')
    .command('enhancedcelestials setLunarEvent enhancedcelestials:super_blood_moon')
    .dummy('kubejs:ritual_super_blood_moon')
    .entityToSacrifice(EntityToSacrifice.of('occultism:humans', 'Village or Player'))*/
})
