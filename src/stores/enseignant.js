import { defineStore } from "pinia";
import axios from "axios";
export const useEnseignant = defineStore("enseignant", {
  state: () => ({
    enseignant: [],
  }),
  getters: {
    async getEnseignant() {
      return this.enseignant;
    },
  },
  actions: {
    setState(e) {
      this.enseignant = e;
    },
    //enregistrement
    async saveEnseignant(s) {
      let f = new FormData();
      f.append("nom_enseignant", s.nom);
      f.append("postnom_enseignant", s.postnom);
      f.append("prenom_enseignant", s.prenom);
      f.append("mail", s.mail);
      f.append("telephone", s.telephone);
      //photo
      f.append("pass", "1234");
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/enseignant/insert/",
        f
      );
      console.log(data.data);
      return data.data;
    },
  },
});
