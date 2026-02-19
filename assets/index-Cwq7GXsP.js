(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const On=!1;var fa=Array.isArray,os=Array.prototype.indexOf,je=Array.prototype.includes,pn=Array.from,ls=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,va=Object.getOwnPropertyDescriptors,cs=Object.prototype,us=Array.prototype,Fn=Object.getPrototypeOf,Jn=Object.isExtensible;function ds(e){return e()}function Rn(e){for(var n=0;n<e.length;n++)e[n]()}function pa(){var e,n,a=new Promise((s,t)=>{e=s,n=t});return{promise:a,resolve:e,reject:n}}const H=2,dn=4,en=8,ma=1<<24,_e=16,le=32,Pe=64,Hn=128,ae=512,B=1024,$=2048,de=4096,X=8192,ye=16384,Vn=32768,Be=65536,Xn=1<<17,ha=1<<18,Ge=1<<19,_a=1<<20,pe=1<<25,De=32768,xn=1<<21,Gn=1<<22,Ae=1<<23,Le=Symbol("$state"),fs=Symbol(""),Me=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function vs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ps(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ms(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function hs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function _s(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function gs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Es(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ys(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const As=1,Ss=2,ga=4,ws=8,Ts=16,qs=1,Cs=2,F=Symbol(),Ns="http://www.w3.org/1999/xhtml";function Os(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ba(e){return e===this.v}function Rs(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ea(e){return!Rs(e,this.v)}let mn=!1,xs=!1;function Ds(){mn=!0}let k=null;function Ue(e){k=e}function hn(e,n=!1,a){k={p:k,i:!1,c:null,e:null,s:e,x:null,l:mn&&!n?{s:null,u:null,$:[]}:null}}function _n(e){var n=k,a=n.e;if(a!==null){n.e=null;for(var s of a)Ua(s)}return n.i=!0,k=n.p,{}}function nn(){return!mn||k!==null&&k.l===null}let Ce=[];function ya(){var e=Ce;Ce=[],Rn(e)}function me(e){if(Ce.length===0&&!Je){var n=Ce;queueMicrotask(()=>{n===Ce&&ya()})}Ce.push(e)}function Is(){for(;Ce.length>0;)ya()}function Aa(e){var n=C;if(n===null)return A.f|=Ae,e;if((n.f&Vn)===0){if((n.f&Hn)===0)throw e;n.b.error(e)}else Fe(e,n)}function Fe(e,n){for(;n!==null;){if((n.f&Hn)!==0)try{n.b.error(e);return}catch(a){e=a}n=n.parent}throw e}const zs=-7169;function M(e,n){e.f=e.f&zs|n}function Qn(e){(e.f&ae)!==0||e.deps===null?M(e,B):M(e,de)}function Sa(e){if(e!==null)for(const n of e)(n.f&H)===0||(n.f&De)===0||(n.f^=De,Sa(n.deps))}function wa(e,n,a){(e.f&$)!==0?n.add(e):(e.f&de)!==0&&a.add(e),Sa(e.deps),M(e,B)}const cn=new Set;let q=null,Dn=null,ie=null,J=[],gn=null,In=!1,Je=!1;class Se{committed=!1;current=new Map;previous=new Map;#n=new Set;#i=new Set;#e=0;#t=0;#r=null;#s=new Set;#a=new Set;skipped_effects=new Set;is_fork=!1;#o=!1;is_deferred(){return this.is_fork||this.#t>0}process(n){J=[],this.apply();var a=[],s=[];for(const t of n)this.#l(t,a,s);if(this.is_deferred()){this.#c(s),this.#c(a);for(const t of this.skipped_effects)Na(t)}else{for(const t of this.#n)t();this.#n.clear(),this.#e===0&&this.#u(),Dn=this,q=null,ea(s),ea(a),Dn=null,this.#r?.resolve()}ie=null}#l(n,a,s){n.f^=B;for(var t=n.first,r=null;t!==null;){var i=t.f,o=(i&(le|Pe))!==0,l=o&&(i&B)!==0,c=l||(i&X)!==0||this.skipped_effects.has(t);if(!c&&t.fn!==null){o?t.f^=B:r!==null&&(i&(dn|en|ma))!==0?r.b.defer_effect(t):(i&dn)!==0?a.push(t):Qe(t)&&((i&_e)!==0&&this.#a.add(t),Ve(t));var u=t.first;if(u!==null){t=u;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)f===r&&(r=null),t=f.next,f=f.parent}}#c(n){for(var a=0;a<n.length;a+=1)wa(n[a],this.#s,this.#a)}capture(n,a){a!==F&&!this.previous.has(n)&&this.previous.set(n,a),(n.f&Ae)===0&&(this.current.set(n,n.v),ie?.set(n,n.v))}activate(){q=this,this.apply()}deactivate(){q===this&&(q=null,ie=null)}flush(){if(this.activate(),J.length>0){if(Ta(),q!==null&&q!==this)return}else this.#e===0&&this.process([]);this.deactivate()}discard(){for(const n of this.#i)n(this);this.#i.clear()}#u(){if(cn.size>1){this.previous.clear();var n=ie,a=!0;for(const t of cn){if(t===this){a=!1;continue}const r=[];for(const[o,l]of this.current){if(t.current.has(o))if(a&&l!==t.current.get(o))t.current.set(o,l);else continue;r.push(o)}if(r.length===0)continue;const i=[...t.current.keys()].filter(o=>!this.current.has(o));if(i.length>0){var s=J;J=[];const o=new Set,l=new Map;for(const c of r)qa(c,i,o,l);if(J.length>0){q=t,t.apply();for(const c of J)t.#l(c,[],[]);t.deactivate()}J=s}}q=null,ie=n}this.committed=!0,cn.delete(this)}increment(n){this.#e+=1,n&&(this.#t+=1)}decrement(n){this.#e-=1,n&&(this.#t-=1),!this.#o&&(this.#o=!0,me(()=>{this.#o=!1,this.is_deferred()?J.length>0&&this.flush():this.revive()}))}revive(){for(const n of this.#s)this.#a.delete(n),M(n,$),he(n);for(const n of this.#a)M(n,de),he(n);this.flush()}oncommit(n){this.#n.add(n)}ondiscard(n){this.#i.add(n)}settled(){return(this.#r??=pa()).promise}static ensure(){if(q===null){const n=q=new Se;cn.add(q),Je||me(()=>{q===n&&n.flush()})}return q}apply(){}}function Ps(e){var n=Je;Je=!0;try{for(var a;;){if(Is(),J.length===0&&(q?.flush(),J.length===0))return gn=null,a;Ta()}}finally{Je=n}}function Ta(){In=!0;var e=null;try{for(var n=0;J.length>0;){var a=Se.ensure();if(n++>1e3){var s,t;ks()}a.process(J),we.clear()}}finally{In=!1,gn=null}}function ks(){try{_s()}catch(e){Fe(e,gn)}}let ve=null;function ea(e){var n=e.length;if(n!==0){for(var a=0;a<n;){var s=e[a++];if((s.f&(ye|X))===0&&Qe(s)&&(ve=new Set,Ve(s),s.deps===null&&s.first===null&&s.nodes===null&&(s.teardown===null&&s.ac===null?Va(s):s.fn=null),ve?.size>0)){we.clear();for(const t of ve){if((t.f&(ye|X))!==0)continue;const r=[t];let i=t.parent;for(;i!==null;)ve.has(i)&&(ve.delete(i),r.push(i)),i=i.parent;for(let o=r.length-1;o>=0;o--){const l=r[o];(l.f&(ye|X))===0&&Ve(l)}}ve.clear()}}ve=null}}function qa(e,n,a,s){if(!a.has(e)&&(a.add(e),e.reactions!==null))for(const t of e.reactions){const r=t.f;(r&H)!==0?qa(t,n,a,s):(r&(Gn|_e))!==0&&(r&$)===0&&Ca(t,n,s)&&(M(t,$),he(t))}}function Ca(e,n,a){const s=a.get(e);if(s!==void 0)return s;if(e.deps!==null)for(const t of e.deps){if(je.call(n,t))return!0;if((t.f&H)!==0&&Ca(t,n,a))return a.set(t,!0),!0}return a.set(e,!1),!1}function he(e){for(var n=gn=e;n.parent!==null;){n=n.parent;var a=n.f;if(In&&n===C&&(a&_e)!==0&&(a&ha)===0)return;if((a&(Pe|le))!==0){if((a&B)===0)return;n.f^=B}}J.push(n)}function Na(e){if(!((e.f&le)!==0&&(e.f&B)!==0)){M(e,B);for(var n=e.first;n!==null;)Na(n),n=n.next}}function Ms(e){let n=0,a=Ie(0),s;return()=>{Yn()&&(m(a),sn(()=>(n===0&&(s=ce(()=>e(()=>Xe(a)))),n+=1,()=>{me(()=>{n-=1,n===0&&(s?.(),s=void 0,Xe(a))})})))}}var Ls=Be|Ge|Hn;function js(e,n,a){new Bs(e,n,a)}class Bs{parent;is_pending=!1;#n;#i=null;#e;#t;#r;#s=null;#a=null;#o=null;#l=null;#c=null;#u=0;#f=0;#p=!1;#v=!1;#m=new Set;#h=new Set;#d=null;#y=Ms(()=>(this.#d=Ie(this.#u),()=>{this.#d=null}));constructor(n,a,s){this.#n=n,this.#e=a,this.#t=s,this.parent=C.b,this.is_pending=!!this.#e.pending,this.#r=Kn(()=>{C.b=this;{var t=this.#b();try{this.#s=ne(()=>s(t))}catch(r){this.error(r)}this.#f>0?this.#g():this.is_pending=!1}return()=>{this.#c?.remove()}},Ls)}#A(){try{this.#s=ne(()=>this.#t(this.#n))}catch(n){this.error(n)}}#S(){const n=this.#e.pending;n&&(this.#a=ne(()=>n(this.#n)),me(()=>{var a=this.#b();this.#s=this.#_(()=>(Se.ensure(),ne(()=>this.#t(a)))),this.#f>0?this.#g():(Re(this.#a,()=>{this.#a=null}),this.is_pending=!1)}))}#b(){var n=this.#n;return this.is_pending&&(this.#c=Te(),this.#n.before(this.#c),n=this.#c),n}defer_effect(n){wa(n,this.#m,this.#h)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#_(n){var a=C,s=A,t=k;ue(this.#r),te(this.#r),Ue(this.#r.ctx);try{return n()}catch(r){return Aa(r),null}finally{ue(a),te(s),Ue(t)}}#g(){const n=this.#e.pending;this.#s!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#c),$a(this.#s,this.#l)),this.#a===null&&(this.#a=ne(()=>n(this.#n)))}#E(n){if(!this.has_pending_snippet()){this.parent&&this.parent.#E(n);return}if(this.#f+=n,this.#f===0){this.is_pending=!1;for(const a of this.#m)M(a,$),he(a);for(const a of this.#h)M(a,de),he(a);this.#m.clear(),this.#h.clear(),this.#a&&Re(this.#a,()=>{this.#a=null}),this.#l&&(this.#n.before(this.#l),this.#l=null)}}update_pending_count(n){this.#E(n),this.#u+=n,!(!this.#d||this.#p)&&(this.#p=!0,me(()=>{this.#p=!1,this.#d&&He(this.#d,this.#u)}))}get_effect_pending(){return this.#y(),m(this.#d)}error(n){var a=this.#e.onerror;let s=this.#e.failed;if(this.#v||!a&&!s)throw n;this.#s&&(W(this.#s),this.#s=null),this.#a&&(W(this.#a),this.#a=null),this.#o&&(W(this.#o),this.#o=null);var t=!1,r=!1;const i=()=>{if(t){Os();return}t=!0,r&&ys(),Se.ensure(),this.#u=0,this.#o!==null&&Re(this.#o,()=>{this.#o=null}),this.is_pending=this.has_pending_snippet(),this.#s=this.#_(()=>(this.#v=!1,ne(()=>this.#t(this.#n)))),this.#f>0?this.#g():this.is_pending=!1};me(()=>{try{r=!0,a?.(n,i),r=!1}catch(o){Fe(o,this.#r&&this.#r.parent)}s&&(this.#o=this.#_(()=>{Se.ensure(),this.#v=!0;try{return ne(()=>{s(this.#n,()=>n,()=>i)})}catch(o){return Fe(o,this.#r.parent),null}finally{this.#v=!1}}))})}}function Us(e,n,a,s){const t=nn()?bn:Oa;var r=e.filter(d=>!d.settled);if(a.length===0&&r.length===0){s(n.map(t));return}var i=q,o=C,l=Fs(),c=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(d=>d.promise)):null;function u(d){l();try{s(d)}catch(h){(o.f&ye)===0&&Fe(h,o)}i?.deactivate(),zn()}if(a.length===0){c.then(()=>u(n.map(t)));return}function f(){l(),Promise.all(a.map(d=>Hs(d))).then(d=>u([...n.map(t),...d])).catch(d=>Fe(d,o))}c?c.then(f):f()}function Fs(){var e=C,n=A,a=k,s=q;return function(r=!0){ue(e),te(n),Ue(a),r&&s?.activate()}}function zn(){ue(null),te(null),Ue(null)}function bn(e){var n=H|$,a=A!==null&&(A.f&H)!==0?A:null;return C!==null&&(C.f|=Ge),{ctx:k,deps:null,effects:null,equals:ba,f:n,fn:e,reactions:null,rv:0,v:F,wv:0,parent:a??C,ac:null}}function Hs(e,n,a){let s=C;s===null&&vs();var t=s.b,r=void 0,i=Ie(F),o=!A,l=new Map;return st(()=>{var c=pa();r=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject).then(()=>{u===q&&u.committed&&u.deactivate(),zn()})}catch(h){c.reject(h),zn()}var u=q;if(o){var f=t.is_rendered();t.update_pending_count(1),u.increment(f),l.get(u)?.reject(Me),l.delete(u),l.set(u,c)}const d=(h,g=void 0)=>{if(u.activate(),g)g!==Me&&(i.f|=Ae,He(i,g));else{(i.f&Ae)!==0&&(i.f^=Ae),He(i,h);for(const[E,p]of l){if(l.delete(E),E===u)break;p.reject(Me)}}o&&(t.update_pending_count(-1),u.decrement(f))};c.promise.then(d,h=>d(null,h||"unknown"))}),Ba(()=>{for(const c of l.values())c.reject(Me)}),new Promise(c=>{function u(f){function d(){f===r?c(i):u(r)}f.then(d,d)}u(r)})}function Vs(e){const n=bn(e);return Ya(n),n}function Oa(e){const n=bn(e);return n.equals=Ea,n}function Ra(e){var n=e.effects;if(n!==null){e.effects=null;for(var a=0;a<n.length;a+=1)W(n[a])}}function Gs(e){for(var n=e.parent;n!==null;){if((n.f&H)===0)return(n.f&ye)===0?n:null;n=n.parent}return null}function $n(e){var n,a=C;ue(Gs(e));try{e.f&=~De,Ra(e),n=Ja(e)}finally{ue(a)}return n}function xa(e){var n=$n(e);if(!e.equals(n)&&(e.wv=Wa(),(!q?.is_fork||e.deps===null)&&(e.v=n,e.deps===null))){M(e,B);return}ze||(ie!==null?(Yn()||q?.is_fork)&&ie.set(e,n):Qn(e))}let Pn=new Set;const we=new Map;let Da=!1;function Ie(e,n){var a={f:0,v:e,reactions:null,equals:ba,rv:0,wv:0};return a}function V(e,n){const a=Ie(e);return Ya(a),a}function kn(e,n=!1,a=!0){const s=Ie(e);return n||(s.equals=Ea),mn&&a&&k!==null&&k.l!==null&&(k.l.s??=[]).push(s),s}function I(e,n,a=!1){A!==null&&(!oe||(A.f&Xn)!==0)&&nn()&&(A.f&(H|_e|Gn|Xn))!==0&&(se===null||!je.call(se,e))&&Es();let s=a?Ne(n):n;return He(e,s)}function He(e,n){if(!e.equals(n)){var a=e.v;ze?we.set(e,n):we.set(e,a),e.v=n;var s=Se.ensure();if(s.capture(e,a),(e.f&H)!==0){const t=e;(e.f&$)!==0&&$n(t),Qn(t)}e.wv=Wa(),Ia(e,$),nn()&&C!==null&&(C.f&B)!==0&&(C.f&(le|Pe))===0&&(ee===null?it([e]):ee.push(e)),!s.is_fork&&Pn.size>0&&!Da&&Qs()}return n}function Qs(){Da=!1;for(const e of Pn)(e.f&B)!==0&&M(e,de),Qe(e)&&Ve(e);Pn.clear()}function Xe(e){I(e,e.v+1)}function Ia(e,n){var a=e.reactions;if(a!==null)for(var s=nn(),t=a.length,r=0;r<t;r++){var i=a[r],o=i.f;if(!(!s&&i===C)){var l=(o&$)===0;if(l&&M(i,n),(o&H)!==0){var c=i;ie?.delete(c),(o&De)===0&&(o&ae&&(i.f|=De),Ia(c,de))}else l&&((o&_e)!==0&&ve!==null&&ve.add(i),he(i))}}}function Ne(e){if(typeof e!="object"||e===null||Le in e)return e;const n=Fn(e);if(n!==cs&&n!==us)return e;var a=new Map,s=fa(e),t=V(0),r=xe,i=o=>{if(xe===r)return o();var l=A,c=xe;te(null),ra(r);var u=o();return te(l),ra(c),u};return s&&a.set("length",V(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&gs();var u=a.get(l);return u===void 0?u=i(()=>{var f=V(c.value);return a.set(l,f),f}):I(u,c.value,!0),!0},deleteProperty(o,l){var c=a.get(l);if(c===void 0){if(l in o){const u=i(()=>V(F));a.set(l,u),Xe(t)}}else I(c,F),Xe(t);return!0},get(o,l,c){if(l===Le)return e;var u=a.get(l),f=l in o;if(u===void 0&&(!f||Ze(o,l)?.writable)&&(u=i(()=>{var h=Ne(f?o[l]:F),g=V(h);return g}),a.set(l,u)),u!==void 0){var d=m(u);return d===F?void 0:d}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=a.get(l);u&&(c.value=m(u))}else if(c===void 0){var f=a.get(l),d=f?.v;if(f!==void 0&&d!==F)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(o,l){if(l===Le)return!0;var c=a.get(l),u=c!==void 0&&c.v!==F||Reflect.has(o,l);if(c!==void 0||C!==null&&(!u||Ze(o,l)?.writable)){c===void 0&&(c=i(()=>{var d=u?Ne(o[l]):F,h=V(d);return h}),a.set(l,c));var f=m(c);if(f===F)return!1}return u},set(o,l,c,u){var f=a.get(l),d=l in o;if(s&&l==="length")for(var h=c;h<f.v;h+=1){var g=a.get(h+"");g!==void 0?I(g,F):h in o&&(g=i(()=>V(F)),a.set(h+"",g))}if(f===void 0)(!d||Ze(o,l)?.writable)&&(f=i(()=>V(void 0)),I(f,Ne(c)),a.set(l,f));else{d=f.v!==F;var E=i(()=>Ne(c));I(f,E)}var p=Reflect.getOwnPropertyDescriptor(o,l);if(p?.set&&p.set.call(u,c),!d){if(s&&typeof l=="string"){var b=a.get("length"),N=Number(l);Number.isInteger(N)&&N>=b.v&&I(b,N+1)}Xe(t)}return!0},ownKeys(o){m(t);var l=Reflect.ownKeys(o).filter(f=>{var d=a.get(f);return d===void 0||d.v!==F});for(var[c,u]of a)u.v!==F&&!(c in o)&&l.push(c);return l},setPrototypeOf(){bs()}})}var na,za,Pa,ka;function $s(){if(na===void 0){na=window,za=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,a=Text.prototype;Pa=Ze(n,"firstChild").get,ka=Ze(n,"nextSibling").get,Jn(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Jn(a)&&(a.__t=void 0)}}function Te(e=""){return document.createTextNode(e)}function fn(e){return Pa.call(e)}function an(e){return ka.call(e)}function v(e,n){return fn(e)}function Ma(e,n=!1){{var a=fn(e);return a instanceof Comment&&a.data===""?an(a):a}}function _(e,n=1,a=!1){let s=e;for(;n--;)s=an(s);return s}function Ys(e){e.textContent=""}function La(){return!1}let aa=!1;function Ks(){aa||(aa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const n of e.target.elements)n.__on_r?.()})},{capture:!0}))}function En(e){var n=A,a=C;te(null),ue(null);try{return e()}finally{te(n),ue(a)}}function Ws(e,n,a,s=a){e.addEventListener(n,()=>En(a));const t=e.__on_r;t?e.__on_r=()=>{t(),s(!0)}:e.__on_r=()=>s(!0),Ks()}function ja(e){C===null&&(A===null&&hs(),ms()),ze&&ps()}function Zs(e,n){var a=n.last;a===null?n.last=n.first=e:(a.next=e,e.prev=a,n.last=e)}function fe(e,n,a){var s=C;s!==null&&(s.f&X)!==0&&(e|=X);var t={ctx:k,deps:null,nodes:null,f:e|$|ae,first:null,fn:n,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,wv:0,ac:null};if(a)try{Ve(t),t.f|=Vn}catch(o){throw W(t),o}else n!==null&&he(t);var r=t;if(a&&r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Ge)===0&&(r=r.first,(e&_e)!==0&&(e&Be)!==0&&r!==null&&(r.f|=Be)),r!==null&&(r.parent=s,s!==null&&Zs(r,s),A!==null&&(A.f&H)!==0&&(e&Pe)===0)){var i=A;(i.effects??=[]).push(r)}return t}function Yn(){return A!==null&&!oe}function Ba(e){const n=fe(en,null,!1);return M(n,B),n.teardown=e,n}function sa(e){ja();var n=C.f,a=!A&&(n&le)!==0&&(n&Vn)===0;if(a){var s=k;(s.e??=[]).push(e)}else return Ua(e)}function Ua(e){return fe(dn|_a,e,!1)}function Js(e){return ja(),fe(en|_a,e,!0)}function Xs(e){Se.ensure();const n=fe(Pe|Ge,e,!0);return(a={})=>new Promise(s=>{a.outro?Re(n,()=>{W(n),s(void 0)}):(W(n),s(void 0))})}function et(e){return fe(dn,e,!1)}function nt(e,n){var a=k,s={effect:null,ran:!1,deps:e};a.l.$.push(s),s.effect=sn(()=>{e(),!s.ran&&(s.ran=!0,ce(n))})}function at(){var e=k;sn(()=>{for(var n of e.l.$){n.deps();var a=n.effect;(a.f&B)!==0&&a.deps!==null&&M(a,de),Qe(a)&&Ve(a),n.ran=!1}})}function st(e){return fe(Gn|Ge,e,!0)}function sn(e,n=0){return fe(en|n,e,!0)}function j(e,n=[],a=[],s=[]){Us(s,n,a,t=>{fe(en,()=>e(...t.map(m)),!0)})}function Kn(e,n=0){var a=fe(_e|n,e,!0);return a}function ne(e){return fe(le|Ge,e,!0)}function Fa(e){var n=e.teardown;if(n!==null){const a=ze,s=A;ta(!0),te(null);try{n.call(null)}finally{ta(a),te(s)}}}function Ha(e,n=!1){var a=e.first;for(e.first=e.last=null;a!==null;){const t=a.ac;t!==null&&En(()=>{t.abort(Me)});var s=a.next;(a.f&Pe)!==0?a.parent=null:W(a,n),a=s}}function tt(e){for(var n=e.first;n!==null;){var a=n.next;(n.f&le)===0&&W(n),n=a}}function W(e,n=!0){var a=!1;(n||(e.f&ha)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(rt(e.nodes.start,e.nodes.end),a=!0),Ha(e,n&&!a),vn(e,0),M(e,ye);var s=e.nodes&&e.nodes.t;if(s!==null)for(const r of s)r.stop();Fa(e);var t=e.parent;t!==null&&t.first!==null&&Va(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function rt(e,n){for(;e!==null;){var a=e===n?null:an(e);e.remove(),e=a}}function Va(e){var n=e.parent,a=e.prev,s=e.next;a!==null&&(a.next=s),s!==null&&(s.prev=a),n!==null&&(n.first===e&&(n.first=s),n.last===e&&(n.last=a))}function Re(e,n,a=!0){var s=[];Ga(e,s,!0);var t=()=>{a&&W(e),n&&n()},r=s.length;if(r>0){var i=()=>--r||t();for(var o of s)o.out(i)}else t()}function Ga(e,n,a){if((e.f&X)===0){e.f^=X;var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||a)&&n.push(o);for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Be)!==0||(t.f&le)!==0&&(e.f&_e)!==0;Ga(t,n,i?a:!1),t=r}}}function Wn(e){Qa(e,!0)}function Qa(e,n){if((e.f&X)!==0){e.f^=X,(e.f&B)===0&&(M(e,$),he(e));for(var a=e.first;a!==null;){var s=a.next,t=(a.f&Be)!==0||(a.f&le)!==0;Qa(a,t?n:!1),a=s}var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)(i.is_global||n)&&i.in()}}function $a(e,n){if(e.nodes)for(var a=e.nodes.start,s=e.nodes.end;a!==null;){var t=a===s?null:an(a);n.append(a),a=t}}let un=!1,ze=!1;function ta(e){ze=e}let A=null,oe=!1;function te(e){A=e}let C=null;function ue(e){C=e}let se=null;function Ya(e){A!==null&&(se===null?se=[e]:se.push(e))}let K=null,Z=0,ee=null;function it(e){ee=e}let Ka=1,Oe=0,xe=Oe;function ra(e){xe=e}function Wa(){return++Ka}function Qe(e){var n=e.f;if((n&$)!==0)return!0;if(n&H&&(e.f&=~De),(n&de)!==0){for(var a=e.deps,s=a.length,t=0;t<s;t++){var r=a[t];if(Qe(r)&&xa(r),r.wv>e.wv)return!0}(n&ae)!==0&&ie===null&&M(e,B)}return!1}function Za(e,n,a=!0){var s=e.reactions;if(s!==null&&!(se!==null&&je.call(se,e)))for(var t=0;t<s.length;t++){var r=s[t];(r.f&H)!==0?Za(r,n,!1):n===r&&(a?M(r,$):(r.f&B)!==0&&M(r,de),he(r))}}function Ja(e){var n=K,a=Z,s=ee,t=A,r=se,i=k,o=oe,l=xe,c=e.f;K=null,Z=0,ee=null,A=(c&(le|Pe))===0?e:null,se=null,Ue(e.ctx),oe=!1,xe=++Oe,e.ac!==null&&(En(()=>{e.ac.abort(Me)}),e.ac=null);try{e.f|=xn;var u=e.fn,f=u(),d=e.deps,h=q?.is_fork;if(K!==null){var g;if(h||vn(e,Z),d!==null&&Z>0)for(d.length=Z+K.length,g=0;g<K.length;g++)d[Z+g]=K[g];else e.deps=d=K;if(Yn()&&(e.f&ae)!==0)for(g=Z;g<d.length;g++)(d[g].reactions??=[]).push(e)}else!h&&d!==null&&Z<d.length&&(vn(e,Z),d.length=Z);if(nn()&&ee!==null&&!oe&&d!==null&&(e.f&(H|de|$))===0)for(g=0;g<ee.length;g++)Za(ee[g],e);if(t!==null&&t!==e){if(Oe++,t.deps!==null)for(let E=0;E<a;E+=1)t.deps[E].rv=Oe;if(n!==null)for(const E of n)E.rv=Oe;ee!==null&&(s===null?s=ee:s.push(...ee))}return(e.f&Ae)!==0&&(e.f^=Ae),f}catch(E){return Aa(E)}finally{e.f^=xn,K=n,Z=a,ee=s,A=t,se=r,Ue(i),oe=o,xe=l}}function ot(e,n){let a=n.reactions;if(a!==null){var s=os.call(a,e);if(s!==-1){var t=a.length-1;t===0?a=n.reactions=null:(a[s]=a[t],a.pop())}}if(a===null&&(n.f&H)!==0&&(K===null||!je.call(K,n))){var r=n;(r.f&ae)!==0&&(r.f^=ae,r.f&=~De),Qn(r),Ra(r),vn(r,0)}}function vn(e,n){var a=e.deps;if(a!==null)for(var s=n;s<a.length;s++)ot(e,a[s])}function Ve(e){var n=e.f;if((n&ye)===0){M(e,B);var a=C,s=un;C=e,un=!0;try{(n&(_e|ma))!==0?tt(e):Ha(e),Fa(e);var t=Ja(e);e.teardown=typeof t=="function"?t:null,e.wv=Ka;var r;On&&xs&&(e.f&$)!==0&&e.deps}finally{un=s,C=a}}}async function lt(){await Promise.resolve(),Ps()}function m(e){var n=e.f,a=(n&H)!==0;if(A!==null&&!oe){var s=C!==null&&(C.f&ye)!==0;if(!s&&(se===null||!je.call(se,e))){var t=A.deps;if((A.f&xn)!==0)e.rv<Oe&&(e.rv=Oe,K===null&&t!==null&&t[Z]===e?Z++:K===null?K=[e]:K.push(e));else{(A.deps??=[]).push(e);var r=e.reactions;r===null?e.reactions=[A]:je.call(r,A)||r.push(A)}}}if(ze&&we.has(e))return we.get(e);if(a){var i=e;if(ze){var o=i.v;return((i.f&B)===0&&i.reactions!==null||es(i))&&(o=$n(i)),we.set(i,o),o}var l=(i.f&ae)===0&&!oe&&A!==null&&(un||(A.f&ae)!==0),c=i.deps===null;Qe(i)&&(l&&(i.f|=ae),xa(i)),l&&!c&&Xa(i)}if(ie?.has(e))return ie.get(e);if((e.f&Ae)!==0)throw e.v;return e.v}function Xa(e){if(e.deps!==null){e.f|=ae;for(const n of e.deps)(n.reactions??=[]).push(e),(n.f&H)!==0&&(n.f&ae)===0&&Xa(n)}}function es(e){if(e.v===F)return!0;if(e.deps===null)return!1;for(const n of e.deps)if(we.has(n)||(n.f&H)!==0&&es(n))return!0;return!1}function ce(e){var n=oe;try{return oe=!0,e()}finally{oe=n}}function ct(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Le in e)Mn(e);else if(!Array.isArray(e))for(let n in e){const a=e[n];typeof a=="object"&&a&&Le in a&&Mn(a)}}}function Mn(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let s in e)try{Mn(e[s],n)}catch{}const a=Fn(e);if(a!==Object.prototype&&a!==Array.prototype&&a!==Map.prototype&&a!==Set.prototype&&a!==Date.prototype){const s=va(a);for(let t in s){const r=s[t].get;if(r)try{r.call(e)}catch{}}}}}const ut=["touchstart","touchmove"];function dt(e){return ut.includes(e)}const ns=new Set,Ln=new Set;function ft(e,n,a,s={}){function t(r){if(s.capture||Ke.call(n,r),!r.cancelBubble)return En(()=>a?.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?me(()=>{n.addEventListener(e,t,s)}):n.addEventListener(e,t,s),t}function Zn(e,n,a,s,t){var r={capture:s,passive:t},i=ft(e,n,a,r);(n===document.body||n===window||n===document||n instanceof HTMLMediaElement)&&Ba(()=>{n.removeEventListener(e,i,r)})}function yn(e){for(var n=0;n<e.length;n++)ns.add(e[n]);for(var a of Ln)a(e)}let ia=null;function Ke(e){var n=this,a=n.ownerDocument,s=e.type,t=e.composedPath?.()||[],r=t[0]||e.target;ia=e;var i=0,o=ia===e&&e.__root;if(o){var l=t.indexOf(o);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var c=t.indexOf(n);if(c===-1)return;l<=c&&(i=l)}if(r=t[i]||e.target,r!==n){ls(e,"currentTarget",{configurable:!0,get(){return r||a}});var u=A,f=C;te(null),ue(null);try{for(var d,h=[];r!==null;){var g=r.assignedSlot||r.parentNode||r.host||null;try{var E=r["__"+s];E!=null&&(!r.disabled||e.target===r)&&E.call(r,e)}catch(p){d?h.push(p):d=p}if(e.cancelBubble||g===n||g===null)break;r=g}if(d){for(let p of h)queueMicrotask(()=>{throw p});throw d}}finally{e.__root=n,delete e.currentTarget,te(u),ue(f)}}}function vt(e){var n=document.createElement("template");return n.innerHTML=e.replaceAll("<!>","<!---->"),n.content}function jn(e,n){var a=C;a.nodes===null&&(a.nodes={start:e,end:n,a:null,t:null})}function S(e,n){var a=(n&qs)!==0,s=(n&Cs)!==0,t,r=!e.startsWith("<!>");return()=>{t===void 0&&(t=vt(r?e:"<!>"+e),a||(t=fn(t)));var i=s||za?document.importNode(t,!0):t.cloneNode(!0);if(a){var o=fn(i),l=i.lastChild;jn(o,l)}else jn(i,i);return i}}function pt(){var e=document.createDocumentFragment(),n=document.createComment(""),a=Te();return e.append(n,a),jn(n,a),e}function y(e,n){e!==null&&e.before(n)}function T(e,n){var a=n==null?"":typeof n=="object"?n+"":n;a!==(e.__t??=e.nodeValue)&&(e.__t=a,e.nodeValue=a+"")}function mt(e,n){return ht(e,n)}const ke=new Map;function ht(e,{target:n,anchor:a,props:s={},events:t,context:r,intro:i=!0}){$s();var o=new Set,l=f=>{for(var d=0;d<f.length;d++){var h=f[d];if(!o.has(h)){o.add(h);var g=dt(h);n.addEventListener(h,Ke,{passive:g});var E=ke.get(h);E===void 0?(document.addEventListener(h,Ke,{passive:g}),ke.set(h,1)):ke.set(h,E+1)}}};l(pn(ns)),Ln.add(l);var c=void 0,u=Xs(()=>{var f=a??n.appendChild(Te());return js(f,{pending:()=>{}},d=>{if(r){hn({});var h=k;h.c=r}t&&(s.$$events=t),c=e(d,s)||{},r&&_n()}),()=>{for(var d of o){n.removeEventListener(d,Ke);var h=ke.get(d);--h===0?(document.removeEventListener(d,Ke),ke.delete(d)):ke.set(d,h)}Ln.delete(l),f!==a&&f.parentNode?.removeChild(f)}});return _t.set(c,u),c}let _t=new WeakMap;class gt{anchor;#n=new Map;#i=new Map;#e=new Map;#t=new Set;#r=!0;constructor(n,a=!0){this.anchor=n,this.#r=a}#s=()=>{var n=q;if(this.#n.has(n)){var a=this.#n.get(n),s=this.#i.get(a);if(s)Wn(s),this.#t.delete(a);else{var t=this.#e.get(a);t&&(this.#i.set(a,t.effect),this.#e.delete(a),t.fragment.lastChild.remove(),this.anchor.before(t.fragment),s=t.effect)}for(const[r,i]of this.#n){if(this.#n.delete(r),r===n)break;const o=this.#e.get(i);o&&(W(o.effect),this.#e.delete(i))}for(const[r,i]of this.#i){if(r===a||this.#t.has(r))continue;const o=()=>{if(Array.from(this.#n.values()).includes(r)){var c=document.createDocumentFragment();$a(i,c),c.append(Te()),this.#e.set(r,{effect:i,fragment:c})}else W(i);this.#t.delete(r),this.#i.delete(r)};this.#r||!s?(this.#t.add(r),Re(i,o,!1)):o()}}};#a=n=>{this.#n.delete(n);const a=Array.from(this.#n.values());for(const[s,t]of this.#e)a.includes(s)||(W(t.effect),this.#e.delete(s))};ensure(n,a){var s=q,t=La();if(a&&!this.#i.has(n)&&!this.#e.has(n))if(t){var r=document.createDocumentFragment(),i=Te();r.append(i),this.#e.set(n,{effect:ne(()=>a(i)),fragment:r})}else this.#i.set(n,ne(()=>a(this.anchor)));if(this.#n.set(s,n),t){for(const[o,l]of this.#i)o===n?s.skipped_effects.delete(l):s.skipped_effects.add(l);for(const[o,l]of this.#e)o===n?s.skipped_effects.delete(l.effect):s.skipped_effects.add(l.effect);s.oncommit(this.#s),s.ondiscard(this.#a)}else this.#s()}}function Ee(e,n,a=!1){var s=new gt(e),t=a?Be:0;function r(i,o){s.ensure(i,o)}Kn(()=>{var i=!1;n((o,l=!0)=>{i=!0,r(l,o)}),i||r(!1,null)},t)}function G(e,n){return n}function bt(e,n,a){for(var s=[],t=n.length,r,i=n.length,o=0;o<t;o++){let f=n[o];Re(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var d=e.outrogroups;Bn(pn(r.done)),d.delete(r),d.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var l=s.length===0&&a!==null;if(l){var c=a,u=c.parentNode;Ys(u),u.append(c),e.items.clear()}Bn(n,!l)}else r={pending:new Set(n),done:new Set},(e.outrogroups??=new Set).add(r)}function Bn(e,n=!0){for(var a=0;a<e.length;a++)W(e[a],n)}var oa;function Q(e,n,a,s,t,r=null){var i=e,o=new Map,l=(n&ga)!==0;if(l){var c=e;i=c.appendChild(Te())}var u=null,f=Oa(()=>{var b=a();return fa(b)?b:b==null?[]:pn(b)}),d,h=!0;function g(){p.fallback=u,Et(p,d,i,n,s),u!==null&&(d.length===0?(u.f&pe)===0?Wn(u):(u.f^=pe,We(u,null,i)):Re(u,()=>{u=null}))}var E=Kn(()=>{d=m(f);for(var b=d.length,N=new Set,R=q,L=La(),w=0;w<b;w+=1){var z=d[w],D=s(z,w),P=h?null:o.get(D);P?(P.v&&He(P.v,z),P.i&&He(P.i,w),L&&R.skipped_effects.delete(P.e)):(P=yt(o,h?i:oa??=Te(),z,D,w,t,n,a),h||(P.e.f|=pe),o.set(D,P)),N.add(D)}if(b===0&&r&&!u&&(h?u=ne(()=>r(i)):(u=ne(()=>r(oa??=Te())),u.f|=pe)),!h)if(L){for(const[O,x]of o)N.has(O)||R.skipped_effects.add(x.e);R.oncommit(g),R.ondiscard(()=>{})}else g();m(f)}),p={effect:E,items:o,outrogroups:null,fallback:u};h=!1}function Ye(e){for(;e!==null&&(e.f&le)===0;)e=e.next;return e}function Et(e,n,a,s,t){var r=(s&ws)!==0,i=n.length,o=e.items,l=Ye(e.effect.first),c,u=null,f,d=[],h=[],g,E,p,b;if(r)for(b=0;b<i;b+=1)g=n[b],E=t(g,b),p=o.get(E).e,(p.f&pe)===0&&(p.nodes?.a?.measure(),(f??=new Set).add(p));for(b=0;b<i;b+=1){if(g=n[b],E=t(g,b),p=o.get(E).e,e.outrogroups!==null)for(const x of e.outrogroups)x.pending.delete(p),x.done.delete(p);if((p.f&pe)!==0)if(p.f^=pe,p===l)We(p,null,a);else{var N=u?u.next:l;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),be(e,u,p),be(e,p,N),We(p,N,a),u=p,d=[],h=[],l=Ye(u.next);continue}if((p.f&X)!==0&&(Wn(p),r&&(p.nodes?.a?.unfix(),(f??=new Set).delete(p))),p!==l){if(c!==void 0&&c.has(p)){if(d.length<h.length){var R=h[0],L;u=R.prev;var w=d[0],z=d[d.length-1];for(L=0;L<d.length;L+=1)We(d[L],R,a);for(L=0;L<h.length;L+=1)c.delete(h[L]);be(e,w.prev,z.next),be(e,u,w),be(e,z,R),l=R,u=z,b-=1,d=[],h=[]}else c.delete(p),We(p,l,a),be(e,p.prev,p.next),be(e,p,u===null?e.effect.first:u.next),be(e,u,p),u=p;continue}for(d=[],h=[];l!==null&&l!==p;)(c??=new Set).add(l),h.push(l),l=Ye(l.next);if(l===null)continue}(p.f&pe)===0&&d.push(p),u=p,l=Ye(p.next)}if(e.outrogroups!==null){for(const x of e.outrogroups)x.pending.size===0&&(Bn(pn(x.done)),e.outrogroups?.delete(x));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var D=[];if(c!==void 0)for(p of c)(p.f&X)===0&&D.push(p);for(;l!==null;)(l.f&X)===0&&l!==e.fallback&&D.push(l),l=Ye(l.next);var P=D.length;if(P>0){var O=(s&ga)!==0&&i===0?a:null;if(r){for(b=0;b<P;b+=1)D[b].nodes?.a?.measure();for(b=0;b<P;b+=1)D[b].nodes?.a?.fix()}bt(e,D,O)}}r&&me(()=>{if(f!==void 0)for(p of f)p.nodes?.a?.apply()})}function yt(e,n,a,s,t,r,i,o){var l=(i&As)!==0?(i&Ts)===0?kn(a,!1,!1):Ie(a):null,c=(i&Ss)!==0?Ie(t):null;return{v:l,i:c,e:ne(()=>(r(n,l??a,c??t,o),()=>{e.delete(s)}))}}function We(e,n,a){if(e.nodes)for(var s=e.nodes.start,t=e.nodes.end,r=n&&(n.f&pe)===0?n.nodes.start:a;s!==null;){var i=an(s);if(r.before(s),s===t)return;s=i}}function be(e,n,a){n===null?e.effect.first=a:n.next=a,a===null?e.effect.last=n:a.prev=n}const la=[...` 	
\r\f \v\uFEFF`];function At(e,n,a){var s=e==null?"":""+e;if(n&&(s=s?s+" "+n:n),a){for(var t in a)if(a[t])s=s?s+" "+t:t;else if(s.length)for(var r=t.length,i=0;(i=s.indexOf(t,i))>=0;){var o=i+r;(i===0||la.includes(s[i-1]))&&(o===s.length||la.includes(s[o]))?s=(i===0?"":s.substring(0,i))+s.substring(o+1):i=o}}return s===""?null:s}function St(e,n){return e==null?null:String(e)}function An(e,n,a,s,t,r){var i=e.__className;if(i!==a||i===void 0){var o=At(a,s,r);o==null?e.removeAttribute("class"):e.className=o,e.__className=a}else if(r&&t!==r)for(var l in r){var c=!!r[l];(t==null||c!==!!t[l])&&e.classList.toggle(l,c)}return r}function wt(e,n,a,s){var t=e.__style;if(t!==n){var r=St(n);r==null?e.removeAttribute("style"):e.style.cssText=r,e.__style=n}return s}const Tt=Symbol("is custom element"),qt=Symbol("is html");function Un(e,n,a,s){var t=Ct(e);t[n]!==(t[n]=a)&&(n==="loading"&&(e[fs]=a),a==null?e.removeAttribute(n):typeof a!="string"&&Nt(e).includes(n)?e[n]=a:e.setAttribute(n,a))}function Ct(e){return e.__attributes??={[Tt]:e.nodeName.includes("-"),[qt]:e.namespaceURI===Ns}}var ca=new Map;function Nt(e){var n=e.getAttribute("is")||e.nodeName,a=ca.get(n);if(a)return a;ca.set(n,a=[]);for(var s,t=e,r=Element.prototype;r!==t;){s=va(t);for(var i in s)s[i].set&&a.push(i);t=Fn(t)}return a}function Ot(e,n,a=n){var s=new WeakSet;Ws(e,"input",async t=>{var r=t?e.defaultValue:e.value;if(r=Cn(e)?Nn(r):r,a(r),q!==null&&s.add(q),await lt(),r!==(r=n())){var i=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=r??"",o!==null){var c=e.value.length;i===o&&o===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=i,e.selectionEnd=Math.min(o,c))}}}),ce(n)==null&&e.value&&(a(Cn(e)?Nn(e.value):e.value),q!==null&&s.add(q)),sn(()=>{var t=n();if(e===document.activeElement){var r=Dn??q;if(s.has(r))return}Cn(e)&&t===Nn(e.value)||e.type==="date"&&!t&&!e.value||t!==e.value&&(e.value=t??"")})}function Cn(e){var n=e.type;return n==="number"||n==="range"}function Nn(e){return e===""?null:+e}function ua(e,n){return e===n||e?.[Le]===n}function Rt(e={},n,a,s){return et(()=>{var t,r;return sn(()=>{t=r,r=[],ce(()=>{e!==a(...r)&&(n(e,...r),t&&ua(a(...t),e)&&n(null,...t))})}),()=>{me(()=>{r&&ua(a(...r),e)&&n(null,...r)})}}),e}function xt(e=!1){const n=k,a=n.l.u;if(!a)return;let s=()=>ct(n.s);if(e){let t=0,r={};const i=bn(()=>{let o=!1;const l=n.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],o=!0);return o&&t++,t});s=()=>m(i)}a.b.length&&Js(()=>{da(n,s),Rn(a.b)}),sa(()=>{const t=ce(()=>a.m.map(ds));return()=>{for(const r of t)typeof r=="function"&&r()}}),a.a.length&&sa(()=>{da(n,s),Rn(a.a)})}function da(e,n){if(e.l.s)for(const a of e.l.s)m(a);n()}const Dt="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Dt);Ds();var It=S('<nav class="navigation svelte-1r7gc6h"><div class="nav-container svelte-1r7gc6h"><div class="nav-content svelte-1r7gc6h"><div class="nav-logo svelte-1r7gc6h"><span class="logo-icon svelte-1r7gc6h">❤️</span> <span class="logo-text">DonarSangre</span></div> <button class="mobile-menu-btn svelte-1r7gc6h"><span class="menu-icon"> </span></button> <div><button class="nav-link svelte-1r7gc6h">Inicio</button> <button class="nav-link svelte-1r7gc6h">Beneficios</button> <button class="nav-link svelte-1r7gc6h">Tipos de Sangre</button> <button class="nav-link svelte-1r7gc6h">Requisitos</button> <button class="nav-link svelte-1r7gc6h">Hospitales</button> <button class="nav-link svelte-1r7gc6h">FAQ</button> <button class="nav-link-cta svelte-1r7gc6h">Donar Ahora</button></div></div></div></nav>');function zt(e){let n=V(!1);const a=()=>{I(n,!m(n))},s=N=>{const R=document.getElementById(N);R&&(R.scrollIntoView({behavior:"smooth"}),I(n,!1))};var t=It(),r=v(t),i=v(r),o=_(v(i),2);o.__click=a;var l=v(o),c=v(l),u=_(o,2),f=v(u);f.__click=()=>s("inicio");var d=_(f,2);d.__click=()=>s("beneficios");var h=_(d,2);h.__click=()=>s("tipos-sangre");var g=_(h,2);g.__click=()=>s("requisitos");var E=_(g,2);E.__click=()=>s("hospitales");var p=_(E,2);p.__click=()=>s("faq");var b=_(p,2);b.__click=()=>s("contacto"),j(()=>{T(c,m(n)?"✕":"☰"),An(u,1,`nav-links ${m(n)?"mobile-open":""}`,"svelte-1r7gc6h")}),y(e,t)}yn(["click"]);var Pt=S(`<section id="inicio" class="hero svelte-qzo0r3"><div class="hero-container svelte-qzo0r3"><div class="hero-content svelte-qzo0r3"><h1 class="hero-title svelte-qzo0r3">Dona Sangre, <span class="hero-title-highlight svelte-qzo0r3">Salva Vidas</span></h1> <p class="hero-description svelte-qzo0r3">Cada donación de sangre puede salvar hasta tres vidas. Únete a miles de personas 
        que hacen la diferencia cada día. Tu sangre es el regalo más valioso que puedes dar.</p> <div class="hero-buttons svelte-qzo0r3"><button class="btn-primary svelte-qzo0r3">Quiero Donar</button> <button class="btn-secondary svelte-qzo0r3">Más Información</button></div> <div class="hero-stats-mini svelte-qzo0r3"><div class="stat-mini svelte-qzo0r3"><span class="stat-mini-number svelte-qzo0r3">2M+</span> <span class="stat-mini-label svelte-qzo0r3">Donantes</span></div> <div class="stat-mini svelte-qzo0r3"><span class="stat-mini-number svelte-qzo0r3">3M+</span> <span class="stat-mini-label svelte-qzo0r3">Vidas Salvadas</span></div> <div class="stat-mini svelte-qzo0r3"><span class="stat-mini-number svelte-qzo0r3">500+</span> <span class="stat-mini-label svelte-qzo0r3">Hospitales</span></div></div></div> <div class="hero-image svelte-qzo0r3"><div class="hero-image-placeholder svelte-qzo0r3"><span class="hero-icon svelte-qzo0r3">🩸</span> <div class="pulse-ring svelte-qzo0r3"></div></div></div></div></section>`);function kt(e){const n=l=>{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth"})};var a=Pt(),s=v(a),t=v(s),r=_(v(t),4),i=v(r);i.__click=()=>n("requisitos");var o=_(i,2);o.__click=()=>n("beneficios"),y(e,a)}yn(["click"]);var Mt=S('<div class="stat-card svelte-cjprq"><div class="stat-icon svelte-cjprq"> </div> <div class="stat-number svelte-cjprq"> </div> <div class="stat-label svelte-cjprq"> </div> <div class="stat-description svelte-cjprq"> </div></div>'),Lt=S('<section class="stats svelte-cjprq"><div class="stats-container svelte-cjprq"><div class="stats-header svelte-cjprq"><h2 class="stats-title svelte-cjprq">Nuestro Impacto</h2> <p class="stats-description svelte-cjprq">Miles de personas confían en nosotros para hacer la diferencia</p></div> <div class="stats-grid svelte-cjprq"></div></div></section>');function jt(e){const n=[{icon:"👥",number:"2,234,567",label:"Donantes Registrados",description:"Personas comprometidas con salvar vidas"},{icon:"🩸",number:"1,678,335",label:"Donaciones Este Año",description:"Unidades de sangre recolectadas"},{icon:"❤️",number:"3,456,789",label:"Vidas Salvadas",description:"Pacientes que recibieron ayuda"},{icon:"🏥",number:"567",label:"Hospitales Asociados",description:"Centros médicos en toda la red"}];var a=Lt(),s=v(a),t=_(v(s),2);Q(t,5,()=>n,G,(r,i)=>{var o=Mt(),l=v(o),c=v(l),u=_(l,2),f=v(u),d=_(u,2),h=v(d),g=_(d,2),E=v(g);j(()=>{T(c,m(i).icon),T(f,m(i).number),T(h,m(i).label),T(E,m(i).description)}),y(r,o)}),y(e,a)}var Bt=S('<div class="benefit-card svelte-ee87tf"><div class="benefit-icon svelte-ee87tf"> </div> <h3 class="benefit-title svelte-ee87tf"> </h3> <p class="benefit-description svelte-ee87tf"> </p></div>'),Ut=S('<section id="beneficios" class="benefits svelte-ee87tf"><div class="benefits-container svelte-ee87tf"><div class="benefits-header svelte-ee87tf"><h2 class="benefits-title svelte-ee87tf">Beneficios de Donar Sangre</h2> <p class="benefits-description svelte-ee87tf">Donar sangre no solo salva vidas, también trae beneficios para tu salud</p></div> <div class="benefits-grid svelte-ee87tf"></div></div></section>');function Ft(e){const n=[{icon:"❤️",title:"Salud Cardiovascular",description:"Donar sangre regularmente ayuda a reducir el riesgo de enfermedades del corazón al mantener niveles saludables de hierro."},{icon:"🩺",title:"Chequeo Médico Gratuito",description:"Cada donación incluye un examen médico completo y análisis de sangre sin costo alguno."},{icon:"🔥",title:"Quema Calorías",description:"Una donación de sangre puede quemar hasta 650 calorías, beneficiando tu metabolismo."},{icon:"🧬",title:"Producción de Células",description:"Estimula la producción de nuevas células sanguíneas, manteniendo tu cuerpo saludable y renovado."},{icon:"🎯",title:"Reduce Hierro Excesivo",description:"Ayuda a prevenir la acumulación de hierro que puede causar daño a órganos vitales."},{icon:"😊",title:"Bienestar Emocional",description:"Experimentarás la satisfacción de saber que estás ayudando a salvar vidas."}];var a=Ut(),s=v(a),t=_(v(s),2);Q(t,5,()=>n,G,(r,i)=>{var o=Bt(),l=v(o),c=v(l),u=_(l,2),f=v(u),d=_(u,2),h=v(d);j(()=>{T(c,m(i).icon),T(f,m(i).title),T(h,m(i).description)}),y(r,o)}),y(e,a)}var Ht=S('<span class="type-badge svelte-15wlxd2"> </span>'),Vt=S('<span class="type-badge svelte-15wlxd2"> </span>'),Gt=S('<span class="type-badge svelte-15wlxd2"> </span>'),Qt=S('<div class="blood-type-card svelte-15wlxd2"><div class="blood-type-header svelte-15wlxd2"><div class="blood-type-icon svelte-15wlxd2"> </div> <div class="blood-type-percentage svelte-15wlxd2"> </div></div> <h3 class="blood-type-name svelte-15wlxd2"> </h3> <p class="blood-type-desc svelte-15wlxd2"> </p> <div class="blood-type-details svelte-15wlxd2"><div class="detail-section svelte-15wlxd2"><strong class="svelte-15wlxd2">Puede donar a:</strong> <div class="types-list svelte-15wlxd2"></div></div> <div class="detail-section svelte-15wlxd2"><strong class="svelte-15wlxd2">Puede recibir de:</strong> <div class="types-list svelte-15wlxd2"><!></div></div></div></div>'),$t=S('<section id="tipos-sangre" class="blood-types svelte-15wlxd2"><div class="blood-types-container svelte-15wlxd2"><div class="blood-types-header svelte-15wlxd2"><h2 class="blood-types-title svelte-15wlxd2">Tipos de Sangre</h2> <p class="blood-types-description svelte-15wlxd2">Conoce tu tipo de sangre y descubre a quién puedes ayudar</p></div> <div class="blood-types-grid svelte-15wlxd2"></div></div></section>');function Yt(e){const n=[{type:"O-",name:"O Negativo",canDonateTo:["O-","O+","A-","A+","B-","B+","AB-","AB+"],canReceiveFrom:["O-"],percentage:"7%",description:"Donante universal",color:"#dc2626"},{type:"O+",name:"O Positivo",canDonateTo:["O+","A+","B+","AB+"],canReceiveFrom:["O-","O+"],percentage:"38%",description:"Tipo más común",color:"#ea580c"},{type:"A-",name:"A Negativo",canDonateTo:["A-","A+","AB-","AB+"],canReceiveFrom:["A-","O-"],percentage:"6%",description:"Donante para A y AB",color:"#d97706"},{type:"A+",name:"A Positivo",canDonateTo:["A+","AB+"],canReceiveFrom:["A-","A+","O-","O+"],percentage:"34%",description:"Segundo más común",color:"#ca8a04"},{type:"B-",name:"B Negativo",canDonateTo:["B-","B+","AB-","AB+"],canReceiveFrom:["B-","O-"],percentage:"2%",description:"Tipo raro",color:"#16a34a"},{type:"B+",name:"B Positivo",canDonateTo:["B+","AB+"],canReceiveFrom:["B-","B+","O-","O+"],percentage:"9%",description:"Donante para B y AB+",color:"#059669"},{type:"AB-",name:"AB Negativo",canDonateTo:["AB-","AB+"],canReceiveFrom:["AB-","A-","B-","O-"],percentage:"1%",description:"Tipo más raro",color:"#2563eb"},{type:"AB+",name:"AB Positivo",canDonateTo:["AB+"],canReceiveFrom:["Todos"],percentage:"3%",description:"Receptor universal",color:"#7c3aed"}];var a=$t(),s=v(a),t=_(v(s),2);Q(t,5,()=>n,G,(r,i)=>{var o=Qt(),l=v(o),c=v(l),u=v(c),f=_(c,2),d=v(f),h=_(l,2),g=v(h),E=_(h,2),p=v(E),b=_(E,2),N=v(b),R=_(v(N),2);Q(R,5,()=>m(i).canDonateTo,G,(O,x)=>{var Y=Ht(),ge=v(Y);j(()=>T(ge,m(x))),y(O,Y)});var L=_(N,2),w=_(v(L),2),z=v(w);{var D=O=>{var x=pt(),Y=Ma(x);Q(Y,1,()=>m(i).canReceiveFrom,G,(ge,tn)=>{var rn=Vt(),Sn=v(rn);j(()=>T(Sn,m(tn))),y(ge,rn)}),y(O,x)},P=O=>{var x=Gt(),Y=v(x);j(()=>T(Y,m(i).canReceiveFrom)),y(O,x)};Ee(z,O=>{Array.isArray(m(i).canReceiveFrom)?O(D):O(P,!1)})}j(()=>{wt(o,`--card-color: ${m(i).color??""}`),T(u,m(i).type),T(d,m(i).percentage),T(g,m(i).name),T(p,m(i).description)}),y(r,o)}),y(e,a)}var Kt=S('<li class="info-item svelte-1dz0rb8"><span class="item-icon requirements-check svelte-1dz0rb8">✓</span> <span class="item-text svelte-1dz0rb8"> </span></li>'),Wt=S('<li class="info-item svelte-1dz0rb8"><span class="item-icon contraindications-check svelte-1dz0rb8">✕</span> <span class="item-text svelte-1dz0rb8"> </span></li>'),Zt=S('<li class="info-item svelte-1dz0rb8"><span class="item-icon recommendations-check svelte-1dz0rb8">✓</span> <span class="item-text svelte-1dz0rb8"> </span></li>'),Jt=S('<section id="requisitos" class="eligibility svelte-1dz0rb8"><div class="eligibility-container svelte-1dz0rb8"><div class="eligibility-header svelte-1dz0rb8"><h2 class="eligibility-title svelte-1dz0rb8">Requisitos para Donar Sangre</h2> <p class="eligibility-description svelte-1dz0rb8">Verifica si cumples con los requisitos básicos para ser donante</p></div> <div class="eligibility-content svelte-1dz0rb8"><div class="info-card requirements-card svelte-1dz0rb8"><div class="card-header svelte-1dz0rb8"><div class="card-icon requirements-icon svelte-1dz0rb8">✓</div> <h3 class="card-title svelte-1dz0rb8">Requisitos Básicos</h3></div> <ul class="info-list svelte-1dz0rb8"></ul></div> <div class="info-card contraindications-card svelte-1dz0rb8"><div class="card-header svelte-1dz0rb8"><div class="card-icon contraindications-icon svelte-1dz0rb8">✕</div> <h3 class="card-title svelte-1dz0rb8">Contraindicaciones</h3></div> <ul class="info-list svelte-1dz0rb8"></ul></div> <div class="info-card recommendations-card svelte-1dz0rb8"><div class="card-header svelte-1dz0rb8"><div class="card-icon recommendations-icon svelte-1dz0rb8">ℹ</div> <h3 class="card-title svelte-1dz0rb8">Recomendaciones</h3></div> <ul class="info-list svelte-1dz0rb8"></ul></div></div></div></section>');function Xt(e){const n=["Tener entre 18 y 65 años","Pesar más de 50 kg","Sentirse bien de salud","No haber donado en los últimos 2 meses (hombres) o 3 meses (mujeres)","No estar embarazada ni en período de lactancia","No tener tatuajes o piercings recientes (últimos 4 meses)"],a=["Tener enfermedades infecciosas activas","Haber tenido hepatitis B o C","Consumir drogas por vía intravenosa","Tener VIH/SIDA","Padecer enfermedades cardíacas graves","Haber recibido transfusión de sangre en el último año"],s=["Descansa bien la noche anterior","Come algo antes de donar (evita grasas)","Bebe abundante agua antes y después","Lleva tu DNI o documento de identificación","Usa ropa cómoda","Informa sobre medicamentos que tomes"];var t=Jt(),r=v(t),i=_(v(r),2),o=v(i),l=_(v(o),2);Q(l,5,()=>n,G,(h,g)=>{var E=Kt(),p=_(v(E),2),b=v(p);j(()=>T(b,m(g))),y(h,E)});var c=_(o,2),u=_(v(c),2);Q(u,5,()=>a,G,(h,g)=>{var E=Wt(),p=_(v(E),2),b=v(p);j(()=>T(b,m(g))),y(h,E)});var f=_(c,2),d=_(v(f),2);Q(d,5,()=>s,G,(h,g)=>{var E=Zt(),p=_(v(E),2),b=v(p);j(()=>T(b,m(g))),y(h,E)}),y(e,t)}var er=S("<button> </button>"),nr=S('<div class="hospital-card svelte-1x1lazy"><div class="hospital-icon svelte-1x1lazy">🏥</div> <h3 class="hospital-name svelte-1x1lazy"> </h3> <div class="hospital-info svelte-1x1lazy"><div class="info-item svelte-1x1lazy"><span class="info-icon svelte-1x1lazy">📍</span> <span class="info-text svelte-1x1lazy"> </span></div> <div class="info-item svelte-1x1lazy"><span class="info-icon svelte-1x1lazy">📞</span> <span class="info-text svelte-1x1lazy"> </span></div> <div class="info-item svelte-1x1lazy"><span class="info-icon svelte-1x1lazy">🕐</span> <span class="info-text svelte-1x1lazy"> </span></div></div> <a target="_blank" rel="noopener noreferrer" class="hospital-button svelte-1x1lazy">📍 Cómo llegar</a></div>'),ar=S('<section id="hospitales" class="hospitals svelte-1x1lazy"><div class="hospitals-container svelte-1x1lazy"><div class="hospitals-header svelte-1x1lazy"><h2 class="hospitals-title svelte-1x1lazy">Centros de Donación en Gran Canaria</h2> <p class="hospitals-description svelte-1x1lazy">Encuentra el centro más cercano para realizar tu donación de sangre</p></div> <div class="location-filters svelte-1x1lazy"></div> <div class="hospitals-grid svelte-1x1lazy"></div></div></section>');function sr(e,n){hn(n,!1);const a=kn(),s=[{name:"Hospital Universitario de Gran Canaria Dr. Negrín",address:"Barranco de la Ballena, s/n, 35010 Las Palmas de Gran Canaria",phone:"928 450 000",hours:"Lunes a Viernes: 8:00 - 20:00",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Hospital+Universitario+de+Gran+Canaria+Dr.+Negrín"},{name:"Hospital Universitario Insular de Gran Canaria",address:"Av. Marítima del Sur, s/n, 35016 Las Palmas de Gran Canaria",phone:"928 444 000",hours:"Lunes a Viernes: 8:00 - 15:00",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Hospital+Universitario+Insular+de+Gran+Canaria"},{name:"Hospital San Roque Las Palmas",address:"C/ Dolores de la Rocha, 5, 35001 Las Palmas de Gran Canaria",phone:"928 012 600",hours:"Lunes a Viernes: 9:00 - 14:00",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Hospital+San+Roque+Las+Palmas"},{name:"Hospital San Roque Maspalomas",address:"Av. de Gran Canaria, 18, 35100 Maspalomas",phone:"928 063 600",hours:"Lunes a Viernes: 9:00 - 14:00",location:"San Bartolomé de Tirajana",mapsUrl:"https://maps.google.com/?q=Hospital+San+Roque+Maspalomas"},{name:"Centro de Transfusión Sanguínea de Gran Canaria",address:"C/ Dr. José Molina Orosa, 8, 35004 Las Palmas de Gran Canaria",phone:"928 301 212",hours:"Lunes a Viernes: 8:15 - 21:30",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Centro+de+Transfusión+Sanguínea+de+Gran+Canaria"},{name:"Hospital Quirónsalud Gran Canaria",address:"C/ Maestro Valle, 20, 35005 Las Palmas de Gran Canaria",phone:"928 012 000",hours:"Lunes: 7:30 - 15:00, Martes a Viernes: 7:30 - 19:00",location:"Las Palmas de Gran Canaria",mapsUrl:"https://maps.google.com/?q=Hospital+Quirónsalud+Gran+Canaria"}],t=["Todos","Las Palmas de Gran Canaria","San Bartolomé de Tirajana"];let r=kn("Todos");nt(()=>m(r),()=>{I(a,m(r)==="Todos"?s:s.filter(u=>u.location===m(r)))}),at();var i=ar(),o=v(i),l=_(v(o),2);Q(l,5,()=>t,G,(u,f)=>{var d=er();let h;var g=v(d);j(()=>{h=An(d,1,"location-button svelte-1x1lazy",null,h,{active:m(r)===m(f)}),T(g,m(f))}),Zn("click",d,()=>I(r,m(f))),y(u,d)});var c=_(l,2);Q(c,5,()=>m(a),G,(u,f)=>{var d=nr(),h=_(v(d),2),g=v(h),E=_(h,2),p=v(E),b=_(v(p),2),N=v(b),R=_(p,2),L=_(v(R),2),w=v(L),z=_(R,2),D=_(v(z),2),P=v(D),O=_(E,2);j(()=>{T(g,(m(f),ce(()=>m(f).name))),T(N,(m(f),ce(()=>m(f).address))),T(w,(m(f),ce(()=>m(f).phone))),T(P,(m(f),ce(()=>m(f).hours))),Un(O,"href",(m(f),ce(()=>m(f).mapsUrl)))}),y(u,d)}),y(e,i),_n()}var tr=S('<div class="faq-answer svelte-r9ron6"><p class="svelte-r9ron6"> </p></div>'),rr=S('<div><button class="faq-question svelte-r9ron6"><span class="question-text svelte-r9ron6"> </span> <span class="question-icon svelte-r9ron6"> </span></button> <!></div>');function ir(e,n){var a=rr(),s=v(a);s.__click=function(...u){n.onToggle?.apply(this,u)};var t=v(s),r=v(t),i=_(t,2),o=v(i),l=_(s,2);{var c=u=>{var f=tr(),d=v(f),h=v(d);j(()=>T(h,n.answer)),y(u,f)};Ee(l,u=>{n.isOpen&&u(c)})}j(()=>{An(a,1,`faq-item ${n.isOpen?"open":""}`,"svelte-r9ron6"),T(r,n.question),T(o,n.isOpen?"−":"+")}),y(e,a)}yn(["click"]);var or=S('<section id="faq" class="faq svelte-1t1jk4b"><div class="faq-container svelte-1t1jk4b"><div class="faq-header svelte-1t1jk4b"><h2 class="faq-title svelte-1t1jk4b">Preguntas Frecuentes</h2> <p class="faq-description svelte-1t1jk4b">Resolvemos tus dudas sobre el proceso de donación</p></div> <div class="faq-list svelte-1t1jk4b"></div> <div class="faq-footer svelte-1t1jk4b"><p class="footer-text svelte-1t1jk4b">¿Tienes más preguntas? <a href="#contacto" class="footer-link svelte-1t1jk4b">Contáctanos</a></p></div></div></section>');function lr(e){let n=V(null);const a=[{question:"¿Cuánto tiempo toma donar sangre?",answer:"El proceso completo toma aproximadamente 45-60 minutos, aunque la donación en sí solo dura de 8 a 10 minutos. Este tiempo incluye el registro, el examen médico breve, la donación y el tiempo de recuperación."},{question:"¿Con qué frecuencia puedo donar?",answer:"Los hombres pueden donar cada 2 meses y las mujeres cada 3 meses. Esto permite que tu cuerpo recupere completamente los componentes sanguíneos donados."},{question:"¿Duele donar sangre?",answer:"Sentirás un pequeño pinchazo cuando se inserta la aguja, similar a cualquier análisis de sangre. La mayoría de los donantes informan que es mínimamente molesto y muy tolerable."},{question:"¿Qué debo hacer antes de donar?",answer:"Come una comida saludable, bebe abundante agua, duerme bien la noche anterior y evita el alcohol 24 horas antes. No dones con el estómago vacío."},{question:"¿Puedo hacer ejercicio después de donar?",answer:"Es recomendable evitar ejercicio intenso durante las primeras 24 horas después de la donación. Puedes retomar actividades ligeras después de unas horas de descanso."},{question:"¿Qué pasa con mi sangre después de donarla?",answer:"Tu sangre se analiza, procesa y separa en diferentes componentes (glóbulos rojos, plasma, plaquetas) que pueden salvar hasta 3 vidas diferentes. Se almacena hasta que un paciente la necesita."},{question:"¿Es seguro donar sangre?",answer:"Absolutamente. Se utiliza material estéril y desechable para cada donante. No existe riesgo de contraer enfermedades al donar sangre. Todo el equipo es nuevo y de un solo uso."},{question:"¿Puedo donar si tomo medicamentos?",answer:"Depende del medicamento. Algunos no afectan la donación, pero otros sí. Es importante informar al personal médico sobre cualquier medicación que estés tomando."}],s=o=>{I(n,m(n)===o?null:o,!0)};var t=or(),r=v(t),i=_(v(r),2);Q(i,21,()=>a,G,(o,l,c)=>{{let u=Vs(()=>m(n)===c);ir(o,{get question(){return m(l).question},get answer(){return m(l).answer},get isOpen(){return m(u)},onToggle:()=>s(c)})}}),y(e,t)}var cr=S('<a class="social-link svelte-9sff3o"> </a>'),ur=S('<li><button class="footer-link svelte-9sff3o"> </button></li>'),dr=S(`<footer id="contacto" class="footer svelte-9sff3o"><div class="footer-container svelte-9sff3o"><div class="footer-content svelte-9sff3o"><div class="footer-section svelte-9sff3o"><div class="footer-logo svelte-9sff3o"><span class="logo-icon svelte-9sff3o">❤️</span> <span class="logo-text svelte-9sff3o">DonarSangre</span></div> <p class="footer-description svelte-9sff3o">Comprometidos con salvar vidas a través de la donación de sangre. 
          Cada gota cuenta, cada donante importa.</p> <div class="social-links svelte-9sff3o"></div></div> <div class="footer-section svelte-9sff3o"><h3 class="footer-title svelte-9sff3o">Enlaces Rápidos</h3> <ul class="footer-links svelte-9sff3o"></ul></div> <div class="footer-section svelte-9sff3o"><h3 class="footer-title svelte-9sff3o">Contacto</h3> <ul class="contact-list svelte-9sff3o"><li class="contact-item svelte-9sff3o"><span class="contact-icon svelte-9sff3o">📞</span> <span>+34 926 123 456</span></li> <li class="contact-item svelte-9sff3o"><span class="contact-icon svelte-9sff3o">✉️</span> <span>info@donarsangre.com</span></li> <li class="contact-item svelte-9sff3o"><span class="contact-icon svelte-9sff3o">📍</span> <span>Av. Mesa y López, Las Palmas de Gran Canaria</span></li> <li class="contact-item svelte-9sff3o"><span class="contact-icon svelte-9sff3o">🕐</span> <span>Lun-Vie: 8:00-18:00</span></li></ul></div> <div class="footer-section svelte-9sff3o"><h3 class="footer-title svelte-9sff3o">Emergencias</h3> <div class="emergency-box svelte-9sff3o"><p class="emergency-text svelte-9sff3o">Si necesitas sangre urgentemente:</p> <a href="tel:112" class="emergency-button svelte-9sff3o">🚨 Llamar al 112</a></div></div></div> <div class="footer-bottom svelte-9sff3o"><p class="copyright svelte-9sff3o"> </p> <div class="footer-bottom-links svelte-9sff3o"><a class="bottom-link svelte-9sff3o">Política de Privacidad</a> <span class="separator svelte-9sff3o">•</span> <a class="bottom-link svelte-9sff3o">Términos de Uso</a> <span class="separator svelte-9sff3o">•</span> <a class="bottom-link svelte-9sff3o">Cookies</a></div></div></div></footer>`);function fr(e,n){hn(n,!1);const a=new Date().getFullYear(),s=[{icon:"📘",name:"Facebook",url:"#"},{icon:"🐦",name:"Twitter",url:"#"},{icon:"📷",name:"Instagram",url:"#"},{icon:"💼",name:"LinkedIn",url:"#"}],t=[{text:"Inicio",url:"#inicio"},{text:"Beneficios",url:"#beneficios"},{text:"Requisitos",url:"#requisitos"},{text:"Hospitales",url:"#hospitales"}],r=p=>{const b=document.getElementById(p);b&&b.scrollIntoView({behavior:"smooth"})};xt();var i=dr(),o=v(i),l=v(o),c=v(l),u=_(v(c),4);Q(u,5,()=>s,G,(p,b)=>{var N=cr(),R=v(N);j(()=>{Un(N,"href",m(b).url),Un(N,"aria-label",m(b).name),T(R,m(b).icon)}),y(p,N)});var f=_(c,2),d=_(v(f),2);Q(d,5,()=>t,G,(p,b)=>{var N=ur(),R=v(N),L=v(R);j(()=>T(L,m(b).text)),Zn("click",R,()=>r(m(b).url.substring(1))),y(p,N)});var h=_(l,2),g=v(h),E=v(g);j(()=>T(E,`© ${a??""} DonarSangre. Todos los derechos reservados.`)),y(e,i),_n()}var vr=S('<button class="chat-button svelte-1czjriu" aria-label="Abrir chat"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1czjriu"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" class="svelte-1czjriu"></path></svg> <span class="chat-badge svelte-1czjriu">💬</span></button>'),pr=S('<div class="message-avatar svelte-1czjriu">🤖</div>'),mr=S('<div><!> <div class="message-content svelte-1czjriu"><div class="message-bubble svelte-1czjriu"> </div></div></div>'),hr=S('<div class="message bot svelte-1czjriu"><div class="message-avatar svelte-1czjriu">🤖</div> <div class="message-content svelte-1czjriu"><div class="message-bubble typing-indicator svelte-1czjriu"><span class="svelte-1czjriu"></span> <span class="svelte-1czjriu"></span> <span class="svelte-1czjriu"></span></div></div></div>'),_r=S('<button class="quick-button svelte-1czjriu"> </button>'),gr=S('<div class="quick-questions svelte-1czjriu"><p class="quick-title svelte-1czjriu">Preguntas frecuentes:</p> <!></div>'),br=S('<div class="chat-actions svelte-1czjriu"><button class="reset-button svelte-1czjriu">🔄 Nueva conversación</button></div>'),Er=S('<div class="chat-container svelte-1czjriu"><div class="chat-header svelte-1czjriu"><div class="chat-header-info svelte-1czjriu"><div class="chat-avatar svelte-1czjriu">🩸</div> <div class="svelte-1czjriu"><h3 class="chat-title svelte-1czjriu">Asistente de Donación</h3> <p class="chat-status svelte-1czjriu">En línea</p></div></div> <button class="close-button svelte-1czjriu" aria-label="Cerrar chat"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1czjriu"><line x1="18" y1="6" x2="6" y2="18" class="svelte-1czjriu"></line><line x1="6" y1="6" x2="18" y2="18" class="svelte-1czjriu"></line></svg></button></div> <div class="chat-messages svelte-1czjriu"><!> <!> <!> <!></div> <div class="chat-input-container svelte-1czjriu"><input type="text" class="chat-input svelte-1czjriu" placeholder="Escribe tu pregunta..."/> <button class="send-button svelte-1czjriu" aria-label="Enviar mensaje"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1czjriu"><line x1="22" y1="2" x2="11" y2="13" class="svelte-1czjriu"></line><polygon points="22 2 15 22 11 13 2 9 22 2" class="svelte-1czjriu"></polygon></svg></button></div></div>'),yr=S("<!> <!>",1);function Ar(e,n){hn(n,!0);let a=V(!1),s=V(Ne([{type:"bot",text:"¡Hola! 👋 Soy tu asistente virtual de donación de sangre. ¿En qué puedo ayudarte?",timestamp:new Date}])),t=V(""),r,i=V(Ne([])),o=V(!1);const l={greeting:{keywords:["hola","hi","buenas","buenos dias","buenas tardes","buenas noches","saludos","hey"],responses:["¡Hola! 😊 ¿Es tu primera vez donando o ya eres un donante regular? Cuéntame en qué puedo ayudarte.","¡Qué gusto saludarte! 👋 Estoy aquí para resolver todas tus dudas sobre donación de sangre. ¿Qué te gustaría saber?"]},thanks:{keywords:["gracias","thank","agradezco","genial","perfecto","excelente","ok"],responses:["¡De nada! 😊 ¿Hay algo más en lo que pueda ayudarte sobre la donación de sangre?","¡Un placer ayudarte! Si tienes más preguntas, aquí estaré. 💪"]},eligibility:{keywords:["requisitos","puedo donar","edad","peso","elegible","calificar","condiciones","apto"],responses:[`Para donar sangre debes cumplir estos requisitos básicos:

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

¿Qué específicamente te da más miedo?`]}},c=["¿Es mi primera vez, qué espero?","¿Duele mucho la aguja?","¿Cuáles son los requisitos?","¿Con qué frecuencia puedo donar?","¿Qué beneficios tiene donar?"];function u(){I(a,!m(a))}function f(w){const z=w.toLowerCase();let D=null,P=0;for(const[O,x]of Object.entries(l))for(const Y of x.keywords)if(z.includes(Y)){const ge=Y.length;ge>P&&(P=ge,D=O)}if(D){const O=l[D],x=O.responses[Math.floor(Math.random()*O.responses.length)];if(O.followUp&&Math.random()>.5){const Y=O.followUp[Math.floor(Math.random()*O.followUp.length)];return x+`

💭 `+Y}return I(i,[...m(i),D],!0),x}return z.length<10?"Cuéntame más. ¿Qué te gustaría saber específicamente sobre la donación de sangre? 🤔":`Entiendo tu pregunta. Aunque no tengo información específica sobre eso, te puedo ayudar con:

❓ Requisitos para donar
💉 Proceso de donación
🩸 Tipos de sangre
💊 Medicamentos y condiciones médicas
😰 Miedos y preocupaciones
🏥 Preparación y cuidados

¿Sobre cuál de estos temas te gustaría saber más?`}function d(){if(!m(t).trim())return;I(s,[...m(s),{type:"user",text:m(t),timestamp:new Date}],!0);const w=m(t);I(t,""),I(o,!0),setTimeout(()=>{I(o,!1);const z=f(w);I(s,[...m(s),{type:"bot",text:z,timestamp:new Date}],!0),setTimeout(()=>{r&&(r.scrollTop=r.scrollHeight)},100)},800),setTimeout(()=>{r&&(r.scrollTop=r.scrollHeight)},50)}function h(w){I(t,w,!0),d()}function g(w){w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),d())}function E(){I(s,[{type:"bot",text:"¡Hola de nuevo! 👋 ¿En qué más puedo ayudarte?",timestamp:new Date}],!0),I(i,[],!0)}var p=yr(),b=Ma(p);{var N=w=>{var z=vr();z.__click=u,y(w,z)};Ee(b,w=>{m(a)||w(N)})}var R=_(b,2);{var L=w=>{var z=Er(),D=v(z),P=_(v(D),2);P.__click=u;var O=_(D,2),x=v(O);Q(x,17,()=>m(s),G,(U,re)=>{var qe=mr(),on=v(qe);{var ln=qn=>{var is=pr();y(qn,is)};Ee(on,qn=>{m(re).type==="bot"&&qn(ln)})}var $e=_(on,2),Tn=v($e),rs=v(Tn);j(()=>{An(qe,1,`message ${m(re).type??""}`,"svelte-1czjriu"),T(rs,m(re).text)}),y(U,qe)});var Y=_(x,2);{var ge=U=>{var re=hr();y(U,re)};Ee(Y,U=>{m(o)&&U(ge)})}var tn=_(Y,2);{var rn=U=>{var re=gr(),qe=_(v(re),2);Q(qe,17,()=>c,G,(on,ln)=>{var $e=_r();$e.__click=()=>h(m(ln));var Tn=v($e);j(()=>T(Tn,m(ln))),y(on,$e)}),y(U,re)};Ee(tn,U=>{m(s).length===1&&U(rn)})}var Sn=_(tn,2);{var as=U=>{var re=br(),qe=v(re);qe.__click=E,y(U,re)};Ee(Sn,U=>{m(s).length>6&&U(as)})}Rt(O,U=>r=U,()=>r);var ss=_(O,2),wn=v(ss),ts=_(wn,2);ts.__click=d,Zn("keypress",wn,g),Ot(wn,()=>m(t),U=>I(t,U)),y(w,z)};Ee(R,w=>{m(a)&&w(L)})}y(e,p),_n()}yn(["click"]);var Sr=S('<div class="app"><!> <main><!> <!> <!> <!> <!> <!> <!></main> <!> <!></div>');function wr(e){var n=Sr(),a=v(n);zt(a);var s=_(a,2),t=v(s);kt(t);var r=_(t,2);jt(r);var i=_(r,2);Ft(i);var o=_(i,2);Yt(o);var l=_(o,2);Xt(l);var c=_(l,2);sr(c,{});var u=_(c,2);lr(u);var f=_(s,2);fr(f,{});var d=_(f,2);Ar(d,{}),y(e,n)}mt(wr,{target:document.getElementById("app")});
