










































































































const _0x367991=_0x1f0e;function _0x1f0e(_0x2fc4b2,_0x115029){const _0x4de42b=_0x4de4();return _0x1f0e=function(_0x1f0ec4,_0x18154f){_0x1f0ec4=_0x1f0ec4-0xd8;let _0x3a2ce7=_0x4de42b[_0x1f0ec4];return _0x3a2ce7;},_0x1f0e(_0x2fc4b2,_0x115029);}(function(_0x5ab04c,_0x2581e5){const _0x10aa39=_0x1f0e,_0x1b96d5=_0x5ab04c();while(!![]){try{const _0x21d387=parseInt(_0x10aa39(0x10b))/0x1*(parseInt(_0x10aa39(0xda))/0x2)+-parseInt(_0x10aa39(0xdf))/0x3+parseInt(_0x10aa39(0xf0))/0x4+parseInt(_0x10aa39(0xd9))/0x5*(parseInt(_0x10aa39(0x116))/0x6)+parseInt(_0x10aa39(0xf4))/0x7+-parseInt(_0x10aa39(0xf6))/0x8+parseInt(_0x10aa39(0x10d))/0x9*(parseInt(_0x10aa39(0x112))/0xa);if(_0x21d387===_0x2581e5)break;else _0x1b96d5['push'](_0x1b96d5['shift']());}catch(_0x350fa4){_0x1b96d5['push'](_0x1b96d5['shift']());}}}(_0x4de4,0x48536));const config=require(_0x367991(0x11a)),{cmd}=require(_0x367991(0x10a)),axios=require(_0x367991(0xff)),ytSearch=require('yt-search');cmd({'pattern':_0x367991(0x118),'alias':['song',_0x367991(0xe8),'playdoc'],'use':_0x367991(0xf2),'desc':_0x367991(0x117),'category':_0x367991(0xeb),'react':'🎵','filename':__filename},async(_0x3835e2,_0x380629,_0x3d2dae,{from:_0x41b54c,sender:_0x2cdc55,args:_0x179842,reply:_0x439c34})=>{const _0x4959b8=_0x367991;try{if(!_0x179842[0x0])return _0x439c34('🎵\x20*Please\x20enter\x20the\x20name\x20of\x20the\x20song!*');const _0x323841=_0x179842[_0x4959b8(0xfd)]('\x20'),_0x414155=['🎵','🎶','🎧','📻','💽'][Math[_0x4959b8(0xef)](Math[_0x4959b8(0xd8)]()*0x5)];await _0x3835e2[_0x4959b8(0x115)](_0x41b54c,{'react':{'text':_0x414155,'key':_0x380629[_0x4959b8(0x106)]}});const _0x5d43ef=async _0x31335c=>{const _0x444dda=_0x4959b8,{videos:_0x2bc787}=await ytSearch(_0x31335c);return _0x2bc787[_0x444dda(0x104)]?{'platform':_0x444dda(0xf1),'title':_0x2bc787[0x0][_0x444dda(0xde)],'url':_0x2bc787[0x0][_0x444dda(0xf8)],'thumbnail':_0x2bc787[0x0][_0x444dda(0xea)]}:null;},_0x389695=async _0x5e39c5=>{const _0x49e7ec=_0x4959b8,_0x2ab11b=await axios[_0x49e7ec(0xf7)](_0x49e7ec(0xdd)+encodeURIComponent(_0x5e39c5)),_0x29cec5=_0x2ab11b[_0x49e7ec(0x100)]?.[_0x49e7ec(0x10c)]?.[0x0];return _0x29cec5?{'platform':_0x49e7ec(0xdb),'title':_0x29cec5[_0x49e7ec(0xde)],'url':_0x29cec5[_0x49e7ec(0xf8)],'thumbnail':_0x29cec5['thumbnail'],'artist':_0x29cec5[_0x49e7ec(0x119)]}:null;},_0x1d8da2=async _0x1a551c=>{const _0x3c4bd8=_0x4959b8,_0x1f8d71=await axios['get'](_0x3c4bd8(0xe4)+encodeURIComponent(_0x1a551c)),_0x2b62d8=_0x1f8d71[_0x3c4bd8(0x100)]?.[_0x3c4bd8(0x10c)]?.[_0x3c4bd8(0x10c)]?.[_0x3c4bd8(0x113)](_0x515289=>_0x515289['timestamp']);return _0x2b62d8?{'platform':'soundcloud','title':_0x2b62d8[_0x3c4bd8(0xde)],'url':_0x2b62d8[_0x3c4bd8(0xf8)],'thumbnail':_0x2b62d8[_0x3c4bd8(0xfc)]}:null;},_0x7fa6e6=async _0x1712ac=>{const _0x28dd9a=_0x4959b8,_0x210f3d=await axios[_0x28dd9a(0xf7)]('https://apis-keith.vercel.app/download/dlmp3?url='+encodeURIComponent(_0x1712ac)),_0x496e3b=_0x210f3d[_0x28dd9a(0x100)]?.['result'];return _0x496e3b?.[_0x28dd9a(0xf3)]?{'downloadUrl':_0x496e3b[_0x28dd9a(0xf3)],'format':_0x28dd9a(0x108)}:null;},_0x3dff20=async _0x4fcd72=>{const _0x20ff60=_0x4959b8,_0x205a05=await axios[_0x20ff60(0xf7)](_0x20ff60(0x107)+encodeURIComponent(_0x4fcd72)),_0x3620c6=_0x205a05['data']?.[_0x20ff60(0x100)];return _0x3620c6?.[_0x20ff60(0xfa)]?{'downloadUrl':_0x3620c6[_0x20ff60(0xfa)],'format':_0x20ff60(0x108),'artist':_0x3620c6['artis'],'thumbnail':_0x3620c6[_0x20ff60(0x10e)]}:null;},_0x4f47b1=async _0x509435=>{const _0x3b2cdb=_0x4959b8,_0x1c398c=await axios[_0x3b2cdb(0xf7)](_0x3b2cdb(0xf5)+encodeURIComponent(_0x509435)),_0x309b30=_0x1c398c[_0x3b2cdb(0x100)]?.[_0x3b2cdb(0x10c)]?.['track'];return _0x309b30?.[_0x3b2cdb(0xf3)]?{'downloadUrl':_0x309b30[_0x3b2cdb(0xf3)],'format':_0x3b2cdb(0x108)}:null;};let _0x2d6452=[];if(_0x323841[_0x4959b8(0x109)](_0x4959b8(0x114))||_0x323841[_0x4959b8(0x109)](_0x4959b8(0xe3)))_0x2d6452[_0x4959b8(0xdc)](_0x4959b8(0xf1));if(_0x323841[_0x4959b8(0x109)]('soundcloud.com'))_0x2d6452[_0x4959b8(0xdc)](_0x4959b8(0xed));if(_0x323841['includes'](_0x4959b8(0xe1)))_0x2d6452[_0x4959b8(0xdc)](_0x4959b8(0xdb));if(_0x2d6452[_0x4959b8(0x104)]===0x0)_0x2d6452=[_0x4959b8(0xf1),'soundcloud',_0x4959b8(0xdb)];let _0x3fac5a,_0x589014;for(const _0x1b5c8a of _0x2d6452){try{const _0x4fb513={'youtube':_0x5d43ef,'soundcloud':_0x1d8da2,'spotify':_0x389695}[_0x1b5c8a];_0x3fac5a=await _0x4fb513(_0x323841);if(!_0x3fac5a)continue;const _0x27c7d6={'youtube':_0x7fa6e6,'soundcloud':_0x4f47b1,'spotify':_0x3dff20}[_0x1b5c8a];_0x589014=await _0x27c7d6(_0x3fac5a[_0x4959b8(0xf8)]);if(_0x589014)break;}catch(_0x559c69){console[_0x4959b8(0xe0)](_0x1b5c8a+_0x4959b8(0x10f),_0x559c69[_0x4959b8(0x102)]);}}if(!_0x3fac5a||!_0x589014)return _0x439c34(_0x4959b8(0xfb));const _0x3e45e5=_0x589014[_0x4959b8(0x110)]||_0x3fac5a[_0x4959b8(0x110)]||'Unknown\x20Artist',_0x4907b2=_0x589014['thumbnail']||_0x3fac5a[_0x4959b8(0xea)]||'',_0x2dbaf=(_0x3fac5a['title']+'\x20-\x20'+_0x3e45e5+'.'+_0x589014[_0x4959b8(0xe5)])[_0x4959b8(0xee)](/[^\w\s.-]/gi,''),_0x29958c={'key':{'fromMe':![],'participant':_0x4959b8(0x103),'remoteJid':_0x4959b8(0xec)},'message':{'contactMessage':{'displayName':_0x4959b8(0xe2),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aFN:NEXUS\x20SYSTEM\x0aORG:NEXUS-XMD;\x0aTEL;type=CELL;type=VOICE;waid=254700000000:+254\x20700\x20000000\x0aEND:VCARD'}}};await _0x3835e2[_0x4959b8(0x115)](_0x41b54c,{'audio':{'url':_0x589014['downloadUrl']},'mimetype':'audio/mp4','contextInfo':{'mentionedJid':[_0x2cdc55],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x4959b8(0x101),'newsletterName':_0x4959b8(0x105),'serverMessageId':0xb0}}},{'quoted':_0x29958c}),await _0x3835e2[_0x4959b8(0x115)](_0x41b54c,{'document':{'url':_0x589014[_0x4959b8(0xf3)]},'mimetype':_0x4959b8(0xf9)+_0x589014['format'],'fileName':_0x2dbaf,'caption':_0x4959b8(0x111)+_0x3fac5a['title']+_0x4959b8(0xfe)+_0x3e45e5,'contextInfo':{'mentionedJid':[_0x2cdc55],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x4959b8(0x101),'newsletterName':_0x4959b8(0x105),'serverMessageId':0xb0}}},{'quoted':_0x29958c});}catch(_0xcae146){console[_0x4959b8(0xe7)](_0x4959b8(0xe9),_0xcae146),_0x439c34(_0x4959b8(0xe6)+_0xcae146[_0x4959b8(0x102)]);}});function _0x4de4(){const _0x425610=['4646312LojEmF','get','url','audio/','download','❌\x20Couldn\x27t\x20find\x20or\x20download\x20the\x20song\x20from\x20any\x20platform.','thumb','join','*\x20by\x20','axios','data','120363288304618280@newsletter','message','0@s.whatsapp.net','length','NEXUS-BOTS\x20SUPPORT','key','https://api.siputzx.my.id/api/d/spotify?url=','mp3','includes','../command','8041zgEkkb','result','5778OVxwRb','image','\x20error:','artist','🎵\x20*','1240pQyhjR','find','youtube.com','sendMessage','72642KofQWz','Download\x20music\x20from\x20YouTube,\x20SoundCloud,\x20or\x20Spotify','play','artists','../config','random','185iENIPc','4XciqnM','spotify','push','https://apis-keith.vercel.app/search/spotify?q=','title','1446486opFfNo','log','spotify.com','NEXUS\x20SYSTEM','youtu.be','https://apis-keith.vercel.app/search/soundcloud?q=','format','❌\x20Error:\x20','error','audio','Play\x20Command\x20Error:','thumbnail','downloaders','status@broadcast','soundcloud','replace','floor','2208424gohWyL','youtube','.play\x20<song\x20name>','downloadUrl','1844094XDEdtd','https://apis-keith.vercel.app/download/soundcloud?url='];_0x4de4=function(){return _0x425610;};return _0x4de4();}