
if (typeof gdjs.evtsExt__ObjectStack__ContainsBetween !== "undefined") {
  gdjs.evtsExt__ObjectStack__ContainsBetween.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectStack__ContainsBetween = {};
gdjs.evtsExt__ObjectStack__ContainsBetween.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ContainsBetween.GDElementObjects1= [];


gdjs.evtsExt__ObjectStack__ContainsBetween.userFunc0xbd0368 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const stackBehaviorName = eventsFunctionContext.getBehaviorName("Behavior");
/** @type {Hashtable<gdjs.RuntimeObject[]>} */
const stackObjectsLists = eventsFunctionContext.getObjectsLists("Object");
/** @type {Hashtable<gdjs.RuntimeObject[]>} */
const elementObjectsLists = eventsFunctionContext.getObjectsLists("Element");
const lowerBound = Math.max(0, eventsFunctionContext.getArgument("LowerBound"));
let upperBound = eventsFunctionContext.getArgument("UpperBound");

eventsFunctionContext.returnValue = gdjs.evtTools.object.twoListsTest(
  (stackObject, element) => {
    const behavior = stackObject.getBehavior(stackBehaviorName);
    return behavior.objectStack.containsBetween(element, lowerBound, upperBound);
  },
  stackObjectsLists,
  elementObjectsLists,
  false
);
};
gdjs.evtsExt__ObjectStack__ContainsBetween.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ContainsBetween.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ContainsBetween.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ContainsBetween.userFunc0xbd0368(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ContainsBetween.func = function(runtimeScene, Object, Behavior, Element, LowerBound, UpperBound, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Element": Element
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Element": gdjs.objectsListsToArray(Element)
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
if (argName === "LowerBound") return LowerBound;
if (argName === "UpperBound") return UpperBound;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ObjectStack__ContainsBetween.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ContainsBetween.GDElementObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ContainsBetween.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ObjectStack__ContainsBetween.registeredGdjsCallbacks = [];