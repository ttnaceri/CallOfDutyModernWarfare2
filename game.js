
const $=id=>document.getElementById(id);
const LV=[
{n:"MISSION 1 — BREACH",b:"Hostile fighters hold the compound. Clear every one of them. Use crates for cover.",k:8,sky:0x8fb2c8,c:14},
{n:"MISSION 2 — NIGHT RAID",b:"Darkness, more guards, tighter cover. Stay moving and keep your health regenerating behind walls.",k:12,sky:0x070b16,c:22},
{n:"MISSION 3 — GHOST",b:"Silent sniper op. Enemies are unaware of you. Sniper, pistol and knife kills are silent; the M4 and grenades wake everyone nearby. Do not get spotted.",k:10,stealth:1,sky:0x3b4a5a,c:18},
{n:"MISSION 3 — FINAL STAND",b:"Commander Kaine and his guards are dug in at the last stronghold. Take him down to end the war.",k:9,boss:1,heli:1,sky:0x6b4a3a,c:26},
{n:"MISSION 5 · CLIFFHANGER",b:"A frozen mountain, a blizzard and a hostile camp. Clear the camp with your squad, then ride a snowmobile down the long road to the extraction chopper.",k:10,snow:1,sky:0xcfe3f2,c:10},
{n:"MISSION 6 · AIRCRAFT CARRIER",b:"Take off from the carrier in a fighter jet. Hold W to build speed, then pull the mouse up to climb. Fly to the red zone and drop your bombs with click or Space. Destroy every target.",k:0,jet:1,sky:0x9cc8ee,c:0},
{n:"MISSION 7 · DOOR GUNNER",b:"You are on the minigun of a helicopter orbiting the enemy base. Mow down every hostile below before they bring you down. Mouse aims, click fires, R reloads.",k:18,gun:1,sky:0xb8d4ea,c:10},
{n:"MISSION 8 · GUNSHIP STRIKE",b:"You are flying an attack helicopter. WASD flies, Space climbs, C descends, click fires the cannon, F launches rockets. Level the enemy compound and shoot down their helicopter.",k:18,gs:1,sky:0xb8d4ea,c:10},
{n:"MISSION 9 \u00b7 DRONE STRIKE",b:"You control a bomber drone over an enemy compound. Click drops a bomb, WASD flies, Space climbs, C descends. Destroy every hostile and vehicle.",k:0,x:"drone",sky:0xd9c9a6,c:0},
{n:"MISSION 10 \u00b7 RUNWAY RACE",b:"The traitor's plane is already taxiing. Drive the jeep down the road and catch it before it takes off. Enemy gun jeeps are chasing you.",k:0,x:"race",sky:0xe8d2a8,c:0},
{n:"MISSION 11 \u00b7 STORM FRONT",b:"Heavy rain, thunder and low visibility. Enemy armour is rolling in. Use your RPG on the vehicles and clear the area.",k:14,rain:1,sky:0x2a3238,c:18},
{n:"MISSION 12 \u00b7 SHIP BREAKER",b:"Fast-rope from the helicopter onto a cargo ship and clear the deck. When the last guard falls the ship starts to break apart: reach the chopper at the bow and jump for the ladder.",k:0,x:"ship",sky:0x9cc0de,c:0},
{n:"MISSION 13 \u00b7 HALO JUMP",b:"Jump from the aircraft at 3000 m. Steer to the green ring and open your parachute below 900 m (Space). Land inside the ring.",k:0,x:"sky",sky:0x7fb0dc,c:0},
{n:"MISSION 14 \u00b7 THE ONLY EASY DAY... WAS YESTERDAY",b:"Dawn raid on a fortified compound with your squad. Gun jeeps patrol the perimeter. Eliminate the marked commander and his men.",k:14,boss:1,easy:1,sky:0xd8b48a,c:24},
{n:"MISSION 15 \u00b7 OILRIG",b:"A silent assault on an oil platform. Suppressed weapons are equipped. Climb the stairs and clear the platform without being spotted.",k:0,x:"rig",stealth:1,sky:0x7fa0b8,c:0},
{n:"MISSION 16 \u00b7 BLACK RAVEN",b:"Your three snipers cover you. Kill three patrollers, move to the enemy sniper's nest and knife him, then take out the truck driver. Six soldiers will pour out; your snipers will cut them down.",k:0,x:"raven",stealth:1,sky:0xbfc9d4,c:0},
{n:"MISSION 17 \u00b7 GENERAL SHEPHERD",b:"Shepherd flees by boat, then by helicopter. Chase him down the river with James, survive the waterfall, hunt him on foot and end it. Press F when it counts.",k:0,x:"shep2",sky:0x6b5a4a,c:0}];
const R=new THREE.WebGLRenderer({antialias:true});R.setSize(innerWidth,innerHeight);R.setPixelRatio(Math.min(devicePixelRatio,2));document.body.appendChild(R.domElement);
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,.1,1500);S.add(C);
const HL=new THREE.HemisphereLight(0xffffff,0x334433,.9);S.add(HL);R.domElement.id="c3";
const sun=new THREE.DirectionalLight(0xffffff,.6);sun.position.set(20,40,10);S.add(sun);
const dark=new THREE.MeshLambertMaterial({color:0x151515});
// viewmodel
const gun=new THREE.Group();
const gb=new THREE.Mesh(new THREE.BoxGeometry(.08,.11,.6),dark);gb.position.set(0,0,0);
const gmag=new THREE.Mesh(new THREE.BoxGeometry(.06,.18,.09),dark);gmag.position.set(0,-.13,.08);
const gs=new THREE.Mesh(new THREE.BoxGeometry(.07,.12,.25),new THREE.MeshLambertMaterial({color:0x3a3326}));gs.position.set(0,-.02,.3);
const fl=new THREE.PointLight(0xffaa33,0,6);fl.position.set(0,0,-.5);
const scd=new THREE.Group(),sc8=new THREE.Group();scd.add(new THREE.Mesh(new THREE.BoxGeometry(.07,.07,.16),new THREE.MeshLambertMaterial({color:0x3b4650})));{const lz=new THREE.Mesh(new THREE.BoxGeometry(.055,.05,.01),new THREE.MeshBasicMaterial({color:0xff3333}));lz.position.z=-.085;scd.add(lz)}scd.position.set(0,.105,-.02);
const tube=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.5,14),new THREE.MeshLambertMaterial({color:0x2b3238}));tube.rotation.x=Math.PI/2;sc8.add(tube);{const l8=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.012,14),new THREE.MeshBasicMaterial({color:0x66aaff}));l8.rotation.x=Math.PI/2;l8.position.z=-.25;sc8.add(l8)}sc8.position.set(0,.135,0);
gun.add(gb,gmag,gs,fl,scd,sc8);gun.position.set(.25,-.22,-.5);C.add(gun);
const lzd=new THREE.Mesh(new THREE.SphereGeometry(.08,8,6),new THREE.MeshBasicMaterial({color:0xff2222}));lzd.visible=false;S.add(lzd);const lb=new THREE.Mesh(new THREE.BoxGeometry(.008,.008,40),new THREE.MeshBasicMaterial({color:0xff2222}));lb.position.set(0,.01,-20.3);lb.visible=false;gun.add(lb);
const knv=new THREE.Group();{const bl=new THREE.Mesh(new THREE.BoxGeometry(.025,.05,.3),new THREE.MeshLambertMaterial({color:0xc9d1d6})),hd=new THREE.Mesh(new THREE.BoxGeometry(.04,.05,.13),dark);bl.position.z=-.22;hd.position.z=-.02;knv.add(bl,hd)}knv.position.set(.22,-.22,-.45);knv.rotation.y=.2;knv.visible=false;C.add(knv);
const snw=new THREE.Points(new THREE.BufferGeometry().setAttribute("position",new THREE.BufferAttribute(new Float32Array(1200).map((v,i)=>i%3==0?rnd(-15,15):i%3==1?rnd(-9,9):rnd(-22,2)),3)),new THREE.PointsMaterial({color:0xffffff,size:.12}));C.add(snw);snw.visible=false;
let world,obs,mesh,en,P,lvl=0,state="menu",kills=0,total=0,locked=false,lockOK=false;
const keys={};let mouseDown=false,ads=false,nv=false,cur=0,score=0,gr=[],slow=false,heli=null,ch=null,pk=[],jp=null,streak=0,uav=0,ksq=[],slowU=0,sm=2,sup=false,fb=2,fr=[],escMode=false,tgt=null,MB=159,hls=[],rks=[],bmb=[],tgs=[],jet=null,J=null,visOn=false,cm=false,gm=0,SR=155;const A=[0,1,2,3,4,5,6,7].map(()=>({op:0,sup:0,grip:0,las:0,exp:0,pen:0,ext:0}));const OPT=[[0,1,2,3,4,5,6,"V","T"],[0,1],[0],[4,6,8,12,"V"],[0,1,2,3,"T"],[0],[0],[0]];A[0].op=1;A[1].op=1;A[3].op=2;A[4].op=1;const rk=()=>Math.floor(score/600);LV.forEach(l=>l.k=Math.round(l.k*2.2));LV[3].n="MISSION 4 — FINAL STAND";
const W=[{n:"M4A1",am:30,rs:120,mag:30,rate:.09,auto:1,d:14,h:42},{n:"M9 PISTOL",am:12,rs:60,mag:12,rate:.22,auto:0,d:22,h:66},{n:"COMBAT KNIFE",am:0,rs:0,mag:0,rate:.6,auto:0,d:0,h:0},{n:"M24 SNIPER",am:5,rs:25,mag:5,rate:1.1,auto:0,d:70,h:300},{n:"MP7 SMG",am:40,rs:160,mag:40,rate:.06,auto:1,d:9,h:27},{n:"SPAS-12",am:6,rs:30,mag:6,rate:.8,auto:0,d:9,h:18,pl:7},{n:"RPG-7",am:1,rs:4,mag:1,rate:1.5,auto:0,d:0,h:0},{n:"M134 MINIGUN",am:500,rs:1500,mag:500,rate:.03,auto:1,d:12,h:12}];
const RAD=["Overlord: Bravo Six, hostiles in the compound. Weapons free. Go loud.","Overlord: Night vision recommended, press N. Heavy guards ahead. Watch your six.","Overlord: Ghost protocol. Stay unseen. Sniper, pistol and knife are silent; the M4 will wake everyone.","Overlord: Kaine has an attack chopper up. Take it down, kill Kaine, then get out."];
RAD.push("Overlord: Cliffhanger. Blizzard conditions, hostiles in the camp. Clear it, Tom.","","","");LV[2].n="MISSION 3 · OVERWATCH";LV[2].b="You are on the sniper tower above the enemy camp. Price will call out each target. Take them down silently with the M24: one shot, one kill. Do not get spotted.";RAD[2]="Overlord: You're on overwatch, Tom. Price will call the targets. Weapons free on my mark. Don't wake the camp.";
function rnd(a,b){return a+Math.random()*(b-a)}
function build(){gm=0;SR=155;if(LV[lvl].x){startX(LV[lvl].x);return}if(LV[lvl].jet){startJet();return}if(escMode){escMode==2?startSnow():startEscape();return}
 if(world)S.remove(world);world=new THREE.Group();S.add(world);obs=[];mesh=[];en=[];
 const L=LV[lvl];S.background=new THREE.Color(L.sky);S.fog=new THREE.Fog(L.sky,20,L.snow?90:lvl==1?80:170);
 const g=new THREE.Mesh(new THREE.PlaneGeometry(340,340),new THREE.MeshLambertMaterial({color:L.snow?0xeef3f6:lvl==1?0x1c241a:lvl==2?0x4a3a30:0x5b6b4a}));
 g.rotation.x=-Math.PI/2;world.add(g);
 const wm=new THREE.MeshLambertMaterial({color:0x6b6b66});
 [[0,-161,324,1],[0,161,324,1],[-161,0,1,324],[161,0,1,324]].forEach(w=>box(w[0],w[1],w[2],w[3],5,wm));
 const cm=[0x7a5a32,0x4d5b3a,0x555a60].map(c=>new THREE.MeshLambertMaterial({color:c}));
 for(let i=0;i<L.c*7;i++){let x=rnd(-150,150),z=rnd(-150,150);if(Math.abs(x)<9&&z>142)continue;
  box(x,z,rnd(2,6),rnd(2,6),rnd(1.5,4),cm[i%3]);}
 if(L.boss)hill();// buildings
 for(let i=0;i<26;i++){const x=rnd(-145,145),z=rnd(-145,110);box(x,z,10,2,4,wm);box(x,z-8,10,2,4,wm);}
 W[0].am=30;W[0].rs=120;W[1].am=12;W[1].rs=60;W[3].am=5;W[3].rs=25;W[4].am=40;W[4].rs=160;W[5].am=6;W[5].rs=30;W[6].am=1;W[6].rs=4;W[7].am=500;W[7].rs=1500;if(lvl==2)A[3].sup=1;cur=0;gr=[];if(lvl==0)score=0;gb.scale.z=1;gb.position.z=0;gs.visible=true;gun.visible=true;
 P={x:0,z:154,y:0,vy:0,yaw:0,pitch:0,hp:100,am:30,rs:120,rl:0,ft:0,hurt:0,kick:0,gr:3,gt:0,kn:0,swing:0,sf:0,ln:0,lt:0,eh:1.6,sl:0,pr:0,veh:null,ev:0,nb:100,lc:0,sx:0,sz:0};
 total=L.k+(L.boss?1:0)+(L.heli?1:0)+(L.gs?1:0)+(L.stealth?2:0)+(lvl==1||lvl==3?1:0);kills=0;heli=null;ch=null;pk=[];jp=null;nvOff();streak=0;ksq=[];uav=0;sm=2;fb=2;tgt=null;MB=159;sub(RAD[lvl]);if(L.heli)mkHeli();if(L.stealth){mkHeli(-30,70,0);mkHeli(35,90,3)}if(!L.stealth)mkJeep();if(L.stealth){sw(3);tower()}mkIntel();mkBarrels();fr=[];if(!L.stealth)mkFriends(L.snow?"PRICE":0);if(L.snow)snowDeco();evSpawn();if(L.gun||L.gs)gunInit(L);if(lvl==1||lvl==3){spawn(false);const j=en[en.length-1];j.hp=160;j.s=1.35;j.jug=1;j.g.scale.setScalar(1.35);j.parts[0].material.color.setHex(0x333840)}
 for(let i=0;i<L.k;i++)spawn(false);
 if(L.boss)spawn(true);
 upd();
}
function box(x,z,w,d,h,m){
 const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,h/2,z);world.add(b);
 mesh.push(b);obs.push({x0:x-w/2,x1:x+w/2,z0:z-d/2,z1:z+d/2,h});
}
function blocked(x,z,r,y){y=y||0;
 if(Math.abs(x)>MB||Math.abs(z)>MB)return true;
 for(const o of obs)if(o.h>y+1&&x>o.x0-r&&x<o.x1+r&&z>o.z0-r&&z<o.z1+r)return true;return false}
function spawn(boss){
 let x,z,n=0;do{x=rnd(-SR,SR);z=rnd(-SR,SR*.77);n++}while((blocked(x,z,1)||Math.hypot(x-P.x,z-P.z)<(LV[lvl].stealth?40:25)||(LV[lvl].stealth&&Math.hypot(x-P.x,z-P.z)>125))&&n<80);
 const g=new THREE.Group(),s=boss?1.7:1;
 const m=new THREE.MeshLambertMaterial({color:boss?0x6a1414:0x3b4a2a});
 const body=new THREE.Mesh(new THREE.BoxGeometry(.7,1.1,.4),m);body.position.y=1.15;
 const head=new THREE.Mesh(new THREE.SphereGeometry(.22,10,8),new THREE.MeshLambertMaterial({color:0xd2a37c}));head.position.y=1.9;
 const legs=new THREE.Mesh(new THREE.BoxGeometry(.6,.6,.35),new THREE.MeshLambertMaterial({color:0x222222}));legs.position.y=.3;
 const gn=new THREE.Mesh(new THREE.BoxGeometry(.08,.1,.6),dark);gn.position.set(.3,1.3,-.35);
 g.add(body,head,legs,gn);g.scale.setScalar(s);g.position.set(x,0,z);world.add(g);
 const e={g,alert:LV[lvl].stealth?0:1,hp:boss?300:40,boss,t:0,dead:0,sd:rnd(0,6),parts:[body,head,legs],s};
 body.userData.e=head.userData.e=legs.userData.e=e;head.userData.h=1;en.push(e);if(LV[lvl].snow&&!boss&&Math.random()<.35)mountE(e);
}
// audio
let AC;function snd(f,d,v,t){try{AC=AC||new AudioContext();const o=AC.createOscillator(),g=AC.createGain();
 o.type=t||"square";o.frequency.value=f;g.gain.value=v;g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+d);
 o.connect(g);g.connect(AC.destination);o.start();o.stop(AC.currentTime+d)}catch(e){}}
