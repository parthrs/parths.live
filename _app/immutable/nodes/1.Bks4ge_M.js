import{s as M,n as S}from"../chunks/scheduler.CO5KZ6rK.js";import{S as j,i as q,e as h,c as v,s as E,b as $,d as x,f as w,g as T,h as c,j as d,k as g,l as _,m as H,t as b,a as C,n as y,o as I}from"../chunks/index.73SDJlB_.js";import{H as D,T as F,F as L}from"../chunks/Footer.CCCGVVYL.js";function R(u){let t,n="Off-roading eh?",s,r,i='Sorry no such page exists. Back to <a class="webpagelevellink" href="/">Home</a>';return{c(){t=h("h1"),t.textContent=n,s=E(),r=h("p"),r.innerHTML=i,this.h()},l(e){t=$(e,"H1",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-mhx1qr"&&(t.textContent=n),s=T(e),r=$(e,"P",{class:!0,"data-svelte-h":!0}),I(r)!=="svelte-bz8egh"&&(r.innerHTML=i),this.h()},h(){d(t,"class","text-neutral-400"),d(r,"class","mt-5")},m(e,m){g(e,t,m),g(e,s,m),g(e,r,m)},p:S,d(e){e&&(c(t),c(s),c(r))}}}function V(u){let t,n,s,r,i,e,m,f,p;return s=new D({}),e=new F({props:{pathname:u[0].currentRoute,$$slots:{default:[R]},$$scope:{ctx:u}}}),f=new L({}),{c(){t=h("div"),n=h("div"),v(s.$$.fragment),r=E(),i=h("main"),v(e.$$.fragment),m=E(),v(f.$$.fragment),this.h()},l(a){t=$(a,"DIV",{class:!0});var l=x(t);n=$(l,"DIV",{class:!0});var o=x(n);w(s.$$.fragment,o),r=T(o),i=$(o,"MAIN",{class:!0});var k=x(i);w(e.$$.fragment,k),k.forEach(c),m=T(o),w(f.$$.fragment,o),o.forEach(c),l.forEach(c),this.h()},h(){d(i,"class","mb-auto"),d(n,"class","flex flex-nowrap min-h-dvh flex-col justify-between"),d(t,"class","mx-auto my-auto px-6 lg:max-w-3xl")},m(a,l){g(a,t,l),_(t,n),H(s,n,null),_(n,r),_(n,i),H(e,i,null),_(n,m),H(f,n,null),p=!0},p(a,[l]){const o={};l&1&&(o.pathname=a[0].currentRoute),l&2&&(o.$$scope={dirty:l,ctx:a}),e.$set(o)},i(a){p||(b(s.$$.fragment,a),b(e.$$.fragment,a),b(f.$$.fragment,a),p=!0)},o(a){C(s.$$.fragment,a),C(e.$$.fragment,a),C(f.$$.fragment,a),p=!1},d(a){a&&c(t),y(s),y(e),y(f)}}}function z(u,t,n){let{data:s}=t;return u.$$set=r=>{"data"in r&&n(0,s=r.data)},[s]}class O extends j{constructor(t){super(),q(this,t,z,V,M,{data:0})}}export{O as component};
