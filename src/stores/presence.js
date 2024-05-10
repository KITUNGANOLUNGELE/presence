import axios from "axios";
import { defineStore } from "pinia";
export const usePresence = defineStore("pr", {
  state: () => ({
    presence: null,
  }),
  getters: {},
  actions: {
    async savePresence(s) {
      let f = new FormData();
      f.append("id_enseignement", s.id_enseignement);
      f.append("id_etudiant", s.id_etudiant);
      let data = await axios.post("http://localhost/chris/presence/insert/", f);
      console.log(data.data);
      return data.data;
    },
    //methode a migrer vers cours
    async getCoursEns(id) {
      let f = new FormData();
      f.append("id_enseignant", id);
      let data = await axios.post("http://localhost/chris/cours/enseignant", f);
      return data.data.response;
    },
    async getPresenceCours(id_enseignement) {
      let f = new FormData();
      f.append("id_enseignement", id_enseignement);
      let data = await axios.post("http://localhost/chris/presence/all/", f);
      console.log(data.data);
      return data.data.response;
    },
  },
});
