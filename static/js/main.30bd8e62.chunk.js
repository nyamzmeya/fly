(this.webpackJsonpfly=this.webpackJsonpfly||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),A=a(16),r=a.n(A),s=(a(57),a(28)),i=a(48),u=a(6),l={isAuth:localStorage.getItem("isAuth")||!1},o=function(e){return function(t){t(function(e){return{type:"SET-AUTH",isAuth:e}}(e)),localStorage.setItem("isAuth",e)}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH":return Object(u.a)(Object(u.a)({},e),{},{isAuth:t.isAuth});default:return e}},g=a(17).default,j=Object(s.b)({flyPage:g,authPage:d}),b=Object(s.c)(j,Object(s.a)(i.a)),p=a(13),h=a(25),f=a(5),O=a(23),m=a(24),v=a(27),x=a(26),B=a(14),w=(a(45),a(3)),E=function(e){var t=Object(n.useState)(""),a=Object(B.a)(t,2),c=a[0],A=a[1],r=Object(n.useState)(""),s=Object(B.a)(r,2),i=s[0],u=s[1],l=Object(n.useState)(""),o=Object(B.a)(l,2),d=o[0],g=o[1],j=Object(n.useState)(""),b=Object(B.a)(j,2),p=b[0],h=b[1],f=Object(n.useState)(""),O=Object(B.a)(f,2),m=O[0],v=O[1];return Object(w.jsxs)("div",{className:"form",children:[Object(w.jsx)("div",{className:"form_text",children:"Simple Flight Check"}),Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){var a=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e),n=t.length>=8,c=/^[a-zA-Z]+$/.test(t);if(a&&n&&c)return g(""),h(""),v(""),!0;!a&&n&&c?(g("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"),h(""),v("")):!n&&a&&c?(g(""),h("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),v("")):!c&&a&&n?(g(""),h(""),v("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b")):!a||n||c?a||!n||c?a||n||!c?(g("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"),h("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),v("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b")):(g("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"),h("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),v("")):(g("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"),h(""),v("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b")):(g(""),h("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),v("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b"))}(c,i)&&e.setAuth(!0)},children:[Object(w.jsxs)("div",{class:"form-group",children:[Object(w.jsx)("label",{for:"email",className:d?"danger":null,children:"\u041b\u043e\u0433\u0438\u043d:"}),Object(w.jsx)("input",{type:"text",onChange:function(e){return A(e.target.value)},className:d?"danger_in":null}),Object(w.jsx)("div",{className:"text-danger",children:d})]}),Object(w.jsxs)("div",{class:"form-group",children:[Object(w.jsx)("label",{for:"comment",className:m||p?"danger":null,children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(w.jsx)("input",{type:"password",onChange:function(e){return u(e.target.value)},className:m||p?"danger_in":null}),Object(w.jsxs)("div",{className:"text-danger",children:[p,Object(w.jsx)("br",{}),m]})]}),Object(w.jsx)("input",{type:"submit",value:"\u0412\u043e\u0439\u0442\u0438",class:"btn"})]})]})},y=function(e){Object(v.a)(a,e);var t=Object(x.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(w.jsx)("div",{className:"auth",children:Object(w.jsx)(E,{setAuth:this.props.getAuth})})}}]),a}(c.a.Component),C=Object(p.b)((function(e){return{isAuth:e.authPage.isAuth}}),{getAuth:o})(y),F=(a(46),a(17));function R(e){var t=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a,", ").concat(n)}var S=function(e){var t=Object(n.useState)(!0),a=Object(B.a)(t,2),c=a[0],A=a[1];return Object(w.jsxs)("div",{className:"record",children:[Object(w.jsx)("img",{src:"data:image/png;base64,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"}),Object(w.jsxs)("div",{className:"info",children:[Object(w.jsxs)("div",{className:"info_1",children:[e.origin,Object(w.jsx)("span",{children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgBldFBCgAhCAVQHeZA7duMJxg6aado330KnYQWgwTZBzcfHogCbFJKCTq2v8CXbDF61ER5TIoxVjdcYZzF6/RBRB5EpBsOMyC01s5WZebce09EVN3H+SPttnCFNK4/WqT5AFAnRIBFnIkdAAAAAElFTkSuQmCC"})}),e.destination]}),Object(w.jsxs)("div",{className:"info_2",children:[R(e.date),Object(w.jsx)("span",{children:"-"}),e.time]}),Object(w.jsx)("div",{className:"info_3",children:e.company})]}),Object(w.jsxs)("div",{className:"price",children:[Object(w.jsx)("button",{onClick:function(){return t=e.detail_url,void(c?(e.setFav(t),A(!1)):(e.delFav(t),A(!0)));var t},className:"add_f",children:c?Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUCAYAAABmvqYOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGASURBVHgBrZTNccIwEIUlkQNHd5B0EDoAV0BKgBJ8Ay6GA/jopAKcDkgFkA7oIE4F8dG+2HkvyBmN4x8F/GY0Wmuev5W1K0tRURAED1LKaZ7njlIqKYribblcxlXfdrsdDQaDcZtPmlBMe4wRxgHmGEm4NkF8RuzxZdOH9QhzUvowThibMok0wEeYD1mWbaDE3MFut/MBmCGcE4z4ebFYvFS/xvC5TFDC99zparXaiAbBw5fom8H32uIL+VWAuz+7xvgQFvJ937HxgffFmigWT1zOqlPV42pRxGLfsdp4iEWPwtGxexzu/FNXuzdpXqyGwyHb7sn2PLukORMkeFee57FPIyTxRQ8CZ43pxFZUeoEtOEGV1+IG8X2cwjhNU4/Pvzc0DEMHi0eEvMZr8U9p8BSX0C27SpqGaxPUgf/Ar0nQBK6FVxKckWDeAo4AfqwDN8JtEnSBKdUEZ4uii1yEI/7YqmBM921gaxFWJjDjLklhKb3bsbhckLnoW/qfbq1vto4OI5tqwkUAAAAASUVORK5CYII="}):Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgBrdLBbcJAEAXQmXG4RnYHbiEdhJxyJB34GiVSQgWICjhFuUIHHJEQwh1ACdsBewZ2hxkEEgLsXcBfsrRefz2P1kY4ZPX+n9Pa/TD6DgDmsmURcOxbST+bfJqzXo+RpQepXEZ65WkP98W3vwLRDw6lixBg8Tz7HgV6Vnq/2kN9M262iyrwGJlmyMAF1Mdy6+mFaON6IVATAWpSPRqScgcajJ41QcSUNyYVlA00GWZDyDCGBiO/U0neu76sLTQRmVI9ysquZaL24zBbTtyHeEY/FGTTr+Ue5nvPV0By7WzaXeodnj5avQ5ypGQOiDnERgZhL6BMeNzC885N8BXwKhoNV4CVaBCuAWvRSjgABtELOALUUAhVQCFZljGgZgfQYLHLYPr5QAAAAABJRU5ErkJggg=="})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{children:"Price:"}),function(e,t){var a=Math.round(e*t);return"".concat(Math.trunc(a/1e3)," ").concat(a-1e3*Math.trunc(a/1e3)," \u20bd")}(e.price,e.cur)]})]})]})},U=function(e){var t=e.flys.map((function(t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{origin:e.origin,destination:e.destination,date:e.date,time:t.departure_time,company:t.airlines,price:t.price,detail_url:t.detail_url,cur:e.cur,setFav:e.setFav,delFav:e.delFav}),Object(w.jsx)("hr",{className:"line"})]})}));return Object(w.jsx)("div",{className:"items",children:t})},N=a.p+"static/media/1488.372b42cf.gif",T=a(51),M=a.n(T),K=a.p+"static/media/Rectangle 23.fd4dc267.png",H=a.p+"static/media/Rectangle 24.1bf6a81c.png",I=a.p+"static/media/Rectangle 28.8121288e.png",L=a.p+"static/media/Intersect.8c061ca4.png",D=function(e){Object(v.a)(a,e);var t=Object(x.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.date!==e.date&&this.props.getFlys(this.props.date.toLocaleDateString("pt-br").split("/").reverse().join("-"))}},{key:"render",value:function(){var e,t=this;return this.props.loading||this.props.flys?this.props.loading&&!this.props.flys?e=Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:N})}):!this.props.loading&&this.props.flys&&(e=Object(w.jsx)(U,{flys:this.props.flys,destination:this.props.destination,origin:this.props.origin,cur:this.props.cur,date:this.props.date,setFav:this.props.setFav,delFav:this.props.delFav})):e=null,Object(w.jsxs)("div",{className:"app-wrapper",children:[Object(w.jsxs)("div",{className:"log",children:[Object(w.jsx)("div",{children:"\u0412\u044b\u0439\u0442\u0438"}),Object(w.jsx)("button",{onClick:function(){return t.props.getAuth(!1)},children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgBrZXRUcMwDIblEK55w0xAGKEbtBsUeADueEgnYZT0gbvy1HaDZgNGIEyAeao5ehWWG8Dp2aZR+z8kdk7+7EiyJMCRHJUSsky639TzfQ0MCQu8m+YCoTTDgcemxk/dV4uxgg5K7APhMQC16golpbKYS1zpgiaIWMB6U7UsNl8fwFAKWv/5dN2r1OzmbZ+FFI/YnyTAlOhlL+e301eKz9HA5L5mSEFf+uAssJpcKRQwNMM6BGe7gvI7Bk9ji30XZlcGPjbQuQMf0qZRMAUIEHLYX1v4qOwHXeEEqLMoDYMnpgCZ16W8frqAmE6SXCRiQWcBuv5bv8d9bDeYPQQvTFNjJi70p2ixs6KBLs0w34UeBI5B2WAnsF4o6V8f+/Qb2EghErS7WOl3mlCym1fVghzSQUyVIn8NAjb8DkInRbBp4xWngwh3YmtDcnrWsjAdhAP+Bq4wo0GGoLnwAAAAAElFTkSuQmCC"})})]}),Object(w.jsxs)("div",{className:"card",children:[Object(w.jsxs)("div",{className:"card_text",children:[Object(w.jsxs)("div",{className:"card_text_1",children:["\u0412\u044b\u043b\u0435\u0442\u044b",Object(w.jsx)("span",{children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgBjdBtDYMwEAbgHp0AJGBhEmqiSf/NwSRsFuZg/yoDCeCASkACd3AQvnq9NzkK5HnTphBjHMwSF0JIRkjFa4PTYrEpYYeTNAWgB4OWCyl3JFhfNAXYf5QKcN5KKlywVLjFuUIW7wodTo3zr4ycF8PRWvuTjvHF5cPQee970EL6D1p4wRI84BLcsAbOWAspdM9vDaQ8cJ4I6xKkTAu8Y1/pLLYXAAAAAElFTkSuQmCC"})}),"SVO - JFK"]}),Object(w.jsx)(M.a,{value:this.props.date,format:"dd-MMM-y",onChange:function(e){t.props.updateDate(e)}})]}),Object(w.jsxs)("div",{className:"slider",children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:K})}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:H})}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:I})}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:L})})]}),Object(w.jsxs)("div",{className:"fav",children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435: ",Object(w.jsx)("span",{children:this.props.fav.length})," \u0440\u0435\u0439\u0441\u043e\u0432"]}),e]})]})}}]),a}(c.a.Component),Y=Object(p.b)((function(e){return{flys:e.flyPage.flys,loading:e.flyPage.loading,origin:e.flyPage.origin,destination:e.flyPage.destination,cur:e.flyPage.cur,date:e.flyPage.date,fav:e.flyPage.fav}}),{getFlys:F.getFlys,setFav:F.setFav,delFav:F.delFav,updateDate:F.updateDate,getAuth:o})(D);var Q=Object(p.b)((function(e){return{isAuth:e.authPage.isAuth}}),{})((function(e){return Object(w.jsx)(h.a,{children:Object(w.jsx)(f.a,{render:function(){return e.isAuth?Object(w.jsx)(f.a,{component:Y}):Object(w.jsx)(f.a,{component:C})}})})}));a(100);r.a.render(Object(w.jsx)(h.a,{children:Object(w.jsx)(p.a,{store:b,children:Object(w.jsx)(Q,{})})}),document.getElementById("root")),window.store=b},17:function(e,t,a){"use strict";a.r(t),a.d(t,"setFlys",(function(){return b})),a.d(t,"setDate",(function(){return p})),a.d(t,"setFav",(function(){return h})),a.d(t,"delFav",(function(){return f})),a.d(t,"setCur",(function(){return O})),a.d(t,"setLoad",(function(){return m})),a.d(t,"getFlys",(function(){return v})),a.d(t,"updateDate",(function(){return x}));var n=a(32),c=a.n(n),A=a(49),r=a(52),s=a(6),i=a(33),u=a.n(i),l=u.a.create({params:{departure_airport_code:"SVO",arrival_airport_code:"JFK"},headers:{"x-rapidapi-key":"7e539976e8msh2b15b4a0045bd0ap112480jsnb12c58546671","x-rapidapi-host":"google-flights-search.p.rapidapi.com"}}),o=u.a.create({baseURL:"https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=3060313687be6d13ad10"}),d=function(e){return l.get("https://google-flights-search.p.rapidapi.com/search?departure_airport_code=SVO&arrival_airport_code=JFK&departure_date=".concat(e)).then((function(e){return console.log(e.data.flights),e.data.flights}))},g=function(){return o.get().then((function(e){return e.data.USD_RUB}))},j={date:new Date,fav:[],flys:null,origin:"Moscow (SVO)",destination:"New York City (JFK)",cur:null,loading:!1},b=function(e){return{type:"SET-FLY",flys:e}},p=function(e){return{type:"SET-DATE",date:e}},h=function(e){return{type:"SET-FAV",detail_url:e}},f=function(e){return{type:"DEL-FAV",detail_url:e}},O=function(e){return{type:"SET-CUR",cur:e}},m=function(e){return{type:"SET-LOAD",loading:e}},v=function(e){return function(){var t=Object(A.a)(c.a.mark((function t(a){var n,A;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(m(!0)),t.next=3,d(e);case 3:return n=t.sent,a(b(n)),t.next=7,g();case 7:A=t.sent,a(O(A)),a(m(!1));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(t){t(p(e))}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-FLY":return Object(s.a)(Object(s.a)({},e),{},{flys:t.flys});case"SET-DATE":return Object(s.a)(Object(s.a)({},e),{},{date:t.date});case"SET-FAV":return Object(s.a)(Object(s.a)({},e),{},{fav:[].concat(Object(r.a)(e.fav),[t.detail_url])});case"DEL-FAV":return Object(s.a)(Object(s.a)({},e),{},{fav:e.fav.filter((function(e){return e!=t.detail_url}))});case"SET-CUR":return Object(s.a)(Object(s.a)({},e),{},{cur:t.cur});case"SET-LOAD":return Object(s.a)(Object(s.a)({},e),{},{loading:t.loading});default:return e}}},45:function(e,t,a){},46:function(e,t,a){},57:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.30bd8e62.chunk.js.map