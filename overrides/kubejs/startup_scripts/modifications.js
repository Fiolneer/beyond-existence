
const bonus = 1.1

const foodTypes = {
    'sourceberry': {eff: 'ars_nouveau:mana_regen', base: 5},
    'otherworld': {eff: 'occultism:third_eye', base: 60},
    'datura': {eff: 'occultism:third_eye', base: 15}
}

const foods = [
    {id: 'compatdelight:otherworld_essence_ice_cream', type: 'otherworld', multiple: 2},
    {id: 'compatdelight:otherworld_essence_shake', type: 'otherworld', multiple: 3},
    {id: 'compatdelight:otherworld_essence_salad', type: 'otherworld', multiple: 3},
    {id : 'compatdelight:cut_source_berry', type: 'sourceberry', multiple: 0.2},
    {id : 'compatdelight:dried_source_berry', type: 'sourceberry', multiple: 1},
    {id : 'compatdelight:honeyed_source_berry', type: 'sourceberry', multiple: 1},
    {id : 'compatdelight:source_berry_glaze', type: 'sourceberry', multiple: 1},
    {id : 'compatdelight:source_berry_cake', type: 'sourceberry', multiple: 0.5},
    {id : 'compatdelight:source_berry_jelly', type: 'sourceberry', multiple: 0.2},
    {id : 'compatdelight:source_berry_ice_cream', type: 'sourceberry', multiple: 2},
    {id : 'compatdelight:source_berry_sandwich', type: 'sourceberry', multiple: 0.4},
    {id : 'compatdelight:source_berry_shake', type: 'sourceberry', multiple: 1.2},
    {id : 'compatdelight:source_berry_tea', type: 'sourceberry', multiple: 2},
    {id : 'compatdelight:source_berry_yougurt', type: 'sourceberry', multiple: 0.4},
    {id : 'compatdelight:source_berry_jem', type: 'sourceberry', multiple: 0.4},
    /*
    {
        id: 'compatdelight:otherworld_essence_ice_cream', effect: 'occultism:third_eye',
        dur: 10, amp: 0, prob: 0.5
    },
    {
        id: 'compatdelight:otherworld_essence_shake', effect: 'occultism:third_eye',
        dur: 8, amp: 0, prob: 0.4
    },
    {
        id: 'compatdelight:otherworld_essence_salad', effect: 'occultism:third_eye',
        dur: 12, amp: 0, prob: 0.3
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 2, amp: 0, prob: 0.5
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 8, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 6, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 12, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 13, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 12, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 13, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 36, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 16, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 22, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 5, amp: 0
    },
    {
        id: '', effect: 'ars_nouveau:mana_regen',
        dur: 6, amp: 0
    }*/
]
//Item.of('compatdelight:source')
//MobEffectUtil.of('ars_nouveau:mana_regen')
ItemEvents.modification(event => {
    foods.forEach(fit => {
        let det = foodTypes[fit.type]
        event.modify(fit.id, item => {
            item.modifyFood(food => {
                food.effect(det.eff, fit.multiple * det.base * bonus * 20, det.amp || 0, det.prob || 1)
            })
        })
    })
});
