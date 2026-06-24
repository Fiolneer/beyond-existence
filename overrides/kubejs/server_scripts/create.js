
ServerEvents.recipes(event => {
    event.custom({
        type: 'create:crushing',
        ingredients: [{item: 'irons_spellbooks:mithril_ore'}],
        processing_time: 300,
        results: [
            {id: 'irons_spellbooks:raw_mithril', count: 1},
            {id: 'irons_spellbooks:raw_mithril', chance: 0.5},
            {id: "create:experience_nugget", chance: 0.75},
            {id: "minecraft:cobblestone", chance: 0.15},
        ]
    }),
    event.custom({
        type: 'create:crushing',
        ingredients: [{item: 'irons_spellbooks:deepslate_mithril_ore'}],
        processing_time: 300,
        results: [
            {id: 'irons_spellbooks:raw_mithril', count: 1},
            {id: 'irons_spellbooks:raw_mithril', chance: 0.5},
            {id: "create:experience_nugget", chance: 0.75},
            {id: "minecraft:cobbled_deepslate", chance: 0.15},
        ]
    })
})
