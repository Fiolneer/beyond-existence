
ServerEvents.recipes(event => {
    event.remove({output: 'ars_nouveau:magebloom_crop'})
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({id: 'ars_nouveau:novice_spellbook_alt'})
    event.remove({id: 'ars_nouveau:apprentice_book_upgrade'})
    event.remove({id: 'ars_nouveau:archmage_book_upgrade'})
    event.remove({id: 'ars_ocultas:spirit_attuned_gem'})

    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        pedestalItems: [
            {tag: 'c:gems/source'},
            {item: 'irons_spellbooks:arcane_essence'},
            {tag: 'c:gems/source'},
            {item: 'irons_spellbooks:arcane_essence'}
        ],
        reagent: {tag: 'c:seeds'},
        result: {
            count: 1, id: 'ars_nouveau:magebloom_crop'
        },
        sourceCost: 0
    })
    event.shapeless(
        Item.of('ars_nouveau:novice_spell_book', 1),
        [
            ['minecraft:book', 'ars_nouveau:worn_notebook'],
            'minecraft:iron_sword',
            'minecraft:iron_pickaxe',
            'minecraft:iron_axe',
            'minecraft:iron_shovel',
            'irons_spellbooks:arcane_essence',
            'occultism:purified_ink',
            '#c:fabric_hemp',
            'farmersdelight:canvas'
        ]
    )
    event.shapeless(
        Item.of('ars_nouveau:apprentice_spell_book', 1),
        [
            'ars_nouveau:novice_spell_book',
            'occultism:afrit_essence',
        ]
    )
    /*event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            A: {item: 'minecraft:nether_star'},
            P: {item: 'minecraft:diamond_block'},
            S: {item: 'ars_nouveau:apprentice_spell_book'}
        },
        pattern: [
            ' AAA ',
            'AAPAA',
            'APSPA',
            'AAPAA',
            ' AAA '
        ],
        result: {
            count: 1,
            id: 'ars_nouveau:archmage_spell_book'
        },
        show_notification: true
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            A: {item: 'minecraft:nether_star'},
            P: {item: 'minecraft:diamond_block'},
            S: {item: 'ars_nouveau:archmage_spell_book'}
        },
        pattern: [
            ' AAAAA ',
            'AAAAAAA',
            'AAPPPAA',
            'AAPSPAA',
            'AAPPPAA',
            'AAAAAAA',
            ' AAAAA '
        ],
        result: {
            count: 1,
            id: 'ars_nouveau:creative_spell_book'
        },
        show_notification: true
    })*/
})