function upd(){
 if(cm)custR();$("am").textContent=P.am;$("wn").textContent=W[cur].n+" · FRAG x"+P.gr+attS();$("rs").textContent=P.rs;
 $("hpb").style.width=Math.max(0,P.hp)+"%";
 $("obj").innerHTML="<b>"+LV[lvl].n+"</b><br>Hostiles down: "+kills+" / "+total+"<br>Score: "+score+" · RANK "+(rk()+1)+" · STREAK "+streak+(uav>0?" · UAV":"")+(P.ev>0?"<br><b>EXTRACT: "+Math.ceil(P.ev)+"s — reach the extraction chopper</b>":"")+(P.rl?"<br><b>RELOADING…</b>":"");
}
const rc=new THREE.Raycaster();
function shoot(){
 if(escMode==3){dropBomb();return}if(P.rl||P.ft>0||(P.veh&&cur!=1)||P.un)return;if(cur==2){knife();P.ft=.5;return}if(cur==6){if(P.am<=0){reload();return}P.am--;P.ft=1.5;rocket();upd();return}
 if(P.am<=0){reload();return}
 P.am--;P.ft=W[cur].rate;P.kick=cur?1.6:1;P.pitch+=(ads?.002:.004)*(A[cur].grip?.5:1)*(A[cur].sup==2?.7:1);if(A[cur].sup!=1)noise([40,25,0,70,40,45,60][cur]);if(W[cur].pl)for(let i=0;i<W[cur].pl;i++)pel(rnd(-.08,.08),rnd(-.08,.08),W[cur].d,W[cur].h);P.yaw+=rnd(-.002,.002);
 snd(rnd(110,150),.09,.15,"sawtooth");fl.intensity=2;setTimeout(()=>fl.intensity=0,50);
 rc.setFromCamera({x:0,y:0},C);
 const targets=mesh.slice();en.forEach(e=>{if(!e.dead)targets.push(...e.parts)});hls.forEach(x=>{if(!x.dead)targets.push(...x.parts)});vehs.forEach(v=>{if(!v.dead)targets.push(...v.parts)});
 const h=rc.intersectObjects(targets,false)[0];tr(h?h.point:rc.ray.at(80,new THREE.Vector3()));if(h&&A[cur].exp)blast(h.point);if(cur==3&&A[3].pen){const all=rc.intersectObjects(targets,false),sn=new Set();let n=0;for(const x of all){const e2=x.object.userData.e;if(!e2)break;if(sn.has(e2))continue;sn.add(e2);if(n++>0)hitE(e2,W[3].d,x.object.userData.h)}}
 if(h&&h.object.userData.veh)vhit(h.object.userData.veh,W[cur].d*(cur==3?1.6:1));if(h&&h.object.userData.heli)hitH(W[cur].d,h.object.userData.heli);if(h&&h.object.userData.bar)bar(h.object);
 if(h&&h.object.userData.e){const e=h.object.userData.e,hs=h.object.userData.h;
  hitE(e,hs?W[cur].h:W[cur].d,hs);const hm=$("hit");hm.style.opacity=1;hm.style.color=hs?"#e5484d":"#fff";setTimeout(()=>hm.style.opacity=0,90);
  if(0){
   if(kills>=total)endLevel();}
 }
 upd();
}
function reload(){if(cur==2||P.rl||P.am>=mg()||P.rs<=0)return;P.rl=[1.6,1.2,0,2.4,1.4,2,3.2,3][cur]*(rk()>=1?.7:1);upd()}
function hitE(e,d,hs,tag){if(e.dead)return;e.hp-=d*(rk()>=2?1.3:1);e.alert=1;if(e.hp<=0){e.dead=1;e.g.rotation.x=-1.5;e.g.position.y=.3;kills++;drop(e);ksAdd();if(kills>=total)slowU=performance.now()+1500;if(kills==Math.floor(total/2))sub("Overlord: Halfway there. Keep pushing!");const pts=e.jug?300:hs?150:100,r0=rk();score+=pts;if(rk()>r0)feed("RANK UP! Perk: "+["","SLEIGHT OF HAND","STOPPING POWER","JUGGERNAUT"][Math.min(rk(),3)]);feed((tag||(hs?"HEADSHOT":"KILL"))+" +"+pts);snd(80,.3,.2,"triangle");setTimeout(()=>world.remove(e.g),3000);if(kills>=total&&!P.ev)endLevel()}}
function feed(t){const f=$("feed"),d=document.createElement("div");d.textContent=t;f.prepend(d);setTimeout(()=>d.remove(),3000);if(f.children.length>5)f.lastChild.remove()}
function sub(t){const s=$("sub");s.textContent=t;clearTimeout(sub.t);sub.t=setTimeout(()=>s.textContent="",5000)}
function sw(i){if(i==cur||P.rl||P.un||gm)return;W[cur].am=P.am;W[cur].rs=P.rs;cur=i;P.am=W[i].am;P.rs=W[i].rs;P.ft=.3;gb.scale.z=[1,.45,1,1.6,.7,.9,1.9][i];gb.position.z=[0,.12,0,-.1,.05,0,-.25][i];gs.visible=i!=1;upd()}
function knife(){if(P.kn>0||P.rl||P.un)return;P.kn=.6;P.swing=1;snd(300,.12,.1,"triangle");for(const e of en){if(e.dead)continue;const dx=e.g.position.x-P.x,dz=e.g.position.z-P.z,d=Math.hypot(dx,dz);if(d<2.6*e.s&&(-Math.sin(P.yaw)*dx-Math.cos(P.yaw)*dz)/d>.4){hitE(e,e.boss?100:(e.kn?1e9:999),0,"KNIFE KILL");break}}upd()}
function thr(){if(P.gr<=0||P.gt>0||P.un)return;P.gr--;P.gt=.8;const m=new THREE.Mesh(new THREE.SphereGeometry(.12,8,6),new THREE.MeshLambertMaterial({color:0x2a3a22})),dir=new THREE.Vector3();C.getWorldDirection(dir);m.position.copy(C.position).addScaledVector(dir,.6);world.add(m);gr.push({m,v:dir.multiplyScalar(14).add(new THREE.Vector3(0,3,0)),t:2});upd()}
function gh(x,z){let h=0;for(const o of obs)if(x>o.x0&&x<o.x1&&z>o.z0&&z<o.z1&&o.h>h&&o.h<=P.y+1.05)h=o.h;return h}
function noise(r){en.forEach(e=>{if(!e.dead&&Math.hypot(e.g.position.x-P.x,e.g.position.z-P.z)<r)e.alert=1})}
function nvToggle(){nv=!nv;document.body.classList.toggle("nv",nv);$("nvo").style.display=nv?"block":"none";HL.intensity=nv?2.6:.9;en.forEach(e=>e.parts.forEach(p=>p.material.emissive.setHex(nv?0x22ff44:0)));snd(900,.1,.05,"sine")}
function nvOff(){hls=[];vehs=[];DR=null;RC=null;SH=null;DV=null;RV=null;FD=1;SHEP=null;duo=0;SHP=null;fpv=false;SP=null;CIN=null;cinDone=false;cbar.style.display="none";fadeEl.style.opacity=0;nv=false;document.body.classList.remove("nv");$("nvo").style.display="none";HL.intensity=.9;P.nb=100}
function drop(e){const t=[0,1,3,2,4,5][Math.floor(Math.random()*6)],m=new THREE.Mesh(new THREE.BoxGeometry(.7,.15,.25),new THREE.MeshBasicMaterial({color:0xf0b429}));m.position.set(e.g.position.x,.4,e.g.position.z);world.add(m);pk.push({m,t})}
function mkHeli(cx,cz,a0){const g=new THREE.Group(),m=new THREE.MeshLambertMaterial({color:0x2c3138}),b=new THREE.Mesh(new THREE.BoxGeometry(2.4,2.2,6),m),t=new THREE.Mesh(new THREE.BoxGeometry(.5,.6,5),m),r=new THREE.Mesh(new THREE.BoxGeometry(11,.12,.5),m);t.position.set(0,.4,-5);r.position.y=1.5;g.add(b,t,r);g.position.set(0,14,-20);world.add(g);const H={g,hp:500,parts:[b,t,r],r,a:a0||0,t:1,cx:cx||0,cz:cz===undefined?-6:cz};b.userData.heli=t.userData.heli=r.userData.heli=H;hls.push(H);if(!heli)heli=H}
function hitH(d,h){h=h||heli;if(!h||h.dead)return;h.hp-=d;if(h.hp<=0){h.dead=1;score+=500;feed("HELICOPTER DOWN +500");kills++;snd(40,.8,.4,"sawtooth");world.remove(h.g);if(kills>=total&&!P.ev)endLevel()}}
function mkJeep(){const g=new THREE.Group(),m=new THREE.MeshLambertMaterial({color:0x4d5b3a}),b=new THREE.Mesh(new THREE.BoxGeometry(2.2,.8,4.2),m),c=new THREE.Mesh(new THREE.BoxGeometry(1.8,.8,1.6),m);b.position.y=.8;c.position.set(0,1.5,.3);g.add(b,c);for(const[x,z]of[[-1.1,-1.5],[1.1,-1.5],[-1.1,1.5],[1.1,1.5]]){const w=new THREE.Mesh(new THREE.CylinderGeometry(.45,.45,.3,10),dark);w.rotation.z=Math.PI/2;w.position.set(x,.45,z);g.add(w)}g.position.set(6,0,150);world.add(g);jp=g}
function useF(){if(SP&&SP.st==8){SP.st=9;SP.t=0;slowU=performance.now()+2500;sub("Tom wrenches the knife from his chest and hurls it at Shepherd!");return}if(RC&&RC.near){RC=null;win();return}if(DV&&DV.ph==0){DV.ph=1;DV.t=0;P.pitch=-.9;sub("Jump! Right-click to open your parachute.");return}if(SHP&&SHP.st==2){SHP.st=3;SHP.t=0;slowU=performance.now()+2600;sub("Tom rips the knife from his chest and drives it into Shepherd's head.");return}if(gm==2){if(P.ft<=0){P.ft=.8;rocket(1)}return}if(gm||escMode==3)return;if(P.ev>0&&ch&&P.y>4.5&&Math.hypot(P.x-ch.position.x,P.z-ch.position.z)<3){win();return}
 if(P.veh){P.x+=3;P.veh=null;sw(P.pw||0);return}
 if(jp&&Math.hypot(P.x-jp.position.x,P.z-jp.position.z)<4.5){P.veh=jp;P.pitch=0;P.pr=0;P.cr=0;feed("Ghost, James and Price jumped in! Pistol only while driving.");P.pw=cur;sw(1);feed("DRIVING JEEP — F to exit")}}
function slide(){if(P.sl>0||P.veh||P.pr)return;const fz=(keys.KeyS?1:0)-(keys.KeyW?1:0)||-1,fx=(keys.KeyD?1:0)-(keys.KeyA?1:0),l=Math.hypot(fx,fz),c=Math.cos(P.yaw),s=Math.sin(P.yaw);P.sx=(fx*c+fz*s)/l;P.sz=(-fx*s+fz*c)/l;P.sl=.7}
function startEvac(){startEscape();return;P.ev=60;P.lc=0;const g=new THREE.Group(),m=new THREE.MeshLambertMaterial({color:0xcfd6cf}),b=new THREE.Mesh(new THREE.BoxGeometry(2.6,2.4,7),m),r=new THREE.Mesh(new THREE.BoxGeometry(12,.12,.5),dark);r.position.y=1.6;g.add(b,r);g.position.set(0,12.5,-30);const bc=new THREE.Mesh(new THREE.CylinderGeometry(4,4,80,16,1,true),new THREE.MeshBasicMaterial({color:0x44ff66,transparent:true,opacity:.22,side:2}));bc.position.set(0,40,-30);world.add(g,bc);ch=g;ch.r=r;{const lm=new THREE.MeshLambertMaterial({color:0xd9b36a});for(const x of[-.25,.25]){const b=new THREE.Mesh(new THREE.BoxGeometry(.06,6.1,.06),lm);b.position.set(x,-4.25,0);g.add(b)}for(let i=0;i<9;i++){const b=new THREE.Mesh(new THREE.BoxGeometry(.5,.05,.05),lm);b.position.set(0,-1.5-i*.7,0);g.add(b)}}for(let i=0;i<6;i++){spawn(false);en[en.length-1].alert=1}setTimeout(()=>sub("Overlord: Run up the hill and JUMP onto the rope ladder!"),4000);sub("Overlord: Extraction chopper landing at the green beacon. 60 seconds — get there and press F!");upd()}
function win(){escMode=false;if(lvl<LV.length-1){lvl++;state="brief";show(LV[lvl].n,LV[lvl].b,"DEPLOY");return}state="win";show("WAR IS OVER","Tom, Ghost, James and Price completed every mission. The war is over and the campaign is complete. Campaign complete. Score: "+score,"PLAY AGAIN")}
function pel(sx,sy,d,hd){rc.setFromCamera({x:sx,y:sy},C);const t=mesh.slice();en.forEach(e=>{if(!e.dead)t.push(...e.parts)});hls.forEach(x=>{if(!x.dead)t.push(...x.parts)});const h=rc.intersectObjects(t,false)[0];if(!h)return;if(h.object.userData.heli)hitH(d,h.object.userData.heli);else if(h.object.userData.e)hitE(h.object.userData.e,h.object.userData.h?hd:d,h.object.userData.h)}
function ln(a,b,c){const l=new THREE.Line(new THREE.BufferGeometry().setFromPoints([a,b]),new THREE.LineBasicMaterial({color:c}));world.add(l);setTimeout(()=>world.remove(l),60)}
function tr(p){const a=new THREE.Vector3(.25,-.2,-.9);C.localToWorld(a);ln(a,p,0xffe08a)}
function dirI(a){const d=$("dir");d.style.transform="rotate("+a+"rad)";d.style.opacity=1;clearTimeout(dirI.t);dirI.t=setTimeout(()=>d.style.opacity=0,700)}
function ksAdd(){streak++;if(streak==3){ksq.push("UAV");feed("KILLSTREAK: UAV — press T")}if(streak==5){ksq.push("AIRSTRIKE");feed("KILLSTREAK: AIRSTRIKE — aim and press T")}if(streak==7){ksq.push("CARE");feed("KILLSTREAK: CARE PACKAGE — press T")}}
function ksUse(){const k=ksq.shift();if(!k)return;if(k=="UAV"){uav=30;feed("UAV ONLINE")}else if(k=="AIRSTRIKE"){rc.setFromCamera({x:0,y:0},C);const h=rc.intersectObjects(mesh,false)[0],p=h?h.point.clone():rc.ray.at(40,new THREE.Vector3());feed("AIRSTRIKE INBOUND");for(let i=0;i<6;i++)setTimeout(()=>{if(state!="play")return;const q=p.clone().add(new THREE.Vector3(rnd(-8,8),0,rnd(-8,8))),m=new THREE.Mesh(new THREE.SphereGeometry(3,10,8),new THREE.MeshBasicMaterial({color:0xffaa33,transparent:true,opacity:.7}));m.position.copy(q);world.add(m);setTimeout(()=>world.remove(m),250);boom(q)},1500+i*300)}else{P.rs+=40;P.gr+=2;feed("CARE PACKAGE: AMMO + GRENADES")}upd()}
function smoke(){if(sm<=0||P.veh)return;sm--;const d=new THREE.Vector3();C.getWorldDirection(d);const m=new THREE.Mesh(new THREE.SphereGeometry(4,12,10),new THREE.MeshBasicMaterial({color:0xbfc5c8,transparent:true,opacity:.85}));m.position.set(P.x+d.x*9,2,P.z+d.z*9);world.add(m);mesh.push(m);feed("SMOKE DEPLOYED");setTimeout(()=>{world.remove(m);const i=mesh.indexOf(m);if(i>=0)mesh.splice(i,1)},10000)}
function mkIntel(){for(let i=0;i<8;i++){let x,z,n=0;do{x=rnd(-150,150);z=rnd(-150,150);n++}while(blocked(x,z,1)&&n<40);const m=new THREE.Mesh(new THREE.BoxGeometry(.6,.1,.4),new THREE.MeshBasicMaterial({color:0x44aaff}));m.position.set(x,.5,z);world.add(m);pk.push({m,t:4})}}
function hill(){const m=new THREE.MeshLambertMaterial({color:0x6e5b3f});[[30,.9],[24,1.8],[18,2.7],[12,3.6],[6,4.5]].forEach(a=>box(0,-135,a[0],a[0],a[1],m))}
function flash(){if(fb<=0||P.veh)return;fb--;snd(1500,.15,.1,"sine");const d=new THREE.Vector3();C.getWorldDirection(d);const x=P.x+d.x*10,z=P.z+d.z*10;en.forEach(e=>{if(!e.dead&&Math.hypot(e.g.position.x-x,e.g.position.z-z)<12){e.stun=4;e.alert=1}});feed("FLASHBANG OUT")}
function mkBarrels(){for(let i=0;i<26;i++){let x,z,n=0;do{x=rnd(-150,150);z=rnd(-150,140);n++}while(blocked(x,z,1)&&n<40);const m=new THREE.Mesh(new THREE.CylinderGeometry(.45,.45,1.1,12),new THREE.MeshLambertMaterial({color:0xb02a2a}));m.position.set(x,.55,z);m.userData.bar=1;world.add(m);mesh.push(m)}}
function bar(o){const i=mesh.indexOf(o);if(i>=0)mesh.splice(i,1);world.remove(o);const m=new THREE.Mesh(new THREE.SphereGeometry(3,10,8),new THREE.MeshBasicMaterial({color:0xffaa33,transparent:true,opacity:.7}));m.position.copy(o.position);world.add(m);setTimeout(()=>world.remove(m),250);boom(o.position)}
const FN=[["GHOST",0x222428],["JAMES",0x5b6b3a],["PRICE",0x3a5a2e]];
function los2(a,b){const d=b.clone().sub(a),L=d.length();ray2.set(a,d.normalize());ray2.far=L;return ray2.intersectObjects(mesh,false).length==0}
function mkFriends(only){fr=[];FN.forEach((a,i)=>{if(only&&a[0]!=only)return;const g=new THREE.Group(),m=new THREE.MeshLambertMaterial({color:a[1]}),body=new THREE.Mesh(new THREE.BoxGeometry(.7,1.1,.4),m),head=new THREE.Mesh(new THREE.SphereGeometry(.22,10,8),new THREE.MeshLambertMaterial({color:i==0?0xdddddd:0xd2a37c})),legs=new THREE.Mesh(new THREE.BoxGeometry(.6,.6,.35),dark),gn=new THREE.Mesh(new THREE.BoxGeometry(.08,.1,.6),dark);body.position.y=1.15;head.position.y=1.9;legs.position.y=.3;gn.position.set(.3,1.3,-.35);
 const cv=document.createElement("canvas");cv.width=256;cv.height=64;const c=cv.getContext("2d");c.font="bold 40px Arial";c.fillStyle="#5ab0ff";c.textAlign="center";c.fillText(a[0],128,46);
 const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(cv),depthTest:false}));sp.scale.set(2.4,.6,1);sp.position.y=2.6;
 g.add(body,head,legs,gn,sp);g.position.set(P.x+(i-1)*2.5,0,P.z-3);world.add(g);fr.push({g,n:a[0],t:rnd(0,1),i,hp:100})})}
