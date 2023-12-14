"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(u,".").concat(m)]||c[m]||l[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>l});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={title:"Migrating Router Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Router Provider"},u=void 0,s={unversionedId:"migration-guide/router-provider",id:"migration-guide/router-provider",title:"Migrating Router Provider from 3.x.x to 4.x.x",description:"Motivation behind the changes",source:"@site/docs/migration-guide/router-provider.md",sourceDirName:"migration-guide",slug:"/migration-guide/router-provider",permalink:"/docs/migration-guide/router-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/migration-guide/router-provider.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1702549441,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{title:"Migrating Router Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Router Provider"},sidebar:"mainSidebar",previous:{title:"Migrating Auth Provider",permalink:"/docs/migration-guide/auth-provider"},next:{title:"Contributing",permalink:"/docs/further-readings/contributing"}},d={},l=[{value:"Motivation behind the changes",id:"motivation-behind-the-changes",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Changes in the <code>&lt;Refine&gt;</code> Component",id:"changes-in-the-refine-component",level:3},{value:"Changes in Custom <code>&lt;Sider&gt;</code> Components",id:"changes-in-custom-sider-components",level:3},{value:"Updating <code>useRouterContext</code> Usage",id:"updating-useroutercontext-usage",level:4},{value:"Behavioral Changes in Routing",id:"behavioral-changes-in-routing",level:3},{value:"Using the New Router Providers",id:"using-the-new-router-providers",level:2},{value:"React Router v6",id:"react-router-v6",level:3},{value:"Remix and Next.js",id:"remix-and-nextjs",level:3}],c={toc:l};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"motivation-behind-the-changes"},"Motivation behind the changes"),(0,r.kt)("p",null,"Our motivation behind the changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," and route handling was to increase flexibility and ease of use."),(0,r.kt)("p",null,"By simplifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," to just an interaction and connection point between ",(0,r.kt)("strong",{parentName:"p"},"Refine")," and the router, we eliminated the need for a specific way of defining routes and a ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," altogether. This means that ",(0,r.kt)("strong",{parentName:"p"},"Refine")," will meet enterprise-grade requirements. While router bindings are optional, we recommend passing them to ",(0,r.kt)("strong",{parentName:"p"},"Refine")," for optimal usage."),(0,r.kt)("p",null,"By making these changes, we made it so that people can integrate Refine into their existing projects without needing to modify their current routes or applications"),(0,r.kt)("p",null,"Ultimately, our goal is to make it simple for users to handle their unique situations without enforcing a particular methodology. With the updated router provider, you can continue using routers like before while benefiting from the features that ",(0,r.kt)("strong",{parentName:"p"},"Refine")," offers."),(0,r.kt)("h2",{id:"important-notes"},"Important Notes"),(0,r.kt)("p",null,"With the new router provider, the authentication checks are not handled by the routes. If your application utilizes ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),", you will be responsible for performing those checks yourself. You can easily do them by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," hook or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticated")," component. Example implementations and more information on each router are present ",(0,r.kt)("a",{parentName:"p",href:"#using-the-new-router-providers"},"further down")," in the documentation and in the example apps."),(0,r.kt)("p",null,"Similar to authentication flow, access control checks are also not handled by the routes internally. You will need to handle them yourself using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," hook or the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," component."),(0,r.kt)("p",null,"The creation and control of routes is entirely up to the user. You must manually create routes, and if desired, pass the routes to actions of your resources. Although we provide methods for generating routes from resources further down the documentation, they are optional and not recommended as they limit flexibility."),(0,r.kt)("h3",{id:"changes-in-the-refine-component"},"Changes in the ",(0,r.kt)("inlineCode",{parentName:"h3"},"<Refine>")," Component"),(0,r.kt)("p",null,"Since route handling is now detached from the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, props it accepts will change. Layout related props such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Footer,")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OffLayoutArea")," are deprecated and won't have any effect when using the new router providers. However, the UI components exported from the package are still well-supported and can be used inside your app while creating your routes and pages."),(0,r.kt)("p",null,"Similarly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"DashboardPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"catchAll")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginPage")," components are also deprecated and won't have any affect when using the new router providers. You need to create your own routes and pages to replace them."),(0,r.kt)("admonition",{title:"Legacy Behavior (Dashboard Page)",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"DashboardPage")," prop is now deprecated, you need to create your own index route for your dashboard. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array to add this item to your ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," menu. ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array to generate the menu items. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook to create your own menu.")),(0,r.kt)("p",null,"You can now create your own error and login pages the appropriate way for your router to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"catchAll")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginPage")," props that were used for the creation of their respective pages. You can find how its done ",(0,r.kt)("a",{parentName:"p",href:"#using-the-new-router-providers"},"further down")," in the documentation."),(0,r.kt)("h3",{id:"changes-in-custom-sider-components"},"Changes in Custom ",(0,r.kt)("inlineCode",{parentName:"h3"},"<Sider>")," Components"),(0,r.kt)("p",null,"If you have swizzled the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," component from your UI package and customized it, you might need to update them accordingly if you're using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop of ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("h4",{id:"updating-useroutercontext-usage"},"Updating ",(0,r.kt)("inlineCode",{parentName:"h4"},"useRouterContext")," Usage"),(0,r.kt)("p",null,"With the new ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop, the v3 compatible router providers are now provided through the ",(0,r.kt)("inlineCode",{parentName:"p"},"legacyRouterProvider")," prop. If you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"legacyRouterProvider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext")," will continue working as before. However, if you're using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext")," hook will be deprecated and useless for you but can easily be replaced with the router hooks that are ",(0,r.kt)("inlineCode",{parentName:"p"},"useLink"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useGo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useBack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useParsed.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," components, we have used the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext"),". You can easily replace the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLink")," hook or just switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," implementations from your router. (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component or the ",(0,r.kt)("inlineCode",{parentName:"p"},"next/link")," component)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- import { useRouterContext } from "@refinedev/core";\n+ import { useLink } from "@refinedev/core";\n\nconst CustomSider = () => {\n-   const { Link } = useRouterContext();\n+   const Link = useLink();\n\n    /* ... */\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you have customized the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook, you might need to check the usage of it to make sure it's working as expected. Even though the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook has not been changed in its return values, the way it generates the menu item keys has changed.")),(0,r.kt)("h3",{id:"behavioral-changes-in-routing"},"Behavioral Changes in Routing"),(0,r.kt)("p",null,"Since ",(0,r.kt)("strong",{parentName:"p"},"Refine")," doesn't create routes internally anymore, you are free to create your routes according to your framework without any limitations."),(0,r.kt)("p",null,"This means that tasks such as ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"access control")," are decoupled from ",(0,r.kt)("strong",{parentName:"p"},"Refine")," and should be handled in accordance with your framework. However, we do provide a set of helpers for you to use in your components to make these tasks easier to handle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/core/components/authenticated"},(0,r.kt)("inlineCode",{parentName:"a"},"Authenticated"))," component as a wrapper or the ",(0,r.kt)("inlineCode",{parentName:"li"},"useIsAuthenticated")," hook for authentication"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/core/components/can-access"},(0,r.kt)("inlineCode",{parentName:"a"},"CanAccess"))," component as a wrapper or the ",(0,r.kt)("inlineCode",{parentName:"li"},"useCan")," hook for access control")),(0,r.kt)("h2",{id:"using-the-new-router-providers"},"Using the New Router Providers"),(0,r.kt)("p",null,"We have created documents for each router we provide bindings for, which you can check out below:"),(0,r.kt)("h3",{id:"react-router-v6"},"React Router v6"),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6"),", you will need to generate your routes using ",(0,r.kt)("inlineCode",{parentName:"p"},"Routes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Route"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Outlet")," and similar components, and then wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component with your chosen router (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<BrowserRouter>"),"). Afterwards, you may pass the routerProvider to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6"),", and specify the paths for your resource actions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array. Our documentation provides detailed instructions on how to create routes, associate them with your resources, and includes examples for reference."),(0,r.kt)("admonition",{title:"Known Issues",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Refine previously utilized ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom@6.3.0"),", but it has now been updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom@latest"),". Since partial segment support was removed in version ",(0,r.kt)("inlineCode",{parentName:"p"},"6.5.0"),", your custom routes may not function as intended. If you are still using partial segments in your routes, you will need to update your files like this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'  <Refine\n-    routerProvider={{\n-       ...routerProvider,\n-        routes: [\n-            {\n-                element: <ProfilePage />,\n-                path: "profile/@:username/:page",\n            },\n        ],\n    }}\n+    routerProvider={routerProvider}\n  >\n+  <Route path="profile/:username/:page" element={<ProfilePage />} />\n  </Refine>\n')),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- <Link to="profile/@:username/:page" />\n+ <Link to="profile/:username/:page" />\n')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/remix-run/react-router/releases/tag/react-router%406.5.0"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"react-router-dom@6.5.0")," changelog for more information ->"))),(0,r.kt)("p",null,"Check out the documentation for ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/react-router-v6")),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com"},(0,r.kt)("inlineCode",{parentName:"a"},"react-router-dom"))),(0,r.kt)("h3",{id:"remix-and-nextjs"},"Remix and Next.js"),(0,r.kt)("p",null,"If you are using Remix or Next.js, you will first need to create your routes using the file system-based routing method as you would normally do. Afterwards, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/remix-router")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/nextjs-router")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, and specify the paths for your resource actions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," array. Our documentation provides step-by-step instructions on how to create routes and associate them with your resources, complete with examples for your reference."),(0,r.kt)("p",null,"Check out their respective documentations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/remix-router"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/main"},(0,r.kt)("inlineCode",{parentName:"a"},"Remix"))," documentations for Remix"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/nextjs-router"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},(0,r.kt)("inlineCode",{parentName:"a"},"Next.js"))," documentations for Next.js.")))))}m.isMDXComponent=!0}}]);