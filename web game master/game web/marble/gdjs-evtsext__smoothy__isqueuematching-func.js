
if (typeof gdjs.evtsExt__Smoothy__IsQueueMatching !== "undefined") {
  gdjs.evtsExt__Smoothy__IsQueueMatching.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Smoothy__IsQueueMatching = {};
gdjs.evtsExt__Smoothy__IsQueueMatching.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__IsQueueMatching.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects2= [];


gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__IsQueueMatching.GDGutterObjects1});
gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__IsQueueMatching.GDGutterObjects1});
gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__IsQueueMatching.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__IsQueueMatching.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LeadingQueueIndex")) || 0 : 0) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBoardBubbleObjects1Objects, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1 */
{runtimeScene.getScene().getVariables().get("firstBubbleColor").setString((( gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1[0].getAnimationName()));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__IsQueueMatching.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LeadingQueueIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__IsQueueMatching.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595IsQueueMatching_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("firstBubbleColor")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1[k] = gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1.length = k;
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Smoothy__IsQueueMatching.func = function(runtimeScene, Gutter, ObjectStack, BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, LeadingQueueIndex, parentEventsFunctionContext) {
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
if (argName === "LeadingQueueIndex") return LeadingQueueIndex;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Smoothy__IsQueueMatching.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__IsQueueMatching.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__IsQueueMatching.GDBoardBubbleObjects2.length = 0;

gdjs.evtsExt__Smoothy__IsQueueMatching.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Smoothy__IsQueueMatching.registeredGdjsCallbacks = [];