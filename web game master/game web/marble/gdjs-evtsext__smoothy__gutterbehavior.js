
gdjs.evtsExt__Smoothy__GutterBehavior = gdjs.evtsExt__Smoothy__GutterBehavior || {};

/**
 * Behavior generated from Gutter
 */
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior = class GutterBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ObjectStack = behaviorData.ObjectStack !== undefined ? behaviorData.ObjectStack : "";
    this._behaviorData.PushingQueueProgression = Number("0") || 0;
    this._behaviorData.PathName = "";
    this._behaviorData.IsStartBoostEnabled = true;
    this._behaviorData.BeginningSpeed = behaviorData.BeginningSpeed !== undefined ? behaviorData.BeginningSpeed : Number("64") || 0;
    this._behaviorData.EndSpeed = behaviorData.EndSpeed !== undefined ? behaviorData.EndSpeed : Number("17.8") || 0;
    this._behaviorData.Identifier = Number("0") || 0;
    this._behaviorData.AccelerationDuration = behaviorData.AccelerationDuration !== undefined ? behaviorData.AccelerationDuration : Number("2") || 0;
    this._behaviorData.BeginningFillRatio = behaviorData.BeginningFillRatio !== undefined ? behaviorData.BeginningFillRatio : Number("0.5") || 0;
    this._behaviorData.StartBoostDeceleration = behaviorData.StartBoostDeceleration !== undefined ? behaviorData.StartBoostDeceleration : Number("889") || 0;
    this._behaviorData.SafeZoneEndSpeed = behaviorData.SafeZoneEndSpeed !== undefined ? behaviorData.SafeZoneEndSpeed : Number("64") || 0;
    this._behaviorData.SafeZoneEndLengthRatio = behaviorData.SafeZoneEndLengthRatio !== undefined ? behaviorData.SafeZoneEndLengthRatio : Number("0") || 0;
    this._behaviorData.NormalZoneEndSpeed = behaviorData.NormalZoneEndSpeed !== undefined ? behaviorData.NormalZoneEndSpeed : Number("64") || 0;
    this._behaviorData.NormalZoneEndLengthRatio = behaviorData.NormalZoneEndLengthRatio !== undefined ? behaviorData.NormalZoneEndLengthRatio : Number("0.87") || 0;
    this._behaviorData.NearDeathZoneBeginningSpeed = behaviorData.NearDeathZoneBeginningSpeed !== undefined ? behaviorData.NearDeathZoneBeginningSpeed : Number("17.8") || 0;
    this._behaviorData.NearDeathZoneBeginningLengthRatio = behaviorData.NearDeathZoneBeginningLengthRatio !== undefined ? behaviorData.NearDeathZoneBeginningLengthRatio : Number("0.88") || 0;
    this._behaviorData.PushingQueueFarestProgression = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ObjectStack !== newBehaviorData.ObjectStack)
      this._behaviorData.ObjectStack = newBehaviorData.ObjectStack;
    if (oldBehaviorData.PushingQueueProgression !== newBehaviorData.PushingQueueProgression)
      this._behaviorData.PushingQueueProgression = newBehaviorData.PushingQueueProgression;
    if (oldBehaviorData.PathName !== newBehaviorData.PathName)
      this._behaviorData.PathName = newBehaviorData.PathName;
    if (oldBehaviorData.IsStartBoostEnabled !== newBehaviorData.IsStartBoostEnabled)
      this._behaviorData.IsStartBoostEnabled = newBehaviorData.IsStartBoostEnabled;
    if (oldBehaviorData.BeginningSpeed !== newBehaviorData.BeginningSpeed)
      this._behaviorData.BeginningSpeed = newBehaviorData.BeginningSpeed;
    if (oldBehaviorData.EndSpeed !== newBehaviorData.EndSpeed)
      this._behaviorData.EndSpeed = newBehaviorData.EndSpeed;
    if (oldBehaviorData.Identifier !== newBehaviorData.Identifier)
      this._behaviorData.Identifier = newBehaviorData.Identifier;
    if (oldBehaviorData.AccelerationDuration !== newBehaviorData.AccelerationDuration)
      this._behaviorData.AccelerationDuration = newBehaviorData.AccelerationDuration;
    if (oldBehaviorData.BeginningFillRatio !== newBehaviorData.BeginningFillRatio)
      this._behaviorData.BeginningFillRatio = newBehaviorData.BeginningFillRatio;
    if (oldBehaviorData.StartBoostDeceleration !== newBehaviorData.StartBoostDeceleration)
      this._behaviorData.StartBoostDeceleration = newBehaviorData.StartBoostDeceleration;
    if (oldBehaviorData.SafeZoneEndSpeed !== newBehaviorData.SafeZoneEndSpeed)
      this._behaviorData.SafeZoneEndSpeed = newBehaviorData.SafeZoneEndSpeed;
    if (oldBehaviorData.SafeZoneEndLengthRatio !== newBehaviorData.SafeZoneEndLengthRatio)
      this._behaviorData.SafeZoneEndLengthRatio = newBehaviorData.SafeZoneEndLengthRatio;
    if (oldBehaviorData.NormalZoneEndSpeed !== newBehaviorData.NormalZoneEndSpeed)
      this._behaviorData.NormalZoneEndSpeed = newBehaviorData.NormalZoneEndSpeed;
    if (oldBehaviorData.NormalZoneEndLengthRatio !== newBehaviorData.NormalZoneEndLengthRatio)
      this._behaviorData.NormalZoneEndLengthRatio = newBehaviorData.NormalZoneEndLengthRatio;
    if (oldBehaviorData.NearDeathZoneBeginningSpeed !== newBehaviorData.NearDeathZoneBeginningSpeed)
      this._behaviorData.NearDeathZoneBeginningSpeed = newBehaviorData.NearDeathZoneBeginningSpeed;
    if (oldBehaviorData.NearDeathZoneBeginningLengthRatio !== newBehaviorData.NearDeathZoneBeginningLengthRatio)
      this._behaviorData.NearDeathZoneBeginningLengthRatio = newBehaviorData.NearDeathZoneBeginningLengthRatio;
    if (oldBehaviorData.PushingQueueFarestProgression !== newBehaviorData.PushingQueueFarestProgression)
      this._behaviorData.PushingQueueFarestProgression = newBehaviorData.PushingQueueFarestProgression;

    return true;
  }

  // Properties:
  
  _getObjectStack() {
    return this._behaviorData.ObjectStack !== undefined ? this._behaviorData.ObjectStack : "";
  }
  _setObjectStack(newValue) {
    this._behaviorData.ObjectStack = newValue;
  }
  _getPushingQueueProgression() {
    return this._behaviorData.PushingQueueProgression !== undefined ? this._behaviorData.PushingQueueProgression : Number("0") || 0;
  }
  _setPushingQueueProgression(newValue) {
    this._behaviorData.PushingQueueProgression = newValue;
  }
  _getPathName() {
    return this._behaviorData.PathName !== undefined ? this._behaviorData.PathName : "";
  }
  _setPathName(newValue) {
    this._behaviorData.PathName = newValue;
  }
  _getIsStartBoostEnabled() {
    return this._behaviorData.IsStartBoostEnabled !== undefined ? this._behaviorData.IsStartBoostEnabled : true;
  }
  _setIsStartBoostEnabled(newValue) {
    this._behaviorData.IsStartBoostEnabled = newValue;
  }
  _toggleIsStartBoostEnabled() {
    this._setIsStartBoostEnabled(!this._getIsStartBoostEnabled());
  }
  _getBeginningSpeed() {
    return this._behaviorData.BeginningSpeed !== undefined ? this._behaviorData.BeginningSpeed : Number("64") || 0;
  }
  _setBeginningSpeed(newValue) {
    this._behaviorData.BeginningSpeed = newValue;
  }
  _getEndSpeed() {
    return this._behaviorData.EndSpeed !== undefined ? this._behaviorData.EndSpeed : Number("17.8") || 0;
  }
  _setEndSpeed(newValue) {
    this._behaviorData.EndSpeed = newValue;
  }
  _getIdentifier() {
    return this._behaviorData.Identifier !== undefined ? this._behaviorData.Identifier : Number("0") || 0;
  }
  _setIdentifier(newValue) {
    this._behaviorData.Identifier = newValue;
  }
  _getAccelerationDuration() {
    return this._behaviorData.AccelerationDuration !== undefined ? this._behaviorData.AccelerationDuration : Number("2") || 0;
  }
  _setAccelerationDuration(newValue) {
    this._behaviorData.AccelerationDuration = newValue;
  }
  _getBeginningFillRatio() {
    return this._behaviorData.BeginningFillRatio !== undefined ? this._behaviorData.BeginningFillRatio : Number("0.5") || 0;
  }
  _setBeginningFillRatio(newValue) {
    this._behaviorData.BeginningFillRatio = newValue;
  }
  _getStartBoostDeceleration() {
    return this._behaviorData.StartBoostDeceleration !== undefined ? this._behaviorData.StartBoostDeceleration : Number("889") || 0;
  }
  _setStartBoostDeceleration(newValue) {
    this._behaviorData.StartBoostDeceleration = newValue;
  }
  _getSafeZoneEndSpeed() {
    return this._behaviorData.SafeZoneEndSpeed !== undefined ? this._behaviorData.SafeZoneEndSpeed : Number("64") || 0;
  }
  _setSafeZoneEndSpeed(newValue) {
    this._behaviorData.SafeZoneEndSpeed = newValue;
  }
  _getSafeZoneEndLengthRatio() {
    return this._behaviorData.SafeZoneEndLengthRatio !== undefined ? this._behaviorData.SafeZoneEndLengthRatio : Number("0") || 0;
  }
  _setSafeZoneEndLengthRatio(newValue) {
    this._behaviorData.SafeZoneEndLengthRatio = newValue;
  }
  _getNormalZoneEndSpeed() {
    return this._behaviorData.NormalZoneEndSpeed !== undefined ? this._behaviorData.NormalZoneEndSpeed : Number("64") || 0;
  }
  _setNormalZoneEndSpeed(newValue) {
    this._behaviorData.NormalZoneEndSpeed = newValue;
  }
  _getNormalZoneEndLengthRatio() {
    return this._behaviorData.NormalZoneEndLengthRatio !== undefined ? this._behaviorData.NormalZoneEndLengthRatio : Number("0.87") || 0;
  }
  _setNormalZoneEndLengthRatio(newValue) {
    this._behaviorData.NormalZoneEndLengthRatio = newValue;
  }
  _getNearDeathZoneBeginningSpeed() {
    return this._behaviorData.NearDeathZoneBeginningSpeed !== undefined ? this._behaviorData.NearDeathZoneBeginningSpeed : Number("17.8") || 0;
  }
  _setNearDeathZoneBeginningSpeed(newValue) {
    this._behaviorData.NearDeathZoneBeginningSpeed = newValue;
  }
  _getNearDeathZoneBeginningLengthRatio() {
    return this._behaviorData.NearDeathZoneBeginningLengthRatio !== undefined ? this._behaviorData.NearDeathZoneBeginningLengthRatio : Number("0.88") || 0;
  }
  _setNearDeathZoneBeginningLengthRatio(newValue) {
    this._behaviorData.NearDeathZoneBeginningLengthRatio = newValue;
  }
  _getPushingQueueFarestProgression() {
    return this._behaviorData.PushingQueueFarestProgression !== undefined ? this._behaviorData.PushingQueueFarestProgression : Number("0") || 0;
  }
  _setPushingQueueFarestProgression(newValue) {
    this._behaviorData.PushingQueueFarestProgression = newValue;
  }
}

