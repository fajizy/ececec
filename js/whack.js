$datalevel = '';


$playedbefore = 0;
$totalgame = 0;

var date = new Date();
var days = 60;
date.setTime(date.getTime() + (days * 24 *3600 * 1000));
$device='';

$ishs = false;
$hscode = '';
$hs = 0;
	//console.log($datalevel);
$numrow =3;
$boxw=200;
$boxh=220;
$sh=0;
$sw=0;
$ismobile = false;
$issafari = false;
$movingspeed=0.3
$run = null;
$issafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
            navigator.userAgent &&
            navigator.userAgent.indexOf('CriOS') == -1 &&
            navigator.userAgent.indexOf('FxiOS') == -1;
$isipad = navigator.userAgent.match(/iPad/i);

if ($isipad&&$issafari) $movingspeed=0.2;

$stage = null;



$stageindex = null;
$defaultstageindex = [
      [1, 10, 8, 11],
      [1, 1, 2 ],
      [1, 6, 3, 7],
      [1, 4, 5 ],
      [1, 12, 9, 13]];

 $desktopdefaultstageindex = [
	[1, 10, 1, 2, 8],
	[1, 11, 6, 3, 7, 12],
	[1, 9, 4, 5, 13]
];
/*

$stage = [
	[0, -1, 0, 1, -1],
	[2, -1, 0, -1, 0, 1],
	[0, -1, 0, 1, 0]
];
$stageindex = [
	[0, -1, 0, 1, -1],
	[2, -1, 0, -1, 0, 1],
	[0, -1, 0, 1, 0]
];
*/
$totalclick = 0;
$money = 200;
$level = 1;

//game variable


$nummole = 0;
$currentmole = 0;
$previousmole = 0;
$currenttrap = 0;
$gametime = 5000;
$upmax = 500;
$upmin = 300;
$upcount= 0;
$upindex = new Array();
$upindex[0] = 0;

$traprest = 1;
$trapingame = true;
$trapcount = 0;
$traphit = 0;
$trapindex = new Array();
$trapindex[0] = 0;	
$jobname = '';
$jobdes = '';
$jobsalary = 0;

$runaway = 0;//from 0 to 100
$runawayspeed = 1;
$holecount = 0;

$score = 0;
$count = 0;
$clock = 0;
$live  = 3;

$moleup = 0;
$timeout = true;
$pause = false;

$gameplay = null;

$img='normal.png';
$hitimg='hit1.png';
$str='';

//end of game variable



//$('.game-container').css({'cursor': 'url("../img/hammer.png"), default'});


// hammer cursor

let root = document.documentElement;

root.addEventListener("mousemove", e => {
	if ($ismobile) return;
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

$('html').on("click","body", function(){
	if ($ismobile) return;
	$('.hammer').addClass('bonkhammer');
	
	setTimeout(function(){ 
		$('.hammer').removeClass('bonkhammer');
	}, 50);
});

// end hammer cursor

function distance(a, b) {
  return(Math.sqrt((a * a) + (b * b)));
}

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
 	if (navigator.userAgent.match(/Android/i)) $device='Android';
 	if (navigator.userAgent.match(/webOS/i)) $device='webOS';
 	if (navigator.userAgent.match(/iPhone/i)) $device='iPhone';
 	if (navigator.userAgent.match(/iPad/i)) $device='iPad';
 	if (navigator.userAgent.match(/BlackBerry/i)) $device='BlackBerry';
 	if (navigator.userAgent.match(/Windows Phone/i)) $device='Windows Phone';
    return true;
  }
 else {
 	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
 	var isFirefox = typeof InstallTrigger !== 'undefined';
 	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isEdge = !isIE && !!window.StyleMedia;
	var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
	var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
	var isBlink = (isChrome || isOpera) && !!window.CSS;
	if (isOpera) $device='Opera';
	else if (isSafari) $device='Safari';
	else if (isFirefox) $device='Firefox';
	else if (isIE) $device = 'IE';
	else if (isEdge) $device='Edge';
	else if (isChrome) $device = 'Chrome';
	else if (isEdgeChromium) $device='EdgeChromium';
	else if (isBlink) $device = 'Blink';
    return false;
  }

}

function resetgamevar()
{
	$boxw=200;
			$boxh=220;
			/////
			$nummole = 0;
			$currentmole = 0;
			$previousmole = 0;
			$upcount= 0;
			$upindex = null;
			$upindex = new Array();
			$upindex[0] = 0;
			$score = 0;
			$count = 0;
			$live=3;

			$clock = 0;
			$moleup = 0;
			
			$trapcount = 0;
			$trapindex = new Array();
			$trapindex[0] = 0;
			


			$nummole = 0;
			$currentmole = 0;
			$previousmole = 0;
			$currenttrap = 0;
			$upmax = 500;
			$upmin = 300;
			$upcount= 0;
			$upindex = new Array();
			$upindex[0] = 0;

			$traprest = 1;
			$trapingame = true;
			$trapcount = 0;
			$traphit = 0;
			$trapindex = new Array();
			$trapindex[0] = 0;	
			$jobname = '';
			$jobdes = '';
			$jobsalary = 0;

			$runaway = 0;//from 0 to 100
			$runawayspeed = 1;
			$holecount = 0;

			$score = 0;
			$count = 0;
			$clock = 0;
			$live  = 3;

			$moleup = 0;
			$timeout = true;
			$pause = false;

			$gameplay = null;

			$level = 1;
}

$ismobile = detectmob();

