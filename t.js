class Candle {
    max = 0;
    min = 0;
    value = 0;
    smoothFactor = 0;
    targetValue = 0;
    constructor(max, min, smoothFactor) {
        this.value = (max + min) / 2;
        this.targetValue = (max + min) / 2;
        this.smoothFactor = smoothFactor;
        this.max = max;
        this.min = min;

        setInterval(() => {
            this.update();
        }, 50);
    }
    update() {
        if (Math.abs(this.value - this.targetValue) <= 2) this.newTarget();
        this.value > this.targetValue
            ? (this.value -= Math.random() * this.smoothFactor)
            : (this.value += Math.random() * this.smoothFactor);
    }
    newTarget() {
        this.targetValue = Math.random() * this.max;
        if (this.targetValue >= this.max || this.min >= this.targetValue)
            this.newTarget();
    }
}

const candle = new Candle(1, 0.5, 0.035);

setInterval(() => {
    document.querySelector(".flame").style.opacity = candle.value;
    document.querySelector(".debug").textContent = candle.value.toFixed(4);
}, 50);
