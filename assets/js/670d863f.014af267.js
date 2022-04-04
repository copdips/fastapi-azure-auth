"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[529],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,g=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Approval required on login",sidebar_position:5},p=void 0,c={unversionedId:"usage-and-faq/admin_consent_when_logging_in",id:"usage-and-faq/admin_consent_when_logging_in",title:"Approval required on login",description:"If you're met by this screen when attempting to log in:",source:"@site/docs/usage-and-faq/admin_consent_when_logging_in.mdx",sourceDirName:"usage-and-faq",slug:"/usage-and-faq/admin_consent_when_logging_in",permalink:"/fastapi-azure-auth/usage-and-faq/admin_consent_when_logging_in",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/usage-and-faq/admin_consent_when_logging_in.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Approval required on login",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Using Microsoft Graph",permalink:"/fastapi-azure-auth/usage-and-faq/graph_usage"},next:{title:"Single-tenant settings",permalink:"/fastapi-azure-auth/settings/single_tenant"}},u={},s=[],d={toc:s};function f(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you're met by this screen when attempting to log in:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"approval_required",src:n(3162).Z,width:"427",height:"532"})),(0,a.kt)("p",null,"Then please follow the steps provided in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Intility/fastapi-azure-auth/issues/45"},"issue 45"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),"\nand find your backend application registration"),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Expose an API")),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorized client applications")," click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add a client application")),(0,a.kt)("li",{parentName:"ol"},"Add the client ID of your OpenAPI application registration (saved as ",(0,a.kt)("inlineCode",{parentName:"li"},"OPENAPI_CLIENT_ID")," in your ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file)"),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"api://<client id>/user_impersonation")," checkbox"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Application"))))}f.isMDXComponent=!0},3162:function(e,t,n){t.Z=n.p+"assets/images/approval_required-e4d009931df21e3f3e0df3102350143c.png"}}]);