function setscreensize()
{	
	if ($ismobile) $('.hammer').addClass('hide');
	$sh = $(window).height();
	$sw = $(window).width();

	$('.wrapper').css('width', $sw);
	$('.wrapper').css('height', $sh);

	$('.alert').css('width', $sw);
	$('.alert').css('height', $sh);

	$('.home-screen-2').css('width', $sw);
	$('.home-screen-2').css('height', $sh);
	
	$('#game-sum').css('width', $sw);
	$('#game-sum').css('height', $sh);
	
			
}	

function getleveldata(level)
{
	
	var data = $datalevel;

	
    	
    	myItems = data;

    	$stage = data[level-1].stage;
    	if ($ismobile) 
    		{
    			$stage = data[level-1].mobilestage;
    			$stageindex = data[level-1].mobilestageindex;  
    		}
    	else
    		{
    			$stage = data[level-1].stage;
    			$stageindex = data[level-1].stageindex;  
    			if ($sh>$sw)
    			{
    				$stage = data[level-1].mobilestage;
    				$stageindex = data[level-1].mobilestageindex; 
    			}
    		}
    	 	

    	$upmax = data[level-1].upmax;
    	$upmin = data[level-1].upmin;
    	$trapingame = data[level-1].trap;
    	$nummole = data[level-1].holecount;
    	$runaway = data[level-1].run;
    	$runawayspeed = data[level-1].runspeed;
    	$traprest = data[level-1].traprest;

    	//console.log($stage);
    	if ($score==0) setstage();
    	else updatestage($level);
		setgamesize();
    

}
	

function levelcheck()
{
	if (($score==5&&$level==1)
		||($score==15&&$level==2)
		||($score==25&&$level==3)
		||($score==45&&$level==4))
	{
		$level++;
		console.log('level: '+$level+' score: '+$score);
		getleveldata($level);
	}

	//if ($score==5||$score==15||$score==25||$score==35)
	//	console.log('level: '+$level+' score: '+$score);


}

function updatestage(level)
{
	console.log('update stage');
	if ($nummole==7)
	{
		$('.boxindex-6').css('display','inline-block');
		$('.boxindex-7').css('display','inline-block');
	}
	if ($nummole==9)
	{
		$('.boxindex-8').css('display','inline-block');
		$('.boxindex-9').css('display','inline-block');
	}
	if ($nummole==13)
	{
		$('.boxindex-10').css('display','inline-block');
		$('.boxindex-11').css('display','inline-block');
		$('.boxindex-12').css('display','inline-block');
		$('.boxindex-13').css('display','inline-block');
	}
}

function setgamesize()
{
	console.log('set game size');
	$desktopboxscale=1;
	if (!$ismobile&&$sw>500) $desktopboxscale=0.8;
	$rowcount = 0;
	$maxcol = 0;
	for ($i=0; $i<$stageindex.length; $i++)
	{
		if ($stageindex[$i][0]!=0) $rowcount++;
		$tmpcolcount = 0;
		//if ($stage[$i].length > $maxcol) $maxcol = $stage[$i].length;
		for ($j=1; $j<$stageindex[$i].length; $j++)
		{
			if ($j<$stageindex[$i][$j] >0) $tmpcolcount++;
		}
		if ($tmpcolcount > $maxcol) $maxcol = $tmpcolcount;
	}

	$maxcol++;
	$tmpw = $sw;
	if ($sw > $sh && $sw>1200) $sw=1200;

	$ratioh = 0.8;
	$ratiow = 0.9;

	if ($sh>$sw) {
		$ratioh = 0.85;//0.9 
		$ratiow = 1.1;
	}	

	$esh = $sh*$ratioh/$rowcount;
	$esw = $sw*$ratiow/1.3/$maxcol;

	//160px = 32px

	if ($esw > $esh/1.1) $esw = $esh/1.1;
	$esh = $esw*1.1;


	if ($esw < $boxw)
	{
		$boxw = $esw;
		$boxh = $esh;

	}

	var textsize = $boxw*$desktopboxscale*32/160;
	$('.sfx-minus').css('font-size',textsize+'px');
		$('.run-away').css('width', $boxw*$desktopboxscale*1.05);
		$('.run-away').css('height', $boxw*$desktopboxscale*1.05*1.28);

		$('.box2').css('width', $boxw*$desktopboxscale);
		$('.box2').css('height', $boxh*$desktopboxscale);
		$('.box2').css('margin', '0 '+$boxw*$desktopboxscale/8+'px');
		$('.sparse .box2').css('margin', '0 '+$boxw*$desktopboxscale/4+'px');

	$('.game-container').css('height', $boxh*$desktopboxscale*$rowcount );
	$('.game-container').css('top', $sh*0.52-$boxh*$desktopboxscale*$rowcount*.5 );

	$('.ec').css('top', $boxw*$desktopboxscale*0.13);

	$sw = $tmpw;
}

