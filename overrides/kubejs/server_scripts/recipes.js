
ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:saddle',
        [
            '   ',
            ' A ',
            'ABA'
        ],
        {
            A: '#c:leathers',
            B: '#c:ingots/iron'
        }
    )
})

PlayerEvents.loggedIn(event => {
    let player = event.player
    if (!player.persistentData.receivedGuide) {
        player.give('patchouli:guide_book[patchouli:book="patchouli:beyond_existence_guide_book"]')
        player.persistentData.receivedGuide = true
    }
})

const MOD_WHITELIST = [
'ars_nouveau',
'irons_spellbooks',
'occultism',
'create',
'immersiveengineering',
'farmersdelight',
'alexsmobs'
]

// Optional filters to reduce noise
function isValidItem(item) {
const id = item.id.toString()

// remove obvious junk
if (id.includes('spawn_egg')) return false
if (id.includes('_slab')) return false
if (id.includes('_stairs')) return false
if (id.includes('_wall')) return false
if (id.includes('debug')) return false

return true
}
/*
ServerEvents.loaded(event => {


const itemsByMod = {}

console.log('Starting Beyond Existence item export...')

Item.getList().forEach(item => {
const id = item.id.toString()
const mod = id.split(':')[0]


if (!MOD_WHITELIST.includes(mod)) return
if (!isValidItem(item)) return

if (!itemsByMod[mod]) {
  itemsByMod[mod] = []
}

itemsByMod[mod].push(id)


})

// write output
Object.keys(itemsByMod).forEach(mod => {
const sorted = itemsByMod[mod].sort()


const text = sorted.join('\n')

const path = `kubejs/export/items_by_mod/${mod}.txt`

console.log(text)


})

console.log('Item export complete.')
})*/
