import{_ as x}from"./btn-triangle.384e879c.js";import{_}from"./nuxt-link.688fd0cf.js";import{k as f,o as a,c as o,a as e,t as c,u as h,m as b,K as g,L as w,n as y,b as s,w as d}from"./entry.d3af9f54.js";const v={class:"h-full max-h-[75vh] md:h-auto max-w-full w-[360px] border-blue border bg-black rounded-md px-5 pt-6 pb-4 text-white flex flex-col shadow-step"},k={class:"text-center"},S={class:"text-xl font-black text-center mt-2 mb-6"},B={class:"flex-grow overflow-x-hidden overflow-y-auto"},N={class:"mt-5 mb-3 flex flex-row justify-center md:justify-end"},j={__name:"step-wrapper",props:{step:{type:[String,Number],default:1},paragraphs:{type:Array,default:()=>[]},last:{type:String,default:""},next:{type:String,default:""}},setup(t){const i=t,m=f(()=>["一","二","三"][i.step-1]);return(u,L)=>{const n=x,l=_;return a(),o("div",v,[e("div",k,"第"+c(h(m))+"步驟",1),e("div",S,[b(u.$slots,"name")]),e("div",B,[(a(!0),o(g,null,w(t.paragraphs,(p,r)=>(a(),o("p",{key:r,class:y([r>0?"mt-6":"","text-justify"])},c(p),3))),128))]),e("div",N,[s(l,{to:t.last,replace:""},{default:d(()=>[s(n,{disabled:!t.last},null,8,["disabled"])]),_:1},8,["to"]),s(l,{class:"ml-6",to:t.next,replace:""},{default:d(()=>[s(n,{disabled:!t.next,right:""},null,8,["disabled"])]),_:1},8,["to"])])])}}},$=j;export{$ as _};