function setstage()
{
	console.log('set stage');
	var tmpstageindex = $desktopdefaultstageindex;
	if ($ismobile||($sh>$sw)) tmpstageindex = $defaultstageindex;
	$output="";
	$tmp = 0;
	for ($i=0; $i<$stage.length; $i++)
	{
		$p = '';
		if ($stage[$i][0]==2) $p = 'sparse';
		$output+='<div class="row '+$p+'">';

		for ($j=1; $j<$stage[$i].length; $j++)
		{
			$p = '';
			$holedisplay = 'inline-block';
			if ($stage[$i][$j]==1) $p='down';
			if ($stage[$i][$j]==-1) $p='up';
			if ($stageindex[$i][$j]==0) $holedisplay='none';
			else $tmp++;

			$output+='<div class="box2 '+$p+' boxindex-'+tmpstageindex[$i][$j]+'" style="display:'+$holedisplay+'">';
			$output+='<img src="img/hole.png" class="hole">';
			$output+='<img src="img/normal.png" class="mole mole-'+tmpstageindex[$i][$j]+'" id="mole-'+tmpstageindex[$i][$j]+'">';
			$output+='<img src="img/hole-cover.png" class="hole-cover">';
			$output+='<img src="img/sweat.png" class="sweat-l hide">';
			$output+='<img src="img/sweat.png" class="sweat-r hide">';
			$output+='<div class="sfx hide">';
			$output+='<img src="img/star.png" class="star">';
			$output+='<img src="img/star-trap.png" class="star star-trap">';
			$output+='<p class="sfx-minus">-2</p>';
			$output+='<img src="img/ec.png" class="ec">';
			$output+='</div><div class="hitbox hitbox-'+tmpstageindex[$i][$j]+'" index="'+tmpstageindex[$i][$j]+'" upindex=""></div></div>';
			
		}
		$output+='</div>';
	}
	$('.game-container').html($output);
	//console.log($output);
	$nummole = $tmp;
}

function moledisplay($status)
	{
		if ($status=='up')
		{
			$img = 'normal';

			if ($score>=20) $img = 'damage1';
			if ($score>=30) $img = 'damage2';
			if ($score>=40) $img = 'damage3';

			$dimension = Math.floor(Math.random() * 5);
			if ($dimension==3) $img+='-l';
			if ($dimension==4) $img+='-r';
		}

		if ($status=='hit')
		{
			$img = 'hit1';

			if ($score>=40) $img = 'hit2';
		}


		if ($status=='trap1') $img = 'trap1';
		if ($status=='trap1-hit') $img = 'trap1-hit';

		$img = 'img/'+$img+'.png';
		return $img;
	}

function randomTime(min, max)
{
	return Math.round(Math.random() * (max - min) + min);
}

function randomMole()
{	
	//$nummole=2;
	var tmpmole =  Math.round(Math.random() * ($nummole-1) + 1);
	if (tmpmole == $previousmole||tmpmole == $currenttrap) return randomMole();
	else
	return tmpmole;
}

function randomTrap()
{	
	//return 3;
	//$nummole=2;
	var tmptrap =  Math.round(Math.random() * ($nummole-1) + 1);
	if (tmptrap == $previousmole||tmptrap == $currentmole) return randomTrap();
	else
	return tmptrap;
}



function trapup()
{
	if ($trapindex[$trapcount]!=0) return;
	console.log($traprest);
	$trapresttime = randomTime(2000, 4000)*$traprest; //time before dome up
	//console.log('trap rest: '+$trapresttime);

	if (($clock + $trapresttime + 1000) > $gametime) return;

	$trapcount++;
	var tmptrapcount = $trapcount;
	$trapindex[tmptrapcount]=1;//set flag to up = 1
	//console.log('trap index: '+$trapindex);


	setTimeout(function(){

		if ($pause||$timeout)
		{
			$trapindex[tmptrapcount]=0;
			//console.log('pause from trap '+tmptrapcount);
			return;
		}

		$trapuptime = randomTime($upmin, $upmax)+500; //trap stay a bit longer than mole
		$trap = randomTrap();
		$currenttrap = $trap;
		//console.log('current trap: '+$trap);

		$('.mole-'+$trap).removeClass('hide');
		

		

		$('.hitbox-'+$trap).attr('upindex',tmptrapcount); //1 = up, 0 = down
		$('.hitbox-'+$trap).removeClass('bonked');
		$('.hitbox-'+$trap).addClass('trap'); //to classify trap or mole when hit 

		$('.mole-'+$trap).attr('src', this.moledisplay('trap1')); 
		TweenMax.to($('.mole-'+$trap), $movingspeed, {bottom:"1.2%", ease: Power4.easeOut}); //up
	    TweenMax.to($('.hitbox-'+$trap), $movingspeed, {bottom:"0%", ease: Power4.easeOut}); //up

	    setTimeout(function(){
			
			//$('.num').html('down');
			if ($trapindex[tmptrapcount]==1 || $timeout) //only when mole dont run
			{
				TweenMax.to($('.mole-'+$trap), $movingspeed, {bottom:"-100%", ease: Power4.easeIn}); //down
		      	TweenMax.to($('.hitbox-'+$trap), $movingspeed, {bottom:"-100%", ease: Power4.easeIn}); //down
				
				//$trapindex[tmptrapcount]=0;//flag down

				//console.log('down from trap '+tmptrapcount);
			}

		},$trapuptime);

	    //set currenttrap = 0 after it compeletely down
	    setTimeout(function(){	
			if ($trapindex[tmptrapcount]==1 || $timeout) //only when mole dont run
			{			
				$currenttrap = 0;
				$trapindex[tmptrapcount]=0;
				$('.hitbox-'+$trap).removeClass('trap');
			}
		},$trapuptime+$movingspeed*1000);
		

    },$trapresttime);
    
}


function runout()
{
	console.log($live);
	TweenMax.to($('.live-'+$live), 0.3, { scale: 1.3, opacity: 0, ease: Power4.easeIn}); 
	$live--;
	if ($live==0) endgame();
}

