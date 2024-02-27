(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.legal_1 = function() {
	this.initialize(img.legal_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.rate = function() {
	this.initialize(img.rate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.copy1();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-150,-125,160,600), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.legal_1();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-150,-125,160,600), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-150,-125,160,600), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00525B").s().p("EgMfA31MAAAhvpQM/HpMAnpMAAABvpg");
	this.shape.setTransform(-107.95,271.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-187.9,-86.2,160,714.6), null);


(lib.f2_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rate();
	this.instance.setTransform(-12,-69,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f2_copy, new cjs.Rectangle(-12,-69,160,600), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00535B").s().p("AH3BEQgDgDAAgEIACgIIAJgVIgWgyIgCgIQAAgFADgDQADgDAFAAQAEAAADACQACADACAGIANAfIANgfQACgGADgDQADgCAEAAQAEAAAEADQADADAAAFQAAADgCAFIgiBPQgCAGgDACQgCACgEAAQgFAAgDgDgAGgAgQgNgMAAgUQAAgQALgLQAKgKANAAQALgBAIAJQADgIAIAAQAFAAADADQADAEAAAEIAAA1QAAAGgDADQgDAEgFAAQgIAAgDgJQgEAGgEABQgEACgGAAQgNABgJgJgAGtgMQgEAFAAAIQAAAIAEAGQAEAFAHAAQAHAAAEgFQAEgGAAgIQAAgIgEgFQgEgFgHAAQgHAAgEAFgAFHAbQgIgNAAgOQAAgIADgIQAEgIAGgFQAJgIAMAAQAJAAAJAGIAAgYQAAgHABgCQADgGAHAAQAHAAACAGQACACAAAHIAABSQAAANgLAAQgIAAgDgJQgGAJgNAAQgPAAgKgNgAFZgNQgEAFAAAIQAAAIAEAFQAEAGAHAAQAGAAAFgGQAEgFAAgIQAAgHgEgGQgFgFgGAAQgGAAgFAFgAD5AcQgKgLAAgRQAAgPALgLQALgLAPAAQAQAAALALQAKALAAAQQAAARgLALQgKAMgQgBQgQAAgLgMgAEJgLQgEAFAAAHQAAAIAEAGQAEAFAHAAQAGAAAFgFQAEgGAAgIQAAgHgEgFQgFgGgGAAQgGAAgFAGgAAEAgQgMgMAAgUQAAgQAKgLQAKgKANAAQALgBAIAJQADgIAIAAQAFAAADADQADAEAAAEIAAA1QAAAGgDADQgDAEgFAAQgIAAgDgJQgEAGgEABQgEACgGAAQgNABgJgJgAARgMQgEAFAAAIQAAAIAEAGQAEAFAHAAQAHAAAEgFQAEgGAAgIQAAgIgEgFQgEgFgHAAQgHAAgEAFgAhEAdQgKgLAAgRQAAgSAMgKQALgKAPAAQALgBAIAFQAGADAAAHQAAAEgCADQgDADgEAAIgHgDIgIgBQgIAAgEAGQgFAEAAAIQAAAIAFAGQAFAFAHAAQAEAAAFgCIAGgCQAEAAADADQACADAAAEQAAAFgEADQgJAHgNgBQgQABgLgMgAi8AgQgNgMAAgUQAAgQALgLQAKgKANAAQALgBAIAJQADgIAIAAQAFAAADADQADAEAAAEIAAA1QAAAGgDADQgDAEgFAAQgIAAgDgJQgEAGgEABQgEACgGAAQgNABgJgJgAivgMQgEAFAAAIQAAAIAEAGQAEAFAHAAQAHAAAEgFQAEgGAAgIQAAgIgEgFQgEgFgHAAQgHAAgEAFgAmCAcQgKgLAAgRQAAgPAKgLQALgLAQAAQAQAAALALQAJALAAAQQAAARgKALQgLAMgPgBQgRAAgKgMgAlygLQgEAFAAAHQAAAIAEAGQAEAFAGAAQAHAAAEgFQAFgGAAgIQAAgHgFgFQgEgGgHAAQgGAAgEAGgAnSAcQgKgLAAgRQAAgPALgLQALgLAPAAQAQAAALALQAKALAAAQQAAARgLALQgKAMgQgBQgQAAgLgMgAnCgLQgEAFAAAHQAAAIAEAGQAEAFAHAAQAGAAAFgFQAEgGAAgIQAAgHgEgFQgFgGgGAAQgGAAgFAGgADGAjQgCgDAAgGIAAgqQgIAAgDgDQgCgEAAgDQAAgIAIgBIAFgBIAAgLQAAgHACgCQADgGAHAAQAGAAADAGQABACAAAHIAAALIAFAAQAFAAADABQAFADAAAGQAAAGgFADQgDABgFAAIgFAAIAAAqQAAAGgBADQgDAFgGAAQgHAAgDgFgAB1AjQgCgDAAgGIAAhRQAAgHACgCQACgGAHAAQAHAAADAGQABACAAAHIAABRQAAAGgBADQgDAFgHAAQgHAAgCgFgABRAjQgBgDAAgGIAAhRQAAgHABgCQADgGAHAAQAGAAADAGQACACAAAHIAABRQAAAGgCADQgDAFgGAAQgHAAgDgFgAkLAhIgYgeIAAAXQAAAGgBADQgDAFgHAAQgHAAgCgFQgCgDAAgGIAAhRQAAgHACgCQACgGAHAAQAHAAADAGQABACAAAHIAAAsIAVgVQAFgGAFABQAEAAADACQADAEAAAFQAAAEgGAFIgNANIATAXQAFAGAAAEQAAAEgEAEQgDADgFAAQgFAAgFgHgAodAnIgIgBIgFgCIgDgGIAAgIIAAhCQAAgIACgDQAEgFAIAAIAXAAQANAAAHAHQAJAHAAALQAAAMgMAIQAIADAEADQAIAIAAAKQAAANgIAIQgJAJgNAAgAoWATIAQAAQAGAAADgDQADgEAAgDQAAgKgNAAIgPAAgAoWgWIALAAQAEAAADgDQADgCAAgFQAAgDgDgCQgDgDgFAAIgKAAg");
	this.shape.setTransform(77.075,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoHCCQg2AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA2AAIQPAAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAg");
	this.shape_1.setTransform(75.5,-16.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(10.5,-29,130,26), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {_replay:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [133,191];
	// timeline functions:
	this.frame_133 = function() {
		if(!this.alreadyExecuted){
			this.alreadyExecuted=true;
			this.loopNum=1;
			} else {
			this.loopNum++;
			if(this.loopNum==3){
				this.stop();
			}
		}
	}
	this.frame_191 = function() {
		this.gotoAndPlay("replay")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(133).call(this.frame_133).wait(58).call(this.frame_191).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvgEgMVAuuIYrAAMAAAhdcI4rAAg");
	this.shape.setTransform(80,300.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(192));

	// cta
	this.instance = new lib.cta();
	this.instance.setTransform(79.1,239.2,1,1,0,0,0,74.8,-16.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadIn).wait(11).to({regX:74.9,regY:-16.4,scaleX:0.85,scaleY:0.85,y:239.25},4).to({regX:74.8,regY:-16.6,scaleX:1,scaleY:1,y:239.2},9).wait(47).to({alpha:0},8).wait(9));

	// legal
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadInOut).wait(154).to({alpha:0},8).wait(9));

	// logo
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},10,cjs.Ease.quadInOut).wait(156).to({alpha:0},8).wait(9));

	// rate
	this.instance_3 = new lib.f2_copy();
	this.instance_3.setTransform(110.45,43.2,1,1,0,0,0,98.2,-26);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadIn).wait(68).to({alpha:0},10).wait(99));

	// f1_copy
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({alpha:1},9,cjs.Ease.quadInOut).wait(164).to({alpha:0},8).wait(9));

	// footerBg
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(187.95,55.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:437.95},9,cjs.Ease.quadOut).wait(171).to({y:55.75},8,cjs.Ease.quadOut).wait(4));

	// bg2
	this.instance_6 = new lib.bg2();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(192));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(80,269.5,80.30000000000001,796.8);
// library properties:
lib.properties = {
	id: 'F19379A36316E044B65C0A44CDDF6F5F',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/copy1.png", id:"copy1"},
		{src:"images/legal_1.png", id:"legal_1"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/rate.png", id:"rate"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F19379A36316E044B65C0A44CDDF6F5F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;