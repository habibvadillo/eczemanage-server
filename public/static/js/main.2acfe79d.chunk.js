(this["webpackJsonpEczeManage-client"]=this["webpackJsonpEczeManage-client"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(30),s=n.n(i),r=(n(36),n(20)),l=n(14),o=n(3),u=n(2),j=(n(37),n(0)),d=function(e){return Object(j.jsxs)("form",{onSubmit:e.onSignup,children:[Object(j.jsx)("h2",{children:"Sign Up"}),Object(j.jsx)("label",{htmlFor:"firstname",children:"First Name"}),Object(j.jsx)("input",{type:"text",id:"firstname",name:"firstname"}),Object(j.jsx)("label",{htmlFor:"lastname",children:"Last Name"}),Object(j.jsx)("input",{type:"text",id:"lastname",name:"lastname"}),Object(j.jsx)("label",{htmlFor:"dob",children:"Date of Birth"}),Object(j.jsx)("input",{type:"date",id:"dob",name:"dob"}),Object(j.jsx)("label",{htmlFor:"username",children:"Choose a username"}),Object(j.jsx)("input",{type:"text",id:"username",name:"username"}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"text",id:"email",name:"email"}),Object(j.jsx)("label",{htmlFor:"password",children:"Create Password"}),Object(j.jsx)("input",{type:"text",id:"password",name:"password"}),Object(j.jsx)("button",{type:"submit",children:"Sign Up"})]})};function b(e){return Object(j.jsxs)("form",{onSubmit:e.onSignin,children:[Object(j.jsx)("h2",{children:"Sign in"}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"text",id:"email",name:"email"}),Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",name:"password"}),Object(j.jsx)("button",{type:"submit",children:"Sign in"})]})}var h=n(6);function O(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),l=r[0],u=r[1],d=Object(a.useState)(),b=Object(o.a)(d,2),O=b[0],m=b[1],g=Object(a.useState)(),p=Object(o.a)(g,2),f=p[0],x=p[1];Object(a.useEffect)((function(){e.day&&(m(e.day.sleep),x(e.day.meals.map((function(e){return e.name}))))}),[]);var v=c?Object(j.jsxs)("form",{onSubmit:function(t){i(!1),m(60*t.target.hours.value*60*1e3+60*t.target.minutes.value*1e3),e.submitSleepDuration(t)},children:[Object(j.jsx)("label",{htmlFor:"hours",children:"Hours"}),Object(j.jsx)("input",{type:"number",name:"hours",id:"hours"}),Object(j.jsx)("label",{htmlFor:"minutes",children:"Minutes"}),Object(j.jsx)("input",{type:"number",name:"minutes",id:"minutes"}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]}):null,S=l?Object(j.jsxs)("form",{onSubmit:function(t){u(!1);var n=Array.from(t.target.meals.selectedOptions,(function(e){return e.innerText}));x(n),e.submitMeals(t)},children:[Object(j.jsx)("label",{htmlFor:"meals",children:"Meals"}),Object(j.jsx)("select",{name:"meals",id:"meals",multiple:!0,children:e.meals.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.name},e.name)}))}),Object(j.jsx)("button",{type:"submit",children:"Submit"}),Object(j.jsx)(h.b,{to:"/newmeal",children:"Create a new meal"})]}):null;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"AD Manager Main"}),e.user?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h.b,{to:"meals",children:"Favourite Meals"}),Object(j.jsx)(h.b,{to:"fast",children:"Fasts"}),Object(j.jsx)(h.b,{to:"sleep",children:"Sleeps"}),Object(j.jsx)("button",{onClick:e.onSignOut,children:"Sign Out"}),Object(j.jsxs)("div",{id:"day",children:[Object(j.jsxs)("p",{children:["Today is ",(new Date).getDate(),"/",(new Date).getMonth()+1,"/",(new Date).getFullYear()]}),e.day?O?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["You got ",(O/36e5).toFixed(2),"hrs of Sleep last night"]}),Object(j.jsx)("button",{onClick:function(){i(!0)},children:"Edit"}),v]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:function(){i(!0)},children:"Submit last nights sleep"}),v]}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{onClick:e.onStart,children:"Start Your Day!"})}),f?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Today, you had"}),Object(j.jsx)("ul",{children:f.map((function(e){return Object(j.jsx)("li",{children:e})}))}),Object(j.jsx)("button",{onClick:function(){u(!0)},children:"Edit"}),S]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:function(){u(!0)},children:"What did you eat today?"}),S]})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Please start by signing up or signing in!"}),Object(j.jsx)(h.b,{to:"signup",children:"Sign Up"}),Object(j.jsx)(h.b,{to:"signin",children:"Sign In"})]})]})}function m(e){var t=Object(a.useState)({ingreInputs:[0]}),n=Object(o.a)(t,2),i=n[0],s=n[1];return Object(j.jsxs)("form",{onSubmit:e.onCreate,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Meal Name"}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Name",required:!0}),Object(j.jsx)("label",{htmlFor:"ingredients",children:"Ingredients"}),i.ingreInputs.map((function(e,t){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("input",{type:"text",name:"ingredients",id:"ingredients",placeholder:"Ingredient Name",required:!0})},t)})),Object(j.jsx)("button",{onClick:function(e){e.preventDefault();var t=Object(l.a)(i.ingreInputs);t.push(t.length+1),s({ingreInputs:t})},children:"Add Ingredient"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault();var t=Object(l.a)(i.ingreInputs);t.pop(),s({ingreInputs:t})},children:"Remove Ingredient"}),Object(j.jsx)("button",{type:"submit",children:"Add Meal"})]})}var g=n(5),p=n.n(g),f="https://aderm-manager.herokuapp.com";function x(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),i=n[0],s=n[1];Object(a.useEffect)((function(){p.a.get("".concat(f,"/api/meals/").concat(e.match.params.id)).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){}))}),[]);return Object(j.jsx)(j.Fragment,{children:i&&Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onUpdate(i._id,t)},children:[Object(j.jsx)("label",{htmlFor:"name",children:"Meal Name"}),Object(j.jsx)("input",{onChange:function(e){var t=e.target.value;console.log(t);var n=JSON.parse(JSON.stringify(i));n.name=t,s(n)},type:"text",name:"name",id:"name",value:"".concat(i.name),required:!0}),Object(j.jsx)("label",{htmlFor:"ingredients",children:"Ingredients"}),i.ingredients.map((function(e,t){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("input",{onChange:function(e){return function(e,t){var n=e.target.value,a=JSON.parse(JSON.stringify(i));a.ingredients[t]=n,s(a)}(e,t)},type:"text",name:"ingredients",id:"ingredients",value:"".concat(e),required:!0})},t)})),Object(j.jsx)("button",{onClick:function(e){e.preventDefault();var t=JSON.parse(JSON.stringify(i));t.ingredients.push("Ingredient"),s(t)},children:"Add Ingredient"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault();var t=JSON.parse(JSON.stringify(i));t.ingredients.pop(),s(t)},children:"Remove Ingredient"}),Object(j.jsx)("button",{type:"submit",children:"Update Meal"})]})})}n(62);var v=function(){return Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)("div",{className:"spinner",children:[Object(j.jsx)("div",{className:"bounce1"}),Object(j.jsx)("div",{className:"bounce2"}),Object(j.jsx)("div",{className:"bounce3"})]})})};function S(e){console.log(e);var t=e.loading?Object(j.jsx)(v,{}):e.meals.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"/meals/".concat(e._id),children:e.name}),Object(j.jsx)("ul",{children:e.ingredients.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]},e.name)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(h.b,{to:"/newmeal",children:"New Meal"}),t]})}function y(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(u.g)().id;return Object(a.useEffect)((function(){p.a.get("".concat(f,"/api/meals/").concat(s),{withCredentials:!0}).then((function(e){i(e.data)})).catch((function(e){}))}),[]),console.log(c),Object(j.jsx)("div",{children:c&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:c.name}),Object(j.jsx)("ul",{children:c.ingredients.map((function(e){return Object(j.jsx)("li",{children:e},e)}))}),Object(j.jsx)(h.b,{to:"/meals/edit/".concat(c._id),children:Object(j.jsx)("button",{children:"Edit"})}),Object(j.jsx)("button",{onClick:function(){e.onDelete(c._id)},children:"Delete"})]})})}function w(){var e=Object(u.f)();return Object(j.jsx)("header",{children:Object(j.jsx)("button",{onClick:function(){return e.push("/")},children:"Back"})})}var F=Object(u.h)((function(e){var t=Object(u.f)(),n=Object(a.useState)(null),c=Object(o.a)(n,2),i=c[0],s=c[1],h=Object(a.useState)(null),g=Object(o.a)(h,2),F=(g[0],g[1]),C=Object(a.useState)(null),D=Object(o.a)(C,2),N=D[0],M=D[1],k=Object(a.useState)(!0),I=Object(o.a)(k,2),E=I[0],J=I[1],_=Object(a.useState)(!0),A=Object(o.a)(_,2),U=A[0],q=A[1],Y=Object(a.useState)(!0),B=Object(o.a)(Y,2),P=B[0],T=B[1],z=Object(a.useState)(null),R=Object(o.a)(z,2),H=R[0],L=R[1],W=Object(a.useState)(null),G=Object(o.a)(W,2),K=(G[0],G[1]);Object(a.useEffect)((function(){console.log("fetching user"),p.a.get("".concat(f,"/api/user"),{withCredentials:!0}).then((function(e){L(e.data),q(!1),console.log("user fetched"),console.log("fetching meals and days"),p.a.get("".concat(f,"/api/meals"),{withCredentials:!0}).then((function(e){s(e.data),J(!1),console.log("meals fetched")})).catch((function(e){J(!1),K(e.response.data)})),p.a.get("".concat(f,"/api/days"),{withCredentials:!0}).then((function(e){F(e.data),console.log("days fetched");var t=JSON.parse(JSON.stringify(e.data));t.sort((function(e,t){return t.date.localeCompare(e.date)})),M(t[0]),console.log("today fetched"),T(!1)})).catch((function(e){console.log(e),T(!1),K(e)}))})).catch((function(e){J(!1),q(!1),T(!1),K(e)}))}),[]);var Q=function(e){e.preventDefault();var n={email:e.target.email.value,password:e.target.password.value};p.a.post("".concat(f,"/api/signin"),n,{withCredentials:!0}).then((function(e){console.log("Signed in as ",e),L(e.data),console.log("fetching meals and days"),p.a.get("".concat(f,"/api/meals"),{withCredentials:!0}).then((function(e){s(e.data),J(!1),console.log("meals fetched")})).catch((function(e){J(!1),K(e.response.data)})),p.a.get("".concat(f,"/api/days"),{withCredentials:!0}).then((function(e){F(e.data),console.log("days fetched");var t=JSON.parse(JSON.stringify(e.data));t.sort((function(e,t){return t.date.localeCompare(e.date)})),M(t[0]),console.log("today fetched"),T(!1)})).catch((function(e){console.log(e),K(e)})),t.push("/")})).catch((function(e){console.log(e)}))},V=function(e){e.preventDefault();var n={name:"".concat(e.target.firstname.value," ").concat(e.target.lastname.value),username:e.target.username.value,dob:e.target.dob.value,email:e.target.email.value,password:e.target.password.value};p.a.post("".concat(f,"/api/signup"),n,{withCredentials:!0}).then((function(e){t.push("/signin"),console.log("Signed up as ",e)})).catch((function(e){console.log(e)}))},X=function(){console.log("signing out!"),p.a.post("".concat(f,"/api/signout"),{},{withCredentials:!0}).then((function(){L(null),s([]),M(null),F(null),t.push("/")})).catch((function(e){console.log(e)}))},Z=function(e){e.preventDefault();var n={name:e.target.name.value,ingredients:void 0!==e.target.ingredients.length?[]:e.target.ingredients.value,author:H._id};"object"===typeof n.ingredients&&e.target.ingredients.forEach((function(e){n.ingredients.push(e.value)})),console.log(n,"pressing button!"),p.a.post("".concat(f,"/api/createmeal"),n,{withCredentials:!0}).then((function(e){var n=Object(l.a)(i);n.push(e.data),s(n),t.push("/meals")})).catch((function(e){console.log(e)}))},$=function(e){console.log("deleting!"),p.a.delete("".concat(f,"/api/meals/").concat(e),{},{withCredentials:!0}).then((function(e){var n=i.filter((function(t){return t._id!==e.data._id}));s(n),t.push("/meals")})).catch((function(e){console.log(e)}))},ee=function(e,n){n.preventDefault(),J(!0);var a={name:n.target.name.value,ingredients:void 0!==n.target.ingredients.length?[]:n.target.ingredients.value,author:H._id};"object"===typeof a.ingredients&&n.target.ingredients.forEach((function(e){a.ingredients.push(e.value)})),console.log(a),p.a.patch("".concat(f,"/api/meals/").concat(e),{name:a.name,ingredients:a.ingredients,author:a.author},{withCredentials:!0}).then((function(e){var n=e.data,a=i.map((function(e){return n._id===e._id&&(e.name=n.name,e.ingredients.length=0,n.ingredients.forEach((function(t){e.ingredients.push(t)}))),e}));s(a),J(!1),t.push("/meals")})).catch((function(e){}))},te=function(){var e={date:"".concat((new Date).getDate(),"/").concat((new Date).getMonth()+1,"/").concat((new Date).getFullYear()),author:H._id};console.log(e),p.a.post("".concat(f,"/api/day/start"),e,{withCredentials:!0}).then((function(e){M(e.data)})).catch((function(e){K(e)}))},ne=function(e){e.preventDefault();var t=60*e.target.hours.value*60*1e3;t+=60*e.target.minutes.value*1e3,p.a.patch("".concat(f,"/api/day/").concat(N._id),{sleep:t},{withCredentials:!0})},ae=function(e){e.preventDefault();var t=Array.from(e.target.meals.selectedOptions,(function(e){return e.value}));console.log(t),p.a.patch("".concat(f,"/api/day/").concat(N._id),{meals:t},{withCredentials:!0})};return U||P||E?Object(j.jsx)(v,{}):Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(O,{onSignOut:X,user:H,onStart:te,meals:i,day:N,submitSleepDuration:ne,submitMeals:ae})}}),Object(j.jsx)(u.a,{path:"/signin",render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsx)(b,{onSignin:Q})]})}}),Object(j.jsx)(u.a,{path:"/signup",render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsx)(d,{onSignup:V})]})}}),Object(j.jsx)(u.a,{path:"/newmeal",render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsx)("h1",{children:"New Meal"}),Object(j.jsx)(m,{onCreate:Z})]})}}),Object(j.jsx)(u.a,{path:"/meals/edit/:id/",render:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsx)(x,Object(r.a)({onUpdate:ee},e))]})}}),Object(j.jsx)(u.a,{path:"/meals/:id",render:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsx)(y,Object(r.a)({onDelete:$},e))]})}}),Object(j.jsx)(u.a,{path:"/meals",render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsx)("h1",{children:"Meals"}),Object(j.jsx)(S,{meals:i,loading:E})]})}}),Object(j.jsx)(u.a,{path:"/fast",children:Object(j.jsx)("h1",{children:"Fast Details"})}),Object(j.jsx)(u.a,{path:"sleep",children:Object(j.jsx)("h1",{children:"Sleeps Details"})})]})}));s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(F,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.2acfe79d.chunk.js.map