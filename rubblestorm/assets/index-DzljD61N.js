(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=60/108/4,t=16,n=.22,r=[{root:38,tones:[0,3,7,12]},{root:34,tones:[0,4,7,12]},{root:41,tones:[0,4,7,12]},{root:36,tones:[0,4,7,12]}],i=[0,-1,-1,0,-1,-1,12,-1,-1,-1,0,-1,7,-1,12,-1],a=[0,-1,2,1,-1,2,3,-1,2,-1,1,2,-1,3,2,-1],o=e=>440*2**((e-69)/12),s=class{level=1;heat=0;ctx=null;gain=null;filter=null;noise=null;playing=!1;step=0;nextT=0;lastT=0;setLevel(e){this.level=Math.max(0,Math.min(1,e)),this.ctx&&this.gain&&this.playing&&this.gain.gain.setTargetAtTime(this.level*.5,this.ctx.currentTime,.05)}get active(){return this.playing}update(i,a){if(!i||i.ctx.state!==`running`||this.level<=0){this.stop();return}this.ctx!==i.ctx&&this.attach(i.ctx,i.out);let o=i.ctx.currentTime;this.playing||(this.playing=!0,this.step=0,this.nextT=o+.06,this.lastT=o,this.gain.gain.cancelScheduledValues(o),this.gain.gain.setTargetAtTime(this.level*.5,o,.3));let s=Math.min(.25,o-this.lastT);this.lastT=o;let c=Math.max(0,Math.min(1,a));for(this.heat+=Math.max(-.25*s,Math.min(.9*s,c-this.heat)),this.filter.frequency.setTargetAtTime(900+this.heat*3600,o,.1),this.nextT<o&&(this.nextT=o+.02);this.nextT<o+n;)this.playStep(this.step,this.nextT),this.step=(this.step+1)%(r.length*t),this.nextT+=e}stop(){this.playing&&(this.playing=!1,this.ctx&&this.gain&&(this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.02)))}attach(e,t){this.ctx=e,this.gain=e.createGain(),this.gain.gain.value=0,this.filter=e.createBiquadFilter(),this.filter.type=`lowpass`,this.filter.Q.value=.6,this.filter.frequency.value=900,this.filter.connect(this.gain).connect(t);let n=Math.floor(e.sampleRate*.5);this.noise=e.createBuffer(1,n,e.sampleRate);let r=this.noise.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1;this.playing=!1}playStep(n,s){let c=r[Math.floor(n/t)],l=n%t,u=this.heat,d=u>.3,f=u>.65;if(l===0){let n=e*t;this.note(`triangle`,o(c.root+12),s,2.522222222222222,.05,n*.3),this.note(`triangle`,o(c.root+19),s,2.522222222222222,.035,n*.3)}let p=i[l];p>=0&&(this.note(`triangle`,o(c.root+p),s,e*1.7,.22,.006),d&&this.note(`square`,o(c.root+p),s,e*1.2,.03,.006)),(l%8==0||d&&l%4==0)&&this.kick(s,l%8==0?.34:.26),(l%4==2||d&&l%2==0||f)&&this.hat(s,l%4==2?.05:.028),f&&l%8==4&&this.snare(s);let m=a[l];if(d&&m>=0){let t=o(c.root+24+c.tones[m]);this.note(`square`,t,s,e*1.5,.04,.004),f&&this.note(`triangle`,t*2,s,e*1.2,.03,.004)}}note(e,t,n,r,i,a){let o=this.ctx,s=o.createOscillator(),c=o.createGain();s.type=e,s.frequency.setValueAtTime(t,n),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(i,n+a),c.gain.exponentialRampToValueAtTime(1e-4,n+r),s.connect(c).connect(this.filter),s.start(n),s.stop(n+r+.03)}kick(e,t){let n=this.ctx,r=n.createOscillator(),i=n.createGain();r.type=`sine`,r.frequency.setValueAtTime(130,e),r.frequency.exponentialRampToValueAtTime(42,e+.12),i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(t,e+.004),i.gain.exponentialRampToValueAtTime(1e-4,e+.22),r.connect(i).connect(this.gain),r.start(e),r.stop(e+.25)}hat(e,t){this.hiss(e,.045,t,`highpass`,6500)}snare(e){this.hiss(e,.14,.09,`bandpass`,1900),this.note(`triangle`,190,e,.09,.06,.003)}hiss(e,t,n,r,i){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;let s=a.createBiquadFilter();s.type=r,s.frequency.value=i;let c=a.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(n,e+.002),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(s).connect(c).connect(this.gain),o.start(e,e*7.3%.3),o.stop(e+t+.02)}},c=class{ctx=null;master=null;out=null;noise=null;volume=.7;lastPlay=new Map;unlock(){if(this.ctx){this.ctx.state!==`running`&&this.ctx.state!==`closed`&&this.ctx.resume();return}let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=new e({latencyHint:`interactive`}),n=t.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=12,n.ratio.value=6,n.attack.value=.003,n.release.value=.2;let r=t.createGain();r.gain.value=this.volume,r.connect(n).connect(t.destination),this.out=n;let i=t.sampleRate*2,a=t.createBuffer(1,i,t.sampleRate),o=a.getChannelData(0);for(let e=0;e<i;e++)o[e]=Math.random()*2-1;this.ctx=t,this.master=r,this.noise=a}playOnStart(e,t=1){let n=this.ctx;if(!n)return;if(n.state===`running`){this.play(e,0,0,t);return}let r=performance.now(),i=()=>{n.state===`running`&&(n.removeEventListener(`statechange`,i),performance.now()-r<600&&this.play(e,0,0,t))};n.addEventListener(`statechange`,i)}get waiting(){let e=this.ctx?.state;return!!e&&e!==`running`&&e!==`closed`}bus(){return this.ctx&&this.master?{ctx:this.ctx,out:this.master}:null}stream(){if(!this.ctx||!this.out)return null;let e=this.ctx.createMediaStreamDestination();return this.out.connect(e),e.stream}play(e,t,n,r=1,i=1){let a=this.ctx,o=this.master;if(!a||!o||a.state!==`running`)return;let s=a.currentTime,c=e===`chip`||e===`glass`?.03:e===`bounce`?.05:e===`hitmark`?.04:.012;if((this.lastPlay.get(e)??-1)>s-c)return;this.lastPlay.set(e,s);let l=r*(.25+.75*Math.max(0,1-n/1100));if(l<.02)return;let u=a.createStereoPanner();u.pan.value=Math.max(-.85,Math.min(.85,t/300)),u.connect(o);let d=s+.002;switch(e){case`pistol`:this.tone(u,`square`,880,180,.07,.18*l,d),this.burst(u,3e3,800,.06,.22*l,d,`highpass`);break;case`smg`:this.tone(u,`square`,700+Math.random()*120,160,.05,.12*l,d),this.burst(u,2600,900,.04,.16*l,d,`highpass`);break;case`shotgun`:this.burst(u,2400,220,.3,.55*l,d,`lowpass`),this.tone(u,`sine`,120,45,.18,.4*l,d);break;case`rocket`:this.burst(u,600,3e3,.35,.3*l,d,`bandpass`),this.tone(u,`sawtooth`,140,60,.2,.08*l,d);break;case`boom`:this.burst(u,1600,60,1.1,.8*l,d,`lowpass`),this.tone(u,`sine`,70,28,.6,.7*l,d),this.burst(u,5e3,2e3,.08,.2*l,d,`highpass`);break;case`boomSmall`:this.burst(u,1800,120,.5,.55*l,d,`lowpass`),this.tone(u,`sine`,95,40,.3,.45*l,d);break;case`thud`:this.burst(u,500,60,.35,.6*l,d,`lowpass`),this.tone(u,`sine`,60,30,.25,.5*l,d);break;case`crack`:this.burst(u,1400,300,.25,.4*l,d,`bandpass`);break;case`chip`:this.burst(u,2200+Math.random()*1500,900,.05,.12*l,d,`bandpass`);break;case`ricochet`:this.tone(u,`sine`,2400+Math.random()*1500,900,.12,.1*l,d);break;case`glass`:for(let e=0;e<3;e++)this.tone(u,`sine`,2400+Math.random()*2600,1800+Math.random()*1e3,.18,.05*l,d+e*.025);break;case`jump`:this.tone(u,`square`,260,520,.08,.06*l,d);break;case`flip`:this.burst(u,800,2400,.14,.12*l,d,`bandpass`);break;case`land`:this.burst(u,600,120,.12,.25*l,d,`lowpass`);break;case`jet`:this.burst(u,900,500,.09,.12*l,d,`lowpass`);break;case`hit`:this.tone(u,`square`,220,110,.06,.12*l,d);break;case`die`:this.tone(u,`sawtooth`,420,60,.45,.18*l,d),this.burst(u,1200,200,.3,.3*l,d,`lowpass`);break;case`charge`:this.tone(u,`sine`,300,1400,.55,.12*l,d);break;case`lance`:this.tone(u,`sawtooth`,1600,120,.5,.2*l,d),this.burst(u,6e3,1500,.45,.3*l,d,`highpass`),this.tone(u,`sine`,80,40,.3,.4*l,d);break;case`flame`:this.burst(u,700,400,.12,.14*l,d,`lowpass`);break;case`lob`:this.tone(u,`sine`,300,160,.1,.15*l,d),this.burst(u,1200,600,.08,.1*l,d,`bandpass`);break;case`split`:this.tone(u,`square`,900,300,.1,.1*l,d);break;case`bounce`:this.tone(u,`square`,520,380,.04,.06*l,d);break;case`drill`:this.tone(u,`sawtooth`,200,260,.2,.1*l,d);break;case`grind`:this.burst(u,1800,1200,.06,.12*l,d,`bandpass`);break;case`orb`:this.tone(u,`sine`,220,440,.4,.15*l,d),this.tone(u,`sine`,330,660,.4,.08*l,d);break;case`implode`:this.tone(u,`sine`,900,80,.7,.25*l,d),this.burst(u,200,2e3,.7,.2*l,d,`bandpass`);break;case`switch`:this.tone(u,`square`,1200,1200,.03,.05*l,d);break;case`ui`:this.tone(u,`square`,660*i,990*i,.08,.08*l,d);break;case`hitmark`:this.tone(u,`square`,1800*i,1500*i,.035,.07*l,d);break;case`kill`:this.tone(u,`square`,523,523,.07,.1*l,d),this.tone(u,`square`,784,784,.12,.1*l,d+.07),this.burst(u,4e3,1500,.12,.12*l,d,`highpass`);break;case`callout`:for(let[e,t]of[392,523,659,784].entries())this.tone(u,`sawtooth`,t,t,.1,.06*l,d+e*.05);this.tone(u,`sine`,98,49,.4,.3*l,d);break;case`bank`:for(let[e,t]of[660,880,1320].entries())this.tone(u,`square`,t*i,t*i,.06,.06*l,d+e*.045);break;case`milestone`:for(let[e,t]of[523,659,784,1047].entries())this.tone(u,`triangle`,t,t,.14,.12*l,d+e*.08);break;case`rankup`:for(let[e,t]of[392,523,659,784,1047,1319].entries())this.tone(u,`square`,t,t,.12,.07*l,d+e*.07);this.tone(u,`sine`,131,65,.6,.3*l,d);break;case`best`:for(let[e,t]of[784,988,1175,1568].entries())this.tone(u,`triangle`,t,t,.12,.1*l,d+e*.06);break;case`toot`:this.rasp(u,95+Math.random()*70,.16+Math.random()*.12,.2*l,d),this.burst(u,900,300,.12,.06*l,d,`bandpass`);break;case`cough`:this.burst(u,1400,500,.07,.12*l,d,`bandpass`),this.burst(u,1200,450,.06,.08*l,d+.11,`bandpass`);break;case`whoomp`:this.burst(u,180,1400,.35,.45*l,d,`lowpass`),this.tone(u,`sine`,60,140,.3,.3*l,d);break;case`flop`:this.burst(u,700,150,.14,.3*l,d,`lowpass`),this.burst(u,500,120,.1,.18*l,d+.06,`lowpass`);break;case`tug`:this.tone(u,`sawtooth`,180,260,.08,.08*l,d),this.tone(u,`sawtooth`,200,320,.08,.09*l,d+.14);break;case`snap`:this.burst(u,7e3,2500,.05,.5*l,d,`highpass`),this.tone(u,`square`,1400,200,.06,.12*l,d),this.burst(u,2400,500,.25,.22*l,d+.03,`bandpass`);break;case`pop`:this.burst(u,5e3,1200,.05,.55*l,d,`highpass`),this.tone(u,`triangle`,900,140,.09,.2*l,d);break;case`rig`:this.tone(u,`sawtooth`,140,620,.22,.09*l,d),this.tone(u,`square`,70,50,.1,.12*l,d),this.burst(u,1400,2600,.18,.08*l,d,`bandpass`);break;case`ching`:this.tone(u,`triangle`,1568,1568,.06,.12*l,d),this.tone(u,`triangle`,2093,2093,.16,.12*l,d+.06),this.burst(u,6e3,3e3,.05,.06*l,d,`highpass`);break;case`fork`:this.tone(u,`square`,620,980,.1,.08*l,d),this.tone(u,`square`,620,390,.1,.08*l,d),this.burst(u,900,300,.1,.18*l,d,`lowpass`);break;default:if(e.startsWith(`pump`)){let t=420*1.12**(Number(e.slice(4))||0);this.tone(u,`triangle`,t,t*1.35,.07,.1*l,d),this.tone(u,`square`,t*2,t*2.6,.04,.03*l,d+.01),this.burst(u,2e3,3500,.06,.04*l,d,`bandpass`)}}}rasp(e,t,n,r,i){let a=this.ctx,o=a.createOscillator();o.type=`sawtooth`,o.frequency.setValueAtTime(t*1.25,i),o.frequency.exponentialRampToValueAtTime(t*.7,i+n);let s=a.createOscillator();s.type=`square`,s.frequency.setValueAtTime(26+Math.random()*10,i);let c=a.createGain();c.gain.value=t*.35,s.connect(c).connect(o.frequency);let l=a.createBiquadFilter();l.type=`bandpass`,l.Q.value=2.2,l.frequency.setValueAtTime(520,i);let u=a.createGain();u.gain.setValueAtTime(1e-4,i),u.gain.exponentialRampToValueAtTime(r,i+.02),u.gain.exponentialRampToValueAtTime(1e-4,i+n),o.connect(l).connect(u).connect(e),o.start(i),s.start(i),o.stop(i+n+.02),s.stop(i+n+.02)}tone(e,t,n,r,i,a,o){let s=this.ctx,c=s.createOscillator(),l=s.createGain();c.type=t,c.frequency.setValueAtTime(n,o),c.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+i),l.gain.setValueAtTime(a,o),l.gain.exponentialRampToValueAtTime(1e-4,o+i),c.connect(l).connect(e),c.start(o),c.stop(o+i+.02)}burst(e,t,n,r,i,a,o){let s=this.ctx,c=s.createBufferSource();c.buffer=this.noise,c.playbackRate.value=.8+Math.random()*.4;let l=s.createBiquadFilter();l.type=o,l.Q.value=o===`bandpass`?1.4:.7,l.frequency.setValueAtTime(t,a),l.frequency.exponentialRampToValueAtTime(Math.max(30,n),a+r);let u=s.createGain();u.gain.setValueAtTime(i,a),u.gain.exponentialRampToValueAtTime(1e-4,a+r),c.connect(l).connect(u).connect(e),c.start(a,Math.random()*1.5),c.stop(a+r+.02)}},l=(e,t,n,r=255)=>((r&255)<<24|(n&255)<<16|(t&255)<<8|e&255)>>>0,u=(e,t=255)=>{let n=parseInt(e.replace(`#`,``),16);return l(n>>16&255,n>>8&255,n&255,t)},d=e=>e&255,f=e=>e>>>8&255,p=e=>e>>>16&255,m=e=>e>>>24,h=(e,t)=>(e&16777215|(t&255)<<24)>>>0,g=e=>e<0?0:e>255?255:e|0,_=(e,t)=>l(g(d(e)*t),g(f(e)*t),g(p(e)*t),m(e)),v=(e,t,n)=>l(g(d(e)+(d(t)-d(e))*n),g(f(e)+(f(t)-f(e))*n),g(p(e)+(p(t)-p(e))*n),g(m(e)+(m(t)-m(e))*n)),y=(e,t)=>e[t<=0?0:t>=1?e.length-1:Math.floor(t*e.length)],b=class{s;constructor(e){this.s=e>>>0||1}get state(){return this.s>>>0}next(){let e=this.s=this.s+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return e+Math.floor(this.next()*(t-e+1))}chance(e){return this.next()<e}pick(e){return e[Math.floor(this.next()*e.length)]}spread(e){return(this.next()*2-1)*e}};function x(e,t,n=0){let r=Math.imul(e|0,374761393)+Math.imul(t|0,668265263)+Math.imul(n|0,2147483647)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}var S={id:`none`,name:``,gravity:1,jet:!0,fuelUse:1,oneWeapon:!1,hp:100},C=[{...S,id:`low-gravity`,name:`LOW GRAVITY`,gravity:.45},{...S,id:`no-jet`,name:`NO JETPACK`,jet:!1},{...S,id:`one-weapon`,name:`ONE WEAPON`,oneWeapon:!0},{...S,id:`thin-skin`,name:`THIN SKIN`,hp:50},{...S,id:`deep-tank`,name:`DEEP TANK`,fuelUse:0}];function w(e,t,n){return e.oneWeapon?Math.floor(x(t,30485,41)*n):-1}function T(e){let t=2166136261;for(let n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return C[Math.floor(x(t,30485,97)*C.length)]}var E=()=>({left:!1,right:!1,jump:!1,jumpPressed:!1,down:!1,fire:!1,firePressed:!1,alt:!1,altPressed:!1,aimX:0,aimY:0,select:-1,cycle:0}),D={run:150,accelGround:1450,accelAir:840,friction:1800,gravity:1200,jump:400,flipBoost:330,jetAccel:2400,jetMaxUp:330,fuelMax:1.6,fuelRegen:.9,maxFall:830,stepUp:6},O=class{id;name;team;bot;color;scarf;skin=``;x=0;y=0;vx=0;vy=0;onGround=!1;facing=1;aimX=0;aimY=0;hp=100;alive=!0;respawnT=0;invulnT=0;fuel=D.fuelMax;jetOn=!1;airJumps=0;jumpHeld=0;flip=0;flipDir=1;walk=0;weapon=0;cooldown=0;altCooldown=0;grenades=0;grenadeT=0;charge=-1;burstT=0;recoil=0;muzzleT=0;squash=0;score=0;chain=0;comboPts=0;comboT=0;chainT=0;streak=0;multi=0;multiT=0;flameT=0;kills=0;deaths=0;cells=0;lastHitBy=-1;lastHitT=0;hurtFlash=0;downT=0;reviveT=0;out=!1;input=E();scarfX=new Float32Array(6);scarfY=new Float32Array(6);scarfPX=new Float32Array(6);scarfPY=new Float32Array(6);constructor(e,t,n,r,i,a){this.id=e,this.name=t,this.team=n,this.bot=r,this.color=i,this.scarf=a}place(e,t){this.x=e,this.y=t,this.vx=0,this.vy=0;for(let n=0;n<this.scarfX.length;n++)this.scarfX[n]=this.scarfPX[n]=e,this.scarfY[n]=this.scarfPY[n]=t-17+n*2}get cx(){return this.x}get cy(){return this.y-12}get sx(){return this.x}get sy(){return this.y-16}boxHits(e,t,n){let r=Math.floor(t-4),i=r+8-1,a=Math.floor(n)-1,o=a-24+1;for(let t=o;t<=a;t++)for(let n=r;n<=i;n++)if(e.solid(n,t))return!0;return!1}contains(e,t,n=0){return e>=this.x-4-n&&e<=this.x+4+n&&t>=this.y-24-n&&t<=this.y+n}move(e,t,n=S){let r=this.input,i={jumped:!1,flipped:!1,jet:!1,landed:0},a=+!!r.right-!!r.left,o=this.onGround?D.accelGround:D.accelAir;if(a!==0)this.vx+=a*o*t,Math.abs(this.vx)>D.run&&(this.vx=Math.sign(this.vx)*Math.max(D.run,Math.abs(this.vx)-D.friction*t));else if(this.onGround){let e=D.friction*t;this.vx=Math.abs(this.vx)<=e?0:this.vx-Math.sign(this.vx)*e}else this.vx*=1-.6*t;r.jump?this.jumpHeld+=t:this.jumpHeld=0,r.jumpPressed&&(this.onGround?(this.vy=-D.jump,this.onGround=!1,this.airJumps=0,i.jumped=!0):this.airJumps===0&&(this.vy=Math.min(this.vy,-D.flipBoost),this.airJumps=1,this.flip=1e-4,this.flipDir=this.vx>=0?1:-1,i.flipped=!0)),this.jetOn=!1,n.jet&&r.jump&&!this.onGround&&this.fuel>0&&(this.airJumps>0||this.jumpHeld>.22)&&(this.vy-=D.jetAccel*t,this.vy<-D.jetMaxUp&&(this.vy=-D.jetMaxUp),this.fuel=Math.max(0,this.fuel-t*n.fuelUse),this.jetOn=!0,i.jet=!0),this.onGround&&(this.fuel=Math.min(D.fuelMax,this.fuel+D.fuelRegen*t*1.6)),this.vy+=D.gravity*n.gravity*t*(r.down&&!this.onGround?1.8:1),this.vy>D.maxFall&&(this.vy=D.maxFall),this.flip>0&&(this.flip+=t*14,this.flip>=Math.PI*2&&(this.flip=0));let s=this.vx*t;for(;Math.abs(s)>1e-6;){let t=Math.abs(s)>1?Math.sign(s):s,n=this.x+t;if(!this.boxHits(e,n,this.y))this.x=n;else{let t=!1;if(this.onGround||this.vy>-40){for(let r=1;r<=D.stepUp;r++)if(!this.boxHits(e,n,this.y-r)){this.x=n,this.y-=r,t=!0;break}}if(!t){this.vx=0;break}}s-=t}let c=this.onGround,l=this.vy,u=this.vy*t;for(this.onGround=!1;Math.abs(u)>1e-6;){let t=Math.abs(u)>1?Math.sign(u):u;if(!this.boxHits(e,this.x,this.y+t))this.y+=t;else{t>0&&(this.onGround=!0),this.vy=0;break}u-=t}if(!this.onGround&&this.vy>=0&&this.boxHits(e,this.x,this.y+1)&&(this.onGround=!0),this.onGround&&(this.airJumps=0,c||(this.flip=0,i.landed=l)),this.boxHits(e,this.x,this.y)){for(let t=1;t<40;t++)if(!this.boxHits(e,this.x,this.y-t)){this.y-=t;break}}return this.y<-400&&(this.y=-400),this.onGround&&Math.abs(this.vx)>6&&(this.walk+=Math.abs(this.vx)*t*.13),this.aimX=r.aimX,this.aimY=r.aimY,this.facing=this.aimX>=this.x?1:-1,i}updateScarf(e,t){let n=this.scarfX.length,r=this.x-this.facing*2,i=this.y-17;this.scarfX[0]=r,this.scarfY[0]=i;for(let r=1;r<n;r++){let n=this.scarfX[r],i=this.scarfY[r],a=(n-this.scarfPX[r])*.9,o=(i-this.scarfPY[r])*.9;this.scarfPX[r]=n,this.scarfPY[r]=i,this.scarfX[r]=n+a+(t*.4-this.vx*.05)*e,this.scarfY[r]=i+o+220*e*e}for(let e=0;e<4;e++)for(let e=1;e<n;e++){let t=this.scarfX[e-1],n=this.scarfY[e-1],r=this.scarfX[e]-t,i=this.scarfY[e]-n,a=Math.hypot(r,i)||1,o=(a-2.6)/a;this.scarfX[e]=this.scarfX[e]-r*o,this.scarfY[e]=this.scarfY[e]-i*o}}},k=e=>e*e*(3-2*e);function A(e,t){let n=Math.floor(e),r=k(e-n),i=x(n,0,t);return i+(x(n+1,0,t)-i)*r}function j(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=k(e-r),o=k(t-i),s=x(r,i,n),c=x(r+1,i,n),l=x(r,i+1,n),u=x(r+1,i+1,n),d=s+(c-s)*a;return d+(l+(u-l)*a-d)*o}function ee(e,t,n=4){let r=0,i=1,a=0,o=1;for(let s=0;s<n;s++)r+=A(e*o,t+s*101)*i,a+=i,i*=.5,o*=2;return r/a}function M(e,t,n,r=4){let i=0,a=1,o=0,s=1;for(let c=0;c<r;c++)i+=j(e*s,t*s,n+c*131)*a,o+=a,a*=.5,s*=2;return i/o}var N=(...e)=>e.map(e=>u(e)),te=[{name:`Ember Dusk`,art:`dusk`,sky:[u(`#2a1846`),u(`#5b2a5e`),u(`#b5476a`),u(`#f29a5c`)],celestial:u(`#ffe0a8`),celestialGlow:u(`#ff9a62`),stars:!0,far:[u(`#6a3a6e`),u(`#d0727e`)],mid:[u(`#4a2752`),u(`#a65466`)],near:[u(`#2b1638`),u(`#6e3550`)],city:[u(`#1e1028`),u(`#ffcf6a`),u(`#7a4a3a`)],haze:u(`#f2a07a`),ambient:[1,.92,.95],top:N(`#7fc45a`,`#5fa84a`,`#9bd86a`,`#4e8f3e`),topMat:`grass`,dirt:N(`#7a4e36`,`#6a4230`,`#8a5a3e`,`#5c3828`),stone:N(`#6e6478`,`#5e5468`,`#7d7388`,`#514860`),bedrock:N(`#2a2232`,`#231c2a`,`#30273a`),brick:N(`#b25a46`,`#a04e3e`,`#c26a52`,`#8f4436`),mortar:u(`#d9b8a0`),concrete:N(`#a49aa4`,`#968c98`,`#b1a8b0`),wood:N(`#a8703e`,`#946234`,`#bb8048`,`#7e5228`),metal:N(`#7f8aa0`,`#6c768c`,`#98a2b8`,`#5a6278`),glass:N(`#9fe3ff`,`#c7f1ff`),leaf:N(`#4f9a4a`,`#3e8040`,`#66b25a`,`#2f6a36`),crystal:N(`#7ff3e6`,`#3fd0d8`,`#c8fff4`),sand:N(`#d8b07a`,`#c99e68`,`#e6c28c`)},{name:`Frost Night`,art:`night`,sky:[u(`#070b1e`),u(`#0f1a3a`),u(`#1d3462`),u(`#3a5c8a`)],celestial:u(`#eaf4ff`),celestialGlow:u(`#7fb2ff`),stars:!0,far:[u(`#22355e`),u(`#6a8ec4`)],mid:[u(`#18284a`),u(`#4b6a9c`)],near:[u(`#0e1730`),u(`#2c4270`)],city:[u(`#0a1022`),u(`#8fe8ff`),u(`#2c4a6a`)],haze:u(`#5a7cae`),ambient:[.82,.9,1.08],top:N(`#eef6ff`,`#d6e6f8`,`#ffffff`,`#c2d6ee`),topMat:`snow`,dirt:N(`#4a3e46`,`#3e343c`,`#564852`,`#342c34`),stone:N(`#5a6680`,`#4c5870`,`#687590`,`#414c62`),bedrock:N(`#161a2a`,`#121522`,`#1c2032`),brick:N(`#6e5a78`,`#604e6a`,`#7c6888`,`#54445e`),mortar:u(`#b8c4dc`),concrete:N(`#8a94aa`,`#7c869c`,`#98a2b8`),wood:N(`#7a5a4a`,`#6a4c3e`,`#8a6a58`,`#5a4034`),metal:N(`#8aa4c4`,`#7690b0`,`#a2bcdc`,`#62789a`),glass:N(`#a6f0ff`,`#e0fbff`),leaf:N(`#2e6a6a`,`#245858`,`#3a7c78`,`#1c4a4a`),crystal:N(`#b48cff`,`#8a5cff`,`#e6d6ff`),sand:N(`#b8b0b8`,`#a8a0a8`,`#c8c0c8`)},{name:`Rust Noon`,art:`noon`,sky:[u(`#3a7cc4`),u(`#5c9ad6`),u(`#8cbde4`),u(`#e8d6b0`)],celestial:u(`#fff8dc`),celestialGlow:u(`#ffe9a0`),stars:!1,far:[u(`#a88a7a`),u(`#e8c8a8`)],mid:[u(`#b0704a`),u(`#e0a06a`)],near:[u(`#7a4430`),u(`#b06a44`)],city:[u(`#5a3428`),u(`#ffe6a0`),u(`#8a5a44`)],haze:u(`#f0d6b0`),ambient:[1.08,1.02,.95],top:N(`#e6c48a`,`#d6b07a`,`#f0d49a`,`#c8a06a`),topMat:`sand`,dirt:N(`#b0743e`,`#9c6434`,`#c0844a`,`#8a562c`),stone:N(`#a6765a`,`#94684e`,`#b88468`,`#825a44`),bedrock:N(`#4a2a22`,`#40241e`,`#54302a`),brick:N(`#c87a4a`,`#b46a3e`,`#d68a58`,`#a05c34`),mortar:u(`#f0d8b8`),concrete:N(`#c8b49c`,`#b8a48e`,`#d6c4ac`),wood:N(`#8a5a34`,`#7a4e2c`,`#9c6a3e`,`#6a4224`),metal:N(`#8a8a94`,`#787882`,`#a0a0aa`,`#666670`),glass:N(`#9ee6f0`,`#d0f8ff`),leaf:N(`#7a9a3a`,`#688a30`,`#8cae46`,`#567428`),crystal:N(`#ff7ab8`,`#ff4a8a`,`#ffc8e0`),sand:N(`#e6c48a`,`#d6b07a`,`#f0d49a`)}],P={AIR:0,BEDROCK:1,STONE:2,BRICK:3,DIRT:4,GRASS:5,WOOD:6,METAL:7,GLASS:8,RUBBLE:9,EMBER:10,ASH:11,LEAF:12,CONCRETE:13,CRYSTAL:14,SAND:15},ne=new Float32Array(256),re=new Float32Array(256),ie=new Uint8Array(256),ae=new Float32Array(256),oe=new Uint8Array(256),se=new Uint8Array(256);function ce(e,t,n,r,i,a){ne[e]=t,re[e]=n,ie[e]=r,ae[e]=i,oe[e]=e===P.AIR||e===P.BEDROCK?0:1,se[e]=a}ce(P.AIR,0,0,0,0,0),ce(P.BEDROCK,1,0,0,0,255),ce(P.STONE,.42,0,0,.32,3),ce(P.BRICK,.3,0,0,.38,2),ce(P.DIRT,.12,0,0,.28,1),ce(P.GRASS,.1,.04,0,.25,1),ce(P.WOOD,.22,.55,0,.32,2),ce(P.METAL,.68,0,0,.18,6),ce(P.GLASS,.02,0,0,0,1),ce(P.RUBBLE,.04,0,1,.22,1),ce(P.EMBER,.08,0,0,.15,1),ce(P.ASH,0,0,1,.08,1),ce(P.LEAF,.02,.85,0,.18,1),ce(P.CONCRETE,.5,0,0,.34,4),ce(P.CRYSTAL,.3,0,0,.3,3),ce(P.SAND,.04,0,1,.2,1);var le=class e{W;H;mat;col;dmg;burn;back;anchor;looseCur;looseNext;looseNextN=0;inLoose;structTotal=0;structNow=0;constructor(e,t){this.W=e,this.H=t;let n=e*t;this.mat=new Uint8Array(n),this.col=new Uint32Array(n),this.dmg=new Uint8Array(n),this.burn=new Uint8Array(n),this.back=new Uint32Array(n),this.anchor=new Uint8Array(n),this.looseCur=new Int32Array(n),this.looseNext=new Int32Array(n),this.inLoose=new Uint8Array(n)}inside(e,t){return e>=0&&t>=0&&e<this.W&&t<this.H}get(e,t){return e|=0,t|=0,e<0||e>=this.W||t>=this.H?P.BEDROCK:t<0?P.AIR:this.mat[t*this.W+e]}solid(e,t){return this.get(e,t)!==P.AIR}static isStruct(e){return oe[e]===1&&ie[e]===0&&e!==P.EMBER}set(t,n,r,i){if(!this.inside(t,n))return;let a=n*this.W+t,o=this.mat[a];e.isStruct(o)&&this.structNow--,e.isStruct(r)&&this.structNow++,this.mat[a]=r,this.col[a]=r===P.AIR?0:(i&16777215|r<<24)>>>0,this.dmg[a]=0,this.burn[a]=0,r===P.AIR?this.wakeNeighbours(t,n):ie[r]&&this.wake(a)}clear(e,t){this.set(e,t,P.AIR,0)}wake(e){this.inLoose[e]===0&&ie[this.mat[e]]===1&&this.looseNextN<this.looseNext.length&&(this.inLoose[e]=1,this.looseNext[this.looseNextN++]=e)}wakeNeighbours(e,t){let n=this.W;for(let r=-1;r<=0;r++){let i=t+r;if(!(i<0||i>=this.H))for(let t=-1;t<=1;t++){let r=e+t;r<0||r>=n||this.wake(i*n+r)}}}wakeRect(e,t,n,r){e=Math.max(0,e|0),t=Math.max(0,t|0),n=Math.min(this.W-1,n|0),r=Math.min(this.H-1,r|0);for(let i=t;i<=r;i++)for(let t=e;t<=n;t++)this.wake(i*this.W+t)}get looseActive(){return this.looseNextN}looseQueue(){return this.looseNext.subarray(0,this.looseNextN)}stepLoose(e){let t=this.W,n=this.H,r=this.mat,i=this.col,a=this.looseCur;this.looseCur=this.looseNext,this.looseNext=a;let o=this.looseNextN;this.looseNextN=0;let s=this.looseCur;for(let a=0;a<o;a++){let o=s[a];this.inLoose[o]=0;let c=r[o];if(ie[c]===0)continue;let l=o/t|0;if(l>=n-1)continue;let u=o-l*t,d=-1,f=o+t;if(r[f]===P.AIR)d=f;else{let n=e.next()<.5?-1:1,i=u+n,a=u-n;i>=0&&i<t&&r[f+n]===P.AIR&&r[o+n]===P.AIR?d=f+n:a>=0&&a<t&&r[f-n]===P.AIR&&r[o-n]===P.AIR&&(d=f-n)}d<0||(r[d]=c,i[d]=i[o],r[o]=P.AIR,i[o]=0,this.dmg[o]=0,this.wake(d),this.wakeNeighbours(u,l))}}finalize(){let t=0;for(let n=0;n<this.mat.length;n++)e.isStruct(this.mat[n])&&t++;this.structTotal=t,this.structNow=t}raycast(e,t,n,r){let i=n-e,a=r-t,o=Math.max(Math.abs(i),Math.abs(a));if(o<1)return null;let s=i/o,c=a/o,l=e,u=t;for(let e=0;e<=o;e++){if(this.solid(Math.floor(l),Math.floor(u)))return{x:Math.floor(l),y:Math.floor(u),t:e/o};l+=s,u+=c}return null}},ue=2048,de=1152,fe=(e,t)=>e[Math.min(e.length-1,Math.max(0,Math.floor(t*e.length)))];function pe(e,t,n,r,i){let a=x(t,n,i);switch(e){case P.STONE:{let e=j(t/9,n/6,i+11)*.75+a*.25,o=fe(r.stone,e);return a<.04&&(o=_(o,.78)),(t*7+n*3)%23==0&&a>.6&&(o=_(o,1.18)),o}case P.DIRT:{let e=j(t/5,n/5,i+13)*.6+a*.4,o=fe(r.dirt,e);return a<.06?o=_(o,.7):a>.97&&(o=fe(r.stone,a)),o}case P.GRASS:return fe(r.top,j(t/3,n/2,i+17)*.7+a*.3);case P.SAND:return fe(r.sand,j(t/4,n/3,i+19)*.6+a*.4);case P.BEDROCK:return fe(r.bedrock,j(t/6,n/4,i+23)*.7+a*.3);case P.WOOD:{let e=n+400>>2&1,o=(n&3)==3,s=j(t/14,n*1.3,i+29),c=fe(r.wood,s*.8+a*.2);return e&&(c=_(c,.94)),o&&(c=_(c,.72)),c}case P.METAL:{let e=(t%12+12)%12,a=(n%10+10)%10,o=fe(r.metal,j(t/20,n/20,i+31)*.5+.25);return e===0||a===0?o=_(o,.7):(e===1||a===1)&&(o=_(o,1.12)),e===3&&a===3&&(o=_(o,1.35)),o}case P.GLASS:return(t+n)%11==0||(t+n)%11==1&&a>.5?r.glass[1]:r.glass[0];case P.LEAF:{let e=j(t/4,n/4,i+37)*.7+a*.3,o=fe(r.leaf,e);return a>.93&&(o=_(o,1.25)),o}case P.CONCRETE:{let e=fe(r.concrete,j(t/7,n/7,i+41)*.6+a*.4);return(n%9+9)%9==0&&(e=_(e,.86)),a<.03&&(e=_(e,.7)),e}case P.CRYSTAL:return fe(r.crystal,Math.abs((t-n)%5)/5*.7+a*.3);case P.RUBBLE:return _(fe(r.stone,a),.85);default:return fe(r.stone,a)}}function me(e,t,n,r){let i=Math.floor(t/4),a=e+(i&1)*4;if((t%4+4)%4==3||(a%8+8)%8==7)return v(n.mortar,n.brick[3],.25);let o=x(Math.floor(a/8),i,r+43),s=fe(n.brick,o);return x(e,t,r+47)<.08&&(s=_(s,.85)),(t%4+4)%4==0&&(s=_(s,1.08)),s}var he=class{w;b;seed;constructor(e,t,n){this.w=e,this.b=t,this.seed=n}put(e,t,n){if(!this.w.inside(e,t))return;let r=n===P.BRICK?me(e,t,this.b,this.seed):pe(n,e,t,this.b,this.seed),i=t*this.w.W+e;this.w.mat[i]=n,this.w.col[i]=(r&16777215|n<<24)>>>0}back(e,t,n,r){this.w.inside(e,t)&&(this.w.back[t*this.w.W+e]=(_(n,r===2?.34:.46)&16777215|r<<24)>>>0)}air(e,t){if(!this.w.inside(e,t))return;let n=t*this.w.W+e;this.w.mat[n]=P.AIR,this.w.col[n]=0}rect(e,t,n,r,i){for(let a=t;a<t+r;a++)for(let t=e;t<e+n;t++)this.put(t,a,i)}clearRect(e,t,n,r){for(let i=t;i<t+r;i++)for(let t=e;t<e+n;t++)this.air(t,i)}disc(e,t,n,r,i=0,a){let o=Math.ceil(n+i);for(let s=-o;s<=o;s++)for(let c=-o;c<=o;c++){let o=n+(i&&a?(j((e+c)/4,(t+s)/4,this.seed+53)-.5)*2*i:0);c*c+s*s<=o*o&&(r===P.AIR?this.air(e+c,t+s):this.put(e+c,t+s,r))}}line(e,t,n,r,i,a=1){let o=Math.max(Math.abs(n-e),Math.abs(r-t),1);for(let s=0;s<=o;s++){let c=Math.round(e+(n-e)*s/o),l=Math.round(t+(r-t)*s/o);for(let e=0;e<a;e++)this.put(c,l+e,i)}}isAir(e,t){return this.w.get(e,t)===P.AIR}};function ge(e,t=ue,n=de,r){let i=new b(e),a=i.int(0,te.length-1),o=te[r??a],s=new le(t,n),c=new he(s,o,e),l=[],u=te[a].topMat===`sand`?P.SAND:P.GRASS,d=new Int16Array(t),f=n*.6;for(let r=0;r<t;r++){let t=f+(ee(r/420,e+1,3)-.5)*240+(ee(r/72,e+2,2)-.5)*34;d[r]=Math.round(Math.min(n-96,Math.max(n*.32,t)))}for(let r=0;r<t;r++){let i=d[r],a=14+Math.floor(ee(r/48,e+3,2)*22),l=3+ +(x(r,0,e)<.5),f=n-14-Math.floor(ee(r/36,e+4,2)*18);for(let d=i;d<n;d++){let n=d-i,p=d>=f?P.BEDROCK:n<l?u:n<a?P.DIRT:P.STONE;c.put(r,d,p),s.anchor[d*t+r]=1,n>=2&&c.back(r,d,pe(n<a+4?P.DIRT:P.STONE,r,d,o,e+99),2)}if(u===P.GRASS&&x(r,1,e)<.5){let t=1+Math.floor(x(r,2,e)*5);for(let e=1;e<=t;e++)c.put(r,i-e,P.GRASS)}}for(let r=0;r<n;r++)for(let i=0;i<t;i++){let t=d[i];if(r<t+48||r>n-40)continue;let a=M(i/140,r/72,e+5,3),o=M(i/82,r/64,e+6,3);(Math.abs(a-.5)<.028||o>.7)&&c.air(i,r)}for(let e=0;e<70;e++){let e=i.int(30,t-30),r=d[e];for(let t=r+54;t<n-44;t++)if(c.isAir(e,t)&&!c.isAir(e,t+1)&&c.isAir(e,t-10)){let n=i.int(6,14);for(let r=-3;r<=3;r++){let a=n-Math.abs(r)*3-i.int(0,2);for(let n=0;n<a;n++)c.put(e+r,t-n,P.CRYSTAL)}l.push({x:e,y:t-n/2,r:42,color:o.crystal[0],flicker:.15});break}}let p=i.int(40,100),m=null;for(;p<t-100;){let e=i.next();if(e<.42){let e=i.int(76,140);if(p+e>t-30)break;let r=_e(c,i,d,p,e,n,o,l);m&&p-m.x1<210&&p-m.x1>12&&ve(c,i,m,r),m=r,p+=e+i.int(24,96)}else if(e<.7)ye(c,i,d,p+12,o),p+=i.int(36,74),m=null;else if(e<.86){let e=be(c,i,d,p);p+=e+i.int(22,64),m=null}else{let e=xe(c,i,d,p);p+=e+i.int(30,80),m=null}}s.finalize();let h=[];for(let e=24;e<t-24;e+=37){let t=0;for(let r=0;r<n-2;r++)s.get(e,r)===P.AIR&&s.get(e-5,r)===P.AIR&&s.get(e+5,r)===P.AIR?t++:(t>=36&&h.push({x:e,y:r}),t=0)}return{seed:e,biome:o,world:s,spawns:h,lights:l,ground:d}}function _e(e,t,n,r,i,a,o,s){let c=a,l=0;for(let e=r;e<r+i;e++)c=Math.min(c,n[e]),l=Math.max(l,n[e]);for(let t=r-2;t<r+i+2;t++)for(let r=c;r<=n[Math.min(n.length-1,Math.max(0,t))]+3;r++)e.put(t,r,P.CONCRETE);let u=t.chance(.6)?P.BRICK:P.CONCRETE,d=t.chance(.5)?P.WOOD:P.CONCRETE,f=t.int(6,9),p=t.int(52,62),m=t.int(2,5),h=c-m*p,g=[];for(let t=h;t<c;t++)for(let n=r+f;n<r+i-f;n++){let r=u===P.BRICK?me(n,t,o,7):pe(P.CONCRETE,n,t,o,7),i=(c-t)%p===20||(c-t)%p===21;e.back(n,t,i?_(r,.7):r,1)}e.rect(r,h,f,c-h,u),e.rect(r+i-f,h,f,c-h,u);for(let t=0;t<=m;t++){let n=c-t*p;if(g.push(n),t===0)continue;let a=t%2==0?r+f+2:r+i-f-26-2;for(let o=r+f;o<r+i-f;o++)if(!(t<m&&o>=a&&o<a+26))for(let t=0;t<4;t++)e.put(o,n-t,d);e.line(r+f,n-15,r+f+11,n-3,P.METAL,2),e.line(r+i-f-1,n-15,r+i-f-12,n-3,P.METAL,2)}for(let n=0;n<m;n++){let a=c-n*p,l=a-p+16,u=Math.max(14,p-32);if(t.chance(.85)&&e.rect(r,l,f,u,P.GLASS),t.chance(.85)&&e.rect(r+i-f,l,f,u,P.GLASS),t.chance(.55)){let t=r+Math.floor(i/2),n=a-p+5;e.line(t,n-5,t,n,P.METAL),e.rect(t-2,n+1,5,3,P.METAL),s.push({x:t,y:n+6,r:54,color:o.city[1],flicker:.05})}}let v=t.chance(.5);e.clearRect(v?r:r+i-f,c-33,f,29);let y=t.int(0,2);if(y===0){e.rect(r-3,h-5,i+6,5,P.CONCRETE);for(let t=r-3;t<r+i+3;t+=10)e.rect(t,h-10,5,5,u)}else if(y===1){let t=Math.floor(i/2.4);for(let n=0;n<t;n++)e.line(r-3+n,h-n,r+i+2-n,h-n,P.METAL)}else{e.rect(r-3,h-5,i+6,5,P.METAL);let n=r+t.int(8,Math.max(9,i-40));e.line(n+3,h-6,n+3,h-22,P.METAL,2),e.line(n+26,h-6,n+26,h-22,P.METAL,2),e.line(n+3,h-8,n+26,h-20,P.METAL),e.rect(n,h-48,31,26,P.WOOD),e.rect(n-2,h-50,35,3,P.METAL),e.rect(n,h-38,31,2,P.METAL)}if(t.chance(.35))for(let n=0;n<4;n++)e.disc(r+t.int(0,i),h+t.int(0,p),t.int(8,18),P.AIR,3,t);return{x0:r,x1:r+i,floors:g}}function ve(e,t,n,r){let i=-1;for(let e of n.floors.slice(1))for(let t of r.floors.slice(1))Math.abs(e-t)<=9&&(i=Math.max(i,Math.min(e,t)));if(i<0)return;let a=n.x1-1,o=r.x0,s=t.chance(.6)?P.WOOD:P.METAL;for(let t=a;t<=o;t++)for(let n=0;n<4;n++)e.put(t,i-n,s);for(let t=a;t<=o;t++)e.put(t,i+15,P.METAL);for(let t=a;t<o;t+=16)e.line(t,i,t+8,i+15,P.METAL,2),e.line(t+16,i,t+8,i+15,P.METAL,2);for(let t=a;t<=o;t+=8)e.line(t,i-4,t,i-13,P.METAL);e.line(a,i-13,o,i-13,P.METAL,2)}function ye(e,t,n,r,i){let a=n[r],o=t.int(44,84),s=t.int(5,6);for(let t=a-o;t<a+2;t++)for(let n=0;n<s;n++)e.put(r+n,t,P.WOOD);for(let n=0;n<3;n++){let n=a-o+t.int(6,Math.floor(o*.6)),i=t.chance(.5)?-1:1;e.line(r+2,n,r+2+i*t.int(10,20),n-t.int(5,12),P.WOOD,2)}let c=t.int(4,7);for(let n=0;n<c;n++)e.disc(r+2+t.int(-20,20),a-o+t.int(-10,12),t.int(10,18),P.LEAF,3,t)}function be(e,t,n,r){let i=0,a=r,o=t.int(1,3);for(let s=0;s<o;s++){let o=t.chance(.4),s=o?t.int(44,56):t.int(18,24),c=o?22:s,l=0;for(let e=a;e<a+s;e++)l=Math.max(l,n[Math.min(n.length-1,e)]);for(let t=a;t<a+s;t++)for(let r=n[Math.min(n.length-1,t)];r<=l;r++)e.put(t,r,P.DIRT);let u=l-c,d=t.int(1,o?2:3);for(let t=0;t<d;t++)o?e.rect(a,u,s,c,P.METAL):(e.rect(a,u,s,c,P.WOOD),e.line(a,u,a+s-1,u+c-1,P.WOOD),e.line(a+s-1,u,a,u+c-1,P.WOOD)),u-=c;a+=s+3,i=a-r}return i}function xe(e,t,n,r){let i=t.int(66,110),a=t.int(50,90),o=t.int(10,14),s=0;for(let e=r;e<r+i;e++)s=Math.max(s,n[Math.min(n.length-1,e)]);for(let t of[r,r+i-o])for(let r=t;r<t+o;r++)for(let t=s-a;t<=n[Math.min(n.length-1,r)]+2;t++)e.put(r,t,P.STONE);e.rect(r-5,s-a-9,i+10,9,P.STONE);let c=(i-o*2)/2;for(let t=0;t<=i-o*2;t++){let n=t-c,i=Math.sqrt(Math.max(0,c*c-n*n))*.45;for(let n=0;n<9-i;n++)e.put(r+o+t,s-a+Math.floor(i)+n,P.STONE)}return t.chance(.5)&&e.disc(r+t.int(0,i),s-a,t.int(8,14),P.AIR,2,t),i}var Se=e=>e.score+e.comboPts;function Ce(e){return[...e].sort((e,t)=>Se(t)-Se(e)||e.id-t.id)}function F(e,t){let n=Ce(e),r=n.indexOf(t);if(r<0||n.length<2)return null;let i=r===0,a=n[i?1:r-1];return{name:a.name,gap:Math.abs(Se(a)-Se(t)),leading:i}}var we=class{dt;length=180;steps=0;phase=`running`;hold=!1;timed=!0;standings=[];constructor(e){this.dt=e}start(){this.steps=0,this.phase=`running`,this.standings=[]}get timeLeft(){return this.timed?Math.max(0,this.length-this.steps*this.dt):1/0}tick(){return this.phase!==`running`||this.hold?!1:(this.steps++,this.timed&&this.steps>=Math.round(this.length/this.dt))}finish(e){this.phase=`over`,this.standings=Ce(e).map((e,t)=>({id:e.id,name:e.name,bot:e.bot,color:e.color,score:e.score,kills:e.kills,deaths:e.deaths,cells:e.cells,place:t+1}))}},Te={kill:[`{K} GASSED {V}`,`{V} CAUGHT {K}'S WIND`,`{V} SMELT IT, {K} DEALT IT`],self:[`{V} CHOKED ON THE HYPE`]},Ee={kill:[`{K} LIT {V} UP`,`{V} WENT UP IN A WHOOMP`,`{K} SPARKED {V}'S BAGS`],self:[`{V} LIT THEIR OWN GAS`,`{V} STOOD IN THEIR OWN CLOUD`]},I={kill:[`{K} RUGGED {V}`,`{K} PULLED THE RUG ON {V}`,`{V} GOT RUGGED BY {K}`],self:[`{V} RUGGED THEMSELVES`,`{V} TRIPPED ON THEIR OWN RUG`]},De={kill:[`{K} DUMPED ON {V}`,`{V} BOUGHT {K}'S TOP`,`{K} PUMPED, {V} DUMPED`],self:[`{V} HELD TOO LONG`,`{V} PUMPED TOO HARD`]};function L(e,t){let n=t.lastHitT>0?e.actors.find(e=>e.id===t.lastHitBy):void 0;return n&&n!==t?n:void 0}function Oe(e,t,n){let r=L(e,t),i=r?`${r.name} > ${t.name}`:`${t.name} blew up`,a=e.feed.find(e=>e.text===i);if(!a)return!1;let o=r?n.kill:n.self;return a.text=(o[Math.floor(x(t.id,e.tick,t.deaths)*o.length)]??o[0]).replace(`{K}`,r?r.name:t.name).replace(`{V}`,t.name),!0}function ke(e,t,n){let r=e.actors,i=r.map(e=>e.deaths);n();for(let n=0;n<i.length;n++){let a=r[n];a.deaths>i[n]&&Oe(e,a,t)}}var R={CRUMB:0,SPARK:1,SMOKE:2,FIRE:3,SHARD:4,EMBERP:5,GORE:6,MAGIC:7,SHELL:8,HEAT:9},Ae=class{cap;n=0;x;y;vx;vy;life;max;col;kind;size;settled=0;recycle=0;constructor(e=24e3){this.cap=e,this.x=new Float32Array(e),this.y=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.life=new Float32Array(e),this.max=new Float32Array(e),this.col=new Uint32Array(e),this.kind=new Uint8Array(e),this.size=new Uint8Array(e)}spawn(e,t,n,r,i,a,o,s=1){if(this.n>=this.cap){let c=this.recycle;return this.recycle=(this.recycle+7919)%this.cap,this.set(c,e,t,n,r,i,a,o,s),c}let c=this.n++;return this.set(c,e,t,n,r,i,a,o,s),c}set(e,t,n,r,i,a,o,s,c){this.kind[e]=t,this.x[e]=n,this.y[e]=r,this.vx[e]=i,this.vy[e]=a,this.life[e]=o,this.max[e]=o,this.col[e]=s,this.size[e]=c}kill(e){let t=--this.n;e!==t&&(this.kind[e]=this.kind[t],this.x[e]=this.x[t],this.y[e]=this.y[t],this.vx[e]=this.vx[t],this.vy[e]=this.vy[t],this.life[e]=this.life[t],this.max[e]=this.max[t],this.col[e]=this.col[t],this.size[e]=this.size[t])}clear(){this.n=0}update(e,t,n,r,i){this.settled=0;for(let a=this.n-1;a>=0;a--){let o=this.life[a]-t,s=this.kind[a],c=this.x[a],l=this.y[a],u=this.vx[a],d=this.vy[a];if(o<=0)s===R.CRUMB&&this.settle(e,c,l,this.col[a]),this.kill(a);else{switch(s){case R.CRUMB:case R.SHARD:case R.GORE:case R.SHELL:case R.EMBERP:{d+=820*t;let i=c+u*t,f=l+d*t;if(e.solid(Math.floor(i),Math.floor(f))){if(s===R.EMBERP){r(Math.floor(i),Math.floor(f)),this.kill(a);continue}let t=Math.abs(u)+Math.abs(d);if(s===R.CRUMB&&(t<140||n.chance(.45))){this.settle(e,c,l,this.col[a]),this.kill(a);continue}let p=e.solid(Math.floor(i),Math.floor(l)),m=e.solid(Math.floor(c),Math.floor(f));p&&(u=-u*.35),(m||!p)&&(d=-d*.3),u*=.8,(s===R.GORE||s===R.SHELL)&&t<60&&(o=Math.min(o,.6))}else c=i,l=f;l>e.H+20&&(o=0);break}case R.SPARK:{d+=410*t,u*=.97;let n=c+u*t,r=l+d*t;e.solid(Math.floor(n),Math.floor(r))?(u*=-.4,d*=-.4,o*=.6):(c=n,l=r);break}case R.SMOKE:d+=(-40-d)*1.8*t,u+=(i-u)*.8*t,c+=u*t,l+=d*t,e.solid(Math.floor(c),Math.floor(l))&&(l+=1,d=0);break;case R.FIRE:if(d+=(-90-d)*3*t,u+=(i*.5-u)*2*t+n.spread(45)*t,c+=u*t,l+=d*t,n.chance(.04)){let t=Math.floor(c),n=Math.floor(l+2);e.solid(t,n)&&r(t,n)}break;case R.HEAT:e.solid(Math.floor(c),Math.floor(l))||(o=0);break;case R.MAGIC:u*=.98,d=d*.98-12*t,c+=u*t,l+=d*t}this.x[a]=c,this.y[a]=l,this.vx[a]=u,this.vy[a]=d,this.life[a]=o}}}settle(e,t,n,r){let i=Math.floor(t),a=Math.floor(n);for(let t=0;t<4;t++){if(e.inside(i,a)&&e.get(i,a)===P.AIR){e.set(i,a,P.RUBBLE,r),this.settled++;return}a--}}},z={BULLET:0,ROCKET:1,GRENADE:2,CLUSTER:3,BOMBLET:4,DRILL:5,ORB:6,FLAME:7,BALLOON:8,RUG:9,RIG:10,FORK:11,TINE:12},je={smoke:u(`#8a8494`),white:u(`#ffffff`),coin:u(`#ffd04a`)},Me=e=>v(e,je.white,.55);function Ne(e,t,n,r,i,a,o,s){let c={kind:o,x:t.sx+Math.cos(n)*16,y:t.sy+Math.sin(n)*16,vx:Math.cos(n)*r+t.vx*.3,vy:Math.sin(n)*r+t.vy*.3,life:s,age:0,owner:t.id,col:t.color,dmg:i,r:a,t:0,dead:!1,bounces:0};return e.projectiles.push(c),c}function Pe(e,t,n,r,i=.18){let a=t.sx+Math.cos(n)*17,o=t.sy+Math.sin(n)*17;t.muzzleT=.05;for(let i=0;i<r;i++){let r=e.rng.range(90,340),i=n+e.rng.spread(.35);e.parts.spawn(R.SPARK,a,o,Math.cos(i)*r,Math.sin(i)*r,e.rng.range(.04,.14),e.rng.chance(.5)?t.color:Me(t.color))}e.parts.spawn(R.SMOKE,a,o,Math.cos(n)*20,Math.sin(n)*20-10,e.rng.range(.3,.6),je.smoke,2),e.addLight(a,o,34,Me(t.color),i)}var Fe=(e,t,n)=>e+(t-e)*n,Ie=2.4,Le=.2,Re=.12,ze=.5,Be=e=>Fe(640,300,e),Ve=e=>Fe(760,420,e),He=e=>({r:Fe(9,30,e),dmg:Fe(24,100,e)}),Ue={r:2,dmg:8},We=.38,Ge=300,Ke=[{name:`Peashooter`,tag:`PEA`,cooldown:.26,auto:!1,charge:0,sprite:`pistol`,range:`mid`,fire(e,t,n){Ne(e,t,n+e.rng.spread(.015),1500,20,3.2,z.BULLET,.8),e.shell(t,n),Pe(e,t,n,4),t.recoil=2,e.sfx(`pistol`,t.x,t.y)}},{name:`Riveter`,tag:`RVT`,cooldown:.075,auto:!0,charge:0,sprite:`smg`,range:`mid`,fire(e,t,n){Ne(e,t,n+e.rng.spread(.075),1350,9,2.6,z.BULLET,.7),e.shell(t,n),Pe(e,t,n,2,.1),t.recoil=1.5,e.sfx(`smg`,t.x,t.y)}},{name:`Scattergun`,tag:`SCT`,cooldown:.72,auto:!1,charge:0,sprite:`shotgun`,range:`near`,fire(e,t,n){for(let r=0;r<9;r++)Ne(e,t,n+e.rng.spread(.17),e.rng.range(1e3,1300),11,3.2,z.BULLET,.45);e.shell(t,n),Pe(e,t,n,9,.3),t.recoil=4,t.vx-=Math.cos(n)*95,e.shake(.1,t.x,t.y),e.sfx(`shotgun`,t.x,t.y)}},{name:`Thumper`,tag:`THM`,cooldown:1.1,auto:!1,charge:0,sprite:`launcher`,range:`far`,fire(e,t,n){Ne(e,t,n,240,72,24,z.ROCKET,3.5),Pe(e,t,n,6,.25),t.recoil=4,t.vx-=Math.cos(n)*65,e.sfx(`rocket`,t.x,t.y)}},{name:`Arc Lance`,tag:`ARC`,cooldown:1.05,auto:!1,charge:.55,sprite:`lance`,range:`far`,fire(e,t,n){e.lance(t,n),t.recoil=5,t.vx-=Math.cos(n)*175,t.vy-=Math.sin(n)*95}},{name:`Dragon's Breath`,tag:`DRG`,cooldown:.035,auto:!0,charge:0,sprite:`flamer`,range:`near`,fire(e,t,n){for(let r=0;r<2;r++){let r=Ne(e,t,n+e.rng.spread(.16),e.rng.range(370,510),3,4.5,z.FLAME,e.rng.range(.32,.5));r.vy-=16}e.tick&3||e.sfx(`flame`,t.x,t.y)}},{name:`Hailstorm`,tag:`HAL`,cooldown:1.1,auto:!1,charge:0,sprite:`hail`,range:`lobbed`,fire(e,t,n){Ne(e,t,n,560,30,14,z.CLUSTER,4),Pe(e,t,n,5,.2),t.recoil=3,e.sfx(`lob`,t.x,t.y)}},{name:`Mole`,tag:`MOL`,cooldown:1.3,auto:!1,charge:0,sprite:`mole`,range:`mid`,digs:!0,fire(e,t,n){Ne(e,t,n,420,80,28,z.DRILL,2.4),Pe(e,t,n,5,.2),t.recoil=3,e.sfx(`drill`,t.x,t.y)}},{name:`Sinkhole`,tag:`SNK`,cooldown:2.4,auto:!1,charge:0,sprite:`orb`,range:`mid`,fire(e,t,n){Ne(e,t,n,190,120,46,z.ORB,1.6),t.recoil=3,e.sfx(`orb`,t.x,t.y)}},{name:`Gas Leak`,tag:`GAS`,cooldown:.38,auto:!0,charge:0,sprite:`bellows`,range:`near`,aim:{speed:210,gravity:0},fire(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=t.sx+r*15,o=t.sy+i*15;if(!e.world.solid(Math.floor(a),Math.floor(o)))for(let r=0;r<3;r++){let r=n+e.rng.spread(.3),i=e.rng.range(150,270);e.gas.emit(a,o,Math.cos(r)*i+t.vx*.3,Math.sin(r)*i+t.vy*.3,t.id)}t.recoil=2,t.vx-=r*30,e.sfx(`toot`,t.x,t.y)}},{name:`Rug Pull`,tag:`RUG`,cooldown:1.5,auto:!1,charge:0,sprite:`rugger`,range:`mid`,aim:{speed:460,gravity:900},fire(e,t,n){Ne(e,t,n,460,14,3,z.RUG,3),Pe(e,t,n,3,.12),t.recoil=3,e.sfx(`lob`,t.x,t.y)}},{name:`Pump & Dump`,tag:`PND`,cooldown:.8,auto:!1,charge:Ie,release:!0,sprite:`pump`,range:`lobbed`,aim:{speed:Be(ze),gravity:Ve(ze),hold:ze*Ie},charging(e,t,n,r){let i=Math.floor(t.charge/Le);(t.charge<=r+1e-9||i!==Math.floor((t.charge-r)/Le))&&e.sfx(`pump${Math.min(i,11)}`,t.x,t.y,.7)},fire(e,t,n){if(t.charge>=2.4){at(e,t,n);return}let r=Math.max(Re,t.charge/Ie),{r:i,dmg:a}=He(r),o=Ne(e,t,n,Be(r),a,i,z.BALLOON,4);o.t=r,t.recoil=2,e.sfx(`lob`,t.x,t.y)}},{name:`Mining Rig`,tag:`RIG`,cooldown:1.4,auto:!1,charge:0,sprite:`rig`,range:`mid`,aim:{speed:260,gravity:0},digs:!0,fire(e,t,n){Ne(e,t,n,260,40,16,z.RIG,2.6),Pe(e,t,n,4,.15),t.recoil=3,e.sfx(`rig`,t.x,t.y)}},{name:`Hard Fork`,tag:`FRK`,cooldown:1.6,auto:!1,charge:0,sprite:`fork`,range:`lobbed`,aim:{speed:520,gravity:760},digs:!0,fire(e,t,n){Ne(e,t,n,520,24,13,z.FORK,4),Pe(e,t,n,3,.12),t.recoil=3,e.sfx(`lob`,t.x,t.y)}}],qe=.9;function Je(e,t,n){let r=Ne(e,t,n,520,66,20,z.GRENADE,1.9);r.vy-=60,e.sfx(`lob`,t.x,t.y)}function Ye(e,t,n,r){t.grenades>=3?t.grenadeT=0:(t.grenadeT+=r)>=5&&(t.grenades++,t.grenadeT=0),t.input.altPressed&&t.altCooldown<=0&&t.grenades>0&&(Je(e,t,n),t.grenades--,t.altCooldown=qe)}function Xe(e,t){let n=e.world;for(let r of e.projectiles)if(!r.dead){switch(r.age+=t,r.life-=t,r.kind){case z.BULLET:{let i=Math.ceil(Math.hypot(r.vx,r.vy)*t),a=r.vx*t/i,o=r.vy*t/i;r.vy+=90*t;for(let t=0;t<i&&!r.dead;t++){r.x+=a,r.y+=o;let t=e.actorAt(r.x,r.y,r.owner,r.age<.05?-1:0,r.owner);if(t){e.damage(t,r.dmg,r.owner,r.vx*.12,r.vy*.12-20),e.bloodPuff(t,r.x,r.y,r.vx,r.vy),r.dead=!0;break}let i=Math.floor(r.x),s=Math.floor(r.y),c=n.get(i,s);c!==P.AIR&&(e.chip(i,s,r.r,r.vx,r.vy,c,r.owner),r.dead=!0)}e.tick&1||e.parts.spawn(R.SPARK,r.x,r.y,0,0,.03,r.col);break}case z.ROCKET:{let n=Math.hypot(r.vx,r.vy),i=Math.min(830,n+1400*t)/(n||1);r.vx*=i,r.vy*=i,r.vy+=45*t,Ze(e,r,!0),Qe(e,r,t)&&et(e,r);break}case z.CLUSTER:if(r.vy+=820*t,Ze(e,r,!1),Qe(e,r,t)||r.age>.25&&r.vy>40){e.sfx(`split`,r.x,r.y);for(let t=0;t<7;t++){let n=-Math.PI/2+(t-3)/3*1.1+e.rng.spread(.1),i=e.rng.range(220,360);e.projectiles.push({kind:z.BOMBLET,x:r.x,y:r.y,vx:Math.cos(n)*i+r.vx*.4,vy:Math.sin(n)*i,life:3,age:0,owner:r.owner,col:r.col,dmg:16,r:15,t:0,dead:!1,bounces:0})}e.addLight(r.x,r.y,46,Me(r.col),.2),r.dead=!0}break;case z.BOMBLET:r.vy+=820*t,e.tick&1||e.parts.spawn(R.SMOKE,r.x,r.y,0,0,.35,je.smoke,1),Qe(e,r,t)&&et(e,r);break;case z.GRENADE:r.vy+=880*t,$e(e,r,t),e.tick&3||e.parts.spawn(R.SPARK,r.x,r.y-1,0,-10,.1,r.col),r.life<=0&&et(e,r);break;case z.DRILL:tt(e,r,t,5,1.8)&&(r.t+=t),r.t>0?(e.tick&1||e.sfx(`grind`,r.x,r.y,.4),e.parts.spawn(R.SPARK,r.x,r.y,e.rng.spread(190),e.rng.spread(190),.12,u(`#ffd28a`))):Ze(e,r,!1),(r.t>.5||r.life<=0)&&et(e,r);break;case z.ORB:if(r.vx*=1-.8*t,r.vy*=1-.8*t,r.t===0){for(let t=0;t<2;t++){let t=e.rng.next()*Math.PI*2;e.parts.spawn(R.MAGIC,r.x+Math.cos(t)*10,r.y+Math.sin(t)*10,-Math.cos(t)*48,-Math.sin(t)*48,.4,r.col)}e.addLight(r.x,r.y,40,r.col,.05),(Qe(e,r,t)||r.age>1)&&(r.t=1e-4,r.vx=r.vy=0,e.sfx(`implode`,r.x,r.y))}else r.t+=t,e.sinkholePull(r.x,r.y,r.r*2.2,r.t,r.owner),r.t>.7&&(e.sinkholeCollapse(r.x,r.y,r.r,r.dmg,r.owner),r.dead=!0);break;case z.FLAME:{r.vx*=1-1.6*t,r.vy=r.vy*(1-1.6*t)-140*t,r.x+=r.vx*t,r.y+=r.vy*t;let i=r.age/(r.age+r.life);e.rng.chance(.7)&&e.parts.spawn(R.FIRE,r.x+e.rng.spread(3),r.y+e.rng.spread(3),r.vx*.3,r.vy*.3,e.rng.range(.15,.35),r.col,1+ +(i>.3)+ +(i>.65));let a=e.actorAt(r.x,r.y,r.owner,2,r.owner);a&&(e.damage(a,r.dmg,r.owner,r.vx*.02,-4),a.flameT=1.2,r.dead=!0);let o=Math.floor(r.x),s=Math.floor(r.y);n.solid(o,s)&&(e.ignite(o,s),e.rng.chance(.3)&&e.ignite(o+e.rng.int(-3,3),s+e.rng.int(-3,3)),r.dead=!0),r.life<=0&&(r.dead=!0);break}case z.BALLOON:r.vy+=Ve(r.t)*t,(Qe(e,r,t)||r.life<=0)&&it(e,r);break;case z.RUG:if(r.vy+=900*t,r.t===0&&e.actorAt(r.x,r.y,r.owner,2,r.owner)&&(r.vx*=.15,r.t=1),ct(e,r,t)){let t=e.actors.find(e=>e.id===r.owner),n=t?Math.sign(t.x-r.x):-Math.sign(r.vx);e.rugs.lay(e,r.x,r.y,r.owner,r.col,n||1,r.dmg),r.dead=!0}r.life<=0&&(r.dead=!0);break;case z.RIG:{let n=r.t;if(tt(e,r,t,6,2.2,.5,!0)&&(r.t+=t),r.dead)break;r.t>0?(Math.floor(r.t/.25)>Math.floor(n/.25)&&ot(e,r),e.tick&1||e.sfx(`grind`,r.x,r.y,.4),e.parts.spawn(R.SPARK,r.x,r.y,e.rng.spread(160),e.rng.spread(160),.12,je.coin)):e.tick&1||e.parts.spawn(R.SPARK,r.x,r.y,0,0,.06,r.col),(r.t>1.1||r.life<=0)&&et(e,r);break}case z.FORK:r.vy+=760*t,e.tick&1||e.parts.spawn(R.SPARK,r.x,r.y,0,0,.06,Me(r.col)),(Qe(e,r,t)||r.life<=0)&&st(e,r);break;case z.TINE:if(tt(e,r,t,4.5,2,.5,!0)&&(r.t+=t),r.dead)break;r.t>0&&(e.tick&3||e.sfx(`grind`,r.x,r.y,.3),e.parts.spawn(R.SPARK,r.x,r.y,e.rng.spread(140),e.rng.spread(140),.1,Me(r.col))),(r.t>.3||r.life<=0)&&et(e,r)}r.life<=-.01&&!r.dead&&(r.dead=!0),(r.y>n.H+50||r.x<-50||r.x>n.W+50||r.y<-600)&&(r.dead=!0)}e.projectiles.some(e=>e.dead)&&(e.projectiles=e.projectiles.filter(e=>!e.dead))}function Ze(e,t,n){let r=Math.hypot(t.vx,t.vy)||1,i=t.x-t.vx/r*6,a=t.y-t.vy/r*6;e.parts.spawn(R.SMOKE,i+e.rng.spread(1.5),a+e.rng.spread(1.5),e.rng.spread(14),e.rng.spread(14),e.rng.range(.5,1.1),_(je.smoke,e.rng.range(.85,1.15)),2),n&&(e.parts.spawn(R.FIRE,i,a,-t.vx*.15+e.rng.spread(30),-t.vy*.15+e.rng.spread(30),e.rng.range(.08,.18),0,2),e.addLight(t.x,t.y,30,u(`#ffb060`),.03))}function Qe(e,t,n){let r=Math.max(1,Math.ceil(Math.hypot(t.vx,t.vy)*n));for(let i=0;i<r;i++){let i=t.x+t.vx*n/r,a=t.y+t.vy*n/r;if(e.world.solid(Math.floor(i),Math.floor(a))||(t.x=i,t.y=a,t.age>.06&&e.actorAt(t.x,t.y,-1,1,t.owner))||t.age<=.06&&e.actorAt(t.x,t.y,t.owner,1,t.owner))return!0}return!1}function $e(e,t,n){let r=e.world,i=Math.max(1,Math.ceil(Math.hypot(t.vx,t.vy)*n));for(let a=0;a<i;a++){let a=t.x+t.vx*n/i,o=t.y+t.vy*n/i,s=r.solid(Math.floor(a),Math.floor(t.y)),c=r.solid(Math.floor(t.x),Math.floor(o));if(s||c){s&&(t.vx=-t.vx*.45),c&&(t.vy=-t.vy*.4),t.vx*=.85,Math.abs(t.vy)>60&&t.bounces++<6&&e.sfx(`bounce`,t.x,t.y,.5);break}t.x=a,t.y=o}}function et(e,t){t.dead||(t.dead=!0,e.explode(t.x,t.y,t.r,t.dmg,t.owner))}function tt(e,t,n,r,i,a=.6,o=!1){let s=e.world,c=Math.ceil(Math.hypot(t.vx,t.vy)*n),l=!1;for(let u=0;u<c&&!t.dead;u++){if(t.x+=t.vx*n/c,t.y+=t.vy*n/c,e.actorAt(t.x,t.y,t.owner,2,t.owner)){et(e,t);break}let u=s.get(Math.floor(t.x),Math.floor(t.y));if(o&&u===P.BEDROCK){et(e,t);break}u!==P.AIR&&(l=!0,e.carve(t.x,t.y,r,{debris:a,force:.4,scorch:!1,ignite:0,sparks:1,power:i,owner:t.owner}))}return(t.x<2||t.x>s.W-2||t.y>s.H-2)&&et(e,t),l}var nt=[u(`#ff5ad0`),u(`#ffe04a`),u(`#5ae0ff`),u(`#7aff6a`),je.white];function rt(e,t,n,r,i){for(let a=0;a<i;a++){let i=e.rng.next()*Math.PI*2,o=e.rng.range(60,260);e.parts.spawn(R.SPARK,t,n,Math.cos(i)*o,Math.sin(i)*o-60,e.rng.range(.3,.8),a%3==0?r:e.rng.pick(nt))}e.sfx(`pop`,t,n)}function it(e,t){t.dead||(rt(e,t.x,t.y,t.col,10+Math.round(t.t*20)),ke(e,De,()=>et(e,t)))}function at(e,t,n){let r=t.sx+Math.cos(n)*8,i=t.sy+Math.sin(n)*8;rt(e,r,i,t.color,24),ke(e,De,()=>e.explode(r,i,13,90,t.id))}function ot(e,t){e.carve(t.x,t.y,10,{debris:.9,force:.7,scorch:!1,ignite:0,sparks:1,power:2.2,owner:t.owner}),t.r+=Ue.r,t.dmg+=Ue.dmg;for(let n=0;n<8;n++){let n=e.rng.next()*Math.PI*2,r=e.rng.range(80,220);e.parts.spawn(R.SPARK,t.x,t.y,Math.cos(n)*r,Math.sin(n)*r-40,e.rng.range(.2,.5),je.coin)}e.addLight(t.x,t.y,34,je.coin,.25),e.sfx(`ching`,t.x,t.y)}function st(e,t){if(t.dead)return;t.dead=!0;let n=Math.atan2(t.vy,t.vx);for(let r of[-1,1]){let i=n+r*We;e.projectiles.push({kind:z.TINE,x:t.x,y:t.y,vx:Math.cos(i)*Ge,vy:Math.sin(i)*Ge,life:.9,age:0,owner:t.owner,col:t.col,dmg:t.dmg,r:t.r,t:0,dead:!1,bounces:0})}e.addLight(t.x,t.y,30,Me(t.col),.15),e.sfx(`fork`,t.x,t.y)}function ct(e,t,n){let r=e.world,i=Math.max(1,Math.ceil(Math.hypot(t.vx,t.vy)*n));for(let e=0;e<i;e++){let e=t.x+t.vx*n/i,a=t.y+t.vy*n/i;if(!r.solid(Math.floor(e),Math.floor(a)))t.x=e,t.y=a;else{if(r.solid(Math.floor(t.x),Math.floor(t.y)+1)||r.solid(Math.floor(t.x),Math.floor(t.y)))return!0;r.solid(Math.floor(e),Math.floor(t.y))&&(t.vx=-t.vx*.2),r.solid(Math.floor(t.x),Math.floor(a))&&(t.vy=Math.max(0,t.vy));break}}return!1}var lt=e=>e===P.BEDROCK?1e9:1+ne[e]*6,ut=e=>+(e>=16),dt=420,ft=10,pt=.5;function mt(e,t,n){for(let r of e.actors)if(r.team===t.team&&r.lastHitT>0&&r.lastHitBy===n.id)return pt;return 1}function ht(e,t,n,r){let i=t.sx,a=t.sy,o=n-i,s=r-a,c=o*o+s*s||1;for(let n of e.actors){if(n===t||!n.alive||e.hostile(t,n))continue;let r=Math.max(0,Math.min(1,((n.cx-i)*o+(n.cy-a)*s)/c));if(Math.hypot(i+o*r-n.cx,a+s*r-n.cy)<ft)return!0}return!1}function gt(e,t=e.round.dt){for(let n of e.actors){if(!n.alive||!(n.bot||n===e.player&&e.autoPlayer))continue;let r=n.input;n.bot&&_t(e,n);let i=Ke[n.weapon],a=i.release===!0&&n.charge>0;if(r.fire||r.firePressed||a){let o=e.botBrains.find(e=>e.id===n.id),s=o&&o.target>=0?e.actors.find(e=>e.id===o.target):void 0,c=s?Math.hypot(s.cx-n.sx,s.cy-n.sy):400,l=Math.atan2(r.aimY-n.sy,r.aimX-n.sx);ht(e,n,n.sx+Math.cos(l)*c,n.sy+Math.sin(l)*c)&&(a?n.charge+t<i.charge?r.fire=!0:(n.charge=-1,r.fire=!1):r.fire=r.firePressed=!1)}}}function _t(e,t){let n,r=1/0,i,a=dt;for(let o of e.actors){if(o===t||o.team!==t.team)continue;let e=Math.hypot(o.x-t.x,o.y-t.y);vt(o)?e<a&&(a=e,i=o):o.alive&&!o.bot&&e<r&&(r=e,n=o)}(n||e.humans.some(e=>e.team===t.team))&&(i?yt(e,t,i.x,i.y,3):n&&r>200&&yt(e,t,n.x,n.y,100))}var vt=e=>e.downT>0;function yt(e,t,n,r,i){let a=t.input,o=n-t.x,s=Math.abs(o)<=i?0:Math.sign(o);a.left=s<0,a.right=s>0,a.down=r>t.y+40;let c=s!==0&&t.boxHits(e.world,t.x+s*5,t.y-8),l=!1;if(s!==0&&r<=t.y+40){l=!0;for(let n=0;n<120;n++)if(e.world.solid(Math.floor(t.x+s*10),Math.floor(t.y+n))){l=!1;break}}let u=r<t.y-30;(l||u||c&&t.fuel>.5)&&(t.onGround&&(a.jumpPressed=!0),a.jump=!0),St(e,t,u,e.mode.roster.length)}var bt=[7,4,1,0,2],xt=[...bt.filter(e=>Ke[e]!==void 0),...[...Ke.keys()].filter(e=>Ke[e].digs&&!bt.includes(e))];function St(e,t,n,r){let i=t.input,a=+!!i.right-!!i.left,o,s;if(a!==0&&t.boxHits(e.world,t.x+a*5,t.y-8))o=t.x+a*14,s=t.y-4-(e.tick>>3)%3*8;else if(n&&t.boxHits(e.world,t.x,t.y-4))o=t.x+a*6,s=t.y-40;else return!1;let c=e.mode.roster;for(let e of xt){let n=c.indexOf(e);if(!(n<0||n>=r)){e!==t.weapon&&(i.select=n);break}}return xt.includes(t.weapon)?(i.aimX=o,i.aimY=s,i.fire=!0,t.cooldown<=0&&(i.firePressed=!0),!0):!1}var Ct=u(`#ff3a2a`),wt=[`CREW`,`HORDE`],Tt=e=>wt[e]??`TEAM ${e+1}`;function Et(e,t){return e.mode.waves?t===0?e.waves.bonus+e.waves.crew:t===1?e.waves.horde:0:0}function Dt(e,t){let n=Et(e,t);for(let r of e.actors)r.team===t&&(n+=Se(r));return n}function Ot(e,t){let n=e.mode.waves&&t===0?e.waves.crewKills:0;for(let r of e.actors)r.team===t&&(n+=r.kills);return n}function kt(e){let t=e.mode.waves?[0,1]:[];for(let n of e.actors)t.includes(n.team)||t.push(n.team);return t.map(t=>{let n=e.humans.find(e=>e.team===t)??e.actors.find(e=>e.team===t);return{team:t,name:Tt(t),color:n?n.color:Ct,score:Dt(e,t)}}).sort((e,t)=>t.score-e.score||e.team-t.team)}function At(e,t){let n=kt(e),r=n.findIndex(e=>e.team===t.team);if(r<0||n.length<2)return null;let i=r===0,a=n[i?1:r-1];return{name:a.name,gap:Math.abs(a.score-n[r].score),leading:i}}var jt=[0,1,2,3,4,5,6,7,8],Mt=[9,10,11,12,13],Nt=[`moonboy`,`whale`,`diamond`,`bagholder`,`paperhands`,`degen`],Pt=Mt.length>0?Mt:jt,Ft={id:`classic`,name:`CLASSIC`,roster:jt,skins:[],teams:!1,waves:!1},It={id:`meme`,name:`MEME MAYHEM`,roster:Pt,skins:Nt,teams:!1,waves:!1},Lt={id:`coop`,name:`CO-OP`,roster:jt,skins:[],teams:!0,waves:!0},Rt={id:`meme-coop`,name:`MEME CO-OP`,roster:Pt,skins:Nt,teams:!0,waves:!0},zt=[Ft,It,Lt,Rt],Bt=e=>zt.find(t=>t.id===e)??Ft,Vt=2.6,Ht=e=>Math.floor(e.time/Vt)%e.mode.roster.length,Ut={PEA:0,RVT:1,SCT:2,THM:3,ARC:4,DRG:5,HAL:6,MOL:7,SNK:8},Wt=[{name:`EASY`,reaction:2.4,aimErr:2.6,botRange:.75},{name:`NORMAL`,reaction:1.5,aimErr:1.6,botRange:1},{name:`HARD`,reaction:1,aimErr:1,botRange:1.15}];function Gt(e){return e===0||e===1||e===2?e:1}function Kt(e,t){let n=e.botBrains;for(let e=0;e<n.length;e++)if(n[e].id===t.id)return n[e];let r={id:t.id,target:-1,decideT:0,strafe:e.rng.chance(.5)?1:-1,preferred:e.rng.range(110,250),stuckT:0,lastX:t.x,jetT:0,reaction:e.rng.range(.25,.5),seenT:0,aimErr:e.rng.range(.03,.08),grenadeT:e.rng.range(2,5)};return n.push(r),r}var qt=[Ut.HAL,Ut.MOL,Ut.THM,Ut.SNK],Jt=[Ut.SCT,Ut.DRG,Ut.RVT],Yt=[Ut.RVT,Ut.PEA,Ut.THM,Ut.SCT],Xt=[Ut.THM,Ut.ARC,Ut.PEA,Ut.HAL],Zt=[`lobbed`,`mid`,`far`,`near`],Qt=[`near`,`mid`,`lobbed`,`far`],$t=[`mid`,`lobbed`,`near`,`far`],en=[`far`,`lobbed`,`mid`,`near`];function tn(e,t){let n=e.mode.roster.length;return e.mode.waves&&t.id>=16?Math.max(1,Math.min(n,e.waves.pool)):n}function nn(e,t){let n=e.mode.roster,r=0;for(let e=0;e<t;e++)Ke[n[e]].digs&&r++;return r}function rn(e,t,n,r){let i=e.mode.roster;if(!t){let t=nn(e,r);if(t>0){let n=e.rng.int(0,t-1);for(let e=0;e<r;e++)if(Ke[i[e]].digs&&n--===0)return e}}let a=t?n<150?Qt:n<270?$t:en:Zt,o=e.rng.chance(.25)&&t?1:0;for(let n of a){if(!t&&n===`near`)continue;let a=0;for(let e=0;e<r;e++)Ke[i[e]].range===n&&a++;if(a===0||o-->0)continue;let s=e.rng.int(0,a-1);for(let e=0;e<r;e++)if(Ke[i[e]].range===n&&s--===0)return e}return e.rng.int(0,r-1)}function an(e,t,n,r,i){let a=r-t,o=i-n,s=Math.max(Math.abs(a),Math.abs(o));if(s<1)return!1;let c=a/s,l=o/s,u=t,d=n;for(let t=0;t<=s;t++){if(e.world.solid(Math.floor(u),Math.floor(d)))return!0;u+=c,d+=l}return!1}function on(e,t,n,r){let i=n*n,a=i*i-r*(r*e*e+2*t*i);if(a<0)return NaN;let o=Math.atan2(i-Math.sqrt(a),r*Math.abs(e));return e>=0?-o:Math.PI+o}function sn(e,t){let n=e.actors,r=Wt[e.botSkill]??Wt[1];for(let i=0;i<n.length;i++){let a=n[i],o=a===e.player&&e.autoPlayer;if(!a.bot&&!o||!a.alive)continue;let s=o&&e.showcase,c=e.mode.roster===jt,l=Kt(e,a),u=a.input;l.decideT-=t,l.grenadeT-=t;let d;for(let e=0;e<n.length;e++){let t=n[e];if(t.id===l.target&&t.alive){d=t;break}}if(!d||l.decideT<=0){let t,i=1e9;for(let o=0;o<n.length;o++){let s=n[o];if(s===a||!s.alive||!e.hostile(a,s))continue;let c=Math.hypot(s.x-a.x,s.y-a.y)*(s.bot?r.botRange:1);e.mode.teams&&(c*=mt(e,a,s)),c<i&&(i=c,t=s)}d=t,l.target=d?d.id:-1,l.decideT=e.rng.range(1.5,3),e.rng.chance(.3)&&(l.strafe=-l.strafe)}if(u.left=u.right=u.jump=u.fire=u.down=!1,!d){if(u.aimX=a.x+a.facing*90,u.aimY=a.y+(s?10:-10),s){let t=Ht(e);a.weapon!==e.mode.roster[t]&&(u.select=t),u.fire=!0,a.cooldown<=0&&(u.firePressed=!0);let n=Ke[a.weapon];n.release&&a.charge>=(n.aim?.hold??n.charge*.5)&&(u.fire=!1)}continue}let f=d.cx-a.sx,p=d.cy-a.sy,m=Math.hypot(f,p),h=!an(e,a.sx,a.sy,d.cx,d.cy);h?l.seenT+=t:l.seenT=0;let g=c?0:tn(e,a),_=!c&&!h&&a.charge<0&&!Ke[a.weapon].digs&&(e.tick+a.id*17)%30==0&&nn(e,g)>0;if(l.decideT>2.9||(e.tick+a.id*17)%120==0||s&&e.tick%30==0||_){let t;t=c?h?m<100?e.rng.pick(Jt):m<270?e.rng.pick(Yt):e.rng.pick(Xt):e.rng.pick(qt):rn(e,h,m,g),s&&(t=Ht(e)),e.mode.roster[t]!==a.weapon&&(u.select=t)}let v=Ke[a.weapon],y=!c&&v.range===`near`?70:l.preferred,b=0;if(b=m>y+40||!h?Math.sign(f):m<y-40?-Math.sign(f):l.strafe,b>0?u.right=!0:b<0&&(u.left=!0),Math.abs(a.x-l.lastX)<.3&&b!==0?l.stuckT+=t:l.stuckT=Math.max(0,l.stuckT-t*2),l.lastX=a.x,(b!==0&&a.boxHits(e.world,a.x+b*5,a.y-8)||l.stuckT>.25)&&a.onGround&&(u.jumpPressed=!0),(l.stuckT>.6||p<-80)&&(l.jetT=.5),l.jetT>0&&(l.jetT-=t,u.jump=!0),a.onGround&&b!==0){let t=!1;for(let n=0;n<200;n++)if(e.world.solid(Math.floor(a.x+b*10),Math.floor(a.y+n))){t=!0;break}t||(u.left=u.right=!1,l.strafe=-l.strafe)}let x=!c&&v.digs===!0&&!h,S=a.weapon,C,w=v.aim;if(S===Ut.HAL)C=on(f,-p,560,820),Number.isNaN(C)&&(C=Math.atan2(p,f)-.5);else if(w&&w.gravity>0)C=on(f,-p,w.speed,w.gravity),Number.isNaN(C)&&(C=Math.atan2(p,f)-.5);else if(x)C=Math.atan2(p,f);else{let e=m/(w?w.speed:S===Ut.THM?600:S===Ut.DRG?430:S===Ut.SNK?190:1350);C=Math.atan2(p+d.vy*e*.5,f+d.vx*e)}C+=Math.sin(e.time*2.3+a.id)*l.aimErr*r.aimErr*(x?.5:1),u.aimX=a.sx+Math.cos(C)*60,u.aimY=a.sy+Math.sin(C)*60;let T=e.twist.oneWeapon,E=S===Ut.HAL||S===Ut.MOL||S===Ut.SNK||w!==void 0&&w.gravity>0||x||T&&!h,D=!h&&m>=520&&l.stuckT>1&&l.stuckT%4<.7;if((h&&l.seenT>l.reaction*r.reaction||E&&m<(x?680:520)&&e.rng.chance(x?.05:.02)||s||D||T&&a.charge>=0)&&(m<680||s||D)&&(u.fire=!0,a.cooldown<=0&&(u.firePressed=!0)),v.release&&a.charge>=0&&(u.fire=a.charge<(w?.hold??v.charge*.5)),s&&e.tick%60==0&&a.weapon!==e.mode.roster[Ht(e)]&&(u.select=Ht(e)),l.grenadeT<=0&&(m<320||s)){let t=on(f,-p,520,880);Number.isNaN(t)&&s&&(t=f>=0?-.8:Math.PI+.8),Number.isNaN(t)||(u.aimX=a.sx+Math.cos(t)*60,u.aimY=a.sy+Math.sin(t)*60,u.altPressed=!0),l.grenadeT=e.rng.range(3,7)}}}function cn(e){e.botBrains=e.botBrains.filter(t=>t.id>=16&&e.actors.some(e=>e.id===t.id))}var ln=class e{x;y;vx=0;vy=0;a=0;w;av=0;bw;bh;lcx;lcy;mats;cols;edge;mass;age=0;dead=!1;constructor(t,n,r,i,a,o){this.bw=t,this.bh=n,this.mats=r,this.cols=i;let s=0,c=0,l=0,u=0;for(let i=0;i<n;i++)for(let a=0;a<t;a++)r[i*t+a]!==P.AIR&&(s+=a,c+=i,l++,e.onEdge(r,t,n,a,i)&&u++);this.mass=l,this.lcx=l?s/l:t/2,this.lcy=l?c/l:n/2,this.x=a+this.lcx+.5,this.y=o+this.lcy+.5;let d=u>600?2:1,f=new Int16Array(Math.ceil(u/d)*2),p=0,m=0;for(let i=0;i<n;i++)for(let a=0;a<t;a++)r[i*t+a]!==P.AIR&&e.onEdge(r,t,n,a,i)&&p++%d===0&&(f[m++]=a,f[m++]=i);this.edge=f,this.w=0}static onEdge(e,t,n,r,i){return r===0||i===0||r===t-1||i===n-1||e[i*t+r-1]===P.AIR||e[i*t+r+1]===P.AIR||e[(i-1)*t+r]===P.AIR||e[(i+1)*t+r]===P.AIR}toWorld(e,t,n=this.x,r=this.y,i=this.a){let a=Math.cos(i),o=Math.sin(i),s=e+.5-this.lcx,c=t+.5-this.lcy;return[Math.floor(n+s*a-c*o),Math.floor(r+s*o+c*a)]}hits(e,t,n,r){let i=this.edge,a=Math.cos(r),o=Math.sin(r);for(let r=0;r<i.length;r+=2){let s=i[r]+.5-this.lcx,c=i[r+1]+.5-this.lcy,l=Math.floor(t+s*a-c*o),u=Math.floor(n+s*o+c*a),d=e.get(l,u);if(d!==P.AIR&&!ie[d])return!0}return!1}forEachCovered(e){let t=Math.cos(this.a),n=Math.sin(this.a),r=Math.ceil(Math.hypot(this.bw,this.bh)/2)+2,i=Math.floor(this.x),a=Math.floor(this.y);for(let o=a-r;o<=a+r;o++)for(let a=i-r;a<=i+r;a++){let r=a+.5-this.x,i=o+.5-this.y,s=Math.floor(r*t+i*n+this.lcx),c=Math.floor(-r*n+i*t+this.lcy);if(s<0||c<0||s>=this.bw||c>=this.bh)continue;let l=c*this.bw+s;this.mats[l]!==P.AIR&&e(a,o,l)}}},un=class{list=[];visit;stamp=0;stack;cells;constructor(e){this.visit=new Uint32Array(e.W*e.H),this.stack=new Int32Array(e.W*e.H),this.cells=new Int32Array(Math.min(e.W*e.H,40001))}detachAround(e,t,n,r,i=4e4){let a=e.W,o=e.H,s=e.mat,c=[];this.stamp++;let l=this.stamp,u=r+2,d=Math.max(16,Math.ceil(2*Math.PI*u));for(let r=0;r<d;r++){let f=r/d*Math.PI*2,p=Math.cos(f),m=Math.sin(f);for(let r=0;r<2;r++){let d=u+r*2,f=Math.floor(t+p*d),h=Math.floor(n+m*d);if(!e.inside(f,h))continue;let g=h*a+f,_=s[g];if(_===P.AIR||_===P.BEDROCK||ie[_]||e.anchor[g]||this.visit[g]===l)continue;let v=0,y=0,b=!1;this.stack[v++]=g,this.visit[g]=l;let x=f,S=f,C=h,w=h;for(;v>0;){let t=this.stack[--v];if(y<i&&(this.cells[y]=t),y++,y>i){b=!0;break}let n=t/a|0,r=t-n*a;if(r<x&&(x=r),r>S&&(S=r),n<C&&(C=n),n>w&&(w=n),n>=o-1||r<=0||r>=a-1){b=!0;break}for(let n=0;n<4;n++){let r=n===0?t-1:n===1?t+1:n===2?t-a:t+a;if(r<0||r>=s.length)continue;let i=s[r];if(!(i===P.AIR||ie[i])){if(i===P.BEDROCK||e.anchor[r]){b=!0;break}this.visit[r]!==l&&(this.visit[r]=l,this.stack[v++]=r)}}if(b)break}if(b)continue;let T=S-x+1,E=w-C+1,D=new Uint8Array(T*E),O=new Uint32Array(T*E);for(let t=0;t<y;t++){let n=this.cells[t],r=n/a|0,i=n-r*a,o=(r-C)*T+(i-x);D[o]=s[n],O[o]=e.col[n],e.clear(i,r)}let k=new ln(T,E,D,O,x,C);c.push(k),this.list.push(k)}}return c}update(e,t,n,r,i){for(let a of this.list){if(a.dead)continue;a.age+=r,a.vy=Math.min(a.vy+820*r,1400);let o=Math.max(1,Math.ceil((Math.abs(a.vx)+Math.abs(a.vy))*r)),s=a.vx*r/o,c=a.vy*r/o,l=a.av*r/o,u=!1;for(let t=0;t<o;t++){let t=a.x+s,n=a.y+c,r=a.a+l;if(a.hits(e,t,n,r)){u=!0;break}a.x=t,a.y=n,a.a=r}if(a.y>e.H+200&&(a.dead=!0),!u)continue;let d=Math.hypot(a.vx,a.vy);i(a,d);let f=d>250?Math.min(.45,(d-250)/1400):0;a.forEachCovered((r,i,o)=>{if(!e.inside(r,i)||e.get(r,i)!==P.AIR)return;let s=a.mats[o],c=a.cols[o];f>0&&n.chance(f)?t.spawn(R.CRUMB,r+.5,i+.5,n.spread(130)+a.vx*.2,-n.range(50,220),n.range(.6,1.6),c):e.set(r,i,s,s===P.GLASS?c:_(c,.96))}),a.dead=!0}let a=this.list,o=0;for(let e=0;e<a.length;e++){let t=a[e];t.dead||(a[o++]=t)}a.length=o}clear(){this.list=[]}},dn={r0:5,grow:2.6,fade:2.8,gone:.07,drag:3,wind:.9,rise:-4,push:2200,lift:.3,every:15,min:.12,sting:2.2,fuse:.05,jitter:.04,reach:1.1,blast:.25,perOwner:40,max:200},fn=.9940652993697221,pn=u(`#9ae04a`),mn=class{puffs=[];loudTick=-100;whoompTick=-100;clear(){this.puffs=[]}emit(e,t,n,r,i){let a=0;for(let e of this.puffs)e.owner===i&&e.fuse<0&&a++;if(a>=dn.perOwner){let e=this.puffs.findIndex(e=>e.owner===i&&e.fuse<0);this.puffs.splice(e,1)}this.puffs.length>=dn.max&&this.puffs.shift(),this.puffs.push({x:e,y:t,vx:n,vy:r,r:dn.r0,amt:1,owner:i,age:0,fuse:-1,by:i})}density(e,t,n=-1){let r=0;for(let i of this.puffs){if(i.fuse>=0||i.owner===n)continue;let a=e-i.x,o=t-i.y,s=i.r*i.r,c=a*a+o*o;c<s&&(r+=i.amt*(1-c/s))}return r}step(e,t){if(this.puffs.length===0)return;let n=e.world,r=Math.min(1,dn.drag*t);for(let i of this.puffs){i.age+=t,i.r+=dn.grow*t,i.amt*=fn,i.vx+=(e.wind*dn.wind-i.vx)*r,i.vy+=(dn.rise-i.vy)*r;let a=i.x+i.vx*t,o=i.y+i.vy*t;n.solid(Math.floor(a),Math.floor(i.y))?i.vx*=-.3:i.x=a,n.solid(Math.floor(i.x),Math.floor(o))?i.vy*=-.3:i.y=o,(i.x<0||i.y<0||i.x>=n.W||i.y>=n.H)&&(i.amt=0)}e.round.phase===`running`&&(this.catchFire(e),this.touch(e,t)),this.burn(e,t),this.puffs.some(e=>e.amt<dn.gone&&e.fuse<0)&&(this.puffs=this.puffs.filter(e=>e.amt>=dn.gone||e.fuse>=0))}touch(e,t){for(let n of e.actors){if(!n.alive)continue;let r=0,i=0,a=0,o=0,s=-1;for(let t of this.puffs){if(t.fuse>=0||e.mode.teams&&!e.hostile(t.owner,n))continue;let c=n.cx-t.x,l=n.cy-t.y,u=t.r*t.r,d=c*c+l*l;if(d>=u)continue;let f=t.amt*(1-d/u),p=Math.sqrt(d);p>.5&&(r+=c/p*f,i+=l/p*f),t.owner!==n.id&&(a+=f,f>o&&(o=f,s=t.owner))}if(n.vx+=r*dn.push*t,n.vy+=i*dn.push*dn.lift*t,a>=dn.min&&(e.tick+n.id)%dn.every===0){ke(e,Te,()=>e.damage(n,dn.sting*Math.min(1.5,a),s,0,0));for(let t=0;t<2;t++)e.parts.spawn(R.MAGIC,n.x+e.rng.spread(4),n.y-22,e.rng.spread(20),-e.rng.range(10,30),.5,pn);n.bot||e.sfx(`cough`,n.x,n.y,.5)}}}catchFire(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let e of this.puffs)e.fuse>=0||(t=Math.min(t,e.x-e.r),n=Math.min(n,e.y-e.r),r=Math.max(r,e.x+e.r),i=Math.max(i,e.y+e.r));if(t>r)return;let a=(e,a)=>e>=t&&e<=r&&a>=n&&a<=i;for(let t of e.projectiles)t.kind===z.FLAME&&!t.dead&&a(t.x,t.y)&&this.lightAt(t.x,t.y,t.owner);let o=e.parts;for(let e=0;e<o.n;e++){if(o.kind[e]!==R.FIRE)continue;let t=o.x[e],n=o.y[e];a(t,n)&&this.lightAt(t,n,-1,o.size[e])}let s=e.world;for(let t of e.burning){if(s.mat[t]!==P.EMBER)continue;let e=t/s.W|0,n=t-e*s.W;a(n+.5,e+.5)&&this.lightAt(n+.5,e+.5,-1)}}lightAt(e,t,n,r=1){for(let i of this.puffs){if(i.fuse>=0)continue;let a=e-i.x,o=t-i.y,s=i.r+r;a*a+o*o<s*s&&(i.fuse=0,i.by=n>=0?n:i.owner)}}burn(e,t){let n=[];for(let r of this.puffs)r.fuse<0||(r.fuse===0&&e.tick-this.whoompTick>30&&(this.whoompTick=e.tick,e.sfx(`whoomp`,r.x,r.y)),r.fuse+=t,e.parts.spawn(R.FIRE,r.x+e.rng.spread(r.r*.6),r.y+e.rng.spread(r.r*.6),e.rng.spread(40),-e.rng.range(10,50),e.rng.range(.15,.3),0,2),r.fuse>=dn.fuse+x(Math.floor(r.x),Math.floor(r.y),e.tick)*dn.jitter&&n.push(r));if(n.length!==0){this.puffs=this.puffs.filter(e=>!n.includes(e));for(let t of n){let n=t.amt;for(let e of this.puffs){if(e.fuse>=0)continue;let n=(t.r+e.r)*dn.reach,r=e.x-t.x,i=e.y-t.y;r*r+i*i<n*n&&(e.fuse=0,e.by=t.by)}if(n>=dn.blast){let r=Math.min(1,n),i=e.tick-this.loudTick<6;i||(this.loudTick=e.tick),ke(e,Ee,()=>e.explode(t.x,t.y,4+6*r,12+20*r,t.by,i))}else{for(let n=0;n<6;n++){let n=e.rng.next()*Math.PI*2,r=e.rng.range(20,90);e.parts.spawn(R.FIRE,t.x,t.y,Math.cos(n)*r,Math.sin(n)*r,e.rng.range(.15,.35),0,e.rng.int(1,3))}e.addLight(t.x,t.y,t.r*2,u(`#ffb468`),.15)}}}}},hn={w:36,delay:1,warn:.4,depth:12,gone:.35,self:.5,blame:3};function gn(e,t,n){let r=e.world,i=r.get(t,n);return(i===P.GRASS||i===P.LEAF)&&(!r.solid(t-1,n)||!r.solid(t+1,n))}var _n=class e{list=[];yanked=[];clear(){this.list=[],this.yanked=[]}get thrown(){return this.yanked}lay(e,t,n,r,i,a,o){let s=e.world,c=Math.floor(t),l=(t,n)=>{for(let r=n-6;r<=n+10;r++)if(s.solid(t,r)&&!gn(e,t,r)&&(!s.solid(t,r-1)||gn(e,t,r-1)))return r;return-1},d=l(c,Math.floor(n));if(d<0)return!1;let f=c-(hn.w>>1),p=new Int16Array(hn.w).fill(-1);for(let e of[1,-1]){let t=d;for(let n=c-f;n>=0&&n<hn.w;n+=e){let e=s.inside(f+n,t)?l(f+n,t):-1;p[n]=e,e>=0&&(t=e)}}this.list.push({x0:f,top:p,owner:r,col:i,dir:a>=0?1:-1,dmg:o,age:0,warned:!1,pulled:!1}),e.sfx(`flop`,t,n);for(let n=0;n<8;n++)e.parts.spawn(R.SMOKE,t+e.rng.spread(hn.w/2),d-1,e.rng.spread(40),-e.rng.range(5,25),e.rng.range(.3,.6),u(`#b8aea0`),1);return!0}static topAt(e,t){let n=Math.max(0,Math.min(hn.w-1,Math.floor(t)-e.x0));return e.top[n]}step(t,n){if(this.yanked.length&&this.watch(t,n),this.list.length!==0){for(let r of this.list)r.age+=n,!r.warned&&r.age>=hn.delay-hn.warn&&(r.warned=!0,t.sfx(`tug`,r.x0+hn.w/2,e.topAt(r,r.x0+hn.w/2))),!r.pulled&&r.age>=hn.delay&&(r.pulled=!0,t.round.phase===`running`?this.pull(t,r):r.age=hn.delay+hn.gone);this.list=this.list.filter(e=>e.age<hn.delay+hn.gone)}}pull(t,n){let r=t.world,i=n.x0+hn.w-1,a=t.actors.filter(t=>{if(!t.alive||t.x<n.x0-3||t.x>i+3)return!1;let r=e.topAt(n,t.x);return r>=0&&t.y>=r-4&&t.y<=r+2}),o=0,s=r.H,c=0;for(let e=0;e<hn.w;e++){let i=n.top[e];if(i<0)continue;let a=n.x0+e;for(let e=0;e<6&&!r.solid(a,i);e++)i++;for(let e=i-6;e<i;e++)gn(t,a,e)&&(r.clear(a,e),o++);for(let e=i;e<i+hn.depth;e++){let i=r.get(a,e);if(i===P.BEDROCK)break;if(i===P.AIR)continue;let s=r.col[e*r.W+a];r.clear(a,e),o++,t.rng.chance(.22)&&t.parts.spawn(R.CRUMB,a+.5,e+.5,n.dir*t.rng.range(140,320),-t.rng.range(40,160),t.rng.range(.5,1.4),s)}s=Math.min(s,i),c=Math.max(c,i+hn.depth)}let l=n.x0+hn.w/2;if(o>0){r.wakeRect(n.x0-2,s-3,i+2,c+1),t.addDestruction(n.owner,o,l,s);for(let e=n.x0+6;e<=i;e+=12)t.detach(e,(s+c)/2,8,.25)}for(let e of a){let r=e.id===n.owner?n.dmg*hn.self:n.dmg;ke(t,I,()=>t.damage(e,r,n.owner,n.dir*70,60)),e.alive&&t.hostile(n.owner,e)&&this.yanked.push({id:e.id,by:n.owner,deaths:e.deaths,t:hn.blame})}for(let e=0;e<14;e++)t.parts.spawn(R.SMOKE,n.x0+t.rng.range(0,hn.w),s-1,n.dir*t.rng.range(20,90),-t.rng.range(5,30),t.rng.range(.4,.9),_(u(`#b8aea0`),t.rng.range(.8,1.1)),2);t.shake(.22,l,s),t.sfx(`snap`,l,s)}watch(e,t){for(let n of this.yanked){n.t-=t;let r=e.actors.find(e=>e.id===n.id);if(r&&r.deaths>n.deaths){let t=L(e,r);(t?t.id:r.id)===n.by&&Oe(e,r,I),n.t=0}}this.yanked=this.yanked.filter(e=>e.t>0)}};function vn(e,t){for(let n=t-1;n>=0;n--)if(!Ke[e[n]].digs)return n;return t-1}var yn=.4,bn=1.1,xn=18,Sn=100,Cn=260,wn=640,Tn=20,En=()=>({wave:0,phase:`rest`,t:3,toSpawn:0,spawnT:0,nextId:16,pool:0,skill:1,bossId:-1,bossHp:0,bonus:0,horde:0,crew:0,crewKills:0,revives:0,quiet:0}),Dn=e=>e>0&&e%5==0,On=e=>Math.min(xn,2+e+Math.floor(e/3)),kn=e=>Math.min(8,3+Math.floor(e/2)),An=(e,t)=>Math.max(1,Math.min(t,1+e)),jn=e=>Math.max(.45,1.4-.09*(e-1)),Mn=e=>6+2*(e/5-1);function Nn(e){return e.mode.id===Rt.id?{name:`THE WHALE`,color:u(`#4a8aff`),scarf:u(`#f6f1e4`)}:{name:`FOREMAN`,color:u(`#ff3a2a`),scarf:u(`#ffe04a`)}}var Pn=[`#b8b0a8`,`#c08a6a`,`#9aa070`,`#8a9ab8`,`#b07a9a`,`#d0b878`].map(e=>u(e)),Fn=u(`#ff2a3a`),In=[`SCRAP`,`GRIT`,`SLAG`,`CLINK`,`DENT`,`BOLT`,`SOOT`,`FLINT`],Ln=[`RUGPULL`,`PAPERHANDS`,`BAGHOLDER`,`FUDDER`,`SHILL`,`PUMPER`,`DUMPER`,`FOMO`],Rn=e=>e.bot&&e.id>=16;function zn(e){let t=e.waves.phase===`fight`?e.waves.toSpawn:0;for(let n of e.actors)Rn(n)&&n.alive&&t++;return t}var Bn=(e,t)=>t.id===e.waves.bossId&&e.waves.bossHp>0?e.waves.bossHp:e.twist.hp;function Vn(e){qn(e),e.waves=En()}function Hn(e){let t=e.waves.pool;for(let n of e.actors){if(!Rn(n)||!n.alive)continue;let r=n.input;r.cycle=0,r.select>=t&&(r.select=-1);let i=e.botBrains.find(e=>e.id===n.id),a=i&&i.target>=0?e.actors.find(e=>e.id===i.target):void 0;i&&a&&i.seenT===0&&St(e,n,a.y<n.y-30,t)}}function Un(e,t){let n=e.waves;if(n.phase===`over`)return;for(let n of e.actors)n.team===0&&!n.alive&&er(e,n,t);if(!e.round.hold&&e.humans.length>0&&!e.humans.some(e=>e.alive&&!e.bot)){n.phase=`over`,e.endRound();return}if(n.phase===`rest`){n.t-=t,n.t<=0&&Wn(e,n.wave+1);return}if(n.t+=t,n.spawnT-=t,n.quiet=e.events.some(e=>e.t===`hit`&&e.by!==e.victim)?0:n.quiet+t,n.quiet>Tn){n.quiet=0;for(let t of e.actors){if(!Rn(t)||!t.alive)continue;let n=e.botBrains.find(e=>e.id===t.id);n&&n.seenT!==0||Yn(e,t)}}let r=0;for(let t of e.actors)Rn(t)&&t.alive&&r++;n.toSpawn>0&&n.spawnT<=0&&r<kn(n.wave)&&(Kn(e,Dn(n.wave)&&n.bossId<0),n.toSpawn--,n.spawnT=bn,r++),n.toSpawn===0&&r===0&&Gn(e)}function Wn(e,t){let n=e.waves;qn(e),n.wave=t,n.phase=`fight`,n.t=0,n.toSpawn=On(t),n.spawnT=0,n.pool=An(t,e.mode.roster.length),n.skill=jn(t),n.bossId=-1,n.bossHp=0,n.quiet=0;for(let n of e.actors)n.team===0&&(!n.alive||t===1&&n.bot&&$n(e,n)?e.respawn(n,Qn(e,n)):n.hp=Math.max(n.hp,e.twist.hp));e.log(Dn(t)?`WAVE ${t}: ${Nn(e).name}`:`WAVE ${t}`)}function Gn(e){let t=e.waves;t.phase=`rest`,t.t=6;let n=Sn*t.wave;t.bonus+=n,e.log(`WAVE ${t.wave} CLEARED`);for(let r of e.humans)e.events.push({t:`callout`,by:r.id,text:`WAVE ${t.wave} CLEARED`,points:n})}function Kn(e,t){let n=e.waves,r=n.nextId++,i=e.mode.id===Rt.id,a=t?Nn(e):{name:e.rng.pick(i?Ln:In),color:e.rng.pick(Pn),scarf:Fn},o=new O(r,a.name,1,!0,a.color,a.scarf),s=e.mode.roster;o.weapon=s[t?vn(s,n.pool):e.rng.int(0,n.pool-1)],e.actors.push(o),e.respawn(o,Xn(e));let c=Kt(e,o);c.reaction*=n.skill*(t?.8:1),c.aimErr*=n.skill*(t?.8:1),t&&(o.hp=Math.round(e.twist.hp*Mn(n.wave)),n.bossId=r,n.bossHp=o.hp,e.log(`${a.name} IS HERE`),e.sfx(`boom`,o.x,o.y,.8))}function qn(e){if(e.actors.some(Rn)){for(let t of e.actors)Rn(t)&&(e.waves.horde+=t.score+t.comboPts);e.actors=e.actors.filter(e=>!Rn(e)),e.botBrains=e.botBrains.filter(e=>e.id<16)}}function Jn(e,t){e.mode.waves&&t.team===0&&(e.waves.crew+=t.score+t.comboPts,e.waves.crewKills+=t.kills)}function Yn(e,t){let n=t.hp,r=t.weapon;e.respawn(t,Xn(e)),t.hp=n,t.weapon=r}function Xn(e){let t=e.arena.spawns;if(t.length===0)return;let n=e.humans.filter(e=>e.alive),r=n.length>0?n:e.humans,i=t.map((e,t)=>{let n=1/0;for(let t of r)n=Math.min(n,Math.hypot(t.x-e.x,t.y-e.y));return{i:t,d:r.length>0?n:0}}),a=i.filter(e=>e.d>=Cn&&e.d<=wn).sort((e,t)=>t.d-e.d||e.i-t.i);return a.length===0&&(a=i.filter(e=>e.d>wn).sort((e,t)=>e.d-t.d||e.i-t.i)),a.length===0&&(a=i.sort((e,t)=>t.d-e.d||e.i-t.i)),t[a[e.rng.int(0,Math.min(2,a.length-1))].i]}var Zn=16;function Qn(e,t){let n=e.humans.find(e=>e.alive&&e!==t),r=e.arena.spawns;if(!n||r.length===0)return;let i=r.map((e,t)=>({i:t,d:Math.hypot(n.x-e.x,n.y-e.y)})).sort((e,t)=>e.d-t.d||e.i-t.i),a=n=>e.actors.some(e=>e!==t&&e.alive&&e.team===0&&Math.hypot(e.x-n.x,e.y-n.y)<Zn);for(let e of i)if(!a(r[e.i]))return r[e.i];return r[i[0].i]}function $n(e,t){let n=1/0;for(let r of e.humans)r.alive&&(n=Math.min(n,Math.hypot(r.x-t.x,r.y-t.y)));return n>200}function er(e,t,n){if(t.out)return;if(t.downT<=0){t.downT=12,t.reviveT=0,t.vx=0,t.vy=Math.max(0,t.vy),t.charge=-1,t.flameT=0;return}if(rr(e,t,n),t.y>e.world.H+60){tr(e,t);return}let r;for(let n of e.actors)if(n.alive&&n.team===t.team&&Math.abs(n.x-t.x)<=16&&Math.abs(n.y-t.y)<=24){r=n;break}if(r){if(t.reviveT+=n,t.reviveT>=2){nr(e,t,r);return}}else t.reviveT=Math.max(0,t.reviveT-n);t.downT-=n,t.downT<=0&&(e.round.hold?nr(e,t,void 0):tr(e,t))}function tr(e,t){t.downT=0,t.reviveT=0,t.out=!0,e.log(`${t.name} IS OUT`)}function nr(e,t,n){t.alive=!0,t.hp=Math.max(1,Math.round(e.twist.hp*yn)),t.invulnT=1.5,t.downT=0,t.reviveT=0,t.out=!1,t.fuel=D.fuelMax,t.lastHitT=0,n&&(e.waves.revives++,e.log(`${n.name} REVIVED ${t.name}`)),e.sfx(`bank`,t.x,t.y)}function rr(e,t,n){t.vy=Math.min(D.maxFall,t.vy+D.gravity*e.twist.gravity*n);let r=t.vy*n;for(;r>1e-6;){let n=Math.min(1,r);if(t.boxHits(e.world,t.x,t.y+n)){t.vy=0;break}t.y+=n,r-=n}}var ir=1/60,ar=2.4,or=.25,sr=3,cr=[.1,.25,.5,.75],lr=[``,``,`DOUBLE KILL`,`TRIPLE KILL`,`QUAD KILL`,`OVERKILL`],ur={3:`ON FIRE`,5:`WRECKING CREW`,8:`UNSTOPPABLE`,12:`WALKING DISASTER`},dr=u(`#1a1422`),fr=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],pr=[u(`#fff6c8`),u(`#ffe27a`),u(`#ffb23d`),u(`#ff7a2a`),u(`#e5481f`),u(`#9a2a1c`),u(`#4a1a16`)],mr=5;function hr(e,t,n){let r=e.skins.length;if(r===0)return``;let i=t>=16?t-16+(r>>1):t>mr?mr-t:t,a=Math.floor(x(r,7,n)*r);return e.skins[((i+a)%r+r)%r]}var gr=[{name:`YOU`,color:u(`#4fe3ff`),scarf:u(`#ff4a5a`)},{name:`P2`,color:u(`#f6f1e4`),scarf:u(`#3a8aff`)},{name:`P3`,color:u(`#3affc0`),scarf:u(`#c03aff`)},{name:`P4`,color:u(`#a0a8ff`),scarf:u(`#ffe04a`)}],_r=[{name:`RUST`,color:u(`#ff7a4a`),scarf:u(`#ffd04a`)},{name:`MOSS`,color:u(`#7ae05a`),scarf:u(`#2f8a3a`)},{name:`VOLT`,color:u(`#ffe04a`),scarf:u(`#ff8a2a`)},{name:`HUSH`,color:u(`#b48aff`),scarf:u(`#5a3ad0`)},{name:`BRINE`,color:u(`#ff9ad8`),scarf:u(`#e04aa8`)}],vr=class{rng;arena;world;chunks;parts=new Ae(26e3);actors=[];projectiles=[];lights=[];sounds=[];feed=[];burning=[];tick=0;time=0;jolts=[];events=[];milestones=0;wind=0;slowMo=0;player;botCount=0;botSkill=1;botBrains=[];autoPlayer=!1;showcase=!1;round=new we(ir);twist=S;mode=Ft;humans=[];waves=En();gas=new mn;rugs=new _n;constructor(e){this.rng=new b(e^2654435769),this.load(e)}load(e,t,n=S){this.twist=n,this.arena=ge(e,void 0,void 0,t),this.world=this.arena.world,this.chunks=new un(this.world),this.parts.clear(),this.projectiles=[],this.gas.clear(),this.rugs.clear(),this.lights=[],this.burning=[],this.wind=this.rng.range(-18,18),this.milestones=0,this.round.start(),Vn(this);for(let e of this.actors)e.score=e.kills=e.deaths=e.cells=0,e.chain=e.comboPts=e.comboT=e.streak=e.multi=e.multiT=0,e.lastHitBy=-1,e.lastHitT=e.cooldown=e.altCooldown=0,this.respawn(e)}setMode(e){if(e.teams!==this.mode.teams)for(let e of this.actors)e.lastHitBy=-1;this.mode=e,this.round.timed=!e.waves;for(let t of this.actors)e.roster.includes(t.weapon)||(t.weapon=e.roster[0]),t.skin=hr(e,t.id,this.arena.seed)}hostile(e,t){if(!this.mode.teams||e===void 0||e===t)return!0;if(typeof e==`number`){if(e<0||e===t.id)return!0;let n=this.actors.find(t=>t.id===e);if(!n)return!this.mode.waves||ut(e)!==t.team;e=n}return e.team!==t.team}addPlayer(){if(this.humans=this.humans.filter(e=>this.actors.includes(e)),this.humans.length>=4)throw Error(`a game holds at most 4 human fighters`);let e=e=>e===0?0:mr+e,t=0;for(;this.humans.some(n=>n.id===e(t));)t++;let n=gr[t%gr.length],r=new O(e(t),n.name,0,!1,n.color,n.scarf);r.weapon=this.mode.roster[0];let i=this.mode.waves?Qn(this,r):void 0;return this.actors.push(r),this.humans.push(r),t===0&&(this.player=r),this.respawn(r,i),r}removePlayer(e){e!==this.player&&this.humans.includes(e)&&(Jn(this,e),this.actors=this.actors.filter(t=>t!==e),this.humans=this.humans.filter(t=>t!==e))}setBots(e){let t=this.mode.waves,n=n=>!n.bot||t&&Rn(n)||n.id<=e;for(let e of this.actors)n(e)||Jn(this,e);this.actors=this.actors.filter(n);let r=this.mode.roster;for(let n=0;n<e;n++){if(this.actors.some(e=>e.bot&&e.id===n+1))continue;let e=_r[n%_r.length],i=new O(n+1,e.name,t?0:n+1,!0,e.color,e.scarf);i.weapon=r[this.rng.int(0,r.length-1)],this.actors.push(i),this.respawn(i,t?Qn(this,i):void 0)}this.botCount=e}respawn(e,t){e.skin=hr(this.mode,e.id,this.arena.seed);let n=this.arena.spawns,r=t??n[0]??{x:this.world.W/2,y:40},i=-1;for(let a=0;a<12&&!t;a++){let t=n[this.rng.int(0,n.length-1)]??r,a=1e9;for(let n of this.actors)n!==e&&n.alive&&(a=Math.min(a,Math.hypot(n.x-t.x,n.y-t.y)));a>i&&(i=a,r=t)}let a=r.y;e.place(r.x,a);for(let t=0;t<200&&e.boxHits(this.world,e.x,a);t++)a--;e.place(r.x,a),e.hp=this.twist.hp,e.alive=!0,e.invulnT=1.2,e.fuel=1.6,e.charge=-1,e.flameT=0,e.grenades=3,e.grenadeT=0,e.input=E(),e.downT=e.reviveT=0,e.out=!1,this.round.phase===`over`&&(e.invulnT=0)}sfx(e,t,n,r=1){this.sounds.length<64&&this.sounds.push({name:e,x:t,y:n,v:r})}shake(e,t,n){this.jolts.length<64&&this.jolts.push({x:t,y:n,shake:e,flash:0})}flash(e,t,n){this.jolts.length<64&&this.jolts.push({x:t,y:n,shake:0,flash:e})}addLight(e,t,n,r,i){this.lights.length<400&&this.lights.push({x:e,y:t,r:n,color:r,life:i,max:i})}log(e){this.feed.unshift({text:e,t:4}),this.feed.length>5&&(this.feed.length=5)}addDestruction(e,t,n,r){let i=this.actors.find(t=>t.id===e);if(!i||this.round.phase===`over`)return;i.cells+=t,i.comboT<=0&&(i.chain=0),(i.chain===0||t>=25&&this.time-i.chainT>=or)&&(i.chain++,i.chainT=this.time),i.comboT=ar;let a=Math.max(1,Math.round(t*.05*br(i.chain)));i.comboPts+=a,this.events.push({t:`destroy`,x:n,y:r,cells:t,points:a,by:e,chain:i.chain})}bankCombo(e){e.comboPts>0&&(e.score+=e.comboPts,this.events.push({t:`bank`,by:e.id,points:e.comboPts,chain:e.chain})),e.comboPts=0,e.chain=0,e.comboT=0}creditKill(e,t){e.streak++,e.multi=e.multiT>0?e.multi+1:1,e.multiT=sr;let n=150+75*(e.multi-1)+25*Math.min(e.streak-1,10);e.score+=n,e.comboT<=0&&(e.chain=0),e.chain++,e.chainT=this.time,e.comboT=ar,this.events.push({t:`kill`,x:t.cx,y:t.cy,victim:t.id,by:e.id,points:n});let r=lr[Math.min(e.multi,lr.length-1)];e.multi>=2&&r&&(e.score+=100*(e.multi-1),this.events.push({t:`callout`,by:e.id,text:r,points:100*(e.multi-1)}));let i=ur[e.streak];i&&(e.score+=50*e.streak,this.events.push({t:`callout`,by:e.id,text:i,points:50*e.streak}),e.bot||this.log(`${e.name}: ${i}`))}stepScore(e){for(let t of this.actors)t.multiT>0&&(t.multiT-=e),t.comboT>0&&(t.comboT-=e,t.comboT<=0&&this.bankCombo(t));let t=this.destroyedPct;cr.forEach((e,n)=>{if(t>=e&&!(this.milestones&1<<n)){this.milestones|=1<<n;let t=Math.round(500*(n+1));this.events.push({t:`milestone`,pct:e,points:t})}})}carve(e,t,n,r={}){let i=this.world,a=r.power??1,o=r.debris??1,s=r.force??1,c=Math.ceil(n+3),l=Math.floor(e),m=Math.floor(t),h=0;for(let g=-c;g<=c;g++){let v=m+g;if(!(v<0||v>=i.H))for(let m=-c;m<=c;m++){let c=l+m;if(c<0||c>=i.W)continue;let g=v*i.W+c,y=i.mat[g],b=c+.5-e,S=v+.5-t,C=Math.sqrt(b*b+S*S);if(C>n+3)continue;let w=i.back[g];if(w!==0&&n>=4){let e=w>>>24;e===1&&C<n*.72?i.back[g]=0:r.scorch&&C<n+1.5&&d(w)+f(w)+p(w)>40&&(i.back[g]=(_(w,.78)&16777215|e<<24)>>>0)}if(y===P.AIR||y===P.BEDROCK)continue;let T=n*(1.04-Math.min(.95,ne[y]/a)*.78)+(x(c,v,this.tick)-.5)*1.8;if(C<=T){let e=i.col[g];if(y===P.GLASS){if(this.rng.chance(.55)){let t=this.rng.range(90,380)*s,n=C||1;this.parts.spawn(R.SHARD,c+.5,v+.5,b/n*t+this.rng.spread(60),S/n*t-90,this.rng.range(.6,1.4),e)}h%7==0&&this.sfx(`glass`,c,v,.35)}else if(this.rng.chance(ae[y]*o)){let t=C||1,r=(110+(1-C/(n+.01))*400)*this.rng.range(.5,1.2)*s;this.parts.spawn(R.CRUMB,c+.5,v+.5,b/t*r+this.rng.spread(45),S/t*r-this.rng.range(50,170)*s,this.rng.range(.7,2.2),e)}r.sparks&&y===P.METAL&&this.rng.chance(.3)&&this.parts.spawn(R.SPARK,c,v,this.rng.spread(200),this.rng.spread(200),.15,u(`#ffe6a0`)),i.clear(c,v),h++}else if(C<=T+5){if(r.scorch){let e=1-(C-T)/5,t=i.col[g];fr[(v&3)*4+(c&3)]<e*15.5&&d(t)+f(t)+p(t)>70&&(i.col[g]=(_(t,.58)&16777215|y<<24)>>>0)}r.ignite&&re[y]>0&&this.rng.chance(r.ignite*re[y])&&this.ignite(c,v)}}}if(i.wakeRect(l-c-1,m-c-2,l+c+1,m+c+1),h>0&&r.owner!==void 0&&r.owner>=0&&this.addDestruction(r.owner,h,e,t),r.scorch&&n>=6){let e=Math.ceil(n*3);for(let t=-c;t<=c&&e>0;t++)for(let r=-c;r<=c&&e>0;r++){let a=l+r,o=m+t,s=Math.hypot(r,t);s<n*.45||s>n+3||!i.inside(a,o)||i.get(a,o)===P.AIR||(i.get(a-1,o)===P.AIR||i.get(a+1,o)===P.AIR||i.get(a,o-1)===P.AIR||i.get(a,o+1)===P.AIR)&&this.rng.chance(.75)&&(this.parts.spawn(R.HEAT,a+.5,o+.5,0,0,this.rng.range(.7,1.6),0),e--)}}return h}chip(e,t,n,r,i,a,o=-1){let s=Math.hypot(r,i)||1,c=-r/s,l=-i/s;if(a===P.BEDROCK||a===P.METAL&&this.rng.chance(.6)){for(let n=0;n<4;n++)this.parts.spawn(R.SPARK,e+c,t+l,c*this.rng.range(60,200)+this.rng.spread(80),l*this.rng.range(60,200)+this.rng.spread(80),this.rng.range(.08,.2),u(`#ffeeb0`));this.sfx(`ricochet`,e,t,.4);return}let d=this.carve(e-c*.5,t-l*.5,n,{debris:1.4,force:.55,sparks:1,owner:o});for(let n=0;n<2;n++)this.parts.spawn(R.SPARK,e+c,t+l,c*120+this.rng.spread(90),l*120+this.rng.spread(90),.08,u(`#ffe6a0`));this.parts.spawn(R.SMOKE,e+c*2,t+l*2,c*20,l*20-10,this.rng.range(.3,.6),u(`#8a8494`),1),d>0&&this.rng.chance(.3)&&this.sfx(`chip`,e,t,.3),n>=2&&this.detach(e,t,n,.3)}detach(e,t,n,r){let i=this.chunks.detachAround(this.world,e,t,n);for(let n of i){let i=n.x-e,a=n.y-t,o=Math.hypot(i,a)||1,s=r*2600/Math.max(30,n.mass*.15+o);n.vx=i/o*s+this.rng.spread(10),n.vy=a/o*s-20,n.av=this.rng.spread(1)*Math.min(3,r*600/Math.max(40,n.mass))+(i>0?.3:-.3)*r,n.mass>40&&this.sfx(`crack`,n.x,n.y,Math.min(1,n.mass/600))}}explode(e,t,n,r,i,a=!1){this.carve(e,t,n,{scorch:!0,ignite:.35,debris:1,force:1.1,sparks:1,owner:i}),this.detach(e,t,n,1);let o=this.rng,s=Math.floor(n*2.4);for(let r=0;r<s;r++){let r=o.next()*Math.PI*2,i=o.range(20,n*9);this.parts.spawn(R.FIRE,e+Math.cos(r)*n*.3,t+Math.sin(r)*n*.3,Math.cos(r)*i,Math.sin(r)*i-30,o.range(.2,.55),0,o.chance(.55)?o.int(2,4):1)}for(let r=0;r<Math.floor(n*1.6);r++){let r=o.next()*Math.PI*2,i=o.range(10,n*4);this.parts.spawn(R.SMOKE,e+o.spread(n*.6),t+o.spread(n*.6),Math.cos(r)*i,Math.sin(r)*i-20,o.range(.8,2.2),_(u(`#b4adbd`),o.range(.75,1.05)),o.chance(.5)?3:2)}for(let r=0;r<Math.max(3,Math.floor(n*.35));r++){let r=o.next()*Math.PI*2,i=o.range(10,n*3);this.parts.spawn(R.FIRE,e+o.spread(n*.3),t+o.spread(n*.3),Math.cos(r)*i,Math.sin(r)*i-20,o.range(.25,.45),0,o.int(4,6))}for(let r=0;r<Math.floor(n*1.2);r++){let n=o.next()*Math.PI*2,r=o.range(100,380);this.parts.spawn(R.SPARK,e,t,Math.cos(n)*r,Math.sin(n)*r-60,o.range(.15,.5),o.chance(.5)?u(`#fff3a6`):u(`#ffb23d`))}for(let r=0;r<Math.floor(n*.35);r++){let n=-Math.PI/2+o.spread(1.2),r=o.range(80,240);this.parts.spawn(R.EMBERP,e,t,Math.cos(n)*r,Math.sin(n)*r,o.range(.8,2),u(`#ff8a2a`))}this.addLight(e,t,n*4.2,u(`#ffb468`),.35),this.addLight(e,t,n*2,u(`#fff2c8`),.12),this.shake(Math.min(.5,n/50),e,t),this.flash(n*.006,e,t),a||this.sfx(n>16?`boom`:`boomSmall`,e,t,Math.min(1.4,n/14));let c=n*1.8;for(let n of this.actors){if(!n.alive)continue;let a=n.cx-e,o=n.cy-t,s=Math.hypot(a,o);if(s>c)continue;let l=1-s/c,u=s||1,d=n.id===i?.45:1;this.damage(n,r*l*d,i,a/u*600*l,o/u*600*l-190*l)}for(let n of this.chunks.list){let r=n.x-e,i=n.y-t,a=Math.hypot(r,i);if(a<c*1.5){let e=(1-a/(c*1.5))*4e3/Math.max(60,n.mass);n.vx+=r/(a||1)*e,n.vy+=i/(a||1)*e,n.av+=this.rng.spread(1.5)}}}lance(e,t){let n=this.world,r=Math.cos(t),i=Math.sin(t),a=420,o=e.sx+r*16,s=e.sy+i*16,c=new Set,l=0;for(;l<1e3&&a>0;l++){o+=r,s+=i;let t=n.get(Math.floor(o),Math.floor(s));if(t===P.BEDROCK)break;t!==P.AIR&&(a-=lt(t)),l&1||this.carve(o,s,4.6,{power:2.4,debris:.25,force:.6,scorch:!0,ignite:.6,sparks:1,owner:e.id});for(let t of this.actors)t.alive&&t.id!==e.id&&!c.has(t.id)&&t.contains(o,s,2)&&(c.add(t.id),this.damage(t,95,e.id,r*480,i*480-130));l%6==0&&(this.parts.spawn(R.SPARK,o,s,this.rng.spread(90)-i*40,this.rng.spread(90)+r*40,this.rng.range(.1,.35),e.color),this.addLight(o,s,28,e.color,.25))}this.detach(o,s,9,.6),this.beams.push({x0:e.sx+r*16,y0:e.sy+i*16,x1:o,y1:s,life:.22,max:.22,col:e.color}),this.shake(.32,e.x,e.y),this.flash(.08,e.x,e.y),this.sfx(`lance`,e.x,e.y)}beams=[];sinkholePull(e,t,n,r,i=-1){for(let r of this.actors){if(!r.alive||i>=0&&this.mode.teams&&!this.hostile(i,r))continue;let a=e-r.cx,o=t-r.cy,s=Math.hypot(a,o);if(s<n&&s>2){let e=(1-s/n)*1400*ir;r.vx+=a/s*e,r.vy+=o/s*e}}let a=this.parts;for(let r=0;r<a.n;r++){let i=e-a.x[r],o=t-a.y[r],s=i*i+o*o;if(s<n*n&&s>4){let e=Math.sqrt(s);a.vx[r]=a.vx[r]+(i/e*1100-o/e*470)*ir,a.vy[r]=a.vy[r]+(o/e*1100+i/e*470)*ir}}for(let r=0;r<10;r++){let r=this.rng.next()*Math.PI*2,i=this.rng.range(12,n*.6),a=Math.floor(e+Math.cos(r)*i),o=Math.floor(t+Math.sin(r)*i),s=this.world.get(a,o);if(s!==P.AIR&&s!==P.BEDROCK&&ne[s]<.6&&this.world.inside(a,o)){let e=this.world.col[o*this.world.W+a];this.world.clear(a,o),this.parts.spawn(R.CRUMB,a,o,-Math.sin(r)*190,Math.cos(r)*190,1.2,e)}}this.addLight(e,t,30+r*30,u(`#b87aff`),.05),this.shake(.012,e,t)}sinkholeCollapse(e,t,n,r,i){this.carve(e,t,n,{power:1.6,debris:1.2,force:-.6,scorch:!1,owner:i}),this.detach(e,t,n,.6);for(let n=0;n<60;n++){let n=this.rng.next()*Math.PI*2,r=this.rng.range(60,260);this.parts.spawn(R.MAGIC,e,t,Math.cos(n)*r,Math.sin(n)*r,this.rng.range(.3,.9),this.rng.chance(.5)?u(`#e6c8ff`):u(`#9a5aff`))}for(let a of this.actors){if(!a.alive)continue;let o=Math.hypot(a.cx-e,a.cy-t);o<n*1.4&&this.damage(a,r*(1-o/(n*1.4))*(a.id===i?.4:1),i,0,-320)}this.addLight(e,t,n*4,u(`#c08aff`),.4),this.flash(.14,e,t),this.shake(.5,e,t),this.sfx(`boom`,e,t,1.2)}ignite(e,t){let n=this.world;if(!n.inside(e,t))return;let r=t*n.W+e,i=n.mat[r];re[i]<=0||i===P.EMBER||(n.mat[r]=P.EMBER,n.col[r]=(v(n.col[r],u(`#ff7a2a`),.6)&16777215|P.EMBER<<24)>>>0,n.burn[r]=70+this.rng.int(0,110),n.structNow--,this.burning.push(r))}stepFire(){let e=this.world,t=e.W,n=0;for(let r of this.burning){if(e.mat[r]!==P.EMBER)continue;let i=e.burn[r]-1,a=r/t|0,o=r-a*t;if(i<=0)this.rng.chance(.3)?e.set(o,a,P.ASH,_(u(`#4a4048`),this.rng.range(.7,1.3))):e.set(o,a,P.AIR,0);else{if(e.burn[r]=i,(e.get(o,a-1)===P.AIR||e.get(o-1,a)===P.AIR||e.get(o+1,a)===P.AIR)&&(this.rng.chance(.09)&&this.parts.spawn(R.FIRE,o+.5,a,this.rng.spread(10),-this.rng.range(20,50),this.rng.range(.25,.6),0,this.rng.chance(.3)?2:1),this.rng.chance(.015)&&this.parts.spawn(R.SMOKE,o+.5,a-2,this.rng.spread(6),-20,this.rng.range(1,2),u(`#4a4450`),2),this.rng.chance(.004)&&this.parts.spawn(R.EMBERP,o,a,this.rng.spread(40),-this.rng.range(40,100),1.5,u(`#ff8a2a`)),n++%14==0&&this.addLight(o,a,26,u(`#ff8a3a`),.05)),this.rng.chance(.06)){let t=o+this.rng.int(-1,1),n=a+this.rng.int(-2,1),r=e.get(t,n);re[r]>0&&this.rng.chance(re[r])&&this.ignite(t,n)}if(!(this.tick&7))for(let e of this.actors)e.alive&&e.contains(o,a,1)&&(e.flameT=Math.max(e.flameT,.6))}}this.burning=this.burning.filter(t=>e.mat[t]===P.EMBER&&e.burn[t]>0)}actorAt(e,t,n,r,i=-1){for(let a of this.actors)if(a.alive&&a.id!==n&&a.contains(e,t,r)&&(i<0||!this.mode.teams||this.hostile(i,a)))return a;return null}damage(e,t,n,r,i){!e.alive||t<=0||this.round.phase===`over`||(!this.mode.teams||this.hostile(n,e))&&(e.vx+=r,e.vy+=i,e.invulnT>0||(e.hp-=t,e.hurtFlash=.12,t>=1&&this.events.push({t:`hit`,x:e.cx,y:e.y-26,amount:Math.round(t),victim:e.id,by:n}),n>=0&&n!==e.id&&(e.lastHitBy=n,e.lastHitT=3),e.hp<=0&&this.kill(e)))}shell(e,t){let n=-Math.cos(t)*this.rng.range(60,120)+this.rng.spread(30);this.parts.spawn(R.SHELL,e.sx+Math.cos(t)*6,e.sy+Math.sin(t)*6-2,n+e.vx*.5,-this.rng.range(140,230),this.rng.range(1.2,2),u(`#e9b54a`))}bloodPuff(e,t,n,r,i){let a=Math.hypot(r,i)||1;for(let o=0;o<4;o++)this.parts.spawn(R.SPARK,t,n,r/a*120+this.rng.spread(80),i/a*120+this.rng.spread(80)-40,.2,e.color);this.sfx(`hit`,t,n,.6)}kill(e){e.alive=!1,e.hp=0,e.deaths++,e.respawnT=2.2,e.charge=-1;let t=e.lastHitT>0?this.actors.find(t=>t.id===e.lastHitBy):void 0;this.bankCombo(e),e.streak=0,e.multi=0,t&&t!==e?(t.kills++,this.log(`${t.name} > ${e.name}`),this.creditKill(t,e)):(this.log(`${e.name} blew up`),this.events.push({t:`kill`,x:e.cx,y:e.cy,victim:e.id,by:-1,points:0}));for(let t=0;t<26;t++)this.parts.spawn(R.GORE,e.cx+this.rng.spread(5),e.cy+this.rng.spread(10),e.vx*.4+this.rng.spread(250),e.vy*.4-this.rng.range(90,340),this.rng.range(1.5,3),t%3==0?dr:e.color);for(let t=0;t<8;t++)this.parts.spawn(R.GORE,e.cx,e.cy,this.rng.spread(220),-this.rng.range(120,320),2.5,e.scarf);this.addLight(e.cx,e.cy,30,e.scarf,.3),this.shake(.18,e.cx,e.cy),this.sfx(`die`,e.x,e.y)}runActor(e,t){if(!e.alive){if(this.mode.waves)return;e.respawnT-=t,e.respawnT<=0&&this.respawn(e);return}let n=e.input;e.invulnT=Math.max(0,e.invulnT-t),e.lastHitT=Math.max(0,e.lastHitT-t),e.hurtFlash=Math.max(0,e.hurtFlash-t),e.recoil*=1-12*t,e.muzzleT=Math.max(0,e.muzzleT-t),e.squash*=Math.exp(-t*11);let r=this.mode.roster,i=w(this.twist,this.arena.seed,r.length);i>=0&&(n.select=i,n.cycle=0);let a=n.select>=0&&n.select<r.length?r[n.select]:-1;a>=0&&a!==e.weapon&&(e.weapon=a,e.charge=-1,e.cooldown=Math.max(e.cooldown,.15),e.bot||this.sfx(`switch`,e.x,e.y,.5)),n.cycle!==0&&(e.weapon=r[(Math.max(0,r.indexOf(e.weapon))+n.cycle+r.length)%r.length],e.charge=-1,e.bot||this.sfx(`switch`,e.x,e.y,.5));let o=e.move(this.world,t,this.twist);if(o.jumped&&(this.sfx(`jump`,e.x,e.y,.4),e.squash=-.2),o.flipped){this.sfx(`flip`,e.x,e.y,.4);for(let t=0;t<6;t++)this.parts.spawn(R.SMOKE,e.x+this.rng.spread(5),e.y-2,this.rng.spread(48),this.rng.range(0,30),.45,u(`#d8d0e0`),1)}if(o.landed>260&&(e.squash=Math.min(.32,o.landed/2600)),o.landed>520){this.sfx(`land`,e.x,e.y,Math.min(1,o.landed/600));for(let t=0;t<6;t++)this.parts.spawn(R.SMOKE,e.x+this.rng.spread(6),e.y-2,this.rng.spread(80),-this.rng.range(0,24),.5,u(`#c8c0d0`),1)}if(o.jet){let t=e.x-e.facing*4,n=e.y-10;this.parts.spawn(R.FIRE,t+this.rng.spread(1.5),n,this.rng.spread(30)-e.vx*.2,this.rng.range(100,220),this.rng.range(.08,.2),0,2),this.tick&1||this.parts.spawn(R.SMOKE,t,n+6,this.rng.spread(30),this.rng.range(30,90),this.rng.range(.4,.8),u(`#b0aab8`),1),this.addLight(t,n+4,34,u(`#ffa860`),.03),this.tick&3||this.sfx(`jet`,e.x,e.y,.35)}e.updateScarf(t,this.wind),e.flameT>0&&(e.flameT-=t,this.rng.chance(.5)&&this.parts.spawn(R.FIRE,e.x+this.rng.spread(3),e.y-this.rng.range(2,24),this.rng.spread(16),-60,.3,0,2),this.tick&7||this.damage(e,3,e.lastHitBy,0,0)),e.cooldown=Math.max(0,e.cooldown-t),e.altCooldown=Math.max(0,e.altCooldown-t);let s=Ke[e.weapon],c=Math.atan2(e.aimY-e.sy,e.aimX-e.sx);if(s.charge>0){if(n.fire&&e.cooldown<=0){if(e.charge<0&&(e.charge=0,s.charging||this.sfx(`charge`,e.x,e.y,.6)),e.charge+=t,s.charging)s.charging(this,e,c,t);else if(!(this.tick&1)){let t=e.sx+Math.cos(c)*17,n=e.sy+Math.sin(c)*17,r=13*(1-Math.min(1,e.charge/s.charge)),i=this.rng.next()*Math.PI*2;this.parts.spawn(R.MAGIC,t+Math.cos(i)*r,n+Math.sin(i)*r,-Math.cos(i)*48,-Math.sin(i)*48,.15,e.color),this.addLight(t,n,16+e.charge*48,e.color,.05)}e.charge>=s.charge&&(s.fire(this,e,c),e.charge=-1,e.cooldown=s.cooldown)}else n.fire||(s.release&&e.charge>0&&(s.fire(this,e,c),e.cooldown=s.cooldown),e.charge=-1)}else e.cooldown<=0&&(s.auto?n.fire:n.firePressed)&&(s.fire(this,e,c),e.cooldown=s.cooldown);Ye(this,e,c,t),e.y>this.world.H+60&&this.damage(e,999,e.lastHitBy,0,0)}step(e=ir){this.tick++,this.time+=e,this.sounds.length=0,this.jolts.length=0,this.events.length=0;let t=this.round.phase===`running`;if(t&&sn(this,e),t&&this.mode.waves&&Hn(this),t&&this.mode.teams&&gt(this,e),t)for(let t of this.actors)this.runActor(t,e);for(let e of this.actors)e.input.jumpPressed=!1,e.input.firePressed=!1,e.input.altPressed=!1,e.input.select=-1,e.input.cycle=0;Xe(this,e),this.gas.step(this,e),this.rugs.step(this,e),this.chunks.update(this.world,this.parts,this.rng,e,(e,t)=>{if(t>90){this.shake(Math.min(.35,e.mass/2500*(t/300)),e.x,e.y),this.sfx(`thud`,e.x,e.y,Math.min(1.2,e.mass/500*(t/300)+.2));for(let t=0;t<Math.min(30,e.mass/20);t++)this.parts.spawn(R.SMOKE,e.x+this.rng.spread(e.bw/2),e.y+e.bh/2,this.rng.spread(60),-this.rng.range(0,30),this.rng.range(.6,1.4),u(`#a49aa8`),2)}});for(let t of this.chunks.list){if(t.vy<190)continue;let n=Math.max(t.bw,t.bh)*.45;for(let r of this.actors)r.alive&&Math.abs(r.cx-t.x)<n&&Math.abs(r.cy-t.y)<n&&this.damage(r,t.mass/150*(t.vy/480)*4*e*60*.1,r.lastHitBy,t.vx*.1,t.vy*.2)}this.parts.update(this.world,e,this.rng,(e,t)=>this.ignite(e,t),this.wind),this.stepFire(),t&&this.stepScore(e),t&&this.mode.waves&&Un(this,e),t&&this.round.tick()&&this.endRound(),this.world.stepLoose(this.rng),this.world.stepLoose(this.rng);for(let t of this.lights)t.life-=e;this.lights.length&&(this.lights=this.lights.filter(e=>e.life>0));for(let t of this.beams)t.life-=e;this.beams.length&&(this.beams=this.beams.filter(e=>e.life>0));for(let t of this.feed)t.t-=e;this.feed=this.feed.filter(e=>e.t>0)}endRound(){for(let e of this.actors)this.bankCombo(e),e.muzzleT=e.hurtFlash=e.invulnT=e.recoil=0,e.charge=-1,e.jetOn=!1;this.projectiles=[],this.round.finish(this.actors)}get destroyedPct(){let e=this.world;return e.structTotal?Math.max(0,1-e.structNow/e.structTotal):0}},yr=pr,br=e=>1+.25*Math.min(Math.max(e-1,0),16),xr=dr,Sr=2,Cr=[30,10,.35],wr=6,Tr=[{step:0,title:`MOVE`,sub:`A AND D KEYS`},{step:1,title:`SHOOT THE WALL`,sub:`AIM AND CLICK`},{step:2,title:`HOLD JUMP TO JET`,sub:`KEEP SPACE DOWN IN THE AIR`}],Er=[{step:0,title:`MOVE`,sub:`DRAG WITH YOUR LEFT THUMB`},{step:1,title:`SHOOT THE WALL`,sub:`TAP IT WITH YOUR RIGHT THUMB`},{step:2,title:`HOLD JUMP TO JET`,sub:`KEEP THE JUMP BUTTON DOWN`}],Dr=e=>({step:e?3:0,amount:0,lastX:NaN});function Or(e,t,n,r=t.player){if(e.step>=3||!r)return!1;let i=Math.abs(r.x-e.lastX);if(e.lastX=r.x,!r.alive)return!1;if(e.step===0)r.input.left!==r.input.right&&i<=wr&&(e.amount+=i);else if(e.step===1)for(let n=0;n<t.events.length;n++){let i=t.events[n];i.t===`destroy`&&i.by===r.id&&(e.amount+=i.cells)}else r.jetOn&&(e.amount+=n);return e.amount<Cr[e.step]?!1:(e.step++,e.amount=0,e.step>=3)}function kr(e,t,n=!0){return e.step===Sr&&!n?null:(t?Er:Tr)[e.step]??null}var Ar=.8;function jr(e,t,n){let r=2;for(;r<n&&Math.ceil(e/r)*Math.ceil(t/r)>921600;)r++;return Math.min(r,n)}function Mr(e,t,n,r,i,a,o=48){if(e.length===0)return{x:0,y:0,scale:r,fits:!0};let s=1/0,c=1/0,l=-1/0,u=-1/0;for(let t of e)s=Math.min(s,t.x),c=Math.min(c,t.y),l=Math.max(l,t.x),u=Math.max(u,t.y);let d=l-s+o*2,f=u-c+o*2,p=Math.max(1,Math.min(i,r));for(let e=r;e>=p;e--){let r=e>a?Ar:1;if(d<=Math.ceil(t/e)*r&&f<=Math.ceil(n/e)*r)return{x:(s+l)/2,y:(c+u)/2,scale:e,fits:!0}}return{x:(s+l)/2,y:(c+u)/2,scale:p,fits:!1}}function Nr(e,t,n,r,i){if(e>=0&&t>=0&&e<n&&t<r)return null;let a=n/2,o=r/2,s=e-a,c=t-o,l=Math.max(1,a-i),u=Math.max(1,o-i),d=Math.min(s===0?1/0:l/Math.abs(s),c===0?1/0:u/Math.abs(c));return{x:Math.round(a+s*d),y:Math.round(o+c*d),ang:Math.atan2(c,s)}}var Pr={ink:xr,white:u(`#ffffff`),hud:u(`#f6f1e4`),dim:u(`#9a94a8`),gold:u(`#ffd04a`),red:u(`#ff5a4a`),hp:u(`#5ae07a`),boss:u(`#ff8a2a`),bar:u(`#0c0a10`)},Fr=e=>Math.round(e).toLocaleString(`en-US`);function Ir(e,t,n,r,i,a,o){e.rect(t,n,r,i,Pr.ink),e.rect(t+1,n+1,r-2,i-2,Pr.bar);let s=Math.round((r-2)*Math.max(0,Math.min(1,a)));s>0&&e.rect(t+1,n+1,s,i-2,o)}function Lr(e,t,n,r,i){let a=t.waves,o=a.wave>0?`WAVE ${a.wave}`:`GET READY`,s;s=a.phase===`rest`?a.wave>0?`NEXT WAVE ${Math.ceil(a.t)}`:`FIRST WAVE ${Math.ceil(a.t)}`:a.phase===`fight`?`ENEMIES ${zn(t)}`:`NOBODY STANDING`;let c=a.phase===`fight`?t.actors.find(e=>e.id===a.bossId&&e.alive):void 0,l=c?Nn(t).name:``,u=Math.max(e.textWidth(o,1,!0),e.textWidth(s),c?e.textWidth(l):0,c?60:0)+10,d=c?34:22;return n(r,i,u,d,a.phase===`fight`&&a.t<2),e.text(o,r+5,i+4,Dn(a.wave)?Pr.boss:Pr.gold,1,Pr.ink,!0),e.text(s,r+5,i+14,Pr.hud,1,Pr.ink),c&&(e.text(l,r+5,i+21,Pr.boss,1,Pr.ink),Ir(e,r+5,i+27,u-10,4,c.hp/Math.max(1,a.bossHp),Pr.boss)),i+d+2}function Rr(e){return e.alive?{text:``,color:Pr.hp}:e.downT>0?{text:`DOWN ${Math.ceil(e.downT)}`,color:Pr.red}:{text:e.out?`OUT`:``,color:Pr.dim}}function zr(e,t,n,r,i,a,o=12){let s=0;for(let a of kt(t)){let t=r+s*9;e.rect(n,t+1,5,5,Pr.ink),e.rect(n+1,t+2,3,3,a.color),e.text(`${a.name} ${Fr(a.score)}`,n+9,t,i&&a.team===i.team?Pr.hud:Pr.dim,1,Pr.ink,!0),s++}if(!t.mode.waves)return s;let c=t.actors.filter(e=>e.team===0),l=Math.max(0,o-s);if(c.length>l){let e=c.filter(e=>!e.bot||!e.alive);c=[...e,...c.filter(t=>!e.includes(t))].slice(0,l)}let u=n+10+Math.max(0,...c.map(t=>e.textWidth(t.name)))+4;for(let o of c){let c=r+s*9+3,l=Rr(o);e.rect(n+2,c+1,5,5,Pr.ink),e.rect(n+3,c+2,3,3,o.color),e.text(o.name,n+10,c+1,o===i?Pr.hud:Pr.dim,1,Pr.ink),o.alive?Ir(e,u,c+1,24,5,o.hp/Math.max(1,t.twist.hp),o.hp>t.twist.hp*.35?Pr.hp:Pr.red):l.text&&(o.out||o.downT>3||Math.floor(a*4)%2==0)&&e.text(l.text,u,c+1,l.color,1,Pr.ink),s++}return s}function Br(e,t,n,r,i){if(n<-40||r<-50||n>e.w+40||r>e.h+50)return;let a=h(t.color,255),o=Pr.ink;e.rect(n-10,r-4,20,4,o),e.rect(n-9,r-3,13,2,a),e.rect(n+3,r-6,7,6,o),e.rect(n+4,r-5,5,4,a),e.rect(n-2,r-5,4,1,h(t.scarf,255));let s=t.downT<4,c=!(i>>(s?2:4)&1),l=r-26,u=c?Pr.red:Pr.white;e.rect(n-4,l-1,9,5,o),e.rect(n-1,l-4,3,11,o),e.rect(n-3,l,7,3,u),e.rect(n,l-3,1,9,u),e.rect(n-3,l+1,7,1,u),e.rect(n-1,l-3,3,9,u);let d=String(Math.ceil(t.downT));e.text(d,n-Math.floor(e.textWidth(d)/2),l-12,s?Pr.red:Pr.hud,1,o),t.reviveT>0?(e.rect(n-12,r-13,24,4,o),e.rect(n-11,r-12,Math.max(1,Math.round(22*t.reviveT/2)),2,Pr.hp)):(e.rect(n-12,r-13,24,3,o),e.rect(n-11,r-12,Math.max(0,Math.round(22*t.downT/12)),1,s?Pr.red:Pr.dim))}function Vr(e,t){let n=e.waves;return n.phase===`fight`&&n.t<=2.2?{y:Math.floor(t*.3)-1,h:42}:null}function Hr(e,t,n,r){let i=t.waves,a=Vr(t,r);if(!a||i.t>1.95&&Math.floor(i.t*20)%2==0)return;let o=Dn(i.wave),s=`WAVE ${i.wave}`,c=o?`BOSS: ${Nn(t).name}`:`${On(i.wave)} ENEMIES`,l=i.t<.08?4:3,u=a.y+1;e.text(s,Math.floor(n/2-e.textWidth(s,l,!0)/2),u,o?Pr.boss:Pr.gold,l,Pr.ink,!0),e.text(c,Math.floor(n/2-e.textWidth(c,1,!0)/2),u+7*l+5,Pr.hud,1,Pr.ink,!0)}function Ur(e){return e.downT>0?{head:`DOWN ${Math.ceil(e.downT)}`,sub:`A TEAMMATE CAN PICK YOU UP`}:{head:`OUT`,sub:`BACK NEXT WAVE`}}var Wr={ink:xr,hud:u(`#f6f1e4`),dim:u(`#9a94a8`),hp:u(`#5ae07a`),hpLow:u(`#ff5a4a`),fuel:u(`#ffb23d`)},Gr=4,Kr=74,qr=34;function Jr(e,t,n,r,i,a=!1,o=[]){let s=r*50-Gr,c=e-104-6,l=i-qr;for(let e of o)e.x<c+104&&c<e.x+e.w&&(l=Math.min(l,e.y-Gr));let u={x:c,y:(a?Math.max(Kr,l-s):Kr)+n*50,w:104,h:46};for(let e of o)Yr(u,e)&&(u.x=Math.min(u.x,e.x-Gr-104));return u}var Yr=(e,t)=>e.x<t.x+t.w+Gr&&t.x<e.x+e.w+Gr&&e.y<t.y+t.h+Gr&&t.y<e.y+e.h+Gr,Xr=14,Zr=26,Qr=(e,t,n,r)=>t>=e.x-r&&t<e.x+e.w+r&&n>=e.y-r&&n<e.y+e.h+r;function $r(e,t,n,r,i,a,o=[]){let s=(a,s)=>{for(let c=0;c<n;c++){let l=Jr(e,t,c,n,r,a,o);if(i.some(e=>Qr(l,e.x,e.y,s)))return!0}return!1};return a?s(!1,Zr):s(!1,Xr)&&!s(!0,Xr)}var ei=!1;function ti(e,t,n,r,i){let{x:a,y:o,w:s,h:c}=n;r.panel(a,o,s,c,!1),e.rect(a+2,o+2,2,Math.floor((c-4)/2),t.color),e.rect(a+2,o+2+Math.floor((c-4)/2),2,Math.ceil((c-4)/2),t.scarf),e.text(t.name,a+8,o+4,t.color,1,Wr.ink,!0);let l=Ke[t.weapon].name.toUpperCase();if(e.text(l,a+s-6-e.textWidth(l),o+5,Wr.hud,1,Wr.ink),e.text(`HP`,a+8,o+15,Wr.hud,1,Wr.ink,!0),r.bar(a+26,o+14,s-31,9,t.hp/100,t.hp>35?Wr.hp:Wr.hpLow),e.text(`JET`,a+8,o+26,Wr.hud,1,Wr.ink,!0),r.bar(a+32,o+26,s-37,8,t.fuel/1.6,Wr.fuel),t.alive)r.pips(a+Math.floor(s/2)+2,o+37,t);else{let n=i?Ur(t).head:`RESPAWN ${Math.max(0,t.respawnT).toFixed(1)}`;e.text(n,a+Math.floor((s-e.textWidth(n))/2)+2,o+37,i?t.out?Wr.dim:Wr.hpLow:Wr.hud,1,Wr.ink)}}function ni(e,t,n,r){let i=[[t+2,n,3,1],[t-4,n,3,1],[t,n+2,1,3],[t,n-4,1,3]];for(let[t,n,r,a]of i)e.rect(t-1,n-1,r+2,a+2,Wr.ink);for(let[t,n,a,o]of i)e.rect(t,n,a,o,r)}function ri(e,t,n,r,i){let[a,o,s]=t,c=(e,t,n,r)=>(r[0]-n[0])*(t-n[1])-(r[1]-n[1])*(e-n[0]),l=Math.floor(Math.min(a[0],o[0],s[0])),u=Math.ceil(Math.max(a[0],o[0],s[0])),d=Math.floor(Math.min(a[1],o[1],s[1])),f=Math.ceil(Math.max(a[1],o[1],s[1]));for(let t=d;t<=f;t++)for(let d=l;d<=u;d++){let l=c(d+.5,t+.5,a,o),u=c(d+.5,t+.5,o,s),f=c(d+.5,t+.5,s,a);(l>=0&&u>=0&&f>=0||l<=0&&u<=0&&f<=0)&&e.plot(d+n,t+r,i)}}function ii(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i),l=[[n+s*5,r+c*5],[n-s*3-c*5,r-c*3+s*5],[n-s*3+c*5,r-c*3-s*5]];for(let[t,n]of[[-1,0],[1,0],[0,-1],[0,1]])ri(e,l,t,n,Wr.ink);ri(e,l,0,0,t.color);let u=e.textWidth(t.name),d=Math.max(2,Math.min(a-u-2,Math.round(n-s*13-u/2))),f=Math.max(2,Math.min(o-7,Math.round(r-c*11-2)));e.text(t.name,d,f,t.color,1,Wr.ink)}function ai(e,t,n,r,i,a=[]){let o=t.humans.filter(e=>e!==t.player),s=n.ox+n.fx,c=n.oy+n.fy,l=t.humans.filter(e=>e.alive).map(e=>({x:e.cx-s,y:e.cy-c}));ei=$r(n.vw,n.vh,o.length,i,l,ei,a),o.forEach((s,c)=>ti(e,s,Jr(n.vw,n.vh,c,o.length,i,ei,a),r,t.mode.waves));for(let t of o)t.alive&&ni(e,Math.round(t.aimX-s),Math.round(t.aimY-c),t.scarf);for(let r of t.humans){if(!r.alive)continue;let t=Nr(r.cx-s,r.cy-c,n.vw,n.vh,10);t&&ii(e,r,t.x,t.y,t.ang,n.vw,n.vh)}}var oi={k:u(`#1a1422`),d:u(`#3c3a4c`),g:u(`#6e7088`),l:u(`#a8acc4`),w:u(`#8a5a34`),o:u(`#ff8a2a`),r:u(`#d8402e`),y:u(`#ffd04a`),c:u(`#6ff0ff`),b:u(`#4a6aa8`),p:u(`#7a4ad0`),m:u(`#e0a8ff`),s:u(`#ffffff`),e:u(`#ff7ab0`),n:u(`#8ae04a`)};function si(e,t,n){let r=e.length,i=Math.max(...e.map(e=>e.length)),a=new Uint32Array(i*r);return e.forEach((e,t)=>{for(let n=0;n<e.length;n++){let r=e[n];r!==`.`&&r!==` `&&(a[t*i+n]=oi[r]??0)}}),{w:i,h:r,px:t,py:n,data:a}}var ci={pistol:si([`kkkkkkkkk.`,`kllllllllk`,`kgggkkkkk.`,`kddk......`,`kkkk......`],2,2),smg:si([`..kkkkkkkkkkk.`,`.kllllllllllgk`,`kggggggggggk..`,`..kdkkdkkk....`,`..kdk.kdk.....`,`..kkk.kkk.....`],3,2),shotgun:si([`kkkkkkkkkkkkkkkk`,`kwwwwkllllllllgk`,`kwwwwkggggggggkk`,`kwwkkkdkkkk.....`,`kkk..kkk........`],6,2),launcher:si([`..kkkkkkkkkkkkk..`,`.kgggggggggggggkk`,`kggrrgggggggggdok`,`.kdddddddddddddkk`,`..kkdkkkkkkkkkk..`,`...kk............`],5,3),lance:si([`kkkkkkkkkkkkkkkkk..`,`kdddcdcdcdcllllllkk`,`kbbbbbbbbbbbbbbbcsc`,`kkkdkkkkkkkkkkkkk..`,`..kk...............`],4,2),flamer:si([`..kkkkkkkkkkk..`,`.koookllllllkkk`,`kooookgggggggro`,`.koookkkkkkkkk.`,`..kkkdk........`,`....kk.........`],6,2),hail:si([`kkkkkkkkkkkkkk.`,`kyyyyyyyyyyyykk`,`kyddyyyyyyyyydk`,`kyyyyyyyyyyyykk`,`kkkkdkkkkkkkkk.`,`...kk..........`],4,3),mole:si([`kkkkkkkkkkk.....`,`kbbbbbbbbbklk...`,`kbddbbbbbbkllllk`,`kkkkdkkkkkklk...`,`...kk.....k.....`],4,2),orb:si([`....kkkkk....`,`kkkkpmmmpkkk.`,`kdddpmssmpddk`,`kkkkpmmmpkkk.`,`..kd.kkkk....`,`..kk.........`],3,2),bellows:si([`...kkkkkk.......`,`..keeeeeek......`,`.keessseeekkk...`,`keeeeeeeeekyykn.`,`.keeeeeeeekkk.n.`,`..keeeeeek......`,`...kkkkkk.......`],4,3),rugger:si([`..kkkkkkkkkkkkk..`,`.kwwkrryrryrrrrks`,`kwwwkryrryrryrrk.`,`.kwwkrryrryrrrrks`,`..kkkdkkkkkkkkk..`,`....kk...........`],5,3),pump:si([`kk.........kk..`,`kl.kkkkkkkkeek.`,`kllkggggggkeeek`,`kl.kddddddkeek.`,`kk..kk.....kk..`],4,2),"rug-small":si([`.kkkkkkkk.`,`klgllgllgs`,`kgdggdggdk`,`.kkkkkkkks`],5,2),rig:si([`..kkkkkkkkk......`,`.kgggggggggk.....`,`kgdkdkdkdkgkkkk..`,`kgcgygcgygkllllkk`,`kgggggggggkllllls`,`.kkdkkkkkkkkkkkk.`,`...kk............`],4,3),fork:si([`...........kkkkk`,`..........klllls`,`..kkkkkkkkkkk...`,`.kwwwwwwwwwgk...`,`kwwkdkkkkkkkk...`,`..kk......klllls`,`...........kkkkk`],4,3),"rigbit-small":si([`kkkk...`,`kglllk.`,`kgyllls`,`kglllk.`,`kkkk...`],3,2),"fork-small":si([`....kkkk`,`kkkkklls`,`kgggk...`,`kkkkklls`,`....kkkk`],3,2),"tine-small":si([`kkkk.`,`kglls`,`kkkk.`],2,1)},li=u(`#ffffff`),ui=48,di=new WeakMap;function fi(e,t){let n=di.get(e);n||di.set(e,n=new Map);let r=n.get(t);if(r)return r;let i=e=>Math.max(d(e),f(e),p(e)),a=e=>i(e)-Math.min(d(e),f(e),p(e))>=i(e)*.3,o=49;for(let t of e.data)m(t)&&!a(t)&&(o=Math.max(o,i(t)));let s=v(t,li,.55),c=new Uint32Array(e.data.length);e.data.forEach((e,n)=>{if(!m(e))return;let r=i(e);if(r<=ui)c[n]=e;else if(a(e))c[n]=s;else{let e=Math.min(4,Math.floor((r-ui)/(o-ui)*5));c[n]=_(t,.45+e*.1375)}});let l={w:e.w,h:e.h,px:e.px,py:e.py,data:c};return n.set(t,l),l}function pi(e,t,n,r,i,a){let o=Math.cos(i),s=Math.sin(i),c=Math.ceil(Math.hypot(t.w,t.h))+1,l=Math.round(n),u=Math.round(r);for(let n=-c;n<=c;n++)for(let r=-c;r<=c;r++){let i=r*o+n*s,c=-r*s+n*o;a&&(c=-c);let d=Math.round(i+t.px),f=Math.round(c+t.py);if(d<0||f<0||d>=t.w||f>=t.h)continue;let p=t.data[f*t.w+d];p&&e.plot(l+r,u+n,p)}}function mi(e,t,n,r){for(let i=0;i<t.h;i++)for(let a=0;a<t.w;a++){let o=t.data[i*t.w+a];o&&e.plot(n+a,r+i,o)}}var hi=u(`#ffffff`),gi=u(`#ff3a3a`),_i=u(`#b4b8cc`),vi=u(`#7c8098`),yi=u(`#4a4c60`),bi=u(`#26324e`),xi=u(`#eaf6ff`),Si=u(`#e2e6f0`),Ci=u(`#b4b8cc`),wi=u(`#fff4c2`),Ti=u(`#ffd04a`),Ei=u(`#ff8a2a`),Di=u(`#d8402e`),Oi=new Map([{id:`moonboy`,name:`MOON BOY`},{id:`whale`,name:`WHALE`},{id:`diamond`,name:`DIAMOND HANDS`},{id:`bagholder`,name:`BAG HOLDER`},{id:`paperhands`,name:`PAPER HANDS`},{id:`degen`,name:`DEGEN`}].map((e,t)=>[e.id,t+1])),ki=1,Ai=2,ji=3,Mi=4,Ni=5,Pi=6,Fi=u(`#cdeefa`),Ii=u(`#1d2f52`),Li=u(`#f2fbff`),Ri=u(`#e6e8f0`),zi=u(`#a4a8bc`),Bi=u(`#f0485e`),Vi=u(`#4aa8ff`),Hi=u(`#7aa6d8`),Ui=u(`#4a78b4`),Wi=u(`#2e5088`),Gi=u(`#dce8f0`),Ki=u(`#a8bccc`),qi=u(`#a6e4fa`),Ji=u(`#e4faff`),Yi=u(`#0e1220`),Xi=u(`#f4feff`),Zi=u(`#8ce8ff`),Qi=u(`#3aa6d6`),$i=u(`#d2a466`),ea=u(`#a87a42`),ta=u(`#74502a`),na=u(`#ffd84e`),ra=u(`#c89a1e`),ia=u(`#e6cc98`),aa=u(`#c9a46a`),oa=u(`#946e3e`),sa=u(`#f8f6ee`),ca=u(`#c4c0b2`),la=u(`#6e6888`),ua=u(`#4c465e`),da=u(`#322d44`),fa=u(`#08070c`),pa=u(`#ece8f4`),ma=0,ha=1,ga=2,_a=-12,va=-11,ya=-2,ba=-18.5,xa=-16,Sa=4.7,Ca=4.4,wa=5.6,Ta=5,Ea=4.6,Da=2.6,Oa=3.4,ka=-3.2,Aa=.16,ja=.09,Ma=1e-4,Na=[-2.5,-17.5,3.5,-17.5,3.5,-14.5,2.4,-11.5,-2.4,-11.5,-2.5,-14.5],Pa=[-1.4,-17.5,1.5,-17.5,1.5,-14.5,-2.5,-14.5,-2.5,-16.4],Fa=[-2.4,-3,2.4,-3,3.5,-1.9,3.5,1.9,2.4,3,-2.4,3,-3.5,1.9,-3.5,-1.9],Ia=-3.5,La=-18.5,Ra=1,za=2,Ba=3,Va=4,Ha=5,Ua=6,Wa=7,Ga=64,Ka=64,qa=32,Ja=44,Ya=new Uint32Array(4096),Xa=new Uint8Array(4096),Za=new Uint8Array(4096),Qa=Ga,$a=Ka,eo=-1,to=-1,no=Ra,ro=0,io=0,ao=0,oo=1,so=!1,co=0,lo=0,uo=1,fo=1,po=1,mo=0,ho=1,go=1,_o=0,vo=0,yo=0,bo=0,xo=0,So=0,Co=0,wo=0,To=0,Eo=0,Do=0,Oo=0,ko=0,Ao=0,jo=new Float64Array(12),Mo=new Float64Array(12),No=0,Po=0,Fo=0,Io=0,Lo=0,Ro=0,zo=0,Bo=0,Vo=0,Ho=0,Uo=0,Wo=0,Go=0,Ko=0,qo=0,Jo=0,Yo=0,Xo=0,Zo=!1,Qo=0,$o=0,es=0,ts=0,ns=(e,t,n)=>e<t?t:e>n?n:e,rs=(e,t,n)=>e<t?Math.min(t,e+n):Math.max(t,e-n),is=new WeakMap,as=.125,os=.075,ss=0,cs=1;function ls(e,t){let n=+!!e.jetOn,r=.55+.45*Math.max(n,ns(Math.hypot(e.vx,e.vy)/140,0,1)),i=is.get(e);if(!i)i={blast:n,reach:r,tick:t},is.set(e,i);else{let e=ns(t-i.tick,0,8);i.tick=t,i.blast=rs(i.blast,n,e*as),i.reach=rs(i.reach,r,e*os)}ss=i.blast,cs=i.reach}function us(e,t){let n=e*ho,r=(t-_a)*ho;bo=n*po-r*mo,xo=_a+n*mo+r*po}function ds(e,t){us((e+(va-t)*co)*uo,(t+lo)*fo)}function fs(e,t){us((vo+(e*go-t*_o)/ho+7.5*co)*uo,(yo+(e*_o+t*go)/ho+lo)*fo)}function ps(e){no=e,ro=0}function ms(e,t,n){let r=e+qa,i=t+Ja;if(r<2||i<2||r>61||i>61)return;let a=i*Ga+r;(ro===0||Xa[a]===ro)&&(Ya[a]=n,Xa[a]=no,r<Qa&&(Qa=r),r>eo&&(eo=r),i<$a&&($a=i),i>to&&(to=i))}function hs(e,t,n,r,i){for(let a=t;a<t+r;a++)for(let t=e;t<e+n;t++)ms(t,a,i)}function gs(e,t,n,r,i,a,o){let s=(i-1)/2,c=Math.round(e-s),l=Math.round(t-s),u=Math.round(n-s),d=Math.round(r-s),f=Math.abs(u-c),p=-Math.abs(d-l),m=c<u?1:-1,h=l<d?1:-1,g=f+p,_=i-a;for(let e=0;e<64&&(hs(c+a,l,_,_,o),c!==u||l!==d);e++){let e=2*g;e>=p&&(g+=p,c+=m),e<=f&&(g+=f,l+=h)}}function _s(){jo[No]=bo,Mo[No]=xo,No++}function vs(e,t){No=0;for(let n=0;n<e.length;n+=2)t(e[n],e[n+1]),_s()}function ys(e,t,n,r,i){No=0,i(e,t),_s(),i(n,t),_s(),i(n,r),_s(),i(e,r),_s()}function bs(e,t=0,n=0){let r=1e9,i=-1e9,a=1e9,o=-1e9,s=0;for(let e=0;e<No;e++){let t=e+1===No?0:e+1,n=jo[e],c=Mo[e];n<r&&(r=n),n>i&&(i=n),c<a&&(a=c),c>o&&(o=c),s+=n*Mo[t]-jo[t]*c}let c=s>=0?1:-1,l=Math.floor(o+n+Ma),u=Math.floor(i+t+Ma);for(let i=Math.ceil(a+n-Ma);i<=l;i++)for(let a=Math.ceil(r+t-Ma);a<=u;a++){let r=!0;for(let e=0;e<No;e++){let o=e+1===No?0:e+1,s=jo[e]+t,l=Mo[e]+n;if(((jo[o]+t-s)*(i-l)-(Mo[o]+n-l)*(a-s))*c<-1e-4){r=!1;break}}r&&ms(a,i,e)}}function xs(e,t,n){ps(e),bs(n),ro=e,bs(t,1,-1)}function Ss(e,t){if(ps(Ra),!(eo<0)){for(let n=$a-1;n<=to+1;n++){let r=n-Ja,i=!(so&&r>=0);for(let a=Qa-1;a<=eo+1;a++){let o=n*Ga+a,s=Ya[o],c=io+oo*(a-qa);if(s!==0)i&&e.plot(c,ao+r,s),Za[o]=1;else if(i&&(Ya[o-1]|Ya[o+1]|Ya[o-Ga]|Ya[o+Ga])!==0){if(!Za[o])e.plot(c,ao+r,xr);else if(t!==0){let n=e.get(c,ao+r);n!==Go&&n!==Ko&&n!==qo&&n!==Jo&&e.plot(c,ao+r,t)}}}}for(let e=$a;e<=to;e++)Ya.fill(0,e*Ga+Qa,e*Ga+eo+1),Xa.fill(0,e*Ga+Qa,e*Ga+eo+1);Qa=Ga,$a=Ka,eo=-1,to=-1}}function Cs(e){let t=.3*d(e)+.59*f(e)+.11*p(e);return t<130?v(e,hi,(130-t)/255*1.6):e}function ws(e,t){if(Zo=e.hurtFlash>.075,Zo){Po=Fo=Vo=Ho=Uo=Go=qo=hi,Io=Lo=Ro=Wo=Ko=Jo=Si,zo=Bo=Ci;return}let n=0,r=0;if(e.hurtFlash>0)Fo=gi,Po=v(gi,hi,.45),Io=_(gi,.82),Lo=_(gi,.74),Ro=_(gi,.64),zo=_(gi,.45),n=gi,r=.6;else{let i=e.color;e.invulnT>0&&!(t>>2&1)&&(i=v(e.color,hi,.6),n=hi,r=.5),Fo=i,Po=v(i,hi,.4),Io=_(i,.72),Lo=_(i,.6),Ro=_(i,.48),zo=_(i,.4)}Qo=n,$o=r,Bo=v(bi,n,r),Vo=v(xi,n,r),Ho=v(_i,n,r),Uo=v(vi,n,r),Wo=v(yi,n,r),Go=v(e.scarf,n,r),Ko=_(Go,.72),qo=v(Cs(e.scarf),n,r),Jo=_(qo,.72)}function B(e,t=ma){return Zo?t===ma?hi:t===ha?Si:Ci:$o===0?e:v(e,Qo,$o)}function Ts(e,t,n){if(wo=0,Do=0,Oo=0,ko=0,e.onGround&&Math.abs(e.vx)>6){let n=t>0?1:-1,r=e.walk*n,i=Math.sin(r),a=Math.max(0,Math.cos(r)),o=Math.max(0,-Math.cos(r)),s=n>0?Da:ka,c=n>0?Ea:Oa,l=n>0?1.6:.4;So=.5+i*Ta-a*s,Co=ya-a*(c+Math.max(0,-i)*l),wo=a*(n>0?.5-i*.6:.2),To=-.5-i*Ta-o*s,Eo=ya-o*(c+Math.max(0,i)*l),Do=o*(n>0?.5+i*.6:.2),ko=.8-Math.cos(2*r)*.8,Oo=n>0?.22:-.1}else if(e.onGround)So=1.5,Co=ya,To=-3,Eo=ya,ko=+(Math.sin(n*3.2)>.5);else{let n=ns(t/150,-1,1);if(e.jetOn)So=1-n,Co=-1.8,wo=.9,To=-3-n,Eo=-2.6,Do=1.1,Oo=.1+n*.12;else{let t=ns(e.vy/300,-1,1),r=Math.max(0,-t),i=Math.max(0,t),a=1-r-i;So=2.4*r+2*a+3.2*i,Co=-6.4*r-5.6*a-1.6*i,wo=.6*r+.5*a-.2*i,To=-3.2*r-.8*a-3.4*i,Eo=-1.4*r-4.6*a-1.6*i,Do=1.2*r+.8*a+.1*i,Oo=n*.1+.06*r-.05*i}}Ao=e.flip>0?ns(Math.sin(e.flip*.5)*3,0,1):0,Ao>0&&(So+=(3.5-So)*Ao,Co+=(-9-Co)*Ao,wo+=(.3-wo)*Ao,To+=(3-To)*Ao,Eo+=(-8.8-Eo)*Ao,Do+=(.3-Do)*Ao,Oo+=(.2-Oo)*Ao,ko=0)}function Es(e,t,n,r,i,a,o,s,c,l,u){let d=n-e,f=r-t,p=Math.hypot(d,f),m=e+d*.5,h=t+f*.5;if(p<o*2-.01){let e=Math.sqrt(o*o-p*p*.25);m+=i*e,h+=a*e}es=m,ts=h,gs(e,t,m,h,s,0,u),gs(m,h,n,r,c,0,u),u!==l&&(gs(e,t,m,h,s,1,l),gs(m,h,n,r,c,1,l))}function Ds(e,t,n,r,i,a,o,s){let c=n-e,l=r-t,u=Math.hypot(c,l),d=e+c*.5,f=t+l*.5;if(u>.01&&u<Sa*2-.01){let e=Math.sqrt(Sa*Sa-u*u*.25),t=-l/u,n=c/u;(t<0||t===0&&n>0)&&(t=-t,n=-n),d+=t*e,f+=n*e}us(e,t);let p=bo,m=xo;us(d,f);let h=bo,g=xo;us(n,r);let _=bo,v=xo;gs(p,m,h,g,3,0,o),gs(h,g,_,v,2,0,o),o!==a&&(gs(p,m,h,g,3,1,a),gs(h,g,_,v,2,1,a));let y=Math.cos(i),b=Math.sin(i);us(n-y*.5-b*.5,r-b*.5+y*.5);let x=bo,S=xo;us(n+y*1.5-b*.5,r+b*1.5+y*.5),gs(x,S,bo,xo,2,0,s)}function Os(e,t){ps(Ra);let n=(va+lo)*fo,r=Ao>.5;t?Ds(.5*uo,n,So*uo,e.onGround?Co:Co*fo,wo,Fo,r?Fo:Io,Go):Ds(-.5*uo,n,To*uo,e.onGround?Eo:Eo*fo,Do,Lo,r?Lo:Ro,r?Ro:Ko)}function ks(e,t){let n=e.scarfX.length,r=(e.scarfX[n-1]-e.scarfX[0])*oo,i=e.scarfY[n-1]-e.scarfY[0];if(Ao===0&&r>2.5&&r>Math.abs(i))return!0;let a=cs*(1-Ao);if(a<=.05)return!1;let o=ss,s=(.3+ns(Math.hypot(e.vx,e.vy)/140,0,1))/(n-1),c=e.scarfX[0],l=e.scarfY[0];ds(Ia,La);let u=bo,d=xo;for(let r=1;r<n;r++){let i=(e.scarfX[r]-c)*oo*a,f=(e.scarfY[r]-l)*a;f<0&&(i-=-f*.75,f*=.12),i-=Math.abs(f)*.9*o,f-=f*.6*o,f>5.5&&(f=5.5);let p=Math.hypot(i,f)||1,m=Math.sin(t*9+r*1.6)*s*r*(Math.abs(i)/p);ds(Ia+i-f/p*m,La+f+i/p*m),gs(u,d,bo,xo,2,0,r>=n-2?Jo:qo),u=bo,d=xo}return!1}function As(e,t){let n=e.scarfX.length,r=(e.scarfX[n-1]-e.scarfX[0])*oo,i=e.scarfY[n-1]-e.scarfY[0],a=ns((r-Math.max(2.5,Math.abs(i)))/4,0,1),o=ns(r/12,0,1),s=Math.sin(t*9)>0?.5:0;ds(1,-18);let c=bo,l=xo;ds(1+a*(1.5+1.5*o),-18+a*1.2);let u=bo,d=xo;gs(c,l,u,d,2,0,Go),ds(1+a*(2+2*o+s),-18+a*(3.2+s)),gs(u,d,bo,xo,2,0,Ko)}function js(){ys(-2.5,-19.5,2.5,-17.5,ds),bs(Go),ys(-4.5,-19.5,-2.5,-17.5,ds),bs(Go)}function Ms(){Yo===ki?Js():Yo===Ai&&Ys(),ps(za),ys(-5.5,-16.5,-2.5,-11.5,ds),bs(Uo),ro=za,ys(-5.5,-16.5,-2.5,-15.5,ds),bs(Ho),ys(-5.5,-16.5,-4.5,-11.5,ds),bs(Wo),ps(Ra),ys(-5.5,-11.5,-3.5,-10.5,ds),bs(Wo),ys(-5.5,-10.5,-3.5,-9.5,ds),bs(Uo),ys(-2.4,-11.5,2.4,-10.5,ds),bs(Io),Yo===Mi&&Xs(),vs(Na,ds),xs(Ba,Fo,Io),ys(.5,-17.5,3.5,-15.5,ds),bs(Po)}function Ns(e,t,n,r){Yo===Mi&&Zs(),ds(0,xa),Es(bo,xo,e,t,n,r,Ca,3,2,Fo,Io),Yo===ji&&(gs(es,ts,e,t,2,0,B(Qi,ha)),gs(es,ts,e,t,2,1,B(Zi))),ps(Va),vs(Pa,ds),bs(Fo),ro=Va,ys(-2.5,-17.5,1.5,-16.5,ds),bs(Po)}function Ps(e,t){let n=ns(e,-.27,.27);go=Math.cos(n),_o=Math.sin(n),vo=Math.sin(e)*3-.6*t+1.2*Ao,yo=ba-Math.cos(e)*3+.8*t+2*Ao;let r=e<-.4?-1:+(e>.36);Yo!==0&&Yo!==ji&&Yo!==Mi?$s(r):(Yo===ji?Qs():(ys(-2.5,-4,.5,-2,fs),bs(Go)),vs(Fa,fs),xs(Ha,Fo,Io),ys(-1.5,-3,2.5,-1,fs),bs(Po),ys(-1.5,r-1,2.5,r+1,fs),bs(Bo),fs(2,r-.5),ms(Math.round(bo),Math.round(xo),Vo))}function Fs(e,t,n,r,i,a){Yo===ji||Yo===Ni?nc(e,t,n,r,i,a):(a&&hs(Math.round(r-.5),Math.round(i-.5),2,2,Io),hs(t-1,n-1,3,3,Po),ms(t+1,n-1,Vo),Ss(e,zo))}function Is(e,t,n,r,i,a,o,s,c,l){t&&pi(e,t,io+oo*a,ao+o,n,Math.cos(n)<0),l&&(ds(1,-16.5),Es(bo,xo,s,c,-i,r,wa,2,2,Lo,Lo),Ss(e,zo))}function Ls(e,t,n,r,i,a){let o=t>>1&3,s=o===0?13:o===1?10:o===2?12:9,c=o&1?.8:-.8,l=Math.floor(Math.min(n,n+i*s)-3),u=Math.ceil(Math.max(n,n+i*s)+3),d=Math.floor(Math.min(r,r+a*s)-3),f=Math.ceil(Math.max(r,r+a*s)+3);for(let t=d;t<=f&&!(so&&t>=0);t++)for(let d=l;d<=u;d++){let l=(d-n)*i+(t-r)*a;if(l<0||l>s)continue;let u=l/s,f=Math.abs(-(d-n)*a+(t-r)*i-c*u*u),p=u<.4?2.1:u<.65?1.6:u<.85?1.1:.6;if(f>p)continue;let m=f<p-1,h=(d+t+o&1)==1,g;if(u<.4)g=m?wi:Ti;else if(u<.65)g=m?Ti:Ei;else if(u<.85)g=m||h?Ei:Di;else if(h)continue;else g=Di;e.plot(io+oo*d,ao+t,g)}for(let t=0;t<2&&(t!==1||(o&1)!=1);t++){let l=s+1.5+t*1.5+(o>>1)*.5,u=(t===0?c:-c)*.7,d=Math.round(n+i*l-a*u),f=Math.round(r+a*l+i*u);so&&f>=0||e.plot(io+oo*d,ao+f,t===0?Ei:Di)}}function Rs(e,t,n){fs(e,t),ms(Math.round(bo),Math.round(xo),n)}function zs(e,t,n,r,i,a){ds(e,t);let o=bo,s=xo;ds(n,r),gs(o,s,bo,xo,i,0,a)}var Bs=[-2.4,-5,2.4,-5,4.5,-2.9,4.5,1.9,3.4,3,-3.4,3,-4.5,1.9,-4.5,-2.9],Vs=[-1.9,-4,1.9,-4,3.5,-2.4,3.5,1.4,2.4,2,-2.4,2,-3.5,1.4,-3.5,-2.4],Hs=[-1.4,-3,1.4,-3,2.5,-1.9,2.5,2,-2.5,2,-2.5,-1.9],Us=[-3.4,-3,1.9,-3,3.5,-1.4,3.5,1.9,2.4,3,-3.4,3,-4.5,1.9,-4.5,-1.9],Ws=[-3.5,-4,3.5,-4,3.5,3,-3.5,3],Gs=[-2.4,-4,.9,-4,3.5,-1.4,3.5,3,-4.5,3,-5.5,1,-4.5,-2.9],Ks=[-7.4,-16.5,-3.5,-16.5,-2.5,-15.4,-2.5,-10.4,-3.4,-9.5,-7.4,-9.5,-8.5,-10.4,-8.5,-15.4],qs=[1.5,-11.5,3.4,-11.5,4.5,-10.4,4.5,-8.4,3.4,-7.5,1.6,-7.5,.5,-8.4,.5,-10.4];function Js(){ps(Ra),ys(-8.5,-21.5,-5.5,-15.5,ds),bs(B(zi,ha)),ys(-7.5,-21.5,-5.5,-15.5,ds),bs(B(Ri)),ys(-8.5,-21.5,-5.5,-21,ds),bs(B(Bi)),zs(-7,-22,-7,-22,1,B(Bi)),zs(-7,-19,-7,-19,1,B(Vi,ha)),zs(-9,-16,-9,-15,1,B(Bi))}function Ys(){ps(Ra);let e=B(Wi,ha),t=B(Ui);zs(-4,-11,-8,-12,2,e),zs(-8,-12,-9.5,-14,2,t),zs(-9.5,-14.5,-12,-16,2,t),zs(-9.5,-14.5,-7,-16.5,2,t)}function Xs(){vs(Ks,ds),xs(Wa,B(ea),B(ta,ha)),ys(-7.5,-16.5,-3.5,-15.5,ds),bs(B($i)),ps(Ra),ys(-6.5,-18.5,-4.5,-16.5,ds),bs(B(ea)),ys(-6.5,-17.5,-4.5,-16.5,ds),bs(B(ta,ha)),ys(-6.5,-13.5,-5.5,-12.5,ds),bs(B(na)),zs(-5,-12,-5,-12,1,B(ra,ha)),zs(-6,-12,-6,-12,1,B(ra,ha))}function Zs(){vs(qs,ds),xs(Wa,B(ea),B(ta,ha)),ps(Ra),ys(1.5,-11.5,3.5,-11.5,ds),bs(B(ta,ha)),zs(2,-12,3,-12,1,B(na))}function Qs(){let e=B(Xi),t=B(Zi),n=B(Qi,ha);Rs(-2,-5.5,e),Rs(-1,-5.5,e),Rs(0,-5.5,t),Rs(-3,-4.5,t),Rs(-2,-4.5,e),Rs(-1,-4.5,t),Rs(0,-4.5,t),Rs(1,-4.5,n),Rs(-2,-3.5,t),Rs(-1,-3.5,n),Rs(0,-3.5,n),Rs(-1,-2.5,n)}function $s(e){if(Yo===ki)vs(Bs,fs),ps(Ha),bs(B(Fi)),vs(Vs,fs),bs(B(Ii,ga)),vs(Hs,fs),xs(Ua,Fo,Io),ys(-.5,e-1,2.5,e,fs),bs(Bo),Rs(2,e-.5,Vo),ps(Ra),Rs(2,-3.5,B(Li)),Rs(3,-2.5,B(Li));else if(Yo===Ai)vs(Us,fs),xs(Ha,B(Ui),B(Wi,ha)),ys(-3.5,-3,.5,-2,fs),bs(B(Hi)),ys(-.5,1,3.5,3,fs),bs(B(Gi)),ys(-1.5,0,3.5,1,fs),bs(B(Wi,ha)),ps(Ra),Rs(0,2.5,B(Ki,ha)),Rs(2,2.5,B(Ki,ha)),Rs(1,-1.5,B(Yi,ga));else if(Yo===Ni){vs(Ws,fs),xs(Ha,B(aa),B(oa,ha)),ys(.5,-3,3.5,3,fs),bs(B(ia)),ps(Ra);let t=B(aa);for(let e=-3;e<=3;e+=2)Rs(e,-4.5,t);Rs(-1,1.5,B(oa,ha)),Rs(-1,2.5,B(oa,ha));let n=B(Yi,ga);Rs(1,e-1.5,n),Rs(3,e-1.5,n)}else if(Yo===Pi){vs(Gs,fs),xs(Ha,B(ua),B(da,ha)),ys(-3.5,-4,.5,-3,fs),bs(B(la)),ps(Ua),ys(-.5,-3,3.5,2,fs),bs(Po),ys(-.5,-3,3.5,-2,fs),bs(B(da,ha)),ys(-.5,-3,.5,2,fs),bs(B(da,ha)),ps(Ra),ys(.5,e-1,4.5,e,fs),bs(B(fa,ga)),Rs(2,e-.5,Vo);let t=B(pa);Rs(1,3.5,t),Rs(1,4.5,t),Rs(3,3.5,t)}}function ec(e){let t=(Xo>>3&1)==1,n=B(qi),r=B(Ji);tc(e,-1,-3.5,n),tc(e,-1,-4.5,n),tc(e,-2,-5.5,r),tc(e,0,-5.5,r),tc(e,-3,t?-5.5:-4.5,r),tc(e,1,t?-5.5:-4.5,r)}function tc(e,t,n,r){fs(t,n),rc(e,Math.round(bo),Math.round(xo),r)}function nc(e,t,n,r,i,a){if(Yo===ji){let o=B(Xi),s=B(Zi),c=B(Qi,ha);if(a){let e=Math.round(r-1),t=Math.round(i-1);hs(e,t,3,3,s),ms(e+1,t,o),hs(e,t+2,3,1,c)}hs(t,n-2,2,1,o),hs(t-1,n-1,4,2,s),ms(t,n-1,o),ms(t+1,n,o),ms(t-1,n,c),hs(t,n+1,2,1,c),Ss(e,zo);let l=Xo>>2&15;if(l<3){let r=t+2,i=n-3,a=l===1?2:1;rc(e,r,i,o);for(let t=1;t<=a;t++)rc(e,r+t,i,t===a?s:o),rc(e,r-t,i,t===a?s:o),rc(e,r,i+t,t===a?s:o),rc(e,r,i-t,t===a?s:o)}return}let o=B(sa),s=B(ca,ha);if(a){let e=Math.round(r-1),t=Math.round(i-1);hs(e,t,3,3,o),ms(e,t+2,s)}hs(t-1,n-1,4,3,o),ms(t,n,s),ms(t+1,n+1,s),ms(t+2,Xo>>4&1?n+2:n-2,o),Ss(e,zo)}function rc(e,t,n,r){so&&n>=0||e.plot(io+oo*t,ao+n,r)}function ic(e,t,n,r,i,a){io=Math.floor(t.x)+n,ao=Math.floor(t.y)+r,oo=t.facing<0?-1:1,so=t.onGround,Yo=Oi.get(t.skin)??0,Xo=i+t.id*7;let o=Math.atan2(t.aimY-t.sy,t.aimX-t.sx),s=Math.atan2(t.aimY-t.sy,(t.aimX-t.sx)*oo),c=Math.cos(s),l=Math.sin(s),u=t.flip*t.flipDir*oo;po=Math.cos(u),mo=Math.sin(u),uo=1+t.squash*.6,fo=1-t.squash,ws(t,i),Ts(t,t.vx*oo,a),ho=1-.2*Ao;let d=l<0?l*l*(1-Ao):0;co=Oo*(1-.7*d)+(l*Aa-t.recoil*ja)*(1-Ao),lo=Math.round(ko),Za.fill(0);let f=Ao>.5;us(0,(xa+ +(lo>0))*fo);let p=l>0?l*l*1.8:0,m=7+2*d-p-t.recoil*1.4,g=Math.round(bo+c*m+2*d*d),_=Math.round(xo+l*m),v=g+c*5-l*1.5,y=_+l*5+c*1.5,b=l<=.8,x=Ke[t.weapon],S=x?ci[x.sprite]:void 0;if(f&&Is(e,S,o,c,l,g,_,v,y,b),Os(t,!1),f||(Ss(e,zo),Os(t,!0),Ss(e,zo),Is(e,S,o,c,l,g,_,v,y,b)),t.jetOn){ds(-4.5,-9.5);let t=bo,n=xo;ds(-4.92,-8.59);let r=Math.hypot(bo-t,xo-n)||1;Ls(e,i,t,n,(bo-t)/r,(xo-n)/r)}ls(t,i);let C=ks(t,a);if(Ms(),f&&Os(t,!0),Ss(e,0),Ns(g,_,-l,c),Ss(e,f?0:zo),C&&(As(t,a),Ss(e,zo)),Ao>0&&Fs(e,g,_,v,y,b),js(),Ps(ns(s*.65,-.95,.45)*(1-Ao)+.3*Ao,d),Ss(e,zo),Yo===Ai&&Ao===0&&ec(e),Ao===0&&Fs(e,g,_,v,y,b),t.muzzleT>0&&S){let n=S.w-S.px+1,r=g+c*n,i=_+l*n,a=t.muzzleT>.025?4:2;for(let n=-a;n<=a;n++){let a=Math.abs(n)<=1?hi:Math.abs(n)<=2?Me(t.color):h(t.color,255);e.plot(io+oo*Math.round(r+c*n),ao+Math.round(i+l*n),a),e.plot(io+oo*Math.round(r-l*n*.6),ao+Math.round(i+c*n*.6),a)}e.rect(io+oo*Math.round(r)-1,ao+Math.round(i)-1,3,3,hi)}}var ac=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],oc=u(`#4e8a2a`),sc=u(`#7ec43e`),cc=u(`#b8f070`),lc=u(`#ffffff`),uc=u(`#f2e6c8`),dc=u(`#ffe04a`),fc=u(`#9a2238`),pc=u(`#e8b03a`),mc=u(`#ffd04a`),hc=new Float32Array,gc=0;function _c(e,t,n,r){let i=t.gas.puffs;if(i.length===0)return;hc.length<e.w*e.h&&(hc=new Float32Array(e.w*e.h)),gc=e.w;let a=e.w,o=e.h,s=-1,c=-1;for(let t of i){let i=Math.floor(t.x)+n,l=Math.floor(t.y)+r,u=Math.ceil(t.r);a=Math.min(a,Math.max(0,i-u)),o=Math.min(o,Math.max(0,l-u)),s=Math.max(s,Math.min(e.w-1,i+u)),c=Math.max(c,Math.min(e.h-1,l+u))}if(a>s||o>c)return;for(let e=o;e<=c;e++)hc.fill(0,e*gc+a,e*gc+s+1);for(let e of i){if(e.fuse>=0)continue;let t=Math.floor(e.x)+n,i=Math.floor(e.y)+r,l=Math.ceil(e.r),u=e.r*e.r;for(let n=Math.max(o,i-l);n<=Math.min(c,i+l);n++){let r=n-i;for(let i=Math.max(a,t-l);i<=Math.min(s,t+l);i++){let a=i-t,o=a*a+r*r;o<u&&(hc[n*gc+i]=hc[n*gc+i]+e.amt*(1-o/u))}}}let l=t.tick>>3&3,u=t.world;for(let t=o;t<=c;t++)for(let i=a;i<=s;i++){let a=hc[t*gc+i];if(a<.05)continue;let o=Math.min(.9,a*.85);ac[(t&3)*4+(i+l+(t>>2&1)&3)]>=o*16||u.solid(i-n,t-r)||e.plot(i,t,a>.75?cc:a>.35?sc:oc)}for(let a of i){if(a.fuse<0)continue;let i=Math.floor(a.x)+n,o=Math.floor(a.y)+r,s=Math.ceil(a.r*.9);for(let n=-s;n<=s;n++)for(let r=-s;r<=s;r++){let a=Math.hypot(r,n)/(s||1);if(a>1)continue;let c=i+r,l=o+n;if(ac[(l&3)*4+(c&3)]>=(1.1-a)*16)continue;let u=Math.min(1,a*.7+x(c,l,t.tick>>1)*.35);e.plot(c,l,yr[Math.min(yr.length-1,Math.floor(u*yr.length))])}}}function vc(e,t,n,r){for(let i of t.rugs.list)i.age>=hn.delay?bc(e,t,i,n,r):yc(e,t,i,n,r)}function yc(e,t,n,r,i){let a=n.age-(hn.delay-hn.warn),o=a>=0,s=o&&!(t.tick>>2&1),c=h(n.col,255),l=s?Me(n.col):fc,u=s?lc:pc,d=s?c:uc,f=s?lc:c,p=_(c,.55),m=0,g=0;for(let t=0;t<hn.w;t++){let s=n.top[t];if(s<0)continue;let c=n.dir>0?hn.w-1-t:t,h=o?Math.max(0,Math.round(2*Math.sin(a*30-c*.5)+(c<4?2:0))):0,_=n.x0+t+r,v=s+i-h,y=t===0||t===hn.w-1,b=t%8;e.plot(_,v-4,xr),e.plot(_,v-3,y?xr:f),e.plot(_,v-2,y?xr:b===3||b===4?d:b===2||b===5?u:l),e.plot(_,v-1,y?xr:p),m+=s,g++}if(g!==0){for(let[t,a]of[[0,-1],[hn.w-1,1]]){let o=n.top[t];if(o<0)continue;let s=n.x0+t+r+a;e.plot(s,o+i-3,uc),e.plot(s,o+i-1,uc),e.plot(s+a,o+i-2,uc),e.plot(s+a,o+i-4,uc)}if(o){let t=n.x0+hn.w/2+r,a=Math.round(m/g)+i-36,o=n.dir>0?`>>>`:`<<<`;e.text(o,Math.round(t-e.textWidth(o)/2),a,s?lc:dc,1,xr)}}}function bc(e,t,n,r,i){let a=Math.min(1,(n.age-hn.delay)/hn.gone),o=0,s=0;for(let e=0;e<hn.w;e++)n.top[e]>=0&&(o+=n.top[e],s++);if(s===0)return;let c=Math.round(o/s)+i-2-Math.round(a*6),l=Math.max(3,Math.round(hn.w*(1-a*.8))),u=n.dir>0?n.x0+hn.w-1+Math.round(a*70):n.x0-Math.round(a*70),d=h(n.col,255);for(let t=0;t<l;t++){let i=u-n.dir*t+r;e.plot(i,c-1,d),e.plot(i,c,t%8<2?pc:fc),e.plot(i,c+1,_(d,.55))}let f=ci[`rug-small`];f&&pi(e,fi(f,n.col),u+r,c,t.time*18*n.dir,!1)}function xc(e,t,n,r,i,a){let o=h(i,255),s=_(o,.6);for(let i=-r-1;i<=r+1;i++)for(let a=-r-1;a<=r+1;a++){let c=Math.hypot(a,i*.9);c>r+.6||e.plot(t+a,n+i,c>r-.5?xr:c>r-1.5&&a+i>0?s:o)}let c=Math.max(1,Math.round(r*.45));e.plot(t-c,n-c,lc),r>=4&&e.plot(t-c+1,n-c,v(o,lc,.6)),e.plot(t,n+r+1,s);for(let i=0;i<4;i++)e.plot(t+Math.round(Math.sin(a+i*1.3)),n+r+2+i,xr)}function Sc(e,t,n,r){if(t.kind===z.BALLOON)return xc(e,n,r,Math.round(2+t.t*5),t.col,t.age*12),!0;if(t.kind===z.RUG){let i=ci[`rug-small`];return i?pi(e,fi(i,t.col),n,r,t.age*10,!1):e.rect(n-4,r-1,9,3,h(t.col,255)),!0}let i=t.kind===z.RIG?`rigbit-small`:t.kind===z.FORK?`fork-small`:t.kind===z.TINE?`tine-small`:``;if(i){let a=ci[i],o=Math.atan2(t.vy,t.vx);return a?pi(e,fi(a,t.col),n,r,o,!1):e.line(n,r,n-Math.round(Math.cos(o)*4),r-Math.round(Math.sin(o)*4),h(t.col,255)),t.kind===z.RIG&&t.t>=.25&&e.plot(n+Math.round(Math.cos(o)*3),r+Math.round(Math.sin(o)*3),mc),!0}return!1}function Cc(e,t,n,r){for(let i of t.actors){if(!i.alive||i.charge<0)continue;let a=Ke[i.weapon];if(!a.release)continue;let o=Math.min(1,i.charge/a.charge),s=Math.round(1+o*6),c=Math.atan2(i.aimY-i.sy,i.aimX-i.sx),l=o>.75,u=l?t.tick>>1&1?-1:1:0;xc(e,Math.floor(i.sx+Math.cos(c)*(15+s))+n+u,Math.floor(i.sy+Math.sin(c)*(15+s))+r,s,l&&!(t.tick>>(o>.9?1:2)&1)?lc:i.color,t.time*9)}}var wc=(e,t,n)=>t>=e.x&&n>=e.y&&t<e.x+e.w&&n<e.y+e.h,Tc=(e,t,n)=>Math.hypot(t-e.cx,n-e.cy)<=e.r+4,Ec=5,Dc=class{active=!1;vw=0;vh=0;move={id:-1,ox:0,oy:0,x:0,y:0,moved:!1};aim={id:-1,ox:0,oy:0,x:0,y:0,moved:!1};jump={id:-1,cx:0,cy:0,r:15};bomb={id:-1,cx:0,cy:0,r:11};tray=[];full={x:142,y:6,w:16,h:16};showFull=!1;fullId=-1;pendingSelect=-1;pendingJump=!1;pendingBomb=!1;pendingFire=!1;tapX=0;tapY=0;aimAng=0;wasUp=!1;layout(e,t){this.vw=e,this.vh=t,this.jump.cx=e-26,this.jump.cy=t-58,this.bomb.cx=e-58,this.bomb.cy=t-78}get moveHome(){return{x:40,y:this.vh-62}}buttonRects(){return[this.jump,this.bomb].map(e=>{let t=e.r+4;return{x:e.cx-t,y:e.cy-t,w:t*2+1,h:t*2+1}})}down(e,t,n){if(this.active=!0,this.showFull&&wc(this.full,t,n)){this.fullId=e;return}let r=Math.hypot(t-this.moveHome.x,n-this.moveHome.y)<=26||Tc(this.jump,t,n)||Tc(this.bomb,t,n)?-1:this.tray.findIndex(e=>wc(e,t,n));if(r>=0){r===this.tray.length-1?this.pendingBomb=!0:this.pendingSelect=r;return}if(Tc(this.jump,t,n)){this.jump.id=e,this.pendingJump=!0;return}if(Tc(this.bomb,t,n)){this.bomb.id=e,this.pendingBomb=!0;return}let i=t<this.vw*.42?this.move:this.aim;i.id===-1&&(i.id=e,i.ox=i.x=t,i.oy=i.y=n,i.moved=!1,i===this.aim&&(this.pendingFire=!0,this.tapX=t,this.tapY=n))}moveTo(e,t,n){for(let r of[this.move,this.aim])r.id===e&&(r.x=t,r.y=n,Math.hypot(t-r.ox,n-r.oy)>Ec&&(r.moved=!0))}up(e){for(let t of[this.move,this.aim])t.id===e&&(t.id=-1);this.jump.id===e&&(this.jump.id=-1),this.bomb.id===e&&(this.bomb.id=-1);let t=this.fullId===e;return t&&(this.fullId=-1),t}reset(){this.move.id=this.aim.id=this.jump.id=this.bomb.id=this.fullId=-1}stick(e){if(e.id===-1)return{nx:0,ny:0};let t=e.x-e.ox,n=e.y-e.oy,r=Math.hypot(t,n),i=r>20?20/r:1;return{nx:t*i/20,ny:n*i/20}}apply(e,t,n,r,i,a){let o=this.stick(this.move);e.left=o.nx<-.3,e.right=o.nx>.3,e.down=o.ny>.65;let s=o.ny<-.55;s&&!this.wasUp&&(e.jumpPressed=!0),this.wasUp=s,e.jump=s||this.jump.id!==-1,this.pendingJump&&(e.jumpPressed=!0),this.pendingJump=!1,this.pendingSelect>=0&&(e.select=this.pendingSelect),this.pendingSelect=-1;let c=this.aim;c.id===-1?this.pendingFire?(e.aimX=r+this.tapX,e.aimY=i+this.tapY,this.aimAng=Math.atan2(e.aimY-n,e.aimX-t),e.fire=!0,e.firePressed=!0):((o.nx<-.3&&Math.cos(this.aimAng)>0||o.nx>.3&&Math.cos(this.aimAng)<0)&&(this.aimAng=Math.PI-this.aimAng),e.aimX=t+Math.cos(this.aimAng)*90,e.aimY=n+Math.sin(this.aimAng)*90,e.fire=!1):(c.moved?(this.aimAng=Math.atan2(c.y-c.oy,c.x-c.ox),e.aimX=t+Math.cos(this.aimAng)*90,e.aimY=n+Math.sin(this.aimAng)*90):(e.aimX=r+c.x,e.aimY=i+c.y,this.aimAng=Math.atan2(e.aimY-n,e.aimX-t)),e.fire=!0,(this.pendingFire||a<=0)&&(e.firePressed=!0)),this.pendingFire=!1,this.pendingBomb&&(e.altPressed=!0),this.pendingBomb=!1}},Oc=[`resume`,`new`,`daily`,`online`,`mode`,`bots`,`skill`,`look`,`music`,`shake`],kc=3,Ac=6,jc=44,Mc=(e,t,n)=>t>=e.x&&n>=e.y&&t<e.x+e.w&&n<e.y+e.h,Nc=e=>Math.ceil(44*e);function Pc(e,t){let n=Math.max(16,Nc(e));return{x:t?162:142,y:6,w:n,h:n}}var Fc=4;function Ic(e,t,n){let r=Math.max(18,Nc(n)),i=Oc.length,a=t-8-12-jc,o=1;for(;o<Fc&&Math.ceil(i/o)*(r+kc)-kc>a;)o++;let s=Math.ceil(i/o),c=Math.max(8,Math.min(r,Math.floor((a-(s-1)*kc)/s))),l=Math.max(r,Math.min(o===1?168:120,Math.floor((e-8-12-(o-1)*kc)/o))),u=12+o*l+(o-1)*kc,d=56+s*c+(s-1)*kc,f=Math.floor((e-u)/2),p=Math.floor((t-d)/2),m=f+Ac,h=p+Ac+jc,g=[];for(let e=0;e<i;e++)g.push({x:m+e%o*(l+kc),y:h+Math.floor(e/o)*(c+kc),w:l,h:c});return{panel:{x:f,y:p,w:u,h:d},head:{x:m,y:p+Ac,w:u-12,h:38},items:g,cols:o}}function Lc(e,t,n){return e.items.findIndex(e=>Mc(e,t,n))}function Rc(e,t){switch(e){case`resume`:return{label:`RESUME`,value:``};case`new`:return{label:`NEW ARENA`,value:``};case`daily`:return{label:`DAILY ARENA`,value:``};case`online`:return{label:`PLAY ONLINE`,value:t.online};case`mode`:return{label:`MODE`,value:t.mode};case`bots`:return{label:`BOTS`,value:t.bots===0?`OFF`:String(t.bots)};case`skill`:return{label:`BOT SKILL`,value:t.skill};case`look`:return{label:`LOOK`,value:t.look};case`music`:return{label:`MUSIC`,value:t.music};case`shake`:return{label:`SHAKE`,value:t.shake===0?`OFF`:`${Math.round(t.shake*100)}%`}}}function zc(e,t,n,r){let i=t.y+Math.floor((t.h-7)/2),a=r?e.textWidth(r,1,!0):0,o=e.textWidth(n,1,!0)<=t.w-16-(r?a+6:0);return{label:{x:t.x+8,y:o?i:i+1,w:e.textWidth(n,1,o),h:o?7:5},big:o,value:r?{x:t.x+t.w-8-a,y:i,w:a,h:7}:null}}var Bc=-2,Vc=class{open=!1;sel=0;showButton=!1;button=Pc(1,!1);layout=Ic(0,0,1);info={mode:``,online:``,bots:0,skill:``,look:``,music:``,shake:1,rank:``,next:null,rankP:0};title=`PAUSED`;pressId=-1;pressItem=-1;place(e,t,n,r,i){this.showButton=r,this.button=Pc(n,i),this.layout=Ic(e,t,n)}show(){this.open=!0,this.sel=0,this.pressId=-1}hide(){this.open=!1,this.pressId=-1}down(e,t,n){return this.open?(this.pressId!==-1&&this.pressId!==e||(this.pressId=e,this.pressItem=Lc(this.layout,t,n),this.pressItem>=0&&(this.sel=this.pressItem)),!0):this.showButton&&Mc(this.button,t,n)?(this.pressId=e,this.pressItem=Bc,!0):!1}up(e,t,n){if(e!==this.pressId)return null;let r=this.pressItem;return this.pressId=-1,r===Bc?!this.open&&Mc(this.button,t,n)?`open`:null:!this.open||r<0||Lc(this.layout,t,n)!==r?null:Oc[r]}cancel(e){e===this.pressId&&(this.pressId=-1)}hover(e,t){let n=this.open?Lc(this.layout,e,t):-1;n>=0&&(this.sel=n)}key(e){if(!this.open)return null;let t=Oc.length,n=this.layout.cols,r=Math.ceil(t/n),i=this.sel%n,a=e=>{let a=Math.floor(this.sel/n);do a=(a+e+r)%r;while(a*n+i>=t);this.sel=a*n+i};if(e===`arrowup`||e===`w`)a(-1);else if(e===`arrowdown`||e===`s`)a(1);else if(n>1&&(e===`arrowleft`||e===`a`))this.sel=(this.sel+t-1)%t;else if(n>1&&(e===`arrowright`||e===`d`))this.sel=(this.sel+1)%t;else if(e===`enter`||e===` `)return Oc[this.sel];else if(e===`escape`||e===`p`)return`close`;else return null;return`nav`}},Hc={ink:xr,hud:u(`#f6f1e4`),dim:u(`#9a94a8`),accent:u(`#3ad0ff`),gold:u(`#ffd04a`),panel:u(`#2b2833`),panelLit:u(`#3e3a4a`),bevelHi:u(`#4a4655`),bevelLitHi:u(`#6a6680`),bevelLo:u(`#17141c`),rank:u(`#c58bff`),well:u(`#0c0a10`)};function Uc(e,t,n=!1){e.rect(t.x,t.y,t.w,t.h,Hc.ink),e.rect(t.x+1,t.y+1,t.w-2,t.h-2,n?Hc.panelLit:Hc.panel),e.rect(t.x+1,t.y+1,t.w-2,1,n?Hc.bevelLitHi:Hc.bevelHi),e.rect(t.x+1,t.y+1,1,t.h-2,n?Hc.bevelLitHi:Hc.bevelHi),e.rect(t.x+1,t.y+t.h-2,t.w-2,1,Hc.bevelLo),e.rect(t.x+t.w-2,t.y+1,1,t.h-2,Hc.bevelLo)}function Wc(e,t){Uc(e,t);let n=t.h>=24?2:1,r=n*2+1,i=Math.floor(t.w/2),a=t.x+Math.floor((t.w-i)/2),o=t.y+Math.floor((t.h-(r*2+n))/2);for(let t=0;t<3;t++)e.rect(a,o+t*r,i,n,Hc.hud)}function Gc(e,t,n,r){let i=t.layout,a=t.info;e.rectBlend(0,0,n,r,Hc.panel,.6),Uc(e,i.panel);let o=i.head,s=t.title;e.text(s,o.x+Math.floor((o.w-e.textWidth(s,2,!0))/2),o.y,Hc.hud,2,Hc.ink,!0),e.text(a.rank,o.x+1,o.y+19,Hc.rank,1,Hc.ink,!0);let c=a.next?`NEXT ${a.next}`:`TOP RANK`;e.textWidth(a.rank,1,!0)+e.textWidth(c)+6<=o.w&&e.text(c,o.x+o.w-e.textWidth(c)-1,o.y+21,Hc.dim,1,Hc.ink),e.rect(o.x,o.y+30,o.w,7,Hc.ink),e.rect(o.x+1,o.y+31,o.w-2,5,Hc.well);let l=Math.round((o.w-2)*Math.max(0,Math.min(1,a.rankP)));l>0&&e.rect(o.x+1,o.y+31,l,5,Hc.rank),i.items.forEach((n,r)=>{let i=r===t.sel;Uc(e,n,i),i&&(e.rect(n.x,n.y,n.w,1,Hc.accent),e.rect(n.x,n.y+n.h-1,n.w,1,Hc.accent),e.rect(n.x,n.y,1,n.h,Hc.accent),e.rect(n.x+n.w-1,n.y,1,n.h,Hc.accent));let{label:o,value:s}=Rc(Oc[r],a),c=zc(e,n,o,s);e.text(o,c.label.x,c.label.y,i?Hc.hud:Hc.dim,1,Hc.ink,c.big),c.value&&e.text(s,c.value.x,c.value.y,Hc.gold,1,Hc.ink,!0)})}var Kc=3,qc=6,Jc=56,Yc=(e,t,n)=>t>=e.x&&n>=e.y&&t<e.x+e.w&&n<e.y+e.h;function Xc(e,t,n,r){let i=Math.max(18,Nc(n)),a=t-8-12-Jc,o=r>1&&r*(i+Kc)-Kc>a?2:1,s=Math.max(1,Math.ceil(r/o)),c=Math.max(8,Math.min(i,Math.floor((a-(s-1)*Kc)/s))),l=Math.max(i,Math.min(o===1?200:140,Math.floor((e-8-12-(o-1)*Kc)/o))),u=Math.max(12+o*l+(o-1)*Kc,Math.min(e-8,260)),d=68+s*c+(s-1)*Kc,f=Math.floor((e-u)/2),p=Math.max(0,Math.floor((t-d)/2)),m=f+Math.floor((u-(o*l+(o-1)*Kc))/2),h=p+qc+Jc,g=[];for(let e=0;e<r;e++)g.push({x:m+e%o*(l+Kc),y:h+Math.floor(e/o)*(c+Kc),w:l,h:c});return{panel:{x:f,y:p,w:u,h:d},head:{x:f+qc,y:p+qc,w:u-12,h:52},items:g,cols:o}}var Zc=class{open=!1;sel=0;title=`PLAY ONLINE`;lines=[];rows=[];layout=Xc(0,0,1,0);cellsPerCss=1;vw=0;vh=0;pressId=-1;pressItem=-1;place(e,t,n){this.vw=e,this.vh=t,this.cellsPerCss=n,this.relayout()}setRows(e){let t=this.rows[this.sel]?.id,n=e.length===this.rows.length&&e.every((e,t)=>e.id===this.rows[t].id);if(this.rows=e,!n){let n=e.findIndex(e=>e.id===t);this.sel=n>=0?n:0,this.pressId=-1}this.relayout()}relayout(){this.layout=Xc(this.vw,this.vh,this.cellsPerCss,this.rows.length)}show(){this.open=!0,this.sel=0,this.pressId=-1}hide(){this.open=!1,this.pressId=-1}hit(e,t){return this.layout.items.findIndex(n=>Yc(n,e,t))}down(e,t,n){return this.open?(this.pressId!==-1&&this.pressId!==e||(this.pressId=e,this.pressItem=this.hit(t,n),this.pressItem>=0&&(this.sel=this.pressItem)),!0):!1}up(e,t,n){if(!this.open||e!==this.pressId)return null;this.pressId=-1;let r=this.pressItem;return r>=0&&this.hit(t,n)===r?this.rows[r]?.id??null:null}cancel(e){e===this.pressId&&(this.pressId=-1)}hover(e,t){let n=this.open?this.hit(e,t):-1;n>=0&&(this.sel=n)}key(e){if(!this.open)return null;let t=this.rows.length;if(t===0)return e===`escape`||e===`p`?`back`:null;if(e===`arrowup`||e===`w`||e===`arrowleft`||e===`a`)this.sel=(this.sel+t-1)%t;else if(e===`arrowdown`||e===`s`||e===`arrowright`||e===`d`||e===`tab`)this.sel=(this.sel+1)%t;else if(e===`enter`||e===` `)return this.rows[this.sel]?.id??null;else if(e===`escape`||e===`p`)return`back`;else return null;return`nav`}},Qc={ink:xr,hud:u(`#f6f1e4`),dim:u(`#9a94a8`),accent:u(`#3ad0ff`),gold:u(`#ffd04a`),panel:u(`#2b2833`),panelLit:u(`#3e3a4a`),bevelHi:u(`#4a4655`),bevelLitHi:u(`#6a6680`),bevelLo:u(`#17141c`)};function $c(e,t,n=!1){e.rect(t.x,t.y,t.w,t.h,Qc.ink),e.rect(t.x+1,t.y+1,t.w-2,t.h-2,n?Qc.panelLit:Qc.panel),e.rect(t.x+1,t.y+1,t.w-2,1,n?Qc.bevelLitHi:Qc.bevelHi),e.rect(t.x+1,t.y+1,1,t.h-2,n?Qc.bevelLitHi:Qc.bevelHi),e.rect(t.x+1,t.y+t.h-2,t.w-2,1,Qc.bevelLo),e.rect(t.x+t.w-2,t.y+1,1,t.h-2,Qc.bevelLo)}function el(e,t,n){if(e.textWidth(t)<=n)return t;let r=t.length;for(;r>1&&e.textWidth(`${t.slice(0,r)}..`)>n;)r--;return`${t.slice(0,r)}..`}function tl(e,t,n,r){let i=t.layout;e.rectBlend(0,0,n,r,Qc.panel,.6),$c(e,i.panel);let a=i.head;e.text(t.title,a.x+Math.floor((a.w-e.textWidth(t.title,2,!0))/2),a.y,Qc.hud,2,Qc.ink,!0),t.lines.slice(0,4).forEach((t,n)=>{let r=el(e,t,a.w);e.text(r,a.x+Math.floor((a.w-e.textWidth(r))/2),a.y+20+n*9,n===0?Qc.gold:Qc.dim,1,Qc.ink)}),i.items.forEach((n,r)=>{let i=t.rows[r];if(!i)return;let a=r===t.sel;$c(e,n,a),a&&(e.rect(n.x,n.y,n.w,1,Qc.accent),e.rect(n.x,n.y+n.h-1,n.w,1,Qc.accent),e.rect(n.x,n.y,1,n.h,Qc.accent),e.rect(n.x+n.w-1,n.y,1,n.h,Qc.accent));let o=n.y+Math.floor((n.h-7)/2),s=e.textWidth(i.label,1,!0)<=n.w-16-(i.value?e.textWidth(i.value,1,!0)+6:0);e.text(i.label,n.x+8,s?o:o+1,a?Qc.hud:Qc.dim,1,Qc.ink,s),i.value&&e.text(i.value,n.x+n.w-8-e.textWidth(i.value,1,!0),o,Qc.gold,1,Qc.ink,!0)})}var V=(...e)=>e.map(e=>parseInt(e,2)),nl={A:V(`010`,`101`,`111`,`101`,`101`),B:V(`110`,`101`,`110`,`101`,`110`),C:V(`011`,`100`,`100`,`100`,`011`),D:V(`110`,`101`,`101`,`101`,`110`),E:V(`111`,`100`,`110`,`100`,`111`),F:V(`111`,`100`,`110`,`100`,`100`),G:V(`011`,`100`,`101`,`101`,`011`),H:V(`101`,`101`,`111`,`101`,`101`),I:V(`111`,`010`,`010`,`010`,`111`),J:V(`001`,`001`,`001`,`101`,`010`),K:V(`101`,`101`,`110`,`101`,`101`),L:V(`100`,`100`,`100`,`100`,`111`),M:V(`101`,`111`,`111`,`101`,`101`),N:V(`110`,`101`,`101`,`101`,`101`),O:V(`010`,`101`,`101`,`101`,`010`),P:V(`110`,`101`,`110`,`100`,`100`),Q:V(`010`,`101`,`101`,`110`,`011`),R:V(`110`,`101`,`110`,`101`,`101`),S:V(`011`,`100`,`010`,`001`,`110`),T:V(`111`,`010`,`010`,`010`,`010`),U:V(`101`,`101`,`101`,`101`,`111`),V:V(`101`,`101`,`101`,`101`,`010`),W:V(`101`,`101`,`111`,`111`,`101`),X:V(`101`,`101`,`010`,`101`,`101`),Y:V(`101`,`101`,`010`,`010`,`010`),Z:V(`111`,`001`,`010`,`100`,`111`),0:V(`111`,`101`,`101`,`101`,`111`),1:V(`010`,`110`,`010`,`010`,`111`),2:V(`110`,`001`,`010`,`100`,`111`),3:V(`110`,`001`,`010`,`001`,`110`),4:V(`101`,`101`,`111`,`001`,`001`),5:V(`111`,`100`,`110`,`001`,`110`),6:V(`011`,`100`,`111`,`101`,`111`),7:V(`111`,`001`,`010`,`010`,`010`),8:V(`111`,`101`,`111`,`101`,`111`),9:V(`111`,`101`,`111`,`001`,`110`)," ":V(`000`,`000`,`000`,`000`,`000`),".":V(`000`,`000`,`000`,`000`,`010`),",":V(`000`,`000`,`000`,`010`,`100`),":":V(`000`,`010`,`000`,`010`,`000`),"-":V(`000`,`000`,`111`,`000`,`000`),"+":V(`000`,`010`,`111`,`010`,`000`),"/":V(`001`,`001`,`010`,`100`,`100`),"%":V(`101`,`001`,`010`,`100`,`101`),"!":V(`010`,`010`,`010`,`000`,`010`),"?":V(`110`,`001`,`010`,`000`,`010`),"(":V(`010`,`100`,`100`,`100`,`010`),")":V(`010`,`001`,`001`,`001`,`010`),"'":V(`010`,`010`,`000`,`000`,`000`),"[":V(`110`,`100`,`100`,`100`,`110`),"]":V(`011`,`001`,`001`,`001`,`011`),"<":V(`001`,`010`,`100`,`010`,`001`),">":V(`100`,`010`,`001`,`010`,`100`),"=":V(`000`,`111`,`000`,`111`,`000`),"*":V(`000`,`101`,`010`,`101`,`000`),"&":V(`010`,`101`,`010`,`101`,`011`)},H=e=>e.split(` `).map(e=>parseInt(e.replace(/\./g,`0`).replace(/#/g,`1`),2)),rl={A:H(`.###. #...# #...# ##### #...# #...# #...#`),B:H(`####. #...# #...# ####. #...# #...# ####.`),C:H(`.###. #...# #.... #.... #.... #...# .###.`),D:H(`####. #...# #...# #...# #...# #...# ####.`),E:H(`##### #.... #.... ####. #.... #.... #####`),F:H(`##### #.... #.... ####. #.... #.... #....`),G:H(`.###. #...# #.... #.### #...# #...# .####`),H:H(`#...# #...# #...# ##### #...# #...# #...#`),I:H(`.###. ..#.. ..#.. ..#.. ..#.. ..#.. .###.`),J:H(`..### ...#. ...#. ...#. ...#. #..#. .##..`),K:H(`#...# #..#. #.#.. ##... #.#.. #..#. #...#`),L:H(`#.... #.... #.... #.... #.... #.... #####`),M:H(`#...# ##.## #.#.# #.#.# #...# #...# #...#`),N:H(`#...# #...# ##..# #.#.# #..## #...# #...#`),O:H(`.###. #...# #...# #...# #...# #...# .###.`),P:H(`####. #...# #...# ####. #.... #.... #....`),Q:H(`.###. #...# #...# #...# #.#.# #..#. .##.#`),R:H(`####. #...# #...# ####. #.#.. #..#. #...#`),S:H(`.#### #.... #.... .###. ....# ....# ####.`),T:H(`##### ..#.. ..#.. ..#.. ..#.. ..#.. ..#..`),U:H(`#...# #...# #...# #...# #...# #...# .###.`),V:H(`#...# #...# #...# #...# #...# .#.#. ..#..`),W:H(`#...# #...# #...# #.#.# #.#.# #.#.# .#.#.`),X:H(`#...# #...# .#.#. ..#.. .#.#. #...# #...#`),Y:H(`#...# #...# .#.#. ..#.. ..#.. ..#.. ..#..`),Z:H(`##### ....# ...#. ..#.. .#... #.... #####`),0:H(`.###. #...# #..## #.#.# ##..# #...# .###.`),1:H(`..#.. .##.. ..#.. ..#.. ..#.. ..#.. .###.`),2:H(`.###. #...# ....# ...#. ..#.. .#... #####`),3:H(`####. ....# ....# .###. ....# ....# ####.`),4:H(`...#. ..##. .#.#. #..#. ##### ...#. ...#.`),5:H(`##### #.... ####. ....# ....# #...# .###.`),6:H(`..##. .#... #.... ####. #...# #...# .###.`),7:H(`##### ....# ...#. ..#.. .#... .#... .#...`),8:H(`.###. #...# #...# .###. #...# #...# .###.`),9:H(`.###. #...# #...# .#### ....# ...#. .##..`)," ":H(`..... ..... ..... ..... ..... ..... .....`),".":H(`..... ..... ..... ..... ..... .##.. .##..`),",":H(`..... ..... ..... ..... .##.. ..#.. .#...`),":":H(`..... .##.. .##.. ..... .##.. .##.. .....`),"-":H(`..... ..... ..... .###. ..... ..... .....`),"+":H(`..... ..#.. ..#.. ##### ..#.. ..#.. .....`),"/":H(`....# ....# ...#. ..#.. .#... #.... #....`),"%":H(`##..# ##..# ...#. ..#.. .#... #..## #..##`),"!":H(`..#.. ..#.. ..#.. ..#.. ..#.. ..... ..#..`),"?":H(`.###. #...# ....# ...#. ..#.. ..... ..#..`),"(":H(`...#. ..#.. .#... .#... .#... ..#.. ...#.`),")":H(`.#... ..#.. ...#. ...#. ...#. ..#.. .#...`),"'":H(`..#.. ..#.. ..... ..... ..... ..... .....`),">":H(`.#... ..#.. ...#. ....# ...#. ..#.. .#...`),"<":H(`...#. ..#.. .#... #.... .#... ..#.. ...#.`),"=":H(`..... ..... ##### ..... ##### ..... .....`),"*":H(`..... #.#.# .###. ##### .###. #.#.# .....`),"[":H(`.###. .#... .#... .#... .#... .#... .###.`),"]":H(`.###. ...#. ...#. ...#. ...#. ...#. .###.`),"&":H(`.##.. #..#. #.#.. .#... #.#.# #..#. .##.#`)},il=class{w;h;data;bytes;constructor(e,t){this.w=e,this.h=t,this.data=new Uint32Array(e*t),this.bytes=new Uint8Array(this.data.buffer)}clear(e=0){this.data.fill(e)}plot(e,t,n){e|=0,t|=0,e<0||t<0||e>=this.w||t>=this.h||(this.data[t*this.w+e]=n)}get(e,t){return e|=0,t|=0,e<0||t<0||e>=this.w||t>=this.h?0:this.data[t*this.w+e]}blend(e,t,n,r){if(e|=0,t|=0,e<0||t<0||e>=this.w||t>=this.h)return;let i=t*this.w+e,a=this.data[i],o=Math.min(1,m(n)/255*r);if(o<=0)return;let s=m(a)/255;if(s===0){this.data[i]=l(d(n),f(n),p(n),o*255);return}let c=o;this.data[i]=l(d(a)+(d(n)-d(a))*c,f(a)+(f(n)-f(a))*c,p(a)+(p(n)-p(a))*c,Math.max(s,o)*255)}rect(e,t,n,r,i){for(let a=t;a<t+r;a++)for(let t=e;t<e+n;t++)this.plot(t,a,i)}rectBlend(e,t,n,r,i,a){for(let o=t;o<t+r;o++)for(let t=e;t<e+n;t++)this.blend(t,o,i,a)}line(e,t,n,r,i){e=Math.round(e),t=Math.round(t),n=Math.round(n),r=Math.round(r);let a=Math.abs(n-e),o=-Math.abs(r-t),s=e<n?1:-1,c=t<r?1:-1,l=a+o;for(let u=0;u<4096&&(this.plot(e,t,i),e!==n||t!==r);u++){let n=2*l;n>=o&&(l+=o,e+=s),n<=a&&(l+=a,t+=c)}}static linePts(e,t,n,r,i){e=Math.round(e),t=Math.round(t),n=Math.round(n),r=Math.round(r);let a=Math.abs(n-e),o=-Math.abs(r-t),s=e<n?1:-1,c=t<r?1:-1,l=a+o;for(let u=0;u<512&&(i.push(e,t),e!==n||t!==r);u++){let n=2*l;n>=o&&(l+=o,e+=s),n<=a&&(l+=a,t+=c)}}textWidth(e,t=1,n=!1){return e.length*(n?6:4)*t-t}text(e,t,n,r,i=1,a=0,o=!1){e=e.toUpperCase();let s=o?rl:nl,c=o?5:3,l=o?7:5,u=(c+1)*i,d=Math.round(n);for(let n of a?[0,1]:[1]){let o=Math.round(t);for(let t of e){let e=s[t]??s[`?`];if(e)for(let t=0;t<l;t++)for(let s=0;s<c;s++){if(!(e[t]&1<<c-1-s))continue;let l=o+s*i,u=d+t*i;if(n===0){for(let e=-1;e<=i;e++)for(let t=-1;t<=i;t++)this.plot(l+t,u+e,a);for(let e=0;e<i;e++)this.plot(l+i,u+i+e,a)}else for(let e=0;e<i;e++)for(let t=0;t<i;t++)this.plot(l+t,u+e,r)}o+=u}}}},al=[{action:`again`,label:`PLAY AGAIN`,key:`ENTER`},{action:`new`,label:`NEW ARENA`,key:`R`},{action:`daily`,label:`DAILY`,key:`T`},{action:`copy`,label:`COPY LINK`,key:`C`}],ol=.7,U={ink:xr,white:u(`#ffffff`),hud:u(`#f6f1e4`),dim:u(`#9a94a8`),gold:u(`#ffd04a`),accent:u(`#3ad0ff`),red:u(`#ff5a4a`),veil:u(`#2b2833`)},sl=(e,t,n)=>({best:e,newBest:t,daily:n,age:0,note:``,noteT:0,focus:0,pressed:-1,rects:[]});function cl(e,t){e.age+=t,e.noteT=Math.max(0,e.noteT-t)}function ll(e,t,n=2){e.note=t,e.noteT=n}function ul(e,t,n){return e.rects.findIndex(e=>t>=e.x&&t<e.x+e.w&&n>=e.y&&n<e.y+e.h)}function dl(e,t,n){e.pressed=e.age<ol?-1:ul(e,t,n),e.pressed>=0&&(e.focus=e.pressed)}function fl(e,t,n){let r=e.pressed;return e.pressed=-1,r>=0&&ul(e,t,n)===r?al[r].action:null}function pl(e,t){if(e.age<ol)return null;if(t===`arrowright`||t===`tab`)e.focus=(e.focus+1)%al.length;else if(t===`arrowleft`)e.focus=(e.focus+al.length-1)%al.length;else if(t===`enter`)return al[e.focus].action;else if(t===`c`)return`copy`;return null}function ml(e){let t=Math.max(0,Math.ceil(e-1e-6));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}function hl(e,t=e.player){let n=t?e.mode.teams?At(e,t):F(e.actors,t):null;return n?n.leading?`LEADING +${n.gap}`:`BEAT ${n.name} +${n.gap}`:``}function gl(e,t,n,r,i,a,o=t.player,s,c=0){let l=t.round,u=r+Math.max(t.mode.waves?70:56,c)>Math.floor(a/2)-52,d=6;if(u&&(r=s?s.x:6,d=s?s.y:i+11),t.mode.waves)d=Lr(e,t,n,r,d);else if(!l.hold){let t=l.timeLeft,i=l.phase===`running`&&t<=10,a=ml(t),o=i?2:1,s=7*o+9;n(r,d,e.textWidth(a,o,!0)+10,s,i);let c=i?Math.floor(t*4)%2==0?U.white:U.red:U.hud;e.text(a,r+5,d+5,c,o,U.ink,!0),d+=s+2}return l.phase===`running`&&e.text(hl(t,o),8,i,U.gold,1,U.ink,!0),{x:r,y:d,top:!u}}function _l(e,t,n,r,i,a,o,s,c,l=t.player){if(e.rectBlend(0,0,r,i,U.veil,.6),t.mode.waves){vl(e,t,n,r,i,a,o,s,c,l);return}let u=t.round.standings,d=u.find(e=>e.id===l?.id),f=Math.min(r-12,304),p=c?36:24,m=c?0:9,h=i-4,g=104+Math.min(u.length,6)*9+p+m>h,_=(g?64:90)+14+p+m,v=Math.max(0,Math.min(u.length,6,Math.floor((h-_)/9))),y=_+v*9,b=Math.floor(r/2-f/2),x=Math.max(2,Math.floor(i/2-y/2));a(b,x,f,y,!1);let S=(t,n,i,a,o)=>e.text(t,Math.floor(r/2-e.textWidth(t,a,o)/2),n,i,a,U.ink,o),C=e=>e.toLocaleString(`en-US`),w=x+8;if(g?(S(`ROUND OVER`,w,U.hud,1,!0),w+=11,S(C(d?.score??0),w,U.gold,2,!0),w+=19):(S(`ROUND OVER`,w,U.hud,2,!0),w+=19,S(n.daily?`DAILY ARENA ${n.daily}`:`SEED ${t.arena.seed}`,w,U.dim,1,!1),w+=10,S(C(d?.score??0),w,U.gold,3,!0),w+=27),n.newBest?S(n.daily?`NEW DAILY BEST`:`NEW BEST`,w,Math.floor(n.age*4)%2==0?U.white:U.accent,1,!0):S(`${n.daily?`DAILY `:``}BEST ${C(n.best)}`,w,U.dim,1,!0),w+=13,d){let t=`PLACE ${d.place}/${u.length}   KILLS ${d.kills}   CELLS ${C(d.cells)}`;S(t,w,U.hud,1,e.textWidth(t,1,!0)<=f-12)}w+=13;let T=Math.floor(r/2)-78;for(let t=0;t<v;t++){let n=u[t],r=n.id===d?.id?U.hud:U.dim;e.rect(T,w+1,5,5,U.ink),e.rect(T+1,w+2,3,3,n.color),e.text(`${n.place} ${n.name}`,T+9,w,r,1,U.ink,!0);let i=C(n.score);e.text(i,T+118-e.textWidth(i,1,!0),w,r,1,U.ink,!0);let a=`${n.kills}K`;e.text(a,T+156-e.textWidth(a,1,!0),w,r,1,U.ink,!0),w+=9}yl(e,n,r,i,w+6,a,o,s,c)}function vl(e,t,n,r,i,a,o,s,c,l){let u=t.actors.filter(e=>e.team===0).sort((e,t)=>t.score-e.score||e.id-t.id),d=Math.min(r-12,304),f=c?36:24,p=c?0:9,m=i-4,h=104+Math.min(u.length,6)*9+f+p>m,g=(h?64:90)+14+f+p,_=Math.max(0,Math.min(u.length,6,Math.floor((m-g)/9))),v=g+_*9,y=Math.floor(r/2-d/2),b=Math.max(2,Math.floor(i/2-v/2));a(y,b,d,v,!1);let x=(t,n,i,a,o)=>e.text(t,Math.floor(r/2-e.textWidth(t,a,o)/2),n,i,a,U.ink,o),S=e=>e.toLocaleString(`en-US`),C=t.waves.wave,w=b+8;h?(x(`RUN OVER`,w,U.hud,1,!0),w+=11,x(`WAVE ${C}`,w,U.gold,2,!0),w+=19):(x(`RUN OVER`,w,U.hud,2,!0),w+=19,x(`${t.mode.name}  -  ${n.daily?`DAILY ARENA ${n.daily}`:`SEED ${t.arena.seed}`}`,w,U.dim,1,!1),w+=10,x(`WAVE ${C}`,w,U.gold,3,!0),w+=27),n.newBest?x(n.daily?`NEW DAILY BEST WAVE`:`NEW BEST WAVE`,w,Math.floor(n.age*4)%2==0?U.white:U.accent,1,!0):x(`${n.daily?`DAILY `:``}BEST WAVE ${S(n.best)}`,w,U.dim,1,!0),w+=13;let T=`TEAM SCORE ${S(Dt(t,0))}   KILLS ${Ot(t,0)}   REVIVES ${t.waves.revives}`;x(T,w,U.hud,1,e.textWidth(T,1,!0)<=d-12),w+=13;let E=Math.floor(r/2)-78;for(let t=0;t<_;t++){let n=u[t],r=n===l?U.hud:U.dim;e.rect(E,w+1,5,5,U.ink),e.rect(E+1,w+2,3,3,n.color),e.text(n.name,E+9,w,r,1,U.ink,!0);let i=S(n.score);e.text(i,E+118-e.textWidth(i,1,!0),w,r,1,U.ink,!0);let a=`${n.kills}K`;e.text(a,E+156-e.textWidth(a,1,!0),w,r,1,U.ink,!0),w+=9}yl(e,n,r,i,w+6,a,o,s,c)}function yl(e,t,n,r,i,a,o,s,c){let l=Math.min(n-12,304),u=c?36:24,d=Math.min(i,r-u-(c?0:9)-2),f=Math.floor((l-12-4*(al.length-1))/al.length),p=Math.floor(n/2-(f*al.length+4*(al.length-1))/2);t.rects=[],al.forEach((n,r)=>{let i={x:p+r*(f+4),y:d,w:f,h:u};t.rects.push(i);let l=o>=i.x&&o<i.x+i.w&&s>=i.y&&s<i.y+i.h,m=!c&&t.focus===r;a(i.x,i.y,i.w,i.h,l||m||t.pressed===r),m&&(e.rect(i.x,i.y,i.w,1,U.accent),e.rect(i.x,i.y+i.h-1,i.w,1,U.accent),e.rect(i.x,i.y,1,i.h,U.accent),e.rect(i.x+i.w-1,i.y,1,i.h,U.accent));let h=n.action===`copy`&&t.noteT>0,g=h?t.note:n.label,_=e.textWidth(g,1,!0)<=i.w-6;e.text(g,i.x+Math.floor((i.w-e.textWidth(g,1,_))/2),i.y+Math.floor((i.h-(_?7:5))/2),h?U.gold:U.hud,1,U.ink,_),c||e.text(n.key,i.x+Math.floor((i.w-e.textWidth(n.key))/2),i.y+i.h+3,U.dim,1,U.ink)})}var bl=2,xl=14,W={ink:xr,white:u(`#ffffff`),hud:u(`#f6f1e4`),dim:u(`#9a94a8`),hp:u(`#5ae07a`),hpLow:u(`#ff5a4a`),fuel:u(`#ffb23d`),accent:u(`#3ad0ff`),gold:u(`#ffd04a`),orbCore:u(`#2a0e4a`),brass:u(`#e9b54a`),brassDark:u(`#9b6a22`),ember:u(`#ff7a2a`),panel:u(`#2b2833`),panelLit:u(`#3e3a4a`),bevelHi:u(`#4a4655`),bevelLitHi:u(`#6a6680`),bevelLo:u(`#17141c`),rank:u(`#c58bff`)},Sl=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function Cl(e,t,n,r){let i=r?78:116,a=r?18:26,o=e-i*2,s=Math.max(a,Math.min(42,Math.floor((o-6)/n))),c=r?26:28,l=n*s+6,u=l>o;return{slotW:s,slotH:c,trayW:l,sx:Math.floor(e/2-l/2),sy:t-c-8-(u?40:0),raised:u}}function wl(e,t,n,r,i){if(i-t<r)return Math.max(0,e);let a=e=>e>=r&&e+t<=i&&n.every(n=>e+t<=n.y||e>=n.y+n.h),o=Math.max(r,Math.min(i-t,e));if(a(o))return o;let s=Math.max(...n.map(e=>e.y+e.h))+2;if(a(s))return s;let c=Math.min(...n.map(e=>e.y))-2-t;return a(c)?c:-1}var Tl=2.4,El=u(`#ffd27a`),Dl=[u(`#fffbe0`),u(`#ffe27a`),u(`#ffb23d`),u(`#ff7a2a`),u(`#e5481f`),u(`#9a2a1c`),u(`#4a1a16`)],Ol=class{vw=0;vh=0;terrain;back;overlay;hud;light;lightAcc;view={ox:0,oy:0,fx:0,fy:0,vw:0,vh:0};resize(e,t){if(e===this.vw&&t===this.vh)return;this.vw=e,this.vh=t;let n=e+8,r=t+8;this.terrain=new il(n,r),this.back=new il(n,r),this.overlay=new il(n,r),this.hud=new il(e,t),this.light=new il(Math.ceil(n/bl),Math.ceil(r/bl)),this.lightAcc=new Float32Array(this.light.w*this.light.h*3)}build(e,t,n,r){let i=t-this.vw/2,a=n-this.vh/2,o=this.view;o.ox=Math.floor(i),o.oy=Math.floor(a),o.fx=i-o.ox,o.fy=a-o.oy,o.vw=this.vw,o.vh=this.vh,this.copyWorld(e),this.overlay.clear(),this.lightAcc.fill(0),this.drawLights(e),this.drawChunks(e),this.drawParticles(e,!0);let s=4-o.ox,c=4-o.oy;vc(this.overlay,e,s,c),this.drawProjectiles(e);let l=r.me??e.player;for(let t of e.actors)t.alive?this.drawActor(e,t,l):t.downT>0&&Br(this.overlay,t,this.px(t.x),this.py(t.y),e.tick);Cc(this.overlay,e,s,c),_c(this.overlay,e,s,c),this.drawParticles(e,!1),this.drawBeams(e),this.drawFloatTexts(r),this.finishLight(),this.drawHud(e,r)}px(e){return Math.floor(e)-this.view.ox+4}py(e){return Math.floor(e)-this.view.oy+4}copyWorld(e){let t=e.world,n=this.terrain,r=this.back;n.clear(),r.clear();let i=this.view.ox-4,a=this.view.oy-4;for(let e=0;e<n.h;e++){let o=a+e;if(o<0||o>=t.H)continue;let s=Math.max(0,i),c=Math.min(t.W,i+n.w);if(c<=s)continue;let l=o*t.W,u=e*n.w+(s-i);n.data.set(t.col.subarray(l+s,l+c),u),r.data.set(t.back.subarray(l+s,l+c),u)}}addLight(e,t,n,r,i){let a=this.light,o=(e-this.view.ox+4)/bl,s=(t-this.view.oy+4)/bl,c=n/bl;if(o+c<0||s+c<0||o-c>a.w||s-c>a.h)return;let l=d(r)/255,u=f(r)/255,m=p(r)/255,h=Math.max(0,Math.floor(o-c)),g=Math.min(a.w-1,Math.ceil(o+c)),_=Math.max(0,Math.floor(s-c)),v=Math.min(a.h-1,Math.ceil(s+c)),y=this.lightAcc,b=a.w,x=c>0?c*c*1.000001:1/0;for(let e=_;e<=v;e++){let t=e+.5-s,n=t<0?-t:t,r=(e*b+h)*3;for(let e=h;e<=g;e++,r+=3){let a=e+.5-o;if(a*a+t*t>x)continue;let s=a<0?-a:a,d=s>n?s:n,f=s/d,p=n/d,h=(d===0?0:Math.sqrt(f*f+p*p)*d)/c;if(h>=1)continue;let g=(1-h)*(1-h)*i;y[r]=y[r]+l*g,y[r+1]=y[r+1]+u*g,y[r+2]=y[r+2]+m*g}}}drawLights(e){for(let t of e.arena.lights){let n=1-t.flicker+Math.sin(e.time*9+t.x)*t.flicker*.5+Math.sin(e.time*23+t.y)*t.flicker*.5;this.addLight(t.x,t.y,t.r,t.color,.55*n)}for(let t of e.lights)this.addLight(t.x,t.y,t.r,t.color,Math.min(1.4,t.life/t.max*1.4));for(let t of e.actors)t.alive&&this.addLight(t.cx,t.cy,44,t.color,.16)}finishLight(){let e=this.light,t=this.lightAcc,n=e.bytes,r=e.data,i=e.w*e.h;for(let e=0,a=0,o=0;e<i;e++,a+=3,o+=4){let i=t[a],s=t[a+1],c=t[a+2];i===0&&s===0&&c===0?r[e]=4278190080:(n[o]=Math.min(255,i*255),n[o+1]=Math.min(255,s*255),n[o+2]=Math.min(255,c*255),n[o+3]=255)}}drawChunks(e){let t=this.overlay;for(let n of e.chunks.list)n.forEachCovered((e,r,i)=>{let a=n.cols[i],o=i%n.bw,s=i/n.bw|0,c=s===0||n.mats[i-n.bw]===0,l=s===n.bh-1||n.mats[i+n.bw]===0,u=o===0||o===n.bw-1||n.mats[i-1]===0||n.mats[i+1]===0;c?a=_(a,1.2):l?a=_(a,.7):u&&(a=_(a,.85)),t.plot(this.px(e),this.py(r),h(a,255))})}puff(e,t,n,r,i,a){let o=this.overlay,s=Math.ceil(n),c=n*n,u=Math.max(0,n-1.1),h=u*u;e|=0,t|=0;let g=o.w,_=Math.max(-s,-e),v=Math.min(s,g-1-e),y=Math.max(-s,-t),b=Math.min(s,o.h-1-t);if(_>v||y>b)return;let x=Math.min(1,m(r)/255*a),S=Math.min(1,m(i)/255*a);if(x<=0&&S<=0)return;let C=d(r),w=f(r),T=p(r),E=d(i),D=f(i),O=p(i),k=l(C,w,T,x*255),A=l(E,D,O,S*255),j=o.data;for(let n=y;n<=b;n++){let r=(t+n)*g+e,i=n*n;for(let e=_;e<=v;e++){let t=e*e+i;if(t>c)continue;let n=t>=h,a=n?S:x;if(a<=0)continue;let o=r+e,s=j[o],u=s>>>24;if(u===0){j[o]=n?A:k;continue}let d=u/255,f=s&255,p=s>>>8&255,m=s>>>16&255;j[o]=n?l(f+(E-f)*a,p+(D-p)*a,m+(O-m)*a,(d>a?d:a)*255):l(f+(C-f)*a,p+(w-p)*a,m+(T-m)*a,(d>a?d:a)*255)}}}drawParticles(e,t){let n=e.parts,r=this.overlay,i=280;for(let a=0;a<n.n;a++){let o=n.kind[a];if((o===R.SMOKE||o===R.HEAT)!==t)continue;let s=this.px(n.x[a]),c=this.py(n.y[a]);if(s<-12||c<-12||s>r.w+12||c>r.h+12)continue;let l=1-n.life[a]/n.max[a],u=n.size[a],d=n.vx[a],f=n.vy[a];switch(o){case R.CRUMB:case R.GORE:r.plot(s,c,h(n.col[a],255)),u>1&&r.plot(s+1,c,h(_(n.col[a],.8),255));break;case R.SHARD:r.plot(s,c,h(e.tick+a&7?n.col[a]:W.white,255));break;case R.SHELL:{let t=(e.tick>>2)+a&1;r.plot(s,c,W.brass),r.plot(s+ +!!t,c+ +!t,W.brassDark);break}case R.SPARK:case R.EMBERP:{let t=o===R.EMBERP&&!(e.tick+a&4)?El:n.col[a],u=Math.hypot(d,f),p=Math.min(5,Math.max(1,u*.012)),m=s-d/(u||1)*p,g=c-f/(u||1)*p;r.line(m,g,s,c,h(_(t,.75),255)),r.plot(s,c,h(t,255)),i>0&&!(a&3)&&(this.addLight(n.x[a],n.y[a],12,t,.4*(1-l)),i--);break}case R.SMOKE:{let e=(l<.12?l/.12:1-(l-.12)/.88)*.78,t=_(n.col[a],1.05-l*.3),r=1.2+u*1.4+l*(2+u*1.5);this.puff(s,c,r,t,_(t,.72),e);break}case R.HEAT:{let e=y(Dl,l);r.blend(s,c,e,l>.8?(1-l)*5:1),i>0&&a%6==0&&l<.6&&(this.addLight(n.x[a],n.y[a],14,e,.45*(1-l)),i--);break}case R.FIRE:{let e=n.col[a],t=e&&l<.5?l<.2?Me(e):h(e,255):y(yr,l);if(u>=2){let e=(u-.4)*(1-l*.55);this.puff(s,c,e,t,_(t,.78),1)}else r.plot(s,c,t);i>0&&a%4==0&&(this.addLight(n.x[a],n.y[a],16+u*6,t,.45*(1-l)),i--);break}case R.MAGIC:{let e=n.col[a];r.plot(s,c,h(e,255)),l<.5&&r.plot(s,c-1,h(_(e,.7),255)),i>0&&!(a&3)&&(this.addLight(n.x[a],n.y[a],14,e,.4*(1-l)),i--);break}}}}drawProjectiles(e){let t=this.overlay;for(let n of e.projectiles){let r=this.px(n.x),i=this.py(n.y),a=Math.hypot(n.vx,n.vy)||1,o=n.vx/a,s=n.vy/a,c=Math.atan2(n.vy,n.vx);switch(n.kind){case z.BULLET:t.line(r,i,r-o*6,i-s*6,h(n.col,255)),t.line(r,i,r-o*2,i-s*2,W.white);break;case z.ROCKET:case z.DRILL:{let e=ci[n.kind===z.ROCKET?`rocket-small`:`drillshell-small`];e?pi(t,fi(e,n.col),r,i,c,!1):t.line(r,i,r-o*6,i-s*6,h(n.col,255));break}case z.GRENADE:{let a=ci[`grenade-small`];a?pi(t,fi(a,n.col),r,i,n.age*9,!1):t.rect(r-2,i-2,4,4,h(n.col,255)),e.tick>>3&1||t.plot(r,i-3,Me(n.col));break}case z.CLUSTER:{let e=ci[`grenade-small`];e&&pi(t,fi(e,n.col),r,i,n.age*12,!1),t.rect(r-1,i-1,3,2,Me(n.col));break}case z.BOMBLET:t.rect(r-1,i-1,3,3,xr),t.rect(r-1,i-1,2,2,e.tick>>2&1?h(n.col,255):Me(n.col));break;case z.ORB:{let a=5+Math.sin(e.time*30)*1.2+(n.t>0?3:0),o=h(n.col,255),s=Me(n.col);for(let e=-10;e<=10;e++)for(let n=-10;n<=10;n++){let c=Math.hypot(n,e);c<a*.3?t.plot(r+n,i+e,W.orbCore):c<a-1?t.plot(r+n,i+e,o):c<a?t.plot(r+n,i+e,s):c<a+1&&t.plot(r+n,i+e,xr)}break}case z.FLAME:break;default:Sc(t,n,r,i)}}}drawBeams(e){let t=this.overlay;for(let n of e.beams){let e=n.life/n.max,r=this.px(n.x0),i=this.py(n.y0),a=this.px(n.x1),o=this.py(n.y1),s=Math.hypot(a-r,o-i)||1,c=-(o-i)/s,l=(a-r)/s,u=Math.round(1+e*4),d=h(_(n.col,.6),255),f=Me(n.col),p=h(n.col,255);for(let e=-u;e<=u;e++){let n=Math.abs(e)<=Math.max(0,u-4)?W.white:Math.abs(e)===u?d:p;t.line(r+c*e,i+l*e,a+c*e,o+l*e,n)}for(let t=0;t<s;t+=10)this.addLight(n.x0+(n.x1-n.x0)*t/s,n.y0+(n.y1-n.y0)*t/s,40,f,.35*e)}}drawActor(e,t,n){let r=this.overlay,i=this.px(t.x),a=this.py(t.y);if(!(i<-40||a<-50||i>r.w+40||a>r.h+50)){if(ic(r,t,4-this.view.ox,4-this.view.oy,e.tick,e.time),t.muzzleT>0&&ci[Ke[t.weapon].sprite]){let e=Math.atan2(t.aimY-t.sy,t.aimX-t.sx);this.addLight(t.sx+Math.cos(e)*20,t.sy+Math.sin(e)*20,40,Me(t.color),.7)}if(t.bot||t!==n){let n=a-24-16;r.text(t.name,i-r.textWidth(t.name)/2,n,h(t.color,255),1,xr),r.rect(i-11,n+7,22,4,xr);let o=e.mode.waves?Bn(e,t):100;r.rect(i-10,n+8,Math.max(0,Math.min(20,Math.round(20*t.hp/o))),2,t.hp>o*.35?W.hp:W.hpLow)}t.jetOn&&this.addLight(t.x,t.y-8,28,u(`#ffa860`),.5)}}panel(e,t,n,r,i=!1){let a=this.hud;a.rect(e,t,n,r,W.ink),a.rect(e+1,t+1,n-2,r-2,i?W.panelLit:W.panel),a.rect(e+1,t+1,n-2,1,i?W.bevelLitHi:W.bevelHi),a.rect(e+1,t+1,1,r-2,i?W.bevelLitHi:W.bevelHi),a.rect(e+1,t+r-2,n-2,1,W.bevelLo),a.rect(e+n-2,t+1,1,r-2,W.bevelLo)}bar(e,t,n,r,i,a){let o=this.hud;o.rect(e,t,n,r,W.ink),o.rect(e+1,t+1,n-2,r-2,u(`#0c0a10`));let s=Math.round((n-2)*Math.max(0,Math.min(1,i)));s>0&&(o.rect(e+1,t+1,s,r-2,a),o.rect(e+1,t+1,s,1,v(a,W.white,.4)),o.rect(e+1,t+r-2,s,1,_(a,.7)))}drawHud(e,t){let n=this.hud;n.clear();let r=this.vw,i=this.vh,a=t.me??e.player;if(t.rotate){this.drawRotate(r,i);return}if(t.mode===`title`){this.drawTitle(e,t);return}let o=t.juice,s=!!t.touch?.active;if(a){let t=a.alive&&a.hp<35?(.35+.25*Math.sin(e.time*7))*(1-a.hp/35)+.15:0,n=Math.max(t,o?o.hurt*.8:0);n>.02&&this.vignette(n)}let c=Math.floor(e.destroyedPct*1e3)/10;this.panel(6,6,132,32),this.bar(10,10,84,10,e.destroyedPct,W.ember);let l=`${c.toFixed(1)}%`;if(n.text(l,134-n.textWidth(l,1,!0),8,W.hud,1,W.ink,!0),a){let r=(a.score+a.comboPts).toLocaleString(`en-US`);n.text(r,11,24,W.gold,1,W.ink,!0);let i=t.meta?`${t.meta.daily?`DAILY `:``}BEST ${e.mode.waves?`WAVE `:``}${t.meta.best.toLocaleString(`en-US`)}`:``;n.text(i,134-n.textWidth(i),26,W.dim,1,W.ink)}let d=s?78:44,f=0,p=s&&t.touch?t.touch.moveHome:void 0,m=p?p.y-20-xl:i-(r<480?70:20),h=Math.max(2,Math.floor((m-d)/9));if(e.mode.teams)f=zr(n,e,8,d,a,e.time,h);else{let t=Ce(e.actors).slice(0,Math.min(6,h));t.forEach((e,t)=>{let r=d+t*9;n.rect(8,r+1,5,5,W.ink),n.rect(9,r+2,3,3,e.color),n.text(`${e.name} ${Se(e)}`,17,r,e===a?W.hud:W.dim,1,W.ink,!0)}),f=t.length}let g=(e,t,n,r,i)=>this.panel(e,t,n,r,i),_=s&&t.menu?t.menu.button.x+t.menu.button.w+4:142,v=[[e.mode.id===`classic`?``:e.mode.name,W.accent],[e.twist.name,W.gold],[t.net?.status??``,W.hp]].filter(([e])=>e),y=Math.max(0,...v.map(([e])=>n.textWidth(e)+8)),b=gl(n,e,g,_,d+f*9+(e.mode.waves?5:2),r,a,s?{x:114,y:45}:void 0,y);for(let[e,t]of v)this.panel(b.x,b.y,n.textWidth(e)+8,11),n.text(e,b.x+4,b.y+3,t,1,W.ink),b.y+=12;let x=b.top?Math.max(30,b.y+2):30;if(e.feed.forEach((e,t)=>{let i=n.textWidth(e.text,1,!0)+8,a=r-i-6,o=6+t*13;this.panel(a,o,i,12,e.t>3.5),n.text(e.text,a+4,o+3,e.t>3.5?W.white:W.dim,1,0,!0)}),s&&t.touch?.showFull){let e=t.touch.full;this.panel(e.x,e.y,e.w,e.h);for(let[t,r,i,a]of[[e.x+4,e.y+4,1,1],[e.x+e.w-5,e.y+4,-1,1],[e.x+4,e.y+e.h-5,1,-1],[e.x+e.w-5,e.y+e.h-5,-1,-1]])for(let e=0;e<3;e++)n.plot(t+i*e,r,W.hud),n.plot(t,r+a*e,W.hud)}if(s&&t.menu&&Wc(n,t.menu.button),a){let t=s?42:i-34;if(this.panel(6,t,104,28),n.text(`HP`,11,t+5,W.hud,1,W.ink,!0),this.bar(28,t+4,77,9,a.hp/100,a.hp>35?W.hp:W.hpLow),n.text(`JET`,11,t+16,W.hud,1,W.ink,!0),this.bar(34,t+16,71,8,a.fuel/1.6,W.fuel),!a.alive&&e.mode.waves){let e=Ur(a);n.text(e.head,Math.floor(r/2-n.textWidth(e.head,2,!0)/2),Math.floor(i/2-30),a.out?W.dim:W.hpLow,2,W.ink,!0),n.text(e.sub,Math.floor(r/2-n.textWidth(e.sub,1,!0)/2),Math.floor(i/2-12),W.hud,1,W.ink,!0)}else if(!a.alive){let e=`RESPAWN ${Math.max(0,a.respawnT).toFixed(1)}`;n.text(e,Math.floor(r/2-n.textWidth(e,2,!0)/2),Math.floor(i/2-30),W.hud,2,W.ink,!0)}}let S=e.mode.roster,C=S.length+1,{slotW:w,slotH:T,trayW:E,sx:D,sy:O}=Cl(r,i,C,s);n.rect(D-1,O-4,E+2,T+8,W.ink),n.rect(D,O-3,E,T+6,u(`#121016`)),t.touch&&(t.touch.tray=[]);for(let e=0;e<C;e++){let r=D+3+e*w;t.touch&&t.touch.tray.push({x:r,y:O,w:w-2,h:T});let i=e===S.length,o=!i&&a&&a.weapon===S[e];this.panel(r,O,w-2,T,!!o),o&&(n.rect(r,O,w-2,1,W.accent),n.rect(r,O+T-1,w-2,1,W.accent),n.rect(r,O,1,T,W.accent),n.rect(r+w-3,O,1,T,W.accent));let c=ci[i?`grenade-small`:Ke[S[e]].sprite];if(c){if(c.w<=w-6)mi(n,c,r+Math.floor((w-2-c.w)/2),O+Math.floor((T-c.h)/2)+1);else{let e=Math.ceil(c.w/2),t=Math.ceil(c.h/2),i=r+Math.floor((w-2-e)/2),a=O+Math.floor((T-t)/2)+2;for(let r=0;r<t;r++)for(let t=0;t<e;t++){let e=c.data[r*2*c.w+t*2];e&&n.plot(i+t,a+r,e)}}}n.text(i?s?``:`RMB`:`${(e+1)%10}`,r+3,O+3,o?W.accent:W.dim,1,W.ink),i&&a&&this.grenadePips(r+Math.floor((w-2)/2),O+T-8,a)}if(a){let e=Ke[a.weapon].name.toUpperCase(),t=n.textWidth(e,1,!0)+10,i=Math.floor(r/2-t/2);this.panel(i,O-21,t,14),n.text(e,i+5,O-18,W.hud,1,0,!0)}let k=Math.min(Math.floor(i*.66),O-61),A=k>=Math.floor(i/2)+22?k:Math.floor(i/2)-48;if(t.showHelp&&!t.autoplay&&!s){let e=`A D MOVE  SPACE JUMP/FLIP/JET  CLICK SHOOT  RMB GRENADE  1-9 WEAPON`,i=`R ARENA  T DAILY  G MODE  L LOOK  B BOTS  N SKILL  K SHAKE  M MUSIC  ESC MENU  H HIDE`,a=`${e}  ${i}`,o=n.textWidth(a)<=r-8?[a]:[e,i];(!t.prompt||A+37<O-33-(o.length-1)*8)&&o.forEach((e,t)=>n.text(e,Math.floor(r/2-n.textWidth(e)/2),O-32-(o.length-1-t)*8,W.dim,1,W.ink))}if(t.messageT>0&&n.text(t.message,Math.floor(r/2-n.textWidth(t.message,1,!0)/2),x,W.hud,1,W.ink,!0),t.soundWaits){let e=t.coarse?`TAP OR PRESS A KEY FOR SOUND`:`PRESS A KEY OR CLICK FOR SOUND`;n.text(e,Math.floor(r/2-n.textWidth(e)/2),0,W.hud,1,W.ink)}t.prompt&&(!a||a.alive)&&this.drawPrompt(t.prompt,e.time,r,A),!t.autoplay&&!s&&n.text(`${t.fps} FPS`,r-34,i-8,W.dim,1),a&&this.drawCombo(a,o,r,s&&t.menu?_:0),o&&this.drawBanners(o,r,i);let j=e.mode.waves&&e.round.phase===`running`?Vr(e,i):null,ee=t.net?.wait;if(ee){let t=o?this.bannerBands(o,i):[];if(a&&!a.alive){let n=Math.floor(i/2-30);t.push({y:n-1,h:(e.mode.waves?Math.floor(i/2-12)+8:n+15)-n+1})}let s=Math.floor(i/2-52),c=wl(s,15,j?[...t,j]:t,46,O-23);if(c<0&&j&&(c=wl(s,15,t,46,O-23),c>=0&&(j=null)),c>=0){let e=n.textWidth(ee,1,!0)+12,t=Math.floor(r/2-e/2);this.panel(t,c,e,15,!0),n.text(ee,t+6,c+4,W.gold,1,W.ink,!0)}}if(j&&Hr(n,e,r,i),t.meta&&!s){let e=t.meta,a=r-92-6,o=i-34;this.panel(a,o,92,22),n.text(e.rank,a+5,o+4,W.rank,1,W.ink,!0),this.bar(a+4,o+13,84,5,e.rankP,W.rank)}if(e.humans.length>1&&!t.net?.active&&ai(n,e,this.view,{panel:g,bar:(e,t,n,r,i,a)=>this.bar(e,t,n,r,i,a),pips:(e,t,n)=>this.grenadePips(e,t,n)},O,s&&t.touch?t.touch.buttonRects():[]),t.mode===`paused`){if(t.net?.screen.open)tl(n,t.net.screen,r,i);else if(t.menu)Gc(n,t.menu,r,i);else{n.rectBlend(0,0,r,i,W.panel,.6);let e=`PAUSED`;n.text(e,Math.floor(r/2-n.textWidth(e,3,!0)/2),Math.floor(i/2-14),W.hud,3,W.ink,!0)}}let M=e.round.phase===`over`&&t.mode!==`paused`?t.results:void 0;if(M&&(_l(n,e,M,r,i,g,s?-1:t.mouseX,s?-1:t.mouseY,s,a),s)){let e=t.net?.active?t.menu?.button:void 0;e&&!M.rects.some(t=>t.x<e.x+e.w&&e.x<t.x+t.w&&t.y<e.y+e.h&&e.y<t.y+t.h)&&Wc(n,e);return}if(t.autoplay&&!M&&t.mode!==`paused`){n.text(`AUTOPILOT`,r-n.textWidth(`AUTOPILOT`)-8,i-44,W.dim,1,W.ink);return}if(s&&t.touch){t.mode!==`paused`&&this.drawTouch(t.touch,a?a.charge:-1,a);return}let N=Math.round(t.mouseX),te=Math.round(t.mouseY),P=(e,t,r,i)=>{n.rect(e-1,t-1,r+2,i+2,W.ink)},ne=(e,t,r,i)=>n.rect(e,t,r,i,W.white),re=[[N+3,te,4,1],[N-6,te,4,1],[N,te+3,1,4],[N,te-6,1,4]];for(let e of re)P(...e);for(let e of re)ne(...e);if(n.plot(N,te,W.white),o&&o.hitmarker>0){let e=o.hitmarkerKill?u(`#ff4a3a`):W.white,t=o.hitmarkerKill?5:4,r=t+(o.hitmarkerKill?4:3);for(let[i,a]of[[1,1],[1,-1],[-1,1],[-1,-1]])for(let o=t;o<=r;o++)n.plot(N+i*o+1,te+a*o+1,W.ink),n.plot(N+i*o,te+a*o,e)}if(a&&a.charge>=0){let e=Ke[a.weapon],t=Math.min(1,a.charge/(e.charge||1));for(let e=0;e<32*t;e++){let t=-Math.PI/2+e/32*Math.PI*2;n.plot(N+Math.round(Math.cos(t)*10),te+Math.round(Math.sin(t)*10),W.accent)}}}vignette(e){let t=this.hud,n=Math.round(10+26*e),r=u(`#c81e1e`);for(let i=0;i<this.vh;i++)for(let a=0;a<this.vw;a++){let o=Math.min(a,i,this.vw-1-a,this.vh-1-i);if(o>=n){a=Math.max(a,this.vw-n-1);continue}let s=(1-o/n)*e;Sl[(i&3)*4+(a&3)]<s*16&&t.blend(a,i,r,.55)}}drawPrompt(e,t,n,r){let i=this.hud,a=i.textWidth(e.title,2,!0),o=i.textWidth(e.sub),s=Math.max(a,o)+16,c=Math.floor(n/2-s/2),l=!(Math.floor(t*2.5)&1);this.panel(c,r,s,38,l),i.text(e.title,Math.floor(n/2-a/2),r+5,l?W.gold:W.hud,2,W.ink,!0),i.text(e.sub,Math.floor(n/2-o/2),r+22,W.hud,1,W.ink);let u=Math.floor(n/2-8);for(let t=0;t<3;t++)i.rect(u+t*6,r+31,4,4,W.ink),i.rect(u+t*6+1,r+32,2,2,t<e.step?W.hp:t===e.step?W.gold:W.dim)}drawCombo(e,t,n,r=0){let i=this.hud;if(e.comboT>0&&e.chain>0){let a=br(e.chain),o=(t?t.comboPulse:0)>.5?3:2,s=`X${a%1==0?a.toFixed(0):a.toFixed(2).replace(/0$/,``)}`,c=`+${e.comboPts.toLocaleString(`en-US`)}`,l=Math.max(i.textWidth(s,o,!0),i.textWidth(c,1,!0))+16,d=Math.floor(n/2-l/2),f=Math.max(d,r),p=n/2+(f-d);this.panel(f,8,l,30+(o-2)*7);let m=a>=3?u(`#ff8a2a`):a>=2?W.gold:W.hud;i.text(s,Math.floor(p-i.textWidth(s,o,!0)/2),12,m,o,W.ink,!0),i.text(c,Math.floor(p-i.textWidth(c,1,!0)/2),28+(o-2)*7,W.hud,1,W.ink,!0);let h=e.comboT/Tl;this.bar(f+3,38+(o-2)*7-4,l-6,3,h,h<.3?W.hpLow:W.gold)}if(t&&t.bank){let e=t.bank,r=`+${e.points.toLocaleString(`en-US`)}`,a=1-e.t/1.2,o=Math.round(44-e.t*22);a>.05&&i.text(r,Math.floor(n/2-i.textWidth(r,2,!0)/2),o,W.gold,2,W.ink,!0)}}bannerBands(e,t){return e.banners.map((e,n)=>({y:Math.floor(t*.24)+n*30-1,h:(e.sub?32:21)+2}))}drawBanners(e,t,n){let r=this.hud;e.banners.forEach((e,i)=>{let a=e.t<.08?3:2,o=Math.floor(n*.24)+i*30;e.t>e.life-.25&&!(Math.floor(e.t*20)&1)||(r.text(e.text,Math.floor(t/2-r.textWidth(e.text,a,!0)/2),o,e.color,a,W.ink,!0),e.sub&&r.text(e.sub,Math.floor(t/2-r.textWidth(e.sub,1,!0)/2),o+7*a+4,W.hud,1,W.ink,!0))})}drawFloatTexts(e){let t=e.juice;if(!t)return;let n=this.overlay;for(let e of t.texts){let t=e.big&&e.t<.08?2:1,r=e.big,i=n.textWidth(e.text,t,r),a=this.px(e.x)-Math.floor(i/2),o=this.py(e.y);e.t>e.life-.2&&!(Math.floor(e.t*24)&1)||n.text(e.text,a,o,e.color,t,xr,r)}}hudDisc(e,t,n,r,i,a=W.ink){let o=this.hud,s=Math.ceil(n)+1;for(let c=-s;c<=s;c++)for(let l=-s;l<=s;l++){let s=Math.hypot(l,c);s<=n-1?o.blend(e+l,t+c,r,i):s<=n+.5&&o.plot(e+l,t+c,a)}}grenadePips(e,t,n){let r=this.hud,i=e-7;for(let e=0;e<3;e++){let a=i+e*5;if(r.rect(a,t,4,5,W.ink),e<n.grenades)r.rect(a+1,t+1,2,3,W.gold);else if(e===n.grenades){let e=Math.floor(n.grenadeT/5*3);e>0&&r.rect(a+1,t+4-e,2,e,W.dim)}}}drawTouch(e,t,n){let r=this.hud,i=e.move,a=e.moveHome,o=i.id===-1?a.x:i.ox,s=i.id===-1?a.y:i.oy;this.hudDisc(Math.round(o),Math.round(s),20,W.panel,i.id===-1?.25:.45,i.id===-1?W.bevelHi:W.ink);let c=e.stick(i);this.hudDisc(Math.round(o+c.nx*20),Math.round(s+c.ny*20),8,W.white,i.id===-1?.3:.7);let l=e.aim;if(l.id!==-1){if(l.moved){this.hudDisc(Math.round(l.ox),Math.round(l.oy),20,W.panel,.4);let e=l.x-l.ox,t=l.y-l.oy,n=Math.min(1,20/(Math.hypot(e,t)||1));this.hudDisc(Math.round(l.ox+e*n),Math.round(l.oy+t*n),8,u(`#ff8a2a`),.75)}else{let e=Math.round(l.x),t=Math.round(l.y);for(let n=6;n<=7;n++)for(let i=0;i<24;i++){let a=i/24*Math.PI*2;r.plot(e+Math.round(Math.cos(a)*n),t+Math.round(Math.sin(a)*n),n===6?W.white:W.ink)}}t>=0&&this.hudDisc(Math.round(l.x),Math.round(l.y),4+Math.min(1,t/(n&&Ke[n.weapon].charge||.55))*6,W.accent,.5)}let d=e.jump;this.hudDisc(d.cx,d.cy,d.r,d.id===-1?W.panel:W.accent,d.id===-1?.5:.7),r.text(`JUMP`,d.cx-Math.floor(r.textWidth(`JUMP`)/2),d.cy-2,W.white,1,W.ink);let f=e.bomb;this.hudDisc(f.cx,f.cy,f.r,f.id===-1?W.panel:u(`#ff8a2a`),f.id===-1?.5:.7);let p=ci[`grenade-small`];p&&mi(r,p,f.cx-Math.floor(p.w/2),f.cy-Math.floor(p.h/2)-(n?2:0)),n&&this.grenadePips(f.cx,f.cy+4,n)}drawRotate(e,t){let n=this.hud;n.rectBlend(0,0,e,t,u(`#0d0b14`),.92);let r=Math.floor(e/2),i=Math.floor(t/2)-30,a=(e,t,r,i,a)=>{n.rect(e,t,r,i,W.ink),n.rect(e+1,t+1,r-2,i-2,a),n.rect(e+3,t+3,r-6,i-6,u(`#1a1422`))};a(r-46,i-22,22,40,W.dim);for(let e=0;e<14;e++)n.plot(r-14+e,i-2,W.gold);for(let e=0;e<4;e++)n.plot(r-1-e,i-2-e,W.gold),n.plot(r-1-e,i-2+e,W.gold);a(r+8,i-13,40,22,W.accent);let o=`ROTATE TO LANDSCAPE`,s=n.textWidth(o,2,!0)<=e-8?2:1;n.text(o,r-Math.floor(n.textWidth(o,s,!0)/2),i+34,W.hud,s,W.ink,!0);let c=`RUBBLESTORM PLAYS SIDEWAYS`;n.text(c,r-Math.floor(n.textWidth(c)/2),i+56,W.dim,1,W.ink)}drawTitle(e,t){let n=this.hud,r=this.vw,i=this.vh;n.rectBlend(0,0,r,i,W.panel,.3);let a=`RUBBLESTORM`,o=r>560?6:4,s=n.textWidth(a,o,!0),c=Math.floor(r/2-s/2),l=Math.floor(i*.22);n.text(a,c+o,l+o,W.ink,o,W.ink,!0),n.text(a,c,l,W.gold,o,W.ink,!0);for(let e=l;e<l+o*7;e++)for(let t=c;t<c+s;t++){if(n.get(t,e)!==W.gold)continue;let r=(e-l)/(o*7);n.plot(t,e,r<.3?u(`#fff3a6`):r<.62?W.gold:u(`#ff8a2a`))}let d=`EVERY PIXEL BREAKS`;n.text(d,Math.floor(r/2-n.textWidth(d,2,!0)/2),l+o*7+14,W.hud,2,W.ink,!0);let f=t.coarse?`TAP TO PLAY`:`CLICK TO PLAY`,p=n.textWidth(f,2,!0)+20,m=Math.floor(r/2-p/2),h=Math.floor(i*.6);this.panel(m,h,p,26,Math.floor(e.time*2)%2==0),n.text(f,m+10,h+6,W.accent,2,W.ink,!0),(t.coarse?[`LEFT THUMB  MOVE - PUSH UP TO JUMP, HOLD UP TO JET`,`RIGHT THUMB  TAP TO SHOOT THERE - DRAG TO AIM`,`TAP A WEAPON TO SWITCH     BOMB BUTTON  GRENADE`,`MENU BUTTON  NEW ARENA, DAILY ARENA, SETTINGS`]:[`A D  MOVE     SPACE  JUMP, TAP AGAIN TO FLIP, HOLD TO JET`,`LEFT CLICK  SHOOT     RIGHT CLICK  GRENADE     1-9  WEAPONS`,`R  NEW ARENA     T  DAILY ARENA     B  BOTS     N  BOT SKILL     K  SCREEN SHAKE`,`G  GAME MODE     L  ARENA LOOK     M  MUSIC     ESC  MENU`]).forEach((e,t)=>n.text(e,Math.floor(r/2-n.textWidth(e)/2),h+40+t*9,W.hud,1,W.ink));let g=`${e.arena.biome.name.toUpperCase()}  -  SEED ${e.arena.seed}`;n.text(g,Math.floor(r/2-n.textWidth(g)/2),i-12,W.dim,1,W.ink)}},kl=1e3,Al=1001,jl=1002,Ml=1003,Nl=1004,Pl=1005,Fl=1006,Il=1007,Ll=1008,Rl=1009,zl=1010,Bl=1011,Vl=1012,Hl=1013,Ul=1014,Wl=1015,Gl=1016,Kl=1017,ql=1018,Jl=1020,Yl=35902,Xl=35899,Zl=1021,Ql=1022,$l=1023,eu=1026,tu=1027,nu=1028,ru=1029,iu=1030,au=1031,ou=1033,su=33776,cu=33777,lu=33778,uu=33779,du=35840,fu=35841,pu=35842,mu=35843,hu=36196,gu=37492,_u=37496,vu=37488,yu=37489,bu=37490,xu=37491,Su=37808,Cu=37809,wu=37810,Tu=37811,Eu=37812,Du=37813,Ou=37814,ku=37815,Au=37816,ju=37817,Mu=37818,Nu=37819,Pu=37820,Fu=37821,Iu=36492,Lu=36494,Ru=36495,zu=36283,Bu=36284,Vu=36285,Hu=36286,Uu=2300,Wu=2301,Gu=2302,Ku=2303,qu=2400,Ju=2401,Yu=2402,Xu=3200,Zu=`srgb`,Qu=`srgb-linear`,$u=`linear`,ed=`srgb`,td=7680,nd=35044,rd=2e3;function id(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ad(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function od(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function sd(){let e=od(`canvas`);return e.style.display=`block`,e}var cd={};function ld(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ud(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function G(...e){e=ud(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function K(...e){e=ud(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function dd(...e){let t=e.join(` `);t in cd||(cd[t]=!0,G(...e))}function fd(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var pd={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},md=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},hd=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),gd=Math.PI/180,_d=180/Math.PI;function vd(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hd[e&255]+hd[e>>8&255]+hd[e>>16&255]+hd[e>>24&255]+`-`+hd[t&255]+hd[t>>8&255]+`-`+hd[t>>16&15|64]+hd[t>>24&255]+`-`+hd[n&63|128]+hd[n>>8&255]+`-`+hd[n>>16&255]+hd[n>>24&255]+hd[r&255]+hd[r>>8&255]+hd[r>>16&255]+hd[r>>24&255]).toLowerCase()}function yd(e,t,n){return Math.max(t,Math.min(n,e))}function bd(e,t){return(e%t+t)%t}function xd(e,t,n){return(1-n)*e+n*t}function Sd(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Cd(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wd(e,t){if(t.constructor===Float32Array)return e;let n=Cd(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Td(e,t){if(t.constructor===Float32Array)return e;let n=Cd(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Ed=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yd(this.x,e.x,t.x),this.y=yd(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yd(this.x,e,t),this.y=yd(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yd(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yd(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dd=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:G(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yd(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yd(this.x,e.x,t.x),this.y=yd(this.y,e.y,t.y),this.z=yd(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yd(this.x,e,t),this.y=yd(this.y,e,t),this.z=yd(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yd(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yd(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Od=new q,kd=new Dd,Ad=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return dd(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(jd.makeScale(e,t)),this}rotate(e){return dd(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(jd.makeRotation(-e)),this}translate(e,t){return dd(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jd=new Ad,Md=new Ad().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new Ad().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){let e={enabled:!0,workingColorSpace:Qu,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Id(e.r),e.g=Id(e.g),e.b=Id(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ld(e.r),e.g=Ld(e.g),e.b=Ld(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?$u:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Qu]:{primaries:t,whitePoint:r,transfer:$u,toXYZ:Md,fromXYZ:Nd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zu},outputColorSpaceConfig:{drawingBufferColorSpace:Zu}},[Zu]:{primaries:t,whitePoint:r,transfer:ed,toXYZ:Md,fromXYZ:Nd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zu}}}),e}var Fd=Pd();function Id(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ld(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Rd,zd=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rd===void 0&&(Rd=od(`canvas`)),Rd.width=e.width,Rd.height=e.height;let t=Rd.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Rd}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=od(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Id(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Id(t[e]/255)*255):t[e]=Id(t[e]);return{data:t,width:e.width,height:e.height}}return G(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Bd=0,Vd=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=vd(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Hd(r[t].image)):e.push(Hd(r[t]))}else e=Hd(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Hd(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?zd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(G(`Texture: Unable to serialize Texture.`),{})}var Ud=0,Wd=new q,Gd=class e extends md{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Al,i=Al,a=Fl,o=Ll,s=$l,c=Rl,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=vd(),this.name=``,this.source=new Vd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Ed(0,0),this.repeat=new Ed(1,1),this.center=new Ed(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ad,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){G(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x-=Math.floor(e.x);break;case Al:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y-=Math.floor(e.y);break;case Al:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gd.DEFAULT_IMAGE=null,Gd.DEFAULT_MAPPING=300,Gd.DEFAULT_ANISOTROPY=1;var Kd=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yd(this.x,e.x,t.x),this.y=yd(this.y,e.y,t.y),this.z=yd(this.z,e.z,t.z),this.w=yd(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yd(this.x,e,t),this.y=yd(this.y,e,t),this.z=yd(this.z,e,t),this.w=yd(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yd(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qd=class extends md{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fl,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kd(0,0,e,t),this.scissorTest=!1,this.viewport=new Kd(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Gd({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Fl,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Vd(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Jd=class extends qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yd=class extends Gd{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ml,this.minFilter=Ml,this.wrapR=Al,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xd=class extends Gd{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ml,this.minFilter=Ml,this.wrapR=Al,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Zd=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qd.setFromMatrixColumn(e,0).length(),i=1/Qd.setFromMatrixColumn(e,1).length(),a=1/Qd.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ef,e,tf)}lookAt(e,t,n){let r=this.elements;return af.subVectors(e,t),af.lengthSq()===0&&(af.z=1),af.normalize(),nf.crossVectors(n,af),nf.lengthSq()===0&&(Math.abs(n.z)===1?af.x+=1e-4:af.z+=1e-4,af.normalize(),nf.crossVectors(n,af)),nf.normalize(),rf.crossVectors(af,nf),r[0]=nf.x,r[4]=rf.x,r[8]=af.x,r[1]=nf.y,r[5]=rf.y,r[9]=af.y,r[2]=nf.z,r[6]=rf.z,r[10]=af.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Qd.set(r[0],r[1],r[2]).length(),o=Qd.set(r[4],r[5],r[6]).length(),s=Qd.set(r[8],r[9],r[10]).length();i<0&&(a=-a),$d.copy(this);let c=1/a,l=1/o,u=1/s;return $d.elements[0]*=c,$d.elements[1]*=c,$d.elements[2]*=c,$d.elements[4]*=l,$d.elements[5]*=l,$d.elements[6]*=l,$d.elements[8]*=u,$d.elements[9]*=u,$d.elements[10]*=u,t.setFromRotationMatrix($d),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=rd,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=rd,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qd=new q,$d=new Zd,ef=new q(0,0,0),tf=new q(1,1,1),nf=new q,rf=new q,af=new q,of=new Zd,sf=new Dd,cf=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(yd(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-yd(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(yd(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-yd(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(yd(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-yd(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:G(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cf.DEFAULT_ORDER=`XYZ`;var lf=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},uf=0,df=new q,ff=new Dd,pf=new Zd,mf=new q,hf=new q,gf=new q,_f=new Dd,vf=new q(1,0,0),yf=new q(0,1,0),bf=new q(0,0,1),xf={type:`added`},Sf={type:`removed`},Cf={type:`childadded`,child:null},wf={type:`childremoved`,child:null},Tf=class e extends md{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=vd(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new cf,r=new Dd,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zd},normalMatrix:{value:new Ad}}),this.matrix=new Zd,this.matrixWorld=new Zd,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ff.setFromAxisAngle(e,t),this.quaternion.multiply(ff),this}rotateOnWorldAxis(e,t){return ff.setFromAxisAngle(e,t),this.quaternion.premultiply(ff),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(bf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pf.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mf.copy(e):mf.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),hf.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pf.lookAt(hf,mf,this.up):pf.lookAt(mf,hf,this.up),this.quaternion.setFromRotationMatrix(pf),r&&(pf.extractRotation(r.matrixWorld),ff.setFromRotationMatrix(pf),this.quaternion.premultiply(ff.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(K(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xf),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null):K(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pf.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pf.multiply(e.parent.matrixWorld)),e.applyMatrix4(pf),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xf),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hf,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hf,_f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Tf.DEFAULT_UP=new q(0,1,0),Tf.DEFAULT_MATRIX_AUTO_UPDATE=!0,Tf.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ef=class extends Tf{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Df={type:`move`},Of=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ef,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ef,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ef,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Df)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ef;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Af={h:0,s:0,l:0},jf={h:0,s:0,l:0};function Mf(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Nf=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zu){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fd.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Fd.workingColorSpace){return this.r=e,this.g=t,this.b=n,Fd.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Fd.workingColorSpace){if(e=bd(e,1),t=yd(t,0,1),n=yd(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Mf(i,r,e+1/3),this.g=Mf(i,r,e),this.b=Mf(i,r,e-1/3)}return Fd.colorSpaceToWorking(this,r),this}setStyle(e,t=Zu){function n(t){t!==void 0&&parseFloat(t)<1&&G(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:G(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);G(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zu){let n=kf[e.toLowerCase()];return n===void 0?G(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Id(e.r),this.g=Id(e.g),this.b=Id(e.b),this}copyLinearToSRGB(e){return this.r=Ld(e.r),this.g=Ld(e.g),this.b=Ld(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zu){return Fd.workingToColorSpace(Pf.copy(this),e),Math.round(yd(Pf.r*255,0,255))*65536+Math.round(yd(Pf.g*255,0,255))*256+Math.round(yd(Pf.b*255,0,255))}getHexString(e=Zu){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Fd.workingColorSpace){Fd.workingToColorSpace(Pf.copy(this),t);let n=Pf.r,r=Pf.g,i=Pf.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Fd.workingColorSpace){return Fd.workingToColorSpace(Pf.copy(this),t),e.r=Pf.r,e.g=Pf.g,e.b=Pf.b,e}getStyle(e=Zu){Fd.workingToColorSpace(Pf.copy(this),e);let t=Pf.r,n=Pf.g,r=Pf.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Af),this.setHSL(Af.h+e,Af.s+t,Af.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Af),e.getHSL(jf);let n=xd(Af.h,jf.h,t),r=xd(Af.s,jf.s,t),i=xd(Af.l,jf.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pf=new Nf;Nf.NAMES=kf;var Ff=class extends Tf{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cf,this.environmentIntensity=1,this.environmentRotation=new cf,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},If=new q,Lf=new q,Rf=new q,zf=new q,Bf=new q,Vf=new q,Hf=new q,Uf=new q,Wf=new q,Gf=new q,Kf=new Kd,qf=new Kd,Jf=new Kd,Yf=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),If.subVectors(e,t),r.cross(If);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){If.subVectors(r,t),Lf.subVectors(n,t),Rf.subVectors(e,t);let a=If.dot(If),o=If.dot(Lf),s=If.dot(Rf),c=Lf.dot(Lf),l=Lf.dot(Rf),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zf)!==null&&zf.x>=0&&zf.y>=0&&zf.x+zf.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,zf)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,zf.x),s.addScaledVector(a,zf.y),s.addScaledVector(o,zf.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Kf.setScalar(0),qf.setScalar(0),Jf.setScalar(0),Kf.fromBufferAttribute(e,t),qf.fromBufferAttribute(e,n),Jf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kf,i.x),a.addScaledVector(qf,i.y),a.addScaledVector(Jf,i.z),a}static isFrontFacing(e,t,n,r){return If.subVectors(n,t),Lf.subVectors(e,t),If.cross(Lf).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return If.subVectors(this.c,this.b),Lf.subVectors(this.a,this.b),If.cross(Lf).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Bf.subVectors(r,n),Vf.subVectors(i,n),Uf.subVectors(e,n);let s=Bf.dot(Uf),c=Vf.dot(Uf);if(s<=0&&c<=0)return t.copy(n);Wf.subVectors(e,r);let l=Bf.dot(Wf),u=Vf.dot(Wf);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Bf,a);Gf.subVectors(e,i);let f=Bf.dot(Gf),p=Vf.dot(Gf);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Vf,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Hf.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Hf,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Bf,a).addScaledVector(Vf,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xf=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qf.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qf.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Qf):Qf.fromBufferAttribute(r,t),Qf.applyMatrix4(e.matrixWorld),this.expandByPoint(Qf);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),$f.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),$f.copy(e.boundingBox)),$f.applyMatrix4(e.matrixWorld),this.union($f)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qf),Qf.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(op),sp.subVectors(this.max,op),ep.subVectors(e.a,op),tp.subVectors(e.b,op),np.subVectors(e.c,op),rp.subVectors(tp,ep),ip.subVectors(np,tp),ap.subVectors(ep,np);let t=[0,-rp.z,rp.y,0,-ip.z,ip.y,0,-ap.z,ap.y,rp.z,0,-rp.x,ip.z,0,-ip.x,ap.z,0,-ap.x,-rp.y,rp.x,0,-ip.y,ip.x,0,-ap.y,ap.x,0];return!up(t,ep,tp,np,sp)||(t=[1,0,0,0,1,0,0,0,1],!up(t,ep,tp,np,sp))?!1:(cp.crossVectors(rp,ip),t=[cp.x,cp.y,cp.z],up(t,ep,tp,np,sp))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qf).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qf).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Zf[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zf[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zf[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zf[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zf[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zf[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zf[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zf[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zf)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zf=[new q,new q,new q,new q,new q,new q,new q,new q],Qf=new q,$f=new Xf,ep=new q,tp=new q,np=new q,rp=new q,ip=new q,ap=new q,op=new q,sp=new q,cp=new q,lp=new q;function up(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){lp.fromArray(e,a);let o=i.x*Math.abs(lp.x)+i.y*Math.abs(lp.y)+i.z*Math.abs(lp.z),s=t.dot(lp),c=n.dot(lp),l=r.dot(lp);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dp=new q,fp=new Ed,pp=0,mp=class extends md{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=nd,this.updateRanges=[],this.gpuType=Wl,this.version=0,this._normalizationScale=e===void 0?void 0:Cd(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fp.fromBufferAttribute(this,t),fp.applyMatrix3(e),this.setXY(t,fp.x,fp.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dp.fromBufferAttribute(this,t),dp.applyMatrix3(e),this.setXYZ(t,dp.x,dp.y,dp.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dp.fromBufferAttribute(this,t),dp.applyMatrix4(e),this.setXYZ(t,dp.x,dp.y,dp.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dp.fromBufferAttribute(this,t),dp.applyNormalMatrix(e),this.setXYZ(t,dp.x,dp.y,dp.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dp.fromBufferAttribute(this,t),dp.transformDirection(e),this.setXYZ(t,dp.x,dp.y,dp.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?wd(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Td(e,this.array):Math.round(e*t)}},hp=class extends mp{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gp=class extends mp{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_p=class extends mp{constructor(e,t,n){super(new Float32Array(e),t,n)}},vp=new Xf,yp=new q,bp=new q,xp=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vp.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yp.subVectors(e,this.center);let t=yp.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(yp,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yp.copy(e.center).add(bp)),this.expandByPoint(yp.copy(e.center).sub(bp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sp=0,Cp=new Zd,wp=new Tf,Tp=new q,Ep=new Xf,Dp=new Xf,Op=new q,kp=class e extends md{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=vd(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(id(e)?gp:hp)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ad().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cp.makeRotationFromQuaternion(e),this.applyMatrix4(Cp),this}rotateX(e){return Cp.makeRotationX(e),this.applyMatrix4(Cp),this}rotateY(e){return Cp.makeRotationY(e),this.applyMatrix4(Cp),this}rotateZ(e){return Cp.makeRotationZ(e),this.applyMatrix4(Cp),this}translate(e,t,n){return Cp.makeTranslation(e,t,n),this.applyMatrix4(Cp),this}scale(e,t,n){return Cp.makeScale(e,t,n),this.applyMatrix4(Cp),this}lookAt(e){return wp.lookAt(e),wp.updateMatrix(),this.applyMatrix4(wp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tp).negate(),this.translate(Tp.x,Tp.y,Tp.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new _p(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&G(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xf);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ep.setFromBufferAttribute(n),this.morphTargetsRelative?(Op.addVectors(this.boundingBox.min,Ep.min),this.boundingBox.expandByPoint(Op),Op.addVectors(this.boundingBox.max,Ep.max),this.boundingBox.expandByPoint(Op)):(this.boundingBox.expandByPoint(Ep.min),this.boundingBox.expandByPoint(Ep.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&K(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xp);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(Ep.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dp.setFromBufferAttribute(n),this.morphTargetsRelative?(Op.addVectors(Ep.min,Dp.min),Ep.expandByPoint(Op),Op.addVectors(Ep.max,Dp.max),Ep.expandByPoint(Op)):(Ep.expandByPoint(Dp.min),Ep.expandByPoint(Dp.max))}Ep.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Op.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Op));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Op.fromBufferAttribute(a,t),o&&(Tp.fromBufferAttribute(e,t),Op.add(Tp)),r=Math.max(r,n.distanceToSquared(Op))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&K(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){K(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new mp(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let l=new q,u=new q,d=new q,f=new Ed,p=new Ed,m=new Ed,h=new q,g=new q;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new q,b=new q,x=new q,S=new q;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new mp(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Op.fromBufferAttribute(e,t),Op.normalize(),e.setXYZ(t,Op.x,Op.y,Op.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new mp(a,r,i)}if(this.index===null)return G(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ap=new q,jp=new q,Mp=new Ad,Np=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ap.subVectors(n,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ap),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mp.getNormalMatrix(e),r=this.coplanarPoint(Ap).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pp=0,Fp=class extends md{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=vd(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nf(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=td,this.stencilZFail=td,this.stencilZPass=td,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){G(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nf().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Np().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Ed().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ed().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ip=new q,Lp=new q,Rp=new q,zp=new q,Bp=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ip)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ip.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ip.copy(this.origin).addScaledVector(this.direction,t),Ip.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lp.copy(e).add(t).multiplyScalar(.5),Rp.copy(t).sub(e).normalize(),zp.copy(this.origin).sub(Lp);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Rp),o=zp.dot(this.direction),s=-zp.dot(Rp),c=zp.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Lp).addScaledVector(Rp,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ip.subVectors(e.center,this.origin);let n=Ip.dot(this.direction),r=Ip.dot(Ip)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ip)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,te=C/w,P=1/w,ne=T-N*D,re=E-te*D,ie=O-N*A,ae=k-te*A,oe=j-N*M,se=ee-te*M,ce=oe*ae-se*ie,le=ne*se-re*oe,ue=ie*re-ae*ne;if(r){if(ce<0||le<0||ue<0)return null}else if((ce<0||le<0||ue<0)&&(ce>0||le>0||ue>0))return null;let de=ce+le+ue;if(de===0)return null;let fe=P*(ce*D+le*A+ue*M);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vp=class extends Fp{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Nf(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cf,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hp=new Zd,Up=new Bp,Wp=new xp,Gp=new q,Kp=new q,qp=new q,Jp=new q,Yp=new q,Xp=new q,Zp=new q,Qp=new q,$p=class extends Tf{constructor(e=new kp,t=new Vp){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Xp.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Yp.fromBufferAttribute(s,e),a?Xp.addScaledVector(Yp,r):Xp.addScaledVector(Yp.sub(t),r))}t.add(Xp)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wp.copy(n.boundingSphere),Wp.applyMatrix4(i),Up.copy(e.ray).recast(e.near),Wp.containsPoint(Up.origin)===!1&&(Up.intersectSphere(Wp,Gp)===null||Up.origin.distanceToSquared(Gp)>(e.far-e.near)**2)||(Hp.copy(i).invert(),Up.copy(e.ray).applyMatrix4(Hp),(n.boundingBox===null||Up.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Up)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=tm(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=tm(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=tm(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=tm(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function em(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Qp.copy(s),Qp.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Qp);return l<n.near||l>n.far?null:{distance:l,point:Qp.clone(),object:e}}function tm(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Kp),e.getVertexPosition(c,qp),e.getVertexPosition(l,Jp);let u=em(e,t,n,r,Kp,qp,Jp,Zp);if(u){let e=new q;Yf.getBarycoord(Zp,Kp,qp,Jp,e),i&&(u.uv=Yf.getInterpolatedAttribute(i,s,c,l,e,new Ed)),a&&(u.uv1=Yf.getInterpolatedAttribute(a,s,c,l,e,new Ed)),o&&(u.normal=Yf.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Yf.getNormal(Kp,qp,Jp,t.normal),u.face=t,u.barycoord=e}return u}var nm=class extends Gd{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Ml,l=Ml,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rm=new xp,im=new Ed(.5,.5),am=new q,om=class{constructor(e=new Np,t=new Np,n=new Np,r=new Np,i=new Np,a=new Np){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rd,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rm.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rm.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rm)}intersectsSprite(e){return rm.center.set(0,0,0),rm.radius=.7071067811865476+im.distanceTo(e.center),rm.applyMatrix4(e.matrixWorld),this.intersectsSphere(rm)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(am.x=r.normal.x>0?e.max.x:e.min.x,am.y=r.normal.y>0?e.max.y:e.min.y,am.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(am)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sm=new Zd,cm=class e{constructor(){this.coordinateSystem=rd,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];sm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new om),n[e].setFromProjectionMatrix(sm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new om),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},lm=class extends Gd{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},um=class extends Gd{constructor(e,t,n=Ul,r,i,a,o=Ml,s=Ml,c,l=eu,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},dm=class extends um{constructor(e,t=Ul,n=301,r,i,a=Ml,o=Ml,s,c=eu){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fm=class extends Gd{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pm=class e extends kp{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new _p(c,3)),this.setAttribute(`normal`,new _p(l,3)),this.setAttribute(`uv`,new _p(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},mm=class e extends kp{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new _p(p,3)),this.setAttribute(`normal`,new _p(m,3)),this.setAttribute(`uv`,new _p(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function hm(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(_m(i))i.isRenderTargetTexture?(G(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(_m(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function gm(e){let t={};for(let n=0;n<e.length;n++){let r=hm(e[n]);for(let e in r)t[e]=r[e]}return t}function _m(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function vm(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ym(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fd.workingColorSpace}var bm={clone:hm,merge:gm},xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cm=class extends Fp{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hm(e.uniforms),this.uniformsGroups=vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Nf().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Ed().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Kd().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Ad().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Zd().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wm=class extends Cm{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Tm=class extends Fp{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Em=class extends Fp{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dm(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Om(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var km=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Am=class extends km{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qu,endingEnd:qu}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ju:i=e,o=2*t-n;break;case Yu:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ju:a=e,s=2*n-t;break;case Yu:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},jm=class extends km{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Mm=class extends km{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Nm=class extends km{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Im(n,t,g,y,r);i[p]=Pm(x,o,_,b,m)}return i}};function Pm(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Fm(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Im(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Pm(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Fm(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Lm=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Dm(t,this.TimeBufferType),this.values=Dm(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dm(e.times,Array),values:Dm(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Om(e.settings)&&(n.settings={inTangents:Dm(e.settings.inTangents,Array),outTangents:Dm(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Am(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Uu:t=this.InterpolantFactoryMethodDiscrete;break;case Wu:t=this.InterpolantFactoryMethodLinear;break;case Gu:t=this.InterpolantFactoryMethodSmooth;break;case Ku:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return G(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uu;case this.InterpolantFactoryMethodLinear:return Wu;case this.InterpolantFactoryMethodSmooth:return Gu;case this.InterpolantFactoryMethodBezier:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Om(this.settings)&&(Rm(this.settings.inTangents,e),Rm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Om(this.settings)&&(zm(this.settings.inTangents,e),zm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(K(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(K(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){K(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){K(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ad(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){K(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Gu,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Om(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Rm(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function zm(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Lm.prototype.ValueTypeName=``,Lm.prototype.TimeBufferType=Float32Array,Lm.prototype.ValueBufferType=Float32Array,Lm.prototype.DefaultInterpolation=Wu;var Bm=class extends Lm{constructor(e,t,n){super(e,t,n)}};Bm.prototype.ValueTypeName=`bool`,Bm.prototype.ValueBufferType=Array,Bm.prototype.DefaultInterpolation=Uu,Bm.prototype.InterpolantFactoryMethodLinear=void 0,Bm.prototype.InterpolantFactoryMethodSmooth=void 0;var Vm=class extends Lm{constructor(e,t,n,r){super(e,t,n,r)}};Vm.prototype.ValueTypeName=`color`;var Hm=class extends Lm{constructor(e,t,n,r){super(e,t,n,r)}};Hm.prototype.ValueTypeName=`number`;var Um=class extends km{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dd.slerpFlat(i,0,a,c-o,a,c,s);return i}},Wm=class extends Lm{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Um(this.times,this.values,this.getValueSize(),e)}};Wm.prototype.ValueTypeName=`quaternion`,Wm.prototype.InterpolantFactoryMethodSmooth=void 0;var Gm=class extends Lm{constructor(e,t,n){super(e,t,n)}};Gm.prototype.ValueTypeName=`string`,Gm.prototype.ValueBufferType=Array,Gm.prototype.DefaultInterpolation=Uu,Gm.prototype.InterpolantFactoryMethodLinear=void 0,Gm.prototype.InterpolantFactoryMethodSmooth=void 0;var Km=class extends Lm{constructor(e,t,n,r){super(e,t,n,r)}};Km.prototype.ValueTypeName=`vector`;var qm=new q,Jm=new Dd,Ym=new q,Xm=class extends Tf{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Zd,this.projectionMatrix=new Zd,this.projectionMatrixInverse=new Zd,this.coordinateSystem=rd,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qm,Jm,Ym),Ym.x===1&&Ym.y===1&&Ym.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qm,Jm,Ym.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qm,Jm,Ym),Ym.x===1&&Ym.y===1&&Ym.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qm,Jm,Ym.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zm=new q,Qm=new Ed,$m=new Ed,eh=class extends Xm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zm.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zm.x,Zm.y).multiplyScalar(-e/Zm.z),Zm.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zm.x,Zm.y).multiplyScalar(-e/Zm.z)}getViewSize(e,t){return this.getViewBounds(e,Qm,$m),t.subVectors($m,Qm)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gd*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},th=class extends Xm{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nh=-90,rh=1,ih=class extends Tf{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new eh(nh,rh,e,t);r.layers=this.layers,this.add(r);let i=new eh(nh,rh,e,t);i.layers=this.layers,this.add(i);let a=new eh(nh,rh,e,t);a.layers=this.layers,this.add(a);let o=new eh(nh,rh,e,t);o.layers=this.layers,this.add(o);let s=new eh(nh,rh,e,t);s.layers=this.layers,this.add(s);let c=new eh(nh,rh,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ah=class extends eh{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},oh=`\\[\\]\\.:\\/`,sh=RegExp(`[\\[\\]\\.:\\/]`,`g`),ch=`[^\\[\\]\\.:\\/]`,lh=`[^`+oh.replace(`\\.`,``)+`]`,uh=`((?:WC+[\\/:])*)`.replace(`WC`,ch),dh=`(WCOD+)?`.replace(`WCOD`,lh),fh=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ch),ph=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ch),mh=RegExp(`^`+uh+dh+fh+ph+`$`),hh=[`material`,`materials`,`bones`,`map`],gh=class{constructor(e,t,n){let r=n||_h.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_h=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(sh,``)}static parseTrackName(e){let t=mh.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);hh.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){G(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){K(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){K(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){K(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){K(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){K(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;K(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_h.Composite=gh,_h.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_h.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_h.prototype.GetterByBindingType=[_h.prototype._getValue_direct,_h.prototype._getValue_array,_h.prototype._getValue_arrayElement,_h.prototype._getValue_toArray],_h.prototype.SetterByBindingTypeAndVersioning=[[_h.prototype._setValue_direct,_h.prototype._setValue_direct_setNeedsUpdate,_h.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_h.prototype._setValue_array,_h.prototype._setValue_array_setNeedsUpdate,_h.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_h.prototype._setValue_arrayElement,_h.prototype._setValue_arrayElement_setNeedsUpdate,_h.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_h.prototype._setValue_fromArray,_h.prototype._setValue_fromArray_setNeedsUpdate,_h.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function vh(e,t,n,r){let i=yh(r);switch(n){case Zl:return e*t;case nu:return e*t/i.components*i.byteLength;case ru:return e*t/i.components*i.byteLength;case iu:return e*t*2/i.components*i.byteLength;case au:return e*t*2/i.components*i.byteLength;case Ql:return e*t*3/i.components*i.byteLength;case $l:return e*t*4/i.components*i.byteLength;case ou:return e*t*4/i.components*i.byteLength;case su:case cu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case lu:case uu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fu:case mu:return Math.max(e,16)*Math.max(t,8)/4;case du:case pu:return Math.max(e,8)*Math.max(t,8)/2;case hu:case gu:case vu:case yu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _u:case bu:case xu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cu:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case wu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Tu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Du:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ou:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ku:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Au:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ju:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Mu:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Nu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Fu:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Iu:case Lu:case Ru:return Math.ceil(e/4)*Math.ceil(t/4)*16;case zu:case Bu:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Vu:case Hu:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function yh(e){switch(e){case Rl:case zl:return{byteLength:1,components:1};case Vl:case Bl:case Gl:return{byteLength:2,components:1};case Kl:case ql:return{byteLength:2,components:4};case Ul:case Hl:case Wl:return{byteLength:4,components:1};case Yl:case Xl:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?G(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function bh(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function xh(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Sh={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new Nf(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ad},alphaMap:{value:null},alphaMapTransform:{value:new Ad},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ad}},envmap:{envMap:{value:null},envMapRotation:{value:new Ad},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ad}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ad}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ad},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ad},normalScale:{value:new Ed(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ad},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ad}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ad}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ad}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nf(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nf(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ad},alphaTest:{value:0},uvTransform:{value:new Ad}},sprite:{diffuse:{value:new Nf(16777215)},opacity:{value:1},center:{value:new Ed(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ad},alphaMap:{value:null},alphaMapTransform:{value:new Ad},alphaTest:{value:0}}},Ch={basic:{uniforms:gm([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Sh.meshbasic_vert,fragmentShader:Sh.meshbasic_frag},lambert:{uniforms:gm([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Nf(0)},envMapIntensity:{value:1}}]),vertexShader:Sh.meshlambert_vert,fragmentShader:Sh.meshlambert_frag},phong:{uniforms:gm([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Nf(0)},specular:{value:new Nf(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Sh.meshphong_vert,fragmentShader:Sh.meshphong_frag},standard:{uniforms:gm([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new Nf(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Sh.meshphysical_vert,fragmentShader:Sh.meshphysical_frag},toon:{uniforms:gm([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new Nf(0)}}]),vertexShader:Sh.meshtoon_vert,fragmentShader:Sh.meshtoon_frag},matcap:{uniforms:gm([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Sh.meshmatcap_vert,fragmentShader:Sh.meshmatcap_frag},points:{uniforms:gm([J.points,J.fog]),vertexShader:Sh.points_vert,fragmentShader:Sh.points_frag},dashed:{uniforms:gm([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Sh.linedashed_vert,fragmentShader:Sh.linedashed_frag},depth:{uniforms:gm([J.common,J.displacementmap]),vertexShader:Sh.depth_vert,fragmentShader:Sh.depth_frag},normal:{uniforms:gm([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Sh.meshnormal_vert,fragmentShader:Sh.meshnormal_frag},sprite:{uniforms:gm([J.sprite,J.fog]),vertexShader:Sh.sprite_vert,fragmentShader:Sh.sprite_frag},background:{uniforms:{uvTransform:{value:new Ad},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Sh.background_vert,fragmentShader:Sh.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ad}},vertexShader:Sh.backgroundCube_vert,fragmentShader:Sh.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Sh.cube_vert,fragmentShader:Sh.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Sh.equirect_vert,fragmentShader:Sh.equirect_frag},distance:{uniforms:gm([J.common,J.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Sh.distance_vert,fragmentShader:Sh.distance_frag},shadow:{uniforms:gm([J.lights,J.fog,{color:{value:new Nf(0)},opacity:{value:1}}]),vertexShader:Sh.shadow_vert,fragmentShader:Sh.shadow_frag}};Ch.physical={uniforms:gm([Ch.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ad},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ad},clearcoatNormalScale:{value:new Ed(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ad},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ad},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ad},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ad},sheen:{value:0},sheenColor:{value:new Nf(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ad},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ad},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ad},transmissionSamplerSize:{value:new Ed},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ad},attenuationDistance:{value:0},attenuationColor:{value:new Nf(0)},specularColor:{value:new Nf(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ad},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ad},anisotropyVector:{value:new Ed},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ad}}]),vertexShader:Sh.meshphysical_vert,fragmentShader:Sh.meshphysical_frag};var wh={r:0,b:0,g:0},Th=new Zd,Eh=new Ad;Eh.set(-1,0,0,0,1,0,0,0,1);function Dh(e,t,n,r,i,a){let o=new Nf(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new $p(new pm(1,1,1),new Cm({name:`BackgroundCubeMaterial`,uniforms:hm(Ch.backgroundCube.uniforms),vertexShader:Ch.backgroundCube.vertexShader,fragmentShader:Ch.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Th.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Eh),l.material.toneMapped=Fd.getTransfer(i.colorSpace)!==ed,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new $p(new mm(2,2),new Cm({name:`BackgroundMaterial`,uniforms:hm(Ch.background.uniforms),vertexShader:Ch.background.vertexShader,fragmentShader:Ch.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Fd.getTransfer(i.colorSpace)!==ed,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(wh,ym(e)),n.buffers.color.setClear(wh.r,wh.g,wh.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Oh(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function kh(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ah(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(G(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&G(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&G(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function jh(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Np,s=new Ad,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Mh=class extends Jd{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new lm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pm(5,5,5),i=new Cm({name:`CubemapFromEquirect`,uniforms:hm(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new $p(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Fl),new ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Nh=256,Ph=3,Fh=20,Ih=256,Lh=16,Rh=3,zh=new q,Bh=new Nf,Vh=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ih(1,10,null),this._boxMesh=new $p(new pm(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=zh}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Bh));let h=new ih(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nh,Sd(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Nh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Hh(e,!1,!1),n=Math.log2(e)-Ph;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Wh(),this._integrationMaterial=Gh());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Lh);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Rh)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Ih*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Kh());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Hh(e,t,n){return new Mh(e,{minFilter:Ll,generateMipmaps:t,type:Gl,colorSpace:Qu,depthBuffer:n})}function Uh(e,t,n){return new Cm({name:e,uniforms:t,vertexShader:Sh.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Wh(){return Uh(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ih}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Gh(){return Uh(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Kh(){return Uh(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Fh}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function qh(){return Uh(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Jh(){return Uh(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Yh(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Mh(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Vh(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Vh(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Xh(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&dd(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Zh(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?gp:hp)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Qh(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function $h(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:K(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function eg(e,t,n){let r=new WeakMap,i=new Kd;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Yd(h,p,m,u);g.type=Wl,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Ed(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function tg(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ng={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function rg(e,t,n,r,i,a){let o=new Jd(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new kp;u.setAttribute(`position`,new _p([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new _p([0,2,0,0,2,0],2));let d=new wm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new $p(u,d),p=new th(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Jd(t,n,{type:Gl,depthBuffer:!1,stencilBuffer:!1}),c=new Jd(t,n,{type:Gl,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new um(t,n),a===!0&&(l.format=tu,l.type=Jl)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Fd.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=ng[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var ig=new Gd,ag=new um(1,1),og=new dm(1),sg=new Yd,cg=new Xd,lg=new lm,ug=[],dg=[],fg=new Float32Array(16),pg=new Float32Array(9),mg=new Float32Array(4);function hg(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ug[i];if(a===void 0&&(a=new Float32Array(i),ug[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function gg(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function _g(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function vg(e,t){let n=dg[t];n===void 0&&(n=new Int32Array(t),dg[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function yg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function bg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gg(n,t))return;e.uniform2fv(this.addr,t),_g(n,t)}}function xg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gg(n,t))return;e.uniform3fv(this.addr,t),_g(n,t)}}function Sg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gg(n,t))return;e.uniform4fv(this.addr,t),_g(n,t)}}function Cg(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gg(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),_g(n,t)}else{if(gg(n,r))return;mg.set(r),e.uniformMatrix2fv(this.addr,!1,mg),_g(n,r)}}function wg(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gg(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),_g(n,t)}else{if(gg(n,r))return;pg.set(r),e.uniformMatrix3fv(this.addr,!1,pg),_g(n,r)}}function Tg(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gg(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),_g(n,t)}else{if(gg(n,r))return;fg.set(r),e.uniformMatrix4fv(this.addr,!1,fg),_g(n,r)}}function Eg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Dg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gg(n,t))return;e.uniform2iv(this.addr,t),_g(n,t)}}function Og(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gg(n,t))return;e.uniform3iv(this.addr,t),_g(n,t)}}function kg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gg(n,t))return;e.uniform4iv(this.addr,t),_g(n,t)}}function Ag(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function jg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gg(n,t))return;e.uniform2uiv(this.addr,t),_g(n,t)}}function Mg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gg(n,t))return;e.uniform3uiv(this.addr,t),_g(n,t)}}function Ng(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gg(n,t))return;e.uniform4uiv(this.addr,t),_g(n,t)}}function Pg(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Fg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Pg(ag):ig,n.setTexture2D(t||a,i)}function Ig(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||cg,i)}function Lg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Pg(og):lg,n.setTextureCube(t||a,i)}function Rg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||sg,i)}function zg(e){switch(e){case 5126:return yg;case 35664:return bg;case 35665:return xg;case 35666:return Sg;case 35674:return Cg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Eg;case 35667:case 35671:return Dg;case 35668:case 35672:return Og;case 35669:case 35673:return kg;case 5125:return Ag;case 36294:return jg;case 36295:return Mg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Rg}}function Bg(e,t){e.uniform1fv(this.addr,t)}function Vg(e,t){let n=hg(t,this.size,2);e.uniform2fv(this.addr,n)}function Hg(e,t){let n=hg(t,this.size,3);e.uniform3fv(this.addr,n)}function Ug(e,t){let n=hg(t,this.size,4);e.uniform4fv(this.addr,n)}function Wg(e,t){let n=hg(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Gg(e,t){let n=hg(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Kg(e,t){let n=hg(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function qg(e,t){e.uniform1iv(this.addr,t)}function Jg(e,t){e.uniform2iv(this.addr,t)}function Yg(e,t){e.uniform3iv(this.addr,t)}function Xg(e,t){e.uniform4iv(this.addr,t)}function Zg(e,t){e.uniform1uiv(this.addr,t)}function Qg(e,t){e.uniform2uiv(this.addr,t)}function $g(e,t){e.uniform3uiv(this.addr,t)}function e_(e,t){e.uniform4uiv(this.addr,t)}function t_(e,t,n){let r=this.cache,i=t.length,a=vg(n,i);gg(r,a)||(e.uniform1iv(this.addr,a),_g(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Pg(ag):ig;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function n_(e,t,n){let r=this.cache,i=t.length,a=vg(n,i);gg(r,a)||(e.uniform1iv(this.addr,a),_g(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||cg,a[e])}function r_(e,t,n){let r=this.cache,i=t.length,a=vg(n,i);gg(r,a)||(e.uniform1iv(this.addr,a),_g(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Pg(og):lg;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function i_(e,t,n){let r=this.cache,i=t.length,a=vg(n,i);gg(r,a)||(e.uniform1iv(this.addr,a),_g(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||sg,a[e])}function a_(e){switch(e){case 5126:return Bg;case 35664:return Vg;case 35665:return Hg;case 35666:return Ug;case 35674:return Wg;case 35675:return Gg;case 35676:return Kg;case 5124:case 35670:return qg;case 35667:case 35671:return Jg;case 35668:case 35672:return Yg;case 35669:case 35673:return Xg;case 5125:return Zg;case 36294:return Qg;case 36295:return $g;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return i_}}var o_=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}},s_=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}},c_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},l_=/(\w+)(\])?(\[|\.)?/g;function u_(e,t){e.seq.push(t),e.map[t.id]=t}function d_(e,t,n){let r=e.name,i=r.length;for(l_.lastIndex=0;;){let a=l_.exec(r),o=l_.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){u_(n,l===void 0?new o_(s,e,t):new s_(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new c_(s),u_(n,e)),n=e}}}var f_=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);d_(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function p_(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var m_=37297,h_=0;function g_(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var __=new Ad;function v_(e){Fd._getMatrix(__,Fd.workingColorSpace,e);let t=`mat3( ${__.elements.map(e=>e.toFixed(4))} )`;switch(Fd.getTransfer(e)){case $u:return[t,`LinearTransferOETF`];case ed:return[t,`sRGBTransferOETF`];default:return G(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function y_(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+g_(e.getShaderSource(t),r)}return i}function b_(e,t){let n=v_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var x_={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function S_(e,t){let n=x_[t];return n===void 0?(G(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var C_=new q;function w_(){return Fd.getLuminanceCoefficients(C_),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${C_.x.toFixed(4)}, ${C_.y.toFixed(4)}, ${C_.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function T_(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(O_).join(`
`)}function E_(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function D_(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function O_(e){return e!==``}function k_(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function A_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function M_(e){return e.replace(j_,N_)}function N_(e,t){let n=Sh[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return M_(n)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F_(e){return e.replace(P_,I_)}function I_(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function L_(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var R_={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function z_(e){return R_[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var B_={302:`ENVMAP_MODE_REFRACTION`};function V_(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:B_[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var H_={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function U_(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:H_[e.combine]||`ENVMAP_BLENDING_NONE`}function W_(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=z_(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=V_(n),d=U_(n),f=T_(n),p=E_(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(O_).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(O_).join(`
`),g.length>0&&(g+=`
`)):(h=[L_(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(O_).join(`
`),g=[L_(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Sh.tonemapping_pars_fragment,n.toneMapping===0?``:S_(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Sh.colorspace_pars_fragment,b_(`linearToOutputTexel`,n.outputColorSpace),w_(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(O_).join(`
`)),o=M_(o),o=k_(o,n),o=A_(o,n),s=M_(s),s=k_(s,n),s=A_(s,n),o=F_(o),s=F_(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=p_(i,i.VERTEX_SHADER,v),x=p_(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=y_(i,b,`vertex`),n=y_(i,x,`fragment`);K(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):G(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new f_(i,m),w=D_(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,m_)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var G_=0,K_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new q_(e),t.set(e,n)),n}},q_=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};function J_(e){return e===1030||e===37490||e===36285}function Y_(e,t,n,r,i,a){let o=new lf,s=new K_,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&G(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Ch[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,te=!!i.matcap,P=!!b,ne=P&&b.isPMREMTexture===!0,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,F=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,I=!!i.specularMap,De=!!i.specularColorMap,L=!!i.specularIntensityMap,Oe=ve&&!!i.transmissionMap,ke=ve&&!!i.thicknessMap,R=!!i.gradientMap,Ae=!!i.alphaMap,z=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Fe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fd.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:te,envMap:P,envMapMode:P&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?Pe.length-1:null,envMapSize:ne?Pe[0].width:null,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&J_(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:F,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:I,specularColorMap:De,specularIntensityMap:L,transmission:ve,transmissionMap:Oe,thicknessMap:ke,gradientMap:R,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:z,alphaHash:je,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:re&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:le&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:F&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(i.sheenRoughnessMap.channel),specularMapUv:I&&p(i.specularMap.channel),specularColorMapUv:De&&p(i.specularColorMap.channel),specularIntensityMapUv:L&&p(i.specularIntensityMap.channel),transmissionMapUv:Oe&&p(i.transmissionMap.channel),thicknessMapUv:ke&&p(i.thicknessMap.channel),alphaMapUv:Ae&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||Ae),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&Fd.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Fd.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ch[t];n=bm.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new W_(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function X_(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Z_(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Q_(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $_(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Z_),r.length>1&&r.sort(t||Q_),i.length>1&&i.sort(t||Q_)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ev(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new $_,e.set(t,[i])):n>=r.length?(i=new $_,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function tv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new Nf};break;case`SpotLight`:n={position:new q,direction:new q,color:new Nf,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Nf,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Nf,groundColor:new Nf};break;case`RectAreaLight`:n={color:new Nf,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function nv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ed};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ed};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ed,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var rv=0;function iv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function av(e){let t=new tv,n=nv(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Zd,o=new Zd;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(iv);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=rv++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ov(e){let t=new av(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function sv(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ov(e),t.set(n,[a])):r>=i.length?(a=new ov(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uv=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],dv=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],fv=new Zd,pv=new q,mv=new q;function hv(e,t,n){let r=new om,i=new Ed,a=new Ed,o=new Kd,s=new Tm,c=new Em,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Cm({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ed},radius:{value:4}},vertexShader:cv,fragmentShader:lv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new kp;m.setAttribute(`position`,new mp(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new $p(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(G(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){G(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){G(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Jd(i.x,i.y,{format:iu,type:Gl,minFilter:Fl,magFilter:Fl,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new um(i.x,i.y,Wl),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=eu,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ml,d.map.depthTexture.magFilter=Ml}else l.isPointLight?(d.map=new Mh(i.x),d.map.depthTexture=new dm(i.x,Ul)):(d.map=new Jd(i.x,i.y),d.map.depthTexture=new um(i.x,i.y,Ul)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=eu,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Fl,d.map.depthTexture.magFilter=Fl):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ml,d.map.depthTexture.magFilter=Ml);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),pv.setFromMatrixPosition(l.matrixWorld),e.position.copy(pv),mv.copy(e.position),mv.add(uv[t]),e.up.copy(dv[t]),e.lookAt(mv),e.updateMatrixWorld(),n.makeTranslation(-pv.x,-pv.y,-pv.z),fv.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(fv,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Jd(i.x,i.y,{format:iu,type:Gl}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function gv(e,t){function n(){let t=!1,n=new Kd,r=null,i=new Kd(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=pd[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Nf(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Kd().fromArray(re),oe=new Kd().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:K(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:K(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:K(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:K(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(M&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function F(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function I(){try{e.texSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function L(){try{e.compressedTexSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function R(){try{e.texStorage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Pe(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Ie(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Nf(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:F,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ae,texImage3D:z,pixelStorei:Me,getParameter:je,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:ke,texStorage3D:R,texSubImage2D:I,texSubImage3D:De,compressedTexSubImage2D:L,compressedTexSubImage3D:Oe,scissor:Ne,viewport:Pe,reset:Le}}function _v(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ed,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):od(`canvas`)}function v(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),G(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&G(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];G(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||G(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?$u:Fd.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,G(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),ee(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),N(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&M(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function M(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function N(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let te=0;function P(){te=0}function ne(){return te}function re(e){te=e}function ie(){let e=te;return e>=i.maxTextures&&G(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),te+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,i){let a=r.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)G(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)G(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?_e(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?_e(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ve(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[kl]:e.REPEAT,[Al]:e.CLAMP_TO_EDGE,[jl]:e.MIRRORED_REPEAT},de={[Ml]:e.NEAREST,[Nl]:e.NEAREST_MIPMAP_NEAREST,[Pl]:e.NEAREST_MIPMAP_LINEAR,[Fl]:e.LINEAR,[Il]:e.LINEAR_MIPMAP_NEAREST,[Ll]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&G(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ae(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=he(n.start,r.width,4),c=he(t.start,r.width,4);n.start<=i+1&&a===c&&he(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function _e(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=me(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Fd.getPrimaries(Fd.workingColorSpace),r=o.colorSpace===``?null:Fd.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=Oe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);pe(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===tu,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ge(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=vh(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=vh(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=ke(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=ke(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ve(t,o,s){if(o.image.length!==6)return;let c=me(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Fd.getPrimaries(Fd.workingColorSpace),r=o.colorSpace===``?null:Fd.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Oe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);pe(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===tu,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=ke(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ye(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,I(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,I(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,I(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?le(i.depthTexture,0):oe(i.depthTexture,0);let u=c.__webglTexture,d=I(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Se(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)xe(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?xe(i.__webglFramebuffer[0],t,0):xe(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),be(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),be(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,i){let a=r.get(t);n!==void 0&&ye(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Se(t)}function F(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&De(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=I(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),be(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ye(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ye(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),pe(c,a),ye(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),pe(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ye(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ye(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Se(t)}function we(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Te=[];function Ee(t){if(t.samples>0){if(De(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Te.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Te.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function I(e){return Math.min(i.maxSamples,e.samples)}function De(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Oe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Fd.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&G(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):K(`WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ie,this.resetTextureUnits=P,this.getTextureUnits=ne,this.setTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=F,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=De,this.dispose=j}function vv(e,t){function n(n,r=``){let i,a=Fd.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cm({vertexShader:yv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $p(new mm(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sv=class extends md{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new xv,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Ed,C=null,w=null,T=new eh;T.viewport=new Kd;let E=new eh;E.viewport=new Kd;let D=[T,E],O=new ah,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Of,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Of,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Of,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?tu:eu,a=_.stencil?Jl:Ul);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Jd(d.textureWidth,d.textureHeight,{format:$l,type:Rl,depthTexture:new um(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Jd(f.framebufferWidth,f.framebufferHeight,{format:$l,type:Rl,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;N(O,i);for(let e=0;e<a.length;e++)N(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),te(e,O,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=_d*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let P=null;function ne(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new eh,o.layers.enable(n),o.viewport=new Kd,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new fm,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}P&&P(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let re=new bh;re.setAnimationLoop(ne),this.setAnimationLoop=function(e){P=e},this.dispose=function(){}}},Cv=new Zd,wv=new Ad;wv.set(-1,0,0,0,1,0,0,0,1);function Tv(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ym(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(wv),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ev(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?G(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):G(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ov=null;function kv(){return Ov===null&&(Ov=new nm(Dv,16,16,iu,Gl),Ov.name=`DFG_LUT`,Ov.minFilter=Fl,Ov.magFilter=Fl,Ov.wrapS=Al,Ov.wrapT=Al,Ov.generateMipmaps=!1,Ov.needsUpdate=!0),Ov}var Av=class{constructor(e={}){let{canvas:t=sd(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Rl}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ou,au,ru]),g=new Set([Rl,Ul,Vl,Jl,Kl,ql]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Zu;let j=0,ee=0,M=null,N=-1,te=null,P=new Kd,ne=new Kd,re=null,ie=new Nf(0),ae=0,oe=t.width,se=t.height,ce=1,le=null,ue=null,de=new Kd(0,0,oe,se),fe=new Kd(0,0,oe,se),pe=!1,me=new om,he=new cm,ge=!1,_e=!1,ve=new Zd,ye=new q,be=new Kd,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return M===null?ce:1}let F=n;function we(e,n){return t.getContext(e,n)}let Te,Ee,I,De,L,Oe,ke,R,Ae,z,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Ke,!1),t.addEventListener(`webglcontextrestored`,qe,!1),t.addEventListener(`webglcontextcreationerror`,Je,!1),F===null){let t=`webgl2`;if(F=we(t,e),F===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}We()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),K(`WebGLRenderer: `+e.message),e}function We(){Te=new Xh(F),Te.init(),Ve=new vv(F,Te),Ee=new Ah(F,Te,e,Ve),I=new gv(F,Te),Ee.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),De=new $h(F),L=new X_,Oe=new _v(F,Te,I,L,Ee,Ve,De),ke=new Yh(T),R=new xh(F),He=new Oh(F,R),Ae=new Zh(F,R,De,He),z=new tg(F,Ae,R,He,De),Re=new eg(F,Ee,Oe),Fe=new jh(L),je=new Y_(T,ke,Te,Ee,He,Fe),Me=new Tv(T,L),Ne=new ev,Pe=new sv(Te),Le=new Dh(T,ke,I,z,p,s),Ie=new hv(T,z,Ee),Ue=new Ev(F,De,Ee,I),ze=new kh(F,Te,De),Be=new Qh(F,Te,De),De.programs=je.programs,T.capabilities=Ee,T.extensions=Te,T.properties=L,T.renderLists=Ne,T.shadowMap=Ie,T.state=I,T.info=De}m!==1009&&(w=new rg(m,t.width,t.height,o,r,i));let Ge=new Sv(T,F);this.xr=Ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(oe,se,!1))},this.getSize=function(e){return e.set(oe,se)},this.setSize=function(e,n,r=!0){Ge.isPresenting?G(`WebGLRenderer: Can't change size while VR device is presenting.`):(oe=e,se=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(oe*ce,se*ce).floor()},this.setDrawingBufferSize=function(e,n,r){oe=e,se=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)K(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){G(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),I.viewport(P.copy(de).multiplyScalar(Ce()).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),I.scissor(ne.copy(fe).multiplyScalar(Ce()).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){I.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Le.getClearColor(),r=Le.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),Le.dispose(),Ne.dispose(),Pe.dispose(),Oe.dispose(),L.dispose(),ke.dispose(),z.dispose(),Ae.dispose(),He.dispose(),Ue.dispose(),je.dispose(),Ge.dispose(),Ge.removeEventListener(`sessionstart`,tt),Ge.removeEventListener(`sessionend`,nt),rt.stop()};function Ke(e){e.preventDefault(),ld(`WebGLRenderer: Context Lost.`),E=!0}function qe(){ld(`WebGLRenderer: Context Restored.`),E=!1;let e=De.autoReset,t=Ie.enabled,n=Ie.autoUpdate,r=Ie.needsUpdate,i=Ie.type;We(),De.autoReset=e,Ie.enabled=t,Ie.autoUpdate=n,Ie.needsUpdate=r,Ie.type=i}function Je(e){K(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ye(e){let t=e.target;t.removeEventListener(`dispose`,Ye),Xe(t)}function Xe(e){Ze(e),L.remove(e)}function Ze(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){je.releaseProgram(e)}),e.isShaderMaterial&&je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=mt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ae.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;He.setup(i,r,s,n,c);let h,g=ze;if(c!==null&&(h=R.get(c),g=Be,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?R.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Qe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ge===!0&&Fe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ut(e,t,r),e.side=0,e.needsUpdate=!0,ut(e,t,r),e.side=2):ut(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Pe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),_e=this.localClippingEnabled,ge=Fe.init(this.clippingPlanes,_e),ge===!0&&Fe.setGlobalState(this.clippingPlanes,t),D!==null&&Ie.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Qe(o,n,t,e),r.add(o)}else Qe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let $e=null;function et(e){$e&&$e(e)}function tt(){rt.stop()}function nt(){rt.start()}let rt=new bh;rt.setAnimationLoop(et),typeof self<`u`&&rt.setContext(self),this.setAnimationLoop=function(e){$e=e,Ge.setAnimationLoop(e),e===null?rt.stop():rt.start()},Ge.addEventListener(`sessionstart`,tt),Ge.addEventListener(`sessionend`,nt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){K(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ge.enabled===!0&&Ge.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(t),t=Ge.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Pe.get(e,C.length),x.init(t),x.state.textureUnits=Oe.getTextureUnits(),C.push(x),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?he.setFromArrayCamera(t):me.setFromProjectionMatrix(ve,rd,t.reversedDepth),_e=this.localClippingEnabled,ge=Fe.init(this.clippingPlanes,_e),b=Ne.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Ge.enabled===!0&&Ge.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&it(e,t,-1/0,T.sortObjects)}it(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(le,ue),Se=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Se&&Le.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),ge===!0&&Fe.beginShadows();let i=x.state.shadowsArray;if(Ie.render(i,e,t),ge===!0&&Fe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ot(n,r,e,a)}Se&&Le.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];at(b,e,n,n.viewport)}}else r.length>0&&ot(n,r,e,t),Se&&Le.render(e),at(b,e,t)}M!==null&&ee===0&&(Oe.updateMultisampleRenderTarget(M),Oe.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),He.resetDefaultState(),N=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],Oe.setTextureUnits(x.state.textureUnits),ge===!0&&Fe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function it(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?he:me;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=z.update(e),a=e.material;a.visible&&b.push(e,i,a,n,be.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?he:me;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=z.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,be.z,s,t)}}else a.visible&&b.push(e,i,a,n,be.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)it(i[e],t,n,r)}function at(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ge===!0&&Fe.setGlobalState(T.clippingPlanes,n),r&&I.viewport(P.copy(r)),i.length>0&&st(i,t,n),a.length>0&&st(a,t,n),o.length>0&&st(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function ot(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Jd(1,1,{generateMipmaps:!0,type:e?Gl:Rl,minFilter:Ll,samples:Math.max(4,Ee.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fd.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),Se&&Le.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ge===!0&&Fe.setGlobalState(T.clippingPlanes,r),st(e,n,r),Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function st(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ct(o,t,n,s,l,c)}}function ct(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function lt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function ut(e,t,n){t.isScene!==!0&&(t=xe);let r=L.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=je.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ye),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return pt(e,s),d}else s.uniforms=je.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Fe.uniform),pt(e,s),r.needsLights=gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=lt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function dt(e,t,n,r,i){let a=L.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=ut(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function ft(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=f_.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function pt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function mt(e,t,n,r,i){t.isScene!==!0&&(t=xe),Oe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Fd.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),b=x.state.lights;if(ge===!0&&(_e===!0||e!==te)){let t=e===te&&r.id===N;Fe.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Fe.numPlanes||v.numIntersection!==Fe.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===lt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?dt(r,t,i,s,h):ut(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(I.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==N&&(N=r.id,O=!0),E||te!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(F,`projectionMatrix`,e.projectionMatrix),A.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(F,ye.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&A.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(F,`sunShadowMap`,b.state.sunShadowMap,Oe),b.state.directionalShadowMap.length>0&&A.setValue(F,`directionalShadowMap`,b.state.directionalShadowMap,Oe),b.state.spotShadowMap.length>0&&A.setValue(F,`spotShadowMap`,b.state.spotShadowMap,Oe),b.state.pointShadowMap.length>0&&A.setValue(F,`pointShadowMap`,b.state.pointShadowMap,Oe)),i.isSkinnedMesh){A.setOptional(F,i,`bindMatrix`),A.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(F,`boneTexture`,e.boneTexture,Oe))}i.isBatchedMesh&&(A.setOptional(F,i,`batchingTexture`),A.setValue(F,`batchingTexture`,i._matricesTexture,Oe),A.setOptional(F,i,`batchingIdTexture`),A.setValue(F,`batchingIdTexture`,i._indirectTexture,Oe),A.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(F,`batchingColorTexture`,i._colorsTexture,Oe));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Re.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=kv()),O){if(A.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ht(j,k),a&&r.fog===!0&&Me.refreshFogUniforms(j,a),Me.refreshMaterialUniforms(j,r,ce,se,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}f_.upload(F,ft(v),j,Oe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(f_.upload(F,ft(v),j,Oe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(F,`center`,i.center),A.setValue(F,`modelViewMatrix`,i.modelViewMatrix),A.setValue(F,`normalMatrix`,i.normalMatrix),A.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ue.update(n,w),Ue.bind(n,w)}}return w}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,I.viewport(P),I.scissor(ne),I.setScissorTest(re),N=-1;return}if(o.__webglFramebuffer===void 0)Oe.setupRenderTarget(e);else if(o.__hasExternalTextures)Oe.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Oe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Oe.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else P.copy(de).multiplyScalar(ce).floor(),ne.copy(fe).multiplyScalar(ce).floor(),re=pe;if(n!==0&&(r=O),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(P),I.scissor(ne),I.setScissorTest(re),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}N=-1};function _t(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ee.textureFormatReadable(e.format),t.__typeReadable=Ee.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=_t(o);if(u.__formatReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Ve.convert(c),Ve.convert(l),a)}finally{let e=M===null?null:L.get(M).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=_t(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Ve.convert(l),Ve.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=M===null?null:L.get(M).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fd(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Oe.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ve.convert(t.format),_=Ve.convert(t.type),v;t.isData3DTexture?(Oe.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Oe.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Oe.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,k),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Oe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Oe.setTextureCube(e,0):e.isData3DTexture?Oe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Oe.setTexture2DArray(e,0):Oe.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,I.reset(),He.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return rd}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Fd._getDrawingBufferColorSpace(e),t.unpackColorSpace=Fd._getUnpackColorSpace()}},jv=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Mv=`
precision highp float;
precision highp int;
uniform sampler2D uTerrain;
uniform sampler2D uBack;
uniform sampler2D uOverlay;
uniform sampler2D uLight;
uniform sampler2D uBg0;
uniform sampler2D uBg1;
uniform sampler2D uBg2;
uniform sampler2D uBg3;
uniform vec4 uBgInfo[4];
uniform vec2 uTarget;
uniform vec2 uView;
uniform vec2 uCam;
uniform vec2 uLightSize;
uniform float uTime;
uniform float uGroundRef;
uniform vec3 uSky0;
uniform vec3 uSky1;
uniform vec3 uSky2;
uniform vec3 uSky3;
uniform vec3 uAmbient;
uniform vec3 uInk;
uniform vec3 uCelestial;
uniform vec3 uGlow;
uniform vec3 uMoon; // x, y as view fractions, z radius
uniform float uStars;

const int B = 4;

float bayer(ivec2 p) {
  int i = (p.y & 3) * 4 + (p.x & 3);
  float m[16] = float[16](0.,8.,2.,10.,12.,4.,14.,6.,3.,11.,1.,9.,15.,7.,13.,5.);
  return (m[i] + 0.5) / 16.0;
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

vec4 layer(sampler2D t, vec4 info, vec2 sp) {
  float ly = floor(sp.y + floor(uCam.y * info.x) - info.y);
  if (ly < 0.0) return vec4(0.0);
  ly = min(ly, info.w - 1.0);
  float lx = mod(sp.x + floor(uCam.x * info.x), info.z);
  return texelFetch(t, ivec2(int(lx), int(ly)), 0);
}

bool solidAt(ivec2 c) { return texelFetch(uTerrain, c, 0).a > 0.0; }

void main() {
  // Cell coordinates, row 0 at the top.
  ivec2 cell = ivec2(int(gl_FragCoord.x), int(uTarget.y) - 1 - int(gl_FragCoord.y));
  vec2 sp = vec2(cell);
  ivec2 c = cell + ivec2(B);

  float st = clamp((sp.y + (uCam.y - (uGroundRef - uView.y * 0.5)) * 0.12) / uView.y, 0.0, 1.0);
  float band = st * 3.0;
  int bi = int(min(floor(band), 2.0));
  float bf = band - float(bi);
  vec3 a0 = bi == 0 ? uSky0 : bi == 1 ? uSky1 : uSky2;
  vec3 a1 = bi == 0 ? uSky1 : bi == 1 ? uSky2 : uSky3;
  float q = clamp(floor(bf * 4.0 + bayer(cell)) / 4.0, 0.0, 1.0);
  vec3 col = mix(a0, a1, q);

  // Stars: sparse hashed points with slow parallax, upper sky only.
  if (uStars > 0.5 && st < 0.6) {
    vec2 sc = sp + vec2(floor(uCam.x * 0.03), floor(uCam.y * 0.03));
    float h = hash(sc);
    if (h > 0.9965) col = mix(col, uCelestial, 0.45 + 0.55 * fract(h * 97.0));
  }
  // Sun or moon: disc with a dithered halo, anchored to the screen with a little parallax.
  vec2 mc = vec2(uView.x * uMoon.x - floor(uCam.x * 0.02), uView.y * uMoon.y - floor((uCam.y - uGroundRef) * 0.02));
  float md = length(sp + 0.5 - mc);
  if (md < uMoon.z) {
    col = uCelestial;
    if (uStars > 0.5 && hash(floor((sp - mc) / 3.0)) > 0.78) col *= 0.86;
    if (md > uMoon.z - 1.2) col *= 0.93;
  } else if (md < uMoon.z * 4.0) {
    float tt = 1.0 - (md - uMoon.z) / (uMoon.z * 3.0);
    if (tt * tt * 0.55 > bayer(cell)) col = mix(col, uGlow, 0.45);
  }

  vec4 l0 = layer(uBg0, uBgInfo[0], sp); col = mix(col, l0.rgb, l0.a);
  vec4 l1 = layer(uBg1, uBgInfo[1], sp); col = mix(col, l1.rgb, l1.a);
  vec4 l2 = layer(uBg2, uBgInfo[2], sp); col = mix(col, l2.rgb, l2.a);
  vec4 l3 = layer(uBg3, uBgInfo[3], sp); col = mix(col, l3.rgb, l3.a);

  vec4 bk = texelFetch(uBack, c, 0);
  int kind = int(bk.a * 255.0 + 0.5);
  bool under = kind == 2;
  if (kind > 0) col = bk.rgb;

  vec4 t = texelFetch(uTerrain, c, 0);
  int m = int(t.a * 255.0 + 0.5);
  vec3 emissive = vec3(0.0);
  if (m > 0) {
    vec3 tc = t.rgb;
    bool upAir = !solidAt(c + ivec2(0, -1));
    bool up2Air = !solidAt(c + ivec2(0, -2));
    bool dnAir = !solidAt(c + ivec2(0, 1));
    bool lAir = !solidAt(c + ivec2(-1, 0));
    bool rAir = !solidAt(c + ivec2(1, 0));
    if (upAir) tc = mix(tc, vec3(1.0), 0.2);
    else if (up2Air) tc = mix(tc, vec3(1.0), 0.07);
    if (dnAir) tc *= 0.68;
    if (lAir) tc *= 0.92;
    if (rAir) tc *= 0.84;
    if (m == 8) tc = mix(col, tc, 0.45) + (upAir ? 0.15 : 0.0);
    if (m == 10) {
      float f = hash(vec2(c) + floor(uTime * 12.0));
      vec3 hot = mix(vec3(1.0, 0.35, 0.08), vec3(1.0, 0.86, 0.42), f);
      tc = mix(tc, hot, 0.75);
      emissive = hot * 0.55;
    }
    if (m == 14) {
      float p = 0.5 + 0.5 * sin(uTime * 2.5 + float(c.x + c.y) * 0.3);
      emissive = tc * (0.25 + 0.25 * p);
    }
    col = tc;
  } else {
    bool nb = solidAt(c + ivec2(-1, 0)) || solidAt(c + ivec2(1, 0)) || solidAt(c + ivec2(0, -1)) || solidAt(c + ivec2(0, 1));
    if (nb) col = mix(col, uInk, 0.6);
    else if (solidAt(c + ivec2(-2, -3)) || solidAt(c + ivec2(-1, -2))) col *= 0.58;
  }

  vec4 o = texelFetch(uOverlay, c, 0);
  col = mix(col, o.rgb, o.a);

  vec2 luv = (sp + 0.5 + float(B)) / (uLightSize * 2.0);
  vec3 L = texture(uLight, luv).rgb;
  vec3 amb = uAmbient * (under ? 0.4 : 1.0);
  col = col * (amb + L * 1.6) + L * 0.18 + emissive;
  gl_FragColor = vec4(col, 1.0);
}
`,Nv=`
precision highp float;
precision highp int;
uniform sampler2D uScene;
uniform sampler2D uHud;
uniform vec2 uRes;
uniform vec2 uTarget;
uniform float uScale;
uniform vec2 uFrac;
uniform float uFlash;

void main() {
  vec2 frag = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 sp = frag / uScale;
  ivec2 cell = ivec2(floor(sp + uFrac));
  cell = clamp(cell, ivec2(0), ivec2(uTarget) - 1);
  vec3 col = texelFetch(uScene, ivec2(cell.x, int(uTarget.y) - 1 - cell.y), 0).rgb;
  col += uFlash * vec3(1.0, 0.9, 0.72);
  vec2 uv = frag / uRes - 0.5;
  col *= 1.0 - smoothstep(0.42, 0.9, length(uv * vec2(1.0, 0.85))) * 0.38;
  vec4 h = texelFetch(uHud, ivec2(floor(sp)), 0);
  col = mix(col, h.rgb, h.a);
  gl_FragColor = vec4(col, 1.0);
}
`,Pv=e=>new q(d(e)/255,f(e)/255,p(e)/255);function Fv(e,t=!1){let n=new nm(e.bytes,e.w,e.h,$l,Rl);return n.magFilter=t?Fl:Ml,n.minFilter=t?Fl:Ml,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}var Iv=24,Lv=class{renderer;camera=new th(-1,1,1,-1,0,1);sceneMat;upMat;scenePass=new Ff;upPass=new Ff;target=null;texs=[];sources=new Map;lastOx=NaN;lastOy=NaN;forceUpload=!1;bgTexs=[];layers=[];scale=3;baseScale=3;bufW=1;bufH=1;constructor(e){this.renderer=new Av({canvas:e,antialias:!1,alpha:!1,powerPreference:`high-performance`}),this.renderer.setPixelRatio(1);let t=()=>{for(let e of this.sources.values())e.stale=!0};e.addEventListener(`webglcontextlost`,t),e.addEventListener(`webglcontextrestored`,t),this.sceneMat=new Cm({vertexShader:jv,fragmentShader:Mv,depthTest:!1,depthWrite:!1,uniforms:{uTerrain:{value:null},uBack:{value:null},uOverlay:{value:null},uLight:{value:null},uBg0:{value:null},uBg1:{value:null},uBg2:{value:null},uBg3:{value:null},uBgInfo:{value:[new Kd,new Kd,new Kd,new Kd]},uTarget:{value:new Ed(1,1)},uView:{value:new Ed(1,1)},uCam:{value:new Ed},uLightSize:{value:new Ed(1,1)},uTime:{value:0},uGroundRef:{value:400},uSky0:{value:new q},uSky1:{value:new q},uSky2:{value:new q},uSky3:{value:new q},uAmbient:{value:new q(1,1,1)},uInk:{value:new q(.1,.08,.13)},uCelestial:{value:new q(1,1,1)},uGlow:{value:new q(1,1,1)},uMoon:{value:new q(.72,.2,12)},uStars:{value:1}}}),this.upMat=new Cm({vertexShader:jv,fragmentShader:Nv,depthTest:!1,depthWrite:!1,uniforms:{uScene:{value:null},uHud:{value:null},uRes:{value:new Ed(1,1)},uTarget:{value:new Ed(1,1)},uScale:{value:3},uFrac:{value:new Ed},uFlash:{value:0}}});let n=new mm(2,2);this.scenePass.add(new $p(n,this.sceneMat)),this.upPass.add(new $p(n,this.upMat))}fit(e,t,n,r=360,i=0){let a=Math.max(1,Math.floor(e*n)),o=Math.max(1,Math.floor(t*n));return this.renderer.setSize(a,o,!1),this.bufW=a,this.bufH=o,this.baseScale=Math.max(2,Math.round(o/r)),this.scale=i>0?Math.max(1,Math.min(this.baseScale,Math.round(i))):this.baseScale,this.upMat.uniforms.uRes.value.set(a,o),this.upMat.uniforms.uScale.value=this.scale,{vw:Math.ceil(a/this.scale),vh:Math.ceil(o/this.scale)}}bindComposer(e){for(let e of this.texs)e.dispose();this.target?.dispose();let t=this.sceneMat.uniforms,n=Fv(e.terrain),r=Fv(e.back),i=Fv(e.overlay),a=Fv(e.hud),o=Fv(e.light,!0);this.texs=[n,r,i,a,o],this.sources.clear();let s=(e,t,n,r)=>{this.sources.set(e,{buf:t,last:n?new Uint32Array(t.data.length):null,stale:!0,scrolls:r})};s(n,e.terrain,!0,!0),s(r,e.back,!0,!0),s(i,e.overlay,!1,!1),s(a,e.hud,!0,!1),s(o,e.light,!1,!1),t.uTerrain.value=n,t.uBack.value=r,t.uOverlay.value=i,t.uLight.value=o,t.uLightSize.value.set(e.light.w,e.light.h),t.uView.value.set(e.vw,e.vh);let c=e.vw+1,l=e.vh+1;this.target=new Jd(c,l,{minFilter:Ml,magFilter:Ml,generateMipmaps:!1,depthBuffer:!1}),t.uTarget.value.set(c,l);let u=this.upMat.uniforms;u.uScene.value=this.target.texture,u.uHud.value=a,u.uTarget.value.set(c,l)}setBiome(e,t,n,r=!1){for(let e of this.bgTexs)e.dispose();let i=this.sceneMat.uniforms;this.bgTexs=t.map(e=>Fv(e.buf));let a=[`uBg0`,`uBg1`,`uBg2`,`uBg3`];this.bgTexs.forEach((e,t)=>i[a[t]].value=e),i.uSky0.value.copy(Pv(e.sky[0])),i.uSky1.value.copy(Pv(e.sky[1])),i.uSky2.value.copy(Pv(e.sky[2])),i.uSky3.value.copy(Pv(e.sky[3])),i.uAmbient.value.set(...e.ambient),i.uGroundRef.value=n,i.uCelestial.value.copy(Pv(e.celestial)),i.uGlow.value.copy(Pv(e.celestialGlow)),i.uStars.value=e.stars&&!r?1:0,i.uMoon.value.set(.62+n%17/100,.17,e.stars?11:15),this.layers=t}upload(e,t){let n=this.sources.get(e);if(e.clearUpdateRanges(),!n||!n.last||this.forceUpload||this.renderer.getContext().isContextLost()){n&&(n.stale=!0),e.needsUpdate=!0;return}let r=n.buf.data,i=n.last;if(n.stale||t&&n.scrolls){i.set(r),n.stale=!1,e.needsUpdate=!0;return}let a=r.length,o=0;for(;o<a&&r[o]===i[o];)o++;if(o===a)return;let s=a-1;for(;s>o&&r[s]===i[s];)s--;let c=n.buf.w,l=o/c|0,u=s/c|0;if(u-l>=Iv)i.set(r);else{for(let e=l*c,t=(u+1)*c;e<t;e++)i[e]=r[e];for(let t=l;t<=u;t++)e.addUpdateRange(t*c*4,c*4)}e.needsUpdate=!0}render(e,t,n){if(!this.target)return;let r=this.sceneMat.uniforms,i=e.view;r.uCam.value.set(i.ox,i.oy),r.uTime.value=t;let a=r.uGroundRef.value,o=a-e.vh/2,s=r.uBgInfo.value;this.layers.forEach((e,t)=>{let n=e.factor,r=e.buf.h;s[t].set(n,Math.round(a-e.lift-o*(1-n)-r+1),e.buf.w,r)});let c=this.upMat.uniforms;c.uFrac.value.set(i.fx,i.fy),c.uFlash.value=n;let l=i.ox!==this.lastOx||i.oy!==this.lastOy;this.lastOx=i.ox,this.lastOy=i.oy;for(let e of this.texs)this.upload(e,l);this.renderer.setRenderTarget(this.target),this.renderer.render(this.scenePass,this.camera),this.renderer.setRenderTarget(null),this.renderer.render(this.upPass,this.camera)}},Rv={bg:{},loaded:!1},zv=()=>`./`;async function Bv(e){try{let t=new Image;t.src=zv()+e,await t.decode();let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)return null;r.drawImage(t,0,0);let i=r.getImageData(0,0,n.width,n.height).data,a=new il(n.width,n.height);return a.bytes.set(i),a}catch{return null}}async function Vv(){let[e,t]=await Promise.all([Bv(`art/guns.png`),fetch(zv()+`art/guns.json`).then(e=>e.ok?e.json():null).catch(()=>null)]);if(e&&t)for(let[n,r]of Object.entries(t.sprites)){let t=new Uint32Array(r.w*r.h);for(let n=0;n<r.h;n++)t.set(e.data.subarray((r.y+n)*e.w+r.x,(r.y+n)*e.w+r.x+r.w),n*r.w);ci[n]={w:r.w,h:r.h,px:r.px,py:r.py,data:t}}await Promise.all([`dusk`,`night`,`noon`].map(async e=>{let[t,n,r]=await Promise.all([`sky`,`far`,`mid`].map(t=>Bv(`art/bg/${e}-${t}.png`)));t&&n&&r&&(Rv.bg[e]={sky:t,far:n,mid:r})})),Rv.loaded=!0}var Hv=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Uv=(e,t,n)=>n*16>Hv[(t&3)*4+(e&3)]+.5;function Wv(e,t){let n=new b(t^20973),r=Rv.bg[e.art];return r?[{buf:Gv(r.sky,520),factor:.03,lift:70},{buf:r.far,factor:.12,lift:34},{buf:r.mid,factor:.3,lift:10},Yv(e,t,n)]:[Kv(e,t,n),qv(e,t),Jv(e,t,n),Yv(e,t,n)]}function Gv(e,t){let n=new il(e.w,e.h+t);for(let r=0;r<t;r++)n.data.set(e.data.subarray(0,e.w),r*e.w);return n.data.set(e.data,t*e.w),n}function Kv(e,t,n){let r=1024,i=new il(r,160);for(let n=0;n<r;n++){let r=ee(n/120,t+201,4),a=1-Math.abs(ee(n/60,t+202,3)-.5)*2,o=Math.floor(124-r*70-a*26),s=ee((n+1)/120,t+201,4)-r;for(let r=o;r<160;r++){let a=e.far[0],c=r-o;c<3&&s<0?a=e.far[1]:c<10&&s<-.002&&Uv(n,r,.5-c/20)&&(a=v(e.far[0],e.far[1],.5)),o<65&&c<7-n%3&&x(n,r,t)>.2&&(a=v(e.celestial,e.far[1],.3)),Uv(n,r,Math.min(1,(r-110)/50)*.6)&&(a=v(a,e.haze,.35)),i.plot(n,r,a)}}return{buf:i,factor:.08,lift:26}}function qv(e,t){let n=1024,r=new il(n,140);for(let i=0;i<n;i++){let n=Math.floor(110-ee(i/90,t+301,4)*64);for(let t=n;t<140;t++){let a=t-n,o=e.mid[0];a<2?o=e.mid[1]:Uv(i,t,Math.max(0,.5-a/24))&&(o=v(e.mid[0],e.mid[1],.5)),Uv(i,t,Math.min(1,a/140)*.5)&&(o=_(o,.88)),r.plot(i,t,o)}if(x(i,3,t)<.05){let a=6+Math.floor(x(i,4,t)*10);for(let t=0;t<a;t++){let o=Math.floor((a-t)/3);for(let a=-o;a<=o;a++)r.plot(i+a,n-t+2,e.mid[0])}}}return{buf:r,factor:.22,lift:14}}function Jv(e,t,n){let r=1280,i=new il(r,130),a=0;for(;a<r;){let o=n.int(14,46),s=130-n.int(24,104),c=n.chance(.35);for(let n=a;n<Math.min(r,a+o);n++){let r=c?Math.floor(ee(n/5,t+a,2)*14):0;for(let t=s+r;t<130;t++)i.plot(n,t,e.city[0])}if(n.chance(.5)){let t=a+n.int(2,o-3);for(let r=0;r<n.int(6,18);r++)i.plot(t,s-r,e.city[0]);i.plot(t,s-19,e.city[1])}!c&&n.chance(.4)&&i.rect(a+2,s-4,o-4,4,e.city[0]);for(let n=s+5;n<124;n+=6)for(let r=a+3;r<a+o-3;r+=5){let a=x(r,n,t);a<.18?i.rect(r,n,2,3,e.city[1]):a<.45&&i.rect(r,n,2,3,e.city[2])}a+=o+n.int(0,10)}for(let t=90;t<130;t++)for(let n=0;n<r;n++)Uv(n,t,(t-90)/40*.5)&&i.get(n,t)&&i.plot(n,t,v(e.city[0],e.haze,.25));return{buf:i,factor:.42,lift:6}}function Yv(e,t,n){let r=1280,i=new il(r,110);for(let n=0;n<r;n++){let r=Math.floor(96-ee(n/70,t+401,3)*34);for(let t=r;t<110;t++)i.plot(n,t,t-r<1?e.near[1]:e.near[0])}for(let r=0;r<26;r++){let r=n.int(0,1279),a=Math.floor(96-ee(r/70,t+401,3)*34);if(n.chance(.5)){let t=n.int(16,44);for(let n=0;n<t;n++){let o=Math.max(0,Math.floor((1-n/t)*5));for(let t=-o;t<=o;t++)i.plot(r+t,a-n,t===-o?e.near[1]:e.near[0])}}else{let t=n.int(14,32);for(let n=0;n<t;n++)i.plot(r,a-n,e.near[0]);for(let o=0;o<4;o++){let o=a-n.int(t/3,t),s=n.chance(.5)?1:-1,c=n.int(4,10);for(let t=0;t<c;t++)i.plot(r+s*t,o-Math.floor(t/2),e.near[0])}}}return{buf:i,factor:.65,lift:0}}var Xv={dmg:u(`#ffffff`),dmgBig:u(`#ffe04a`),hurt:u(`#ff5a4a`),gold:u(`#ffd04a`),dust:u(`#e8c890`),kill:u(`#ff8a2a`),milestone:u(`#7ae0ff`),rank:u(`#c58bff`)},Zv=4.5,Qv=.3,$v=1.5,ey=class{trauma=0;kickX=0;kickY=0;shakeScale=1;xpOn=!0;flash=0;hitstop=0;hitstopCool=0;hitmarker=0;hitmarkerKill=!1;hurt=0;texts=[];banners=[];bank=null;sounds=[];time=0;lastRecoil=0;dustAcc=0;dustX=0;dustY=0;dustT=0;comboPulse=0;lastChain=0;waveSeen=0;ingest(e,t,n,r,i=e.player){let a=i,o=a?a.id:-1;this.sounds.length=0;let s=0;for(let i of e.jolts){let e=Math.hypot(i.x-t,i.y-n),a=Math.max(0,1-e/(r*.85));if(i.shake>0&&s<Qv){let e=Math.min(Qv-s,i.shake*a*(1-this.trauma));this.trauma=Math.min(.8,this.trauma+e),s+=e}i.flash>0&&(this.flash=Math.min(.14,this.flash+i.flash*a*a)),i.shake>=.45&&a>.6&&this.stop(.035)}if(a&&a.alive&&a.recoil>this.lastRecoil+.4){let e=Math.atan2(a.aimY-a.sy,a.aimX-a.sx),t=Math.min(3,a.recoil*.55);this.kickX-=Math.cos(e)*t,this.kickY-=Math.sin(e)*t}this.lastRecoil=a?a.recoil:0,a&&a.chain!==this.lastChain&&(a.chain>this.lastChain&&(this.comboPulse=1),this.lastChain=a.chain);let c=e.mode.waves&&e.waves.phase===`fight`?e.waves.wave:0;c>0&&c!==this.waveSeen&&this.sounds.push({name:`callout`,pitch:1,v:1}),this.waveSeen=c;for(let t of e.events)switch(t.t){case`hit`:{let e=t.by===o,n=t.victim===o;if(!e&&!n)break;e&&(this.hitmarker=.14,this.hitmarkerKill=!1,this.sounds.push({name:`hitmark`,pitch:1+Math.min(.6,t.amount/120),v:.7})),n&&(this.hurt=Math.min(1,this.hurt+.25+t.amount/80));let r=this.texts.find(e=>e.key===t.victim&&e.t<.3);if(r){let e=Number(r.text)+t.amount;r.text=String(e),r.t=0,r.big=e>=40,r.color=n?Xv.hurt:e>=40?Xv.dmgBig:Xv.dmg,r.y=t.y}else this.texts.push({x:t.x,y:t.y,vy:-40,text:String(t.amount),color:n?Xv.hurt:t.amount>=40?Xv.dmgBig:Xv.dmg,t:0,life:.75,big:t.amount>=40,key:t.victim});break}case`kill`:t.by===o&&t.victim!==o?(this.hitmarker=.3,this.hitmarkerKill=!0,this.stop(.075),this.trauma=Math.min(1,this.trauma+.12),this.texts.push({x:t.x,y:t.y-20,vy:-55,text:`+${t.points}`,color:Xv.kill,t:0,life:1.1,big:!0,key:-1}),this.sounds.push({name:`kill`,pitch:1,v:1})):t.victim===o&&(this.stop(.12),this.hurt=1);break;case`destroy`:if(t.by!==o)break;this.dustAcc+=t.points,this.dustX=t.x,this.dustY=t.y;break;case`bank`:t.by===o&&(this.bank={points:t.points,t:0},this.sounds.push({name:`bank`,pitch:1+Math.min(1,(t.chain-1)*.08),v:.9}));break;case`callout`:t.by===o&&(this.banner(t.text,`+${t.points}`,Xv.kill,1.6),this.sounds.push({name:`callout`,pitch:1,v:1}));break;case`milestone`:this.banner(`${Math.round(t.pct*100)}% DEMOLISHED`,this.xpOn?`+${t.points} XP`:``,Xv.milestone,2),this.sounds.push({name:`milestone`,pitch:1,v:1})}}banner(e,t,n,r){this.banners=this.banners.filter(t=>t.text!==e),this.banners.push({text:e,sub:t,color:n,t:0,life:r}),this.banners.length>3&&this.banners.shift()}rankUp(e){this.banner(`RANK UP`,e,Xv.rank,2.4),this.sounds.push({name:`rankup`,pitch:1,v:1})}newBest(){this.banner(`NEW BEST`,``,Xv.gold,1.8),this.sounds.push({name:`best`,pitch:1,v:1})}stop(e){this.hitstopCool>0||(this.hitstop=Math.max(this.hitstop,e),this.hitstopCool=.25)}update(e){this.time+=e,this.trauma=Math.max(0,this.trauma-$v*e);let t=Math.exp(-e*14);this.kickX*=t,this.kickY*=t,this.flash*=Math.exp(-e*10),this.hitmarker=Math.max(0,this.hitmarker-e),this.hurt=Math.max(0,this.hurt-e*1.6),this.hitstop=Math.max(0,this.hitstop-e),this.hitstopCool=Math.max(0,this.hitstopCool-e),this.comboPulse=Math.max(0,this.comboPulse-e*5),this.dustT+=e,this.dustAcc>0&&this.dustT>.22&&(this.texts.push({x:this.dustX+(Math.random()*8-4),y:this.dustY-6,vy:-32,text:`+${this.dustAcc}`,color:Xv.dust,t:0,life:.7,big:!1,key:-1}),this.dustAcc=0,this.dustT=0);for(let t of this.texts)t.t+=e,t.y+=t.vy*e,t.vy*=Math.exp(-e*3);this.texts=this.texts.filter(e=>e.t<e.life),this.texts.length>40&&this.texts.splice(0,this.texts.length-40);for(let t of this.banners)t.t+=e;this.banners=this.banners.filter(e=>e.t<e.life),this.bank&&(this.bank.t+=e,this.bank.t>1.2&&(this.bank=null))}offset(){let e=this.trauma*this.trauma*Zv*this.shakeScale,t=this.time*22;return{x:(A(t,11)-.5)*2*e+this.kickX*Math.max(.35,this.shakeScale),y:(A(t,23)-.5)*2*e+this.kickY*Math.max(.35,this.shakeScale)}}};function ty(e){let t=t=>{let n=e.axes[t];return typeof n==`number`&&Number.isFinite(n)?Math.max(-1,Math.min(1,n)):0},n=t=>!!e.buttons[t]?.pressed,r=t=>{let n=e.buttons[t];return n?n.value>0?Math.min(1,n.value):+!!n.pressed:0};return{lx:t(0),ly:t(1),rx:t(2),ry:t(3),lt:r(6),rt:r(7),a:n(0),b:n(1),x:n(2),y:n(3),lb:n(4),rb:n(5),back:n(8),start:n(9),up:n(12),down:n(13),left:n(14),right:n(15)}}var ny=.2;function ry(e,t,n=ny){let r=Math.hypot(e,t);if(r<=n)return{x:0,y:0};let i=Math.min(1,(r-n)/(1-n))/r;return{x:e*i,y:t*i}}var iy=.5,ay=.3,oy=.3,sy=.65,Y={JUMP:1,FIRE:2,ALT:4,NEXT:8,PREV:16,START:32,BACK:64,UP:128,DOWN:256,LEFT:512,RIGHT:1024,OK:2048,CANCEL:4096,JOIN:8192,OTHER:16384},cy=()=>({held:0,mute:0,fire:!1,alt:!1,aimAng:0,backT:0});function ly(e,t){return Math.hypot(e,t)<.5?0:Math.abs(e)>=Math.abs(t)?e<0?Y.LEFT:Y.RIGHT:t<0?Y.UP:Y.DOWN}function uy(e,t,n){let r=ry(t.lx,t.ly),i=ry(t.rx,t.ry);e.fire=e.fire?t.rt>=ay:t.rt>=iy,e.alt=e.alt?t.lt>=ay:t.lt>=iy;let a=ly(t.lx,t.ly)|ly(t.rx,t.ry);t.up&&(a|=Y.UP),t.down&&(a|=Y.DOWN),t.left&&(a|=Y.LEFT),t.right&&(a|=Y.RIGHT),(t.a||r.y<-.55)&&(a|=Y.JUMP),e.fire&&(a|=Y.FIRE),(e.alt||t.lb)&&(a|=Y.ALT),(t.rb||t.right)&&(a|=Y.NEXT),t.left&&(a|=Y.PREV),t.start&&(a|=Y.START),t.back&&(a|=Y.BACK),t.a&&(a|=Y.OK),t.b&&(a|=Y.CANCEL),(t.a||t.b||t.x||t.y||t.start)&&(a|=Y.JOIN),(e.fire||e.alt||t.lb||t.rb||t.back||t.up||t.down||t.left||t.right)&&(a|=Y.OTHER);let o=a&~e.held;return e.held=a,e.mute&=a,e.backT=t.back?e.backT+n:0,(i.x!==0||i.y!==0)&&(e.aimAng=Math.atan2(i.y,i.x)),{held:a,pressed:o,move:r}}function dy(e,t,n,r,i){let a=n.held&~t.mute,o=n.pressed&~t.mute;e.left=n.move.x<-.3,e.right=n.move.x>oy,e.down=n.move.y>sy,e.jump=(a&Y.JUMP)!==0,e.fire=(a&Y.FIRE)!==0,e.alt=(a&Y.ALT)!==0,o&Y.JUMP&&(e.jumpPressed=!0),o&Y.FIRE&&(e.firePressed=!0),o&Y.ALT&&(e.altPressed=!0),o&Y.NEXT?e.cycle=1:o&Y.PREV&&(e.cycle=-1),e.aimX=r+Math.cos(t.aimAng)*90,e.aimY=i+Math.sin(t.aimAng)*90}function fy(e){e.left=e.right=e.down=e.jump=e.fire=e.alt=!1,e.jumpPressed=e.firePressed=e.altPressed=!1,e.select=-1,e.cycle=0}function py(e){let t=[];return e&Y.UP&&t.push(`arrowup`),e&Y.DOWN&&t.push(`arrowdown`),e&Y.LEFT&&t.push(`arrowleft`),e&Y.RIGHT&&t.push(`arrowright`),e&Y.OK&&t.push(`enter`),e&(Y.CANCEL|Y.START)&&t.push(`escape`),t}function my(e){let t=[];return e&(Y.LEFT|Y.UP)&&t.push(`arrowleft`),e&(Y.RIGHT|Y.DOWN)&&t.push(`arrowright`),e&(Y.OK|Y.START)&&t.push(`enter`),t}var hy=e=>e?.shared?e.p1?.name??`YOU`:`PLAYER 1`,gy=class{p1Pad=-1;p2Pad=-1;p2=null;kbm=!1;pads=new Map;useKbm(e,t){this.kbm=!0,this.p1Pad<0||(this.p1Pad=-1,e(`${hy(t)}: KEYBOARD AND MOUSE`))}release(e,t=e.player){this.p1Pad>=0&&fy(t.input),this.p1Pad=-1,this.p2&&fy(this.p2.input)}poll(e,t,n,r){this.p2&&!e.humans.includes(this.p2)&&this.dropP2();let i=new Set;for(let e of t)e&&e.connected&&i.add(e.index);this.p1Pad>=0&&!i.has(this.p1Pad)&&(this.p1Pad=-1,fy((r.p1??e.player).input),r.notice(`PAD DISCONNECTED - ${hy(r)}: KEYBOARD AND MOUSE`)),this.p2Pad>=0&&!i.has(this.p2Pad)&&(this.p2Pad=-1,this.p2&&fy(this.p2.input),r.notice(`${this.p2?.name??`P2`} PAD DISCONNECTED`));for(let e of[...this.pads.keys()])i.has(e)||this.pads.delete(e);for(let i of t){if(!i||!i.connected)continue;let t=this.pads.get(i.index);t||(t=cy(),this.pads.set(i.index,t)),this.route(e,i.index,t,uy(t,ty(i),n),n,r)}}actorOf(e,t,n=e.player){return t===this.p1Pad?n:t===this.p2Pad?this.p2:null}route(e,t,n,r,i,a){let o=a.p1??e.player,s=this.actorOf(e,t,o);if((a.mode!==`play`||a.results)&&(n.mute=n.held),a.mode===`title`){if(!(r.pressed&Y.JOIN))return;a.start(),s||this.seat(e,t,n,a)}else if(s){if(s===this.p2&&n.backT>=1&&!a.shared){if(!e.mode.waves||s.alive){this.leave(e,a);return}n.backT-i<1&&a.notice(`${s.name} CAN LEAVE ONCE BACK UP`)}if(a.mode===`paused`){for(let e of py(r.pressed))a.menuKey(e);fy(s.input)}else if(a.results){if(a.shared&&r.pressed&Y.START)a.openMenu();else for(let e of my(r.pressed))a.resultsKey(e);fy(s.input)}else r.pressed&Y.START&~n.mute?(a.openMenu(),n.mute=n.held,fy(s.input)):s===o&&a.autoP1||dy(s.input,n,r,s.sx,s.sy)}else{if(a.mode!==`play`||a.results)return;r.pressed&Y.JOIN?this.seat(e,t,n,a):r.pressed&Y.OTHER&&(a.shared?this.p1Pad<0:this.p2Pad<0)&&a.notice(`PRESS A TO JOIN`)}}seat(e,t,n,r){n.mute=n.held,(!this.kbm||r.shared)&&this.p1Pad<0?(this.p1Pad=t,r.notice(`${hy(r)}: PAD`)):r.shared?r.notice(`ONE PLAYER PER BROWSER ONLINE`):this.p2?this.p2Pad>=0?r.notice(`TWO PLAYERS AT MOST`):(this.p2Pad=t,r.notice(`${this.p2.name}: PAD`)):e.humans.length>=4||(this.p2=e.addPlayer(),this.p2Pad=t,r.notice(`${this.p2.name} JOINED - HOLD BACK TO LEAVE`))}leave(e,t){t.shared||(this.p2&&(e.removePlayer(this.p2),t.notice(`${this.p2.name} LEFT`)),this.dropP2())}dropP2(){this.p2=null,this.p2Pad=-1}},_y=[{name:`PEBBLE`,xp:0},{name:`GRAVEL`,xp:1500},{name:`BRICK`,xp:4e3},{name:`MASON`,xp:8e3},{name:`WRECKER`,xp:14e3},{name:`BULLDOZER`,xp:23e3},{name:`DEMOLISHER`,xp:36e3},{name:`SIEGEBREAKER`,xp:54e3},{name:`AFTERSHOCK`,xp:8e4},{name:`QUAKE`,xp:115e3},{name:`CATACLYSM`,xp:165e3},{name:`RUBBLESTORM`,xp:24e4}],vy=()=>({v:1,xp:0,kills:0,cells:0,best:{},bestDaily:{},bestWave:{},tutorialDone:!1,scoreRules:2,bestOld:{},bestDailyOld:{}});function yy(e){if(!e)return vy();try{let t=JSON.parse(e);if(t.v!==1||typeof t.xp!=`number`)return vy();let n=typeof t.tutorialDone==`boolean`?t.tutorialDone:t.xp>0,r={...t.best??{}},i={...t.bestDaily??{}},a={...t.bestOld??{}},o={...t.bestDailyOld??{}},s=t.scoreRules===2;return{...vy(),...t,tutorialDone:n,scoreRules:2,best:s?r:{},bestDaily:s?i:{},bestOld:s?a:{...a,...r},bestDailyOld:s?o:{...o,...i},bestWave:{...t.bestWave??{}}}}catch{return vy()}}function by(e){let t=0;for(;t+1<_y.length&&e>=_y[t+1].xp;)t++;return t}function xy(e){let t=by(e),n=_y[t].xp,r=_y[t+1]?.xp;return r===void 0?1:(e-n)/(r-n)}function Sy(e,t){let n=by(e.xp);e.xp+=Math.max(0,Math.round(t));let r=by(e.xp);return r>n?r:-1}function Cy(e,t){return t!==null&&Number.isInteger(t)&&t>=0&&t<=5?t:by(e)===0?1:3}var wy=(e,t,n)=>e===`classic`?String(n??t):`${e}:${n??t}`,Ty=(e,t,n,r)=>(r?e.bestDaily:e.best)[wy(t,n,r)]??0;function Ey(e,t,n,r,i=`classic`){let a=r?e.bestDaily:e.best,o=wy(i,t,r);return n>(a[o]??0)&&(a[o]=n,!0)}var Dy=(e,t,n)=>`${e}:${n??t}`;function Oy(e,t,n,r,i){let a=Dy(t,n,i);return r>(e.bestWave[a]??0)&&(e.bestWave[a]=r,!0)}function ky(e){let t=`${e.getUTCFullYear()}-${String(e.getUTCMonth()+1).padStart(2,`0`)}-${String(e.getUTCDate()).padStart(2,`0`)}`,n=2166136261;for(let e of t)n=Math.imul(n^e.charCodeAt(0),16777619);return{seed:(n>>>0)%1e6,key:t}}function Ay(e,t,n,r,i=`classic`){let a=new URLSearchParams({seed:String(t)});return n&&a.set(`daily`,n),a.set(`bots`,String(r)),i!==`classic`&&a.set(`mode`,i),`${e}?${a.toString()}`}function jy(e,t,n){return n?`I scored ${e} on the ${n} Rubblestorm daily arena`:`I scored ${e} on Rubblestorm arena ${t}`}function My(e,t,n,r){return`We held out to wave ${e} with ${t} points on ${r?`the ${r} Rubblestorm daily arena`:`Rubblestorm arena ${n}`}`}function Ny(e,t,n){let r=e.get(`daily`);if(!r||!/^\d{4}-\d{2}-\d{2}$/.test(r)||r>n.key)return null;let i=ky(new Date(`${r}T00:00:00Z`));return i.key===r&&i.seed===t?r:null}async function Py(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();let n=document.execCommand(`copy`);return t.remove(),n}catch{return!1}}var Fy=new Set([`Escape`,`Shift`,`Control`,`Alt`,`AltGraph`,`Meta`,`OS`,`Super`,`Hyper`,`Fn`,`FnLock`,`CapsLock`,`NumLock`,`ScrollLock`,`Symbol`,`SymbolLock`]),Iy=e=>!Fy.has(e),Ly=class{copy;held=null;constructor(e=Py){this.copy=e}get waiting(){return this.held!==null}async now(e,t,n=!0){this.held=null;let r=await this.copy(e);return!r&&n&&(this.held={text:e,owner:t}),r}retry(e){let t=this.held;return this.held=null,t&&t.owner===e?this.copy(t.text):null}},Ry={HELLO:1,LOBBY:2,INPUT:3,FRAME:4,HASH:5,END:6,STALL:7},zy=4,By=[`left`,`right`,`jump`,`jumpPressed`,`down`,`fire`,`firePressed`,`alt`,`altPressed`],Vy=e=>Math.max(-32768,Math.min(32767,Math.round(e*zy)));function Hy(e,t,n){let r=0;for(let e=0;e<By.length;e++)n[By[e]]&&(r|=1<<e);e.setUint16(t,r,!0),e.setInt16(t+2,Number.isFinite(n.aimX)?Vy(n.aimX):0,!0),e.setInt16(t+4,Number.isFinite(n.aimY)?Vy(n.aimY):0,!0),e.setInt8(t+6,Math.max(-1,Math.min(127,n.select|0))),e.setInt8(t+7,Math.sign(n.cycle|0))}function Uy(e,t,n=E()){let r=e.getUint16(t,!0);for(let e=0;e<By.length;e++)n[By[e]]=!!(r&1<<e);return n.aimX=e.getInt16(t+2,!0)/zy,n.aimY=e.getInt16(t+4,!0)/zy,n.select=e.getInt8(t+6),n.cycle=e.getInt8(t+7),n}function Wy(e){let t=new Uint8Array(8);return Hy(new DataView(t.buffer),0,e),t}function Gy(e,t){return Uy(new DataView(e.buffer,e.byteOffset,e.byteLength),0,t)}var Ky=Wy(E()),qy=new TextEncoder,Jy=new TextDecoder;function Yy(e,t){let n=new Uint8Array(2+t);return n[0]=5,n[1]=e,{out:n,dv:new DataView(n.buffer)}}function Xy(e){return e.length>=2&&e[0]===5?e[1]:-1}var Zy=e=>e.length>=2&&e[0]!==5&&e[1]>=Ry.HELLO&&e[1]<=Ry.STALL;function Qy(e,t){let n=qy.encode(JSON.stringify(t)),{out:r}=Yy(e,n.length);return r.set(n,2),r}function $y(e){return JSON.parse(Jy.decode(e.subarray(2)))}function eb(e,t){let{out:n,dv:r}=Yy(Ry.INPUT,5+t.length*8);return r.setUint32(2,e,!0),n[6]=t.length,t.forEach((e,t)=>n.set(e,7+t*8)),n}function tb(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength).getUint32(2,!0),n=e[6],r=[];for(let t=0;t<n;t++)r.push(e.slice(7+t*8,7+(t+1)*8));return{tick:t,inputs:r}}function nb(e){let t=e.inputs.filter(e=>e!==null).length,n=e.cmds.length?qy.encode(JSON.stringify(e.cmds)):new Uint8Array,{out:r,dv:i}=Yy(Ry.FRAME,6+t*8+2+n.length);i.setUint32(2,e.tick,!0),r[6]=e.inputs.length;let a=0,o=8;return e.inputs.forEach((e,t)=>{e&&(a|=1<<t,r.set(e,o),o+=8)}),r[7]=a,i.setUint16(o,n.length,!0),r.set(n,o+2),r}function rb(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(2,!0),r=e[6],i=e[7],a=[],o=8;for(let t=0;t<r;t++)i&1<<t?(a.push(e.slice(o,o+8)),o+=8):a.push(null);let s=t.getUint16(o,!0);return{tick:n,inputs:a,cmds:s?JSON.parse(Jy.decode(e.subarray(o+2,o+2+s))):[]}}function ib(e,t){let{out:n,dv:r}=Yy(Ry.HASH,5+t.length*4);return r.setUint32(2,e,!0),n[6]=t.length,t.forEach((e,t)=>r.setUint32(7+t*4,e>>>0,!0)),n}function ab(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=e[6],r=[];for(let e=0;e<n;e++)r.push(t.getUint32(7+e*4,!0));return{tick:t.getUint32(2,!0),parts:r}}var ob=e=>C.find(t=>t.id===e)??S,sb={seed:1,biome:-1,twist:S.id,mode:`classic`,bots:3,skill:1,daily:null};function cb(e,t,n){return{...e,seed:Number.isFinite(e.seed)?e.seed>>>0:0,biome:Number.isInteger(e.biome)&&e.biome>=0&&e.biome<te.length?e.biome:-1,bots:Math.max(0,Math.min(5,e.bots|0)),skill:Gt(e.skill),v:5,delay:n,players:t.slice(0,4)}}function lb(e){let t=new vr(e.seed);t.setMode(Bt(e.mode)),t.botSkill=Gt(e.skill),t.load(e.seed,e.biome>=0?e.biome:void 0,ob(e.twist));let n=[];return e.players.forEach((e,r)=>{let i=t.addPlayer();i.name=`P${r+1}`,n.push(i)}),t.setBots(Math.max(0,Math.min(5,e.bots|0))),t.autoPlayer=!1,t.showcase=!1,t.round.hold=!1,{game:t,slots:n}}var ub=2166136261,db=16777619,fb=new Float64Array(1),pb=new Uint32Array(fb.buffer);function mb(e,t){return fb[0]=t,e=Math.imul(e^pb[0],db),Math.imul(e^pb[1],db)>>>0}function hb(e,t){e=mb(e,t.length);for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),db);return e>>>0}function gb(e,t,n=t.length){let r=n*t.BYTES_PER_ELEMENT,i=r>>>2;e=mb(e,n);let a=e,o=Math.imul(e^1,db),s=Math.imul(e^2,db),c=Math.imul(e^3,db);if(t.byteOffset%4==0){let e=new Uint32Array(t.buffer,t.byteOffset,i),n=0;for(;n+3<i;n+=4)a=Math.imul(a^e[n],db),o=Math.imul(o^e[n+1],db),s=Math.imul(s^e[n+2],db),c=Math.imul(c^e[n+3],db);for(;n<i;n++)a=Math.imul(a^e[n],db);let l=new Uint8Array(t.buffer,t.byteOffset+i*4,r-i*4);for(let e=0;e<l.length;e++)o=Math.imul(o^l[e],db)}else{let e=new Uint8Array(t.buffer,t.byteOffset,r);for(let t=0;t<e.length;t++)a=Math.imul(a^e[t],db)}return e=Math.imul(a^o>>>0,db),e=Math.imul(e^s>>>0,db),Math.imul(e^c>>>0,db)>>>0}function _b(e,t,n){let r=t;for(let t in r){if(n?.has(t))continue;let i=r[t];typeof i==`number`?e=mb(e,i):typeof i==`boolean`?e=Math.imul(e^(i?1:2),db)>>>0:typeof i==`string`&&(e=hb(e,i))}return e}var vb=new Set([`input`,`squash`,`scarfX`,`scarfY`,`scarfPX`,`scarfPY`]),yb=8,bb=[{name:`game`,covers:[`round`,`mode`,`twist`,`arena`],hash:(e,t)=>(e=_b(e,t),e=_b(e,t.round),e=hb(e,t.mode.id),e=mb(e,t.arena.seed),hb(e,t.twist.id))},{name:`rng`,covers:[`rng`],hash:(e,t)=>mb(e,t.rng.state)},{name:`terrain`,covers:[`world`],hash:(e,t)=>{let n=t.world;e=_b(e,n),e=gb(e,n.mat);let r=Math.ceil(n.H/yb),i=Math.floor(t.tick/64)%yb,a=i*r*n.W,o=Math.min(n.H,(i+1)*r)*n.W;return e=mb(e,i),e=gb(e,n.col.subarray(a,o)),e=gb(e,n.back.subarray(a,o)),e=gb(e,n.dmg),e=gb(e,n.burn),gb(e,n.looseQueue())}},{name:`actors`,covers:[`actors`,`humans`,`player`],hash:(e,t)=>{e=mb(e,t.actors.length);for(let n of t.actors)e=_b(e,n,vb);for(let n of t.humans)e=mb(e,n.id);return e}},{name:`bots`,covers:[`botBrains`],hash:(e,t)=>{e=mb(e,t.botBrains.length);for(let n of t.botBrains)e=_b(e,n);return e}},{name:`projectiles`,covers:[`projectiles`],hash:(e,t)=>{e=mb(e,t.projectiles.length);for(let n of t.projectiles)e=_b(e,n);return e}},{name:`chunks`,covers:[`chunks`],hash:(e,t)=>{e=mb(e,t.chunks.list.length);for(let n of t.chunks.list)e=_b(e,n),e=gb(e,n.mats);return e}},{name:`particles`,covers:[`parts`],hash:(e,t)=>{let n=t.parts,r=n.n;e=_b(e,n);for(let t of[n.x,n.y,n.vx,n.vy,n.life,n.max,n.col,n.kind,n.size])e=gb(e,t,r);return e}},{name:`fire`,covers:[`burning`],hash:(e,t)=>{e=mb(e,t.burning.length);for(let n of t.burning)e=Math.imul(e^n,db)>>>0;return e}},{name:`waves`,covers:[`waves`],hash:(e,t)=>_b(e,t.waves)},{name:`meme`,covers:[`gas`,`rugs`],hash:(e,t)=>{e=_b(e,t.gas),e=mb(e,t.gas.puffs.length);for(let n of t.gas.puffs)e=_b(e,n);e=mb(e,t.rugs.list.length);for(let n of t.rugs.list)e=_b(e,n),e=gb(e,n.top);e=mb(e,t.rugs.thrown.length);for(let n of t.rugs.thrown)e=_b(e,n);return e}}];function xb(e){return bb.map(t=>t.hash(ub,e))}function Sb(){let e=ub,t=[.5,1.234567,3.1,100.25,-2.75,.001,7.77,-21.583333333333,-5.925,.3,2.2,42.42,-.875,1e5];for(let n of t){e=mb(e,Math.sin(n)),e=mb(e,Math.cos(n)),e=mb(e,Math.exp(n/7));for(let r of t)e=mb(e,Math.atan2(n,r)),e=mb(e,Math.hypot(n,r))}return e=mb(e,Math.atan2(-21.583333333334053,2039-2044.925)),e}var Cb=Sb(),wb=(e,t)=>e?e.players.findIndex(e=>e.peer===t):-1,Tb=1200,Eb=15,Db=10;function Ob(e){return{...e,left:!1,right:!1,jump:!1,jumpPressed:!1,down:!1,fire:!1,firePressed:!1,alt:!1,altPressed:!1,select:-1,cycle:0}}function kb(e){e.jumpPressed=e.firePressed=e.altPressed=!1,e.select=-1,e.cycle=0}var Ab=class{transport;role;state=`lobby`;game=null;cfg=null;slots=[];gone=[];slot=-1;tick=0;arenaTick=0;endReason=``;hostId=``;lobby=[];waiting=[];stalled=!1;onGame=null;onEnd=null;onLobby=null;hostDelay;hashEvery;frames=new Map;nextSample=0;inputs=new Map;pending=[];myHashes=new Map;theirHashes=new Map;name;stuckTick=-1;stuckTries=0;stallSent=!1;constructor(e,t,n={}){this.transport=e,this.role=t,this.name=(n.name??`PLAYER`).slice(0,12).toUpperCase(),this.hostDelay=Math.max(1,Math.min(30,Math.round(n.delay??4))),this.hashEvery=Math.max(1,n.hashEvery??60),e.onMessage=(e,t)=>this.receive(e,t),e.onPeer=(e,t)=>this.peer(e,t),t===`host`?this.lobby=[{peer:e.id,name:this.name,math:Cb}]:this.hello()}get isHost(){return this.role===`host`}get delay(){return this.cfg?.delay??this.hostDelay}get me(){return this.slot>=0&&!this.gone[this.slot]?this.slots[this.slot]??null:null}start(e){if(!this.isHost)throw Error(`only the host starts an arena`);let t=cb(e,this.lobby,this.hostDelay);return this.pending=this.pending.filter(e=>e.t!==`start`),this.pending.push({t:`start`,cfg:t}),this.state===`lobby`&&(this.state=`running`),t}setSkill(e){this.isHost&&this.state===`running`&&this.pending.push({t:`skill`,v:Gt(e)})}leave(){this.state!==`ended`&&this.end(this.isHost?`THE HOST CLOSED THE GAME`:`YOU LEFT`,this.isHost),this.transport.close()}advance(e,t=!1){if(this.state!==`running`)return!1;this.me&&this.sample(e,t),this.isHost&&!this.frames.has(this.tick)&&this.seal();let n=this.frames.get(this.tick);return n?(this.frames.delete(this.tick),this.stalled=!1,this.apply(n,e),this.state===`running`):(this.stalled=!0,!1)}sample(e,t){for(;this.nextSample<=this.tick+this.delay;){let n=Wy(t?Ob(e):e);kb(e);let r=this.nextSample++;this.isHost?this.store(this.transport.id,r,n):this.transport.send(eb(r,[n]))}}store(e,t,n){if(t<this.tick)return;let r=this.inputs.get(e);r||this.inputs.set(e,r=new Map),r.set(t,n)}seal(){let e=this.tick,t=this.cfg,n=this.gone.slice(),r=this.arenaTick;for(let i of this.pending)if(i.t===`start`)t=i.cfg,n=t.players.map(()=>!1),r=e;else if(i.t===`leave`){let e=wb(t,i.peer);e>=0&&(n[e]=!0)}if(!t)return;let i=[],a=[];if(t.players.forEach((o,s)=>{if(n[s])i.push(null);else if(e<r+t.delay)i.push(Ky);else{let t=this.inputs.get(o.peer)?.get(e);t||a.push(`P${s+1}`),i.push(t??null)}}),a.length){this.waiting=a,this.stuckTick!==e&&(this.stuckTick=e,this.stuckTries=0),++this.stuckTries===Eb&&(this.stallSent=!0,this.transport.send(Qy(Ry.STALL,{names:a})));return}let o={tick:e,inputs:i,cmds:this.pending};this.pending=[],this.waiting=[],this.stallSent&&(this.stallSent=!1,this.transport.send(Qy(Ry.STALL,{names:[]}))),this.frames.set(e,o),this.transport.send(nb(o));for(let t of this.inputs.values())for(let n of t.keys())n<=e&&t.delete(n)}apply(e,t){for(let t of e.cmds)if(this.command(t,e.tick),this.state!==`running`)return;let n=this.game;if(n){if(e.inputs.length!==this.slots.length){this.end(`BAD FRAME FROM THE HOST`,!1);return}e.inputs.forEach((e,t)=>{e&&!this.gone[t]&&(this.slots[t].input=Gy(e))}),n.step(ir);let r=this.me;r&&(r.input=t)}this.tick++,n&&this.tick%this.hashEvery===0&&this.hashNow(n)}command(e,t){if(e.t===`start`){if(e.cfg.v!==5){this.end(`THE HOST RUNS ANOTHER VERSION`,!1);return}let{game:n,slots:r}=lb(e.cfg);this.cfg=e.cfg,this.slots=r,this.gone=r.map(()=>!1),this.arenaTick=t,this.slot=e.cfg.players.findIndex(e=>e.peer===this.transport.id),this.game=this.slot>=0?n:null,this.nextSample=Math.max(this.nextSample,t+e.cfg.delay),this.slot<0&&(this.state=`lobby`),this.onGame?.(this.game,this.slot)}else if(e.t===`leave`){let t=wb(this.cfg,e.peer),n=this.slots[t];if(!n||this.gone[t])return;this.gone[t]=!0,n.bot=!0,this.game?.log(`${n.name} LEFT: A BOT TAKES OVER`),t===this.slot&&this.end(`THE HOST DROPPED YOU`,!1)}else e.t===`skill`&&this.game&&(this.game.botSkill=Gt(e.v))}hashNow(e){let t=xb(e);this.myHashes.set(this.tick,t);for(let e of this.myHashes.keys())e<this.tick-Db*this.hashEvery&&this.myHashes.delete(e);for(let e of this.theirHashes.keys())e<this.tick-Db*this.hashEvery&&this.theirHashes.delete(e);this.transport.send(ib(this.tick,t)),this.compare(this.tick)}compare(e){let t=this.myHashes.get(e),n=this.theirHashes.get(e);if(t&&n){this.theirHashes.delete(e);for(let r of n){let n=bb.filter((e,n)=>t[n]!==r.parts[n]).map(e=>e.name.toUpperCase());if(r.parts.length!==t.length&&n.push(`LAYOUT`),n.length){this.end(`OUT OF SYNC AT TICK ${e}: ${n.join(`, `)}`,!0);return}}}}checkHashes(e,t){this.myHashes.set(e,t),this.compare(e)}hello(){this.transport.send(Qy(Ry.HELLO,{name:this.name,host:this.hostId,math:Cb}))}get mathMismatch(){return this.lobby.flatMap((e,t)=>e.math!==void 0&&e.math!==Cb?[`P${t+1}`]:[])}inGame(e){return!!this.cfg?.players.some(t=>t.peer===e)}sendLobby(){let e={host:this.transport.id,players:this.lobby,running:!!this.cfg};this.transport.send(Qy(Ry.LOBBY,e))}peer(e,t){if(this.state===`ended`)return;if(!this.isHost){t?this.hello():e===this.hostId&&this.end(`THE HOST LEFT`,!1);return}if(t)return;let n=this.lobby.some(t=>t.peer===e);this.lobby=this.lobby.filter(t=>t.peer!==e),this.inputs.delete(e);let r=wb(this.cfg,e);(r>=0&&!this.gone[r]||this.pending.some(t=>t.t===`start`&&wb(t.cfg,e)>=0))&&!this.pending.some(t=>t.t===`leave`&&t.peer===e)&&this.pending.push({t:`leave`,peer:e}),n&&(this.sendLobby(),this.onLobby?.())}receive(e,t){if(this.state===`ended`)return;let n=Xy(t);if(n<0)!Zy(t)||this.isHost||this.hostId&&e!==this.hostId||this.end(`THE HOST RUNS ANOTHER VERSION`,!1);else try{this.handle(e,n,t)}catch{}}handle(e,t,n){switch(t){case Ry.HELLO:{if(!this.isHost)return;let{name:t,host:r,math:i}=$y(n);if(r&&r!==this.transport.id){this.lobby.some(t=>t.peer===e)&&this.peer(e,!1);return}this.lobby.some(t=>t.peer===e)||(this.lobby.push({peer:e,name:String(t??`PLAYER`).slice(0,12).toUpperCase(),math:typeof i==`number`?i:void 0}),this.onLobby?.()),this.sendLobby();return}case Ry.LOBBY:{if(this.isHost)return;let t=$y(n);if(this.hostId||(this.hostId=e,this.hello()),e!==this.hostId)return;this.lobby=t.players,this.onLobby?.();return}case Ry.INPUT:{if(!this.isHost)return;let{tick:t,inputs:r}=tb(n);r.forEach((n,r)=>this.store(e,t+r,n));return}case Ry.FRAME:{if(this.isHost||(this.hostId||=e,e!==this.hostId))return;let t=rb(n);if(this.state===`running`){t.tick>=this.tick&&this.frames.set(t.tick,t);return}if(this.frames.set(t.tick,t),this.frames.size>Tb&&this.frames.delete(Math.min(...this.frames.keys())),t.cmds.find(e=>e.t===`start`&&e.cfg.players.some(e=>e.peer===this.transport.id))){for(let e of this.frames.keys())e<t.tick&&this.frames.delete(e);this.tick=t.tick,this.state=`running`}return}case Ry.HASH:{if(this.state!==`running`||!this.game||!this.inGame(e))return;let{tick:t,parts:r}=ab(n);if(t<this.tick-Db*this.hashEvery)return;let i=this.theirHashes.get(t);i||this.theirHashes.set(t,i=[]),i.push({peer:e,parts:r}),this.compare(t);return}case Ry.END:{if(e!==this.hostId&&!this.inGame(e))return;let{reason:t}=$y(n);this.end(String(t??`THE GAME ENDED`),this.isHost);return}case Ry.STALL:if(this.isHost||e!==this.hostId)return;this.waiting=$y(n).names??[];return}}end(e,t){this.state!==`ended`&&(this.state=`ended`,this.endReason=e,this.stalled=!1,t&&this.transport.send(Qy(Ry.END,{reason:e})),this.onEnd?.(e))}},jb=class{id;parts;onMessage=null;onPeer=null;constructor(e,t){this.id=e,this.parts=t;for(let e of t)e.onMessage=(e,t)=>this.onMessage?.(e,t),e.onPeer=(e,t)=>this.onPeer?.(e,t)}send(e){for(let t of this.parts)t.send(e)}close(){for(let e of this.parts)e.close()}},Mb=`rubblestorm-online`,Nb=1e4,Pb=1e3;function Fb(){let e=new Uint8Array(6);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var Ib=class{id;onMessage=null;onPeer=null;ch;heard=new Map;timer;bye=()=>this.close();closed=!1;constructor(e=Fb(),t=Mb){this.id=e,this.ch=new BroadcastChannel(t),this.ch.onmessage=e=>this.receive(e.data),this.timer=window.setInterval(()=>this.tick(),Pb),window.addEventListener(`pagehide`,this.bye),this.post({from:this.id,kind:`ping`})}post(e){try{this.ch.postMessage(e)}catch{}}receive(e){if(this.closed||!e||typeof e.from!=`string`||e.from===this.id)return;if(e.kind===`bye`){this.heard.delete(e.from)&&this.onPeer?.(e.from,!1);return}let t=this.heard.has(e.from);this.heard.set(e.from,performance.now()),t||this.onPeer?.(e.from,!0),e.kind===`data`&&e.data instanceof Uint8Array&&this.onMessage?.(e.from,e.data)}tick(){this.post({from:this.id,kind:`ping`});let e=performance.now();for(let[t,n]of this.heard)e-n>Nb&&(this.heard.delete(t),this.onPeer?.(t,!1))}send(e){this.closed||this.post({from:this.id,kind:`data`,data:e})}close(){this.closed||(this.post({from:this.id,kind:`bye`}),this.closed=!0,window.clearInterval(this.timer),window.removeEventListener(`pagehide`,this.bye),this.ch.close())}},Lb=[{urls:[`stun:stun.cloudflare.com:3478`,`stun:stun.l.google.com:19302`]}],Rb=4e3,zb=`RS5`,Bb=e=>{let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)},Vb=e=>{let t=atob(e.replace(/-/g,`+`).replace(/_/g,`/`));return Uint8Array.from(t,e=>e.charCodeAt(0))};async function Hb(e,t){let n=new Blob([e]).stream().pipeThrough(t);return new Uint8Array(await new Response(n).arrayBuffer())}async function Ub(e){let t=new TextEncoder().encode(JSON.stringify(e));return typeof CompressionStream<`u`?`${zb}Z.${Bb(await Hb(t,new CompressionStream(`deflate-raw`)))}`:`${zb}J.${Bb(t)}`}async function Wb(e){let t=/RS(\d+)([ZJ])\.([A-Za-z0-9_-]+)/.exec(e.replace(/\s+/g,``));if(!t||Number(t[1])!==5)return null;try{let e=Vb(t[3]);t[2]===`Z`&&(e=await Hb(e,new DecompressionStream(`deflate-raw`)));let n=JSON.parse(new TextDecoder().decode(e));return(n.t===`offer`||n.t===`answer`)&&typeof n.sdp==`string`&&typeof n.peer==`string`?n:null}catch{return null}}function Gb(e){let t=/RS(\d+)[ZJ]\./.exec(e);return t?Number(t[1]):-1}function Kb(e){return e.iceGatheringState===`complete`?Promise.resolve():new Promise(t=>{let n,r=()=>{clearTimeout(i),clearTimeout(n),t()},i=setTimeout(r,Rb);e.addEventListener(`icegatheringstatechange`,()=>{e.iceGatheringState===`complete`&&r()}),e.addEventListener(`icecandidate`,e=>{n===void 0&&/ typ srflx /.test(e.candidate?.candidate??``)&&(n=setTimeout(r,300))})})}var qb=class{id;onMessage=null;onPeer=null;links=new Map;closed=!1;constructor(e){this.id=e}attach(e,t,n){n.binaryType=`arraybuffer`;let r=()=>{this.closed||this.links.has(e)||(this.links.set(e,{pc:t,ch:n}),this.onPeer?.(e,!0))};n.onopen=r,n.readyState===`open`&&r(),n.onmessage=t=>{t.data instanceof ArrayBuffer&&this.onMessage?.(e,new Uint8Array(t.data))},n.onclose=()=>this.drop(e),t.onconnectionstatechange=()=>{(t.connectionState===`failed`||t.connectionState===`closed`)&&this.drop(e)}}drop(e){let t=this.links.get(e);t&&(this.links.delete(e),t.ch.close(),t.pc.close(),this.onPeer?.(e,!1))}get connected(){return this.links.size}send(e){for(let t of this.links.values())t.ch.readyState===`open`&&t.ch.send(e)}close(){if(!this.closed){this.closed=!0;for(let e of[...this.links.keys()])this.drop(e)}}},Jb=class extends qb{offers=new Map;async invite(){let e=new RTCPeerConnection({iceServers:Lb}),t=e.createDataChannel(`rubblestorm`,{ordered:!0}),n=Fb();await e.setLocalDescription(await e.createOffer()),await Kb(e),this.offers.set(n,{pc:e,ch:t});for(let[e,t]of this.offers){if(this.offers.size<=4)break;t.pc.close(),this.offers.delete(e)}return Ub({t:`offer`,peer:this.id,offer:n,sdp:e.localDescription.sdp})}async accept(e){let t=await Wb(e);if(!t)return Gb(e)>=0&&Gb(e)!==5?`THAT CODE IS FROM ANOTHER VERSION`:`THAT IS NOT AN ANSWER CODE`;if(t.t!==`answer`)return`THAT IS AN INVITE CODE: SEND IT TO THE GUEST`;let n=this.offers.get(t.offer);return n?(this.offers.delete(t.offer),await n.pc.setRemoteDescription({type:`answer`,sdp:t.sdp}),this.attach(t.peer,n.pc,n.ch),``):`THAT ANSWER IS FOR AN OLD INVITE`}close(){for(let e of this.offers.values())e.pc.close();this.offers.clear(),super.close()}},Yb=class extends qb{host=``;async answer(e){let t=await Wb(e);if(!t)return Gb(e)>=0&&Gb(e)!==5?`!THAT CODE IS FROM ANOTHER VERSION`:`!THAT IS NOT AN INVITE CODE`;if(t.t!==`offer`)return`!THAT IS AN ANSWER CODE: IT GOES TO THE HOST`;let n=new RTCPeerConnection({iceServers:Lb});return this.host=t.peer,n.ondatachannel=e=>this.attach(t.peer,n,e.channel),await n.setRemoteDescription({type:`offer`,sdp:t.sdp}),await n.setLocalDescription(await n.createAnswer()),await Kb(n),Ub({t:`answer`,peer:this.id,offer:t.offer,sdp:n.localDescription.sdp})}},Xb=300,Zb=`LOOKING FOR A HOST IN THIS BROWSER`,Qb=8,$b=ir*1e3,ex=1e3,tx=class{screen=new Zc;session=null;ended=``;onGame=()=>void 0;onEnd=()=>void 0;controls=null;settings=()=>sb;onStepped=()=>void 0;rtcHost=null;invite=``;answer=``;note=``;copied=``;hadGame=!1;quiet=!1;local=null;progressAt=0;bgClock=0;bgTimer=0;busy=!1;constructor(){window.addEventListener(`paste`,e=>{if(!this.screen.open)return;let t=e.clipboardData?.getData(`text`)??``;t&&(e.preventDefault(),this.pasted(t))}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.pump()})}get inSession(){return!!this.session&&this.session.state!==`ended`}get stepping(){return this.session?.state===`running`}get active(){let e=this.session;return!!e&&e.state===`running`&&!!e.game&&!!e.me}get isHost(){return this.inSession&&this.session.isHost}get isGuest(){return this.active&&!this.session.isHost}step(e,t){this.local=e;let n=this.session?this.session.advance(e,t):!1;return n&&(this.progressAt=this.bgClock=performance.now()),n}newArena(e){this.active&&this.session.isHost&&this.session.start(e)}menuBots(e,t){return this.active&&this.session.isHost?t??e:e}setSkill(e){this.session?.isHost&&this.session.setSkill(e)}get status(){let e=this.session;return!this.inSession||!e?``:e.isHost?`ONLINE HOST ${e.cfg?e.gone.filter(e=>!e).length:e.lobby.length}P`:e.me?`ONLINE P${e.slot+1}`:`ONLINE: JOINING`}waitText(e){let t=this.session;return!this.stepping||!t||e-this.progressAt<Xb?``:`WAITING FOR ${t.waiting.length?t.waiting.join(` `):`THE HOST`}`}get menuValue(){let e=this.session;return!this.inSession||!e?`OFF`:e.isHost?`HOST ${e.lobby.length}P`:e.me?`P${e.slot+1}`:`JOINING`}run(e){e&&e!==`nav`&&(e===`back`?this.screen.hide():e===`host`?this.host():e===`join`?this.joinHere():e===`start`?this.start():e===`invite`?this.copy(`invite`,this.invite):e===`answer`?this.copy(`answer`,this.answer):e===`paste`?this.readClipboard():e===`leave`&&this.leave())}start(){let e=this.session;e?.isHost&&e.state!==`ended`&&e.start(this.settings())}host(){this.leave(!0);let e=Fb();this.rtcHost=new Jb(e),this.begin(new Ab(new jb(e,[new Ib(e),this.rtcHost]),`host`,{name:`HOST`})),this.note=`OTHER TABS CAN JOIN NOW`,this.makeInvite()}joinHere(){this.leave(!0),this.begin(new Ab(new Ib,`guest`,{name:`TAB`})),this.note=Zb}async pasted(e){let t=e.trim();if(t&&!this.busy){this.busy=!0;try{if(this.session?.isHost&&this.rtcHost&&this.inSession){let e=await this.rtcHost.accept(t);this.note=e||`ANSWER TAKEN: CONNECTING`,e||this.makeInvite();return}if(this.active){this.note=`LEAVE THIS GAME FIRST`;return}let e=new Yb(Fb());this.note=`READING THE INVITE`;let n=await e.answer(t);if(n.startsWith(`!`)){e.close(),this.note=n.slice(1);return}this.leave(!0),this.answer=n,this.copied=``,this.begin(new Ab(e,`guest`,{name:`GUEST`})),this.note=`NOW COPY YOUR ANSWER AND SEND IT BACK`}finally{this.busy=!1}}}leave(e=!1){let t=this.session;t&&(this.quiet=e,t.state===`ended`?t.transport.close():t.leave(),this.quiet=!1,this.session=null,this.rtcHost=null,this.invite=this.answer=``,e||(this.note=``))}refresh(){let e=this.session,t=this.screen,n=[],r;if(!this.inSession||!e)n.push(this.note||this.ended||`PLAY WITH UP TO FOUR PEOPLE`),n.push(`TWO TABS OF THIS BROWSER: HOST IN ONE,`),n.push(`JOIN IN THE OTHER. ANOTHER DEVICE: HOST,`),n.push(`THEN SWAP CODES WITH IT (COPY AND PASTE).`),r=[{id:`host`,label:`HOST A GAME`},{id:`join`,label:`JOIN A TAB OF THIS BROWSER`},{id:`paste`,label:`PASTE AN INVITE CODE`},{id:`back`,label:`BACK`}];else if(e.isHost){let t=!!e.cfg,i=e.mathMismatch;n.push(this.note||(i.length?`${i.join(` `)}: OTHER BROWSER MATH, MAY GO OUT OF SYNC`:t?`NEW ARENA ALSO LETS NEW PLAYERS IN`:`PRESS START WHEN EVERYONE IS IN`)),n.push(`PLAYERS: ${e.lobby.map((e,t)=>`P${t+1} ${e.name}`).join(`, `)}`),n.push(`ANOTHER DEVICE: COPY THE INVITE, SEND IT,`),n.push(`THEN PASTE THE ANSWER THEY SEND BACK.`),r=[{id:`start`,label:t?`NEW ARENA FOR ALL`:`START`,value:`${Math.min(4,e.lobby.length)}P`},{id:`invite`,label:`COPY INVITE CODE`,value:this.copied===`invite`?`COPIED`:this.invite?``:`...`},{id:`paste`,label:`PASTE ANSWER CODE`},{id:`leave`,label:`END THE GAME`},{id:`back`,label:`BACK`}]}else{if(e.me)n.push(this.note||`YOU ARE P${e.slot+1}`),n.push(`THE HOST PICKS THE ARENA AND THE BOTS.`);else{e.hostId&&this.note===Zb&&(this.note=``);let t=e.mathMismatch;n.push(this.note||(t.length?`${t.join(` `)}: OTHER BROWSER MATH, MAY GO OUT OF SYNC`:e.hostId?`CONNECTED: WAITING FOR THE HOST TO START`:Zb)),n.push(e.hostId?`THE GAME STARTS WHEN THE HOST SAYS SO.`:this.answer?`THE HOST STILL NEEDS YOUR ANSWER CODE.`:`NO HOST YET IN THIS BROWSER.`)}e.lobby.length&&n.push(`PLAYERS: ${e.lobby.map((e,t)=>`P${t+1} ${e.name}`).join(`, `)}`),r=[],this.answer&&r.push({id:`answer`,label:`COPY ANSWER CODE`,value:this.copied===`answer`?`COPIED`:``}),e.me||r.push({id:`paste`,label:`PASTE AN INVITE CODE`}),r.push({id:`leave`,label:`LEAVE`},{id:`back`,label:`BACK`})}t.title=e?.isHost&&this.inSession?`HOSTING`:`PLAY ONLINE`,t.lines=n,t.setRows(r)}begin(e){this.session=e,this.progressAt=performance.now(),this.ended=``,this.hadGame=!1,this.copied=``,e.onGame=t=>{t&&e.me&&e.cfg?(this.hadGame=!0,this.note=``,this.onGame(t,e.me,e.cfg)):this.note=`THE GAME IS FULL: WAIT FOR THE NEXT ARENA`},e.onEnd=t=>{this.ended=t;let n=this.hadGame;this.hadGame=!1,setTimeout(()=>e.transport.close(),500),this.session===e&&e.state===`ended`&&(this.session=null,this.rtcHost=null,this.invite=this.answer=``,this.copied=``),this.quiet||this.onEnd(t,n)};let t=e.transport,n=t.onMessage;t.onMessage=(e,t)=>{n?.(e,t),this.pump()};let r=t.onPeer;t.onPeer=(e,t)=>{r?.(e,t),this.pump()}}pump(){let e=this.controls?.()??this.local;if(!document.hidden||!this.stepping||!e)return;let t=performance.now();this.bgClock=Math.max(this.bgClock,t-ex);let n=!1;for(let r=0;r<Qb&&this.bgClock+$b<=t;r++){if(!this.session?.advance(e,!0)){n=!0;break}this.bgClock+=$b,this.progressAt=t,this.onStepped()}!n&&!this.bgTimer&&(this.bgTimer=window.setTimeout(()=>{this.bgTimer=0,this.pump()},Math.max(0,this.bgClock+$b-t)))}async makeInvite(){let e=this.rtcHost;if(e){this.invite=``;try{let t=await e.invite();this.rtcHost===e&&(this.invite=t)}catch{this.rtcHost===e&&(this.note=`THIS BROWSER CANNOT MAKE INVITE CODES`)}}}copy(e,t){t?Py(t).then(t=>{this.copied=t?e:``,this.note=t?e===`invite`?`INVITE COPIED: SEND IT TO THE GUEST`:`ANSWER COPIED: SEND IT TO THE HOST`:`COPY FAILED`}):this.note=e===`invite`?`THE INVITE IS NOT READY YET`:`NOTHING TO COPY YET`}readClipboard(){let e=navigator.clipboard?.readText?.bind(navigator.clipboard);e?e().then(e=>{e.trim()?this.pasted(e):this.note=`THE CLIPBOARD IS EMPTY`},()=>{this.note=`PRESS CTRL+V TO PASTE`}):this.note=`PRESS CTRL+V TO PASTE`}},nx=document.getElementById(`game`),rx=new URLSearchParams(location.search),ix=Number(rx.get(`seed`))||Date.now()%1e6,X=new vr(ix),Z=X.addPlayer();X.autoPlayer=rx.has(`autoplay`)||rx.has(`showcase`),X.showcase=rx.has(`showcase`);var ax=new Lv(nx),ox=new Ol,sx=new c,Q={mode:rx.has(`play`)?`play`:`title`,mouseX:0,mouseY:0,fps:60,showHelp:!0,message:``,messageT:0,me:Z},cx=Z.x,lx=Z.y-30,ux=new ey;Q.juice=ux;var dx=new Dc;Q.touch=dx,Q.coarse=window.matchMedia?.(`(pointer: coarse)`).matches??!1;var fx=new Vc;Q.menu=fx;var px=new gy,mx=!1,$=new tx;Q.net={screen:$.screen,status:``,wait:``,active:!1};var hx=()=>Math.min(2,window.devicePixelRatio||1)/ax.scale;function gx(){dx.active&&(dx.active=!1,dx.reset(),nS())}function _x(){dx.active||(dx.active=!0,Q.showHelp=!1,nS())}var vx=()=>!!document.fullscreenEnabled,yx=!1;function bx(){let e=document.documentElement,t=()=>{screen.orientation?.lock?.(`landscape`).catch(()=>void 0)};document.fullscreenElement?t():e.requestFullscreen?e.requestFullscreen({navigationUI:`hide`}).then(t,()=>void 0):e.webkitRequestFullscreen?.()}var xx={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},Sx=yy(xx.get(`rubblestorm.progress`));X.setMode(Bt(rx.get(`mode`)??xx.get(`rubblestorm.mode`)));var Cx=[1,.5,0];ux.shakeScale=Number(xx.get(`rubblestorm.shake`)??`1`),Cx.includes(ux.shakeScale)||(ux.shakeScale=1);var wx=e=>e===null||e.trim()===``?NaN:Number(e),Tx=Number(xx.get(`rubblestorm.look`)??`-1`);(!Number.isInteger(Tx)||Tx<-1||Tx>=te.length)&&(Tx=-1);var Ex=Ny(rx,ix,ky(new Date));Ex?X.load(ix,void 0,T(Ex)):Tx>=0&&X.load(ix,Tx);var Dx=e=>Number.isInteger(e)&&e>=0&&e<=5?e:null,Ox=Dx(wx(rx.get(`bots`)))??Dx(wx(xx.get(`rubblestorm.bots`))),kx=e=>e===0?`BOTS OFF - SANDBOX`:`${e} BOT${e>1?`S`:``}`;function Ax(){let e=X.autoPlayer&&Ox===null?3:Cy(Sx.xp,Ox);return e!==X.botCount&&(cn(X),X.setBots(e),!0)}function jx(e){ux.rankUp(_y[e].name);let t=X.autoPlayer&&Ox===null?3:Cy(Sx.xp,Ox);t!==X.botCount&&iS(`NEXT ROUND: ${kx(t)}`)}function Mx(e){if($.active){if(!aS())return;$.setSkill(Gt(e)),xx.set(`rubblestorm.botSkill`,String(Gt(e))),iS(`BOT SKILL ${Wt[Gt(e)].name}`)}else X.botSkill=Gt(e),xx.set(`rubblestorm.botSkill`,String(X.botSkill)),iS(`BOT SKILL ${Wt[X.botSkill].name}`)}var Nx=()=>Mx((X.botSkill+1)%Wt.length);X.botSkill=Gt(wx(xx.get(`rubblestorm.botSkill`))),Ax();var Px=Dr(Sx.tutorialDone),Fx=new s,Ix=[{name:`ON`,level:1},{name:`LOW`,level:.45},{name:`OFF`,level:0}],Lx=Number(xx.get(`rubblestorm.music`)??`0`);Ix[Lx]||(Lx=0),Fx.setLevel(Ix[Lx].level);var Rx=0,zx=X.autoPlayer,Bx=()=>xx.set(`rubblestorm.progress`,JSON.stringify(Sx)),Vx=()=>X.mode.waves?Sx.bestWave[Dy(X.mode.id,X.arena.seed,Ex)]??0:Ty(Sx,X.mode.id,X.arena.seed,Ex);function Hx(){Q.meta={score:Z.score+Z.comboPts,best:Vx(),rank:_y[by(Sx.xp)].name,rankP:xy(Sx.xp),xp:Sx.xp,daily:!!Ex}}function Ux(){let e=Z.comboPts;if($.active||X.bankCombo(Z),e>0&&!zx){let t=Sy(Sx,e);t>=0&&jx(t)}Bx()}window.addEventListener(`beforeunload`,Ux);var Wx=``;function Gx(){let e=Vx(),t=X.mode.waves,n=!zx&&(t?Oy(Sx,X.mode.id,X.arena.seed,X.waves.wave,Ex):Ey(Sx,X.arena.seed,Z.score,Ex,X.mode.id));Bx(),Q.results=sl(e,n,Ex);let r=Ay(location.origin+location.pathname,X.arena.seed,Ex,X.botCount,X.mode.id);Wx=t?`${My(X.waves.wave,Dt(X,0),X.arena.seed,Ex)} ${r}`:`${jy(Z.score,X.arena.seed,Ex)} ${r}`,dx.reset(),DS=OS=!1,sx.play(n?`best`:`ui`,0,0,1)}function Kx(e,t=!1){if(e===`again`)rS(X.arena.seed,Ex);else if(e===`new`)uS();else if(e===`daily`)pS();else{let e=Q.results;e&&qx.now(Wx,e,t).then(n=>n?ll(e,`COPIED`):t?ll(e,`KEY/TAP TO COPY`,Jx):ll(e,`COPY FAILED`))}}var qx=new Ly,Jx=1e6;function Yx(){let e=Q.results,t=qx.retry(e);t&&e&&t.then(t=>ll(e,t?`COPIED`:`COPY FAILED`))}var Xx=0;function Zx(){let e=X.round,t=Math.ceil(e.timeLeft);e.phase===`running`&&!e.hold&&t<=10&&t!==Xx&&sx.play(`ui`,0,0,.8,1+(10-t)*.04),Xx=t}function Qx(){let e=X.arena.ground,t=0;for(let n=0;n<e.length;n++)t+=e[n];ax.setBiome(X.arena.biome,Wv(X.arena.biome,X.arena.seed),t/e.length,!!Rv.bg[X.arena.biome.art])}var $x=-1,eS=-1,tS=0;function nS(){if($x=window.innerWidth,eS=window.innerHeight,$x<2||eS<2)return;nx.style.width=`${$x}px`,nx.style.height=`${eS}px`;let{vw:e,vh:t}=ax.fit($x,eS,Math.min(2,window.devicePixelRatio||1),dx.active||Q.coarse?270:360,tS);ox.resize(e,t),ax.bindComposer(ox)}function rS(e,t=null){$.active?aS()&&$.newArena(oS(e,t)):(Ux(),zx=X.autoPlayer,Ex=t,cn(X),X.load(e,t||Tx<0?void 0:Tx,t?T(t):S),Ax(),Q.results=void 0,Qx(),cx=Z.x,lx=Z.y-30,iS(`${X.arena.biome.name.toUpperCase()}  -  SEED ${e}`))}function iS(e,t=2.5){Q.message=e,Q.messageT=t}function aS(){return!$.isGuest||(iS(`THE HOST PICKS THE ARENA, MODE AND BOTS`),!1)}function oS(e,t,n=X.mode.id){return{seed:e,biome:t||Tx<0?-1:Tx,twist:t?T(t).id:S.id,mode:n,bots:Ox??X.botCount,skill:X.botSkill,daily:t}}$.settings=()=>oS(X.arena.seed,Ex),$.controls=()=>Z.input,$.onStepped=()=>{$.active&&(zx||WS(),Q.mode===`play`&&X.round.phase===`over`&&!Q.results&&Gx())};var sS=!1;$.onGame=(e,t,n)=>{sS&&X.round.phase===`over`&&!Q.results&&Gx(),Ux(),zx=!1,X=e,sS=!0,Z=t,Q.me=t,Ex=n.daily,Q.results=void 0,Q.mode===`title`&&(Q.mode=`play`),HS=!1,bS(),Qx(),cx=Z.x,lx=Z.y-30,iS(`ONLINE: YOU ARE P${$.session.slot+1}  -  ${X.arena.biome.name.toUpperCase()}`),n.daily&&X.log(mS())},$.onEnd=(e,t)=>{t&&cS(X.arena.seed),iS(e,6)};function cS(e){Ux(),sS=!1,X=new vr(e),Z=X.addPlayer(),Q.me=Z,X.setMode(Bt(xx.get(`rubblestorm.mode`))),X.botSkill=Gt(wx(xx.get(`rubblestorm.botSkill`))),rS(e,null)}function lS(e){iS(e),X.log(e)}function uS(){rS(Math.floor(Math.random()*1e6))}function dS(e){let t=Bt(e);if(t===X.mode)return;if($.active){if(!aS())return;xx.set(`rubblestorm.mode`,t.id),$.newArena(oS(X.arena.seed,null,t.id)),iS(`MODE: ${t.name}`);return}X.setMode(t),xx.set(`rubblestorm.mode`,t.id),cn(X);let n=X.botCount;X.setBots(0),X.setBots(n),rS(X.arena.seed),iS(`MODE: ${t.name}`)}function fS(){dS(zt[(zt.indexOf(X.mode)+1)%zt.length].id)}function pS(){if(!aS())return;let e=ky(new Date);rS(e.seed,e.key),$.active||(iS(`DAILY ARENA ${e.key}`),X.log(mS()))}function mS(){let e=w(X.twist,X.arena.seed,X.mode.roster.length);return`TWIST: ${e>=0?`${X.twist.name}: ${Ke[X.mode.roster[e]].name.toUpperCase()}`:X.twist.name}`}function hS(){Tx=Tx+1>=te.length?-1:Tx+1,xx.set(`rubblestorm.look`,String(Tx)),lS(`NEXT LOOK: ${Tx<0?`RANDOM`:te[Tx].name.toUpperCase()}`)}function gS(){Lx=(Lx+1)%Ix.length,Fx.setLevel(Ix[Lx].level),xx.set(`rubblestorm.music`,String(Lx)),lS(`MUSIC ${Ix[Lx].name}`)}function _S(){if($.active){if(!aS())return;Ox=((Ox??X.botCount)+1)%6,xx.set(`rubblestorm.bots`,String(Ox)),iS(`NEXT ARENA: ${kx(Ox)}`)}else Ox=(X.botCount+1)%6,xx.set(`rubblestorm.bots`,String(Ox)),Ax(),iS(kx(Ox))}function vS(){ux.shakeScale=Cx[(Cx.indexOf(ux.shakeScale)+1)%Cx.length],xx.set(`rubblestorm.shake`,String(ux.shakeScale)),iS(ux.shakeScale===0?`SCREEN SHAKE OFF`:`SCREEN SHAKE ${ux.shakeScale*100}%`)}function yS(){Q.mode!==`play`||Q.results&&!$.active||(Q.mode=`paused`,fx.show(),dx.reset(),DS=OS=!1)}function bS(){Q.mode===`paused`&&(Q.mode=`play`),fx.hide(),$.screen.hide()}function xS(){Q.mode===`play`?yS():Q.mode===`paused`&&bS()}function SS(e){e&&e!==`nav`&&(sx.play(`ui`,0,0,1),e===`open`?yS():e===`online`?($.refresh(),$.screen.show()):e===`mode`?fS():e===`bots`?_S():e===`skill`?Nx():e===`look`?hS():e===`music`?gS():e===`shake`?vS():(bS(),e===`new`?uS():e===`daily`&&pS()))}function CS(e){let t=$.screen.key(e);return t?(t!==`nav`&&sx.play(`ui`,0,0,1),$.run(t),!0):!1}function wS(){fx.place(ox.vw,ox.vh,hx(),dx.active,dx.showFull),fx.title=$.active?`MENU`:`PAUSED`,$.screen.place(ox.vw,ox.vh,hx()),fx.open!==(Q.mode===`paused`)&&(fx.open?fx.hide():fx.show());let e=by(Sx.xp);fx.open||$.screen.hide(),$.screen.open&&$.refresh(),fx.info={mode:X.mode.name,online:$.menuValue,bots:$.menuBots(X.botCount,Ox),skill:Wt[X.botSkill].name,look:Tx<0?`RANDOM`:te[Tx].name.toUpperCase(),music:Ix[Lx].name,shake:ux.shakeScale,rank:_y[e].name,next:_y[e+1]?.name??null,rankP:xy(Sx.xp)}}var TS=new Set,ES=new Set([` `,`w`,`a`,`s`,`d`,`q`,`e`,`arrowleft`,`arrowright`,`arrowup`,`arrowdown`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`]),DS=!1,OS=!1,kS=0,AS=0;window.addEventListener(`keydown`,e=>{if(e.repeat)return;gx();let t=e.key.toLowerCase();if(fx.open||TS.add(t),sx.unlock(),Iy(e.key)&&Yx(),$.screen.open){if(CS(t)){e.preventDefault();return}}else if(fx.open){let n=fx.key(t);if(n){SS(n),e.preventDefault();return}}else{let n=Q.results&&Q.mode===`play`?pl(Q.results,t):null;n&&Kx(n),Q.results&&(t===`tab`||t===`enter`)&&e.preventDefault(),Q.mode===`play`&&!Q.results&&ES.has(t)&&px.useKbm(iS,NS()),(t===` `||t===`w`||t===`arrowup`)&&(Z.input.jumpPressed=!0),t>=`1`&&t<=`9`&&(Z.input.select=Number(t)-1),t===`q`&&(Z.input.cycle=-1),t===`e`&&(Z.input.cycle=1)}t===`r`&&Q.mode!==`title`&&uS(),t===`b`&&Q.mode!==`title`&&_S(),t===`n`&&Q.mode!==`title`&&Nx(),t===`h`&&(Q.showHelp=!Q.showHelp),t===`o`&&Q.mode!==`title`&&$.inSession&&!X.autoPlayer?iS(`NO AUTOPILOT ONLINE`):t===`o`&&Q.mode!==`title`&&(X.autoPlayer=!X.autoPlayer,Z.input.fire=Z.input.left=Z.input.right=Z.input.jump=!1,iS(X.autoPlayer?`AUTOPILOT ON`:`AUTOPILOT OFF`)),t===`k`&&vS(),t===`t`&&Q.mode!==`title`&&pS(),t===`g`&&Q.mode!==`title`&&fS(),t===`l`&&hS(),t===`m`&&gS(),(t===`escape`||t===`p`)&&xS(),(t===` `||t.startsWith(`arrow`))&&e.preventDefault()}),window.addEventListener(`keyup`,e=>TS.delete(e.key.toLowerCase())),window.addEventListener(`blur`,()=>{TS.clear(),dx.reset(),DS=OS=!1}),nx.addEventListener(`contextmenu`,e=>e.preventDefault()),nx.addEventListener(`pointermove`,e=>{if(e.pointerType===`touch`){let t=hx();dx.moveTo(e.pointerId,e.clientX*t,e.clientY*t)}else{if(e.pointerType===`mouse`&&(e.movementX!==0||e.movementY!==0)&&gx(),kS=e.clientX,AS=e.clientY,e.pointerType===`mouse`&&(e.button===0||e.button===2)){let t=e.button===2,n=!!(e.buttons&(t?2:1))&&Q.mode===`play`&&!Q.results&&!fx.open;t?(n&&!OS&&(Z.input.altPressed=!0),OS=n):(n&&!DS&&(Z.input.firePressed=!0),DS=n)}fx.hover(e.clientX*hx(),e.clientY*hx()),$.screen.hover(e.clientX*hx(),e.clientY*hx())}});var jS=e=>{if(e.type===`pointerup`&&sx.unlock(),e.type===`pointerup`&&!Q.rotate){let t=$.screen.up(e.pointerId,e.clientX*hx(),e.clientY*hx());t&&sx.play(`ui`,0,0,1),$.run(t),SS(fx.up(e.pointerId,e.clientX*hx(),e.clientY*hx()))}else fx.cancel(e.pointerId),$.screen.cancel(e.pointerId);if(e.pointerType!==`touch`)return;let t=dx.up(e.pointerId);e.type===`pointerup`&&(t||!yx)&&vx()&&!document.fullscreenElement&&(yx=!0,bx())};nx.addEventListener(`pointerup`,jS),nx.addEventListener(`pointercancel`,jS),nx.addEventListener(`pointerdown`,e=>{if(sx.unlock(),e.pointerType===`mouse`&&Yx(),Q.results&&Q.mode===`play`){e.preventDefault();let t=dx.active;if(e.pointerType===`touch`?_x():gx(),kS=e.clientX,AS=e.clientY,Q.rotate||t!==dx.active||e.button!==0)return;let n=e.clientX*hx(),r=e.clientY*hx();if($.active&&fx.down(e.pointerId,n,r))return;dl(Q.results,n,r)}else if(e.pointerType===`touch`){if(e.preventDefault(),_x(),Q.mode===`title`){sx.playOnStart(`ui`),Q.mode=`play`;return}let t=hx();if(Q.rotate||$.screen.down(e.pointerId,e.clientX*t,e.clientY*t)||fx.down(e.pointerId,e.clientX*t,e.clientY*t))return;dx.down(e.pointerId,e.clientX*t,e.clientY*t)}else gx(),kS=e.clientX,AS=e.clientY,Q.mode===`title`?(Q.mode=`play`,px.useKbm(iS,NS()),sx.playOnStart(`ui`)):fx.open?e.button===0&&!$.screen.down(e.pointerId,e.clientX*hx(),e.clientY*hx())&&fx.down(e.pointerId,e.clientX*hx(),e.clientY*hx()):(px.useKbm(iS,NS()),e.button===2?(OS=!0,Z.input.altPressed=!0):(DS=!0,Z.input.firePressed=!0))}),window.addEventListener(`pointerup`,e=>{e.pointerType!==`touch`&&(DS=OS=!1)}),window.addEventListener(`pointerup`,e=>{if(!Q.results)return;e.pointerType!==`mouse`&&Yx();let t=fl(Q.results,e.clientX*hx(),e.clientY*hx());t&&!Q.rotate&&Kx(t)}),nx.addEventListener(`wheel`,e=>{fx.open||(Z.input.cycle=e.deltaY>0?1:-1)},{passive:!0});function MS(){let e=ax.scale/Math.min(2,window.devicePixelRatio||1);if(Q.mouseX=kS/e,Q.mouseY=AS/e,X.autoPlayer)return;let t=ox.view,n=Z.input;dx.active?(dx.layout(ox.vw,ox.vh),dx.apply(n,Z.sx,Z.sy,t.ox+t.fx,t.oy+t.fy,Z.cooldown)):px.p1Pad>=0?(Q.mouseX=n.aimX-(t.ox+t.fx),Q.mouseY=n.aimY-(t.oy+t.fy)):(n.left=TS.has(`a`)||TS.has(`arrowleft`),n.right=TS.has(`d`)||TS.has(`arrowright`),n.jump=TS.has(` `)||TS.has(`w`)||TS.has(`arrowup`),n.down=TS.has(`s`)||TS.has(`arrowdown`),n.fire=DS,n.alt=OS,n.aimX=t.ox+t.fx+Q.mouseX,n.aimY=t.oy+t.fy+Q.mouseY)}function NS(){return{mode:Q.mode,results:!!Q.results,autoP1:X.autoPlayer,p1:Z,shared:$.active,start:()=>{Q.mode===`title`&&(Q.mode=`play`,mx=!0,sx.unlock(),sx.playOnStart(`ui`))},openMenu:yS,menuKey:e=>{$.screen.open?CS(e):SS(fx.key(e))},resultsKey:e=>{let t=Q.results?pl(Q.results,e):null;t&&Kx(t,!0)},notice:iS}}function PS(e){if(dx.active||Q.rotate){px.release(X,Z);return}let t;try{t=navigator.getGamepads?.()??[]}catch{return}px.poll(X,t,e,NS())}function FS(){if($.active||X.humans.length<2)return IS(0),null;let e=X.humans.filter(e=>e.alive),t=Mr((e.length>0?e:X.humans).map(e=>({x:e.cx,y:e.cy})),ax.bufW,ax.bufH,ax.baseScale,jr(ax.bufW,ax.bufH,ax.baseScale),ax.scale);return IS(t.scale===ax.baseScale?0:t.scale),t}function IS(e){e!==tS&&(tS=e,nS())}function LS(e){let t=X.world,n,r;if(Q.mode===`title`)n=t.W/2+Math.sin(X.time*.07)*(t.W/2-ox.vw/2),r=X.arena.ground[Math.floor(Math.max(0,Math.min(t.W-1,n)))]-ox.vh*.18;else{n=Z.x+(Z.input.aimX-Z.x)*.22,r=Z.y-20+(Z.input.aimY-Z.y)*.18;let e=FS();e&&(n=e.x,r=e.y)}let i=1-Math.exp(-e*(Q.mode===`title`?1.5:7));cx+=(n-cx)*i,lx+=(r-lx)*i;let a=ox.vw/2,o=ox.vh/2;cx=Math.max(a,Math.min(t.W-a,cx)),lx=Math.max(-120+o,Math.min(t.H-o,lx)),ox.vw>=t.W&&(cx=t.W/2)}var RS=performance.now(),zS=0,BS=0,VS=0,HS=Q.mode===`title`;function US(e){let t=Math.min(.1,(e-RS)/1e3);if(RS=e,zS+=t,BS++,VS+=t,VS>=.5&&(Q.fps=Math.round(BS/VS),BS=0,VS=0),(window.innerWidth!==$x||window.innerHeight!==eS)&&nS(),ox.vw===0){requestAnimationFrame(US);return}if($.active||(X.round.hold=Q.mode===`title`||X.showcase),HS&&Q.mode!==`title`&&(HS=!1,rS(X.arena.seed,Ex)),Q.results&&cl(Q.results,t),PS(t),MS(),Q.mode===`paused`)for(let e of X.humans){let t=e.input;t.jumpPressed=t.firePressed=t.altPressed=!1,t.select=-1,t.cycle=0}if(Q.mode===`title`)for(let e of X.humans)e.input.left=e.input.right=e.input.fire=e.input.jump=!1;let n=0;for(ux.hitstop>0&&!$.active&&(zS=0),Q.rotate=(dx.active||Q.coarse)&&window.innerHeight>window.innerWidth,dx.showFull=dx.active&&vx()&&!document.fullscreenElement,Q.rotate&&($.active||(zS=0),dx.reset());zS>=.016666666666666666&&n<4;){let e=!1;if($.stepping){if(e=$.step(Z.input,Q.mode!==`play`||!!Q.rotate),!e)break}else Q.mode!==`paused`&&(X.step(ir),e=!0);if(e){for(let e of X.sounds)sx.play(e.name,e.x-cx,Math.hypot(e.x-cx,e.y-lx),e.v);Q.mode===`play`&&X.autoPlayer&&(zx=!0),ux.xpOn=Q.mode===`play`&&!zx,ux.ingest(X,cx,lx,ox.vw,Z),!zx&&(Q.mode===`play`||$.active)&&WS(),Q.mode===`play`&&!X.autoPlayer&&Or(Px,X,.016666666666666666,Z)&&(Sx.tutorialDone=!0,Bx()),Zx(),Q.mode===`play`&&X.round.phase===`over`&&!Q.results&&Gx();for(let e of ux.sounds)sx.play(e.name,0,0,e.v,e.pitch)}zS-=ir,n++}n===4&&(zS=0),Q.messageT=Math.max(0,Q.messageT-t),ux.update(t),LS(t),Hx(),wS(),Q.net.status=$.status,Q.net.active=$.active,Q.net.wait=$.waitText(e),Q.autoplay=X.autoPlayer,Q.soundWaits=mx&&sx.waiting,Q.prompt=Q.mode===`play`&&!X.autoPlayer&&!Q.results?kr(Px,dx.active||!!Q.coarse,X.twist.jet):null,document.hidden||Fx.update(sx.bus(),Q.mode===`play`&&Z.comboT>0?(br(Z.chain)-1)/2:0);let r=ux.offset();ox.build(X,cx+r.x,lx+r.y,Q),ax.render(ox,X.time,ux.flash),requestAnimationFrame(US)}function WS(){let e=0;for(let t of X.events)t.t===`bank`&&t.by===Z.id?e+=t.points:t.t===`kill`&&t.by===Z.id?(e+=t.points,Sx.kills++):t.t===`callout`&&t.by===Z.id||t.t===`milestone`?e+=t.points:t.t===`destroy`&&t.by===Z.id&&(Sx.cells+=t.cells);if(e>0){let t=Sy(Sx,e);t>=0&&jx(t)}Rx+=ir,Rx>3&&(Rx=0,Bx())}window.addEventListener(`resize`,nS),document.addEventListener(`visibilitychange`,()=>{document.hidden&&Fx.stop()}),nS(),Qx(),Vv().then(Qx),Q.mode===`title`&&(Z.alive=!0),requestAnimationFrame(US),window.__rubble={get game(){return X},get player(){return Z},online:$,comp:ox,view:ax,ui:Q,cam:()=>[cx,lx],weapons:Ke.map(e=>e.name),start:()=>Q.mode=`play`,sfx:sx,juice:ux,newArena:rS,menu:fx,pads:px,zoom:()=>tS,actions:{randomArena:uS,startDaily:pS,setMode:dS,cycleMode:fS,cycleBots:_S,cycleShake:vS,setBotSkill:Mx,cycleBotSkill:Nx,cycleLook:hS,cycleMusic:gS,openMenu:yS,closeMenu:bS,togglePause:xS},setBotSkill:Mx,cycleBotSkill:Nx,tutorial:Px,progress:Sx,music:Fx,cycleLook:hS,cycleMusic:gS,startDaily:pS};