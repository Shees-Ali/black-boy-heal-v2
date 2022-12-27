"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3409],{3646:(x,v,r)=>{r.d(v,{G:()=>s});var l=r(6651),n=r(8256),p=r(6895),_=r(5035);function t(a,e){1&a&&(n.TgZ(0,"ion-menu-button"),n._UZ(1,"ion-icon",6),n.qZA())}function P(a,e){if(1&a){const o=n.EpF();n.TgZ(0,"ion-button",7),n.NdJ("click",function(){n.CHM(o);const c=n.oxw();return n.KtG(c.back())}),n._UZ(1,"ion-icon",8),n.qZA()}}function f(a,e){1&a&&(n.TgZ(0,"ion-button",9),n._UZ(1,"ion-icon",10),n.qZA())}let s=(()=>{class a extends l.n{constructor(o){super(o),this.title="",this.showBell=!1,this.showMenu=!1,this.showBack=!0}ngOnInit(){}back(){this.nav.pop()}}return a.\u0275fac=function(o){return new(o||a)(n.Y36(n.zs3))},a.\u0275cmp=n.Xpm({type:a,selectors:[["header"]],inputs:{title:"title",showBell:"showBell",showMenu:"showMenu",showBack:"showBack"},features:[n.qOj],decls:9,vars:4,consts:[[1,"bg-black-shade"],["slot","start"],[4,"ngIf"],["color","light",3,"click",4,"ngIf"],["slot","end"],["color","light",4,"ngIf"],["src","assets/svgs/menu-icon.svg"],["color","light",3,"click"],["name","arrow-back"],["color","light"],["src","assets/svgs/bell-icon.svg"]],template:function(o,d){1&o&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n.YNc(3,t,2,0,"ion-menu-button",2),n.YNc(4,P,2,0,"ion-button",3),n.qZA(),n.TgZ(5,"ion-title"),n._uU(6),n.qZA(),n.TgZ(7,"ion-buttons",4),n.YNc(8,f,2,0,"ion-button",5),n.qZA()()()),2&o&&(n.xp6(3),n.Q6J("ngIf",d.showMenu),n.xp6(1),n.Q6J("ngIf",d.showBack),n.xp6(2),n.Oqu(d.title),n.xp6(2),n.Q6J("ngIf",d.showBell))},dependencies:[p.O5,_.YG,_.Sm,_.Gu,_.gu,_.fG,_.wd,_.sr]}),a})()},881:(x,v,r)=>{r.d(v,{m:()=>_});var l=r(6895),n=r(5035),p=r(8256);let _=(()=>{class t{}return t.\u0275fac=function(f){return new(f||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[l.ez,n.Pc]}),t})()},6651:(x,v,r)=>{r.d(v,{n:()=>d});var l=r(8256),n=r(6895),p=r(6955);let _=(()=>{class c{constructor(g,C,M){this.location=g,this.router=C,this.activatedRoute=M}setRoot(g,C={}){this.navigateTo(g,C)}push(g,C={}){this.navigateTo(g,{queryParams:C})}pop(){return new Promise(g=>{this.location.back(),g(!0)})}navigateTo(g,C){this.router.navigate(["pages/"+g],C)}navigateFromRoot(g,C){this.router.navigate([g],C)}getParams(){return this.activatedRoute.snapshot.params}getQueryParams(){return this.activatedRoute.snapshot.queryParams}}return c.\u0275fac=function(g){return new(g||c)(l.LFG(n.Ye),l.LFG(p.F0),l.LFG(p.gz))},c.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var t=r(6801),P=r(5035),f=r(655);let s=(()=>{class c{constructor(g){this.modal=g}present(g,C={},M=""){return new Promise(i=>(0,f.mG)(this,void 0,void 0,function*(){const m=yield this.modal.create({component:g,cssClass:M,componentProps:C});m.onDidDismiss().then(h=>{i(h)}),yield m.present()}))}dismiss(g={}){return new Promise(C=>{g.dismiss=!0,this.modal.dismiss(g).then(M=>C(!0))})}}return c.\u0275fac=function(g){return new(g||c)(l.LFG(P.IN))},c.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var a=r(1481);let e=(()=>{class c{constructor(g){this.platform=g}set(g,C){return new Promise(M=>{localStorage.setItem(g,C),M(g)})}get(g){return new Promise(C=>{C(localStorage.getItem(g))})}}return c.\u0275fac=function(g){return new(g||c)(l.LFG(P.t4))},c.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var o=r(4585);class d{constructor(u){this.platform=u.get(P.t4),this.utility=u.get(t.t),this.location=u.get(n.Ye),this.nav=u.get(_),this.modals=u.get(s),this.menuCtrl=u.get(P._q),this.storageService=u.get(e),this.domSanitizer=u.get(a.H7),this.graphql=u.get(o.B)}}},3409:(x,v,r)=>{r.r(v),r.d(v,{CreateTaskPageModule:()=>M});var l=r(6895),n=r(433),p=r(5035),_=r(6955),t=r(8256);let P=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(h){return new(h||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-task-overview"]],decls:26,vars:0,consts:[[1,"main"],[1,"task-name"],[1,"title","poppins"],[1,"input-outer"],["placeholder","Enter Task Name",1,"poppins"],[1,"task-date"],["type","date","placeholder","Enter Task Date"],[1,"desc"],[1,"poppins"],[1,"attach-file"],["placeholder","Enter Task Date",1,"poppins"],["item-end","","name","link",1,"icon"]],template:function(h,O){1&h&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"Task Name"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"input",4),t.qZA()(),t.TgZ(6,"div",5)(7,"span",2),t._uU(8,"Task Dates"),t.qZA(),t.TgZ(9,"div",3),t._UZ(10,"input",6),t.qZA()(),t.TgZ(11,"div",7)(12,"span",2),t._uU(13,"Description"),t.qZA(),t._UZ(14,"ion-textarea",8),t.qZA(),t.TgZ(15,"div",5)(16,"span",2),t._uU(17,"Deadline"),t.qZA(),t.TgZ(18,"div",3),t._UZ(19,"input",6),t.qZA()(),t.TgZ(20,"div",9)(21,"span",2),t._uU(22,"Attach File"),t.qZA(),t.TgZ(23,"div",3),t._UZ(24,"input",10)(25,"ion-icon",11),t.qZA()()())},dependencies:[p.gu,p.g2,p.j9],styles:[".main[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:20px}.main[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]{width:100%;height:72px}.main[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:500}.main[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   .input-outer[_ngcontent-%COMP%]{width:100%;height:42px;border-radius:8px;display:flex;justify-content:center;align-items:center;background:#293132;margin-top:6px}.main[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   .input-outer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:18px;padding:20px;background:#293132;color:#fff;width:100%;height:42px;outline:none;border:none;border-radius:8px}.main[_ngcontent-%COMP%]   .task-date[_ngcontent-%COMP%]{width:100%;margin-top:20px;height:72px}.main[_ngcontent-%COMP%]   .task-date[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:500}.main[_ngcontent-%COMP%]   .task-date[_ngcontent-%COMP%]   .input-outer[_ngcontent-%COMP%]{width:100%;height:42px;border-radius:8px;display:flex;justify-content:center;align-items:center;background:#293132;margin-top:6px;color:#d1cecd}.main[_ngcontent-%COMP%]   .task-date[_ngcontent-%COMP%]   .input-outer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#d1cecd!important;font-size:20px;padding:20px;background:#293132;width:100%;height:42px;outline:none;border:none;border-radius:8px}.main[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{width:100%;margin-top:25px;height:189px}.main[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:400}.main[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{background:#293132;border-radius:8px;padding:10px;height:15vh;margin-top:15px;width:100%;font-size:12px;letter-spacing:2;color:#fff;overflow:hidden}.main[_ngcontent-%COMP%]   .attach-file[_ngcontent-%COMP%]{width:100%;margin-top:20px;height:72px}.main[_ngcontent-%COMP%]   .attach-file[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:500}.main[_ngcontent-%COMP%]   .attach-file[_ngcontent-%COMP%]   .input-outer[_ngcontent-%COMP%]{width:100%;height:42px;border-radius:8px;display:flex;justify-content:center;align-items:center;padding-right:15px;background:#293132;margin-top:6px;color:#fff}.main[_ngcontent-%COMP%]   .attach-file[_ngcontent-%COMP%]   .input-outer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:18px;padding:20px;background:#293132;color:#fff;width:100%;height:42px;outline:none;border:none;border-radius:8px}.main[_ngcontent-%COMP%]   .attach-file[_ngcontent-%COMP%]   .input-outer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:20px}"]}),i})(),f=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(h){return new(h||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-task-activity"]],decls:34,vars:0,consts:[[1,"main"],[1,"activity-box"],[1,"img"],["src","../../../../assets/svgs/activity-img.svg"],[1,"text","poppins"],[1,"head"],[1,"poppins"],[1,"time","poppins"],[1,"div-text","poppins"],[1,"images"],["src","../../../../assets/images/ab45.png",1,"img"],[1,"activity-box2"],["src","../../../../assets/svgs/pdficon.svg"],[1,"img-text"],[1,"title"],[1,"mb"]],template:function(h,O){1&h&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"span",6),t._uU(7," Black boy herdassa "),t.qZA(),t.TgZ(8,"span",7),t._uU(9,"Sun, 18 July 2022"),t.qZA()(),t.TgZ(10,"span",8),t._uU(11," aslkdjsaldkjsalkdjslkajdlsajasdkjhasjkd; "),t.qZA(),t.TgZ(12,"div",9),t._UZ(13,"img",10)(14,"img",10)(15,"img",10),t.qZA()()(),t.TgZ(16,"div",11)(17,"div",2),t._UZ(18,"img",3),t.qZA(),t.TgZ(19,"div",4)(20,"div",5)(21,"span",6),t._uU(22," Black boy herdassa "),t.qZA(),t.TgZ(23,"span",7),t._uU(24,"Sun, 18 July 2022"),t.qZA()(),t.TgZ(25,"span",8),t._uU(26," aslkdjsaldkjsalkdjslkajdlsajasdkjhasjkd; "),t.qZA(),t.TgZ(27,"div",9),t._UZ(28,"img",12),t.TgZ(29,"div",13)(30,"span",14),t._uU(31,"Presentation"),t.qZA(),t.TgZ(32,"span",15),t._uU(33,"5 MB"),t.qZA()()()()()())},styles:[".main[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:20px}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]{width:100%;height:auto;display:flex;justify-content:flex-start;margin-top:20px;border-top:1px solid #d8d8d8;padding:15px}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:58px}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#fff;font-size:12px;width:100%;height:auto;display:flex;flex-direction:column;flex-wrap:wrap;margin-left:10px}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:3px}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:10px;font-weight:400}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .div-text[_ngcontent-%COMP%]{width:79%;height:auto;font-size:12px;font-weight:400;padding:3px}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;height:auto}.main[_ngcontent-%COMP%]   .activity-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:44px;border-radius:2px;margin-left:10px;margin-top:10px}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]{width:100%;height:auto;display:flex;justify-content:flex-start;margin-top:20px;border-top:1px solid lightgray;padding:15px}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:58px}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#fff;font-size:12px;width:100%;height:auto;display:flex;flex-direction:column;flex-wrap:wrap;margin-left:10px}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:3px}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:10px;font-weight:400}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .div-text[_ngcontent-%COMP%]{width:79%;height:auto;font-size:12px;font-weight:400;padding:3px}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;height:auto}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:44px;margin-left:10px;margin-top:10px}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{margin-left:10px;display:flex;flex-direction:column}.main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .activity-box2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   .mb[_ngcontent-%COMP%]{font-size:10px;color:#fff}"]}),i})();var s=r(3646);function a(i,m){1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-task-overview"),t.qZA())}function e(i,m){1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-task-activity"),t.qZA())}const d=[{path:"",component:(()=>{class i{constructor(){this.type="deposit"}segmentChanged(h){console.log("Segment changed",h)}ngOnInit(){}}return i.\u0275fac=function(h){return new(h||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-create-task"]],decls:12,vars:5,consts:[[3,"title"],[1,"ion-padding"],["color","primary","scrollable","",3,"ngModel","ngModelChange","ionChange"],["value","deposit","checked",""],["value","loan"],[1,"segment",3,"ngSwitch"],[4,"ngSwitchCase"]],template:function(h,O){1&h&&(t._UZ(0,"header",0),t.TgZ(1,"ion-content",1)(2,"ion-segment",2),t.NdJ("ngModelChange",function(y){return O.type=y})("ionChange",function(y){return O.segmentChanged(y)}),t.TgZ(3,"ion-segment-button",3)(4,"ion-label"),t._uU(5,"OVERVIEW"),t.qZA()(),t.TgZ(6,"ion-segment-button",4)(7,"ion-label"),t._uU(8,"ACTIVITY"),t.qZA()()(),t.TgZ(9,"div",5),t.YNc(10,a,2,0,"div",6),t.YNc(11,e,2,0,"div",6),t.qZA()()),2&h&&(t.Q6J("title","CREATE A NEW TASK"),t.xp6(2),t.Q6J("ngModel",O.type),t.xp6(7),t.Q6J("ngSwitch",O.type),t.xp6(1),t.Q6J("ngSwitchCase","deposit"),t.xp6(1),t.Q6J("ngSwitchCase","loan"))},dependencies:[l.RF,l.n9,n.JJ,n.On,p.W2,p.Q$,p.cJ,p.GO,p.QI,P,f,s.G],styles:[".header-content[_ngcontent-%COMP%]{width:100%}ion-header[_ngcontent-%COMP%]{--ion-background-color: #272a2c}ion-header[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{text-align:center}ion-header[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:13px;padding-left:20px;color:#fff}ion-header[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}ion-content[_ngcontent-%COMP%]{--ion-background-color: #272a2c;width:100%}ion-content[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{--color: #ffffff;--background: #272a2c;width:100%}ion-segment-button.md[_ngcontent-%COMP%]::part(native){color:#fff}.segment-button-checked.md[_ngcontent-%COMP%]::part(native){color:#fff}ion-segment-button.md[_ngcontent-%COMP%]::part(indicator-background){height:4px;background:white}ion-segment-button.ios[_ngcontent-%COMP%]::part(native){color:#fff}.segment-button-checked.ios[_ngcontent-%COMP%]::part(native){color:#fff}"]}),i})()}];let c=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(d),_.Bz]}),i})(),u=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,p.Pc]}),i})(),g=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,p.Pc]}),i})();var C=r(881);let M=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,n.u5,p.Pc,c,u,g,C.m]}),i})()},4585:(x,v,r)=>{r.d(v,{B:()=>_});var l=r(381),n=r(8256),p=r(6801);let _=(()=>{class t{constructor(f,s){this.apollo=f,this.util=s,this.getUsersgql=l.Ps`
    query getUsers($limit: Int!){
        getUser(limit: $limit){
          user{ 
            _id
            fullName           
          }
          totalItem
        }
      }
  `,this.loginUsergql=l.Ps`
  query signIn($email: String!, $password: String!){
    signIn(data:{email:$email,password: $password}){
      token
      _id
      fullName
      role
    }
  }
`,this.signUpgql=l.Ps`
query getUsers($limit: Int!){
    getUser(limit: $limit){
      user{ 
        _id
        fullName
        role           
      }
      totalItem
    }
  }
`}getUsers(){return new Promise((f,s)=>{this.util.showLoader();try{this.apollo.watchQuery({query:this.getUsersgql,variables:{limit:1},errorPolicy:"all"}).valueChanges.subscribe(a=>{this.util.hideLoader(),a.error&&this.util.presentFailureToast(a.error,""),a.errors&&this.util.presentFailureToast(a.error,""),f(a.data)})}catch(a){this.util.hideLoader(),this.util.presentFailureToast(a,""),s(a)}})}loginUser(f,s){return new Promise((a,e)=>{this.util.showLoader();try{this.apollo.watchQuery({query:this.loginUsergql,variables:{email:f,password:s},errorPolicy:"all"}).valueChanges.subscribe(o=>{console.log("res",o),this.util.hideLoader(),o.error&&this.util.presentFailureToast(o.error,""),o.errors&&this.util.presentFailureToast(o.error,""),a(o.data)})}catch(o){console.log("er",o),this.util.hideLoader(),this.util.presentFailureToast(o,""),e(o)}})}signUp(){return new Promise((f,s)=>{this.util.showLoader();try{this.apollo.watchQuery({query:this.getUsersgql,variables:{limit:1},errorPolicy:"all"}).valueChanges.subscribe(a=>{this.util.hideLoader(),a.error&&this.util.presentFailureToast(a.error,""),a.errors&&this.util.presentFailureToast(a.error,""),f(a.data)})}catch(a){this.util.hideLoader(),this.util.presentFailureToast(a,""),s(a)}})}}return t.\u0275fac=function(f){return new(f||t)(n.LFG(l._M),n.LFG(p.t))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},6801:(x,v,r)=>{r.d(v,{t:()=>f});var l=r(655),n=r(8256),p=r(5035);let _=(()=>{class s{constructor(e){this.loadingController=e}showLoader(e="Please wait..."){return(0,l.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({cssClass:"my-custom-class",message:e}),yield this.loading.present()})}hideLoader(){return(0,l.mG)(this,void 0,void 0,function*(){this.loading?this.loading.dismiss():console.log(this.loading)})}}return s.\u0275fac=function(e){return new(e||s)(n.LFG(p.HT))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),t=(()=>{class s{constructor(){}capitalizeEachFirst(e){if(!e)return"";const o=e.toLowerCase().split(" ");for(let d=0;d<o.length;d++)o[d]=o[d].charAt(0).toUpperCase()+o[d].substring(1);return o.join(" ")}checkIfMatchingPasswords(e,o){return d=>{const u=d.controls[o];return u.setErrors(d.controls[e].value!==u.value?{notEquivalent:!0}:null)}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),P=(()=>{class s{constructor(e,o,d){this.alertController=e,this.toastCtrl=o,this.strings=d}showAlert(e,o="Alert"){return new Promise(d=>(0,l.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:o,message:e,buttons:[{text:"OK",cssClass:"secondary",handler:u=>{d(!0)}}]})).present()}))}presentSuccessToast(e,o){return(0,l.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:this.strings.capitalizeEachFirst(e),duration:5e3,position:"top",cssClass:o})).present()})}presentFailureToast(e,o){return(0,l.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:this.strings.capitalizeEachFirst(e||"ERROR"),duration:5e3,position:"top",cssClass:o})).present()})}presentToast(e){return(0,l.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e,duration:5e3,position:"bottom"})).present()})}presentConfirm(e="OK",o="Cancel",d="Are You Sure?",c=""){return new Promise(u=>(0,l.mG)(this,void 0,void 0,function*(){(yield this.alertController.create({header:d,message:c,buttons:[{text:o,role:"cancel",handler:()=>{u(!1)}},{text:e,handler:()=>{u(!0)}}]})).present()}))}}return s.\u0275fac=function(e){return new(e||s)(n.LFG(p.Br),n.LFG(p.yF),n.LFG(t))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),f=(()=>{class s{constructor(e,o,d,c){this.loading=e,this.plt=o,this.alerts=d,this.strings=c,this.pdfLink="http://thisisvantage.com/saudiflag/public"}showLoader(e="Please wait..."){return(0,l.mG)(this,void 0,void 0,function*(){return yield this.loading.showLoader(e)})}hideLoader(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this.loading.hideLoader()})}showAlert(e,o="Alert"){return this.alerts.showAlert(e,o)}presentToast(e){return this.alerts.presentToast(e)}presentSuccessToast(e,o){return this.alerts.presentSuccessToast(e,o)}presentFailureToast(e,o){return this.alerts.presentFailureToast(e,o)}presentConfirm(e="OK",o="Cancel",d="Are You Sure?",c=""){return this.alerts.presentConfirm(e,o,d,c)}capitalizeEachFirst(e){return this.strings.capitalizeEachFirst(e)}}return s.\u0275fac=function(e){return new(e||s)(n.LFG(_),n.LFG(p.t4),n.LFG(P),n.LFG(t))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);