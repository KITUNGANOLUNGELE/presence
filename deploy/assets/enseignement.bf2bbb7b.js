import{a0 as s}from"./index.f98bd38e.js";import{a}from"./axios.6e1fcf85.js";const r=s("ens",{state:()=>({ens:[]}),getters:{async getEnseign(){return this.ens}},actions:{setState(e){this.ens=e},async saveEns(e){let t=new FormData;t.append("id_cours",e.cours),t.append("id_enseignant",e.enseignant);let n=await a.post("http://localhost/chris/enseignement/insert/",t);return console.log(n.data),n.data},async end_ens(e){let t=new FormData;return t.append("id_enseignement",e),(await a.post("http://localhost/chris/enseignement/update/ens",t)).data}}});export{r as u};