function mkChopper(x,y,z){const g=new THREE.Group(),m=new THREE.MeshLambertMaterial({color:0xcfd6cf}),b=new THREE.Mesh(new THREE.BoxGeometry(2.6,2.4,7),m),r=new THREE.Mesh(new THREE.BoxGeometry(12,.12,.5),dark);r.position.y=1.6;g.add(b,r);g.r=r;const lm=new THREE.MeshLambertMaterial({color:0xd9b36a});for(const px of[-.25,.25]){const q=new THREE.Mesh(new THREE.BoxGeometry(.06,6.1,.06),lm);q.position.set(px,-4.25,0);g.add(q)}for(let i=0;i<9;i++){const q=new THREE.Mesh(new THREE.BoxGeometry(.5,.05,.05),lm);q.position.set(0,-1.5-i*.7,0);g.add(q)}g.position.set(x,y,z);world.add(g);return g}
function startEscape(){escMode=true;state="play";MB=900;if(world)S.remove(world);world=new THREE.Group();S.add(world);obs=[];mesh=[];en=[];fr=[];gr=[];pk=[];heli=null;jp=null;nvOff();
 S.background=new THREE.Color(0xf0b87c);S.fog=new THREE.Fog(0xf0b87c,25,160);
 const g0=new THREE.Mesh(new THREE.PlaneGeometry(300,300),new THREE.MeshLambertMaterial({color:0x4a423a}));g0.rotation.x=-Math.PI/2;world.add(g0);
 const pal=[0xd9a066,0xc86b4b,0xe8d3a4,0x8fb0a0,0xb55a5a].map(c=>new THREE.MeshLambertMaterial({color:c}));
 let z=60,h=16;for(let i=0;i<22;i++){const sl=i%7==3&&h>=9;let d=9;if(sl){for(let k=0;k<4;k++){box(0,z-k*4,9,4,h-k*1.2,pal[2]);obs[obs.length-1].sd=1}h-=3.6;d=16}else{h=Math.max(6,h+((i*7)%3-1)*.9);box(0,z,9,9,h,pal[i%5])}z-=d+4.2+rnd(0,.6)}
 box(0,z,14,14,h,pal[1]);
 for(let i=0;i<80;i++){const hh=rnd(5,14),b=new THREE.Mesh(new THREE.BoxGeometry(8,hh,8),pal[i%5]);b.position.set((i%2?1:-1)*rnd(15,26),hh/2,70-i*4.2);world.add(b)}
 P={x:0,z:60,y:32,vy:0,yaw:0,pitch:0,hp:100,am:0,rs:0,rl:0,ft:0,hurt:0,kick:0,gr:0,gt:0,kn:0,swing:0,sf:0,ln:0,lt:0,eh:1.6,sl:0,pr:0,veh:null,ev:170,nb:100,lc:0,sx:0,sz:0,un:1};ads=false;mouseDown=false;cur=2;
 mkHeli(0,-80,0);ch=mkChopper(0,h+8,z);ch.wy=h+.4;ch.wx=0;ch.wz=z;
 $("dmg").style.opacity=0;sub("Price: Tom, we're pinned down! Run for the chopper!");
 setTimeout(()=>sub("Tom lost his weapons in the fall. Run the rooftops, jump the gaps and leap onto the ladder!"),4500);upd()}
function tower(){box(0,148,7,7,26,new THREE.MeshLambertMaterial({color:0x7a7a72}));P.x=0;P.z=148;P.y=26.5}
function mkMark(e){const cv=document.createElement("canvas");cv.width=cv.height=64;const c=cv.getContext("2d");c.fillStyle="#ff3b3b";c.beginPath();c.moveTo(8,10);c.lineTo(56,10);c.lineTo(32,56);c.fill();const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(cv),depthTest:false}));sp.scale.set(1.4,1.4,1);sp.position.y=3;e.g.add(sp)}
function nextTgt(){let b=null,bd=1e9;for(const e of en){if(e.dead)continue;const d=Math.hypot(e.g.position.x-P.x,e.g.position.z-P.z);if(d<bd){bd=d;b=e}}tgt=b;if(!b)return;const vx=b.g.position.x-P.x,vz=b.g.position.z-P.z,rel=Math.atan2(vx*Math.cos(P.yaw)-vz*Math.sin(P.yaw),-vx*Math.sin(P.yaw)-vz*Math.cos(P.yaw))*180/Math.PI,ck=(Math.round(rel/30)+12)%12||12;mkMark(b);sub("Price: Hostile at your "+ck+" o'clock, "+Math.round(bd)+"m. Take the shot, Tom.")}
function fdown(f){f.dead=1;f.g.rotation.x=-1.5;f.g.position.y=.3;feed(f.n+" is down!");setTimeout(()=>{f.dead=0;f.hp=100;f.g.rotation.x=0;feed(f.n+" is back on his feet")},12000)}
function snowDeco(){const tm=new THREE.MeshLambertMaterial({color:0x4b3a2a}),lm=new THREE.MeshLambertMaterial({color:0x2d5a3d});for(let i=0;i<220;i++){const x=rnd(-150,150),z=rnd(-150,150);if(Math.abs(x)<10&&z>135)continue;if(blocked(x,z,1.5))continue;const h=rnd(5,9);box(x,z,.8,.8,h*.4,tm);const c=new THREE.Mesh(new THREE.ConeGeometry(2.2,h,8),lm);c.position.set(x,h*.4+h*.45,z);world.add(c)}}
function mkSled(){const g=new THREE.Group(),r=new THREE.MeshLambertMaterial({color:0xcc3322}),b=new THREE.Mesh(new THREE.BoxGeometry(1.2,.6,3),r);b.position.y=.6;g.add(b);for(const x of[-.65,.65]){const s=new THREE.Mesh(new THREE.BoxGeometry(.15,.1,3.8),dark);s.position.set(x,.15,-.2);g.add(s)}const st=new THREE.Mesh(new THREE.BoxGeometry(.8,.2,1.6),dark),hb=new THREE.Mesh(new THREE.BoxGeometry(1.1,.08,.08),dark);st.position.set(0,1,.7);hb.position.set(0,1.1,-.7);g.add(st,hb);g.sp=32;world.add(g);return g}
function startSnow(){escMode=2;state="play";MB=1400;if(world)S.remove(world);world=new THREE.Group();S.add(world);obs=[];mesh=[];en=[];fr=[];gr=[];pk=[];heli=null;jp=null;nvOff();
 S.background=new THREE.Color(0xdbe9f4);S.fog=new THREE.Fog(0xdbe9f4,30,190);
 const gm2=new THREE.Mesh(new THREE.PlaneGeometry(900,1500),new THREE.MeshLambertMaterial({color:0xf3f7fa}));gm2.rotation.x=-Math.PI/2;gm2.position.z=-600;world.add(gm2);
 const rd2=new THREE.Mesh(new THREE.PlaneGeometry(16,1100),new THREE.MeshLambertMaterial({color:0x8c98a3}));rd2.rotation.x=-Math.PI/2;rd2.position.set(0,.03,-550);world.add(rd2);{const sm=new THREE.MeshLambertMaterial({color:0xf3f7fa});for(let k=1;k<=6;k++)box(0,-1100-(k-1)*6-3,14,6,k,sm);pg(500,46,0x2a4a66,0,.05,-1159);pg(16,160,0x8c98a3,0,.03,-1262)}
 const lm=new THREE.MeshLambertMaterial({color:0x2d5a3d}),mm=new THREE.MeshLambertMaterial({color:0xaeb8c2});
 for(let i=0;i<260;i++){const h=rnd(5,10),c=new THREE.Mesh(new THREE.ConeGeometry(2.2,h,8),lm);c.position.set((i%2?1:-1)*rnd(10,45),h/2,-rnd(0,1250));world.add(c)}
 for(let i=0;i<30;i++){const h=rnd(40,80),c=new THREE.Mesh(new THREE.ConeGeometry(rnd(30,50),h,6),mm);c.position.set((i%2?1:-1)*rnd(90,200),h/2,-i*42);world.add(c)}
 for(let i=0;i<40;i++)box(rnd(-6,6),-rnd(60,1150),rnd(1.5,3),rnd(1.5,3),rnd(1,2),mm);
 P={x:0,z:-4,y:0,vy:0,yaw:0,pitch:0,hp:100,am:30,rs:120,rl:0,ft:0,hurt:0,kick:0,gr:3,gt:0,kn:0,swing:0,sf:0,ln:0,lt:0,eh:1.6,sl:0,pr:0,veh:null,ev:100,nb:100,lc:0,sx:0,sz:0,un:0};ads=false;mouseDown=false;cur=0;
 const sl=mkSled();sl.position.set(0,0,-4);P.veh=sl;mkFriends("PRICE");duo=1;sled2=mkSled();P.pw=0;sw(1);
 for(let i=0;i<20;i++){spawn(false);const e=en[en.length-1];e.g.position.set((i%2?1:-1)*rnd(12,26),0,-rnd(60,1100));e.alert=1;if(i%2==0){mountE(e);e.g.position.x=rnd(-6,6)}}
 ch=mkChopper(0,7,-1290);ch.wx=9999;
 const bc=new THREE.Mesh(new THREE.CylinderGeometry(5,5,300,16,1,true),new THREE.MeshBasicMaterial({color:0xff5533,fog:false,transparent:true,opacity:.45,side:2}));bc.position.set(0,150,-1290);world.add(bc);
 $("dmg").style.opacity=0;sub("Price: Tom, get us out of here! Take the snowmobile down the long road to the chopper!");upd()}
