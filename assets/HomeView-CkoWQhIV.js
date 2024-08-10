import{c as oe,a as M,h as E,b as ge,r as D,w as H,n as X,s as $e,u as Ne,d as Le,e as Pe,f as ze,g as De,o as He,i as Oe,j as Ke,k as Qe,l as be,m as xe,p as Me,q as Ue,t as Ze,v as Fe,x as Ge,T as Ye,Q as We,y as _e,z as Je,A as Xe,B as et,_ as tt,C as nt,D as at,E as it,F as rt,G as se,H as V,I as Q,J as L,K as ie,L as ue,M as ce,N as Z,O,P as ke,R as lt,S as ot,U as Te,V as st}from"./index-Bp4L_lsd.js";const Se=oe({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const i=M(()=>{const s=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(c=>e[c]===!0).map(c=>`q-btn-group--${c}`).join(" ");return`q-btn-group row no-wrap${s.length!==0?" "+s:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>E("div",{class:i.value},ge(t.default))}}),Be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},de={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},je=Object.keys(de);je.forEach(e=>{de[e].regex=new RegExp(de[e].pattern)});const ut=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+je.join("")+"])|(.)","g"),Re=/[.*+?^${}()|[\]\\]/g,b="",ct={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function dt(e,t,i,s){let c,g,T,k,C,y;const o=D(null),f=D(w());function F(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}H(()=>e.type+e.autogrow,q),H(()=>e.mask,l=>{if(l!==void 0)P(f.value,!0);else{const r=I(f.value);q(),e.modelValue!==r&&t("update:modelValue",r)}}),H(()=>e.fillMask+e.reverseFillMask,()=>{o.value===!0&&P(f.value,!0)}),H(()=>e.unmaskedValue,()=>{o.value===!0&&P(f.value)});function w(){if(q(),o.value===!0){const l=$(I(e.modelValue));return e.fillMask!==!1?W(l):l}return e.modelValue}function j(l){if(l<c.length)return c.slice(-l);let r="",u=c;const n=u.indexOf(b);if(n!==-1){for(let d=l-u.length;d>0;d--)r+=b;u=u.slice(0,n)+r+u.slice(n)}return u}function q(){if(o.value=e.mask!==void 0&&e.mask.length!==0&&F(),o.value===!1){k=void 0,c="",g="";return}const l=Be[e.mask]===void 0?e.mask:Be[e.mask],r=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",u=r.replace(Re,"\\$&"),n=[],d=[],h=[];let p=e.reverseFillMask===!0,m="",v="";l.replace(ut,(x,a,S,z,A)=>{if(z!==void 0){const R=de[z];h.push(R),v=R.negate,p===!0&&(d.push("(?:"+v+"+)?("+R.pattern+"+)?(?:"+v+"+)?("+R.pattern+"+)?"),p=!1),d.push("(?:"+v+"+)?("+R.pattern+")?")}else if(S!==void 0)m="\\"+(S==="\\"?"":S),h.push(S),n.push("([^"+m+"]+)?"+m+"?");else{const R=a!==void 0?a:A;m=R==="\\"?"\\\\\\\\":R.replace(Re,"\\\\$&"),h.push(R),n.push("([^"+m+"]+)?"+m+"?")}});const U=new RegExp("^"+n.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),K=d.length-1,_=d.map((x,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+u+"*"+x):a===K?new RegExp("^"+x+"("+(v===""?".":v)+"+)?"+(e.reverseFillMask===!0?"$":u+"*")):new RegExp("^"+x));T=h,k=x=>{const a=U.exec(e.reverseFillMask===!0?x:x.slice(0,h.length+1));a!==null&&(x=a.slice(1).join(""));const S=[],z=_.length;for(let A=0,R=x;A<z;A++){const J=_[A].exec(R);if(J===null)break;R=R.slice(J.shift().length),S.push(...J)}return S.length!==0?S.join(""):x},c=h.map(x=>typeof x=="string"?x:b).join(""),g=c.split(b).join(r)}function P(l,r,u){const n=s.value,d=n.selectionEnd,h=n.value.length-d,p=I(l);r===!0&&q();const m=$(p),v=e.fillMask!==!1?W(m):m,U=f.value!==v;n.value!==v&&(n.value=v),U===!0&&(f.value=v),document.activeElement===n&&X(()=>{if(v===g){const _=e.reverseFillMask===!0?g.length:0;n.setSelectionRange(_,_,"forward");return}if(u==="insertFromPaste"&&e.reverseFillMask!==!0){const _=n.selectionEnd;let x=d-1;for(let a=C;a<=x&&a<_;a++)c[a]!==b&&x++;B.right(n,x);return}if(["deleteContentBackward","deleteContentForward"].indexOf(u)!==-1){const _=e.reverseFillMask===!0?d===0?v.length>m.length?1:0:Math.max(0,v.length-(v===g?0:Math.min(m.length,h)+1))+1:d;n.setSelectionRange(_,_,"forward");return}if(e.reverseFillMask===!0)if(U===!0){const _=Math.max(0,v.length-(v===g?0:Math.min(m.length,h+1)));_===1&&d===1?n.setSelectionRange(_,_,"forward"):B.rightReverse(n,_)}else{const _=v.length-h;n.setSelectionRange(_,_,"backward")}else if(U===!0){const _=Math.max(0,c.indexOf(b),Math.min(m.length,d)-1);B.right(n,_)}else{const _=d-1;B.right(n,_)}});const K=e.unmaskedValue===!0?I(v):v;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&i(K,!0)}function ne(l,r,u){const n=$(I(l.value));r=Math.max(0,c.indexOf(b),Math.min(n.length,r)),C=r,l.setSelectionRange(r,u,"forward")}const B={left(l,r){const u=c.slice(r-1).indexOf(b)===-1;let n=Math.max(0,r-1);for(;n>=0;n--)if(c[n]===b){r=n,u===!0&&r++;break}if(n<0&&c[r]!==void 0&&c[r]!==b)return B.right(l,0);r>=0&&l.setSelectionRange(r,r,"backward")},right(l,r){const u=l.value.length;let n=Math.min(u,r+1);for(;n<=u;n++)if(c[n]===b){r=n;break}else c[n-1]===b&&(r=n);if(n>u&&c[r-1]!==void 0&&c[r-1]!==b)return B.left(l,u);l.setSelectionRange(r,r,"forward")},leftReverse(l,r){const u=j(l.value.length);let n=Math.max(0,r-1);for(;n>=0;n--)if(u[n-1]===b){r=n;break}else if(u[n]===b&&(r=n,n===0))break;if(n<0&&u[r]!==void 0&&u[r]!==b)return B.rightReverse(l,0);r>=0&&l.setSelectionRange(r,r,"backward")},rightReverse(l,r){const u=l.value.length,n=j(u),d=n.slice(0,r+1).indexOf(b)===-1;let h=Math.min(u,r+1);for(;h<=u;h++)if(n[h-1]===b){r=h,r>0&&d===!0&&r--;break}if(h>u&&n[r-1]!==void 0&&n[r-1]!==b)return B.leftReverse(l,u);l.setSelectionRange(r,r,"forward")}};function ae(l){t("click",l),y=void 0}function Y(l){if(t("keydown",l),$e(l)===!0||l.altKey===!0)return;const r=s.value,u=r.selectionStart,n=r.selectionEnd;if(l.shiftKey||(y=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&y===void 0&&(y=r.selectionDirection==="forward"?u:n);const d=B[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),d(r,y===u?n:u),l.shiftKey){const h=r.selectionStart;r.setSelectionRange(Math.min(y,h),Math.max(y,h),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&u===n?(B.left(r,u),r.setSelectionRange(r.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&u===n&&(B.rightReverse(r,n),r.setSelectionRange(u,r.selectionEnd,"forward"))}function $(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return N(l);const r=T;let u=0,n="";for(let d=0;d<r.length;d++){const h=l[u],p=r[d];if(typeof p=="string")n+=p,h===p&&u++;else if(h!==void 0&&p.regex.test(h))n+=p.transform!==void 0?p.transform(h):h,u++;else return n}return n}function N(l){const r=T,u=c.indexOf(b);let n=l.length-1,d="";for(let h=r.length-1;h>=0&&n!==-1;h--){const p=r[h];let m=l[n];if(typeof p=="string")d=p+d,m===p&&n--;else if(m!==void 0&&p.regex.test(m))do d=(p.transform!==void 0?p.transform(m):m)+d,n--,m=l[n];while(u===h&&m!==void 0&&p.regex.test(m));else return d}return d}function I(l){return typeof l!="string"||k===void 0?typeof l=="number"?k(""+l):l:k(l)}function W(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:f,hasMask:o,moveCursorForPaste:ne,updateMaskValue:P,onMaskedKeydown:Y,onMaskedClick:ae}}function ft(e,t){function i(){const s=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(g=>{c.items.add(g)}),{files:c.files}}catch{return{files:void 0}}}return M(()=>{if(e.type==="file")return i()})}const ht=oe({name:"QInput",inheritAttrs:!1,props:{...Ne,...ct,...Le,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Pe,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:i}){const{proxy:s}=be(),{$q:c}=s,g={};let T=NaN,k,C,y=null,o;const f=D(null),F=ze(e),{innerValue:w,hasMask:j,moveCursorForPaste:q,updateMaskValue:P,onMaskedKeydown:ne,onMaskedClick:B}=dt(e,t,m,f),ae=ft(e),Y=M(()=>xe(w.value)),$=Ze(h),N=De({changeEvent:!0}),I=M(()=>e.type==="textarea"||e.autogrow===!0),W=M(()=>I.value===!0||["text","search","url","tel","password"].includes(e.type)),l=M(()=>{const a={...N.splitAttrs.listeners.value,onInput:h,onPaste:d,onChange:U,onBlur:K,onFocus:Me};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=$,j.value===!0&&(a.onKeydown=ne,a.onClick=B),e.autogrow===!0&&(a.onAnimationend=p),a}),r=M(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:F.value,...N.splitAttrs.attributes.value,id:N.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return I.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});H(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),H(()=>e.modelValue,a=>{if(j.value===!0){if(C===!0&&(C=!1,String(a)===T))return;P(a)}else w.value!==a&&(w.value=a,e.type==="number"&&g.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete g.value));e.autogrow===!0&&X(v)}),H(()=>e.autogrow,a=>{a===!0?X(v):f.value!==null&&i.rows>0&&(f.value.style.height="auto")}),H(()=>e.dense,()=>{e.autogrow===!0&&X(v)});function u(){Ue(()=>{const a=document.activeElement;f.value!==null&&f.value!==a&&(a===null||a.id!==N.targetUid.value)&&f.value.focus({preventScroll:!0})})}function n(){f.value!==null&&f.value.select()}function d(a){if(j.value===!0&&e.reverseFillMask!==!0){const S=a.target;q(S,S.selectionStart,S.selectionEnd)}t("paste",a)}function h(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const S=a.target.value;if(a.target.qComposing===!0){g.value=S;return}if(j.value===!0)P(S,!1,a.inputType);else if(m(S),W.value===!0&&a.target===document.activeElement){const{selectionStart:z,selectionEnd:A}=a.target;z!==void 0&&A!==void 0&&X(()=>{a.target===document.activeElement&&S.indexOf(a.target.value)===0&&a.target.setSelectionRange(z,A)})}e.autogrow===!0&&v()}function p(a){t("animationend",a),v()}function m(a,S){o=()=>{y=null,e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==a&&T!==a&&(T=a,S===!0&&(C=!0),t("update:modelValue",a),X(()=>{T===a&&(T=NaN)})),o=void 0},e.type==="number"&&(k=!0,g.value=a),e.debounce!==void 0?(y!==null&&clearTimeout(y),g.value=a,y=setTimeout(o,e.debounce)):o()}function v(){requestAnimationFrame(()=>{const a=f.value;if(a!==null){const S=a.parentNode.style,{scrollTop:z}=a,{overflowY:A,maxHeight:R}=c.platform.is.firefox===!0?{}:window.getComputedStyle(a),J=A!==void 0&&A!=="scroll";J===!0&&(a.style.overflowY="hidden"),S.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",J===!0&&(a.style.overflowY=parseInt(R,10)<a.scrollHeight?"auto":"hidden"),S.marginBottom="",a.scrollTop=z}})}function U(a){$(a),y!==null&&(clearTimeout(y),y=null),o!==void 0&&o(),t("change",a.target.value)}function K(a){a!==void 0&&Me(a),y!==null&&(clearTimeout(y),y=null),o!==void 0&&o(),k=!1,C=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=w.value!==void 0?w.value:"")})}function _(){return g.hasOwnProperty("value")===!0?g.value:w.value!==void 0?w.value:""}He(()=>{K()}),Oe(()=>{e.autogrow===!0&&v()}),Object.assign(N,{innerValue:w,fieldClass:M(()=>`q-${I.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:M(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:m,hasValue:Y,floatingLabel:M(()=>Y.value===!0&&(e.type!=="number"||isNaN(w.value)===!1)||xe(e.displayValue)),getControl:()=>E(I.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...r.value,...l.value,...e.type!=="file"?{value:_()}:ae.value}),getShadowControl:()=>E("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(I.value===!0?"":" text-no-wrap")},[E("span",{class:"invisible"},_()),E("span",e.shadowText)])});const x=Ke(N);return Object.assign(s,{focus:u,select:n,getNativeElement:()=>f.value}),Qe(s,"nativeEl",()=>f.value),x}}),gt={ratio:[String,Number]};function mt(e,t){return M(()=>{const i=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const vt=1.7778,yt=oe({name:"QImg",props:{...gt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:vt},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:i}){const s=D(e.initialRatio),c=mt(e,s),g=be(),{registerTimeout:T,removeTimeout:k}=Fe(),{registerTimeout:C,removeTimeout:y}=Fe(),o=M(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),f=M(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),F=[D(null),D(o.value)],w=D(0),j=D(!1),q=D(!1),P=M(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),ne=M(()=>({width:e.width,height:e.height})),B=M(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),ae=M(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function Y(){if(y(),e.loadingShowDelay===0){j.value=!0;return}C(()=>{j.value=!0},e.loadingShowDelay)}function $(){y(),j.value=!1}function N({target:n}){_e(g)===!1&&(k(),s.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,I(n,1))}function I(n,d){d===1e3||_e(g)===!0||(n.complete===!0?W(n):T(()=>{I(n,d+1)},50))}function W(n){_e(g)!==!0&&(w.value=w.value^1,F[w.value].value=null,$(),n.getAttribute("__qerror")!=="true"&&(q.value=!1),i("load",n.currentSrc||n.src))}function l(n){k(),$(),q.value=!0,F[w.value].value=f.value,F[w.value^1].value=o.value,i("error",n)}function r(n){const d=F[n].value,h={key:"img_"+n,class:B.value,style:ae.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...d};return w.value===n?Object.assign(h,{class:h.class+"current",onLoad:N,onError:l}):h.class+="loaded",E("div",{class:"q-img__container absolute-full",key:"img"+n},E("img",h))}function u(){return j.value===!1?E("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ge(t[q.value===!0?"error":"default"])):E("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[E(We,{color:e.spinnerColor,size:e.spinnerSize})])}{let n=function(){H(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,d=>{k(),q.value=!1,d===null?($(),F[w.value^1].value=o.value):Y(),F[w.value].value=d},{immediate:!0})};Ge.value===!0?Oe(n):n()}return()=>{const n=[];return c.value!==null&&n.push(E("div",{key:"filler",style:c.value})),F[0].value!==null&&n.push(r(0)),F[1].value!==null&&n.push(r(1)),n.push(E(Ye,{name:"q-transition--fade"},u)),E("div",{key:"main",class:P.value,style:ne.value,role:"img","aria-label":e.alt},n)}}}),_t=oe({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const i=M(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>E(e.tag,{class:i.value},ge(t.default))}}),kt=oe({name:"QCard",props:{...Je,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:i}}=be(),s=Xe(e,i),c=M(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>E(e.tag,{class:c.value},ge(t.default))}});var St=typeof global=="object"&&global&&global.Object===Object&&global,pt=typeof self=="object"&&self&&self.Object===Object&&self,me=St||pt||Function("return this")(),fe=me.Symbol,Ve=Object.prototype,wt=Ve.hasOwnProperty,bt=Ve.toString,re=fe?fe.toStringTag:void 0;function Ct(e){var t=wt.call(e,re),i=e[re];try{e[re]=void 0;var s=!0}catch{}var c=bt.call(e);return s&&(t?e[re]=i:delete e[re]),c}var xt=Object.prototype,Mt=xt.toString;function Ft(e){return Mt.call(e)}var Tt="[object Null]",Bt="[object Undefined]",Ee=fe?fe.toStringTag:void 0;function Rt(e){return e==null?e===void 0?Bt:Tt:Ee&&Ee in Object(e)?Ct(e):Ft(e)}function qe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Et="[object AsyncFunction]",It="[object Function]",Ot="[object GeneratorFunction]",jt="[object Proxy]";function Vt(e){if(!qe(e))return!1;var t=Rt(e);return t==It||t==Ot||t==Et||t==jt}var pe=me["__core-js_shared__"],Ie=function(){var e=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function qt(e){return!!Ie&&Ie in e}var At=Function.prototype,$t=At.toString;function Nt(e){if(e!=null){try{return $t.call(e)}catch{}try{return e+""}catch{}}return""}var Lt=/[\\^$.*+?()[\]{}|]/g,Pt=/^\[object .+?Constructor\]$/,zt=Function.prototype,Dt=Object.prototype,Ht=zt.toString,Kt=Dt.hasOwnProperty,Qt=RegExp("^"+Ht.call(Kt).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ut(e){if(!qe(e)||qt(e))return!1;var t=Vt(e)?Qt:Pt;return t.test(Nt(e))}function Zt(e,t){return e==null?void 0:e[t]}function Ce(e,t){var i=Zt(e,t);return Ut(i)?i:void 0}var le=Ce(Object,"create");function Gt(){this.__data__=le?le(null):{},this.size=0}function Yt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Wt="__lodash_hash_undefined__",Jt=Object.prototype,Xt=Jt.hasOwnProperty;function en(e){var t=this.__data__;if(le){var i=t[e];return i===Wt?void 0:i}return Xt.call(t,e)?t[e]:void 0}var tn=Object.prototype,nn=tn.hasOwnProperty;function an(e){var t=this.__data__;return le?t[e]!==void 0:nn.call(t,e)}var rn="__lodash_hash_undefined__";function ln(e,t){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=le&&t===void 0?rn:t,this}function G(e){var t=-1,i=e==null?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}G.prototype.clear=Gt;G.prototype.delete=Yt;G.prototype.get=en;G.prototype.has=an;G.prototype.set=ln;function on(){this.__data__=[],this.size=0}function sn(e,t){return e===t||e!==e&&t!==t}function ve(e,t){for(var i=e.length;i--;)if(sn(e[i][0],t))return i;return-1}var un=Array.prototype,cn=un.splice;function dn(e){var t=this.__data__,i=ve(t,e);if(i<0)return!1;var s=t.length-1;return i==s?t.pop():cn.call(t,i,1),--this.size,!0}function fn(e){var t=this.__data__,i=ve(t,e);return i<0?void 0:t[i][1]}function hn(e){return ve(this.__data__,e)>-1}function gn(e,t){var i=this.__data__,s=ve(i,e);return s<0?(++this.size,i.push([e,t])):i[s][1]=t,this}function ee(e){var t=-1,i=e==null?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}ee.prototype.clear=on;ee.prototype.delete=dn;ee.prototype.get=fn;ee.prototype.has=hn;ee.prototype.set=gn;var mn=Ce(me,"Map");function vn(){this.size=0,this.__data__={hash:new G,map:new(mn||ee),string:new G}}function yn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ye(e,t){var i=e.__data__;return yn(t)?i[typeof t=="string"?"string":"hash"]:i.map}function _n(e){var t=ye(this,e).delete(e);return this.size-=t?1:0,t}function kn(e){return ye(this,e).get(e)}function Sn(e){return ye(this,e).has(e)}function pn(e,t){var i=ye(this,e),s=i.size;return i.set(e,t),this.size+=i.size==s?0:1,this}function te(e){var t=-1,i=e==null?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}te.prototype.clear=vn;te.prototype.delete=_n;te.prototype.get=kn;te.prototype.has=Sn;te.prototype.set=pn;var wn="__lodash_hash_undefined__";function bn(e){return this.__data__.set(e,wn),this}function Cn(e){return this.__data__.has(e)}function he(e){var t=-1,i=e==null?0:e.length;for(this.__data__=new te;++t<i;)this.add(e[t])}he.prototype.add=he.prototype.push=bn;he.prototype.has=Cn;function xn(e,t,i,s){for(var c=e.length,g=i+-1;++g<c;)if(t(e[g],g,e))return g;return-1}function Mn(e){return e!==e}function Fn(e,t,i){for(var s=i-1,c=e.length;++s<c;)if(e[s]===t)return s;return-1}function Tn(e,t,i){return t===t?Fn(e,t,i):xn(e,Mn,i)}function Bn(e,t){var i=e==null?0:e.length;return!!i&&Tn(e,t,0)>-1}function Rn(e,t){return e.has(t)}var we=Ce(me,"Set");function En(){}function Ae(e){var t=-1,i=Array(e.size);return e.forEach(function(s){i[++t]=s}),i}var In=1/0,On=we&&1/Ae(new we([,-0]))[1]==In?function(e){return new we(e)}:En,jn=200;function Vn(e,t,i){var s=-1,c=Bn,g=e.length,T=!0,k=[],C=k;if(g>=jn){var y=On(e);if(y)return Ae(y);T=!1,c=Rn,C=new he}else C=k;e:for(;++s<g;){var o=e[s],f=o;if(o=o!==0?o:0,T&&f===f){for(var F=C.length;F--;)if(C[F]===f)continue e;k.push(o)}else c(C,f,i)||(C!==k&&C.push(f),k.push(o))}return k}function qn(e){return e&&e.length?Vn(e):[]}const An=et({name:"RecipesList",components:{IconNature:tt,IconFeature:nt,IconSeason:at},data(){return{recipes:[],filteredList:[],searchValue:"",searchKeys:[{value:"title",label:"По названию"},{value:"ingredients",label:"По ингредиентам"}],selectedSearchKey:{value:"title",label:"По названию"},natureButtons:[{name:"all",title:"Все",icon:"mdi-layers-outline",color:"yellow-6"},{name:"vegetable",title:"Овощи и фрукты",icon:"mdi-food-apple",color:"green-6"},{name:"bird",title:"Птица",icon:"mdi-food-drumstick",color:"pink-2"},{name:"meat",title:"Мясо",icon:"mdi-food-steak",color:"red-4"},{name:"fish",title:"Рыба и морепродукты",icon:"mdi-fish",color:"blue-5"},{name:"dairy",title:"Молочные продукты",icon:"mdi-cheese",color:"yellow-7"},{name:"dessert",title:"Десерт",icon:"mdi-candy",color:"lime-6"}],featureButtons:[{name:"all",title:"Все",icon:"mdi-layers-outline"},{name:"fast",title:"Быстрый",icon:"mdi-clock-fast"},{name:"oven",title:"Духовка",icon:"mdi-stove"},{name:"pot",title:"Кастрюля",icon:"mdi-pot-steam-outline"},{name:"stewingdish",title:"Утятница",icon:"mdi-dome-light"},{name:"grill",title:"Гриль",icon:"mdi-grill"},{name:"toaster",title:"Мультипекарь",icon:"mdi-toaster"}],seasonButtons:[{name:"all",title:"Все сезоны",icon:"mdi-sun-snowflake",color:"light-green-5"},{name:"winter",title:"Зима",icon:"mdi-snowflake",color:"light-blue-12"},{name:"spring",title:"Весна",icon:"mdi-flower-tulip",color:"green-13"},{name:"summer",title:"Лето",icon:"mdi-white-balance-sunny",color:"yellow-6"},{name:"autumn",title:"Осень",icon:"mdi-leaf-maple",color:"amber-10"}]}},created(){this.loadRecipes()},updated(){this.recipes.length===0&&this.searchValue===""&&this.loadRecipes()},methods:{loadRecipes(){it().then(e=>{this.recipes=this.filteredList=e.recipes.reverse().filter(t=>t.title!=="template_title")}).catch(e=>console.error(e))},onSearchInput(){const e=this.searchValue.toLowerCase();e!==""&&this.selectedSearchKey.value==="title"&&(this.filteredList=this.searchByTitle(e)),e!==""&&this.selectedSearchKey.value==="ingredients"&&(this.filteredList=this.searchByIngredients(e))},searchByTitle(e){return this.recipes.filter(t=>t.title.toLowerCase().includes(e))},searchByIngredients(e){let t=[];return this.recipes.forEach(i=>{i.ingredients&&Object.keys(i.ingredients).forEach(s=>{s.toLowerCase().includes(e)&&t.push(i)})}),qn(t)},filterByNature(e){e.name==="all"?this.filteredList=this.recipes:this.filteredList=this.recipes.filter(t=>e.name===t.nature)},filterByFeature(e){e.name==="all"?this.filteredList=this.recipes:this.filteredList=this.recipes.filter(t=>e.name===t.feature)},filterBySeason(e){e.name==="all"?this.filteredList=this.recipes:this.filteredList=this.recipes.filter(t=>e.name===t.season)}}}),$n={class:"row"},Nn={class:"col-6 col-md-6 col-xs-12 column justify-start items-start content-start"},Ln={class:"q-pa-xs"},Pn={class:"q-pa-xs"},zn={class:"q-pa-xs"},Dn={class:"col-6 col-md-6 col-xs-12"},Hn={class:"row"},Kn={class:"col-4 col-md-4 col-xs-4"},Qn={class:"col-8 col-md-8 col-xs-4"},Un={key:0,class:"invisible"},Zn={key:1,class:"row q-mt-md q-mr-sm"},Gn={class:"text-h6 q-pa-xs"};function Yn(e,t,i,s,c,g){const T=se("IconNature"),k=se("IconFeature"),C=se("IconSeason"),y=se("router-link");return V(),Q(ie,null,[L("div",$n,[L("div",Nn,[L("div",Ln,[(V(!0),Q(ie,null,ue(e.natureButtons,(o,f)=>(V(),ce(Se,{key:f,outline:"",class:"d-block"},{default:Z(()=>[O(ke,{outline:"",color:o.color,icon:o.icon,title:o.title,class:"border-gray",onClick:F=>e.filterByNature(o)},null,8,["color","icon","title","onClick"])]),_:2},1024))),128))]),L("div",Pn,[(V(!0),Q(ie,null,ue(e.featureButtons,(o,f)=>(V(),ce(Se,{key:f,outline:""},{default:Z(()=>[O(ke,{outline:"",color:"orange-5",icon:o.icon,title:o.title,class:"border-gray",onClick:F=>e.filterByFeature(o)},null,8,["icon","title","onClick"])]),_:2},1024))),128))]),L("div",zn,[(V(!0),Q(ie,null,ue(e.seasonButtons,(o,f)=>(V(),ce(Se,{key:f,outline:""},{default:Z(()=>[O(ke,{outline:"",color:o.color,icon:o.icon,title:o.title,class:"border-gray",onClick:F=>e.filterBySeason(o)},null,8,["color","icon","title","onClick"])]),_:2},1024))),128))])]),L("div",Dn,[L("div",Hn,[L("div",Kn,[O(lt,{modelValue:e.selectedSearchKey,"onUpdate:modelValue":t[0]||(t[0]=o=>e.selectedSearchKey=o),options:e.searchKeys,label:"Поиск"},null,8,["modelValue","options"])]),L("div",Qn,[O(ht,{modelValue:e.searchValue,"onUpdate:modelValue":[t[1]||(t[1]=o=>e.searchValue=o),e.onSearchInput],filled:"",type:"search",hint:"Поиск"},{append:Z(()=>[O(ot,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])])])])]),e.filteredList.length<4?(V(),Q("div",Un," Текст, чтобы блоки не скукожились. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae molestias perspiciatis beatae? Culpa nisi dolorum sed id impedit illo enim fugit molestias obcaecati esse. ")):Te("",!0),e.filteredList.length>0?(V(),Q("div",Zn,[(V(!0),Q(ie,null,ue(e.filteredList,o=>(V(),Q("div",{key:o.id,class:"col-md-4 col-xl-3 col-xs-12"},[O(kt,{class:"my-card"},{default:Z(()=>[O(_t,null,{default:Z(()=>[O(y,{to:{name:"RecipeDetails",params:{id:o.id}}},{default:Z(()=>[O(yt,{src:"/easy-recipes/recipe-images/"+o.id+".jpg",height:"200px"},null,8,["src"]),L("div",Gn,st(o.title),1),O(T,{nature:o.nature},null,8,["nature"]),O(k,{feature:o.feature},null,8,["feature"]),O(C,{season:o.season},null,8,["season"])]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))])):Te("",!0)],64)}const Wn=rt(An,[["render",Yn],["__scopeId","data-v-f0527b1a"]]),Xn={__name:"HomeView",setup(e){return(t,i)=>(V(),ce(Wn))}};export{Xn as default};
