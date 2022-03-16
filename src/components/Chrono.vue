<template>
  <div id="">
    <span class="time">{{ time }}</span>
    <div class="btn-container">
      <a id="start" @click="start">Start</a>
      <a id="stop" @click="stop">Stop</a>
      <a id="reset" @Click="reset">Reset</a>
    </div>
  </div>
</template>
<style scoped>
a,span {
  padding: 10px;
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
<script>
export default {
  name: "Stop-watch",
  data() {
    return {
      time: "00:00:00.000",
      running: false,
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
    };
  },
  methods: {
    start() {
      if (this.running) return;
      if (this.timeBegan == null) {
        this.reset();
        this.timeBegan = new Date();
      }
      if (this.timeStopped != null)
        this.stoppedDuration +=
            new Date() - this.timeStopped;
      this.started = setInterval(
          this.clockRunning,
          10
      );
      this.running = true;
    },
    stop() {
      this.running = false;
      this.timeStopped = new Date();
      clearInterval(this.started);
    },
    reset() {
      this.running = false;
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00.000";
    },
    clockRunning() {
      let currentTime = new Date();
      let timeElapsed = new Date(
          currentTime -
          this.timeBegan -
          this.stoppedDuration
      );
      let hours = timeElapsed.getUTCHours(),
          minutes = timeElapsed.getUTCMinutes(),
          sec = timeElapsed.getUTCSeconds(),
          ms = timeElapsed.getUTCMilliseconds();
      this.time =
          this.zeroPrefix(hours, 2) +
          ":" +
          this.zeroPrefix(minutes, 2) +
          ":" +
          this.zeroPrefix(sec, 2) +
          ":" +
          this.zeroPrefix(ms, 3);
    },
    zeroPrefix(num, digit) {
      let zero = "";
      for (let i = 0; i < digit; i++) {
        zero += 0;
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>
