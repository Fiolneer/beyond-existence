
ServerEvents.recipes(event => {
    event.remove({output: 'immersiveengineering:blastbrick'})
})

MoreJS.villagerTrades((event) => {
    const trade1 = event.addTrade('minecraft:mason', 3, ['immersiveengineering:cokebrick', TradeItem.of('minecraft:emerald', 2, 6)], 'immersiveengineering:blastbrick')
    trade1.maxUses(27)
    trade1.villagerExperience(15)
    
    const trade2 = event.addTrade('ars_nouveau:shady_wizard', 2, [TradeItem.of('irons_spellbooks:arcane_essence', 2, 4), TradeItem.of('minecraft:emerald', 3, 6)], 'irons_spellbooks:common_ink')
    trade2.maxUses(4)
    trade2.villagerExperience(40)
})