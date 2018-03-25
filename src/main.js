import Vue from "vue/dist/vue.esm.js";
import Datepicker from "vuejs-datepicker";

const days = [1, 1, 2, 2, 3, 3, 4, 4];
const nights = [4, 4, 1, 1, 2, 2, 3, 3];

const shifts = [null, "ONE", "TWO", "THREE", "FOUR"];

const referenceDate = new Date(2018, 0, 2);
referenceDate.setHours(0, 0, 0, 0);

const app = new Vue({
  el: "#app",
  components: {
    Datepicker
  },
  data: {
    date: new Date()
  },
  computed: {
    day: function() {
      return shifts[days[this.offset()]];
    },
    night: function() {
      return shifts[nights[this.offset()]];
    },
    firstOrSecond: function() {
      return this.offset() % 2 == 0 ? "First" : "Second";
    }
  },
  methods: {
    offset: function() {
      this.date.setHours(0, 0, 0, 0);
      const difference = this.date - referenceDate;
      const offset = Math.ceil(difference / 864e5) % 8;
      return offset < 0 ? offset + 8 : offset;
    }
  }
});
