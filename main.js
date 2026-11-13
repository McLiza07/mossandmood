var FAVI={"Animal": "<span class=\"fi f-horse\" role=\"img\" aria-label=\"Horse\"></span><span class=\"fi f-bird\" role=\"img\" aria-label=\"Bluebird\"></span>", "Flower": "<span class=\"fi f-peony\" role=\"img\" aria-label=\"Peony\"></span><span class=\"fi f-rose\" role=\"img\" aria-label=\"Rose\"></span>", "Color": "<span class=\"fi f-colors\" role=\"img\" aria-label=\"Magenta and cerulean\"></span>", "Season": "<span class=\"fi f-tree\" role=\"img\" aria-label=\"Autumn tree\"></span>", "Movie": "<span class=\"fi f-crown\" role=\"img\" aria-label=\"Princess crown\"></span>", "Music": "<span class=\"fi f-music\" role=\"img\" aria-label=\"Headphones and vinyl record\"></span>"};
var YOGAPIC="chakra-meditation-figure.jpg";
function sparkle(o){
 var arc=o.parentNode,cx=o.offsetLeft,cy=o.offsetTop,w=o.offsetWidth;
 var tint=getComputedStyle(o).getPropertyValue("--c")||"#fff";
 var cols=["#ffffff","#fff1b8","#ffd36b","#fff7e0",tint];
 o.classList.add("spark");setTimeout(function(){o.classList.remove("spark")},700);
 for(var i=0;i<30;i++){(function(){
  var sp=document.createElement("span");sp.textContent="\u2726";sp.setAttribute("aria-hidden","true");
  var col=cols[Math.floor(Math.random()*cols.length)];
  sp.style.cssText="position:absolute;left:"+cx+"px;top:"+cy+"px;pointer-events:none;z-index:9;line-height:1;font-size:"+(5+Math.random()*5)+"px;color:"+col+";text-shadow:0 0 3px "+col+",0 0 6px #ffd36b";
  arc.appendChild(sp);
  var ang=Math.random()*6.2832,d=w*(.5+Math.random()*.8),dx=Math.cos(ang)*d,dy=Math.sin(ang)*d;
  var an=sp.animate([
   {transform:"translate(-50%,-50%) scale(.2) rotate(0deg)",opacity:0},
   {transform:"translate(calc(-50% + "+dx*.45+"px),calc(-50% + "+dy*.45+"px)) scale(1) rotate(40deg)",opacity:1,offset:.3},
   {transform:"translate(calc(-50% + "+dx+"px),calc(-50% + "+dy+"px)) scale(.4) rotate("+(Math.random()*160-80)+"deg)",opacity:0}
  ],{duration:600+Math.random()*350,delay:Math.random()*110,easing:"ease-out",fill:"both"});
  an.onfinish=function(){if(sp.parentNode){sp.parentNode.removeChild(sp)}};
 })()}
}

