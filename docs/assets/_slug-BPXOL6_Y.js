import{u as h,j as e,L as m,R as u}from"./index-D7inlQ3u.js";import{c as l,t as f,H as p,a as g,F as j,g as k}from"./cookies-BzcEn2zq.js";/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],N=l("refresh-ccw",v);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],y=l("undo-2",w),C=({slug:t})=>{const o=h({from:"/"}),n=f.dark,a=g(t),r=s=>{const c=s.currentTarget.getBoundingClientRect(),i=Math.round(s.clientX-c.left)+1,x=Math.round(s.clientY-c.top)+1,d=k(i*x);o({to:"/fortune/$slug",params:{slug:d.slug}})};return a?e.jsx("div",{className:`
      min-h-dvh flex flex-col ${n.bg} font-serif
      relative
    `,children:e.jsxs("div",{className:"z-10 flex flex-col min-h-dvh",children:[e.jsx(p,{}),e.jsxs("div",{className:"flex flex-grow flex-col items-center justify-center p-12 space-y-16",children:[e.jsx("div",{className:`w-full max-w-3xl font-serif text-4xl xs:text-md sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl ${n.cookieText} text-center`,children:a}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(m,{to:"/",className:"text-white rounded-md p-4 transition-fade duration-300 hover:bg-[#161618]",children:e.jsx(y,{className:"w-5 h-5"})}),e.jsx("button",{className:"text-white rounded-md p-4 transition-fade duration-300 hover:bg-[#161618]",onClick:r,children:e.jsx(N,{className:"w-5 h-5"})})]})]}),e.jsx(j,{})]})}):(o({to:"/"}),null)},R=()=>{const{slug:t}=u.useParams();return e.jsx(C,{slug:t})};export{R as component};
