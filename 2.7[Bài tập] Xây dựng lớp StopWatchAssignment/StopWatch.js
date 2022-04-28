var StopWatch = /** @class */ (function () {
    function StopWatch(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
    StopWatch.prototype.getElapsedTime = function () {
        var timeDiff = this.startTime - this.endTime;
        return timeDiff;
    };
    return StopWatch;
}());
var stopWatch = new StopWatch(performance.now(), performance.now() - 100000);
console.log(stopWatch.getElapsedTime());
