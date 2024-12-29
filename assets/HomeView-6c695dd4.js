import{c as ne,a as p,h as _,b as ie,r as $,g as ve,u as W,i as me,o as pe,T as ye,Q as Se,w as be,v as x,d as we,_ as Ce,e as $e,f as Be,j as Ie,k as je,l as k,m as g,n as m,p as d,F as j,q as F,s as E,t as w,x as c,y as H,z as Y,A as Te,B as Z,C as X}from"./index-08ab9f19.js";import{Q as Le,a as Oe,b as qe}from"./QCard-f0fcbe15.js";const Q=ne({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=p(()=>{const i=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${i.length!==0?" "+i:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>_("div",{class:n.value},ie(t.default))}}),Ne={ratio:[String,Number]};function ke(e,t){return p(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const Fe=1.7778,Ee=ne({name:"QImg",props:{...Ne,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Fe},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const i=$(e.initialRatio),o=ke(e,i),s=ve(),{registerTimeout:y,removeTimeout:h}=W(),{registerTimeout:f,removeTimeout:S}=W(),a=p(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),l=p(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),u=[$(null),$(a.value)],v=$(0),O=$(!1),q=$(!1),se=p(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),le=p(()=>({width:e.width,height:e.height})),ue=p(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),ce=p(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function de(){if(S(),e.loadingShowDelay===0){O.value=!0;return}f(()=>{O.value=!0},e.loadingShowDelay)}function D(){S(),O.value=!1}function he({target:r}){x(s)===!1&&(h(),i.value=r.naturalHeight===0?.5:r.naturalWidth/r.naturalHeight,M(r,1))}function M(r,b){b===1e3||x(s)===!0||(r.complete===!0?fe(r):y(()=>{M(r,b+1)},50))}function fe(r){x(s)!==!0&&(v.value=v.value^1,u[v.value].value=null,D(),r.getAttribute("__qerror")!=="true"&&(q.value=!1),n("load",r.currentSrc||r.src))}function ge(r){h(),D(),q.value=!0,u[v.value].value=l.value,u[v.value^1].value=a.value,n("error",r)}function J(r){const b=u[r].value,N={key:"img_"+r,class:ue.value,style:ce.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...b};return v.value===r?Object.assign(N,{class:N.class+"current",onLoad:he,onError:ge}):N.class+="loaded",_("div",{class:"q-img__container absolute-full",key:"img"+r},_("img",N))}function _e(){return O.value===!1?_("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ie(t[q.value===!0?"error":"default"])):_("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[_(Se,{color:e.spinnerColor,size:e.spinnerSize})])}{let r=function(){be(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,b=>{h(),q.value=!1,b===null?(D(),u[v.value^1].value=a.value):de(),u[v.value].value=b},{immediate:!0})};me.value===!0?pe(r):r()}return()=>{const r=[];return o.value!==null&&r.push(_("div",{key:"filler",style:o.value})),u[0].value!==null&&r.push(J(0)),u[1].value!==null&&r.push(J(1)),r.push(_(ye,{name:"q-transition--fade"},_e)),_("div",{key:"main",class:se.value,style:le.value,role:"img","aria-label":e.alt},r)}}});var ze=typeof global=="object"&&global&&global.Object===Object&&global;const Pe=ze;var Re=typeof self=="object"&&self&&self.Object===Object&&self,Ve=Pe||Re||Function("return this")();const R=Ve;var Ae=R.Symbol;const z=Ae;var ae=Object.prototype,De=ae.hasOwnProperty,xe=ae.toString,T=z?z.toStringTag:void 0;function He(e){var t=De.call(e,T),n=e[T];try{e[T]=void 0;var i=!0}catch{}var o=xe.call(e);return i&&(t?e[T]=n:delete e[T]),o}var Qe=Object.prototype,Ge=Qe.toString;function Ue(e){return Ge.call(e)}var Ke="[object Null]",Me="[object Undefined]",ee=z?z.toStringTag:void 0;function Je(e){return e==null?e===void 0?Me:Ke:ee&&ee in Object(e)?He(e):Ue(e)}function re(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var We="[object AsyncFunction]",Ye="[object Function]",Ze="[object GeneratorFunction]",Xe="[object Proxy]";function et(e){if(!re(e))return!1;var t=Je(e);return t==Ye||t==Ze||t==We||t==Xe}var tt=R["__core-js_shared__"];const G=tt;var te=function(){var e=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function nt(e){return!!te&&te in e}var it=Function.prototype,at=it.toString;function rt(e){if(e!=null){try{return at.call(e)}catch{}try{return e+""}catch{}}return""}var ot=/[\\^$.*+?()[\]{}|]/g,st=/^\[object .+?Constructor\]$/,lt=Function.prototype,ut=Object.prototype,ct=lt.toString,dt=ut.hasOwnProperty,ht=RegExp("^"+ct.call(dt).replace(ot,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ft(e){if(!re(e)||nt(e))return!1;var t=et(e)?ht:st;return t.test(rt(e))}function gt(e,t){return e==null?void 0:e[t]}function K(e,t){var n=gt(e,t);return ft(n)?n:void 0}var _t=K(Object,"create");const L=_t;function vt(){this.__data__=L?L(null):{},this.size=0}function mt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var pt="__lodash_hash_undefined__",yt=Object.prototype,St=yt.hasOwnProperty;function bt(e){var t=this.__data__;if(L){var n=t[e];return n===pt?void 0:n}return St.call(t,e)?t[e]:void 0}var wt=Object.prototype,Ct=wt.hasOwnProperty;function $t(e){var t=this.__data__;return L?t[e]!==void 0:Ct.call(t,e)}var Bt="__lodash_hash_undefined__";function It(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=L&&t===void 0?Bt:t,this}function C(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}C.prototype.clear=vt;C.prototype.delete=mt;C.prototype.get=bt;C.prototype.has=$t;C.prototype.set=It;function jt(){this.__data__=[],this.size=0}function Tt(e,t){return e===t||e!==e&&t!==t}function V(e,t){for(var n=e.length;n--;)if(Tt(e[n][0],t))return n;return-1}var Lt=Array.prototype,Ot=Lt.splice;function qt(e){var t=this.__data__,n=V(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():Ot.call(t,n,1),--this.size,!0}function Nt(e){var t=this.__data__,n=V(t,e);return n<0?void 0:t[n][1]}function kt(e){return V(this.__data__,e)>-1}function Ft(e,t){var n=this.__data__,i=V(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}function B(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}B.prototype.clear=jt;B.prototype.delete=qt;B.prototype.get=Nt;B.prototype.has=kt;B.prototype.set=Ft;var Et=K(R,"Map");const zt=Et;function Pt(){this.size=0,this.__data__={hash:new C,map:new(zt||B),string:new C}}function Rt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function A(e,t){var n=e.__data__;return Rt(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Vt(e){var t=A(this,e).delete(e);return this.size-=t?1:0,t}function At(e){return A(this,e).get(e)}function Dt(e){return A(this,e).has(e)}function xt(e,t){var n=A(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}function I(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}I.prototype.clear=Pt;I.prototype.delete=Vt;I.prototype.get=At;I.prototype.has=Dt;I.prototype.set=xt;var Ht="__lodash_hash_undefined__";function Qt(e){return this.__data__.set(e,Ht),this}function Gt(e){return this.__data__.has(e)}function P(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new I;++t<n;)this.add(e[t])}P.prototype.add=P.prototype.push=Qt;P.prototype.has=Gt;function Ut(e,t,n,i){for(var o=e.length,s=n+(i?1:-1);i?s--:++s<o;)if(t(e[s],s,e))return s;return-1}function Kt(e){return e!==e}function Mt(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}function Jt(e,t,n){return t===t?Mt(e,t,n):Ut(e,Kt,n)}function Wt(e,t){var n=e==null?0:e.length;return!!n&&Jt(e,t,0)>-1}function Yt(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}function Zt(e,t){return e.has(t)}var Xt=K(R,"Set");const U=Xt;function en(){}function oe(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var tn=1/0,nn=U&&1/oe(new U([,-0]))[1]==tn?function(e){return new U(e)}:en;const an=nn;var rn=200;function on(e,t,n){var i=-1,o=Wt,s=e.length,y=!0,h=[],f=h;if(n)y=!1,o=Yt;else if(s>=rn){var S=t?null:an(e);if(S)return oe(S);y=!1,o=Zt,f=new P}else f=t?[]:h;e:for(;++i<s;){var a=e[i],l=t?t(a):a;if(a=n||a!==0?a:0,y&&l===l){for(var u=f.length;u--;)if(f[u]===l)continue e;t&&f.push(l),h.push(a)}else o(f,l,n)||(f!==h&&f.push(l),h.push(a))}return h}function sn(e){return e&&e.length?on(e):[]}const ln=we({name:"RecipesList",components:{IconNature:Ce,IconFeature:$e,IconSeason:Be},data(){return{recipes:[],filteredList:[],searchValue:"",searchKeys:[{value:"title",label:"По названию"},{value:"ingredients",label:"По ингредиентам"}],selectedSearchKey:{value:"title",label:"По названию"},servings:[{value:"all",label:"Все"},{value:2,label:2},{value:4,label:4},{value:6,label:6}],selectedServings:{value:"all",label:"Все"},natureButtons:[{name:"all",title:"Все",icon:"mdi-layers-outline",color:"yellow-6"},{name:"vegetable",title:"Овощи и фрукты",icon:"mdi-food-apple",color:"green-6"},{name:"bird",title:"Птица",icon:"mdi-food-drumstick",color:"pink-2"},{name:"meat",title:"Мясо",icon:"mdi-food-steak",color:"red-4"},{name:"fish",title:"Рыба и морепродукты",icon:"mdi-fish",color:"blue-5"},{name:"dairy",title:"Молочные продукты",icon:"mdi-cheese",color:"yellow-7"},{name:"dessert",title:"Десерт",icon:"mdi-candy",color:"lime-6"}],featureButtons:[{name:"all",title:"Все",icon:"mdi-layers-outline"},{name:"fast",title:"Быстрый",icon:"mdi-clock-fast"},{name:"oven",title:"Духовка",icon:"mdi-stove"},{name:"pot",title:"Кастрюля",icon:"mdi-pot-steam-outline"},{name:"stewingdish",title:"Утятница",icon:"mdi-dome-light"},{name:"grill",title:"Гриль",icon:"mdi-grill"},{name:"toaster",title:"Мультипекарь",icon:"mdi-toaster"},{name:"afghan_cauldron",title:"Афганский казан",icon:"mdi-kettlebell"}],seasonButtons:[{name:"all",title:"Все сезоны",icon:"mdi-sun-snowflake",color:"light-green-5"},{name:"summer",title:"Лето",icon:"mdi-white-balance-sunny",color:"yellow-6"}]}},created(){this.loadRecipes()},updated(){this.recipes.length===0&&this.searchValue===""&&this.loadRecipes()},methods:{loadRecipes(){Ie().then(e=>{this.recipes=this.filteredList=e.recipes.reverse().filter(t=>t.title!=="template_title")}).catch(e=>console.error(e))},onSearchInput(){const e=this.searchValue.toLowerCase();e!==""&&this.selectedSearchKey.value==="title"&&(this.filteredList=this.searchByTitle(e)),e!==""&&this.selectedSearchKey.value==="ingredients"&&(this.filteredList=this.searchByIngredients(e))},searchByTitle(e){return this.recipes.filter(t=>t.title.toLowerCase().includes(e))},searchByIngredients(e){let t=[];return this.recipes.forEach(n=>{n.ingredients&&Object.keys(n.ingredients).forEach(i=>{i.toLowerCase().includes(e)&&t.push(n)})}),sn(t)},filterByNature(e){e.name==="all"?this.filteredList=this.recipes:this.filteredList=this.recipes.filter(t=>e.name===t.nature)},filterByFeature(e){e.name==="all"?this.filteredList=this.recipes:this.filteredList=this.recipes.filter(t=>e.name===t.feature)},filterBySeason(e){e.name==="all"?this.filteredList=this.recipes:this.filteredList=this.recipes.filter(t=>e.name===t.season)},onServingsSelect(e){e.value==="all"?this.filteredList=this.recipes:this.filteredList=this.recipes.filter(t=>t.servings===e.value)}}});const un={class:"row"},cn={class:"col-6 col-md-6 col-xs-12 column justify-start items-start content-start"},dn={class:"q-pa-xs"},hn={class:"q-pa-xs"},fn={class:"q-pa-xs"},gn={class:"col-6 col-md-6 col-xs-12"},_n={class:"row"},vn={class:"col-6"},mn={class:"col-6"},pn={class:"row justify-between q-pa-xs"},yn={class:"col-4"},Sn={class:"col-1 q-mt-lg w-50"},bn={key:0,class:"invisible"},wn={key:1,class:"row q-mt-md q-mr-sm"},Cn={class:"text-h6 q-pa-xs"};function $n(e,t,n,i,o,s){const y=k("IconNature"),h=k("IconFeature"),f=k("IconSeason"),S=k("router-link");return g(),m(j,null,[d("div",un,[d("div",cn,[d("div",dn,[(g(!0),m(j,null,F(e.natureButtons,(a,l)=>(g(),E(Q,{key:l,outline:"",class:"d-block"},{default:w(()=>[c(H,{outline:"",color:a.color,icon:a.icon,title:a.title,class:"border-gray",onClick:u=>e.filterByNature(a)},null,8,["color","icon","title","onClick"])]),_:2},1024))),128))]),d("div",hn,[(g(!0),m(j,null,F(e.featureButtons,(a,l)=>(g(),E(Q,{key:l,outline:""},{default:w(()=>[c(H,{outline:"",color:"orange-5",icon:a.icon,title:a.title,class:"border-gray",onClick:u=>e.filterByFeature(a)},null,8,["icon","title","onClick"])]),_:2},1024))),128))]),d("div",fn,[(g(!0),m(j,null,F(e.seasonButtons,(a,l)=>(g(),E(Q,{key:l,outline:""},{default:w(()=>[c(H,{outline:"",color:a.color,icon:a.icon,title:a.title,class:"border-gray",onClick:u=>e.filterBySeason(a)},null,8,["color","icon","title","onClick"])]),_:2},1024))),128))])]),d("div",gn,[d("div",_n,[d("div",vn,[c(Y,{modelValue:e.selectedSearchKey,"onUpdate:modelValue":t[0]||(t[0]=a=>e.selectedSearchKey=a),options:e.searchKeys,label:"Поиск"},null,8,["modelValue","options"])]),d("div",mn,[c(Le,{modelValue:e.searchValue,"onUpdate:modelValue":[t[1]||(t[1]=a=>e.searchValue=a),e.onSearchInput],filled:"",type:"search",hint:"Поиск"},{append:w(()=>[c(Te,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])])])])]),d("div",pn,[d("div",yn,[c(Y,{modelValue:e.selectedServings,"onUpdate:modelValue":[t[2]||(t[2]=a=>e.selectedServings=a),e.onServingsSelect],options:e.servings,label:"Порций",class:"select-servings"},null,8,["modelValue","options","onUpdate:modelValue"])]),d("div",Sn,Z(e.filteredList.length),1)]),e.filteredList.length<4?(g(),m("div",bn," Текст, чтобы блоки не скукожились. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae molestias perspiciatis beatae? Culpa nisi dolorum sed id impedit illo enim fugit molestias obcaecati esse. ")):X("",!0),e.filteredList.length>0?(g(),m("div",wn,[(g(!0),m(j,null,F(e.filteredList,a=>(g(),m("div",{key:a.id,class:"col-md-4 col-xl-3 col-xs-12"},[c(qe,{class:"my-card"},{default:w(()=>[c(Oe,null,{default:w(()=>[c(S,{to:{name:"RecipeDetails",params:{id:a.id}}},{default:w(()=>[c(Ee,{src:"/easy-recipes/recipe-images/"+a.id+".jpg",height:"200px"},null,8,["src"]),d("div",Cn,Z(a.title),1),c(y,{nature:a.nature},null,8,["nature"]),c(h,{feature:a.feature},null,8,["feature"]),c(f,{season:a.season},null,8,["season"])]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))])):X("",!0)],64)}const Bn=je(ln,[["render",$n],["__scopeId","data-v-23000e05"]]),Tn={__name:"HomeView",setup(e){return(t,n)=>(g(),E(Bn))}};export{Tn as default};