import{g as u,j as c,o as t,c as a,F as _,i as h,u as n,a as p}from"./entry.BJ9O-jkb.js";const g=["media","srcset"],k=["src","alt"],$=u({__name:"RokkaImage",props:{image:{},stack:{},alt:{}},setup(o){const s={hero:{"(min-width: 1280px)":"hero_xl","(min-width: 1024px)":"hero_lg","(min-width: 768px)":"hero_md",default:"hero_sm"},static:{"(min-width: 1280px)":"static_xl","(min-width: 1024px)":"static_lg","(min-width: 768px)":"static_md",default:"static_sm"},gallery_thumbnail:{default:"gallery_thumbnail"},gallery_large:{default:"gallery_large"}},l=o,i=c(()=>{const e={...s[l.stack]};return delete e.default,e}),d=c(()=>({...s[l.stack]}).default);return(e,f)=>(t(),a("picture",null,[(t(!0),a(_,null,h(n(i),(r,m)=>(t(),a("source",{key:`${e.stack}_${e.image}_${r}`,media:m,srcset:`https://roellin-garten.rokka.io/${r}/${e.image} 1x`},null,8,g))),128)),p("img",{src:`https://roellin-garten.rokka.io/${n(d)}/${e.image}`,alt:e.alt,class:"w-full h-full object-cover object-center"},null,8,k)]))}});export{$ as _};
