"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"useRegister",description:"useRegister data hook from Refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useRegister/index.ts"},l=void 0,u={unversionedId:"core/hooks/auth/use-register/index",id:"core/hooks/auth/use-register/index",title:"useRegister",description:"useRegister data hook from Refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/core/hooks/auth/use-register/index.md",sourceDirName:"core/hooks/auth/use-register",slug:"/core/hooks/auth/use-register/",permalink:"/docs/core/hooks/auth/use-register/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/auth/use-register/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1702549441,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{title:"useRegister",description:"useRegister data hook from Refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useRegister/index.ts"},sidebar:"mainSidebar",previous:{title:"usePermissions",permalink:"/docs/core/hooks/auth/use-permissions/"},next:{title:"useForgotPassword",permalink:"/docs/core/hooks/auth/use-forgot-password/"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Logged In after successful registration",id:"logged-in-after-successful-registration",level:2},{value:"Redirection after register",id:"redirection-after-register",level:2},{value:"Error handling",id:"error-handling",level:2}],m={toc:p};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," calls ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError."),(0,n.kt)("p",null,"Data that is resolved from ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,n.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When an ",(0,n.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values: ",(0,n.kt)("inlineCode",{parentName:"li"},'{ name: "Register Error", message: "Error while registering" }'),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Refine provides a default registration page, page which handles the registration flow manually.\nIf you want to use a custom registration page however, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," hook like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister } from "@refinedev/core";\n\ntype RegisterVariables = {\n  email: string;\n  password: string;\n};\n\nexport const RegisterPage = () => {\n  const { mutate: register } = useRegister<RegisterVariables>();\n\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n\n    const values = {\n      email: e.currentTarget.email.value,\n      password: e.currentTarget.password.value,\n    };\n\n    register(values);\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <label>Email</label>\n      <input name="email" value="test@refine.com" />\n      <label>Password</label>\n      <input name="password" value="refine" />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from the ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," hook can accept any kind of object for values since the ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.\nA type parameter for the values can be provided to ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: register } = useRegister<{ email: string; password: string }>();\n")),(0,n.kt)("h2",{id:"logged-in-after-successful-registration"},"Logged In after successful registration"),(0,n.kt)("p",null,"If you want to log in to the user after successful registration, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"useLogin")," hook after the ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," hook's ",(0,n.kt)("inlineCode",{parentName:"p"},"onSuccess")," callback:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister, useLogin } from "@refinedev/core";\n\ntype FormVariables = {\n  email: string;\n  password: string;\n};\n\nexport const RegisterPage = () => {\n  const { mutate: register } = useRegister<FormVariables>();\n  const { mutate: login } = useLogin<FormVariables>();\n\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n\n    const values = {\n      email: e.currentTarget.email.value,\n      password: e.currentTarget.password.value,\n    };\n\n    register(values, {\n      //highlight-start\n      onSuccess: () => {\n        login(values);\n      },\n      //highlight-end\n    });\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <label>Email</label>\n      <input name="email" value="test@refine.com" />\n      <label>Password</label>\n      <input name="password" value="refine" />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n')),(0,n.kt)("h2",{id:"redirection-after-register"},"Redirection after register"),(0,n.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," hook if you want to redirect yourself to a certain URL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useRegister } from "@refinedev/core";\n\nconst { mutate: register } = useRegister();\n\nregister({ redirectPath: "/custom-url" });\n')),(0,n.kt)("p",null,"Then, you can handle this URL in your ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthBindings = {\n  // ...\n  register: ({ redirectPath }) => {\n    // ...\n    return {\n      success: true,\n      redirectTo: redirectPath,\n    };\n  },\n};\n")),(0,n.kt)("h2",{id:"error-handling"},"Error handling"),(0,n.kt)("p",null,"Since the methods of ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," value in the response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useRegister } from "@refinedev/core";\n\nconst { mutate: register } = useRegister();\n\nregister(\n  {\n    email: "refine@example.com",\n    password: "refine",\n  },\n  {\n    onSuccess: (data) => {\n      if (!data.success) {\n        // handle error\n      }\n\n      // handle success\n    },\n  },\n);\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," hook will not be called if ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". This is because the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise, and the callback is only triggered when the promise is rejected.")))}d.isMDXComponent=!0}}]);