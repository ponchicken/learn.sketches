parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yqpo":[function(require,module,exports) {
var t=document.getElementById("todo_input"),e=document.getElementById("todo_form"),n=document.getElementById("todo_list"),o=document.getElementById("reverse_button"),r=localStorage.getItem("todos"),a=r?JSON.parse(r):["помыть посуду","полить цветок","покормить кота"];function d(t){var e=document.createElement("li");e.textContent=t,n.appendChild(e);var o=document.createElement("button");o.textContent="✕",o.classList.add("todo-delete-button"),e.appendChild(o);var r=document.createElement("button");r.textContent="̸",r.classList.add("todo-edit-button"),e.appendChild(r)}function l(){localStorage.setItem("todos",JSON.stringify(a)),n.innerHTML="";var t=!0,e=!1,o=void 0;try{for(var r,l=a[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){d(r.value)}}catch(i){e=!0,o=i}finally{try{t||null==l.return||l.return()}finally{if(e)throw o}}}function i(t){if(t.target.classList.contains("todo-delete-button")){for(var e=[],n=0;n<a.length;n++)a[n]!==t.target.previousSibling.textContent&&e.push(a[n]);a=e,l()}else if(event.target.classList.contains("todo-edit-button")){for(var o,r=0;r<a.length;r++)a[r]===t.target.parentNode.firstChild.textContent&&(o=r);a[o]=prompt("?",t.target.parentNode.firstChild.textContent),l()}}function s(){for(var t=[],e=0;e<a.length;e++)t.push(a[a.length-e-1]);a=t,l()}e.addEventListener("submit",function(e){e.preventDefault();var n=t.value;n.length>0&&!a.includes(n)&&(a.push(n),t.value=""),t.focus(),l()}),l(),n.addEventListener("click",i),o.addEventListener("click",s);
},{}]},{},["yqpo"], null)
//# sourceMappingURL=/learn.sketches/scriptv2.ff645414.js.map