var HEARTPNG="watercolor-heart-small.png";
var MOONLOGO="moonlighting-logo.jpg";
var ABOUTPIC="about-family-photo.jpg";
var C={
 "Water":"Calm, flowing, reflective. Slow-down moods for when you need to drift.",
 "Earth":"Grounded, steady, rooted. Moods for growth, comfort and coming home.",
 "Fire":"Bold, passionate, energized. Moods for motion, courage and spark.",
 "Air":"Light, curious, free. Moods for fresh ideas and open windows.",
 "Aether":"Dreamy, spiritual, beyond words. Moods for wonder and the in-between.",
 "About Me":"It’s me, your girl, Eliza – master baker, booty-shaker and maker of magic.",
 "Social Media":"Add your links here: Instagram, TikTok, YouTube and more.",
 "Contact":"Say hello! Add your email or a contact form here.",
 "Playlist":"Your mood playlist will live here. Embed a Spotify or Apple Music link.",
 "Moonlighting":"Portfolio pending!",
 "LinkedIn":"My LinkedIn link is coming soon.",
 "Substack":"My Substack link is coming soon.",
 "Rabbit Hole":"Coming soon."
};
var p=document.getElementById("panel");
document.querySelectorAll("[data-k]").forEach(function(b){
 b.addEventListener("click",function(){
  if(["Water","Earth","Fire","Air","Aether","Rabbit Hole"].indexOf(b.dataset.k)>-1){var hv=b.dataset.k.toLowerCase().replace(/\s+/g,"-");if(b.classList.contains("orb")&&!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches)){sparkle(b);setTimeout(function(){location.hash=hv},560)}else{location.hash=hv}return}document.querySelectorAll(".chk.lit").forEach(function(x){x.classList.remove("lit")});
  document.querySelectorAll("[data-k]").forEach(function(x){x.removeAttribute("aria-pressed")});
  b.setAttribute("aria-pressed","true");
  p.innerHTML="";p.classList.toggle("about",b.dataset.k==="About Me");
  var h=document.createElement("h2");h.textContent=b.dataset.k;
  var t=document.createElement("p");
  if(b.dataset.k==="Social Media"){var a=document.createElement("a");a.href="https://www.facebook.com/McLiza/";a.target="_blank";a.rel="noopener noreferrer";a.textContent="Find me on Facebook";a.className="sl";t.appendChild(a);t.appendChild(document.createElement("br"));t.appendChild(document.createTextNode("It’s risky business following a witch."))}else if(b.dataset.k==="Substack"){var sb=document.createElement("a");sb.href="https://substack.com/@intothesaltyverboten";sb.target="_blank";sb.rel="noopener noreferrer";sb.textContent="What are you doing in my swamp? You have entered Into the Salty Verboten.";sb.className="sl";t.appendChild(sb)}else if(b.dataset.k==="LinkedIn"){var li=document.createElement("a");li.href="https://www.linkedin.com/in/eliza-williams-153418436/";li.target="_blank";li.rel="noopener noreferrer";li.textContent="Connect with me on LinkedIn";li.className="sl";t.appendChild(li)}else if(b.dataset.k==="Playlist"){var q=document.createElement("a");q.href="https://open.spotify.com/playlist/4bItfEnQrP7jUC5vl0jydC";q.target="_blank";q.rel="noopener noreferrer";q.textContent="Listen on Spotify";q.className="sl";t.appendChild(document.createTextNode("Illuminate your right hemisphere."));t.appendChild(document.createElement("br"));t.appendChild(q)}else if(b.dataset.k==="Contact"){t.appendChild(document.createTextNode("Speak to me! "));var m=document.createElement("a");m.href="mailto:mclizasnarkypants@hotmail.com";m.textContent="mclizasnarkypants@hotmail.com";m.className="sl";t.appendChild(m)}else if(b.dataset.k==="Moonlighting"){t.appendChild(document.createTextNode(C["Moonlighting"]));t.appendChild(document.createElement("br"));t.appendChild(document.createElement("br"));t.appendChild(document.createTextNode("My passion is collaborating and co-creating with humans on an energetic level. My work reflects neuropsychology-based concepts, integrating feng shui, resulting in a final product or space that best represents and displays the customer\u2019s authentic personality. My dream goal is to bring your vision to life, through design that feels like home to your soul."))}else{t.textContent=C[b.dataset.k]}
  p.appendChild(h);if(b.dataset.k==="Moonlighting"){var lg=document.createElement("img");lg.src=MOONLOGO;lg.alt="Moss & Mood logo";lg.className="moonlogo";var mw=document.createElement("div");mw.className="moonwrap";mw.appendChild(lg);var mt=document.createElement("div");mt.className="moontag";mt.textContent="Design by Soul";mw.appendChild(mt);var dv=document.createElement("div");dv.className="moondiv";var l1=document.createElement("span");var hi=document.createElement("img");hi.src=HEARTPNG;hi.alt="";var l2=document.createElement("span");dv.appendChild(l1);dv.appendChild(hi);dv.appendChild(l2);mw.appendChild(dv);p.appendChild(mw)}if(b.dataset.k==="About Me"){var im=document.createElement("img");im.src=ABOUTPIC;im.alt="Eliza and her family standing together on a lawn with red rock cliffs behind them";im.className="aboutpic";p.appendChild(im)}p.appendChild(t);if(b.dataset.k==="About Me"){t.className="hp";["I married a good-looking blue collar man in 2007 and moved from my hometown, Salt Lake City in Utah, and currently reside in Centennial Park, Arizona. We have six beautiful, amazing children – five boys and one girl, in that order. I have immense gratitude for being able to stay home with them and watch them grow and be involved in the little and big aspects of their lives. I adore my family more than I adore potatoes.","I have a deep appreciation for food, art, music, permaculture and photography, and my side obsessions are neuroscience, psychology and child development, and astrology; to which I immerse myself in study as often as possible. Philosophizing brings me much joy and I relish in it. I am also a freelance writer and enjoy expression of my innermost thoughts inking out onto paper. I have a knack for graphic design – it may be a niche. Being an herbalist witch in the woods wouldn’t be too shabby, either.","Furthermore, some useless facts about me:","I take great pleasure indulging in beans, toast, tea and matcha. I also get a little sad when I run out of chocolate and cheese.","Random favorites:","Animal – horses and birds","Flower – peonies and roses","Color – magenta and cerulean","Season – autumn","Movie – The Princess Bride","Music – Indie-pop"].forEach(function(x){var ap=document.createElement("p");ap.textContent=x;var fm=/^(Animal|Flower|Color|Season|Movie|Music) /.exec(x);if(fm){ap.className="favline";ap.innerHTML='<span class="ft"></span><span class="fiw">'+FAVI[fm[1]]+'</span>';ap.querySelector(".ft").textContent=x}if(!/^(I take|Animal |Flower |Color |Season |Movie |Music )/.test(x)){ap.className="hp"}else{ap.style.paddingLeft="1.7em"}if(x.indexOf("I take great pleasure")===0||x.indexOf("Animal ")===0||x.indexOf("Flower ")===0||x.indexOf("Color ")===0||x.indexOf("Season ")===0||x.indexOf("Movie ")===0||x.indexOf("Music ")===0){ap.style.marginTop="0"}if(fm){ap.style.marginTop="6px";ap.style.paddingLeft="1.7em"}p.appendChild(ap)})}
  if(b.dataset.k==="Moonlighting"){var ul=document.createElement("ul");ul.className="hearts";["Interior/event design and decor concepts","Vision boards and color palettes","Invitations, menus, banners and wall art, etc.","Website crafting and logos"].forEach(function(x){var li=document.createElement("li");li.textContent=x;ul.appendChild(li)});p.appendChild(ul);var an=document.createElement("div");an.innerHTML="<p style='margin-top:12px'><strong>Underneath the name &ndash; Moss grounds. Mood moves. Design is where the two meet.</strong></p><p style='margin-top:12px'>Moss is the steady, rooted base of a space, and mood is the feeling that moves through it. Every color, texture and layout speaks to the body, so I design with the five elements in mind: Earth for stability, Water for flow, Fire for energy, Air for clarity and Aether for spirit. Each element has a matching chakra, so a room, a logo or a color palette can be tuned to support how you want to feel.</p><p style='margin-top:12px;font-style:italic'>Tap a chakra under an element to see where it lives in the body.</p>";p.appendChild(an)}
 });
});
function route(){document.body.classList.toggle("pw",location.hash==="#water");document.body.classList.toggle("pe",location.hash==="#earth");document.body.classList.toggle("pf",location.hash==="#fire");document.body.classList.toggle("pa",location.hash==="#air");document.body.classList.toggle("px",location.hash==="#aether");document.body.classList.toggle("pr",location.hash==="#rabbit-hole");window.scrollTo(0,0)}
window.addEventListener("hashchange",route);route();
document.getElementById("back").addEventListener("click",function(){location.hash=""});
document.getElementById("back2").addEventListener("click",function(){location.hash=""});
document.getElementById("back3").addEventListener("click",function(){location.hash=""});
document.getElementById("back4").addEventListener("click",function(){location.hash=""});
document.getElementById("back5").addEventListener("click",function(){location.hash=""});
document.getElementById("back6").addEventListener("click",function(){location.hash=""});

