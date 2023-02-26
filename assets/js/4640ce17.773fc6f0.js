"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={title:"Using Microsoft Graph",sidebar_position:4},o=void 0,l={unversionedId:"usage-and-faq/graph_usage",id:"usage-and-faq/graph_usage",title:"Using Microsoft Graph",description:"Microsoft Graph can be used together with the",source:"@site/docs/usage-and-faq/graph_usage.mdx",sourceDirName:"usage-and-faq",slug:"/usage-and-faq/graph_usage",permalink:"/fastapi-azure-auth/usage-and-faq/graph_usage",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/usage-and-faq/graph_usage.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Using Microsoft Graph",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Calling your APIs from Python",permalink:"/fastapi-azure-auth/usage-and-faq/calling_your_apis_from_python"},next:{title:"Approval required on login",permalink:"/fastapi-azure-auth/usage-and-faq/admin_consent_when_logging_in"}},p={},s=[{value:"Backend API App Registration",id:"backend-api-app-registration",level:3},{value:"OpenAPI App Registration",id:"openapi-app-registration",level:3},{value:"Code",id:"code",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/overview"},"Microsoft Graph")," can be used together with the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow"},"On Behalf Flow (OBO)"),",\nbut in order to make this work you must alter your app registration configuration a bit."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documentation is based off ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Intility/fastapi-azure-auth/issues/40"},"issue #40")))),(0,i.kt)("h3",{id:"backend-api-app-registration"},"Backend API App Registration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Head over to ",(0,i.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),",\nand select your ",(0,i.kt)("strong",{parentName:"li"},"Backend API")," Application Registration"),(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Manifest")," in the menu on the left"),(0,i.kt)("li",{parentName:"ol"},"Add your OpenAPI/Swagger ClientID to the ",(0,i.kt)("inlineCode",{parentName:"li"},"knownClientApplications")," (saved as ",(0,i.kt)("inlineCode",{parentName:"li"},"OPENAPI_CLIENT_ID")," in your ",(0,i.kt)("inlineCode",{parentName:"li"},".env"),")")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"manifest",src:a(7322).Z,width:"802",height:"147"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"API permissions")," and ensure ",(0,i.kt)("inlineCode",{parentName:"li"},"User.Read")," is there. If not, follow the steps in the picture below:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Add a permission")),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft Graph")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft APIs")),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Delegated permissions")),(0,i.kt)("li",{parentName:"ol"},"Search for and select ",(0,i.kt)("inlineCode",{parentName:"li"},"User.Read")),(0,i.kt)("li",{parentName:"ol"},"Click add permission")))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"user_read",src:a(9433).Z,width:"1648",height:"756"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificates & Secrets")," and create a secret for your backend to use in order to fetch a Graph token",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"New client secret")),(0,i.kt)("li",{parentName:"ol"},"Give it a name"),(0,i.kt)("li",{parentName:"ol"},"Add")))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"graph_secret",src:a(2689).Z,width:"1633",height:"590"})),(0,i.kt)("h3",{id:"openapi-app-registration"},"OpenAPI App Registration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Head back to ",(0,i.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),",\nand select your ",(0,i.kt)("strong",{parentName:"li"},"OpenAPI/Swagger")," Application Registration"),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"API permissions")," in the menu on the left"),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"offline_access"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"openid"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"profile")," scopes",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Add a permission")),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft Graph")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft APIs")),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Delegated permissions")),(0,i.kt)("li",{parentName:"ol"},"Select the permissions"),(0,i.kt)("li",{parentName:"ol"},"Click add permission")))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"user_read",src:a(4369).Z,width:"1628",height:"893"})),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("p",null,"You can now fetch a graph token using the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow"},"OBO flow"),".\nA full code example of an API using Graph can be found in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Intility/fastapi-azure-auth/blob/main/demo_project/api/api_v1/endpoints/graph.py"},"demo project"),"."))}m.isMDXComponent=!0},2689:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graph_secret-b4da05b15a168d4b6120248773fe17b6.png"},7322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/manifest-fdaeb884d1407a9f61cc7325cc172e8f.png"},4369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/openapi_scopes-f744e9bf7ba0952ad8a3c6aca24b2675.png"},9433:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/user_read-f97edbde88fe0f1624c1d1d8bd6ed952.png"}}]);