function moleup()
{	
	//console.log('mole up ' +$moleup);
	if ($upindex[$upcount]!=0) return;
	//		$('.num').html('');


	$uptime = randomTime($upmin, $upmax);

	$moleup=1;

	//$('.num').html('up');
	$previousmole = $currentmole;
	$mole = randomMole();
	$currentmole = $mole;
	//console.log('current: '+$mole);
	$('.mole-'+$mole).removeClass('hide');


	//count total time the mole go up and set it flag to up = 1
	$upcount++;
	var tmpupcount = $upcount;
	$upindex[tmpupcount]=1;//set flag to up = 1
	//console.log($upindex);


	var run =0; //0: down, 1: run
	var runable = Math.floor(Math.random() * 100);
	if (runable < $runaway) run=1; ///////////////////////////////////// decided by level
	if ($upcount == 1) run=0; 
	//run=1;
	//some calculation & setup for runout 
		//prevent 1st unknown run away position error :))
		if (run==1) $upindex[tmpupcount]=2;//set flag to run = 2
		if (run==1) $uptime-=100; 

	
		//this set the position before run
		var px = $('.mole-'+$mole).offset().left-$boxw*0.14;
		var py = $('.mole-'+$mole).offset().top-$boxh+$boxh*0.18;
		
		//this set the run destination 
		var desx = 0;
		var desy = 0;
		var runspd = $runawayspeed;
		var edge = Math.floor(Math.random() * 4) + 1;     // returns a random integer from 1 to 4
		var upordown = 'down';

		if (edge==1)
		{
			desx = Math.floor(Math.random() * $sw);
			desy = -$boxh*1.5;
			upordown = 'up';
		}
		if (edge==2)
		{
			desx = $sw + $boxw*1.5;
			desy = Math.floor(Math.random() * $sh);
			if (desy < $sh/3) upordown = 'up';
		}
		if (edge==3)
		{
			desx = Math.floor(Math.random() * $sw);
			desy = $sh + $boxh*1.5;
		}
		if (edge==4)
		{
			desx = -$boxw*1.5;
			desy = Math.floor(Math.random() * $sh);
			if (desy < $sh/3) upordown = 'down';
		}

		//this adjust the start position depend on destination
		if (upordown == 'up')
		{
		px = $('.mole-'+$mole).offset().left-$boxw*0.05;
		py = $('.mole-'+$mole).offset().top-$boxh-$boxh*0.13;
		}
		//this render the run img depend on run direction: up or dowm
		renderrunimg(upordown);

		//shorten running duration on short distance 
		var movedistance = distance(desx - px, desy - py);
		var longerdimension = $sw;
		if ($sh>$sw) longerdimension = $sh;
		if(movedistance < longerdimension*0.5) runspd*=0.7;


	$('.hitbox-'+$mole).attr('upindex',tmpupcount); //1 = up, 0 = down
	$('#run-away').attr('index',tmpupcount);
	$('.hitbox-'+$mole).removeClass('bonked');

	$('#run-away').css('display','none');
	$('#run-away').css('top', py);
	$('#run-away').css('left', px);



	$('.mole-'+$mole).attr('src', this.moledisplay('up')); 
	TweenMax.to($('.mole-'+$mole), $movingspeed, {bottom:"1.2%", ease: Power4.easeOut}); //up
    TweenMax.to($('.hitbox-'+$mole), $movingspeed, {bottom:"0%", ease: Power4.easeOut}); //up


    setTimeout(function(){


		if ($upindex[tmpupcount]==2 && !$('.hitbox-'+$mole).hasClass('bonked') && !$timeout && !$pause ) //only when mole run & wasnt hit
		{
			//this hide the mole and move down, prepare for it's next up
			$('.mole-'+$mole).addClass('hide');
			TweenMax.to($('.mole-'+$mole), $movingspeed, {bottom:"-100%", ease: Power4.easeIn}); //down
	      	TweenMax.to($('.hitbox-'+$mole), 0, {bottom:"-100%", ease: Power4.easeIn}); //down

			
			$('#run-away').css('display','block');

			$('.run-hitbox').removeClass('hide');
			$('.run-away').removeClass('bonk');
			$('.run-img').addClass('hide');
    		
			$('.climb-img').removeClass('hide');
			if ($score>20)
			{
			$('.run-u').removeClass('hide');
			$('.run-u').addClass('climb-u');
			}
    	
			setTimeout(function(){ 
				if ($upindex[tmpupcount]==2 && !$('.hitbox-'+$mole).hasClass('bonked') && !$('#run-away').hasClass('bonk') && !$timeout)
				{
					$('.climb-img').addClass('hide');
					
					$('.run-u').removeClass('climb-u');
					$('.run-img').removeClass('hide');

					//remove then add bouncing class to sync movement
					
					$('.run-img').addClass('bouncing');

					$('.run-u').addClass('bouncing');
					
					//

					$run =  TweenMax.to($('#run-away'), runspd-.2, { top: desy, left: desx, onComplete:function(){
						$('.run-img').removeClass('bouncing');
						$('.run-u').removeClass('bouncing');
						if (!$('#run-away').hasClass('bonk') && !$timeout) //loseeeee
						{
							runout();
							//pausegame();
							//$('.alert').css('display','block');
							//$('.alert').css('opacity','1');
							
							//TweenMax.from($('.alert'), .3, { scale:"0.6", opacity: "0", ease: Power3.easeOut}); //down
						}
					}, ease: Power1.easeIn });
				}
			}, 120);

			setTimeout(function(){
				$upindex[tmpupcount]=0;//flag down for the next mole can go up 
			},runspd*1000);
		}

		//$('.num').html('down');
		

	},$uptime-50);

	setTimeout(function(){
		
		//$('.num').html('down');
		if ($upindex[tmpupcount]==1 || $timeout) //only when mole dont run
		{
			TweenMax.to($('.mole-'+$mole), $movingspeed, {bottom:"-100%", ease: Power4.easeIn}); //down
	      	TweenMax.to($('.hitbox-'+$mole), $movingspeed, {bottom:"-100%", ease: Power4.easeIn}); //down
			$moleup=0;
			$upindex[tmpupcount]=0;//flag down
			//console.log('down from mole '+tmpupcount);
		}

	},$uptime);

}



