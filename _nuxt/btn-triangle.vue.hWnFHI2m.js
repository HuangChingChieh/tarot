import{_ as n}from"./common-triangle.vue.jSpHRY3t.js";import{f as r,m as i,o as d,c,b as f,q as m,h as u}from"./entry.dsToHEFn.js";const g=r({__name:"btn-triangle",props:{disabled:{type:Boolean,default:!1},right:{type:Boolean,default:!1},sideLength:{type:Number,default:20},fill:{type:Boolean,default:!1},stroke:{type:String,default:""},strokeWidth:{type:Number,default:1}},setup(e){const o=e,s=i(()=>{const{disabled:t,right:a}=o;return{"opacity-75":t,"drop-shadow-triangle":!t,"-rotate-90":!a,"rotate-90":a}});return(t,a)=>{const l=n;return d(),c("div",null,[f(l,{class:m(["-rotate-90 cursor-pointer transition-all",u(s)]),"side-length":e.sideLength,fill:e.fill,stroke:e.stroke,strokeWidth:e.strokeWidth},null,8,["class","side-length","fill","stroke","strokeWidth"])])}}});export{g as _};