(this.webpackJsonpgradientmaker=this.webpackJsonpgradientmaker||[]).push([[0],{260:function(t,e,n){},261:function(t,e,n){},262:function(t,e,n){},263:function(t,e,n){},264:function(t,e,n){},265:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(82),i=n.n(o),c=(n(93),n(83)),l=n(84),s=n(87),u=n(86),m=(n(94),n(85)),h=(n(260),function(t){var e=t.bg,n=t.onChange;return r.a.createElement("div",{className:"picker-grid"},r.a.createElement(m.SketchPicker,{color:e,onChange:n}))}),g=(n(261),function(t){t.txt;var e=t.bg1,n=t.bg2,a=t.children,o="linear-gradient(to right, ".concat(e,", ").concat(n,")");return r.a.createElement("div",{className:"main",style:{backgroundImage:o}},a)}),b=(n(262),function(t){var e=t.txt;return r.a.createElement("div",{className:"showoutput"},e)}),d=function(t){var e=t.onClick;return r.a.createElement("div",null,r.a.createElement("button",{onClick:e},"Make Background Groovy!"))},f=(n(263),function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://dev-rahul-majumdar.github.io"},"About Me")))}),v=(n(264),function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"About this website"),r.a.createElement("h4",null,"This website was created as a free-to-use tool so that you can create the css gradient for your website based on your needs. Just pick the colors, copy the css code and start using in your website. ",r.a.createElement("br",null),r.a.createElement("br",null),"If you want to try something fun, click on the button above and start the groove!"),r.a.createElement("h5",{class:"about-me"},"Made with ",r.a.createElement("span",{class:"heart"},"\u2665")," by ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://dev-rahul-majumdar.github.io"},"Rahul Majumdar")))}),E=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).initAnimation=function(e){t.animate?(t._stopAnimation(),e.target.innerHTML="Make Background Groovy!"):(t.timer=setInterval(t._startAnimation,500),e.target.innerHTML="Stop the groove!"),t.animate=!t.animate},t._stopAnimation=function(){clearInterval(t.timer)},t._startAnimation=function(){var e=t._getRandomColor(),n=t._getRandomColor();t.setState({bg1:e,bg2:n})},t.onChange1=function(e,n){t.setState({bg1:e.hex}),t.resetTxt()},t.onChange2=function(e,n){t.setState({bg2:e.hex}),t.resetTxt()},t.resetTxt=function(){var e="linear-gradient(to right, ".concat(t.state.bg1,", ").concat(t.state.bg2,")");t.setState({txt:e})},t.state={bg1:"#9013FE",bg2:"#F5A623",animate:!1},t.state.txt="linear-gradient(to right, ".concat(t.state.bg1,", ").concat(t.state.bg2,")"),t}return Object(l.a)(n,[{key:"_getRandomColor",value:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{txt:this.state.txt,bg1:this.state.bg1,bg2:this.state.bg2},r.a.createElement(f,null),r.a.createElement(h,{bg:this.state.bg1,onChange:this.onChange1}),r.a.createElement(h,{bg:this.state.bg2,onChange:this.onChange2}),r.a.createElement(d,{onClick:this.initAnimation}),r.a.createElement(b,{txt:this.state.txt}),r.a.createElement(v,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},88:function(t,e,n){t.exports=n(265)},93:function(t,e,n){},94:function(t,e,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.5ac2db39.chunk.js.map