(function(){
var CH=[
{n:"Root",el:"Earth",loc:"Base of the spine",th:"Safety, stability and belonging.",c:"#d63a3a",y:248,em:"Stand barefoot, feel your weight sink into the ground and breathe slowly into the base of your spine."},
{n:"Sacral",el:"Water",loc:"Just below the navel",th:"Emotion, creativity, pleasure and flow.",c:"#ef8a2a",y:212,em:"Sway or circle your hips gently, rest a hand below your navel and let your breath ripple like water."},
{n:"Solar Plexus",el:"Fire",loc:"Upper belly",th:"Confidence, will, drive and personal power.",c:"#f2c230",y:175,em:"Sit tall with a hand on your belly and breathe in warmth, picturing a small flame growing steady and bright."},
{n:"Heart",el:"Air",loc:"Center of the chest",th:"Love, compassion and connection.",c:"#3fa65a",y:135,em:"Rest a hand on your heart, take slow, deep breaths and let each exhale soften your chest."},
{n:"Throat",el:"Aether",loc:"Throat",th:"Voice, truth and expression.",c:"#3a9bd6",y:88,em:"Hum or sing softly and feel the vibration in your throat. Say one true thing out loud."},
{n:"Third Eye",el:"Beyond the elements",loc:"Between the brows",th:"Intuition and insight.",c:"#4a4fb8",y:40,em:"Close your eyes and rest your attention between your brows. Notice what you sense without trying to explain it."},
{n:"Crown",el:"Beyond the elements",loc:"Top of the head",th:"Spirit and connection to everything.",c:"#9b59c9",y:18,em:"Imagine soft light gathering at the crown of your head, then let it spread down through your whole body."}
];
function body(sel){
 var PY=[1170,960,790,590,400,195,100],X=515;
 var g='<svg viewBox="0 0 1700 1536" role="img" aria-label="Seated meditating figure with the seven chakras, '+CH[sel].n+' highlighted">';
 var C=CH[sel].c;g+='<defs><clipPath id="fc"><rect x="0" y="0" width="1024" height="1536" rx="70"/></clipPath><radialGradient id="dim" gradientUnits="userSpaceOnUse" cx="'+X+'" cy="'+PY[sel]+'" r="640"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset=".3" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".56"/></radialGradient><radialGradient id="gl"><stop offset="0" stop-color="#ffffff" stop-opacity=".95"/><stop offset=".22" stop-color="'+C+'" stop-opacity="1"/><stop offset=".55" stop-color="'+C+'" stop-opacity=".62"/><stop offset="1" stop-color="'+C+'" stop-opacity="0"/></radialGradient></defs>';
 g+='<image href="'+YOGAPIC+'" x="0" y="0" width="1024" height="1536" clip-path="url(#fc)" preserveAspectRatio="xMidYMid slice"/>';
 g+='<rect x="0" y="0" width="1024" height="1536" rx="70" fill="url(#dim)"/>';
 g+='<rect x="0" y="0" width="1024" height="1536" rx="70" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="6"/>';
 g+='<line x1="'+X+'" y1="'+PY[6]+'" x2="'+X+'" y2="'+PY[0]+'" stroke="#fff" stroke-opacity=".28" stroke-width="5" stroke-dasharray="14 18"/>';
 var RX=[470,410,410,460,270,215,300],RY=[360,310,310,400,210,190,255];
 g+='<ellipse class="chglow" cx="'+X+'" cy="'+PY[sel]+'" rx="'+RX[sel]+'" ry="'+RY[sel]+'" fill="url(#gl)" style="mix-blend-mode:screen" clip-path="url(#fc)"/>';
 g+='<ellipse cx="'+X+'" cy="'+PY[sel]+'" rx="'+(RX[sel]*.45)+'" ry="'+(RY[sel]*.45)+'" fill="url(#gl)" style="mix-blend-mode:screen" clip-path="url(#fc)"/>';
 g+='<ellipse cx="'+X+'" cy="'+PY[sel]+'" rx="'+(RX[sel]*.22)+'" ry="'+(RY[sel]*.22)+'" fill="#fff" fill-opacity=".85" style="mix-blend-mode:screen" clip-path="url(#fc)"/>';
 for(var i=0;i<CH.length;i++){
  var h=CH[i],y=PY[i],on=i===sel;
  g+='<g data-c="'+i+'" style="cursor:pointer">';
  if(on){g+='<circle cx="'+X+'" cy="'+y+'" r="150" fill="'+h.c+'" fill-opacity=".22"/><circle cx="'+X+'" cy="'+y+'" r="100" fill="'+h.c+'" fill-opacity=".4"/><circle cx="'+X+'" cy="'+y+'" r="62" fill="'+h.c+'" fill-opacity=".95" stroke="#fff" stroke-width="9"/>';}
  else{g+='<circle cx="'+X+'" cy="'+y+'" r="30" fill="'+h.c+'" fill-opacity=".85" stroke="#fff" stroke-opacity=".75" stroke-width="5"/>';}
  g+='<line x1="'+(on?X+66:X+36)+'" y1="'+y+'" x2="1090" y2="'+y+'" stroke="'+h.c+'" stroke-opacity="'+(on?.95:.45)+'" stroke-width="'+(on?5:3)+'"/>';
  g+='<text x="1110" y="'+(y+(on?34:28))+'" font-size="'+(on?100:84)+'" font-weight="'+(on?'bold':'normal')+'" fill="currentColor" fill-opacity="'+(on?1:.72)+'" style="font-family:Share Tech,Segoe UI,Arial,sans-serif">'+h.n+'</text>';
  g+='<rect x="'+(X-170)+'" y="'+(y-60)+'" width="1300" height="120" fill="transparent"/></g>';
 }
 return g+'</svg>';
}
function show(i){
 var h=CH[i];
 document.querySelectorAll("[data-k]").forEach(function(x){x.removeAttribute("aria-pressed")});
 p.classList.remove("about");p.innerHTML='<div class="chbody">'+body(i)+'<div class="cht"><h2>'+h.n+' chakra</h2><p class="tag">'+h.el+' &middot; '+h.loc+'</p><p>'+h.th+'</p><p><strong>To embody it:</strong> '+h.em+'</p></div></div>';
 document.querySelectorAll(".chk").forEach(function(d){d.classList.toggle("lit",+d.dataset.ch===i+1)});p.scrollIntoView({behavior:"smooth",block:"nearest"});
}
document.querySelectorAll("[data-ch]").forEach(function(d){
 d.setAttribute("role","button");d.setAttribute("tabindex","0");
 function go(){show(+d.dataset.ch-1)}
 d.addEventListener("click",go);
 d.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go()}});
});
p.addEventListener("click",function(e){var t=e.target.closest&&e.target.closest("[data-c]");if(t){show(+t.getAttribute("data-c"))}});
})();
