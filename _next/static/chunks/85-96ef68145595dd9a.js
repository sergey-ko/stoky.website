"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{4572:function(t,e,n){n.d(e,{H:function(){return r}});function r(t){return"object"==typeof t&&"function"==typeof t.start}},6925:function(t,e,n){n.d(e,{C:function(){return r}});let r=t=>Array.isArray(t)},5050:function(t,e,n){n.d(e,{p:function(){return r}});let r=(0,n(2265).createContext)({})},6539:function(t,e,n){n.d(e,{u:function(){return r}});let r=(0,n(2265).createContext)({strict:!1})},7797:function(t,e,n){n.d(e,{O:function(){return r}});let r=(0,n(2265).createContext)(null)},6094:function(t,e,n){n.d(e,{g:function(){return r}});let r=(0,n(2265).createContext)({})},6317:function(t,e,n){n.d(e,{A:function(){return o}});let r={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},o={};for(let t in r)o[t]={isEnabled:e=>r[t].some(t=>!!e[t])}},344:function(t,e,n){n.d(e,{K:function(){return o}});var r=n(6317);function o(t){for(let e in t)r.A[e]={...r.A[e],...t[e]}}},2020:function(t,e,n){n.d(e,{j:function(){return i}});var r=n(7290),o=n(6019);function i(t,{layout:e,layoutId:n}){return o.G.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!r.P[t]||"opacity"===t)}},7290:function(t,e,n){n.d(e,{B:function(){return o},P:function(){return r}});let r={};function o(t){Object.assign(r,t)}},6085:function(t,e,n){n.d(e,{m:function(){return D}});var r,o=n(2265);let i=(0,o.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),a=(0,o.createContext)({});var u=n(7797),s=n(7282);let f=s.j?o.useLayoutEffect:o.useEffect;var l=n(6539),c=n(7576),d=n(6859),p=n(3795);function m(t){return Array.isArray(t)?t.join(" "):t}var g=n(344),x=n(5050),v=n(6094);let h=Symbol.for("motionComponentSymbol");var y=n(2860),w=n(2020),b=n(8322),C=n(4651);let A=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function E(t,e,n){for(let r in e)(0,b.i)(e[r])||(0,w.j)(r,n)||(t[r]=e[r])}let S=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function k(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||S.has(t)}let W=t=>!k(t);try{(r=require("@emotion/is-prop-valid").default)&&(W=t=>t.startsWith("on")?!k(t):r(t))}catch(t){}var R=n(2622);let T=()=>({...A(),attrs:{}});var V=n(5969),$=n(545),j=n(2731),P=n(4572),L=n(8595),M=n(2404);let O=t=>(e,n)=>{let r=(0,o.useContext)(a),i=(0,o.useContext)(u.O),s=()=>(function({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,o,i){let a={latestValues:function(t,e,n,r){let o={},i=r(t,{});for(let t in i)o[t]=(0,M.b)(i[t]);let{initial:a,animate:u}=t,s=(0,p.G)(t),f=(0,p.M)(t);e&&f&&!s&&!1!==t.inherit&&(void 0===a&&(a=e.initial),void 0===u&&(u=e.animate));let l=!!n&&!1===n.initial,c=(l=l||!1===a)?u:a;return c&&"boolean"!=typeof c&&!(0,P.H)(c)&&(Array.isArray(c)?c:[c]).forEach(e=>{let n=(0,L.o)(t,e);if(!n)return;let{transitionEnd:r,transition:i,...a}=n;for(let t in a){let e=a[t];if(Array.isArray(e)){let t=l?e.length-1:0;e=e[t]}null!==e&&(o[t]=e)}for(let t in r)o[t]=r[t]}),o}(r,o,i,t),renderState:e()};return n&&(a.mount=t=>n(r,t,a)),a})(t,e,r,i);return n?s():function(t){let e=(0,o.useRef)(null);return null===e.current&&(e.current=t()),e.current}(s)},H={useVisualState:O({scrapeMotionValuesFromProps:j.U,createRenderState:T,onMount:(t,e,{renderState:n,latestValues:r})=>{try{n.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(t){n.dimensions={x:0,y:0,width:0,height:0}}(0,R.i)(n,r,{enableHardwareAcceleration:!1},(0,V.a)(e.tagName),t.transformTemplate),(0,$.K)(e,n)}})},B={useVisualState:O({scrapeMotionValuesFromProps:n(1315).U,createRenderState:A})},D=function(t){function e(e,n={}){return function({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:y}){t&&(0,g.K)(t);let w=(0,o.forwardRef)(function(g,h){var w;let b;let C={...(0,o.useContext)(i),...g,layoutId:function({layoutId:t}){let e=(0,o.useContext)(x.p).id;return e&&void 0!==t?e+"-"+t:t}(g)},{isStatic:A}=C,E=function(t){let{initial:e,animate:n}=function(t,e){if((0,p.G)(t)){let{initial:e,animate:n}=t;return{initial:!1===e||(0,d.$)(e)?e:void 0,animate:(0,d.$)(n)?n:void 0}}return!1!==t.inherit?e:{}}(t,(0,o.useContext)(a));return(0,o.useMemo)(()=>({initial:e,animate:n}),[m(e),m(n)])}(g),S=r(g,A);if(!A&&s.j){E.visualElement=function(t,e,n,r){let{visualElement:s}=(0,o.useContext)(a),c=(0,o.useContext)(l.u),d=(0,o.useContext)(u.O),p=(0,o.useContext)(i).reducedMotion,m=(0,o.useRef)();r=r||c.renderer,!m.current&&r&&(m.current=r(t,{visualState:e,parent:s,props:n,presenceContext:d,blockInitialAnimation:!!d&&!1===d.initial,reducedMotionConfig:p}));let g=m.current;return(0,o.useInsertionEffect)(()=>{g&&g.update(n,d)}),f(()=>{g&&g.render()}),(0,o.useEffect)(()=>{g&&g.updateFeatures()}),(window.HandoffAppearAnimations?f:o.useEffect)(()=>{g&&g.animationState&&g.animationState.animateChanges()}),g}(y,S,C,e);let n=(0,o.useContext)(v.g),r=(0,o.useContext)(l.u).strict;E.visualElement&&(b=E.visualElement.loadFeatures(C,r,t,n))}return o.createElement(a.Provider,{value:E},b&&E.visualElement?o.createElement(b,{visualElement:E.visualElement,...C}):null,n(y,g,(w=E.visualElement,(0,o.useCallback)(t=>{t&&S.mount&&S.mount(t),w&&(t?w.mount(t):w.unmount()),h&&("function"==typeof h?h(t):(0,c.I)(h)&&(h.current=t))},[w])),S,A,E.visualElement))});return w[h]=y,w}(t(e,n))}if("undefined"==typeof Proxy)return e;let n=new Map;return new Proxy(e,{get:(t,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}(function(t,{forwardMotionProps:e=!1},n,r){return{...(0,y.q)(t)?H:B,preloadedFeatures:n,useRender:function(t=!1){return(e,n,r,{latestValues:i},a)=>{let u=((0,y.q)(e)?function(t,e,n,r){let i=(0,o.useMemo)(()=>{let n=T();return(0,R.i)(n,e,{enableHardwareAcceleration:!1},(0,V.a)(r),t.transformTemplate),{...n.attrs,style:{...n.style}}},[e]);if(t.style){let e={};E(e,t.style,t),i.style={...e,...i.style}}return i}:function(t,e,n){let r={},i=function(t,e,n){let r=t.style||{},i={};return E(i,r,t),Object.assign(i,function({transformTemplate:t},e,n){return(0,o.useMemo)(()=>{let r=A();return(0,C.r)(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}(t,e,n)),t.transformValues?t.transformValues(i):i}(t,e,n);return t.drag&&!1!==t.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===t.drag?"none":`pan-${"x"===t.drag?"y":"x"}`),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r})(n,i,a,e),s={...function(t,e,n){let r={};for(let o in t)("values"!==o||"object"!=typeof t.values)&&(W(o)||!0===n&&k(o)||!e&&!k(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}(n,"string"==typeof e,t),...u,ref:r},{children:f}=n,l=(0,o.useMemo)(()=>(0,b.i)(f)?f.get():f,[f]);return(0,o.createElement)(e,{...s,children:l})}}(e),createVisualElement:r,Component:t}})},1580:function(t,e,n){n.d(e,{D:function(){return r}});let r=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},1534:function(t,e,n){n.d(e,{Xp:function(){return a},f9:function(){return o},tm:function(){return i}});let r=t=>e=>"string"==typeof e&&e.startsWith(t),o=r("--"),i=r("var(--"),a=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g},2860:function(t,e,n){n.d(e,{q:function(){return o}});let r=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function o(t){if("string"!=typeof t||t.includes("-"));else if(r.indexOf(t)>-1||/[A-Z]/.test(t))return!0;return!1}},7755:function(t,e,n){n.d(e,{j:function(){return a}});var r=n(783),o=n(5480);let i={...r.Rx,transform:Math.round},a={borderWidth:o.px,borderTopWidth:o.px,borderRightWidth:o.px,borderBottomWidth:o.px,borderLeftWidth:o.px,borderRadius:o.px,radius:o.px,borderTopLeftRadius:o.px,borderTopRightRadius:o.px,borderBottomRightRadius:o.px,borderBottomLeftRadius:o.px,width:o.px,maxWidth:o.px,height:o.px,maxHeight:o.px,size:o.px,top:o.px,right:o.px,bottom:o.px,left:o.px,padding:o.px,paddingTop:o.px,paddingRight:o.px,paddingBottom:o.px,paddingLeft:o.px,margin:o.px,marginTop:o.px,marginRight:o.px,marginBottom:o.px,marginLeft:o.px,rotate:o.RW,rotateX:o.RW,rotateY:o.RW,rotateZ:o.RW,scale:r.bA,scaleX:r.bA,scaleY:r.bA,scaleZ:r.bA,skew:o.RW,skewX:o.RW,skewY:o.RW,distance:o.px,translateX:o.px,translateY:o.px,translateZ:o.px,x:o.px,y:o.px,z:o.px,perspective:o.px,transformPerspective:o.px,opacity:r.Fq,originX:o.$C,originY:o.$C,originZ:o.px,zIndex:i,fillOpacity:r.Fq,strokeOpacity:r.Fq,numOctaves:i}},4651:function(t,e,n){n.d(e,{r:function(){return f}});var r=n(6019);let o={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},i=r._.length;var a=n(1534);let u=(t,e)=>e&&"number"==typeof t?e.transform(t):t;var s=n(7755);function f(t,e,n,f){let{style:l,vars:c,transform:d,transformOrigin:p}=t,m=!1,g=!1,x=!0;for(let t in e){let n=e[t];if((0,a.f9)(t)){c[t]=n;continue}let o=s.j[t],i=u(n,o);if(r.G.has(t)){if(m=!0,d[t]=i,!x)continue;n!==(o.default||0)&&(x=!1)}else t.startsWith("origin")?(g=!0,p[t]=i):l[t]=i}if(!e.transform&&(m||f?l.transform=function(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},a,u){let s="";for(let e=0;e<i;e++){let n=r._[e];if(void 0!==t[n]){let e=o[n]||n;s+=`${e}(${t[n]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),u?s=u(t,a?"":s):n&&a&&(s="none"),s}(t.transform,n,x,f):l.transform&&(l.transform="none")),g){let{originX:t="50%",originY:e="50%",originZ:n=0}=p;l.transformOrigin=`${t} ${e} ${n}`}}},9979:function(t,e,n){n.d(e,{N:function(){return r}});function r(t,{style:e,vars:n},r,o){for(let i in Object.assign(t.style,e,o&&o.getProjectionStyles(r)),n)t.style.setProperty(i,n[i])}},1315:function(t,e,n){n.d(e,{U:function(){return i}});var r=n(2020),o=n(8322);function i(t,e){let{style:n}=t,i={};for(let a in n)((0,o.i)(n[a])||e.style&&(0,o.i)(e.style[a])||(0,r.j)(a,t))&&(i[a]=n[a]);return i}},6019:function(t,e,n){n.d(e,{G:function(){return o},_:function(){return r}});let r=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],o=new Set(r)},2622:function(t,e,n){n.d(e,{i:function(){return s}});var r=n(4651),o=n(5480);function i(t,e,n){return"string"==typeof t?t:o.px.transform(e+n*t)}let a={offset:"stroke-dashoffset",array:"stroke-dasharray"},u={offset:"strokeDashoffset",array:"strokeDasharray"};function s(t,{attrX:e,attrY:n,attrScale:s,originX:f,originY:l,pathLength:c,pathSpacing:d=1,pathOffset:p=0,...m},g,x,v){if((0,r.r)(t,m,g,v),x){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:h,style:y,dimensions:w}=t;h.transform&&(w&&(y.transform=h.transform),delete h.transform),w&&(void 0!==f||void 0!==l||y.transform)&&(y.transformOrigin=function(t,e,n){let r=i(e,t.x,t.width),o=i(n,t.y,t.height);return`${r} ${o}`}(w,void 0!==f?f:.5,void 0!==l?l:.5)),void 0!==e&&(h.x=e),void 0!==n&&(h.y=n),void 0!==s&&(h.scale=s),void 0!==c&&function(t,e,n=1,r=0,i=!0){t.pathLength=1;let s=i?a:u;t[s.offset]=o.px.transform(-r);let f=o.px.transform(e),l=o.px.transform(n);t[s.array]=`${f} ${l}`}(h,c,d,p,!1)}},2394:function(t,e,n){n.d(e,{s:function(){return r}});let r=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"])},5969:function(t,e,n){n.d(e,{a:function(){return r}});let r=t=>"string"==typeof t&&"svg"===t.toLowerCase()},545:function(t,e,n){n.d(e,{K:function(){return a}});var r=n(1580),o=n(9979),i=n(2394);function a(t,e,n,a){for(let n in(0,o.N)(t,e,void 0,a),e.attrs)t.setAttribute(i.s.has(n)?n:(0,r.D)(n),e.attrs[n])}},2731:function(t,e,n){n.d(e,{U:function(){return a}});var r=n(8322),o=n(1315),i=n(6019);function a(t,e){let n=(0,o.U)(t,e);for(let o in t)((0,r.i)(t[o])||(0,r.i)(e[o]))&&(n[-1!==i._.indexOf(o)?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o]=t[o]);return n}},3795:function(t,e,n){n.d(e,{G:function(){return a},M:function(){return u}});var r=n(4572),o=n(6859),i=n(3552);function a(t){return(0,r.H)(t.animate)||i.V.some(e=>(0,o.$)(t[e]))}function u(t){return!!(a(t)||t.variants)}},6859:function(t,e,n){n.d(e,{$:function(){return r}});function r(t){return"string"==typeof t||Array.isArray(t)}},8595:function(t,e,n){n.d(e,{o:function(){return r}});function r(t,e,n,r={},o={}){return"function"==typeof e&&(e=e(void 0!==n?n:t.custom,r,o)),"string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e&&(e=e(void 0!==n?n:t.custom,r,o)),e}},3552:function(t,e,n){n.d(e,{V:function(){return o},e:function(){return r}});let r=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],o=["initial",...r]},1506:function(t,e,n){n.d(e,{u:function(){return r}});let r=(t,e,n)=>Math.min(Math.max(n,t),e)},7282:function(t,e,n){n.d(e,{j:function(){return r}});let r="undefined"!=typeof document},7576:function(t,e,n){n.d(e,{I:function(){return r}});function r(t){return"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}},9155:function(t,e,n){n.d(e,{Y:function(){return i},p:function(){return o}});var r=n(6925);let o=t=>!!(t&&"object"==typeof t&&t.mix&&t.toValue),i=t=>(0,r.C)(t)?t[t.length-1]||0:t},783:function(t,e,n){n.d(e,{Fq:function(){return i},Rx:function(){return o},bA:function(){return a}});var r=n(1506);let o={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},i={...o,transform:t=>(0,r.u)(0,1,t)},a={...o,default:1}},5480:function(t,e,n){n.d(e,{$C:function(){return l},RW:function(){return i},aQ:function(){return a},px:function(){return u},vh:function(){return s},vw:function(){return f}});var r=n(7292);let o=t=>({test:e=>(0,r.HD)(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),i=o("deg"),a=o("%"),u=o("px"),s=o("vh"),f=o("vw"),l={...a,parse:t=>a.parse(t)/100,transform:t=>a.transform(100*t)}},7292:function(t,e,n){n.d(e,{HD:function(){return u},KP:function(){return o},Nw:function(){return r},dA:function(){return i},mj:function(){return a}});let r=t=>Math.round(1e5*t)/1e5,o=/(-)?([\d]*\.?[\d])+/g,i=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,a=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function u(t){return"string"==typeof t}},8322:function(t,e,n){n.d(e,{i:function(){return r}});let r=t=>!!(t&&t.getVelocity)},2404:function(t,e,n){n.d(e,{b:function(){return i}});var r=n(9155),o=n(8322);function i(t){let e=(0,o.i)(t)?t.get():t;return(0,r.p)(e)?e.toValue():e}}}]);