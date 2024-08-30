import{j as v}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const C=({label:s,fontColor:g,size:x="normal",allCaps:L=!1,color:h="text-primary"})=>v.jsx("span",{className:`${x} ${h} label`,style:{color:g},children:L?s.toUpperCase():s});C.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display in the label"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:`Indicates if the label should be displayed in all caps
@default false`,defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Label color",defaultValue:{value:'"text-primary"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Label font color"}}};const T={title:"UI/labels/MyLabel",component:C,tags:["autodocs"],argTypes:{size:{control:"select"},fontColor:{control:"color"}},parameters:{layout:"centered"}},e={args:{label:"Basic Label",allCaps:!1}},a={args:{label:"All Caps Label",allCaps:!0,size:"normal"}},l={args:{label:"Secondary Label",color:"text-secondary",allCaps:!1,size:"normal"}},r={args:{label:"Custom Color Label",fontColor:"#5517ac",allCaps:!1,size:"normal"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Basic Label",
    allCaps: false
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    allCaps: true,
    size: "normal"
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    color: "text-secondary",
    allCaps: false,
    size: "normal"
  }
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,b,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac",
    allCaps: false,
    size: "normal"
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,r as CustomColor,l as Secondary,q as __namedExportsOrder,T as default};
