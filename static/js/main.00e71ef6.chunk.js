(this["webpackJsonpclock-25-5"]=this["webpackJsonpclock-25-5"]||[]).push([[0],{14:function(e,s,i){},21:function(e,s,i){},22:function(e,s,i){"use strict";i.r(s);var n=i(2),t=i.n(n),r=i(8),a=i.n(r),c=(i(14),i(9)),o=i(4),d=i(3),l=i(0);var h=function(){var e=Object(n.useState)({breakLength:5,sessLength:25,timer:!1,displaySession:1500,displayBreak:300,isSession:!0}),s=Object(c.a)(e,2),i=s[0],t=s[1];function r(e){var s=parseInt(e,10),i=Math.floor(s/60),n=s-60*i;return i<10&&(i="0"+i),n<10&&(n="0"+n),i+":"+n}return Object(n.useEffect)((function(){var e=setTimeout((function(){"00:01"===document.getElementById("time-left").innerText&&document.getElementById("beep").play(),i.timer&&i.isSession?(t({breakLength:i.breakLength,sessLength:i.sessLength,timer:i.timer,displaySession:i.displaySession-1,displayBreak:60*i.breakLength,isSession:i.isSession}),0===i.displaySession&&t({breakLength:i.breakLength,sessLength:i.sessLength,timer:i.timer,displaySession:i.displaySession,displayBreak:i.displayBreak,isSession:!i.isSession})):i.timer&&!i.isSession&&(t({breakLength:i.breakLength,sessLength:i.sessLength,timer:i.timer,displaySession:60*i.sessLength,displayBreak:i.displayBreak-1,isSession:i.isSession}),0===i.displayBreak&&t({breakLength:i.breakLength,sessLength:i.sessLength,timer:i.timer,displaySession:i.displaySession,displayBreak:i.displayBreak,isSession:!i.isSession}))}),1e3);return function(){return clearTimeout(e)}})),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{id:"break-label",children:"Break Length"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"break-decrement",onClick:i.timer?function(){}:function(){i.breakLength>1&&t({breakLength:i.breakLength-1,sessLength:i.sessLength,timer:!1,displaySession:i.displaySession,displayBreak:60*(i.breakLength-1),isSession:i.isSession})},children:Object(l.jsx)(d.a,{icon:o.a})}),Object(l.jsx)("p",{id:"break-length",children:i.breakLength}),Object(l.jsx)("div",{id:"break-increment",onClick:i.timer?function(){}:function(){i.breakLength<60&&t({breakLength:i.breakLength+1,sessLength:i.sessLength,timer:!1,displaySession:i.displaySession,displayBreak:60*(i.breakLength+1),isSession:i.isSession})},children:Object(l.jsx)(d.a,{icon:o.b})})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{id:"session-label",children:"Session Length"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{onClick:i.timer?function(){}:function(){i.sessLength>1&&t({sessLength:i.sessLength-1,breakLength:i.breakLength,timer:!1,displaySession:60*(i.sessLength-1),displayBreak:i.displayBreak,isSession:i.isSession})},id:"session-decrement",children:Object(l.jsx)(d.a,{icon:o.a})}),Object(l.jsx)("p",{id:"session-length",children:i.sessLength}),Object(l.jsx)("div",{onClick:i.timer?function(){}:function(){i.sessLength<60&&t({sessLength:i.sessLength+1,breakLength:i.breakLength,timer:!1,displaySession:60*(i.sessLength+1),displayBreak:i.displayBreak,isSession:i.isSession})},id:"session-increment",children:Object(l.jsx)(d.a,{icon:o.b})})]})]}),Object(l.jsxs)("section",{id:"session-container",className:"rounded",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h4",{id:"timer-label",children:i.isSession?"Session":"Break"})}),Object(l.jsx)("p",{id:"time-left",className:i.displayBreak<60&&!i.isSession||i.displaySession<60&&i.isSession?"last-seconds":"",children:i.isSession?r(i.displaySession):r(i.displayBreak)}),Object(l.jsxs)("section",{id:"play_buttons",className:"buttons",children:[Object(l.jsx)("div",{id:"start_stop",onClick:function(){t({breakLength:i.breakLength,sessLength:i.sessLength,timer:!i.timer,displaySession:i.displaySession,displayBreak:i.displayBreak,isSession:i.isSession})},children:i.timer?Object(l.jsx)(d.a,{icon:o.c}):Object(l.jsx)(d.a,{icon:o.d})}),Object(l.jsx)("div",{id:"reset",onClick:function(){var e=document.getElementById("beep");e.pause(),e.currentTime=0,t({breakLength:5,sessLength:25,timer:!1,displaySession:1500,displayBreak:300,isSession:!0})},children:Object(l.jsx)(d.a,{icon:o.e})})]})]}),Object(l.jsx)("audio",{id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})};var b=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"\xa9Andres Fuentes"})})};var j=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"25 + 5 Clock"})})};i(21);var p=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(h,{}),Object(l.jsx)(b,{})]})};a.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.00e71ef6.chunk.js.map