export const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))
export const time = () => Date().toString().split(" ")[4]

export type Job = {
    fn: (...args: any[]) => any
    args: unknown[]
}

export class RateLimiter {
    maxReqPerSecond: number
    timestamps: number[]
    stash: Job[]

    constructor(maxReqPerSecond: number) {
        this.maxReqPerSecond = maxReqPerSecond
        this.timestamps = []
        this.stash = []
    }

    clearOldTimestamps(ts: number) {
        this.timestamps = this.timestamps.filter(x => x > ts)
    }
    static getLimiter(maxReqPerSecond: number) {
        const instance = new RateLimiter(maxReqPerSecond)
        return instance.schedule.bind(instance)
    }
    async schedule(job: Job, index: number) {
        console.log("Planning job #", index)
        if (typeof job.fn !== "function") {
            console.log("Skip job #", index)
            return
        }
        this.stash.push(job)
        this.clearOldTimestamps(Date.now() - 1000)
        while (this.timestamps.length >= this.maxReqPerSecond) {
            await sleep(10)
            this.clearOldTimestamps(Date.now() - 1000)
        }
        this.timestamps.push(Date.now())
        const oldestJob = this.stash.shift()
        if (oldestJob) {
            console.log("Running job #", index)
            return oldestJob.fn(...oldestJob.args)
        }
    }
}
