import{s as T,n as M,b}from"./scheduler.CO5KZ6rK.js";import{S as v,i as k,e as i,A as w,c as m,g as r,p as e,k as c}from"./index.DmDTERaZ.js";import{p as C}from"./stores.DqgRQrrS.js";import{s as H}from"./config.CElJ84Ba.js";function S(a){let g,o,u,h,d,s,p,y,f,n,_,A,E;return document.title=g=a[0],{c(){o=i("link"),u=i("meta"),h=i("meta"),d=i("meta"),s=i("meta"),p=i("meta"),f=i("meta"),n=i("meta"),_=i("meta"),A=i("meta"),E=i("meta"),this.h()},l(l){const t=w("svelte-yipvbd",document.head);o=m(t,"LINK",{rel:!0,type:!0,href:!0}),u=m(t,"META",{name:!0,content:!0}),h=m(t,"META",{name:!0,content:!0}),d=m(t,"META",{property:!0,content:!0}),s=m(t,"META",{property:!0,content:!0}),p=m(t,"META",{property:!0,content:!0}),f=m(t,"META",{property:!0,content:!0}),n=m(t,"META",{property:!0,content:!0}),_=m(t,"META",{property:!0,content:!0}),A=m(t,"META",{property:!0,content:!0}),E=m(t,"META",{property:!0,content:!0}),t.forEach(r),this.h()},h(){e(o,"rel","icon"),e(o,"type","image/png"),e(o,"href","/favicon.png"),e(u,"name","description"),e(u,"content",a[1]),e(h,"name","author"),e(h,"content",a[2]),e(d,"property","og:title"),e(d,"content",a[0]),e(s,"property","og:description"),e(s,"content",a[1]),e(p,"property","og:url"),e(p,"content",y=a[3].url.href),e(f,"property","og:type"),e(f,"content","website"),e(n,"property","og:image"),e(n,"content","/favicon.png"),e(_,"property","og:image:alt"),e(_,"content",a[0]),e(A,"property","og:image:width"),e(A,"content","1200"),e(E,"property","og:image:height"),e(E,"content","630")},m(l,t){c(document.head,o),c(document.head,u),c(document.head,h),c(document.head,d),c(document.head,s),c(document.head,p),c(document.head,f),c(document.head,n),c(document.head,_),c(document.head,A),c(document.head,E)},p(l,[t]){t&1&&g!==(g=l[0])&&(document.title=g),t&2&&e(u,"content",l[1]),t&4&&e(h,"content",l[2]),t&1&&e(d,"content",l[0]),t&2&&e(s,"content",l[1]),t&8&&y!==(y=l[3].url.href)&&e(p,"content",y),t&1&&e(_,"content",l[0])},i:M,o:M,d(l){r(o),r(u),r(h),r(d),r(s),r(p),r(f),r(n),r(_),r(A),r(E)}}}function q(a,g,o){let u;b(a,C,n=>o(3,u=n));let{title:h,description:d,author:s}=H,{title:p=h,description:y=d,author:f=s}=g;return a.$$set=n=>{"title"in n&&o(0,p=n.title),"description"in n&&o(1,y=n.description),"author"in n&&o(2,f=n.author)},[p,y,f,u]}class j extends v{constructor(g){super(),k(this,g,q,S,T,{title:0,description:1,author:2})}}export{j as H};