function zm(){const o=OPT[cur][A[cur].op];return o=="V"?2:o=="T"?3:o||0}
function attS(){if(cur==2||cur==5||cur==6)return"";const a=A[cur],o=OPT[cur][a.op];return " · "+(o==0?"IRON":o=="V"?"VISION-X":o=="T"?"THERMAL":o+"x")+(a.sup==1?" · SUPP":a.sup==2?" · COMP":"")+(a.grip?" · GRIP":"")+(a.las?(a.las==1?" · RED LASER":" · GREEN LASER"):"")+(a.exp?" · EXPLOSIVE":"")+(a.pen?" · PIERCING":"")+(a.ext?" · EXT MAG":"")}
function att(k){const a=A[cur];if(cur==2||cur==5||cur==6)return;if(k=="op")a.op=(a.op+1)%OPT[cur].length;else if(k=="sup")a.sup=(a.sup+1)%3;else if(k=="grip"&&cur!=1)a.grip^=1;else if(k=="las"&&(cur==0||cur==4))a.las=(a.las+1)%3;else if(k=="spec"){if(cur==3){const n=a.exp?1:a.pen?2:0,m=(n+1)%3;a.exp=m==1?1:0;a.pen=m==2?1:0}else if(cur==0||cur==1||cur==4)a.ext^=1;else return}else return;upd();feed("ATTACH:"+attS());if(cm)custR()}
function blast(p){const m=new THREE.Mesh(new THREE.SphereGeometry(3,10,8),new THREE.MeshBasicMaterial({color:0xffaa33,transparent:true,opacity:.7}));m.position.copy(p);world.add(m);setTimeout(()=>world.remove(m),250);boom(p)}
function rocket(hh){const d=new THREE.Vector3();C.getWorldDirection(d);const m=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,.8,8).rotateX(Math.PI/2),new THREE.MeshLambertMaterial({color:0x556b2f}));m.position.copy(C.position).addScaledVector(d,1.5);m.lookAt(m.position.clone().add(d));world.add(m);rks.push({m,v:d.multiplyScalar(hh?60:48),t:6,h:hh,hm:1});snd(70,.4,.3,"sawtooth")}
function rpgBoom(p){const m=new THREE.Mesh(new THREE.SphereGeometry(6,12,10),new THREE.MeshBasicMaterial({color:0xff8a2a,transparent:true,opacity:.7}));m.position.copy(p);world.add(m);setTimeout(()=>world.remove(m),300);snd(45,.7,.4,"sawtooth");en.forEach(e=>{if(!e.dead&&e.mnt&&p.distanceTo(e.g.position)<10)hitE(e,999,0,"VEHICLE DESTROYED")});hls.forEach(h=>{if(!h.dead&&p.distanceTo(h.g.position)<14)hitH(600,h)});vehs.forEach(v=>{if(!v.dead&&p.distanceTo(v.g.position)<10)vhit(v,350,1)})}
function jetHud(){const t=tgs.find(x=>!x.dead);return "  ·  SPD "+Math.round(J.v*3.6)+" km/h  ·  ALT "+Math.round(J.y)+"m  ·  BOMBS "+J.bm+(t?"  ·  TARGET "+Math.round(Math.hypot(t.x-J.x,t.z-J.z))+"m":"")}
function dropBomb(){const q=J;if(!q||P.ft>0||q.bm<=0)return;P.ft=.6;q.bm--;const m=new THREE.Mesh(new THREE.SphereGeometry(.6,8,6),dark);m.position.set(q.x,q.y-1,q.z);world.add(m);bmb.push({m,v:new THREE.Vector3(-Math.sin(P.yaw)*Math.cos(P.pitch),Math.sin(P.pitch),-Math.cos(P.yaw)*Math.cos(P.pitch)).multiplyScalar(q.v)});snd(90,.3,.2,"triangle")}
function bombFx(p){const m=new THREE.Mesh(new THREE.SphereGeometry(18,12,10),new THREE.MeshBasicMaterial({color:0xff8a2a,transparent:true,opacity:.7}));m.position.copy(p);world.add(m);setTimeout(()=>world.remove(m),400);snd(40,.8,.4,"sawtooth");for(const t of tgs){if(!t.dead&&Math.hypot(t.x-p.x,t.z-p.z)<30){t.dead=1;world.remove(t.m);score+=300;feed("TARGET DESTROYED +300")}}if(!J.done&&tgs.every(t=>t.dead)){J.done=1;sub("Overlord: Direct hit! Target zone neutralized. Good flying, Tom.");setTimeout(win,2500)}}
function jetStep(dt){const q=J;q.v=Math.max(0,Math.min(110,q.v+((keys.KeyW?30:0)-(keys.KeyS?30:0))*dt));const cp=Math.cos(P.pitch),dx=-Math.sin(P.yaw)*cp,dy0=Math.sin(P.pitch),dz=-Math.cos(P.yaw)*cp,deck=Math.abs(q.x)<15&&Math.abs(q.z)<160,fl=deck?3:0;let dy=dy0*q.v*dt;if(q.v<50){if(q.y>fl+.05)dy-=(50-q.v)*.5*dt;else if(dy>0)dy=0}q.x+=dx*q.v*dt;q.z+=dz*q.v*dt;q.y+=dy;if(q.y<fl){if(!deck&&state=="play")die();q.y=fl}if(Math.abs(q.x)<150&&Math.abs(q.z+3000)<150&&q.y<4.5&&state=="play")die();if(keys.Space)dropBomb();
 P.x=q.x;P.y=q.y;P.z=q.z;jet.position.set(q.x,q.y,q.z);jet.rotation.set(P.pitch,P.yaw,((keys.KeyA?1:0)-(keys.KeyD?1:0))*.5,"YXZ");if(fpv)C.position.set(q.x+dx*3,q.y+1.1,q.z+dz*3);else C.position.set(q.x-dx*18,q.y+5-dy0*18,q.z-dz*18);jet.visible=!fpv;C.rotation.set(P.pitch,P.yaw,0,"YXZ");
 for(let i=bmb.length-1;i>=0;i--){const b=bmb[i],p=b.m.position;b.v.y-=28*dt;p.addScaledVector(b.v,dt);if(p.y<=2){bmb.splice(i,1);world.remove(b.m);bombFx(p.clone())}}
 if(q.bm<=0&&!bmb.length&&!q.done&&tgs.some(t=>!t.dead)){q.done=1;sub("Out of bombs! Mission failed.");setTimeout(()=>{if(state=="play")die()},2000)}}
function startJet(){escMode=3;state="play";MB=9000;if(world)S.remove(world);world=new THREE.Group();S.add(world);obs=[];mesh=[];en=[];fr=[];gr=[];pk=[];rks=[];bmb=[];tgs=[];ch=null;nvOff();
 S.background=new THREE.Color(0x9cc8ee);S.fog=new THREE.Fog(0x9cc8ee,200,1400);
 const mk=(w,h,d,c,x,y,z)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshLambertMaterial({color:c}));m.position.set(x,y,z);world.add(m);return m};
 const oc=mk(12000,1,12000,0x1d4e7a,0,-.5,-2500);mk(30,3,320,0x6d747a,0,1.5,0);mk(2,.05,300,0xf2f2f2,0,3.03,0);mk(8,22,30,0x8b9298,19,11,40);mk(300,4,300,0x6b5d42,0,2,-3000);
 for(let i=0;i<6;i++){const x=rnd(-70,70),z=-3000+rnd(-70,70),m=mk(12,7,12,i%2?0xc23b3b:0x8a3030,x,7.5,z);tgs.push({m,x,z,dead:0})}
 const bc=new THREE.Mesh(new THREE.CylinderGeometry(60,60,900,20,1,true),new THREE.MeshBasicMaterial({color:0xff2222,fog:false,transparent:true,opacity:.28,side:2}));bc.position.set(0,450,-3000);world.add(bc);
 jet=new THREE.Group();jet.add(mk(1.6,1.2,9,0x4a5258,0,0,0),mk(10,.15,2.6,0x3c4348,0,0,.8),mk(4,.12,1.4,0x3c4348,0,0,4),mk(.12,1.6,1.4,0x3c4348,0,1,4));world.add(jet);
 J={x:0,y:3,z:130,v:0,bm:8,done:0};
 P={x:0,z:130,y:3,vy:0,yaw:0,pitch:0,hp:100,am:0,rs:0,rl:0,ft:0,hurt:0,kick:0,gr:0,gt:0,kn:0,swing:0,sf:0,ln:0,lt:0,eh:1.6,sl:0,pr:0,veh:jet,ev:0,nb:100,lc:0,sx:0,sz:0,un:0};ads=false;mouseDown=false;cur=2;
 $("dmg").style.opacity=0;sub("Overlord: Pilot Tom, you are cleared for launch. Hold W for speed, pull up past 180 km/h. Hit the red zone ahead!");upd()}
function mg(){return Math.round(W[cur].mag*(A[cur].ext?1.5:1))}
function cust(){cm=!cm;$("cust").style.display=cm?"block":"none";if(cm)custR()}
function custR(){const a=A[cur],o=OPT[cur][a.op];if(cur==2||cur==5||cur==6||cur==7){$("cust").innerHTML="<b>"+W[cur].n+"</b><br>No attachments for this weapon.";return}$("cust").innerHTML="<b>"+W[cur].n+" — CUSTOMIZE</b><br>[1] OPTIC: "+(o==0?"IRON SIGHT":o=="V"?"VISION-X":o=="T"?"THERMAL":o+"x")+"<br>[2] MUZZLE: "+["NONE","SUPPRESSOR","COMPENSATOR"][a.sup]+"<br>[3] GRIP: "+(a.grip?"ON":"OFF")+"<br>[4] LASER: "+["OFF","RED","GREEN"][a.las]+"<br>[5] "+(cur==3?"AMMO: "+(a.exp?"EXPLOSIVE":a.pen?"PIERCING":"STANDARD"):"MAGAZINE: "+(a.ext?"EXTENDED":"STANDARD"))+"<br><i>Press 1-5 to change · Alt to close</i>"}
function ledge(){if(P.mn||P.veh||P.pr||gm||!keys.KeyW)return;const gnd=gh(P.x,P.z),air=P.y>gnd+.25,fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),px=P.x+fx*.9,pz=P.z+fz*.9;if(!(air||keys.Space))return;for(const o of obs){if(px>o.x0&&px<o.x1&&pz>o.z0&&pz<o.z1&&o.h>P.y+1&&o.h<=P.y+(air?2.3:3.2)){P.mn={t:0,x0:P.x,y0:P.y,z0:P.z,x1:Math.min(o.x1-.5,Math.max(o.x0+.5,P.x+fx*1.5)),y1:o.h,z1:Math.min(o.z1-.5,Math.max(o.z0+.5,P.z+fz*1.5))};P.vy=0;snd(200,.1,.05,"triangle");return}}}
function pick(i){escMode=false;lvl=i;state="brief";show(LV[i].n,LV[i].b,"DEPLOY")}
function gunInit(L){gm=L.gun?1:2;SR=70;fr.forEach(f=>world.remove(f.g));fr=[];if(jp){world.remove(jp);jp=null}P.pr=0;P.cr=0;ads=false;cur=7;P.am=W[7].am;P.rs=W[7].rs;gb.scale.z=1.5;gb.position.z=0;gs.visible=true;if(gm==1){P.x=60;P.z=0;P.y=26;sub("Price: You're on the minigun, Tom. We'll orbit the base. Light them up!")}else{P.x=0;P.z=120;P.y=30;mkHeli(0,0,0);sub("Overlord: The gunship is yours, Tom. Level that compound and take down their chopper.")}}
function gunStep(dt){if(gm==1){P.ga=(P.ga||0)+dt*.1;P.x=Math.cos(P.ga)*60;P.z=Math.sin(P.ga)*60;P.y=26}else{const f=(keys.KeyW?1:0)-(keys.KeyS?1:0),s=(keys.KeyD?1:0)-(keys.KeyA?1:0);P.x=Math.max(-150,Math.min(150,P.x+(-Math.sin(P.yaw)*f+Math.cos(P.yaw)*s)*28*dt));P.z=Math.max(-150,Math.min(150,P.z+(-Math.cos(P.yaw)*f-Math.sin(P.yaw)*s)*28*dt));P.y=Math.max(10,Math.min(70,P.y+((keys.Space?1:0)-(keys.KeyC?1:0))*14*dt))}P.vy=0}
function mountE(e){if(e.mnt)return;e.mnt=1;const s=mkSled();world.remove(s);s.scale.setScalar(.85);e.g.add(s)}
function boom(p){vehs.forEach(v=>{if(!v.dead&&Math.hypot(v.g.position.x-p.x,v.g.position.z-p.z)<8)vhit(v,120,1)});noise(45);snd(50,.6,.4,"sawtooth");for(const e of en){if(e.dead)continue;const d=Math.hypot(e.g.position.x-p.x,e.g.position.z-p.z);if(d<8)hitE(e,(1-d/8)*(e.boss?150:200),0,"GRENADE KILL")}const d=Math.hypot(P.x-p.x,P.z-p.z);if(d<6)hurt((1-d/6)*60)}
function hurt(d){P.hp-=d;P.hurt=4;$("dmg").style.opacity=Math.min(1,.4+(100-P.hp)/100);snd(60,.15,.2,"triangle");
 if(P.hp<=0)die();upd()}
function show(t,p,b){$("msel").style.display=(b=="DEPLOY"||b=="NEXT MISSION")?"none":"flex";$("ov").style.display="flex";$("hud").style.display="none";$("ov").querySelector("h1").textContent=t;$("ot").textContent=p;$("go").textContent=b;
 if(document.pointerLockElement)document.exitPointerLock()}
function die(){state="dead";show("K.I.A.","You were taken down. Regroup and try the mission again.","RETRY MISSION")}
function endLevel(){
 setTimeout(()=>{if(state!="play")return;
  if(lvl>=3&&!P.ev){lvl==3?startEscape():lvl==4?startSnow():win();return}if(lvl>=LV.length-1){state="win";show("WAR IS OVER","Kaine is down and the last stronghold has fallen. Mission accomplished, soldier. The campaign is complete — well done!","PLAY AGAIN")}
  else{state="next";show("MISSION COMPLETE","All hostiles eliminated. Score "+score+" · Rank "+(rk()+1)+". Prepare for the next operation: "+LV[lvl+1].n,"NEXT MISSION")}},1200)}
function begin(){
 if(state=="win"||state=="menu")lvl=state=="win"?0:lvl;
 if(state=="next")lvl++;
 if(state!="paused")build();
 state="play";$("ov").style.display="none";$("hud").style.display="block";$("dmg").style.opacity=0;
 try{R.domElement.requestPointerLock()}catch(e){}
}
$("go").onclick=()=>{
 if(state=="menu"){lvl=0;show(LV[0].n,LV[0].b,"DEPLOY");state="brief0";return}
 if(state=="brief0"){state="menu";begin();return}
 if(state=="dead"||state=="paused"){begin();return}
 if(state=="next"){lvl++;state="brief";show(LV[lvl].n,LV[lvl].b,"DEPLOY");return}
 if(state=="brief"){state="x";begin();return}
 if(state=="win"){lvl=0;state="brief";show(LV[0].n,LV[0].b,"DEPLOY");return}
};
function begin(){
 if(state!="paused")build();
 state="play";$("ov").style.display="none";$("hud").style.display="block";$("dmg").style.opacity=0;
 try{R.domElement.requestPointerLock()}catch(e){}
}
document.addEventListener("pointerlockchange",()=>{
 locked=document.pointerLockElement===R.domElement;
 if(locked)lockOK=true;
 else if(lockOK&&state=="play"){state="paused";show("PAUSED","Click to resume.","RESUME")}
});
R.domElement.addEventListener("click",()=>{if(state=="play"&&!locked)try{R.domElement.requestPointerLock()}catch(e){}});
addEventListener("mousedown",e=>{if(e.button==0)mouseDown=true;if(e.button==2){ads=!ads;rcl=true}});addEventListener("contextmenu",e=>e.preventDefault());
addEventListener("mouseup",e=>{if(e.button==0)mouseDown=false});
addEventListener("mousemove",e=>{if(state!="play")return;if(!locked&&lockOK)return;
 const k=ads?Math.max(.12,.9/(zm()||1.2)):1;P.yaw-=e.movementX*.0022*k;P.pitch-=e.movementY*.0022*k;P.pitch=Math.max(-1.4,Math.min(1.4,P.pitch))});
addEventListener("keydown",e=>{keys[e.code]=1;if(cm&&/^Digit[1-5]$/.test(e.code)){att(["op","sup","grip","las","spec"][+e.code[5]-1]);return}if(e.code=="KeyR"&&state=="play")reload();
 if(state=="play"){if(e.code=="Digit1")sw(0);if(e.code=="Digit2")sw(1);if(e.code=="Digit3")sw(2);if(e.code=="Digit4")sw(3);if(e.code=="Digit5")sw(6);if(e.code=="Digit7")sw(4);if(e.code=="Digit6")sw(5);if(e.code=="KeyT")ksUse();if(e.code=="KeyB")smoke();if(e.code=="KeyY")att("sup");if(e.code=="KeyU")att("grip");if(e.code=="KeyL")att("las");if(e.code=="KeyI")att("spec");if(e.code.startsWith("Alt")){e.preventDefault();cust()}if(e.code=="KeyH")flash();if(e.code=="KeyX")knife();if(e.code=="KeyF")useF();if(e.code=="KeyK")bino=!bino;if(e.code=="KeyC"){if(P.veh||escMode==3||DR)fpv=!fpv;else{P.cr=!P.cr;P.pr=0}}if(e.code=="KeyV")slide();if(e.code=="ControlLeft"){P.pr=!P.pr;P.cr=0}if(e.code=="CapsLock")slow=e.getModifierState("CapsLock");if(e.code=="KeyG")thr();if(e.code=="KeyN"&&(nv||P.nb>5))nvToggle();}if(e.code=="Space")e.preventDefault()});
addEventListener("keyup",e=>{if(e.code.startsWith("Alt"))e.preventDefault();keys[e.code]=0;if(e.code=="CapsLock")slow=e.getModifierState("CapsLock")});
addEventListener("resize",()=>{R.setSize(innerWidth,innerHeight);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()});
const ray2=new THREE.Raycaster();
function los(e){
 const o=new THREE.Vector3(e.g.position.x,1.6*e.s,e.g.position.z),t=new THREE.Vector3(P.x,1.6+P.y,P.z),d=t.clone().sub(o),L=d.length();
 ray2.set(o,d.normalize());ray2.far=L;return ray2.intersectObjects(mesh,false).length==0}