function endgame()
{		
	$.ajax({
        url: 'stat.php',
        type: 'POST',
        dataType: 'text',
        data: {
	        type: 2,
            score: $score,
            totalgame: $totalgame
        }
    }).done(function($ketqua) {
            
       	$ketqua = $.trim($ketqua);
        if ($ketqua == 1) 
        {
            console.log('score added!');
        }
        else if ($ketqua.length==10)
        {
        	$ishs = true;
			$hscode = $ketqua;
			$hs=$score;
        	console.log('high score!');
        	$('.hiscore-fill').css('display','block');
        	$('.main-btn').addClass('hide');
        }
        //else console.log($ketqua);
    });//end ajax	


	renderendscreen();

	setTimeout(function(){
		
			$('#run-away .sfx').addClass('hide');
			//$('header').css('display','none');

	
			resetgamevar();

			getleveldata($level);
			TweenMax.to($('.live-head'), 0, { scale: 1, opacity: 1, ease: Power4.easeIn});
			$('#home-screen').css('opacity', '0').css('top','0px'); 
			TweenMax.to($('#home-screen'), 0.5, {top: 0, opacity: 1 , ease: Power1.easeIn});

			//TweenMax.from($('#home-screen .nextscreen'), 1.5 , {opacity: 0, ease: Power1.easeIn});


	},1500);
		
	setTimeout(function(){
		
			$('.wrapper').css('display','none');
			//$('header').css('display','none');
	},800);

	

	//$('.ad').removeClass('hide-ad');
	
	$('.run-img').addClass('hide');
	$('.run-u').addClass('hide');
	$('.climb-img').addClass('hide');

	$('.hitbox').removeClass('trap');
	
	clearInterval($gameplay);
	$gameplay = null;
	
	$totalclick = 0;
	$timeout = true;
	$pause = false;
	//game variable

	

}

function renderhomescreen()
{
	$('.home-screen').css('width', $sw);
	$('.home-screen').css('height', $sh);

	$('.gradient').css('width', $sw*2);
	$('.gradient').css('height', $sw*2);
	$('.gradient-bg').css('width', $sw*1.1);
	$('.gradient-bg').css('height', $sh);

	if ($ismobile)
	{
		$('.gradient').css('width', $sw*3);
		$('.gradient').css('height', $sw*2);
		$('.gradient-bg').css('width', $sw*1.2);
		$('.gradient-bg').css('height', $sw);
	}	
}
function renderrunimg(upordown)
{	
	$('.climb-img').addClass('climb-img-back');

	$str='';
	$str2='';
	if ($score>30) $str2='-2'; 
	if ($score>40) $str2='-3'; 
	if (upordown == 'up') 
	{
		$str = 'back-';
		$('.climb-img').addClass('climb-img-back');
	}
	$('.climb-img').attr('src','img/run-'+$str+'0.png');
	$('.hit-img').attr('src','img/run-hit-'+$str+'.png');

	$('.run-u').attr('src','img/u'+$str2+'.png');


	$runanimate = setInterval(function(){	
			$('.run-img').attr('src', 'img/run-'+$str+'1.png');
			setTimeout(function(){
				   $('.run-img').attr('src', 'img/run-'+$str+'2.png');
			}, 100);
			setTimeout(function(){
				   $('.run-img').attr('src', 'img/run-'+$str+'3.png');
			}, 200);
	},300);
}



function hit($mole)
{
	$('.hitbox-'+$mole).addClass('bonked');
	$score++;
	$tmpupindex = $('.hitbox-'+$mole).attr('upindex');
	$('.score-out').html($score);
	$('.hitbox-'+$mole).siblings('.mole').attr('src', moledisplay('hit'));

	$('.hitbox-'+$mole).siblings('.sfx').removeClass('hide');
	$('.hitbox-'+$mole).siblings('.sweat-l').removeClass('hide');
	$('.hitbox-'+$mole).siblings('.sweat-r').removeClass('hide');

	TweenMax.from($('.hitbox-'+$mole).siblings('.sfx'), .3, {rotation:-30, width:"5%", left:"75%",  ease: Power4.easeOut});
	TweenMax.from($('.hitbox-'+$mole).siblings('.sweat-l'), .2, { left:"10%", top:"50%",  ease: Power4.easeOut});
	TweenMax.from($('.hitbox-'+$mole).siblings('.sweat-r'), .2, { right:"10%", top:"50%",  ease: Power4.easeOut});
	
	setTimeout(function(){ 
			TweenMax.to( $('.hitbox-'+$mole).siblings('.mole'), $movingspeed, {bottom:"-100%", ease: Power4.easeIn} );
			TweenMax.to( $('.hitbox-'+$mole), $movingspeed, {bottom:"-100%", ease: Power4.easeIn} );
	}, 100);
	setTimeout(function(){ 
		$('.hitbox-'+$mole).siblings('.sweat-l').addClass('hide');
		$('.hitbox-'+$mole).siblings('.sweat-r').addClass('hide');
	}, 150);

	setTimeout(function(){ 
		$('.hitbox-'+$mole).siblings('.sfx').addClass('hide');
		$moleup=0;
		$upindex[$tmpupindex]=0;//flag down
	}, 400);

	////////
	levelcheck();
	///////	
}

