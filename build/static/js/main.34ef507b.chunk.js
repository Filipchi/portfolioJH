(this["webpackJsonpfilipchi-portfolio"]=this["webpackJsonpfilipchi-portfolio"]||[]).push([[0],{375:function(n,e,t){"use strict";t.r(e);var i,r=t(0),a=t.n(r),o=t(44),c=t.n(o),l=t(37),s=t(6),d=t(38),b=t(7),m=t.p+"static/media/avatar.7d2c7204.jpeg",h=t(1);var p,j=b.b.nav(i||(i=Object(s.a)(['\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  border-right: 1px solid var(--border-color);\n  .avatar {\n    width: 100%;\n    border-bottom: 0.5px solid var(--border-color);\n    text-align: center;\n    padding: 1rem 0;\n    img {\n      width: 60%;\n      border-radius: 50%;\n      border: 1px solid var(--border-color);\n    }\n  }\n\n  .nav-items {\n    width: 100%;\n    text-align: center;\n    .active-class {\n      background-color: var(--primary-color-light);\n      color: white;\n    }\n    li {\n      display: block;\n      a {\n        display: block;\n        padding: 0.45rem 0;\n        position: relative;\n        z-index: 10;\n        text-transform: uppercase;\n        transition: all 0.4s ease-in-out;\n        font-weight: 600;\n        letter-spacing: 1px;\n        &:hover {\n          cursor: pointer;\n          color: var(--white-color);\n        }\n        &::before {\n          content: "";\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 0;\n          height: 50%;\n          background-color: var(--primary-color);\n          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);\n          opacity: 0.21;\n          z-index: -1;\n        }\n      }\n\n      a:hover::before {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n\n  footer {\n    border-top: 1px solid var(--border-color);\n    width: 100%;\n    p {\n      padding: 1.3rem 0;\n      font-size: 1.1rem;\n      display: block;\n      text-align: center;\n    }\n  }\n']))),g=function(n){var e=n.navToggle,t=n.setNavToggle,i=function(){t(!e)};return Object(h.jsxs)(j,{children:[Object(h.jsx)("div",{className:"avatar",children:Object(h.jsx)("img",{src:m,alt:""})}),Object(h.jsxs)("ul",{className:"nav-items",children:[Object(h.jsx)("li",{className:"nav-item",onClick:function(){return i()},children:Object(h.jsx)(l.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",onClick:function(){return i()},children:Object(h.jsx)(l.b,{to:"/about",activeClassName:"active-class",exact:!0,children:"About"})}),Object(h.jsx)("li",{className:"nav-item",onClick:function(){return i()},children:Object(h.jsx)(l.b,{to:"/resume",activeClassName:"active-class",exact:!0,children:"Resume"})}),Object(h.jsx)("li",{className:"nav-item",onClick:function(){return i()},children:Object(h.jsx)(l.b,{to:"/portfolio",activeClassName:"active-class",exact:!0,children:"Portfolio"})})]}),Object(h.jsx)("footer",{className:"footer",children:Object(h.jsxs)("p",{children:["@2022 ",Object(h.jsx)("b",{children:"JF Ospina"})]})})]})};var x=b.b.div(p||(p=Object(s.a)(["\n  width: 16.3rem;\n  position: fixed;\n  height: 100vh;\n  background-color: var(--sidebar-dark-color);\n  overflow: hidden;\n  transition: all 0.4s ease-in-out;\n  @media screen and (max-width: 1200px) {\n    transform: translateX(-100%);\n    z-index: 20;\n  }\n"]))),u=function(n){var e=n.navToggle,t=n.setNavToggle;return Object(h.jsx)(x,{className:"".concat(e?"nav-toggle":""),children:Object(h.jsx)(g,{navToggle:e,setNavToggle:t})})},f=t(64),v=t.n(f),O=t(121),y=t.n(O),k=t(117),w=t.n(k);var N,z=function(){return Object(h.jsx)(w.a,{width:"100%",height:"100vh",params:{particles:{number:{value:109,density:{enable:!0,value_area:1200}},color:{value:"#636e72"},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:6}},line_linked:{enable:!1,distance:150,opacity:.9,width:1,shadow:{enable:!0,color:"#e74c3c",blur:5}},move:{enable:!0,random:!0,speed:.6,attract:{rotateX:600,rotateY:1200}},size:{value:4,random:!0,anim:{speed:40,size_min:.1}},opacity:{value:.8,anim:{speed:1,opacity_min:.1}}}}})};var F,T=b.b.header(N||(N=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n\n  .typography {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    width: 80%;\n\n    .icons {\n      display: flex;\n      justify-content: center;\n      margin-top: 1rem;\n      .icon {\n        border: 2px solid var(--border-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        transition: all 0.4s ease-in-out;\n        cursor: pointer;\n        &:hover {\n          border: 2px solid var(--primary-color);\n          color: var(--primary-color);\n        }\n        &:not(:last-child) {\n          margin-right: 1rem;\n        }\n        svg {\n          margin: 0.5rem;\n        }\n      }\n\n      .i-youtube {\n        &:hover {\n          border: 2px solid red;\n          color: red;\n        }\n      }\n      .i-github {\n        &:hover {\n          border: 2px solid #5f4687;\n          color: #5f4687;\n        }\n      }\n    }\n  }\n"]))),A=function(){return Object(h.jsxs)(T,{children:[Object(h.jsx)("div",{className:"particle-con",children:Object(h.jsx)(z,{})}),Object(h.jsxs)("div",{className:"typography",children:[Object(h.jsxs)("h1",{children:["Hi, I'm ",Object(h.jsx)("span",{children:"Jhon Fredy Ospina"})]}),Object(h.jsx)("h2",{children:"Physicist Engineer and Programmer"}),Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)("a",{href:"https://github.com/filipchi",target:"_blank",className:"icon i-github",children:Object(h.jsx)(v.a,{})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/jf-ospina/",target:"_blank",className:"icon i-linkedin",children:Object(h.jsx)(y.a,{})})]})]})]})},C=t.p+"static/media/resume.060e6bf6.jpeg",S=t.p+"static/media/resume.74167444.pdf";var M,E=b.b.a(F||(F=Object(s.a)(['\n  background-color: var(--primary-color);\n  padding: 0.3rem 8rem;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  font-size: inherit;\n  text-transform: uppercase;\n  position: relative;\n  transition: all 0.4s ease-in-out;\n  &::after {\n    content: "";\n    position: absolute;\n    width: 0;\n    height: 0.2rem;\n    transition: all 0.4s ease-in-out;\n    left: 0;\n    bottom: 0;\n    opacity: 0.7;\n  }\n  &:hover::after {\n    width: 100%;\n    background-color: var(--white-color);\n  }\n']))),J=function(n){var e=n.title;return Object(h.jsx)(E,{href:S,target:"_blank",children:e})};var R,I=b.b.div(M||(M=Object(s.a)(["\n  margin-top: 5rem;\n  display: flex;\n  @media screen and (max-width: 1000px) {\n    flex-direction: column;\n    .left-content {\n      margin-bottom: 2rem;\n    }\n  }\n  .left-content {\n    text-align: center;\n    width: 100%;\n    img {\n      width: 95%;\n      object-fit: cover;\n    }\n  }\n  .right-content {\n    padding: 0.8em;\n    width: 100%;\n    h4 {\n      font-size: 2rem;\n      color: var(--white-color);\n      span {\n        font-size: 2rem;\n      }\n    }\n    .paragraph {\n      padding: 1rem 0;\n    }\n    .about-info {\n      display: flex;\n      padding-bottom: 1.4rem;\n      .info-title {\n        padding-right: 3rem;\n        p {\n          font-weight: 600;\n        }\n      }\n      .info-title,\n      .info {\n        p {\n          padding: 0.3rem 0;\n        }\n      }\n    }\n  }\n"]))),D=function(){return Object(h.jsxs)(I,{children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("img",{src:C,alt:""})}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsxs)("h4",{children:["I'm ",Object(h.jsx)("span",{children:"Jhon Fredy Ospina"})]}),Object(h.jsxs)("p",{className:"paragraph",children:["I am a person with a strong desire to learn and explore the different tools that programming offers. In addition, in my training as a physics engineer, I consider myself like a person with outstanding analytical skills. ",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"Currently, I am in search of my first job in which I can put into practice the knowledge I have acquired."]}),Object(h.jsxs)("div",{className:"about-info",children:[Object(h.jsxs)("div",{className:"info-title",children:[Object(h.jsx)("p",{children:"Full Name"}),Object(h.jsx)("p",{children:"Age"}),Object(h.jsx)("p",{children:"English Level"}),Object(h.jsx)("p",{children:"Location"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{children:": Jhon Fredy Ospina Galeano"}),Object(h.jsx)("p",{children:": 23"}),Object(h.jsx)("p",{children:": B1 "}),Object(h.jsx)("p",{children:": Risaralda, Colombia"})]})]}),Object(h.jsx)(J,{title:"View CV"})]})]})};var P,_,L,V=b.b.div(R||(R=Object(s.a)(['\n    position: relative;\n    h2{\n        color: var(--white-color);\n        font-size: 3.1rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        position: relative;\n        padding-bottom: .7rem;\n        @media screen and (max-width: 496px){\n            font-size: 2.8rem;\n        }\n        @media screen and (max-width: 370px){\n            font-size: 2rem;\n        }\n        &::before{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 7.4rem;\n            height: .33rem;\n            background-color: var(--background-light-color-2);\n            border-radius: 15px;\n            left: 0;\n        }\n        &::after{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 3.5rem;\n            height: .33rem;\n            background-color: var(--primary-color);\n            border-radius: 15px;\n            left: 0;\n        }\n        span{\n            font-weight: 900;\n            color: rgba(25,29,43,.44);\n            font-size: 5rem;\n            position: absolute;\n            left: 0;\n            top: 30%;\n            z-index: -1;\n            @media screen and (max-width: 620px){\n                font-size: 4rem;\n            }\n            @media screen and (max-width: 496px){\n                font-size: 3rem;\n            }\n            @media screen and (max-width: 370px){\n                font-size: 2rem;\n            }\n        }\n    }\n']))),B=function(n){var e=n.title,t=n.span;return Object(h.jsx)(V,{children:Object(h.jsxs)("h2",{children:[e," ",Object(h.jsx)("b",{children:Object(h.jsx)("span",{children:t})})]})})},U=b.b.div(P||(P=Object(s.a)(["\n    padding: 5rem;\n    @media screen and (max-width: 642px){\n        padding: 4rem;\n    }\n    /* @media screen and (max-width: 510px){\n        padding: 3rem;\n    } */\n    @media screen and (max-width: 571px){\n        padding: 2rem .4rem;\n    }\n"]))),H=b.b.div(_||(_=Object(s.a)(["\n    padding: 5rem 1rem;\n"])));var Y,G=b.b.section(L||(L=Object(s.a)([""]))),Q=function(){return Object(h.jsx)(U,{children:Object(h.jsxs)(G,{children:[Object(h.jsx)(B,{title:"About Me",span:"About Me"}),Object(h.jsx)(D,{})]})})};var X,W=b.b.div(Y||(Y=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    p{\n        padding-right: 1rem;\n        svg{\n            font-size: 3rem;\n        }\n    }\n    h3{\n        color: var(--white-color);\n        font-size: 2rem;\n    }\n"]))),q=function(n){var e=n.icon,t=n.title;return Object(h.jsxs)(W,{children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("h3",{children:t})]})},K=t(122),Z=t.n(K),$=t(123),nn=t.n($);var en,tn=b.b.div(X||(X=Object(s.a)(['\n  display: flex;\n  @media screen and (max-width: 421px) {\n    p,\n    h5,\n    h6 {\n      font-size: 80%;\n    }\n  }\n  &:not(:last-child) {\n    padding-bottom: 3rem;\n  }\n  .left-content {\n    min-width: 20%;\n    padding-left: 20px;\n    position: relative;\n    &::before {\n      content: "";\n      position: absolute;\n      left: -10px;\n      top: 5px;\n      height: 15px;\n      width: 15px;\n      border-radius: 50%;\n      border: 2px solid var(--border-color);\n      background-color: var(--background-dark-color);\n    }\n    p {\n      display: inline-block;\n    }\n  }\n  .right-content {\n    padding-left: 5rem;\n    position: relative;\n    &::before {\n      content: "";\n      position: absolute;\n      left: 0;\n      top: 15px;\n      height: 2px;\n      width: 3rem;\n      background-color: var(--border-color);\n    }\n    h5 {\n      color: var(--primary-color);\n      font-size: 2rem;\n      padding-bottom: 0.4rem;\n    }\n    h6 {\n      padding-bottom: 0.6rem;\n      font-size: 1.5rem;\n    }\n  }\n']))),rn=function(n){var e=n.year,t=n.title,i=n.subTitle,r=n.text;return Object(h.jsxs)(tn,{children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("p",{children:e})}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)("h5",{children:t}),Object(h.jsx)("h6",{children:i}),Object(h.jsx)("p",{children:r})]})]})};var an,on=b.b.section(en||(en=Object(s.a)(["\n  .small-title {\n    padding-bottom: 3rem;\n  }\n  .u-small-title-margin {\n    margin-top: 4rem;\n  }\n\n  .resume-content {\n    border-left: 2px solid var(--border-color);\n  }\n"]))),cn=function(){var n=Object(h.jsx)(Z.a,{}),e=Object(h.jsx)(nn.a,{});return Object(h.jsxs)(on,{children:[Object(h.jsx)(B,{title:"Resume",span:"resume"}),Object(h.jsxs)(H,{children:[Object(h.jsx)("div",{className:"small-title u-small-title-margin",children:Object(h.jsx)(q,{icon:n,title:"Educational Qualifications"})}),Object(h.jsxs)("div",{className:"resume-content ",children:[Object(h.jsx)(rn,{year:"Apr 2021 - Dec 2021",title:"Diploma in Mobile Application Development",subTitle:"Universidad Tecnol\xf3gica de Pereira | MisionTic2022",text:"Web application development with MEVN stack and a mobile application in Java using scrum agile methodology."}),Object(h.jsx)(rn,{year:"Jan 2015 - Dec 2020",title:"Physics Enginnering",subTitle:"Universidad Tecnol\xf3gica de Pereira",text:"Training in electronics, programming, mathematics, metrology, materials science, physics and research skills."})]}),Object(h.jsx)("div",{className:"small-title u-small-title-margin",children:Object(h.jsx)(q,{icon:e,title:"Further Training"})}),Object(h.jsxs)("div",{className:"resume-content ",children:[Object(h.jsx)(rn,{year:"Jan 2022",title:"Complete Course of React",subTitle:"Udemy",text:"Review of the fundamental concepts of React such as Components, React Hooks, Context Api, React Router, etc."}),Object(h.jsx)(rn,{year:"Oct 2021",title:"Essential JavaScript",subTitle:"LinkedIn Learning",text:"Review of the fundamentals of modern JavaScript in ES6 version with emphasis on object-oriented programming OOP."}),Object(h.jsx)(rn,{year:"May 2021",title:"Learn SCRUM",subTitle:"LinkedIn Learning",text:"Review of the main fundamentals to start organizing your projects by reducing unnecessary work and increasing productivity."})]})]})]})};var ln,sn=b.b.div(an||(an=Object(s.a)(["\n    .progress-bar{\n        display: flex;\n        align-items: center;\n        p{\n            padding-right: 1.1rem;\n        }\n        .progress{\n            position: relative;\n            width: 100%;\n            height: .4rem;\n            background-color: var(--border-color);\n            span{\n                position: absolute;\n                left: 0;\n                bottom: 0;\n                height: 100%;\n                background-color: var(--primary-color)\n            }\n        }\n    }\n"]))),dn=function(n){var e=n.title,t=n.width,i=n.text;return Object(h.jsxs)(sn,{children:[Object(h.jsx)("h6",{children:e}),Object(h.jsxs)("div",{className:"progress-bar",children:[Object(h.jsx)("p",{children:i}),Object(h.jsx)("div",{className:"progress",children:Object(h.jsx)("span",{style:{width:t}})})]})]})};var bn=b.b.section(ln||(ln=Object(s.a)(["\n  .skills {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-row-gap: 2rem;\n    grid-column-gap: 3rem;\n    @media screen and (max-width: 700px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n  }\n"]))),mn=function(){return Object(h.jsxs)(bn,{children:[Object(h.jsx)(B,{title:"My Skills",span:"my skills"}),Object(h.jsx)(H,{children:Object(h.jsxs)("div",{className:"skills",children:[Object(h.jsx)(dn,{title:"REACT.JS",width:"50%",text:"50%"}),Object(h.jsx)(dn,{title:"VUE.JS",width:"65%",text:"65%"}),Object(h.jsx)(dn,{title:"JAVASCRIPT",width:"67%",text:"67%"}),Object(h.jsx)(dn,{title:"PYTHON",width:"58%",text:"58%"}),Object(h.jsx)(dn,{title:"JAVA",width:"80%",text:"80%"}),Object(h.jsx)(dn,{title:"SQL",width:"40%",text:"40%"}),Object(h.jsx)(dn,{title:"HTML5",width:"90%",text:"90%"}),Object(h.jsx)(dn,{title:"CSS3",width:"80%",text:"80%"})]})})]})};var hn,pn=function(){return Object(h.jsxs)(U,{children:[Object(h.jsx)(mn,{}),Object(h.jsx)(cn,{})]})},jn=t(126),gn=t.p+"static/media/todo.95b711c2.png",xn=t.p+"static/media/adivina-el-numero.1b1c3a79.png",un=t.p+"static/media/candy-machine.914b6c49.png",fn=[{id:1,category:"React",image:gn,link1:"https://github.com/Filipchi/ToDo-app",link2:"https://filipchi.github.io/ToDo-app/",title:"ToDo - App",text:"A basic ToDo app using React.js"},{id:2,category:"Javascript",image:xn,link1:"https://github.com/Filipchi/AdivinarNumero",link2:"https://filipchi.github.io/AdivinarNumero/",title:"\xa1Adivina el N\xfamero!",text:"A basic game using JavaScript"},{id:3,category:"Mobile",image:t.p+"static/media/oldanime.012f5b68.png",link1:"https://gitlab.com/g2e7/oldanime1/-/tree/master",link2:"https://gitlab.com/g2e7/oldanime1/-/tree/master",title:"Oldanime",text:"Mobile App Streaming focused on Anime"},{id:4,category:"Vue",image:t.p+"static/media/mr-empanada.1e2b955a.png",link1:"https://github.com/Grupo1postventas/MrEmpanada-MEVN",link2:"https://mrempanada2.herokuapp.com/",title:"Mr. Empanada",text:"Web application using MEVN Stack"},{id:5,category:"Java",image:un,link1:"https://github.com/Filipchi/CandyMachine_code",link2:"https://filipchi.github.io/CandyMachine_page/",title:"Candy Machine",text:"OOP practice in Java"},{id:6,category:"Flask",image:t.p+"static/media/under-construction.d1cc4be1.png",link1:"https://github.com/ppjcode",link2:"https://github.com/ppjcode",title:"BirdPy",text:"Application using Flask"}],vn=t(124),On=t.n(vn);var yn,kn,wn=b.b.div(hn||(hn=Object(s.a)(['\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n    @media screen and (max-width:920px){\n        grid-template-columns: repeat(2, 1fr);\n    }\n    @media screen and (max-width:670px){\n        grid-template-columns: repeat(1, 1fr);\n    }\n    .grid-item{\n        .portfolio-content{\n            display: block;\n            position: relative;\n            overflow: hidden;\n            h6{\n                font-size: 1.5rem;\n            }\n            img{\n                width: 100%;\n                height: 30vh;\n                object-fit: cover;\n            }\n            ul{\n                transform: translateY(-600px);\n                transition: all .4s ease-in-out;\n                position: absolute;\n                left: 50%;\n                top: 40%;\n                opacity: 0;\n                li{\n                        background-color: var(--border-color);\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding: 1rem;\n                        border-radius: 50%;\n                        width: 3rem;\n                        height: 3rem;\n                        margin: 0 .5rem;\n                        transition: all .4s ease-in-out;\n                        &:hover{\n                            background-color: var(--primary-color);\n                        }\n                        a{\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            transition: all .4s ease-in-out;\n                        }\n                    }\n            }\n\n            .portfolio-image{\n                &::before{\n                    content: "";\n                    position: absolute;\n                    left: 2%;\n                    top: 4%;\n                    height: 0;\n                    width: 0;\n                    transition: all .4s ease-in-out;\n                }\n            }\n            .portfolio-image:hover{\n                ul{\n                    transform: translateY(0);\n                    transform: translate(-50%, -50%);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    transition: all .4s ease-in-out;\n                    opacity: 1;\n                    li{\n                        transition: all .4s ease-in-out;\n                        &:hover{\n                            background-color: var(--primary-color);\n                        }\n                        a{\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            transition: all .4s ease-in-out;\n                        }\n                    }\n\n                    li:hover{\n                        svg{\n                            color: var(--white-color);\n                        }\n                    }\n                    svg{\n                        font-size: 2rem;\n                    }\n                }\n                &::before{\n                    height: calc(100% - 32%) ;\n                    width: calc(100% - 4%);\n                    background-color: white;\n                    opacity: 0.9;\n                    transform-origin: left;\n                    \n                    transition: all .4s ease-in-out;\n                }\n            }\n        }\n    }\n']))),Nn=function(n){var e=n.menuItem;return Object(h.jsx)(wn,{children:e.map((function(n){return Object(h.jsx)("div",{className:"grid-item",children:Object(h.jsxs)("div",{className:"portfolio-content",children:[Object(h.jsxs)("div",{className:"portfolio-image",children:[Object(h.jsx)("img",{src:n.image,alt:""}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:n.link1,target:"_blank",children:Object(h.jsx)(v.a,{})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:n.link2,target:"_blank",children:Object(h.jsx)(On.a,{})})})]})]}),Object(h.jsx)("h6",{children:n.title}),Object(h.jsx)("p",{children:n.text})]})},n.id)}))})};var zn=b.b.button(yn||(yn=Object(s.a)(["\n    outline: none;\n    border: none;\n    background-color: var(--background-light-color-2);\n    padding: .4rem 2rem;\n    font-size: inherit;\n    color: var(--white-color);\n    cursor: pointer;\n    transition: all .4s ease-in-out;\n    margin-bottom: .6rem;\n    &:active ,&:focus{\n        background-color: var(--primary-color);\n    }\n    &:hover{\n        background-color: var(--primary-color);\n    }\n\n    &:not(:last-child){\n        margin-right: .6rem;\n    }\n"]))),Fn=b.b.div(kn||(kn=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 70%;\n    margin: 2.4rem auto;\n"]))),Tn=function(n){var e=n.filter,t=n.button;return Object(h.jsx)(Fn,{children:t.map((function(n,t){return Object(h.jsx)(zn,{onClick:function(){return e(n)},children:n},t)}))})},An=["All"].concat(Object(jn.a)(new Set(fn.map((function(n){return n.category})))));var Cn,Sn=function(){var n=Object(r.useState)(fn),e=Object(d.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(An),o=Object(d.a)(a,2),c=o[0];return o[1],Object(h.jsxs)(U,{children:[Object(h.jsx)(B,{title:"Portfolio",span:"portfolio"}),Object(h.jsxs)(H,{children:[Object(h.jsx)(Tn,{filter:function(n){if("All"!==n){var e=fn.filter((function(e){return e.category===n}));i(e)}else i(fn)},button:c}),Object(h.jsx)(Nn,{menuItem:t})]})]})},Mn=t(125),En=t.n(Mn),Jn=t(9),Rn=t(391);var In,Dn=b.b.main(Cn||(Cn=Object(s.a)(["\n  position: relative;\n  margin-left: 16.3rem;\n  min-height: 100vh;\n  @media screen and (max-width: 1200px) {\n    margin-left: 0;\n  }\n  .lines {\n    position: absolute;\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    opacity: 0.4;\n    z-index: -1;\n    .line-1,\n    .line-2,\n    .line-3,\n    .line-4 {\n      width: 1px;\n      min-height: 100vh;\n      background-color: var(--border-color);\n    }\n  }\n"]))),Pn=function(){var n=Object(r.useState)("dark-theme"),e=Object(d.a)(n,2),t=e[0],i=(e[1],Object(r.useState)(!1)),a=Object(d.a)(i,2),o=(a[0],a[1],Object(r.useState)(!1)),c=Object(d.a)(o,2),l=c[0],s=c[1];return Object(r.useEffect)((function(){document.documentElement.className=t}),[t]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{navToggle:l,setNavToggle:s}),Object(h.jsx)("div",{className:"ham-burger-menu",children:Object(h.jsx)(Rn.a,{onClick:function(){return s(!l)},children:Object(h.jsx)(En.a,{})})}),Object(h.jsxs)(Dn,{children:[Object(h.jsxs)("div",{className:"lines",children:[Object(h.jsx)("div",{className:"line-1"}),Object(h.jsx)("div",{className:"line-2"}),Object(h.jsx)("div",{className:"line-3"}),Object(h.jsx)("div",{className:"line-4"})]}),Object(h.jsxs)(Jn.c,{children:[Object(h.jsx)(Jn.a,{path:"/",exact:!0,children:Object(h.jsx)(A,{})}),Object(h.jsx)(Jn.a,{path:"/about",children:Object(h.jsx)(Q,{})}),Object(h.jsx)(Jn.a,{path:"/resume",children:Object(h.jsx)(pn,{})}),Object(h.jsx)(Jn.a,{path:"/portfolio",children:Object(h.jsx)(Sn,{})})]})]})]})},_n=Object(b.a)(In||(In=Object(s.a)(["\n/* :root{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n\n} */\n\n.light-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #ff7675;\n    --background-dark-color: #F1F1F1;\n    --background-dark-grey: #e4e4e4;\n    --border-color: #cbced8;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #151515;\n    --font-light-color: #313131;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #E4E4E4;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n.dark-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    text-decoration: none;\n    font-family: 'Nunito', sans-serif;\n    font-size: 1.1rem;\n    \n}\n\nbody{\n    background-color: var(--background-dark-color);\n    color: var(--font-light-color);\n    transition: all .4s ease-in-out;\n}\n\nbody::-webkit-scrollbar{\n    width: 9px;\n    background-color: #383838;\n}\nbody::-webkit-scrollbar-thumb{\n    border-radius: 10px;\n    background-color: #6b6b6b;\n}\nbody::-webkit-scrollbar-track{\n    border-radius: 10px;\n    background-color: #383838;\n}\n\ntextarea{\n    max-width: 100%;\n}\na{\n    font-family: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-size: 1rem;\n}\n\nh1{\n    font-size: 4rem;\n    color: var(--white-color);\n    span{\n        font-size: 4rem;\n        @media screen and (max-width: 502px){\n            font-size: 3rem\n        }\n    }\n    @media screen and (max-width: 502px){\n        font-size: 3rem\n    }\n}\n\nspan{\n    color: var(--primary-color);\n}\nh6{\n    color: var(--white-color);\n    font-size: 1.2rem;\n    padding-bottom: .6rem;\n}\n\n//Utilities\n.u-margin-bottom{\n    margin-bottom: 4rem;\n}\n\n\n//Floting Toggler\n.light-dark-mode{\n    position: fixed;\n    right: 0;\n    top: 50%;\n    background-color: var(--background-light-color-2);\n    width: 6.5rem;\n    height: 2.5rem;\n    z-index: 15;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg{\n      display: flex;\n      align-items: center;\n      font-size: 1.7rem;\n      color: var(--white-color);\n    }\n  }\n\n  //Nav Toggler\n  .ham-burger-menu{\n      position: absolute;\n      right: 5%;\n      top: 3%; \n      display: none;\n      z-index: 15;\n      svg{\n          font-size: 3rem;\n      }\n    }\n\n    .nav-toggle{\n        transform: translateX(0);\n        z-index: 20;\n    }\n  @media screen and (max-width:1200px){\n    .ham-burger-menu{\n        display: block;\n    }\n  }\n\n\n//Global Media Queries\n\n\n\n"])));c.a.render(Object(h.jsxs)(a.a.StrictMode,{children:[Object(h.jsx)(_n,{}),Object(h.jsx)(l.a,{children:Object(h.jsx)(Pn,{})})]}),document.getElementById("root"))}},[[375,1,2]]]);
//# sourceMappingURL=main.34ef507b.chunk.js.map