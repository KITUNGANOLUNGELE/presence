import { defineStore } from "pinia";
import axios from "axios";

export const useOption = defineStore("prom", {
  state: () => ({
    Option: [],
  }),
  getters: {
    async getOption() {
      let opt = await axios.get("http://localhost/chris/option/all/");
      return opt.data;
    },
  },
  actions: {
    setState(s) {
      this.Option = s;
    },
    async saveOption(s) {
      let f = new FormData();
      console.log(s.nom_option, " : ", s.id_section);
      f.append("nom_option", s.nom_option);
      f.append("id_section", s.id_section);
      const ajouter = await axios.post(
        "http://localhost/chris/option/insert/",
        f
      );
      return ajouter.data;
    },
  },
});
