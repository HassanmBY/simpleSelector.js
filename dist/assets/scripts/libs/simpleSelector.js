var $=e=>{let o=document.querySelectorAll(e),n={ready:e=>{"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)},log:()=>{console.log(o[0])},logList:()=>{for(node of o)console.log(node)},logNode:()=>{console.log(o)},logCompStyle:()=>{for(node of o)console.log(getComputedStyle(node))},text:e=>{for(node of o)node.textContent=e},html:e=>{for(node of o)node.innerHTML=e},addHtml:e=>{for(node of o)node.innerHTML+=e},append:e=>{for(node of o)node.appendChild(e)},css:e=>{if("object"==typeof e)for(node of o)for(const o in e)node.style[o]=e[o];else for(node of o)return`${e}: ${node.style[e]||"Not defined"}`},hide:()=>{for(node of o)node.style.display="none",node.style.visibility="hidden"},show:()=>{for(node of o)"LI"==node.tagName|"li"?node.style.display="list-item":node.style.display="block",node.style.visibility="visible"},hideShow:()=>{for(node of o)"none"==getComputedStyle(node).display?$(e).show():$(e).hide()},addClass:e=>{for(node of o)node.classList.add(e)},removeClass:e=>{for(node of o)node.classList.remove(e)},toggleClass:e=>{for(node of o)node.classList.toggle(e)},replaceClass:(e,n)=>{for(node of o)node.classList.replace(e,n)},classList:e=>{for(node of o)return node.classList},hasClass:e=>{for(node of o)return node.classList.contains(e)},click:e=>{for(node of o)node.addEventListener("click",e)},ajax:(e,o,n,d,t)=>fetch(e,o).then(n).then(d).catch(t),create:(e,o,n,d)=>{let t=document.createElement(e);return o&&t.classList.add(o),d&&t.setAttribute("id",d),n&&(t.textContent=n),t}};return o&&n||o||n};
//# sourceMappingURL=simpleSelector.js.map