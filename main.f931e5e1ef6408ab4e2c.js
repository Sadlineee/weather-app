"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[792],{71:(e,r,a)=>{var t=a(848),i=a(540),n=a(338),s=a(468),o=a(307),d=a(816),c=a(378);const l=(0,d.xP)({reducerPath:"weatherApi",baseQuery:(0,c.cw)({baseUrl:"https://api.openweathermap.org/data/3.0"}),endpoints:e=>({getWeatherData:e.query({query:e=>`/weather?q=${e}&appid=api_key&units=metric`})})}),{useGetWeatherDataQuery:h}=l,p=(0,o.U1)({reducer:{[l.reducerPath]:l.reducer},middleware:e=>e().concat(l.middleware)});var m=a(976),x=a(767),u=a(581);const y=u.DU`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
`;var b=a(594);const g=u.Ay.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 30vh;
  height: 14rem;
  width: 18rem;
  background: ${b.w.colors.bg};
  border-radius: 20px;
  box-shadow: 0 5px 10px ${b.w.colors.secondary};

  @media ${b.w.media.small} {
    height: 70vh;
    width: 100vw;
  }
`,w=u.Ay.h1`
  font-family: ${b.w.fonts.secondary};
  font-size: 2.75rem;
  font-weight: 500;
  color: ${b.w.colors.primary};
`;var f=a(448);const j=i.lazy((()=>a.e(453).then(a.bind(a,453)))),v=i.lazy((()=>a.e(960).then(a.bind(a,960)))),k=i.lazy((()=>a.e(146).then(a.bind(a,146)))),F=()=>{var e;const[r,a]=(0,i.useState)(""),{data:n,error:s,isLoading:o}=h(r,{skip:0===r.length});return(0,t.jsx)(g,{children:(0,t.jsxs)(i.Suspense,Object.assign({fallback:(0,t.jsx)(f.a,{})},{children:[(0,t.jsx)(w,{children:"WeatherApp"}),(0,t.jsx)(j,{cityName:r,setCityName:a}),(0,t.jsx)(v,{tempValue:(null===(e=null==n?void 0:n.main)||void 0===e?void 0:e.temp)?Math.round(n.main.temp):null,isLoading:o}),(0,t.jsx)(k,{error:s})]}))})};n.createRoot(document.getElementById("root")).render((0,t.jsx)(i.StrictMode,{children:(0,t.jsx)(s.Kq,Object.assign({store:p},{children:(0,t.jsx)((()=>(0,t.jsxs)(m.Kd,{children:[(0,t.jsx)(y,{}),(0,t.jsx)(x.BV,{children:(0,t.jsx)(x.qh,{path:"/weather-app",element:(0,t.jsx)(F,{})})})]})),{})}))}))},448:(e,r,a)=>{a.d(r,{a:()=>n});var t=a(581),i=a(594);const n=t.Ay.div`
  display: inline-block;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  height: 1.5rem;
  border: 2px solid ${i.w.colors.primary};
  border-radius: 50%;
  border-bottom-color: transparent;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
`},594:(e,r,a)=>{a.d(r,{w:()=>t});const t={colors:{primary:"#FF4500",secondary:"#757575",danger:"#FF2727",bg:"#FFFFFF"},fonts:{primary:"Work Sans, sans-serif",secondary:"Pacifico, cursive"},media:{small:"(max-width: 599px)"}}}},e=>{e.O(0,[193],(()=>e(e.s=71))),e.O()}]);