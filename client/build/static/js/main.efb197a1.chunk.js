(this["webpackJsonpdata-visualisation"]=this["webpackJsonpdata-visualisation"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(21),i=a.n(c),r=(a(27),a(28),a(5)),l=a(0),o=function(e){var t=e.metricData;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"col-12 mb-2",children:[Object(l.jsx)("span",{className:"ps-4 field",children:"Measure : "}),Object(l.jsx)("span",{className:"details",children:t&&t.measure})]}),Object(l.jsx)("div",{className:"col-12 mb-2",children:Object(l.jsxs)("div",{className:"ps-4",children:[Object(l.jsx)("span",{className:"field",children:"Dimensions : "})," ",Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row d-flex justify-content-between ps-2",children:t&&t.dimensions.map((function(e,t){return Object(l.jsxs)("div",{className:"col-12 col-md-3 pe-3 dimensions",children:[Object(l.jsx)("span",{className:"field",children:e.name+" : "})," ",Object(l.jsx)("span",{className:"details",children:e.value})]},t)}))})]})})]})},d=(a(30),a(2)),u=a(22),b=a(11),j=a.n(b);d.d.register(d.c,d.i,d.k,d.h,d.o,d.p,d.f);var m={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Data Visualisation"}},elements:{point:{radius:0}}},g=function(e){var t=e.metricData,a=Object(n.useState)([]),s=Object(r.a)(a,2),c=s[0],i=s[1];Object(n.useEffect)((function(){j.a.post("https://data-visualisation-cliff.herokuapp.com/getDataItem",{metricId:t?t._id:""}).then((function(e){console.log(e.data),i(e.data.metricData)})).catch((function(e){return console.log(e)}))}),[t]);var o={labels:c.map((function(e){var t=new Date(e.timestamp);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()})),datasets:[{label:"Anomaly",data:c.map((function(e){return 0!==e.line_status?e.original_value:null})),borderColor:"rgb(255, 0,0)",backgroundColor:"rgba(255, 0,0)"},{label:"Original value",data:c.map((function(e){return 3===e.line_status||0===e.line_status?e.original_value:null})),borderColor:"rgb(0, 0,255)",backgroundColor:"rgba(0, 0,255)"},{label:"Min-Band",data:c.map((function(e){return e.min_band})),borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"},{label:"Max-band",data:c.map((function(e){return e.max_band})),borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"},{label:"Forcasted Value",data:c.map((function(e){return e.forecasted_value})),borderColor:"rgba(0,0,0, 0.5)",backgroundColor:"rgba(0,0,0, 0.5)"}]};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"col-12 py-5",children:Object(l.jsx)(u.a,{options:m,data:o})})})},p=(a(49),function(e){for(var t=e.currentPage,a=e.noOfPages,n=e.paginate,s=[],c=1;c<=a;c++)s.push(c);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{style:{marginBottom:"100px"},className:"pagination justify-content-center mt-4",children:s.map((function(e){return Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("div",{onClick:function(){return n(e)},className:e===t?"active-page page-link":"page-link",children:e})},e)}))})})}),h=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(1),d=Object(r.a)(i,2),u=d[0],b=d[1];Object(n.useEffect)((function(){j.a.get("https://data-visualisation-cliff.herokuapp.com/getMetrics").then((function(e){console.log(e),c(e.data)})).catch((function(e){return console.log(e)}))}),[]);var m=s?s.length:1;return Object(l.jsx)(l.Fragment,{children:0===s.length?Object(l.jsx)("div",{class:"text-center",style:{position:"absolute",top:"50%",left:"50%",marginTop:"-25px",marginRight:"-25px"},children:Object(l.jsx)("div",{class:"spinner-border text-primary",style:{width:"50px",height:"50px"},role:"status",children:Object(l.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("span",{className:"navbar-brand mb-0 h1 mx-auto ms-md-5",children:["Data Visualisation"," "]})})}),Object(l.jsx)("div",{className:"container",style:{paddingTop:"70px"},children:Object(l.jsxs)("div",{className:"row mx-3 d-flex justify-content-center",style:{background:"#fff"},children:[Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("h4",{className:"pt-4 ps-3 pb-2",style:{color:"#333"},children:"Metric Data"})}),Object(l.jsx)(o,{metricData:s[u-1]}),Object(l.jsx)(g,{metricData:s[u-1]}),Object(l.jsx)(p,{noOfPages:m,currentPage:u,paginate:function(e){return b(e)}})]})})]})})};var f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h,{})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};a(50);i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),x()}},[[51,1,2]]]);
//# sourceMappingURL=main.efb197a1.chunk.js.map