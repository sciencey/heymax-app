(()=>{"use strict";var e={977:(e,t,n)=>{e.exports=n.p+"static/media/merchant_hnm.9b0f16131d62638dbab0.png"},3445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var o=n(7183),i=n(3060),r=n(3086),a=n(6797),l=n(9279),d=n(9599),s=n(3255),c=n(9044),g=n(2113),u=n(3023),f=n(6599),h=d.default.create({container:{flexDirection:"row",alignItems:"center",gap:8},dot:{width:8,height:8,borderRadius:4},activeDot:{width:24,backgroundColor:"white"},inactiveDot:{backgroundColor:"rgba(255, 255, 255, 0.3)"}});const m=function(e){var t=e.currentPage,n=e.totalPages;return(0,f.jsx)(a.default,{style:h.container,children:Array.from({length:n}).map((function(e,n){return(0,f.jsx)(a.default,{style:[h.dot,t===n?h.activeDot:h.inactiveDot]},n)}))})};var b=g.default.get("window"),p=(b.width,b.height),x=d.default.create({container:{flex:1,backgroundColor:"#120B29",paddingHorizontal:20},logoContainer:{marginTop:.08*p,alignItems:"center"},logoText:{fontSize:32,fontWeight:"bold"},logoTextWhite:{color:"white"},logoTextPurple:{color:"#9D4EDD"},mapContainer:{flex:1,justifyContent:"center",alignItems:"center",marginVertical:20},mapImage:{width:"100%",height:"100%",opacity:.5},contentContainer:{marginBottom:40},heading:{color:"white",fontSize:32,fontWeight:"bold",textAlign:"center",marginBottom:16},headingHighlight:{color:"#9D4EDD"},subheading:{color:"rgba(255, 255, 255, 0.8)",fontSize:16,textAlign:"center",lineHeight:24},bottomContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:40},button:{backgroundColor:"#9D4EDD",paddingVertical:15,paddingHorizontal:24,borderRadius:30,flexDirection:"row",alignItems:"center"},buttonText:{color:"white",fontSize:16,fontWeight:"600",marginRight:8}});const y=function(e){var t=e.navigation;return(0,f.jsxs)(a.default,{style:x.container,children:[(0,f.jsx)(a.default,{style:x.logoContainer,children:(0,f.jsxs)(l.default,{style:x.logoText,children:[(0,f.jsx)(l.default,{style:x.logoTextWhite,children:"HEY"}),(0,f.jsx)(l.default,{style:x.logoTextPurple,children:"MAX"})]})}),(0,f.jsx)(a.default,{style:x.mapContainer,children:(0,f.jsx)(s.default,{source:n(3809),style:x.mapImage,resizeMode:"contain"})}),(0,f.jsxs)(a.default,{style:x.contentContainer,children:[(0,f.jsxs)(l.default,{style:x.heading,children:["Shop your way to a","\n",(0,f.jsx)(l.default,{style:x.headingHighlight,children:"Dream Vacation"})]}),(0,f.jsxs)(l.default,{style:x.subheading,children:["Turn your expenses into dream vacations","\n","by earning miles every time you shop"]})]}),(0,f.jsxs)(a.default,{style:x.bottomContainer,children:[(0,f.jsx)(m,{currentPage:0,totalPages:3}),(0,f.jsxs)(c.default,{style:x.button,onPress:function(){return t.navigate("Shop")},children:[(0,f.jsx)(l.default,{style:x.buttonText,children:"See how it works"}),(0,f.jsx)(u.default,{name:"chevron-forward",size:20,color:"white"})]})]})]})};var w=n(296),j=n(1681),C=g.default.get("window").width,v=d.default.create({card:{borderRadius:16,justifyContent:"center",alignItems:"center",padding:10},logo:{width:"70%",height:"70%"}});const D=function(e){e.name;var t=e.logo,n=e.bgColor,o=e.size,i=function(){var e=(C-40-10)/2;switch(o){case"large":return{width:e,height:.8*e};case"medium":default:return{width:e,height:.6*e};case"small":return{width:e-5,height:.8*(e-5)}}}(),r=i.width,a=i.height;return(0,f.jsx)(c.default,{style:[v.card,{backgroundColor:n,width:r,height:a,marginBottom:10}],children:(0,f.jsx)(s.default,{source:t,style:v.logo,resizeMode:"contain"})})};var z=d.default.create({button:{paddingVertical:12,paddingHorizontal:20,borderRadius:30,marginRight:10},activeButton:{backgroundColor:"#9D4EDD"},inactiveButton:{backgroundColor:"rgba(157, 78, 221, 0.2)"},buttonText:{fontSize:14,fontWeight:"600"},activeText:{color:"white"},inactiveText:{color:"rgba(255, 255, 255, 0.8)"}});const S=function(e){var t=e.title,n=e.active,o=e.onPress;return(0,f.jsx)(c.default,{style:[z.button,n?z.activeButton:z.inactiveButton],onPress:o,children:(0,f.jsx)(l.default,{style:[z.buttonText,n?z.activeText:z.inactiveText],children:t})})};g.default.get("window").width;var T=d.default.create({container:{flex:1,backgroundColor:"#120B29",paddingHorizontal:20},numberContainer:{flexDirection:"row",alignItems:"center",marginTop:50},numberCircle:{width:40,height:40,borderRadius:20,backgroundColor:"#9D4EDD",justifyContent:"center",alignItems:"center",shadowColor:"#9D4EDD",shadowOffset:{width:0,height:0},shadowOpacity:.5,shadowRadius:10,elevation:5},numberText:{color:"white",fontSize:18,fontWeight:"bold"},numberLine:{flex:1,height:2,backgroundColor:"#9D4EDD",opacity:.5},heading:{color:"white",fontSize:32,fontWeight:"bold",marginTop:30,marginBottom:20},categoriesContainer:{flexGrow:0,paddingVertical:10,gap:10},brandsContainer:{paddingBottom:20},brandsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",marginTop:10},bottomContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:40,paddingHorizontal:10},nextButton:{width:60,height:60,borderRadius:30,backgroundColor:"#9D4EDD",justifyContent:"center",alignItems:"center"}});const k=function(e){var t=e.navigation,i=[{id:1,title:"Shop online",active:!0},{id:2,title:"Book travel",active:!1},{id:3,title:"Order food",active:!1}],r=[{id:1,name:"Shopee",category:1,logo:n(6393),bgColor:"#EE4D2D",size:"large"},{id:2,name:"Lazada",category:1,logo:n(4884),bgColor:"#0F146E",size:"large"},{id:3,name:"H&M",category:1,logo:n(977),bgColor:"#E50010",size:"small"},{id:4,name:"Fave",category:2,logo:n(3551),bgColor:"#E91E63",size:"small"},{id:5,name:"Uniqlo",category:2,logo:n(3690),bgColor:"#FFFFFF",size:"small"},{id:6,name:"Amazon",category:3,logo:n(7871),bgColor:"#FFFFFF",size:"medium"},{id:7,name:"FairPrice",category:3,logo:n(9201),bgColor:"#0F146E",size:"medium"}],d=(0,o.useState)(i[0].id),s=(0,w.default)(d,2),g=s[0],h=s[1],b=r.filter((function(e){return e.category===g}));return(0,o.useEffect)((function(){}),[g]),(0,f.jsxs)(a.default,{style:T.container,children:[(0,f.jsxs)(a.default,{style:T.numberContainer,children:[(0,f.jsx)(a.default,{style:T.numberCircle,children:(0,f.jsx)(l.default,{style:T.numberText,children:"1"})}),(0,f.jsx)(a.default,{style:T.numberLine})]}),(0,f.jsxs)(l.default,{style:T.heading,children:["Shop your favourite","\n","brands, earn miles"]}),(0,f.jsx)(j.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,style:{flexGrow:0,flexShrink:0},contentContainerStyle:T.categoriesContainer,children:i.map((function(e){return(0,f.jsx)(S,{title:e.title,active:e.id===g,onPress:function(){return h(e.id)}},e.id)}))}),(0,f.jsx)(j.default,{showsVerticalScrollIndicator:!1,contentContainerStyle:T.brandsContainer,children:(0,f.jsx)(a.default,{style:T.brandsGrid,children:b.map((function(e){return(0,f.jsx)(D,{name:e.name,logo:e.logo,bgColor:e.bgColor,size:e.size},e.id)}))})}),(0,f.jsxs)(a.default,{style:T.bottomContainer,children:[(0,f.jsx)(m,{currentPage:1,totalPages:3}),(0,f.jsx)(c.default,{style:T.nextButton,onPress:function(){return t.navigate("Redeem")},children:(0,f.jsx)(u.default,{name:"chevron-forward",size:24,color:"white"})})]})]})};var B=d.default.create({container:{backgroundColor:"rgba(157, 78, 221, 0.1)",borderRadius:16,padding:20,flexDirection:"row",alignItems:"flex-start"},iconContainer:{width:50,height:50,borderRadius:8,justifyContent:"center",alignItems:"center",marginRight:16},content:{flex:1},title:{color:"white",fontSize:18,fontWeight:"bold",marginBottom:8},description:{color:"rgba(255, 255, 255, 0.7)",fontSize:14,lineHeight:20,marginBottom:8},tag:{color:"#9D4EDD",fontSize:14,fontWeight:"600"},logo:{width:"100%",height:"100%"}});const E=function(e){var t=e.title,n=e.description,o=e.tag,i=e.logo;return(0,f.jsxs)(c.default,{style:B.container,children:[(0,f.jsx)(a.default,{style:B.iconContainer,children:(0,f.jsx)(s.default,{source:i,style:B.logo,resizeMode:"contain"})}),(0,f.jsxs)(a.default,{style:B.content,children:[(0,f.jsx)(l.default,{style:B.title,children:t}),(0,f.jsx)(l.default,{style:B.description,children:n}),(0,f.jsx)(l.default,{style:B.tag,children:o})]})]})};var O=d.default.create({container:{flex:1,backgroundColor:"#120B29",paddingHorizontal:20},numberContainer:{flexDirection:"row",alignItems:"center",marginTop:50},numberCircle:{width:40,height:40,borderRadius:20,backgroundColor:"#9D4EDD",justifyContent:"center",alignItems:"center",shadowColor:"#9D4EDD",shadowOffset:{width:0,height:0},shadowOpacity:.5,shadowRadius:10,elevation:5},numberText:{color:"white",fontSize:18,fontWeight:"bold"},numberLine:{flex:1,height:2,backgroundColor:"#9D4EDD",opacity:.5},heading:{color:"white",fontSize:32,fontWeight:"bold",marginTop:30,marginBottom:20},optionsContainer:{paddingBottom:20,gap:16},bottomContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:40,paddingHorizontal:10},button:{backgroundColor:"#9D4EDD",paddingVertical:15,paddingHorizontal:30,borderRadius:30},buttonText:{color:"white",fontSize:16,fontWeight:"600"}});const P=function(e){var t=e.navigation,o=[{id:1,title:"Transfer miles",description:"25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio",tag:"Best for Business & First Class",logo:n(8318)},{id:2,title:"Fly and Claim",description:"Upload your flight ticket, and get reimbursed within 5 days.",tag:"Best for Economy",logo:n(6149)},{id:3,title:"Not flying soon",description:"You can always redeem Gift Cards with your Max Miles.",tag:"Best for Starters",logo:n(3884)}];return(0,f.jsxs)(a.default,{style:O.container,children:[(0,f.jsxs)(a.default,{style:O.numberContainer,children:[(0,f.jsx)(a.default,{style:O.numberLine}),(0,f.jsx)(a.default,{style:O.numberCircle,children:(0,f.jsx)(l.default,{style:O.numberText,children:"2"})})]}),(0,f.jsx)(l.default,{style:O.heading,children:"Redeem your trip"}),(0,f.jsx)(j.default,{showsVerticalScrollIndicator:!1,contentContainerStyle:O.optionsContainer,children:o.map((function(e){return(0,f.jsx)(E,{title:e.title,description:e.description,tag:e.tag,logo:e.logo},e.id)}))}),(0,f.jsxs)(a.default,{style:O.bottomContainer,children:[(0,f.jsx)(m,{currentPage:2,totalPages:3}),(0,f.jsx)(c.default,{style:O.button,onPress:function(){return t.navigate("Onboarding")},children:(0,f.jsx)(l.default,{style:O.buttonText,children:"Get started"})})]})]})};var F=n(3113),I=(0,r.default)();function R(){return(0,f.jsxs)(i.default,{children:[(0,f.jsx)(F.default,{style:"light"}),(0,f.jsxs)(I.Navigator,{initialRouteName:"Onboarding",screenOptions:{headerShown:!1,contentStyle:{backgroundColor:"#120B29"}},children:[(0,f.jsx)(I.Screen,{name:"Onboarding",component:y}),(0,f.jsx)(I.Screen,{name:"Shop",component:k}),(0,f.jsx)(I.Screen,{name:"Redeem",component:P})]})]})}},3551:(e,t,n)=>{e.exports=n.p+"static/media/fave.f7cc5f78821f49b90e82.png"},3690:(e,t,n)=>{e.exports=n.p+"static/media/merchant logo.8f7090e7b6e2c6f8b85c.png"},3809:(e,t,n)=>{e.exports=n.p+"static/media/Flyanywhere_darker.f20871ce4d6a1935f288.png"},3884:(e,t,n)=>{e.exports=n.p+"static/media/3.80bbbb87ba7bb74db753.png"},4884:(e,t,n)=>{e.exports=n.p+"static/media/Lazada.1725137dcad34965840d.png"},6149:(e,t,n)=>{e.exports=n.p+"static/media/2.569c04c03585eafc23f5.png"},6393:(e,t,n)=>{e.exports=n.p+"static/media/Shopee.01e58c7d74640ee0bacd.png"},7871:(e,t,n)=>{e.exports=n.p+"static/media/amazon.sg.7de1a656d56618c855df.png"},8318:(e,t,n)=>{e.exports=n.p+"static/media/1.22f5f7ec2f116546608e.png"},9201:(e,t,n)=>{e.exports=n.p+"static/media/merchant_ntucfairprice.4833774a7f9d4e2fcb15.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,(()=>{var e=[];n.O=(t,o,i,r)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,i,r]=e[c],l=!0,d=0;d<o.length;d++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[d])))?o.splice(d--,1):(l=!1,r<a&&(a=r));if(l){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,[a,l,d]=o,s=0;if(a.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(d)var c=d(n)}for(t&&t(o);s<a.length;s++)r=a[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[781],(()=>n(7307)));o=n.O(o)})();
//# sourceMappingURL=main.b3799f0e.js.map