import{f as c,m as u,o as l,g as f,w as p,h as m,a as e,s as x,c as _,x as v,T as h}from"./entry.0DeI9Y99.js";const w={key:0,class:"fixed top-0 left-0 w-full h-full"},b={class:"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[465px] w-[80%] max-h-[75vh] bg-black shadow-step border-blue border rounded-[5px] z-20 flex flex-col"},k={class:"flex items-center justify-end"},y=e("div",{class:"w-[18px] h-[18px] text-[18px] text-blue flex items-center justify-center"}," × ",-1),V=[y],g={class:"px-5 pt-3 pb-10 flex-grow overflow-y-auto"},C=c({__name:"modal-common",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:n}){const d=a,r=n,s=u({get(){return d.modelValue},set(o){r("update:modelValue",o)}});return(o,t)=>(l(),f(h,{name:"page"},{default:p(()=>[m(s)?(l(),_("div",w,[e("div",{class:"fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10",onClick:t[0]||(t[0]=i=>s.value=!1)}),e("div",b,[e("div",k,[e("div",{class:"p-5 cursor-pointer",onClick:t[1]||(t[1]=i=>s.value=!1)},V)]),e("div",g,[x(o.$slots,"default")])])])):v("",!0)]),_:3}))}});export{C as _};