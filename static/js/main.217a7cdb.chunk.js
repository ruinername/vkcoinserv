(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);a(70),a(95);var n=a(0),l=a.n(n),o=a(32),c=a.n(o),r=a(17),i=a.n(r),s=a(58),h=a(59),d=a(67),u=a(60),m=a(68),p=a(6),k=a(1),f=(a(117),a(61)),b=a.n(f),y=a(62),E=a.n(y),v=a(63),g=a.n(v),w=a(64),C=a.n(w),S=a(34),I=a.n(S),x=function(e){var t=e.id,a=e.go,n=(e.fetchedUser,e.userInfo),o=e.updateBalance;return l.a.createElement(k.Panel,{theme:"white",id:t},l.a.createElement("p",{style:{fontWeight:"bold",color:"grey",fontSize:26,textAlign:"center"}},"\u0421\u0447\u0451\u0442 \u0432 \u043a\u0430\u0437\u0438\u043d\u043e"),n&&n.balance&&l.a.createElement("p",{style:{fontWeight:"bold",color:"black",fontSize:36,textAlign:"center"}},n.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")),l.a.createElement(k.Button,{onClick:o,size:"xl",level:"secondary"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441"),l.a.createElement(k.Group,{title:"\u0418\u0433\u0440\u044b"},l.a.createElement(k.Gallery,{slideWidth:"90%",align:"center",style:{height:150}},l.a.createElement("div",{onClick:a,"data-to":"monetka",style:{backgroundColor:"var(--accent)",padding:10}},l.a.createElement("p",{style:{fontWeight:"bold",color:"white",fontSize:26}},"\u041c\u043e\u043d\u0435\u0442\u043a\u0430")),l.a.createElement("a",{href:"https://vk.com/im?media=&sel=-180935916"},l.a.createElement("div",{style:{backgroundColor:"var(--button_commerce_background)",padding:10}},l.a.createElement("p",{style:{fontWeight:"bold",color:"white",fontSize:26}},"\u0411\u043b\u044d\u043a\u0434\u0436\u0435\u043a"))))))},j=(a(65),a(120),a(66),a(33),Object(k.platform)(),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.ffiixx=function(e){a.setState({activeStory:e.currentTarget.dataset.to})},a.state={fetchedUser:null,userInfo:null,token:null,activeStory:"home",swal:null,withdrawvalue:0,monetka:0},a.updateBalance=a.updateBalance.bind(Object(p.a)(Object(p.a)(a))),a.onStoryChange=a.onStoryChange.bind(Object(p.a)(Object(p.a)(a))),a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleWithdraw=a.handleWithdraw.bind(Object(p.a)(Object(p.a)(a))),a.handleChangeMonetka=a.handleChangeMonetka.bind(Object(p.a)(Object(p.a)(a))),a.handleMonetka=a.handleMonetka.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"updateBalance",value:function(){var e=this;fetch("https://typokekay.voloshinskii.ru/getuserinfo/".concat(this.state.token)).then(function(e){return e.json()}).then(function(t){return e.setState({userInfo:t})})}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"handleChange",value:function(e){this.setState({withdrawvalue:e.target.value})}},{key:"handleWithdraw",value:function(e){fetch("https://typokekay.voloshinskii.ru/withdraw/".concat(this.state.token,"?amount=").concat(this.state.withdrawvalue)).then(function(e){return e.json()}).then(function(e){return I()(e.ok?"\u0423\u0441\u043f\u0435\u0448\u043d\u043e!":"\u041e\u0448\u0438\u0431\u043a\u0430",e.desc,e.ok?"success":"error")}),this.updateBalance()}},{key:"handleChangeMonetka",value:function(e){this.setState({monetka:e.target.value})}},{key:"handleMonetka",value:function(e){fetch("https://typokekay.voloshinskii.ru/monetka/".concat(this.state.token,"?bet=").concat(this.state.monetka)).then(function(e){return e.json()}).then(function(e){return I()(e.ok?"\u041f\u043e\u0431\u0435\u0434\u0430!":"\u041e\u0448\u0438\u0431\u043a\u0430",e.desc,e.ok?"success":"error")}),this.updateBalance()}},{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":e.setState({token:t.detail.data.access_token}),fetch("https://typokekay.voloshinskii.ru/getuserinfo/".concat(t.detail.data.access_token)).then(function(e){return e.json()}).then(function(t){return e.setState({userInfo:t})});break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{}),i.a.send("VKWebAppGetAuthToken",{app_id:6935354,scope:""})}},{key:"render",value:function(){return l.a.createElement(k.Epic,{activeStory:this.state.activeStory,tabbar:l.a.createElement(k.Tabbar,null,l.a.createElement(k.TabbarItem,{onClick:this.onStoryChange,selected:"home"===this.state.activeStory,"data-story":"home",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(C.a,null)),l.a.createElement(k.TabbarItem,{onClick:this.onStoryChange,selected:"deposit"===this.state.activeStory,"data-story":"deposit",text:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442"},l.a.createElement(g.a,null)),l.a.createElement(k.TabbarItem,{onClick:this.onStoryChange,selected:"withdraw"===this.state.activeStory,"data-story":"withdraw",text:"\u0412\u044b\u0432\u043e\u0434"},l.a.createElement(E.a,null)),l.a.createElement(k.TabbarItem,{onClick:this.onStoryChange,selected:"help"===this.state.activeStory,"data-story":"help",text:"\u041f\u043e\u043c\u043e\u0449\u044c"},l.a.createElement(b.a,null)))},l.a.createElement(k.View,{id:"deposit",activePanel:"deposit"},l.a.createElement(k.Panel,{id:"deposit"},l.a.createElement(k.PanelHeader,null,"\u0414\u0435\u043f\u043e\u0437\u0438\u0442"),l.a.createElement(k.Group,null,l.a.createElement(k.Div,null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441 \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0431\u043e\u0442\u0435, \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u0442\u043e\u043a\u0435\u043d\u044b \u043d\u0430 \u044d\u0442\u043e\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442: https://vk.com/id540462074. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043e\u043d\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430\u0447\u0438\u0441\u043b\u044f\u0442\u0441\u044f \u043d\u0430 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043a\u0430\u0437\u0438\u043d\u043e",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{style:{textDecoration:"none"},href:"https://vk.com/coin#t540462074"},l.a.createElement(k.Button,{size:"xl",level:"secondary"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 VKCOIN")))))),l.a.createElement(k.View,{id:"withdraw",activePanel:"withdraw"},l.a.createElement(k.Panel,{id:"withdraw",theme:"white"},l.a.createElement(k.PanelHeader,null,"\u0412\u044b\u0432\u043e\u0434"),l.a.createElement(k.FormLayout,null,l.a.createElement(k.Input,{type:"text",top:"\u0421\u0443\u043c\u043c\u0430 \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430",name:"email",placeholder:"1 000 000",onChange:this.handleChange}),l.a.createElement(k.Button,{size:"xl",onClick:this.handleWithdraw,level:"secondary"},"\u0412\u044b\u0432\u0435\u0441\u0442\u0438"),l.a.createElement("p",{style:{marginLeft:15,fontWeight:"bold"}},"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441: ",this.state.userInfo&&this.state.userInfo.balance&&this.state.userInfo.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")," \u043a\u043e\u0438\u043d\u043e\u0432"),l.a.createElement(k.Button,{onClick:this.updateBalance,size:"xl",level:"secondary"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441")))),l.a.createElement(k.View,{id:"help",activePanel:"help"},l.a.createElement(k.Panel,{id:"help"},l.a.createElement(k.PanelHeader,null,"\u041f\u043e\u043c\u043e\u0449\u044c"),l.a.createElement(k.Group,null,l.a.createElement(k.Div,null,"\u041d\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e: https://vk.com/vkccasino")),l.a.createElement(k.Group,null,l.a.createElement(k.Div,null,"VKCOIN Casino - \u043f\u0440\u043e\u0435\u043a\u0442, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0412\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0443\u043c\u043d\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0438 VK \u043a\u043e\u0438\u043d\u044b \u0438 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u0432 \u0422\u041e\u041f-100!")),l.a.createElement(k.Group,null,l.a.createElement(k.Div,null,"\u0415\u0441\u043b\u0438 \u0432\u0434\u0440\u0443\u0433 \u0447\u0442\u043e-\u0442\u043e \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c ( \u0447\u0442\u043e \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043a\u0440\u0430\u0439\u043d\u0435 \u0440\u0435\u0434\u043a\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 ), \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u043d\u0435 \u0432 \u041b\u0421",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{style:{textDecoration:"none"},href:"https://vk.com/voloshinskii"},l.a.createElement(k.Button,{size:"xl",level:"secondary"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438")))))),l.a.createElement(k.View,{id:"home",activePanel:"home"},l.a.createElement(x,{id:"home",userInfo:this.state.userInfo,fetchedUser:this.state.fetchedUser,activePanel:"home",go:this.ffiixx,updateBalance:this.updateBalance})),l.a.createElement(k.View,{id:"monetka",activePanel:"monetka"},l.a.createElement(k.Panel,{id:"monetka",theme:"white"},l.a.createElement(k.PanelHeader,null,"\u041c\u043e\u043d\u0435\u0442\u043a\u0430"),l.a.createElement(k.FormLayout,null,l.a.createElement(k.Input,{type:"text",top:"\u0421\u0442\u0430\u0432\u043a\u0430",name:"email",placeholder:"1 000 000",onChange:this.handleChangeMonetka}),l.a.createElement(k.Button,{size:"xl",onClick:this.handleMonetka,level:"secondary"},"\u0421\u044b\u0433\u0440\u0430\u0442\u044c"),l.a.createElement("p",{style:{marginLeft:15,fontWeight:"bold"}},"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441: ",this.state.userInfo&&this.state.userInfo.balance&&this.state.userInfo.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")," \u043a\u043e\u0438\u043d\u043e\u0432"),l.a.createElement(k.Button,{onClick:this.updateBalance,size:"xl",level:"secondary"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441")))))}}]),t}(l.a.Component));i.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(j,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},69:function(e,t,a){e.exports=a(121)}},[[69,1,2]]]);
//# sourceMappingURL=main.217a7cdb.chunk.js.map