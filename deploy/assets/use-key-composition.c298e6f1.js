import{i as le,w as _,o as J,x as z,Z as te,g as I,r as g,c as i,a1 as re,S as ue,a2 as ne,Y as ae,O as ie,V as se,W as de,D as fe,h as a,a3 as B,a4 as L,a5 as ce,t as $,a6 as ve,a7 as pe}from"./index.f98bd38e.js";import{u as me,a as ge}from"./use-dark.c38352e8.js";import{u as W}from"./uid.42677368.js";import{a as be,r as he}from"./focus-manager.05708ea9.js";function Ce({validate:e,resetValidation:o,requiresQForm:l}){const r=le(te,!1);if(r!==!1){const{props:f,proxy:s}=I();Object.assign(s,{validate:e,resetValidation:o}),_(()=>f.disable,u=>{u===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),J(()=>{f.disable!==!0&&r.bindComponent(s)}),z(()=>{f.disable!==!0&&r.unbindComponent(s)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const Z=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,K=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,N=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,k=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,E=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,P={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Z.test(e),hexaColor:e=>K.test(e),hexOrHexaColor:e=>N.test(e),rgbColor:e=>k.test(e),rgbaColor:e=>E.test(e),rgbOrRgbaColor:e=>k.test(e)||E.test(e),hexOrRgbColor:e=>Z.test(e)||k.test(e),hexaOrRgbaColor:e=>K.test(e)||E.test(e),anyColor:e=>N.test(e)||k.test(e)||E.test(e)},ye=[!0,!1,"ondemand"],qe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>ye.includes(e)}};function _e(e,o){const{props:l,proxy:r}=I(),f=g(!1),s=g(null),u=g(null);Ce({validate:y,resetValidation:S});let c=0,h;const R=i(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),m=i(()=>l.disable!==!0&&R.value===!0&&o.value===!1),x=i(()=>l.error===!0||f.value===!0),O=i(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:s.value);_(()=>l.modelValue,()=>{u.value=!0,m.value===!0&&l.lazyRules===!1&&C()}),_(()=>l.reactiveRules,b=>{b===!0?h===void 0&&(h=_(()=>l.rules,()=>{m.value===!0&&u.value===!0&&l.lazyRules!=="ondemand"&&C()},{immediate:!0})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),_(()=>l.lazyRules,b=>{b===!1&&m.value===!0&&u.value===!0&&C()}),_(e,b=>{b===!0?u.value===null&&(u.value=l.lazyRules===!0):m.value===!0&&(l.lazyRules===!1||l.lazyRules===!0&&u.value===!0)&&C()});function S(){c++,o.value=!1,u.value=null,f.value=!1,s.value=null,C.cancel()}function y(b=l.modelValue){if(l.disable===!0||R.value===!1)return!0;const A=++c,F=o.value!==!0?()=>{u.value=!0}:()=>{},q=(d,v)=>{d===!0&&F(),f.value=d,s.value=v||null,o.value=!1},V=[];for(let d=0;d<l.rules.length;d++){const v=l.rules[d];let p;if(typeof v=="function"?p=v(b,P):typeof v=="string"&&P[v]!==void 0&&(p=P[v](b)),p===!1||typeof p=="string")return q(!0,p),!1;p!==!0&&p!==void 0&&V.push(p)}return V.length===0?(q(!1),!0):(o.value=!0,Promise.all(V).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return A===c&&q(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return A===c&&q(v!==void 0,v),v===void 0},d=>(A===c&&(console.error(d),q(!0)),!1)))}const C=re(y,0);return z(()=>{h!==void 0&&h(),C.cancel()}),Object.assign(r,{resetValidation:S,validate:y}),ue(r,"hasError",()=>x.value),{isDirtyModel:u,hasRules:R,hasError:x,errorMessage:O,validate:y,resetValidation:S}}const Q=/^on[A-Z]/;function xe(e,o){const l={listeners:g({}),attributes:g({})};function r(){const f={},s={};for(const u in e)u!=="class"&&u!=="style"&&Q.test(u)===!1&&(f[u]=e[u]);for(const u in o.props)Q.test(u)===!0&&(s[u]=o.props[u]);l.attributes.value=f,l.listeners.value=s}return ne(r),r(),l}function Y(e,o){return e===void 0?o===!0?`f_${W()}`:void 0:e}function Se(e){return e!=null&&(""+e).length!==0}const Ee={...me,...qe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ie=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Oe({requiredForAttr:e=!0,tagProp:o}={}){const{props:l,attrs:r,proxy:f,vnode:s}=I(),u=ge(l,f.$q);return{requiredForAttr:e,tag:o===!0?i(()=>l.tag):{value:"label"},isDark:u,editable:i(()=>l.disable!==!0&&l.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:xe(r,s),targetUid:g(Y(l.for,e)),rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function Pe(e){const{props:o,emit:l,slots:r,attrs:f,proxy:s}=I(),{$q:u}=s;let c=null;e.hasValue===void 0&&(e.hasValue=i(()=>Se(o.modelValue))),e.emitValue===void 0&&(e.emitValue=t=>{l("update:modelValue",t)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:D,onFocusout:M}),Object.assign(e,{clearValue:T,onControlFocusin:D,onControlFocusout:M,focus:p}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const t=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return t+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:h,hasRules:R,hasError:m,errorMessage:x,resetValidation:O}=_e(e.focused,e.innerLoading),S=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),y=i(()=>o.bottomSlots===!0||o.hint!==void 0||R.value===!0||o.counter===!0||o.error!==null),C=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),b=i(()=>`q-field row no-wrap items-start q-field--${C.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(S.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(m.value===!0?" q-field--error":"")+(m.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&y.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),A=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(m.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),F=i(()=>o.labelSlot===!0||o.label!==void 0),q=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&m.value!==!0?` text-${o.labelColor}`:"")),V=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:S.value,modelValue:o.modelValue,emitValue:e.emitValue})),d=i(()=>{const t={for:e.targetUid.value};return o.disable===!0&&(t["aria-disabled"]="true"),t});_(()=>o.for,t=>{e.targetUid.value=Y(t,e.requiredForAttr)});function v(){const t=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(t===null||t.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus({preventScroll:!0}))}function p(){be(v)}function G(){he(v);const t=document.activeElement;t!==null&&e.rootRef.value.contains(t)&&t.blur()}function D(t){c!==null&&(clearTimeout(c),c=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",t))}function M(t,n){c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",t)),n!==void 0&&n())})}function T(t){ae(t),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",o.modelValue),ie(()=>{O(),u.platform.is.mobile!==!0&&(h.value=!1)})}function X(){const t=[];return r.prepend!==void 0&&t.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:B},r.prepend())),t.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ee())),m.value===!0&&o.noErrorIcon===!1&&t.push(w("error",[a(L,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?t.push(w("inner-loading-append",r.loading!==void 0?r.loading():[a(ce,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&t.push(w("inner-clearable-append",[a(L,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:T})])),r.append!==void 0&&t.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:B},r.append())),e.getInnerAppend!==void 0&&t.push(w("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&t.push(e.getControlChild()),t}function ee(){const t=[];return o.prefix!==void 0&&o.prefix!==null&&t.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&t.push(e.getShadowControl()),e.getControl!==void 0?t.push(e.getControl()):r.rawControl!==void 0?t.push(r.rawControl()):r.control!==void 0&&t.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(V.value))),F.value===!0&&t.push(a("div",{class:q.value},$(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&t.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),t.concat($(r.default))}function oe(){let t,n;m.value===!0?x.value!==null?(t=[a("div",{role:"alert"},x.value)],n=`q--slot-error-${x.value}`):(t=$(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(t=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(t=$(r.hint),n="q--slot-hint"));const j=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&j===!1&&t===void 0)return;const H=a("div",{key:n,class:"q-field__messages col"},t);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:B},[o.hideBottomSpace===!0?H:a(ve,{name:"q-transition--field-message"},()=>H),j===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function w(t,n){return n===null?null:a("div",{key:t,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let U=!1;return se(()=>{U=!0}),de(()=>{U===!0&&o.autofocus===!0&&s.focus()}),J(()=>{fe.value===!0&&e.requiredForAttr===!0&&o.for===void 0&&(e.targetUid.value=`f_${W()}`),o.autofocus===!0&&s.focus()}),z(()=>{c!==null&&clearTimeout(c)}),Object.assign(s,{focus:p,blur:G}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...d.value}:d.value;return a(e.tag.value,{ref:e.rootRef,class:[b.value,f.class],style:f.style,...n},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:B},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:A.value,tabindex:-1,...e.controlEvents},X()),y.value===!0?oe():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:B},r.after()):null])}}const ze={name:String};function De(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Me(e={}){return(o,l,r)=>{o[l](a("input",{class:"hidden"+(r||""),...e.value}))}}function Te(e){return i(()=>e.name||e.for)}const Re=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ae=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ve=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Be=/[a-z0-9_ -]$/i;function Ue(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(pe.is.firefox===!0?Be.test(l.data)===!1:Re.test(l.data)===!0||Ae.test(l.data)===!0||Ve.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}export{ze as a,Ie as b,Te as c,Oe as d,Pe as e,Se as f,Ue as g,De as h,Me as i,Ee as u};
