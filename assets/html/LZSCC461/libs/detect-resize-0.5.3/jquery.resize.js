!function(e){function i(){if(!s){var e=(L||"")+".resize-triggers { "+(y||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),i.appendChild(t),s=!0}}var t,r,n=document.attachEvent,s=!1,o=e.fn.resize;if(e.fn.resize=function(e){return this.each(function(){this==window?o.call(jQuery(this),e):addResizeListener(this,e)})},e.fn.removeResize=function(e){return this.each(function(){removeResizeListener(this,e)})},!n){var a=(r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)},function(e){return r(e)}),_=(t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout,function(e){return t(e)});function d(e){var i=e.__resizeTriggers__,t=i.firstElementChild,r=i.lastElementChild,n=t.firstElementChild;r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,n.style.width=t.offsetWidth+1+"px",n.style.height=t.offsetHeight+1+"px",t.scrollLeft=t.scrollWidth,t.scrollTop=t.scrollHeight}function c(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height}function l(e){var i=this;d(this),this.__resizeRAF__&&_(this.__resizeRAF__),this.__resizeRAF__=a(function(){c(i)&&(i.__resizeLast__.width=i.offsetWidth,i.__resizeLast__.height=i.offsetHeight,i.__resizeListeners__.forEach(function(t){t.call(i,e)}))})}var h=!1,m="",f="animationstart",g="Webkit Moz O ms".split(" "),u="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),z="",w=document.createElement("fakeelement");if(w.style.animationName!==undefined&&(h=!0),!1===h)for(var v=0;v<g.length;v++)if(w.style[g[v]+"AnimationName"]!==undefined){(z=g[v])+"Animation",m="-"+z.toLowerCase()+"-",f=u[v],h=!0;break}var p="resizeanim",L="@"+m+"keyframes "+p+" { from { opacity: 0; } to { opacity: 0; } } ",y=m+"animation: 1ms "+p+"; "}window.addResizeListener=function(e,t){n?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),i(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),d(e),e.addEventListener("scroll",l,!0),f&&e.__resizeTriggers__.addEventListener(f,function(i){i.animationName==p&&d(e)})),e.__resizeListeners__.push(t))},window.removeResizeListener=function(e,i){n?e.detachEvent("onresize",i):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(i),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",l),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))}}(jQuery);