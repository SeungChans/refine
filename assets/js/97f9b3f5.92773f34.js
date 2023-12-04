"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"kubectl port-forward - Kubernetes Port Forwarding Explained",description:"We'll see how to use kubectl port-forward to access internal Kubernetes services from outside the cluster.",slug:"kubectl-port-forward",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/kubectl-port-forward",source:"@site/blog/2023-11-05-kubectl-port-forwarding.md",title:"kubectl port-forward - Kubernetes Port Forwarding Explained",description:"We'll see how to use kubectl port-forward to access internal Kubernetes services from outside the cluster.",date:"2023-11-05T00:00:00.000Z",formattedDate:"November 5, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:11.64,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"kubectl port-forward - Kubernetes Port Forwarding Explained",description:"We'll see how to use kubectl port-forward to access internal Kubernetes services from outside the cluster.",slug:"kubectl-port-forward",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/social.png",hide_table_of_contents:!1},prevItem:{title:"Essentials of TypeScript Classes",permalink:"/blog/typescript-classes"},nextItem:{title:"Unraveling the Kubernetes ImagePullBackOff Error",permalink:"/blog/kubernetes-imagepullbackoff-error"},relatedPosts:[{title:"GraphQL vs REST - Key Differences and Use Cases",description:"We'll explore the key differences between GraphQL and REST, and discuss the use cases where each approach excels.",permalink:"/blog/graphql-vs-rest",formattedDate:"December 3, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:14.565,date:"2023-12-03T00:00:00.000Z"},{title:"What Exit Code 137 means for Kubernetes",description:"We'll discuss what exit code 137 means for Kubernetes, how it reflects the operating system's intervention due to memory concerns, and how to mitigate memory issues.",permalink:"/blog/kubernetes-exit-code-137",formattedDate:"November 29, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.26,date:"2023-11-29T00:00:00.000Z"},{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",permalink:"/blog/bun-js-vs-node",formattedDate:"June 4, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:9.315,date:"2023-06-04T00:00:00.000Z"}],authorPosts:[{title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",permalink:"/blog/kubectl-config-set-context",formattedDate:"October 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.835,date:"2023-10-27T00:00:00.000Z"},{title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",permalink:"/blog/docker-swarm",formattedDate:"October 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-05T00:00:00.000Z"},{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.11,date:"2022-12-28T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Importance of accessing internal Kubernetes services",id:"importance-of-accessing-internal-kubernetes-services",level:2},{value:"Role of port forwarding in development and debugging",id:"role-of-port-forwarding-in-development-and-debugging",level:2},{value:"When port forwarding is most appropriate",id:"when-port-forwarding-is-most-appropriate",level:2},{value:"Understanding Port Forwarding in a Nutshell",id:"understanding-port-forwarding-in-a-nutshell",level:2},{value:"Quick overview of port forwarding in general networking",id:"quick-overview-of-port-forwarding-in-general-networking",level:3},{value:"Significance in local development and testing",id:"significance-in-local-development-and-testing",level:3},{value:"Setting up a Local Kubernetes Environment",id:"setting-up-a-local-kubernetes-environment",level:2},{value:"Brief guide on setting up a Minikube cluster for local testing",id:"brief-guide-on-setting-up-a-minikube-cluster-for-local-testing",level:3},{value:"Deploying a Sample Service",id:"deploying-a-sample-service",level:2},{value:"Instructions to deploy a simple service in the Kubernetes cluster",id:"instructions-to-deploy-a-simple-service-in-the-kubernetes-cluster",level:3},{value:"Kubectl Port Forward in Action",id:"kubectl-port-forward-in-action",level:2},{value:"Detailed steps on how to use kubectl port-forward",id:"detailed-steps-on-how-to-use-kubectl-port-forward",level:3},{value:"Differences between forwarding to a pod, service, and deployment",id:"differences-between-forwarding-to-a-pod-service-and-deployment",level:2},{value:"Port Forwarding to Pod",id:"port-forwarding-to-pod",level:3},{value:"Port Forwarding to Service",id:"port-forwarding-to-service",level:3},{value:"Port Forwarding to Deployment",id:"port-forwarding-to-deployment",level:3},{value:"Use Cases and Practical Scenarios",id:"use-cases-and-practical-scenarios",level:2},{value:"Situations where port forwarding is particularly beneficial:",id:"situations-where-port-forwarding-is-particularly-beneficial",level:3},{value:"Potential pitfalls and things to watch out for:",id:"potential-pitfalls-and-things-to-watch-out-for",level:3},{value:"Beyond Local: Port Forwarding in Cloud-based Clusters",id:"beyond-local-port-forwarding-in-cloud-based-clusters",level:2},{value:"How port forwarding works with cloud providers like EKS, GKE, and AKS",id:"how-port-forwarding-works-with-cloud-providers-like-eks-gke-and-aks",level:3},{value:"Precautions and differences when working with cloud-based clusters",id:"precautions-and-differences-when-working-with-cloud-based-clusters",level:2},{value:"Tips and Best Practices",id:"tips-and-best-practices",level:2},{value:"Ensuring secure and effective port forwarding",id:"ensuring-secure-and-effective-port-forwarding",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"importance-of-accessing-internal-kubernetes-services"},"Importance of accessing internal Kubernetes services"),(0,n.kt)("p",null,"Port forwarding in Kubernetes allows you to access internal cluster resources from outside the cluster. Users can link an external port with a resource such as a pod, deployment, replica set, or service. As a result, the resource is now available from within the local network. For Example, you installed PostgreSQL service on your cluster and don't want to expose it to the public but still want to run queries and access the database locally."),(0,n.kt)("p",null,"Through Kubernetes port forwarding, you can create a tunnel and access PostgreSQL from your Kubernetes cluster via localhost port(e.g., 5432)."),(0,n.kt)("p",null,"Steps we'll cover in this article:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#importance-of-accessing-internal-kubernetes-services"},"Importance of accessing internal Kubernetes services")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#role-of-port-forwarding-in-development-and-debugging"},"Role of port forwarding in development and debugging")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#when-port-forwarding-is-most-appropriate"},"When port forwarding is most appropriate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#understanding-port-forwarding-in-a-nutshell"},"Understanding Port Forwarding in a Nutshell"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#quick-overview-of-port-forwarding-in-general-networking"},"Quick overview of port forwarding in general networking")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#significance-in-local-development-and-testing"},"Significance in local development and testing")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setting-up-a-local-kubernetes-environment"},"Setting up a Local Kubernetes Environment"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#brief-guide-on-setting-up-a-minikube-cluster-for-local-testing"},"Brief guide on setting up a Minikube cluster for local testing")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deploying-a-sample-service"},"Deploying a Sample Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#instructions-to-deploy-a-simple-service-in-the-kubernetes-cluster"},"Instructions to deploy a simple service in the Kubernetes cluster")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#kubectl-port-forward-in-action"},"Kubectl Port Forward in Action"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#detailed-steps-on-how-to-use-kubectl-port-forward"},"Detailed steps on how to use kubectl port-forward")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#differences-between-forwarding-to-a-pod-service-and-deployment"},"Differences between forwarding to a pod, service, and deployment"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#port-forwarding-to-pod"},"Port Forwarding to Pod")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#port-forwarding-to-service"},"Port Forwarding to Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#port-forwarding-to-deployment"},"Port Forwarding to Deployment")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#use-cases-and-practical-scenarios"},"Use Cases and Practical Scenarios"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#situations-where-port-forwarding-is-particularly-beneficial"},"Situations where port forwarding is particularly beneficial:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#potential-pitfalls-and-things-to-watch-out-for"},"Potential pitfalls and things to watch out for:")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#beyond-local-port-forwarding-in-cloud-based-clusters"},"Beyond Local: Port Forwarding in Cloud-based Clusters"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-port-forwarding-works-with-cloud-providers-like-eks-gke-and-aks"},"How port forwarding works with cloud providers like EKS, GKE, and AKS")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#precautions-and-differences-when-working-with-cloud-based-clusters"},"Precautions and differences when working with cloud-based clusters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tips-and-best-practices"},"Tips and Best Practices"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#ensuring-secure-and-effective-port-forwarding"},"Ensuring secure and effective port forwarding"))))),(0,n.kt)("h2",{id:"role-of-port-forwarding-in-development-and-debugging"},"Role of port forwarding in development and debugging"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kubernetes Port Forwarding is useful for development and debugging because it enables you to:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Use your local development tools and connect to a service running in the cluster."),(0,n.kt)("li",{parentName:"ol"},"Access a service running in the cluster using your local browser."),(0,n.kt)("li",{parentName:"ol"},"Access logs and other diagnostic data from a cluster running the service.")),(0,n.kt)("h2",{id:"when-port-forwarding-is-most-appropriate"},"When port forwarding is most appropriate"),(0,n.kt)("p",null,"For development and test purposes with Kubernetes, port forwarding can be useful to make quick access to specific pods. Alternatives include NodePort for static external access, LoadBalancer for traffic distribution in production, and Ingress for HTTP Routing."),(0,n.kt)("p",null,"The production environment benefits from more scalable and secure solutions such as LoadBalancers and Ingress Load Controllers, which ensure efficient traffic management, while port forwarding is only useful for temporary connections and debugging."),(0,n.kt)("h2",{id:"understanding-port-forwarding-in-a-nutshell"},"Understanding Port Forwarding in a Nutshell"),(0,n.kt)("h3",{id:"quick-overview-of-port-forwarding-in-general-networking"},"Quick overview of port forwarding in general networking"),(0,n.kt)("p",null,"Port forwarding, or port mapping, allows private local-area network (LAN) devices to communicate with external servers on the internet by redirecting communication requests through a network gateway, like a router.",(0,n.kt)("br",{parentName:"p"}),"\n","Without port forwarding, internal devices can only communicate with each other. With port forwarding, they can interact with external systems, solving numerous network issues. However, it carries a risk; for example, an unprotected remote desktop connection could allow unauthorized access to your local machine."),(0,n.kt)("h3",{id:"significance-in-local-development-and-testing"},"Significance in local development and testing"),(0,n.kt)("p",null,"Port forwarding is highly beneficial for local development rather than uploading applications to a remote server again and again for testing. If your application faces issues in production, port forwarding allows you to investigate on your machine to identify problems. This way, continuous fixes in production are avoided until the bug is actually resolved and properly tested."),(0,n.kt)("p",null,"It's recommended for extensive development work, enabling issue resolution locally before updating the final version on the actual server and preserving the live site during debugging."),(0,n.kt)("h2",{id:"setting-up-a-local-kubernetes-environment"},"Setting up a Local Kubernetes Environment"),(0,n.kt)("h3",{id:"brief-guide-on-setting-up-a-minikube-cluster-for-local-testing"},"Brief guide on setting up a Minikube cluster for local testing"),(0,n.kt)("p",null,"A tool called Minikube (CLI/EXE) makes it simple to run Kubernetes locally. For users who want to experiment with Kubernetes or work with it on a daily basis, Minikube hosts a single-node Kubernetes cluster within a virtual machine on your laptop.\nFor Example, if you have a laptop with a Windows machine and you want to set up a minikube cluster for local development and testing on Windows."),(0,n.kt)("p",null,"So First of all, you have to make sure the following as a prerequisite:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Turn on Windows Hyper-V."),(0,n.kt)("li",{parentName:"ol"},"Get Chocolatey installed on Windows."),(0,n.kt)("li",{parentName:"ol"},"Download and Install Docker Desktop."),(0,n.kt)("li",{parentName:"ol"},"Install Kubectl, the Kubernetes CLI, for interaction with the cluster.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can use the command below to install minikube on Windows:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"choco install minikube")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Once you have installed minikube, you need to start it using the docker driver(make sure docker is running):")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"minikube start --driver=docker")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"After running the command above, the output below shows that the minikube cluster is set on your local machine:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/1.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can also verify the setup by running the command below:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"minikube status")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The status command will return the output below:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/2.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Control Plane:")," This status is for the control plane node of your cluster"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"host:")," docker container is the host in our case, where the Kubernetes cluster is running"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"kubelet:")," This is an agent running on minikube node"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"apiserver:")," The component of the control plane that exposes Kubernetes API."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"kubeconfig:")," This shows that to interact with the Kubernetes cluster, this kubeconfig file is correctly configured."),(0,n.kt)("h2",{id:"deploying-a-sample-service"},"Deploying a Sample Service"),(0,n.kt)("h3",{id:"instructions-to-deploy-a-simple-service-in-the-kubernetes-cluster"},"Instructions to deploy a simple service in the Kubernetes cluster"),(0,n.kt)("p",null,"As an example, let's deploy a basic Nginx web server to the previously created cluster, as we will be using the current context(i.e., minikube), so the service will be deployed to the same cluster by default. Although YAML files are normally used in Kubernetes to describe workloads and services, but for simplicity, we will be using kubectl tool."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"At the very first step, let's create a deployment with the name 'example-deployment' that manages the 'nginx' service:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"}," kubectl create deployment example-deployment --image=nginx")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can see below the output that the above command will create a deployment that will pull the nginx image from the Docker hub:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/3.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"In the next step, we will expose the above-created deployment as a service so that it can be accessible through a stable IP address. For this purpose, we will run the command below:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kubectl expose deployment example-deployment --port=80")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The below output confirms that the specified service is exposed on port 80:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/4.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"In the last step, we need to retrieve a URL through which we can access the service on the browser, and we can achieve this by using the minikube command below:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"minikube service example-deployment --url")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"As you can see in the below output that we have the URL in response through which we can access the nginx welcome page:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/5.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nginx Welcome Page on Browser:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/6.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"kubectl-port-forward-in-action"},"Kubectl Port Forward in Action"),(0,n.kt)("h3",{id:"detailed-steps-on-how-to-use-kubectl-port-forward"},"Detailed steps on how to use kubectl port-forward"),(0,n.kt)("p",null,"A tunnel is created between the target resource and your localhost through the port-forward command. Below is the syntax of the kubectl port-forward command:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kubectl port-forward [resource-type/][name-of-target-resource] [local-port]:[target-resource-port]")),(0,n.kt)("p",null,"Let's suppose we want to forward the port to the resource of the type of service we created previously, i.e., example-deployment. In that case, the name of the resource will be '",(0,n.kt)("strong",{parentName:"p"},"example-deployment"),"', which is of service type, and the port it is using is ",(0,n.kt)("strong",{parentName:"p"},"80"),"."),(0,n.kt)("p",null,"First, you need to verify the service details by using the command below:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get services")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/7.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Now, we want the Kubernetes API to listen at port ",(0,n.kt)("strong",{parentName:"p"},"8080")," and forward the data to port ",(0,n.kt)("strong",{parentName:"p"},"80")," for the '",(0,n.kt)("strong",{parentName:"p"},"example-deployment"),"' service. We can use the command below to meet that purpose:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kubectl port-forward services/example-deployment 8080:80")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The illustration below shows that after forwarding the port, the nginx welcome page becomes available at localhost:8080:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/8.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"differences-between-forwarding-to-a-pod-service-and-deployment"},"Differences between forwarding to a pod, service, and deployment"),(0,n.kt)("h3",{id:"port-forwarding-to-pod"},"Port Forwarding to Pod"),(0,n.kt)("p",null,"By creating a direct connection to a particular Pod, port forwarding to it allows you to access a single instance of your application. This is beneficial when you are required to debug a specific pod."),(0,n.kt)("p",null,"You can get the pod's name by listing all pods through the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," command. In our case, we can use the command below for port forwarding to a specific pod(i.e., example-deployment-5cff4bc76f-tkjzz):"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kubectl port-forward pod/example-deployment-5cff4bc76f-tkjzz 8000:80")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The above command will return the following output:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/9.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"port-forwarding-to-service"},"Port Forwarding to Service"),(0,n.kt)("p",null,"When you are forwarding the port to a service, Kubernetes handles the connection and forwards it to one of the Pods behind that service. You're not connected to a specific Pod; Kubernetes will route the connection to any Pod matching your Service Selector. This is most commonly used when you want to access a service without exposing it externally."),(0,n.kt)("p",null,"The Example of port forwarding to service is already described above in the '",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Detailed steps on how to use kubectl port-forward")),"' section."),(0,n.kt)("h3",{id:"port-forwarding-to-deployment"},"Port Forwarding to Deployment"),(0,n.kt)("p",null,"This is similar to port forwarding to the service without making any direct connection with the specific pod. Kubectl will automatically select the pod behind the deployment and create a tunnel. It is only useful when you donot bother about connecting with the specific pod."),(0,n.kt)("p",null,"You can get the list of all deployments by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get deployments")," command. In our case, we have a deployment with the name '",(0,n.kt)("strong",{parentName:"p"},"example-deployment"),"', so we will be using the command below for port forwarding from port ",(0,n.kt)("strong",{parentName:"p"},"8888")," to port ",(0,n.kt)("strong",{parentName:"p"},"80")," on any pod under the deployment:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kubectl port-forward deploy/example-deployment 8888:80")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The above command will return the following output:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-05-kubectl-port-forwarding/10.png",alt:"kubectl port forward"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"use-cases-and-practical-scenarios"},"Use Cases and Practical Scenarios"),(0,n.kt)("h3",{id:"situations-where-port-forwarding-is-particularly-beneficial"},"Situations where port forwarding is particularly beneficial:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If you want to develop and test local applications without placing them on a production/live server."),(0,n.kt)("li",{parentName:"ol"},"If you want to share your work with other team members without creating a complicated ingress controller or load balancer."),(0,n.kt)("li",{parentName:"ol"},"In order to improve application performance, security and connectivity through the reduction of delays, packet loss and connection issues."),(0,n.kt)("li",{parentName:"ol"},"Without relying upon third-party providers, if you want to create and use your own VPN servers or proxies.")),(0,n.kt)("h3",{id:"potential-pitfalls-and-things-to-watch-out-for"},"Potential pitfalls and things to watch out for:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ensure that any other applications or services on your local machine or cluster are not using the ports used for port forwarding."),(0,n.kt)("li",{parentName:"ol"},"Ensure that port forwarding is secure, allowed, and available only to those you can trust. In order to secure port forwarding, use firewall rules, SSH tunnels, tokens, certificates, or passwords. Don't use port forwarding to expose private or sensitive information or services."),(0,n.kt)("li",{parentName:"ol"},"Ensure that port forwarding doesn't use too much resources(e.g., CPU, memory, bandwidth, etc) from local machines or clusters. Keep a check on port forwarding and their usage of resources. You can limit the number and duration of port forwarding sessions and stop or delete them if you don't need them.")),(0,n.kt)("h2",{id:"beyond-local-port-forwarding-in-cloud-based-clusters"},"Beyond Local: Port Forwarding in Cloud-based Clusters"),(0,n.kt)("h3",{id:"how-port-forwarding-works-with-cloud-providers-like-eks-gke-and-aks"},"How port forwarding works with cloud providers like EKS, GKE, and AKS"),(0,n.kt)("p",null,"Port forwarding with Kubernetes clusters in the cloud works pretty much the same as with local clusters. You can forward traffic from your own local machine to Pods running in Amazon EKS, Google GKE or Azure AKS using the 'kubectl port-forward' command. It's handy for testing and debugging apps in the cloud."),(0,n.kt)("h2",{id:"precautions-and-differences-when-working-with-cloud-based-clusters"},"Precautions and differences when working with cloud-based clusters"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If you want to enable port forwarding between your local machine and the cluster, you may need to set up firewall rules or security groups. For Example, the inbound rules of your cluster's security group may need to be changed for AWS EKS. You may need to set up a firewall rule for your cluster network if you are using GCP GKE. You may need to set up a Network Security Groups rule on subnets in your cluster for Azure AKS."),(0,n.kt)("li",{parentName:"ol"},"Additional resources, such as load balancers, can be provided by cloud-based clusters to facilitate the deployment of services."),(0,n.kt)("li",{parentName:"ol"},"In cloud-based clusters, port forwarding may result in lower bandwidth or higher latency than in local clusters. It is due to the fact that traffic from your local machine must pass through the internet to your cluster on the cloud.")),(0,n.kt)("h2",{id:"tips-and-best-practices"},"Tips and Best Practices"),(0,n.kt)("h3",{id:"ensuring-secure-and-effective-port-forwarding"},"Ensuring secure and effective port forwarding"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prevent Unauthorized Access:"),"\nUse firewall rules, SSH tunnels, tokens, certificates, or passwords to secure your port forwarding. Within your cluster, you can further isolate users or environments using different contexts or namespaces."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prevent Port Conflicts with other applications and services:"),"\nTo see which ports are in use locally on your system, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"netstat")," command. To see which ports are used on the cluster, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get services")," command."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stay Alert:"),"\nUse monitoring and logging to quickly identify any unusual activities. Also, Verify data packets to help prevent potential breaches."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Kubernetes port forwarding allows developers to test and debug applications directly on their own machines, making it a more flexible tool. This simplifies the access to internal cluster services, thereby providing a convenient interface for communication without exposing them to an external network. Knowledge of port forwarding is a valuable asset in the Kubernetes toolkit, whether you're working on a local setup or cloud cluster."),(0,n.kt)("p",null,"The official Kubernetes documentation providing instructions on ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"},"how to use kubectl port forwarding")," to Kubernetes ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/"},"Debug services")," in clusters is a valuable source of information for those who want to learn more about port forwarding and related topics. Other methods and tools to solve service issues are also provided."))}m.isMDXComponent=!0}}]);