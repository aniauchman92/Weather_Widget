(this["webpackJsonpweather-widget"]=this["webpackJsonpweather-widget"]||[]).push([[0],{29:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var c,i,o,a,r,s,d,l,j,u,p,h,b,x,g,f,O,m,w=t(1),v=t.n(w),y=t(18),C=t.n(y),k=(t(29),t(3)),M=t(2),S=Object(M.b)(c||(c=Object(k.a)(["\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #bfdbec;\n "]))),P=t(5),z=t(39),L=t(0),T=M.c.div(i||(i=Object(k.a)(["\n  margin-top: 30px;\n  display: flex;\n  width: 100%;\n  p {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  span {\n    font-size: 22px;\n  }\n"]))),F=M.c.div(o||(o=Object(k.a)(["\n  width: 33%;\n\n  span {\n    font-size: 22px;\n  }\n"]))),W=function(n){var e=n.main,t=e.pressure,c=e.temp_max,i=e.temp_min,o=e.humidity,a=n.wind.speed,r=Object(z.a)().t;return Object(L.jsxs)(T,{children:[Object(L.jsxs)(F,{children:[Object(L.jsxs)("p",{children:[r("Pressure")," ",Object(L.jsx)("span",{children:t})," hPa"]}),Object(L.jsxs)("p",{children:[r("Wind")," ",Object(L.jsx)("span",{children:a})," km/h"]})]}),Object(L.jsxs)(F,{children:[Object(L.jsxs)("p",{children:[r("MaxTemp")," ",Object(L.jsx)("span",{children:c.toFixed(1)})," \xb0C"]}),Object(L.jsxs)("p",{children:[r("MinTemp")," ",Object(L.jsx)("span",{children:i.toFixed(1)})," \xb0C"]})]}),Object(L.jsx)(F,{children:Object(L.jsxs)("p",{children:[r("Humidity")," ",Object(L.jsx)("span",{children:o})," %"]})})]})},N=M.c.div(a||(a=Object(k.a)(["\n  margin-top: 70px;\n  text-align: center;\n  align-items: center;\n"]))),B=M.c.div(r||(r=Object(k.a)(["\n  display: flex;\n  p {\n    font-weight: 700;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fonts.large})),E=M.c.h1(s||(s=Object(k.a)(["\n  font-size: 30px;\n  width: 33%;\n  margin: 0;\n"]))),H=M.c.h1(d||(d=Object(k.a)(["\n  font-size: 40px;\n  margin: 0;\n"]))),I=M.c.img(l||(l=Object(k.a)(["\n  width: 100px;\n  height: auto;\n"]))),D=M.c.div(j||(j=Object(k.a)(["\n  width: 35%;\n  justify-content: center;\n  align-items: center;\n"]))),J=M.c.p(u||(u=Object(k.a)(["\n  display: flex;\n  cursor: pointer;\n  font-size: 12px;\n  margin: 30px auto 0;\n  font-weight: bold;\n  width: max-content;\n  border-bottom: 1px solid black;\n"]))),K=function(n){var e=n.data,t=e.name,c=e.weather,i=e.main,o=e.wind,a=Object(z.a)().t,r=Object(w.useState)(!1),s=Object(P.a)(r,2),d=s[0],l=s[1];return Object(L.jsxs)(N,{children:[Object(L.jsxs)(B,{children:[Object(L.jsx)(E,{children:t}),Object(L.jsxs)(D,{children:[Object(L.jsxs)(H,{children:[i.temp.toFixed(1),"\xb0C"]}),Object(L.jsx)("p",{children:c[0].description})]}),Object(L.jsx)(D,{children:Object(L.jsx)(I,{alt:"",src:"https://openweathermap.org/img/wn/".concat(c[0].icon,".png")})})]}),d?Object(L.jsx)(J,{onClick:function(){return l(!1)},children:a("ShowLess")}):Object(L.jsx)(J,{onClick:function(){return l(!0)},children:a("ShowMore")}),d&&Object(L.jsx)(W,{main:i,wind:o})]})},V=M.c.button(p||(p=Object(k.a)(["\n  margin: 0 5px;\n  color: ",";\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 5px 10px;\n  font-weight: 700;\n  border-bottom: ",";\n"])),(function(n){return n.theme.colors.mainFontColor}),(function(n){return n.active&&"1px solid black"})),_=function(n){var e=n.children,t=n.onClick,c=n.activLanguage;return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(V,{active:e===c,onClick:t,children:e})})},q=t(15),R=M.c.svg(h||(h=Object(k.a)(["\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  fill: ",";\n"])),(function(n){return n.theme.colors.mainFontColor})),X=function(n){return Object(L.jsxs)(R,Object(q.a)(Object(q.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000",xmlSpace:"preserve"},n),{},{children:[Object(L.jsx)("path",{d:"M494.24 10.71c-1.16.46-5.1 1.39-8.57 2.08-9.03 2.08-22.7 14.83-27.57 25.71-3.71 7.88-4.4 15.75-4.4 56.76v47.49l-22.47 4.17c-31.27 5.79-59.54 15.52-92.2 31.74-95.91 47.95-164.48 134.36-190.19 239.76-3.01 12.74-5.56 25.95-5.56 29.42v6.49H97.64c-25.25 0-49.81 1.16-54.67 2.55-10.19 2.78-23.63 13.9-28.73 23.86-9.73 18.76-2.08 45.87 16.22 58.61l9.27 6.49L90.69 547l50.96 1.16 5.1 25.48c22.47 108.65 93.36 200.62 192.97 250.19 29.19 14.36 59.54 25.02 87.8 30.35 11.12 2.09 21.78 4.17 23.4 4.63 2.09.7 2.78 12.05 2.78 47.26 0 50.5 1.39 57.45 13.44 70.19 9.5 9.96 18.76 13.9 32.9 13.9 14.13 0 23.4-3.94 32.89-13.9 12.05-12.74 13.44-19.69 13.44-70.19 0-35.21.69-46.79 3.01-47.26 1.39-.46 11.82-2.55 22.94-4.63 41.47-7.64 89.19-27.57 127.41-53.05C779.87 747.61 835 665.14 854 570.16l4.4-22.01 49.57-1.16c29.42-.7 51.89-2.32 55.37-3.71 7.18-3.24 18.07-13.9 22.01-21.78 11.81-23.4.23-53.05-24.79-63.47-6.95-3.01-18.53-3.71-56.29-3.71h-47.49v-6.49c0-3.47-2.55-16.68-5.56-29.42-16.22-66.25-48.88-124.86-96.6-172.35-50.27-50.5-118.38-86.64-185.56-99.15l-22.7-4.17V95.25c0-53.51-1.62-60-16.91-73.44-10.42-9.01-26.41-14.11-35.21-11.1zm58.61 226.79c95.44 20.39 171.2 87.57 202 179.3 41.7 124.63-15.52 263.16-133.2 322.93-36.83 18.76-68.8 27.1-111.42 28.96-74.59 3.48-145.71-24.55-199.69-78.53-103.32-103.09-105.4-267.79-5.1-373.43 40.08-42.16 93.59-71.12 147.1-79.92 9.03-1.39 18.76-3.01 22.01-3.47 11.58-2.09 61.85.69 78.3 4.16z"}),Object(L.jsx)("path",{d:"M466.44 349.16c-8.8 2.08-25.02 7.88-35.91 12.97-15.75 7.64-23.4 13.2-39.61 29.42-16.22 16.22-21.78 23.86-29.65 40.08-21.78 45.17-22.01 93.82-.46 137.37 57.45 115.83 220.77 115.83 278.45 0 21.55-43.55 21.31-92.2-.46-137.37-13.44-28.03-41.23-55.6-69.27-69.27-32.9-15.98-67.88-20.61-103.09-13.2z"})]}))},Z=M.c.input(b||(b=Object(k.a)(["\n  margin: 0 10px;\n  width: 250px;\n  background-color: transparent;\n  border: none;\n  border-bottom: 3px solid #ffffffcc;\n  outline: none;\n  color: #111c46;\n  font-size: ",";\n  position: relative;\n\n  ::placeholder {\n    color: #111c46;\n  }\n"])),(function(n){return n.theme.fonts.large})),A=M.c.div(x||(x=Object(k.a)(["\n  position: relative;\n"]))),G=M.c.p(g||(g=Object(k.a)(["\n  margin: 0 auto;\n  font-size: 12px;\n  color: red;\n  font-weight: bold;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: fit-content;\n"]))),Q=function(n){var e=n.onChange,t=n.setMyLocation,c=n.dataStatus,i=void 0===c?200:c,o=n.transKey,a=Object(z.a)().t;return Object(L.jsxs)(A,{children:[Object(L.jsx)(Z,{type:"text",placeholder:a("InputPlaceholder"),onChange:function(n){return e(n)}}),Object(L.jsx)(X,{onClick:function(){navigator.geolocation.getCurrentPosition((function(n){t({lat:n.coords.latitude,long:n.coords.longitude})}))}}),200!==i&&Object(L.jsx)(G,{children:a(o)})]})},U=M.c.div(f||(f=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Y=M.c.div(O||(O=Object(k.a)(["\n  height: 30px;\n  display: flex;\n  align-items: center;\n"]))),$=function(){var n=Object(w.useState)("PL"),e=Object(P.a)(n,2),t=e[0],c=e[1],i=Object(w.useState)(""),o=Object(P.a)(i,2),a=o[0],r=o[1],s=Object(w.useState)(),d=Object(P.a)(s,2),l=d[0],j=d[1],u=Object(w.useState)(!1),p=Object(P.a)(u,2),h=p[0],b=p[1],x=Object(z.a)(),g=x.t,f=x.i18n;!function(n,e){var t=Object(w.useRef)(!1);Object(w.useEffect)((function(){t.current?n():t.current=!0}),e)}((function(){h&&O(h),a&&O(),f.changeLanguage(t.toLowerCase())}),[t,h]);var O=function(n){var e="https://api.openweathermap.org",c="654e30152cf4fefc174d36f9ec8b074f",i=n?"".concat(e,"/data/2.5/weather?lat=").concat(n.lat,"&lon=").concat(n.long,"&lang=").concat(t.toLowerCase(),"&appid=").concat(c,"&units=metric"):"".concat(e,"/data/2.5/weather?q=").concat(a,"&lang=").concat(t.toLowerCase(),"&appid=").concat(c,"&units=metric");fetch(i).then((function(n){return n.json()})).then((function(n){j(n)})).catch((function(n){console.log(n)}))};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(U,{children:[Object(L.jsx)(Y,{children:["PL","EN","DE"].map((function(n,e){return Object(L.jsx)(_,{onClick:function(n){return c(n.target.innerText)},activLanguage:t,children:n},e)}))}),Object(L.jsxs)(Y,{children:[Object(L.jsx)(Q,{onChange:function(n){return r(n.target.value)},setMyLocation:b,dataStatus:l&&l.cod,language:t,transKey:l&&l.message}),Object(L.jsx)(_,{onClick:function(){O(),b(!1)},children:g("ButtonName")})]})]}),l&&200===l.cod&&Object(L.jsx)(K,{data:l})]})},nn={colors:{mainFontColor:"#04033a",clickedBtnColor:"#ffb6c1",bgColor:"#E5E5E5",buttonsColor:"#64baef"},fonts:{large:"17px",small:"12px"}},en=t.p+"static/media/sky-bg.829a7aa1.png",tn=M.c.div(m||(m=Object(k.a)(["\n  padding: 40px 20px;\n  width: 600px;\n  height: 300px;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  justify-content: center;\n  border-radius: 15px;\n"])),en);var cn=function(){return Object(L.jsxs)(M.a,{theme:nn,children:[Object(L.jsx)(S,{}),Object(L.jsx)(tn,{children:Object(L.jsx)($,{})})]})},on=t(16),an=t(6);on.a.use(an.e).init({resources:{pl:{translation:{ButtonName:"Pogoda","Nothing to geocode":"Podaj prawid\u0142owe dane","city not found":"Nie znaleziono miasta",InputPlaceholder:"Wpisz miasto...",Pressure:"Ci\u015bnienie",Wind:"Wiatr",MaxTemp:"Temp. max",MinTemp:"Temp. min",Humidity:"Wilgotno\u015b\u0107",ShowMore:"Poka\u017c wi\u0119cej",ShowLess:"Poka\u017c mniej"}},en:{translation:{ButtonName:"Weather","Nothing to geocode":"Incorrect data","city not found":"City not found",InputPlaceholder:"Type your city...",Pressure:"Pressure",Wind:"Wind",MaxTemp:"Max temp.",MinTemp:"Min temp.",Humidity:"Humidity",ShowMore:"Show more",ShowLess:"Show less"}},de:{translation:{ButtonName:"Pogode","Nothing to geocode":"Fehlerhafte Daten","city not found":"Die Stadt wurde nicht gefunden",InputPlaceholder:"Die Stadt betreten...",Pressure:"Luftdruck",Wind:"Wind",MaxTemp:"Max temp.",MinTemp:"Min temp.",Humidity:"Feuchtigkeit",ShowMore:"Zeig mehr",ShowLess:"zeige weniger"}}},lng:"pl",interpolation:{escapeValue:!1}});on.a;C.a.render(Object(L.jsx)(v.a.StrictMode,{children:Object(L.jsx)(cn,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b32c51fb.chunk.js.map