(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),o=n.n(r),c=(n(14),n(3)),s=n(4),l=n(1),u=n(5),m=n(6),d=n(8),h=(n(15),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).createTasks=a.createTasks.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return i.a.createElement("li",{key:e.key},e.text,i.a.createElement("button",{type:"button",onClick:function(){return t.delete(e.key)}},"X"))}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{className:"theList"},i.a.createElement(d.a,{duration:250,easing:"ease-out"},e))}}]),n}(a.Component)),f=(n(16),n(17),function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("a",{href:"https://github.com/rohit1204",target:"__blank",className:"github"},i.a.createElement("ion-icon",{name:"logo-github"})))}),v=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={items:[]},a.addItem=a.addItem.bind(Object(l.a)(a)),a.deleteItem=a.deleteItem.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"addItem",value:function(e){if(" "!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}})),this._inputElement.value=" "}console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"todoListMain"},i.a.createElement("h1",{className:"title"},"To-Do List "),i.a.createElement("div",{className:"header"},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{ref:function(t){return e._inputElement=t},placeholder:"enter task"}),i.a.createElement("button",{type:"submit"},"add"))),i.a.createElement(h,{entries:this.state.items,delete:this.deleteItem}),i.a.createElement(f,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.59fd1206.chunk.js.map