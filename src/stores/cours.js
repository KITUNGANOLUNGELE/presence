import axios from "axios";
import { defineStore } from "pinia";
export const useCours = defineStore("cours", {
  state: () => ({
    cours: [],
    cours_term: [],
    cours_enCours: [],
    coursEt: [],
  }),
  getters: {
    async getCours() {
      return this.cours;
    },
    async getCoursTerm() {
      return this.cours_term;
    },
    async getCoursNonTerm() {
      return this.cours_enCours;
    },
  },
  actions: {
    setState(e) {
      this.cours = e;
    },
    setStateCoursTerm(e) {
      this.cours_term = e;
    },
    setStateCoursNonTerm(e) {
      this.cours_enCours = e;
    },
    async saveCours(s) {
      let f = new FormData();
      f.append("nom_cours", s.nom);
      f.append("volume_horaire", s.volume);
      f.append("id_promotion", s.promotion);
      const ajouter = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/cours/insert/",
        f
      );
      return ajouter.data;
    },
    async getCoursEtud(id_etudiant) {
      let f = new FormData();
      f.append("id_etudiant", id_etudiant);
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/cours/etud",
        f
      );
      this.coursEt = data.data.response;
      return data.data.response;
    },
  },
});
