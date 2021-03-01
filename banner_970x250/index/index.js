(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[602,0,399,64],[0,548,546,57],[0,342,612,204],[0,0,600,340]]}
];


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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.auto_970x250 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLyATiMAAAgnDMCXlAAAMAAAAnDg");
	mask.setTransform(485.125,125);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#B9B8B8"],[0,0.349],0,-62.3,0.7,1051.2).s().p("EhLyAUIMAAAgoPMCXlAAAMAAAAoPg");
	this.shape.setTransform(485.125,146.725);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,18,970.3,232), null);


(lib.auto = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.auto_970x250();
	this.instance.setTransform(0,0,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.auto, new cjs.Rectangle(0,0,528,299.2), null);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.auto();
	this.instance.setTransform(173,0,1,1,0,0,0,264,149.6);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(0,15.75,1,1,0,0,0,485.1,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.1,-149.6,970.3,303.1);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.auto();
	this.instance.setTransform(173,0,1,1,0,0,0,264,149.6);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(0,15.75,1,1,0,0,0,485.1,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.1,-149.6,970.3,303.1);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.auto();
	this.instance.setTransform(173,0,1,1,0,0,0,264,149.6);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(0,15.75,1,1,0,0,0,485.1,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.1,-149.6,970.3,303.1);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.auto();
	this.instance.setTransform(173,0,1,1,0,0,0,264,149.6);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(0,15.75,1,1,0,0,0,485.1,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.1,-149.6,970.3,303.1);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.auto();
	this.instance.setTransform(173,0,1,1,0,0,0,264,149.6);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(0,15.75,1,1,0,0,0,485.1,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.1,-149.6,970.3,303.1);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.auto();
	this.instance.setTransform(173,0,1,1,0,0,0,264,149.6);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(0,15.75,1,1,0,0,0,485.1,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.1,-149.6,970.3,303.1);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.auto();
	this.instance.setTransform(264,149.6,1,1,0,0,0,264,149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,528,299.2), null);


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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(264,149.6,1,1,0,0,0,264,149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,528,299.2), null);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(173,0,1,1,0,0,0,264,149.6);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(0,15.75,1,1,0,0,0,485.1,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.1,-149.6,970.3,303.1);


// stage content:
(lib.topauto_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// __uus_jõuline_kerghübriid____185_hj_nelikvedu____8_käiguline_automaatkäigukast___oma_klassi_suurim_pakiruum
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(49.1,74,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121));

	// Registeeri_proovisõidule_
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(55.2,209.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121));

	// jalus0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E32A2A").s().p("ApMD6QgsAAgegfQgfgeAAgsIAAkhQAAgsAfgeQAegfAsAAIPRAAQArAAAfAfQAeAeAAAsIgBCbQABBCANAdQAPAhAoALQAmALBUgEQAtgCiVAwQiUAvgqAAg");
	this.shape.setTransform(305.163,227.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(121));

	// jalus1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E32A2A").s().p("AmED6QgqAAiUgvQiUgwAsACQBUAEAmgLQAogLAPghQANgdABhCIgBibQAAgsAegeQAfgfArAAIPRAAQArAAAfAfQAfAeAAAsIAAEhQAAAsgfAeQgfAfgrAAg");
	this.shape_1.setTransform(78.5458,227.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(121));

	// jalus2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E32A2A").s().p("AsvDfIAAm9IZfAAIAAG9g");
	this.shape_2.setTransform(198.525,224.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(121));

	// jalus3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E32A2A").s().p("EhNKAApIAAhRMCaVAAAIAABRg");
	this.shape_3.setTransform(485.025,246.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(121));

	// Hyundai_Tucson
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(49.1,40.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121));

	// logo
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E32A2A").s().p("AH0BSQgdgBgNgQQgMgPAAgfIAAgmQAAggAMgOQAMgPAeAAIA3AAQAcAAANAPQANAQAAAeIAAAmQAAAegNAQQgOAQgbABgAHogpQgDAGAAAQIAAAnQAAAQADAFQAFAFAOAAIAoAAQAOAAAEgFQAEgGAAgPIAAgnQAAgQgEgGQgFgFgNAAIgoAAQgNAAgGAFgAmMBSQgdgBgOgQQgMgPABgfIAAgmQgBggAMgOQANgPAeAAIA2AAQAdAAANAPQAMAQAAAeIAAAmQAAAegMAQQgOAQgcABgAmXgpQgFAHAAAPIAAAnQAAAPAFAGQAEAFAOAAIAnAAQAOAAAFgFQAFgGAAgPIAAgnQAAgPgFgHQgFgFgOAAIgnAAQgOAAgEAFgAFVBQIAAh7IgzAAIAAglICSAAIAAAlIgyAAIAAB7gACqBQQghAAgOgQQgPgSAAggIAAheIAsAAIAABfQAAARAEAGQAGAGAQAAIAxAAIAAh8IArAAIAACggAAmBQIAAglIhLAAIAAAlIgrAAIAAhdQAAggAOgSQAPgSAgABIBkAAIAACggAgigiQgDAHAAAYIAAALIBLAAIAAgzIgwAAQgTAAgFAJgAkIBQIAAigIBxAAQATAAAOANQAQARAAAhQAAAfgQAQQgOANgTAAIhHAAIAAAlgAjeAIIA7AAQAJAAAGgGQAIgGAAgNQAAgPgJgIQgGgEgIAAIg7AAgAotBQIAAh7IgzAAIAAglICTAAIAAAlIg0AAIAAB7g");
	this.shape_4.setTransform(884.7,222.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(121));

	// auto
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(485,123.6);

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(485,120.6);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.setTransform(482,121.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(483,118.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween5("synched",0);
	this.instance_7.setTransform(483,122.6);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.setTransform(483,124.6);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.setTransform(485,123.6);
	this.instance_9._off = true;

	this.instance_10 = new lib.auto();
	this.instance_10.setTransform(658,123.6,1,1,0,0,0,264,149.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.instance_7}]},20).to({state:[{t:this.instance_8}]},20).to({state:[{t:this.instance_9}]},20).to({state:[{t:this.instance_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,y:120.6},19).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},19).to({_off:true,x:482,y:121.6},20).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},20).to({_off:true,x:483,y:118.6},20).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},20).to({_off:true,y:122.6},20).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},20).to({_off:true,y:124.6},20).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},20).to({_off:true,x:485,y:123.6},20).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},20).to({_off:true,regX:264,regY:149.6,x:658,mode:"independent"},1).wait(1));

	// gradient
	this.instance_11 = new lib.ClipGroup();
	this.instance_11.setTransform(485,128.85,1,1,0,0,0,485.1,137.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(121));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(476.1,94,502.9,180.2);
// library properties:
lib.properties = {
	id: '7232C93647FD46559BDD4EE241DB3ED5',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['7232C93647FD46559BDD4EE241DB3ED5'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;