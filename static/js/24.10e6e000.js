(self["webpackChunkvue_template_lyl"]=self["webpackChunkvue_template_lyl"]||[]).push([[24],{7746:function(t){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"emptyList":"Your playlist is empty","listSingleAudio":"Your playlist is just one song","playMode":"Play Mode","loopList":"loopList","singleLoop":"singleLoop","shufflePlay":"shufflePlay","sequentialPlay":"sequentialPlay"},"zh":{"emptyList":"播放列表是空的","listSingleAudio":"播放列表只有一首歌","playMode":"播放模式","loopList":"列表循环","singleLoop":"单曲循环","shufflePlay":"随机播放","sequentialPlay":"顺序播放"}}'),delete t.options._Ctor}},6024:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return b}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"audioPlayer"},[e("div",{staticClass:"virtual"},[e("div",{staticClass:"device"},[e("CdReader",{staticClass:"reader",attrs:{soundImage:t.soundImage}}),e("div",{staticClass:"panel"},[t._m(0),e("div",{staticClass:"player"},[e("div",{staticClass:"showArea"},[e("div",{staticClass:"audioName"},[t._v(t._s(t.soundName))]),e("el-slider",{staticClass:"progressSlider",attrs:{max:t.audioTotalDuration,min:0,"show-tooltip":!1,disabled:0===t.audioTotalDuration},model:{value:t.audioCurrentTime,callback:function(e){t.audioCurrentTime=e},expression:"audioCurrentTime"}}),e("div",{staticClass:"controlArea"},[e("div",{staticClass:"timeMonitor"},[t._v(" "+t._s(t.progressBarFormatTimeUtil(t.audioCurrentTime))+" / "+t._s(t.progressBarFormatTimeUtil(t.audioTotalDuration))+" ")]),e("div",{staticClass:"control-group"},[e("LikeCom",{staticClass:"control-like",attrs:{id:t.currentPlayId}}),e("div",{staticClass:"control-previous",on:{click:function(e){return t.toggleAudio("previous")}}},[e("span",{staticClass:"iconfont icon-bofangshangyige"})]),e("div",{staticClass:"control-play",on:{click:t.playAudio}},[t.playState?e("span",{staticClass:"iconfont icon-zanting"}):e("span",{staticClass:"iconfont icon-bofang"})]),e("div",{staticClass:"control-next",on:{click:function(e){return t.toggleAudio("next")}}},[e("span",{staticClass:"iconfont icon-bofangxiayige"})]),e("div",{staticClass:"control-mode",on:{click:t.togglePlayMode}},[e("span",{directives:[{name:"show",rawName:"v-show",value:"shufflePlay"===t.playMode,expression:"playMode === 'shufflePlay'"}],staticClass:"iconfont icon-suijibofang"}),e("span",{directives:[{name:"show",rawName:"v-show",value:"loopList"===t.playMode,expression:"playMode === 'loopList'"}],staticClass:"iconfont icon-liebiaoxunhuan"}),e("span",{directives:[{name:"show",rawName:"v-show",value:"singleLoop"===t.playMode,expression:"playMode === 'singleLoop'"}],staticClass:"iconfont icon-danduxunhuan"}),e("span",{directives:[{name:"show",rawName:"v-show",value:"sequentialPlay"===t.playMode,expression:"playMode === 'sequentialPlay'"}],staticClass:"iconfont icon-shunxubofang"})])],1),e("div",{staticClass:"control-volume"},[e("span",{staticClass:"iconfont icon-shengyin"}),e("el-slider",{staticClass:"volumeSlider",attrs:{min:0,max:100},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)])],1)])])],1),e("div",{staticClass:"lyricsPanel"},[e("ProgramLoading",{staticClass:"box"})],1)])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"visualize"},[e("div",{staticClass:"showArea"},[e("div",{attrs:{id:"frequencyChart"}})])])}],o=(i(4114),i(6573),i(8100),i(7936),i(7467),i(4732),i(4339),i(9671)),n=i(3518),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reader"},[e("div",{staticClass:"reader-core"},[e("div",{staticClass:"internal"},[t.soundImage?e("CompactDisk",{staticClass:"compactDisk",attrs:{image:t.soundImage}}):t._e()],1),t._m(0),t._m(1)]),e("div",{staticClass:"brandLogo"},[t._v("SHINSHA")])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"shell"},[e("div",{staticClass:"shell-core"},[e("div",{staticClass:"bracket"}),e("div",{staticClass:"bracket"}),e("div",{staticClass:"mask"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign"},[e("span",[t._v("DISC")]),e("span",[t._v("DIGITAL AUDIO")])])}],u=i(6523),c={props:["soundImage"],components:{CompactDisk:u.A},data(){return{}},methods:{},computed:{},watch:{},created(){},mounted(){},beforeDestroy(){}},d=c,h=i(1656),p=(0,h.A)(d,l,r,!1,null,"b09f4926",null),y=p.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"monitor"},[e("div",{staticClass:"main"},t._l(t.displayLines,(function(i,s){return e("p",{key:s,domProps:{innerHTML:t._s(i)}})})),0)])},g=[],f={data(){return{lines:{en:["| Start Self-test Program","| Virtual device rendering successful","| Detect that personal server is offline, Lyrics rendering failed","| Foreseeable Errors, Please do not contact the administrator","|","| Load Reserve Information","| Welcome to SHINSHA brand's virtual devices","| We sincerely thank you for choosing our brand's equipment","| Wish you a pleasant experience!","| ","| End"],zh:["| 自检程序启动","| 虚拟设备渲染成功","| 检测到个人服务器离线，歌词渲染失败","| 可预见的错误，请不要联系管理员","|","| 加载储备信息","| 欢迎使用 SHINSHA 品牌的虚拟设备","| 我们真诚感谢您选择我们品牌的设备","| 祝您体验愉快！","| ","| 结束"]},displayLines:[],isBlock:!1,isRun:!1}},methods:{startLoadingEffect(){let t=0,e=0;const i=500,s=20,a=()=>{if(this.isBlock)return this.isRun=!1,void(this.isBlock=!1);e<this.lines[this.lang][t].length?(this.displayLines.splice(t,1,this.displayLines[t]+this.lines[this.lang][t][e]),e++,setTimeout(a,s)):(e=0,t++,t<this.lines[this.lang].length?(this.isRun=!0,setTimeout(o,i)):this.isRun=!1)},o=()=>{setTimeout(a,s)};o()}},computed:{lang(){return this.$i18n.locale}},watch:{lang(){this.isRun&&(this.isBlock=!0),setTimeout((()=>{void 0!==this.lines[this.lang][0]&&(this.displayLines=this.lines[this.lang].map((()=>"")),this.startLoadingEffect())}),500)}},created(){},mounted(){this.$globalProperty.settings.initialLoad?this.displayLines=this.lines[this.lang]:setTimeout((()=>{void 0!==this.lines[this.lang][0]&&(this.displayLines=this.lines[this.lang].map((()=>"")),this.startLoadingEffect(),this.$globalProperty.settings.initialLoad=!0)}),500)},beforeDestroy(){}},v=f,C=(0,h.A)(v,m,g,!1,null,"ebaca562",null),L=C.exports,P=i(2388),T={name:"AudioPlayer",components:{CdReader:y,LikeCom:P.A,ProgramLoading:L},data(){return{playModeIndex:1,playModeMap:{1:"loopList",2:"singleLoop",3:"shufflePlay",4:"sequentialPlay"},soundName:"",soundImage:null,frequencyChart:null,frequencyOption:null}},methods:{playAudio(){if(0===this.playList.length)return this.$message.warning(this.$t("emptyList"));this.currentPlayId?this.$store.commit("player/activeTogglePlayStateTrigger",!this.playState):(this.$store.commit("player/updateCurrentPlayIndex",0),this.$store.commit("player/activeFirstPlayAudioTrigger"))},togglePlayMode(){this.playModeIndex<Object.keys(this.playModeMap).length?this.playModeIndex+=1:this.playModeIndex=1;const t=this.playModeMap[this.playModeIndex];this.$store.commit("player/activeTogglePlayModeTrigger",t),this.$notify({title:this.$t("playMode"),message:this.$t(t),position:"bottom-right",showClose:!1,duration:2500})},toggleAudio(t){return 0===this.playList.length?this.$message.warning(this.$t("emptyList")):1===this.playList.length?this.$message.warning(this.$t("listSingleAudio")):void this.$store.commit("player/activeSwitchAudioTrigger",t)},progressBarFormatTimeUtil(t){const e=Math.floor(t/60),i=t%60,s=String(e).padStart(2,"0"),a=String(i).padStart(2,"0");return`${s}:${a}`},setFrequencyOption(){const t=[];for(let e=0;e<64;e++){const i=5.625*e;t.push(`hsl(${i}, 100%, 50%)`)}this.frequencyOption={xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,max:255,min:0},grid:{left:"0",right:"0",top:"0",bottom:"0"},animation:!1,cursor:"default",series:[{data:[],type:"bar",barCategoryGap:1,itemStyle:{color:function(e){return t[e.dataIndex]}},emphasis:{disabled:!0}}]}},createVisualizeAudio(){this.frequencyChart=o.Ts(document.getElementById("frequencyChart")),this.setFrequencyOption(),this.frequencyChart&&this.frequencyChart.setOption(this.frequencyOption);let t=null;window.onresize=()=>{null===t&&(t=setTimeout((()=>{this.setFrequencyOption(),this.frequencyChart&&this.frequencyChart.setOption(this.frequencyOption),this.frequencyChart.resize(),t=null}),50))}},vwImitate(t,e=1920){const i=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return t/e*i}},computed:{...(0,n.aH)("player",{playState:t=>t.playState,playList:t=>t.playList,currentPlayId:t=>t.currentPlayId,audioAnalyser:t=>t.audioAnalyser,audioVisualizationTrigger:t=>t.audioVisualizationTrigger,resetPlayerTrigger:t=>t.resetPlayerTrigger}),volume:{get(){return this.$store.state.player.volume},set(t){this.$store.commit("player/updateVolume",t)}},playMode(){return this.$store.state.player.playMode},audioCurrentTime:{get(){return this.$store.state.player.audioTime.currentTime},set(t){this.$store.commit("player/updateAudioTime",{currentTime:t})}},audioTotalDuration(){return this.$store.state.player.audioTime.totalDuration}},watch:{currentPlayId:{handler(){if(this.currentPlayId){const t=this.playList.find((t=>t.soundId===this.currentPlayId));this.soundName=t.soundName,this.soundImage=t.albumImage}else this.soundName="",this.soundImage=null},immediate:!0},audioVisualizationTrigger(){this.audioByteFrequencyData=new Uint8Array(this.audioAnalyser.frequencyBinCount),this.audioAnalyser.getByteFrequencyData(this.audioByteFrequencyData);const t=Array.from(this.audioByteFrequencyData);this.frequencyOption.series[0].data=t,this.frequencyChart&&this.frequencyChart.setOption(this.frequencyOption)},resetPlayerTrigger(){this.$nextTick((()=>{this.frequencyOption.series[0].data=[],this.frequencyChart&&this.frequencyChart.setOption(this.frequencyOption)}))}},created(){Object.keys(this.playModeMap).forEach((t=>{this.playModeMap[t]===this.playMode&&(this.playModeIndex=+t)}))},mounted(){this.createVisualizeAudio()},beforeDestroy(){}},M=T,_=i(7746),q=i.n(_),A=q(),I=(0,h.A)(M,s,a,!1,null,"7f762fb5",null);"function"===typeof A&&A(I);var b=I.exports}}]);