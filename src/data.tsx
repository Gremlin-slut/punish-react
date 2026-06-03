import { Accessory, Count, Implement, Task, TimeIncrement, Location } from './types'

export const tasks: Task[] = [
    {
        description: 'beat',
        hasImplement: true,
        hasLocation: true,
        hasCount: true,
        weight: 0
    },
    {
        description: 'put',
        hasAccessory: true,
        hasLocation: true,
        weight: 0
    },

    {
        description: 'put tacks',
        hasLocation: true,
        weight: 0
    },
    {
        description: 'face',
        isPost: true,
        weight: 0
    },
    {
        description: 'nude face',
        isPost: true,
        weight: 0
    },
    {
        description: 'bind',
        hasLocation: true,
        weight: 0
    },
    {
        description: 'put',
        hasImplement: true,
        hasAccessory: true,
        hasLocation: true,
        hasCount: true,
        weight: 0
    },
    {
        description: 'bind & beat',
        hasImplement: true,
        hasLocation: true,
        hasCount: true,
        weight: 0
    },
    {
        description: 'thank you',
        weight: 0
    },
    {
        description: 'apologise to you',
        weight: 0
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
        weight: 0
    },
    {
        description: 'video voucher',
        isPost: true,
        weight: 0
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
    { description: 'clit' },
    { description: 'panties' },
    { description: 'nips' },
    { description: 'bra' },
    { description: 'pussy & tits' },
];

export const TimeIncrements: TimeIncrement[] = [
    { description: '5' },
    { description: '10' },
    { description: '30' },
    { description: '1' },
    { description: '3' },
    { description: '6' },
    { description: '12' },
    { description: '24' },
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