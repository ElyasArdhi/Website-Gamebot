
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior || {};

/**
 * Behavior generated from Inserted bubble
 */
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior = class InsertedBubbleBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpeedPathMovement = behaviorData.SpeedPathMovement !== undefined ? behaviorData.SpeedPathMovement : "";
    this._behaviorData.BubbleSize = behaviorData.BubbleSize !== undefined ? behaviorData.BubbleSize : Number("32") || 0;
    this._behaviorData.InsertionDuration = behaviorData.InsertionDuration !== undefined ? behaviorData.InsertionDuration : Number("0.2") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpeedPathMovement !== newBehaviorData.SpeedPathMovement)
      this._behaviorData.SpeedPathMovement = newBehaviorData.SpeedPathMovement;
    if (oldBehaviorData.BubbleSize !== newBehaviorData.BubbleSize)
      this._behaviorData.BubbleSize = newBehaviorData.BubbleSize;
    if (oldBehaviorData.InsertionDuration !== newBehaviorData.InsertionDuration)
      this._behaviorData.InsertionDuration = newBehaviorData.InsertionDuration;

    return true;
  }

  // Properties:
  
  _getSpeedPathMovement() {
    return this._behaviorData.SpeedPathMovement !== undefined ? this._behaviorData.SpeedPathMovement : "";
  }
  _setSpeedPathMovement(newValue) {
    this._behaviorData.SpeedPathMovement = newValue;
  }
  _getBubbleSize() {
    return this._behaviorData.BubbleSize !== undefined ? this._behaviorData.BubbleSize : Number("32") || 0;
  }
  _setBubbleSize(newValue) {
    this._behaviorData.BubbleSize = newValue;
  }
  _getInsertionDuration() {
    return this._behaviorData.InsertionDuration !== undefined ? this._behaviorData.InsertionDuration : Number("0.2") || 0;
  }
  _setInsertionDuration(newValue) {
    this._behaviorData.InsertionDuration = newValue;
  }
}

/**
 * Shared data generated from Inserted bubble
 */
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.SharedData = class InsertedBubbleBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Smoothy_InsertedBubbleBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Smoothy_InsertedBubbleBehaviorSharedData = new gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Smoothy_InsertedBubbleBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext = {};
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects2= [];


gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("BubbleIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[0] : null), (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1[0] : null));
}}

}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("BubbleIndex")) < (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1 */
{gdjs.evtTools.linkedObjects.removeLinkBetween(runtimeScene, (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[0] : null), (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1[0] : null));
}
{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1 */
{runtimeScene.getScene().getVariables().get("BubbleIndex").setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).HeightOf(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 1);
}
{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("MovingBubble"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference(gdjs.evtTools.common.angleBetweenPositions((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1[0].getX()), (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1[0].getY()), (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1[0].getPointX("")), (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1[0].getPointY(""))), (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).MovementAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))) > 90);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects, (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects, (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("MovingBubble"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1);
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPath((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1[i].separateFromObjectsList(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546InitializeContext_9546GDBoardBubbleObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1[0].getAnimationName()));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[i].getVariables().get("FreedDistance")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[i].getVariables().get("InitialDeltaX")).setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1[0].getPointX("")) - (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1[0].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1[i].getVariables().get("InitialDeltaY")).setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1[0].getPointY("")) - (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1[0].getY()));
}
}}

}


};

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.Initialize = function(Gutter, GutterBehavior, BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, MovingBubble, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
, "MovingBubble": MovingBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
, "MovingBubble": gdjs.objectsListsToArray(MovingBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.GDMovingBubbleObjects2.length = 0;

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.InitializeContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext = {};
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects3= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDGutterObjects3= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects3= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects3= [];


gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects2);

gdjs.copyArray(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects2);

gdjs.copyArray(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects2[i].getVariables().get("BubbleIndex")).setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).HeightOf(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects1Objects, 0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[0].getVariables()).get("BubbleIndex"))) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPositionOnPath(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[0].getVariables()).get("FreedDistance"))) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[0].getVariables()).get("PreviousFreedDistance")))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects1);
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects1Objects, (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546PlayInsertionContext_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPositionOnPath((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("FreedDistance"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].setPosition(gdjs.evtTools.common.lerp((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1[0].getX()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("InitialDeltaX"))), (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getPointX("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("FreedDistance"))) / (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize())),gdjs.evtTools.common.lerp((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1[0].getY()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("InitialDeltaY"))), (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("FreedDistance"))) / (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize())));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("FreedDistance")) < (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("PreviousFreedDistance")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("FreedDistance"))));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("FreedDistance")).setNumber(Math.min((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getVariables().get("FreedDistance"))) + (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInsertionDuration()), (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize())));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertion = function(Gutter, ObjectStack, BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "SpeedPathMovement": this._getSpeedPathMovement()
, "ObjectStack": ObjectStack
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

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.GDBoardBubbleObjects3.length = 0;

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.PlayInsertionContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext = {};
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1[i].getVariables().get("FreedDistance")) == (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinished = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.IsAnimationFinishedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext = {};
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects2= [];


gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1 */
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects, (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PathOriginX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PathOriginY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), "");
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPath((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getAnimationName()));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPositionOnPath((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getVariables()).get("PositionOnPath"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getVariables()).get("Speed"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Insert(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects, (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getVariables()).get("BubbleIndex"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects, (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].getVariables().get("PositionOnPath")).setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize()));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].getVariables().get("Speed")).setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].getVariables().get("BubbleIndex")).setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).HeightOf(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].getVariables().get("QueueIndex")).setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).HeightOf(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[i].getVariables().get("GutterIdentifier")).setNumber((( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).Identifier((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).Identifier((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getVariables()).get("GutterIdentifier"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1[k] = gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595InsertedBubbleBehavior_9546InsertedBubbleBehavior_9546prototype_9546CreateBubbleContext_9546GDBubbleQueueObjects1Objects, (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getVariables()).get("QueueIndex"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1[0].getVariables()).get("QueueIndex"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubble = function(Gutter, GutterBehavior, ObjectStack, BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "SpeedPathMovement": this._getSpeedPathMovement()
, "GutterBehavior": GutterBehavior
, "ObjectStack": ObjectStack
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

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.GDBoardBubbleObjects2.length = 0;

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.CreateBubbleContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext = {};
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.GDObjectObjects1[0].getVariables()).get("QueueIndex"))); }}}

}


};

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndex = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.QueueIndexContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext = {};
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.GDObjectObjects1[0].getVariables()).get("BubbleIndex"))); }}}

}


};

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndex = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.BubbleIndexContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext = {};
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.GDObjectObjects1[0].getVariables()).get("GutterIdentifier"))); }}}

}


};

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifier = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.GutterIdentifierContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Smoothy::InsertedBubbleBehavior", gdjs.evtsExt__Smoothy__InsertedBubbleBehavior.InsertedBubbleBehavior);
