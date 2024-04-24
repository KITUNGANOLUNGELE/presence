import { defineStore } from "pinia";
import axios from "axios";
export const useEnseignement = defineStore("ens", {
  state: () => ({
    ens: [],
  }),
  getters: {
    async getEnseign() {
      return this.ens;
    },
  },
  actions: {
    setState(s) {
      this.ens = s;
    },
    async saveEns(s) {
      let f = new FormData();
      f.append("id_cours", s.cours);
      f.append("id_enseignant", s.enseignant);
      let data = await axios.post(
        "http://localhost/chris/enseignement/insert/",
        f
      );
      console.log(data.data);
      return data.data;
    },
    async end_ens(id_enseignement) {
      let f = new FormData();
      f.append("id_enseignement", id_enseignement);
      let data = await axios.post(
        "http://localhost/chris/enseignement/update/ens",
        f
      );
      return data.data;
    },
  },
});
