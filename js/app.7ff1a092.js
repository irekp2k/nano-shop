(function(t){function e(e){for(var s,r,n=e[0],c=e[1],l=e[2],p=0,d=[];p<n.length;p++)r=n[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"064e":function(t,e,a){t.exports=a.p+"img/clinic.955f8057.png"},"124a":function(t,e,a){t.exports=a.p+"img/helpdesk.83ebd68b.jpeg"},"189e":function(t,e,a){t.exports=a.p+"img/logo.9e19fc79.png"},"1fab":function(t,e,a){t.exports=a.p+"img/member1.9c68daec.png"},2001:function(t,e,a){t.exports=a.p+"img/mail.1093a0c2.png"},3404:function(t,e,a){t.exports=a.p+"img/background-slider.40599ae2.png"},"3ed1":function(t,e,a){},"49d0":function(t,e,a){t.exports=a.p+"img/phone.b125d4ce.png"},"52d9":function(t,e,a){},5554:function(t,e,a){t.exports=a.p+"img/skill.ef89b620.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],r={data:function(){return{}}},n=r,c=a("2877"),l=Object(c["a"])(n,i,o,!1,null,null,null),u=l.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"landing-layout"},[a("navbar"),a("slider"),a("offer"),a("pricing"),a("team"),a("contact"),a("footerComponent")],1)},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"main-logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a("189e"),alt:"logo"}})])],1),s("div",{staticClass:"bookmarks"},[s("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".benefits",expression:"'.benefits'"}],staticClass:"bookmark",attrs:{to:"/"}},[t._v("O platformie")]),s("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".pricing-container",expression:"'.pricing-container'"}],staticClass:"bookmark",attrs:{to:"/"}},[t._v("Członkostwo")]),s("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".team-container",expression:"'.team-container'"}],staticClass:"bookmark",attrs:{to:"/"}},[t._v("Kim jesteśmy?")]),s("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".contact-box",expression:"'.contact-box'"}],staticClass:"bookmark",attrs:{to:"/"}},[t._v("Kontakt")])],1),s("div",{staticClass:"account-box"},[s("router-link",{staticClass:"small-btn login-btn",attrs:{to:"/auth/login"}},[t._v("Zaloguj się")]),s("router-link",{staticClass:"small-btn register-btn",attrs:{to:"/auth/register/patient"}},[t._v("Dołącz do nas")]),s("transition",{attrs:{name:"auth"}},[s("router-view")],1)],1)])])])},f=[],g={data:function(){return{}}},b=g,h=Object(c["a"])(b,v,f,!1,null,null,null),C=h.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider",style:{backgroundImage:"url("+t.backgroundPhoto+")"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("carousel",{attrs:{"per-page":1,"mouse-drag":!0,paginationActiveColor:"#36ab68",autoplay:!0,autoplayTimeout:1e4}},[s("slide",{staticClass:"slide"},[s("div",{staticClass:"description"},[s("h1",[t._v("Book your health")]),s("p",[t._v("Przedstawiamy portal umożliwiający w łatwy sposób rejestrację do lekarzy w wielu placówkach medycznych na terenie Polski.")])]),s("div",{staticClass:"image"},[s("img",{attrs:{src:a("cd6c"),alt:"screens"}})])]),s("slide",{staticClass:"slide"},[s("div",{staticClass:"description"},[s("h1",[t._v("Automatyzacja procesu rejestracji")]),s("p",[t._v("Dzięki naszej platformie rejestracja pacjentów jest dużo prostsza i pozwala lekarzom jak i placówkom medycznym na zaoszczędzeniu czasu oraz pieniędzy.")])]),s("div",{staticClass:"image"},[s("img",{attrs:{src:a("f87f"),alt:"screens"}})])]),s("slide",{staticClass:"slide"},[s("div",{staticClass:"description"},[s("h1",[t._v("Zawsze dostępna historia choroby")]),s("p",[t._v("Korzystajac z systemu rejestracji book your health mają państwo możliwość sprawdzenia ostatnich wizyt u lekarzy.")])]),s("div",{staticClass:"image"},[s("img",{attrs:{src:a("9bd0"),alt:"screens"}})])])],1)],1)])])},y=[],w={data:function(){return{backgroundPhoto:a("3404")}}},k=w,z=Object(c["a"])(k,_,y,!1,null,null,null),x=z.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"benefits"},[t._m(0),a("div",{staticClass:"alc-types-row"},[a("div",{staticClass:"alc-type-cube",style:{backgroundImage:"url("+t.offerImages[0]+")"}},[t._m(1)]),a("div",{staticClass:"alc-type-cube",style:{backgroundImage:"url("+t.offerImages[1]+")"}},[t._m(2)]),a("div",{staticClass:"alc-type-cube",style:{backgroundImage:"url("+t.offerImages[2]+")"}},[t._m(3)]),a("div",{staticClass:"alc-type-cube",style:{backgroundImage:"url("+t.offerImages[3]+")"}},[t._m(4)])])])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row benefits-row"},[s("h1",{staticClass:"main-header"},[t._v("Co oferujemy?")]),s("div",{staticClass:"separator"}),s("div",{staticClass:"benefits-container"},[s("div",{staticClass:"benefit-box"},[s("div",{staticClass:"icon-circle"},[s("img",{attrs:{src:a("f534"),alt:""}})]),s("h3",{staticClass:"benefit-title"},[t._v("Użytkownicy")]),s("p",{staticClass:"benefit-desc"},[t._v("Dysponujemy liczną grupą potencjalnych pacjentów. Z portalu Book Your Health skorzystało do tej pory ponad 50 000 użytkowników.")])]),s("div",{staticClass:"benefit-box"},[s("div",{staticClass:"icon-circle"},[s("img",{attrs:{src:a("fdab"),alt:""}})]),s("h3",{staticClass:"benefit-title"},[t._v("Baza lekarzy")]),s("p",{staticClass:"benefit-desc"},[t._v("Wiele placówek oraz szpitali dołączyło do naszego systemu dzięki czemu rejestrując się w platformie zyskujesz dostęp do wielu specjalistów od ręki.")])]),s("div",{staticClass:"benefit-box"},[s("div",{staticClass:"icon-circle"},[s("img",{attrs:{src:a("d917"),alt:""}})]),s("h3",{staticClass:"benefit-title"},[t._v("Profesjonalizm")]),s("p",{staticClass:"benefit-desc"},[t._v("Naszym celem jest współpraca z profesjonalistami. Oferujemy więc możliwość zapisu do najlepszych specjalistów w kraju.")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("h3",[t._v("Szpitale")]),a("div",{staticClass:"alc-overlay"},[a("div",{staticClass:"small-btn join-btn"},[t._v("Dołącz już dziś")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("h3",[t._v("Przychodnie")]),a("div",{staticClass:"alc-overlay"},[a("div",{staticClass:"small-btn join-btn"},[t._v("Dołącz już dziś")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("h3",[t._v("Specjaliści")]),a("div",{staticClass:"alc-overlay"},[a("div",{staticClass:"small-btn join-btn"},[t._v("Dołącz już dziś")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("h3",[t._v("Wsparcie techniczne")]),a("div",{staticClass:"alc-overlay"},[a("div",{staticClass:"small-btn join-btn"},[t._v("Dołącz już dziś")])])])}],P={data:function(){return{offerImages:[a("b173"),a("064e"),a("99c5"),a("124a")]}}},N=P,E=Object(c["a"])(N,j,$,!1,null,null,null),O=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"contact-box"},[a("div",{staticClass:"contact-form"},[a("h1",[t._v("Napisz do nas!")]),a("p",[t._v("Zachęcamy do kontaktu z supportem naszej platformy. Dołożymy wszelkich starań aby rozwiązać państwa problem jak najszybciej jest to możliwe. Jeżeli sprawa jest wyjątkowo pilna - zapraszamy do kontaktu telefonicznego.")]),a("form",[a("label",{staticClass:"form-label",attrs:{for:"title"}},[t._v("Tytuł")]),a("input",{attrs:{type:"text",id:"title",name:"title"}}),a("label",{staticClass:"form-label radio-label"},[t._v("Jak mamy się z Tobą skontaktować?")]),a("div",{staticClass:"radio-box"},[a("md-radio",{attrs:{value:"mail"},model:{value:t.contactMethod,callback:function(e){t.contactMethod=e},expression:"contactMethod"}},[t._v("E-mail")]),a("md-radio",{attrs:{value:"phone"},model:{value:t.contactMethod,callback:function(e){t.contactMethod=e},expression:"contactMethod"}},[t._v("Telefon")])],1),"mail"==t.contactMethod?a("div",{staticClass:"mail-input"},["mail"==t.contactMethod?a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("E-mail")]):t._e(),a("input",{attrs:{type:"email",id:"email",name:"email"}})]):t._e(),"phone"==t.contactMethod?a("div",{staticClass:"phone-input"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Telefon")]),a("input",{attrs:{type:"tel",id:"phone",name:"phone"}})]):t._e(),a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Imie")]),a("input",{attrs:{type:"text",id:"name",name:"nme"}}),a("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Wiadomość")]),a("textarea",{attrs:{id:"message",name:"message",maxlength:"400",rows:"4"}}),a("input",{attrs:{type:"submit",value:"Wyślij!"}})])]),t._m(0)])])])])},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"location-box"},[s("h1",[t._v("Jak nas znaleźć?")]),s("p",[t._v("Ze względu na charakter naszej działalności większośc naszych działań prowadzimy zdalnie, jeżeli jednak są państwo zainteresowani odwiedzeniem naszego biura - znajduje się ono w centrum Warszawy. Zapraszamy od poniedziałku do piątku w godzinach 9:00 - 17:00.")]),s("div",{staticClass:"location-info-box"},[s("div",{staticClass:"location-info"},[s("img",{attrs:{src:a("49d0"),alt:""}}),s("div",{staticClass:"location-info-text"},[s("span",[t._v("123 123 123")])])]),s("div",{staticClass:"location-info"},[s("img",{attrs:{src:a("7689"),alt:""}}),s("div",{staticClass:"location-info-text"},[s("span",[t._v("Bednarska 7")]),s("span",[t._v("00-310 Warszawa")])])]),s("div",{staticClass:"location-info"},[s("img",{attrs:{src:a("2001"),alt:""}}),s("div",{staticClass:"location-info-text"},[s("span",[t._v("bookyourhealth@gmail.com")])])])]),s("iframe",{staticClass:"map-box",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9771.351910062185!2d21.009797394353136!3d52.24632650767068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x923134033898dcd6!2sSales%26More%20S.A.!5e0!3m2!1spl!2spl!4v1571175684391!5m2!1spl!2spl",frameborder:"0",allowfullscreen:""}})])}],Z={data:function(){return{contactMethod:"mail"}}},I=Z,S=Object(c["a"])(I,T,M,!1,null,null,null),W=S.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"team-container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("h1",{staticClass:"main-header"},[t._v("Poznaj nas!")]),s("div",{staticClass:"separator"}),s("div",{staticClass:"team-members"},[s("div",{staticClass:"team-member-layout"},[s("div",{staticClass:"team-member"},[s("img",{attrs:{src:a("1fab"),alt:""}}),s("h3",[t._v("Jan Nowak")])])]),s("div",{staticClass:"team-member-layout"},[s("div",{staticClass:"team-member"},[s("img",{attrs:{src:a("a4b9"),alt:""}}),s("h3",[t._v("Maciej Dąbek")])])]),s("div",{staticClass:"team-member-layout"},[s("div",{staticClass:"team-member"},[s("img",{attrs:{src:a("c966"),alt:""}}),s("h3",[t._v("Karol Borowski")])])]),s("div",{staticClass:"team-member-layout"},[s("div",{staticClass:"team-member"},[s("img",{attrs:{src:a("f372"),alt:""}}),s("h3",[t._v("Tomasz Jakubczyk")])])])]),s("p",{staticClass:"team-description"},[t._v("Jesteśmy dziennymi studentami Politechniki Rzeszowskiej. Nad projektem pracujemy od 2018 roku przy współpracy z innymi studentami PRz i podkarpackimi firmami. Jeżeli chcesz dołączyć do naszego zespołu, skontaktuj się z nami!")])])])])}],J={data:function(){return{}}},A=J,H=Object(c["a"])(A,B,D,!1,null,null,null),K=H.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pricing-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"pricing-boxes"},[a("div",{staticClass:"price-basic"},[a("p",{staticClass:"price-title"},[t._v("Lekarz")]),t._m(1),a("router-link",{attrs:{to:"/auth/register/doctor"}},[t._v("Wybierz")])],1),a("div",{staticClass:"price-premium"},[a("p",{staticClass:"price-title"},[t._v("Pacjent")]),t._m(2),a("router-link",{attrs:{to:"/auth/register/patient"}},[t._v("Wybierz")])],1),a("div",{staticClass:"price-vip"},[a("p",{staticClass:"price-title"},[t._v("Placówka")]),t._m(3),a("router-link",{attrs:{to:"/auth/register/institution"}},[t._v("Wybierz")])],1)])])])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pricing-title"},[a("h1",[t._v("Wybierz odpowiedni"),a("br"),t._v(" typ konta")]),a("div",{staticClass:"separator"}),a("p",[t._v("Korzystanie z portalu jest darmowe, zachęcamy jednak do wsparcia naszej działalności - otrzymasz w zamian szereg udogodnień")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"price-circle"},[a("div",{staticClass:"cost"},[a("h3",[t._v("299"),a("span",[t._v("PLN")])]),a("p",[t._v("Miesięcznie")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"price-circle"},[a("div",{staticClass:"cost"},[a("h3",[t._v("0"),a("span",[t._v("PLN")])]),a("p",[t._v("Miesięcznie")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"price-circle"},[a("div",{staticClass:"cost"},[a("h3",[t._v("699"),a("span",[t._v("PLN")])]),a("p",[t._v("Miesięcznie")])])])}],U={data:function(){return{}}},Y=U,q=Object(c["a"])(Y,L,R,!1,null,null,null),F=q.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("footer",[a("div",{staticClass:"sitemap-box"},[a("h3",[t._v("Golnij sobie")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".navbar",expression:"'.navbar'"}],attrs:{to:""}},[t._v("Home")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".benefits",expression:"'.benefits'"}],attrs:{to:""}},[t._v("O platformie")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".pricing-container",expression:"'.pricing-container'"}],attrs:{to:""}},[t._v("Członkostwo")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".team-container",expression:"'.team-container'"}],attrs:{to:""}},[t._v("Poznaj nas")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".contact-box",expression:"'.contact-box'"}],attrs:{to:""}},[t._v("Kontakt")])],1),a("div",{staticClass:"faq-box"},[a("h3",[t._v("Informacje")]),a("router-link",{attrs:{to:""}},[t._v("Regulamin")]),a("router-link",{attrs:{to:""}},[t._v("Polityka prywatności")]),a("router-link",{attrs:{to:""}},[t._v("FAQ")])],1),a("div",{staticClass:"address-box"},[a("h3",[t._v("Adres")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".contact-box",expression:"'.contact-box'"}],attrs:{to:""}},[t._v("Bednarska 7")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".contact-box",expression:"'.contact-box'"}],attrs:{to:""}},[t._v("00-310 Warszawa")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".contact-box",expression:"'.contact-box'"}],attrs:{to:""}},[t._v("123 123 123")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".contact-box",expression:"'.contact-box'"}],attrs:{to:""}},[t._v("golnijsobie@gmail.com")])],1),t._m(0)])])])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"social-box"},[s("h3",[t._v("Bądź na bieżąco!")]),s("p",[t._v("Zarejestruj się i otrzymuj najnowsze informacje")]),s("form",[s("input",{attrs:{type:"text",placeholder:"Twój e-mail"}}),s("button",{attrs:{type:"submit"}},[s("img",{attrs:{src:a("c262"),alt:"save"}})])])])}],V={},X=V,tt=Object(c["a"])(X,G,Q,!1,null,null,null),et=tt.exports,at={components:{navbar:C,slider:x,offer:O,contact:W,team:K,pricing:F,footerComponent:et}},st=at,it=Object(c["a"])(st,d,m,!1,null,null,null),ot=it.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper",on:{click:t.closePanel}},[s("div",{staticClass:"modal-container container auth-container",on:{click:function(t){t.stopPropagation()},scroll:function(t){t.stopPropagation()}}},[s("div",{staticClass:"auth-panel"},[s("div",{staticClass:"auth-panel-nav"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a("189e"),alt:"logo"}})]),"login"==t.authType||"reset"==t.authType?s("footer",[s("p",[t._v("Nie masz konta?")]),s("router-link",{staticClass:"register-button",attrs:{to:"/auth/register/patient"}},[t._v("Zarejestruj się")])],1):t._e(),"register"==t.authType?s("footer",[s("p",[t._v("Posiadasz już konto?")]),s("router-link",{staticClass:"login-button",attrs:{to:"/auth/login"}},[t._v("Zaloguj się")])],1):t._e()],1),s("transition",{attrs:{name:"form-animation",mode:"out-in"}},[s("router-view")],1)],1)])])])},nt=[],ct=(a("b0c0"),{data:function(){return{showAuthModal:!1,authType:this.$route.name}},watch:{$route:function(t,e){this.authType=this.$route.name}},methods:{closePanel:function(){this.$router.push("/")}}}),lt=ct,ut=Object(c["a"])(lt,rt,nt,!1,null,null,null),pt=ut.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-panel"},[a("h1",[t._v("Zaloguj się"),a("router-link",{attrs:{to:"/"}},[t._v("x")])],1),a("form",{staticClass:"login-form"},[t._m(0),t._m(1),a("div",{staticClass:"submit"},[a("div",{staticClass:"login-button"},[t._v("Zaloguj się")]),a("router-link",{staticClass:"forgot-password",attrs:{to:"/auth/reset"}},[t._v("Zapomniałeś hasła?")])],1)])])},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("2001"),alt:""}}),s("input",{attrs:{type:"text",placeholder:"E-mail"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("8458"),alt:""}}),s("input",{attrs:{type:"text",placeholder:"Hasło"}})])}],vt={data:function(){return{}}},ft=vt,gt=Object(c["a"])(ft,dt,mt,!1,null,null,null),bt=gt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reset-panel"},[a("h1",[t._v("Resetuj hasło"),a("router-link",{attrs:{to:"/"}},[t._v("x")])],1),a("form",{staticClass:"reset-form"},[t._m(0),a("div",{staticClass:"submit"},[a("div",{staticClass:"reset-button"},[t._v("Zresetuj hasło")]),a("router-link",{staticClass:"forgot-password",attrs:{to:"/auth/login"}},[t._v("Wróć")])],1)])])},Ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("2001"),alt:""}}),s("input",{attrs:{type:"text",placeholder:"E-mail"}})])}],_t={data:function(){return{}}},yt=_t,wt=Object(c["a"])(yt,ht,Ct,!1,null,null,null),kt=wt.exports,zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-panel"},[s("h1",[t._v("Zarejestruj się "),s("router-link",{attrs:{to:"/"}},[t._v("x")])],1),s("div",{staticClass:"account-type-box"},[s("router-link",{class:{"acc-type-option":!0,active:"doctor"==t.registerType},attrs:{to:"/auth/register/doctor"}},[t._v("Lekarz")]),s("router-link",{class:{"acc-type-option":!0,active:"patient"==t.registerType},attrs:{to:"/auth/register/patient"}},[t._v("Pacjent")]),s("router-link",{class:{"acc-type-option":!0,active:"institution"==t.registerType},attrs:{to:"/auth/register/institution"}},[t._v("Placówka")])],1),"doctor"==t.registerType?s("form",[s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("de0c"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.firstname,expression:"doctor.firstname"}],attrs:{id:"firstname",name:"firstname",type:"text",placeholder:"Imie"},domProps:{value:t.doctor.firstname},on:{input:function(e){e.target.composing||t.$set(t.doctor,"firstname",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("de0c"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.lastname,expression:"doctor.lastname"}],attrs:{id:"lastname",name:"lastname",type:"text",placeholder:"Nazwisko"},domProps:{value:t.doctor.lastname},on:{input:function(e){e.target.composing||t.$set(t.doctor,"lastname",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("5554"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.skill,expression:"doctor.skill"}],attrs:{id:"skill",name:"skill",type:"text",placeholder:"Specjalizacja"},domProps:{value:t.doctor.skill},on:{input:function(e){e.target.composing||t.$set(t.doctor,"skill",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("7689"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.street,expression:"doctor.street"}],attrs:{id:"street",name:"street",type:"text",placeholder:"Ulica i numer budynku"},domProps:{value:t.doctor.street},on:{input:function(e){e.target.composing||t.$set(t.doctor,"street",e.target.value)}}})]),s("div",{staticClass:"small-inputs"},[s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("7689"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.city,expression:"doctor.city"}],attrs:{id:"city",name:"city",type:"text",placeholder:"Miasto"},domProps:{value:t.doctor.city},on:{input:function(e){e.target.composing||t.$set(t.doctor,"city",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("7689"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.zip,expression:"doctor.zip"}],attrs:{id:"zip",name:"zip",type:"text",pattern:"[0-9]{2}\\-[0-9]{3}{5}",placeholder:"Kod pocztowy"},domProps:{value:t.doctor.zip},on:{input:function(e){e.target.composing||t.$set(t.doctor,"zip",e.target.value)}}})])]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("2001"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.email,expression:"doctor.email"}],attrs:{id:"email",name:"email",type:"email",placeholder:"E-mail"},domProps:{value:t.doctor.email},on:{input:function(e){e.target.composing||t.$set(t.doctor,"email",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("49d0"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.phone,expression:"doctor.phone"}],attrs:{id:"phone",name:"phone",type:"tel",placeholder:"Numer telefonu"},domProps:{value:t.doctor.phone},on:{input:function(e){e.target.composing||t.$set(t.doctor,"phone",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("8458"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.password,expression:"doctor.password"}],attrs:{id:"password",name:"password",type:"password",placeholder:"Hasło"},domProps:{value:t.doctor.password},on:{input:function(e){e.target.composing||t.$set(t.doctor,"password",e.target.value)}}})]),s("md-checkbox",{staticClass:"terms-checkbox",model:{value:t.doctor.terms,callback:function(e){t.$set(t.doctor,"terms",e)},expression:"doctor.terms"}},[t._v("Oświadczam, że znam i akceptuje postanowienia regulaminu portalu Book Your Health.")]),t._m(0)],1):t._e(),"patient"==t.registerType?s("form",[s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("de0c"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.firstname,expression:"doctor.firstname"}],attrs:{id:"firstname",name:"firstname",type:"text",placeholder:"Imie"},domProps:{value:t.doctor.firstname},on:{input:function(e){e.target.composing||t.$set(t.doctor,"firstname",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("de0c"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.lastname,expression:"doctor.lastname"}],attrs:{id:"lastname",name:"lastname",type:"text",placeholder:"Nazwisko"},domProps:{value:t.doctor.lastname},on:{input:function(e){e.target.composing||t.$set(t.doctor,"lastname",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("de0c"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.skill,expression:"doctor.skill"}],attrs:{id:"pesel",name:"pesel",type:"text",placeholder:"PESEL"},domProps:{value:t.doctor.skill},on:{input:function(e){e.target.composing||t.$set(t.doctor,"skill",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("7689"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.street,expression:"doctor.street"}],attrs:{id:"street",name:"street",type:"text",placeholder:"Ulica i numer budynku"},domProps:{value:t.doctor.street},on:{input:function(e){e.target.composing||t.$set(t.doctor,"street",e.target.value)}}})]),s("div",{staticClass:"small-inputs"},[s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("7689"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.city,expression:"doctor.city"}],attrs:{id:"city",name:"city",type:"text",placeholder:"Miasto"},domProps:{value:t.doctor.city},on:{input:function(e){e.target.composing||t.$set(t.doctor,"city",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("7689"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.zip,expression:"doctor.zip"}],attrs:{id:"zip",name:"zip",type:"text",pattern:"[0-9]{2}\\-[0-9]{3}{5}",placeholder:"Kod pocztowy"},domProps:{value:t.doctor.zip},on:{input:function(e){e.target.composing||t.$set(t.doctor,"zip",e.target.value)}}})])]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("2001"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.email,expression:"doctor.email"}],attrs:{id:"email",name:"email",type:"email",placeholder:"E-mail"},domProps:{value:t.doctor.email},on:{input:function(e){e.target.composing||t.$set(t.doctor,"email",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("49d0"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.phone,expression:"doctor.phone"}],attrs:{id:"phone",name:"phone",type:"tel",placeholder:"Numer telefonu"},domProps:{value:t.doctor.phone},on:{input:function(e){e.target.composing||t.$set(t.doctor,"phone",e.target.value)}}})]),s("div",{staticClass:"input-row"},[s("img",{staticClass:"input-icon",attrs:{src:a("8458"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor.password,expression:"doctor.password"}],attrs:{id:"password",name:"password",type:"password",placeholder:"Hasło"},domProps:{value:t.doctor.password},on:{input:function(e){e.target.composing||t.$set(t.doctor,"password",e.target.value)}}})]),s("md-checkbox",{staticClass:"terms-checkbox",model:{value:t.doctor.terms,callback:function(e){t.$set(t.doctor,"terms",e)},expression:"doctor.terms"}},[t._v("Oświadczam, że znam i akceptuje postanowienia regulaminu portalu Book Your Health.")]),t._m(1)],1):t._e(),"institution"==t.registerType?s("form"):t._e()])},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submit"},[a("input",{staticClass:"register-button",attrs:{type:"submit",value:"Zarejestruj się"}}),a("input",{staticClass:"reset-button",attrs:{type:"reset",value:"Reset"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submit"},[a("input",{staticClass:"register-button",attrs:{type:"submit",value:"Zarejestruj się"}}),a("input",{staticClass:"reset-button",attrs:{type:"reset",value:"Reset"}})])}],jt={data:function(){return{registerType:this.$route.params.regType,doctor:{firstname:"",lastname:"",skill:"",street:"",city:"",zip:"",email:"",phone:"",password:"",terms:!1}}},watch:{$route:function(t,e){this.registerType=this.$route.params.regType}}},$t=jt,Pt=(a("bb46"),Object(c["a"])($t,zt,xt,!1,null,"5b18f49b",null)),Nt=Pt.exports;s["default"].use(p["a"]);var Et=[{path:"/",name:"Home",component:ot,children:[{path:"auth",component:pt,children:[{path:"login",component:bt,name:"login"},{path:"reset",component:kt,name:"reset"},{path:"register/:regType",component:Nt,name:"register"}]}]}],Ot=new p["a"]({mode:"history",base:"/",routes:Et}),Tt=Ot,Mt=a("2f62"),Zt={},It={},St={},Wt={},Bt={state:Zt,getters:It,actions:St,mutations:Wt};s["default"].use(Mt["a"]);var Dt=new Mt["a"].Store({modules:{Auth:Bt},state:{},mutations:{},actions:{}}),Jt=(a("3ed1"),a("52d9"),a("106a"),a("0a63")),At=a.n(Jt),Ht=a("43f9"),Kt=a.n(Ht),Lt=a("f13c"),Rt=a.n(Lt);a("51de");s["default"].use(At.a),s["default"].use(Kt.a),s["default"].use(Rt.a),s["default"].config.productionTip=!1,new s["default"]({router:Tt,store:Dt,render:function(t){return t(u)}}).$mount("#app")},7689:function(t,e,a){t.exports=a.p+"img/map.5b1d7afd.png"},8458:function(t,e,a){t.exports=a.p+"img/password.a68e8b58.png"},"99c5":function(t,e,a){t.exports=a.p+"img/specialist.78f51163.jpeg"},"9bd0":function(t,e,a){t.exports=a.p+"img/history.2d619254.png"},a4b9:function(t,e,a){t.exports=a.p+"img/member2.c6df2426.png"},b02d:function(t,e,a){},b173:function(t,e,a){t.exports=a.p+"img/hospital.f24a1a6d.png"},bb46:function(t,e,a){"use strict";var s=a("b02d"),i=a.n(s);i.a},c262:function(t,e,a){t.exports=a.p+"img/save.5ae5e37d.png"},c966:function(t,e,a){t.exports=a.p+"img/member3.16269e27.png"},cd6c:function(t,e,a){t.exports=a.p+"img/screen.c468c90b.png"},d917:function(t,e,a){t.exports=a.p+"img/healthcare.1e2be013.png"},de0c:function(t,e,a){t.exports=a.p+"img/person.19472b16.png"},f372:function(t,e,a){t.exports=a.p+"img/member4.76bf3ccf.png"},f534:function(t,e,a){t.exports=a.p+"img/people2.73783d26.png"},f87f:function(t,e,a){t.exports=a.p+"img/people.181f425f.png"},fdab:function(t,e,a){t.exports=a.p+"img/doctor.e098ce10.png"}});
//# sourceMappingURL=app.7ff1a092.js.map