let last=performance.now();
function loop(now){
 requestAnimationFrame(loop);
 const dt=Math.min(.05,(now-last)/1000)*(slow||now<slowU?.35:1);last=now;
 if(state=="play"){
  if(keys.ArrowLeft)P.yaw+=1.8*dt;if(keys.ArrowRight)P.yaw-=1.8*dt;
  if(keys.ArrowUp)P.pitch=Math.min(1.4,P.pitch+1.5*dt);if(keys.ArrowDown)P.pitch=Math.max(-1.4,P.pitch-1.5*dt);
  const sp=(gm?0:P.veh?(P.veh.sp||24):P.sl>0?12:P.pr?1.6:P.cr?3:ads?2.8:keys.ShiftLeft?9:5.5)*dt;let fx=0,fz=0;
  if(keys.KeyW)fz-=1;if(keys.KeyS)fz+=1;if(P.veh)P.yaw+=((keys.KeyA?1:0)-(keys.KeyD?1:0))*1.6*dt;else{if(keys.KeyA)fx-=1;if(keys.KeyD)fx+=1}
  const l=Math.hypot(fx,fz)||1,c=Math.cos(P.yaw),s=Math.sin(P.yaw);
  let dx=(fx*c+fz*s)/l*sp,dz=(-fx*s+fz*c)/l*sp;if(P.sl>0){P.sl-=dt;dx=P.sx*sp;dz=P.sz*sp}
  if(!blocked(P.x+dx,P.z,.5,P.y))P.x+=dx;if(!blocked(P.x,P.z+dz,.5,P.y))P.z+=dz;
  const gnd=gh(P.x,P.z);if(keys.Space&&!P.veh&&!P.pr&&P.y<=gnd+.01)P.vy=blocked(P.x-Math.sin(P.yaw)*.9,P.z-Math.cos(P.yaw)*.9,.5,P.y)?9.5:6.5;P.vy-=18*dt;P.y+=P.vy*dt;if(P.y<=gnd){P.y=gnd;if(P.vy<0)P.vy=0}
  if(mouseDown&&(locked||!lockOK)&&(W[cur].auto||!P.sf)){P.sf=1;shoot()}if(!mouseDown)P.sf=0;
  P.ft-=dt;P.gt-=dt;P.kn-=dt;P.swing=Math.max(0,P.swing-dt*4);P.kick=Math.max(0,P.kick-dt*8);
  for(let i=gr.length-1;i>=0;i--){const g=gr[i],p=g.m.position;g.v.y-=15*dt;const nx=p.x+g.v.x*dt,nz=p.z+g.v.z*dt;if(blocked(nx,p.z,.15))g.v.x*=-.4;else p.x=nx;if(blocked(p.x,nz,.15))g.v.z*=-.4;else p.z=nz;p.y+=g.v.y*dt;if(p.y<.12){p.y=.12;g.v.y*=-.4;g.v.x*=.6;g.v.z*=.6}g.t-=dt;if(g.t<=0){gr.splice(i,1);boom(p.clone());g.m.material=new THREE.MeshBasicMaterial({color:0xffaa33,transparent:true,opacity:.7});g.m.scale.setScalar(30);setTimeout(()=>world.remove(g.m),200)}}
  if(P.rl>0){P.rl-=dt;if(P.rl<=0){P.rl=0;const n=Math.min(mg()-P.am,P.rs);P.am+=n;P.rs-=n;upd()}}
  P.lt=(keys.KeyE?1:0)-(keys.KeyQ?1:0);uav=Math.max(0,uav-dt);if(ads&&cur==3&&!keys.ShiftLeft){const sw0=(P.pr?.08:P.cr?.5:1)*(A[3].grip?.5:1);P.pitch+=Math.sin(now/400)*.0003*sw0;P.yaw+=Math.cos(now/330)*.0003*sw0}{let n0=0;for(const e of en)if(!e.dead&&e.seen)n0++;const ev=$("evi");ev.textContent=n0?"EVISION: SPOTTED BY "+n0:"EVISION: UNSEEN";ev.style.color=n0?"#ff5a5a":"#7cff8a"}const hd=((-P.yaw*180/Math.PI)%360+360)%360;let nd=1e9;for(const e of en)if(!e.dead)nd=Math.min(nd,Math.hypot(e.g.position.x-P.x,e.g.position.z-P.z));$("comp").textContent=["N","NE","E","SE","S","SW","W","NW"][Math.round(hd/45)%8]+" "+String(Math.round(hd)).padStart(3,"0")+"°"+(nd<1e8?"  ·  NEAREST HOSTILE "+Math.round(nd)+"m":"")+(escMode==3?jetHud():"");
  P.nb=100;$("nvb").textContent=nv?"NVG ON ∞":"";
  for(let i=pk.length-1;i>=0;i--){const q=pk[i];q.m.rotation.y+=dt*2;if(Math.hypot(P.x-q.m.position.x,P.z-q.m.position.z)<1.4){pk.splice(i,1);world.remove(q.m);if(q.t==4){score+=250;feed("INTEL FOUND +250")}else if(q.t==2){P.gr++;feed("FRAG GRENADE +1")}else{const a=[30,12,0,5,40,6][q.t];if(q.t==cur)P.rs+=a;else W[q.t].rs+=a;feed(W[q.t].n+" AMMO +"+a)}upd()}}
  for(const h of hls){if(h.dead)continue;h.a+=dt*.35;h.g.position.set((h.cx||0)+Math.cos(h.a)*26,13+Math.sin(now/600),(h.cz===undefined?-6:h.cz)+Math.sin(h.a)*22);h.g.lookAt(P.x,13,P.z);h.r.rotation.y+=dt*35;h.t-=dt;if(h.t<0){h.t=.4;snd(140,.06,.05,"sawtooth");{const o=h.g.position.clone(),tg=new THREE.Vector3(P.x,1.4+P.y,P.z),dd=tg.clone().sub(o),LL=dd.length();ray2.set(o,dd.normalize());ray2.far=LL;if(LL<80&&ray2.intersectObjects(mesh,false).length==0&&Math.random()<.2){hurt(5);ln(o,tg,0xff6a3a)}}}}
  if(LV[lvl].stealth&&state=="play"&&(!tgt||tgt.dead))nextTgt();if(escMode==2&&P.z<-1270&&P.veh&&P.y<3)win();
  if(P.un){ads=false;if(P.y<2.5&&P.ev>0)die();if(escMode===true)for(const o of obs)if(o.sd&&P.x>o.x0&&P.x<o.x1&&P.z>o.z0&&P.z<o.z1&&P.y<=o.h+.3){P.sl=.35;P.sx=0;P.sz=-1;break}}
  for(const f of fr){if(f.dead)continue;if(P.veh){const v=P.veh.position,s3=[[.6,1],[-.6,1],[duo?3.6:0,duo?.8:1.9]][f.i],cs=Math.cos(P.yaw),sn2=Math.sin(P.yaw);f.g.position.set(v.x+s3[0]*cs+s3[1]*sn2,P.y+(P.veh.sp>26?.9:.5),v.z-s3[0]*sn2+s3[1]*cs);f.g.rotation.y=P.yaw}else f.g.position.y=0;const p=f.g.position,sit=!!P.veh,gx=P.x+Math.cos(P.yaw)*(f.i-1)*3+Math.sin(P.yaw)*4,gz=P.z-Math.sin(P.yaw)*(f.i-1)*3+Math.cos(P.yaw)*4,ux=gx-p.x,uz=gz-p.z,ud=Math.hypot(ux,uz);
   if(sit){}else if(ud>45){p.x=gx;p.z=gz}else if(ud>1.5){const sv=Math.min(7,ud*2)*dt,nx=p.x+ux/ud*sv,nz=p.z+uz/ud*sv;if(!blocked(nx,p.z,.5))p.x=nx;if(!blocked(p.x,nz,.5))p.z=nz}
   f.t-=dt;if(f.tg&&f.tg.dead)f.tg=null;
   if(f.t<0){f.t=rnd(.35,.7);let b=null,bd=50;for(const e of en){if(e.dead)continue;const d2=Math.hypot(e.g.position.x-p.x,e.g.position.z-p.z);if(d2<bd){bd=d2;b=e}}
    f.tg=null;const fa=new THREE.Vector3(p.x,1.4,p.z);if(b&&los2(fa,new THREE.Vector3(b.g.position.x,1.3,b.g.position.z))){f.tg=b;ln(fa,new THREE.Vector3(b.g.position.x,1.3,b.g.position.z),0x9bd1ff);snd(rnd(120,160),.05,.03,"sawtooth");if(Math.random()<.5){hitE(b,10*FD,0);if(b.dead)feed(f.n+": Tango down!")}}}
   f.g.rotation.y=Math.atan2(f.tg?f.tg.g.position.x-p.x:ux,f.tg?f.tg.g.position.z-p.z:uz)+Math.PI}
  for(let i=rks.length-1;i>=0;i--){const r=rks[i],p=r.m.position;r.v.y-=6*dt;p.addScaledVector(r.v,dt);r.t-=dt;let hit=p.y<.1||r.t<=0||blocked(p.x,p.z,.2,p.y);if(!hit){for(const e of en)if(!e.dead&&((e.mnt&&p.distanceTo(e.g.position)<3.5)||(r.h&&p.distanceTo(e.g.position)<3)))hit=true;for(const h2 of hls)if(!h2.dead&&p.distanceTo(h2.g.position)<5)hit=true}if(hit){rks.splice(i,1);world.remove(r.m);(r.h?blast:rpgBoom)(p.clone())}}
  extraStep(dt,now);if(ch){ch.r.rotation.y+=dt*30;if(P.ev>0&&P.y>(ch.wy||4.9)&&Math.hypot(P.x-(ch.wx||0),P.z-(ch.wz||-30))<2.6)win()}
  if(P.ev>0){P.ev-=dt;if(Math.ceil(P.ev)!=P.lc){P.lc=Math.ceil(P.ev);upd()}if(P.ev<=0)die()}
  if(P.veh){for(const e of en)if(!e.dead&&Math.hypot(e.g.position.x-P.x,e.g.position.z-P.z)<2.6)hitE(e,999,0,"ROADKILL")}
  if(P.hurt>0){P.hurt-=dt}else if(P.hp<100){P.hp=Math.min(100,P.hp+(rk()>=3?35:20)*dt);$("dmg").style.opacity=Math.max(0,(100-P.hp)/120);upd()}
  const eh=P.pr?.55:P.sl>0?.9:P.cr?1.0:1.6;P.eh+=(eh-P.eh)*Math.min(1,dt*10);P.ln+=(P.lt-P.ln)*Math.min(1,dt*10);
  if(!P.mn&&state=="play")ledge();if(P.mn&&!P.veh){const m=P.mn;m.t+=dt/.55;const k=Math.min(1,m.t),kx=Math.max(0,(k-.3)/.7);P.x=m.x0+(m.x1-m.x0)*kx;P.z=m.z0+(m.z1-m.z0)*kx;P.y=m.y0+(m.y1-m.y0)*Math.min(1,k*1.8);P.vy=0;if(k>=1)P.mn=null}
  if(gm)gunStep(dt);
  if(escMode==3)jetStep(dt);else if(P.veh){C.position.set(fpv?P.x:P.x+Math.sin(P.yaw)*7,fpv?P.y+1.6:P.y+3.2,fpv?P.z:P.z+Math.cos(P.yaw)*7);C.rotation.set(fpv?P.pitch:-.25,P.yaw,0,"YXZ");P.veh.position.set(P.x,P.y,P.z);P.veh.rotation.y=P.yaw}
  else{C.position.set(P.x+Math.cos(P.yaw)*P.ln*.6,P.eh+P.y,P.z-Math.sin(P.yaw)*P.ln*.6);C.rotation.set(P.pitch,P.yaw,-P.ln*.3,"YXZ")}
  gun.position.z=-.5+P.kick*.06;gun.position.x=ads?0:.25;gun.rotation.x=-P.swing*.7;gun.rotation.y=P.swing*.5;gun.visible=cur!=2&&!P.veh&&!P.un&&!(ads&&cur==3);scd.visible=zm()>0&&zm()<4;sc8.visible=zm()>=4;knv.visible=cur==2&&!P.veh&&!P.un;knv.rotation.x=-P.swing*1.4;knv.rotation.z=-P.swing*.6;
  {const a=A[cur],lo=!!a.las&&!P.veh&&!P.un;lzd.visible=lo;lb.visible=lo&&!ads;if(lo){const tg2=mesh.slice();en.forEach(e=>{if(!e.dead)tg2.push(...e.parts)});rc.setFromCamera({x:0,y:0},C);const hh=rc.intersectObjects(tg2,false)[0];lzd.position.copy(hh?hh.point:rc.ray.at(60,new THREE.Vector3()));const lc=a.las==1?0xff2222:0x22ff44;lzd.material.color.setHex(lc);lb.material.color.setHex(lc)}}
  {const vis=ads&&OPT[cur][A[cur].op]=="V";if(vis!==visOn){visOn=vis;en.forEach(e=>e.parts.forEach(p=>p.material.emissive.setHex(vis?0xff5522:nv?0x22ff44:0)))}}snw.visible=!!LV[lvl].snow&&state=="play";if(snw.visible){const sa=snw.geometry.attributes.position.array;for(let i=1;i<1200;i+=3){sa[i]-=dt*3;if(sa[i]<-9)sa[i]=9}snw.geometry.attributes.position.needsUpdate=true}$("scope").style.display=ads&&zm()>=4&&!P.veh?"block":"none";$("dot").style.display=ads&&zm()>0&&zm()<4&&!P.veh?"block":"none";C.fov+=((ads?(zm()?62/zm():50):75)-C.fov)*Math.min(1,dt*12);C.updateProjectionMatrix();gun.position.y=-.22+Math.sin(now/120)*((keys.KeyW||keys.KeyS)?.01:.002);if(P.rl>0)gun.position.y-=.12;gun.rotation.z=P.rl>0?.6:(keys.ShiftLeft&&keys.KeyW&&!ads)?-.35:0;
  for(const e of en){if(e.dead)continue;
   const g=e.g;let ttx=P.x,ttz=P.z;if(fr.length&&!LV[lvl].stealth){const dp=Math.hypot(P.x-g.position.x,P.z-g.position.z);let bd=dp;for(const f of fr){if(f.dead)continue;const dd=Math.hypot(f.g.position.x-g.position.x,f.g.position.z-g.position.z);if(dd<bd){bd=dd;ttx=f.g.position.x;ttz=f.g.position.z}}}const dx=ttx-g.position.x,dz=ttz-g.position.z,d=Math.hypot(dx,dz);if(e.stun>0){e.stun-=dt;continue}
   const st0=LV[lvl].stealth;if(e.alert||!st0)g.rotation.y=Math.atan2(dx,dz)+Math.PI;else g.rotation.y+=.35*dt;
   const see=d<(st0&&!e.alert?(P.pr?6:P.cr?9:keys.ShiftLeft?22:13):45)&&los(e);if(see){if(!e.alert){e.t=0;if(st0)feed("SPOTTED!")}e.alert=1}e.seen=see;
   if(e.alert){
    e.sd-=dt;const st=e.sd<0&&e.sd>-1.5;if(e.sd<-1.5)e.sd=rnd(1,3);
    const sp2=(e.mnt?(d>20?24:6):e.boss?2.2:3)*dt;let mx=0,mz=0;
    if(d>(e.boss?12:16)||!see){mx=dx/d;mz=dz/d}else if(st){mx=dz/d;mz=-dx/d}
    const nx=g.position.x+mx*sp2,nz=g.position.z+mz*sp2;
    if(!blocked(nx,g.position.z,.6,g.position.y))g.position.x=nx;if(!blocked(g.position.x,nz,.6,g.position.y))g.position.z=nz;
    e.t-=dt;
    if(see&&e.t<0){e.t=e.boss?.45:rnd(.7,1.4);snd(rnd(160,200),.08,.06,"sawtooth");ln(new THREE.Vector3(e.g.position.x,1.4*e.s,e.g.position.z),new THREE.Vector3(P.x+rnd(-.7,.7),1.1+P.y,P.z+rnd(-.7,.7)),0xff6a3a);
     const ft=fr.find(f=>!f.dead&&Math.random()<.35&&Math.hypot(f.g.position.x-g.position.x,f.g.position.z-g.position.z)<35);if(ft){ln(new THREE.Vector3(g.position.x,1.4,g.position.z),new THREE.Vector3(ft.g.position.x,1.2,ft.g.position.z),0xff6a3a);if(Math.random()<.5){ft.hp-=7;if(ft.hp<=0)fdown(ft)}}else if(Math.random()<.55-d/140){hurt(e.boss?10:6);const vx=-dx,vz=-dz;dirI(Math.atan2(vx*Math.cos(P.yaw)-vz*Math.sin(P.yaw),-vx*Math.sin(P.yaw)-vz*Math.cos(P.yaw)))}}
   }
  }
 }
 if(state=="play"){const rd=$("rad").getContext("2d"),c2=Math.cos(P.yaw),s2=Math.sin(P.yaw);rd.clearRect(0,0,130,130);rd.strokeStyle="#7ccf5a66";rd.beginPath();rd.arc(65,65,40,0,7);rd.stroke();
  for(const e of en){if(e.dead)continue;const dx=e.g.position.x-P.x,dz=e.g.position.z-P.z,X=65+(dx*c2-dz*s2),Y=65+(dx*s2+dz*c2);if(Math.hypot(X-65,Y-65)>58||(uav<=0&&!e.alert&&Math.hypot(dx,dz)>20))continue;rd.fillStyle=e.boss?"#ff0":"#e5484d";rd.fillRect(X-2,Y-2,5,5)}
  for(const f of fr){const dx=f.g.position.x-P.x,dz=f.g.position.z-P.z,X=65+(dx*c2-dz*s2),Y=65+(dx*s2+dz*c2);if(Math.hypot(X-65,Y-65)<58){rd.fillStyle="#5ab0ff";rd.fillRect(X-2,Y-2,5,5)}}
  rd.fillStyle="#5ab0ff";rd.beginPath();rd.moveTo(65,58);rd.lineTo(61,69);rd.lineTo(69,69);rd.fill()}
 R.render(S,C);
}
{const ms=$("msel");LV.forEach((l,i)=>{const b=document.createElement("button");b.textContent=(i+1)+". "+l.n.replace(/^MISSION \d+\W+/,"");b.onclick=()=>pick(i);ms.appendChild(b)})}
// ===== EXTRA PACK: vehicles, thermal, binoculars, storms, new missions =====
let SHP=null,fpv=false,rcl=false,SP=null,CIN=null,cinDone=false;let vehs=[],DR=null,dbm=[],RC=null,SH=null,DV=null,RV=null,FD=1,duo=0,sled2=null,bino=false,thOn=false,thW=null,tsave=null,fsave=null,SHEP=null,thunder=0;
const TW=new THREE.MeshBasicMaterial({color:0xffffff}),TG=new THREE.MeshBasicMaterial({color:0xbfc3c6});
const hx=document.createElement("div");hx.id="hx";hx.style.cssText="position:absolute;left:50%;top:60px;transform:translateX(-50%);font-size:14px;letter-spacing:2px;text-shadow:0 1px 3px #000;color:#ffd166;z-index:2;white-space:nowrap";$("hud").appendChild(hx);
const binEl=document.createElement("div");binEl.style.cssText="position:absolute;inset:0;display:none;z-index:1;background:radial-gradient(circle at 50% 50%,#0000 0 30vmin,#000 30.4vmin)";$("hud").appendChild(binEl);
const rnp=new THREE.Points(new THREE.BufferGeometry().setAttribute("position",new THREE.BufferAttribute(new Float32Array(1500).map((v,i)=>i%3==0?rnd(-14,14):i%3==1?rnd(-9,9):rnd(-18,2)),3)),new THREE.PointsMaterial({color:0x9fb4c8,size:.07}));C.add(rnp);rnp.visible=false;
const droneEl=document.createElement("div");droneEl.style.cssText="position:absolute;inset:0;display:none;z-index:1;pointer-events:none;box-shadow:inset 0 0 140px 50px #000b;background:repeating-linear-gradient(#0000 0 3px,#0003 3px 4px)";droneEl.innerHTML='<div style="position:absolute;left:50%;top:50%;width:64px;height:64px;margin:-32px;border:2px solid #fff;border-radius:50%"></div><div style="position:absolute;left:50%;top:50%;width:100px;height:2px;margin:-1px -50px;background:#fff"></div><div style="position:absolute;left:50%;top:50%;width:2px;height:100px;margin:-50px -1px;background:#fff"></div><div style="position:absolute;left:24px;top:90px;color:#fff;font-size:12px;letter-spacing:2px">UAV-1 \u00b7 IR CAM \u00b7 WHITE-HOT</div><div style="position:absolute;inset:18px;border:2px solid #fff6"></div>';$("hud").appendChild(droneEl);
const cbar=document.createElement("div");cbar.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:3;display:none";cbar.innerHTML='<div style="position:absolute;left:0;right:0;top:0;height:12vh;background:#000"></div><div style="position:absolute;left:0;right:0;bottom:0;height:12vh;background:#000"></div>';$("hud").appendChild(cbar);
const fadeEl=document.createElement("div");fadeEl.style.cssText="position:absolute;inset:0;background:#000;opacity:0;pointer-events:none;transition:opacity .5s;z-index:4";$("hud").appendChild(fadeEl);
function fd(c,o){fadeEl.style.background=c;fadeEl.style.opacity=o}
function cinStart(){CIN={t:0,dur:10,x:P.x,z:P.z,y:P.y,l:[[.3,"0500 hrs. Coastal compound, somewhere on the Arabian Sea."],[3.2,"Price: Eyes up, Tom. One commander, a lot of guards, and we do it quietly."],[6.2,"Overlord: The target is inside. Make it count."],[8.4,"THE ONLY EASY DAY... WAS YESTERDAY"]]};en.forEach(e=>e.stun=12);P.un=1;cbar.style.display="block"}
function mkBoat(c){const g=new THREE.Group(),m=new THREE.MeshLambertMaterial({color:c}),h=new THREE.Mesh(new THREE.BoxGeometry(2.4,.9,6),m),b=new THREE.Mesh(new THREE.BoxGeometry(1.6,.8,2),m),w=new THREE.Mesh(new THREE.BoxGeometry(1.8,.9,.1),new THREE.MeshLambertMaterial({color:0x99c4e0}));h.position.y=.45;b.position.set(0,.9,-3.6);w.position.set(0,1.3,-.5);g.add(h,b,w);g.sp=28;world.add(g);return g}
function mkNPC(n,c,x,z){const g=new THREE.Group(),m=new THREE.MeshLambertMaterial({color:c}),bo=new THREE.Mesh(new THREE.BoxGeometry(.7,1.1,.4),m),hd=new THREE.Mesh(new THREE.SphereGeometry(.22,10,8),new THREE.MeshLambertMaterial({color:0xd2a37c})),lg=new THREE.Mesh(new THREE.BoxGeometry(.6,.6,.35),dark);bo.position.y=1.15;hd.position.y=1.9;lg.position.y=.3;const cv=document.createElement("canvas");cv.width=256;cv.height=64;const c2=cv.getContext("2d");c2.font="bold 40px Arial";c2.fillStyle="#ffd166";c2.textAlign="center";c2.fillText(n,128,46);const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(cv),depthTest:false}));sp.scale.set(2.4,.6,1);sp.position.y=2.6;g.add(bo,hd,lg,sp);g.position.set(x,0,z);world.add(g);return g}
function mkDroneMesh(){const g=new THREE.Group(),m=new THREE.MeshLambertMaterial({color:0x6b7278});[[1.4,.5,3.4,0,0,0],[8,.12,1.1,0,.1,.2],[3,.1,.8,0,.2,1.7]].forEach(a=>{const b=new THREE.Mesh(new THREE.BoxGeometry(a[0],a[1],a[2]),m);b.position.set(a[3],a[4],a[5]);g.add(b)});g.visible=false;world.add(g);return g}
function startShep(){nw(0xaec4d6,420);MB=12000;const LN=7600;pg(2400,LN+800,0x4a6a3a,0,-.1,-LN/2);pg(90,LN+400,0x2f5a7a,0,0,-LN/2);const lm=new THREE.MeshLambertMaterial({color:0x2d5a3d});for(let i=0;i<800;i++){const h=rnd(6,12),c=new THREE.Mesh(new THREE.ConeGeometry(2.4,h,7),lm);c.position.set((i%2?1:-1)*rnd(52,130),h/2,-i*9.5+rnd(-4,4));world.add(c)}
 pinit(0,0,-5,{});const bt=mkBoat(0x3a6ea5);bt.position.set(0,0,-5);P.veh=bt;P.pw=0;sw(1);mkFriends("JAMES");const sb=mkBoat(0x8a3030);SP={st:0,t:0,sb,wave:6,q:[]};total=9999;kills=0;sub("Price: Shepherd is running for the river! Stay on his boat, Tom!")}
