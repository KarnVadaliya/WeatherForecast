(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},48:function(e,t,a){},49:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),p=a.n(i),c=(a(48),a(49),a(17)),s=a(18),l=a(22),o=a(19),d=a(23),u=a(13),m=a.n(u),h=a(10),y=a(9),f=a.n(y),E=a(21),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.updateCity(e.target.city.value);var t="";t="C"===a.props.unit?"metric":"imperial",f.a.get("https://api.openweathermap.org/data/2.5/forecast?q="+e.target.city.value+"&appid=d90a4edf4d91049321f5b1505b2d7d7e&units="+t).then((function(e){a.props.updateDays(e.data.list)})).catch((function(e){a.props.updateCity("Invalid City Name"),a.props.updateDays([]),a.props.updateCurrent({temp:"-",icon:"-",wind:"-",feels_like:"-"})})),f.a.get("https://api.openweathermap.org/data/2.5/weather?q="+e.target.city.value+"&appid=d90a4edf4d91049321f5b1505b2d7d7e&units="+t).then((function(e){a.props.updateCurrent({temp:e.data.main.temp,icon:e.data.weather[0].icon,wind:e.data.wind.speed,feels_like:e.data.main.feels_like})})).catch((function(e){a.props.updateCity("Invalid City Name"),a.props.updateDays([]),a.props.updateCurrent({temp:"-",icon:"-",wind:"-",feels_like:"-"})}))},a.tempChange=function(e){"metric"===e.target.value?(a.props.updateUnit("C"),a.props.updateWindUnit("meter/sec")):(a.props.updateUnit("F"),a.props.updateWindUnit("miles/hour")),f.a.get("https://api.openweathermap.org/data/2.5/forecast?q="+a.props.city+"&appid=d90a4edf4d91049321f5b1505b2d7d7e&units="+e.target.value).then((function(e){a.props.updateDays(e.data.list)})).catch((function(e){a.props.updateCity("Invalid City Name"),a.props.updateDays([]),a.props.updateCurrent({temp:"-",icon:"-",wind:"-",feels_like:"-"})})),f.a.get("https://api.openweathermap.org/data/2.5/weather?q="+a.props.city+"&appid=d90a4edf4d91049321f5b1505b2d7d7e&units="+e.target.value).then((function(e){a.props.updateCurrent({temp:e.data.main.temp,icon:e.data.weather[0].icon,wind:e.data.wind.speed,feels_like:e.data.main.feels_like})})).catch((function(e){a.props.updateCity("Invalid City Name"),a.props.updateDays([]),a.props.updateCurrent({temp:"-",icon:"-",wind:"-",feels_like:"-"})}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";t="C"===this.props.unit?"metric":"imperial",f.a.get("https://api.openweathermap.org/data/2.5/forecast?q="+this.props.city+"&appid=d90a4edf4d91049321f5b1505b2d7d7e&units="+t).then((function(t){e.props.updateDays(t.data.list)})),f.a.get("https://api.openweathermap.org/data/2.5/weather?q="+this.props.city+"&appid=d90a4edf4d91049321f5b1505b2d7d7e&units="+t).then((function(t){e.props.updateCurrent({temp:t.data.main.temp,icon:t.data.weather[0].icon,wind:t.data.wind.speed,feels_like:t.data.main.feels_like})}))}},{key:"render",value:function(){for(var e=this,t=[],a=0,n=-1e3,i=1e3,p=0;p<this.props.days.length;p++)this.props.days[p].main.temp>n&&(n=this.props.days[p].main.temp),this.props.days[p].main.temp<i&&(i=this.props.days[p].main.temp),6!==p&&14!==p&&22!==p&&30!==p&&38!==p||(t[a]={dt_txt:this.props.days[p].dt_txt,high:n,low:i,icn:this.props.days[p].weather[0].icon},a++,n=-1e3,i=1e3);var c=t.length?t.map((function(t){return r.a.createElement("div",{className:"day",key:t.dt_txt},r.a.createElement(E.b,{to:{pathname:"/".concat(m()(t.dt_txt).format("dddd")),state:{date:t.dt_txt}},style:{textDecoration:"none"}},r.a.createElement("h3",null,m()(t.dt_txt).format("ddd")),r.a.createElement("img",{src:"https://openweathermap.org/img/wn/"+t.icn+"@2x.png",alt:"weather_icon"}),r.a.createElement("p",null,"High: \u2191 ",t.high,"\xb0",e.props.unit),r.a.createElement("p",null,"Low: \u2193 ",t.low,"\xb0",e.props.unit)))})):r.a.createElement("div",{style:{display:"none"}});return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("form",{className:"row",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("label",{htmlFor:"city",className:"active",style:{fontSize:"25px",color:"darkBlue"}},r.a.createElement("strong",null,"Enter City")),r.a.createElement("input",{id:"city",type:"text",className:"validate",onChange:this.handleChange})))),r.a.createElement("div",{className:"weather"},r.a.createElement("div",{className:"current"},r.a.createElement("div",{className:"info"},r.a.createElement("p",null,"\xa0"),r.a.createElement("p",{className:"city"},this.props.city),r.a.createElement("p",{className:"degree"}," ",r.a.createElement("button",{value:"imperial",onClick:this.tempChange,style:{position:"static",color:"white"}},"\xb0 F")," | ",r.a.createElement("button",{value:"metric",onClick:this.tempChange,style:{position:"static",color:"white"}},"\xb0 C")),r.a.createElement("img",{src:"https://openweathermap.org/img/wn/"+this.props.current.icon+"@2x.png",alt:"weather_icon"}),r.a.createElement("p",{className:"temp"},this.props.current.temp,"\xb0 ",this.props.unit,r.a.createElement("br",null),r.a.createElement("span",{className:"feels"},r.a.createElement("small",null,"Feels like:"),this.props.current.feels_like,"\xb0 ",this.props.unit)),r.a.createElement("p",{className:"wind"},r.a.createElement("small",null,"Wind:")," ",this.props.current.wind," ",this.props.windunit),r.a.createElement("p",null,"\xa0")))),r.a.createElement("div",{className:"future"},c))}}]),t}(n.Component),g=Object(h.b)((function(e){return{city:e.city,current:e.current,days:e.days,unit:e.unit,windunit:e.windunit}}),(function(e){return{updateCity:function(t){e({type:"UPDATE_CITY",city:t})},updateCurrent:function(t){e({type:"UPDATE_CURRENT",current:t})},updateDays:function(t){e({type:"UPDATE_DAYS",days:t})},updateUnit:function(t){e({type:"UPDATE_UNIT",unit:t})},updateWindUnit:function(t){e({type:"UPDATE_WINDUNIT",windunit:t})}}}))(w),v=a(41),b=a(42),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.history.push("/")},a.convertTime=function(e){return(e=e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[e]).length>1&&((e=e.slice(1))[5]=+e[0]<12?"AM":"PM",e[0]=+e[0]%12||12),e[0]+" "+e[5]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props.location.state.date.split(" "),a=[],n=0,i=0;i<this.props.days.length;i++){this.props.days[i].dt_txt.split(" ")[0]===t[0]&&(a[n]=this.props.days[i],n++)}var p=a.length?a.map((function(t){return r.a.createElement("div",{className:"col s12 m3",key:t.dt_txt},r.a.createElement("div",{className:"flexBox"},r.a.createElement("div",{className:"timeDay"},r.a.createElement("h5",{style:{color:"darkBlue"}},e.convertTime(t.dt_txt.split(" ")[1])),r.a.createElement("br",null),r.a.createElement("p",{className:"card-title bold"},t.weather[0].main),r.a.createElement("br",null),r.a.createElement("img",{src:"https://openweathermap.org/img/wn/"+t.weather[0].icon+"@2x.png",alt:"weather_icon"}),r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement("strong",null,t.main.temp,"\xb0"),e.props.unit),r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement("p",null,"Feels like:")," ",t.main.feels_like,"\xb0",e.props.unit))))})):r.a.createElement("div",{style:{display:"none"}});return r.a.createElement("div",{className:"container"},r.a.createElement("button",{onClick:this.handleClick},r.a.createElement(v.a,{icon:b.a,style:{fontSize:"50px",color:"darkblue"}})),r.a.createElement("h4",null,m()(this.props.location.state.date).format("dddd, MMMM Do YYYY")),r.a.createElement("div",{className:"row"},p))}}]),t}(n.Component),N=Object(h.b)((function(e){return{city:e.city,current:e.current,days:e.days,unit:e.unit,windunit:e.windunit}}))(C),_=a(8);var k=function(){return r.a.createElement(E.a,{className:"App"},r.a.createElement("div",null,r.a.createElement(_.a,{exact:!0,path:"/",component:g}),r.a.createElement(_.a,{exact:!0,path:"/:day",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(20),x=a(11),U={city:"Boston",current:{},days:[],unit:"F",windunit:"miles/hour"},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CITY":return Object(x.a)({},e,{city:t.city});case"UPDATE_CURRENT":return Object(x.a)({},e,{current:t.current});case"UPDATE_DAYS":return Object(x.a)({},e,{days:t.days});case"UPDATE_UNIT":return Object(x.a)({},e,{unit:t.unit});case"UPDATE_WINDUNIT":return Object(x.a)({},e,{windunit:t.windunit});default:return e}},j=Object(D.b)(T);p.a.render(r.a.createElement(h.a,{store:j},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.05abbc0f.chunk.js.map