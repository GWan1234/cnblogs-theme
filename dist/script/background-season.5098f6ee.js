"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[951],{97:function(t,n,e){function i(t){let n,e=new Image;e.src=t.img;let i=t.size;function s(t,n,e,i,s){this.x=t,this.y=n,this.s=e,this.r=i,this.fn=s}function r(t){let n,e;switch(t){case"x":n=Math.random()*window.innerWidth;break;case"y":n=Math.random()*window.innerHeight;break;case"s":n=Math.random();break;case"r":n=6*Math.random();break;case"fnx":e=-.5+Math.random(),n=function(t,n){return t+.5*e-1.7};break;case"fny":e=1.5+.7*Math.random(),n=function(t,n){return n+e};break;case"fnr":e=.03*Math.random(),n=function(t){return t+e}}return n}s.prototype.draw=function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(e,0,0,i*this.s,i*this.s),t.restore()},s.prototype.update=function(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=r("fnr"),Math.random()>.4?(this.x=r("x"),this.y=0,this.s=r("s"),this.r=r("r")):(this.x=window.innerWidth,this.y=r("y"),this.s=r("s"),this.r=r("r")))},n=function(){this.list=[]},n.prototype.push=function(t){this.list.push(t)},n.prototype.update=function(){for(let t=0,n=this.list.length;t<n;t++)this.list[t].update()},n.prototype.draw=function(t){for(let n=0,e=this.list.length;n<e;n++)this.list[n].draw(t)},n.prototype.get=function(t){return this.list[t]},n.prototype.size=function(){return this.list.length},e.onload=function(){!function(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;let t,e=document.createElement("canvas");e.height=window.innerHeight,e.width=window.innerWidth,e.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;"),e.setAttribute("id","canvas_sakura"),e.style.zIndex="999999999999999999999999999999999999999999",document.getElementsByTagName("body")[0].appendChild(e),t=e.getContext("2d");let i=new n;for(let n=0;n<50;n++){let n,e,o,a,h,u,d,c;e=r("x"),o=r("y"),h=r("r"),a=r("s"),u=r("fnx"),d=r("fny"),c=r("fnr"),n=new s(e,o,a,h,{x:u,y:d,r:c}),n.draw(t),i.push(n)}requestAnimationFrame((function n(){t.clearRect(0,0,e.width,e.height),i.update(),i.draw(t),requestAnimationFrame(n)}))}()}}e.r(n),e.d(n,{default:function(){return i}})}}]);