function spLand(){nw(0xaec4d6,300);pg(1400,1400,0x4a6a3a);pg(200,260,0x2f5a7a,0,.03,90);const rm=MT();for(let i=0;i<16;i++)box(rnd(-60,60),rnd(-120,10),rnd(3,7),rnd(2,5),rnd(2,5),rm);
 const wr=new THREE.Group();[[7,2.4,3,0,1.2,0],[2,.5,.5,3,2.2,0],[.6,.6,6,-2,.5,2]].forEach(a=>{const b=new THREE.Mesh(new THREE.BoxGeometry(a[0],a[1],a[2]),new THREE.MeshLambertMaterial({color:0x2c3138}));b.position.set(a[3],a[4],a[5]);wr.add(b)});wr.position.set(0,0,-40);wr.rotation.z=.2;world.add(wr);
 const car=new THREE.Group(),cm=new THREE.MeshLambertMaterial({color:0x7a5a3a});[[4.2,1.2,2,0,.9,0],[2.2,1,1.8,-.3,1.9,0]].forEach(a=>{const b=new THREE.Mesh(new THREE.BoxGeometry(a[0],a[1],a[2]),cm);b.position.set(a[3],a[4],a[5]);car.add(b)});car.position.set(70,0,-100);world.add(car);
 pinit(0,0,40,{hp:60});sw(2);mkFriends("JAMES");SP={st:4,t:0,car,q:[]};spawn(false);const e=en[en.length-1];e.g.position.set(0,0,-34);e.stun=1e9;e.kn=1;e.hp=1e6;e.alert=1;SP.sd=e;total=9999;kills=0;fd("#000",0);sub("James: We're alive... Tom, someone is climbing out of the wreck!")}
function spStep(dt){const S0=SP;S0.t+=dt;let h="";
 if(S0.st<=1){keys.KeyW=1;P.x=Math.max(-42,Math.min(42,P.x));P.yaw=Math.max(-.9,Math.min(.9,P.yaw*Math.max(0,1-dt*1.2)));S0.wave-=dt;if(S0.wave<=0){S0.wave=12;for(let i=0;i<2;i++){spawn(false);const e=en[en.length-1];e.g.position.set(P.x+rnd(-25,25),0,P.z-110);e.alert=1;mountE(e)}}
  en=en.filter(e=>{if(e.g.position.z>P.z+160){world.remove(e.g);return false}return true});const ah=P.z-95;
  if(S0.st==0){S0.sb.position.set(Math.sin(S0.t*.6)*18,0,ah);h="CHASE SHEPHERD'S BOAT \u00b7 "+Math.ceil(60-S0.t)+"s";if(S0.t>=60){S0.st=1;world.remove(S0.sb);S0.hc=mkChopper(0,16,ah);sub("Price: He's reached his chopper! Don't lose him!")}}
  else{S0.hc.position.set(Math.sin(S0.t*.4)*20,18+Math.sin(S0.t*.7)*2,ah);S0.hc.r.rotation.y+=dt*30;const rem=Math.max(0,240-S0.t);h="SHEPHERD'S CHOPPER \u00b7 "+Math.floor(rem/60)+":"+String(Math.ceil(rem%60)%60).padStart(2,"0");if(S0.t>120&&!S0.m1){S0.m1=1;sub("James: I need a clear shot, Tom. Keep her steady!")}if(S0.t>=235&&!S0.m2){S0.m2=1;sub("James: I've got him. Easy...")}
   if(S0.t>=240){S0.st=2;S0.t2=0;blast(S0.hc.position.clone());S0.fz=P.z-170;sub("James: Splash one chopper!")}}}
 else if(S0.st==2){keys.KeyW=1;S0.t2+=dt;S0.hc.position.y-=(10+S0.t2*18)*dt;S0.hc.rotation.z+=dt*2;if(!S0.wf){S0.wf=1;const wf=new THREE.Mesh(new THREE.BoxGeometry(90,80,3),new THREE.MeshBasicMaterial({color:0xeaf4ff,transparent:true,opacity:.8}));wf.position.set(0,-30,S0.fz);world.add(wf)}h="WATERFALL AHEAD!";if(P.z<S0.fz){S0.st=3;S0.t3=0;S0.vy=0;S0.y=0;sub("James: Waterfall! There's no way back!")}}
 else if(S0.st==3){S0.t3+=dt;keys.KeyW=1;S0.vy-=18*dt;S0.y+=S0.vy*dt;P.y=S0.y;P.vy=0;if(P.veh)P.veh.position.y=S0.y;C.position.set(P.x,S0.y+4,P.z+8);C.lookAt(P.x,S0.y,P.z-4);if(S0.t3>1.4)fd("#fff",1);if(S0.t3>2.6)spLand()}
 else if(S0.st==4){const e=S0.sd,p=e.g.position,dx=P.x-p.x,dz=P.z-p.z,d=Math.hypot(dx,dz)||1;e.g.rotation.y=Math.atan2(dx,dz)+Math.PI;h="KNIFE THE SURVIVOR (X or key 3)";if(d>3.5){p.x+=dx/d*2.6*dt;p.z+=dz/d*2.6*dt}else if(!S0.ck){S0.ck=1;sub("The soldier raises his pistol... *click*. It is empty!")}if(e.dead){S0.st=5;S0.t=0;sub("Tom: Where is Shepherd?!")}}
 else if(S0.st==5){if(!S0.sh){spawn(true);const s2=en[en.length-1];s2.g.position.set(0,0,-60);s2.stun=1e9;s2.hp=1e9;s2.alert=1;mkMark(s2);S0.sh=s2;S0.cx=S0.car.position.x-3;S0.cz=S0.car.position.z+2}
  const s2=S0.sh,p=s2.g.position,dx=S0.cx-p.x,dz=S0.cz-p.z,d=Math.hypot(dx,dz);h="CHASE SHEPHERD";if(d>1.5){p.x+=dx/d*6.5*dt;p.z+=dz/d*6.5*dt;s2.g.rotation.y=Math.atan2(dx,dz)+Math.PI}
  if(d<2&&Math.hypot(P.x-p.x,P.z-p.z)<4){S0.st=6;S0.t=0;S0.px=P.x;S0.pz=P.z;S0.shk=1.2;S0.q=[[2.5,()=>{sub('Shepherd: "You know, I understand. You were never meant to get this far."');P.hp=Math.min(P.hp,18)}],[5,()=>{sub("He drives Tom's own knife into his chest.");P.pr=1;P.pitch=.8}],[8,()=>sub('Shepherd: "Every war needs someone to blame. Goodbye, Tom."')],[10.5,()=>{S0.pr=mkNPC("PRICE",0x3a5a2e,P.x+25,P.z+12);sub("Price: Get away from him!")}]];sub("Shepherd catches Tom's wrist and slams his head into the car.")}}
 else if(S0.st>=6&&S0.st<=8){P.x=S0.px;P.z=S0.pz;P.hp=Math.max(P.hp,8);P.hurt=9;const sh=S0.sh.g.position;if(S0.shk>0){S0.shk-=dt;C.position.x+=rnd(-.2,.2);C.position.y+=rnd(-.2,.2)}
  while(S0.q.length&&S0.q[0][0]<=S0.t)S0.q.shift()[1]();
  if(S0.st==6){h="SHEPHERD HAS YOU PINNED";if(S0.pr){const g=S0.pr.position,ux=sh.x-g.x,uz=sh.z-g.z,ud=Math.hypot(ux,uz)||1;g.x+=ux/ud*9*dt;g.z+=uz/ud*9*dt;if(ud<2.2){S0.st=7;S0.t=0;S0.q=[[4,()=>sub("Shepherd throws Price off and pins James under him...")]];sub("Price tackles Shepherd!")}}}
  else if(S0.st==7){h="PRICE FIGHTS SHEPHERD \u00b7 "+Math.ceil(10-S0.t)+"s";S0.pr.position.set(sh.x+Math.sin(S0.t*9)*.7,0,sh.z+Math.cos(S0.t*7)*.7);if(S0.t>4&&fr[0]){fr[0].dead=1;fr[0].g.rotation.x=-1.4;fr[0].g.position.set(sh.x+.3,.3,sh.z+.5)}if(S0.t>=10){S0.st=8;S0.t=0;P.pitch=.3;sub("Press F: pull the knife out and throw it!")}}
  else{h="PRESS F \u00b7 PULL OUT THE KNIFE AND THROW IT";if(S0.t>8&&state=="play"){SP=null;sub("Too slow...");die()}}}
 else if(S0.st==9){P.x=S0.px;P.z=S0.pz;P.hp=Math.max(P.hp,8);const sh=S0.sh.g.position;if(S0.t<.1)ln(new THREE.Vector3(P.x,1.2,P.z),new THREE.Vector3(sh.x,1.6,sh.z),0xffffff);if(S0.t>.8&&!S0.fl){S0.fl=1;S0.sh.g.rotation.x=-1.5;S0.sh.g.position.y=.3;sub("The knife hits Shepherd. He collapses...")}if(S0.t>1.8){S0.st=10;S0.t=0;fd("#000",1);sub("Tom's vision fades to black...")}}
 else if(S0.st==10){if(S0.t>5){S0.st=11;S0.t=0;fd("#000",0);const px=S0.px,pz=S0.pz;S0.cam=[px+4,2.4,pz+6];S0.tom=mkNPC("TOM",0x2b2f36,px,pz);S0.tom.rotation.x=-1.3;S0.tom.position.y=.3;S0.prx=mkNPC("PRICE",0x3a5a2e,px+1.2,pz+1);S0.pr&&world.remove(S0.pr);cbar.style.display="block";sub("Price comes to. He lifts Tom up by his left arm.");S0.nc=mkChopper(px+140,24,pz-140)}}
 else if(S0.st==11){const t=S0.t,px=S0.px,pz=S0.pz;C.position.set(S0.cam[0],S0.cam[1],S0.cam[2]);C.lookAt(px,1.2,pz);P.x=px;P.z=pz;P.hp=Math.max(P.hp,8);S0.nc.r.rotation.y+=dt*30;
  if(t>2){S0.tom.rotation.x=Math.max(-1.3,-1.3+(t-2)*.8);if(t>3.6){S0.tom.rotation.x=0;S0.tom.position.y=0}S0.tom.position.x=px+Math.min(1,(t-2)*.3)*.6}
  const u=Math.min(1,t/7);S0.nc.position.set(px+140*(1-u)+12*u,24*(1-u)+6*u,pz-140*(1-u)-6*u);
  if(t>5&&!S0.nk){S0.nk=1;S0.nik=mkNPC("NIKOLAI",0x6a4a2a,px+11,pz-5);sub('Nikolai: "Price! Tom! Come on, get in, hurry!"')}
  if(S0.nik){const g=S0.nik.position,ux=px+2-g.x,uz=pz-g.z,ud=Math.hypot(ux,uz)||1;if(ud>1.5){g.x+=ux/ud*6*dt;g.z+=uz/ud*6*dt}else if(!S0.nb){S0.nb=1;sub("Nikolai takes Tom's right arm. Together they carry him to the chopper.")}}
  if(S0.nb){const k=Math.min(1,(t-S0.tb0||0)*.15);if(!S0.tb0)S0.tb0=t;const tx=px+11,tz=pz-5;[S0.tom,S0.prx,S0.nik].forEach((g,i)=>{if(g){g.position.x+=(tx-g.position.x)*dt*.5;g.position.z+=(tz-g.position.z)*dt*.5}})}
  if(t>14&&state=="play"){fd("#000",1);if(t>15){SP=null;win()}}}
 return h}
