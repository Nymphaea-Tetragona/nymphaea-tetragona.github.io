"use strict";(self["webpackChunknfi_todo"]=self["webpackChunknfi_todo"]||[]).push([[526],{2526:function(s,e,i){i.r(e),i.d(e,{default:function(){return V}});var a=i(6252),t=i(3577),l=i(9963);const n={class:"container"},o={class:"row align-items-center min-vh-100"},r={class:"col-12 col-sm-8 col-md-6 col-lg-4 offset-0 offset-sm-2 offset-md-3 offset-lg-4"},d=(0,a._)("div",{class:"mb-3 text-center"},[(0,a._)("h1",null,"NFI - ToDo App"),(0,a._)("h4",null,"National Foundation For India")],-1),c=(0,a._)("hr",null,null,-1),m={key:0,class:"mb-3 border bg-warning border-warning rounded p-2",style:{"--bs-bg-opacity":"0.2"}},p={class:"mb-3"},u=(0,a._)("label",{class:"form-label",for:"email"},"Email",-1),h={class:"mb-4"},w=(0,a._)("label",{class:"form-label",for:"password"},"Password",-1),b={class:"input-group mb-3"},f=["type"],g={class:"input-group-text"},_=(0,a.Uk)("Show "),v={class:"d-flex justify-content-center align-items-center"},y=(0,a._)("button",{type:"submit",class:"btn btn-primary"},"Sign Up",-1);function k(s,e,i,k,U,P){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",o,[(0,a._)("div",r,[(0,a._)("form",{onSubmit:e[4]||(e[4]=(...s)=>this.signUpWithEmailAndPassword&&this.signUpWithEmailAndPassword(...s))},[d,c,this.message?((0,a.wg)(),(0,a.iD)("div",m,(0,t.zw)(this.message),1)):(0,a.kq)("",!0),(0,a._)("div",p,[u,(0,a.wy)((0,a._)("input",{class:"form-control",type:"email",name:"email",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=s=>this.email=s),required:""},null,512),[[l.nr,this.email]])]),(0,a._)("div",h,[w,(0,a._)("div",b,[(0,a.wy)((0,a._)("input",{type:this.isPasswordVisible?"text":"password",class:"form-control",name:"password",placeholder:"Your secure password","onUpdate:modelValue":e[1]||(e[1]=s=>this.password=s),required:""},null,8,f),[[l.YZ,this.password]]),(0,a._)("div",g,[(0,a.wy)((0,a._)("input",{class:"form-check-input mt-0 me-2",type:"checkbox","aria-label":"Checkbox for following text input","onUpdate:modelValue":e[2]||(e[2]=s=>this.isPasswordVisible=s)},null,512),[[l.e8,this.isPasswordVisible]]),_])])]),(0,a._)("div",v,[y,(0,a._)("button",{class:"ms-3 btn btn-outline-danger",onClick:e[3]||(e[3]=s=>this.$router.push("/sign-in"))}," Cancel ")])],32)])])])}var U={name:"SignUpView",data(){return{email:"",password:"",message:"",isPasswordVisible:!1}},methods:{async signUpWithEmailAndPassword(s){s.preventDefault();const e={email:this.email,password:this.password};try{await this.$store.dispatch("signUpWithEmailAndPassword",e)}catch(i){this.message=i.message}}}},P=i(3744);const x=(0,P.Z)(U,[["render",k]]);var V=x}}]);
//# sourceMappingURL=526.eca0f34f.js.map