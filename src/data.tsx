import { Accessory, Count, Implement, Task, TimeIncrement, Location } from './types'

export const tasks: Task[] = [
    {
        description: 'beat',
        hasImplement: true,
        hasLocation: true,
        hasCount: true,
        weight: 10
    },
    {
        description: 'put',
        hasAccessory: true,
        hasLocation: true,
        weight: 10
    },

    {
        description: 'put tacks',
        hasLocation: true,
        weight: 2
    },
    {
        description: 'face',
        isPost: true,
        weight: 2
    },
    {
        description: 'nude face',
        isPost: true,
        weight: 1
    },
    {
        description: 'bind their tits',
        weight: 5
    },
    {
        description: 'put',
        hasImplement: true,
        hasAccessory: true,
        hasLocation: true,
        hasCount: true,
        weight: 10
    },
    {
        description: 'bind & beat',
        hasImplement: true,
        hasCount: true,
        weight: 10
    },
    {
        description: 'thank you',
        weight: 3
    },
    {
        description: 'apologise to you',
        weight: 3
    },
    {
        description: 'write lines',
        hasCount: true,
        weight: 1
    },
    {
        description: 'write on its body',
        weight: 2
    },
    {
        description: 'give you photo access',
        weight: 1
    },
    {
        description: 'give you access to a verified posting account',
        weight: 1
    },
    {
        description: 'tape vibe in',
        weight: 2
    },
    {
        description: 'cut off its clothes',
        weight: 1
    },
    {
        description: 'video voucher',
        isPost: true,
        weight: 1
    }
];

export const Implements: Implement[] = [
    { description: 'paddle' },
    { description: 'spiked paddle' },
    { description: 'ruler' },
    { description: 'belt' },
    { description: 'slap' },
    { description: 'punch' },
    { description: 'rolling pin' },
    { description: 'rubber bands' },
    { description: 'tenderiser' },
    { description: 'wooden spoon' },
];

export const Accessories: Accessory[] = [
    { description: 'icyhot' },
    { description: 'scourer' },
    { description: 'ginger' },
    { description: 'toothpaste' },
    { description: 'sandpaper' },
    { description: 'steelwool' },
    { description: 'pegs' },
];

export const Locations: Location[] = [
    { description: 'clit/panties' },
    { description: 'panties' },
    { description: 'nips/bra' },
    { description: 'bra' },
    { description: 'pussy/panties & tits/bra' },
];

export const TimeIncrements: TimeIncrement[] = [
    { description: '5 mins' },
    { description: '10 mins' },
    { description: '30 mins' },
    { description: '1 hour' },
    { description: '3 hours' },
    { description: '6 hours' },
    { description: '12 hours' },
    { description: '24 hours' },
    { description: 'random' },
];

export const Counts: Count[] = [
    { description: '5' },
    { description: '10' },
    { description: '20' },
    { description: '25' },
    { description: '50' },
    { description: '100' },
];