function thermal(on){thOn=on;if(on){thW=world;tsave=S.background.clone();fsave=S.fog?S.fog.color.clone():null;S.background=new THREE.Color(0);if(S.fog)S.fog.color.set(0)}else{if(tsave)S.background=tsave;if(S.fog&&fsave)S.fog.color.copy(fsave)}
 world.traverse(o=>{if(!o.isMesh)return;const u=o.userData;if(on){u.om=o.material;o.material=(u.e||u.veh||u.heli)?TW:TG}else if(u.om){o.material=u.om;u.om=null}})}
function mkEV(t,x,z){const g=new THREE.Group(),P0=[],cf={tank:{hp:700,arm:.12,sp:5,rng:60,ft:3,dm:25,col:0x4b5a3a},jeep:{hp:140,arm:.8,sp:16,rng:6,ft:1,dm:12,col:0x6b5d42},mgjeep:{hp:180,arm:.7,sp:13,rng:30,ft:.18,dm:3,col:0x5d6b4a},mud:{hp:420,arm:.25,sp:7,rng:28,ft:.12,dm:3,col:0x4a5560}}[t],m=new THREE.MeshLambertMaterial({color:cf.col}),pt=(w,h,d,px,py,pz,mt)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mt||m);b.position.set(px,py,pz);g.add(b);P0.push(b);return b};
 if(t=="tank"){pt(3.4,1.1,6,0,1,0);pt(2.2,.9,2.6,0,1.9,.2);pt(.3,.3,4,0,1.9,-2.8,dark)}else if(t=="mud"){pt(3,1.7,7.5,0,1.3,0);pt(1.6,.8,1.8,0,2.6,0);pt(.2,.2,1.4,0,2.7,-1.2,dark)}else{pt(2.2,.8,4.2,0,.9,0);pt(1.8,.8,1.6,0,1.6,.3);if(t=="mgjeep")pt(.2,.2,1.2,0,2.2,-.3,dark)}
 for(const sx of[-1.3,1.3])for(const sz of[-1.6,1.6])pt(.5,.9,.9,sx,.45,sz,dark);
 g.position.set(x,0,z);world.add(g);const v={g,t,hp:cf.hp,arm:cf.arm,sp:cf.sp,rng:cf.rng,ft:cf.ft,dm:cf.dm,tm:rnd(0,1),parts:P0,dead:0};P0.forEach(p=>p.userData.veh=v);vehs.push(v);return v}
function vhit(v,d,raw){if(v.dead)return;v.hp-=raw?d:d*v.arm;if(v.hp<=0){v.dead=1;kills++;score+=400;feed(v.t.toUpperCase()+" DESTROYED +400".replace(/\\\\/g,""));blast(v.g.position.clone());world.remove(v.g);if(kills>=total&&!P.ev)endLevel()}}
function evSpawn(){const L=LV[lvl];let l=[];if(lvl==0)l=[["jeep",30,0]];else if(lvl==1)l=[["mgjeep",-40,-20],["jeep",40,-40]];else if(lvl==3)l=[["tank",0,-60],["mud",50,-30],["mgjeep",-50,-40]];else if(L.rain)l=[["mud",30,-40],["jeep",-30,-50]];else if(L.shep)l=[["tank",0,-50]];else if(L.easy)l=[["mgjeep",40,-30],["jeep",-40,-30]];l.forEach(a=>{mkEV(a[0],a[1],a[2]);total++})}
function nw(sky,far){state="play";escMode=false;MB=2000;gm=0;if(world)S.remove(world);world=new THREE.Group();S.add(world);obs=[];mesh=[];en=[];fr=[];gr=[];pk=[];rks=[];ch=null;tgt=null;jp=null;heli=null;nvOff();S.background=new THREE.Color(sky);S.fog=new THREE.Fog(sky,30,far);hx.textContent=""}
function pg(w,d,c,x,y,z){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshLambertMaterial({color:c}));m.rotation.x=-Math.PI/2;m.position.set(x||0,y||0,z||0);world.add(m);return m}
function pinit(x,y,z,o){P=Object.assign({x,z,y,vy:0,yaw:0,pitch:0,hp:100,am:30,rs:120,rl:0,ft:0,hurt:0,kick:0,gr:3,gt:0,kn:0,swing:0,sf:0,ln:0,lt:0,eh:1.6,sl:0,pr:0,veh:null,ev:0,nb:100,lc:0,sx:0,sz:0,un:0},o||{});ads=false;mouseDown=false;cur=0;streak=0;ksq=[];uav=0;$("dmg").style.opacity=0}
const MT=()=>new THREE.MeshLambertMaterial({color:0x7a7f84});
function startX(k){
 if(k=="drone"){nw(0xd9c9a6,500);pg(1200,1200,0xc9ad7a);const bm=new THREE.MeshLambertMaterial({color:0xb09a78});for(let i=0;i<20;i++)box(rnd(-60,60),rnd(-60,60),rnd(6,12),rnd(6,12),rnd(3,7),bm);
  pinit(0,0,150,{un:1,pitch:-1.2});DR={mesh:mkDroneMesh(),x:0,y:70,z:150,bm:16,cd:0,px:0,pz:150};dbm=[];SR=60;for(let i=0;i<22;i++){spawn(false);const e=en[en.length-1];e.alert=0;e.g.position.set(rnd(-55,55),0,rnd(-55,55))}
  mkEV("jeep",20,10).sp=0;mkEV("tank",-25,-15).sp=0;total=en.length+vehs.length;kills=0;sub("Operator: Drone online, Tom. Click fires a Hellfire missile where you aim. C toggles third-person view. WASD flies, Space/C altitude. Clear the compound.")}
 else if(k=="race"){nw(0xe8d2a8,700);pg(3000,3000,0xd2b886,0,0,-600);pg(18,3000,0x4a4a4a,0,.03,-1000);const rm=new THREE.MeshLambertMaterial({color:0x9a8466});for(let i=0;i<40;i++)box((i%2?1:-1)*rnd(14,40),-rnd(20,1100),rnd(3,8),rnd(3,8),rnd(2,6),rm);
  pinit(0,0,40,{});mkJeep();jp.position.set(0,0,35);jp.sp=56;P.veh=jp;P.pw=0;sw(1);const pl=new THREE.Group();[[4,4,30,0,0,0],[34,.5,6,0,0,2],[10,.4,4,0,0,13]].forEach(a=>{const b=new THREE.Mesh(new THREE.BoxGeometry(a[0],a[1],a[2]),new THREE.MeshLambertMaterial({color:0xcfd6cf}));b.position.set(a[3],a[4],a[5]);pl.add(b)});pl.position.set(0,5,-360);world.add(pl);RC={z:-360,y:5,v:0,t:0,m:pl};
  mkEV("mgjeep",6,-160);mkEV("mgjeep",-6,-260);total=9999;kills=0;sub("Overlord: The traitor's plane is airborne and flying low! Catch it and press F to board before it climbs, Tom!")}
 else if(k=="ship"){nw(0x9cc0de,600);const oc=pg(3000,3000,0x1d4e7a,0,-1,0);SH={oc,rope:1,col:0,done:0,ct:0};box(0,0,26,190,6,MT());box(0,70,14,12,18,new THREE.MeshLambertMaterial({color:0xb8bec4}));const cc=[0xb5483a,0x3a6aa5,0xd6a23a,0x4a8a52];for(let i=0;i<14;i++)box(rnd(-8,8),rnd(-70,40),4,10,8.6,new THREE.MeshLambertMaterial({color:cc[i%4]}));
  pinit(0,46,95,{});ch=mkChopper(0,48,95);SH.rm=new THREE.Mesh(new THREE.BoxGeometry(.06,40,.06),new THREE.MeshLambertMaterial({color:0xd9b36a}));world.add(SH.rm);SR=60;for(let i=0;i<22;i++){spawn(false);const e=en[en.length-1];e.g.position.set(rnd(-10,10),6,rnd(-80,55));e.alert=1}SH.n=en.length;total=9999;kills=0;sub("Pilot: Fast-rope in over the stern, Tom. Clear the deck!")}
else if(k=="sky"){nw(0x7fb0dc,3000);pg(8000,8000,0x4d7a3a);const rg=new THREE.Mesh(new THREE.CylinderGeometry(45,45,300,24,1,true),new THREE.MeshBasicMaterial({color:0x44ff66,fog:false,transparent:true,opacity:.3,side:2}));rg.position.y=150;world.add(rg);const bm=new THREE.MeshLambertMaterial({color:0x9a8a78});for(let i=0;i<30;i++)box(rnd(-110,110),rnd(-110,110),rnd(5,12),rnd(5,12),rnd(3,9),bm);
  pinit(0,3000,300,{un:1});DV={x:0,y:3000,z:300,c:0,ph:0,t:0};SR=90;for(let i=0;i<24;i++){spawn(false);const e=en[en.length-1];e.alert=0;e.stun=1e9}mkEV("jeep",40,30);mkEV("mgjeep",-45,-40);total=en.length+vehs.length;kills=0;sub("Jumpmaster: 10 seconds to the drop zone! Press F to jump, or the plane goes down!")}
  else if(k=="shep"){nw(0xb89a72,500);pg(1200,1200,0xc2a574);const rm=MT();for(let i=0;i<14;i++)box(rnd(-45,45),rnd(-45,30),rnd(3,7),rnd(2,5),rnd(2,5),rm);box(0,-38,22,5,3,rm);
  pinit(0,0,40,{un:1});SR=1;spawn(true);const e=en[en.length-1];e.g.position.set(0,0,-10);e.stun=1e9;e.hp=1e9;e.alert=1;mkMark(e);SHP={e,hp:100,st:0,t:0,cd:0,pc:0};total=9999;kills=0;sub("Overlord: No weapons, Tom. Shepherd wants it personal. Fists only: click to punch.")}
 else if(k=="shep2"){startShep()}
 else if(k=="rig"){nw(0x7fa0b8,300);pg(2000,2000,0x1d4e7a,0,-.5,0);const mt=MT();box(0,0,110,110,10,mt);for(let k2=1;k2<=10;k2++)box(0,56+(10-k2)*1.3,6,1.3,k2,mt);box(-30,-30,14,14,24,new THREE.MeshLambertMaterial({color:0xb8bec4}));for(let i=0;i<14;i++)box(rnd(-45,45),rnd(-45,35),rnd(3,7),rnd(3,7),rnd(12,14),new THREE.MeshLambertMaterial({color:i%2?0xb5483a:0x3a6aa5}));
  pinit(0,0,75,{});A[0].sup=A[1].sup=A[3].sup=1;SR=50;for(let i=0;i<18;i++){spawn(false);const e=en[en.length-1];e.g.position.set(rnd(-48,48),10,rnd(-48,30));e.alert=0}total=en.length;kills=0;sub("Price: Oilrig. Suppressed weapons, stay quiet. Climb the stairs and clear the platform.")}
 else if(k=="raven"){nw(0xbfc9d4,420);pg(1200,1200,0x59664a,0,0,-300);pg(12,700,0x55575a,60,.03,-250);for(let i=0;i<60;i++)box(rnd(-120,120),rnd(-250,80),1.2,1.2,rnd(5,9),dark);box(-60,-170,7,7,5,MT());
  pinit(0,0,100,{});mkFriends();RV={st:0};FD=1;SR=40;for(let i=0;i<3;i++){spawn(false);const e=en[en.length-1];e.g.position.set(rnd(-40,40),0,rnd(-60,0));e.alert=0}total=9999;kills=0;sub("Price: Black Raven. Three tangos ahead. Drop them quietly, Tom.")}}
