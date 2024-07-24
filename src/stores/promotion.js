import { defineStore } from "pinia";
import axios from "axios";

export const usePromotion = defineStore("promot", {
  state: () => ({
    Promotion: [],
  }),
  getters: {
    async getPromotion() {
      console.log(this.Promotion);
      return this.Promotion;
    },
  },
  actions: {
    setState(s) {
      this.Promotion = s;
    },
    async get_all() {
      let data = await axios.get(
        "https://gestpresence.000webhostapp.com/chris/promotion/all/"
      );
      return data.data;
    },
    async savePromotion(s) {
      let f = new FormData();
      f.append("nom_promotion", s.nom_prom);
      f.append("id_option", s.id_option);
      const ajouter = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/promotion/insert/",
        f
      );
      return ajouter.data;
    },
    async supprimer(s) {
      let f = new FormData();
      f.append("id", s.id);
      const data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/promotion/delete/",
        f
      );
    },
    async update(s) {
      let f = new FormData();
      f.append("id", s.id);
      f.append("nom_promotion", s.nom);
      f.append("id_option", s.idOPtion);
      const data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/promotion/update/",
        f
      );
      console.log(data.data);
    },
  },
});
