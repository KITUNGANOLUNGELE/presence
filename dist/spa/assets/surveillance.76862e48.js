import{a as t}from"./axios.6e1fcf85.js";import{a0 as s}from"./index.3613b871.js";const l=s("surllance",{state:()=>({surveillance:[]}),getters:{async getSurveillance(){return this.surveillance}},actions:{async saveSurveillance(a){let e=new FormData;return e.append("id_examen",a.examen),e.append("id_surveillant",a.surveillant),(await t.post("https://gestpresence.000webhostapp.com/chris/surveillance/insert/",e)).data},async GetSurvEt(a){let e=new FormData;return e.append("id_enseignement",a.id_enseignement),e.append("id_etudiant",a.id_etudiant),(await t.post("https://gestpresence.000webhostapp.com/chris/surveillance/surv/",e)).data}}});export{l as u};