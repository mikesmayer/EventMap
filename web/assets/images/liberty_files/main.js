/**
 * © 2015 Cedexis Inc.
 * Radar JavaScript client
 * Application Version: 0.1.176
 * Build Timestamp: 1439573060
 */
(function(window,document){'use strict';function m(g){var h=g.Ra||18,f=g.Sa||18,c,e,k,l;this.g=g.w;this.fa=g.samplerId;this.F=[];this.g.cedexis=this.g.cedexis||{};this.g.cedexis.callbacks=this.g.cedexis.callbacks||[];this.ta=function(){return c};this.ua=function(){return document};this.ma=function(a,b){for(var d=[],c=0;100>c&&(0<a.length||0<b.length);)0<a.length&&d.push(a.shift()),0<b.length&&d.push(b.shift()),c+=1;return d};this.C=function(){return(new Date).getTime()};this.h=function(a,b){return setTimeout(a,b)};this.j=function(a){clearTimeout(a)};
this.y64enc=this.R=function(){return function(a){var b="",d,c,e,f,g,h,k=0;a=a.replace(/\r\n/g,"\n");c="";for(e=0;e<a.length;e+=1)f=a.charCodeAt(e),128>f?c+=String.fromCharCode(f):(127<f&&2048>f?c+=String.fromCharCode(f>>6|192):(c+=String.fromCharCode(f>>12|224),c+=String.fromCharCode(f>>6&63|128)),c+=String.fromCharCode(f&63|128));for(a=c;k<a.length;)d=a.charCodeAt(k),k+=1,c=a.charCodeAt(k),k+=1,e=a.charCodeAt(k),k+=1,f=d>>2,d=(d&3)<<4|c>>4,g=(c&15)<<2|e>>6,h=e&63,isNaN(c)?g=h=64:isNaN(e)&&(h=64),
b=b+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".charAt(f)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".charAt(d)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".charAt(g)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".charAt(h);return b}}();this.W=function(a){var b=/radar_(tags|impact)_(\w{3,})/i,d;if(("radar_tags_"===a.slice(0,11)||"radar_impact_"===a.slice(0,13))&&(b=b.exec(a))&&3===b.length){try{d=JSON.stringify(window[a])}catch(c){return null}return b[2]+
":"+this.R(d)}return null};this.v=function(a){var b,d=[];if(!a.includePartnerTags)return"0";if(!window.JSON||!window.JSON.stringify)return"1";for(b in window){a=null;if(void 0!==window.hasOwnProperty)window.hasOwnProperty(b)&&(a=this.W(b));else try{void 0!==window[b]&&(a=this.W(b))}catch(c){}a&&d.push(a)}return 1>d.length?"0":d.join("@")};this.B=function(a){var b=document.getElementById("cdx");b||(b=document.createElement("div"),b.id="cdx",document.body.appendChild(b));b.appendChild(a)};this.X=function(){return Math.random()};
this.wa=function(a){return Math.floor(this.X()*(a-0+1))+0};this.I=function(a,b){var d,c=[];b=b||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(d=0;d<a;d+=1)c.push(b.charAt(this.wa(b.length-1)));return c.join("")};this.ka=function(a){return/http:/i.test(a)?"http":/https:/i.test(a)?"https":/\/\//.test(a)?window.location.protocol.replace(":",""):null};this.ia=function(){var a=[],b=c.p.p,d,e;b.a&&b.a.a?a.push({a:"cold",b:1,f:!!b.d,t:b.a.a.t,u:b.a.a.u}):b.b&&b.b.a&&a.push({a:"cold",
b:1,f:!!b.d,t:b.b.a.t,u:b.b.a.u});b.d&&a.push({a:"uni",t:b.d.t,u:b.d.u});if(b.a)for(b.a.b&&a.push({a:"rtt",b:0,f:!!b.d,t:b.a.b.t,u:b.a.b.u}),e=c.b,d=0;d<e;d++)b.a.c&&a.push({a:"kbps",b:14,f:!!b.d,t:b.a.c.t,u:b.a.c.u,report:e-1===d,probeIdSuffix:0===d?"":String.fromCharCode(97+d)});else if(b.b)for(b.b.b&&a.push({a:"rtt",b:0,f:!!b.d,t:b.b.b.t,u:b.b.b.u}),e=c.b,d=0;d<e;d++)b.b.c&&a.push({a:"kbps",b:14,f:!!b.d,t:b.b.c.t,u:b.b.c.u,report:e-1===d,probeIdSuffix:0===d?"":String.fromCharCode(97+d)});b.c&&
(d=this.ka(b.c.u))&&("http:"!==this.g.location.protocol&&"https"!==d||a.push({a:"custom",b:2,f:!!b.d,t:b.c.t,u:b.c.u}));c.H=a};this.ja=function(a){var b=[];a.connect&&b.push({a:"cold",b:1,f:!1,t:1,u:a.connect});a.response_time&&b.push({a:"rtt",b:0,f:!1,t:1,u:a.response_time});a.kbps&&b.push({a:"kbps",b:14,f:!1,t:1,u:a.kbps});c.H=b};this.Ka=function(a){return"uni"===a?[c.requestor.zoneId,c.requestor.customerId,c.p.z,c.p.c,c.p.i,this.I(8),c.requestor.requestSignature].join("-"):[a,c.requestor.zoneId,
c.requestor.customerId,c.p.z,c.p.c,c.p.i,c.requestor.transactionId,c.requestor.requestSignature].join("-")};this.n=function(a,b){var d="";a=a||e.u;if(!1!==c.a){d="?rnd=";-1<a.indexOf("?",0)&&(d="&rnd=");var f;"uni"===e.a?f="uni":f=e.b+(b||"");d+=this.Ka(f)}return a+d};this.Aa=function(a){var b=a.indexOf("//");if(-1<b){var d=a.substring(b+2),c="//";0<b&&(c=a.substring(0,b)+"//");a=d.split("/");a[0]=this.I(63,"abcdefghijklmnopqrstuvwxyz")+"."+a[0];return c+a.join("/")}return null};this.T=function(a,
b){var d=/(\d+)kb\./i.exec(b);return!d||2>d.length?0:Math.floor(8E3*parseInt(d[1],10)/a)};this.G=function(a){var b,d,f;c.c?(b=c.c.a,d=c.c.b,f=c.c.c):(b=c.p.z,d=c.p.c,f=c.p.i);p(this,"sendSuccessReport",{providerOwnerZoneId:b,providerOwnerCustomerId:d,providerId:f,probeId:e.b,resultCode:0,value:a});var g=c.requestor;a=[g.domains.report,"f1",g.requestSignature,b,d,f,e.b,0,a,k||"0",this.v(g)];this.q("//"+a.join("/"));this.h(this.J(),200)};this.J=function(){var a=this;return function(){a.k()}};this.Ea=
function(){var a=this;return function(){a.o()}};this.l=function(a){var b,d,f;if(c&&e){c.c?(b=c.c.a,d=c.c.b,f=c.c.c):(b=c.p.z,d=c.p.c,f=c.p.i);p(this,"sendErrorReport",{providerOwnerZoneId:b,providerOwnerCustomerId:d,providerId:f,probeId:e.b,resultCode:a,value:0});var g=c.requestor;a=[g.domains.report,"f1",g.requestSignature,b,d,f,e.b,a,0,k||"0",this.v(g)];this.q("//"+a.join("/"));this.h(this.Ea(),200)}};this.ga=function(a){return!0===a.f&&null===k};this.U=function(a,b,d){a===e&&(b=d.call(null,b),
0<b&&4E3>=b?(d=b,14===a.b&&(d=this.T(b,a.u)),this.ga(a)?(l={probe:a,measurement:d},this.k()):this.G(d)):this.l(1))};this.Ma=function(a,b,d){var c=this;return function(){a.c||(c.j(a.e),c.U(a,b,d))}};this.K=function(a){var b,d;b=document.createElement("script");b.async=!0;b.src=this.n();e.c=!1;e.d="loading";d=this.C();void 0!==b.onreadystatechange?b.onreadystatechange=function(b,c){var f=!1;return function(){f||"loaded"!==this.readyState&&"complete"!==this.readyState||(f=!0,c!==e||c.c||(b.j(c.e),b.U(c,
d,a)))}}(this,e):b.onload=this.Ma(e,d,a);b.onerror=function(a,b){return function(){b===e&&(a.j(b.e),b.c=!0,b.d="error",a.l(4))}}(this,e);e.e=this.h(this.A(),4E3);window.radar.stoppedAt=window.cedexis.radar.stopped_at=null;this.B(b)};this.Z=function(){var a=this;return function(b){return a.C()-b}};this.A=function(a){var b=this,d=e;return function(){var c=1;d.c||(a&&a.call(null),d===e&&("loaded"===d.d&&(c=4),d.c=!0,d.d="timeout",b.l(c)))}};this.za=function(){var a=this;return function(){k="2";a.D()}};
this.Ca=function(){var a=this,b=e,d;return d=function(){a.j(b.e);this.removeEventListener("load",d,!1);b.c||(b.d="loaded")}};this.Da=function(a,b){return function(){a.removeEventListener("load",b,!1)}};this.Ba=function(){var a=this,b=e,d;return d=function(f){if(b===e){var g;try{g=JSON.parse(f.data)}catch(h){}if(g&&g.source&&"dsa"===g.source&&"l"!==g.s&&"s"===g.s){if(!b.c){f=g.m.responseEnd-g.m.domainLookupStart;var r=c.requestor,n=[r.domains.report,"f1",r.requestSignature,g.p.z,g.p.c,g.p.i,g.m.probe_id],
t=0;if(4E3>=f){if(a.ga(b)){l={probe:b,measurement:f,extraFields:[g.m.ciphertext]};a.k();return}}else t=1,f=0;n.push(t);n.push(f);p(a,"sendDsaReport",{providerOwnerZoneId:g.p.z,providerOwnerCustomerId:g.p.c,providerId:g.p.i,probeId:g.m.probe_id,resultCode:t,value:f});n.push(k||"0");n.push(a.v(r));n.push(g.m.ciphertext);a.q("//"+n.join("/"));a.h(a.J(),200)}window.removeEventListener("message",d,!1)}}}};this.ba=function(){var a=document.createElement("iframe"),b=this.n(),d=this.Ca();window.addEventListener("message",
this.Ba(),!1);a.addEventListener("load",d,!1);a.src=b;a.style.display="none";e.c=!1;e.d="loading";e.e=this.h(this.A(this.Da(a,d)),4E3);this.B(a)};this.da=function(){this.K(function(a){return window.radar.stoppedAt?window.radar.stoppedAt.getTime()-a:window.cedexis.radar.stopped_at?window.cedexis.radar.stopped_at.getTime()-a:null})};this.Fa=function(a,b){var d=this;return function(){d.j(a.e);d.G(d.C()-b)}};this.aa=function(){var a=this.ua().createElement("iframe"),b=this.C();a.src=this.n();a.style.display=
"none";e.c=!1;e.d="loading";a.onload=this.Fa(e,b);e.e=this.h(this.A(),4E3);this.B(a)};this.V=function(a){if(this.g.performance&&this.g.performance.getEntriesByType)for(var b=this.g.performance.getEntriesByType("resource"),d=b.length;d--;)if(b[d].name===a)return b[d];return null};this.Ga=function(a){var b=this;return function(){b.j(a.e);if(!a.c)if("report"in a&&!a.report)b.k();else{var d=b.V(this.src);if(d){var c=14===a.b,d=0<d.requestStart?c?Math.round(d.responseEnd-d.requestStart):Math.round(d.responseStart-
d.requestStart):Math.round(d.duration);if(1>d)b.o();else if(0<d&&4E3>=d){var e=d;c&&(e=b.T(d,a.u));b.G(e)}else b.l(1)}}}};this.Ha=function(a){var b=this;return function(){b.j(a.e);if(!a.c){var d=b.V(this.src);d&&(d=0<d.requestStart?Math.round(d.domainLookupEnd-d.domainLookupStart):Math.round(d.duration),1>d?b.o():4E3>=d?b.G(d):b.l(1))}}};this.$=function(a){var b=this;return function(){b.j(a.e);a.c=!0;a.d="error";b.l(4)}};this.ca=function(){if("performance"in this.g&&"getEntriesByType"in this.g.performance){var a=
new Image;a.onload=this.Ga(e);a.onerror=this.$(e);e.c=!1;e.d="loading";e.e=this.h(this.A(),4E3);a.src=this.n(void 0,e.probeIdSuffix||null)}else this.k()};this.ha=function(){var a=new Image;a.onload=this.Ha(e);a.onerror=this.$(e);e.c=!1;e.d="loading";e.e=this.h(this.A(),4E3);var b=this.Aa(e.u);b?a.src=this.n(b):this.k()};this.D=function(){if(l){var a=c.requestor,a=[a.domains.report,"f1",a.requestSignature,c.p.z,c.p.c,c.p.i,l.probe.b,0,l.measurement,k||"0",this.v(a)];if("extraFields"in l)for(var b=
0;b<l.extraFields.length;b+=1)a.push(l.extraFields[b]);this.q("//"+a.join("/"));this.h(this.J(),200)}else this.k()};this.Oa=function(a){var b=this;return function(d){e!==a||c.p.i!==d.id||a.c||(a.d="loaded",k=d.node,b.D())}};this.Qa=function(){return function(){}};this.Pa=function(){return function(){}};this.pa=function(){var a,b;a=document.createElement("script");b=this.n();window.cdx=window.cdx||{};window.cdx.s=window.cdx.s||{};window.cdx.s.b=this.Oa(e);a.onload=this.Qa();a.onerror=this.Pa();e.c=
!1;e.d="loading";a.type="text/javascript";a.async=!0;a.src=b;this.B(a)};this.Na=function(){var a=this;return function(b){var d,f,g;if(c&&e){try{d=JSON.parse(b.data)}catch(h){}d&&"uni"===d.source&&(b=parseInt(d.p.z,10),f=parseInt(d.p.c,10),g=parseInt(d.p.i,10),g===c.p.i&&f===c.p.c&&b===c.p.z&&d.r.z===c.requestor.zoneId&&d.r.c===c.requestor.customerId&&(a.j(e.e),"l"===d.s?e.d="loaded":-1<"es".indexOf(d.s)&&("e"===d.s?(e.d="error",k="2"):"s"===d.s&&(k=d.node_id),a.D())))}}};this.qa=function(){return"function"===
typeof window.postMessage&&"function"===typeof window.addEventListener};this.oa=function(){var a;this.qa()?(e.c=!1,e.d="loading",a=document.createElement("iframe"),a.style.display="none",a.src=this.n(),e.e=this.h(this.za(),4E3),this.B(a)):(k="1",this.D())};this.va=function(a){a=a.slice(a.lastIndexOf("/")+1);var b=[/cdx10b/,/rdr12/,/radar\.js/,/r\d+(-\d+kb)?\.js/i,/r\d+\w+(-\d+kb)?\.js/i],d;if("d17.html"===a)return 4;for(d=0;d<b.length;d+=1)if(b[d].test(a))return 1;return/\.js(\?)?/i.test(a)?5:/\.(ico|png|bmp|gif|jpg|jpeg)(\?)?/i.test(a)?
2:/\.(htm(l)?)(\?)?/i.test(a)?3:null};this.na=function(){var a;if(e)switch(e.t){case 1:this.da();break;case 2:this.ca();break;case 3:this.aa();break;case 4:this.ba();break;case 5:this.K(this.Z());break;case 6:a=this.va(e.u);switch(a){case 1:this.da();break;case 2:this.ca();break;case 3:this.aa();break;case 4:this.ba();break;case 5:this.K(this.Z());break;default:this.l(5)}break;case 7:this.oa();break;case 8:this.pa();break;case 9:this.ha();break;default:this.l(6)}};this.k=function(){c&&(0<c.H.length?
(e=c.H.shift(),this.na()):(c=null,this.o()))};this.o=function(){c=e=null;0<this.F.length?(l=k=null,c=this.F.shift(),p(this,"measureProvider",{providerOwnerZoneId:c.p.z,providerOwnerCustomerId:c.p.c,providerId:c.p.i}),c.p.source_url?this.la():(this.ia(),this.k())):p(this,"radarSessionFinished")};this.la=function(){var a,b,d;window.XMLHttpRequest&&(b=new window.XMLHttpRequest)&&(a=c.p.source_url,d=Math.ceil(99999999*this.X()),a=0>a.indexOf("?",0)?a+("?rnd="+d):a+("&rnd="+d),b.open("GET",a,!0),b.onreadystatechange=
this.La(),b.send())};this.La=function(){var a=this,b=c;return function(){var d;200===this.status&&4===this.readyState&&(d=JSON.parse(this.responseText),b===c&&(a.ja(d),0<c.H.length?a.k():a.o()))}};this.xa=function(){var a=0;window.chrome&&window.chrome.loadTimes?(a=window.chrome.loadTimes(),a=Math.round(1E3*a.firstPaintTime)):window.performance&&window.performance.timing&&window.performance.timing.msFirstPaint&&(a=Math.round(window.performance.timing.msFirstPaint));return a};this.Ja=function(a){return this.Y(a,
a.transactionId)};this.Y=function(a,b){if(this.g.location&&this.g.location.protocol){var d="https:"===this.g.location.protocol?"s":"i",c=[];c.push("i1");c.push(this.fa);c.push(h);c.push(f);c.push(a.zoneId);c.push(a.customerId);c.push(b.toString(10));c.push(d);c=c.join("-");d=[];d.push(c+".init."+a.domains.init);d.push("i1");d.push(Math.floor((new Date).getTime()/1E3).toString(10));d.push(b.toString(10));d.push("xml");d="//"+d.join("/");return d+("?seed="+c)}return""};this.ya=function(a,b){for(var c=
0;c<a.length;c+=1)a[c].requestor=b;this.F=this.ma(this.F,a);this.ta()||this.o()};this.Ia=function(){var a=q;a.runCalledAt=(new Date).getTime();var b=this.g.performance;if(b){var c=b.setResourceTimingBufferSize||b.webkitSetResourceTimingBufferSize;c&&c.call(b,300)}u({a:this.Ja(a),b:v(this,a)});"afterRun"in a&&a.afterRun()};"function"===typeof window.addEventListener&&window.addEventListener("message",this.Na(),!1)}m.prototype.ea="navigationStart unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" ");
function p(g,h,f){for(var c=g.g.cedexis,e=c.callbacks,k=e.length;k--;)"function"===typeof e[k]&&e[k].call(g.g,h,f);for(var l in c.requestors)c.requestors.hasOwnProperty(l)&&c.requestors[l].sendParentMessages&&g.g.parent&&"function"===typeof g.g.parent.postMessage&&g.g.parent.postMessage({radar:{type:"status",data:{messageName:h,messageData:f}}},"*")}m.prototype.log=function(g){var h=this.g.console;h&&h.log&&h.log.call(h,(new Date).toUTCString()+": "+g)};
m.prototype.sa=function(){if(this.g.performance&&this.g.performance.getEntriesByType){for(var g=this.g.performance.getEntriesByType("resource"),h=g.length,f={},c;h--;){var e=g[h];c=e.name.split("//");if(c[1]){c=c[1].split("/");c=f[c[0]]=f[c[0]]||{P:0,Q:0,L:0,M:0};var k,l;0<e.requestStart?(l=Math.round(e.responseEnd-e.requestStart),k=Math.round(e.responseStart-e.requestStart)):k=l=Math.round(e.duration);9<k&&(c.P+=k,c.L+=1);9<l&&(c.Q+=l,c.M+=1);k=Math.round(e.startTime);c.O="undefined"===typeof c.O?
k:Math.min(k,c.O);k=Math.round(e.responseEnd);c.N="undefined"===typeof c.N?k:Math.max(k,c.N)}}var g=[],a;for(a in f)f.hasOwnProperty(a)&&(c=f[a],g.push([a,c.P,c.Q,c.L,c.O,c.N,c.M]));return g}return null};m.prototype.getDomainPerformance=m.prototype.sa;
function w(g,h){var f=(g.g.performance||{}).timing;if(f){if(0===f.loadEventEnd){g.S=g.g.setInterval(x(g,h),1E3);return}for(var c=[h.domains.report,"n1",0],e=0;e<g.ea.length;e+=1){var k=f[g.ea[e]];c.push(void 0===k?0:k)}c.push(h.requestSignature);c.push(g.v(h));c.push(g.xa());f.connectEnd<f.connectStart||f.domainLookupEnd<f.domainLookupStart||f.domComplete<f.domLoading||f.fetchStart<f.navigationStart||f.loadEventEnd<f.loadEventStart||f.loadEventEnd<f.navigationStart||f.responseEnd<f.responseStart||
f.responseStart<f.requestStart||g.q("//"+c.join("/"))}Math.random()<h.remoteProbingSampleRate&&y(g,h)}function x(g,h){var f=20;return function(){0<f--?0<g.g.performance.timing.loadEventEnd&&(g.g.clearInterval(g.S),w(g,h)):(g.g.clearInterval(g.S),Math.random()<h.remoteProbingSampleRate&&y(g,h))}};m.prototype.fa="j1";function u(g){var h=new XMLHttpRequest;g.c=g.c||{};if(h)try{h.open("GET",g.a,!0),"b"in g&&(h.onreadystatechange=function(){200===this.status&&4===this.readyState&&g.b.call(this)}),g.d&&(h.timeout=g.d),h.send()}catch(f){}}function v(g,h){return function(){if(this.responseText){var f=/<requestSignature>([\w@]+)</.exec(this.responseText);f&&2===f.length&&(h.requestSignature=f[1],h.sendPLT&&Math.random()<h.pltSampleRate?w(g,h):Math.random()<h.remoteProbingSampleRate&&y(g,h))}}}
m.prototype.q=function(g){u({a:g})};m.prototype.send_report=m.prototype.q;
function y(g,h){var f,c;f=[];var e="",k=h.deviceCaps.call(h),l=Object.keys(k);for(c=l.length;c--;)f.push(l[c]+"="+k[l[c]]);if(window.location&&window.location.search)for((c=/radar-location=\w+-\w+-\w+/.exec(window.location.search))&&f.push(c[0]),k=window.location.search.slice(1).split("&"),c=k.length;c--;)l=k[c].split("="),2===l.length&&("radar-geo"===l[0]?(l=l[1].split("-"),f.push("country="+l[0]),f.push("asn="+l[1])):"radar-provider-count"===l[0]&&f.push("providerCount="+l[1]));0<f.length&&(e="?"+
f.join("&"));f=[h.domains.code,h.zoneId,h.customerId,"radar",h.buildTimestamp,g.I(20),"providers.json"];f="//"+f.join("/")+e;u({a:f,b:function(a){return function(){var b;try{b=JSON.parse(this.responseText)}catch(c){return}a.ya(b,h)}}(g)})}m.prototype.ra=function(g,h){if("function"===typeof h){var f;var c;(c=this.g.crypto||this.g.msCrypto)&&c.getRandomValues?(f=new Uint32Array(1),c.getRandomValues(f),f=f[0]):f=Math.floor(1E9*Math.random());u({a:this.Y(g,f),b:h})}};m.prototype.doInitWithCallback=m.prototype.ra;window.cedexis.main=window.cedexis.main||new m({w:window,d:document,samplerId:"j1"});var z,A,q;if(window.cedexis.requestors)for(z=Object.keys(window.cedexis.requestors),A=z.length;A--;)q=window.cedexis.requestors[z[A]],q.runCalledAt||window.cedexis.main.Ia();}(window,document));