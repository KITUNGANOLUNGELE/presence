import{a as c}from"./QHeader.29c64084.js";import{Q as g,a as p}from"./QForm.30c9c5f0.js";import{_,d as f,I,r as d,l as S,J as v,f as l,n as i,F as h,K as t,L as b,Q as w,M as C,N as Q}from"./index.3613b871.js";import{Q as y}from"./QPage.5003b42e.js";import{u as V}from"./use-quasar.172adb27.js";import"./surveillant.6abce85c.js";import"./etudiant.81cce77f.js";import{a as F}from"./axios.6e1fcf85.js";import"./use-key-composition.749b5dc8.js";import"./use-dark.42ce25b7.js";import"./uid.42677368.js";import"./focus-manager.05708ea9.js";const x=f({name:"FormConnection",setup(){const o=I(),s=d(""),a=d(""),r=V();function m(){let n=new FormData;n.append("mail",s.value),n.append("pass",a.value),r.loading.show({message:"Loading",messageColor:"primary",spinnerColor:"blue-4"}),F.post("https://gestpresence.000webhostapp.com/chris/user/login/",n).then(e=>{e.data.role=="su"?(localStorage.setItem("user",e.data.response.mai),localStorage.setItem("role",e.data.role),o.replace("/home")):e.data.role=="enseignant"?(localStorage.setItem("user",e.data.response.mail),localStorage.setItem("userId",e.data.response.id),localStorage.setItem("role",e.data.role),o.replace("/enseignant")):e.data.role=="etudiant"?(localStorage.setItem("user",e.data.response.mail),localStorage.setItem("userId",e.data.response.id),localStorage.setItem("role",e.data.role),localStorage.setItem("id_prom",e.data.response.id_promotion),o.replace("/etudiant_vue")):e.data.role=="surveillant"?(localStorage.setItem("user",e.data.response.mail),localStorage.setItem("userId",e.data.response.id),localStorage.setItem("role",e.data.role),o.replace("/surveillant_vue")):r.notify({message:e.data.message,color:"white",textColor:"red",icon:"error",iconColor:"red"}),r.loading.hide()}),s.value="",a.value=""}return{onSubmit:m,login:s,pass:a}}}),u=o=>(C("data-v-5983d6d0"),o=o(),Q(),o),E=u(()=>t("div",{class:"div_header bg-blue-4 flex flex-center"},[t("h5",null,[t("b",null,"GESTION PRESENCE")])],-1)),N={class:"col-10 col-md-10 col-sm-12 col flex flex-center"},$={class:"cont_form"},B=u(()=>t("h4",null,"Login",-1)),k={class:"form_tag"};function L(o,s,a,r,m,n){return S(),v(h,null,[l(c,null,{default:i(()=>[E]),_:1}),l(y,{class:"cont row"},{default:i(()=>[t("div",N,[t("div",$,[B,l(g,{onSubmit:b(o.onSubmit,["prevent"]),class:"q-gutter-md"},{default:i(()=>[l(p,{modelValue:o.login,"onUpdate:modelValue":s[0]||(s[0]=e=>o.login=e),type:"mail",label:"user name",color:"blue-4"},null,8,["modelValue"]),l(p,{modelValue:o.pass,"onUpdate:modelValue":s[1]||(s[1]=e=>o.pass=e),type:"password",label:"Pass word",color:"blue-4"},null,8,["modelValue"]),t("div",k,[l(w,{con:"check",label:"login",type:"submit",color:"primary"})])]),_:1},8,["onSubmit"])])])]),_:1})],64)}var j=_(x,[["render",L],["__scopeId","data-v-5983d6d0"]]);export{j as default};