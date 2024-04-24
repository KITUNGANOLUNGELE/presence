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
      let data = await axios.post("http://localhost/chris/examen/insert/", f);
      console.log(data.data);
      return data.data;
    },
  },
});
