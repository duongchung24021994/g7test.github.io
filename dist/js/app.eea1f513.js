(function(e){function t(t){for(var o,i,f=t[0],d=t[1],c=t[2],l=0,s=[];l<f.length;l++)i=f[l],n[i]&&s.push(n[i][0]),n[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);u&&u(t);while(s.length)s.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,f=1;f<r.length;f++){var d=r[f];0!==n[d]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={app:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=t,f=f.slice();for(var c=0;c<f.length;c++)t(f[c]);var u=d;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("744f"),r("6c7b"),r("7514"),r("20d6"),r("1c4c"),r("6762"),r("cadf"),r("e804"),r("55dd"),r("d04f"),r("c8ce"),r("217b"),r("7f7f"),r("f400"),r("7f25"),r("536b"),r("d9ab"),r("f9ab"),r("32d7"),r("25c9"),r("9f3c"),r("042e"),r("c7c6"),r("f4ff"),r("049f"),r("7872"),r("a69f"),r("0b21"),r("6c1a"),r("c7c62"),r("84b4"),r("c5f6"),r("2e37"),r("fca0"),r("7cdf"),r("ee1d"),r("b1b1"),r("87f3"),r("9278"),r("5df2"),r("04ff"),r("f751"),r("4504"),r("fee7"),r("ffc1"),r("0d6d"),r("9986"),r("8e6e"),r("25db"),r("e4f7"),r("b9a1"),r("64d5"),r("9aea"),r("db97"),r("66c8"),r("57f0"),r("165b"),r("456d"),r("cf6a"),r("fd24"),r("8615"),r("551c"),r("097d"),r("df1b"),r("2397"),r("88ca"),r("ba16"),r("d185"),r("ebde"),r("2d34"),r("f6b3"),r("2251"),r("c698"),r("a19f"),r("9253"),r("9275"),r("3b2b"),r("3846"),r("4917"),r("a481"),r("28a5"),r("386d"),r("6b54"),r("4f7f"),r("8a81"),r("ac4d"),r("8449"),r("9c86"),r("fa83"),r("48c0"),r("a032"),r("aef6"),r("d263"),r("6c37"),r("9ec8"),r("5695"),r("2fdb"),r("d0b0"),r("5df3"),r("b54a"),r("f576"),r("ed50"),r("788d"),r("14b9"),r("f386"),r("f559"),r("1448"),r("673e"),r("242a"),r("c66f"),r("b05c"),r("34ef"),r("6aa2"),r("15ac"),r("af56"),r("b6e4"),r("9c29"),r("63d9"),r("4dda"),r("10ad"),r("c02b"),r("4795"),r("130f"),r("ac6a"),r("96cf"),r("0cdd");var o=r("2b0e"),n=r("5f5b");r("ab8b"),r("2dd8");o["default"].use(n["a"]);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-nav",{attrs:{pills:""}},[r("b-nav-item",[e._v("Trang Chủ")]),r("b-nav-item",[e._v("Giới Thiệu")]),r("b-nav-item-dropdown",{attrs:{id:"my-nav-dropdown",text:"Dịch Vụ","toggle-class":"nav-link-custom",right:""}},[r("b-dropdown-item",[e._v("Thẻ Taxi Doanh Nghiệp")]),r("b-dropdown-item",[e._v("Taxi Sân Bay")]),r("b-dropdown-item",[e._v("Xe Tuyến Dài")]),r("b-dropdown-item",[e._v("Bảng Giá Cước")]),r("b-dropdown-item",[e._v("Dịch Vụ Quảng Cáo")]),r("b-dropdown-item",[e._v("App G7 Taxi")])],1),r("b-nav-item",[e._v("Tin Tức")]),r("b-nav-item",[e._v("Trở Thành Lái Xe")]),r("b-nav-item",[e._v("Câu Hỏi Thường Gặp")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[e._v("Liên hệ")]),r("b-modal",{attrs:{id:"modal-1",title:"Liên hệ với chúng tôi"}},[e.show?r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[r("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Food:","label-for":"input-3"}},[r("b-form-select",{attrs:{id:"input-3",options:e.foods,required:""},model:{value:e.form.food,callback:function(t){e.$set(e.form,"food",t)},expression:"form.food"}})],1),r("b-form-group",{attrs:{id:"input-group-4"}},[r("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[r("b-form-checkbox",{attrs:{value:"me"}},[e._v("Check me out")]),r("b-form-checkbox",{attrs:{value:"that"}},[e._v("Check that out")])],1)],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e(),r("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[r("pre",{staticClass:"m-0"},[e._v(e._s(e.form))])])],1)],1)],1)},i=[],f={data:function(){return{form:{email:"",name:"",food:null,checked:[]},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick(function(){t.show=!0})}}},d=f,c=r("2877"),u=Object(c["a"])(d,a,i,!1,null,null,null),l=u.exports;o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.eea1f513.js.map