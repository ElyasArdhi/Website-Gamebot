
gdjs.evtsExt__Smoothy__BoardBubbleBehavior = gdjs.evtsExt__Smoothy__BoardBubbleBehavior || {};

/**
 * Behavior generated from Board bubble
 */
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior = class BoardBubbleBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.BubbleSize = behaviorData.BubbleSize !== undefined ? behaviorData.BubbleSize : Number("32") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.BubbleSize !== newBehaviorData.BubbleSize)
      this._behaviorData.BubbleSize = newBehaviorData.BubbleSize;

    return true;
  }

  // Properties:
  
  _getBubbleSize() {
    return this._behaviorData.BubbleSize !== undefined ? this._behaviorData.BubbleSize : Number("32") || 0;
  }
  _setBubbleSize(newValue) {
    this._behaviorData.BubbleSize = newValue;
  }
}

/**
 * Shared data generated from Board bubble
 */
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.SharedData = class BoardBubbleBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Smoothy_BoardBubbleBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Smoothy_BoardBubbleBehaviorSharedData = new gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Smoothy_BoardBubbleBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext = {};
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects1= [];
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects2= [];


gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BoardBubbleBehavior_9546BoardBubbleBehavior_9546prototype_9546ExplodeContext_9546GDBubbleExplosionObjects1Objects = Hashtable.newFrom({"BubbleExplosion": gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects1});
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1);
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595BoardBubbleBehavior_9546BoardBubbleBehavior_9546prototype_9546ExplodeContext_9546GDBubbleExplosionObjects1Objects, (( gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1[0].getPointX("")), (( gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects1[i].setParticleColor1(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("ColorValues").getChild((( gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1[0].getAnimation()))));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects1[i].setParticleColor2(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("ColorValues").getChild((( gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1[0].getAnimation()))));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.Explode = function(BubbleExplosion, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BubbleExplosion": BubbleExplosion
},
  _objectArraysMap: {
"Object": thisObjectList
, "BubbleExplosion": gdjs.objectsListsToArray(BubbleExplosion)
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

gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects1.length = 0;
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.GDBubbleExplosionObjects2.length = 0;

gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.ExplodeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext = {};
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize()); }}}

}


};

gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSize = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.BubbleSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Smoothy::BoardBubbleBehavior", gdjs.evtsExt__Smoothy__BoardBubbleBehavior.BoardBubbleBehavior);
