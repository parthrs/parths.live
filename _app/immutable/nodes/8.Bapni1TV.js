import{s as E,n as f}from"../chunks/scheduler.CO5KZ6rK.js";import{S as x,i as D,e as m,H as b,c,d as p,D as j,g as l,p as _,j as I,k as $,m as h,s as q,n as g,h as C,q as v,t as y,a as H,u as w}from"../chunks/index.DmDTERaZ.js";import{H as S}from"../chunks/Head.CFI0jItm.js";function T(r){let e,s,a,n,t=r[0].content+"";return{c(){e=m("div"),s=m("article"),a=m("div"),n=new b(!1),this.h()},l(o){e=c(o,"DIV",{class:!0});var i=p(e);s=c(i,"ARTICLE",{});var u=p(s);a=c(u,"DIV",{class:!0});var d=p(a);n=j(d,!1),d.forEach(l),u.forEach(l),i.forEach(l),this.h()},h(){n.a=null,_(a,"class","post-content svelte-hfv6oj"),_(e,"class","mx-auto my-auto px-4 pt-8 pb-10")},m(o,i){I(o,e,i),$(e,s),$(s,a),n.m(t,a)},p(o,[i]){i&1&&t!==(t=o[0].content+"")&&n.p(t)},i:f,o:f,d(o){o&&l(e)}}}function V(r,e,s){let{post:a}=e;return r.$$set=n=>{"post"in n&&s(0,a=n.post)},[a]}class k extends x{constructor(e){super(),D(this,e,V,T,E,{post:0})}}function A(r){let e,s,a,n;return e=new S({props:{title:r[0].title,description:r[0].summary}}),a=new k({props:{post:r[0]}}),{c(){h(e.$$.fragment),s=q(),h(a.$$.fragment)},l(t){g(e.$$.fragment,t),s=C(t),g(a.$$.fragment,t)},m(t,o){v(e,t,o),I(t,s,o),v(a,t,o),n=!0},p:f,i(t){n||(y(e.$$.fragment,t),y(a.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),H(a.$$.fragment,t),n=!1},d(t){t&&l(s),w(e,t),w(a,t)}}}function B(r,e,s){let{data:a}=e;const n=a.post;return r.$$set=t=>{"data"in t&&s(1,a=t.data)},[n,a]}class z extends x{constructor(e){super(),D(this,e,B,A,E,{data:1})}}export{z as component};
