(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const Ln=!1;var Ea=Array.isArray,fs=Array.prototype.indexOf,Ke=Array.prototype.includes,On=Array.from,vs=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,ya=Object.getOwnPropertyDescriptors,ps=Object.prototype,ms=Array.prototype,Zn=Object.getPrototypeOf,oa=Object.isExtensible;function hs(e){return e()}function jn(e){for(var n=0;n<e.length;n++)e[n]()}function Aa(){var e,n,a=new Promise((s,t)=>{e=s,n=t});return{promise:a,resolve:e,reject:n}}const F=2,wn=4,pn=8,Sa=1<<24,we=16,de=32,Ve=64,Jn=128,re=512,U=1024,Y=2048,me=4096,ne=8192,Oe=16384,Xn=32768,We=65536,la=1<<17,wa=1<<18,nn=1<<19,Ta=1<<20,Ee=1<<25,Ue=32768,Bn=1<<21,ea=1<<22,xe=1<<23,Ye=Symbol("$state"),_s=Symbol(""),$e=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Na(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function gs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function bs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Es(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ys(e){throw new Error("https://svelte.dev/e/effect_orphan")}function As(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ss(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ws(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ts(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ns(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const qs=1,Cs=2,qa=4,Os=8,xs=16,Rs=1,Is=2,H=Symbol(),Ds="http://www.w3.org/1999/xhtml";function zs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ca(e){return e===this.v}function Ps(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Oa(e){return!Ps(e,this.v)}let mn=!1,ks=!1;function Ms(){mn=!0}let k=null;function Ze(e){k=e}function hn(e,n=!1,a){k={p:k,i:!1,c:null,e:null,s:e,x:null,l:mn&&!n?{s:null,u:null,$:[]}:null}}function _n(e){var n=k,a=n.e;if(a!==null){n.e=null;for(var s of a)Ka(s)}return n.i=!0,k=n.p,{}}function gn(){return!mn||k!==null&&k.l===null}let Pe=[];function xa(){var e=Pe;Pe=[],jn(e)}function ye(e){if(Pe.length===0&&!fn){var n=Pe;queueMicrotask(()=>{n===Pe&&xa()})}Pe.push(e)}function Ls(){for(;Pe.length>0;)xa()}function Ra(e){var n=O;if(n===null)return w.f|=xe,e;if((n.f&Xn)===0){if((n.f&Jn)===0)throw e;n.b.error(e)}else Je(e,n)}function Je(e,n){for(;n!==null;){if((n.f&Jn)!==0)try{n.b.error(e);return}catch(a){e=a}n=n.parent}throw e}const js=-7169;function j(e,n){e.f=e.f&js|n}function na(e){(e.f&re)!==0||e.deps===null?j(e,U):j(e,me)}function Ia(e){if(e!==null)for(const n of e)(n.f&F)===0||(n.f&Ue)===0||(n.f^=Ue,Ia(n.deps))}function Da(e,n,a){(e.f&Y)!==0?n.add(e):(e.f&me)!==0&&a.add(e),Ia(e.deps),j(e,U)}const yn=new Set;let C=null,Un=null,ce=null,ee=[],xn=null,Hn=!1,fn=!1;class Re{committed=!1;current=new Map;previous=new Map;#n=new Set;#i=new Set;#e=0;#t=0;#r=null;#s=new Set;#a=new Set;skipped_effects=new Set;is_fork=!1;#o=!1;is_deferred(){return this.is_fork||this.#t>0}process(n){ee=[],this.apply();var a=[],s=[];for(const t of n)this.#l(t,a,s);if(this.is_deferred()){this.#c(s),this.#c(a);for(const t of this.skipped_effects)Ma(t)}else{for(const t of this.#n)t();this.#n.clear(),this.#e===0&&this.#u(),Un=this,C=null,ca(s),ca(a),Un=null,this.#r?.resolve()}ce=null}#l(n,a,s){n.f^=U;for(var t=n.first,r=null;t!==null;){var i=t.f,o=(i&(de|Ve))!==0,l=o&&(i&U)!==0,c=l||(i&ne)!==0||this.skipped_effects.has(t);if(!c&&t.fn!==null){o?t.f^=U:r!==null&&(i&(wn|pn|Sa))!==0?r.b.defer_effect(t):(i&wn)!==0?a.push(t):an(t)&&((i&we)!==0&&this.#a.add(t),en(t));var u=t.first;if(u!==null){t=u;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)f===r&&(r=null),t=f.next,f=f.parent}}#c(n){for(var a=0;a<n.length;a+=1)Da(n[a],this.#s,this.#a)}capture(n,a){a!==H&&!this.previous.has(n)&&this.previous.set(n,a),(n.f&xe)===0&&(this.current.set(n,n.v),ce?.set(n,n.v))}activate(){C=this,this.apply()}deactivate(){C===this&&(C=null,ce=null)}flush(){if(this.activate(),ee.length>0){if(za(),C!==null&&C!==this)return}else this.#e===0&&this.process([]);this.deactivate()}discard(){for(const n of this.#i)n(this);this.#i.clear()}#u(){if(yn.size>1){this.previous.clear();var n=ce,a=!0;for(const t of yn){if(t===this){a=!1;continue}const r=[];for(const[o,l]of this.current){if(t.current.has(o))if(a&&l!==t.current.get(o))t.current.set(o,l);else continue;r.push(o)}if(r.length===0)continue;const i=[...t.current.keys()].filter(o=>!this.current.has(o));if(i.length>0){var s=ee;ee=[];const o=new Set,l=new Map;for(const c of r)Pa(c,i,o,l);if(ee.length>0){C=t,t.apply();for(const c of ee)t.#l(c,[],[]);t.deactivate()}ee=s}}C=null,ce=n}this.committed=!0,yn.delete(this)}increment(n){this.#e+=1,n&&(this.#t+=1)}decrement(n){this.#e-=1,n&&(this.#t-=1),!this.#o&&(this.#o=!0,ye(()=>{this.#o=!1,this.is_deferred()?ee.length>0&&this.flush():this.revive()}))}revive(){for(const n of this.#s)this.#a.delete(n),j(n,Y),Se(n);for(const n of this.#a)j(n,me),Se(n);this.flush()}oncommit(n){this.#n.add(n)}ondiscard(n){this.#i.add(n)}settled(){return(this.#r??=Aa()).promise}static ensure(){if(C===null){const n=C=new Re;yn.add(C),fn||ye(()=>{C===n&&n.flush()})}return C}apply(){}}function Bs(e){var n=fn;fn=!0;try{for(var a;;){if(Ls(),ee.length===0&&(C?.flush(),ee.length===0))return xn=null,a;za()}}finally{fn=n}}function za(){Hn=!0;var e=null;try{for(var n=0;ee.length>0;){var a=Re.ensure();if(n++>1e3){var s,t;Us()}a.process(ee),Ie.clear()}}finally{Hn=!1,xn=null}}function Us(){try{As()}catch(e){Je(e,xn)}}let be=null;function ca(e){var n=e.length;if(n!==0){for(var a=0;a<n;){var s=e[a++];if((s.f&(Oe|ne))===0&&an(s)&&(be=new Set,en(s),s.deps===null&&s.first===null&&s.nodes===null&&(s.teardown===null&&s.ac===null?Ja(s):s.fn=null),be?.size>0)){Ie.clear();for(const t of be){if((t.f&(Oe|ne))!==0)continue;const r=[t];let i=t.parent;for(;i!==null;)be.has(i)&&(be.delete(i),r.push(i)),i=i.parent;for(let o=r.length-1;o>=0;o--){const l=r[o];(l.f&(Oe|ne))===0&&en(l)}}be.clear()}}be=null}}function Pa(e,n,a,s){if(!a.has(e)&&(a.add(e),e.reactions!==null))for(const t of e.reactions){const r=t.f;(r&F)!==0?Pa(t,n,a,s):(r&(ea|we))!==0&&(r&Y)===0&&ka(t,n,s)&&(j(t,Y),Se(t))}}function ka(e,n,a){const s=a.get(e);if(s!==void 0)return s;if(e.deps!==null)for(const t of e.deps){if(Ke.call(n,t))return!0;if((t.f&F)!==0&&ka(t,n,a))return a.set(t,!0),!0}return a.set(e,!1),!1}function Se(e){for(var n=xn=e;n.parent!==null;){n=n.parent;var a=n.f;if(Hn&&n===O&&(a&we)!==0&&(a&wa)===0)return;if((a&(Ve|de))!==0){if((a&U)===0)return;n.f^=U}}ee.push(n)}function Ma(e){if(!((e.f&de)!==0&&(e.f&U)!==0)){j(e,U);for(var n=e.first;n!==null;)Ma(n),n=n.next}}function Hs(e){let n=0,a=He(0),s;return()=>{sa()&&(v(a),En(()=>(n===0&&(s=te(()=>e(()=>vn(a)))),n+=1,()=>{ye(()=>{n-=1,n===0&&(s?.(),s=void 0,vn(a))})})))}}var Fs=We|nn|Jn;function Vs(e,n,a){new Gs(e,n,a)}class Gs{parent;is_pending=!1;#n;#i=null;#e;#t;#r;#s=null;#a=null;#o=null;#l=null;#c=null;#u=0;#f=0;#p=!1;#v=!1;#m=new Set;#h=new Set;#d=null;#y=Hs(()=>(this.#d=He(this.#u),()=>{this.#d=null}));constructor(n,a,s){this.#n=n,this.#e=a,this.#t=s,this.parent=O.b,this.is_pending=!!this.#e.pending,this.#r=ta(()=>{O.b=this;{var t=this.#b();try{this.#s=se(()=>s(t))}catch(r){this.error(r)}this.#f>0?this.#g():this.is_pending=!1}return()=>{this.#c?.remove()}},Fs)}#A(){try{this.#s=se(()=>this.#t(this.#n))}catch(n){this.error(n)}}#S(){const n=this.#e.pending;n&&(this.#a=se(()=>n(this.#n)),ye(()=>{var a=this.#b();this.#s=this.#_(()=>(Re.ensure(),se(()=>this.#t(a)))),this.#f>0?this.#g():(je(this.#a,()=>{this.#a=null}),this.is_pending=!1)}))}#b(){var n=this.#n;return this.is_pending&&(this.#c=Ae(),this.#n.before(this.#c),n=this.#c),n}defer_effect(n){Da(n,this.#m,this.#h)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#_(n){var a=O,s=w,t=k;pe(this.#r),oe(this.#r),Ze(this.#r.ctx);try{return n()}catch(r){return Ra(r),null}finally{pe(a),oe(s),Ze(t)}}#g(){const n=this.#e.pending;this.#s!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#c),ns(this.#s,this.#l)),this.#a===null&&(this.#a=se(()=>n(this.#n)))}#E(n){if(!this.has_pending_snippet()){this.parent&&this.parent.#E(n);return}if(this.#f+=n,this.#f===0){this.is_pending=!1;for(const a of this.#m)j(a,Y),Se(a);for(const a of this.#h)j(a,me),Se(a);this.#m.clear(),this.#h.clear(),this.#a&&je(this.#a,()=>{this.#a=null}),this.#l&&(this.#n.before(this.#l),this.#l=null)}}update_pending_count(n){this.#E(n),this.#u+=n,!(!this.#d||this.#p)&&(this.#p=!0,ye(()=>{this.#p=!1,this.#d&&Xe(this.#d,this.#u)}))}get_effect_pending(){return this.#y(),v(this.#d)}error(n){var a=this.#e.onerror;let s=this.#e.failed;if(this.#v||!a&&!s)throw n;this.#s&&(Z(this.#s),this.#s=null),this.#a&&(Z(this.#a),this.#a=null),this.#o&&(Z(this.#o),this.#o=null);var t=!1,r=!1;const i=()=>{if(t){zs();return}t=!0,r&&Ns(),Re.ensure(),this.#u=0,this.#o!==null&&je(this.#o,()=>{this.#o=null}),this.is_pending=this.has_pending_snippet(),this.#s=this.#_(()=>(this.#v=!1,se(()=>this.#t(this.#n)))),this.#f>0?this.#g():this.is_pending=!1};ye(()=>{try{r=!0,a?.(n,i),r=!1}catch(o){Je(o,this.#r&&this.#r.parent)}s&&(this.#o=this.#_(()=>{Re.ensure(),this.#v=!0;try{return se(()=>{s(this.#n,()=>n,()=>i)})}catch(o){return Je(o,this.#r.parent),null}finally{this.#v=!1}}))})}}function Qs(e,n,a,s){const t=gn()?Rn:La;var r=e.filter(d=>!d.settled);if(a.length===0&&r.length===0){s(n.map(t));return}var i=C,o=O,l=$s(),c=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(d=>d.promise)):null;function u(d){l();try{s(d)}catch(h){(o.f&Oe)===0&&Je(h,o)}i?.deactivate(),Fn()}if(a.length===0){c.then(()=>u(n.map(t)));return}function f(){l(),Promise.all(a.map(d=>Ys(d))).then(d=>u([...n.map(t),...d])).catch(d=>Je(d,o))}c?c.then(f):f()}function $s(){var e=O,n=w,a=k,s=C;return function(r=!0){pe(e),oe(n),Ze(a),r&&s?.activate()}}function Fn(){pe(null),oe(null),Ze(null)}function Rn(e){var n=F|Y,a=w!==null&&(w.f&F)!==0?w:null;return O!==null&&(O.f|=nn),{ctx:k,deps:null,effects:null,equals:Ca,f:n,fn:e,reactions:null,rv:0,v:H,wv:0,parent:a??O,ac:null}}function Ys(e,n,a){let s=O;s===null&&gs();var t=s.b,r=void 0,i=He(H),o=!w,l=new Map;return lt(()=>{var c=Aa();r=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject).then(()=>{u===C&&u.committed&&u.deactivate(),Fn()})}catch(h){c.reject(h),Fn()}var u=C;if(o){var f=t.is_rendered();t.update_pending_count(1),u.increment(f),l.get(u)?.reject($e),l.delete(u),l.set(u,c)}const d=(h,g=void 0)=>{if(u.activate(),g)g!==$e&&(i.f|=xe,Xe(i,g));else{(i.f&xe)!==0&&(i.f^=xe),Xe(i,h);for(const[E,m]of l){if(l.delete(E),E===u)break;m.reject($e)}}o&&(t.update_pending_count(-1),u.decrement(f))};c.promise.then(d,h=>d(null,h||"unknown"))}),Ya(()=>{for(const c of l.values())c.reject($e)}),new Promise(c=>{function u(f){function d(){f===r?c(i):u(r)}f.then(d,d)}u(r)})}function Ks(e){const n=Rn(e);return as(n),n}function La(e){const n=Rn(e);return n.equals=Oa,n}function ja(e){var n=e.effects;if(n!==null){e.effects=null;for(var a=0;a<n.length;a+=1)Z(n[a])}}function Ws(e){for(var n=e.parent;n!==null;){if((n.f&F)===0)return(n.f&Oe)===0?n:null;n=n.parent}return null}function aa(e){var n,a=O;pe(Ws(e));try{e.f&=~Ue,ja(e),n=is(e)}finally{pe(a)}return n}function Ba(e){var n=aa(e);if(!e.equals(n)&&(e.wv=ts(),(!C?.is_fork||e.deps===null)&&(e.v=n,e.deps===null))){j(e,U);return}Fe||(ce!==null?(sa()||C?.is_fork)&&ce.set(e,n):na(e))}let Vn=new Set;const Ie=new Map;let Ua=!1;function He(e,n){var a={f:0,v:e,reactions:null,equals:Ca,rv:0,wv:0};return a}function G(e,n){const a=He(e);return as(a),a}function ke(e,n=!1,a=!0){const s=He(e);return n||(s.equals=Oa),mn&&a&&k!==null&&k.l!==null&&(k.l.s??=[]).push(s),s}function R(e,n,a=!1){w!==null&&(!ue||(w.f&la)!==0)&&gn()&&(w.f&(F|we|ea|la))!==0&&(ie===null||!Ke.call(ie,e))&&Ts();let s=a?Me(n):n;return Xe(e,s)}function Xe(e,n){if(!e.equals(n)){var a=e.v;Fe?Ie.set(e,n):Ie.set(e,a),e.v=n;var s=Re.ensure();if(s.capture(e,a),(e.f&F)!==0){const t=e;(e.f&Y)!==0&&aa(t),na(t)}e.wv=ts(),Ha(e,Y),gn()&&O!==null&&(O.f&U)!==0&&(O.f&(de|Ve))===0&&(ae===null?dt([e]):ae.push(e)),!s.is_fork&&Vn.size>0&&!Ua&&Zs()}return n}function Zs(){Ua=!1;for(const e of Vn)(e.f&U)!==0&&j(e,me),an(e)&&en(e);Vn.clear()}function vn(e){R(e,e.v+1)}function Ha(e,n){var a=e.reactions;if(a!==null)for(var s=gn(),t=a.length,r=0;r<t;r++){var i=a[r],o=i.f;if(!(!s&&i===O)){var l=(o&Y)===0;if(l&&j(i,n),(o&F)!==0){var c=i;ce?.delete(c),(o&Ue)===0&&(o&re&&(i.f|=Ue),Ha(c,me))}else l&&((o&we)!==0&&be!==null&&be.add(i),Se(i))}}}function Me(e){if(typeof e!="object"||e===null||Ye in e)return e;const n=Zn(e);if(n!==ps&&n!==ms)return e;var a=new Map,s=Ea(e),t=G(0),r=Be,i=o=>{if(Be===r)return o();var l=w,c=Be;oe(null),va(r);var u=o();return oe(l),va(c),u};return s&&a.set("length",G(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Ss();var u=a.get(l);return u===void 0?u=i(()=>{var f=G(c.value);return a.set(l,f),f}):R(u,c.value,!0),!0},deleteProperty(o,l){var c=a.get(l);if(c===void 0){if(l in o){const u=i(()=>G(H));a.set(l,u),vn(t)}}else R(c,H),vn(t);return!0},get(o,l,c){if(l===Ye)return e;var u=a.get(l),f=l in o;if(u===void 0&&(!f||dn(o,l)?.writable)&&(u=i(()=>{var h=Me(f?o[l]:H),g=G(h);return g}),a.set(l,u)),u!==void 0){var d=v(u);return d===H?void 0:d}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=a.get(l);u&&(c.value=v(u))}else if(c===void 0){var f=a.get(l),d=f?.v;if(f!==void 0&&d!==H)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(o,l){if(l===Ye)return!0;var c=a.get(l),u=c!==void 0&&c.v!==H||Reflect.has(o,l);if(c!==void 0||O!==null&&(!u||dn(o,l)?.writable)){c===void 0&&(c=i(()=>{var d=u?Me(o[l]):H,h=G(d);return h}),a.set(l,c));var f=v(c);if(f===H)return!1}return u},set(o,l,c,u){var f=a.get(l),d=l in o;if(s&&l==="length")for(var h=c;h<f.v;h+=1){var g=a.get(h+"");g!==void 0?R(g,H):h in o&&(g=i(()=>G(H)),a.set(h+"",g))}if(f===void 0)(!d||dn(o,l)?.writable)&&(f=i(()=>G(void 0)),R(f,Me(c)),a.set(l,f));else{d=f.v!==H;var E=i(()=>Me(c));R(f,E)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m?.set&&m.set.call(u,c),!d){if(s&&typeof l=="string"){var b=a.get("length"),x=Number(l);Number.isInteger(x)&&x>=b.v&&R(b,x+1)}vn(t)}return!0},ownKeys(o){v(t);var l=Reflect.ownKeys(o).filter(f=>{var d=a.get(f);return d===void 0||d.v!==H});for(var[c,u]of a)u.v!==H&&!(c in o)&&l.push(c);return l},setPrototypeOf(){ws()}})}var ua,Fa,Va,Ga;function Js(){if(ua===void 0){ua=window,Fa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,a=Text.prototype;Va=dn(n,"firstChild").get,Ga=dn(n,"nextSibling").get,oa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),oa(a)&&(a.__t=void 0)}}function Ae(e=""){return document.createTextNode(e)}function Tn(e){return Va.call(e)}function bn(e){return Ga.call(e)}function p(e,n){return Tn(e)}function Nn(e,n=!1){{var a=Tn(e);return a instanceof Comment&&a.data===""?bn(a):a}}function _(e,n=1,a=!1){let s=e;for(;n--;)s=bn(s);return s}function Xs(e){e.textContent=""}function Qa(){return!1}let da=!1;function et(){da||(da=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const n of e.target.elements)n.__on_r?.()})},{capture:!0}))}function In(e){var n=w,a=O;oe(null),pe(null);try{return e()}finally{oe(n),pe(a)}}function nt(e,n,a,s=a){e.addEventListener(n,()=>In(a));const t=e.__on_r;t?e.__on_r=()=>{t(),s(!0)}:e.__on_r=()=>s(!0),et()}function $a(e){O===null&&(w===null&&ys(),Es()),Fe&&bs()}function at(e,n){var a=n.last;a===null?n.last=n.first=e:(a.next=e,e.prev=a,n.last=e)}function he(e,n,a){var s=O;s!==null&&(s.f&ne)!==0&&(e|=ne);var t={ctx:k,deps:null,nodes:null,f:e|Y|re,first:null,fn:n,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,wv:0,ac:null};if(a)try{en(t),t.f|=Xn}catch(o){throw Z(t),o}else n!==null&&Se(t);var r=t;if(a&&r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&nn)===0&&(r=r.first,(e&we)!==0&&(e&We)!==0&&r!==null&&(r.f|=We)),r!==null&&(r.parent=s,s!==null&&at(r,s),w!==null&&(w.f&F)!==0&&(e&Ve)===0)){var i=w;(i.effects??=[]).push(r)}return t}function sa(){return w!==null&&!ue}function Ya(e){const n=he(pn,null,!1);return j(n,U),n.teardown=e,n}function Gn(e){$a();var n=O.f,a=!w&&(n&de)!==0&&(n&Xn)===0;if(a){var s=k;(s.e??=[]).push(e)}else return Ka(e)}function Ka(e){return he(wn|Ta,e,!1)}function st(e){return $a(),he(pn|Ta,e,!0)}function tt(e){Re.ensure();const n=he(Ve|nn,e,!0);return(a={})=>new Promise(s=>{a.outro?je(n,()=>{Z(n),s(void 0)}):(Z(n),s(void 0))})}function rt(e){return he(wn,e,!1)}function it(e,n){var a=k,s={effect:null,ran:!1,deps:e};a.l.$.push(s),s.effect=En(()=>{e(),!s.ran&&(s.ran=!0,te(n))})}function ot(){var e=k;En(()=>{for(var n of e.l.$){n.deps();var a=n.effect;(a.f&U)!==0&&a.deps!==null&&j(a,me),an(a)&&en(a),n.ran=!1}})}function lt(e){return he(ea|nn,e,!0)}function En(e,n=0){return he(pn|n,e,!0)}function L(e,n=[],a=[],s=[]){Qs(s,n,a,t=>{he(pn,()=>e(...t.map(v)),!0)})}function ta(e,n=0){var a=he(we|n,e,!0);return a}function se(e){return he(de|nn,e,!0)}function Wa(e){var n=e.teardown;if(n!==null){const a=Fe,s=w;fa(!0),oe(null);try{n.call(null)}finally{fa(a),oe(s)}}}function Za(e,n=!1){var a=e.first;for(e.first=e.last=null;a!==null;){const t=a.ac;t!==null&&In(()=>{t.abort($e)});var s=a.next;(a.f&Ve)!==0?a.parent=null:Z(a,n),a=s}}function ct(e){for(var n=e.first;n!==null;){var a=n.next;(n.f&de)===0&&Z(n),n=a}}function Z(e,n=!0){var a=!1;(n||(e.f&wa)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(ut(e.nodes.start,e.nodes.end),a=!0),Za(e,n&&!a),qn(e,0),j(e,Oe);var s=e.nodes&&e.nodes.t;if(s!==null)for(const r of s)r.stop();Wa(e);var t=e.parent;t!==null&&t.first!==null&&Ja(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function ut(e,n){for(;e!==null;){var a=e===n?null:bn(e);e.remove(),e=a}}function Ja(e){var n=e.parent,a=e.prev,s=e.next;a!==null&&(a.next=s),s!==null&&(s.prev=a),n!==null&&(n.first===e&&(n.first=s),n.last===e&&(n.last=a))}function je(e,n,a=!0){var s=[];Xa(e,s,!0);var t=()=>{a&&Z(e),n&&n()},r=s.length;if(r>0){var i=()=>--r||t();for(var o of s)o.out(i)}else t()}function Xa(e,n,a){if((e.f&ne)===0){e.f^=ne;var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||a)&&n.push(o);for(var t=e.first;t!==null;){var r=t.next,i=(t.f&We)!==0||(t.f&de)!==0&&(e.f&we)!==0;Xa(t,n,i?a:!1),t=r}}}function ra(e){es(e,!0)}function es(e,n){if((e.f&ne)!==0){e.f^=ne,(e.f&U)===0&&(j(e,Y),Se(e));for(var a=e.first;a!==null;){var s=a.next,t=(a.f&We)!==0||(a.f&de)!==0;es(a,t?n:!1),a=s}var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)(i.is_global||n)&&i.in()}}function ns(e,n){if(e.nodes)for(var a=e.nodes.start,s=e.nodes.end;a!==null;){var t=a===s?null:bn(a);n.append(a),a=t}}let Sn=!1,Fe=!1;function fa(e){Fe=e}let w=null,ue=!1;function oe(e){w=e}let O=null;function pe(e){O=e}let ie=null;function as(e){w!==null&&(ie===null?ie=[e]:ie.push(e))}let W=null,X=0,ae=null;function dt(e){ae=e}let ss=1,Le=0,Be=Le;function va(e){Be=e}function ts(){return++ss}function an(e){var n=e.f;if((n&Y)!==0)return!0;if(n&F&&(e.f&=~Ue),(n&me)!==0){for(var a=e.deps,s=a.length,t=0;t<s;t++){var r=a[t];if(an(r)&&Ba(r),r.wv>e.wv)return!0}(n&re)!==0&&ce===null&&j(e,U)}return!1}function rs(e,n,a=!0){var s=e.reactions;if(s!==null&&!(ie!==null&&Ke.call(ie,e)))for(var t=0;t<s.length;t++){var r=s[t];(r.f&F)!==0?rs(r,n,!1):n===r&&(a?j(r,Y):(r.f&U)!==0&&j(r,me),Se(r))}}function is(e){var n=W,a=X,s=ae,t=w,r=ie,i=k,o=ue,l=Be,c=e.f;W=null,X=0,ae=null,w=(c&(de|Ve))===0?e:null,ie=null,Ze(e.ctx),ue=!1,Be=++Le,e.ac!==null&&(In(()=>{e.ac.abort($e)}),e.ac=null);try{e.f|=Bn;var u=e.fn,f=u(),d=e.deps,h=C?.is_fork;if(W!==null){var g;if(h||qn(e,X),d!==null&&X>0)for(d.length=X+W.length,g=0;g<W.length;g++)d[X+g]=W[g];else e.deps=d=W;if(sa()&&(e.f&re)!==0)for(g=X;g<d.length;g++)(d[g].reactions??=[]).push(e)}else!h&&d!==null&&X<d.length&&(qn(e,X),d.length=X);if(gn()&&ae!==null&&!ue&&d!==null&&(e.f&(F|me|Y))===0)for(g=0;g<ae.length;g++)rs(ae[g],e);if(t!==null&&t!==e){if(Le++,t.deps!==null)for(let E=0;E<a;E+=1)t.deps[E].rv=Le;if(n!==null)for(const E of n)E.rv=Le;ae!==null&&(s===null?s=ae:s.push(...ae))}return(e.f&xe)!==0&&(e.f^=xe),f}catch(E){return Ra(E)}finally{e.f^=Bn,W=n,X=a,ae=s,w=t,ie=r,Ze(i),ue=o,Be=l}}function ft(e,n){let a=n.reactions;if(a!==null){var s=fs.call(a,e);if(s!==-1){var t=a.length-1;t===0?a=n.reactions=null:(a[s]=a[t],a.pop())}}if(a===null&&(n.f&F)!==0&&(W===null||!Ke.call(W,n))){var r=n;(r.f&re)!==0&&(r.f^=re,r.f&=~Ue),na(r),ja(r),qn(r,0)}}function qn(e,n){var a=e.deps;if(a!==null)for(var s=n;s<a.length;s++)ft(e,a[s])}function en(e){var n=e.f;if((n&Oe)===0){j(e,U);var a=O,s=Sn;O=e,Sn=!0;try{(n&(we|Sa))!==0?ct(e):Za(e),Wa(e);var t=is(e);e.teardown=typeof t=="function"?t:null,e.wv=ss;var r;Ln&&ks&&(e.f&Y)!==0&&e.deps}finally{Sn=s,O=a}}}async function vt(){await Promise.resolve(),Bs()}function v(e){var n=e.f,a=(n&F)!==0;if(w!==null&&!ue){var s=O!==null&&(O.f&Oe)!==0;if(!s&&(ie===null||!Ke.call(ie,e))){var t=w.deps;if((w.f&Bn)!==0)e.rv<Le&&(e.rv=Le,W===null&&t!==null&&t[X]===e?X++:W===null?W=[e]:W.push(e));else{(w.deps??=[]).push(e);var r=e.reactions;r===null?e.reactions=[w]:Ke.call(r,w)||r.push(w)}}}if(Fe&&Ie.has(e))return Ie.get(e);if(a){var i=e;if(Fe){var o=i.v;return((i.f&U)===0&&i.reactions!==null||ls(i))&&(o=aa(i)),Ie.set(i,o),o}var l=(i.f&re)===0&&!ue&&w!==null&&(Sn||(w.f&re)!==0),c=i.deps===null;an(i)&&(l&&(i.f|=re),Ba(i)),l&&!c&&os(i)}if(ce?.has(e))return ce.get(e);if((e.f&xe)!==0)throw e.v;return e.v}function os(e){if(e.deps!==null){e.f|=re;for(const n of e.deps)(n.reactions??=[]).push(e),(n.f&F)!==0&&(n.f&re)===0&&os(n)}}function ls(e){if(e.v===H)return!0;if(e.deps===null)return!1;for(const n of e.deps)if(Ie.has(n)||(n.f&F)!==0&&ls(n))return!0;return!1}function te(e){var n=ue;try{return ue=!0,e()}finally{ue=n}}function pt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ye in e)Qn(e);else if(!Array.isArray(e))for(let n in e){const a=e[n];typeof a=="object"&&a&&Ye in a&&Qn(a)}}}function Qn(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let s in e)try{Qn(e[s],n)}catch{}const a=Zn(e);if(a!==Object.prototype&&a!==Array.prototype&&a!==Map.prototype&&a!==Set.prototype&&a!==Date.prototype){const s=ya(a);for(let t in s){const r=s[t].get;if(r)try{r.call(e)}catch{}}}}}const mt=["touchstart","touchmove"];function ht(e){return mt.includes(e)}const cs=new Set,$n=new Set;function _t(e,n,a,s={}){function t(r){if(s.capture||cn.call(n,r),!r.cancelBubble)return In(()=>a?.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ye(()=>{n.addEventListener(e,t,s)}):n.addEventListener(e,t,s),t}function ia(e,n,a,s,t){var r={capture:s,passive:t},i=_t(e,n,a,r);(n===document.body||n===window||n===document||n instanceof HTMLMediaElement)&&Ya(()=>{n.removeEventListener(e,i,r)})}function Dn(e){for(var n=0;n<e.length;n++)cs.add(e[n]);for(var a of $n)a(e)}let pa=null;function cn(e){var n=this,a=n.ownerDocument,s=e.type,t=e.composedPath?.()||[],r=t[0]||e.target;pa=e;var i=0,o=pa===e&&e.__root;if(o){var l=t.indexOf(o);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var c=t.indexOf(n);if(c===-1)return;l<=c&&(i=l)}if(r=t[i]||e.target,r!==n){vs(e,"currentTarget",{configurable:!0,get(){return r||a}});var u=w,f=O;oe(null),pe(null);try{for(var d,h=[];r!==null;){var g=r.assignedSlot||r.parentNode||r.host||null;try{var E=r["__"+s];E!=null&&(!r.disabled||e.target===r)&&E.call(r,e)}catch(m){d?h.push(m):d=m}if(e.cancelBubble||g===n||g===null)break;r=g}if(d){for(let m of h)queueMicrotask(()=>{throw m});throw d}}finally{e.__root=n,delete e.currentTarget,oe(u),pe(f)}}}function gt(e){var n=document.createElement("template");return n.innerHTML=e.replaceAll("<!>","<!---->"),n.content}function Cn(e,n){var a=O;a.nodes===null&&(a.nodes={start:e,end:n,a:null,t:null})}function N(e,n){var a=(n&Rs)!==0,s=(n&Is)!==0,t,r=!e.startsWith("<!>");return()=>{t===void 0&&(t=gt(r?e:"<!>"+e),a||(t=Tn(t)));var i=s||Fa?document.importNode(t,!0):t.cloneNode(!0);if(a){var o=Tn(i),l=i.lastChild;Cn(o,l)}else Cn(i,i);return i}}function An(e=""){{var n=Ae(e+"");return Cn(n,n),n}}function Yn(){var e=document.createDocumentFragment(),n=document.createComment(""),a=Ae();return e.append(n,a),Cn(n,a),e}function A(e,n){e!==null&&e.before(n)}function T(e,n){var a=n==null?"":typeof n=="object"?n+"":n;a!==(e.__t??=e.nodeValue)&&(e.__t=a,e.nodeValue=a+"")}function bt(e,n){return Et(e,n)}const Qe=new Map;function Et(e,{target:n,anchor:a,props:s={},events:t,context:r,intro:i=!0}){Js();var o=new Set,l=f=>{for(var d=0;d<f.length;d++){var h=f[d];if(!o.has(h)){o.add(h);var g=ht(h);n.addEventListener(h,cn,{passive:g});var E=Qe.get(h);E===void 0?(document.addEventListener(h,cn,{passive:g}),Qe.set(h,1)):Qe.set(h,E+1)}}};l(On(cs)),$n.add(l);var c=void 0,u=tt(()=>{var f=a??n.appendChild(Ae());return Vs(f,{pending:()=>{}},d=>{if(r){hn({});var h=k;h.c=r}t&&(s.$$events=t),c=e(d,s)||{},r&&_n()}),()=>{for(var d of o){n.removeEventListener(d,cn);var h=Qe.get(d);--h===0?(document.removeEventListener(d,cn),Qe.delete(d)):Qe.set(d,h)}$n.delete(l),f!==a&&f.parentNode?.removeChild(f)}});return yt.set(c,u),c}let yt=new WeakMap;class At{anchor;#n=new Map;#i=new Map;#e=new Map;#t=new Set;#r=!0;constructor(n,a=!0){this.anchor=n,this.#r=a}#s=()=>{var n=C;if(this.#n.has(n)){var a=this.#n.get(n),s=this.#i.get(a);if(s)ra(s),this.#t.delete(a);else{var t=this.#e.get(a);t&&(this.#i.set(a,t.effect),this.#e.delete(a),t.fragment.lastChild.remove(),this.anchor.before(t.fragment),s=t.effect)}for(const[r,i]of this.#n){if(this.#n.delete(r),r===n)break;const o=this.#e.get(i);o&&(Z(o.effect),this.#e.delete(i))}for(const[r,i]of this.#i){if(r===a||this.#t.has(r))continue;const o=()=>{if(Array.from(this.#n.values()).includes(r)){var c=document.createDocumentFragment();ns(i,c),c.append(Ae()),this.#e.set(r,{effect:i,fragment:c})}else Z(i);this.#t.delete(r),this.#i.delete(r)};this.#r||!s?(this.#t.add(r),je(i,o,!1)):o()}}};#a=n=>{this.#n.delete(n);const a=Array.from(this.#n.values());for(const[s,t]of this.#e)a.includes(s)||(Z(t.effect),this.#e.delete(s))};ensure(n,a){var s=C,t=Qa();if(a&&!this.#i.has(n)&&!this.#e.has(n))if(t){var r=document.createDocumentFragment(),i=Ae();r.append(i),this.#e.set(n,{effect:se(()=>a(i)),fragment:r})}else this.#i.set(n,se(()=>a(this.anchor)));if(this.#n.set(s,n),t){for(const[o,l]of this.#i)o===n?s.skipped_effects.delete(l):s.skipped_effects.add(l);for(const[o,l]of this.#e)o===n?s.skipped_effects.delete(l.effect):s.skipped_effects.add(l.effect);s.oncommit(this.#s),s.ondiscard(this.#a)}else this.#s()}}function le(e,n,a=!1){var s=new At(e),t=a?We:0;function r(i,o){s.ensure(i,o)}ta(()=>{var i=!1;n((o,l=!0)=>{i=!0,r(l,o)}),i||r(!1,null)},t)}function Q(e,n){return n}function St(e,n,a){for(var s=[],t=n.length,r,i=n.length,o=0;o<t;o++){let f=n[o];je(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var d=e.outrogroups;Kn(On(r.done)),d.delete(r),d.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var l=s.length===0&&a!==null;if(l){var c=a,u=c.parentNode;Xs(u),u.append(c),e.items.clear()}Kn(n,!l)}else r={pending:new Set(n),done:new Set},(e.outrogroups??=new Set).add(r)}function Kn(e,n=!0){for(var a=0;a<e.length;a++)Z(e[a],n)}var ma;function $(e,n,a,s,t,r=null){var i=e,o=new Map,l=(n&qa)!==0;if(l){var c=e;i=c.appendChild(Ae())}var u=null,f=La(()=>{var b=a();return Ea(b)?b:b==null?[]:On(b)}),d,h=!0;function g(){m.fallback=u,wt(m,d,i,n,s),u!==null&&(d.length===0?(u.f&Ee)===0?ra(u):(u.f^=Ee,un(u,null,i)):je(u,()=>{u=null}))}var E=ta(()=>{d=v(f);for(var b=d.length,x=new Set,y=C,M=Qa(),S=0;S<b;S+=1){var z=d[S],I=s(z,S),P=h?null:o.get(I);P?(P.v&&Xe(P.v,z),P.i&&Xe(P.i,S),M&&y.skipped_effects.delete(P.e)):(P=Tt(o,h?i:ma??=Ae(),z,I,S,t,n,a),h||(P.e.f|=Ee),o.set(I,P)),x.add(I)}if(b===0&&r&&!u&&(h?u=se(()=>r(i)):(u=se(()=>r(ma??=Ae())),u.f|=Ee)),!h)if(M){for(const[q,D]of o)x.has(q)||y.skipped_effects.add(D.e);y.oncommit(g),y.ondiscard(()=>{})}else g();v(f)}),m={effect:E,items:o,outrogroups:null,fallback:u};h=!1}function ln(e){for(;e!==null&&(e.f&de)===0;)e=e.next;return e}function wt(e,n,a,s,t){var r=(s&Os)!==0,i=n.length,o=e.items,l=ln(e.effect.first),c,u=null,f,d=[],h=[],g,E,m,b;if(r)for(b=0;b<i;b+=1)g=n[b],E=t(g,b),m=o.get(E).e,(m.f&Ee)===0&&(m.nodes?.a?.measure(),(f??=new Set).add(m));for(b=0;b<i;b+=1){if(g=n[b],E=t(g,b),m=o.get(E).e,e.outrogroups!==null)for(const D of e.outrogroups)D.pending.delete(m),D.done.delete(m);if((m.f&Ee)!==0)if(m.f^=Ee,m===l)un(m,null,a);else{var x=u?u.next:l;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Ce(e,u,m),Ce(e,m,x),un(m,x,a),u=m,d=[],h=[],l=ln(u.next);continue}if((m.f&ne)!==0&&(ra(m),r&&(m.nodes?.a?.unfix(),(f??=new Set).delete(m))),m!==l){if(c!==void 0&&c.has(m)){if(d.length<h.length){var y=h[0],M;u=y.prev;var S=d[0],z=d[d.length-1];for(M=0;M<d.length;M+=1)un(d[M],y,a);for(M=0;M<h.length;M+=1)c.delete(h[M]);Ce(e,S.prev,z.next),Ce(e,u,S),Ce(e,z,y),l=y,u=z,b-=1,d=[],h=[]}else c.delete(m),un(m,l,a),Ce(e,m.prev,m.next),Ce(e,m,u===null?e.effect.first:u.next),Ce(e,u,m),u=m;continue}for(d=[],h=[];l!==null&&l!==m;)(c??=new Set).add(l),h.push(l),l=ln(l.next);if(l===null)continue}(m.f&Ee)===0&&d.push(m),u=m,l=ln(m.next)}if(e.outrogroups!==null){for(const D of e.outrogroups)D.pending.size===0&&(Kn(On(D.done)),e.outrogroups?.delete(D));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var I=[];if(c!==void 0)for(m of c)(m.f&ne)===0&&I.push(m);for(;l!==null;)(l.f&ne)===0&&l!==e.fallback&&I.push(l),l=ln(l.next);var P=I.length;if(P>0){var q=(s&qa)!==0&&i===0?a:null;if(r){for(b=0;b<P;b+=1)I[b].nodes?.a?.measure();for(b=0;b<P;b+=1)I[b].nodes?.a?.fix()}St(e,I,q)}}r&&ye(()=>{if(f!==void 0)for(m of f)m.nodes?.a?.apply()})}function Tt(e,n,a,s,t,r,i,o){var l=(i&qs)!==0?(i&xs)===0?ke(a,!1,!1):He(a):null,c=(i&Cs)!==0?He(t):null;return{v:l,i:c,e:se(()=>(r(n,l??a,c??t,o),()=>{e.delete(s)}))}}function un(e,n,a){if(e.nodes)for(var s=e.nodes.start,t=e.nodes.end,r=n&&(n.f&Ee)===0?n.nodes.start:a;s!==null;){var i=bn(s);if(r.before(s),s===t)return;s=i}}function Ce(e,n,a){n===null?e.effect.first=a:n.next=a,a===null?e.effect.last=n:a.prev=n}const ha=[...` 	
\r\f \v\uFEFF`];function Nt(e,n,a){var s=e==null?"":""+e;if(n&&(s=s?s+" "+n:n),a){for(var t in a)if(a[t])s=s?s+" "+t:t;else if(s.length)for(var r=t.length,i=0;(i=s.indexOf(t,i))>=0;){var o=i+r;(i===0||ha.includes(s[i-1]))&&(o===s.length||ha.includes(s[o]))?s=(i===0?"":s.substring(0,i))+s.substring(o+1):i=o}}return s===""?null:s}function qt(e,n){return e==null?null:String(e)}function zn(e,n,a,s,t,r){var i=e.__className;if(i!==a||i===void 0){var o=Nt(a,s,r);o==null?e.removeAttribute("class"):e.className=o,e.__className=a}else if(r&&t!==r)for(var l in r){var c=!!r[l];(t==null||c!==!!t[l])&&e.classList.toggle(l,c)}return r}function Ct(e,n,a,s){var t=e.__style;if(t!==n){var r=qt(n);r==null?e.removeAttribute("style"):e.style.cssText=r,e.__style=n}return s}const Ot=Symbol("is custom element"),xt=Symbol("is html");function Wn(e,n,a,s){var t=Rt(e);t[n]!==(t[n]=a)&&(n==="loading"&&(e[_s]=a),a==null?e.removeAttribute(n):typeof a!="string"&&It(e).includes(n)?e[n]=a:e.setAttribute(n,a))}function Rt(e){return e.__attributes??={[Ot]:e.nodeName.includes("-"),[xt]:e.namespaceURI===Ds}}var _a=new Map;function It(e){var n=e.getAttribute("is")||e.nodeName,a=_a.get(n);if(a)return a;_a.set(n,a=[]);for(var s,t=e,r=Element.prototype;r!==t;){s=ya(t);for(var i in s)s[i].set&&a.push(i);t=Zn(t)}return a}function Dt(e,n,a=n){var s=new WeakSet;nt(e,"input",async t=>{var r=t?e.defaultValue:e.value;if(r=kn(e)?Mn(r):r,a(r),C!==null&&s.add(C),await vt(),r!==(r=n())){var i=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=r??"",o!==null){var c=e.value.length;i===o&&o===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=i,e.selectionEnd=Math.min(o,c))}}}),te(n)==null&&e.value&&(a(kn(e)?Mn(e.value):e.value),C!==null&&s.add(C)),En(()=>{var t=n();if(e===document.activeElement){var r=Un??C;if(s.has(r))return}kn(e)&&t===Mn(e.value)||e.type==="date"&&!t&&!e.value||t!==e.value&&(e.value=t??"")})}function kn(e){var n=e.type;return n==="number"||n==="range"}function Mn(e){return e===""?null:+e}function ga(e,n){return e===n||e?.[Ye]===n}function zt(e={},n,a,s){return rt(()=>{var t,r;return En(()=>{t=r,r=[],te(()=>{e!==a(...r)&&(n(e,...r),t&&ga(a(...t),e)&&n(null,...t))})}),()=>{ye(()=>{r&&ga(a(...r),e)&&n(null,...r)})}}),e}function us(e=!1){const n=k,a=n.l.u;if(!a)return;let s=()=>pt(n.s);if(e){let t=0,r={};const i=Rn(()=>{let o=!1;const l=n.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],o=!0);return o&&t++,t});s=()=>v(i)}a.b.length&&st(()=>{ba(n,s),jn(a.b)}),Gn(()=>{const t=te(()=>a.m.map(hs));return()=>{for(const r of t)typeof r=="function"&&r()}}),a.a.length&&Gn(()=>{ba(n,s),jn(a.a)})}function ba(e,n){if(e.l.s)for(const a of e.l.s)v(a);n()}function ds(e){k===null&&Na(),mn&&k.l!==null?kt(k).m.push(e):Gn(()=>{const n=te(e);if(typeof n=="function")return n})}function Pt(e){k===null&&Na(),ds(()=>()=>te(e))}function kt(e){var n=e.l;return n.u??={a:[],b:[],m:[]}}const Mt="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Mt);Ms();var Lt=N('<nav class="navigation svelte-1r7gc6h"><div class="nav-container svelte-1r7gc6h"><div class="nav-content svelte-1r7gc6h"><div class="nav-logo svelte-1r7gc6h"><span class="logo-icon svelte-1r7gc6h">❤️</span> <span class="logo-text">DonarSangre</span></div> <button class="mobile-menu-btn svelte-1r7gc6h"><span class="menu-icon"> </span></button> <div><button class="nav-link svelte-1r7gc6h">Inicio</button> <button class="nav-link svelte-1r7gc6h">Beneficios</button> <button class="nav-link svelte-1r7gc6h">Tipos de Sangre</button> <button class="nav-link svelte-1r7gc6h">Requisitos</button> <button class="nav-link svelte-1r7gc6h">Hospitales</button> <button class="nav-link svelte-1r7gc6h">FAQ</button> <button class="nav-link-cta svelte-1r7gc6h">Donar Ahora</button></div></div></div></nav>');function jt(e){let n=G(!1);const a=()=>{R(n,!v(n))},s=x=>{const y=document.getElementById(x);y&&(y.scrollIntoView({behavior:"smooth"}),R(n,!1))};var t=Lt(),r=p(t),i=p(r),o=_(p(i),2);o.__click=a;var l=p(o),c=p(l),u=_(o,2),f=p(u);f.__click=()=>s("inicio");var d=_(f,2);d.__click=()=>s("beneficios");var h=_(d,2);h.__click=()=>s("tipos-sangre");var g=_(h,2);g.__click=()=>s("requisitos");var E=_(g,2);E.__click=()=>s("hospitales");var m=_(E,2);m.__click=()=>s("faq");var b=_(m,2);b.__click=()=>s("contacto"),L(()=>{T(c,v(n)?"✕":"☰"),zn(u,1,`nav-links ${v(n)?"mobile-open":""}`,"svelte-1r7gc6h")}),A(e,t)}Dn(["click"]);var Bt=N(`<section id="inicio" class="hero svelte-qzo0r3"><div class="hero-container svelte-qzo0r3"><div class="hero-content svelte-qzo0r3"><h1 class="hero-title svelte-qzo0r3">Dona Sangre, <span class="hero-title-highlight svelte-qzo0r3">Salva Vidas</span></h1> <p class="hero-description svelte-qzo0r3">Cada donación de sangre puede salvar hasta tres vidas. Únete a miles de personas 
        que hacen la diferencia cada día. Tu sangre es el regalo más valioso que puedes dar.</p> <div class="hero-buttons svelte-qzo0r3"><button class="btn-primary svelte-qzo0r3">Quiero Donar</button> <button class="btn-secondary svelte-qzo0r3">Más Información</button></div> <div class="hero-stats-mini svelte-qzo0r3"><div class="stat-mini svelte-qzo0r3"><span class="stat-mini-number svelte-qzo0r3">2M+</span> <span class="stat-mini-label svelte-qzo0r3">Donantes</span></div> <div class="stat-mini svelte-qzo0r3"><span class="stat-mini-number svelte-qzo0r3">3M+</span> <span class="stat-mini-label svelte-qzo0r3">Vidas Salvadas</span></div> <div class="stat-mini svelte-qzo0r3"><span class="stat-mini-number svelte-qzo0r3">500+</span> <span class="stat-mini-label svelte-qzo0r3">Hospitales</span></div></div></div> <div class="hero-image svelte-qzo0r3"><div class="hero-image-placeholder svelte-qzo0r3"><span class="hero-icon svelte-qzo0r3">🩸</span> <div class="pulse-ring svelte-qzo0r3"></div></div></div></div></section>`);function Ut(e){const n=l=>{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth"})};var a=Bt(),s=p(a),t=p(s),r=_(p(t),4),i=p(r);i.__click=()=>n("requisitos");var o=_(i,2);o.__click=()=>n("beneficios"),A(e,a)}Dn(["click"]);var Ht=N('<div class="stat-card svelte-cjprq"><div class="stat-icon svelte-cjprq"> </div> <div class="stat-number svelte-cjprq"><!></div> <div class="stat-label svelte-cjprq"> </div> <div class="stat-description svelte-cjprq"> </div></div>'),Ft=N('<section class="stats svelte-cjprq"><div class="stats-container svelte-cjprq"><div class="stats-header svelte-cjprq"><h2 class="stats-title svelte-cjprq">Nuestro Impacto</h2> <p class="stats-description svelte-cjprq">Miles de personas confían en nosotros para hacer la diferencia</p></div> <div class="stats-grid svelte-cjprq"></div></div></section>');function Vt(e,n){hn(n,!1);let a=ke(0),s=ke(0),t=ke(0),r=ke(0);const i=2234567,o=1678335,l=3456789,c=567;let u,f,d,h;function g(y){return y.toLocaleString("es-ES")}ds(()=>{u=setInterval(()=>{let y=Math.floor(Math.random()*19601+400);v(a)+y>=i&&(y=i-v(a),clearInterval(u)),R(a,v(a)+y)},50),f=setInterval(()=>{let y=Math.floor(Math.random()*14701+300);v(s)+y>=o&&(y=o-v(s),clearInterval(f)),R(s,v(s)+y)},50),d=setInterval(()=>{let y=Math.floor(Math.random()*24501+500);v(t)+y>=l&&(y=l-v(t),clearInterval(d)),R(t,v(t)+y)},50),h=setInterval(()=>{let y=Math.floor(Math.random()*5+1);v(r)+y>=c&&(y=c-v(r),clearInterval(h)),R(r,v(r)+y)},50)}),Pt(()=>{clearInterval(u),clearInterval(f),clearInterval(d),clearInterval(h)});const E=[{icon:"👥",label:"Donantes Registrados",description:"Personas comprometidas con salvar vidas"},{icon:"🩸",label:"Donaciones Este Año",description:"Unidades de sangre recolectadas"},{icon:"❤️",label:"Vidas Salvadas",description:"Pacientes que recibieron ayuda"},{icon:"🏥",label:"Hospitales Asociados",description:"Centros médicos en toda la red"}];us();var m=Ft(),b=p(m),x=_(p(b),2);$(x,5,()=>E,Q,(y,M,S)=>{var z=Ht(),I=p(z),P=p(I),q=_(I,2),D=p(q);{var V=Te=>{var _e=An();L(tn=>T(_e,tn),[()=>g(v(a))]),A(Te,_e)},fe=Te=>{var _e=Yn(),tn=Nn(_e);{var B=K=>{var ve=An();L(Ne=>T(ve,Ne),[()=>g(v(s))]),A(K,ve)},J=K=>{var ve=Yn(),Ne=Nn(ve);{var ze=qe=>{var ge=An();L(on=>T(ge,on),[()=>g(v(t))]),A(qe,ge)},rn=qe=>{var ge=An();L(on=>T(ge,on),[()=>g(v(r))]),A(qe,ge)};le(Ne,qe=>{S===2?qe(ze):qe(rn,!1)},!0)}A(K,ve)};le(tn,K=>{S===1?K(B):K(J,!1)},!0)}A(Te,_e)};le(D,Te=>{S===0?Te(V):Te(fe,!1)})}var De=_(q,2),Ge=p(De),sn=_(De,2),Pn=p(sn);L(()=>{T(P,v(M).icon),T(Ge,v(M).label),T(Pn,v(M).description)}),A(y,z)}),A(e,m),_n()}var Gt=N('<div class="benefit-card svelte-ee87tf"><div class="benefit-icon svelte-ee87tf"> </div> <h3 class="benefit-title svelte-ee87tf"> </h3> <p class="benefit-description svelte-ee87tf"> </p></div>'),Qt=N('<section id="beneficios" class="benefits svelte-ee87tf"><div class="benefits-container svelte-ee87tf"><div class="benefits-header svelte-ee87tf"><h2 class="benefits-title svelte-ee87tf">Beneficios de Donar Sangre</h2> <p class="benefits-description svelte-ee87tf">Donar sangre no solo salva vidas, también trae beneficios para tu salud</p></div> <div class="benefits-grid svelte-ee87tf"></div></div></section>');function $t(e){const n=[{icon:"❤️",title:"Salud Cardiovascular",description:"Donar sangre regularmente ayuda a reducir el riesgo de enfermedades del corazón al mantener niveles saludables de hierro."},{icon:"🩺",title:"Chequeo Médico Gratuito",description:"Cada donación incluye un examen médico completo y análisis de sangre sin costo alguno."},{icon:"🔥",title:"Quema Calorías",description:"Una donación de sangre puede quemar hasta 650 calorías, beneficiando tu metabolismo."},{icon:"🧬",title:"Producción de Células",description:"Estimula la producción de nuevas células sanguíneas, manteniendo tu cuerpo saludable y renovado."},{icon:"🎯",title:"Reduce Hierro Excesivo",description:"Ayuda a prevenir la acumulación de hierro que puede causar daño a órganos vitales."},{icon:"😊",title:"Bienestar Emocional",description:"Experimentarás la satisfacción de saber que estás ayudando a salvar vidas."}];var a=Qt(),s=p(a),t=_(p(s),2);$(t,5,()=>n,Q,(r,i)=>{var o=Gt(),l=p(o),c=p(l),u=_(l,2),f=p(u),d=_(u,2),h=p(d);L(()=>{T(c,v(i).icon),T(f,v(i).title),T(h,v(i).description)}),A(r,o)}),A(e,a)}var Yt=N('<span class="type-badge svelte-15wlxd2"> </span>'),Kt=N('<span class="type-badge svelte-15wlxd2"> </span>'),Wt=N('<span class="type-badge svelte-15wlxd2"> </span>'),Zt=N('<div class="blood-type-card svelte-15wlxd2"><div class="blood-type-header svelte-15wlxd2"><div class="blood-type-icon svelte-15wlxd2"> </div> <div class="blood-type-percentage svelte-15wlxd2"> </div></div> <h3 class="blood-type-name svelte-15wlxd2"> </h3> <p class="blood-type-desc svelte-15wlxd2"> </p> <div class="blood-type-details svelte-15wlxd2"><div class="detail-section svelte-15wlxd2"><strong class="svelte-15wlxd2">Puede donar a:</strong> <div class="types-list svelte-15wlxd2"></div></div> <div class="detail-section svelte-15wlxd2"><strong class="svelte-15wlxd2">Puede recibir de:</strong> <div class="types-list svelte-15wlxd2"><!></div></div></div></div>'),Jt=N('<section id="tipos-sangre" class="blood-types svelte-15wlxd2"><div class="blood-types-container svelte-15wlxd2"><div class="blood-types-header svelte-15wlxd2"><h2 class="blood-types-title svelte-15wlxd2">Tipos de Sangre</h2> <p class="blood-types-description svelte-15wlxd2">Conoce tu tipo de sangre y descubre a quién puedes ayudar</p></div> <div class="blood-types-grid svelte-15wlxd2"></div></div></section>');function Xt(e){const n=[{type:"O-",name:"O Negativo",canDonateTo:["O-","O+","A-","A+","B-","B+","AB-","AB+"],canReceiveFrom:["O-"],percentage:"7%",description:"Donante universal",color:"#dc2626"},{type:"O+",name:"O Positivo",canDonateTo:["O+","A+","B+","AB+"],canReceiveFrom:["O-","O+"],percentage:"38%",description:"Tipo más común",color:"#ea580c"},{type:"A-",name:"A Negativo",canDonateTo:["A-","A+","AB-","AB+"],canReceiveFrom:["A-","O-"],percentage:"6%",description:"Donante para A y AB",color:"#d97706"},{type:"A+",name:"A Positivo",canDonateTo:["A+","AB+"],canReceiveFrom:["A-","A+","O-","O+"],percentage:"34%",description:"Segundo más común",color:"#ca8a04"},{type:"B-",name:"B Negativo",canDonateTo:["B-","B+","AB-","AB+"],canReceiveFrom:["B-","O-"],percentage:"2%",description:"Tipo raro",color:"#16a34a"},{type:"B+",name:"B Positivo",canDonateTo:["B+","AB+"],canReceiveFrom:["B-","B+","O-","O+"],percentage:"9%",description:"Donante para B y AB+",color:"#059669"},{type:"AB-",name:"AB Negativo",canDonateTo:["AB-","AB+"],canReceiveFrom:["AB-","A-","B-","O-"],percentage:"1%",description:"Tipo más raro",color:"#2563eb"},{type:"AB+",name:"AB Positivo",canDonateTo:["AB+"],canReceiveFrom:["Todos"],percentage:"3%",description:"Receptor universal",color:"#7c3aed"}];var a=Jt(),s=p(a),t=_(p(s),2);$(t,5,()=>n,Q,(r,i)=>{var o=Zt(),l=p(o),c=p(l),u=p(c),f=_(c,2),d=p(f),h=_(l,2),g=p(h),E=_(h,2),m=p(E),b=_(E,2),x=p(b),y=_(p(x),2);$(y,5,()=>v(i).canDonateTo,Q,(q,D)=>{var V=Yt(),fe=p(V);L(()=>T(fe,v(D))),A(q,V)});var M=_(x,2),S=_(p(M),2),z=p(S);{var I=q=>{var D=Yn(),V=Nn(D);$(V,1,()=>v(i).canReceiveFrom,Q,(fe,De)=>{var Ge=Kt(),sn=p(Ge);L(()=>T(sn,v(De))),A(fe,Ge)}),A(q,D)},P=q=>{var D=Wt(),V=p(D);L(()=>T(V,v(i).canReceiveFrom)),A(q,D)};le(z,q=>{Array.isArray(v(i).canReceiveFrom)?q(I):q(P,!1)})}L(()=>{Ct(o,`--card-color: ${v(i).color??""}`),T(u,v(i).type),T(d,v(i).percentage),T(g,v(i).name),T(m,v(i).description)}),A(r,o)}),A(e,a)}var er=N('<li class="info-item svelte-1dz0rb8"><span class="item-icon requirements-check svelte-1dz0rb8">✓</span> <span class="item-text svelte-1dz0rb8"> </span></li>'),nr=N('<li class="info-item svelte-1dz0rb8"><span class="item-icon contraindications-check svelte-1dz0rb8">✕</span> <span class="item-text svelte-1dz0rb8"> </span></li>'),ar=N('<li class="info-item svelte-1dz0rb8"><span class="item-icon recommendations-check svelte-1dz0rb8">✓</span> <span class="item-text svelte-1dz0rb8"> </span></li>'),sr=N('<section id="requisitos" class="eligibility svelte-1dz0rb8"><div class="eligibility-container svelte-1dz0rb8"><div class="eligibility-header svelte-1dz0rb8"><h2 class="eligibility-title svelte-1dz0rb8">Requisitos para Donar Sangre</h2> <p class="eligibility-description svelte-1dz0rb8">Verifica si cumples con los requisitos básicos para ser donante</p></div> <div class="eligibility-content svelte-1dz0rb8"><div class="info-card requirements-card svelte-1dz0rb8"><div class="card-header svelte-1dz0rb8"><div class="card-icon requirements-icon svelte-1dz0rb8">✓</div> <h3 class="card-title svelte-1dz0rb8">Requisitos Básicos</h3></div> <ul class="info-list svelte-1dz0rb8"></ul></div> <div class="info-card contraindications-card svelte-1dz0rb8"><div class="card-header svelte-1dz0rb8"><div class="card-icon contraindications-icon svelte-1dz0rb8">✕</div> <h3 class="card-title svelte-1dz0rb8">Contraindicaciones</h3></div> <ul class="info-list svelte-1dz0rb8"></ul></div> <div class="info-card recommendations-card svelte-1dz0rb8"><div class="card-header svelte-1dz0rb8"><div class="card-icon recommendations-icon svelte-1dz0rb8">ℹ</div> <h3 class="card-title svelte-1dz0rb8">Recomendaciones</h3></div> <ul class="info-list svelte-1dz0rb8"></ul></div></div></div></section>');function tr(e){const n=["Tener entre 18 y 65 años","Pesar más de 50 kg","Sentirse bien de salud","No haber donado en los últimos 2 meses (hombres) o 3 meses (mujeres)","No estar embarazada ni en período de lactancia","No tener tatuajes o piercings recientes (últimos 4 meses)"],a=["Tener enfermedades infecciosas activas","Haber tenido hepatitis B o C","Consumir drogas por vía intravenosa","Tener VIH/SIDA","Padecer enfermedades cardíacas graves","Haber recibido transfusión de sangre en el último año"],s=["Descansa bien la noche anterior","Come algo antes de donar (evita grasas)","Bebe abundante agua antes y después","Lleva tu DNI o documento de identificación","Usa ropa cómoda","Informa sobre medicamentos que tomes"];var t=sr(),r=p(t),i=_(p(r),2),o=p(i),l=_(p(o),2);$(l,5,()=>n,Q,(h,g)=>{var E=er(),m=_(p(E),2),b=p(m);L(()=>T(b,v(g))),A(h,E)});var c=_(o,2),u=_(p(c),2);$(u,5,()=>a,Q,(h,g)=>{var E=nr(),m=_(p(E),2),b=p(m);L(()=>T(b,v(g))),A(h,E)});var f=_(c,2),d=_(p(f),2);$(d,5,()=>s,Q,(h,g)=>{var E=ar(),m=_(p(E),2),b=p(m);L(()=>T(b,v(g))),A(h,E)}),A(e,t)}var rr=N("<button> </button>"),ir=N('<div class="hospital-card svelte-1x1lazy"><div class="hospital-icon svelte-1x1lazy">🏥</div> <h3 class="hospital-name svelte-1x1lazy"> </h3> <div class="hospital-info svelte-1x1lazy"><div class="info-item svelte-1x1lazy"><span class="info-icon svelte-1x1lazy">📍</span> <span class="info-text svelte-1x1lazy"> </span></div> <div class="info-item svelte-1x1lazy"><span class="info-icon svelte-1x1lazy">📞</span> <span class="info-text svelte-1x1lazy"> </span></div> <div class="info-item svelte-1x1lazy"><span class="info-icon svelte-1x1lazy">🕐</span> <span class="info-text svelte-1x1lazy"> </span></div></div> <a target="_blank" rel="noopener noreferrer" class="hospital-button svelte-1x1lazy">📍 Cómo llegar</a></div>'),or=N('<section id="hospitales" class="hospitals svelte-1x1lazy"><div class="hospitals-container svelte-1x1lazy"><div class="hospitals-header svelte-1x1lazy"><h2 class="hospitals-title svelte-1x1lazy">Centros de Donación en Gran Canaria</h2> <p class="hospitals-description svelte-1x1lazy">Encuentra el centro más cercano para realizar tu donación de sangre</p></div> <div class="location-filters svelte-1x1lazy"></div> <div class="hospitals-grid svelte-1x1lazy"></div></div></section>');function lr(e,n){hn(n,!1);const a=ke(),s=[{name:"Hospital Universitario de Gran Canaria Dr. Negrín",address:"Barranco de la Ballena, s/n, 35010 Las Palmas de Gran Canaria",phone:"928 450 000",hours:"Lunes a Viernes: 8:00 - 20:00",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Hospital+Universitario+de+Gran+Canaria+Dr.+Negrín"},{name:"Hospital Universitario Insular de Gran Canaria",address:"Av. Marítima del Sur, s/n, 35016 Las Palmas de Gran Canaria",phone:"928 444 000",hours:"Lunes a Viernes: 8:00 - 15:00",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Hospital+Universitario+Insular+de+Gran+Canaria"},{name:"Hospital San Roque Las Palmas",address:"C/ Dolores de la Rocha, 5, 35001 Las Palmas de Gran Canaria",phone:"928 012 600",hours:"Lunes a Viernes: 9:00 - 14:00",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Hospital+San+Roque+Las+Palmas"},{name:"Hospital San Roque Maspalomas",address:"Av. de Gran Canaria, 18, 35100 Maspalomas",phone:"928 063 600",hours:"Lunes a Viernes: 9:00 - 14:00",location:"San Bartolomé de Tirajana",mapsUrl:"https://maps.google.com/?q=Hospital+San+Roque+Maspalomas"},{name:"Centro de Transfusión Sanguínea de Gran Canaria",address:"C/ Dr. José Molina Orosa, 8, 35004 Las Palmas de Gran Canaria",phone:"928 301 212",hours:"Lunes a Viernes: 8:15 - 21:30",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Centro+de+Transfusión+Sanguínea+de+Gran+Canaria"},{name:"Hospital Quirónsalud Gran Canaria",address:"C/ Maestro Valle, 20, 35005 Las Palmas de Gran Canaria",phone:"928 012 000",hours:"Lunes: 7:30 - 15:00, Martes a Viernes: 7:30 - 19:00",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Hospital+Quirónsalud+Gran+Canaria"}],t=["Todos","Las Palmas de Gran Canaria","San Bartolomé de Tirajana"];let r=ke("Todos");it(()=>v(r),()=>{R(a,v(r)==="Todos"?s:s.filter(u=>u.location===v(r)))}),ot();var i=or(),o=p(i),l=_(p(o),2);$(l,5,()=>t,Q,(u,f)=>{var d=rr();let h;var g=p(d);L(()=>{h=zn(d,1,"location-button svelte-1x1lazy",null,h,{active:v(r)===v(f)}),T(g,v(f))}),ia("click",d,()=>R(r,v(f))),A(u,d)});var c=_(l,2);$(c,5,()=>v(a),Q,(u,f)=>{var d=ir(),h=_(p(d),2),g=p(h),E=_(h,2),m=p(E),b=_(p(m),2),x=p(b),y=_(m,2),M=_(p(y),2),S=p(M),z=_(y,2),I=_(p(z),2),P=p(I),q=_(E,2);L(()=>{T(g,(v(f),te(()=>v(f).name))),T(x,(v(f),te(()=>v(f).address))),T(S,(v(f),te(()=>v(f).phone))),T(P,(v(f),te(()=>v(f).hours))),Wn(q,"href",(v(f),te(()=>v(f).mapsUrl)))}),A(u,d)}),A(e,i),_n()}var cr=N('<div class="faq-answer svelte-r9ron6"><p class="svelte-r9ron6"> </p></div>'),ur=N('<div><button class="faq-question svelte-r9ron6"><span class="question-text svelte-r9ron6"> </span> <span class="question-icon svelte-r9ron6"> </span></button> <!></div>');function dr(e,n){var a=ur(),s=p(a);s.__click=function(...u){n.onToggle?.apply(this,u)};var t=p(s),r=p(t),i=_(t,2),o=p(i),l=_(s,2);{var c=u=>{var f=cr(),d=p(f),h=p(d);L(()=>T(h,n.answer)),A(u,f)};le(l,u=>{n.isOpen&&u(c)})}L(()=>{zn(a,1,`faq-item ${n.isOpen?"open":""}`,"svelte-r9ron6"),T(r,n.question),T(o,n.isOpen?"−":"+")}),A(e,a)}Dn(["click"]);var fr=N('<section id="faq" class="faq svelte-1t1jk4b"><div class="faq-container svelte-1t1jk4b"><div class="faq-header svelte-1t1jk4b"><h2 class="faq-title svelte-1t1jk4b">Preguntas Frecuentes</h2> <p class="faq-description svelte-1t1jk4b">Resolvemos tus dudas sobre el proceso de donación</p></div> <div class="faq-list svelte-1t1jk4b"></div> <div class="faq-footer svelte-1t1jk4b"><p class="footer-text svelte-1t1jk4b">¿Tienes más preguntas? <a href="#contacto" class="footer-link svelte-1t1jk4b">Contáctanos</a></p></div></div></section>');function vr(e){let n=G(null);const a=[{question:"¿Cuánto tiempo toma donar sangre?",answer:"El proceso completo toma aproximadamente 45-60 minutos, aunque la donación en sí solo dura de 8 a 10 minutos. Este tiempo incluye el registro, el examen médico breve, la donación y el tiempo de recuperación."},{question:"¿Con qué frecuencia puedo donar?",answer:"Los hombres pueden donar cada 2 meses y las mujeres cada 3 meses. Esto permite que tu cuerpo recupere completamente los componentes sanguíneos donados."},{question:"¿Duele donar sangre?",answer:"Sentirás un pequeño pinchazo cuando se inserta la aguja, similar a cualquier análisis de sangre. La mayoría de los donantes informan que es mínimamente molesto y muy tolerable."},{question:"¿Qué debo hacer antes de donar?",answer:"Come una comida saludable, bebe abundante agua, duerme bien la noche anterior y evita el alcohol 24 horas antes. No dones con el estómago vacío."},{question:"¿Puedo hacer ejercicio después de donar?",answer:"Es recomendable evitar ejercicio intenso durante las primeras 24 horas después de la donación. Puedes retomar actividades ligeras después de unas horas de descanso."},{question:"¿Qué pasa con mi sangre después de donarla?",answer:"Tu sangre se analiza, procesa y separa en diferentes componentes (glóbulos rojos, plasma, plaquetas) que pueden salvar hasta 3 vidas diferentes. Se almacena hasta que un paciente la necesita."},{question:"¿Es seguro donar sangre?",answer:"Absolutamente. Se utiliza material estéril y desechable para cada donante. No existe riesgo de contraer enfermedades al donar sangre. Todo el equipo es nuevo y de un solo uso."},{question:"¿Puedo donar si tomo medicamentos?",answer:"Depende del medicamento. Algunos no afectan la donación, pero otros sí. Es importante informar al personal médico sobre cualquier medicación que estés tomando."}],s=o=>{R(n,v(n)===o?null:o,!0)};var t=fr(),r=p(t),i=_(p(r),2);$(i,21,()=>a,Q,(o,l,c)=>{{let u=Ks(()=>v(n)===c);dr(o,{get question(){return v(l).question},get answer(){return v(l).answer},get isOpen(){return v(u)},onToggle:()=>s(c)})}}),A(e,t)}var pr=N('<a class="social-link svelte-9sff3o"> </a>'),mr=N('<li><button class="footer-link svelte-9sff3o"> </button></li>'),hr=N(`<footer id="contacto" class="footer svelte-9sff3o"><div class="footer-container svelte-9sff3o"><div class="footer-content svelte-9sff3o"><div class="footer-section svelte-9sff3o"><div class="footer-logo svelte-9sff3o"><span class="logo-icon svelte-9sff3o">❤️</span> <span class="logo-text svelte-9sff3o">DonarSangre</span></div> <p class="footer-description svelte-9sff3o">Comprometidos con salvar vidas a través de la donación de sangre. 
          Cada gota cuenta, cada donante importa.</p> <div class="social-links svelte-9sff3o"></div></div> <div class="footer-section svelte-9sff3o"><h3 class="footer-title svelte-9sff3o">Enlaces Rápidos</h3> <ul class="footer-links svelte-9sff3o"></ul></div> <div class="footer-section svelte-9sff3o"><h3 class="footer-title svelte-9sff3o">Contacto</h3> <ul class="contact-list svelte-9sff3o"><li class="contact-item svelte-9sff3o"><span class="contact-icon svelte-9sff3o">📞</span> <span>+34 926 123 456</span></li> <li class="contact-item svelte-9sff3o"><span class="contact-icon svelte-9sff3o">✉️</span> <span>info@donarsangre.com</span></li> <li class="contact-item svelte-9sff3o"><span class="contact-icon svelte-9sff3o">📍</span> <span>Av. Mesa y López, Las Palmas de Gran Canaria</span></li> <li class="contact-item svelte-9sff3o"><span class="contact-icon svelte-9sff3o">🕐</span> <span>Lun-Vie: 8:00-18:00</span></li></ul></div> <div class="footer-section svelte-9sff3o"><h3 class="footer-title svelte-9sff3o">Emergencias</h3> <div class="emergency-box svelte-9sff3o"><p class="emergency-text svelte-9sff3o">Si necesitas sangre urgentemente:</p> <a href="tel:112" class="emergency-button svelte-9sff3o">🚨 Llamar al 112</a></div></div></div> <div class="footer-bottom svelte-9sff3o"><p class="copyright svelte-9sff3o"> </p> <div class="footer-bottom-links svelte-9sff3o"><a class="bottom-link svelte-9sff3o">Política de Privacidad</a> <span class="separator svelte-9sff3o">•</span> <a class="bottom-link svelte-9sff3o">Términos de Uso</a> <span class="separator svelte-9sff3o">•</span> <a class="bottom-link svelte-9sff3o">Cookies</a></div></div></div></footer>`);function _r(e,n){hn(n,!1);const a=new Date().getFullYear(),s=[{icon:"📘",name:"Facebook",url:"#"},{icon:"🐦",name:"Twitter",url:"#"},{icon:"📷",name:"Instagram",url:"#"},{icon:"💼",name:"LinkedIn",url:"#"}],t=[{text:"Inicio",url:"#inicio"},{text:"Beneficios",url:"#beneficios"},{text:"Requisitos",url:"#requisitos"},{text:"Hospitales",url:"#hospitales"}],r=m=>{const b=document.getElementById(m);b&&b.scrollIntoView({behavior:"smooth"})};us();var i=hr(),o=p(i),l=p(o),c=p(l),u=_(p(c),4);$(u,5,()=>s,Q,(m,b)=>{var x=pr(),y=p(x);L(()=>{Wn(x,"href",v(b).url),Wn(x,"aria-label",v(b).name),T(y,v(b).icon)}),A(m,x)});var f=_(c,2),d=_(p(f),2);$(d,5,()=>t,Q,(m,b)=>{var x=mr(),y=p(x),M=p(y);L(()=>T(M,v(b).text)),ia("click",y,()=>r(v(b).url.substring(1))),A(m,x)});var h=_(l,2),g=p(h),E=p(g);L(()=>T(E,`© ${a??""} DonarSangre. Todos los derechos reservados.`)),A(e,i),_n()}var gr=N('<button class="chat-button svelte-1czjriu" aria-label="Abrir chat"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1czjriu"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" class="svelte-1czjriu"></path></svg> <span class="chat-badge svelte-1czjriu">💬</span></button>'),br=N('<div class="message-avatar svelte-1czjriu">🤖</div>'),Er=N('<div><!> <div class="message-content svelte-1czjriu"><div class="message-bubble svelte-1czjriu"> </div></div></div>'),yr=N('<div class="message bot svelte-1czjriu"><div class="message-avatar svelte-1czjriu">🤖</div> <div class="message-content svelte-1czjriu"><div class="message-bubble typing-indicator svelte-1czjriu"><span class="svelte-1czjriu"></span> <span class="svelte-1czjriu"></span> <span class="svelte-1czjriu"></span></div></div></div>'),Ar=N('<button class="quick-button svelte-1czjriu"> </button>'),Sr=N('<div class="quick-questions svelte-1czjriu"><p class="quick-title svelte-1czjriu">Preguntas frecuentes:</p> <!></div>'),wr=N('<div class="chat-actions svelte-1czjriu"><button class="reset-button svelte-1czjriu">🔄 Nueva conversación</button></div>'),Tr=N('<div class="chat-container svelte-1czjriu"><div class="chat-header svelte-1czjriu"><div class="chat-header-info svelte-1czjriu"><div class="chat-avatar svelte-1czjriu">🩸</div> <div class="svelte-1czjriu"><h3 class="chat-title svelte-1czjriu">Asistente de Donación</h3> <p class="chat-status svelte-1czjriu">En línea</p></div></div> <button class="close-button svelte-1czjriu" aria-label="Cerrar chat"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1czjriu"><line x1="18" y1="6" x2="6" y2="18" class="svelte-1czjriu"></line><line x1="6" y1="6" x2="18" y2="18" class="svelte-1czjriu"></line></svg></button></div> <div class="chat-messages svelte-1czjriu"><!> <!> <!> <!></div> <div class="chat-input-container svelte-1czjriu"><input type="text" class="chat-input svelte-1czjriu" placeholder="Escribe tu pregunta..."/> <button class="send-button svelte-1czjriu" aria-label="Enviar mensaje"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1czjriu"><line x1="22" y1="2" x2="11" y2="13" class="svelte-1czjriu"></line><polygon points="22 2 15 22 11 13 2 9 22 2" class="svelte-1czjriu"></polygon></svg></button></div></div>'),Nr=N("<!> <!>",1);function qr(e,n){hn(n,!0);let a=G(!1),s=G(Me([{type:"bot",text:"¡Hola! 👋 Soy tu asistente virtual de donación de sangre. ¿En qué puedo ayudarte?",timestamp:new Date}])),t=G(""),r,i=G(Me([])),o=G(!1);const l={greeting:{keywords:["hola","hi","buenas","buenos dias","buenas tardes","buenas noches","saludos","hey"],responses:["¡Hola! 😊 ¿Es tu primera vez donando o ya eres un donante regular? Cuéntame en qué puedo ayudarte.","¡Qué gusto saludarte! 👋 Estoy aquí para resolver todas tus dudas sobre donación de sangre. ¿Qué te gustaría saber?"]},thanks:{keywords:["gracias","thank","agradezco","genial","perfecto","excelente","ok"],responses:["¡De nada! 😊 ¿Hay algo más en lo que pueda ayudarte sobre la donación de sangre?","¡Un placer ayudarte! Si tienes más preguntas, aquí estaré. 💪"]},eligibility:{keywords:["requisitos","puedo donar","edad","peso","elegible","calificar","condiciones","apto"],responses:[`Para donar sangre debes cumplir estos requisitos básicos:

✓ Tener entre 18 y 65 años
✓ Pesar más de 50 kg
✓ Sentirte bien de salud
✓ No haber donado en los últimos 2-3 meses
✓ No estar embarazada ni lactando
✓ No tener tatuajes o piercings recientes (últimos 4 meses)

¿Cumples con estos requisitos? ¿Alguno en particular te preocupa?`,`Los requisitos principales son:

🔹 Edad: 18-65 años
🔹 Peso: más de 50 kg
🔹 Buena salud general
🔹 Sin donación reciente (2-3 meses)

¿Necesitas saber sobre algún requisito específico como enfermedades, medicamentos o viajes recientes?`],followUp:["¿Tienes alguna condición médica específica?","¿Has viajado recientemente fuera del país?","¿Tomas algún medicamento?"]},ageSpecific:{keywords:["tengo 17","menor de edad","tengo 16","soy joven","tengo 66","tengo 70","adulto mayor"],responses:[`La edad permitida para donar es de 18 a 65 años.

👶 Si eres menor de 18: Lamentablemente aún no puedes donar, pero podrás hacerlo cuando cumplas 18 años.

👴 Si tienes más de 65: En algunos casos especiales se puede donar con autorización médica si has sido donante regular.

¿Hay algo más en lo que pueda ayudarte?`]},weightSpecific:{keywords:["peso menos","peso 45","peso 48","bajo peso","delgado","flaco"],responses:[`El peso mínimo para donar es de 50 kg. Esto es importante porque:

⚖️ Se extrae aproximadamente 450ml de sangre
💪 Tu cuerpo necesita masa corporal suficiente para recuperarse
🩺 Es una medida de seguridad para tu salud

Si estás cerca de los 50 kg, te recomiendo:
• Alimentarte bien antes de la cita
• Hidratarte adecuadamente
• Verificar tu peso exacto en el centro de donación

¿Tienes otras dudas?`]},frequency:{keywords:["frecuencia","cada cuanto","cuándo puedo volver","otra vez","nuevamente","de nuevo","período"],responses:[`La frecuencia de donación depende de tu sexo:

🔵 Hombres: cada 2 meses (6 veces al año máximo)
🔴 Mujeres: cada 3 meses (4 veces al año máximo)

Esto se debe a que las mujeres pierden hierro adicional durante la menstruación. El tiempo permite que tu cuerpo recupere:
• Glóbulos rojos
• Niveles de hierro
• Volumen sanguíneo

¿Cuándo fue tu última donación?`,`Puedes donar:

👨 Si eres hombre: cada 2 meses
👩 Si eres mujer: cada 3 meses

Tu cuerpo necesita este tiempo para regenerar completamente los componentes sanguíneos. ¿Eres donante regular o será tu primera vez?`],followUp:["¿Has donado anteriormente?","¿Quieres que te ayude a calcular cuándo puedes donar de nuevo?"]},firstTime:{keywords:["primera vez","nunca he donado","primera donación","principiante","nuevo","novato"],responses:[`¡Qué emocionante que quieras donar por primera vez! 🌟 Te cuento qué esperar:

1️⃣ REGISTRO (5-10 min)
   • Llena un formulario simple
   • Presenta tu DNI

2️⃣ EVALUACIÓN (5 min)
   • Medición de presión y hemoglobina
   • Breve cuestionario de salud

3️⃣ DONACIÓN (8-10 min)
   • Te recuestas cómodamente
   • Extracción de ~450ml de sangre

4️⃣ RECUPERACIÓN (15 min)
   • Refrigerio y bebidas
   • Observación para asegurar que estés bien

⏱️ TOTAL: 45-60 minutos

¿Tienes algún nervio o pregunta específica sobre el proceso?`,`¡Bienvenido al mundo de los donantes! 🎉 La primera vez puede parecer intimidante, pero te aseguro que es muy sencillo.

🤔 ¿Qué te preocupa más?
• ¿El dolor de la aguja?
• ¿Sentirte mareado?
• ¿No saber qué esperar?

Cuéntame y te ayudo a sentirte más tranquilo.`]},process:{keywords:["proceso","procedimiento","cómo es","qué pasa","pasos","duración","tiempo","demora","etapas"],responses:[`El proceso completo es muy organizado:

1️⃣ REGISTRO (5-10 min)
   • Formulario con datos básicos
   • Verificación de identidad

2️⃣ EXAMEN PRE-DONACIÓN (5 min)
   • Presión arterial
   • Nivel de hemoglobina (pinchazo en dedo)
   • Peso y temperatura
   • Cuestionario de salud

3️⃣ DONACIÓN (8-10 min)
   • Te sientas/recuestas cómodamente
   • Limpieza y antisepsia del brazo
   • Inserción de aguja
   • Extracción de sangre (~450ml)

4️⃣ RECUPERACIÓN (10-15 min)
   • Refrigerio nutritivo
   • Bebidas (jugos, agua)
   • Observación del personal
   • Entrega de certificado

⏱️ TIEMPO TOTAL: 45-60 minutos

¿Quieres saber más detalles de alguna etapa?`],followUp:["¿Te preocupa alguna etapa en particular?","¿Quieres saber qué sucede con tu sangre después?"]},pain:{keywords:["duele","dolor","molesta","aguja","pinchazo","lastima","miedo","nervioso","asusta"],responses:[`Entiendo tu preocupación, es muy común. Déjame ser honesto:

💉 LA REALIDAD:
• Sentirás un pinchazo inicial (2-3 segundos)
• Similar a un análisis de sangre rutinario
• Durante la donación: presión leve, sin dolor
• Algunas personas ni lo sienten

😌 TIPS PARA REDUCIR MOLESTIAS:
✓ No mires la aguja si te pone nervioso
✓ Respira profundo y relájate
✓ Conversa con el personal
✓ Aprieta una pelota anti-estrés

📊 DATO: El 95% de donantes dicen que es mucho menos doloroso de lo que esperaban.

¿Tienes fobia a las agujas o es solo preocupación normal?`,`Es normal tener esta duda. Te lo explico:

🎯 NIVEL DE DOLOR: 2/10

El momento del pinchazo es breve (2-3 seg). Después solo sientes una ligera presión. Muchos donantes leen, usan el celular o charlan durante la donación.

💪 ¿SABES QUÉ? Miles de personas donan a diario y la gran mayoría regresa porque se dan cuenta de que no es tan malo como imaginaban.

¿Qué más te preocupa del proceso?`]},preparation:{keywords:["preparar","antes","recomendaciones","qué hacer","previo","comer","desayuno","almuerzo"],responses:[`La preparación es clave para una donación exitosa:

🍽️ ALIMENTACIÓN:
✅ Come una comida completa 2-3 horas antes
✅ Incluye proteínas, carbohidratos y frutas
✅ Evita alimentos muy grasosos
❌ NUNCA dones en ayunas

💧 HIDRATACIÓN:
✅ Bebe al menos 500ml de agua antes
✅ Mantente hidratado el día anterior
❌ Evita alcohol 24-48h antes

😴 DESCANSO:
✅ Duerme bien (7-8 horas)
✅ Evita ejercicio intenso antes

📋 QUÉ LLEVAR:
✅ DNI o documento de identidad
✅ Ropa cómoda (mangas que se suban fácil)

¿Vas a donar pronto? ¿Necesitas ideas de qué comer?`,`¡Excelente que te prepares! Aquí el plan ideal:

📅 LA NOCHE ANTERIOR:
• Cena nutritiva
• Buena hidratación
• Descanso adecuado

🌅 EL DÍA DE LA DONACIÓN:
• Desayuno/almuerzo completo
• Mucha agua
• Evita café en exceso
• Viste cómodo

🍳 SUGERENCIAS DE COMIDA:
• Huevos con pan integral
• Frutas y yogurt
• Pollo o pescado con vegetales
• Cereales y lácteos

¿Para cuándo planeas donar?`],followUp:["¿Tienes alguna restricción alimenticia?","¿Necesitas ideas de menú pre-donación?"]},aftercare:{keywords:["después","post donación","cuidados","ejercicio","recuperación","que hago después","reacciones"],responses:[`Cuidados después de donar:

⏰ PRIMERAS HORAS (0-4h):
• Mantén el vendaje puesto 4-5 horas
• Evita levantar objetos pesados con ese brazo
• Si hay sangrado, presiona 5 min
• Bebe líquidos abundantes

🌙 RESTO DEL DÍA:
💧 Hidratación extra (2-3 litros)
🍽️ Come bien, especialmente alimentos con hierro
🚫 Nada de alcohol por 24h
⏸️ Evita ejercicio intenso
🚬 No fumar por varias horas

📅 DÍAS SIGUIENTES:
✅ Puedes retomar vida normal al día siguiente
✅ Incrementa consumo de hierro (carnes, espinaca, lentejas)

⚠️ SEÑALES DE ALARMA:
• Mareo persistente
• Sangrado que no para
• Moretón muy grande
• Dolor intenso
→ Contacta al centro de donación

¿Acabas de donar o es información para después?`]},sideEffects:{keywords:["mareo","náusea","efectos secundarios","síntomas","reacciones","me siento mal","débil"],responses:[`Efectos secundarios NORMALES y temporales:

✅ COMUNES (No te preocupes):
• Ligero mareo (5-10 min)
• Sensación de frío
• Cansancio leve
• Moretón pequeño en zona de punción

❗ MENOS COMUNES:
• Náuseas leves
• Dolor de cabeza
• Moretón más grande

🆘 CUÁNDO PREOCUPARSE:
• Mareo que dura más de 30 min
• Sangrado que no para después de 10 min de presión
• Dolor intenso en el brazo
• Fiebre

💡 PREVENCIÓN:
✓ Come y bebe bien antes
✓ Descansa después
✓ Avisa inmediatamente si te sientes mal

El 99% de donantes no tiene problemas. ¿Te sientes mal ahora o es pregunta preventiva?`]},bloodTypes:{keywords:["tipo de sangre","grupo sanguíneo","compatible","O negativo","AB","tipo O","A+","B-","rh"],responses:[`Los tipos de sangre y su importancia:

🅾️ TIPO O-:
• Donante UNIVERSAL
• Puede donar a todos
• Solo recibe de O-
• MUY DEMANDADO

🅰️ TIPO A:
• A+ dona a: A+, AB+
• A- dona a: A+, A-, AB+, AB-

🅱️ TIPO B:
• B+ dona a: B+, AB+
• B- dona a: B+, B-, AB+, AB-

🆎 TIPO AB+:
• Receptor UNIVERSAL (recibe de todos)
• Solo dona a AB+
• PLASMA muy valioso

💡 IMPORTANTE:
• TODOS los tipos son necesarios
• Cada tipo ayuda a diferentes pacientes
• No importa tu tipo, ¡tu sangre salvará vidas!

¿Conoces tu tipo de sangre? Si no, ¡lo sabrás cuando dones!`,`Sobre los tipos sanguíneos:

🩸 Hay 8 tipos principales: A+, A-, B+, B-, O+, O-, AB+, AB-

⭐ DATOS CURIOSOS:
• O+ es el más común (38% población)
• AB- es el más raro (1% población)
• O- es el más solicitado en emergencias
• AB+ tiene plasma universal

🎯 TU TIPO ES IMPORTANTE:
Cada tipo tiene receptores específicos que lo necesitan. No hay tipo "mejor" o "peor".

¿Sabes cuál es tu tipo?`],followUp:["¿Quieres saber quién puede recibir tu sangre?","¿Te gustaría conocer más sobre compatibilidad?"]},oNegative:{keywords:["O negativo","O-","universal"],responses:[`¡Wow! Si eres O negativo, eres parte de un grupo SÚPER especial:

⭐ DONANTE UNIVERSAL:
✓ Puedes donar a TODOS los tipos de sangre
✓ Solo 7% de la población mundial es O-
✓ Es el tipo MÁS solicitado en emergencias

🚨 POR QUÉ ES TAN IMPORTANTE:
• Usado en trauma y cirugías de emergencia
• Cuando no hay tiempo para identificar el tipo del paciente
• Para bebés recién nacidos
• En accidentes graves

💪 TU SANGRE SALVA MÁS VIDAS:
Mientras otros tipos pueden donar a 2-4 tipos, tú puedes donar a los 8 tipos.

🎯 Los centros de donación SIEMPRE necesitan O-. ¡Serías un héroe si donas regularmente!`]},safety:{keywords:["seguro","riesgo","enfermedades","contagio","infección","peligro","higiénico"],responses:[`¡Donar sangre es COMPLETAMENTE SEGURO! 💯

🔒 SEGURIDAD GARANTIZADA:
✅ Material 100% desechable
✅ Aguja nueva de paquete sellado
✅ Se usa UNA SOLA VEZ y se descarta
✅ Imposible contraer enfermedades
✅ Proceso supervisado por personal capacitado
✅ Instalaciones esterilizadas

🏥 PROTOCOLOS:
• Equipos aprobados por salud pública
• Normas internacionales de bioseguridad
• Profesionales certificados

💡 DATO IMPORTANTE:
La donación es MÁS segura que una extracción de sangre normal porque hay protocolos más estrictos.

¿Tienes alguna preocupación específica de seguridad?`]},medications:{keywords:["medicamentos","medicina","pastillas","fármacos","tratamiento","antibióticos","aspirina"],responses:[`Sobre medicamentos y donación:

✅ GENERALMENTE PERMITEN DONAR:
• Anticonceptivos
• Vitaminas y suplementos
• Medicamentos para presión controlada
• Antihistamínicos
• Medicamentos para tiroides

⚠️ PUEDEN REQUERIR ESPERA:
• Antibióticos (esperar 7-14 días después)
• Aspirina (esperar 48h)
• Anticoagulantes
• Isotretinoína (esperar 1 mes)

❌ GENERALMENTE NO PERMITEN:
• Algunos medicamentos para cáncer
• Ciertos medicamentos psiquiátricos
• Medicamentos experimentales

💡 IMPORTANTE:
👨‍⚕️ SIEMPRE informa al personal médico qué medicamentos tomas. Ellos determinarán si puedes donar.

¿Qué medicamento específico tomas? Te puedo orientar mejor.`,`La mayoría de medicamentos comunes NO impiden donar.

🔍 FACTORES QUE EVALÚAN:
• Tipo de medicamento
• Razón por la que lo tomas
• Tiempo desde la última dosis
• Tu condición de salud actual

📋 EN TU CITA:
El médico revisará tu lista de medicamentos y decidirá. No ocultes información.

¿Tomas algún medicamento en particular que te preocupe?`]},tattoo:{keywords:["tatuaje","piercing","perforación","tattoo","tatuado"],responses:[`Sobre tatuajes y piercings:

⏰ REGLA GENERAL:
Debes esperar 4 meses después de hacerte un tatuaje o piercing.

❓ ¿POR QUÉ?
• Período de ventana para descartar infecciones
• Protección tanto para ti como para el receptor
• Especialmente hepatitis B y C

✅ EXCEPCIONES:
• Si fue hecho en establecimiento regulado y con licencia
• Con equipo estéril desechable
• Algunos centros permiten donar antes

📅 DESPUÉS DE 4 MESES:
Puedes donar normalmente sin problema.

¿Te hiciste un tatuaje o piercing recientemente? ¿Hace cuánto?`]},pregnancy:{keywords:["embarazada","embarazo","lactancia","amamantando","parto","bebé"],responses:[`Embarazo, parto y lactancia:

🤰 DURANTE EL EMBARAZO:
❌ NO puedes donar
→ Tu cuerpo necesita toda la sangre para ti y el bebé

👶 DESPUÉS DEL PARTO:
Debes esperar:
• 6 meses si das pecho
• 3 meses si no amamantas

🤱 DURANTE LACTANCIA:
❌ No se recomienda donar
→ Tu cuerpo necesita nutrientes extras

💡 RAZONES:
• Proteger tu salud
• Asegurar nutrición del bebé
• Evitar anemia posparto
• Permitir recuperación completa

¿Estás embarazada o en etapa posparto? ¡Podrás donar después!`]},benefits:{keywords:["beneficios","ventajas","por qué donar","motivos","razones","para qué"],responses:[`Beneficios increíbles de donar sangre:

❤️ PARA OTROS:
• Salvas hasta 3 vidas por donación
• Ayudas en cirugías, accidentes, cáncer
• Apoyas a pacientes con anemia
• Esencial para tratamientos crónicos

💪 PARA TI:
✅ Chequeo médico GRATIS
✅ Análisis de sangre completo
✅ Conoces tu tipo de sangre
✅ Renovación celular (tu cuerpo genera sangre nueva)
✅ Reducción de riesgo cardiovascular
✅ Satisfacción personal enorme

🎁 EXTRAS:
• Certificado de donación
• Refrigerio nutritivo
• Algunas empresas dan día libre
• Prioridad si necesitas sangre

¿Sabías que los donantes regulares tienen mejor salud cardiovascular?`]},donation_destination:{keywords:["qué pasa con mi sangre","dónde va","quién la usa","destino","uso"],responses:[`Lo que sucede con tu sangre después de donar:

🔬 PROCESAMIENTO (24h):
1. Análisis de laboratorio completo
   • Tipo sanguíneo
   • VIH, hepatitis, sífilis
   • Otros patógenos
2. Separación en componentes:
   • Glóbulos rojos
   • Plasma
   • Plaquetas

💉 USOS ESPECÍFICOS:
🔴 Glóbulos rojos → Cirugías, accidentes, anemia
🟡 Plasma → Quemaduras, traumas, hemofilia
⚪ Plaquetas → Cáncer, quimioterapia, trasplantes

❄️ ALMACENAMIENTO:
• Glóbulos rojos: 35-42 días
• Plasma congelado: 1 año
• Plaquetas: 5 días

🏥 DISTRIBUCIÓN:
A hospitales según necesidad urgente.

🌟 TU IMPACTO:
1 donación = hasta 3 vidas salvadas

¿Increíble verdad? Tu sangre se optimiza al máximo.`]},locations:{keywords:["dónde donar","centro","ubicación","lugar","hospital","banco de sangre"],responses:[`Puedes donar en varios lugares:

🏥 HOSPITALES:
La mayoría tienen banco de sangre. Verifica horarios.

🩸 BANCOS DE SANGRE:
Centros especializados en donación.

🚐 JORNADAS MÓVILES:
Busca campañas en empresas, universidades, centros comerciales.

📍 CÓMO ENCONTRAR:
• Google Maps: "banco de sangre cerca de mi"
• Cruz Roja local
• Sitio web del Ministerio de Salud
• Hospitales públicos principales

💡 RECOMENDACIÓN:
Llama antes para:
✓ Confirmar horarios
✓ Saber si necesitas cita
✓ Preguntar requisitos específicos

¿En qué ciudad te encuentras? Te puedo orientar mejor.`]},cost:{keywords:["costo","precio","gratis","pagan","cobran","cuanto cuesta","dinero"],responses:[`Sobre el costo de donar:

💰 DONAR ES GRATIS:
❌ NO pagas nada
❌ NO te pagan (sería venta de sangre, ilegal)
✅ Es un acto voluntario y altruista

🎁 LO QUE RECIBES:
• Chequeo médico gratis
• Análisis de sangre
• Refrigerio nutritivo
• Certificado de donación
• Satisfacción inmensa

⚠️ IMPORTANTE:
En muchos países es ILEGAL pagar por sangre porque:
• Puede incentivar a personas no aptas
• Compromete la seguridad
• La sangre debe ser donación voluntaria

❤️ LA RECOMPENSA:
No es monetaria, es saber que salvaste vidas. ¡No tiene precio!`]},covid:{keywords:["covid","coronavirus","vacuna covid","pandemia","contagiado"],responses:[`Sobre COVID-19 y donación:

💉 SI TE VACUNASTE:
✅ Puedes donar inmediatamente (la mayoría de vacunas)
✅ No afecta la calidad de tu sangre

🦠 SI TUVISTE COVID:
Debes esperar:
• 14 días después de recuperación completa
• Sin síntomas
• Sin medicamentos activos

😷 MEDIDAS EN CENTROS:
• Uso de mascarilla
• Distanciamiento
• Sanitización constante
• Protocolos de bioseguridad

💡 DATO IMPORTANTE:
La necesidad de sangre AUMENTÓ durante la pandemia, pero las donaciones bajaron. ¡Tu donación es más importante que nunca!

¿Te vacunaste o tuviste COVID recientemente?`]},diseases:{keywords:["diabetes","hipertensión","presión alta","asma","alergias","enfermedad"],responses:[`Sobre condiciones médicas comunes:

✅ GENERALMENTE PUEDES DONAR SI TIENES:
• Diabetes controlada con dieta o medicamentos orales
• Hipertensión controlada con medicación
• Asma controlada
• Alergias (sin brote activo)
• Hipotiroidismo tratado

⚠️ DEPENDE DEL CASO:
• Diabetes con insulina (evaluación médica)
• Presión muy descontrolada
• Asma con crisis recientes

❌ GENERALMENTE NO PUEDES SI:
• Enfermedad cardíaca grave
• Hepatitis B o C
• VIH/SIDA
• Cáncer activo (algunos en remisión sí pueden)
• Epilepsia no controlada

👨‍⚕️ IMPORTANTE:
Cada caso es único. En tu cita, el médico evaluará TU situación específica.

¿Tienes alguna condición médica particular que te preocupe?`]},travel:{keywords:["viaje","viajé","país","exterior","malaria","zona endémica"],responses:[`Sobre viajes y donación:

✈️ VIAJES A CONSIDERAR:

🌍 DESTINOS REGULARES:
Si viajaste a Europa, Norteamérica, países sin malaria:
✅ Generalmente puedes donar de inmediato

🦟 ZONAS DE MALARIA:
Si viajaste a áreas endémicas (África, partes de Asia, Latinoamérica):
⏰ Espera 3 meses - 3 años (depende del país)

🐄 REINO UNIDO (antes de 1996):
⏰ Puede haber restricciones por encefalopatía espongiforme

💡 IMPORTANTE:
• Menciona TODOS tus viajes en el cuestionario
• El personal determinará si hay restricción
• Es por seguridad del receptor

¿A dónde viajaste recientemente?`]},iron:{keywords:["hierro","anemia","hemoglobina","ferritina","bajo hierro"],responses:[`Sobre hierro y hemoglobina:

🩸 NIVELES MÍNIMOS PARA DONAR:
• Hombres: 13 g/dL
• Mujeres: 12.5 g/dL

⚠️ SI TIENES ANEMIA:
❌ No podrás donar hasta que se normalice

💊 CÓMO AUMENTAR EL HIERRO:

🍖 ALIMENTOS RICOS EN HIERRO:
• Carnes rojas (res, hígado)
• Pollo y pescado
• Lentejas y frijoles
• Espinaca y acelga
• Cereales fortificados

🍊 MEJORA LA ABSORCIÓN:
✓ Combina con vitamina C (naranja, limón)
✓ Evita café/té con comidas (bloquean absorción)

💊 SUPLEMENTOS:
Si es necesario, consulta con tu médico.

⏰ DESPUÉS DE DONAR:
Aumenta consumo de hierro por 2-3 semanas.

¿Te rechazaron por hemoglobina baja o es pregunta preventiva?`]},fear:{keywords:["miedo","temor","asustado","nervioso","ansiedad","pánico","fobia"],responses:[`Entiendo perfectamente tu miedo, es MUY común:

😰 MIEDOS FRECUENTES:
1. A las agujas
2. A desmayarse
3. Ver sangre
4. Lo desconocido

💪 CÓMO SUPERARLO:

📢 HABLA:
✓ Dile al personal que estás nervioso
✓ Ellos están entrenados para ayudarte
✓ Son súper comprensivos y pacientes

🙈 NO MIRES:
✓ Voltea la cara durante la punción
✓ Charla con el personal
✓ Usa tu celular
✓ Escucha música

😮‍💨 RESPIRA:
✓ Respiraciones profundas
✓ Relaja los músculos
✓ Piensa en lo positivo (vas a salvar vidas)

👥 ACOMPAÑANTE:
✓ Lleva a alguien contigo
✓ Te dará confianza

📊 ESTADÍSTICA:
99% de personas que donan por primera vez dicen: "No fue tan malo como pensé"

🌟 MILES donan diariamente y sobreviven perfectamente. ¡Tú también puedes!

¿Qué específicamente te da más miedo?`]}},c=["¿Es mi primera vez, qué espero?","¿Duele mucho la aguja?","¿Cuáles son los requisitos?","¿Con qué frecuencia puedo donar?","¿Qué beneficios tiene donar?"];function u(){R(a,!v(a))}function f(S){const z=S.toLowerCase();let I=null,P=0;for(const[q,D]of Object.entries(l))for(const V of D.keywords)if(z.includes(V)){const fe=V.length;fe>P&&(P=fe,I=q)}if(I){const q=l[I],D=q.responses[Math.floor(Math.random()*q.responses.length)];if(q.followUp&&Math.random()>.5){const V=q.followUp[Math.floor(Math.random()*q.followUp.length)];return D+`

💭 `+V}return R(i,[...v(i),I],!0),D}return z.length<10?"Cuéntame más. ¿Qué te gustaría saber específicamente sobre la donación de sangre? 🤔":`Entiendo tu pregunta. Aunque no tengo información específica sobre eso, te puedo ayudar con:

❓ Requisitos para donar
💉 Proceso de donación
🩸 Tipos de sangre
💊 Medicamentos y condiciones médicas
😰 Miedos y preocupaciones
🏥 Preparación y cuidados

¿Sobre cuál de estos temas te gustaría saber más?`}function d(){if(!v(t).trim())return;R(s,[...v(s),{type:"user",text:v(t),timestamp:new Date}],!0);const S=v(t);R(t,""),R(o,!0),setTimeout(()=>{R(o,!1);const z=f(S);R(s,[...v(s),{type:"bot",text:z,timestamp:new Date}],!0),setTimeout(()=>{r&&(r.scrollTop=r.scrollHeight)},100)},800),setTimeout(()=>{r&&(r.scrollTop=r.scrollHeight)},50)}function h(S){R(t,S,!0),d()}function g(S){S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),d())}function E(){R(s,[{type:"bot",text:"¡Hola de nuevo! 👋 ¿En qué más puedo ayudarte?",timestamp:new Date}],!0),R(i,[],!0)}var m=Nr(),b=Nn(m);{var x=S=>{var z=gr();z.__click=u,A(S,z)};le(b,S=>{v(a)||S(x)})}var y=_(b,2);{var M=S=>{var z=Tr(),I=p(z),P=_(p(I),2);P.__click=u;var q=_(I,2),D=p(q);$(D,17,()=>v(s),Q,(B,J)=>{var K=Er(),ve=p(K);{var Ne=ge=>{var on=br();A(ge,on)};le(ve,ge=>{v(J).type==="bot"&&ge(Ne)})}var ze=_(ve,2),rn=p(ze),qe=p(rn);L(()=>{zn(K,1,`message ${v(J).type??""}`,"svelte-1czjriu"),T(qe,v(J).text)}),A(B,K)});var V=_(D,2);{var fe=B=>{var J=yr();A(B,J)};le(V,B=>{v(o)&&B(fe)})}var De=_(V,2);{var Ge=B=>{var J=Sr(),K=_(p(J),2);$(K,17,()=>c,Q,(ve,Ne)=>{var ze=Ar();ze.__click=()=>h(v(Ne));var rn=p(ze);L(()=>T(rn,v(Ne))),A(ve,ze)}),A(B,J)};le(De,B=>{v(s).length===1&&B(Ge)})}var sn=_(De,2);{var Pn=B=>{var J=wr(),K=p(J);K.__click=E,A(B,J)};le(sn,B=>{v(s).length>6&&B(Pn)})}zt(q,B=>r=B,()=>r);var Te=_(q,2),_e=p(Te),tn=_(_e,2);tn.__click=d,ia("keypress",_e,g),Dt(_e,()=>v(t),B=>R(t,B)),A(S,z)};le(y,S=>{v(a)&&S(M)})}A(e,m),_n()}Dn(["click"]);var Cr=N('<div class="app"><!> <main><!> <!> <!> <!> <!> <!> <!></main> <!> <!></div>');function Or(e){var n=Cr(),a=p(n);jt(a);var s=_(a,2),t=p(s);Ut(t);var r=_(t,2);Vt(r,{});var i=_(r,2);$t(i);var o=_(i,2);Xt(o);var l=_(o,2);tr(l);var c=_(l,2);lr(c,{});var u=_(c,2);vr(u);var f=_(s,2);_r(f,{});var d=_(f,2);qr(d,{}),A(e,n)}bt(Or,{target:document.getElementById("app")});