function scoreminus()
{
	$('.minus').css("opacity","1");
	TweenMax.to( $('.minus'), 0.5, {'margin-top':"-20px", opacity: "0", ease: Power4.easeIn, onComplete:function(){
		$('.minus').css("opacity","0");
		$('.minus').css('margin-top',"-4px");
	}} );
}

function traphit($trap)
{
	$('.hitbox-'+$trap).addClass('bonked');
	$score-=2;
	$traphit++;
	var tmptrapindex = $('.hitbox-'+$trap).attr('upindex');
	$('.score-out').html($score);

	scoreminus();
	$('.hitbox-'+$trap).siblings('.mole').attr('src', moledisplay('trap1-hit'));

	$('.hitbox-'+$trap).siblings('.sfx').removeClass('hide');
	$('.hitbox-'+$trap).siblings('.sweat-l').removeClass('hide');
	$('.hitbox-'+$trap).siblings('.sweat-r').removeClass('hide');
	$('.hitbox-'+$trap).siblings('.sfx').addClass('trap-sfx');

	TweenMax.from($('.hitbox-'+$trap).siblings('.sfx'), .3, {rotation:-30, width:"5%", left:"75%",  ease: Power4.easeOut});
	TweenMax.from($('.hitbox-'+$trap).siblings('.sweat-l'), .2, { left:"10%", top:"50%",  ease: Power4.easeOut});
	TweenMax.from($('.hitbox-'+$trap).siblings('.sweat-r'), .2, { right:"10%", top:"50%",  ease: Power4.easeOut});
	
	setTimeout(function(){ 
			TweenMax.to( $('.hitbox-'+$trap).siblings('.mole'), $movingspeed, {bottom:"-100%", ease: Power4.easeIn} );
			TweenMax.to( $('.hitbox-'+$trap), $movingspeed, {bottom:"-100%", ease: Power4.easeIn} );
	}, 100);
	setTimeout(function(){ 
		$('.hitbox-'+$trap).siblings('.sweat-l').addClass('hide');
		$('.hitbox-'+$trap).siblings('.sweat-r').addClass('hide');
	}, 150);

	setTimeout(function(){ 
		$('.hitbox-'+$trap).siblings('.sfx').addClass('hide');
		$('.hitbox-'+$trap).removeClass('trap');
		$('.hitbox-'+$trap).siblings('.sfx').removeClass('trap-sfx');
		$trapindex[tmptrapindex]=0;//flag down
		$currenttrap = 0;
	}, 400);
}
// Get a new instance of the Whack A Mole
// class
// Parameters:
// 1. Start Button
// 2. Mole Image
// 3. Score out
// 4. Game Time Length (ms)
// 5. Peep Time Min (ms)
// 6. Peep Time Max (ms)

function displaytime()
{
	var percent = 100-$clock/$gametime*100;
	$('#time-line .inner-line').css('width',percent+'%');
}

function pausegame()
{
	clearInterval($gameplay);
	
	$pause = true;
	//$('#btn-start').html('â–º Ã©c');

}

function countdown(num)
{
	$('#countdown').removeClass('hide');
	var count = num;
	$('#countdown').html(count);
	count--;
	var tmp = setInterval(function(){
		//console.log(count);
		if (count==0) 
			{
				$('#countdown').addClass('hide');
				clearInterval(tmp);
			}
		$('#countdown').html(count);
		count--;
	},1000);

}

function startgame()
{

		$('.ad').addClass('hide-ad');
		//$('#btn-start').addClass('btn-top');
		//$('#btn-start').html('â™â™ Ã©c');
		//$('#btn-start').addClass('disable');
		$('.score-out').html('0');
		$('header').css('display','block');

		

		countdown(3);

		setTimeout(function(){

			//$('#btn-start').removeClass('disable');
			$timeout = false;	


			//check all the status each 100ms
			$gameplay = setInterval(function(){
				if ($timeout===true||$pause===true) clearInterval($gameplay);
				moleup();
				if ($trapingame) trapup();

				//if ($live==0) endgame();
			},100);

		}, 3000);
		
}

function resumegame()
{
	//$('#btn-start').addClass('disable');
	//$('#btn-start').html('â™â™ Ã©c');
	countdown(3);

	setTimeout(function(){
		$pause=false;
		$('#btn-start').removeClass('disable');

		//check all the status each 100ms
		$gameplay = setInterval(function(){
			if ($timeout===true||$pause===true) clearInterval($gameplay);

			moleup();
			if ($trapingame) trapup();

			$clock+=100;
			displaytime();
			if ($clock>=$gametime) endgame('win');
			//console.log($clock);
		},100);
	},3000);
}

function renderhiscorescreen()
{
	$.ajax({
	        url: 'stat.php',
	        type: 'POST',
	        dataType: 'text',
	        data: {
		        type: 4
	        }
	    }).done(function($ketqua) {
	            console.log($ketqua);
	       	$ketqua = $.trim($ketqua);
            
	        $hiscorelist = JSON.parse($ketqua);
	        $hsr=''

	        for ($i = 0; $i<5; $i++)
	        {
	        	$hsr += '<div class="hi-score-item">';
	        	$hsr += '<img src="img/ec.png"> x<span class="hi-score">'+$hiscorelist[$i][0]+'</span><span class="name">'+$hiscorelist[$i][1]+'</span></div>';
	        }

			$('.hi-score-list').html($hsr);
			
		


	        $('.alert').css('display','block');
	        TweenMax.from($('.alert'),0.3, { scale:"2", opacity:"0", ease: Power3.easeOut, onComplete:function(){
			
				
			}}); //down
	        //else console.log($ketqua);
	    });//end ajax
		
}

