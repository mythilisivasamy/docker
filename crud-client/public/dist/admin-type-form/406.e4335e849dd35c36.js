"use strict";(self.webpackChunkadmin_type_form=self.webpackChunkadmin_type_form||[]).push([[406],{406:(E,C,a)=>{a.r(C),a.d(C,{CreateShellModule:()=>I});var s=a(382),r=a(808),u=a(818),v=a(900),t=a(223),d=a(894);let g=(()=>{class n{constructor(){}ngOnInit(){var e;this.qbase.content.type="text",this.key=null===(e=this.qbase.content)||void 0===e?void 0:e.qTitle}ngOnChanges(){var e;this.qbase.content.type="text",this.key=null===(e=this.qbase.content)||void 0===e?void 0:e.qTitle,this.qbase.content.key=this.key.split(" ").splice(-1)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shorttext"]],inputs:{qbase:"qbase"},features:[t.TTD],decls:25,vars:7,consts:[["type","text","placeholder","Your question here",3,"ngModel","ngModelChange"],[1,"text-primary"],["name","","id","",3,"ngModel","ngModelChange"],["value","true"],["value","false"]],template:function(e,o){1&e&&(t.TgZ(0,"input",0),t.NdJ("ngModelChange",function(c){return o.qbase.content.qTitle=c}),t.qZA(),t._UZ(1,"hr"),t.TgZ(2,"h6",1),t._uU(3,"Type Your Answer here"),t._UZ(4,"hr"),t.qZA(),t.TgZ(5,"h6"),t._uU(6,"Settings"),t.qZA(),t.TgZ(7,"h6"),t._uU(8,"Required"),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p")(12,"select",2),t.NdJ("ngModelChange",function(c){return o.qbase.content.required=c}),t.TgZ(13,"option",3),t._uU(14,"true"),t.qZA(),t.TgZ(15,"option",4),t._uU(16,"false"),t.qZA()()(),t.TgZ(17,"p"),t._uU(18),t.qZA(),t.TgZ(19,"p"),t._uU(20),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.qZA()),2&e&&(t.Q6J("ngModel",o.qbase.content.qTitle),t.xp6(10),t.Oqu(o.qbase.content.required),t.xp6(2),t.Q6J("ngModel",o.qbase.content.required),t.xp6(6),t.hij("Block No:",o.qbase.block,""),t.xp6(2),t.hij("control type: ",o.qbase.content.controlType,""),t.xp6(2),t.hij("QTitle: ",o.qbase.content.qTitle,""),t.xp6(2),t.hij("Order: ",o.qbase.content.order,""))},directives:[s.Fj,s.JJ,s.On,s.EJ,s.YN,s.Kr],styles:[""]}),n})();function q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"label",9),t._uU(2),t.qZA(),t._UZ(3,"input",10),t.TgZ(4,"button",11)(5,"span",12),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().remove(c)}),t._uU(6,"X"),t.qZA()()()}if(2&n){const e=i.index;t.xp6(1),t.s9C("for",e),t.xp6(1),t.hij("choice:",e+1,""),t.xp6(1),t.s9C("id",e),t.Q6J("formControlName",e)}}function f(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"option",15),t._uU(2),t.qZA(),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.s9C("value",e.key),t.xp6(1),t.Oqu(e.value)}}function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._uU(1," If: "),t.TgZ(2,"select",13),t.NdJ("change",function(){return t.CHM(e),t.oxw().showContent()}),t._UZ(3,"option",14),t.YNc(4,f,3,2,"ng-container",6),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.qbase.content.options)}}function T(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"option",15),t._uU(2),t.qZA(),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.s9C("value",e.block),t.xp6(1),t.AsE("",e.content.controlType,":",e.block,"")}}function b(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"select",16),t.YNc(2,T,3,3,"ng-container",6),t.ALo(3,"async"),t.qZA(),t.TgZ(4,"button",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().saveCondition()}),t._uU(5,"Save condition"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,e.cs.getQBases()))}}let y=(()=>{class n{constructor(e){this.cs=e,this.isCondition=!1,this.isContent=!1,this.questionbase=new s.cw({qtitle:new s.NI(""),option:new s.NI(""),block:new s.NI(""),choice:new s.Oe([])})}ngOnInit(){this.qbase.content.type="dropdown"}get block(){return this.questionbase.get("block")}get option(){return this.questionbase.get("option")}get qtitle(){return this.questionbase.get("qtitle")}get choice(){return this.questionbase.get("choice")}saveChange(){var e,o;this.qbase.content.options=[];let l=null===(e=this.qtitle)||void 0===e?void 0:e.value;this.qbase.content.key=l.split(" ").splice(-1),this.qbase.content.qTitle=null===(o=this.qtitle)||void 0===o?void 0:o.value,this.choice.controls.forEach(c=>{var p;null===(p=this.qbase.content.options)||void 0===p||p.push({key:c.value,value:c.value})})}addChoice(){this.choice.push(new s.NI(""))}showCondition(){this.isCondition=!0}showContent(){this.isContent=!0}saveCondition(){var e,o,l;let c=null===(e=this.qbase.content.condition)||void 0===e?void 0:e.options;0==(null==c?void 0:c.length)?c.push({option:null===(o=this.option)||void 0===o?void 0:o.value,block:parseInt(null===(l=this.block)||void 0===l?void 0:l.value,10)}):null==c||c.forEach(p=>{var h,_,m;p.option!=(null===(h=this.option)||void 0===h?void 0:h.value)&&(null==c||c.push({option:null===(_=this.option)||void 0===_?void 0:_.value,block:parseInt(null===(m=this.block)||void 0===m?void 0:m.value,10)}))}),this.isCondition=this.isContent=!1}remove(e){this.choice.removeAt(e)}ngOnChanges(){var e,o,l;this.qbase.content.type="dropdown",this.choice.controls.splice(0),null===(e=this.qtitle)||void 0===e||e.patchValue(this.qbase.content.qTitle),0!=(null===(o=this.qbase.content.options)||void 0===o?void 0:o.length)&&(null===(l=this.qbase.content.options)||void 0===l||l.forEach(c=>{this.choice.push(new s.NI(c.value))}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-multi-choice"]],inputs:{qbase:"qbase"},features:[t.TTD],decls:31,vars:7,consts:[["novalidate","",3,"formGroup"],[1,"table"],["colSpan","3"],["for","name"],["type","text","id","name","formControlName","qtitle","required","",1,"form-control"],["formArrayName","choice"],[4,"ngFor","ngForOf"],[3,"click"],[4,"ngIf"],[3,"for"],["type","text",3,"id","formControlName"],["type","button",1,"btn","btn-sm","btn-light"],[1,"badge","badge-light",3,"click"],["name","","id","","formControlName","option",3,"change"],["value","","selected",""],[3,"value"],["name","","id","","formControlName","block"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"div")(2,"table",1)(3,"tr")(4,"td",2)(5,"label",3),t._uU(6,"Enter Your Question:"),t.qZA(),t._UZ(7,"input",4),t.qZA()(),t.TgZ(8,"tr")(9,"td")(10,"div",5),t.YNc(11,q,7,4,"div",6),t.TgZ(12,"button",7),t.NdJ("click",function(){return o.addChoice()}),t._uU(13,"Add Choice"),t.qZA()()()(),t.TgZ(14,"tr")(15,"td")(16,"button",7),t.NdJ("click",function(){return o.saveChange()}),t._uU(17,"Save Changes"),t.qZA()()(),t.TgZ(18,"tr")(19,"td")(20,"button",7),t.NdJ("click",function(){return o.showCondition()}),t._uU(21,"Set Condition"),t.qZA(),t.TgZ(22,"table")(23,"tr")(24,"td"),t.YNc(25,Z,5,1,"div",8),t.qZA(),t.TgZ(26,"td"),t.YNc(27,b,6,3,"div",8),t.qZA()()()()()()(),t.TgZ(28,"div"),t._uU(29),t.ALo(30,"json"),t.qZA()()),2&e&&(t.Q6J("formGroup",o.questionbase),t.xp6(11),t.Q6J("ngForOf",o.choice.controls),t.xp6(14),t.Q6J("ngIf",o.isCondition),t.xp6(2),t.Q6J("ngIf",o.isContent),t.xp6(2),t.hij(" ",t.lcZ(30,5,o.questionbase.value)," "))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,s.Q7,s.CE,r.sg,r.O5,s.EJ,s.YN,s.Kr],pipes:[r.Ov,r.Ts],styles:[""]}),n})();function x(n,i){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-shorttext",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("qbase",e._qbase)}}function A(n,i){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-multi-choice",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("qbase",e._qbase)}}let k=(()=>{class n{constructor(e,o){this.route=e,this.cs=o,this.shellType=""}ngOnInit(){this.qbase$=this.route.paramMap.pipe((0,v.w)(e=>this.cs.getQBase(parseInt(e.get("id"),10)))),this.qbase$.subscribe(e=>this._qbase=e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(d._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-shell"]],decls:3,vars:3,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"qbase"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,x,2,1,"div",1),t.YNc(2,A,2,1,"div",1),t.qZA()),2&e&&(t.Q6J("ngSwitch",o._qbase.content.controlType),t.xp6(1),t.Q6J("ngSwitchCase","stext"),t.xp6(1),t.Q6J("ngSwitchCase","multi"))},directives:[r.RF,r.n9,g,y],styles:[""]}),n})();const U=function(n){return["create",n]};function M(n,i){if(1&n&&(t.TgZ(0,"div")(1,"a",2),t._uU(2),t.qZA()()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(3,U,e.block)),t.xp6(1),t.AsE("",e.content.controlType,"--",e.block,"")}}let J=(()=>{class n{constructor(e){this.cs=e,this.qbase$=e.getQBases()}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-content"]],decls:4,vars:3,consts:[[1,"text-primary"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"h6",0),t._uU(1,"Contents"),t.qZA(),t.YNc(2,M,3,5,"div",1),t.ALo(3,"async")),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,o.qbase$)))},directives:[r.sg,u.yS],pipes:[r.Ov],styles:[""]}),n})(),S=(()=>{class n{constructor(e){this.cs=e,this.cnt=0}ngOnInit(){}createShell(e){this.qbase={block:++this.cnt,content:{key:"",qTitle:"",order:this.cnt,controlType:e,type:"",options:[],condition:{options:[]}}},this.cs.setQBase(this.qbase)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-type"]],decls:14,vars:0,consts:[[1,"text-primary"],["id",""],["option",""],["value","","selected","","disabled",""],["value","stext"],["value","multi"],[1,"button","text-primary",3,"click"]],template:function(e,o){if(1&e){const l=t.EpF();t.TgZ(0,"h6",0),t._uU(1,"create content"),t.qZA(),t.TgZ(2,"select",1,2)(4,"option",3),t._uU(5,"select type"),t.qZA(),t.TgZ(6,"option",4),t._uU(7,"Short Text"),t.qZA(),t.TgZ(8,"option",5),t._uU(9,"Multi Choice"),t.qZA()(),t._UZ(10,"hr"),t.TgZ(11,"div")(12,"button",6),t.NdJ("click",function(){t.CHM(l);const p=t.MAs(3);return o.createShell(p.value)}),t._uU(13,"create content"),t.qZA()()}},directives:[s.YN,s.Kr],styles:[""]}),n})();function N(n,i){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.AsE(" Key:",e.key," value:",e.value," ")}}function w(n,i){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.AsE(" option :",e.option," Block# :",e.block," ")}}function F(n,i){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.YNc(2,N,2,2,"div",0),t._UZ(3,"hr"),t._uU(4," condition: "),t.YNc(5,w,2,2,"div",0),t._UZ(6,"hr"),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q0o(" Block:",e.block," Key:",e.content.key," QTitle:",e.content.qTitle," Required:",e.content.required," ControlType:",e.content.controlType," Type:",e.content.type," order:",e.content.order," options: "),t.xp6(1),t.Q6J("ngForOf",e.content.options),t.xp6(3),t.Q6J("ngForOf",null==e.content.condition?null:e.content.condition.options)}}let Q=(()=>{class n{constructor(e){this.cs=e}ngOnInit(){this.qbase$=this.cs.getQBases()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-content-list"]],decls:4,vars:3,consts:[[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"h5"),t._uU(1,"Service Contents"),t.qZA(),t.YNc(2,F,7,9,"div",0),t.ALo(3,"async")),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,o.qbase$)))},directives:[r.sg],pipes:[r.Ov],styles:[""]}),n})();const O=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-form"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-sm-1",2,"background-color","lavender"],[1,"col-sm-7",2,"background-color","lavenderblush"],[1,"col-sm-4",2,"background-color","lavender"],[1,"col-sm-4"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-content"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"router-outlet"),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"app-type")(7,"hr"),t.TgZ(8,"div",0)(9,"div",4),t._UZ(10,"app-content-list"),t.qZA()()()())},directives:[J,u.lC,S,Q],encapsulation:2}),n})(),children:[{path:"create/:id",component:k}]}];let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(O)],u.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,s.u5,s.UX,Y]]}),n})()}}]);