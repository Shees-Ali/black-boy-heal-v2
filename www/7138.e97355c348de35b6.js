"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7138],{6651:(O,P,c)=>{c.d(P,{n:()=>g});var l=c(8256),u=c(6895),e=c(6955);let y=(()=>{class i{constructor(s,p,C){this.location=s,this.router=p,this.activatedRoute=C}setRoot(s,p={}){this.navigateTo(s,p)}push(s,p={}){this.navigateTo(s,{queryParams:p})}pop(){return new Promise(s=>{this.location.back(),s(!0)})}navigateTo(s,p){this.router.navigate(["pages/"+s],p)}navigateFromRoot(s,p){this.router.navigate([s],p)}getParams(){return this.activatedRoute.snapshot.params}getQueryParams(){return this.activatedRoute.snapshot.queryParams}}return i.\u0275fac=function(s){return new(s||i)(l.LFG(u.Ye),l.LFG(e.F0),l.LFG(e.gz))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var f=c(6801),M=c(5035),v=c(655);let r=(()=>{class i{constructor(s){this.modal=s}present(s,p={},C=""){return new Promise(o=>(0,v.mG)(this,void 0,void 0,function*(){const h=yield this.modal.create({component:s,cssClass:C,componentProps:p});h.onDidDismiss().then(m=>{o(m)}),yield h.present()}))}dismiss(s={}){return new Promise(p=>{s.dismiss=!0,this.modal.dismiss(s).then(C=>p(!0))})}}return i.\u0275fac=function(s){return new(s||i)(l.LFG(M.IN))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var a=c(1481);let t=(()=>{class i{constructor(s){this.platform=s}set(s,p){return new Promise(C=>{localStorage.setItem(s,p),C(s)})}get(s){return new Promise(p=>{p(localStorage.getItem(s))})}}return i.\u0275fac=function(s){return new(s||i)(l.LFG(M.t4))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var n=c(4585);class g{constructor(d){this.platform=d.get(M.t4),this.utility=d.get(f.t),this.location=d.get(u.Ye),this.nav=d.get(y),this.modals=d.get(r),this.menuCtrl=d.get(M._q),this.storageService=d.get(t),this.domSanitizer=d.get(a.H7),this.graphql=d.get(n.B)}}},7138:(O,P,c)=>{c.r(P),c.d(P,{MessagesRoomModule:()=>C});var l=c(6955),u=c(6895),e=c(8256);let y=(()=>{class o{}return o.\u0275fac=function(m){return new(m||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez]}),o})();var f=c(9632),M=c(5035),v=c(6651);function r(o,h){if(1&o){const m=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(){e.CHM(m);const _=e.oxw();return e.KtG(_.goToChat())}),e.TgZ(1,"div",2),e._UZ(2,"img",3),e.qZA(),e.TgZ(3,"div",4)(4,"div",5)(5,"span",6),e._uU(6,"Fieece Morigold"),e.qZA(),e.TgZ(7,"span",7),e._uU(8,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus quasi distinctio blanditiis repudiandae, doloribus sunt autem velit amet magnam optio odit eius culpa vero suscipit aliquam iste iusto cum! Deserunt illo ipsa facere numquam dolore! Excepturi eveniet ullam eaque assumenda ab, deleniti, esse similique doloremque at blanditiis explicabo non."),e.qZA()(),e.TgZ(9,"div",8)(10,"span",9),e._uU(11,"15 min"),e.qZA(),e.TgZ(12,"span",10),e._uU(13,"1"),e.qZA()()()()}}const a=function(){return[1,2,4,5,6,7,3,5,7,8,9,9]};let t=(()=>{class o extends v.n{constructor(m){super(m)}ngOnInit(){}goToChat(){this.nav.navigateTo("student/student-chat/chat-box")}}return o.\u0275fac=function(m){return new(m||o)(e.Y36(e.zs3))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-message-person"]],features:[e.qOj],decls:1,vars:2,consts:[["class","person-main",3,"click",4,"ngFor","ngForOf"],[1,"person-main",3,"click"],[1,"left"],["src","../../../../assets/images/avatar1.png"],[1,"right"],[1,"name"],[1,"n"],[1,"m"],[1,"message"],[1,"time","poppins"],[1,"m-number","poppins"]],template:function(m,x){1&m&&e.YNc(0,r,14,0,"div",0),2&m&&e.Q6J("ngForOf",e.DdM(1,a))},dependencies:[u.sg],styles:[".person-main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-content:space-evenly;width:375px;margin:10px auto}.person-main[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:60px;height:60px}.person-main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:277px;height:72px;display:flex}.person-main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;width:80%}.person-main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .n[_ngcontent-%COMP%]{font-size:14px;color:#fff}.person-main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .m[_ngcontent-%COMP%]{font-size:12px;color:#77838f;overflow:hidden;height:35px}.person-main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;margin-left:50px}.person-main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:12px;font-size:400;color:#77838f}.person-main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .m-number[_ngcontent-%COMP%]{font-size:14px;width:43px;height:25px;border-radius:4px;background:#166aff;color:#fff;display:flex;align-items:center;justify-content:center}"]}),o})();function n(o,h){1&o&&(e.TgZ(0,"div",15)(1,"div",16)(2,"div",17),e._UZ(3,"img",18),e.qZA()()())}function g(o,h){1&o&&e.YNc(0,n,4,0,"ng-template",14)}const i=function(){return[1,2,3,4,5,6,7,8,9,10]},s=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(m){return new(m||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-messages-room"]],decls:16,vars:3,consts:[[1,"message-room-outer"],[1,"header"],["src","./../../../../assets/images/Top Bar.png"],[1,"input"],["name","search"],["placeholder","Search Messages",1,"poppins"],["name","add-circle",1,"add-button"],[1,"home-category-slider-outer"],[1,"category-slider-outer"],["pager","true",1,"swiper-outer",3,"slidesPerView"],[4,"ngFor","ngForOf"],[1,"message-heading"],[1,"heading"],[1,"message-list"],["swiperSlide","","class","swiper-inner"],[1,"item-box-outer"],[1,"item-box-inner"],[1,"image-outer"],["src","./../../../../assets/images/avatar1.png"]],template:function(m,x){1&m&&(e.TgZ(0,"ion-content",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3),e._UZ(4,"ion-icon",4)(5,"input",5),e.qZA(),e._UZ(6,"ion-icon",6),e.qZA(),e.TgZ(7,"div",7)(8,"div",8)(9,"swiper",9),e.YNc(10,g,1,0,null,10),e.qZA()()(),e.TgZ(11,"div",11)(12,"p",12),e._uU(13,"Messages"),e.qZA()(),e.TgZ(14,"div",13),e._UZ(15,"app-message-person"),e.qZA()()),2&m&&(e.xp6(9),e.Q6J("slidesPerView",5),e.xp6(1),e.Q6J("ngForOf",e.DdM(2,i)))},dependencies:[u.sg,M.W2,M.gu,f.nF,f.YC,t],styles:[".message-room-outer[_ngcontent-%COMP%]{--background: #272a2c}.message-room-outer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:113px;width:375px;margin:auto;display:flex;align-items:center;justify-content:space-evenly;background:#293132;border-radius:0 0 25px 25px}.message-room-outer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border-radius:10px;display:flex;align-items:center;justify-content:space-between;width:230px;height:40px;background:#ffffff!important;color:#77838f;font-weight:400;padding:5px}.message-room-outer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:6 px;height:39px;width:90%;background:#ffffff;border:none;color:#77838f;font-size:12px;font-weight:400}.message-room-outer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.message-room-outer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]{border-radius:50%!important;height:40px;width:40px;background:#1ec27a;color:#fff}.message-room-outer[_ngcontent-%COMP%]   .home-category-slider-outer[_ngcontent-%COMP%]{color:#fff;margin:0 auto;width:375px;padding:0}.message-room-outer[_ngcontent-%COMP%]   .home-category-slider-outer[_ngcontent-%COMP%]   .category-slider-outer[_ngcontent-%COMP%]{width:100%;height:100%}.message-room-outer[_ngcontent-%COMP%]   .home-category-slider-outer[_ngcontent-%COMP%]   .item-box-inner.active[_ngcontent-%COMP%]{background:#063b00!important;filter:drop-shadow(0px 15px 10px lightgray)}.message-room-outer[_ngcontent-%COMP%]   .home-category-slider-outer[_ngcontent-%COMP%]   .item-box-inner.active[_ngcontent-%COMP%]   .text-outer[_ngcontent-%COMP%]   ion-text.text-inner[_ngcontent-%COMP%]{color:#fff}.message-room-outer[_ngcontent-%COMP%]   .home-category-slider-outer[_ngcontent-%COMP%]   .item-box-inner[_ngcontent-%COMP%]{width:60px;height:60px;margin:10px;color:#fff}.message-room-outer[_ngcontent-%COMP%]   .home-category-slider-outer[_ngcontent-%COMP%]   .item-box-inner[_ngcontent-%COMP%]   .image-outer[_ngcontent-%COMP%]{width:60px;height:60px;position:relative}.message-room-outer[_ngcontent-%COMP%]   .swiper-outer[_ngcontent-%COMP%]{padding:0;overflow:visible}.message-room-outer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-family:Poppins}.message-room-outer[_ngcontent-%COMP%]   .imagen64[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:50px;height:50px;background-position:center center!important;background-repeat:no-repeat!important;background-size:30px!important}.message-room-outer[_ngcontent-%COMP%]   .message-heading[_ngcontent-%COMP%]{height:50px}.message-room-outer[_ngcontent-%COMP%]   .message-heading[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{margin-top:-5px;margin-left:13px;font-size:34px;font-weight:600;color:#fff}.message-room-outer[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]{margin-top:15px}"]}),o})()}];let p=(()=>{class o{}return o.\u0275fac=function(m){return new(m||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.Bz.forChild(s),l.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(m){return new(m||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,M.Pc,f.kz,y,l.Bz,p]}),o})()},4585:(O,P,c)=>{c.d(P,{B:()=>y});var l=c(381),u=c(8256),e=c(6801);let y=(()=>{class f{constructor(v,r){this.apollo=v,this.util=r,this.getUsersgql=l.Ps`
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
`}getUsers(){return new Promise((v,r)=>{this.util.showLoader();try{this.apollo.watchQuery({query:this.getUsersgql,variables:{limit:1},errorPolicy:"all"}).valueChanges.subscribe(a=>{this.util.hideLoader(),a.error&&this.util.presentFailureToast(a.error,""),a.errors&&this.util.presentFailureToast(a.error,""),v(a.data)})}catch(a){this.util.hideLoader(),this.util.presentFailureToast(a,""),r(a)}})}loginUser(v,r){return new Promise((a,t)=>{this.util.showLoader();try{this.apollo.watchQuery({query:this.loginUsergql,variables:{email:v,password:r},errorPolicy:"all"}).valueChanges.subscribe(n=>{console.log("res",n),this.util.hideLoader(),n.error&&this.util.presentFailureToast(n.error,""),n.errors&&this.util.presentFailureToast(n.error,""),a(n.data)})}catch(n){console.log("er",n),this.util.hideLoader(),this.util.presentFailureToast(n,""),t(n)}})}signUp(){return new Promise((v,r)=>{this.util.showLoader();try{this.apollo.watchQuery({query:this.getUsersgql,variables:{limit:1},errorPolicy:"all"}).valueChanges.subscribe(a=>{this.util.hideLoader(),a.error&&this.util.presentFailureToast(a.error,""),a.errors&&this.util.presentFailureToast(a.error,""),v(a.data)})}catch(a){this.util.hideLoader(),this.util.presentFailureToast(a,""),r(a)}})}}return f.\u0275fac=function(v){return new(v||f)(u.LFG(l._M),u.LFG(e.t))},f.\u0275prov=u.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},6801:(O,P,c)=>{c.d(P,{t:()=>v});var l=c(655),u=c(8256),e=c(5035);let y=(()=>{class r{constructor(t){this.loadingController=t}showLoader(t="Please wait..."){return(0,l.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({cssClass:"my-custom-class",message:t}),yield this.loading.present()})}hideLoader(){return(0,l.mG)(this,void 0,void 0,function*(){this.loading?this.loading.dismiss():console.log(this.loading)})}}return r.\u0275fac=function(t){return new(t||r)(u.LFG(e.HT))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),f=(()=>{class r{constructor(){}capitalizeEachFirst(t){if(!t)return"";const n=t.toLowerCase().split(" ");for(let g=0;g<n.length;g++)n[g]=n[g].charAt(0).toUpperCase()+n[g].substring(1);return n.join(" ")}checkIfMatchingPasswords(t,n){return g=>{const d=g.controls[n];return d.setErrors(g.controls[t].value!==d.value?{notEquivalent:!0}:null)}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),M=(()=>{class r{constructor(t,n,g){this.alertController=t,this.toastCtrl=n,this.strings=g}showAlert(t,n="Alert"){return new Promise(g=>(0,l.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:n,message:t,buttons:[{text:"OK",cssClass:"secondary",handler:d=>{g(!0)}}]})).present()}))}presentSuccessToast(t,n){return(0,l.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:this.strings.capitalizeEachFirst(t),duration:5e3,position:"top",cssClass:n})).present()})}presentFailureToast(t,n){return(0,l.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:this.strings.capitalizeEachFirst(t||"ERROR"),duration:5e3,position:"top",cssClass:n})).present()})}presentToast(t){return(0,l.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:t,duration:5e3,position:"bottom"})).present()})}presentConfirm(t="OK",n="Cancel",g="Are You Sure?",i=""){return new Promise(d=>(0,l.mG)(this,void 0,void 0,function*(){(yield this.alertController.create({header:g,message:i,buttons:[{text:n,role:"cancel",handler:()=>{d(!1)}},{text:t,handler:()=>{d(!0)}}]})).present()}))}}return r.\u0275fac=function(t){return new(t||r)(u.LFG(e.Br),u.LFG(e.yF),u.LFG(f))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),v=(()=>{class r{constructor(t,n,g,i){this.loading=t,this.plt=n,this.alerts=g,this.strings=i,this.pdfLink="http://thisisvantage.com/saudiflag/public"}showLoader(t="Please wait..."){return(0,l.mG)(this,void 0,void 0,function*(){return yield this.loading.showLoader(t)})}hideLoader(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this.loading.hideLoader()})}showAlert(t,n="Alert"){return this.alerts.showAlert(t,n)}presentToast(t){return this.alerts.presentToast(t)}presentSuccessToast(t,n){return this.alerts.presentSuccessToast(t,n)}presentFailureToast(t,n){return this.alerts.presentFailureToast(t,n)}presentConfirm(t="OK",n="Cancel",g="Are You Sure?",i=""){return this.alerts.presentConfirm(t,n,g,i)}capitalizeEachFirst(t){return this.strings.capitalizeEachFirst(t)}}return r.\u0275fac=function(t){return new(t||r)(u.LFG(y),u.LFG(e.t4),u.LFG(M),u.LFG(f))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);