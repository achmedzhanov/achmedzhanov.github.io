"use strict";function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}function _arrayWithHoles(t){if(Array.isArray(t))return t}function onDocumentReady(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}!function(t){var h=function(t,a){return t.reduce(function(t,e){var n=_slicedToArray(a(e),2),i=n[0],r=n[1];return t[i]=r,t},{})},L=function(t,e){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],t[0]*e[4]+t[2]*e[5]+t[4],t[1]*e[4]+t[3]*e[5]+t[5]]},R=function(t,e){return[e[0]*t[0]+e[2]*t[1]+e[4],e[1]*t[0]+e[3]*t[1]+e[5]]},z=function(t,e){return e[0]*t+e[4]},m=function(t,e){return e[3]*t+e[5]},O=function(t,e,n){return Math.max.apply(Math,_toConsumableArray(t.slice(e,n+1)))},u=function(t){return"matrix("+t[0]+","+t[1]+","+t[2]+","+t[3]+","+t[4]+","+t[5]+")"},g=function(t){return setTimeout(t,0)},H=function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},A=function(){return navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en"},v=function(t){return t*t},p={},q=function(){function e(t){_classCallCheck(this,e),this._el=t}return _createClass(e,[{key:"attr",value:function(t,e){return this._el.setAttribute(t,e),this}},{key:"on",value:function(t,e){return this._el.addEventListener(t,e,!1),this}},{key:"textContent",value:function(t){return this._el.textContent=t,this}},{key:"innerText",value:function(t){return this._el.innerText=t,this}},{key:"innerHTML",value:function(t){return this._el.innerHTML=t,this}},{key:"style",value:function(t,e){return this._el.style[t]=e,this}},{key:"addClass",value:function(t){return this._el.classList.add(t),this}},{key:"removeClass",value:function(t){return this._el.classList.remove(t),this}},{key:"appendTo",value:function(t){return t.el?t.el.appendChild(this._el):t.appendChild(this._el),this}},{key:"do",value:function(t){return t&&t(this),this}},{key:"el",get:function(){return this._el}}]),e}(),i=function(){function e(t){_classCallCheck(this,e),this.value=t,this.handlers=[]}return _createClass(e,[{key:"subscribe",value:function(t,e){!e&&t(this.value),this.handlers.push(t)}},{key:"next",value:function(t){this.value=t;var e=!0,n=!1,i=void 0;try{for(var r,a=this.handlers[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){(0,r.value)(t)}}catch(t){n=!0,i=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw i}}}},{key:"getValue",value:function(){return this.value}}]),e}(),K=function(t){var n=new i(t),e=function(t,e){n.subscribe(t,e)};return e.next=function(t){return n.next(t)},e.subscribe=function(t,e){return n.subscribe(t,e)},e.getValue=function(){return n.getValue()},e},U=function(t,e){var n=K(e(t.getValue()));return t.subscribe(function(t){return n.next(e(t))},!0),n},F=function(t){return new q(document.createElementNS("http://www.w3.org/2000/svg",t))},X=function(t){return new q(document.createElement(t))},N=function(t){if(t<1)return 1;var e=Math.ceil(Math.log(Math.abs(t)+.5)/Math.log(10)),n=t/Math.pow(10,e)*1e3;return(n=Math.ceil(n))/1e3*Math.pow(10,e)};var r=0,J=function(){function n(t){var e=this;if(_classCallCheck(this,n),this.uid=++r,this.animationUidKey="chart-view-port-"+this.uid,this.el=new q(t.containerEl),this.chartData=t.chartData,this.size$=t.size$,this.size$(function(t){return e.updateSize(t)},!0),this.size=this.size$.getValue(),this.strokeWidth=t.strokeWidth||2,this.disabled={},this.visibleRange=t.range||{from:0,to:100},!this.size$)throw new"Expected options.size$";this.onChangeTransformations=function(){},this.commitMarkupB=function(){return e.commitMarkup()}}return _createClass(n,[{key:"init",value:function(){var t=this.chartData,e=t.colors,n=t.columns,i=t.types,r=t.names,a=this.columnsMap={},o=this.colorsMap={},s=!0,l=!1,h=void 0;try{for(var u,c=n[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var d=u.value;o[(a[d[0]]=d)[0]]=e[d[0]]}}catch(t){l=!0,h=t}finally{try{s||null==c.return||c.return()}finally{if(l)throw h}}this.chartColumnsIds=Object.keys(i).filter(function(t){return"x"!==i[t]});var f=Object.keys(i);this.xColumnId=Object.keys(i).find(function(t){return"x"===i[t]}),this.xColumn=a[this.xColumnId],this.fullBounds=this.getBounds({from:0,to:100}),this.names=r;var v={},p=F("g").appendTo(this.el);var m=F("g").appendTo(p),g=F("g").appendTo(this.el);this.hoverContainerG=g;var y=_slicedToArray(this.fullBounds,4),w=y[2],C=y[3],x=function(t){return-(t-w)+C};this.transformY=x;for(var k=0;k<f.length;k++){var b=f[k],E=i[b],P=e[b];a[b];if("line"===E){var T="",M=F("path").addClass("chart-line").attr("d",T).style("stroke",P).style("stroke-width",this.strokeWidth).style("vector-effect","non-scaling-stroke").style("fill","none").addClass("animate-opacity").appendTo(m);v[b]=M}}this.linesElements=v,this.linesGC=p,this.linesG=m}},{key:"updateSize",value:function(t){if(!t.width||!t.height)throw"Excpected {width, height}";this.size=t,this.markupState=null,this.currentTransformations=null,this.updateRange(this.visibleRange,!0)}},{key:"vMatrix",value:function(t){var e=this.fullBounds[3],n=t[3],i=this.size.height/n;return L([1,0,0,1,0,n*i],L([1,0,0,i,0,0],[1,0,0,1,0,-e]))}},{key:"hMatrix",value:function(t){var e=_slicedToArray(t,2),n=e[0],i=e[1],r=this.size.width/(i-n);return L([r,0,0,1,0,0],[1,0,0,1,-n,0])}},{key:"getAllLinesIds",value:function(){return this.chartColumnsIds}},{key:"getEnabledLinesIds",value:function(){var e=this;return this.chartColumnsIds.filter(function(t){return!e.disabled[t]})}},{key:"getDisabledLinesIds",value:function(){var e=this;return this.chartColumnsIds.filter(function(t){return e.disabled[t]})}},{key:"getEnabledLines",value:function(){var e=this;return this.getEnabledLinesIds().map(function(t){return e.columnsMap[t]})}},{key:"getBounds",value:function(t){t=t||{from:0,to:100};var e=this.getEnabledLines(),n={from:1+(this.xColumn.length-1)*t.from/100,to:(this.xColumn.length-1)*t.to/100},i=0<e.length?Math.max.apply(Math,_toConsumableArray(e.map(function(t){return O(t,n.from,n.to+1)}))):this.fullBounds[3],r=20*(this.xColumn.length-2);return[r*t.from/100,r*t.to/100,0,N(i)]}},{key:"requestUpdate",value:function(t){var e=this;this.lastUpdate=requestAnimationFrame(function(){t(),e.lastUpdate=null})}},{key:"requestCommit",value:function(t){this.markupState=t,this.requestUpdate(this.commitMarkupB)}},{key:"updateRange",value:function(t,e){var n=this;if(t=t||{from:0,to:100},this.visibleRange.from!=t.from||this.visibleRange.to!=t.to||e){this.visibleRange=t;var i=this.getBounds(t),r=this.vMatrix(i),a=this.hMatrix(i),o=this.currentTransformations?this.currentTransformations.bounds:null,s=_slicedToArray(i,4),l=s[0],h=s[1],u=s[2],c=s[3],d=this.size.width/(h-l),f=this.size.height/c;if(o&&this.markupState){if(this.currentTransformations.bounds[2]!=i[2]||this.currentTransformations.bounds[3]!=i[3]){!function(t){var r=t.key,a=t.range,o=t.duration,s=t.ease,l=t.step,e=t.onCancel,h=t.onFinish;s=s||v,a=a||{from:0,to:1},o=o||300,r&&p[r]&&(cancelAnimationFrame(p[r]),e&&e(),p[r]=void 0);var u=new Date,n=requestAnimationFrame(function t(){var e=(new Date-u)/o;1<=e&&(e=1);var n=a.from+(a.to-a.from)*s(e);if(1<=e)h&&h(n);else{l(n);var i=requestAnimationFrame(t);r&&(p[r]=i)}});r&&(p[r]=n)}({key:this.animationUidKey,range:{from:this.markupState.yScale,to:f},duration:200,step:function(t){n.requestCommit(_objectSpread({},n.markupState,{yScale:t}))},onFinish:function(t){n.requestCommit(_objectSpread({},n.markupState,{yScale:t}))}})}this.requestCommit(_objectSpread({},this.markupState,{xMin:l,xMax:h,xScale:d}))}else this.requestCommit({xMin:l,xMax:h,yMin:u,yMax:c,xScale:d,yScale:f});this.onChangeTransformations({bounds:i,vm:r,hm:a}),this.currentTransformations={bounds:i,vm:r,hm:a}}}},{key:"vMatrixByScale",value:function(t){var e=this.fullBounds[3],n=this.size.height/t;return L([1,0,0,1,0,n*t],L([1,0,0,t,0,0],[1,0,0,1,0,-e]))}},{key:"equalP",value:function(t,e){return Math.round(1e6*Math.abs(t-e))<1}},{key:"commitMarkup",value:function(){var t=this.markupState,e=t.xMin,n=t.yScale,i=t.xScale;if(void 0===e)throw"xMin";if(void 0===i)throw"xScale";if(void 0===n)throw"yScale";var r=this.commitedMarkupState;if(!r||n!=r.yScale||!this.equalP(i,r.xScale)){var a=this.vMatrixByScale(n),o=this.getAllLinesIds(),s=!0,l=!1,h=void 0;try{for(var u,c=o[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){for(var d=u.value,f=this.columnsMap[d],v="",p=1;p<f.length;p++)v+=1==p?"M":"L",v+=20*(p-1)*i,v+=" ",v+=m(this.transformY(f[p]),a);this.linesElements[d].attr("d",v)}}catch(t){l=!0,h=t}finally{try{s||null==c.return||c.return()}finally{if(l)throw h}}this.commitedMarkupState=this.markupState}this.linesG.attr("transform","translate("+-e*i+", 0)")}},{key:"toggleLine",value:function(t){var e=!this.disabled[t],n=this.linesElements[t];e?n.addClass("disabled-line"):n.removeClass("disabled-line"),this.disabled[t]=e,this.updateRange(this.visibleRange,!0)}}]),n}(),Q=function(){function n(t){var e=this;_classCallCheck(this,n),this.viewPortEl=new q(t.viewPortEl),this.hoverContainerEl=new q(t.hoverContainerEl),this.viewPortBackdropEl=new q(t.viewPortBackdropEl),this.viewPort=t.viewPort,this.size$=t.size$,this.size$(function(){return e.hide()},!0),this.isCreatedElements=!1,this.circleElementsMap={},this.circleElements=[]}return _createClass(n,[{key:"init",value:function(){var e=this;this.viewPortBackdropEl.on("click",function(t){e.onViewPortClick(t)}),this.viewPortBackdropEl.on("mousemove",function(t){e.onViewPortClick(t)}),this.checkPinterActivityToClose=function(t){e.onSomePointerActivity(t)}}},{key:"hide",value:function(){if(this.opened){for(var t=0;t<this.circleElements.length;t++)this.circleElements[t].attr("display","none");this.lineEl.attr("display","none"),this.tooltipEl.style("display","none"),this.opened=!1,document.removeEventListener("mousemove",this.checkPinterActivityToClose),document.removeEventListener("mousedown",this.checkPinterActivityToClose)}}},{key:"createElements",value:function(){var e=this;this.tooltipEl=X("div").addClass("chart-tooltip").style("left","0").style("top","0").style("display","none").appendTo(this.viewPortBackdropEl),this.tooltipDateEl=X("div").addClass("chart-tooltip-date").appendTo(this.tooltipEl),this.tooltipValuesContainerEl=X("div").addClass("chart-tooltip-values").appendTo(this.tooltipEl),this.tooltipValuesBlocksElMap={},this.tooltipValuesElMap={};for(var t=0;t<this.viewPort.chartColumnsIds.length;t++){var n=this.viewPort.chartColumnsIds[t],i=X("div").addClass("chart-tooltip-value-block").style("color",this.viewPort.colorsMap[n]).appendTo(this.tooltipValuesContainerEl);this.tooltipValuesBlocksElMap[n]=i,this.tooltipValuesElMap[n]=X("div").addClass("chart-tooltip-value").appendTo(i),X("div").addClass("chart-tooltip-name").innerText(this.viewPort.names[n]).appendTo(i)}this.lineEl=F("path").attr("display","none").addClass("chart-tooltip-line").appendTo(this.hoverContainerEl),this.size$(function(t){return e.lineEl.attr("d","M0 0 L0 "+t.height)});for(var r=0;r<this.viewPort.chartColumnsIds.length;r++){var a=this.viewPort.chartColumnsIds[r],o=F("circle").attr("display","none").attr("stroke",this.viewPort.colorsMap[a]).attr("cx","0").attr("cy","0").attr("r","3").addClass("chart-tooltip-circle").appendTo(this.hoverContainerEl);this.circleElementsMap[a]=o,this.circleElements.push(o)}}},{key:"onViewPortClick",value:function(t){if(this.viewPort.currentTransformations&&(this.isCreatedElements||(this.createElements(),this.isCreatedElements=!0),t.target===this.viewPortBackdropEl.el)){var e=this.viewPort.getEnabledLinesIds();if(0!=e.length){this.opened=!0;for(var n,i,r=this.viewPort.currentTransformations.hm,a=this.viewPort.currentTransformations.vm,o=(i=(n=r)[0]*n[3]-n[1]*n[2],{0:n[3]/i,1:n[1]/-i,2:n[2]/-i,3:n[0]/i,4:(n[3]*n[4]-n[2]*n[5])/-i,5:(n[1]*n[4]-n[0]*n[5])/i}),s=R([t.offsetX,t.offsetY],o)[0],l=Math.round(s/20)+1,h=20*(l-1),u=this.viewPort.xColumn[l],c=new Date(u),d=L(a,r),f=0;f<e.length;f++){var v=e[f],p=this.circleElementsMap[v],m=this.viewPort.columnsMap[v][l],g=this.viewPort.transformY(m),y=R([h,g],d);p.attr("cx",y[0]),p.attr("cy",y[1]),p.attr("display",""),this.tooltipValuesElMap[v].innerText(""+m),this.tooltipValuesBlocksElMap[v].style("display","inline-block")}var w=this.viewPort.getDisabledLinesIds(),C=!0,x=!1,k=void 0;try{for(var b,E=w[Symbol.iterator]();!(C=(b=E.next()).done);C=!0){var P=b.value;this.tooltipValuesBlocksElMap[P].style("display","none")}}catch(t){x=!0,k=t}finally{try{C||null==E.return||E.return()}finally{if(x)throw k}}var T=A();this.tooltipDateEl.innerText(c.toLocaleDateString(T,{weekday:"short",month:"short",day:"numeric"})),this.tooltipEl.style("display","block");var M=z(h,d),S=this.tooltipEl.el.getBoundingClientRect().width,_=B(M-10,0,this.size$.getValue().width-S);this.tooltipEl.style("left",_+"px"),this.tooltipEl.style("top","0px"),this.lineEl.attr("display","block"),this.lineEl.attr("transform","translate("+z(h,d)+", 0)"),document.addEventListener("mousemove",this.checkPinterActivityToClose),document.addEventListener("mousedown",this.checkPinterActivityToClose)}}}},{key:"onSomePointerActivity",value:function(t){if(this.opened){var e=this.viewPortBackdropEl.el.getBoundingClientRect();t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom||this.hide()}}}]),n}(),Z=function(){function e(t){_classCallCheck(this,e),this.el=new q(t.containerEl),this.xColumn=t.xColumn,this.elementsCache={},this.currentRangeKey=null,this.currentBounds=null,this.textElements=[]}return _createClass(e,[{key:"init",value:function(r){var a=this,o=this.xColumn.slice(1);this.textElements=new Array(o.length);var s=A(),l={month:"short",day:"numeric"};this.getOrCreateTextEl=function(t){if(a.textElements[t])return a.textElements[t];var e=new Date(o[t]).toLocaleDateString(s,l),n=20*t,i={el:F("text").attr("x","0").attr("y","0").attr("transform",u([1,0,0,1,z(n,r),0])).textContent(""+e).addClass("chart-x-line-text").addClass("animate-opacity").appendTo(a.el),x:n};return a.textElements[t]=i}}},{key:"finPowerTwo",value:function(t){var e=1;if(t<=e)return 1;for(var n=0;n<32;n++)if(t<=(e=Math.pow(2,n)))return e;return e}},{key:"updateRange",value:function(t,e,n){0===this.textElements.length&&this.init(n);for(var i=Math.trunc(e.viewPortSize.width/this.getLabelWidth()),r=(t[1]-t[0])/20/i,a=this.finPowerTwo(r),o=0;o<this.textElements.length;o++){var s=o%a==0,l=t[0]<=20*o&&20*o<=t[1],h=s&&l?this.getOrCreateTextEl(o):this.textElements[o];h&&(h.el.attr("opacity",s?1:0),h.el.attr("transform",u([1,0,0,1,z(h.x,n),0])))}this.currentHM=n}},{key:"getLabelWidth",value:function(){return 55}}]),e}(),tt=function(){function n(t){_classCallCheck(this,n);var e=t.containerDivEl;this.el=new q(e),this.viewPort=t.viewPort,this.size$=t.size$,this.elementsCache={},this.currentRangeKey=null,this.currentBounds=null}return _createClass(n,[{key:"updateRange",value:function(t,e){var n=this;this.transformY=this.viewPort.transformY;var i=_slicedToArray(t,4),r=i[2],a=i[3],o=this.rangeToKey(r,a);if(this.currentRangeKey!==o||(s=e,l=this.currentVM,!s||!l||s[0]!==l[0]||s[1]!==l[1]||s[2]!==l[2]||s[3]!==l[3]||s[4]!==l[4]||s[5]!==l[5])){var s,l;this.forceUpdate=!1;if(this.currentRangeKey){var h=this.currentBounds,u=this.elementsCache[this.currentRangeKey],c=this.calcYAxis(h,5,e);g(function(){n.updateYGridLines(u,c,function(t){return t.style("opacity","0")})});var d=this.calcYAxis(t,5,this.currentVM),f=this.elementsCache[o]||this.createYGridLines(d,function(t){return t.style("opacity","0")}),v=this.calcYAxis(t,5,e);this.elementsCache[o]=f,g(function(){n.updateYGridLines(f,v,function(t){return t.style("opacity","1")})})}else{var p=this.calcYAxis(t,5,e),m=this.createYGridLines(p,function(){});this.elementsCache[o]=m}this.currentRangeKey=o,this.currentBounds=t,this.currentVM=e}}},{key:"rangeToKey",value:function(t,e){return t+":"+e}},{key:"prettyY",value:function(t){return Math.round(t)}},{key:"calcYAxis",value:function(t,e,n){for(var i=_slicedToArray(t,4),r=i[2],a=i[3],o=[],s=0;s<=e;s++){var l=(a-r)/(e+1)*s;l=this.prettyY(l);var h=m(this.transformY(l),n);o.push({y:h,yGraph:l,text:l})}return o}},{key:"createYGridLines",value:function(t,e){for(var n=[],i=[],r=t.length,a=0;a<r;a++){var o=t[a].y,s=X("div").style("top",o+"px").addClass("chart-y-line").appendTo(this.el);n.push(s),e(s);var l=X("div").style("top",o+"px").innerText(""+t[a].text).addClass("chart-y-line-text").appendTo(this.el);i.push(l),e(l)}return{hGridLines:n,hGridTexts:i}}},{key:"updateYGridLines",value:function(t,e,n){for(var i=t.hGridLines,r=t.hGridTexts,a=e.length,o=0;o<a;o++){var s=e[o].y;i[o].style("top",s+"px"),n(i[o]),r[o].style("top",s+"px"),n(r[o])}}}]),n}();function s(t,i,r){var a=t,e=function(t,e){var n={x:t.clientX-a.clientX,y:t.clientY-a.clientY};i({mme:t,delta:n,data:r,finished:e})},n=function(t){l||e(t,!1)},o=function(t){l||(e(t,!0),h())},s=function(t){l||t.cancelable&&t.preventDefault()},l=!1,h=function(){l=!0,document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",o),document.removeEventListener("touchmove",s)};document.addEventListener("pointermove",n),document.addEventListener("pointerup",o),document.addEventListener("touchmove",s,{passive:!1})}function B(t,e,n){return n<t?n:t<e?e:t}var et=function(){function n(t){var e=this;_classCallCheck(this,n),this.range=t.range||{from:0,to:100},this.width$=t.width$,this.width$(function(){return e.positionByRange()},!0),this.minRangeWidth=t.minRangeWidth||5,this.el=new q(t.containerEl),this.onRangeChanged=function(){}}return _createClass(n,[{key:"init",value:function(){var e=this;this.leftCurtainEl=X("div").addClass("left-curtain").appendTo(this.el),this.rightCurtainEl=X("div").addClass("right-curtain").appendTo(this.el),this.leftGripperEl=X("div").addClass("left-gripper").appendTo(this.el),this.rightGripperEl=X("div").addClass("right-gripper").appendTo(this.el),this.sliderEl=X("div").addClass("slider").appendTo(this.el),this.sliderEl.on("pointerdown",function(t){return e.onSliderMouseDown(t)}),this.leftGripperEl.on("pointerdown",function(t){return e.onLeftGripperMouseDown(t)}),this.rightGripperEl.on("pointerdown",function(t){return e.onRightGripperMouseDown(t)}),this.positionByRange()}},{key:"raiseRangeChange",value:function(){this.range;var t=this.getWidth(),e=this.state.leftPos/t*100,n=this.state.rightPos/t*100;this.onRangeChanged({from:e,to:n})}},{key:"positionByRange",value:function(){var t=this.getWidth(),e=Math.round(t*this.range.from/100),n=Math.round(t*this.range.to/100);this.state={leftPos:e,rightPos:n,w:t},this.updateElementsByState()}},{key:"updateElementsByState",value:function(){var t=this.state.leftPos,e=this.state.rightPos,n=this.state.w,i=e-t;this.sliderEl.style("left",t+"px"),this.sliderEl.style("width",i+"px"),this.leftGripperEl.style("left",t+"px"),this.rightGripperEl.style("right",n-e+"px"),this.leftCurtainEl.style("width",t+"px"),this.rightCurtainEl.style("width",n-e+"px")}},{key:"getWidth",value:function(){var t=this.width$.getValue();return t||(this.width=this.el.el.getBoundingClientRect().width)}},{key:"cloneState",value:function(){return{leftPos:this.state.leftPos,rightPos:this.state.rightPos,w:this.state.w}}},{key:"onSliderMouseDown",value:function(t){var i=this;t.preventDefault(),t.stopImmediatePropagation();var r=this.getWidth(),a=this.cloneState(),e=this.minRangeWidth/100*r,o=Math.max(a.rightPos-a.leftPos,e);s(t,function(t){var e=B(a.leftPos+t.delta.x,0,r-o),n=e+o;i.state=_objectSpread({},i.state,{leftPos:e,rightPos:n}),i.updateElementsByState(),i.raiseRangeChange()})}},{key:"onLeftGripperMouseDown",value:function(t){var n=this;t.preventDefault(),t.stopImmediatePropagation();var e=this.getWidth(),i=this.cloneState(),r=this.minRangeWidth/100*e;s(t,function(t){var e=B(i.leftPos+t.delta.x,0,i.rightPos-r);n.state=_objectSpread({},n.state,{leftPos:e}),n.updateElementsByState(),n.raiseRangeChange()})}},{key:"onRightGripperMouseDown",value:function(t){var n=this;t.preventDefault(),t.stopImmediatePropagation();var i=this.getWidth(),r=this.cloneState(),a=this.minRangeWidth/100*i;s(t,function(t){var e=B(r.rightPos+t.delta.x,r.leftPos+a,i);n.state=_objectSpread({},n.state,{rightPos:e}),n.updateElementsByState(),n.raiseRangeChange()})}}]),n}(),nt=function(){function i(t){_classCallCheck(this,i);var e=t.names,n=t.colors;this.names=e,this.colors=n,this.el=new q(t.containerEl),this.onToogle=function(){},this.init()}return _createClass(i,[{key:"init",value:function(){var a=this;this.el.addClass("chart-toggle-buttons");for(var o=Object.keys(this.names),t=function(){var t=o[s],e=!0,n=a.names[t],i=X("button").addClass("toggle-button").addClass("toggled").appendTo(a.el),r=X("div").addClass("circle-figure").innerHTML('<svg class="checkmark"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 45.701 45.7"\t><g><g><path d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"/></g></g></svg>').appendTo(i);r.style("border-color",a.colors[t]).style("background-color",a.colors[t]),X("span").appendTo(i).innerText(n),i.el.onclick=function(){(e=!e)?(r.style("background-color",a.colors[t]),i.addClass("toggled")):(r.style("background-color","transparent"),i.removeClass("toggled")),a.onToogle(t)}},s=0;s<o.length;s++)t()}}]),i}();t.createChart=function(M){var S=this,_=M.el,L=M.chartData,R=M.title,z=M.size,t=L.columns,A=L.names,e=L.types,B=L.colors,D=Object.keys(e).filter(function(t){return"x"!==e[t]}),G={},n=!0,i=!1,r=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;G[s[0]]=s}}catch(t){i=!0,r=t}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}var l=Object.keys(e).find(function(t){return"x"===e[t]}),W=G[l],I={disabled:h(D,function(t){return[t,!1]}),visibleRange:{from:0,to:100},elements:{linesElements:{}},transformY:function(t){return t}},Y=function(t){var e=window.innerHeight>window.innerWidth,n=t.offsetWidth||500,i=1;return window.innerHeight&&window.innerWidth&&(i=window.innerHeight/window.innerWidth*.7),{width:n,height:e?n:n*i}},j={left:0,right:0,top:2,bottom:2},V=function(t){return{viewPortSize:{width:t.width-j.left-j.right,height:t.height-j.top-j.bottom-20},svgSize:{width:t.width,height:t.height}}},$=function(t){I.cvp.toggleLine(t),I.miniCVP.toggleLine(t)};!function(){R&&X("div").addClass("title").innerText(R).appendTo(_);var t=X("div").addClass("chart-view-port").style("position","relative").appendTo(_);z||(z=Y(_)),I.size=z;var e=V(z);I.viewPortSize=e.viewPortSize,I.svgSize=e.svgSize;var n=K(e),i=U(n,function(t){return t.viewPortSize}),r=H();window.addEventListener("resize",function(){var t=H();if(!(t.width==r.width&&.9<Math.min(t.height,r.height)/Math.max(t.height,r.height))){r=t;var e=V(Y(_));n.next(e)}});var a=function(e){e=e||{disabled:{},visibleRange:{from:0,to:100}};var t=D.filter(function(t){return!e.disabled[t]}).map(function(t){return G[t]}),n={from:1+(W.length-1)*e.visibleRange.from/100,to:(W.length-1)*e.visibleRange.to/100},i=Math.max.apply(Math,_toConsumableArray(t.map(function(t){return O(t,n.from,n.to+1)}))),r=20*(W.length-2);return[r*e.visibleRange.from/100,r*e.visibleRange.to/100,0,N(i)]}(null),o=_slicedToArray(I.fullBounds=a,4),s=o[2],l=o[3];I.transformY=function(t){return-(t-s)+l};var h=function(t,e,n){var i=e.width,r=e.height,a=[-(n=n||{left:0,right:0,top:2,bottom:2}).left,-n.top,i-n.right,r-n.bottom];return t.style("width",i).style("height",r).attr("viewBox","".concat(a[0]," ").concat(a[1]," ").concat(a[2]," ").concat(a[3])),t},u=X("div").do(function(e){n(function(t){e.style("width",t.viewPortSize.width+"px").style("height",t.viewPortSize.height+"px")})}).style("left",j.left+"px").style("top",j.top+"px").style("position","absolute").appendTo(t),c=F("svg").attr("zoom",1);n(function(t){h(c,t.svgSize,j)});var d=F("g").addClass("animate-transform").style("vector-effect","non-scaling-stroke").appendTo(c);I.elements.hGridLinesG=d;var f=F("g").addClass("animate-transform").appendTo(c);n(function(t){return f.attr("transform","translate(0, "+(t.viewPortSize.height+16)+")")}),I.elements.xAxisG=f;var v={from:50,to:75},p=new J({containerEl:c.el,chartData:L,size$:i,range:v});p.init(),I.cvp=p,S.viewPortEl=new q(M.viewPortEl),S.viewPort=M.viewPort;var m=new Q({viewPortEl:p.linesGC.el,hoverContainerEl:p.hoverContainerG.el,viewPort:p,viewPortBackdropEl:u.el,size$:i});m.init(),I.cph=m;var g=new Z({containerEl:f.el,xColumn:W});I.xAxis=g;var y=new tt({containerGEl:d.el,containerDivEl:u.el,viewPort:p,size$:i});I.yAxis=y,p.onChangeTransformations=function(t){var e=t.bounds,n=t.vm,i=t.hm;g.updateRange(e,I,i),y.updateRange(e,n)},p.updateRange(v,!0),c.appendTo(t);var w=X("div").addClass("chart-range-selector").appendTo(_);n(function(t){return w.style("width",t.viewPortSize.width+"px")});var C=F("svg").appendTo(w),x={left:0,right:0,top:2,bottom:2},k=30+x.top+x.bottom;n(function(t){return h(C,{width:t.viewPortSize.width,height:k},x)});var b=new J({containerEl:C.el,chartData:L,size$:U(i,function(t){return{width:t.width,height:30}}),strokeWidth:"1px",range:{from:0,to:100}});b.init(),(I.miniCVP=b).updateRange({from:0,to:100},!0);var E=Math.max(2/(W.length-1)*100,1/I.viewPortSize.width*100,5),P=new et({range:v,containerEl:w.el,minRangeWidth:E,width$:U(i,function(t){return t.width})});P.init(),P.onRangeChanged=function(t){m.hide(),p.updateRange(t)};var T=X("div").appendTo(_);new nt({containerEl:T.el,names:A,colors:B}).onToogle=function(t){m.hide(),$(t)},_.__chart_state__=I}()},t.createModeSwitcher=function(){var t="Switch To Night Mode",e=X("button").addClass("mode-switcher-button").innerText(t).appendTo(document.body),n=!1,i=new q(document.body);e.on("click",function(){(n=!n)?(i.addClass("night"),e.innerText("Switch To Day Mode")):(i.removeClass("night"),e.innerText(t))})}}(window),onDocumentReady(function(){fetch("scripts/data.json").then(function(t){return t.json()}).then(function(t){for(var e=0;e<t.length;e++){var n=document.getElementById("chart"+e);n.offsetWidth;window.createChart({el:n,chartData:t[e],title:"Chart #"+e})}window.createModeSwitcher()})});