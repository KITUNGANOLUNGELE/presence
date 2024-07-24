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
      f.append("id_promotion", s.id_promotion);
      f.append("pass", "1234");
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/etudiant/insert/",
        f
      );
      console.log(data.data);
      return data.data;
    },
    async editPass(s) {
      let f = new FormData();
      f.append("id", s.id);
      f.append("pass", s.pass);
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/etudiant/update_pass/",
        f
      );
      console.log(data);
      return data;
    },
    async getByProm(s) {
      let f = new FormData();
      f.append("id_prom", s.id);
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/etudiant/get_by_rom/",
        f
      );
      return data;
    },
    async delete(s) {
      let f = new FormData();
      f.append("id", s.id);
      let data = await axios.post(
        "https://gestpresence.000webhostapp.com/chris/etudiant/delete/",
        f
      );
      return data;
    },
  },
});
