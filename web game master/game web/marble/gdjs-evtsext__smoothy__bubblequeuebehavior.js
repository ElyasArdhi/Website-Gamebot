
gdjs.evtsExt__Smoothy__BubbleQueueBehavior = gdjs.evtsExt__Smoothy__BubbleQueueBehavior || {};

/**
 * Behavior generated from Bubble queue
 */
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior = class BubbleQueueBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TailState = "Idle";
    this._behaviorData.HeadState = "Idle";
    this._behaviorData.TailComboLevel = Number("0") || 0;
    this._behaviorData.HeadComboLevel = Number("0") || 0;
    this._behaviorData.RewindingSpeedMax = behaviorData.RewindingSpeedMax !== undefined ? behaviorData.RewindingSpeedMax : Number("444") || 0;
    this._behaviorData.RewindingAcceleration = behaviorData.RewindingAcceleration !== undefined ? behaviorData.RewindingAcceleration : Number("1333") || 0;
    this._behaviorData.RewindDelay = behaviorData.RewindDelay !== undefined ? behaviorData.RewindDelay : Number("0.3") || 0;
    this._behaviorData.HitStopBeforeRewindDuration = behaviorData.HitStopBeforeRewindDuration !== undefined ? behaviorData.HitStopBeforeRewindDuration : Number("0.1") || 0;
    this._behaviorData.HitStopAfterComboDuration = behaviorData.HitStopAfterComboDuration !== undefined ? behaviorData.HitStopAfterComboDuration : Number("0.4") || 0;
    this._behaviorData.ImpactSpeedGain = behaviorData.ImpactSpeedGain !== undefined ? behaviorData.ImpactSpeedGain : Number("133.3") || 0;
    this._behaviorData.ImpactSpeedMax = behaviorData.ImpactSpeedMax !== undefined ? behaviorData.ImpactSpeedMax : Number("400") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TailState !== newBehaviorData.TailState)
      this._behaviorData.TailState = newBehaviorData.TailState;
    if (oldBehaviorData.HeadState !== newBehaviorData.HeadState)
      this._behaviorData.HeadState = newBehaviorData.HeadState;
    if (oldBehaviorData.TailComboLevel !== newBehaviorData.TailComboLevel)
      this._behaviorData.TailComboLevel = newBehaviorData.TailComboLevel;
    if (oldBehaviorData.HeadComboLevel !== newBehaviorData.HeadComboLevel)
      this._behaviorData.HeadComboLevel = newBehaviorData.HeadComboLevel;
    if (oldBehaviorData.RewindingSpeedMax !== newBehaviorData.RewindingSpeedMax)
      this._behaviorData.RewindingSpeedMax = newBehaviorData.RewindingSpeedMax;
    if (oldBehaviorData.RewindingAcceleration !== newBehaviorData.RewindingAcceleration)
      this._behaviorData.RewindingAcceleration = newBehaviorData.RewindingAcceleration;
    if (oldBehaviorData.RewindDelay !== newBehaviorData.RewindDelay)
      this._behaviorData.RewindDelay = newBehaviorData.RewindDelay;
    if (oldBehaviorData.HitStopBeforeRewindDuration !== newBehaviorData.HitStopBeforeRewindDuration)
      this._behaviorData.HitStopBeforeRewindDuration = newBehaviorData.HitStopBeforeRewindDuration;
    if (oldBehaviorData.HitStopAfterComboDuration !== newBehaviorData.HitStopAfterComboDuration)
      this._behaviorData.HitStopAfterComboDuration = newBehaviorData.HitStopAfterComboDuration;
    if (oldBehaviorData.ImpactSpeedGain !== newBehaviorData.ImpactSpeedGain)
      this._behaviorData.ImpactSpeedGain = newBehaviorData.ImpactSpeedGain;
    if (oldBehaviorData.ImpactSpeedMax !== newBehaviorData.ImpactSpeedMax)
      this._behaviorData.ImpactSpeedMax = newBehaviorData.ImpactSpeedMax;

    return true;
  }

  // Properties:
  
  _getTailState() {
    return this._behaviorData.TailState !== undefined ? this._behaviorData.TailState : "Idle";
  }
  _setTailState(newValue) {
    this._behaviorData.TailState = newValue;
  }
  _getHeadState() {
    return this._behaviorData.HeadState !== undefined ? this._behaviorData.HeadState : "Idle";
  }
  _setHeadState(newValue) {
    this._behaviorData.HeadState = newValue;
  }
  _getTailComboLevel() {
    return this._behaviorData.TailComboLevel !== undefined ? this._behaviorData.TailComboLevel : Number("0") || 0;
  }
  _setTailComboLevel(newValue) {
    this._behaviorData.TailComboLevel = newValue;
  }
  _getHeadComboLevel() {
    return this._behaviorData.HeadComboLevel !== undefined ? this._behaviorData.HeadComboLevel : Number("0") || 0;
  }
  _setHeadComboLevel(newValue) {
    this._behaviorData.HeadComboLevel = newValue;
  }
  _getRewindingSpeedMax() {
    return this._behaviorData.RewindingSpeedMax !== undefined ? this._behaviorData.RewindingSpeedMax : Number("444") || 0;
  }
  _setRewindingSpeedMax(newValue) {
    this._behaviorData.RewindingSpeedMax = newValue;
  }
  _getRewindingAcceleration() {
    return this._behaviorData.RewindingAcceleration !== undefined ? this._behaviorData.RewindingAcceleration : Number("1333") || 0;
  }
  _setRewindingAcceleration(newValue) {
    this._behaviorData.RewindingAcceleration = newValue;
  }
  _getRewindDelay() {
    return this._behaviorData.RewindDelay !== undefined ? this._behaviorData.RewindDelay : Number("0.3") || 0;
  }
  _setRewindDelay(newValue) {
    this._behaviorData.RewindDelay = newValue;
  }
  _getHitStopBeforeRewindDuration() {
    return this._behaviorData.HitStopBeforeRewindDuration !== undefined ? this._behaviorData.HitStopBeforeRewindDuration : Number("0.1") || 0;
  }
  _setHitStopBeforeRewindDuration(newValue) {
    this._behaviorData.HitStopBeforeRewindDuration = newValue;
  }
  _getHitStopAfterComboDuration() {
    return this._behaviorData.HitStopAfterComboDuration !== undefined ? this._behaviorData.HitStopAfterComboDuration : Number("0.4") || 0;
  }
  _setHitStopAfterComboDuration(newValue) {
    this._behaviorData.HitStopAfterComboDuration = newValue;
  }
  _getImpactSpeedGain() {
    return this._behaviorData.ImpactSpeedGain !== undefined ? this._behaviorData.ImpactSpeedGain : Number("133.3") || 0;
  }
  _setImpactSpeedGain(newValue) {
    this._behaviorData.ImpactSpeedGain = newValue;
  }
  _getImpactSpeedMax() {
    return this._behaviorData.ImpactSpeedMax !== undefined ? this._behaviorData.ImpactSpeedMax : Number("400") || 0;
  }
  _setImpactSpeedMax(newValue) {
    this._behaviorData.ImpactSpeedMax = newValue;
  }
}

