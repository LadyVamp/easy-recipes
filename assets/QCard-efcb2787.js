import{r as X,w as I,$ as Z,a0 as re,a as b,c as G,a1 as ie,a2 as oe,a3 as ue,g as ae,a4 as se,a5 as J,a6 as de,a7 as p,a8 as ce,o as fe,h as $,a9 as ge,aa as me,ab as ve,ac as he,b as ne,ad as ke,ae as Me}from"./index-8b85b7ce.js";const ee={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},U={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},le=Object.keys(U);le.forEach(e=>{U[e].regex=new RegExp(U[e].pattern)});const we=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+le.join("")+"])|(.)","g"),te=/[.*+?^${}()|[\]\\]/g,h=String.fromCharCode(1),xe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ye(e,w,V,C){let d,g,T,A,B,M;const x=X(null),c=X(F());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,z),I(()=>e.mask,l=>{if(l!==void 0)j(c.value,!0);else{const a=R(c.value);z(),e.modelValue!==a&&w("update:modelValue",a)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&j(c.value,!0)}),I(()=>e.unmaskedValue,()=>{x.value===!0&&j(c.value)});function F(){if(z(),x.value===!0){const l=K(R(e.modelValue));return e.fillMask!==!1?Q(l):l}return e.modelValue}function N(l){if(l<d.length)return d.slice(-l);let a="",r=d;const n=r.indexOf(h);if(n!==-1){for(let o=l-r.length;o>0;o--)a+=h;r=r.slice(0,n)+a+r.slice(n)}return r}function z(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&H(),x.value===!1){A=void 0,d="",g="";return}const l=ee[e.mask]===void 0?e.mask:ee[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",r=a.replace(te,"\\$&"),n=[],o=[],i=[];let v=e.reverseFillMask===!0,u="",s="";l.replace(we,(k,t,m,q,E)=>{if(q!==void 0){const y=U[q];i.push(y),s=y.negate,v===!0&&(o.push("(?:"+s+"+)?("+y.pattern+"+)?(?:"+s+"+)?("+y.pattern+"+)?"),v=!1),o.push("(?:"+s+"+)?("+y.pattern+")?")}else if(m!==void 0)u="\\"+(m==="\\"?"":m),i.push(m),n.push("([^"+u+"]+)?"+u+"?");else{const y=t!==void 0?t:E;u=y==="\\"?"\\\\\\\\":y.replace(te,"\\\\$&"),i.push(y),n.push("([^"+u+"]+)?"+u+"?")}});const D=new RegExp("^"+n.join("")+"("+(u===""?".":"[^"+u+"]")+"+)?"+(u===""?"":"["+u+"]*")+"$"),P=o.length-1,f=o.map((k,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+k):t===P?new RegExp("^"+k+"("+(s===""?".":s)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+k));T=i,A=k=>{const t=D.exec(e.reverseFillMask===!0?k:k.slice(0,i.length+1));t!==null&&(k=t.slice(1).join(""));const m=[],q=f.length;for(let E=0,y=k;E<q;E++){const _=f[E].exec(y);if(_===null)break;y=y.slice(_.shift().length),m.push(..._)}return m.length!==0?m.join(""):k},d=i.map(k=>typeof k=="string"?k:h).join(""),g=d.split(h).join(a)}function j(l,a,r){const n=C.value,o=n.selectionEnd,i=n.value.length-o,v=R(l);a===!0&&z();const u=K(v),s=e.fillMask!==!1?Q(u):u,D=c.value!==s;n.value!==s&&(n.value=s),D===!0&&(c.value=s),document.activeElement===n&&Z(()=>{if(s===g){const f=e.reverseFillMask===!0?g.length:0;n.setSelectionRange(f,f,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const f=n.selectionEnd;let k=o-1;for(let t=B;t<=k&&t<f;t++)d[t]!==h&&k++;S.right(n,k);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)!==-1){const f=e.reverseFillMask===!0?o===0?s.length>u.length?1:0:Math.max(0,s.length-(s===g?0:Math.min(u.length,i)+1))+1:o;n.setSelectionRange(f,f,"forward");return}if(e.reverseFillMask===!0)if(D===!0){const f=Math.max(0,s.length-(s===g?0:Math.min(u.length,i+1)));f===1&&o===1?n.setSelectionRange(f,f,"forward"):S.rightReverse(n,f)}else{const f=s.length-i;n.setSelectionRange(f,f,"backward")}else if(D===!0){const f=Math.max(0,d.indexOf(h),Math.min(u.length,o)-1);S.right(n,f)}else{const f=o-1;S.right(n,f)}});const P=e.unmaskedValue===!0?R(s):s;String(e.modelValue)!==P&&(e.modelValue!==null||P!=="")&&V(P,!0)}function Y(l,a,r){const n=K(R(l.value));a=Math.max(0,d.indexOf(h),Math.min(n.length,a)),B=a,l.setSelectionRange(a,r,"forward")}const S={left(l,a){const r=d.slice(a-1).indexOf(h)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(d[n]===h){a=n,r===!0&&a++;break}if(n<0&&d[a]!==void 0&&d[a]!==h)return S.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const r=l.value.length;let n=Math.min(r,a+1);for(;n<=r;n++)if(d[n]===h){a=n;break}else d[n-1]===h&&(a=n);if(n>r&&d[a-1]!==void 0&&d[a-1]!==h)return S.left(l,r);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const r=N(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(r[n-1]===h){a=n;break}else if(r[n]===h&&(a=n,n===0))break;if(n<0&&r[a]!==void 0&&r[a]!==h)return S.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const r=l.value.length,n=N(r),o=n.slice(0,a+1).indexOf(h)===-1;let i=Math.min(r,a+1);for(;i<=r;i++)if(n[i-1]===h){a=i,a>0&&o===!0&&a--;break}if(i>r&&n[a-1]!==void 0&&n[a-1]!==h)return S.leftReverse(l,r);l.setSelectionRange(a,a,"forward")}};function W(l){w("click",l),M=void 0}function L(l){if(w("keydown",l),re(l)===!0||l.altKey===!0)return;const a=C.value,r=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(M=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&M===void 0&&(M=a.selectionDirection==="forward"?r:n);const o=S[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),o(a,M===r?n:r),l.shiftKey){const i=a.selectionStart;a.setSelectionRange(Math.min(M,i),Math.max(M,i),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&r===n?(S.left(a,r),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&r===n&&(S.rightReverse(a,n),a.setSelectionRange(r,a.selectionEnd,"forward"))}function K(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return O(l);const a=T;let r=0,n="";for(let o=0;o<a.length;o++){const i=l[r],v=a[o];if(typeof v=="string")n+=v,i===v&&r++;else if(i!==void 0&&v.regex.test(i))n+=v.transform!==void 0?v.transform(i):i,r++;else return n}return n}function O(l){const a=T,r=d.indexOf(h);let n=l.length-1,o="";for(let i=a.length-1;i>=0&&n!==-1;i--){const v=a[i];let u=l[n];if(typeof v=="string")o=v+o,u===v&&n--;else if(u!==void 0&&v.regex.test(u))do o=(v.transform!==void 0?v.transform(u):u)+o,n--,u=l[n];while(r===i&&u!==void 0&&v.regex.test(u));else return o}return o}function R(l){return typeof l!="string"||A===void 0?typeof l=="number"?A(""+l):l:A(l)}function Q(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:c,hasMask:x,moveCursorForPaste:Y,updateMaskValue:j,onMaskedKeydown:L,onMaskedClick:W}}function Ce(e,w){function V(){const C=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(C)===C&&("length"in C?Array.from(C):[C]).forEach(g=>{d.items.add(g)}),{files:d.files}}catch{return{files:void 0}}}return w===!0?b(()=>{if(e.type==="file")return V()}):b(V)}const be=G({name:"QInput",inheritAttrs:!1,props:{...ie,...xe,...oe,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ue,"paste","change","keydown","click","animationend"],setup(e,{emit:w,attrs:V}){const{proxy:C}=ae(),{$q:d}=C,g={};let T=NaN,A,B,M=null,x;const c=X(null),H=se(e),{innerValue:F,hasMask:N,moveCursorForPaste:z,updateMaskValue:j,onMaskedKeydown:Y,onMaskedClick:S}=ye(e,w,u,c),W=Ce(e,!0),L=b(()=>J(F.value)),K=ve(i),O=de({changeEvent:!0}),R=b(()=>e.type==="textarea"||e.autogrow===!0),Q=b(()=>R.value===!0||["text","search","url","tel","password"].includes(e.type)),l=b(()=>{const t={...O.splitAttrs.listeners.value,onInput:i,onPaste:o,onChange:D,onBlur:P,onFocus:p};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=K,N.value===!0&&(t.onKeydown=Y,t.onClick=S),e.autogrow===!0&&(t.onAnimationend=v),t}),a=b(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return R.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});I(()=>e.type,()=>{c.value&&(c.value.value=e.modelValue)}),I(()=>e.modelValue,t=>{if(N.value===!0){if(B===!0&&(B=!1,String(t)===T))return;j(t)}else F.value!==t&&(F.value=t,e.type==="number"&&g.hasOwnProperty("value")===!0&&(A===!0?A=!1:delete g.value));e.autogrow===!0&&Z(s)}),I(()=>e.autogrow,t=>{t===!0?Z(s):c.value!==null&&V.rows>0&&(c.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&Z(s)});function r(){he(()=>{const t=document.activeElement;c.value!==null&&c.value!==t&&(t===null||t.id!==O.targetUid.value)&&c.value.focus({preventScroll:!0})})}function n(){c.value!==null&&c.value.select()}function o(t){if(N.value===!0&&e.reverseFillMask!==!0){const m=t.target;z(m,m.selectionStart,m.selectionEnd)}w("paste",t)}function i(t){if(!t||!t.target)return;if(e.type==="file"){w("update:modelValue",t.target.files);return}const m=t.target.value;if(t.target.qComposing===!0){g.value=m;return}if(N.value===!0)j(m,!1,t.inputType);else if(u(m),Q.value===!0&&t.target===document.activeElement){const{selectionStart:q,selectionEnd:E}=t.target;q!==void 0&&E!==void 0&&Z(()=>{t.target===document.activeElement&&m.indexOf(t.target.value)===0&&t.target.setSelectionRange(q,E)})}e.autogrow===!0&&s()}function v(t){w("animationend",t),s()}function u(t,m){x=()=>{M=null,e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==t&&T!==t&&(T=t,m===!0&&(B=!0),w("update:modelValue",t),Z(()=>{T===t&&(T=NaN)})),x=void 0},e.type==="number"&&(A=!0,g.value=t),e.debounce!==void 0?(M!==null&&clearTimeout(M),g.value=t,M=setTimeout(x,e.debounce)):x()}function s(){requestAnimationFrame(()=>{const t=c.value;if(t!==null){const m=t.parentNode.style,{scrollTop:q}=t,{overflowY:E,maxHeight:y}=d.platform.is.firefox===!0?{}:window.getComputedStyle(t),_=E!==void 0&&E!=="scroll";_===!0&&(t.style.overflowY="hidden"),m.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",_===!0&&(t.style.overflowY=parseInt(y,10)<t.scrollHeight?"auto":"hidden"),m.marginBottom="",t.scrollTop=q}})}function D(t){K(t),M!==null&&(clearTimeout(M),M=null),x!==void 0&&x(),w("change",t.target.value)}function P(t){t!==void 0&&p(t),M!==null&&(clearTimeout(M),M=null),x!==void 0&&x(),A=!1,B=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{c.value!==null&&(c.value.value=F.value!==void 0?F.value:"")})}function f(){return g.hasOwnProperty("value")===!0?g.value:F.value!==void 0?F.value:""}ce(()=>{P()}),fe(()=>{e.autogrow===!0&&s()}),Object.assign(O,{innerValue:F,fieldClass:b(()=>`q-${R.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:c,emitValue:u,hasValue:L,floatingLabel:b(()=>L.value===!0&&(e.type!=="number"||isNaN(F.value)===!1)||J(e.displayValue)),getControl:()=>$(R.value===!0?"textarea":"input",{ref:c,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:f()}:W.value}),getShadowControl:()=>$("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(R.value===!0?"":" text-no-wrap")},[$("span",{class:"invisible"},f()),$("span",e.shadowText)])});const k=ge(O);return Object.assign(C,{focus:r,select:n,getNativeElement:()=>c.value}),me(C,"nativeEl",()=>c.value),k}}),Fe=G({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:w}){const V=b(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>$(e.tag,{class:V.value},ne(w.default))}}),Re=G({name:"QCard",props:{...ke,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:w}){const{proxy:{$q:V}}=ae(),C=Me(e,V),d=b(()=>"q-card"+(C.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>$(e.tag,{class:d.value},ne(w.default))}});export{be as Q,Fe as a,Re as b};