function renderendscreen()
{
	var score = $score;
	
	var centerx = $sw/2;
	var centery = $sh/2;
	var tmp = '';
	var desktopscale = 1;
	if (!$ismobile) desktopscale=0.6;
	for ($i=1; $i<=score; $i++)
	{
		var randx = Math.floor(Math.random() * 3)-1;     // returns a random integer from 0 to 1
		if (randx<1) randx = -1;
		var spacex = Math.floor(Math.random() * centerx*0.7);

		var randy = Math.floor(Math.random() * 3)-1;     // returns a random integer from 0 to 1
		if (randy<1) randy = -1;
		var spacey = Math.floor(Math.random() * centery*0.7);

		var left = centerx + spacex*randx;
		var top = centery + spacey*randy;

		var scale = randomTime(30, 50);
		if (scale>45) scale+=30;
		var ecw = $sw*desktopscale*scale/100;
		var ech = ecw*405/500;

		if ($i==score)
		{
			left = centerx;
			top = centery;
			ecw = $sw*5.5;
			if (!$ismobile) ecw/=2.5;	
			ech = ecw*405/500;
			//alert(ecw);
		}

		tmp+='<div class=" hide ec-ending ec-ending-'+$i+'" style="top: '+top+'px; left: '+left+'px; width:'+ecw+'px; height:'+ech+'px;">';
		tmp+='<img src="img/star.png" class="star-end">';
		if ($i<score) tmp+='<img src="img/ec.png" class="ec-end">';
		tmp+='</div>';

	}
	$('#end-screen').removeClass('hide');

	$('#end-screen').html(tmp);

	for (let j=1; j<score; j++)
	{	
		var delaytime = randomTime(50, 800);
		var rot = randomTime(20, 50);
		var randrot = Math.floor(Math.random() * 3)-1;     // returns a random integer from 0 to 1
		if (randrot<1) randrot = -1;
		setTimeout(function(){
			$('.ec-ending-'+j).removeClass('hide');
			TweenMax.from($('.ec-ending-'+j), $movingspeed*0.6, {width:"0",height:"0", ease: Power1.easeOut}); //down
			TweenMax.from($('.ec-ending-'+j+' .star-end'), $movingspeed*0.6, {rotation: rot , ease: Power1.easeOut}); //down

		},delaytime);

		setTimeout(function(){
			TweenMax.to($('.ec-ending-'+j), 0.6, {opacity: "0" , ease: Power1.easeIn}); //down
		},delaytime/3+800);
	}

	setTimeout(function(){
			$('.ec-ending-'+score).removeClass('hide');
			TweenMax.from($('.ec-ending-'+score), 0.8, {width:"0",height:"0", ease: Power1.easein}); 
		},800);

	setTimeout(function(){
		$('#game-sum .score').html(score);
		if (score>25) 
		{
			$('.end-body').attr('src','img/end-body-2.png');
			$('.end-face').attr('src','img/end-face-2.png');
			$('.end-face').addClass('face-bounce-2').removeClass('face-bounce-1');
			$('.end-hands').addClass('hide');
			$('.end-effect-1 ').addClass('hide');
			$('.end-effect-1-2 ').addClass('hide');
			$('.end-thumb-1 ').removeClass('hide');
			$('.end-effect-2 ').removeClass('hide');
		}
		if (score>45) 
		{
			$('.end-face').attr('src','img/end-face-3.png');
			$('.end-thumb-2 ').removeClass('hide');
		}

		TweenMax.to($('#game-sum'), 0, {top: 0 , ease: Power1.easeOut});
		$('#game-sum').removeClass('begin');
		$('.second-ec').addClass('hide')
		$('#game-sum').removeClass('hide');
		TweenMax.to($('.ec-ending-'+score), 1.5, {opacity: "0" , ease: Power1.easeIn}); //down
	},1500);
	setTimeout(function(){
		//$('#end-screen').html('');
		$('#end-screen').addClass('hide');
	},3000);
}


