(self["webpackChunkvue_template_lyl"]=self["webpackChunkvue_template_lyl"]||[]).push([[637],{619:function(t,e,n){var i,r;n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(4339),n(4979),
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
function(){"use strict";var o=function(){this.init()};o.prototype={init:function(){var t=this||a;return t._counter=1e3,t._html5AudioPool=[],t.html5PoolSize=10,t._codecs={},t._howls=[],t._muted=!1,t._volume=1,t._canPlayEvent="canplaythrough",t._navigator="undefined"!==typeof window&&window.navigator?window.navigator:null,t.masterGain=null,t.noAudio=!1,t.usingWebAudio=!0,t.autoSuspend=!0,t.ctx=null,t.autoUnlock=!0,t._setup(),t},volume:function(t){var e=this||a;if(t=parseFloat(t),e.ctx||f(),"undefined"!==typeof t&&t>=0&&t<=1){if(e._volume=t,e._muted)return e;e.usingWebAudio&&e.masterGain.gain.setValueAtTime(t,a.ctx.currentTime);for(var n=0;n<e._howls.length;n++)if(!e._howls[n]._webAudio)for(var i=e._howls[n]._getSoundIds(),r=0;r<i.length;r++){var o=e._howls[n]._soundById(i[r]);o&&o._node&&(o._node.volume=o._volume*t)}return e}return e._volume},mute:function(t){var e=this||a;e.ctx||f(),e._muted=t,e.usingWebAudio&&e.masterGain.gain.setValueAtTime(t?0:e._volume,a.ctx.currentTime);for(var n=0;n<e._howls.length;n++)if(!e._howls[n]._webAudio)for(var i=e._howls[n]._getSoundIds(),r=0;r<i.length;r++){var o=e._howls[n]._soundById(i[r]);o&&o._node&&(o._node.muted=!!t||o._muted)}return e},stop:function(){for(var t=this||a,e=0;e<t._howls.length;e++)t._howls[e].stop();return t},unload:function(){for(var t=this||a,e=t._howls.length-1;e>=0;e--)t._howls[e].unload();return t.usingWebAudio&&t.ctx&&"undefined"!==typeof t.ctx.close&&(t.ctx.close(),t.ctx=null,f()),t},codecs:function(t){return(this||a)._codecs[t.replace(/^x-/,"")]},_setup:function(){var t=this||a;if(t.state=t.ctx&&t.ctx.state||"suspended",t._autoSuspend(),!t.usingWebAudio)if("undefined"!==typeof Audio)try{var e=new Audio;"undefined"===typeof e.oncanplaythrough&&(t._canPlayEvent="canplay")}catch(n){t.noAudio=!0}else t.noAudio=!0;try{e=new Audio;e.muted&&(t.noAudio=!0)}catch(n){}return t.noAudio||t._setupCodecs(),t},_setupCodecs:function(){var t=this||a,e=null;try{e="undefined"!==typeof Audio?new Audio:null}catch(h){return t}if(!e||"function"!==typeof e.canPlayType)return t;var n=e.canPlayType("audio/mpeg;").replace(/^no$/,""),i=t._navigator?t._navigator.userAgent:"",r=i.match(/OPR\/(\d+)/g),o=r&&parseInt(r[0].split("/")[1],10)<33,s=-1!==i.indexOf("Safari")&&-1===i.indexOf("Chrome"),l=i.match(/Version\/(.*?) /),u=s&&l&&parseInt(l[1],10)<15;return t._codecs={mp3:!(o||!n&&!e.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!n,opus:!!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(e.canPlayType('audio/wav; codecs="1"')||e.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!e.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!e.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(e.canPlayType("audio/x-m4b;")||e.canPlayType("audio/m4b;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(e.canPlayType("audio/x-mp4;")||e.canPlayType("audio/mp4;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!(u||!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!(u||!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(e.canPlayType("audio/x-flac;")||e.canPlayType("audio/flac;")).replace(/^no$/,"")},t},_unlockAudio:function(){var t=this||a;if(!t._audioUnlocked&&t.ctx){t._audioUnlocked=!1,t.autoUnlock=!1,t._mobileUnloaded||44100===t.ctx.sampleRate||(t._mobileUnloaded=!0,t.unload()),t._scratchBuffer=t.ctx.createBuffer(1,1,22050);var e=function(n){while(t._html5AudioPool.length<t.html5PoolSize)try{var i=new Audio;i._unlocked=!0,t._releaseHtml5Audio(i)}catch(n){t.noAudio=!0;break}for(var r=0;r<t._howls.length;r++)if(!t._howls[r]._webAudio)for(var o=t._howls[r]._getSoundIds(),a=0;a<o.length;a++){var s=t._howls[r]._soundById(o[a]);s&&s._node&&!s._node._unlocked&&(s._node._unlocked=!0,s._node.load())}t._autoResume();var l=t.ctx.createBufferSource();l.buffer=t._scratchBuffer,l.connect(t.ctx.destination),"undefined"===typeof l.start?l.noteOn(0):l.start(0),"function"===typeof t.ctx.resume&&t.ctx.resume(),l.onended=function(){l.disconnect(0),t._audioUnlocked=!0,document.removeEventListener("touchstart",e,!0),document.removeEventListener("touchend",e,!0),document.removeEventListener("click",e,!0),document.removeEventListener("keydown",e,!0);for(var n=0;n<t._howls.length;n++)t._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",e,!0),document.addEventListener("touchend",e,!0),document.addEventListener("click",e,!0),document.addEventListener("keydown",e,!0),t}},_obtainHtml5Audio:function(){var t=this||a;if(t._html5AudioPool.length)return t._html5AudioPool.pop();var e=(new Audio).play();return e&&"undefined"!==typeof Promise&&(e instanceof Promise||"function"===typeof e.then)&&e.catch((function(){})),new Audio},_releaseHtml5Audio:function(t){var e=this||a;return t._unlocked&&e._html5AudioPool.push(t),e},_autoSuspend:function(){var t=this;if(t.autoSuspend&&t.ctx&&"undefined"!==typeof t.ctx.suspend&&a.usingWebAudio){for(var e=0;e<t._howls.length;e++)if(t._howls[e]._webAudio)for(var n=0;n<t._howls[e]._sounds.length;n++)if(!t._howls[e]._sounds[n]._paused)return t;return t._suspendTimer&&clearTimeout(t._suspendTimer),t._suspendTimer=setTimeout((function(){if(t.autoSuspend){t._suspendTimer=null,t.state="suspending";var e=function(){t.state="suspended",t._resumeAfterSuspend&&(delete t._resumeAfterSuspend,t._autoResume())};t.ctx.suspend().then(e,e)}}),3e4),t}},_autoResume:function(){var t=this;if(t.ctx&&"undefined"!==typeof t.ctx.resume&&a.usingWebAudio)return"running"===t.state&&"interrupted"!==t.ctx.state&&t._suspendTimer?(clearTimeout(t._suspendTimer),t._suspendTimer=null):"suspended"===t.state||"running"===t.state&&"interrupted"===t.ctx.state?(t.ctx.resume().then((function(){t.state="running";for(var e=0;e<t._howls.length;e++)t._howls[e]._emit("resume")})),t._suspendTimer&&(clearTimeout(t._suspendTimer),t._suspendTimer=null)):"suspending"===t.state&&(t._resumeAfterSuspend=!0),t}};var a=new o,s=function(t){var e=this;t.src&&0!==t.src.length&&e.init(t)};s.prototype={init:function(t){var e=this;return a.ctx||f(),e._autoplay=t.autoplay||!1,e._format="string"!==typeof t.format?t.format:[t.format],e._html5=t.html5||!1,e._muted=t.mute||!1,e._loop=t.loop||!1,e._pool=t.pool||5,e._preload="boolean"!==typeof t.preload&&"metadata"!==t.preload||t.preload,e._rate=t.rate||1,e._sprite=t.sprite||{},e._src="string"!==typeof t.src?t.src:[t.src],e._volume=void 0!==t.volume?t.volume:1,e._xhr={method:t.xhr&&t.xhr.method?t.xhr.method:"GET",headers:t.xhr&&t.xhr.headers?t.xhr.headers:null,withCredentials:!(!t.xhr||!t.xhr.withCredentials)&&t.xhr.withCredentials},e._duration=0,e._state="unloaded",e._sounds=[],e._endTimers={},e._queue=[],e._playLock=!1,e._onend=t.onend?[{fn:t.onend}]:[],e._onfade=t.onfade?[{fn:t.onfade}]:[],e._onload=t.onload?[{fn:t.onload}]:[],e._onloaderror=t.onloaderror?[{fn:t.onloaderror}]:[],e._onplayerror=t.onplayerror?[{fn:t.onplayerror}]:[],e._onpause=t.onpause?[{fn:t.onpause}]:[],e._onplay=t.onplay?[{fn:t.onplay}]:[],e._onstop=t.onstop?[{fn:t.onstop}]:[],e._onmute=t.onmute?[{fn:t.onmute}]:[],e._onvolume=t.onvolume?[{fn:t.onvolume}]:[],e._onrate=t.onrate?[{fn:t.onrate}]:[],e._onseek=t.onseek?[{fn:t.onseek}]:[],e._onunlock=t.onunlock?[{fn:t.onunlock}]:[],e._onresume=[],e._webAudio=a.usingWebAudio&&!e._html5,"undefined"!==typeof a.ctx&&a.ctx&&a.autoUnlock&&a._unlockAudio(),a._howls.push(e),e._autoplay&&e._queue.push({event:"play",action:function(){e.play()}}),e._preload&&"none"!==e._preload&&e.load(),e},load:function(){var t=this,e=null;if(a.noAudio)t._emit("loaderror",null,"No audio support.");else{"string"===typeof t._src&&(t._src=[t._src]);for(var n=0;n<t._src.length;n++){var i,r;if(t._format&&t._format[n])i=t._format[n];else{if(r=t._src[n],"string"!==typeof r){t._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}i=/^data:audio\/([^;,]+);/i.exec(r),i||(i=/\.([^.]+)$/.exec(r.split("?",1)[0])),i&&(i=i[1].toLowerCase())}if(i&&a.codecs(i)){e=t._src[n];break}}if(e)return t._src=e,t._state="loading","https:"===window.location.protocol&&"http:"===e.slice(0,5)&&(t._html5=!0,t._webAudio=!1),new l(t),t._webAudio&&h(t),t;t._emit("loaderror",null,"No codec support for selected audio sources.")}},play:function(t,e){var n=this,i=null;if("number"===typeof t)i=t,t=null;else{if("string"===typeof t&&"loaded"===n._state&&!n._sprite[t])return null;if("undefined"===typeof t&&(t="__default",!n._playLock)){for(var r=0,o=0;o<n._sounds.length;o++)n._sounds[o]._paused&&!n._sounds[o]._ended&&(r++,i=n._sounds[o]._id);1===r?t=null:i=null}}var s=i?n._soundById(i):n._inactiveSound();if(!s)return null;if(i&&!t&&(t=s._sprite||"__default"),"loaded"!==n._state){s._sprite=t,s._ended=!1;var l=s._id;return n._queue.push({event:"play",action:function(){n.play(l)}}),l}if(i&&!s._paused)return e||n._loadQueue("play"),s._id;n._webAudio&&a._autoResume();var u=Math.max(0,s._seek>0?s._seek:n._sprite[t][0]/1e3),h=Math.max(0,(n._sprite[t][0]+n._sprite[t][1])/1e3-u),c=1e3*h/Math.abs(s._rate),d=n._sprite[t][0]/1e3,p=(n._sprite[t][0]+n._sprite[t][1])/1e3;s._sprite=t,s._ended=!1;var f=function(){s._paused=!1,s._seek=u,s._start=d,s._stop=p,s._loop=!(!s._loop&&!n._sprite[t][2])};if(!(u>=p)){var g=s._node;if(n._webAudio){var y=function(){n._playLock=!1,f(),n._refreshBuffer(s);var t=s._muted||n._muted?0:s._volume;g.gain.setValueAtTime(t,a.ctx.currentTime),s._playStart=a.ctx.currentTime,"undefined"===typeof g.bufferSource.start?s._loop?g.bufferSource.noteGrainOn(0,u,86400):g.bufferSource.noteGrainOn(0,u,h):s._loop?g.bufferSource.start(0,u,86400):g.bufferSource.start(0,u,h),c!==1/0&&(n._endTimers[s._id]=setTimeout(n._ended.bind(n,s),c)),e||setTimeout((function(){n._emit("play",s._id),n._loadQueue()}),0)};"running"===a.state&&"interrupted"!==a.ctx.state?y():(n._playLock=!0,n.once("resume",y),n._clearTimer(s._id))}else{var v=function(){g.currentTime=u,g.muted=s._muted||n._muted||a._muted||g.muted,g.volume=s._volume*a.volume(),g.playbackRate=s._rate;try{var i=g.play();if(i&&"undefined"!==typeof Promise&&(i instanceof Promise||"function"===typeof i.then)?(n._playLock=!0,f(),i.then((function(){n._playLock=!1,g._unlocked=!0,e?n._loadQueue():n._emit("play",s._id)})).catch((function(){n._playLock=!1,n._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),s._ended=!0,s._paused=!0}))):e||(n._playLock=!1,f(),n._emit("play",s._id)),g.playbackRate=s._rate,g.paused)return void n._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==t||s._loop?n._endTimers[s._id]=setTimeout(n._ended.bind(n,s),c):(n._endTimers[s._id]=function(){n._ended(s),g.removeEventListener("ended",n._endTimers[s._id],!1)},g.addEventListener("ended",n._endTimers[s._id],!1))}catch(r){n._emit("playerror",s._id,r)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===g.src&&(g.src=n._src,g.load());var m=window&&window.ejecta||!g.readyState&&a._navigator.isCocoonJS;if(g.readyState>=3||m)v();else{n._playLock=!0,n._state="loading";var _=function(){n._state="loaded",v(),g.removeEventListener(a._canPlayEvent,_,!1)};g.addEventListener(a._canPlayEvent,_,!1),n._clearTimer(s._id)}}return s._id}n._ended(s)},pause:function(t){var e=this;if("loaded"!==e._state||e._playLock)return e._queue.push({event:"pause",action:function(){e.pause(t)}}),e;for(var n=e._getSoundIds(t),i=0;i<n.length;i++){e._clearTimer(n[i]);var r=e._soundById(n[i]);if(r&&!r._paused&&(r._seek=e.seek(n[i]),r._rateSeek=0,r._paused=!0,e._stopFade(n[i]),r._node))if(e._webAudio){if(!r._node.bufferSource)continue;"undefined"===typeof r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),e._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||e._emit("pause",r?r._id:null)}return e},stop:function(t,e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(t)}}),n;for(var i=n._getSoundIds(t),r=0;r<i.length;r++){n._clearTimer(i[r]);var o=n._soundById(i[r]);o&&(o._seek=o._start||0,o._rateSeek=0,o._paused=!0,o._ended=!0,n._stopFade(i[r]),o._node&&(n._webAudio?o._node.bufferSource&&("undefined"===typeof o._node.bufferSource.stop?o._node.bufferSource.noteOff(0):o._node.bufferSource.stop(0),n._cleanBuffer(o._node)):isNaN(o._node.duration)&&o._node.duration!==1/0||(o._node.currentTime=o._start||0,o._node.pause(),o._node.duration===1/0&&n._clearSound(o._node))),e||n._emit("stop",o._id))}return n},mute:function(t,e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(t,e)}}),n;if("undefined"===typeof e){if("boolean"!==typeof t)return n._muted;n._muted=t}for(var i=n._getSoundIds(e),r=0;r<i.length;r++){var o=n._soundById(i[r]);o&&(o._muted=t,o._interval&&n._stopFade(o._id),n._webAudio&&o._node?o._node.gain.setValueAtTime(t?0:o._volume,a.ctx.currentTime):o._node&&(o._node.muted=!!a._muted||t),n._emit("mute",o._id))}return n},volume:function(){var t,e,n,i=this,r=arguments;if(0===r.length)return i._volume;if(1===r.length||2===r.length&&"undefined"===typeof r[1]){var o=i._getSoundIds(),s=o.indexOf(r[0]);s>=0?e=parseInt(r[0],10):t=parseFloat(r[0])}else r.length>=2&&(t=parseFloat(r[0]),e=parseInt(r[1],10));if(!("undefined"!==typeof t&&t>=0&&t<=1))return n=e?i._soundById(e):i._sounds[0],n?n._volume:0;if("loaded"!==i._state||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,r)}}),i;"undefined"===typeof e&&(i._volume=t),e=i._getSoundIds(e);for(var l=0;l<e.length;l++)n=i._soundById(e[l]),n&&(n._volume=t,r[2]||i._stopFade(e[l]),i._webAudio&&n._node&&!n._muted?n._node.gain.setValueAtTime(t,a.ctx.currentTime):n._node&&!n._muted&&(n._node.volume=t*a.volume()),i._emit("volume",n._id));return i},fade:function(t,e,n,i){var r=this;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"fade",action:function(){r.fade(t,e,n,i)}}),r;t=Math.min(Math.max(0,parseFloat(t)),1),e=Math.min(Math.max(0,parseFloat(e)),1),n=parseFloat(n),r.volume(t,i);for(var o=r._getSoundIds(i),s=0;s<o.length;s++){var l=r._soundById(o[s]);if(l){if(i||r._stopFade(o[s]),r._webAudio&&!l._muted){var u=a.ctx.currentTime,h=u+n/1e3;l._volume=t,l._node.gain.setValueAtTime(t,u),l._node.gain.linearRampToValueAtTime(e,h)}r._startFadeInterval(l,t,e,n,o[s],"undefined"===typeof i)}}return r},_startFadeInterval:function(t,e,n,i,r,o){var a=this,s=e,l=n-e,u=Math.abs(l/.01),h=Math.max(4,u>0?i/u:i),c=Date.now();t._fadeTo=n,t._interval=setInterval((function(){var r=(Date.now()-c)/i;c=Date.now(),s+=l*r,s=Math.round(100*s)/100,s=l<0?Math.max(n,s):Math.min(n,s),a._webAudio?t._volume=s:a.volume(s,t._id,!0),o&&(a._volume=s),(n<e&&s<=n||n>e&&s>=n)&&(clearInterval(t._interval),t._interval=null,t._fadeTo=null,a.volume(n,t._id),a._emit("fade",t._id))}),h)},_stopFade:function(t){var e=this,n=e._soundById(t);return n&&n._interval&&(e._webAudio&&n._node.gain.cancelScheduledValues(a.ctx.currentTime),clearInterval(n._interval),n._interval=null,e.volume(n._fadeTo,t),n._fadeTo=null,e._emit("fade",t)),e},loop:function(){var t,e,n,i=this,r=arguments;if(0===r.length)return i._loop;if(1===r.length){if("boolean"!==typeof r[0])return n=i._soundById(parseInt(r[0],10)),!!n&&n._loop;t=r[0],i._loop=t}else 2===r.length&&(t=r[0],e=parseInt(r[1],10));for(var o=i._getSoundIds(e),a=0;a<o.length;a++)n=i._soundById(o[a]),n&&(n._loop=t,i._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=t,t&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop,i.playing(o[a])&&(i.pause(o[a],!0),i.play(o[a],!0)))));return i},rate:function(){var t,e,n,i=this,r=arguments;if(0===r.length)e=i._sounds[0]._id;else if(1===r.length){var o=i._getSoundIds(),s=o.indexOf(r[0]);s>=0?e=parseInt(r[0],10):t=parseFloat(r[0])}else 2===r.length&&(t=parseFloat(r[0]),e=parseInt(r[1],10));if("number"!==typeof t)return n=i._soundById(e),n?n._rate:i._rate;if("loaded"!==i._state||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,r)}}),i;"undefined"===typeof e&&(i._rate=t),e=i._getSoundIds(e);for(var l=0;l<e.length;l++)if(n=i._soundById(e[l]),n){i.playing(e[l])&&(n._rateSeek=i.seek(e[l]),n._playStart=i._webAudio?a.ctx.currentTime:n._playStart),n._rate=t,i._webAudio&&n._node&&n._node.bufferSource?n._node.bufferSource.playbackRate.setValueAtTime(t,a.ctx.currentTime):n._node&&(n._node.playbackRate=t);var u=i.seek(e[l]),h=(i._sprite[n._sprite][0]+i._sprite[n._sprite][1])/1e3-u,c=1e3*h/Math.abs(n._rate);!i._endTimers[e[l]]&&n._paused||(i._clearTimer(e[l]),i._endTimers[e[l]]=setTimeout(i._ended.bind(i,n),c)),i._emit("rate",n._id)}return i},seek:function(){var t,e,n=this,i=arguments;if(0===i.length)n._sounds.length&&(e=n._sounds[0]._id);else if(1===i.length){var r=n._getSoundIds(),o=r.indexOf(i[0]);o>=0?e=parseInt(i[0],10):n._sounds.length&&(e=n._sounds[0]._id,t=parseFloat(i[0]))}else 2===i.length&&(t=parseFloat(i[0]),e=parseInt(i[1],10));if("undefined"===typeof e)return 0;if("number"===typeof t&&("loaded"!==n._state||n._playLock))return n._queue.push({event:"seek",action:function(){n.seek.apply(n,i)}}),n;var s=n._soundById(e);if(s){if(!("number"===typeof t&&t>=0)){if(n._webAudio){var l=n.playing(e)?a.ctx.currentTime-s._playStart:0,u=s._rateSeek?s._rateSeek-s._seek:0;return s._seek+(u+l*Math.abs(s._rate))}return s._node.currentTime}var h=n.playing(e);h&&n.pause(e,!0),s._seek=t,s._ended=!1,n._clearTimer(e),n._webAudio||!s._node||isNaN(s._node.duration)||(s._node.currentTime=t);var c=function(){h&&n.play(e,!0),n._emit("seek",e)};if(h&&!n._webAudio){var d=function(){n._playLock?setTimeout(d,0):c()};setTimeout(d,0)}else c()}return n},playing:function(t){var e=this;if("number"===typeof t){var n=e._soundById(t);return!!n&&!n._paused}for(var i=0;i<e._sounds.length;i++)if(!e._sounds[i]._paused)return!0;return!1},duration:function(t){var e=this,n=e._duration,i=e._soundById(t);return i&&(n=e._sprite[i._sprite][1]/1e3),n},state:function(){return this._state},unload:function(){for(var t=this,e=t._sounds,n=0;n<e.length;n++)e[n]._paused||t.stop(e[n]._id),t._webAudio||(t._clearSound(e[n]._node),e[n]._node.removeEventListener("error",e[n]._errorFn,!1),e[n]._node.removeEventListener(a._canPlayEvent,e[n]._loadFn,!1),e[n]._node.removeEventListener("ended",e[n]._endFn,!1),a._releaseHtml5Audio(e[n]._node)),delete e[n]._node,t._clearTimer(e[n]._id);var i=a._howls.indexOf(t);i>=0&&a._howls.splice(i,1);var r=!0;for(n=0;n<a._howls.length;n++)if(a._howls[n]._src===t._src||t._src.indexOf(a._howls[n]._src)>=0){r=!1;break}return u&&r&&delete u[t._src],a.noAudio=!1,t._state="unloaded",t._sounds=[],t=null,null},on:function(t,e,n,i){var r=this,o=r["_on"+t];return"function"===typeof e&&o.push(i?{id:n,fn:e,once:i}:{id:n,fn:e}),r},off:function(t,e,n){var i=this,r=i["_on"+t],o=0;if("number"===typeof e&&(n=e,e=null),e||n)for(o=0;o<r.length;o++){var a=n===r[o].id;if(e===r[o].fn&&a||!e&&a){r.splice(o,1);break}}else if(t)i["_on"+t]=[];else{var s=Object.keys(i);for(o=0;o<s.length;o++)0===s[o].indexOf("_on")&&Array.isArray(i[s[o]])&&(i[s[o]]=[])}return i},once:function(t,e,n){var i=this;return i.on(t,e,n,1),i},_emit:function(t,e,n){for(var i=this,r=i["_on"+t],o=r.length-1;o>=0;o--)r[o].id&&r[o].id!==e&&"load"!==t||(setTimeout(function(t){t.call(this,e,n)}.bind(i,r[o].fn),0),r[o].once&&i.off(t,r[o].fn,r[o].id));return i._loadQueue(t),i},_loadQueue:function(t){var e=this;if(e._queue.length>0){var n=e._queue[0];n.event===t&&(e._queue.shift(),e._loadQueue()),t||n.action()}return e},_ended:function(t){var e=this,n=t._sprite;if(!e._webAudio&&t._node&&!t._node.paused&&!t._node.ended&&t._node.currentTime<t._stop)return setTimeout(e._ended.bind(e,t),100),e;var i=!(!t._loop&&!e._sprite[n][2]);if(e._emit("end",t._id),!e._webAudio&&i&&e.stop(t._id,!0).play(t._id),e._webAudio&&i){e._emit("play",t._id),t._seek=t._start||0,t._rateSeek=0,t._playStart=a.ctx.currentTime;var r=1e3*(t._stop-t._start)/Math.abs(t._rate);e._endTimers[t._id]=setTimeout(e._ended.bind(e,t),r)}return e._webAudio&&!i&&(t._paused=!0,t._ended=!0,t._seek=t._start||0,t._rateSeek=0,e._clearTimer(t._id),e._cleanBuffer(t._node),a._autoSuspend()),e._webAudio||i||e.stop(t._id,!0),e},_clearTimer:function(t){var e=this;if(e._endTimers[t]){if("function"!==typeof e._endTimers[t])clearTimeout(e._endTimers[t]);else{var n=e._soundById(t);n&&n._node&&n._node.removeEventListener("ended",e._endTimers[t],!1)}delete e._endTimers[t]}return e},_soundById:function(t){for(var e=this,n=0;n<e._sounds.length;n++)if(t===e._sounds[n]._id)return e._sounds[n];return null},_inactiveSound:function(){var t=this;t._drain();for(var e=0;e<t._sounds.length;e++)if(t._sounds[e]._ended)return t._sounds[e].reset();return new l(t)},_drain:function(){var t=this,e=t._pool,n=0,i=0;if(!(t._sounds.length<e)){for(i=0;i<t._sounds.length;i++)t._sounds[i]._ended&&n++;for(i=t._sounds.length-1;i>=0;i--){if(n<=e)return;t._sounds[i]._ended&&(t._webAudio&&t._sounds[i]._node&&t._sounds[i]._node.disconnect(0),t._sounds.splice(i,1),n--)}}},_getSoundIds:function(t){var e=this;if("undefined"===typeof t){for(var n=[],i=0;i<e._sounds.length;i++)n.push(e._sounds[i]._id);return n}return[t]},_refreshBuffer:function(t){var e=this;return t._node.bufferSource=a.ctx.createBufferSource(),t._node.bufferSource.buffer=u[e._src],t._panner?t._node.bufferSource.connect(t._panner):t._node.bufferSource.connect(t._node),t._node.bufferSource.loop=t._loop,t._loop&&(t._node.bufferSource.loopStart=t._start||0,t._node.bufferSource.loopEnd=t._stop||0),t._node.bufferSource.playbackRate.setValueAtTime(t._rate,a.ctx.currentTime),e},_cleanBuffer:function(t){var e=this,n=a._navigator&&a._navigator.vendor.indexOf("Apple")>=0;if(!t.bufferSource)return e;if(a._scratchBuffer&&t.bufferSource&&(t.bufferSource.onended=null,t.bufferSource.disconnect(0),n))try{t.bufferSource.buffer=a._scratchBuffer}catch(i){}return t.bufferSource=null,e},_clearSound:function(t){var e=/MSIE |Trident\//.test(a._navigator&&a._navigator.userAgent);e||(t.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(t){this._parent=t,this.init()};l.prototype={init:function(){var t=this,e=t._parent;return t._muted=e._muted,t._loop=e._loop,t._volume=e._volume,t._rate=e._rate,t._seek=0,t._paused=!0,t._ended=!0,t._sprite="__default",t._id=++a._counter,e._sounds.push(t),t.create(),t},create:function(){var t=this,e=t._parent,n=a._muted||t._muted||t._parent._muted?0:t._volume;return e._webAudio?(t._node="undefined"===typeof a.ctx.createGain?a.ctx.createGainNode():a.ctx.createGain(),t._node.gain.setValueAtTime(n,a.ctx.currentTime),t._node.paused=!0,t._node.connect(a.masterGain)):a.noAudio||(t._node=a._obtainHtml5Audio(),t._errorFn=t._errorListener.bind(t),t._node.addEventListener("error",t._errorFn,!1),t._loadFn=t._loadListener.bind(t),t._node.addEventListener(a._canPlayEvent,t._loadFn,!1),t._endFn=t._endListener.bind(t),t._node.addEventListener("ended",t._endFn,!1),t._node.src=e._src,t._node.preload=!0===e._preload?"auto":e._preload,t._node.volume=n*a.volume(),t._node.load()),t},reset:function(){var t=this,e=t._parent;return t._muted=e._muted,t._loop=e._loop,t._volume=e._volume,t._rate=e._rate,t._seek=0,t._rateSeek=0,t._paused=!0,t._ended=!0,t._sprite="__default",t._id=++a._counter,t},_errorListener:function(){var t=this;t._parent._emit("loaderror",t._id,t._node.error?t._node.error.code:0),t._node.removeEventListener("error",t._errorFn,!1)},_loadListener:function(){var t=this,e=t._parent;e._duration=Math.ceil(10*t._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),t._node.removeEventListener(a._canPlayEvent,t._loadFn,!1)},_endListener:function(){var t=this,e=t._parent;e._duration===1/0&&(e._duration=Math.ceil(10*t._node.duration)/10,e._sprite.__default[1]===1/0&&(e._sprite.__default[1]=1e3*e._duration),e._ended(t)),t._node.removeEventListener("ended",t._endFn,!1)}};var u={},h=function(t){var e=t._src;if(u[e])return t._duration=u[e].duration,void p(t);if(/^data:[^;]+;base64,/.test(e)){for(var n=atob(e.split(",")[1]),i=new Uint8Array(n.length),r=0;r<n.length;++r)i[r]=n.charCodeAt(r);d(i.buffer,t)}else{var o=new XMLHttpRequest;o.open(t._xhr.method,e,!0),o.withCredentials=t._xhr.withCredentials,o.responseType="arraybuffer",t._xhr.headers&&Object.keys(t._xhr.headers).forEach((function(e){o.setRequestHeader(e,t._xhr.headers[e])})),o.onload=function(){var e=(o.status+"")[0];"0"===e||"2"===e||"3"===e?d(o.response,t):t._emit("loaderror",null,"Failed loading audio file with status: "+o.status+".")},o.onerror=function(){t._webAudio&&(t._html5=!0,t._webAudio=!1,t._sounds=[],delete u[e],t.load())},c(o)}},c=function(t){try{t.send()}catch(e){t.onerror()}},d=function(t,e){var n=function(){e._emit("loaderror",null,"Decoding audio data failed.")},i=function(t){t&&e._sounds.length>0?(u[e._src]=t,p(e,t)):n()};"undefined"!==typeof Promise&&1===a.ctx.decodeAudioData.length?a.ctx.decodeAudioData(t).then(i).catch(n):a.ctx.decodeAudioData(t,i,n)},p=function(t,e){e&&!t._duration&&(t._duration=e.duration),0===Object.keys(t._sprite).length&&(t._sprite={__default:[0,1e3*t._duration]}),"loaded"!==t._state&&(t._state="loaded",t._emit("load"),t._loadQueue())},f=function(){if(a.usingWebAudio){try{"undefined"!==typeof AudioContext?a.ctx=new AudioContext:"undefined"!==typeof webkitAudioContext?a.ctx=new webkitAudioContext:a.usingWebAudio=!1}catch(r){a.usingWebAudio=!1}a.ctx||(a.usingWebAudio=!1);var t=/iP(hone|od|ad)/.test(a._navigator&&a._navigator.platform),e=a._navigator&&a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=e?parseInt(e[1],10):null;if(t&&n&&n<9){var i=/safari/.test(a._navigator&&a._navigator.userAgent.toLowerCase());a._navigator&&!i&&(a.usingWebAudio=!1)}a.usingWebAudio&&(a.masterGain="undefined"===typeof a.ctx.createGain?a.ctx.createGainNode():a.ctx.createGain(),a.masterGain.gain.setValueAtTime(a._muted?0:a._volume,a.ctx.currentTime),a.masterGain.connect(a.ctx.destination)),a._setup()}};i=[],r=function(){return{Howler:a,Howl:s}}.apply(e,i),void 0===r||(t.exports=r),e.Howler=a,e.Howl=s,"undefined"!==typeof n.g?(n.g.HowlerGlobal=o,n.g.Howler=a,n.g.Howl=s,n.g.Sound=l):"undefined"!==typeof window&&(window.HowlerGlobal=o,window.Howler=a,window.Howl=s,window.Sound=l)}(),
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */