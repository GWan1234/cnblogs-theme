"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[8663],{3600:function(t,i,s){s.r(i),s.d(i,{default:function(){return h}});class o{constructor(t,i){this.x=0,this.y=0,this.set(t,i)}set(t,i){this.x=t||0,this.y=i||0}copy(t){return this.x=t.x||0,this.y=t.y||0,this}add(t,i){return this.x+=t||0,this.y+=i||0,this}subtract(t,i){return this.x-=t||0,this.y-=i||0,this}flipY(){return this.y*=-1,this}}class n{_w=window;_b=document.body;_d=document.documentElement;constructor(t){this._canvas=null,this._context=null,this._width=0,this._height=0,this._scroll=0,this._ribbons=[],this._options={colorSaturation:t.colorSaturation||"80%",colorBrightness:t.colorBrightness||"60%",colorAlpha:t.colorAlpha||.65,colorCycleSpeed:t.colorCycleSpeed||6,verticalPosition:t.verticalPosition||"center",horizontalSpeed:t.horizontalSpeed||150,ribbonCount:t.ribbonCount||3,strokeSize:t.strokeSize||0,parallaxAmount:t.parallaxAmount||-.5,animateSections:t.animateSections||!0},this._onDraw=this._onDraw.bind(this),this._onResize=this._onResize.bind(this),this._onScroll=this._onScroll.bind(this),this.init()}random(){if(1===arguments.length){if(Array.isArray(arguments[0])){let t=Math.round(this.random(0,arguments[0].length-1));return arguments[0][t]}return this.random(0,arguments[0])}return 2===arguments.length?Math.random()*(arguments[1]-arguments[0])+arguments[0]:0}screenInfo(t){let i=Math.max(0,this._w.innerWidth||this._d.clientWidth||this._b.clientWidth||0),s=Math.max(0,this._w.innerHeight||this._d.clientHeight||this._b.clientHeight||0);return{width:i,height:s,ratio:i/s,centerx:i/2,centery:s/2,scrollx:Math.max(0,this._w.pageXOffset||this._d.scrollLeft||this._b.scrollLeft||0)-(this._d.clientLeft||0),scrolly:Math.max(0,this._w.pageYOffset||this._d.scrollTop||this._b.scrollTop||0)-(this._d.clientTop||0)}}init(){try{this._canvas=document.createElement("canvas"),this._canvas.style.display="block",this._canvas.style.position="fixed",this._canvas.style.margin="0",this._canvas.style.padding="0",this._canvas.style.border="0",this._canvas.style.outline="0",this._canvas.style.left="0",this._canvas.style.top="0",this._canvas.style.width="100%",this._canvas.style.height="100%",this._canvas.style["z-index"]="-1",this._canvas.id="bgCanvas",this._onResize(),this._context=this._canvas.getContext("2d"),this._context.clearRect(0,0,this._width,this._height),this._context.globalAlpha=this._options.colorAlpha,window.addEventListener("resize",this._onResize),window.addEventListener("scroll",this._onScroll),document.body.appendChild(this._canvas)}catch(t){return}this._onDraw()}addRibbon(){let t=Math.round(this.random(1,9))>5?"right":"left",i=1e3,s=200,n=this._width+s,h=0,e=0,a="right"===t?-200:n,l=Math.round(this.random(0,this._height));/^(top|min)$/i.test(this._options.verticalPosition)&&(l=200),/^(middle|center)$/i.test(this._options.verticalPosition)&&(l=this._height/2),/^(bottom|max)$/i.test(this._options.verticalPosition)&&(l=this._height-s);let r=[],c=new o(a,l),_=new o(a,l),d=null,p=Math.round(this.random(0,360)),b=0;for(;!(i<=0||(i--,h=Math.round((1*Math.random()-.2)*this._options.horizontalSpeed),e=Math.round((1*Math.random()-.5)*(.25*this._height)),d=new o,d.copy(_),"right"===t&&(d.add(h,e),_.x>=n))||"left"===t&&(d.subtract(h,e),_.x<=-200));)r.push({point1:new o(c.x,c.y),point2:new o(_.x,_.y),point3:d,color:p,delay:b,dir:t,alpha:0,phase:0}),c.copy(_),_.copy(d),b+=4,p+=this._options.colorCycleSpeed;this._ribbons.push(r)}_drawRibbonSection(t){if(t){if(t.phase>=1&&t.alpha<=0)return!0;if(t.delay<=0){if(t.phase+=.02,t.alpha=1*Math.sin(t.phase),t.alpha=t.alpha<=0?0:t.alpha,t.alpha=t.alpha>=1?1:t.alpha,this._options.animateSections){let i=.1*Math.sin(1+t.phase*Math.PI/2);"right"===t.dir?(t.point1.add(i,0),t.point2.add(i,0),t.point3.add(i,0)):(t.point1.subtract(i,0),t.point2.subtract(i,0),t.point3.subtract(i,0)),t.point1.add(0,i),t.point2.add(0,i),t.point3.add(0,i)}}else t.delay-=.5;let i=this._options.colorSaturation,s=this._options.colorBrightness,o="hsla("+t.color+", "+i+", "+s+", "+t.alpha+" )";this._context.save(),0!==this._options.parallaxAmount&&this._context.translate(0,this._scroll*this._options.parallaxAmount),this._context.beginPath(),this._context.moveTo(t.point1.x,t.point1.y),this._context.lineTo(t.point2.x,t.point2.y),this._context.lineTo(t.point3.x,t.point3.y),this._context.fillStyle=o,this._context.fill(),this._options.strokeSize>0&&(this._context.lineWidth=this._options.strokeSize,this._context.strokeStyle=o,this._context.lineCap="round",this._context.stroke()),this._context.restore()}return!1}_onDraw(){for(let t=0,i=this._ribbons.length;t<i;++t)this._ribbons[t]||this._ribbons.splice(t,1);this._context.clearRect(0,0,this._width,this._height);for(let t=0;t<this._ribbons.length;++t){let i=this._ribbons[t],s=i.length,o=0;for(let t=0;t<s;++t)this._drawRibbonSection(i[t])&&o++;o>=s&&(this._ribbons[t]=null)}this._ribbons.length<this._options.ribbonCount&&this.addRibbon(),requestAnimationFrame(this._onDraw)}_onResize(t){let i=this.screenInfo(t);this._width=i.width,this._height=i.height,this._canvas&&(this._canvas.width=this._width,this._canvas.height=this._height),this._canvas&&this._context&&(this._context.globalAlpha=this._options.colorAlpha)}_onScroll(t){let i=this.screenInfo(t);this._scroll=i.scrolly}}function h(t){new n(t)}}}]);