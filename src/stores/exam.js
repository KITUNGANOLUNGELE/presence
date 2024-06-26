import { defineStore } from "pinia";
import axios from "axios";
export const useExamen = defineStore("exam", {
  state: () => ({
    exam: [],
  }),
  getters: {
    async getExam() {
      return this.exam;
    },
  },
  actions: {
    setState(s) {
      this.exam = s;
    },
    async saveEx(s) {
      let f = new FormData();
      f.append("date_exam", s.date);
      f.append("heure_exam", s.heure);
      f.append("id_enseignement", s.enseignement);
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/examen/insert/",
        f
      );
      console.log(data.data);
      return data.data;
    },
    async getExP(s) {
      let f = new FormData();
      f.append("id_promotion", s.id_promotion);
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/examen/prom/",
        f
      );
      console.log(data.data);
      return data.data.response;
    },
  },
});
