import { defaultSchedule } from "./schedules"

export interface ScheduleItem {
    name: string

    hour: number
    minute: number
    second: number

    type?: "default" | "hidden"
}

export let schedule = $state<ScheduleItem[]>([])

if (localStorage.getItem("schedule")) {
	schedule = JSON.parse(localStorage.getItem("schedule") || "[]")
}
else {
    schedule = defaultSchedule
    localStorage.setItem("schedule", JSON.stringify(schedule))
}