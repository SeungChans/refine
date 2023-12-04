"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"useImport",title:"useImport"},l=void 0,s={unversionedId:"api-reference/antd/hooks/import/useImport",id:"version-3.xx.xx/api-reference/antd/hooks/import/useImport",title:"useImport",description:"useImport hook allows you to import data from a CSV file. For each row in the file, it calls the create or createMany method of your data provider according to your configuration.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/import/useImport.md",sourceDirName:"api-reference/antd/hooks/import",slug:"/api-reference/antd/hooks/import/useImport",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/import/useImport",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/import/useImport.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1701699637,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{id:"useImport",title:"useImport"},sidebar:"someSidebar",previous:{title:"useStepsForm",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/form/useStepsForm"},next:{title:"useSimpleList",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/list/useSimpleList"}},d={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>mapData</code>",id:"mapdata",level:3},{value:"<code>paparseOptions</code>",id:"paparseoptions",level:3},{value:"<code>batchSize</code>",id:"batchsize",level:3},{value:"<code>onFinish</code>",id:"onfinish",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>onProgress</code>",id:"onprogress",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>buttonProps</code>",id:"buttonprops",level:3},{value:"<code>type</code>",id:"type",level:4},{value:"<code>loading</code>",id:"loading",level:4},{value:"<code>uploadProps</code>",id:"uploadprops",level:3},{value:"<code>onChange</code>",id:"onchange",level:4},{value:"<code>beforeUpload</code>",id:"beforeupload",level:4},{value:"<code>showUploadList</code>",id:"showuploadlist",level:4},{value:"<code>accept</code>",id:"accept",level:4},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>mutationResult</code>",id:"mutationresult",level:3},{value:"FAQ",id:"faq",level:2},{value:"Handling Relational Data",id:"handling-relational-data",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Values",id:"return-values-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3}],m=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const k={toc:u};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook allows you to import data from a ",(0,a.kt)("inlineCode",{parentName:"p"},"CSV")," file. For each row in the file, it calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider according to your configuration."),(0,a.kt)("p",null,"Internally, it uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.papaparse.com/docs"},"Papa Parse")," to parse the file contents."),(0,a.kt)("p",null,"It will return properties that are compatible with Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Upload>"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," components."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook is extended from ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useImport/"},(0,a.kt)("inlineCode",{parentName:"a"},"useImport"))," hook from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/core"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-core"))," package. This means that you can use all the features of ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useImport/"},(0,a.kt)("inlineCode",{parentName:"a"},"useImport"))," hook.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"Here is a basic usage example of ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useImport, ImportButton } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const importProps = useImport();\n\n  return <ImportButton {...importProps}>Import</ImportButton>;\n};\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/import-button/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<ImportButton>")," interface for more information ","\u2192")),(0,a.kt)("p",null,"Also, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"inputProps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"uploadProps")," properties without the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImportButton>")," component for more customization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useImport, Upload, Button } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const { buttonProps, uploadProps } = useImport();\n\n  return (\n    <Upload {...uploadProps}>\n      <Button {...buttonProps}>Import</Button>\n    </Upload>\n  );\n};\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"resourcename"},(0,a.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: It reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," value from the current URL.")),(0,a.kt)("p",null,"Determines which resource is passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'useImport({\n  resourceName: "posts",\n});\n')),(0,a.kt)("h3",{id:"mapdata"},(0,a.kt)("inlineCode",{parentName:"h3"},"mapData")),(0,a.kt)("p",null,"If you want to map the data before sending it to a data provider method, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapData")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  mapData: (data) => ({\n    ...data,\n    category: {\n      id: data.categoryId,\n    },\n  }),\n});\n")),(0,a.kt)("h3",{id:"paparseoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"paparseOptions")),(0,a.kt)("p",null,"You can pass any Papa Parse ",(0,a.kt)("a",{parentName:"p",href:"https://www.papaparse.com/docs#config"},"options")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"paparseOptions")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  paparseOptions: {\n    header: true,\n  },\n});\n")),(0,a.kt)("h3",{id:"batchsize"},(0,a.kt)("inlineCode",{parentName:"h3"},"batchSize")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},(0,a.kt)("inlineCode",{parentName:"a"},"Number.MAX_SAFE_INTEGER")))),(0,a.kt)("p",null,"If you want to send the data in batches, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"batchSize")," property. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"batchSize")," is 1, it calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method of your data provider for each row in the file. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"batchSize")," is greater than 1, it calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider for each batch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  batchSize: 1,\n});\n")),(0,a.kt)("h3",{id:"onfinish"},(0,a.kt)("inlineCode",{parentName:"h3"},"onFinish")),(0,a.kt)("p",null,"If you want to do something after the import is finished, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"onFinish")," property. It returns an object with two properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"succeeded")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"errored")," which contain the responses of the successful and failed requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  onFinish: (result) => {\n    // success requests response\n    result.succeeded.forEach((item) => {\n      console.log(item);\n    });\n\n    // failed requests response\n    result.errored.forEach((item) => {\n      console.log(item);\n    });\n  },\n});\n")),(0,a.kt)("h3",{id:"metadata"},(0,a.kt)("inlineCode",{parentName:"h3"},"metaData")),(0,a.kt)("p",null,"If you want to send additional data to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"metaData")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'useImport({\n  metaData: {\n    foo: "bar",\n  },\n});\n')),(0,a.kt)("h3",{id:"onprogress"},(0,a.kt)("inlineCode",{parentName:"h3"},"onProgress")),(0,a.kt)("p",null,"A callback function that is called when the import progress changes. It returns an object with two properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"totalAmount")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"processedAmount")," which contain the total amount of rows and the processed amount of rows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  onProgress: ({ totalAmount, processedAmount }) => {\n    // progress percentage\n    console.log((processedAmount / totalAmount) * 100);\n  },\n});\n")),(0,a.kt)("p",null,"By default, it shows a notification with the progress percentage. You can override this behavior by passing a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"onProgress")," function."),(0,a.kt)("h3",{id:"dataprovidername"},(0,a.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,a.kt)("p",null,"If there is more than one ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useImport({\n  dataProviderName: "second-data-provider",\n});\n')),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("h3",{id:"buttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"buttonProps")),(0,a.kt)("p",null,"Button properties that are compatible with Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useImport, Button } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const { buttonProps } = useImport();\n\n  return <Button {...buttonProps}>Import</Button>;\n};\n')),(0,a.kt)("h4",{id:"type"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")),(0,a.kt)("p",null,"It is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," by default."),(0,a.kt)("h4",{id:"loading"},(0,a.kt)("inlineCode",{parentName:"h4"},"loading")),(0,a.kt)("p",null,"If the import is in progress, it sets the loading state of the button."),(0,a.kt)("h3",{id:"uploadprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"uploadProps")),(0,a.kt)("p",null,"Upload properties that are compatible with Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Upload>"))," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useImport, Upload } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const { uploadProps } = useImport();\n\n  return <Upload {...uploadProps}>Import</Upload>;\n};\n')),(0,a.kt)("h4",{id:"onchange"},(0,a.kt)("inlineCode",{parentName:"h4"},"onChange")),(0,a.kt)("p",null,"Handles the file upload."),(0,a.kt)("h4",{id:"beforeupload"},(0,a.kt)("inlineCode",{parentName:"h4"},"beforeUpload")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"() => false")," is set to prevent the file from being uploaded automatically."),(0,a.kt)("h4",{id:"showuploadlist"},(0,a.kt)("inlineCode",{parentName:"h4"},"showUploadList")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," is set to hide the upload list."),(0,a.kt)("h4",{id:"accept"},(0,a.kt)("inlineCode",{parentName:"h4"},"accept")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},'".csv"')," is set to accept only CSV files."),(0,a.kt)("h3",{id:"isloading"},(0,a.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,a.kt)("p",null,"It is a boolean value that indicates whether the import is in progress."),(0,a.kt)("h3",{id:"mutationresult"},(0,a.kt)("inlineCode",{parentName:"h3"},"mutationResult")),(0,a.kt)("p",null,"Result of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCreate"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreateMany/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCreateMany"))," method of your data provider."),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,a.kt)("p",null,"Sometimes you need to process your parsed ",(0,a.kt)("inlineCode",{parentName:"p"},"CSV")," data for certain cases, such as when your data includes relational data and references to other data, or when your backend API requires a specific data format. To handle this, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapData")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," to customize the process."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CSV")," file is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,a.kt)("p",null,"Since the user and category are relational fields, we store only their id fields in the exported file as userId and categoryId respectively. To create resources from this file, we need to map the data back to the required format of the backend API. To do this, we use the mapData option in useImport. Here's an example:"),(0,a.kt)("p",null,"When creating these resources back, we should map it back to our backend API's required format. ",(0,a.kt)("inlineCode",{parentName:"p"},"mapData")," option allows us to do this. Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport<IPostFile>({\n  mapData: (item) => {\n    return {\n      title: item.title,\n      content: item.content,\n      status: item.status,\n      category: {\n        id: item.categoryId,\n      },\n      user: {\n        id: item.userId,\n      },\n    };\n  },\n});\n\ninterface IPostFile {\n  title: string;\n  status: string;\n  content: string;\n  categoryId: string;\n  userId: string;\n}\n")),(0,a.kt)("p",null,"With this code, the parsed data will be mapped to conform to the API requirements."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(m,{module:"@pankod/refine-antd/useImport",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"return-values-1"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"buttonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Properties that are compatible with Ant Design ",(0,a.kt)("inlineCode",{parentName:"td"},"<Button>")," component"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#buttonprops"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonProps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uploadProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Properties that are compatible with Ant Design ",(0,a.kt)("inlineCode",{parentName:"td"},"<Upload>")," component"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#uploadprops"},(0,a.kt)("inlineCode",{parentName:"a"},"UploadProps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isLoading"),(0,a.kt)("td",{parentName:"tr",align:null},"It can be used to handle the ",(0,a.kt)("inlineCode",{parentName:"td"},"loading")," status for the Import operation"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,a.kt)("td",{parentName:"tr",align:null},"Result of the mutation/mutations of creating imported resources"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,a.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"},"TError,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables; },"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," unknown>")),") ","|"," ",(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,a.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"},"{ data: TData[]},"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"},"TError,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables[]; },"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," unknown>")),")")))),(0,a.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Desription"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TItem"),(0,a.kt)("td",{parentName:"tr",align:null},"Interface of parsed csv data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TData"),(0,a.kt)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TError"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,a.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))))}h.isMDXComponent=!0}}]);