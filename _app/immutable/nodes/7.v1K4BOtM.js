import{s as pe,n as ve,c as he,u as _e,g as de,a as me}from"../chunks/scheduler.CO5KZ6rK.js";import{S as be,i as $e,m as z,s as y,x as G,n as X,h as T,q as J,j as L,t as C,a as H,g as v,u as M,e as I,c as P,d as A,o as ke,p as w,k as m,v as Q,b as j,f as B,l as U,y as K,z as ge,w as R,r as W}from"../chunks/index.DmDTERaZ.js";import{e as q}from"../chunks/each.D6YF6ztN.js";import{H as Ee}from"../chunks/Head.B8kogxuq.js";import{A as le,a as ae}from"../chunks/arrowleft.DEL5ozK2.js";function se(n,e,t){const l=n.slice();return l[10]=e[t],l}function re(n,e,t){const l=n.slice();return l[13]=e[t],l}function ne(n,e,t){const l=n.slice();return l[13]=e[t],l}function we(n){let e,t,l="Notes",r,s,a,g,k,b,h=q(n[2]),o=[];for(let u=0;u<h.length;u+=1)o[u]=ie(ne(n,h,u));let _=q(n[1]),f=[];for(let u=0;u<_.length;u+=1)f[u]=ce(se(n,_,u));let $=n[3]>1&&Ie(n);return{c(){e=I("div"),t=I("h1"),t.textContent=l,r=y(),s=I("div");for(let u=0;u<o.length;u+=1)o[u].c();a=y(),g=I("div");for(let u=0;u<f.length;u+=1)f[u].c();k=y(),$&&$.c(),this.h()},l(u){e=P(u,"DIV",{class:!0});var c=A(e);t=P(c,"H1",{class:!0,"data-svelte-h":!0}),ke(t)!=="svelte-1g1ukj3"&&(t.textContent=l),r=T(c),s=P(c,"DIV",{class:!0});var i=A(s);for(let N=0;N<o.length;N+=1)o[N].l(i);i.forEach(v),a=T(c),g=P(c,"DIV",{class:!0});var V=A(g);for(let N=0;N<f.length;N+=1)f[N].l(V);V.forEach(v),k=T(c),$&&$.l(c),c.forEach(v),this.h()},h(){w(t,"class","text-neutral-300 mt-6"),w(s,"class","flex flex-wrap gap-2 my-4 mb-3"),w(g,"class","mt-6"),w(e,"class","flex flex-col")},m(u,c){L(u,e,c),m(e,t),m(e,r),m(e,s);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(s,null);m(e,a),m(e,g);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(g,null);m(e,k),$&&$.m(e,null),b=!0},p(u,c){if(c&4){h=q(u[2]);let i;for(i=0;i<h.length;i+=1){const V=ne(u,h,i);o[i]?o[i].p(V,c):(o[i]=ie(V),o[i].c(),o[i].m(s,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=h.length}if(c&2){_=q(u[1]);let i;for(i=0;i<_.length;i+=1){const V=se(u,_,i);f[i]?f[i].p(V,c):(f[i]=ce(V),f[i].c(),f[i].m(g,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=_.length}u[3]>1&&$.p(u,c)},i(u){b||(C($),b=!0)},o(u){H($),b=!1},d(u){u&&v(e),Q(o,u),Q(f,u),$&&$.d()}}}function ie(n){let e,t=n[13]+"",l;return{c(){e=I("a"),l=j(t),this.h()},l(r){e=P(r,"A",{href:!0,class:!0});var s=A(e);l=B(s,t),s.forEach(v),this.h()},h(){w(e,"href","/tags/"+n[13].toLowerCase()),w(e,"class","border px-1 border-neutral-300 hover:border-limeag rounded-md")},m(r,s){L(r,e,s),m(e,l)},p:ve,d(r){r&&v(e)}}}function oe(n){let e,t=q(n[10].tags),l=[];for(let r=0;r<t.length;r+=1)l[r]=fe(re(n,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=G()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);e=G()},m(r,s){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(r,s);L(r,e,s)},p(r,s){if(s&2){t=q(r[10].tags);let a;for(a=0;a<t.length;a+=1){const g=re(r,t,a);l[a]?l[a].p(g,s):(l[a]=fe(g),l[a].c(),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(r){r&&v(e),Q(l,r)}}}function fe(n){let e,t=n[13]+"",l,r;return{c(){e=I("a"),l=j(t),this.h()},l(s){e=P(s,"A",{href:!0,class:!0});var a=A(e);l=B(a,t),a.forEach(v),this.h()},h(){w(e,"href",r="/tags/"+n[13].toLowerCase()),w(e,"class","border px-1 border-neutral-300 hover:border-limeag rounded-md")},m(s,a){L(s,e,a),m(e,l)},p(s,a){a&2&&t!==(t=s[13]+"")&&U(l,t),a&2&&r!==(r="/tags/"+s[13].toLowerCase())&&w(e,"href",r)},d(s){s&&v(e)}}}function ce(n){let e,t,l,r,s=n[10].date+"",a,g,k,b,h,o,_,f=n[10].title+"",$,u,c,i=n[10].summary+"",V,N,D,d=n[10].tags.length&&oe(n);return{c(){e=I("div"),t=I("div"),l=I("time"),r=I("b"),a=j(s),g=y(),k=I("div"),b=I("div"),d&&d.c(),h=y(),o=I("a"),_=I("h2"),$=j(f),u=y(),c=I("div"),V=j(i),D=y(),this.h()},l(p){e=P(p,"DIV",{class:!0});var E=A(e);t=P(E,"DIV",{class:!0});var S=A(t);l=P(S,"TIME",{datetime:!0});var O=A(l);r=P(O,"B",{});var Y=A(r);a=B(Y,s),Y.forEach(v),O.forEach(v),g=T(S),k=P(S,"DIV",{class:!0});var Z=A(k);b=P(Z,"DIV",{class:!0});var x=A(b);d&&d.l(x),x.forEach(v),Z.forEach(v),S.forEach(v),h=T(E),o=P(E,"A",{class:!0,href:!0});var F=A(o);_=P(F,"H2",{class:!0});var ee=A(_);$=B(ee,f),ee.forEach(v),u=T(F),c=P(F,"DIV",{class:!0});var te=A(c);V=B(te,i),te.forEach(v),F.forEach(v),D=T(E),E.forEach(v),this.h()},h(){w(l,"datetime","June 7, 2005"),w(b,"class","flex flex-wrap gap-2"),w(k,"class","flow-root mt-4 text-sm text-neutral-300"),w(t,"class","w-full text-neutral-300"),w(_,"class","text(neutral-300) font-bold leading-tight tracking-tight"),w(c,"class","text-neutral-100 italic"),w(o,"class","sm:col-span-3 sm:pl-8 sm:border-l sm:border-gray-300 flex flex-col gap-4"),w(o,"href",N="/notes/"+n[10].slug),w(e,"class","py-6 grid sm:grid-cols-4 gap-2")},m(p,E){L(p,e,E),m(e,t),m(t,l),m(l,r),m(r,a),m(t,g),m(t,k),m(k,b),d&&d.m(b,null),m(e,h),m(e,o),m(o,_),m(_,$),m(o,u),m(o,c),m(c,V),m(e,D)},p(p,E){E&2&&s!==(s=p[10].date+"")&&U(a,s),p[10].tags.length?d?d.p(p,E):(d=oe(p),d.c(),d.m(b,null)):d&&(d.d(1),d=null),E&2&&f!==(f=p[10].title+"")&&U($,f),E&2&&i!==(i=p[10].summary+"")&&U(V,i),E&2&&N!==(N="/notes/"+p[10].slug)&&w(o,"href",N)},d(p){p&&v(e),d&&d.d()}}}function Ie(n){let e,t,l,r,s,a,g,k,b,h,o,_,f,$,u,c=n[0]>1&&ue(n);var i=le;function V(d,p){return{}}i&&(h=K(i,V()));const N=n[8].default,D=he(N,n,n[7],null);return{c(){e=I("div"),c&&c.c(),t=y(),l=I("p"),r=j("Page "),s=j(n[0]),a=j(" of "),g=j(n[3]),k=y(),b=I("button"),h&&z(h.$$.fragment),o=y(),_=I("span"),D&&D.c(),this.h()},l(d){e=P(d,"DIV",{class:!0});var p=A(e);c&&c.l(p),t=T(p),l=P(p,"P",{});var E=A(l);r=B(E,"Page "),s=B(E,n[0]),a=B(E," of "),g=B(E,n[3]),E.forEach(v),k=T(p),b=P(p,"BUTTON",{class:!0});var S=A(b);h&&X(h.$$.fragment,S),o=T(S),_=P(S,"SPAN",{});var O=A(_);D&&D.l(O),O.forEach(v),S.forEach(v),p.forEach(v),this.h()},h(){w(b,"class","text-gray-400 transition hover:text-limeag"),w(e,"class","flex flex-row justify-center mt-8 mb-8 space-x-3")},m(d,p){L(d,e,p),c&&c.m(e,null),m(e,t),m(e,l),m(l,r),m(l,s),m(l,a),m(l,g),m(e,k),m(e,b),h&&J(h,b,null),m(b,o),m(b,_),D&&D.m(_,null),f=!0,$||(u=ge(b,"click",n[4]),$=!0)},p(d,p){if(d[0]>1?c?(c.p(d,p),p&1&&C(c,1)):(c=ue(d),c.c(),C(c,1),c.m(e,t)):c&&(R(),H(c,1,1,()=>{c=null}),W()),(!f||p&1)&&U(s,d[0]),i!==(i=le)){if(h){R();const E=h;H(E.$$.fragment,1,0,()=>{M(E,1)}),W()}i?(h=K(i,V()),z(h.$$.fragment),C(h.$$.fragment,1),J(h,b,o)):h=null}D&&D.p&&(!f||p&128)&&_e(D,N,d,d[7],f?me(N,d[7],p,null):de(d[7]),null)},i(d){f||(C(c),h&&C(h.$$.fragment,d),C(D,d),f=!0)},o(d){H(c),h&&H(h.$$.fragment,d),H(D,d),f=!1},d(d){d&&v(e),c&&c.d(),h&&M(h),D&&D.d(d),$=!1,u()}}}function ue(n){let e,t,l,r,s,a,g;var k=ae;function b(_,f){return{props:{class:"w-5"}}}k&&(t=K(k,b()));const h=n[8].default,o=he(h,n,n[7],null);return{c(){e=I("button"),t&&z(t.$$.fragment),l=y(),r=I("span"),o&&o.c(),this.h()},l(_){e=P(_,"BUTTON",{class:!0});var f=A(e);t&&X(t.$$.fragment,f),l=T(f),r=P(f,"SPAN",{});var $=A(r);o&&o.l($),$.forEach(v),f.forEach(v),this.h()},h(){w(e,"class","text-gray-400 transition hover:text-limeag")},m(_,f){L(_,e,f),t&&J(t,e,null),m(e,l),m(e,r),o&&o.m(r,null),s=!0,a||(g=ge(e,"click",n[5]),a=!0)},p(_,f){if(k!==(k=ae)){if(t){R();const $=t;H($.$$.fragment,1,0,()=>{M($,1)}),W()}k?(t=K(k,b()),z(t.$$.fragment),C(t.$$.fragment,1),J(t,e,l)):t=null}o&&o.p&&(!s||f&128)&&_e(o,h,_,_[7],s?me(h,_[7],f,null):de(_[7]),null)},i(_){s||(t&&C(t.$$.fragment,_),C(o,_),s=!0)},o(_){t&&H(t.$$.fragment,_),H(o,_),s=!1},d(_){_&&v(e),t&&M(t),o&&o.d(_),a=!1,g()}}}function Pe(n){let e,t,l,r;e=new Ee({props:{title:"Notes",description:"All recent notes by tags"}});let s=n[2]&&n[2].length&&we(n);return{c(){z(e.$$.fragment),t=y(),s&&s.c(),l=G()},l(a){X(e.$$.fragment,a),t=T(a),s&&s.l(a),l=G()},m(a,g){J(e,a,g),L(a,t,g),s&&s.m(a,g),L(a,l,g),r=!0},p(a,[g]){a[2]&&a[2].length&&s.p(a,g)},i(a){r||(C(e.$$.fragment,a),C(s),r=!0)},o(a){H(e.$$.fragment,a),H(s),r=!1},d(a){a&&(v(t),v(l)),M(e,a),s&&s.d(a)}}}function Ae(n,e,t){let l,{$$slots:r={},$$scope:s}=e,{data:a}=e,{tags:g,numPages:k,paginatedPosts:b,currentPage:h}=a;function o(){t(0,h+=1)}function _(){t(0,h-=1)}return n.$$set=f=>{"data"in f&&t(6,a=f.data),"$$scope"in f&&t(7,s=f.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&t(1,l=b[h])},[h,l,g,k,o,_,a,s,r]}class Te extends be{constructor(e){super(),$e(this,e,Ae,Pe,pe,{data:6})}}export{Te as component};
