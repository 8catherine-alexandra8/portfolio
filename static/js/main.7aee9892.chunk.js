(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1),r=n.n(a),o=n(22),c=n.n(o),s=n(3),d=n(4);function l(){var t=Object(s.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\nhtml{\n    font-size: 65%;\n    @media (min-width: 768px){\n        font-size: 75%;\n    }\n    @media (min-width: 1024px){\n        font-size: 100%;\n    }\n\n}\nmain {\n    min-height: 100vh;\n}\nbody{\n    background: #1b1b1b;\n    font-family: 'Roboto', sans-serif;\n    overflow-x: hidden;\n}\nbutton{\n    font-weight: bold;\n    font-size: 1.1.rem;\n    cursor: pointer;\n    padding: 1rem 2rem;\n    border: 3px solid #0B4C5F;\n    background: transparent;\n    color: white;\n    transition: all 0.5s ease;\n    font-family: 'Roboto', sans-serif;\n    &:hover{\n        background-color: #0B4C5F;\n        color: white;\n    }\n}\n    h2{\n        font-size: 3rem;\n        @media (min-width: 768px) {\n        font-weight: lighter;\n        font-size: 4rem;\n    }\n\n    }\n    h3{\n        color: white;\n    }\n    h4{\n        font-weight: normal;\n        font-size: 1.7rem;\n        &:hover{\n            color: #E9FA03;\n        }\n    }\n    h5{\n        font-weight: normal;\n        font-size: 1.6rem;\n        color: #1b1b1b;\n    }\n    a{\n        font-size: 1.1rem;\n    }\n    span{\n        font-weight: bold;\n        color: #0B4C5F;\n        line-height: 150%;\n    }\n    p{\n        padding: 3rem 0rem;\n        color: #ccc;\n        font-size: 1.4rem;\n        line-height: 150%;\n        @media (min-width: 768px) {\n        font-weight: lighter;\n        font-size: 1.2rem;\n        }\n    }\n    ul{\n        list-style: none;\n    }\n"]);return l=function(){return t},t}var h=Object(d.a)(l()),p=n(5),m=n(2);function b(){var t=Object(s.a)(["overflow: hidden;"]);return b=function(){return t},t}function f(){var t=Object(s.a)(["\n\tflex: 1;\n\toverflow: hidden;\n\timg {\n\t\twidth: 100%;\n\t\tobject-fit: scale-down;\n\t}\n\t@media (min-width: 540px) {\n\t\theight: 60vh;\n\t\tmax-width: 80%;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\t@media (min-width: 768px) {\n\t\theight: 70vh;\n\t\tmax-width: 60%;\n\t}\n\t@media (min-width: 1024px) {\n\t\tmax-width: 50%;\n\t}\n\t@media (min-width: 1400px) {\n\t\tmax-width: 500px;\n\t\tpadding-left: 7%;\n\t\tpadding-top: 2%;\n\t}\n"]);return f=function(){return t},t}function j(){var t=Object(s.a)(["\n\tpadding: 0;\n\tbutton {\n\t\tmargin: 2rem 0rem 5rem 0rem;\n\t}\n\tspan {\n\t\ttext-shadow: 2px 2px 4px #000000;\n\t}\n\t@media (min-width: 768px) {\n\t\tp {\n\t\t\tfont-size: 1.6rem;\n\t\t}\n\t}\n\t@media (min-width: 1200px) {\n\t\tflex: 1;\n\t\tpadding-right: 5rem;\n\t\tfont-weight: lighter;\n\t}\n"]);return j=function(){return t},t}function u(){var t=Object(s.a)(["\n\tdisplay: block;\n\tpadding: 4rem 2rem 1rem 2rem;\n\ttext-align: center;\n\tcolor: white;\n\tmin-height: 90vh;\n\tmargin-top: 10vh;\n  \t@media (min-width: 1200px) {\n  \t\tdisplay: flex;\n  \t\talign-items: center;\n  \t\tjustify-content: space-between;\n  \t\tpadding: 5rem 10rem;\n  \t}\n"]);return u=function(){return t},t}var x=Object(d.b)(m.c.div)(u()),g=d.b.div(j()),O=d.b.div(f()),v=d.b.div(b()),w={hidden:{opacity:0,y:-300},show:{opacity:1,y:0,transition:{duration:.5,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.5}}},M={hidden:{y:200},show:{y:0,transition:{duration:.75,ease:"easeOut"}}},L={hidden:{opacity:0},show:{opacity:1,transition:{ease:"easeOut",duration:.75}}},k={hidden:{scale:1.5,opacity:0},show:{scale:1,opacity:1,transition:{ease:"easeOut",duration:.75}}},y={hidden:{width:"0%"},show:{width:"100%",transition:{duration:1}}},A={hidden:{opacity:0,scale:1.2,transition:{duration:.5}},show:{opacity:1,scale:1,transition:{duration:.5}}};function N(){var t=Object(s.a)(["\n\tposition: absolute;\n\tleft: 0;\n\ttop: 16%;\n\tobject-fit: cover;\n\tz-index: -1;\n\n\t@media (max-width: 540px) {\n\t\tdisplay: none;\n\t}\n\t@media (min-width: 541px) {\n\t\ttop: 23%;\n\t}\n\t@media (min-width: 768px) {\n\t\ttop: 20%;\n\t}\n\t@media (min-width: 901px) {\n\t\ttop: 14%;\n\t}\n\t@media (min-width: 1200px) {\n\t\ttop: 8%;\n\t}\n"]);return N=function(){return t},t}var z=d.b.svg(N()),E=function(){return Object(i.jsx)(z,{viewBox:"0 0 1384 539",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)(m.c.path,{variants:L,initial:{pathLength:0,pathOffset:1,opacity:0},animate:{pathLength:1,pathOffset:0},transition:{duration:3},d:"M106 79L139 91M106 79L135 110M106 79L153 23M106 79L83 47M139 91L135 110M139 91L153 23M139 91L284 114M135 110L224 142M135 110L169 122M135 110L163 156M153 23L83 47M153 23L188 99M153 23L241 58M153 23L1 1L83 47M284 114L169 122M284 114L224 142M284 114L248 198M284 114V170M284 114L342 189M284 114L241 58M284 114L188 99M224 142L169 122M224 142L248 198M224 142L205 170M224 142L163 156M248 198L205 170M248 198L284 170M248 198L309 245M284 170L342 189M284 170L309 245M205 170L163 156M342 189L309 245M342 189L364 245M342 189L375 180.04M309 245H364M309 245L342 293M364 245L342 293M364 245L375 180.04M364 245L413.266 230M364 245L446.601 249.736M342 293L455 281M342 293L449 314M342 293L446.601 249.736M375 180.04L425 170M375 180.04L413.266 201M413.266 230V201M413.266 230L528 214M413.266 230L446.601 249.736M413.266 230L484 236M413.266 230L473.133 207.5M425 170L413.266 201M425 170L528 214M425 170L473.133 207.5M413.266 201L473.133 207.5M528 214L455 281M528 214L484 236M528 214L473.133 207.5M455 281L449 314M455 281L501 314M455 281L446.601 249.736M455 281L484 236M449 314H501M449 314L496 359M501 314L496 359M501 314L542 339M496 359L542 339M496 359H623M542 339L623 359M623 359L581 386.5M623 359L616.329 474M623 359L596.243 400.091M581 423.5V386.5M581 423.5L652 400.091M581 423.5L616.329 474M581 423.5L596.243 400.091M581 423.5L616.329 413M581 386.5L596.243 400.091M652 400.091L616.329 474M652 400.091L641 494M652 400.091L698 474M652 400.091L710 451L775 511M652 400.091L616.329 413M616.329 474L641 494M616.329 474L641 528M641 494L698 474M641 494V528M698 474L775 511M698 474L641 528M775 511H1032M775 511L802.5 423.5M775 511L861 474M775 511L641 528M775 511L747 528H641M1032 511L861 474M1032 511L802.5 423.5M1032 511L915 324M1032 511L902 423.5M802.5 423.5L861 474M802.5 423.5L839 381M915 324L847 309M915 324L1000 291M915 324L902 423.5M839 381L902 423.5M839 381L824.091 321.282M847 309L1000 291M847 309L922 272M847 309L824.091 321.282M847 309L902 423.5M1000 291L922 272M1000 291L861 219M1000 291L944 225M922 272L831.75 242M922 272L824.091 321.282M861 219L831.75 242M861 219L817 189M861 219L944 225M831.75 242L817 189M817 189L866 201.5M944 225L1021 187.812M944 225L866 201.5M1021 187.812H902M1021 187.812L927 129M1021 187.812L968 98M866 201.5L886 156L902 187.812M866 201.5L902 187.812M902 187.812L927 129M927 129L968 98M927 129L968 29M968 98V29M968 98H1082M968 98L1101 60M968 29L1015 69M968 29L1021 41M968 29L1121 8M241 58L188 99M446.601 249.736L484 236M1082 98L1015 69M1082 98L1101 60M1021 41L1015 69M1021 41L1101 60M1021 41L1121 8M1015 69L1101 60M1101 60L1121 8M1101 60L1146 19M1101 60L1189 98M1101 60L1232 118M1121 8L1146 19M1146 19L1189 98M1146 19L1189 47M1146 19L1216 13M1189 98V47M1189 98L1232 118M1189 47L1232 118M1189 47L1216 13M1189 47L1244 35M1189 47L1259 98M1232 118L1259 98M1232 118L1359 124.058M1216 13L1244 35M1244 35L1259 98M1244 35L1326 98.5023M902 423.5L824.091 321.282M596.243 400.091L616.329 413M1259 98L1359 124.058M1259 98L1326 98.5023M1359 124.058L1346 172L1382.05 156L1359 124.058ZM1359 124.058L1326 98.5023",stroke:"#E9FA03",strokeOpacity:"0.5",strokeWidth:"1"})})},C=function(){return Object(i.jsxs)(x,{children:[Object(i.jsxs)(g,{children:[Object(i.jsxs)(m.c.div,{children:[Object(i.jsx)(v,{children:Object(i.jsx)(m.c.h2,{variants:M,children:"Let's"})}),Object(i.jsx)(v,{children:Object(i.jsxs)(m.c.h2,{variants:M,children:[Object(i.jsx)("span",{children:"create"})," something special"]})}),Object(i.jsx)(v,{children:Object(i.jsx)(m.c.h2,{variants:M,children:"together"})})]}),Object(i.jsx)(m.c.p,{variants:L,children:"Take a look a look at what I've been working on, and get in touch"}),Object(i.jsx)(p.b,{id:"contact",to:"/contact",children:Object(i.jsx)(m.c.button,{variants:L,children:"Contact Me"})})]}),Object(i.jsx)(O,{children:Object(i.jsx)(m.c.img,{variants:k,src:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/smileLighter.png?alt=media&token=5234587f-2e55-4e72-a157-c7c91cbb11c0",alt:"portrait of developer"})}),Object(i.jsx)(E,{})]})},F=n(8),R=function(t){var e=t.children,n=t.title,r=Object(a.useState)(!1),o=Object(F.a)(r,2),c=o[0],s=o[1];return Object(i.jsxs)(m.c.div,{layout:!0,className:"question",onClick:function(){return s(!c)},children:[Object(i.jsx)(m.c.h4,{layout:!0,children:n}),c?e:"",Object(i.jsx)("div",{className:"faq-line"})]})},S=n(26),B=function(){var t=Object(m.d)(),e=Object(S.a)({threshold:.3}),n=Object(F.a)(e,2),i=n[0];return n[1]?t.start("show"):t.start("hidden"),[i,t]};function I(){var t=Object(s.a)(["\n  display: block;\n  span {\n    display: block;\n  }\n  h2 {\n    padding-bottom: 2rem;\n    font-weight: lighter;\n  }\n  .faq-line {\n    background: #0b4c5f;\n    height: 0.2rem;\n    margin: 2rem 0rem;\n    width: 100%;\n  }\n  .question {\n    padding: 3rem 0rem;\n    cursor: pointer;\n  }\n  .answer {\n    padding: 2rem 0rem;\n    p {\n      padding: 1rem 0rem;\n\t}\n\t.faq-link {\n\t\ttext-decoration: none;\n\t\tcolor: white;\n\t\tfont-size: 1.5rem;\n\t}\n  }\n  .icon {\n\t  color: #E9FA03;\n  }\n  \t@media (min-width: 768px) {\n\t\t margin-top: 6vh; \n\t  }\n\t@media (min-width: 1024px) {\n\t\t margin-top: 0; \n\t  }\n\n"]);return I=function(){return t},t}var T=Object(d.b)(x)(I()),P=function(){var t=B(),e=Object(F.a)(t,2),n=e[0],a=e[1];return Object(i.jsxs)(T,{variants:A,ref:n,animate:a,initial:"hidden",children:[Object(i.jsxs)("h2",{children:["Questions? ",Object(i.jsx)("span",{children:"FAQ"})]}),Object(i.jsxs)(m.b,{children:[Object(i.jsx)(R,{title:"Where can I see your work?",children:Object(i.jsxs)("div",{className:"answer",children:[Object(i.jsx)("p",{children:"You can find an index of projects here:"}),Object(i.jsxs)(p.b,{className:"faq-link",to:"/work",children:[Object(i.jsx)("i",{class:"far fa-file-alt icon"})," Projects"]}),Object(i.jsx)("p",{children:"From there, click on any project that interests you to find more details, including links to the deployed application and its corresponding GitHub repo"})]})}),Object(i.jsx)(R,{title:"Why should I hire you?",children:Object(i.jsxs)("div",{className:"answer",children:[Object(i.jsx)("p",{children:"In my experience, it is a pleasure to work with people who are passionate about, and truly enjoy, their work and I am definitely one of those people. I don't have years and years of experience to temper my excitement and enthusiasm."}),Object(i.jsx)("p",{children:"Being a self-taught developer demonstrates that I'm resourceful, intrinsically motivated, and I can maintain the high level of discipline, and fortitude it takes to see projects through, even when it's challenging."})]})}),Object(i.jsx)(R,{title:"May I see your resume?",children:Object(i.jsxs)("div",{className:"answer",children:[Object(i.jsx)("p",{children:"View and download here:"}),Object(i.jsxs)(p.b,{className:"faq-link",to:"/resume",children:[Object(i.jsx)("i",{class:"far fa-file-alt icon"})," Resume"]})]})}),Object(i.jsx)(R,{title:"What do you do for fun?",children:Object(i.jsxs)("div",{className:"answer",children:[Object(i.jsx)("p",{children:"Learning is fun and I've been doing a whole lot of that lately."}),Object(i.jsx)("p",{children:"If I'm not sitting in front of the computer, you can find me outside, enjoying all the beauty and adventure that Colorado has to offer. My most recent hobby is gravel biking and I'd like to expand that into bikepacking this year."})]})})]})]})},H=n(6),q=function(){var t=Object(H.g)().pathname;return Object(a.useEffect)((function(){window.scroll({top:0,left:0})}),[t]),null};function W(){var t=Object(s.a)(["\n\toverflow: hidden;\n"]);return W=function(){return t},t}var D=function(){return Object(i.jsxs)(G,{exit:"exit",variants:w,initial:"hidden",animate:"show",children:[Object(i.jsx)(C,{}),Object(i.jsx)(P,{}),Object(i.jsx)(q,{})]})},G=Object(d.b)(m.c.div)(W());function U(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #b8b7ad;\n\tmin-width: 250px;\n\tpadding: 2rem;\n\tborder-radius: 4px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tinput {\n\t\twidth: 100%;\n\t\tpadding: .8rem 1.3rem;\n\t\tmargin: 5px 0 14px;\n\t\tbox-sizing: border-box;\n\t\tborder-radius: 4px;\n\t\tborder: 1px solid #353535;\n\t}\n\ttextarea {\n\t\twidth: 100%auto;\n\t\theight: 150px;\n\t\tpadding: .8rem 1.3rem;\n\t\tmargin: 5px 0 14px;\n\t\tbox-sizing: border-box;\n\t\tborder-radius: 4px;\n\t\tborder: 1px solid #353535;\n\t\tresize: none;\n\t}\n\t.form-button {\n\t\tbackground-color: #0b4c5f;\n\t\t&:hover {\n\t\t\tbackground-color: #e9fa03;\n\t\t\tborder: 3px solid #e9fa03;\n\t\t\tcolor: #353535;\n\t\t}\n\t}\n\t@media (min-width: 360px) {\n\t\twidth: 300px;\n\t\tpadding: 2.8em;\n\t}\n\t@media (min-width: 411px) {\n\t\twidth: 350px;\n\t\tpadding: 3em;\n\t}\n\t@media (min-width: 540px) {\n\t\twidth: 450px;\n\t\tpadding: 3.5em;\n\t}\n\t@media (min-width: 768px) {\n\t\ttextarea {\n\t\t\theight: 250px;\n\t\t}\n\t}\n"]);return U=function(){return t},t}function V(){var t=Object(s.a)(["\n\tmargin-bottom: ",";\n\tmargin-top: ",";\n\t@media (min-width: 1024px) {\n\t}\n\t@media (min-width: 1500px) {\n\t}\n"]);return V=function(){return t},t}function _(){var t=Object(s.a)(["overflow: hidden;"]);return _=function(){return t},t}function J(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-top: 8vh;\n  padding: 5rem 10rem;\n  color: #353535;\n  min-height: 90vh;\n  i {\n\t  font-size: 4rem;\n\t  color:#0B4C5F;\n  }\n  i:hover {\n\t  transition: all 0.5s ease;\n\t  color: #e9fa03;\n  }\n  @media (max-width: 1500px) {\n    padding: 2rem;\n    font-size: 1rem;\n  }\n"]);return J=function(){return t},t}var Q=Object(d.b)(m.c.div)(J()),X=d.b.div(_()),Y=d.b.div(V(),(function(t){return t.email?"0px":".7rem"}),(function(t){return t.email?"2rem":"5rem"})),Z=d.b.form(U()),K=function(){var t=Object(a.useState)(""),e=Object(F.a)(t,2),n=e[0],r=e[1];return Object(i.jsxs)(Q,{exit:"exit",variants:w,initial:"hidden",animate:"show",style:{background:"#fff"},children:[Object(i.jsx)(q,{}),Object(i.jsx)(Y,{email:!0,children:Object(i.jsx)(X,{children:Object(i.jsx)(m.c.h5,{variants:M,children:"Email"})})}),Object(i.jsx)("a",{id:"email",href:"mailto:catherine.alexandra.dev@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{class:"far fa-envelope"})}),Object(i.jsx)(Y,{message:!0,children:Object(i.jsx)(X,{children:Object(i.jsx)(m.c.h5,{variants:M,children:"Send a message"})})}),Object(i.jsx)(X,{children:Object(i.jsxs)(Z,{onSubmit:function(t){t.preventDefault();var e=t.target,n=new FormData(e),i=new XMLHttpRequest;i.open(e.method,e.action),i.setRequestHeader("Accept","application/json"),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?(e.reset(),r("SUCCESS")):r("ERROR"))},i.send(n)},action:"https://formspree.io/f/xwkwaqjd",method:"POST",children:[Object(i.jsx)("label",{children:"Name:"}),Object(i.jsx)("input",{type:"text",name:"name",placeholder:"Name"}),Object(i.jsx)("label",{children:"Email:"}),Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Email"}),Object(i.jsx)("label",{children:"Message:"}),Object(i.jsx)("textarea",{type:"text",name:"message",placeholder:"Your message"}),"SUCCESS"===n?Object(i.jsx)("p",{children:"Thanks!"}):Object(i.jsx)("button",{className:"form-button",children:"Submit"}),"ERROR"===n&&Object(i.jsx)("p",{children:"Ooops! There was an error."})]})})]})};function $(){var t=Object(s.a)(["\n  padding-bottom: 10rem;\n  .line {\n    height: 0.5rem;\n    background: #0B4C5F;\n    margin-bottom: 3rem;\n  }\n  img {\n\t  width: 85%;\n\t  object-fit: cover;\n\n  }\n  img:hover {\n\t  transition: all 0.5s ease;\n\t  width: 90%;\n  }\n  a {\n\t  text-decoration: none;\n\t  color: #1b1b1b;\n  }\n  a:hover {\n\t  color:#0B4C5F; \n  }\n"]);return $=function(){return t},t}function tt(){var t=Object(s.a)(["\n  min-height: 100vh;\n  overflow: hidden;\n  padding: 4rem 2rem 2rem 2rem;\n  margin-top: 10vh;\n  h2 {\n    padding: 1rem 0rem;\n  }\n  @media (min-width: 1300px) {\n\tpadding: 5rem 10rem;\n  }\n"]);return tt=function(){return t},t}var et=Object(d.b)(m.c.div)(tt()),nt=Object(d.b)(m.c.div)($()),it=function(){var t=B(),e=Object(F.a)(t,2),n=e[0],a=e[1],r=B(),o=Object(F.a)(r,2),c=o[0],s=o[1],d=B(),l=Object(F.a)(d,2),h=l[0],b=l[1],f=B(),j=Object(F.a)(f,2),u=j[0],x=j[1];return Object(i.jsxs)(et,{style:{background:"#fff"},exit:"exit",variants:w,initial:"hidden",animate:"show",children:[Object(i.jsx)(q,{}),Object(i.jsxs)(nt,{ref:n,variants:L,animate:a,initial:"hidden",children:[Object(i.jsx)(p.b,{to:"/work/e-commerce",children:Object(i.jsx)(m.c.h2,{variants:L,children:"E-Commerce"})}),Object(i.jsx)(m.c.div,{variants:y,className:"line"}),Object(i.jsx)(p.b,{to:"/work/e-commerce",children:Object(i.jsx)(m.c.img,{className:"shunami-gif",variants:k,src:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/shunamiHome.png?alt=media&token=7bc2e4e5-0d11-493a-8833-70fbf98acc62",alt:"home page"})})]}),Object(i.jsxs)(nt,{ref:c,variants:L,animate:s,initial:"hidden",children:[Object(i.jsx)(p.b,{to:"/work/fitfocus",children:Object(i.jsx)(m.c.h2,{variants:L,children:"FitFocus - Productivity App"})}),Object(i.jsx)(m.c.div,{variants:y,className:"line"}),Object(i.jsx)(p.b,{to:"/work/fitfocus",children:Object(i.jsx)(m.c.img,{variants:k,src:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/fitFocus.png?alt=media&token=602787b0-64c6-471f-a172-2b43816e4024",alt:"fitFocus illustration"})})]}),Object(i.jsxs)(nt,{ref:h,variants:L,animate:b,initial:"hidden",children:[Object(i.jsx)(p.b,{to:"/work/blogcms",children:Object(i.jsx)(m.c.h2,{variants:L,children:"Blog CMS"})}),Object(i.jsx)(m.c.div,{variants:y,className:"line"}),Object(i.jsx)(p.b,{to:"/work/blogcms",children:Object(i.jsx)(m.c.img,{variants:k,src:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/blogCover.png?alt=media&token=cdc1c83f-0ea8-43b2-b531-b4b04140e326",alt:"blog cms"})})]}),Object(i.jsxs)(nt,{ref:u,variants:L,animate:x,initial:"hidden",children:[Object(i.jsx)(p.b,{to:"/work/recipeapi",children:Object(i.jsx)(m.c.h2,{variants:L,children:"Recipes API"})}),Object(i.jsx)(m.c.div,{variants:y,className:"line"}),Object(i.jsx)(p.b,{to:"/work/recipeapi",children:Object(i.jsx)(m.c.img,{variants:k,src:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/recipeDBCover.png?alt=media&token=2fed3560-1e44-4dfe-b01e-86dc38f3ede1",alt:"recipe api"})})]})]})},at=function(){return[{title:"E-Commerce",about:"Clean, responsive e-commerce site with shopper friendly UI and protected UI for admin. Customers can browse, search, purchase via PayPal account or credit card, track orders and review products. Admins can edit orders, create/edit/delete users & products, and upload product images.",gif:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/shunamiSearch.gif?alt=media&token=2115db9e-8b13-453d-b5b4-ec58b2c22b33",gifLink:"https://shunami.herokuapp.com/",gifWidth:"600",git:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/shunamiGit.png?alt=media&token=9010471e-1802-4d4a-a88b-e0e1305ee309",gitLink:"https://github.com/8catherine-alexandra8/mern-ecomm",gitWidth:"",url:"/work/e-commerce",frontEndTech:["React","Redux","React-Bootstrap","HTML","CSS"],backEndTech:["Node","Express","Axios","Paypal API","Mongoose","MongoDB Atlas","bcryptjs","JSON Web Token"],futureEnhancements:["Utilize 3rd party storage service for images uploaded by admins, during product creation.","Give admin users the ability to control order of product display","Update database stock records as part of order 'isPaid' state update","Show alert to user if selected item is last one, upon cart update"]},{title:"FitFocus",about:"Productivity application, based on the Pomodoro technique.  Users set their own interval targets for focus, short breaks, long breaks and total number of focus sessions for the day.\n App utilizes interval timers, progress bars, UI design, and sounds to keep user on schedule. During short break intervals, user is prompted with body-weight exercises to enhance the efficacy of the break.\n A lazy-break option is also available for short break intervals.\n At the end of the work session, app provides user with feedback showing time spent focusing and exercising as well as percent of goal target achieved.\n *Note* Deployed site is set up as demo.  Focus and long break intervals last 1 second/minute and short break intervals last 10 seconds/minute",gif:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/fitFocus.gif?alt=media&token=8fe57be9-f3fb-4f99-8364-a5ca5946dc70",gifLink:"https://fitandfocused.herokuapp.com/",gifWidth:"250",git:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/focusFitGit.png?alt=media&token=ebc915f3-76b9-4040-af1b-cc99b1d37c1f",gitLink:"https://github.com/8catherine-alexandra8/fitfocus",gitWidth:"",url:"/work/fitfocus",frontEndTech:["React","Redux","React-Bootstrap","HTML","CSS"],backEndTech:["Node","Express","Axios","Mongoose","MongoDB Atlas"],futureEnhancements:["Rebuild using React Native","Add user accounts","Track user, by account, over time, and provide long term performance feedback","Give user ability to set audio preferences"]},{title:"Recipes API",about:"Simple, intuitive, recipes API where users can search for recipes, add recipes, edit recipes and delete recipes",gif:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/recipeDB.gif?alt=media&token=4e72962f-f9b1-41c3-ad98-f2e808978863",gifLink:"https://db-4-recipes.herokuapp.com/",gifWidth:"600",git:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/recipeGitA.png?alt=media&token=0c7bc82a-6e05-421d-9507-9bc5807802eb",gitLink:"https://github.com/8catherine-alexandra8/mernstack-recipes-db",gitWidth:"",url:"/work/recipeapi",frontEndTech:["React","HTML","CSS"],backEndTech:["Node","Express","Axios","Mongoose","MongoDB Atlas"],futureEnhancements:["Add images and image upload capability","Add filters so users can search for recipes based on inclusion of multiple ingredients","Add recipe sharing functionality","Improve formatting in recipe directions section"]},{title:"Blog CMS",about:"Content management system for bloggers, designed to facilitate the posting of content by any registered user, via convenient templates, pre-formatted to support several different types of blog posts, like the ever popular list-type post and how-to post.  Registered and non-registered users can read content and search content, but only registered users can comment on posts, create posts and edit their own posts.",gif:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/blogSmaller.gif?alt=media&token=2ec6738e-334c-4787-8e2e-fc9928a10e7d",gifLink:"https://npmrundev-blog.herokuapp.com/",gifWidth:"500",git:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/blogGit.png?alt=media&token=b137946c-9ae1-410b-8a0a-e79cf4ae0691",gitLink:"https://github.com/8catherine-alexandra8/mern-styled-components-blog",gitWidth:"",url:"/work/blogcms",frontEndTech:["React","HTML","CSS","Styled-Components","React-Bootstrap"],backEndTech:["Node","Express","Axios","Mongoose","MongoDB Atlas","Firebase Auth","Firebase Storage","FormSpree API","Quotable API"],futureEnhancements:["Provide registered users with opportunity to upload a profile pic","Expand user customization capabilities within blog post templates","Add a social buttons package for sharing content","Refactor to take better advantage of styled-component potential"]}]};function rt(){var t=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 5rem;\n  min-width: 25%;\n  h3 {\n    font-size: 1.8rem;\n  }\n  .line {\n    width: 100%;\n    background: #0B4C5F;\n    height: 0.5rem;\n    margin: 1rem 0rem;\n  }\n  i {\n    color: #E9FA03;\n    font-size: 1.6rem;\n  }\n  span {\n    padding-left: .8rem;\n    color: white;\n    font-size: 1.6rem;\n    font-family:  'Roboto', sans-serif; \n    font-weight: lighter;\n  }\n  .enhancements {\n      font-size: 1.6rem;\n      padding-bottom: 2rem;\n    }\n  @media (min-width: 1200px) {\n    padding: 3rem; \n    align-self: flex-start;\n    h3 {\n      font-weight: normal;\n    }\n  } \n"]);return rt=function(){return t},t}function ot(){var t=Object(s.a)(["\n  display: block;\n  padding: 2rem 2rem;\n  @media (min-width: 360px) {\n    margin-top: 2rem;\n  }\n  @media (min-width: 768px) {\n    padding: 5rem 10rem 1rem 10rem;\n  }\n  @media (min-width: 1200px) {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n"]);return ot=function(){return t},t}function ct(){var t=Object(s.a)(["\n  display: block;\n  padding: 2rem 2rem;\n  color: white;\n  p {\n    padding: 2rem 0rem;\n    font-size: 1.6rem;\n  }\n  .line {\n  height: 0.5rem;\n  background: #0B4C5F;\n  margin-bottom: 1rem;\n  }\n\n\n  @media (min-width: 768px) {\n  display: block;\n  overflow: hidden;\n  padding: 5rem 10rem 1rem 10rem;\n  p {\n    padding: 2rem 0rem;\n  }\n  }\n"]);return ct=function(){return t},t}function st(){var t=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 2rem 2rem;\n  @media (min-width: 768px) {\n    padding: 5rem 10rem 1rem 10rem;\n  }\n  @media (min-width: 1024px) {\n    max-height: 55vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    padding: 2rem 10rem 2rem 10rem;\n    color: white;\n    span {\n      font-size: 1.1rem;\n    }\n  }\n\n  .project-gif {\n    display: block;\n    padding: 1rem 1rem;\n    width: 100%;\n    text-align: center;\n    max-width: 700px;\n    img {\n      max-width: 100%;\n    }\n  }\n\n  .project-git {\n    display: block;\n    text-align: center;\n    padding: 1rem;\n    img {\n      margin: auto;\n      max-height: 160px;\n      @media (min-width: 360px){\n        margin-top: 2rem;\n        max-height: 180px;\n      }\n      @media (min-width: 540px){\n        max-height: 220px;\n      }\n      @media (min-width: 1500px){\n      min-height: 400px;\n      object-fit: cover;\n      }\n    }\n  }\n\n  a {\n    text-decoration: none;\n    i:hover {\n      color:  #E9FA03;\n    }\n  }\n\n  i {\n    overflow: hidden;\n    display: block;\n    color: #0B4c5F;\n    padding-top: 8px;\n    text-align: center;\n    font-size: 1.5rem;\n    span {\n      font-family:  'Roboto', sans-serif; \n    }\n  } \n"]);return st=function(){return t},t}function dt(){var t=Object(s.a)(["\n  padding: 4rem 2rem 2rem 2rem;\n  margin-top: 10vh;\n  line-height: 175%;\n  @media (min-width: 540px){\n    padding: 10%;\n  }\n  @media (min-width: 768px){\n    padding: 5%;\n  }\n  @media (min-width: 1024px){\n    padding: 2%;\n  }\n\n\n"]);return dt=function(){return t},t}var lt=d.b.div(dt()),ht=Object(d.b)(m.c.div)(st()),pt=Object(d.b)(m.c.div)(ct()),mt=d.b.div(ot()),bt=d.b.div(rt()),ft=function(){var t=Object(H.f)().location.pathname,e=Object(a.useState)(at),n=Object(F.a)(e,1)[0],r=Object(a.useState)(null),o=Object(F.a)(r,2),c=o[0],s=o[1];return Object(a.useEffect)((function(){var e=n.filter((function(e){return e.url===t}));s(e[0])}),[n,t]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(q,{}),c&&Object(i.jsxs)(lt,{children:[Object(i.jsxs)(pt,{initial:"hidden",animate:"show",id:"headline",children:[Object(i.jsx)("h2",{children:c.title}),Object(i.jsx)("p",{children:c.about}),Object(i.jsx)(m.c.div,{variants:y,className:"line"})]}),Object(i.jsxs)(ht,{exit:"exit",variants:w,initial:"hidden",animate:"show",children:[Object(i.jsx)("div",{className:"project-gif",children:Object(i.jsxs)("a",{id:"link-to-deployed",href:c.gifLink,target:"_blank",rel:"noreferrer",className:"project-link",children:[Object(i.jsx)("img",{src:c.gif,alt:"project",className:"gif-img",width:c.gifWidth}),Object(i.jsx)("i",{class:"fas fa-external-link-alt",children:Object(i.jsx)("span",{children:" Go to deployed site"})})]})}),Object(i.jsx)("div",{className:"project-git",children:Object(i.jsxs)("a",{id:"link-to-repo",href:c.gitLink,target:"_blank",rel:"noreferrer",className:"project-link",children:[Object(i.jsx)("img",{src:c.git,alt:"project",className:"git-img"}),Object(i.jsx)("i",{class:"fas fa-external-link-alt",children:Object(i.jsx)("span",{children:" Go to GitHub repo"})})]})})]}),Object(i.jsxs)(mt,{children:[Object(i.jsxs)(bt,{children:[Object(i.jsx)("h3",{children:"Front End"}),Object(i.jsx)("div",{className:"line"}),c.frontEndTech.map((function(t){return Object(i.jsx)("i",{class:"far fa-check-square",children:Object(i.jsx)("span",{children:t})},t)}))]}),Object(i.jsxs)(bt,{children:[Object(i.jsx)("h3",{children:"Back End"}),Object(i.jsx)("div",{className:"line"}),c.backEndTech.map((function(t){return Object(i.jsx)("i",{class:"far fa-check-square",children:Object(i.jsx)("span",{children:t})},t)}))]}),Object(i.jsxs)(bt,{children:[Object(i.jsx)("h3",{children:"Future Enhancements"}),Object(i.jsx)("div",{className:"line"}),c.futureEnhancements.map((function(t,e){return Object(i.jsx)("i",{class:"far fa-plus-square enhancements",children:Object(i.jsx)("span",{className:"enhancements",children:t})},e)}))]})]})]})]})};function jt(){var t=Object(s.a)(["overflow: hidden;"]);return jt=function(){return t},t}function ut(){var t=Object(s.a)(["\n\tdisplay: flex;\n\talign-self: center;\n\tmax-width: 80%;\n\tjustify-content: center;\n\timg {\n\t\tmargin-bottom: 10px;\n\t\tmargin-top: 10px;\n\t}\n\t@media (min-width: 1190px) {\n\t\tmax-width: 40%;\n\t\tmargin-left: 10px;\n\t\tmargin-right: 10px;\n\t\tpadding: 0px;\n\t}\n"]);return ut=function(){return t},t}function xt(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmargin-bottom: 40px;\n\t@media (min-width: 1190px) {\n\t\tflex-direction: row;\n\t}\n"]);return xt=function(){return t},t}function gt(){var t=Object(s.a)(["\n\tmargin-top: 15vh;\n    display: flex;\n    flex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n    a {\n        text-decoration: none;\n        color: white;\n\t\tspan {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tpadding-left: 8px;\n\t\t}\n        i {\n            font-size: 1.5rem;\n            padding-bottom: 15px;\n            color: #0B4C5F;\n        }\n        i:hover {\n            color: #E9FA03;\n        }\n\t\t.top {\n\t\t\t\tpadding-bottom: 8px;\n\t\t}\n    }\n"]);return gt=function(){return t},t}var Ot=Object(d.b)(m.c.div)(gt()),vt=d.b.div(xt()),wt=Object(d.b)(O)(ut()),Mt=d.b.div(jt()),Lt=function(){return Object(i.jsxs)(Ot,{exit:"exit",variants:w,initial:"hidden",animate:"show",style:{background:"#1b1b1b"},children:[Object(i.jsx)(q,{}),Object(i.jsx)(Mt,{children:Object(i.jsx)(m.c.div,{variants:M,children:Object(i.jsx)("a",{href:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/CatherineResume03012021.pdf?alt=media&token=83a6e3bd-c4ce-4809-a7c8-de456b56f65a",target:"_blank",rel:"noreferrer",download:!0,children:Object(i.jsxs)("i",{class:"fas fa-file-download top",children:[Object(i.jsx)("span",{children:"Download PDF"})," "]})})})}),Object(i.jsxs)(vt,{children:[Object(i.jsx)(wt,{children:Object(i.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/CatherineResume03012021-1.png?alt=media&token=46c96bf6-a842-4fa1-ad42-0743b7746170",alt:"resume"})}),Object(i.jsx)(wt,{children:Object(i.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/portfolio-3dacc.appspot.com/o/CatherineResume03012021-2.png?alt=media&token=d6cacf4c-2d6d-4dfb-8148-d6be770d88f2",alt:"resume"})})]})]})},kt=n(21),yt=n(27);function At(){var t=Object(s.a)(["\n    padding: 8px 12px 8px 0px;\n    margin: auto 0;\n    text-decoration: none;\n\t&:hover {\n\t\tcolor: #E9FA03 !important;\n\t}\n\t&:active {\n\t\tcolor: #b8b7ad;\n\t}\n\t@media (min-width: 540px) {\n\t\tfont-size: 1.3rem;\n\t}\n\t@media (min-width: 1024px) {\n\t\tfont-size: 1.4rem;\n\t\tpadding-right: 20px;\n\t\tfont-weight: lighter;\n\t}\n\n"]);return At=function(){return t},t}function Nt(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: .8em;\n\tposition: fixed;\n\twidth: 100%;\n\ttop: 30px;\n\tleft: 0;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n\tbackground-color: #282828;\n\theight: 40px;\n\tz-index: 10;\n\t@media (min-width: 540px) {\n\t\tdisplay: flex;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tpadding: 0px;\n\t\tmargin: auto 15px auto auto;\n\t\twidth: initial;\n\t\tborder-bottom: none;\n\t\tposition: relative;\n\t}\n\t@media (min-width: 1024px) {\n\t\tmargin-right: 2%;\n\t}\n"]);return Nt=function(){return t},t}function zt(){var t=Object(s.a)(["\n\tz-index: 3;\n\theight: 60px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\tposition: fixed;\n\ttop: 0px;\n\tbackground-color: #282828;\n\t#logo {\n\t\tcolor: #b8b7ad;\n\t\tmargin: 10px 0px 5px 8px;\n\t\tfont-size: 1.3rem;\n\t\theight: 20px;\n\t\tpadding: 5px 0px 5px 8px;\n\t\talign-self: flex-start;\n\t}\n\t@media (min-width: 540px) {\n\t\tflex-direction: row;\n\t\theight: 50px;\n\t\t#logo {\n\t\t\tfont-size: 1.4rem;\n\t\t\tmargin: auto auto auto 12px;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\t@media (min-width: 768px) {\n\t\tposition: fixed;\n\t\theight: 8%;\n\t\t#logo {\n\t\t\tfont-size: 1.5rem;\n\t\t\tmargin: auto 0 auto 20px;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n"]);return zt=function(){return t},t}function Et(){var t=Object(H.g)().pathname;return Object(i.jsxs)(Ct,{children:[Object(i.jsx)(Rt,{id:"logo",to:"/",children:"Catherine Alexandra"}),Object(i.jsxs)(Ft,{children:[Object(i.jsx)(Rt,{style:{color:"/"===t?"#0b4c5f":"#b8b7ad"},to:"/",isActive:"/"===t,children:"About"}),Object(i.jsx)(Rt,{style:{color:"/work"===t?"#0b4c5f":"#b8b7ad"},to:"/work",isActive:"/work"===t,children:"Projects"}),Object(i.jsx)(Rt,{style:{color:"/resume"===t?"#0b4c5f":"#b8b7ad"},to:"/resume",isActive:"/resume"===t,children:"Resume"}),Object(i.jsx)(Rt,{style:{color:"/contact"===t?"#0b4c5f":"#b8b7ad"},to:"/contact",isActive:"/contact"===t,children:"Contact"})]})]})}var Ct=d.b.header(zt()),Ft=d.b.nav(Nt()),Rt=Object(d.b)((function(t){t.isActive;var e=t.children,n=Object(yt.a)(t,["isActive","children"]);return Object(i.jsx)(p.b,Object(kt.a)(Object(kt.a)({},n),{},{children:e}))}))(At());function St(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tflex-wrap: wrap;\n\n\tli {\n\t\tpadding: 10px;\n\t\tfont-size: 1.3rem;\n\t\tcolor: #b8b7ad;\n\t\ti {\n\t\t\tfont-size: 2rem;\n\t\t\tcolor: #b8b7ad;\n\t\t}\n\t\ti:hover {\n\t\t\tcolor: #e9fa03;\n\t\t\ttransition: all 0.5s ease;\n\t\t}\n\t}\n\tli:hover {\n\t\tcolor: #e9fa03 !important;\n\t\ttransition: all 0.5s ease !important;\n\t}\n\t.footer-link {\n\t\ttext-decoration: none;\n\t}\n"]);return St=function(){return t},t}function Bt(){var t=Object(s.a)(["\n\tmin-height: 10vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: auto;\n\tbackground: #282828;\n\tpadding: 1rem;\n\tbottom: 0;\n\tp {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tpadding-top: 25px;\n\t\tpadding-bottom: 0px;\n\t\tfont-size: 1rem;\n\t\tline-height: normal;\n\t\tcolor: #b8b7ad;\n\t}\n"]);return Bt=function(){return t},t}var It=function(){var t=Object(H.g)().pathname;return Object(i.jsxs)(Tt,{children:[Object(i.jsxs)(Pt,{children:[Object(i.jsx)(p.b,{className:"footer-link",to:"/",children:Object(i.jsx)("li",{style:{color:"/"===t?"#0b4c5f":"#b8b7ad"},children:"About"})}),Object(i.jsx)(p.b,{className:"footer-link",to:"/work",children:Object(i.jsx)("li",{style:{color:"/work"===t?"#0b4c5f":"#b8b7ad"},children:"Projects"})}),Object(i.jsx)(p.b,{className:"footer-link",to:"/resume",children:Object(i.jsx)("li",{style:{color:"/resume"===t?"#0b4c5f":"#b8b7ad"},children:"Resume"})}),Object(i.jsx)(p.b,{className:"footer-link",to:"/contact",children:Object(i.jsx)("li",{style:{color:"/contact"===t?"#0b4c5f":"#b8b7ad"},children:"Contact"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{id:"github-link",href:"https://github.com/8catherine-alexandra8",target:"_blank",rel:"noreferrer",className:"footer-link",children:Object(i.jsx)("i",{className:"fab fa-github external-link"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{id:"linkedin-link",href:"https://www.linkedin.com/in/catherine-alexandra-b595a957/",target:"_blank",rel:"noreferrer",className:"footer-link",children:Object(i.jsx)("i",{className:"fab fa-linkedin external-link"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{id:"email",href:"mailto:catherine.alexandra.dev@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:Object(i.jsx)("i",{className:"far fa-envelope external-link"})})})]}),Object(i.jsx)("p",{children:"\xa9 2021 Catherine Alexandra. All rights reserved."})]})},Tt=d.b.footer(Bt()),Pt=d.b.ul(St());var Ht=function(){var t=Object(H.g)();return console.log("window vw by vh",window.innerWidth,"X",window.innerHeight),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(h,{}),Object(i.jsx)(Et,{}),Object(i.jsx)(m.a,{exitBeforeEnter:!0,children:Object(i.jsxs)(H.c,{location:t,children:[Object(i.jsx)(H.a,{path:"/",exact:!0,children:Object(i.jsx)(D,{})}),Object(i.jsx)(H.a,{path:"/work",exact:!0,children:Object(i.jsx)(it,{})}),Object(i.jsx)(H.a,{path:"/work/:id",children:Object(i.jsx)(ft,{})}),Object(i.jsx)(H.a,{path:"/resume",children:Object(i.jsx)(Lt,{})}),Object(i.jsx)(H.a,{path:"/contact",children:Object(i.jsx)(K,{})})]},t.pathname)}),Object(i.jsx)(It,{})]})},qt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),r(t),o(t)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p.a,{children:Object(i.jsx)(Ht,{})})}),document.getElementById("root")),qt()}},[[39,1,2]]]);
//# sourceMappingURL=main.7aee9892.chunk.js.map