import{p as n,aA as c,aB as p,c as i,h as d,t as u,aa as l,au as h}from"./index.3613b871.js";import{g as m,c as v}from"./QDialog.910c90bb.js";var y=n({name:"QCardActions",props:{...c,vertical:Boolean},setup(e,{slots:t}){const o=p(e),r=i(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>d("div",{class:r.value},u(t.default))}});function s(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var C=l({name:"close-popup",beforeMount(e,{value:t}){const o={depth:s(t),handler(r){o.depth!==0&&setTimeout(()=>{const a=m(e);a!==void 0&&v(a,r,o.depth)})},handlerKey(r){h(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=s(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{C,y as Q};