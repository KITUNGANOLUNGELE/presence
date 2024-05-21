import{p as A,c as l,h as v,t as E,i as ge,Q as ye,y as ze,ap as we,a4 as le,H as ne,g as ie,r as B,s as He,q as p,w as m,o as Re,O as ce,x as Ee,a8 as Ue,aj as de,u as Ke,d as Xe,_ as Ge,l as z,m as H,n as F,f as ee,ao as ae,ak as ve,aq as fe}from"./index.3613b871.js";import{u as ke,a as qe,b as Se,c as Je,d as Ye,e as Ze}from"./use-timeout.296fb3b4.js";import{u as pe}from"./uid.42677368.js";import{u as ea,a as aa}from"./use-dark.42ce25b7.js";import{T as te}from"./TouchPan.980d543c.js";import{b as R,a as be,Q as me,d as ta}from"./QItem.ea83679a.js";var ya=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const r=l(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>v("div",{class:r.value},E(i.default))}});const la=["top","right","bottom","left"],Ce={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>la.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function Be(e,i){return{formClass:l(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:l(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:l(()=>{if(e.externalLabel===!0){const r=e.hideLabel===null?i.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(r===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const _e={start:"self-end",center:"self-center",end:"self-start"},na=Object.keys(_e);var wa=A({name:"QFabAction",props:{...Ce,icon:{type:String,default:""},anchor:{type:String,validator:e=>na.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:i,emit:r}){const u=ge(we,()=>({showing:{value:!0},onChildClick:ze})),{formClass:c,labelProps:f}=Be(e,u.showing),T=l(()=>{const d=_e[e.anchor];return c.value+(d!==void 0?` ${d}`:"")}),q=l(()=>e.disable===!0||u.showing.value!==!0);function _(d){u.onChildClick(d),r("click",d)}function P(){const d=[];return i.icon!==void 0?d.push(i.icon()):e.icon!==""&&d.push(v(le,{name:e.icon})),(e.label!==""||i.label!==void 0)&&d[f.value.action](v("div",f.value.data,i.label!==void 0?i.label():[e.label])),ne(i.default,d)}const t=ie();return Object.assign(t.proxy,{click:_}),()=>v(ye,{class:T.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:q.value,onClick:_},P)}});const ia=["up","right","down","left"],oa=["left","center","right"];var ka=A({name:"QFab",props:{...Ce,...ke,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>ia.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>oa.includes(e)}},emits:qe,setup(e,{slots:i}){const r=B(null),u=B(e.modelValue===!0),c=pe(),{proxy:{$q:f}}=ie(),{formClass:T,labelProps:q}=Be(e,u),_=l(()=>e.persistent!==!0),{hide:P,toggle:t}=Se({showing:u,hideOnRouteChange:_}),d=l(()=>({opened:u.value})),w=l(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${T.value}`+(u.value===!0?" q-fab--opened":" q-fab--closed")),x=l(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${u.value===!0?"opened":"closed"}`),s=l(()=>{const h={id:c,role:"menu"};return u.value!==!0&&(h["aria-hidden"]="true"),h}),$=l(()=>`q-fab__icon-holder  q-fab__icon-holder--${u.value===!0?"opened":"closed"}`);function b(h,M){const D=i[h],L=`q-fab__${h} absolute-full`;return D===void 0?v(le,{class:L,name:e[M]||f.iconSet.fab[M]}):v("div",{class:L},D(d.value))}function o(){const h=[];return e.hideIcon!==!0&&h.push(v("div",{class:$.value},[b("icon","icon"),b("active-icon","activeIcon")])),(e.label!==""||i.label!==void 0)&&h[q.value.action](v("div",q.value.data,i.label!==void 0?i.label(d.value):[e.label])),ne(i.tooltip,h)}return He(we,{showing:u,onChildClick(h){P(h),r.value!==null&&r.value.$el.focus()}}),()=>v("div",{class:w.value},[v(ye,{ref:r,class:T.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":u.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c,onClick:t},o),v("div",{class:x.value,...s.value},E(i.default))])}}),qa=A({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const r=l(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:r.value,role:"toolbar"},E(i.default))}});const he=150;var Sa=A({name:"QDrawer",inheritAttrs:!1,props:{...ke,...ea,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qe,"onLayout","miniState"],setup(e,{slots:i,emit:r,attrs:u}){const c=ie(),{proxy:{$q:f}}=c,T=aa(e,f),{preventBodyScroll:q}=Ze(),{registerTimeout:_,removeTimeout:P}=Je(),t=ge(Ke,p);if(t===p)return console.error("QDrawer needs to be child of QLayout"),p;let d,w=null,x;const s=B(e.behavior==="mobile"||e.behavior!=="desktop"&&t.totalWidth.value<=e.breakpoint),$=l(()=>e.mini===!0&&s.value!==!0),b=l(()=>$.value===!0?e.miniWidth:e.width),o=B(e.showIfAbove===!0&&s.value===!1?!0:e.modelValue===!0),h=l(()=>e.persistent!==!0&&(s.value===!0||Te.value===!0));function M(a,n){if(xe(),a!==!1&&t.animate(),y(0),s.value===!0){const g=t.instances[N.value];g!==void 0&&g.belowBreakpoint===!0&&g.hide(!1),S(1),t.isContainer.value!==!0&&q(!0)}else S(0),a!==!1&&J(!1);_(()=>{a!==!1&&J(!0),n!==!0&&r("show",a)},he)}function D(a,n){$e(),a!==!1&&t.animate(),S(0),y(O.value*b.value),Y(),n!==!0?_(()=>{r("hide",a)},he):P()}const{show:L,hide:I}=Se({showing:o,hideOnRouteChange:h,handleShow:M,handleHide:D}),{addToHistory:xe,removeFromHistory:$e}=Ye(o,I,h),V={belowBreakpoint:s,hide:I},k=l(()=>e.side==="right"),O=l(()=>(f.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),oe=B(0),Q=B(!1),U=B(!1),re=B(b.value*O.value),N=l(()=>k.value===!0?"left":"right"),K=l(()=>o.value===!0&&s.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:b.value:0),X=l(()=>e.overlay===!0||e.miniToOverlay===!0||t.view.value.indexOf(k.value?"R":"L")>-1||f.platform.is.ios===!0&&t.isContainer.value===!0),W=l(()=>e.overlay===!1&&o.value===!0&&s.value===!1),Te=l(()=>e.overlay===!0&&o.value===!0&&s.value===!1),Le=l(()=>"fullscreen q-drawer__backdrop"+(o.value===!1&&Q.value===!1?" hidden":"")),Oe=l(()=>({backgroundColor:`rgba(0,0,0,${oe.value*.4})`})),ue=l(()=>k.value===!0?t.rows.value.top[2]==="r":t.rows.value.top[0]==="l"),Qe=l(()=>k.value===!0?t.rows.value.bottom[2]==="r":t.rows.value.bottom[0]==="l"),Ae=l(()=>{const a={};return t.header.space===!0&&ue.value===!1&&(X.value===!0?a.top=`${t.header.offset}px`:t.header.space===!0&&(a.top=`${t.header.size}px`)),t.footer.space===!0&&Qe.value===!1&&(X.value===!0?a.bottom=`${t.footer.offset}px`:t.footer.space===!0&&(a.bottom=`${t.footer.size}px`)),a}),Pe=l(()=>{const a={width:`${b.value}px`,transform:`translateX(${re.value}px)`};return s.value===!0?a:Object.assign(a,Ae.value)}),Me=l(()=>"q-drawer__content fit "+(t.isContainer.value!==!0?"scroll":"overflow-auto")),De=l(()=>`q-drawer q-drawer--${e.side}`+(U.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(T.value===!0?" q-drawer--dark q-dark":"")+(Q.value===!0?" no-transition":o.value===!0?"":" q-layout--prevent-focus")+(s.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(X.value===!0||W.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ue.value===!0?" q-drawer--top-padding":""))),Ie=l(()=>{const a=f.lang.rtl===!0?e.side:N.value;return[[te,Ne,void 0,{[a]:!0,mouse:!0}]]}),We=l(()=>{const a=f.lang.rtl===!0?N.value:e.side;return[[te,se,void 0,{[a]:!0,mouse:!0}]]}),Fe=l(()=>{const a=f.lang.rtl===!0?N.value:e.side;return[[te,se,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function G(){je(s,e.behavior==="mobile"||e.behavior!=="desktop"&&t.totalWidth.value<=e.breakpoint)}m(s,a=>{a===!0?(d=o.value,o.value===!0&&I(!1)):e.overlay===!1&&e.behavior!=="mobile"&&d!==!1&&(o.value===!0?(y(0),S(0),Y()):L(!1))}),m(()=>e.side,(a,n)=>{t.instances[n]===V&&(t.instances[n]=void 0,t[n].space=!1,t[n].offset=0),t.instances[a]=V,t[a].size=b.value,t[a].space=W.value,t[a].offset=K.value}),m(t.totalWidth,()=>{(t.isContainer.value===!0||document.qScrollPrevented!==!0)&&G()}),m(()=>e.behavior+e.breakpoint,G),m(t.isContainer,a=>{o.value===!0&&q(a!==!0),a===!0&&G()}),m(t.scrollbarWidth,()=>{y(o.value===!0?0:void 0)}),m(K,a=>{C("offset",a)}),m(W,a=>{r("onLayout",a),C("space",a)}),m(k,()=>{y()}),m(b,a=>{y(),Z(e.miniToOverlay,a)}),m(()=>e.miniToOverlay,a=>{Z(a,b.value)}),m(()=>f.lang.rtl,()=>{y()}),m(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ve(),t.animate())}),m($,a=>{r("miniState",a)});function y(a){a===void 0?ce(()=>{a=o.value===!0?0:b.value,y(O.value*a)}):(t.isContainer.value===!0&&k.value===!0&&(s.value===!0||Math.abs(a)===b.value)&&(a+=O.value*t.scrollbarWidth.value),re.value=a)}function S(a){oe.value=a}function J(a){const n=a===!0?"remove":t.isContainer.value!==!0?"add":"";n!==""&&document.body.classList[n]("q-body--drawer-toggle")}function Ve(){w!==null&&clearTimeout(w),c.proxy&&c.proxy.$el&&c.proxy.$el.classList.add("q-drawer--mini-animate"),U.value=!0,w=setTimeout(()=>{w=null,U.value=!1,c&&c.proxy&&c.proxy.$el&&c.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ne(a){if(o.value!==!1)return;const n=b.value,g=R(a.distance.x,0,n);if(a.isFinal===!0){g>=Math.min(75,n)===!0?L():(t.animate(),S(0),y(O.value*n)),Q.value=!1;return}y((f.lang.rtl===!0?k.value!==!0:k.value)?Math.max(n-g,0):Math.min(0,g-n)),S(R(g/n,0,1)),a.isFirst===!0&&(Q.value=!0)}function se(a){if(o.value!==!0)return;const n=b.value,g=a.direction===e.side,j=(f.lang.rtl===!0?g!==!0:g)?R(a.distance.x,0,n):0;if(a.isFinal===!0){Math.abs(j)<Math.min(75,n)===!0?(t.animate(),S(1),y(0)):I(),Q.value=!1;return}y(O.value*j),S(R(1-j/n,0,1)),a.isFirst===!0&&(Q.value=!0)}function Y(){q(!1),J(!0)}function C(a,n){t.update(e.side,a,n)}function je(a,n){a.value!==n&&(a.value=n)}function Z(a,n){C("size",a===!0?e.miniWidth:n)}return t.instances[e.side]=V,Z(e.miniToOverlay,b.value),C("space",W.value),C("offset",K.value),e.showIfAbove===!0&&e.modelValue!==!0&&o.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Re(()=>{r("onLayout",W.value),r("miniState",$.value),d=e.showIfAbove===!0;const a=()=>{(o.value===!0?M:D)(!1,!0)};if(t.totalWidth.value!==0){ce(a);return}x=m(t.totalWidth,()=>{x(),x=void 0,o.value===!1&&e.showIfAbove===!0&&s.value===!1?L(!1):a()})}),Ee(()=>{x!==void 0&&x(),w!==null&&(clearTimeout(w),w=null),o.value===!0&&Y(),t.instances[e.side]===V&&(t.instances[e.side]=void 0,C("size",0),C("offset",0),C("space",!1))}),()=>{const a=[];s.value===!0&&(e.noSwipeOpen===!1&&a.push(Ue(v("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ie.value)),a.push(de("div",{ref:"backdrop",class:Le.value,style:Oe.value,"aria-hidden":"true",onClick:I},void 0,"backdrop",e.noSwipeBackdrop!==!0&&o.value===!0,()=>Fe.value)));const n=$.value===!0&&i.mini!==void 0,g=[v("div",{...u,key:""+n,class:[Me.value,u.class]},n===!0?i.mini():E(i.default))];return e.elevated===!0&&o.value===!0&&g.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(de("aside",{ref:"content",class:De.value,style:Pe.value},g,"contentclose",e.noSwipeClose!==!0&&s.value===!0,()=>We.value)),v("div",{class:"q-drawer-container"},a)}}});const ra=["top","middle","bottom"];var ua=A({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ra.includes(e)}},setup(e,{slots:i}){const r=l(()=>e.align!==void 0?{verticalAlign:e.align}:null),u=l(()=>{const c=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(c!==void 0?` text-${c}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>v("div",{class:u.value,style:r.value,role:"status","aria-label":e.label},ne(i.default,e.label!==void 0?[e.label]:[]))}});const sa=Xe({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},bage:{type:Number,default:0}}});function ca(e,i,r,u,c,f){return z(),H(ta,{clickable:"",exact:"",tag:"router-link",to:{name:e.link},style:{"margin-bottom":"calc(100% / 6)","font-weight":"bold","font-family":"montserrat","font-size":"120%"}},{default:F(()=>[e.icon?(z(),H(be,{key:0,avatar:""},{default:F(()=>[ee(le,{name:e.icon,color:"blue-7"},null,8,["name"]),e.bage>0?(z(),H(ua,{key:0,color:"red","text-color":"white",label:e.bage},null,8,["label"])):ae("",!0)]),_:1})):ae("",!0),ee(be,null,{default:F(()=>[ee(me,null,{default:F(()=>[ve(fe(e.title),1)]),_:1}),e.caption?(z(),H(me,{key:0,caption:""},{default:F(()=>[ve(fe(e.caption),1)]),_:1})):ae("",!0)]),_:1})]),_:1},8,["to"])}var Ca=Ge(sa,[["render",ca]]);export{Ca as E,qa as Q,ya as a,ka as b,wa as c,Sa as d};