$( document ).ready(function() {
    $.getJSON('js/gamelevel.json', function(data) {
		$datalevel = data;
	});

    if ($.cookie('totalgame')==undefined) 
	{
		$.cookie('totalgame', 0 , { expires: date });
		$playedbefore = 1;
		console.log('new player');

	}
	else
	{
		$totalgame = $.cookie('totalgame');
		console.log('total game: '+$totalgame);
	}

 	//setgamesize();
 	$( window ).resize(function() {
	  //setscreensize();
	  //setgamesize();
	});
	setscreensize();
	renderhomescreen();

	/*
	$('#btn-start').click(function() {
		if ($('#btn-start').hasClass('disable')) return;
		if ($clock !=0 && $pause==true) 
			{
				resumegame();
				return;
			}
		if ($clock !=0 && $pause==false) 
			{
				pausegame();
				return;
			}

		startgame();

	});

	*/

	$('.start').click(function() {
		//console.log('started');
		$totalgame++;
		$.cookie('totalgame', $totalgame , { expires: date });


		getleveldata($level);
		//holerender();
		TweenMax.to($('#home-screen'), 1.3, {top: $sh*1.2 , ease: Power3.easeOut});
		TweenMax.to($('#game-sum'), 1, {top: $sh*1.2 , ease: Power3.easeOut});
		$('#game-sum .poke').html('<div class="circle-container">			<img class="end-body" src="img/end-body-1.png"></div><img class="end-face face-bounce-1" src="img/end-face-1.png"><div class="circle-container circle-container-2" ><img class="end-hands " src="img/end-hands.png"></div><img class="end-effect-1 " src="img/end-effect-1.gif"><img class="end-effect-1-2 " src="img/end-effect-1.gif"><img class="end-thumb-1 hide" src="img/end-thumb.png"><img class="end-thumb-2 hide" src="img/end-thumb.png"><img class="end-effect-2 hide" src="img/end-effect-2.gif">');

		$('.wrapper').css('display','block');
		TweenMax.from($('.wrapper'), 0.2, {scale: "1.5", opacity: "0" , ease: Power1.easeOut});
		startgame();	

		if ($playedbefore==1) $.ajax({
                url: 'stat.php',
                type: 'POST',
                dataType: 'text',
                data: {
                    
                    type: 1,
                    device: $device
                }
            }).done(function($ketqua) {
            	$ketqua = $.trim($ketqua);
            	//console.log($ketqua);
                if ($ketqua == 1) 
                	{
                		$playedbefore = 0;
                		console.log('device added!');
                	}
                

    	});//end ajax	
	
	});

	$('.alert').click(function() {
		TweenMax.to($('.alert'),0.3, { scale:"0.5", opacity:"0", ease: Power3.easeOut, onComplete:function(){
			
			TweenMax.to($('.alert'), 0, { scale:"1", opacity:"1", ease: Power3.easeOut});
			$('.alert').css('display','none');
		}}); //down
	});

	$('.keep-playing').click(function(){
		$jobsalary/=2;
		updatejob();
		TweenMax.to($('.alert'),0.3, { scale:"1.4", opacity:"0", ease: Power3.easeOut, onComplete:function(){
			
			TweenMax.to($('.alert'), 0, { scale:"1/1.4", opacity:"0", ease: Power3.easeOut});
			$('.alert').css('display','none');
		}}); //down

		resumegame();

	});


	$('.give-up').click(function(){
		$jobsalary=0;
		TweenMax.to($('.alert'),0.3, { scale:"1.4", opacity:"0", ease: Power3.easeOut, onComplete:function(){
			TweenMax.to($('.alert'), 0, { scale:"1/1.4", opacity:"0", ease: Power3.easeOut});
			$('.alert').css('display','none');
		}}); //down	

		endgame('lose');

	});


	$('#run-away .run-hitbox').click(function(){

		if ($('#run-away').hasClass('bonk'))
		{
			return;
		}
		$('.run-hitbox').addClass('hide');

		//$('.num').html('');
		//setTimeout(function(){
		//	$('.num').html('click from runbox');
		//},150);
		$('#run-away').addClass('bonk');

		$score++;
		levelcheck();

		$('.score-out').text($score);

		$('.run-img').removeClass('bouncing');
		$('.run-u').removeClass('bouncing');
		$('.run-u').addClass('hit-u');


		if ($run!=null) $run.kill();
		$('.run-img').addClass('hide');
		$('.climb-img').addClass('hide');
		$('.hit-img').removeClass('hide');

		$('#run-away .sfx').removeClass('hide');
		TweenMax.from($('.run-away .sfx'), .3, {rotation:-30, width:"5%", left:"75%",  ease: Power4.easeOut});

		setTimeout(function(){
			$('.hit-img').fadeOut( 200, function(){ 
				$('.hit-img').addClass('hide');
				$('.hit-img').css('display','block');
				$('.run-u').removeClass('hit-u');
				if (!$('.run-u').hasClass('hide')) $('.run-u').addClass('hide');

				$upindex[$('#run-away').attr('index')]=0;
			});
			
		}, 200);
		
		setTimeout(function(){
		$('#run-away .sfx').addClass('hide');
		}, 400);
	});

	$(".namesubmit").click(function(){
		$name = $("#name").val().trim();

		

		if ($name.length==0||$name.length>12) return;
		if ($hscode.length!=10) return;

		$.ajax({
	        url: 'stat.php',
	        type: 'POST',
	        dataType: 'text',
	        data: {
		        type: 3,
	            score: $hs,
	            hscode: $hscode,
	            totalgame: $totalgame,
	            name: $name
	        }
	    }).done(function($ketqua) {
	            
	       	$ketqua = $.trim($ketqua);
	        if ($ketqua == 1) 
	        {
	            console.log('hiscore added!');
	            renderhiscorescreen();
	        }
	        else 
	        {
	        	console.log('something wrong...');
	        }
	        //else console.log($ketqua);
	    });//end ajax

	    TweenMax.to($('.hiscore-fill'), .3, { left: -$sw,  ease: Power4.easeOut, onComplete:function(){	
			$('.hiscore-fill').css('left',0);
			$('.hiscore-fill').css('display','none');
		}}); //down

		setTimeout(function(){
			$('.main-btn').removeClass('hide');
			TweenMax.from($('.main-btn'), 0.3, {left: $sw, ease: Power3.easeOut});
		}, 100);
	});

	$(".ranking").click(function(){
		renderhiscorescreen();
	});

	$("#name").focusout(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
	});

});




$('.game-container').on("click",".hitbox", function(){
	
	$totalclick++;
	$moleindex = $(this).attr('index');

	if($(this).hasClass('bonked')) return;
	
		//$('.num').html('');
		//setTimeout(function(){
		//	$('.num').html('click from hole');
		//},150);
	if($(this).hasClass('trap')) traphit($moleindex);
	else hit($moleindex);

});