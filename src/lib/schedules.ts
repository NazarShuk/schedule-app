import type { ScheduleItem } from "./store"

export const defaultSchedule: ScheduleItem[] = [
    {
        name: "Core 1",
        hour: 8,
        minute: 15,
        second: 0
    },
    {
        name: "Transition",
        hour: 9,
        minute: 13,
        second: 0,
        type: "hidden"
    },
    {
        name: "Ridge Time",
        hour: 9,
        minute: 16,
        second: 0
    },
    {
        name: "Transition",
        hour: 9,
        minute: 51,
        second: 0,
        type: "hidden"
    },
    
    {
        name: "Core 4",
        hour: 9,
        minute: 54,
        second: 0
    },
    {
        name: "Transition",
        hour: 10,
        minute: 53,
        second: 0,
        type: "hidden"
    },
    {
        name: "Lunch",
        hour: 10,
        minute: 56,
        second: 0
    },
    {
        name: "Transition",
        hour: 11,
        minute: 26,
        second: 0,
        type: "hidden"
    },
    {
        name: "Elective",
        hour: 11,
        minute: 30,
        second: 0
    },
    {
        name: "Transition",
        hour: 12,
        minute: 15,
        second: 0,
        type: "hidden"
    },
    {
        name: "Elective",
        hour: 12,
        minute: 18,
        second: 0
    },
    {
        name: "Transition",
        hour: 13,
        minute: 3,
        second: 0,
        type: "hidden"
    },
    {
        name: "Core 3",
        hour: 13,
        minute: 6,
        second: 0
    },
    {
        name: "Transition",
        hour: 14,
        minute: 2,
        second: 0,
        type: "hidden"
    },
    {
        name: "Core 2",
        hour: 14,
        minute: 4,
        second: 0
    },
    {
        name: "The End",
        hour: 15,
        minute: 0,
        second: 0
    }
]