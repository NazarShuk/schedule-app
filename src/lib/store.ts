import { defaultSchedule } from "./schedules"
import { writable } from "svelte/store"
import superjson from 'superjson';

export interface ScheduleItem {
    name: string

    hour: number
    minute: number
    second: number

    type?: "default" | "hidden"
}

export const schedule = writable<ScheduleItem[]>([])

if (localStorage.getItem("schedule")) {
    schedule.set(superjson.parse(localStorage.getItem("schedule") || "[]"))
}
else {
    schedule.set(defaultSchedule)
    localStorage.setItem("schedule", superjson.stringify(defaultSchedule))
}