import{d as p,D as _,E as m,c as a,s as f,t as I,F as d,_ as x}from"./entry.5474762f.js";const S=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(i){_(e=>({"327ee052":l.value}));const n=m(),t=i,u=a(()=>n.nuxtIcon.aliases&&n.nuxtIcon.aliases[t.name]?n.nuxtIcon.aliases[t.name].replace(/^i-/,""):t.name.replace(/^i-/,"")),l=a(()=>{var s,o;const e=(o=(s=n.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:o.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${u.value.replace(":","/")}.svg')`}),r=a(()=>{var c,s,o;if(!t.size&&typeof((c=n.nuxtIcon)==null?void 0:c.size)=="boolean"&&!((s=n.nuxtIcon)!=null&&s.size))return;const e=t.size||((o=n.nuxtIcon)==null?void 0:o.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,c)=>(f(),I("span",{style:d({width:r.value,height:r.value})},null,4))}});const g=x(S,[["__scopeId","data-v-5502e260"]]);export{g as default};