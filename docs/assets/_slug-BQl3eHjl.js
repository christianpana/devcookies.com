import{u as p,r as o,j as e,L as j,R as k}from"./index-CbZHwR6I.js";import{c as x,t as v,H as N,a as b,F as w,g as y}from"./cookies-BXb8x2MF.js";/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],M=x("refresh-ccw",C);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],R=x("undo-2",L),T=({slug:s})=>{const n=p({from:"/"}),a=v.dark,r=b(s),[i,c]=o.useState(!1),[u,l]=o.useState(!1);o.useEffect(()=>{c(!1),l(!1);const t=setTimeout(()=>{l(!0)},100);return()=>clearTimeout(t)},[s]);const h=t=>{const d=t.currentTarget.getBoundingClientRect(),m=Math.round(t.clientX-d.left)+1,f=Math.round(t.clientY-d.top)+1,g=y(m*f);c(!0),setTimeout(()=>{n({to:"/fortune/$slug",params:{slug:g.slug}})},1200)};return r?e.jsx("div",{className:`
      min-h-dvh flex flex-col ${a.bg} font-serif
      relative
    `,children:e.jsxs("div",{className:"z-10 flex flex-col min-h-dvh",children:[e.jsx(N,{}),e.jsxs("div",{className:`
          flex flex-grow flex-col items-center justify-center p-12 space-y-16
          transition-all duration-[1200ms] ease-in-out
          ${i?"blur-lg":u?"blur-none":"blur-lg"}
        `,children:[e.jsx("div",{className:`
              w-full max-w-3xl font-serif 
              text-4xl xs:text-md sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl 
              ${a.cookieText} text-center
            `,children:r}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(j,{to:"/",className:"text-white rounded-md p-4 transition-fade duration-300 hover:bg-[#161618]",children:e.jsx(R,{className:"w-5 h-5"})}),e.jsx("button",{className:"text-white rounded-md p-4 transition-fade duration-300 hover:bg-[#161618]",onClick:h,disabled:i,children:e.jsx(M,{className:"w-5 h-5"})})]})]}),e.jsx(w,{})]})}):(n({to:"/"}),null)},E=()=>{const{slug:s}=k.useParams();return e.jsx(T,{slug:s})};export{E as component};
