
if (typeof gdjs.evtsExt__Smoothy__IsQueueColliding !== "undefined") {
  gdjs.evtsExt__Smoothy__IsQueueColliding.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Smoothy__IsQueueColliding = {};
gdjs.evtsExt__Smoothy__IsQueueColliding.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__IsQueueColliding.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects2= [];


gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__IsQueueColliding.GDGutterObjects1});
gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__IsQueueColliding.GDGutterObjects1});
gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__IsQueueColliding.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("firstBubblePathPosition").setNumber(0);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__IsQueueColliding.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBoardBubbleObjects1Objects, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1 */
{runtimeScene.getScene().getVariables().get("firstBubblePathPosition").setNumber((( gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__IsQueueColliding.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__IsQueueColliding.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueColliding_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("firstBubblePathPosition")) + (gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("BoardBubbleBehavior")).BubbleSize((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1[k] = gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1.length = k;
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Smoothy__IsQueueColliding.func = function(runtimeScene, Gutter, ObjectStack, BubbleQueue, ObjectStack, BoardBubble, BoardBubbleBehavior, SpeedPathMovement, TaillingQueueIndex, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"ObjectStack": ObjectStack
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
if (argName === "TaillingQueueIndex") return TaillingQueueIndex;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Smoothy__IsQueueColliding.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__IsQueueColliding.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__IsQueueColliding.GDBoardBubbleObjects2.length = 0;

gdjs.evtsExt__Smoothy__IsQueueColliding.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Smoothy__IsQueueColliding.registeredGdjsCallbacks = [];