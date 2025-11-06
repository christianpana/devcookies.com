import{u as g,r as o,j as e,L as p,R as j}from"./index-DPxWBIkL.js";import{c as v,t as k,H as N,F as b}from"./Footer-BEPGRUWM.js";import{a as w,g as C}from"./cookies-tvP5_6gk.js";import{U as R}from"./undo-2-DZ5fZtIl.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],L=v("refresh-ccw",y),T=({slug:s})=>{const a=g({from:"/"}),n=k.dark,r=w(s),[i,l]=o.useState(!1),[x,c]=o.useState(!1);o.useEffect(()=>{l(!1),c(!1);const t=setTimeout(()=>{c(!0)},100);return()=>clearTimeout(t)},[s]);const u=t=>{const d=t.currentTarget.getBoundingClientRect(),m=Math.round(t.clientX-d.left)+1,f=Math.round(t.clientY-d.top)+1,h=C(m*f);l(!0),setTimeout(()=>{a({to:"/fortune/$slug",params:{slug:h.slug}})},1200)};return r?e.jsx("div",{className:`
      min-h-dvh flex flex-col ${n.bg} font-serif
      relative
    `,children:e.jsxs("div",{className:"z-10 flex flex-col min-h-dvh",children:[e.jsx(N,{}),e.jsxs("div",{className:`
          flex flex-grow flex-col items-center justify-center p-12 space-y-16
          transition-all duration-[1200ms] ease-in-out
          ${i?"blur-lg":x?"blur-none":"blur-lg"}
        `,children:[e.jsx("div",{className:`
              w-full max-w-3xl font-serif 
              text-4xl xs:text-md sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl 
              ${n.cookieText} text-center
            `,children:r}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(p,{to:"/",className:"text-white rounded-md p-4 transition-fade duration-300 hover:bg-[#161618]",children:e.jsx(R,{className:"w-5 h-5"})}),e.jsx("button",{className:"text-white rounded-md p-4 transition-fade duration-300 hover:bg-[#161618]",onClick:u,disabled:i,children:e.jsx(L,{className:"w-5 h-5"})})]})]}),e.jsx(b,{})]})}):(a({to:"/"}),null)},I=()=>{const{slug:s}=j.useParams();return e.jsx(T,{slug:s})};export{I as component};
