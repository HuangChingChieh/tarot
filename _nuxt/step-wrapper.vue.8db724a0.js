import{_ as x}from"./btn-triangle.vue.0fde5cc5.js";import{_}from"./nuxt-link.575ead74.js";import{f as h,l as b,o as a,c as o,a as e,t as d,u as g,q as w,L as y,M as v,n as k,b as s,w as c}from"./entry.a58ee454.js";const N={class:"h-full max-h-[75vh] md:h-auto max-w-full w-[360px] border-blue border bg-black rounded-md px-5 pt-6 pb-4 text-white flex flex-col shadow-step"},S={class:"text-center"},B={class:"text-xl font-black text-center mt-2 mb-6"},j={class:"flex-grow overflow-x-hidden overflow-y-auto"},C={class:"mt-5 mb-3 flex flex-row justify-center md:justify-end"},q=h({__name:"step-wrapper",props:{step:{type:[String,Number],default:1},paragraphs:{type:Array,default:()=>[]},last:{type:String,default:""},next:{type:String,default:""}},setup(t){const i=t,m=["一","二","三"],u=b(()=>m[Number(i.step)-1]);return(p,L)=>{const n=x,l=_;return a(),o("div",N,[e("div",S,"第"+d(g(u))+"步驟",1),e("div",B,[w(p.$slots,"name")]),e("div",j,[(a(!0),o(y,null,v(t.paragraphs,(f,r)=>(a(),o("p",{key:r,class:k([r>0?"mt-6":"","text-justify"])},d(f),3))),128))]),e("div",C,[s(l,{to:t.last,replace:""},{default:c(()=>[s(n,{disabled:!t.last},null,8,["disabled"])]),_:1},8,["to"]),s(l,{class:"ml-6",to:t.next,replace:""},{default:c(()=>[s(n,{disabled:!t.next,right:""},null,8,["disabled"])]),_:1},8,["to"])])])}}});export{q as _};
