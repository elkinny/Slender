(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=6)})([function(a,b){'use strict';b.a=class{constructor(a,b,c){this.image=new Image,this.image.src=a,this.width=b,this.height=c}}},function(a,b){'use strict';var c=Math.floor;b.a=class{static getRandomInt(a,b){return a=Math.ceil(a),b=c(b),c(Math.random()*(b-a))+a}static getRandomFloat(a,b){return a+Math.random()*(b+1-a)}}},function(a,b,c){'use strict';var d=c(0);b.a=class{constructor(a){this.texture=a.texture||new d.a('img/trees/tree_1.png',639,1500),this.height=a.height||1,this.width=0.5,this.x=a.x,this.y=a.y}}},function(a,b,c){'use strict';var d=c(1),e=c(4),f=c(0);class g{constructor(a,b,c,d,e,g){this.CIRCLE=g,this.player=a,this.map=b,this.x=c,this.y=d,this.pic_num=e,this.color='#cf3c8c',this.texture=new f.a('img/girl/girl-'+e+'.png',114,300),this.height=.6,this.width=.225,this.floorOffset=0,this.count=0,this.direction=1,this.speed=.7,this.alive=!0,this.found_paper=!1,this.taking_paper=!1,this.paper_near_person=0}logic(){this.alive&&(270<this.count&&(this.direction+=d.a.getRandomFloat(-(this.CIRCLE/6),this.CIRCLE/6),this.count=0),this.searchForPaper(),this.found_paper||this.taking_paper||this.wonderAround())}wonderAround(){this.count+=1,this.run(),this.walk(0.05*this.speed,this.direction)}run(){let a=this.distTo(this.player);2>a?(this.speed=3,this.direction=-this.player.direction):this.speed=.7}walk(a,b){const c=Math.cos(b)*a,d=Math.sin(b)*a,e=this.map.get(this.x+c,this.y),f=this.map.get(this.x,this.y+d);(2==e||2==f||1==e||1==f)&&(this.direction=b+this.CIRCLE/6);0>=e&&(this.x+=c),0>=f&&(this.y+=d),this.move('img/girl/girl')}move(a){0==this.count%10&&(0==this.count%20?this.texture=new f.a(a+'2-'+this.pic_num+'.png',114,300):this.texture=new f.a(a+'-'+this.pic_num+'.png',114,300))}searchForPaper(){let a,b,c,d;this.map.objects.some((f)=>{f instanceof e.a&&(d=f,a=this.x-d.x,b=this.y-d.y,c=this.distTo(d),this.isNearPaper(c,d,a,b))})}isNearPaper(a,b,c,d){5>a&&3<this.distTo(this.player)?(this.paper=b,this.found_paper=!0,0.3>a?this.takingPaper():this.approachPaper(c,d)):this.found_paper=!1}takingPaper(){this.speed=0,this.taking_paper=!0,this.takePaper()}takePaper(){if(this.paper_near_person++,100===this.paper_near_person){let a=this.map.objects.indexOf(this.paper);-1!==a&&this.map.objects.splice(a,1),this.map.objects.forEach((a)=>{a instanceof g&&(a.found_paper=!1,a.taking_paper=!1,a.paper_near_person=0)})}}approachPaper(a,b){let c;c=7e-3*this.speed,0<=a?this.x-=c:this.x+=c,0<=b?this.y-=c:this.y+=c,this.count+=0.5,this.move('img/girl/girl')}die(){this.texture=new f.a('img/girl/girl_die.gif',114,300),setTimeout(()=>{this.texture=new f.a('img/girl/girl3-'+this.pic_num+'.png',300,56),this.height=.2,this.width=0.7},7e3)}distTo(a){const b=a.x-this.x,c=a.y-this.y;return Math.sqrt(b*b+c*c)}}b.a=g},function(a,b){'use strict';b.a=class{constructor(a,b,c){this.color='#fff',this.x=a,this.y=b,this.height=0.2,this.width=0.2,this.texture=c}}},function(a,b){'use strict';b.a=class{constructor(a){this.game=a,this.sound_end=!0,this.ending={0:'come_out',1:'lululala'},soundManager.setup({url:'./soundmanager2/',onready:()=>{const a=soundManager.createSound({id:'piano_menu_ambient',url:'sounds/ambient/piano_menu_ambient.mp3'}),b=soundManager.createSound({id:'static_menu_ambient',url:'sounds/ambient/static_menu_ambient.mp3',volume:50}),c=soundManager.createSound({id:'slender_logo_hover',url:'sounds/menu/slender_logo_hover.mp3'}),d=soundManager.createSound({id:'play_button_hover',url:'sounds/menu/play_button_hover.mp3'}),e=soundManager.createSound({id:'ho_ho_ho',url:'sounds/menu/ho_ho_ho.mp3'}),f=soundManager.createSound({id:'about_us',url:'sounds/menu/about_us.mp3'}),g=soundManager.createSound({id:'about_game',url:'sounds/menu/about_game.mp3'}),h=soundManager.createSound({id:'wind_ambient',url:'sounds/ambient/wind_ambient.mp3'}),i=soundManager.createSound({id:'forward_step',url:'sounds/walking/forward_step.mp3'}),j=soundManager.createSound({id:'backward_step',url:'sounds/walking/backward_step.mp3'}),k=soundManager.createSound({id:'dodge_step_0',url:'sounds/walking/dodge_step_0.mp3'}),l=soundManager.createSound({id:'dodge_step_1',url:'sounds/walking/dodge_step_1.mp3'}),m=soundManager.createSound({id:'running',url:'sounds/walking/running.mp3'}),n=soundManager.createSound({id:'rain_ambient',url:'sounds/ambient/rain_ambient.mp3',volume:80}),o=soundManager.createSound({id:'rain_forward_step',url:'sounds/walking/rain_forward_step.mp3'}),p=soundManager.createSound({id:'rain_backward_step',url:'sounds/walking/rain_backward_step.mp3'}),q=soundManager.createSound({id:'rain_step',url:'sounds/walking/rain_step.mp3'}),r=soundManager.createSound({id:'rain_dodge_step_0',url:'sounds/walking/rain_dodge_step_0.mp3'}),s=soundManager.createSound({id:'rain_dodge_step_1',url:'sounds/walking/rain_dodge_step_1.mp3'}),t=soundManager.createSound({id:'rain_running',url:'sounds/walking/rain_running.mp3'}),u=soundManager.createSound({id:'ghost_scream',url:'sounds/ending/ghost_scream.mp3'}),v=soundManager.createSound({id:'come_out',url:'sounds/ending/come_out.mp3'}),w=soundManager.createSound({id:'lululala',url:'sounds/ending/lululala.mp3'})}})}loopSound(a){soundManager.play(a,{multiShotEvents:!0,onfinish:()=>{this.loopSound(a)}})}makeSound(a){this.sound_end=!1,soundManager.play(a,{multiShotEvents:!0,onfinish:()=>{this.obj_sound_end=!0,this.sound_end=!0}})}playEnding(a){soundManager.play(this.ending[a],{onfinish:()=>{location.reload()}})}}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(7);window.onload=()=>{const a=new d.a;a.loadSounds(),a.enableMenuSounds(),a.setToVanilla();const b=document.getElementById('checkbox');b.addEventListener('change',()=>{b.checked?(document.querySelector(`.snow`).style.display='block',a.sounds.makeSound('ho_ho_ho'),a.setToWinter()):(document.querySelector(`.snow`).style.display='none',a.setToVanilla())}),document.getElementById('play').addEventListener('click',()=>{soundManager.stopAll(),a.sounds.sound_end=!0,document.querySelector('.menu').classList.add('fadeOut'),setTimeout(()=>{document.querySelector('.menu').style.display='none'},700),a.loadGame()})}},function(a,b,c){'use strict';var d=c(8),e=c(1),f=c(5),g=c(9),h=c(3),i=c(10),j=c(0),k=c(11),l=c(2),m=c(12),n=c(13),o=c(14),p=c(15),q=c.n(p);b.a=class{constructor(){this.CIRCLE=2*Math.PI,this.PPL_NUM=8,this.PPL_XY=30,this.MAP_SIZE=32,this.RESOLUTION=640,this.video=document.querySelector('.intro'),this.message=document.querySelector('.text'),this.message_child=document.querySelector('.text h1'),this.canvas=document.getElementById('display'),this.mode={},this.game_ending=!1,this.papers=p.assets.papers,this.trees=p.assets.rain_trees,this.bushes=p.assets.rain_bushes,this.sounds=new f.a(this)}loadGame(){this.map=new d.a(this.MAP_SIZE,this.mode),this.camera=new k.a(this.canvas,this.RESOLUTION,0.8,this.mode,this.CIRCLE,this.map),this.loop=new n.a(this,this.endGame),this.noises=new g.a,this.obj_sounds=new o.a(this,this.map,this.mode),this.player=new i.a({x:1.5,y:1.5,direction:1.57,game:this}),this.controls=new m.a(this.player),this.setMode(),this.addPeople(),this.map.buildMap(this.trees,this.bushes),this.video.style.display='block',this.enterFS(this.video),this.video.play(),setTimeout(()=>{this.exitFS(this.video),this.video.pause(),this.video.style.display='none',this.message.style.display='flex',this.mouseLock(),soundManager.play('entering_area',{multiShotEvents:!0,onfinish:()=>{this.startGame()}})},28000)}startGame(){this.message.style.display='none',this.canvas.style.display='block',this.loop.start((a)=>{this.mode.lightning&&this.map.lightning(a),this.map.update(),this.changeAmbient(),this.player.update(this.controls.states,this.map,a),this.camera.render(this.player,this.map),this.checkEnding()})}endGame(){const a=e.a.getRandomInt(0,2);soundManager.stopAll(),this.game.sounds.playEnding(a),this.game.showEndingScreen()}makeEndmode(){this.map.light=2,this.mode.param=20,this.mode.drops='#f00',this.mode.ground='#f00',this.mode.lightning=!1,this.mode.drops_opacity=1,this.mode.particlesWidth=10,this.mode.particlesHeight=10}checkEnding(){0==this.map.people&&this.obj_sounds.obj_sound_end&&(this.makeEndmode(),this.obj_sounds.playScream())}showEndingScreen(){this.message.style.display='flex',this.message_child.innerHTML='Do you want to play more?',this.message_child.setAttribute('data-text','Do you want to kiLL more?'),this.canvas.style.display='none'}setMode(){this.mode.winter?(this.sounds.loopSound('wind_ambient'),this.trees=p.assets.trees,this.bushes=p.assets.bushes):this.sounds.loopSound('rain_ambient')}addPeople(){for(let a=0;a<this.PPL_NUM;a++){let a=e.a.getRandomInt(2,this.PPL_XY),b=e.a.getRandomInt(2,this.PPL_XY),c=e.a.getRandomInt(1,5);this.map.addObject(new h.a(this.player,this.map,a,b,c,this.CIRCLE)),this.map.people++}}changeAmbient(){if(this.noises.noises_end){const a=e.a.getRandomInt(0,4);this.noises.playNoises(a)}}enterFS(a){a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()}exitFS(a){a.exitFullscreen?a.exitFullscreen():a.mozExitFullScreen?a.mozExitFullScreen():a.webkitExitFullscreen&&a.webkitExitFullscreen()}mouseLock(){document.body.requestPointerLock?document.body.requestPointerLock():document.body.mozRequestPointerLock?document.body.mozRequestPointerLock():document.body.webkitRequestPointerLock&&document.body.webkitRequestPointerLock()}setToWinter(){this.mode.winter=!0,this.mode.light=1,this.mode.lightning=!1,this.mode.lightRange=5,this.mode.shadows='#fff',this.mode.drops='#fff',this.mode.drops_opacity=1,this.mode.drops_amount=100,this.mode.ground='#fff',this.mode.param=0.5,this.mode.particlesWidth=6,this.mode.particlesHeight=6,this.mode.fence_texture='img/snow/fence_snow.png',this.mode.sky_texture='img/snow/sky_panorama_snow.jpg',this.mode.wall_texture='img/snow/wall_texture_snow.jpg'}setToVanilla(){this.mode.winter=!1,this.mode.light=2,this.mode.lightning=!0,this.mode.lightRange=5,this.mode.shadows='#000',this.mode.drops='#fff',this.mode.drops_opacity=0.15,this.mode.drops_amount=30,this.mode.ground='#56361f',this.mode.param=0.1,this.mode.particlesWidth=2,this.mode.particlesHeight=20,this.mode.sky_texture='img/rain/rain_sky_panorama.jpg',this.mode.fence_texture='img/rain/rain_fence.jpg',this.mode.wall_texture='img/rain/rain_wall_texture.jpg'}loadSounds(){soundManager.load('piano_menu_ambient'),soundManager.load('static_menu_ambient'),soundManager.load('slender_logo_hover'),soundManager.load('play_button_hover'),soundManager.load('ho_ho_ho'),soundManager.load('about_us'),soundManager.load('about_game'),soundManager.load('wind_ambient'),soundManager.load('forward_step'),soundManager.load('backward_step'),soundManager.load('dodge_step_0'),soundManager.load('dodge_step_1'),soundManager.load('running'),soundManager.load('rain_ambient'),soundManager.load('rain_forward_step'),soundManager.load('rain_backward_step'),soundManager.load('rain_step'),soundManager.load('rain_dodge_step_0'),soundManager.load('rain_dodge_step_1'),soundManager.load('rain_running'),soundManager.load('entering_area'),soundManager.load('hitting_the_fence'),soundManager.load('hitting_the_rain_fence'),soundManager.load('hitting_the_wall'),soundManager.load('placing_paper'),soundManager.load('placing_loo_paper'),soundManager.load('placing_bomb'),soundManager.load('slashing'),soundManager.load('killing'),soundManager.load('ghost_in_the_house'),soundManager.load('just_horror_ambient'),soundManager.load('weird_noises'),soundManager.load('scary_piano'),soundManager.load('ghost_scream'),soundManager.load('come_out'),soundManager.load('lululala')}enableMenuSounds(){this.sounds.loopSound('piano_menu_ambient'),this.sounds.loopSound('static_menu_ambient'),document.getElementById('play').addEventListener('mouseover',()=>{this.sounds.loopSound('play_button_hover')}),document.getElementById('play').addEventListener('mouseout',()=>{soundManager.stop('play_button_hover')}),document.getElementById('logo').addEventListener('mouseover',()=>{this.sounds.loopSound('slender_logo_hover')}),document.getElementById('logo').addEventListener('mouseout',()=>{soundManager.stop('slender_logo_hover')}),document.getElementById('about_us').addEventListener('mouseover',()=>{this.sounds.loopSound('about_us'),soundManager.mute('piano_menu_ambient')}),document.getElementById('about_us').addEventListener('mouseout',()=>{soundManager.stop('about_us'),soundManager.unmute('piano_menu_ambient')}),document.getElementById('about_game').addEventListener('mouseover',()=>{this.sounds.loopSound('about_game'),soundManager.mute('piano_menu_ambient')}),document.getElementById('about_game').addEventListener('mouseout',()=>{soundManager.stop('about_game'),soundManager.unmute('piano_menu_ambient')})}}},function(a,b,c){'use strict';var d=Math.floor,e=c(0),f=c(2),g=c(3),h=c(1);b.a=class{constructor(a,b){this.mode=b,this.size=a,this.wallGrid=new Uint8Array(a*a),this.skybox=new e.a(b.sky_texture,2e3,750),this.fenceTexture=new e.a(b.fence_texture,512,512),this.fenceDoorTexture=new e.a('img/fence_door_0.jpg',512,256),this.wallTexture=new e.a(b.wall_texture,512,512),this.light=this.mode.light,this.objects=[],this.people=0}get(a,b){return a=d(a),b=d(b),0>a||a>this.size-1||0>b||b>this.size-1?-1:this.wallGrid[b*this.size+a]}addTrees(a,b,c){if(0==this.get(b,c)){const d=h.a.getRandomInt(0,4);this.addObject(new f.a({texture:new e.a(a[d].texture,a[d].width,a[d].height),x:b,y:c}))}}addBushes(a,b,c){if(0==this.get(b,c)){const d=h.a.getRandomInt(0,5);this.addObject(new f.a({texture:new e.a(a[d].texture,a[d].width,a[d].height),height:0.5,x:b,y:c}))}}buildMap(a,b){let c,e;this.wallGrid.fill(0);for(let f=0;f<this.size*this.size;f++)c=d(f/this.size),e=f-this.size*c,1!==c&&c!==this.size-2&&1!==e&&e!==this.size-2&&(0.2<Math.random()&&(0.5<Math.random()?this.addBushes(b,e+1.5,c+1.5):this.addTrees(a,e+1.5,c+1.5)),0.7<Math.random()&&(this.wallGrid[f]=1)),(0===c||c===this.size-1||0===e||e===this.size-1)&&(this.wallGrid[f]=2);this.wallGrid[1]=3}cast(a,b,c){function e(a){const b=f(i,j,a.x,a.y),d=f(j,i,a.y,a.x,!0),h=b.length2<d.length2?g(b,1,0,a.distance,b.y):g(d,0,1,a.distance,d.x);return h.distance>c?[a]:[a].concat(e(h))}function f(a,b,c,e,f){if(0===b)return k;const g=0<b?d(c+1)-c:Math.ceil(c-1)-c,h=g*(a/b);return{x:f?e+h:c+g,y:f?c+g:e+h,length2:g*g+h*h}}function g(a,b,c,e,f){const g=0>j?b:0,k=0>i?c:0;return a.height=h.get(a.x-g,a.y-k),a.distance=e+Math.sqrt(a.length2),a.object=h.getObject(a.x-g,a.y-k),a.shading=b?0>j?2:0:0>i?2:1,a.offset=f-d(f),a}const h=this,i=Math.sin(b),j=Math.cos(b),k={length2:Infinity};return e({x:a.x,y:a.y,height:0,distance:0})}lightning(a){0<this.light?this.light=Math.max(this.light-10*a,0):5*Math.random()<a&&(this.light=2)}update(){this.objects.forEach((a)=>{a instanceof g.a&&a.logic()})}addObject(a){this.objects.push(a)}getObject(a,b){return a=d(a),b=d(b),this.objects[b*this.size+a]}}},function(a,b){'use strict';b.a=class{constructor(){this.noises_end=!0,this.noises={0:'ghost_in_the_house',1:'just_horror_ambient',2:'weird_noises',3:'scary_piano'},soundManager.setup({url:'./soundmanager2/',onready:()=>{const a=soundManager.createSound({id:'ghost_in_the_house',url:'sounds/ambient/ghost_in_the_house.mp3'}),b=soundManager.createSound({id:'just_horror_ambient',url:'sounds/ambient/just_horror_ambient.mp3'}),c=soundManager.createSound({id:'weird_noises',url:'sounds/ambient/weird_noises.mp3'}),d=soundManager.createSound({id:'scary_piano',url:'sounds/ambient/scary_piano.mp3'})}})}playNoises(a){this.noises_end=!1,soundManager.play(this.noises[a],{multiShotEvents:!0,onfinish:()=>{this.noises_end=!0}})}}},function(a,b,c){'use strict';var d=Math.PI,e=c(4),f=c(0),g=c(1),h=c(3);b.a=class{constructor(a){this.x=a.x,this.y=a.y,this.direction=a.direction,this.CIRCLE=a.game.CIRCLE,this.papers=a.game.papers,this.map=a.game.map,this.sounds=a.game.sounds,this.obj_sounds=a.game.obj_sounds,this.mode=a.game.mode,this.game=a.game,this.right_hand=new f.a('img/slender/right_hand.png',200,200),this.left_hand=new f.a('img/slender/left_hand.png',200,200),this.paces=0,this.prev_paper_place=[0,0],this.speed=1,this.hitting_the_fence=!1,this.hitting_the_wall=!1}rotate(a){this.direction=(this.direction+a+this.CIRCLE)%this.CIRCLE}walk(a,b,c){const d=Math.cos(c)*a,e=Math.sin(c)*a,f=b.get(this.x+d,this.y),g=b.get(this.x,this.y+e);2==f||2==g?(this.hitting_the_fence=!0,this.hitObject(),this.hitting_the_fence=!1):(1==f||1==g)&&(this.hitting_the_wall=!0,this.hitObject(),this.hitting_the_wall=!1),0>=f&&(this.x+=d),0>=g&&(this.y+=e),this.paces+=a}update(a,b,c){this.running=a.shift,this.walking=a.forward||a.backward||a.sideLeft||a.sideRight,a.left&&this.rotate(-d*c),a.right&&this.rotate(d*c),a.forward&&(this.walkSound(),this.walk(this.speed*c,b,this.direction)),a.backward&&(this.walkSound(),this.walk(-this.speed*c,b,this.direction)),a.sideLeft&&(this.dodgeSound(),this.walk(this.speed/2*c,b,this.direction-d/2)),a.sideRight&&(this.dodgeSound(),this.walk(-(this.speed/2)*c,b,this.direction-d/2)),this.speed=a.shift?3:1}snowWalkSound(){this.sounds.sound_end&&(this.running?this.sounds.makeSound('running'):0.5<Math.random()?this.sounds.makeSound('forward_step'):this.sounds.makeSound('backward_step'))}snowDodgeSound(){this.sounds.sound_end&&(0.5<Math.random()?this.sounds.makeSound('dodge_step_0'):this.sounds.makeSound('dodge_step_1'))}rainWalkSound(){this.sounds.sound_end&&(this.running?this.sounds.makeSound('rain_running'):0.2<Math.random()?0.5<Math.random()?this.sounds.makeSound('rain_forward_step'):this.sounds.makeSound('rain_backward_step'):this.sounds.makeSound('rain_step'))}rainDodgeSound(){this.sounds.sound_end&&(0.5<Math.random()?this.sounds.makeSound('rain_dodge_step_0'):this.sounds.makeSound('rain_dodge_step_1'))}hitObject(){this.mode.winter?this.snowHit():this.rainHit()}snowHit(){this.obj_sounds.obj_sound_end&&(this.hitting_the_fence?this.obj_sounds.makeSound('hitting_the_fence'):this.hitting_the_wall&&this.obj_sounds.makeSound('hitting_the_wall'))}rainHit(){this.obj_sounds.obj_sound_end&&(this.hitting_the_fence?(this.obj_sounds.makeSound('hitting_the_rain_fence'),this.hitting_the_fence=!1):this.hitting_the_wall&&(this.obj_sounds.makeSound('hitting_the_wall'),this.hitting_the_wall=!1))}walkSound(){this.mode.winter?this.snowWalkSound():this.rainWalkSound()}dodgeSound(){this.mode.winter?this.snowDodgeSound():this.rainDodgeSound()}dosmth(a){'attack'===a&&this.attack(),'space'===a&&this.placePaper(),'escape'===a&&location.reload()}attack(){let a,b,c,d=!1;this.map.objects.some((e)=>{if(e instanceof h.a&&e.alive&&(c=e,a=this.x-c.x,b=this.y-c.y,0.5>Math.sqrt(a*a+b*b)))return d=!0}),d?(this.obj_sounds.makeSound('killing'),c.alive=!1,c.color=void 0,c.die(),this.map.people--):this.obj_sounds.obj_sound_end&&this.obj_sounds.makeSound('slashing')}placePaper(){let a=this.prev_paper_place[0]===this.x&&this.prev_paper_place[1]===this.y;if(!this.running&&!this.walking&&this.sounds.sound_end&&!a){const a=g.a.getRandomInt(0,8);this.map.addObject(new e.a(this.x,this.y,new f.a(this.papers[a].texture,this.papers[a].width,this.papers[a].height))),0===a?this.obj_sounds.makeSound('placing_loo_paper'):7===a?this.obj_sounds.makeSound('placing_bomb'):this.obj_sounds.makeSound('placing_paper'),this.prev_paper_place=[this.x,this.y],console.log(this.map.objects)}}}},function(a,b,c){'use strict';var d=Math.pow,e=Math.cos,f=Math.floor,g=Math.ceil,h=c(2);b.a=class{constructor(a,b,c,d,e,f){this.CIRCLE=e,this.mode=d,this.ctx=a.getContext('2d'),this.width=a.width=window.innerWidth,this.height=a.height=window.innerHeight,this.resolution=b,this.map=f,this.spacing=this.width/b,this.fov=c,this.range=14,this.scale=(this.width+this.height)/1200}render(a,b){this.drawSky(a.direction,b.skybox,b.light),this.drawColumns(a,b),this.drawWeapon(a.left_hand,a.right_hand,a.paces),this.drawMiniMap(a,b),this.drawText(b)}drawSky(a,b,c){const d=2*(b.width*(this.height/b.height)),e=-d*a/this.CIRCLE;this.ctx.save(),this.ctx.drawImage(b.image,e,0,d,this.height),e<d-this.width&&this.ctx.drawImage(b.image,e+d,0,d,this.height),0<c&&(this.ctx.fillStyle=this.mode.ground,this.ctx.globalAlpha=c*this.mode.param,this.ctx.fillRect(0,0.5*this.height,this.width,0.5*this.height)),this.ctx.restore()}drawColumn(a,b,c,e){this.lightRange=this.mode.lightRange;const h=this.ctx,i=f(a*this.spacing),j=g(this.spacing);let k,l,m=e.wallTexture,n=-1,o=[];for(;++n<b.length&&0>=b[n].height;);for(let g=b.length-1;0<=g;g--){l=b[g],3===l.height?(m=e.fenceDoorTexture,l.height=1):2===l.height?(m=e.fenceTexture,l.height=1):m=e.wallTexture;let a=0;a=this.mode.winter?3:g;let p=d(Math.random(),this.mode.drops_amount)*a;const q=0<p&&this.project(0.1,c,l.distance);let r,s;for(g===n?(r=f(m.width*l.offset),s=this.project(l.height,c,l.distance),h.globalAlpha=1,h.drawImage(m.image,r,0,1,m.height,i,s.top,j,s.height),h.fillStyle=this.mode.shadows,this.shading=l.shading,h.globalAlpha=Math.max((l.distance+l.shading)/this.lightRange-e.light,0),h.fillRect(i,s.top,j,s.height),k=l.distance):l.object&&o.push({object:l.object,distance:l.distance,offset:l.offset,angle:c}),h.fillStyle=this.mode.drops,h.globalAlpha=this.mode.drops_opacity;0<--p;)h.fillRect(i,Math.random()*q.top,this.mode.particlesWidth,this.mode.particlesHeight)}return{objects:o,hit:k}}drawColumns(a,b){this.ctx.save();let c=[];for(let d=0;d<this.resolution;d++){let e=this.fov*(d/this.resolution-0.5),f=b.cast(a,a.direction+e,this.range),g=this.drawColumn(d,f,e,b);c.push(g)}this.drawSprites(a,b,c),this.ctx.restore()}drawSprites(a,b,c){const e=this.width,g=this.height,h=e/this.fov,i=this.resolution;this.setSpriteDistances(b.objects,a);let j=Array.prototype.slice.call(b.objects).map((b)=>{const c=b.x-a.x,j=b.y-a.y,k=b.width*e/b.distanceFromPlayer,l=b.height*g/b.distanceFromPlayer,m=b.floorOffset/b.distanceFromPlayer,n=Math.atan2(j,c),o=g/2*(1+1/b.distanceFromPlayer)-l;let p=a.direction-n;p>=this.CIRCLE/2&&(p-=this.CIRCLE);const q=this.width/2-h*p,r=f((q-k/2)/e*i);return b.distanceFromPlayer=Math.sqrt(d(c,2)+d(j,2)),b.render={width:k,height:l,angleToPlayer:p,cameraXOffset:q,distanceFromPlayer:b.distanceFromPlayer,numColumns:k/e*i,firstColumn:r,top:o},b}).sort((c,a)=>{return c.distanceFromPlayer<a.distanceFromPlayer?1:c.distanceFromPlayer>a.distanceFromPlayer?-1:0});this.ctx.save();for(let d=0;d<this.resolution;d++)this.drawSpriteColumn(a,b,d,c[d],j);this.ctx.restore()}drawSpriteColumn(a,b,c,d,e){const h=this.ctx,j=f(c*this.spacing),k=g(this.spacing),i=this.width/this.resolution;let l,m,n,o=this.fov*(c/this.resolution-0.5);e=e.filter((a)=>{return!d.hit||a.distanceFromPlayer<d.hit});for(let g=0;g<e.length;g++)l=e[g],n=j>l.render.cameraXOffset-l.render.width/2&&j<l.render.cameraXOffset+l.render.width/2,n&&(m=f(l.texture.width/l.render.numColumns*(c-l.render.firstColumn)),h.drawImage(l.texture.image,m,0,1,l.texture.height,j,l.render.top,k,l.render.height),this.ctx.fillStyle='#000',this.ctx.globalAlpha=1)}setSpriteDistances(a){for(let b=0;b<a.length;b++)a[b]}drawWeapon(a,b,c){const d=6*(e(2*c)*this.scale),f=6*(Math.sin(4*c)*this.scale),g=0.6*this.width+d,h=0.15*this.width+d,i=0.6*this.height+f;this.ctx.drawImage(a.image,h,i,a.width*this.scale,a.height*this.scale),this.ctx.drawImage(b.image,g,i,b.width*this.scale,b.height*this.scale)}drawMiniMap(a,b){const c=this.ctx,d=.2*this.width,e=this.width-d-10,g=10,h=d/b.size,i=e+a.x/b.size*d,j=g+a.y/b.size*d;c.save(),c.globalAlpha=.5,c.fillRect(e,g,d,d),c.globalAlpha=.5,c.fillStyle='#4c8847';for(let d=0;d<b.size*b.size;d++)if(b.wallGrid[d]){c.fillStyle=2===b.wallGrid[d]?'#35384b':'#4c8847';let a=f(d/b.size),i=d-b.size*a;c.fillRect(e+h*i,g+h*a,h,h)}c.save();for(let d=0;d<b.objects.length;d++)b.objects[d]&&(1===b.objects[d]&&(c.fillStyle=b.objects[d].color),c.globalAlpha=b.objects[d].logic?.8:.3,void 0===b.objects[d].color&&(c.globalAlpha=0),c.fillStyle=b.objects[d].color||'red',c.fillRect(e+h*(b.objects[d].x-0.5)+.25*h,g+h*(b.objects[d].y-0.5)+.25*h,.5*h,.5*h));c.restore(),c.globalAlpha=1,c.fillStyle='#fff',c.moveTo(i,j),c.translate(i,j),c.rotate(a.direction-.5*Math.PI),c.beginPath(),c.lineTo(-2,-3),c.lineTo(0,2),c.lineTo(2,-3),c.fill(),c.restore()}drawText(){this.ctx.save(),this.ctx.font='80px DieDieDie',this.ctx.globalAlpha=1,this.ctx.fillStyle=this.mode.winter?'#000':'#fff',this.ctx.fillText(this.map.people,80,80),this.ctx.restore()}project(a,b,c){const d=c*e(b),f=this.height*a/d,g=this.height/2*(1+1/d);return{top:g-f,bottom:g,height:f}}}},function(a,b){'use strict';var c=Math.PI;b.a=class{constructor(a){this.player=a,this.codes={13:'enter',16:'shift',27:'escape',32:'space',37:'left',38:'forward',39:'right',40:'backward',65:'sideLeft',68:'sideRight',69:'attack',83:'backward',87:'forward'},this.states={left:!1,right:!1,forward:!1,backward:!1,shift:!1,sideLeft:!1,sideRight:!1},document.addEventListener('keydown',this.onKey.bind(this,!0),!1),document.addEventListener('keyup',this.onKey.bind(this,!1),!1),document.addEventListener('touchstart',this.onTouch.bind(this),!1),document.addEventListener('touchmove',this.onTouch.bind(this),!1),document.addEventListener('touchend',this.onTouchEnd.bind(this),!1),document.addEventListener('mousemove',this.onMouseMovement.bind(this),!1),document.querySelector('canvas').onclick=document.body.requestPointerLock||document.body.mozRequestPointerLock||document.body.webkitRequestPointerLock}onTouch(a){const b=a.touches[0];this.onTouchEnd(a),b.pageY<0.5*window.innerHeight?this.onKey(!0,{keyCode:38}):b.pageX<0.5*window.innerWidth?this.onKey(!0,{keyCode:37}):b.pageY>0.5*window.innerWidth&&this.onKey(!0,{keyCode:39})}onTouchEnd(a){this.states={left:!1,right:!1,forward:!1,backward:!1,sideLeft:!1,sideRight:!1,shift:!1},a.preventDefault(),a.stopPropagation()}onKey(a,b){const c=this.codes[b.keyCode];'undefined'==typeof c||('undefined'==typeof this.states[c]?!0===a&&this.player.dosmth(c):this.states[c]=a,b.preventDefault&&b.preventDefault(),b.stopPropagation&&b.stopPropagation())}onMouseMovement(a){const b=a.movementX||a.mozMovementX||a.webkitMovementX||0;0<b&&this.player.rotate(c/50),0>b&&this.player.rotate(-c/50)}}},function(a,b){'use strict';b.a=class{constructor(a,b){this.game=a,this.endGame=b,this.frame=this.frame.bind(this),this.lastTime=0,this.callback=()=>{}}start(a){return this.callback=a,void requestAnimationFrame(this.frame)}frame(a){const b=(a-this.lastTime)/1e3;return this.lastTime=a,0.2>b&&this.callback(b),this.game.game_ending?void this.endGame():void requestAnimationFrame(this.frame)}}},function(a,b,c){'use strict';var d=c(5);class e extends d.a{constructor(a,b,c){super(),this.game=a,this.map=b,this.mode=c,this.obj_sound_end=!0,soundManager.setup({url:'./soundmanager2/',onready:()=>{const a=soundManager.createSound({id:'entering_area',url:'sounds/objects/entering_area.mp3'}),b=soundManager.createSound({id:'hitting_the_fence',url:'sounds/objects/hitting_the_fence.mp3'}),c=soundManager.createSound({id:'hitting_the_rain_fence',url:'sounds/objects/hitting_the_rain_fence.mp3',volume:50}),d=soundManager.createSound({id:'hitting_the_wall',url:'sounds/objects/hitting_the_wall.mp3'}),e=soundManager.createSound({id:'placing_paper',url:'sounds/objects/placing_paper.mp3'}),f=soundManager.createSound({id:'placing_loo_paper',url:'sounds/objects/placing_loo_paper.mp3',volume:40}),g=soundManager.createSound({id:'placing_bomb',url:'sounds/objects/placing_bomb.mp3'}),h=soundManager.createSound({id:'slashing',url:'sounds/objects/slashing.mp3'}),i=soundManager.createSound({id:'killing',url:'sounds/objects/killing.mp3'})}})}makeSound(a){this.obj_sound_end=!1,super.makeSound(a)}playScream(){this.obj_sound_end=!1,soundManager.play('ghost_scream',{onfinish:()=>{this.game.game_ending=!0}})}}b.a=e},function(a){a.exports={assets:{trees:{0:{texture:'img/trees/tree_0.png',width:200,height:200},1:{texture:'img/trees/tree_1.png',width:200,height:200},2:{texture:'img/trees/tree_2.png',width:200,height:200},3:{texture:'img/trees/tree_3.png',width:200,height:200}},rain_trees:{0:{texture:'img/trees/rain_tree_0.png',width:200,height:200},1:{texture:'img/trees/rain_tree_1.png',width:200,height:200},2:{texture:'img/trees/rain_tree_2.png',width:200,height:200},3:{texture:'img/trees/rain_tree_3.png',width:200,height:200}},bushes:{0:{texture:'img/bushes/bush_0.png',width:200,height:109},1:{texture:'img/bushes/bush_1.png',width:200,height:105},2:{texture:'img/bushes/bush_2.png',width:200,height:311},3:{texture:'img/bushes/bush_3.png',width:200,height:168},4:{texture:'img/bushes/bush_4.png',width:200,height:278}},rain_bushes:{0:{texture:'img/bushes/rain_bush_0.png',width:200,height:152},1:{texture:'img/bushes/rain_bush_1.png',width:200,height:138},2:{texture:'img/bushes/rain_bush_2.png',width:217,height:200},3:{texture:'img/bushes/rain_bush_3.png',width:201,height:200},4:{texture:'img/bushes/rain_bush_4.png',width:200,height:200}},papers:{0:{texture:'img/papers/paper_0.png',width:118,height:100},1:{texture:'img/papers/paper_1.png',width:145,height:100},2:{texture:'img/papers/paper_2.png',width:100,height:100},3:{texture:'img/papers/paper_3.png',width:207,height:100},4:{texture:'img/papers/paper_4.png',width:133,height:100},5:{texture:'img/papers/paper_5.png',width:195,height:100},6:{texture:'img/papers/paper_6.png',width:310,height:100},7:{texture:'img/papers/paper_7.png',width:164,height:100}}}}}]);