(function(e){function t(t){for(var n,i,r=t[0],a=t[1],l=t[2],s=0,h=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);b&&b(t);while(h.length)h.shift()();return u.push.apply(u,l||[]),c()}function c(){for(var e,t=0;t<u.length;t++){for(var c=u[t],n=!0,i=1;i<c.length;i++){var a=c[i];0!==o[a]&&(n=!1)}n&&(u.splice(t--,1),e=r(r.s=c[0]))}return e}var n={},o={app:0},u=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d951e6aa"}[e]+".js"}function r(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.e=function(e){var t=[],c=o[e];if(0!==c)if(c)t.push(c[2]);else{var n=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=n);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=i(e);var l=new Error;u=function(t){a.onerror=a.onload=null,clearTimeout(s);var c=o[e];if(0!==c){if(c){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",l.name="ChunkLoadError",l.type=n,l.request=u,c[1](l)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(c,n,function(t){return e[t]}.bind(null,n));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/abschluss_finanz/",r.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var b=l;u.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"020f":function(e,t,c){"use strict";c("9270")},"07ae":function(e,t,c){},1738:function(e,t,c){},1827:function(e,t,c){"use strict";c("682c")},"33eb":function(e,t,c){"use strict";c("5f7a")},"39e3":function(e,t,c){"use strict";c("f9a3")},"412b":function(e,t,c){},"5ed9":function(e,t,c){"use strict";c("bf94")},"5f7a":function(e,t,c){},"62e6":function(e,t,c){"use strict";c("bd3f")},"682c":function(e,t,c){},"6c21":function(e,t,c){"use strict";c("07ae")},9270:function(e,t,c){},bd3f:function(e,t,c){},bf94:function(e,t,c){},c377:function(e,t,c){"use strict";c("df10")},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function o(e,t,c,o,u,i){var r=Object(n["D"])("Sidebar"),a=Object(n["D"])("router-view");return Object(n["u"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(r),Object(n["j"])(a)],64)}c("15f5");var u=function(e){return Object(n["y"])("data-v-6bc515de"),e=e(),Object(n["v"])(),e},i=u((function(){return Object(n["h"])("div",null,[Object(n["h"])("b",null,"F")],-1)})),r=u((function(){return Object(n["h"])("div",null,[Object(n["h"])("b",null,"P")],-1)})),a=[i,r],l=u((function(){return Object(n["h"])("b",null,"F",-1)})),s=u((function(){return Object(n["h"])("i",null,"inanz",-1)})),b=Object(n["i"])(),h=u((function(){return Object(n["h"])("b",null,"P",-1)})),f=u((function(){return Object(n["h"])("i",null,"laner",-1)})),O=[l,s,b,h,f],j=Object(n["i"])("Home"),d=Object(n["i"])("Übersicht"),m=Object(n["i"])("Offen"),p=Object(n["i"])("Abgeschlossen"),v=Object(n["i"])("Einstellungen"),g=Object(n["i"])("MoneyChecker"),k=u((function(){return Object(n["h"])("i",{class:"fas fa-angle-double-left"},null,-1)})),S=[k];function y(e,t,c,o,u,i){var r=Object(n["D"])("SidebarLink");return Object(n["u"])(),Object(n["g"])("div",{class:"sidebar",style:Object(n["q"])({width:e.sidebarWidth})},[Object(n["h"])("h1",null,[e.collapsed?(Object(n["u"])(),Object(n["g"])("span",{key:0,onClick:t[0]||(t[0]=function(){return e.toggleSidebar&&e.toggleSidebar.apply(e,arguments)})},a)):(Object(n["u"])(),Object(n["g"])("span",{key:1,onClick:t[1]||(t[1]=function(){return e.toggleSidebar&&e.toggleSidebar.apply(e,arguments)})},O))]),Object(n["j"])(r,{to:"/Home",icon:"fas fa-home"},{default:Object(n["K"])((function(){return[j]})),_:1}),Object(n["j"])(r,{to:"/Overview",icon:"fas fa-stream"},{default:Object(n["K"])((function(){return[d]})),_:1}),Object(n["j"])(r,{to:"/Open",icon:"far fa-clipboard"},{default:Object(n["K"])((function(){return[m]})),_:1}),Object(n["j"])(r,{to:"/Closed",icon:"fas fa-clipboard"},{default:Object(n["K"])((function(){return[p]})),_:1}),Object(n["j"])(r,{to:"/Settings",icon:"far fa-edit"},{default:Object(n["K"])((function(){return[v]})),_:1}),Object(n["j"])(r,{to:"/MoneyChecker",icon:"far fa-money-bill-alt"},{default:Object(n["K"])((function(){return[g]})),_:1}),Object(n["h"])("span",{class:Object(n["p"])(["collapse-icon",{"rotate-180":e.collapsed}]),onClick:t[2]||(t[2]=function(){return e.toggleSidebar&&e.toggleSidebar.apply(e,arguments)})},S,2)],4)}var w=Object(n["A"])(!0),W=function(){return w.value=!w.value},C=200,M=60,I=Object(n["c"])((function(){return"".concat(w.value?M:C,"px")})),L=(c("7051"),{key:0});function _(e,t,c,o,u,i){var r=Object(n["D"])("router-link");return Object(n["u"])(),Object(n["e"])(r,{to:e.to,class:Object(n["p"])(["link",{active:e.isActive}])},{default:Object(n["K"])((function(){return[Object(n["h"])("i",{class:Object(n["p"])(["icon",e.icon])},null,2),Object(n["j"])(n["b"],{name:"fade"},{default:Object(n["K"])((function(){return[e.collapsed?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["g"])("span",L,[Object(n["C"])(e.$slots,"default",{},void 0,!0)]))]})),_:3})]})),_:3},8,["to","class"])}var H=c("6c02"),x=Object(n["k"])({props:{to:{type:String,required:!0},icon:{type:String,required:!0}},setup:function(e){var t=Object(H["c"])(),c=Object(n["c"])((function(){return t.path===e.to}));return{isActive:c,collapsed:w}}}),B=(c("eead"),c("6b0d")),P=c.n(B);const F=P()(x,[["render",_],["__scopeId","data-v-0d892194"]]);var q=F,A=Object(n["k"])({props:{},components:{SidebarLink:q},setup:function(){return{collapsed:w,toggleSidebar:W,sidebarWidth:I}}});c("1827"),c("62e6");const D=P()(A,[["render",y],["__scopeId","data-v-6bc515de"]]);var J=D,E=Object(n["k"])({components:{Sidebar:J},setup:function(){return{sidebarWidth:I}},data:function(){return{}},methods:{}});c("c377");const U=P()(E,[["render",o]]);var V=U,z=(c("d3b7"),c("3ca3"),c("ddb0"),{class:"home row"});function K(e,t,c,o,u,i){var r=Object(n["D"])("btnCreate"),a=Object(n["D"])("btnDelete");return Object(n["u"])(),Object(n["g"])("div",z,[Object(n["j"])(r,{class:"col",style:{"margin-top":"30px"}}),Object(n["j"])(a,{class:"col",style:{"margin-top":"30px"}})])}var N=c("d4ec"),T=c("262e"),G=c("2caf"),$=c("9ab4"),Q=c("ce1f"),R=function(e){return Object(n["y"])("data-v-523e2be2"),e=e(),Object(n["v"])(),e},X={class:"btnCreate"},Y=R((function(){return Object(n["h"])("button",null,"Sparplan erstellen",-1)})),Z=[Y];function ee(e,t,c,o,u,i){return Object(n["u"])(),Object(n["g"])("div",X,Z)}var te=Object(n["k"])({data:function(){return{}},methods:{}});c("39e3");const ce=P()(te,[["render",ee],["__scopeId","data-v-523e2be2"]]);var ne=ce,oe=function(e){return Object(n["y"])("data-v-3fe88436"),e=e(),Object(n["v"])(),e},ue={class:"btnDelete"},ie=oe((function(){return Object(n["h"])("button",null,"Sparplan entfernen",-1)})),re=[ie];function ae(e,t,c,o,u,i){return Object(n["u"])(),Object(n["g"])("div",ue,re)}var le=Object(n["k"])({data:function(){return{}},methods:{}});c("5ed9");const se=P()(le,[["render",ae],["__scopeId","data-v-3fe88436"]]);var be=se,he=function(e){Object(T["a"])(c,e);var t=Object(G["a"])(c);function c(){return Object(N["a"])(this,c),t.apply(this,arguments)}return c}(Q["b"]);he=Object($["a"])([Object(Q["a"])({components:{btnCreate:ne,btnDelete:be}})],he);var fe=he;const Oe=P()(fe,[["render",K]]);var je=Oe;function de(e,t,c,o,u,i){var r=Object(n["D"])("setupIncome");return Object(n["u"])(),Object(n["g"])("div",null,[Object(n["j"])(r)])}var me=function(e){return Object(n["y"])("data-v-85ade902"),e=e(),Object(n["v"])(),e},pe={class:"settings",style:{"margin-left":"58px"}},ve={class:"balance"},ge=me((function(){return Object(n["h"])("h1",null,"deine Bilanz:",-1)})),ke={class:"income"},Se=me((function(){return Object(n["h"])("h1",null,"Einkommen",-1)})),ye=me((function(){return Object(n["h"])("label",null,[Object(n["h"])("b",null,"Einkommen:")],-1)})),we=me((function(){return Object(n["h"])("label",null,[Object(n["h"])("b",null,"Wieviel:")],-1)})),We=me((function(){return Object(n["h"])("button",{type:"submit"},"Hinzufügen",-1)})),Ce={for:"done",class:"ms-3"},Me=me((function(){return Object(n["h"])("b",null,"Was:",-1)})),Ie={for:"done",class:"ms-3"},Le=me((function(){return Object(n["h"])("b",null,"Wieviel:",-1)})),_e=["onClick"],He=me((function(){return Object(n["h"])("i",{class:"far fa-trash-alt"},null,-1)})),xe=[He],Be={class:"outcome"},Pe=me((function(){return Object(n["h"])("h1",null,"Ausgaben",-1)})),Fe=me((function(){return Object(n["h"])("label",null,[Object(n["h"])("b",null,"Ausgaben:")],-1)})),qe=me((function(){return Object(n["h"])("label",null,[Object(n["h"])("b",null,"Wieviel:")],-1)})),Ae=me((function(){return Object(n["h"])("button",{type:"submit"},"Hinzufügen",-1)})),De={for:"done",class:"ms-3"},Je=me((function(){return Object(n["h"])("b",null,"Was:",-1)})),Ee={for:"done",class:"ms-3"},Ue=me((function(){return Object(n["h"])("b",null,"Wieviel:",-1)})),Ve=["onClick"],ze=me((function(){return Object(n["h"])("i",{class:"far fa-trash-alt"},null,-1)})),Ke=[ze],Ne={for:"done",class:"ms-3"},Te=me((function(){return Object(n["h"])("b",null,"Was:",-1)})),Ge={for:"done",class:"ms-3"},$e=me((function(){return Object(n["h"])("b",null,"Wieviel:",-1)})),Qe=["onClick"],Re=me((function(){return Object(n["h"])("i",{class:"far fa-trash-alt"},null,-1)})),Xe=[Re];function Ye(e,t,c,o,u,i){return Object(n["u"])(),Object(n["g"])("div",pe,[Object(n["h"])("div",ve,[ge,Object(n["h"])("h2",null,Object(n["F"])(e.balance)+" €",1)]),Object(n["h"])("div",ke,[Se,Object(n["h"])("form",{onSubmit:t[2]||(t[2]=Object(n["M"])((function(t){return e.addIncome()}),["prevent"])),action:""},[Object(n["h"])("div",null,[ye,Object(n["L"])(Object(n["h"])("input",{type:"text",placeholder:"Einkommen von ?","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.incomeWhat=t}),required:""},null,512),[[n["I"],e.incomeWhat]]),we,Object(n["L"])(Object(n["h"])("input",{type:"number",placeholder:"€","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.incomeHowMuch=t}),required:"",min:"1"},null,512),[[n["I"],e.incomeHowMuch]])]),We],32)]),(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.incomeList,(function(t){return Object(n["u"])(),Object(n["g"])("div",{key:t},[Object(n["h"])("label",Ce,[Me,Object(n["i"])(Object(n["F"])(t.incomeWhat),1)]),Object(n["h"])("label",Ie,[Le,Object(n["i"])(" "+Object(n["F"])(t.incomeHowMuch)+" €",1)]),Object(n["h"])("button",{id:"trashcan",onClick:function(c){return e.deleteIncome(t)}},xe,8,_e)])})),128)),Object(n["h"])("div",Be,[Pe,Object(n["h"])("form",{onSubmit:t[5]||(t[5]=Object(n["M"])((function(t){return e.addOutcome()}),["prevent"])),action:""},[Object(n["h"])("div",null,[Fe,Object(n["L"])(Object(n["h"])("input",{type:"text",placeholder:"Ausgaben für ?","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.outcomeWhat=t}),required:""},null,512),[[n["I"],e.outcomeWhat]]),qe,Object(n["L"])(Object(n["h"])("input",{type:"number",placeholder:"€","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.outcomeHowMuch=t}),required:"",min:"1"},null,512),[[n["I"],e.outcomeHowMuch]])]),Ae],32)]),(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.outcomeList,(function(t){return Object(n["u"])(),Object(n["g"])("div",{key:t},[Object(n["h"])("label",De,[Je,Object(n["i"])(Object(n["F"])(t.outcomeWhat),1)]),Object(n["h"])("label",Ee,[Ue,Object(n["i"])(" "+Object(n["F"])(t.outcomeHowMuch)+" €",1)]),Object(n["h"])("button",{id:"trashcan",onClick:function(c){return e.deleteOutcome(t)}},Ke,8,Ve)])})),128)),(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.checks,(function(t){return Object(n["u"])(),Object(n["g"])("div",{key:t},[Object(n["h"])("label",Ne,[Te,Object(n["i"])(Object(n["F"])(t.what),1)]),Object(n["h"])("label",Ge,[$e,Object(n["i"])(" "+Object(n["F"])(t.howMuch)+" €",1)]),Object(n["h"])("button",{id:"trashcan",onClick:function(c){return e.deleteCheck(t)}},Xe,8,Qe)])})),128))])}var Ze=c("b85c");c("a434");function et(e){localStorage.setItem("sumChecksStorage",JSON.stringify(e))}function tt(){return JSON.parse(localStorage.getItem("sumChecksStorage")||"0")}function ct(e){localStorage.setItem("checkStorage",JSON.stringify(e))}function nt(){return JSON.parse(localStorage.getItem("checkStorage")||"[]")}function ot(e){localStorage.setItem("incomeStorage",JSON.stringify(e))}function ut(){return JSON.parse(localStorage.getItem("incomeStorage")||"[]")}function it(e){localStorage.setItem("outcomeStorage",JSON.stringify(e))}function rt(){return JSON.parse(localStorage.getItem("outcomeStorage")||"[]")}var at=Object(n["k"])({mounted:function(){this.checks=nt(),this.incomeList=ut(),this.outcomeList=rt(),this.checksSum=tt(),this.calcIncome(),this.calcOutcome(),this.calcBalance()},data:function(){return{incomeSum:0,outcomeSum:0,balance:0,checksSum:0,incomeWhat:"",incomeHowMuch:0,outcomeWhat:"",outcomeHowMuch:0,incomeList:[],outcomeList:[],checks:[]}},methods:{addIncome:function(){this.incomeList.push({incomeWhat:this.incomeWhat,incomeHowMuch:this.incomeHowMuch}),this.incomeWhat="",this.incomeHowMuch=0,ot(this.incomeList),this.calcIncome(),this.calcBalance(),console.log("Einkommen erfolgreich erstellt")},deleteIncome:function(e){this.incomeList.splice(this.incomeList.indexOf(e),1),ot(this.incomeList),this.calcIncome(),this.calcBalance(),console.log("Einkommen erfolgreich gelöscht")},addOutcome:function(){this.outcomeList.push({outcomeWhat:this.outcomeWhat,outcomeHowMuch:this.outcomeHowMuch}),this.outcomeHowMuch=0,this.outcomeWhat="",it(this.outcomeList),this.calcOutcome(),this.calcBalance(),console.log("Ausgaben erfolgreich erstellt")},deleteOutcome:function(e){this.outcomeList.splice(this.outcomeList.indexOf(e),1),it(this.outcomeList),this.calcOutcome(),this.calcBalance(),console.log("Ausgaben erfolgreich gelöscht")},deleteCheck:function(e){this.checks.splice(this.checks.indexOf(e),1),console.log("Check erfolgreich gelöscht"),this.calcSum(),ct(this.checks)},calcSum:function(){this.checksSum=0;var e,t=Object(Ze["a"])(this.checks);try{for(t.s();!(e=t.n()).done;){var c=e.value;this.checksSum+=c.howMuch}}catch(n){t.e(n)}finally{t.f()}console.log(this.checksSum),et(this.checksSum)},calcIncome:function(){this.incomeSum=0;var e,t=Object(Ze["a"])(this.incomeList);try{for(t.s();!(e=t.n()).done;){var c=e.value;this.incomeSum+=c.incomeHowMuch}}catch(n){t.e(n)}finally{t.f()}console.log(this.incomeSum)},calcOutcome:function(){this.outcomeSum=0;var e,t=Object(Ze["a"])(this.outcomeList);try{for(t.s();!(e=t.n()).done;){var c=e.value;this.outcomeSum+=c.outcomeHowMuch}}catch(n){t.e(n)}finally{t.f()}console.log(this.outcomeSum)},calcBalance:function(){console.log(this.incomeSum,this.outcomeSum,this.checksSum),this.balance=this.incomeSum-this.outcomeSum-this.checksSum,console.log("test")}}});c("de77");const lt=P()(at,[["render",Ye],["__scopeId","data-v-85ade902"]]);var st=lt,bt=Object(n["k"])({data:function(){return{}},methods:{},components:{setupIncome:st}});c("6c21");const ht=P()(bt,[["render",de],["__scopeId","data-v-4670ef9e"]]);var ft=ht;function Ot(e,t,c,o,u,i){return Object(n["u"])(),Object(n["g"])("div")}var jt=Object(n["k"])({data:function(){return{}},methods:{}});const dt=P()(jt,[["render",Ot]]);var mt=dt;function pt(e,t,c,o,u,i){return Object(n["u"])(),Object(n["g"])("div")}var vt=Object(n["k"])({data:function(){return{}},methods:{}});const gt=P()(vt,[["render",pt]]);var kt=gt;function St(e,t,c,o,u,i){var r=Object(n["D"])("CheckList");return Object(n["u"])(),Object(n["g"])("div",null,[Object(n["j"])(r)])}var yt=function(e){return Object(n["y"])("data-v-8f7645ee"),e=e(),Object(n["v"])(),e},wt={id:"checkList"},Wt={id:"checkAdd"},Ct=yt((function(){return Object(n["h"])("h1",null,"Checkliste",-1)})),Mt={class:"mb-3 row"},It=yt((function(){return Object(n["h"])("label",{class:"col-sm-2"},[Object(n["h"])("b",null,"Was:")],-1)})),Lt={class:"col-sm-10"},_t={class:"mb-3 row"},Ht=yt((function(){return Object(n["h"])("label",{class:"col-sm-2"},[Object(n["h"])("b",null,"Wieviel:")],-1)})),xt={class:"col-sm-10"},Bt={class:"mb-3 row"},Pt=yt((function(){return Object(n["h"])("label",{class:"col-sm-2"},[Object(n["h"])("b",null,"Bis Wann:")],-1)})),Ft={class:"col-sm-10"},qt=yt((function(){return Object(n["h"])("button",{type:"submit"},"Hinzufügen",-1)})),At={class:""},Dt={class:""},Jt=yt((function(){return Object(n["h"])("label",null,[Object(n["h"])("b",null,"Bezahlt")],-1)})),Et=["onUpdate:modelValue"],Ut={for:"done",class:"ms-3"},Vt=yt((function(){return Object(n["h"])("b",null,"Was:",-1)})),zt={for:"done",class:"ms-3"},Kt=yt((function(){return Object(n["h"])("b",null,"Wieviel:",-1)})),Nt={for:"done",class:"ms-3"},Tt=yt((function(){return Object(n["h"])("b",null,"Bis Wann:",-1)})),Gt=["onClick"],$t=yt((function(){return Object(n["h"])("i",{class:"far fa-trash-alt"},null,-1)})),Qt=[$t];function Rt(e,t,c,o,u,i){return Object(n["u"])(),Object(n["g"])("div",wt,[Object(n["h"])("div",Wt,[Ct,Object(n["h"])("form",{onSubmit:t[3]||(t[3]=Object(n["M"])((function(t){return e.addCheck()}),["prevent"])),class:"",action:""},[Object(n["h"])("div",Mt,[It,Object(n["h"])("div",Lt,[Object(n["L"])(Object(n["h"])("input",{type:"text",class:"",placeholder:"Grund","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inputWhat=t}),required:""},null,512),[[n["I"],e.inputWhat]])])]),Object(n["h"])("div",_t,[Ht,Object(n["h"])("div",xt,[Object(n["L"])(Object(n["h"])("input",{type:"number",class:"",placeholder:"€","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.inputHowMuch=t}),required:"",min:"1"},null,512),[[n["I"],e.inputHowMuch]])])]),Object(n["h"])("div",Bt,[Pt,Object(n["h"])("div",Ft,[Object(n["L"])(Object(n["h"])("input",{type:"date",class:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.inputWhen=t}),required:""},null,512),[[n["I"],e.inputWhen]])])]),qt],32),Object(n["h"])("button",{onClick:t[4]||(t[4]=function(t){return e.savePayed()})},"Bezahlung Speichern")]),Object(n["h"])("div",At,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.checks,(function(t){return Object(n["u"])(),Object(n["g"])("div",{class:"",key:t},[Object(n["h"])("div",Dt,[Jt,Object(n["L"])(Object(n["h"])("input",{name:"done",class:"ms-3",type:"checkbox","onUpdate:modelValue":function(e){return t.payed=e}},null,8,Et),[[n["H"],t.payed]]),Object(n["h"])("label",Ut,[Vt,Object(n["i"])(" "+Object(n["F"])(t.what),1)]),Object(n["h"])("label",zt,[Kt,Object(n["i"])(" "+Object(n["F"])(t.howMuch)+" €",1)]),Object(n["h"])("label",Nt,[Tt,Object(n["i"])(" "+Object(n["F"])(t.when),1)])]),Object(n["h"])("div",null,[Object(n["h"])("button",{class:"",id:"trashcan",onClick:function(c){return e.deleteCheck(t)}},Qt,8,Gt)])])})),128))])])}var Xt=Object(n["k"])({mounted:function(){this.checks=nt(),this.checksSum=tt()},data:function(){return{checksSum:0,payed:!1,inputWhat:"",inputWhen:"",inputHowMuch:0,checks:[]}},methods:{deleteCheck:function(e){this.checks.splice(this.checks.indexOf(e),1),console.log("Check erfolgreich gelöscht"),this.calcSum(),ct(this.checks)},addCheck:function(){this.checks.push({what:this.inputWhat,howMuch:this.inputHowMuch,when:this.inputWhen,payed:this.payed}),this.inputWhat="",this.inputHowMuch=0,this.inputWhen="",ct(this.checks),this.calcSum(),console.log("Check erfolgreich erstellt")},savePayed:function(){this.calcSum(),ct(this.checks)},calcSum:function(){this.checksSum=0;var e,t=Object(Ze["a"])(this.checks);try{for(t.s();!(e=t.n()).done;){var c=e.value;this.checksSum+=c.howMuch}}catch(n){t.e(n)}finally{t.f()}console.log(this.checksSum),et(this.checksSum)}}});c("33eb");const Yt=P()(Xt,[["render",Rt],["__scopeId","data-v-8f7645ee"]]);var Zt=Yt,ec=Object(n["k"])({data:function(){return{}},methods:{},components:{CheckList:Zt}});c("020f");const tc=P()(ec,[["render",St],["__scopeId","data-v-50ce76f6"]]);var cc=tc,nc=[{path:"/Home",name:"Home",component:je},{path:"/Overview",name:"Overview",component:function(){return c.e("about").then(c.bind(null,"2226"))}},{path:"/Settings",name:"Settings",component:ft},{path:"/Open",name:"Open",component:mt},{path:"/Closed",name:"Closed",component:kt},{path:"/MoneyChecker",name:"MoneyChecker",component:cc}],oc=Object(H["a"])({history:Object(H["b"])(),routes:nc}),uc=oc;c("ab8b"),c("7b17");Object(n["d"])(V).use(uc).mount("#app")},de77:function(e,t,c){"use strict";c("412b")},df10:function(e,t,c){},eead:function(e,t,c){"use strict";c("1738")},f9a3:function(e,t,c){}});
//# sourceMappingURL=app.99425af9.js.map