import{f as r,O as i,m as l,o,c,h as m,q as d,_,a,b as p,s as u}from"./entry.X-Qfvsd4.js";import{_ as f}from"./common-triangle.vue._ZA-_5gN.js";const h=["src"],B=r({__name:"card-tarot",props:{sn:{type:[String,Number],default:"default"},active:{type:Boolean,default:!1}},setup(e){const s=e,{basePath:t}=i().public,n=l(()=>`${t}img/card/${s.sn}.png`);return(b,k)=>(o(),c("img",{src:m(n),class:d([e.active?"shadow-card":"","rounded-[7px] max-h-[50vh] md:w-100 md:max-h-[50vh] transition-shadow cursor-pointer card"])},null,10,h))}}),x={},$={class:"pt-8 pb-2.5"},g={class:"block"};function v(e,s){const t=f;return o(),c("div",{class:"text-white flex items-center justify-center flex-col cursor-pointer animate-pulse",onClick:s[0]||(s[0]=n=>e.$emit("click"))},[a("div",$,[p(t,{fill:""})]),a("span",g,[u(e.$slots,"default")])])}const y=_(x,[["render",v]]);export{B as _,y as a};