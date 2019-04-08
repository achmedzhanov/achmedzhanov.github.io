"use strict";function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}function _arrayWithHoles(t){if(Array.isArray(t))return t}function onDocumentReady(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}!function(t){var h=function(t,a){return t.reduce(function(t,e){var n=_slicedToArray(a(e),2),i=n[0],r=n[1];return t[i]=r,t},{})},R=function(t,e){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],t[0]*e[4]+t[2]*e[5]+t[4],t[1]*e[4]+t[3]*e[5]+t[5]]},A=function(t,e){return[e[0]*t[0]+e[2]*t[1]+e[4],e[1]*t[0]+e[3]*t[1]+e[5]]},z=function(t,e){return e[0]*t+e[4]},w=function(t,e){return e[3]*t+e[5]},O=function(t,e,n){return Math.max.apply(Math,_toConsumableArray(t.slice(e,n+1)))},f=function(t){return"matrix("+t[0]+","+t[1]+","+t[2]+","+t[3]+","+t[4]+","+t[5]+")"},g=function(t){return setTimeout(t,0)},H=function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},B=function(){return navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en"},p=function(t){return t*t},m={},q=function(){function e(t){_classCallCheck(this,e),this._el=t}return _createClass(e,[{key:"attr",value:function(t,e){return this._el.setAttribute(t,e),this}},{key:"on",value:function(t,e){if("string"==typeof t)this._el.addEventListener(t,e,!1);else for(var n=0;n<t.length;n++)this._el.addEventListener(t[n],e,!1);return this}},{key:"textContent",value:function(t){return this._el.textContent=t,this}},{key:"innerText",value:function(t){return this._el.innerText=t,this}},{key:"innerHTML",value:function(t){return this._el.innerHTML=t,this}},{key:"style",value:function(t,e){return this._el.style[t]=e,this}},{key:"addClass",value:function(t){return this._el.classList.add(t),this}},{key:"removeClass",value:function(t){return this._el.classList.remove(t),this}},{key:"appendTo",value:function(t){return t.el?t.el.appendChild(this._el):t.appendChild(this._el),this}},{key:"do",value:function(t){return t&&t(this),this}},{key:"el",get:function(){return this._el}}]),e}(),i=function(){function e(t){_classCallCheck(this,e),this.value=t,this.handlers=[]}return _createClass(e,[{key:"subscribe",value:function(t,e){!e&&t(this.value),this.handlers.push(t)}},{key:"next",value:function(t){this.value=t;var e=!0,n=!1,i=void 0;try{for(var r,a=this.handlers[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){(0,r.value)(t)}}catch(t){n=!0,i=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw i}}}},{key:"getValue",value:function(){return this.value}}]),e}(),K=function(t){var n=new i(t),e=function(t,e){n.subscribe(t,e)};return e.next=function(t){return n.next(t)},e.subscribe=function(t,e){return n.subscribe(t,e)},e.getValue=function(){return n.getValue()},e},F=function(t,e){var n=K(e(t.getValue()));return t.subscribe(function(t){return n.next(e(t))},!0),n},U=function(t){return new q(document.createElementNS("http://www.w3.org/2000/svg",t))},X=function(t){return new q(document.createElement(t))},o=function(t,e){if(t<1)return 1;var n=Math.ceil(Math.log(Math.abs(t)+.5)/Math.log(10)),i=t/Math.pow(10,n)*e;return(i=Math.ceil(i))/e*Math.pow(10,n)},N=function(t){return o(t,1e3)};var r=0,J=function(){function n(t){var e=this;if(_classCallCheck(this,n),this.uid=++r,this.animationUidKey="chart-view-port-"+this.uid,this.el=new q(t.containerEl),this.chartData=t.chartData,this.size$=t.size$,this.size$(function(t){return e.updateSize(t)},!0),this.size=this.size$.getValue(),this.strokeWidth=t.strokeWidth||2,this.disabled={},this.visibleRange=t.range||{from:0,to:100},!this.size$)throw new"Expected options.size$";this.onChangeTransformations=function(){},this.commitMarkupB=function(){return e.commitMarkup()}}return _createClass(n,[{key:"init",value:function(){var t=this.chartData,e=t.colors,n=t.columns,i=t.types,r=t.names,a=this.columnsMap={},o=this.colorsMap={},s=!0,l=!1,h=void 0;try{for(var u,c=n[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var d=u.value;o[(a[d[0]]=d)[0]]=e[d[0]]}}catch(t){l=!0,h=t}finally{try{s||null==c.return||c.return()}finally{if(l)throw h}}this.chartColumnsIds=Object.keys(i).filter(function(t){return"x"!==i[t]});var f=Object.keys(i);this.xColumnId=Object.keys(i).find(function(t){return"x"===i[t]}),this.xColumn=a[this.xColumnId],this.fullBounds=this.getBounds({from:0,to:100}),this.names=r;var v={},p=U("g").appendTo(this.el);var m=U("g").appendTo(p),g=U("g").appendTo(this.el);this.hoverContainerG=g;var y=_slicedToArray(this.fullBounds,4),w=y[2],x=y[3],C=function(t){return-(t-w)+x};this.transformY=C;for(var k=0;k<f.length;k++){var b=f[k],E=i[b],P=e[b];a[b];if("line"===E){var T="",S=U("path").addClass("chart-line").attr("d",T).style("stroke",P).style("stroke-width",this.strokeWidth).style("vector-effect","non-scaling-stroke").style("fill","none").addClass("animate-opacity").appendTo(m);v[b]=S}}this.linesElements=v,this.linesGC=p,this.linesG=m}},{key:"updateSize",value:function(t){if(!t.width||!t.height)throw"Excpected {width, height}";this.size=t,this.markupState=null,this.currentTransformations=null,this.updateRange(this.visibleRange,!0)}},{key:"vMatrix",value:function(t){var e=this.fullBounds[3],n=t[3],i=this.size.height/n;return R([1,0,0,1,0,n*i],R([1,0,0,i,0,0],[1,0,0,1,0,-e]))}},{key:"hMatrix",value:function(t){var e=_slicedToArray(t,2),n=e[0],i=e[1],r=this.size.width/(i-n);return R([r,0,0,1,0,0],[1,0,0,1,-n,0])}},{key:"getAllLinesIds",value:function(){return this.chartColumnsIds}},{key:"getEnabledLinesIds",value:function(){var e=this;return this.chartColumnsIds.filter(function(t){return!e.disabled[t]})}},{key:"getDisabledLinesIds",value:function(){var e=this;return this.chartColumnsIds.filter(function(t){return e.disabled[t]})}},{key:"getEnabledLines",value:function(){var e=this;return this.getEnabledLinesIds().map(function(t){return e.columnsMap[t]})}},{key:"getBounds",value:function(t){t=t||{from:0,to:100};var e=this.getEnabledLines(),n={from:1+(this.xColumn.length-1)*t.from/100,to:(this.xColumn.length-1)*t.to/100},i=0<e.length?Math.max.apply(Math,_toConsumableArray(e.map(function(t){return O(t,n.from,n.to+1)}))):this.fullBounds[3],r=20*(this.xColumn.length-2);return[r*t.from/100,r*t.to/100,0,N(i)]}},{key:"rafCommit",value:function(){var t=this;this.lastUpdate||(this.lastUpdate=requestAnimationFrame(function(){t.commitMarkup(),t.lastUpdate=null}))}},{key:"requestCommit",value:function(t,e){this.markupState=t,e?this.commitMarkup():this.rafCommit(this.commitMarkupB)}},{key:"updateRange",value:function(t,e){var n=this;if(t=t||{from:0,to:100},this.visibleRange.from!=t.from||this.visibleRange.to!=t.to||e){this.visibleRange=t;var i=this.getBounds(t),r=this.vMatrix(i),a=this.hMatrix(i),o=this.currentTransformations?this.currentTransformations.bounds:null,s=_slicedToArray(i,4),l=s[0],h=s[1],u=s[2],c=s[3],d=this.size.width/(h-l),f=this.size.height/c;if(o&&this.markupState){if(this.currentTransformations.bounds[2]!=i[2]||this.currentTransformations.bounds[3]!=i[3]){var v=Math.min(this.markupState.yScale,f)/Math.max(this.markupState.yScale,f)<.95?200:10;!function(t){var r=t.key,a=t.range,o=t.duration,s=t.ease,l=t.step,e=t.onCancel,h=t.onFinish;if(s=s||p,a=a||{from:0,to:1},o=o||300,r&&m[r]){cancelAnimationFrame(m[r].rId);var n=m[r],i=(Date.now()-n.startTime)/n.duration;1<=i&&(i=1);var u=n.range.from+(n.range.to-n.range.from)*n.ease(i);Math.abs(a.to-u)<Math.abs(a.to-a.from)&&(a.from=u),e&&e(u),m[r]=void 0}if(10!=o){var c=Date.now(),d=requestAnimationFrame(function t(){var e=(Date.now()-c)/o;1<=e&&(e=1);var n=a.from+(a.to-a.from)*s(e);if(1<=e)h&&h(n);else{l(n);var i=requestAnimationFrame(t);r&&(m[r].rId=i)}});r&&(m[r]={rId:d,ease:s,range:a,duration:o,startTime:c})}else h&&h(a.to)}({key:this.animationUidKey,range:{from:this.markupState.yScale,to:f},duration:v,step:function(t){n.requestCommit(_objectSpread({},n.markupState,{yScale:t}),!0)},onFinish:function(t){n.requestCommit(_objectSpread({},n.markupState,{yScale:t}),!0)},onCancel:function(t){n.requestCommit(_objectSpread({},n.markupState,{yScale:t}))}})}this.requestCommit(_objectSpread({},this.markupState,{xMin:l,xMax:h,xScale:d}))}else this.requestCommit({xMin:l,xMax:h,yMin:u,yMax:c,xScale:d,yScale:f});this.onChangeTransformations({bounds:i,vm:r,hm:a}),this.currentTransformations={bounds:i,vm:r,hm:a}}}},{key:"vMatrixByScale",value:function(t){var e=this.fullBounds[3],n=this.size.height/t;return R([1,0,0,1,0,n*t],R([1,0,0,t,0,0],[1,0,0,1,0,-e]))}},{key:"equalP",value:function(t,e){return Math.round(1e6*Math.abs(t-e))<1}},{key:"commitMarkup",value:function(){var t=this.markupState,e=t.xMin,n=t.yScale,i=t.xScale;if(void 0===e)throw"xMin";if(void 0===i)throw"xScale";if(void 0===n)throw"yScale";var r=this.commitedMarkupState;if(!r||n!=r.yScale||!this.equalP(i,r.xScale)){var a=this.vMatrixByScale(n),o=this.getAllLinesIds(),s=null,l=!0,h=!1,u=void 0;try{for(var c,d=o[Symbol.iterator]();!(l=(c=d.next()).done);l=!0){var f=c.value,v=this.columnsMap[f];if(!s){s=new Array(v.length+1);for(var p=1;p<v.length;p++)s[p]=(20*(p-1)*i).toFixed(2)}for(var m,g=[],y=1;y<v.length;y++)g.push(1==y?"M":"L"),g.push(s[y]),g.push(" "),g.push(w(this.transformY(v[y]),a).toFixed(2));m=g.join(""),this.linesElements[f].attr("d",m)}}catch(t){h=!0,u=t}finally{try{l||null==d.return||d.return()}finally{if(h)throw u}}this.commitedMarkupState=this.markupState}this.linesG.attr("transform","translate("+-e*i+", 0)")}},{key:"toggleLine",value:function(t){var e=!this.disabled[t],n=this.linesElements[t];e?n.addClass("disabled-line"):n.removeClass("disabled-line"),this.disabled[t]=e,this.updateRange(this.visibleRange,!0)}}]),n}(),Q=function(){function n(t){var e=this;_classCallCheck(this,n),this.viewPortEl=new q(t.viewPortEl),this.hoverContainerEl=new q(t.hoverContainerEl),this.viewPortBackdropEl=new q(t.viewPortBackdropEl),this.viewPort=t.viewPort,this.size$=t.size$,this.size$(function(){return e.hide()},!0),this.isCreatedElements=!1,this.circleElementsMap={},this.circleElements=[]}return _createClass(n,[{key:"init",value:function(){var e=this;this.viewPortBackdropEl.on("click",function(t){e.onViewPortClick(t)}),this.viewPortBackdropEl.on("mousemove",function(t){e.onViewPortClick(t)}),this.viewPortBackdropEl.on("touchmove",function(t){e.onViewPortClick(t)}),this.checkPinterActivityToClose=function(t){e.onSomePointerActivity(t)}}},{key:"hide",value:function(){if(this.opened){for(var t=0;t<this.circleElements.length;t++)this.circleElements[t].attr("display","none");this.lineEl.attr("display","none"),this.tooltipEl.style("display","none"),this.opened=!1,document.removeEventListener("mousemove",this.checkPinterActivityToClose),document.removeEventListener("mousedown",this.checkPinterActivityToClose)}}},{key:"createElements",value:function(){var e=this;this.tooltipEl=X("div").addClass("chart-tooltip").style("left","0").style("top","0").style("display","none").appendTo(this.viewPortBackdropEl),this.tooltipDateEl=X("div").addClass("chart-tooltip-date").appendTo(this.tooltipEl),this.tooltipValuesContainerEl=X("div").addClass("chart-tooltip-values").appendTo(this.tooltipEl),this.tooltipValuesBlocksElMap={},this.tooltipValuesElMap={};for(var t=0;t<this.viewPort.chartColumnsIds.length;t++){var n=this.viewPort.chartColumnsIds[t],i=X("div").addClass("chart-tooltip-value-block").style("color",this.viewPort.colorsMap[n]).appendTo(this.tooltipValuesContainerEl);this.tooltipValuesBlocksElMap[n]=i,this.tooltipValuesElMap[n]=X("div").addClass("chart-tooltip-value").appendTo(i),X("div").addClass("chart-tooltip-name").innerText(this.viewPort.names[n]).appendTo(i)}this.lineEl=U("path").attr("display","none").addClass("chart-tooltip-line").appendTo(this.hoverContainerEl),this.size$(function(t){return e.lineEl.attr("d","M0 0 L0 "+t.height)});for(var r=0;r<this.viewPort.chartColumnsIds.length;r++){var a=this.viewPort.chartColumnsIds[r],o=U("circle").attr("display","none").attr("stroke",this.viewPort.colorsMap[a]).attr("cx","0").attr("cy","0").attr("r","3").addClass("chart-tooltip-circle").appendTo(this.hoverContainerEl);this.circleElementsMap[a]=o,this.circleElements.push(o)}}},{key:"onViewPortClick",value:function(t){if(this.viewPort.currentTransformations&&(this.isCreatedElements||(this.createElements(),this.isCreatedElements=!0),t.target===this.viewPortBackdropEl.el)){var e=this.viewPort.getEnabledLinesIds();if(0!=e.length){this.opened=!0;var n,i,r,a=this.viewPort.currentTransformations.hm,o=this.viewPort.currentTransformations.vm,s=(i=(n=a)[0]*n[3]-n[1]*n[2],{0:n[3]/i,1:n[1]/-i,2:n[2]/-i,3:n[0]/i,4:(n[3]*n[4]-n[2]*n[5])/-i,5:(n[1]*n[4]-n[0]*n[5])/i});r=t.touches&&t.touches.length?[t.touches[0].pageX-t.touches[0].target.offsetLeft,t.touches[0].pageY-t.touches[0].target.offsetTop]:[t.offsetX,t.offsetY];for(var l=A(r,s)[0],h=Math.round(l/20)+1,u=20*(h-1),c=this.viewPort.xColumn[h],d=new Date(c),f=R(o,a),v=0;v<e.length;v++){var p=e[v],m=this.circleElementsMap[p],g=this.viewPort.columnsMap[p][h],y=this.viewPort.transformY(g),w=A([u,y],f);m.attr("cx",w[0]),m.attr("cy",w[1]),m.attr("display",""),this.tooltipValuesElMap[p].innerText(""+g),this.tooltipValuesBlocksElMap[p].style("display","inline-block")}var x=this.viewPort.getDisabledLinesIds(),C=!0,k=!1,b=void 0;try{for(var E,P=x[Symbol.iterator]();!(C=(E=P.next()).done);C=!0){var T=E.value;this.tooltipValuesBlocksElMap[T].style("display","none")}}catch(t){k=!0,b=t}finally{try{C||null==P.return||P.return()}finally{if(k)throw b}}var S=B();this.tooltipDateEl.innerText(d.toLocaleDateString(S,{weekday:"short",month:"short",day:"numeric"})),this.tooltipEl.style("display","block");var M=z(u,f),_=this.tooltipEl.el.getBoundingClientRect().width,L=G(M-10,0,this.size$.getValue().width-_);this.tooltipEl.style("left",L+"px"),this.tooltipEl.style("top","0px"),this.lineEl.attr("display","block"),this.lineEl.attr("transform","translate("+z(u,f)+", 0)"),document.addEventListener("mousemove",this.checkPinterActivityToClose),document.addEventListener("mousedown",this.checkPinterActivityToClose)}}}},{key:"onSomePointerActivity",value:function(t){if(this.opened){var e=this.viewPortBackdropEl.el.getBoundingClientRect();t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom||this.hide()}}}]),n}(),Z=function(){function e(t){_classCallCheck(this,e),this.el=new q(t.containerEl),this.textsG=U("g").appendTo(this.el),this.xColumn=t.xColumn,this.elementsCache={},this.currentRangeKey=null,this.currentBounds=null,this.textElements=[]}return _createClass(e,[{key:"init",value:function(r){var a=this,o=this.xColumn.slice(1);this.textElements=new Array(o.length);var s=B(),l={month:"short",day:"numeric"};this.getOrCreateTextEl=function(t){if(a.textElements[t])return a.textElements[t];var e=new Date(o[t]).toLocaleDateString(s,l),n=20*t,i={el:U("text").attr("x","0").attr("y","0").textContent(""+e).addClass("chart-x-line-text").addClass("animate-opacity").appendTo(a.textsG),x:n};return a.textElements[t]=i,a.textsG.attr("transform",f([1,0,0,1,z(0,r),0])),i}}},{key:"finPowerTwo",value:function(t){var e=1;if(t<=e)return 1;for(var n=0;n<32;n++)if(t<=(e=Math.pow(2,n)))return e;return e}},{key:"updateRange",value:function(h,u,c){var d=this;0===this.textElements.length&&this.init(c),requestAnimationFrame(function(){for(var t=Math.trunc(u.viewPortSize.width/d.getLabelWidth()),e=(h[1]-h[0])/20/t,n=d.finPowerTwo(e),i=[c[0],0,0,1,0,0],r=[1,0,0,1,c[4],0],a=0;a<d.textElements.length;a++){var o=a%n==0,s=h[0]<=20*a&&20*a<=h[1],l=o&&s?d.getOrCreateTextEl(a):d.textElements[a];l&&(l.el.attr("opacity",o?1:0),l.el.attr("transform","translate("+z(l.x,i)+", 0)"))}d.textsG.attr("transform",f([1,0,0,1,z(0,r),0])),d.currentHM=c,d.currentVisibleK=n})}},{key:"getLabelWidth",value:function(){return 55}}]),e}(),tt=function(){function n(t){_classCallCheck(this,n);var e=t.containerDivEl;this.el=new q(e),this.viewPort=t.viewPort,this.size$=t.size$,this.elementsCache={},this.currentRangeKey=null,this.currentBounds=null}return _createClass(n,[{key:"updateRange",value:function(t,e){var n=this;this.transformY=this.viewPort.transformY;var i=[t[0],t[1],t[2],this.prettyLabelsRange(t[3])],r=this.rangeToKey(i[2],i[3]);if(this.currentRangeKey!==r||(a=e,o=this.currentVM,!a||!o||a[0]!==o[0]||a[1]!==o[1]||a[2]!==o[2]||a[3]!==o[3]||a[4]!==o[4]||a[5]!==o[5])){var a,o;if(this.forceUpdate=!1,this.currentRangeKey){var s=this.currentBounds;if(this.currentRangeKey==r){var l=this.elementsCache[this.currentRangeKey],h=this.calcYAxis(s,e);this.updateYGridLines(l,h,function(){})}else{var u=this.elementsCache[this.currentRangeKey],c=this.calcYAxis(s,e);g(function(){n.updateYGridLines(u,c,function(t){return t.style("opacity","0")})});var d=this.calcYAxis(i,this.currentVM),f=this.elementsCache[r]||this.createYGridLines(d,function(t){return t.style("opacity","0")}),v=this.calcYAxis(i,e);this.elementsCache[r]=f,g(function(){n.updateYGridLines(f,v,function(t){return t.style("opacity","1")})})}}else{var p=this.calcYAxis(i,e),m=this.createYGridLines(p,function(){});this.elementsCache[r]=m}this.currentRangeKey=r,this.currentBounds=i,this.currentVM=e}}},{key:"rangeToKey",value:function(t,e){return t+":"+e}},{key:"prettyLabelsRange",value:function(t){for(var e=[10,20,25,50,100],n=0;n<2;n++)for(var i=0==n?t/6*5:t/6.1*5,r=0;r<e.length;r++){var a=o(i,e[r]);if(a<.9*t)return a}return t/6*5}},{key:"prettyY",value:function(t){return Math.round(t)}},{key:"calcYAxis",value:function(t,e){for(var n=_slicedToArray(t,4),i=n[2],r=n[3],a=[],o=0;o<=5;o++){var s=(r-i)/5*o;s=this.prettyY(s);var l=w(this.transformY(s),e);a.push({y:l,yGraph:s,text:s})}return a}},{key:"createYGridLines",value:function(t,e){for(var n=[],i=[],r=t.length,a=0;a<r;a++){var o=t[a].y,s=X("div").style("top",o+"px").addClass("chart-y-line").appendTo(this.el);n.push(s),e(s);var l=X("div").style("top",o+"px").innerText(""+t[a].text).addClass("chart-y-line-text").appendTo(this.el);i.push(l),e(l)}return{hGridLines:n,hGridTexts:i}}},{key:"updateYGridLines",value:function(t,e,n){for(var i=t.hGridLines,r=t.hGridTexts,a=e.length,o=0;o<a;o++){var s=e[o].y;i[o].style("top",s+"px"),n(i[o]),r[o].style("top",s+"px"),n(r[o])}}}]),n}();function s(t,e,a,o){var s=e,l=e,n=function(t,e){e&&(t=l);var n=t.touches?t.touches[0]:t,i=s.touches?s.touches[0]:s,r={x:n.clientX-i.clientX,y:n.clientY-i.clientY};a({mme:l=t,delta:r,data:o,finished:e})},i=function(t){h||n(t,!1)},r=function(t){h||(n(t,!0),c())},h=!1,u=!!s.touches&&0<s.touches.length,c=function(){h=!0,u?(t.el.removeEventListener("touchmove",i),document.removeEventListener("touchend",r)):(document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",r))};u?(t.el.addEventListener("touchmove",i),document.addEventListener("touchend",r)):(document.addEventListener("mousemove",i),document.addEventListener("mouseup",r))}function G(t,e,n){return n<t?n:t<e?e:t}var et=function(){function n(t){var e=this;_classCallCheck(this,n),this.range=t.range||{from:0,to:100},this.width$=t.width$,this.width$(function(){return e.positionByRange()},!0),this.minRangeWidth=t.minRangeWidth||5,this.el=new q(t.containerEl),this.onRangeChanged=function(){}}return _createClass(n,[{key:"init",value:function(){var e=this;this.leftCurtainEl=X("div").addClass("left-curtain").appendTo(this.el),this.rightCurtainEl=X("div").addClass("right-curtain").appendTo(this.el),this.leftGripperEl=X("div").addClass("left-gripper").appendTo(this.el),this.rightGripperEl=X("div").addClass("right-gripper").appendTo(this.el),this.sliderEl=X("div").addClass("slider").appendTo(this.el),this.sliderEl.on(["mousedown","touchstart"],function(t){return e.onSliderMouseDown(t)}),this.leftGripperEl.on(["mousedown","touchstart"],function(t){return e.onLeftGripperMouseDown(t)}),this.rightGripperEl.on(["mousedown","touchstart"],function(t){return e.onRightGripperMouseDown(t)}),this.positionByRange()}},{key:"raiseRangeChange",value:function(){this.range;var t=this.getWidth(),e=this.state.leftPos/t*100,n=this.state.rightPos/t*100;this.onRangeChanged({from:e,to:n})}},{key:"positionByRange",value:function(){var t=this.getWidth(),e=Math.round(t*this.range.from/100),n=Math.round(t*this.range.to/100);this.state={leftPos:e,rightPos:n,w:t},this.updateElementsByState()}},{key:"updateElementsByState",value:function(){var t=this.state.leftPos,e=this.state.rightPos,n=this.state.w,i=e-t;this.sliderEl.style("left",t+"px"),this.sliderEl.style("width",i+"px"),this.leftGripperEl.style("left",t+"px"),this.rightGripperEl.style("right",n-e+"px"),this.leftCurtainEl.style("width",t+"px"),this.rightCurtainEl.style("width",n-e+"px")}},{key:"getWidth",value:function(){var t=this.width$.getValue();return t||(this.width=this.el.el.getBoundingClientRect().width)}},{key:"cloneState",value:function(){return{leftPos:this.state.leftPos,rightPos:this.state.rightPos,w:this.state.w}}},{key:"onSliderMouseDown",value:function(t){var i=this;t.preventDefault(),t.stopImmediatePropagation();var r=this.getWidth(),a=this.cloneState(),e=this.minRangeWidth/100*r,o=Math.max(a.rightPos-a.leftPos,e);s(this.sliderEl,t,function(t){var e=G(a.leftPos+t.delta.x,0,r-o),n=e+o;i.state=_objectSpread({},i.state,{leftPos:e,rightPos:n}),requestAnimationFrame(function(){return i.updateElementsByState()}),i.raiseRangeChange()})}},{key:"onLeftGripperMouseDown",value:function(t){var n=this;t.preventDefault(),t.stopImmediatePropagation();var e=this.getWidth(),i=this.cloneState(),r=this.minRangeWidth/100*e;s(this.leftGripperEl,t,function(t){var e=G(i.leftPos+t.delta.x,0,i.rightPos-r);n.state=_objectSpread({},n.state,{leftPos:e}),n.updateElementsByState(),n.raiseRangeChange()})}},{key:"onRightGripperMouseDown",value:function(t){var n=this;t.preventDefault(),t.stopImmediatePropagation();var i=this.getWidth(),r=this.cloneState(),a=this.minRangeWidth/100*i;s(this.rightGripperEl,t,function(t){var e=G(r.rightPos+t.delta.x,r.leftPos+a,i);n.state=_objectSpread({},n.state,{rightPos:e}),n.updateElementsByState(),n.raiseRangeChange()})}}]),n}(),nt=function(){function i(t){_classCallCheck(this,i);var e=t.names,n=t.colors;this.names=e,this.colors=n,this.el=new q(t.containerEl),this.onToogle=function(){},this.init()}return _createClass(i,[{key:"init",value:function(){var a=this;this.el.addClass("chart-toggle-buttons");for(var o=Object.keys(this.names),t=function(){var t=o[s],e=!0,n=a.names[t],i=X("button").addClass("toggle-button").addClass("toggled").appendTo(a.el),r=X("div").addClass("circle-figure").innerHTML('<svg class="checkmark"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 16 16"\t><g><g><path style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="m 1.0539604,8.009901 3.9009901,5 L 15,3.1896045"/></g></g></svg>').appendTo(i);r.style("border-color",a.colors[t]).style("box-shadow","inset 0px 0px 0px 13px "+a.colors[t]),X("span").appendTo(i).innerText(n),i.el.onclick=function(){(e=!e)?(r.style("box-shadow","inset 0px 0px 0px 13px "+a.colors[t]),i.addClass("toggled")):(r.style("box-shadow","inset 0px 0px 0px 2px "+a.colors[t]),i.removeClass("toggled")),a.onToogle(t)}},s=0;s<o.length;s++)t()}}]),i}();t.createChart=function(S){var M=this,_=S.el,L=S.chartData,R=S.title,A=S.size,t=L.columns,z=L.names,e=L.types,B=L.colors,G=Object.keys(e).filter(function(t){return"x"!==e[t]}),D={},n=!0,i=!1,r=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;D[s[0]]=s}}catch(t){i=!0,r=t}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}var l=Object.keys(e).find(function(t){return"x"===e[t]}),I=D[l],W={disabled:h(G,function(t){return[t,!1]}),visibleRange:{from:0,to:100},elements:{linesElements:{}},transformY:function(t){return t}},Y=function(t){var e=window.innerHeight>window.innerWidth,n=t.offsetWidth||500,i=1;return window.innerHeight&&window.innerWidth&&(i=window.innerHeight/window.innerWidth*.7),{width:n,height:e?n:n*i}},j={left:0,right:0,top:2,bottom:2},V=function(t){return{viewPortSize:{width:t.width-j.left-j.right,height:t.height-j.top-j.bottom-20},svgSize:{width:t.width,height:t.height}}},$=function(t){W.cvp.toggleLine(t),W.miniCVP.toggleLine(t)};!function(){R&&X("div").addClass("title").innerText(R).appendTo(_);var t=X("div").addClass("chart-view-port").style("position","relative").appendTo(_);A||(A=Y(_)),W.size=A;var e=V(A);W.viewPortSize=e.viewPortSize,W.svgSize=e.svgSize;var n=K(e),i=F(n,function(t){return t.viewPortSize}),r=H();window.addEventListener("resize",function(){var t=H();if(!(t.width==r.width&&.9<Math.min(t.height,r.height)/Math.max(t.height,r.height))){r=t;var e=V(Y(_));n.next(e)}});var a=function(e){e=e||{disabled:{},visibleRange:{from:0,to:100}};var t=G.filter(function(t){return!e.disabled[t]}).map(function(t){return D[t]}),n={from:1+(I.length-1)*e.visibleRange.from/100,to:(I.length-1)*e.visibleRange.to/100},i=Math.max.apply(Math,_toConsumableArray(t.map(function(t){return O(t,n.from,n.to+1)}))),r=20*(I.length-2);return[r*e.visibleRange.from/100,r*e.visibleRange.to/100,0,N(i)]}(null),o=_slicedToArray(W.fullBounds=a,4),s=o[2],l=o[3];W.transformY=function(t){return-(t-s)+l};var h=function(t,e,n){var i=e.width,r=e.height,a=[-(n=n||{left:0,right:0,top:2,bottom:2}).left,-n.top,i-n.right,r-n.bottom];return t.style("width",i).style("height",r).attr("viewBox","".concat(a[0]," ").concat(a[1]," ").concat(a[2]," ").concat(a[3])),t},u=X("div").do(function(e){n(function(t){e.style("width",t.viewPortSize.width+"px").style("height",t.viewPortSize.height+"px")})}).style("left",j.left+"px").style("top",j.top+"px").style("position","absolute").appendTo(t),c=U("svg").attr("zoom",1);n(function(t){h(c,t.svgSize,j)});var d=U("g").style("vector-effect","non-scaling-stroke").appendTo(c);W.elements.hGridLinesG=d;var f=U("g").appendTo(c);n(function(t){return f.attr("transform","translate(0, "+(t.viewPortSize.height+16)+")")}),W.elements.xAxisG=f;var v={from:50,to:75},p=new J({containerEl:c.el,chartData:L,size$:i,range:v});p.init(),W.cvp=p,M.viewPortEl=new q(S.viewPortEl),M.viewPort=S.viewPort;var m=new Q({viewPortEl:p.linesGC.el,hoverContainerEl:p.hoverContainerG.el,viewPort:p,viewPortBackdropEl:u.el,size$:i});m.init(),W.cph=m;var g=new Z({containerEl:f.el,xColumn:I});W.xAxis=g;var y=new tt({containerGEl:d.el,containerDivEl:u.el,viewPort:p,size$:i});W.yAxis=y,p.onChangeTransformations=function(t){var e=t.bounds,n=t.hm;g.updateRange(e,W,n)},p.updateRange(v,!0),c.appendTo(t);var w=X("div").addClass("chart-range-selector").appendTo(_);n(function(t){return w.style("width",t.viewPortSize.width+"px")});var x=U("svg").appendTo(w),C={left:0,right:0,top:2,bottom:2},k=30+C.top+C.bottom;n(function(t){return h(x,{width:t.viewPortSize.width,height:k},C)});var b=new J({containerEl:x.el,chartData:L,size$:F(i,function(t){return{width:t.width,height:30}}),strokeWidth:"1px",range:{from:0,to:100}});b.init(),(W.miniCVP=b).updateRange({from:0,to:100},!0);var E=Math.max(2/(I.length-1)*100,1/W.viewPortSize.width*100,5),P=new et({range:v,containerEl:w.el,minRangeWidth:E,width$:F(i,function(t){return t.width})});P.init(),P.onRangeChanged=function(t){m.hide(),p.updateRange(t)};var T=X("div").appendTo(_);new nt({containerEl:T.el,names:z,colors:B}).onToogle=function(t){m.hide(),$(t)},_.__chart_state__=W}()},t.createModeSwitcher=function(){var t="Switch To Night Mode",e=X("button").addClass("mode-switcher-button").innerText(t).appendTo(document.body),n=!1,i=new q(document.body);e.on("click",function(){(n=!n)?(i.addClass("night"),e.innerText("Switch To Day Mode")):(i.removeClass("night"),e.innerText(t))})}}(window),onDocumentReady(function(){fetch("scripts/data.json").then(function(t){return t.json()}).then(function(t){for(var e=0;e<t.length;e++){var n=document.getElementById("chart"+e);n.offsetWidth;window.createChart({el:n,chartData:t[e],title:"Chart #"+e})}window.createModeSwitcher()})});