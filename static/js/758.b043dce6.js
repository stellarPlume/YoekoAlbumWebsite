"use strict";(self["webpackChunkvue_template_lyl"]=self["webpackChunkvue_template_lyl"]||[]).push([[758],{8758:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"audioDetails"},[e("div",{staticClass:"virtual"},[e("div",{staticClass:"device"},[e("CdReader",{staticClass:"reader",attrs:{soundImage:t.soundImage}}),e("div",{staticClass:"panel"},[t._m(0),e("div",{staticClass:"player"},[e("div",{staticClass:"showArea"},[e("div",{staticClass:"audioName"},[t._v(t._s(t.soundName))]),e("el-slider",{staticClass:"progressSlider",attrs:{max:t.audioTotalDuration,min:0,"show-tooltip":!1,disabled:0===t.audioTotalDuration},model:{value:t.audioCurrentTime,callback:function(e){t.audioCurrentTime=e},expression:"audioCurrentTime"}}),e("div",{staticClass:"controlArea"},[e("div",{staticClass:"timeMonitor"},[t._v(" "+t._s(t.progressBarFormatTimeUtil(t.audioCurrentTime))+" / "+t._s(t.progressBarFormatTimeUtil(t.audioTotalDuration))+" ")]),e("div",{staticClass:"control-group"},[e("LikeCom",{staticClass:"control-like",attrs:{id:t.currentPlayId}}),e("div",{staticClass:"control-previous",on:{click:function(e){return t.$store.commit("player/activeSwitchAudioTrigger","previous")}}},[e("span",{staticClass:"iconfont icon-bofangshangyige"})]),e("div",{staticClass:"control-play",on:{click:t.playAudio}},[t.playState?e("span",{staticClass:"iconfont icon-zanting"}):e("span",{staticClass:"iconfont icon-bofang"})]),e("div",{staticClass:"control-next",on:{click:function(e){return t.$store.commit("player/activeSwitchAudioTrigger","next")}}},[e("span",{staticClass:"iconfont icon-bofangxiayige"})]),e("div",{staticClass:"control-mode",on:{click:t.togglePlayMode}},[e("span",{directives:[{name:"show",rawName:"v-show",value:"shufflePlay"===t.playMode,expression:"playMode === 'shufflePlay'"}],staticClass:"iconfont icon-suijibofang"}),e("span",{directives:[{name:"show",rawName:"v-show",value:"loopList"===t.playMode,expression:"playMode === 'loopList'"}],staticClass:"iconfont icon-liebiaoxunhuan"}),e("span",{directives:[{name:"show",rawName:"v-show",value:"singleLoop"===t.playMode,expression:"playMode === 'singleLoop'"}],staticClass:"iconfont icon-danduxunhuan"})])],1),e("div",{staticClass:"control-volume"},[e("span",{staticClass:"iconfont icon-shengyin"}),e("el-slider",{staticClass:"volumeSlider",attrs:{min:0,max:100},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)])],1)])])],1),e("div",{staticClass:"lyricsPanel"},[e("ProgramLoading",{staticClass:"box"})],1)])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"visualize"},[e("div",{staticClass:"showArea"},[e("div",{attrs:{id:"frequencyChart"}})])])}],o=(s(4114),s(9671)),n=s(3518),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reader"},[e("div",{staticClass:"core"},[e("div",{staticClass:"internal"},[e("CompactDisk",{directives:[{name:"show",rawName:"v-show",value:t.soundImage,expression:"soundImage"}],staticClass:"compactDisk",attrs:{image:t.soundImage}})],1),t._m(0),t._m(1),t._m(2)]),e("div",{staticClass:"logo"},[t._v("SHINSHA")])])},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"shell"},[e("div",{staticClass:"shell-block"},[e("div",{staticClass:"one"}),e("div",{staticClass:"two"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"desc"},[e("span",[t._v("CD")]),e("span",[t._v("VIRTUAL PLAYER")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign"},[e("span",[t._v("DISC")]),e("span",[t._v("DIGITAL AUDIO")])])}],d=s(4755),c={props:["soundImage"],components:{CompactDisk:d.A},data(){return{}},methods:{},computed:{},watch:{},created(){},mounted(){},beforeDestroy(){}},u=c,m=s(1656),p=(0,m.A)(u,r,l,!1,null,"46b8e1b9",null),h=p.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"monitor"},[e("div",{staticClass:"main"},t._l(t.displayLines,(function(s,i){return e("p",{key:i,domProps:{innerHTML:t._s(s)}})})),0)])},v=[],f={props:{lines:{default(){return["| Start Self-test Program","| Virtual device rendering successful","| Detect that personal server is offline, Lyrics rendering failed","| Foreseeable Errors, Please do not contact the administrator","|","| Load Reserve Information","| Welcome to SHINSHA brand's virtual devices","| We sincerely thank you for choosing our brand's equipment","| Wish you a pleasant experience!","| ","| End"]},type:Array}},data(){return{displayLines:[]}},methods:{startLoadingEffect(){let t=0,e=0;const s=500,i=20,a=()=>{e<this.lines[t].length?(this.displayLines.splice(t,1,this.displayLines[t]+this.lines[t][e]),e++,setTimeout(a,i)):(e=0,t++,t<this.lines.length&&setTimeout(o,s))},o=()=>{setTimeout(a,i)};o()}},computed:{formattedLines(){return this.displayLines.map((t=>t||"&nbsp;"))}},watch:{},created(){},mounted(){this.$globalProperty.settings.initialLoad?this.displayLines=this.lines:setTimeout((()=>{void 0!==this.lines[0]&&(this.displayLines=this.lines.map((()=>"")),this.startLoadingEffect(),this.$globalProperty.settings.initialLoad=!0)}),800)},beforeDestroy(){}},g=f,C=(0,m.A)(g,y,v,!1,null,"0578680b",null),I=C.exports,_={name:"AudioDetails",components:{CdReader:h,ProgramLoading:I},data(){return{modeIndex:1,soundName:"",soundImage:null,frequencyChart:null,frequencyOption:null}},methods:{playAudio(){if(0===this.playList.length)return this.$message.warning("Your playlist is empty");this.currentPlayId?this.$store.commit("player/activeTogglePlayStateTrigger",!this.playState):(this.$store.commit("player/updateCurrentPlayIndex",0),this.$store.commit("player/activeFirstPlayAudioTrigger"))},togglePlayMode(){this.modeIndex<3?this.modeIndex+=1:this.modeIndex=1,1===this.modeIndex&&(this.playMode="loopList"),2===this.modeIndex&&(this.playMode="singleLoop"),3===this.modeIndex&&(this.playMode="shufflePlay"),this.$notify({title:"Play Mode",message:this.playMode,position:"bottom-right",showClose:!1,duration:2500})},progressBarFormatTimeUtil(t){const e=Math.floor(t/60),s=t%60,i=String(e).padStart(2,"0"),a=String(s).padStart(2,"0");return`${i}:${a}`},setFrequencyOption(){const t=[];for(let e=0;e<64;e++){const s=5.625*e;t.push(`hsl(${s}, 100%, 50%)`)}this.frequencyOption={xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,max:255,min:0},grid:{left:"0",right:"0",top:"0",bottom:"0"},animation:!1,cursor:"default",series:[{data:[],type:"bar",barCategoryGap:1,itemStyle:{color:function(e){return t[e.dataIndex]}},emphasis:{disabled:!0}}]}},createVisualizeAudio(){this.frequencyChart=o.Ts(document.getElementById("frequencyChart")),this.setFrequencyOption(),this.frequencyChart&&this.frequencyChart.setOption(this.frequencyOption);let t=null;window.onresize=()=>{null===t&&(t=setTimeout((()=>{this.setFrequencyOption(),this.frequencyChart&&this.frequencyChart.setOption(this.frequencyOption),this.frequencyChart.resize(),t=null}),50))}},vwImitate(t,e=1920){const s=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return t/e*s}},computed:{...(0,n.aH)("player",{playState:t=>t.playState,playList:t=>t.playList,currentPlayId:t=>t.currentPlayId,audioMeter:t=>t.audioMeter}),volume:{get(){return this.$store.state.player.volume},set(t){this.$store.commit("player/updateVolume",t)}},playMode:{get(){return this.$store.state.player.playMode},set(t){this.$store.commit("player/activeTogglePlayModeTrigger",t)}},audioCurrentTime:{get(){return this.$store.state.player.audioTime.currentTime},set(t){this.$store.commit("player/updateAudioTime",{currentTime:t})}},audioTotalDuration(){return this.$store.state.player.audioTime.totalDuration}},watch:{currentPlayId:{handler(){if(this.currentPlayId){const t=this.playList.find((t=>t.soundId===this.currentPlayId));this.soundName=t.soundName,this.soundImage=t.albumImage}else this.soundName="",this.soundImage=null},immediate:!0},audioMeter(){const t=Array.from(this.audioMeter.ByteFrequencyData);this.frequencyOption.series[0].data=t,this.frequencyChart&&this.frequencyChart.setOption(this.frequencyOption)}},created(){},mounted(){this.createVisualizeAudio()},beforeDestroy(){}},T=_,w=(0,m.A)(T,i,a,!1,null,"7b3a2691",null),x=w.exports}}]);