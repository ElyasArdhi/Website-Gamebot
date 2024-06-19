
gdjs.evtsExt__ObjectStack__ObjectStack = gdjs.evtsExt__ObjectStack__ObjectStack || {};

/**
 * Behavior generated from Object Stack
 */
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack = class ObjectStack extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Object Stack
 */
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.SharedData = class ObjectStackSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ObjectStack_ObjectStackSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ObjectStack_ObjectStackSharedData = new gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.SharedData(
      initialData
    );
  }
  return instanceContainer._ObjectStack_ObjectStackSharedData;
}

// Methods:
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.userFunc0x957ae0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const ObjectStack = gdjs._objectStackExtension.ObjectStack;

const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.objectStack = new ObjectStack();

if (!runtimeScene._objectStackExtension) {
  runtimeScene._objectStackExtension = {
    allObjectStacks: new Set(),
    // Its only use is to have a O(1) check for
    // deleted objects that have never been in a stack.
    allUsedObjects: new Set()
  };
}
runtimeScene._objectStackExtension.allObjectStacks.add(behavior.objectStack);

};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__ObjectStack__DefineHelperClasses.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.userFunc0x957ae0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.userFunc0x958170 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

runtimeScene._objectStackExtension.allObjectStacks.delete(behavior);

};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.userFunc0x958170(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDElementsObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.userFunc0x8a1d40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const elements = eventsFunctionContext.getObjects("Elements");

const stack = behavior.objectStack;
for (const element of elements) {
  const isAdded = stack.addOnTop(element);
  if (isAdded) {
    runtimeScene._objectStackExtension.allUsedObjects.add(object);
  }
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.userFunc0x8a1d40(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTop = function(Elements, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Elements": Elements
},
  _objectArraysMap: {
"Object": thisObjectList
, "Elements": gdjs.objectsListsToArray(Elements)
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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDElementsObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDElementsObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.userFunc0x956b40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const elements = eventsFunctionContext.getObjects("Elements");
let height = eventsFunctionContext.getArgument("Height");

const stack = behavior.objectStack;

if (height < 0 || height > stack.height()) {
  console.error(`Tried to insert in the stack at ${height} where the stack is ${stack.length} height.`);
  height = Math.min(0, Math.max(stack.height(), height))
}

for (const element of elements) {
  const isAdded = stack.insert(element, height);
  if (isAdded) {
    runtimeScene._objectStackExtension.allUsedObjects.add(object);
  }
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.userFunc0x956b40(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Insert = function(Elements, Height, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Elements": Elements
},
  _objectArraysMap: {
"Object": thisObjectList
, "Elements": gdjs.objectsListsToArray(Elements)
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
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDElementsObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDElementsObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.userFunc0x949f80 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const elements = eventsFunctionContext.getObjects("Elements");

const stack = behavior.objectStack;
for (const element of elements) {
  const isAdded = stack.remove(element);
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.userFunc0x949f80(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Remove = function(Elements, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Elements": Elements
},
  _objectArraysMap: {
"Object": thisObjectList
, "Elements": gdjs.objectsListsToArray(Elements)
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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDElementsObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.userFunc0x956358 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.objectStack.clear();
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.userFunc0x956358(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Clear = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDStackObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.userFunc0x8a29b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const otherStacks = eventsFunctionContext.getObjects("Stack");
const otherStackBehaviorName = eventsFunctionContext.getBehaviorName("StackBehavior");
const insertHeight = eventsFunctionContext.getArgument("Height");
const lowerBound = Math.max(0, eventsFunctionContext.getArgument("LowerBound"));
const upperBound = eventsFunctionContext.getArgument("UpperBound");

for (const otherStack of otherStacks) {
    const otherObjectStack = otherStack.getBehavior(otherStackBehaviorName).objectStack;
    behavior.objectStack.takeInto(insertHeight, otherObjectStack, lowerBound, upperBound);
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.userFunc0x8a29b0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveInto = function(Height, Stack, StackBehavior, LowerBound, UpperBound, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Stack": Stack
},
  _objectArraysMap: {
"Object": thisObjectList
, "Stack": gdjs.objectsListsToArray(Stack)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "StackBehavior": StackBehavior
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
if (argName === "Height") return Height;
if (argName === "LowerBound") return LowerBound;
if (argName === "UpperBound") return UpperBound;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDStackObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects2= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects2= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectStack_9595_9595ObjectStack_9546ObjectStack_9546prototype_9546MoveAllIntoContext_9546GDStackObjects1Objects = Hashtable.newFrom({"Stack": gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1});
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Stack"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveInto((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Height")) || 0 : 0), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectStack_9595_9595ObjectStack_9546ObjectStack_9546prototype_9546MoveAllIntoContext_9546GDStackObjects1Objects, eventsFunctionContext.getBehaviorName("StackBehavior"), 0, (( gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("StackBehavior")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllInto = function(Height, Stack, StackBehavior, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Stack": Stack
},
  _objectArraysMap: {
"Object": thisObjectList
, "Stack": gdjs.objectsListsToArray(Stack)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "StackBehavior": StackBehavior
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
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects2.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects2= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects2= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectStack_9595_9595ObjectStack_9546ObjectStack_9546prototype_9546MoveAllOnTopContext_9546GDStackObjects1Objects = Hashtable.newFrom({"Stack": gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1});
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Stack"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveInto((gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectStack_9595_9595ObjectStack_9546ObjectStack_9546prototype_9546MoveAllOnTopContext_9546GDStackObjects1Objects, eventsFunctionContext.getBehaviorName("StackBehavior"), 0, (( gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("StackBehavior")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTop = function(Stack, StackBehavior, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Stack": Stack
},
  _objectArraysMap: {
"Object": thisObjectList
, "Stack": gdjs.objectsListsToArray(Stack)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "StackBehavior": StackBehavior
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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects2.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.userFunc0x9592c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.objectStack.shuffle();
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.userFunc0x9592c8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Shuffle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDElementsObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.userFunc0x9593e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
const elements = eventsFunctionContext.getObjects("Elements");

eventsFunctionContext.returnValue = behavior.objectStack.heightOf(elements[0]);
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.userFunc0x9593e0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOf = function(Elements, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Elements": Elements
},
  _objectArraysMap: {
"Object": thisObjectList
, "Elements": gdjs.objectsListsToArray(Elements)
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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDElementsObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.userFunc0x9592b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.objectStack.height();

};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.userFunc0x9592b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Height = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == eventsFunctionContext.getArgument("Height") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeight = function(Height, parentEventsFunctionContext) {

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
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.userFunc0x959358 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.objectStack.isEmpty();
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.userFunc0x959358(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmpty = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ObjectStack::ObjectStack", gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack);
