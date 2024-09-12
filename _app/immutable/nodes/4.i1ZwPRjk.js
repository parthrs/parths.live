import{s as ge}from"../chunks/scheduler.CO5KZ6rK.js";import{S as xe,i as Ie,c as ae,s as E,e as p,f as ne,g as k,b as h,d as I,h as d,o as z,j as _,m as re,k as M,l as s,t as N,a as J,u as ye,n as se,v as _e,p as R,q as j,r as Y,w as Ce,x as Q}from"../chunks/index.73SDJlB_.js";import{e as X}from"../chunks/each.D6YF6ztN.js";import{H as Ee}from"../chunks/Head.CjUAxvxe.js";import{S as be}from"../chunks/SocialIcons.DFOFZu5m.js";function ue(v,t,a){const r=v.slice();return r[1]=t[a],r}function de(v,t,a){const r=v.slice();return r[4]=t[a],r[6]=a,r}function pe(v){let t,a,r="Recent notes",l,e,o=`Here's what I've been up to lately. You will find a list of my journal entries on
            various topics. I like to simply call them notes. Happy reading!`,n,c,g,D,b,x,V,$=X(v[0].posts),i=[];for(let f=0;f<$.length;f+=1)i[f]=me(ue(v,$,f));return x=new be({props:{icon:"arrowRight",url:"/notes"}}),{c(){t=p("div"),a=p("h1"),a.textContent=r,l=E(),e=p("p"),e.textContent=o,n=E(),c=p("div"),g=p("ul");for(let f=0;f<i.length;f+=1)i[f].c();D=E(),b=p("div"),ae(x.$$.fragment),this.h()},l(f){t=h(f,"DIV",{class:!0});var m=I(t);a=h(m,"H1",{class:!0,"data-svelte-h":!0}),z(a)!=="svelte-1g7v3v4"&&(a.textContent=r),l=k(m),e=h(m,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-u910mo"&&(e.textContent=o),n=k(m),c=h(m,"DIV",{class:!0});var u=I(c);g=h(u,"UL",{class:!0});var H=I(g);for(let w=0;w<i.length;w+=1)i[w].l(H);H.forEach(d),u.forEach(d),D=k(m),b=h(m,"DIV",{class:!0});var T=I(b);ne(x.$$.fragment,T),T.forEach(d),m.forEach(d),this.h()},h(){_(a,"class","text-neutral-300"),_(e,"class","text-neutral-300 my-2 mt-3"),_(g,"class","text-neutral-300 ml-2 space-y-1"),_(c,"class","flex mt-4"),_(b,"class","mt-6 flex w-full justify-center"),_(t,"class","relative inline-flex flex-col rounded-md bg-neutral-900 p-5 w-full")},m(f,m){M(f,t,m),s(t,a),s(t,l),s(t,e),s(t,n),s(t,c),s(c,g);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(g,null);s(t,D),s(t,b),re(x,b,null),V=!0},p(f,m){if(m&1){$=X(f[0].posts);let u;for(u=0;u<$.length;u+=1){const H=ue(f,$,u);i[u]?i[u].p(H,m):(i[u]=me(H),i[u].c(),i[u].m(g,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=$.length}},i(f){V||(N(x.$$.fragment,f),V=!0)},o(f){J(x.$$.fragment,f),V=!1},d(f){f&&d(t),_e(i,f),se(x)}}}function he(v){let t,a,r=X(v[1].tags),l=[];for(let e=0;e<r.length;e+=1)l[e]=ve(de(v,r,e));return{c(){t=R("[");for(let e=0;e<l.length;e+=1)l[e].c();a=Q()},l(e){t=j(e,"[");for(let o=0;o<l.length;o+=1)l[o].l(e);a=Q()},m(e,o){M(e,t,o);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,o);M(e,a,o)},p(e,o){if(o&1){r=X(e[1].tags);let n;for(n=0;n<r.length;n+=1){const c=de(e,r,n);l[n]?l[n].p(c,o):(l[n]=ve(c),l[n].c(),l[n].m(a.parentNode,a))}for(;n<l.length;n+=1)l[n].d(1);l.length=r.length}},d(e){e&&(d(t),d(a)),_e(l,e)}}}function ke(v){let t,a,r,l=v[4]+"",e,o;return{c(){t=p("b"),a=p("i"),r=R("#"),e=R(l),o=R("]")},l(n){t=h(n,"B",{});var c=I(t);a=h(c,"I",{});var g=I(a);r=j(g,"#"),e=j(g,l),g.forEach(d),c.forEach(d),o=j(n,"]")},m(n,c){M(n,t,c),s(t,a),s(a,r),s(a,e),M(n,o,c)},p(n,c){c&1&&l!==(l=n[4]+"")&&Y(e,l)},d(n){n&&(d(t),d(o))}}}function $e(v){let t,a,r,l=v[4]+"",e,o;return{c(){t=p("b"),a=p("i"),r=R("#"),e=R(l),o=R(", ")},l(n){t=h(n,"B",{});var c=I(t);a=h(c,"I",{});var g=I(a);r=j(g,"#"),e=j(g,l),g.forEach(d),c.forEach(d),o=j(n,", ")},m(n,c){M(n,t,c),s(t,a),s(a,r),s(a,e),M(n,o,c)},p(n,c){c&1&&l!==(l=n[4]+"")&&Y(e,l)},d(n){n&&(d(t),d(o))}}}function ve(v){let t;function a(e,o){return e[6]<e[1].tags.length-1?$e:ke}let r=a(v),l=r(v);return{c(){l.c(),t=Q()},l(e){l.l(e),t=Q()},m(e,o){l.m(e,o),M(e,t,o)},p(e,o){r===(r=a(e))&&l?l.p(e,o):(l.d(1),l=r(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){e&&d(t),l.d(e)}}}function me(v){let t,a,r,l,e=v[1].date+"",o,n,c,g=v[1].title+"",D,b,x,V,$,i=v[1].tags.length&&he(v);return{c(){t=p("a"),a=p("li"),r=p("p"),l=p("b"),o=R(e),n=E(),c=p("p"),D=R(g),b=E(),x=p("p"),i&&i.c(),V=E(),this.h()},l(f){t=h(f,"A",{class:!0,href:!0});var m=I(t);a=h(m,"LI",{class:!0});var u=I(a);r=h(u,"P",{});var H=I(r);l=h(H,"B",{});var T=I(l);o=j(T,e),T.forEach(d),H.forEach(d),n=k(u),c=h(u,"P",{class:!0});var w=I(c);D=j(w,g),w.forEach(d),b=k(u),x=h(u,"P",{class:!0});var O=I(x);i&&i.l(O),O.forEach(d),u.forEach(d),V=k(m),m.forEach(d),this.h()},h(){_(c,"class","ml-3"),_(x,"class","ml-1"),_(a,"class","flex flex-row"),_(t,"class","flex flex-row"),_(t,"href",$="/notes/"+v[1].slug)},m(f,m){M(f,t,m),s(t,a),s(a,r),s(r,l),s(l,o),s(a,n),s(a,c),s(c,D),s(a,b),s(a,x),i&&i.m(x,null),s(t,V)},p(f,m){m&1&&e!==(e=f[1].date+"")&&Y(o,e),m&1&&g!==(g=f[1].title+"")&&Y(D,g),f[1].tags.length?i?i.p(f,m):(i=he(f),i.c(),i.m(x,null)):i&&(i.d(1),i=null),m&1&&$!==($="/notes/"+f[1].slug)&&_(t,"href",$)},d(f){f&&d(t),i&&i.d()}}}function we(v){let t,a,r,l,e,o,n,c,g="",D,b,x,V="Hi, I'm Parth.",$,i,f=`I currently work as a Site Reliability Engineer (SRE). I love to build software backend solutions and optimize them for high reliability and availability.
          My work experience spans across domains including - supply chain, satellite internet, self-driving cars and GPU hyperscaler.`,m,u,H="My current tech stack includes:",T,w,O="<li><p><b>Backend</b>: Go, Python3</p></li> <li><p><b>Observability</b>: Open telemetry, LGTM stack</p></li> <li><p><b>Infrastructure</b>: Kubernetes, Terraform (IaaC)</p></li> <li><p><b>Cloud</b>: GCP, AWS</p></li> <li><p><b>CI/CD</b>: ArgoCD</p></li> <li><p><b>Frontend</b>: SvelteKit, Tailwindcss, JS</p></li>",Z,A,B,ee,U,P,F,te,G,ie="",le,W;t=new Ee({}),B=new be({props:{icon:"arrowRight",url:"/about"}});let y=v[0].posts.length&&pe(v);return{c(){ae(t.$$.fragment),a=E(),r=p("div"),l=p("div"),e=p("div"),o=p("div"),n=E(),c=p("div"),c.innerHTML=g,D=E(),b=p("div"),x=p("h1"),x.textContent=V,$=E(),i=p("p"),i.textContent=f,m=E(),u=p("p"),u.textContent=H,T=E(),w=p("ul"),w.innerHTML=O,Z=E(),A=p("div"),ae(B.$$.fragment),ee=E(),U=p("div"),P=p("div"),F=p("div"),te=E(),G=p("div"),G.innerHTML=ie,le=E(),y&&y.c(),this.h()},l(C){ne(t.$$.fragment,C),a=k(C),r=h(C,"DIV",{class:!0});var L=I(r);l=h(L,"DIV",{class:!0});var oe=I(l);e=h(oe,"DIV",{class:!0});var q=I(e);o=h(q,"DIV",{class:!0}),I(o).forEach(d),n=k(q),c=h(q,"DIV",{class:!0,"data-svelte-h":!0}),z(c)!=="svelte-1atxlcy"&&(c.innerHTML=g),D=k(q),b=h(q,"DIV",{class:!0});var S=I(b);x=h(S,"H1",{class:!0,"data-svelte-h":!0}),z(x)!=="svelte-1tg4nht"&&(x.textContent=V),$=k(S),i=h(S,"P",{class:!0,"data-svelte-h":!0}),z(i)!=="svelte-up23fs"&&(i.textContent=f),m=k(S),u=h(S,"P",{class:!0,"data-svelte-h":!0}),z(u)!=="svelte-mxr0nz"&&(u.textContent=H),T=k(S),w=h(S,"UL",{class:!0,"data-svelte-h":!0}),z(w)!=="svelte-m6c4ew"&&(w.innerHTML=O),Z=k(S),A=h(S,"DIV",{class:!0});var ce=I(A);ne(B.$$.fragment,ce),ce.forEach(d),S.forEach(d),q.forEach(d),oe.forEach(d),ee=k(L),U=h(L,"DIV",{class:!0});var fe=I(U);P=h(fe,"DIV",{class:!0});var K=I(P);F=h(K,"DIV",{class:!0}),I(F).forEach(d),te=k(K),G=h(K,"DIV",{class:!0,"data-svelte-h":!0}),z(G)!=="svelte-z92fz8"&&(G.innerHTML=ie),le=k(K),y&&y.l(K),K.forEach(d),fe.forEach(d),L.forEach(d),this.h()},h(){_(o,"class","absolute blur-3xl inset-20 bg-limeag rounded-md"),_(c,"class","absolute rounded-md overflow-hidden before:absolute before:top-[-70%] before:right-[-70%] before:bottom-[-70%] before:left-[-70%] before:bg-[conic-gradient(transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,#9ecd60)] before:animate-spin-slow -inset-px"),_(x,"class","text-neutral-300"),_(i,"class","text-neutral-300 my-3"),_(u,"class","text-neutral-300 my-2"),_(w,"class","text-neutral-300 ml-2"),_(A,"class","mt-6 flex w-full justify-center"),_(b,"class","relative inline-flex flex-col rounded-md bg-neutral-900 p-5"),_(e,"class","relative inline-flex"),_(l,"class","inline-flex flex-col rounded-md mt-16 mb-5"),_(F,"class","absolute blur-3xl inset-20 bg-limeag rounded-md"),_(G,"class","absolute rounded-md overflow-hidden before:absolute before:top-[-120%] before:right-[-120%] before:bottom-[-120%] before:left-[-120%] before:bg-[conic-gradient(transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,#9ecd60)] before:animate-spin-slow -inset-px"),_(P,"class","relative inline-flex"),_(U,"class","inline-flex flex-col rounded-md mt-20 mb-5"),_(r,"class","inline-grid")},m(C,L){re(t,C,L),M(C,a,L),M(C,r,L),s(r,l),s(l,e),s(e,o),s(e,n),s(e,c),s(e,D),s(e,b),s(b,x),s(b,$),s(b,i),s(b,m),s(b,u),s(b,T),s(b,w),s(b,Z),s(b,A),re(B,A,null),s(r,ee),s(r,U),s(U,P),s(P,F),s(P,te),s(P,G),s(P,le),y&&y.m(P,null),W=!0},p(C,[L]){C[0].posts.length?y?(y.p(C,L),L&1&&N(y,1)):(y=pe(C),y.c(),N(y,1),y.m(P,null)):y&&(Ce(),J(y,1,1,()=>{y=null}),ye())},i(C){W||(N(t.$$.fragment,C),N(B.$$.fragment,C),N(y),W=!0)},o(C){J(t.$$.fragment,C),J(B.$$.fragment,C),J(y),W=!1},d(C){C&&(d(a),d(r)),se(t,C),se(B),y&&y.d()}}}function De(v,t,a){let{data:r}=t;return v.$$set=l=>{"data"in l&&a(0,r=l.data)},[r]}class Se extends xe{constructor(t){super(),Ie(this,t,De,we,ge,{data:0})}}export{Se as component};
