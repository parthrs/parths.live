import{s as q,n as v}from"../chunks/scheduler.CO5KZ6rK.js";import{S as C,i as S,e as d,b as k,s as T,H as A,c as _,d as h,f as B,g as m,h as V,D as L,p as $,j,k as p,l as P,m as x,n as E,q as w,t as b,a as D,u as I}from"../chunks/index.DmDTERaZ.js";import{H as R}from"../chunks/Head.B8kogxuq.js";function z(r){let t,s,a=r[0].title+"",n,e,o,c,f,u=r[0].content+"";return{c(){t=d("div"),s=d("h1"),n=k(a),e=T(),o=d("article"),c=d("div"),f=new A(!1),this.h()},l(l){t=_(l,"DIV",{class:!0});var i=h(t);s=_(i,"H1",{class:!0});var g=h(s);n=B(g,a),g.forEach(m),e=V(i),o=_(i,"ARTICLE",{});var y=h(o);c=_(y,"DIV",{class:!0});var H=h(c);f=L(H,!1),H.forEach(m),y.forEach(m),i.forEach(m),this.h()},h(){$(s,"class","text-5xl"),f.a=null,$(c,"class","post-content pt-6 svelte-vrfaf5"),$(t,"class","mx-auto my-auto px-4 pt-8 pb-10 divide-y divide-neutral-700 space-y-5")},m(l,i){j(l,t,i),p(t,s),p(s,n),p(t,e),p(t,o),p(o,c),f.m(u,c)},p(l,[i]){i&1&&a!==(a=l[0].title+"")&&P(n,a),i&1&&u!==(u=l[0].content+"")&&f.p(u)},i:v,o:v,d(l){l&&m(t)}}}function F(r,t,s){let{post:a}=t;return r.$$set=n=>{"post"in n&&s(0,a=n.post)},[a]}class G extends C{constructor(t){super(),S(this,t,F,z,q,{post:0})}}function J(r){let t,s,a,n;return t=new R({props:{title:r[0].title,description:r[0].summary}}),a=new G({props:{post:r[0]}}),{c(){x(t.$$.fragment),s=T(),x(a.$$.fragment)},l(e){E(t.$$.fragment,e),s=V(e),E(a.$$.fragment,e)},m(e,o){w(t,e,o),j(e,s,o),w(a,e,o),n=!0},p:v,i(e){n||(b(t.$$.fragment,e),b(a.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),D(a.$$.fragment,e),n=!1},d(e){e&&m(s),I(t,e),I(a,e)}}}function K(r,t,s){let{data:a}=t;const n=a.post;return r.$$set=e=>{"data"in e&&s(1,a=e.data)},[n,a]}class Q extends C{constructor(t){super(),S(this,t,K,J,q,{data:1})}}export{Q as component};