/**
 * Shared data generated from Gutter
 */
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.SharedData = class GutterBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Smoothy_GutterBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Smoothy_GutterBehaviorSharedData = new gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Smoothy_GutterBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateFirstHeadPositionContext_9546GDBoardBubbleObjects1Objects, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPushingQueueProgression((( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / gdjs.evtsExt__CurvedMovement__PathLength.func(runtimeScene, (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushingQueueProgression((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBeginningFillRatio()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsStartBoostEnabled(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPushingQueueFarestProgression(Math.max((gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPushingQueueFarestProgression()), (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPushingQueueProgression())));
}
}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPosition = function(BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.GDBoardBubbleObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateFirstHeadPositionContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPushingQueueProgression()); }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgression = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushingQueueProgressionContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546IsAnyBubbleReachHoleContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDObjectObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546IsAnyBubbleReachHoleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546IsAnyBubbleReachHoleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546IsAnyBubbleReachHoleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546IsAnyBubbleReachHoleContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546IsAnyBubbleReachHoleContext_9546GDBubbleQueueObjects1Objects, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546IsAnyBubbleReachHoleContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546IsAnyBubbleReachHoleContext_9546GDBoardBubbleObjects1Objects, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).HasReachedTarget((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1.length = k;
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHole = function(BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.GDBoardBubbleObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsAnyBubbleReachHoleContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects4= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects5= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects5= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects3= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects4= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects5= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects3Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBoardBubbleObjects3Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects4Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects4});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects4Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects3Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4);

gdjs.copyArray(gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects4Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queueIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetTailMatching(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3 */
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queueIndex")) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetHeadMatching(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects3Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBoardBubbleObjects3Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects4Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects4});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects4Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects3Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3});
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4);

gdjs.copyArray(gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects4Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queueIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetTailMatching(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3 */
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queueIndex")) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetHeadMatching(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Smoothy__IsQueueMatching.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBoardBubbleObjects3Objects, eventsFunctionContext.getBehaviorName("SpeedPathMovement"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queueIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Smoothy__IsQueueMatching.func(runtimeScene, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDObjectObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBubbleQueueObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595GutterBehavior_9546GutterBehavior_9546prototype_9546UpdateMatchingQueueContext_9546GDBoardBubbleObjects3Objects, eventsFunctionContext.getBehaviorName("SpeedPathMovement"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queueIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("queueIndex").sub(1);
}}

}


};gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects1);
{runtimeScene.getScene().getVariables().get("queueIndex").setNumber((( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 2);
}}

}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queueIndex")) >= 0;
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueue = function(BubbleQueue, BubbleQueueBehavior, ObjectStack, BoardBubble, BoardBubbleBehavior, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
, "BubbleQueueBehavior": BubbleQueueBehavior
, "ObjectStack": ObjectStack
, "BoardBubbleBehavior": BoardBubbleBehavior
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects4.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBubbleQueueObjects5.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects3.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects4.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.GDBoardBubbleObjects5.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.UpdateMatchingQueueContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()); }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathName = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PathNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathName = function(Value, parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetPathNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsStartBoostEnabled() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabled = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsBeginningBostEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushingQueueProgression((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNearDeathZoneBeginningLengthRatio()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeath = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IsNearDeathContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdentifier()); }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.Identifier = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.IdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdentifier((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifier = function(Value, parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.SetIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects3= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushingQueueProgression((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeZoneEndLengthRatio()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__ExtendedMath__Map.func(runtimeScene, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPushingQueueProgression()), 0, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeZoneEndLengthRatio()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBeginningSpeed()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeZoneEndSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushingQueueProgression((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeZoneEndLengthRatio()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushingQueueProgression((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNormalZoneEndLengthRatio()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__ExtendedMath__Map.func(runtimeScene, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPushingQueueProgression()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeZoneEndLengthRatio()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNormalZoneEndLengthRatio()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeZoneEndSpeed()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNormalZoneEndSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


{

gdjs.copyArray(gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushingQueueProgression((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNormalZoneEndLengthRatio()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushingQueueProgression((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNearDeathZoneBeginningLengthRatio()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__ExtendedMath__Map.func(runtimeScene, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPushingQueueProgression()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNormalZoneEndLengthRatio()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNearDeathZoneBeginningLengthRatio()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNormalZoneEndSpeed()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNearDeathZoneBeginningSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


{

/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushingQueueProgression((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= (gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNearDeathZoneBeginningLengthRatio()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__ExtendedMath__Map.func(runtimeScene, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPushingQueueProgression()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNearDeathZoneBeginningLengthRatio()), 1, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNearDeathZoneBeginningSpeed()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEndSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBeginningBostEnabled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__ExtendedMath__Map.func(runtimeScene, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPushingQueueFarestProgression()), 0, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBeginningFillRatio()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BoostBeginningSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeZoneEndSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBeginningBostEnabled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeed = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushSpeedContext.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAccelerationDuration()); }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAcceleration = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PushSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAccelerationDuration()); }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDeceleration = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.PushDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext = {};
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__Smoothy__SpeedToReach.func(runtimeScene, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBeginningFillRatio()) * gdjs.evtsExt__CurvedMovement__PathLength.func(runtimeScene, (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartBoostDeceleration()), (( gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBeginningSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeed = function(parentEventsFunctionContext) {

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
, "ObjectStack": this._getObjectStack()
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

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.BoostBeginningSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Smoothy::GutterBehavior", gdjs.evtsExt__Smoothy__GutterBehavior.GutterBehavior);
