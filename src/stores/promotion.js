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
    async savePromotion(s) {
      let f = new FormData();
      f.append("nom_promotion", s.nom_prom);
      f.append("id_option", s.id_option);
      const ajouter = await axios.post(
        "http://localhost/chris/promotion/insert/",
        f
      );
      return ajouter.data;
    },
  },
});
