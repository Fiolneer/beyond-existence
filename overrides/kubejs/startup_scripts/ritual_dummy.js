// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', event => {
    event.create('ritual_blood_moon', 'occultism_kubejs:ritual_dummy')
        .displayName('Ritual: Summon Blood Moon')
        .pentacleType('summon')
        .ritualTooltip('Sacrifice some valuables to the Undead King and summon the blood moon')

    event.create('ritual_super_blood_moon', 'occultism_kubejs:ritual_dummy')
        .displayName('Ritual: Summon Super Blood Moon')
        .pentacleType('summon')
        .ritualTooltip('Sacrifice more valuables to the Undead King and summon the super blood moon')
})