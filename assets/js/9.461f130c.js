(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,13,15,25,32,36],{250:function(t,e,i){},251:function(t,e,i){"use strict";i.r(e);var s=i(11),n={props:{item:{required:!0}},computed:{link(){return Object(s.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:s.g,isMailto:s.h,isTel:s.i,focusoutAction(){this.$emit("focusout")}}},r=i(4),a=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=a.exports},252:function(t,e,i){},253:function(t,e,i){"use strict";i.r(e);var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},n=(i(254),i(4)),r=Object(n.a)(s,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},254:function(t,e,i){"use strict";i(250)},258:function(t,e,i){},259:function(t,e,i){},260:function(t,e,i){"use strict";i(252)},265:function(t,e,i){},268:function(t,e,i){"use strict";i.r(e);var s=i(251),n=i(253),r=i(97),a=i.n(r),o={components:{NavLink:s.default,DropdownTransition:n.default},data:()=>({open:!1,isMQMobile:!1}),props:{item:{required:!0}},computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},beforeMount(){this.isMQMobile=window.innerWidth<720,window.addEventListener("resize",()=>{this.isMQMobile=window.innerWidth<720})},methods:{toggle(){this.isMQMobile&&(this.open=!this.open)},isLastItemOfArray:(t,e)=>a()(e)===t},watch:{$route(){this.open=!1}}},l=(i(260),i(4)),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[t.item.link?e("router-link",{staticClass:"link-title",attrs:{to:t.item.link}},[t._v(t._s(t.item.text))]):t._e(),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.item.link,expression:"!item.link"}],staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})],1),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(i,s){return e("li",{key:i.link||s,staticClass:"dropdown-item"},["links"===i.type?e("h4",[t._v(t._s(i.text))]):t._e(),t._v(" "),"links"===i.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(i.items,(function(s){return e("li",{key:s.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,i.items)&&t.isLastItemOfArray(i,t.item.items)&&t.toggle()}}})],1)})),0):e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},273:function(t,e,i){"use strict";i(258)},274:function(t,e,i){"use strict";i(259)},275:function(t,e,i){"use strict";i.r(e);var s=i(268),n=i(11),r={components:{NavLink:i(251).default,DropdownLink:s.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},n={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(n=>{const r=t[n],a=s[n]&&s[n].label||r.lang;let o;return r.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,n),i.some(t=>t.path===o)||(o=n)),{text:a,link:o}})};return[...this.userNav,n]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(n.k)(t),{items:(t.items||[]).map(n.k)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let i=0;i<e.length;i++){const s=e[i];if(new RegExp(s,"i").test(t))return s}return"Source"}}},a=(i(273),i(4)),o=Object(a.a)(r,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=o.exports},276:function(t,e,i){"use strict";i.r(e);var s=i(301),n=i(278),r=i(11);function a(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?a(t,e):"page"===e.type&&Object(r.f)(t,e.path))}var o={name:"SidebarLinks",components:{SidebarGroup:s.default,SidebarLink:n.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let i=0;i<e.length;i++){const s=e[i];if(a(t,s))return i}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(r.f)(this.$route,t.regularPath)}}},l=i(4),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(i,s){return e("li",{key:s},["group"===i.type?e("SidebarGroup",{attrs:{item:i,open:s===t.openGroupIndex,collapsable:i.collapsable||i.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):e("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:i}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},278:function(t,e,i){"use strict";i.r(e);var s=i(11);function n(t,e,i,s){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},i)}function r(t,e,i,a,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(s.f)(a,i+"#"+e.slug);return t("li",{class:"sidebar-sub-header level"+e.level},[n(t,i+"#"+e.slug,e.title,u),r(t,e.children,i,a,o,l+1)])}))}var a={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:i,$route:a,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const p=Object(s.f)(a,u.path),h="auto"===u.type?p||u.children.some(t=>Object(s.f)(a,u.basePath+"#"+t.slug)):p,d="external"===u.type?function(t,e,i){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[i,t("OutboundLink")])}(t,u.path,u.title||u.path):n(t,u.path,u.title||u.path,h),f=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),b=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[d,r(t,u.children,u.basePath,a,f)];if((h||b)&&u.headers&&!s.e.test(u.path)){return[d,r(t,Object(s.d)(u.headers),u.path,a,f)]}return d}},o=(i(274),i(4)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);e.default=l.exports},296:function(t,e,i){"use strict";i(265)},297:function(t,e,i){},301:function(t,e,i){"use strict";i.r(e);var s=i(11),n={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:i(253).default},beforeCreate(){this.$options.components.SidebarLinks=i(276).default},methods:{isActive:s.f}},r=(i(296),i(4)),a=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=a.exports},320:function(t,e,i){"use strict";i(297)},341:function(t,e,i){"use strict";i.r(e);var s=i(276),n=i(275),r={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:n.default},props:["items"],computed:{blogger(){return this.$themeConfig.blogger}}},a=(i(320),i(4)),o=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"sidebar"},[t.blogger?e("div",{staticClass:"blogger"},[e("img",{attrs:{src:t.blogger.avatar}}),t._v(" "),e("div",{staticClass:"blogger-info"},[e("h3",[t._v(t._s(t.blogger.name))]),t._v(" "),t.blogger.social?e("div",{staticClass:"icons"},t._l(t.blogger.social.icons,(function(t,i){return e("a",{key:i,class:["iconfont",t.iconClass],attrs:{href:t.link,title:t.title,target:"_blank"}})})),0):e("span",[t._v(t._s(t.blogger.slogan))])])]):t._e(),t._v(" "),e("NavLinks"),t._v(" "),t._t("top"),t._v(" "),e("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports}}]);