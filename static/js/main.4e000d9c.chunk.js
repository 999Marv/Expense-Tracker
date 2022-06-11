(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(18),n(5)),s=n(2),i=(n(19),n(1)),r=(n(20),n(21),n(0));var j=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:".expense-date__month",children:t}),Object(r.jsx)("div",{lassName:".expense-date__day",children:n}),Object(r.jsx)("div",{lassName:".expense-date__year",children:a})]})};n(23);var o=function(e){var t="card ".concat(e.className);return Object(r.jsx)("div",{className:t,children:e.children})};var u=function(e){var t=Object(i.useState)(e.title),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(j,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsxs)("h2",{children:[a," ",Object(r.jsx)("p",{children:e.type})]}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(r.jsx)("button",{onClick:function(){c("Updated")},children:"Change Title"})]})},d=(n(24),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{onChange:function(t){e.onChangedFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),b=n(9),x=(n(25),n(26),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})});var O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(x,{value:e.value,maxValue:n,label:e.label},e.label)}))})},p=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(b.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})};var v=function(e){var t=Object(i.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.item.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(o,{className:"expenses",children:[Object(r.jsx)(d,{selected:a,onChangedFilter:function(e){c(e)}}),Object(r.jsx)(p,{expenses:l}),e.item.map((function(e){return Object(r.jsx)(u,{title:e.title,amount:e.amount,type:e.type,date:e.date},e.id)}))]})})},h=n(6),m=(n(27),n(28),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),j=Object(s.a)(l,2),o=j[0],u=j[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],O=b[1],p=Object(i.useState)(""),v=Object(s.a)(p,2),h=v[0],m=v[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+o,date:new Date(x),type:h};e.onSaveExpenseData(n),c(""),u(""),O("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Type of Expense"}),Object(r.jsxs)("select",{name:"Type",required:!0,onChange:function(e){m(e.target.value)},children:[Object(r.jsx)("option",{value:"Necessity",children:"Necessity"}),Object(r.jsx)("option",{value:"Bills",children:"Bills"}),Object(r.jsx)("option",{value:"Shopping",children:"Shopping"})]})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:o,onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2022-01-01",max:"2025-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),f=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(r.jsx)(m,{onSaveExpenseData:function(t){var n=Object(h.a)(Object(h.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})},g=[{id:"e1",title:"Toilet Paper",type:"Necessity",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",type:"Shopping",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",type:"Bills",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",type:"Shopping",amount:450,date:new Date(2021,5,12)}];var N=function(){var e=Object(i.useState)(g),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(v,{item:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(N,{}))}},[[29,1,2]]]);
//# sourceMappingURL=main.4e000d9c.chunk.js.map