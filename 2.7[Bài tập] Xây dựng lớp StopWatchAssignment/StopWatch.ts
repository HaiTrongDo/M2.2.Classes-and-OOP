class StopWatch {
    startTime: any
    endTime:any

    constructor(startTime: any, endTime: any) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    getElapsedTime() {
        let timeDiff = this.startTime - this.endTime;
        return timeDiff
    }
}

let stopWatch = new StopWatch(performance.now(),performance.now() - 100000)
console.log(stopWatch.getElapsedTime())