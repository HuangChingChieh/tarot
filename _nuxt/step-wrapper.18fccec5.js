import{_}from"./btn-triangle.3e7ce14a.js";import{_ as x}from"./nuxt-link.848c5444.js";import{j as f,o as a,c as o,a as e,t as c,u as b,m as h,K as g,L as w,n as y,b as s,w as d}from"./entry.73b17a0d.js";const v={class:"h-full md:h-auto max-w-full w-[360px] border-blue border bg-black rounded-md px-5 pt-6 pb-4 text-white flex flex-col shadow-step"},k={class:"text-center"},S={class:"text-xl font-black text-center mt-2 mb-6"},j={class:"flex-grow overflow-x-hidden overflow-y-auto"},B={class:"mt-5 mb-3 flex flex-row justify-center md:justify-end"},N={__name:"step-wrapper",props:{step:{type:[String,Number],default:1},paragraphs:{type:Array,default:()=>[]},last:{type:String,default:""},next:{type:String,default:""}},setup(t){const i=t,u=f(()=>["一","二","三"][i.step-1]);return(m,L)=>{const n=_,l=x;return a(),o("div",v,[e("div",k,"第"+c(b(u))+"步驟",1),e("div",S,[h(m.$slots,"name")]),e("div",j,[(a(!0),o(g,null,w(t.paragraphs,(p,r)=>(a(),o("p",{key:r,class:y([r>0?"mt-6":"","text-justify"])},c(p),3))),128))]),e("div",B,[s(l,{to:t.last,replace:""},{default:d(()=>[s(n,{disabled:!t.last},null,8,["disabled"])]),_:1},8,["to"]),s(l,{class:"ml-6",to:t.next,replace:""},{default:d(()=>[s(n,{disabled:!t.next,right:""},null,8,["disabled"])]),_:1},8,["to"])])])}}},$=N;export{$ as _};