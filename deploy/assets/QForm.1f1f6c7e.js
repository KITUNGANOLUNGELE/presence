import{u as re,a as ue,b as se,c as fe,d as ce,e as de,f as G,g as me}from"./use-key-composition.c298e6f1.js";import{r as W,w as z,O as L,R as ve,c as N,p as ae,x as ge,o as ne,h as Q,S as he,g as le,U as J,s as ke,V as ye,W as xe,t as Me,X as we,Y as p,Z as be}from"./index.f98bd38e.js";import{a as oe}from"./focus-manager.05708ea9.js";const ee={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},X={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ie=Object.keys(X);ie.forEach(e=>{X[e].regex=new RegExp(X[e].pattern)});const Se=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ie.join("")+"])|(.)","g"),te=/[.*+?^${}()|[\]\\]/g,x=String.fromCharCode(1),Ce={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Fe(e,R,q,V){let s,d,b,T,B,h;const w=W(null),f=W(i());function _(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,O),z(()=>e.mask,l=>{if(l!==void 0)K(f.value,!0);else{const a=P(f.value);O(),e.modelValue!==a&&R("update:modelValue",a)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&K(f.value,!0)}),z(()=>e.unmaskedValue,()=>{w.value===!0&&K(f.value)});function i(){if(O(),w.value===!0){const l=F(P(e.modelValue));return e.fillMask!==!1?Y(l):l}return e.modelValue}function S(l){if(l<s.length)return s.slice(-l);let a="",o=s;const n=o.indexOf(x);if(n>-1){for(let u=l-o.length;u>0;u--)a+=x;o=o.slice(0,n)+a+o.slice(n)}return o}function O(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&_(),w.value===!1){T=void 0,s="",d="";return}const l=ee[e.mask]===void 0?e.mask:ee[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",o=a.replace(te,"\\$&"),n=[],u=[],r=[];let y=e.reverseFillMask===!0,c="",m="";l.replace(Se,(M,t,g,D,j)=>{if(D!==void 0){const E=X[D];r.push(E),m=E.negate,y===!0&&(u.push("(?:"+m+"+)?("+E.pattern+"+)?(?:"+m+"+)?("+E.pattern+"+)?"),y=!1),u.push("(?:"+m+"+)?("+E.pattern+")?")}else if(g!==void 0)c="\\"+(g==="\\"?"":g),r.push(g),n.push("([^"+c+"]+)?"+c+"?");else{const E=t!==void 0?t:j;c=E==="\\"?"\\\\\\\\":E.replace(te,"\\\\$&"),r.push(E),n.push("([^"+c+"]+)?"+c+"?")}});const $=new RegExp("^"+n.join("")+"("+(c===""?".":"[^"+c+"]")+"+)?"+(c===""?"":"["+c+"]*")+"$"),Z=u.length-1,v=u.map((M,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+o+"*"+M):t===Z?new RegExp("^"+M+"("+(m===""?".":m)+"+)?"+(e.reverseFillMask===!0?"$":o+"*")):new RegExp("^"+M));b=r,T=M=>{const t=$.exec(e.reverseFillMask===!0?M:M.slice(0,r.length+1));t!==null&&(M=t.slice(1).join(""));const g=[],D=v.length;for(let j=0,E=M;j<D;j++){const H=v[j].exec(E);if(H===null)break;E=E.slice(H.shift().length),g.push(...H)}return g.length!==0?g.join(""):M},s=r.map(M=>typeof M=="string"?M:x).join(""),d=s.split(x).join(a)}function K(l,a,o){const n=V.value,u=n.selectionEnd,r=n.value.length-u,y=P(l);a===!0&&O();const c=F(y),m=e.fillMask!==!1?Y(c):c,$=f.value!==m;n.value!==m&&(n.value=m),$===!0&&(f.value=m),document.activeElement===n&&L(()=>{if(m===d){const v=e.reverseFillMask===!0?d.length:0;n.setSelectionRange(v,v,"forward");return}if(o==="insertFromPaste"&&e.reverseFillMask!==!0){const v=n.selectionEnd;let M=u-1;for(let t=B;t<=M&&t<v;t++)s[t]!==x&&M++;A.right(n,M);return}if(["deleteContentBackward","deleteContentForward"].indexOf(o)>-1){const v=e.reverseFillMask===!0?u===0?m.length>c.length?1:0:Math.max(0,m.length-(m===d?0:Math.min(c.length,r)+1))+1:u;n.setSelectionRange(v,v,"forward");return}if(e.reverseFillMask===!0)if($===!0){const v=Math.max(0,m.length-(m===d?0:Math.min(c.length,r+1)));v===1&&u===1?n.setSelectionRange(v,v,"forward"):A.rightReverse(n,v)}else{const v=m.length-r;n.setSelectionRange(v,v,"backward")}else if($===!0){const v=Math.max(0,s.indexOf(x),Math.min(c.length,u)-1);A.right(n,v)}else{const v=u-1;A.right(n,v)}});const Z=e.unmaskedValue===!0?P(m):m;String(e.modelValue)!==Z&&(e.modelValue!==null||Z!=="")&&q(Z,!0)}function U(l,a,o){const n=F(P(l.value));a=Math.max(0,s.indexOf(x),Math.min(n.length,a)),B=a,l.setSelectionRange(a,o,"forward")}const A={left(l,a){const o=s.slice(a-1).indexOf(x)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(s[n]===x){a=n,o===!0&&a++;break}if(n<0&&s[a]!==void 0&&s[a]!==x)return A.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const o=l.value.length;let n=Math.min(o,a+1);for(;n<=o;n++)if(s[n]===x){a=n;break}else s[n-1]===x&&(a=n);if(n>o&&s[a-1]!==void 0&&s[a-1]!==x)return A.left(l,o);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const o=S(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(o[n-1]===x){a=n;break}else if(o[n]===x&&(a=n,n===0))break;if(n<0&&o[a]!==void 0&&o[a]!==x)return A.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const o=l.value.length,n=S(o),u=n.slice(0,a+1).indexOf(x)===-1;let r=Math.min(o,a+1);for(;r<=o;r++)if(n[r-1]===x){a=r,a>0&&u===!0&&a--;break}if(r>o&&n[a-1]!==void 0&&n[a-1]!==x)return A.leftReverse(l,o);l.setSelectionRange(a,a,"forward")}};function k(l){R("click",l),h=void 0}function C(l){if(R("keydown",l),ve(l)===!0||l.altKey===!0)return;const a=V.value,o=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(h=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&h===void 0&&(h=a.selectionDirection==="forward"?o:n);const u=A[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),u(a,h===o?n:o),l.shiftKey){const r=a.selectionStart;a.setSelectionRange(Math.min(h,r),Math.max(h,r),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&o===n?(A.left(a,o),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&o===n&&(A.rightReverse(a,n),a.setSelectionRange(o,a.selectionEnd,"forward"))}function F(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return I(l);const a=b;let o=0,n="";for(let u=0;u<a.length;u++){const r=l[o],y=a[u];if(typeof y=="string")n+=y,r===y&&o++;else if(r!==void 0&&y.regex.test(r))n+=y.transform!==void 0?y.transform(r):r,o++;else return n}return n}function I(l){const a=b,o=s.indexOf(x);let n=l.length-1,u="";for(let r=a.length-1;r>=0&&n>-1;r--){const y=a[r];let c=l[n];if(typeof y=="string")u=y+u,c===y&&n--;else if(c!==void 0&&y.regex.test(c))do u=(y.transform!==void 0?y.transform(c):c)+u,n--,c=l[n];while(o===r&&c!==void 0&&y.regex.test(c));else return u}return u}function P(l){return typeof l!="string"||T===void 0?typeof l=="number"?T(""+l):l:T(l)}function Y(l){return d.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?d.slice(0,-l.length)+l:l+d.slice(l.length)}return{innerValue:f,hasMask:w,moveCursorForPaste:U,updateMaskValue:K,onMaskedKeydown:C,onMaskedClick:k}}function Ee(e,R){function q(){const V=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(V)===V&&("length"in V?Array.from(V):[V]).forEach(d=>{s.items.add(d)}),{files:s.files}}catch{return{files:void 0}}}return R===!0?N(()=>{if(e.type==="file")return q()}):N(q)}var Pe=ae({name:"QInput",inheritAttrs:!1,props:{...re,...Ce,...ue,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...se,"paste","change","keydown","click","animationend"],setup(e,{emit:R,attrs:q}){const{proxy:V}=le(),{$q:s}=V,d={};let b=NaN,T,B,h=null,w;const f=W(null),_=fe(e),{innerValue:i,hasMask:S,moveCursorForPaste:O,updateMaskValue:K,onMaskedKeydown:U,onMaskedClick:A}=Fe(e,R,c,f),k=Ee(e,!0),C=N(()=>G(i.value)),F=me(r),I=ce(),P=N(()=>e.type==="textarea"||e.autogrow===!0),Y=N(()=>P.value===!0||["text","search","url","tel","password"].includes(e.type)),l=N(()=>{const t={...I.splitAttrs.listeners.value,onInput:r,onPaste:u,onChange:$,onBlur:Z,onFocus:J};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=F,S.value===!0&&(t.onKeydown=U,t.onClick=A),e.autogrow===!0&&(t.onAnimationend=y),t}),a=N(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:_.value,...I.splitAttrs.attributes.value,id:I.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return P.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});z(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),z(()=>e.modelValue,t=>{if(S.value===!0){if(B===!0&&(B=!1,String(t)===b))return;K(t)}else i.value!==t&&(i.value=t,e.type==="number"&&d.hasOwnProperty("value")===!0&&(T===!0?T=!1:delete d.value));e.autogrow===!0&&L(m)}),z(()=>e.autogrow,t=>{t===!0?L(m):f.value!==null&&q.rows>0&&(f.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&L(m)});function o(){oe(()=>{const t=document.activeElement;f.value!==null&&f.value!==t&&(t===null||t.id!==I.targetUid.value)&&f.value.focus({preventScroll:!0})})}function n(){f.value!==null&&f.value.select()}function u(t){if(S.value===!0&&e.reverseFillMask!==!0){const g=t.target;O(g,g.selectionStart,g.selectionEnd)}R("paste",t)}function r(t){if(!t||!t.target)return;if(e.type==="file"){R("update:modelValue",t.target.files);return}const g=t.target.value;if(t.target.qComposing===!0){d.value=g;return}if(S.value===!0)K(g,!1,t.inputType);else if(c(g),Y.value===!0&&t.target===document.activeElement){const{selectionStart:D,selectionEnd:j}=t.target;D!==void 0&&j!==void 0&&L(()=>{t.target===document.activeElement&&g.indexOf(t.target.value)===0&&t.target.setSelectionRange(D,j)})}e.autogrow===!0&&m()}function y(t){R("animationend",t),m()}function c(t,g){w=()=>{h=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==t&&b!==t&&(b=t,g===!0&&(B=!0),R("update:modelValue",t),L(()=>{b===t&&(b=NaN)})),w=void 0},e.type==="number"&&(T=!0,d.value=t),e.debounce!==void 0?(h!==null&&clearTimeout(h),d.value=t,h=setTimeout(w,e.debounce)):w()}function m(){requestAnimationFrame(()=>{const t=f.value;if(t!==null){const g=t.parentNode.style,{scrollTop:D}=t,{overflowY:j,maxHeight:E}=s.platform.is.firefox===!0?{}:window.getComputedStyle(t),H=j!==void 0&&j!=="scroll";H===!0&&(t.style.overflowY="hidden"),g.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",H===!0&&(t.style.overflowY=parseInt(E,10)<t.scrollHeight?"auto":"hidden"),g.marginBottom="",t.scrollTop=D}})}function $(t){F(t),h!==null&&(clearTimeout(h),h=null),w!==void 0&&w(),R("change",t.target.value)}function Z(t){t!==void 0&&J(t),h!==null&&(clearTimeout(h),h=null),w!==void 0&&w(),T=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=i.value!==void 0?i.value:"")})}function v(){return d.hasOwnProperty("value")===!0?d.value:i.value!==void 0?i.value:""}ge(()=>{Z()}),ne(()=>{e.autogrow===!0&&m()}),Object.assign(I,{innerValue:i,fieldClass:N(()=>`q-${P.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:N(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:c,hasValue:C,floatingLabel:N(()=>C.value===!0&&(e.type!=="number"||isNaN(i.value)===!1)||G(e.displayValue)),getControl:()=>Q(P.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:v()}:k.value}),getShadowControl:()=>Q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(P.value===!0?"":" text-no-wrap")},[Q("span",{class:"invisible"},v()),Q("span",e.shadowText)])});const M=de(I);return Object.assign(V,{focus:o,select:n,getNativeElement:()=>f.value}),he(V,"nativeEl",()=>f.value),M}}),Te=ae({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:R,emit:q}){const V=le(),s=W(null);let d=0;const b=[];function T(i){const S=typeof i=="boolean"?i:e.noErrorFocus!==!0,O=++d,K=(k,C)=>{q("validation"+(k===!0?"Success":"Error"),C)},U=k=>{const C=k.validate();return typeof C.then=="function"?C.then(F=>({valid:F,comp:k}),F=>({valid:!1,comp:k,err:F})):Promise.resolve({valid:C,comp:k})};return(e.greedy===!0?Promise.all(b.map(U)).then(k=>k.filter(C=>C.valid!==!0)):b.reduce((k,C)=>k.then(()=>U(C).then(F=>{if(F.valid===!1)return Promise.reject(F)})),Promise.resolve()).catch(k=>[k])).then(k=>{if(k===void 0||k.length===0)return O===d&&K(!0),!0;if(O===d){const{comp:C,err:F}=k[0];if(F!==void 0&&console.error(F),K(!1,C),S===!0){const I=k.find(({comp:P})=>typeof P.focus=="function"&&we(P.$)===!1);I!==void 0&&I.comp.focus()}}return!1})}function B(){d++,b.forEach(i=>{typeof i.resetValidation=="function"&&i.resetValidation()})}function h(i){i!==void 0&&p(i);const S=d+1;T().then(O=>{S===d&&O===!0&&(e.onSubmit!==void 0?q("submit",i):i!==void 0&&i.target!==void 0&&typeof i.target.submit=="function"&&i.target.submit())})}function w(i){i!==void 0&&p(i),q("reset"),L(()=>{B(),e.autofocus===!0&&e.noResetFocus!==!0&&f()})}function f(){oe(()=>{if(s.value===null)return;const i=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),S=>S.tabIndex>-1);i!=null&&i.focus({preventScroll:!0})})}ke(be,{bindComponent(i){b.push(i)},unbindComponent(i){const S=b.indexOf(i);S>-1&&b.splice(S,1)}});let _=!1;return ye(()=>{_=!0}),xe(()=>{_===!0&&e.autofocus===!0&&f()}),ne(()=>{e.autofocus===!0&&f()}),Object.assign(V.proxy,{validate:T,resetValidation:B,submit:h,reset:w,focus:f,getValidationComponents:()=>b}),()=>Q("form",{class:"q-form",ref:s,onSubmit:h,onReset:w},Me(R.default))}});export{Te as Q,Pe as a,Ee as u};
