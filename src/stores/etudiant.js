import { defineStore } from "pinia";
import axios from "axios";
export const useEtudiant = defineStore("etudiant", {
  state: () => ({
    etudiant: [],
  }),
  getters: {},
  actions: {
    checkstate(et) {
      this.etudiant = et;
    },
    async saveEt(s) {
      let f = new FormData();
      f.append("nom_etudiant", s.nom);
      f.append("postnom_etudiant", s.postnom);
      f.append("prenom_etudiant", s.prenom);
      f.append("mail", s.mail);
      f.append("telephone", s.telephone);
      //photo
      f.append("id_promotion", s.id_promotion);
      f.append("pass", "1234");
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/etudiant/insert/",
        f
      );
      console.log(data.data);
      return data.data;
    },
  },
});