/**
 * Shared data generated from Bubble queue
 */
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.SharedData = class BubbleQueueBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Smoothy_BubbleQueueBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Smoothy_BubbleQueueBehaviorSharedData = new gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Smoothy_BubbleQueueBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects4= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects5= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects5= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects5= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects4Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects4Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects4});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects3Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4);

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) <= (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4 */
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushAcceleration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4);

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4 */
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4);

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects4Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects4Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects4Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects4});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects3Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4);

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects4Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects3Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushAcceleration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "StopOrTaillingPush" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "HitStopBeforeIdle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "HitStopBeforeRewind" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "Rewinding" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "RewindImpact" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ImpactSpeed((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadComboLevel()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "WillMagnet" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "JustSplit" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2);

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects2);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt(0, -((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushAcceleration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "StopOrTaillingPush" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "HitStopBeforeRewind" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "HitStopEndBeforeRewind" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ImpactSpeed(Math.max(1, (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailComboLevel()) - 1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "Rewinding" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt(-((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRewindingSpeedMax())), -((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRewindingAcceleration())), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "RewindImpact" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2);

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ImpactSpeed((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailComboLevel()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetBubblesSpeedContext_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeed = function(Gutter, GutterBehavior, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Gutter": Gutter
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "GutterBehavior": GutterBehavior
, "ObjectStack": ObjectStack
, "SpeedPathMovement": SpeedPathMovement
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects4.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDGutterObjects5.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects3.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects4.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.GDBoardBubbleObjects5.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetBubblesSpeedContext.eventsList9(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "JustSplit" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState("Idle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i].removeTimer("TimeFromTailImpact");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "AfterImpact" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState("StopOrTaillingPush", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "WillMagnet" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailComboLevel() > 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState("HitStopBeforeRewind", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "HitStopBeforeRewind" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState("HitStopEndBeforeRewind", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].removeTimer("TimeFromTailImpact");
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "WillMagnet" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailComboLevel() <= 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState("HitStopEndBeforeRewind", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "StopOrTaillingPush" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState("Idle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "RewindImpact" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState("AfterImpact", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("TimeFromTailImpact");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "HitStopEndBeforeRewind" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState("Rewinding", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("TimeFromTailImpact") >= (gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRewindDelay()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TimeFromTailImpact") >= (gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRewindDelay()) + (gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHitStopBeforeRewindDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "AfterImpact" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeadState("HitStopBeforeIdle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "WillMagnet" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeadState("HitStopBeforeRewind", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "StopOrTaillingPush" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeadState("Idle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "RewindImpact" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeadState("AfterImpact", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("TimeFromHeadImpact");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("TimeFromHeadImpact") >= (gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRewindDelay()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "HitStopBeforeRewind" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("TimeFromHeadImpact") >= (gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRewindDelay()) + (gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHitStopBeforeRewindDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeadState("Rewinding", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2[i].removeTimer("TimeFromHeadImpact");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "HitStopBeforeIdle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TimeFromHeadImpact") >= (gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRewindDelay()) + (gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHitStopAfterComboDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeadState("Idle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].removeTimer("TimeFromHeadImpact");
}
}}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.max(-((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getImpactSpeedMax())), -((( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getImpactSpeedGain())) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ComboLevel")) || 0 : 0)); }}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeed = function(ComboLevel, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ComboLevel") return ComboLevel;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.ImpactSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldRewind") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "Idle" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "AfterImpact" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "JustSplit" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1_1final, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailState("WillMagnet");
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailComboLevel(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailComboLevel() + (1));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[i].resetTimer("TimeFromTailImpact");
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldRewind") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "Rewinding" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailComboLevel(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatching = function(ShouldRewind, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ShouldRewind") return ShouldRewind;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailMatchingContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldRewind") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "Idle" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "HitStopBeforeIdle" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "AfterImpact" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "JustSplit" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1_1final, gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeadState("WillMagnet");
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeadComboLevel(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadComboLevel() + (1));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[i].resetTimer("TimeFromHeadImpact");
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldRewind") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "Rewinding" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeadComboLevel(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeadIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatching = function(ShouldRewind, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ShouldRewind") return ShouldRewind;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadMatchingContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() != "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatching = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsTailMatchingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() != "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatching = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.IsHeadMatchingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailState("JustSplit");
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects1[i].resetTimer("TimeFromTailImpact");
}
}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplit = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustSplitContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHeadIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplit = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustSplitContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "Rewinding" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailState("RewindImpact");
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHit = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailJustHitContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState() == "Rewinding" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeadState("RewindImpact");
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHit = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadJustHitContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetJustMergedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1});
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimeFromTailImpact")) || 0 : 0) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1 */
{gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimeFromTailImpact")) || 0 : 0), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BubbleQueueBehavior_9546BubbleQueueBehavior_9546prototype_9546SetJustMergedContext_9546GDObjectObjects1Objects, "TimeFromTailImpact", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailState((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TailState") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTailComboLevel((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TailComboLevel")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i].removeTimer("TimeFromTailImpact");
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "Rewinding" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailState("RewindImpact");
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "Rewinding") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState() == "RewindImpact") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMerged = function(TailState, TailComboLevel, TimeFromTailImpact, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "TailState") return TailState;
if (argName === "TailComboLevel") return TailComboLevel;
if (argName === "TimeFromTailImpact") return TimeFromTailImpact;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetJustMergedContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailState("StopOrTaillingPush");
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailComboLevel(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1[i].removeTimer("TimeFromTailImpact");
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailIdleContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeadState("StopOrTaillingPush");
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeadComboLevel(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1[i].removeTimer("TimeFromHeadImpact");
}
}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadIdleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailState()); }}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailState = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailStateContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailState((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailState = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailStateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadState()); }}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadState = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadStateContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeadState((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadState = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadStateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTailComboLevel()); }}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevel = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.TailComboLevelContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTailComboLevel((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevel = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetTailComboLevelContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeadComboLevel()); }}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevel = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.HeadComboLevelContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext = {};
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeadComboLevel((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevel = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior.prototype.SetHeadComboLevelContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Smoothy::BubbleQueueBehavior", gdjs.evtsExt__Smoothy__BubbleQueueBehavior.BubbleQueueBehavior);
