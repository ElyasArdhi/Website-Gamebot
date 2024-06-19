
if (typeof gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime !== "undefined") {
  gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime = {};
gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.GDObjectObjects1= [];


gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.userFunc0xbe7550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const timerName = eventsFunctionContext.getArgument("Timer");
const timerValue = eventsFunctionContext.getArgument("Value");

for (const object of objects) {
    object.unpauseTimer(timerName);
    object._timers.get(timerName).setTime(timerValue * 1000);
}

};
gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.GDObjectObjects1);
gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.userFunc0xbe7550(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.func = function(runtimeScene, Value, Object, Timer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
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
if (argName === "Timer") return Timer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.GDObjectObjects1.length = 0;

gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.registeredGdjsCallbacks = [];