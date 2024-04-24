import { defineStore } from "pinia";
import axios from "axios";
export const useSurveillant = defineStore("surveillant", {
  state: () => ({
    surveillant: [],
  }),
  getters: {
    async getSurveillant() {
      return this.surveillant;
    },
  },
  actions: {
    setState(e) {
      this.surveillant = e;
    },
    async saveSurv(s) {
      let f = new FormData();
      f.append("nom_surveillant", s.nom);
      f.append("postnom_surveillant", s.postnom);
      f.append("prenom_surveillant", s.prenom);
      f.append("mail", s.mail);
      f.append("telephone", s.telephone);
      //photo
      f.append("pass", "1234");
      let data = await axios.post(
        "http://localhost/chris/surveillant/insert/",
        f
      );
      console.log(data.data);
      return data.data;
    },
  },
});
