import{c as F,G as J,H as M,a as R,h as W,b as G,I as H,J as X,K as Y,L as Z,P as S,M as j,N as ee,d as te,O as oe,r as m,m as h,n as k,p,x as n,t as i,R as x,S as le,U as se,z as ne,F as y,q as I,y as u,V as B,B as P,W as f,X as re,Y as ae,k as ie}from"./index-b32b1981.js";import{Q as A,b as N,a as w}from"./QCard-b28cfd4e.js";const Q=F({name:"QCardActions",props:{...J,vertical:Boolean},setup(e,{slots:t}){const o=M(e),r=R(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>W("div",{class:r.value},G(t.default))}});function U(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const g=H({name:"close-popup",beforeMount(e,{value:t}){const o={depth:U(t),handler(r){o.depth!==0&&setTimeout(()=>{const a=X(e);a!==void 0&&Y(a,r,o.depth)})},handlerKey(r){Z(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=U(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});function ue(e){const t=Object.assign({noopener:!0},e),o=[];for(const r in t){const a=t[r];a===!0?o.push(r):(ee(a)||typeof a=="string"&&a!=="")&&o.push(r+"="+a)}return o.join(",")}function $(e,t,o){let r=window.open;if(S.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)r=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(e,{openExternal:!0})}const a=r(e,"_blank",ue(o));if(a)return S.is.desktop&&a.focus(),a;t&&t()}const pe=(e,t,o)=>{if(S.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(r=>{r?window.SafariViewController.show({url:e},j,t):$(e,t,o)});return}return $(e,t,o)},z=e=>(re("data-v-fd52c628"),e=e(),ae(),e),de={class:"q-pa-md"},ce={class:"row"},ve={class:"col col-6"},me={class:"col col-6"},he=["href"],ke=["href"],fe=z(()=>p("div",{class:"text-h6"},"Добавление продукта",-1)),ge=z(()=>p("div",{class:"text-h6"},"Удалить список?",-1)),_e=te({__name:"ShoppingListView",setup(e){const{selectedShop1:t}=oe(),o=m(""),r=m(!1),a=m(!1),d=m(""),c=m(JSON.parse(localStorage.getItem("shoppingList")||"[]")||[]),K=m([{value:"vkusvill",label:"Вкусвилл",link:"https://vkusvill.ru/search/?type=products&q=ingredient"},{value:"ozonfresh",label:"Ozon Fresh",link:"https://www.ozon.ru/category/supermarket-25000/?miniapp=supermarket&text=ingredient"},{value:"vprok",label:"Впрок",link:"https://www.vprok.ru/catalog/search?text=ingredient"},{value:"lenta",label:"Лента",link:"https://moscow.lenta.com/search/ingredient"},{value:"multisearch",label:"Купер Все магазины",link:"https://kuper.ru/multisearch?q=ingredient"},{value:"auchan",label:"Купер Ашан",link:"https://kuper.ru/auchan/search?keywords=ingredient&sort=unit_price_asc"},{value:"lentagp",label:"Купер Лента",link:"https://kuper.ru/lentagp/search?keywords=ingredient&sort=unit_price_asc"},{value:"globusgiper",label:"Купер Глобус",link:"https://kuper.ru/globusgiper/search?keywords=ingredient&sort=unit_price_asc"},{value:"okey",label:"Купер Окей",link:"https://kuper.ru/okey/search?keywords=ingredient&sort=unit_price_asc"},{value:"perekrestok",label:"Купер Перекресток",link:"https://kuper.ru/perekrestok/search?keywords=ingredient&sort=unit_price_asc"},{value:"perekrestokvprok",label:"Купер Перекресток Впрок",link:"https://kuper.ru/perekrestokvprok/search?keywords=ingredient&sort=unit_price_asc"},{value:"metro",label:"Купер Metro",link:"https://kuper.ru/metro/search?keywords=ingredient&sort=unit_price_asc"},{value:"vkusvill_darkstore",label:"Купер Вкусвилл",link:"https://kuper.ru/vkusvill_darkstore/search?keywords=ingredient&sort=unit_price_asc"}]),D=m(["Яблоки","Груши","Йогурт греческий","Йогурт термостатный","Яйцо куриное СО","Хлеб зерновой"]);function b(v){var l;return t.value.value==="multisearch"?"https://kuper.ru/multisearch?q="+v.trim():(l=t.value.link)==null?void 0:l.replace("ingredient",v.trim())}function E(){return t.value.value==="multisearch"?"https://kuper.ru/multisearch?q="+o.value.trim():t.value.link.replace("ingredient",o.value.trim())}function C(){pe(E())}function V(){d.value=d.value.trim(),d.value.length>0&&(c.value.push(d.value),localStorage.setItem("shoppingList",JSON.stringify(c.value)))}function O(v){c.value=c.value.filter(l=>l!==v),localStorage.setItem("shoppingList",JSON.stringify(c.value))}function q(v){navigator.clipboard.writeText(v)}function T(){localStorage.setItem("shoppingList","[]"),c.value=[]}return(v,l)=>(h(),k(y,null,[p("div",de,[p("div",ce,[p("div",ve,[n(A,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=s=>o.value=s),filled:"",type:"search",hint:"Поиск в магазине",onKeyup:x(C,["enter"])},{append:i(()=>[n(u,{color:"secondary","icon-right":"search",disable:o.value==="",onClick:C},null,8,["disable"])]),_:1},8,["modelValue"]),n(ne,{modelValue:le(t),"onUpdate:modelValue":l[1]||(l[1]=s=>se(t)?t.value=s:null),options:K.value,label:"Магазин",class:"q-select"},null,8,["modelValue","options"])]),p("div",me,[(h(!0),k(y,null,I(D.value,(s,_)=>(h(),k("ul",{key:_,class:"q-pl-md q-ma-none"},[p("a",{href:b(s),target:"_blank"},P(s),9,he),n(u,{flat:"",round:"",color:"secondary",icon:"mdi-content-copy",size:"sm",title:"Скопировать",onClick:L=>q(s)},null,8,["onClick"])]))),128)),n(u,{icon:"mdi-plus",color:"primary",class:"q-ml-md q-my-md",onClick:l[2]||(l[2]=s=>r.value=!0)}),n(u,{icon:"mdi-delete",color:"negative",class:"q-ml-md q-my-md",onClick:l[3]||(l[3]=s=>a.value=!0)}),(h(!0),k(y,null,I(c.value,(s,_)=>(h(),k("ul",{key:_,class:"q-pl-md q-ma-none"},[p("a",{href:b(s),target:"_blank"},P(s),9,ke),n(u,{flat:"",round:"",color:"secondary",icon:"mdi-content-copy",size:"sm",title:"Скопировать",onClick:L=>q(s)},null,8,["onClick"]),n(u,{flat:"",round:"",color:"orange-5",icon:"mdi-minus",size:"sm",class:"border-gray",onClick:L=>O(s)},null,8,["onClick"])]))),128))])])]),n(B,{modelValue:r.value,"onUpdate:modelValue":l[6]||(l[6]=s=>r.value=s),persistent:"",onBeforeShow:l[7]||(l[7]=s=>d.value="")},{default:i(()=>[n(N,{style:{"min-width":"350px"}},{default:i(()=>[n(w,null,{default:i(()=>[fe]),_:1}),n(w,{class:"q-pt-none"},{default:i(()=>[n(A,{modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=s=>d.value=s),dense:"",autofocus:"",onKeyup:l[5]||(l[5]=x(s=>{V(),r.value=!1},["enter"]))},null,8,["modelValue"])]),_:1}),n(Q,{align:"right",class:"text-primary"},{default:i(()=>[f(n(u,{flat:"",label:"Отмена"},null,512),[[g]]),f(n(u,{color:"primary",label:"Добавить",onClick:V},null,512),[[g]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(B,{modelValue:a.value,"onUpdate:modelValue":l[8]||(l[8]=s=>a.value=s),persistent:""},{default:i(()=>[n(N,{style:{"min-width":"350px"}},{default:i(()=>[n(w,null,{default:i(()=>[ge]),_:1}),n(Q,{align:"right",class:"text-primary"},{default:i(()=>[f(n(u,{flat:"",label:"Отмена"},null,512),[[g]]),f(n(u,{color:"negative",label:"Удалить",onClick:T},null,512),[[g]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});const Se=ie(_e,[["__scopeId","data-v-fd52c628"]]);export{Se as default};