function extraStep(dt,now){
 const L=LV[lvl];
 const thN=!!DR||(ads&&OPT[cur][A[cur].op]=="T"&&!P.veh&&!P.un);if(thOn&&thW!==world)thOn=false;if(thN!==thOn)thermal(thN);
 droneEl.style.display=DR?"block":"none";binEl.style.display=bino?"block":"none";if(bino){C.fov=12;C.updateProjectionMatrix();const d=new THREE.Vector3();C.getWorldDirection(d);for(const e of en){if(e.dead||e.mk)continue;const v=e.g.position.clone().sub(C.position),Ld=v.length();if(Ld<220&&v.normalize().dot(d)>.98){e.mk=1;mkMark(e);feed("TARGET TAGGED")}}}
 if(L.snow||escMode==2){if(S.fog){S.fog.near=4;S.fog.far=55}snw.material.size=.3;const a=snw.geometry.attributes.position.array;for(let i=0;i<1200;i+=3){a[i]+=dt*9;if(a[i]>15)a[i]=-15}}
 rnp.visible=!!L.rain&&state=="play";if(rnp.visible){const a=rnp.geometry.attributes.position.array;for(let i=1;i<1500;i+=3){a[i]-=dt*28;if(a[i]<-9)a[i]=9}rnp.geometry.attributes.position.needsUpdate=true;if(S.fog){S.fog.near=8;S.fog.far=85}if(thunder>0){thunder-=dt;if(!nv&&!thOn)HL.intensity=thunder>0?2.6:.9}else if(Math.random()<dt*.15){thunder=.15;snd(55,.9,.25,"sawtooth")}}
 for(const r of rks){if(!r.hm)continue;const p=r.m.position;let b=null,bd=160;const cs=[...hls.filter(h=>!h.dead).map(h=>h.g),...vehs.filter(v=>!v.dead).map(v=>v.g),...en.filter(e=>!e.dead&&e.mnt).map(e=>e.g)];for(const g of cs){const d=p.distanceTo(g.position);if(d<bd&&r.v.clone().normalize().dot(g.position.clone().sub(p).normalize())>.3){bd=d;b=g}}if(b){const sp=r.v.length(),wn=b.position.clone().sub(p).normalize().multiplyScalar(sp);r.v.lerp(wn,Math.min(1,dt*2.5));r.v.y+=6*dt;r.m.lookAt(p.clone().add(r.v));if(bd<4)r.t=0}}
 for(const v of vehs){if(v.dead||DV||CIN)continue;const p=v.g.position,dx=P.x-p.x,dz=P.z-p.z,d=Math.hypot(dx,dz);v.g.rotation.y=Math.atan2(dx,dz)+Math.PI;if(v.sp>0&&d>v.rng*.7&&d<140){const nx=p.x+dx/d*v.sp*dt,nz=p.z+dz/d*v.sp*dt;if(!blocked(nx,p.z,1.6))p.x=nx;if(!blocked(p.x,nz,1.6))p.z=nz}
  v.tm-=dt;if(v.tm<=0&&d<(v.t=="jeep"?5:v.rng+25)&&state=="play"){v.tm=v.ft;const a=new THREE.Vector3(p.x,1.8,p.z),b=new THREE.Vector3(P.x,P.y+1.3,P.z);if(v.t=="jeep"||los2(a,b)){if(v.t!="jeep")ln(a,b,0xff6a3a);if(Math.random()<(v.t=="tank"?.7:.45)){hurt(v.dm);dirI(Math.atan2((p.x-P.x)*Math.cos(P.yaw)-(p.z-P.z)*Math.sin(P.yaw),-(p.x-P.x)*Math.sin(P.yaw)-(p.z-P.z)*Math.cos(P.yaw)))}}}}
 if(duo&&sled2&&P.veh){const v=P.veh.position,cs=Math.cos(P.yaw),sn=Math.sin(P.yaw);sled2.position.set(v.x+3.6*cs+.8*sn,0,v.z-3.6*sn+.8*cs);sled2.rotation.y=P.yaw}
 if(escMode==2&&P.veh&&state=="play"){if(!P.jmp&&P.z<-1136&&P.y>=5.5){P.jmp=1;P.vy=9.5;sub("Hold on! Jump the gap!")}if(P.z<-1138&&P.z>-1182&&P.y<=.4){sub("You fell into the freezing water!");die()}}
 let h="";
 if(DR){P.x=DR.px;P.z=DR.pz;P.y=0;P.vy=0;const f=(keys.KeyW?1:0)-(keys.KeyS?1:0),s=(keys.KeyD?1:0)-(keys.KeyA?1:0),sp=(keys.ShiftLeft?30:16)*dt;DR.x+=(-Math.sin(P.yaw)*f+Math.cos(P.yaw)*s)*sp;DR.z+=(-Math.cos(P.yaw)*f-Math.sin(P.yaw)*s)*sp;DR.y=Math.max(12,Math.min(120,DR.y+((keys.Space?1:0)-(keys.KeyC?1:0))*20*dt));DR.mesh.position.set(DR.x,DR.y,DR.z);DR.mesh.rotation.y=P.yaw;DR.mesh.visible=fpv;if(fpv){const cp=Math.cos(P.pitch);C.position.set(DR.x+Math.sin(P.yaw)*cp*14,DR.y-Math.sin(P.pitch)*14+3,DR.z+Math.cos(P.yaw)*cp*14)}else C.position.set(DR.x,DR.y,DR.z);C.rotation.set(P.pitch,P.yaw,0,"YXZ");
  DR.cd-=dt;if(mouseDown&&DR.cd<=0&&DR.bm>0){DR.cd=1;DR.bm--;const d=new THREE.Vector3();C.getWorldDirection(d);const m=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,1.6,8).rotateX(Math.PI/2),new THREE.MeshLambertMaterial({color:0xcfd6cf}));m.position.set(DR.x,DR.y-1,DR.z).addScaledVector(d,2);m.lookAt(m.position.clone().add(d));world.add(m);dbm.push({m,v:d.multiplyScalar(75),t:6});snd(110,.5,.25,"sawtooth")}
  for(let i=dbm.length-1;i>=0;i--){const b=dbm[i],p=b.m.position;p.addScaledVector(b.v,dt);b.t-=dt;ln(p.clone(),p.clone().addScaledVector(b.v,-.05),0xffffff);if(p.y<=.5||b.t<=0||blocked(p.x,p.z,.3,p.y)){dbm.splice(i,1);world.remove(b.m);blast(p.clone())}}
  if(DR.bm<=0&&DR.cd<=-1&&!dbm.length&&kills<total&&!DR.f){DR.f=1;sub("Drone out of ordnance. Mission failed.");setTimeout(()=>{if(state=="play")die()},2500)}h="DRONE \u00b7 MISSILES "+DR.bm+" \u00b7 HOSTILES "+(total-kills)}
 if(RC){RC.t+=dt;RC.v=Math.min(34,RC.v+5*dt);RC.z-=RC.v*dt;if(RC.t>45)RC.y+=(RC.t-45)*.6*dt;RC.m.position.set(0,RC.y,RC.z);const d=Math.hypot(P.x,P.z-RC.z);RC.near=d<18&&RC.y<14;h=RC.near?"PRESS F TO BOARD THE PLANE":"PLANE "+Math.round(d)+"m \u00b7 ALT "+Math.round(RC.y)+"m";if(RC.y>25&&state=="play"){RC=null;sub("The plane climbed away without you!");die()}}
 if(SH){if(SH.rope){const g0=gh(P.x,P.z);if(P.y>g0+.15){P.vy=-5;SH.rm.position.set(0,(48+P.y)/2,95);SH.rm.scale.y=(48-P.y)/40}else{SH.rope=0;world.remove(SH.rm)}}
  if(!SH.col&&!SH.rope&&kills>=SH.n){SH.col=1;world.remove(ch);ch=mkChopper(0,14,-85);ch.wy=6.4;ch.wx=0;ch.wz=-85;P.ev=60;sub("Pilot: The hull is breaking up! Chopper at the bow, run and jump for the ladder!")}
  if(SH.col){SH.ct+=dt;SH.oc.position.y=-1+SH.ct*.08;if(Math.random()<dt*.7)blast(new THREE.Vector3(P.x+rnd(-25,25),6,P.z+rnd(-25,25)))}h=SH.col?"SHIP SINKING \u00b7 GET TO THE CHOPPER":"CLEAR THE DECK \u00b7 "+(SH.n-kills)+" LEFT"}
 if(DV){DV.t+=dt;if(DV.ph==0){DV.z-=60*dt;P.x=DV.x;P.y=DV.y;P.z=DV.z;P.vy=0;C.position.set(P.x,P.y,P.z);C.rotation.set(P.pitch,P.yaw,0,"YXZ");h="PRESS F TO JUMP \u00b7 "+Math.max(0,Math.ceil(10-DV.t))+"s";if(DV.t>=10&&state=="play"){blast(new THREE.Vector3(P.x,P.y,P.z));DV=null;sub("The plane exploded!");die()}}
  else{const f=(keys.KeyW?1:0)-(keys.KeyS?1:0),s2=(keys.KeyD?1:0)-(keys.KeyA?1:0),sp=(DV.c?14:28)*dt;DV.x+=(-Math.sin(P.yaw)*f+Math.cos(P.yaw)*s2)*sp;DV.z+=(-Math.cos(P.yaw)*f-Math.sin(P.yaw)*s2)*sp;if(rcl&&!DV.c){DV.c=1;sub("Parachute open!")}DV.y+=(DV.c?(DV.y>250?-30:-7):-55)*dt;P.x=DV.x;P.y=DV.y;P.z=DV.z;P.vy=0;C.position.set(P.x,P.y,P.z);C.rotation.set(P.pitch,P.yaw,0,"YXZ");h="ALT "+Math.round(DV.y)+"m \u00b7 ZONE "+Math.round(Math.hypot(DV.x,DV.z))+"m \u00b7 "+(DV.c?"CHUTE OPEN":"RIGHT-CLICK: PARACHUTE");
   if(DV.y<=gh(DV.x,DV.z)+.5&&state=="play"){const ok=DV.c;DV=null;if(ok){P.un=0;P.y=gh(P.x,P.z);P.vy=0;mkFriends();en.forEach(e=>{e.stun=0;e.alert=1});sub("Squad: Boots on the ground! Clear the area, Tom!")}else{sub("No parachute!");die()}}}}
 if(RV&&state=="play"){if(RV.st==0){h="KILL THE 3 PATROLLERS \u00b7 "+Math.min(kills,3)+"/3";if(kills>=3){RV.st=1;spawn(false);const e=en[en.length-1];e.g.position.set(-60,5,-170);e.kn=1;e.hp=1e6;e.alert=0;RV.sn=e;mkMark(e);sub("Overlord: Enemy sniper in the nest to the northwest. Get close and knife him, Tom (X or key 3).")}}
  else if(RV.st==1){h="KNIFE THE ENEMY SNIPER";if(RV.sn.dead){RV.st=2;const tg=new THREE.Group(),cb=new THREE.Mesh(new THREE.BoxGeometry(3,3,7),new THREE.MeshLambertMaterial({color:0x4a5238})),cab=new THREE.Mesh(new THREE.BoxGeometry(3,1.6,2.6),new THREE.MeshLambertMaterial({color:0x3a4130}));cb.position.set(0,2.2,-3.5);cab.position.set(0,.8,1.4);tg.add(cb,cab);tg.position.set(60,0,-420);world.add(tg);RV.truck=tg;spawn(false);const d=en[en.length-1];d.stun=1e9;d.alert=0;RV.drv=d;mkMark(d);sub("Price: Truck inbound. Kill the driver before he gets away!")}}
  else if(RV.st==2){h="KILL THE TRUCK DRIVER";const tg=RV.truck;if(tg.position.z<-110)tg.position.z+=14*dt;else{RV.st=3;FD=4;for(let i=0;i<6;i++){spawn(false);const e=en[en.length-1];e.g.position.set(60+rnd(-4,4),0,tg.position.z-8-rnd(0,3));e.alert=1;e.stun=0}sub("Overlord: Six hostiles out of the truck! Snipers, engage!")}RV.drv.g.position.set(59.3,.9,tg.position.z+1.4)}
  else{h="DRIVER + SNIPER + SQUAD";if(RV.drv.dead&&en.every(e=>e.dead)){RV=null;win()}}}
 if(SHP){const e=SHP.e,p=e.g.position,dx=P.x-p.x,dz=P.z-p.z,d=Math.hypot(dx,dz)||1;
  if(SHP.st==0){h="SHEPHERD \u00b7 HP "+Math.max(0,Math.ceil(SHP.hp))+"%";e.g.rotation.y=Math.atan2(dx,dz)+Math.PI;if(d>2.2){p.x+=dx/d*4.2*dt;p.z+=dz/d*4.2*dt}SHP.cd-=dt;if(d<2.6&&SHP.cd<=0){SHP.cd=.9;hurt(7)}
   SHP.pc-=dt;if(mouseDown&&SHP.pc<=0){SHP.pc=.45;snd(120,.1,.15,"triangle");if(d<3.2&&(Math.sin(P.yaw)*dx+Math.cos(P.yaw)*dz)/d>.4){SHP.hp-=9;p.x-=dx/d*.6;p.z-=dz/d*.6;const hm=$("hit");hm.style.opacity=1;setTimeout(()=>hm.style.opacity=0,90)}}
   if(SHP.hp<=0){SHP.st=1;SHP.t=0;SHP.px=P.x;SHP.pz=P.z;P.hp=Math.min(P.hp,14);sub("Shepherd drives his own knife into Tom and pins him to the ground...")}}
  else{P.x=SHP.px;P.z=SHP.pz;P.hp=Math.max(P.hp,8);P.hurt=9;P.pr=1;P.pitch=.7;SHP.t+=dt;e.g.rotation.y=Math.atan2(dx,dz)+Math.PI;
   if(SHP.st==1){h="SHEPHERD IS ABOUT TO FINISH YOU";p.x=P.x+.4;p.z=P.z-1.2;if(SHP.t>2&&!SHP.pr){mkFriends("PRICE");SHP.pr=fr[0];SHP.pr.dead=1;SHP.pr.g.position.set(P.x+22,0,P.z+10);sub("Price: Get off him, Shepherd!")}
    if(SHP.pr){const g=SHP.pr.g.position,ux=p.x-g.x,uz=p.z-g.z,ud=Math.hypot(ux,uz)||1;g.x+=ux/ud*9*dt;g.z+=uz/ud*9*dt;SHP.pr.g.rotation.y=Math.atan2(ux,uz)+Math.PI;if(ud<2){SHP.st=2;SHP.t=0;p.x+=5;p.z-=3;sub("Price tackles Shepherd! Press F to pull out the knife!")}}}
   else if(SHP.st==2){h="PRESS F \u00b7 PULL OUT THE KNIFE";if(SHP.pr)SHP.pr.g.position.set(p.x-1.5,0,p.z+1);if(SHP.t>6&&state=="play"){SHP=null;sub("Too slow...");die()}}
   else if(SHP.st==3){h="";if(SHP.t<.1){e.g.rotation.x=-1.5;e.g.position.y=.3}if(SHP.t>2.6&&state=="play"){SHP=null;win()}}}}
 if(L.easy&&!cinDone&&state=="play"){cinDone=true;cinStart()}
 if(CIN){CIN.t+=dt;if(keys.Enter||keys.Space)CIN.t=CIN.dur;const t=CIN.t,u=Math.min(1,t/CIN.dur),k=u*u*(3-2*u);P.x=CIN.x;P.z=CIN.z;P.y=CIN.y;while(CIN.l.length&&CIN.l[0][0]<=t)sub(CIN.l.shift()[1]);C.position.set(CIN.x+60*(1-k),1.6+66*(1-k),CIN.z-70*(1-k));C.lookAt(CIN.x*(k),1.2,CIN.z-60*(1-k)-20*k);if(t>=CIN.dur){CIN=null;P.un=0;cbar.style.display="none"}}
 if(SP)h=spStep(dt)||h;
 if(L.shep&&!SHEP)SHEP=en.find(e=>e.boss);if(SHEP&&!SHEP.dead){h="GENERAL SHEPHERD";if(SHEP.hp<=40){SHEP.hp=40;SHEP.stun=9999;if(!SHEP.fin){SHEP.fin=1;sub("Shepherd is down on his knees. Finish him with the knife, Tom (X or key 3)!")}}}
 rcl=false;hx.textContent=h}

build();requestAnimationFrame(loop);
