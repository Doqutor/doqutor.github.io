(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(t,e,r){"use strict";var o=r(267);e.a=o.a},171:function(t,e,r){"use strict";var o=r(268);e.a=o.a},279:function(t,e,r){"use strict";var o=r(17),n=r(33),l=function(){function t(){Object(o.a)(this,t)}return Object(n.a)(t,[{key:"getWithDefault",value:function(t,e){return localStorage["config:".concat(t)]||(localStorage["config:".concat(t)]=e),localStorage["config:".concat(t)]}},{key:"setToken",value:function(t,e){localStorage["config:token"]=t,localStorage["config:tokenExpires"]=Math.floor(Date.now()/1e3)+e}},{key:"loginEndpoint",get:function(){return this.getWithDefault("loginEndpoint","https://login-tom-a2fad0-infrastructure.auth.ap-southeast-2.amazoncognito.com/login?client_id=9sakc7oq54st06evu30rphjut&response_type=token&scope=doqutore/application")+"&redirect_uri=".concat(location.protocol,"//").concat(location.host,"/login")}},{key:"token",get:function(){return!localStorage["config:token"]||localStorage["config:tokenExpires"]&&localStorage["config:tokenExpires"]<Math.floor(Date.now()/1e3)?null:localStorage["config:token"]}}]),t}();e.a=new l},282:function(t,e,r){var content=r(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("5db1c400",content,!0,{sourceMap:!1})},283:function(t,e,r){(e=r(19)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=e},289:function(t,e,r){"use strict";var o={props:{patient:Object}},n=r(37),l=r(58),c=r.n(l),d=r(291),h=r(278),v=r(167),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.patient?r("v-card",t._b({staticClass:"mx-auto",attrs:{"max-width":"400"}},"v-card",t.$attrs,!1),[r("v-img",{attrs:{height:"250",src:"https://images.theconversation.com/files/303192/original/file-20191122-74572-kfjs22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=668&h=324&fit=crop"}}),t._v(" "),r("v-card-title",[t._v(t._s(t.patient.name)+" ("+t._s(t.patient.insurance_id)+")")]),t._v(" "),r("v-card-text",[t._v("\n    "+t._s(t.patient.email)+"\n    "),r("br"),t._v("\n    "+t._s(t.patient.phone)+"\n  ")])],1):t._e()}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:h.b,VCardTitle:h.c,VImg:v.a})},290:function(t,e,r){"use strict";r(23),r(8),r(6),r(4),r(12);var o=r(3),n=(r(45),r(46),r(282),r(120)),l=r(171),c=r(170),d=r(78),h=r(59),v=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(24),_=r(5);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(f.a)(n.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},n.a.options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},334:function(t,e,r){"use strict";r.r(e);r(38);var o=r(10),n=r(279),l={components:{PatientsCard:r(289).a},data:function(){return{patientId:null,patient:null,error:null}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.patientId=t.$route.params.patientId,r={headers:{authorization:"Bearer ".concat(n.a.token)}},e.prev=2,e.next=5,t.$axios.$get("/patients/"+t.patientId,r);case 5:o=e.sent,t.patient=o.data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),e.t0.response&&e.t0.response.data&&e.t0.response.data.error?t.error=e.t0.response.data.error:t.error="An unknown error occurred.";case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()}},c=r(37),d=r(58),h=r.n(d),v=r(290),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.error?r("v-alert",{attrs:{type:"error"}},[t._v("Error: "+t._s(t.error))]):t._e(),t._v(" "),t.patient?r("div",[r("PatientsCard",{staticClass:"mx-auto",attrs:{patient:t.patient,"max-width":"400"}})],1):r("v-alert",{attrs:{type:"info"}},[t._v("Loading...")])],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VAlert:v.a})}}]);