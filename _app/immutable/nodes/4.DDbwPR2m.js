import{s as ye}from"../chunks/scheduler.CO5KZ6rK.js";import{S as Ie,i as ke,m as re,s as k,e as p,n as se,h as E,c as h,d as C,g as d,o as j,p as _,q as ie,j as S,k as r,t as U,a as W,r as Ee,u as oe,v as xe,b as z,f as B,l as Q,w as $e,x as X}from"../chunks/index.DmDTERaZ.js";import{e as Z}from"../chunks/each.D6YF6ztN.js";import{H as we}from"../chunks/Head.CFI0jItm.js";import{S as Ce}from"../chunks/SocialIcons.Z9bMXnKb.js";function he(v,t,a){const s=v.slice();return s[1]=t[a],s}function ve(v,t,a){const s=v.slice();return s[4]=t[a],s[6]=a,s}function me(v){let t,a,s="Recent notes",l,e,o=`Here's what I've been up to lately. You will find a list of my journal entries on
            various topics. I like to simply call them notes. Happy reading!`,n,c,g,D,b,x,H,$=Z(v[0].posts),i=[];for(let f=0;f<$.length;f+=1)i[f]=ge(he(v,$,f));return x=new Ce({props:{icon:"arrowRight",url:"/notes"}}),{c(){t=p("div"),a=p("h1"),a.textContent=s,l=k(),e=p("p"),e.textContent=o,n=k(),c=p("div"),g=p("ul");for(let f=0;f<i.length;f+=1)i[f].c();D=k(),b=p("div"),re(x.$$.fragment),this.h()},l(f){t=h(f,"DIV",{class:!0});var m=C(t);a=h(m,"H1",{class:!0,"data-svelte-h":!0}),j(a)!=="svelte-1g7v3v4"&&(a.textContent=s),l=E(m),e=h(m,"P",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-u910mo"&&(e.textContent=o),n=E(m),c=h(m,"DIV",{class:!0});var u=C(c);g=h(u,"UL",{class:!0});var P=C(g);for(let w=0;w<i.length;w+=1)i[w].l(P);P.forEach(d),u.forEach(d),D=E(m),b=h(m,"DIV",{class:!0});var T=C(b);se(x.$$.fragment,T),T.forEach(d),m.forEach(d),this.h()},h(){_(a,"class","text-neutral-300"),_(e,"class","text-neutral-300 my-2 mt-3"),_(g,"class","text-neutral-300 ml-2 space-y-1"),_(c,"class","flex mt-4"),_(b,"class","mt-6 flex w-full justify-center"),_(t,"class","relative inline-flex flex-col rounded-md bg-neutral-900 p-5 w-full")},m(f,m){S(f,t,m),r(t,a),r(t,l),r(t,e),r(t,n),r(t,c),r(c,g);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(g,null);r(t,D),r(t,b),ie(x,b,null),H=!0},p(f,m){if(m&1){$=Z(f[0].posts);let u;for(u=0;u<$.length;u+=1){const P=he(f,$,u);i[u]?i[u].p(P,m):(i[u]=ge(P),i[u].c(),i[u].m(g,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=$.length}},i(f){H||(U(x.$$.fragment,f),H=!0)},o(f){W(x.$$.fragment,f),H=!1},d(f){f&&d(t),xe(i,f),oe(x)}}}function _e(v){let t,a,s=Z(v[1].tags),l=[];for(let e=0;e<s.length;e+=1)l[e]=be(ve(v,s,e));return{c(){t=z("[");for(let e=0;e<l.length;e+=1)l[e].c();a=X()},l(e){t=B(e,"[");for(let o=0;o<l.length;o+=1)l[o].l(e);a=X()},m(e,o){S(e,t,o);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,o);S(e,a,o)},p(e,o){if(o&1){s=Z(e[1].tags);let n;for(n=0;n<s.length;n+=1){const c=ve(e,s,n);l[n]?l[n].p(c,o):(l[n]=be(c),l[n].c(),l[n].m(a.parentNode,a))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(e){e&&(d(t),d(a)),xe(l,e)}}}function De(v){let t,a,s,l=v[4]+"",e,o;return{c(){t=p("b"),a=p("i"),s=z("#"),e=z(l),o=z("]")},l(n){t=h(n,"B",{});var c=C(t);a=h(c,"I",{});var g=C(a);s=B(g,"#"),e=B(g,l),g.forEach(d),c.forEach(d),o=B(n,"]")},m(n,c){S(n,t,c),r(t,a),r(a,s),r(a,e),S(n,o,c)},p(n,c){c&1&&l!==(l=n[4]+"")&&Q(e,l)},d(n){n&&(d(t),d(o))}}}function Ve(v){let t,a,s,l=v[4]+"",e,o;return{c(){t=p("b"),a=p("i"),s=z("#"),e=z(l),o=z(", ")},l(n){t=h(n,"B",{});var c=C(t);a=h(c,"I",{});var g=C(a);s=B(g,"#"),e=B(g,l),g.forEach(d),c.forEach(d),o=B(n,", ")},m(n,c){S(n,t,c),r(t,a),r(a,s),r(a,e),S(n,o,c)},p(n,c){c&1&&l!==(l=n[4]+"")&&Q(e,l)},d(n){n&&(d(t),d(o))}}}function be(v){let t;function a(e,o){return e[6]<e[1].tags.length-1?Ve:De}let s=a(v),l=s(v);return{c(){l.c(),t=X()},l(e){l.l(e),t=X()},m(e,o){l.m(e,o),S(e,t,o)},p(e,o){s===(s=a(e))&&l?l.p(e,o):(l.d(1),l=s(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){e&&d(t),l.d(e)}}}function ge(v){let t,a,s,l,e=v[1].date+"",o,n,c,g=v[1].title+"",D,b,x,H,$,i=v[1].tags.length&&_e(v);return{c(){t=p("a"),a=p("li"),s=p("p"),l=p("b"),o=z(e),n=k(),c=p("p"),D=z(g),b=k(),x=p("p"),i&&i.c(),H=k(),this.h()},l(f){t=h(f,"A",{class:!0,href:!0});var m=C(t);a=h(m,"LI",{class:!0});var u=C(a);s=h(u,"P",{});var P=C(s);l=h(P,"B",{});var T=C(l);o=B(T,e),T.forEach(d),P.forEach(d),n=E(u),c=h(u,"P",{class:!0});var w=C(c);D=B(w,g),w.forEach(d),b=E(u),x=h(u,"P",{class:!0});var F=C(x);i&&i.l(F),F.forEach(d),u.forEach(d),H=E(m),m.forEach(d),this.h()},h(){_(c,"class","ml-3"),_(x,"class","ml-1"),_(a,"class","flex flex-row"),_(t,"class","flex flex-row"),_(t,"href",$="/notes/"+v[1].slug)},m(f,m){S(f,t,m),r(t,a),r(a,s),r(s,l),r(l,o),r(a,n),r(a,c),r(c,D),r(a,b),r(a,x),i&&i.m(x,null),r(t,H)},p(f,m){m&1&&e!==(e=f[1].date+"")&&Q(o,e),m&1&&g!==(g=f[1].title+"")&&Q(D,g),f[1].tags.length?i?i.p(f,m):(i=_e(f),i.c(),i.m(x,null)):i&&(i.d(1),i=null),m&1&&$!==($="/notes/"+f[1].slug)&&_(t,"href",$)},d(f){f&&d(t),i&&i.d()}}}function He(v){let t,a,s,l,e,o,n,c,g="",D,b,x,H="Hi, I'm Parth.",$,i,f=`I currently live and work in Bay Area, California. I work as an SRE (Site Reliability Engineer) on an Observability focussed team
          helping build a unified telemetry platform.`,m,u,P=`I love to build software backend solutions and optimize them for high reliability and availability.
          My work experience spans across domains including - supply chain, satellite internet and self-driving cars.`,T,w,F="My current tech stack includes:",ee,R,ce="<li><p><b>Backend</b>: Go, Python3</p></li> <li><p><b>Observability</b>: Open telemetry, LGTM stack</p></li> <li><p><b>Infrastructure</b>: Kubernetes, Terraform (IaaC)</p></li> <li><p><b>Cloud</b>: GCP, AWS</p></li> <li><p><b>CI/CD</b>: ArgoCD</p></li> <li><p><b>Frontend</b>: SvelteKit, Tailwindcss, JS</p></li>",te,O,A,le,q,L,J,ae,G,fe="",ne,Y;t=new we({}),A=new Ce({props:{icon:"arrowRight",url:"/about"}});let y=v[0].posts.length&&me(v);return{c(){re(t.$$.fragment),a=k(),s=p("div"),l=p("div"),e=p("div"),o=p("div"),n=k(),c=p("div"),c.innerHTML=g,D=k(),b=p("div"),x=p("h1"),x.textContent=H,$=k(),i=p("p"),i.textContent=f,m=k(),u=p("p"),u.textContent=P,T=k(),w=p("p"),w.textContent=F,ee=k(),R=p("ul"),R.innerHTML=ce,te=k(),O=p("div"),re(A.$$.fragment),le=k(),q=p("div"),L=p("div"),J=p("div"),ae=k(),G=p("div"),G.innerHTML=fe,ne=k(),y&&y.c(),this.h()},l(I){se(t.$$.fragment,I),a=E(I),s=h(I,"DIV",{class:!0});var M=C(s);l=h(M,"DIV",{class:!0});var ue=C(l);e=h(ue,"DIV",{class:!0});var K=C(e);o=h(K,"DIV",{class:!0}),C(o).forEach(d),n=E(K),c=h(K,"DIV",{class:!0,"data-svelte-h":!0}),j(c)!=="svelte-1atxlcy"&&(c.innerHTML=g),D=E(K),b=h(K,"DIV",{class:!0});var V=C(b);x=h(V,"H1",{class:!0,"data-svelte-h":!0}),j(x)!=="svelte-1tg4nht"&&(x.textContent=H),$=E(V),i=h(V,"P",{class:!0,"data-svelte-h":!0}),j(i)!=="svelte-1jrd7z7"&&(i.textContent=f),m=E(V),u=h(V,"P",{class:!0,"data-svelte-h":!0}),j(u)!=="svelte-cog3sh"&&(u.textContent=P),T=E(V),w=h(V,"P",{class:!0,"data-svelte-h":!0}),j(w)!=="svelte-mxr0nz"&&(w.textContent=F),ee=E(V),R=h(V,"UL",{class:!0,"data-svelte-h":!0}),j(R)!=="svelte-m6c4ew"&&(R.innerHTML=ce),te=E(V),O=h(V,"DIV",{class:!0});var de=C(O);se(A.$$.fragment,de),de.forEach(d),V.forEach(d),K.forEach(d),ue.forEach(d),le=E(M),q=h(M,"DIV",{class:!0});var pe=C(q);L=h(pe,"DIV",{class:!0});var N=C(L);J=h(N,"DIV",{class:!0}),C(J).forEach(d),ae=E(N),G=h(N,"DIV",{class:!0,"data-svelte-h":!0}),j(G)!=="svelte-z92fz8"&&(G.innerHTML=fe),ne=E(N),y&&y.l(N),N.forEach(d),pe.forEach(d),M.forEach(d),this.h()},h(){_(o,"class","absolute blur-3xl inset-20 bg-limeag rounded-md"),_(c,"class","absolute rounded-md overflow-hidden before:absolute before:top-[-70%] before:right-[-70%] before:bottom-[-70%] before:left-[-70%] before:bg-[conic-gradient(transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,#9ecd60)] before:animate-spin-slow -inset-px"),_(x,"class","text-neutral-300"),_(i,"class","text-neutral-300 my-3"),_(u,"class","text-neutral-300 my-2"),_(w,"class","text-neutral-300 my-2"),_(R,"class","text-neutral-300 ml-2"),_(O,"class","mt-6 flex w-full justify-center"),_(b,"class","relative inline-flex flex-col rounded-md bg-neutral-900 p-5"),_(e,"class","relative inline-flex"),_(l,"class","inline-flex flex-col rounded-md mt-16 mb-5"),_(J,"class","absolute blur-3xl inset-20 bg-limeag rounded-md"),_(G,"class","absolute rounded-md overflow-hidden before:absolute before:top-[-120%] before:right-[-120%] before:bottom-[-120%] before:left-[-120%] before:bg-[conic-gradient(transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,#9ecd60)] before:animate-spin-slow -inset-px"),_(L,"class","relative inline-flex"),_(q,"class","inline-flex flex-col rounded-md mt-20 mb-5"),_(s,"class","inline-grid")},m(I,M){ie(t,I,M),S(I,a,M),S(I,s,M),r(s,l),r(l,e),r(e,o),r(e,n),r(e,c),r(e,D),r(e,b),r(b,x),r(b,$),r(b,i),r(b,m),r(b,u),r(b,T),r(b,w),r(b,ee),r(b,R),r(b,te),r(b,O),ie(A,O,null),r(s,le),r(s,q),r(q,L),r(L,J),r(L,ae),r(L,G),r(L,ne),y&&y.m(L,null),Y=!0},p(I,[M]){I[0].posts.length?y?(y.p(I,M),M&1&&U(y,1)):(y=me(I),y.c(),U(y,1),y.m(L,null)):y&&($e(),W(y,1,1,()=>{y=null}),Ee())},i(I){Y||(U(t.$$.fragment,I),U(A.$$.fragment,I),U(y),Y=!0)},o(I){W(t.$$.fragment,I),W(A.$$.fragment,I),W(y),Y=!1},d(I){I&&(d(a),d(s)),oe(t,I),oe(A),y&&y.d()}}}function Pe(v,t,a){let{data:s}=t;return v.$$set=l=>{"data"in l&&a(0,s=l.data)},[s]}class ze extends Ie{constructor(t){super(),ke(this,t,Pe,He,ye,{data:0})}}export{ze as component};
