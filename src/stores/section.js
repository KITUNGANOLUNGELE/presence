import { defineStore } from "pinia";
import axios from "axios";
import { useQuasar } from "quasar";
export const useSection = defineStore("section", {
  state: () => ({
    section: [],
  }),
  getters: {
    async getSection() {
      const sectionn = await axios.get(
        "https://gestpresence.000webhostapp.com/chris/section/all/"
      );
      this.section = sectionn.data.response;
      return sectionn.data;
    },
  },
  actions: {
    setState(s) {
      this.section = s;
    },
    async saveSection(s) {
      let form = new FormData();
      form.append("nom_section", s.nom_section);
      const ajouter = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/section/insert/",
        form
      );
      return ajouter.data;
    },
    setState(s) {
      this.section = s;
    },
  },
});
