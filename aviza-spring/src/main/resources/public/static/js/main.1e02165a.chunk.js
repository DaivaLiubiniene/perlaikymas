(this["webpackJsonpaviza-react"]=this["webpackJsonpaviza-react"]||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(31),i=a.n(r),l=a(8),o=a(9),j=a(11),d=a(10),b=a(2),h=a(12),u=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"pt-3",children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:[Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item p-1",children:Object(n.jsx)(h.c,{className:"nav-link",to:"/",children:"Holidays"})}),Object(n.jsx)("li",{className:"nav-item p-1",children:Object(n.jsx)(h.c,{className:"nav-link",to:"/countries",children:"Countries"})}),Object(n.jsx)("li",{className:"nav-item p-1",children:Object(n.jsx)(h.c,{className:"nav-link",to:"/years",children:"Years"})})]})})]})})}}]),a}(s.Component),O=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"ml-2",children:"Page not found"}),Object(n.jsx)(h.b,{to:"/",className:"btn btn-primary ml-2",children:"HomePage"})]})},m=a(13),p=a(15),x=a.n(p),v=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={holidays:[]},n.refreshHolidays=n.refreshHolidays.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshHolidays()}},{key:"refreshHolidays",value:function(){var e=this;x.a.get("/aviza-spring/holidays/all").then((function(t){console.log(t),e.setState({holidays:t.data})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"Holidays"}),Object(n.jsx)("div",{className:"row",children:this.state.holidays.map((function(e,t){return Object(n.jsxs)("div",{className:"col-6",children:[Object(n.jsx)("img",{src:e.image,className:"card-img-top",alt:"pav"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:e.name}),Object(n.jsxs)("p",{className:"card-text",children:[" ",e.description," "]}),Object(n.jsxs)("p",{className:"card-text",children:[" ",e.holidayType," "]}),Object(n.jsx)("a",{href:"#0",className:"btn btn-primary",children:"Details"})]})]},t)}))})]})}}]),a}(s.Component),f=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={countries:[]},n.refreshCountries=n.refreshCountries.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshCountries()}},{key:"refreshCountries",value:function(){var e=this;x.a.get("/aviza-spring/countries/all").then((function(t){console.log(t),e.setState({countries:t.data})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"Countries"}),Object(n.jsx)("div",{className:"row",children:this.state.countries.map((function(e,t){return Object(n.jsxs)("div",{className:"col-6",children:[Object(n.jsx)("img",{src:e.flag,className:"card-img-top",alt:"pav"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:e.name}),Object(n.jsxs)("p",{className:"card-text",children:[" President: ",e.president," "]}),Object(n.jsx)("a",{href:"#0",className:"btn btn-primary",children:"Details"})]})]},t)}))})]})}}]),a}(s.Component),y=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={years:[]},n.refreshYears=n.refreshYears.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshYears()}},{key:"refreshYears",value:function(){var e=this;x.a.get("/aviza-spring/years/all").then((function(t){console.log(t),e.setState({years:t.data})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"Years"}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Year"}),Object(n.jsx)("th",{children:"Number of days"}),Object(n.jsx)("th",{children:"Eastern horoscope"}),Object(n.jsx)("th",{children:"\xa0"})]})}),this.state.years.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.year}),Object(n.jsxs)("td",{children:[e.numberOfDays," "]}),Object(n.jsxs)("td",{children:[e.horoscope," "]}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"#0",children:"Details"})})]},t)}))]})]})}}]),a}(s.Component),N=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(u,{}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",component:v}),Object(n.jsx)(b.a,{path:"/countries",component:f}),Object(n.jsx)(b.a,{path:"/years",component:y}),Object(n.jsx)(b.a,{path:"*",component:O}),Object(n.jsx)(b.a,{component:O})]})]})}}]),a}(s.Component);a(59),a(60),a(62);document.title="\u0160vent\u0117s",i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(h.a,{basename:"/aviza-spring",children:Object(n.jsx)(N,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1e02165a.chunk.js.map