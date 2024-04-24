import axios from "axios";
import { defineStore } from "pinia";
export const useSurveillance = defineStore("surllance", {
  state: () => ({
    surveillance: [],
  }),
  getters: {
    async getSurveillance() {
      return this.surveillance;
    },
  },
  actions: {
    async saveSurveillance(s) {
      let f = new FormData();
      f.append("id_examen", s.examen);
      f.append("id_surveillant", s.surveillant);
      let data = await axios.post(
        "http://localhost/chris/surveillance/insert/",
        f
      );
      return data.data;
    },
  },
});
