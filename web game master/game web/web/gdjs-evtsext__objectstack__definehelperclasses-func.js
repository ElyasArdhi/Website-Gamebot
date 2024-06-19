
if (typeof gdjs.evtsExt__ObjectStack__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__ObjectStack__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectStack__DefineHelperClasses = {};


gdjs.evtsExt__ObjectStack__DefineHelperClasses.userFunc0xbd0368 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._objectStackExtension) {
    return;
}

// Remove from deleted objects from stacks.
gdjs.registerObjectDeletedFromSceneCallback(function (runtimeScene, obj) {
    const extension = runtimeScene._objectStackExtension;
    if (!extension) {
        return;
    }
    if (extension.allUsedObjects.has(obj)) {
        extension.allUsedObjects.delete(obj);
        for (const objectStack of extension.allObjectStacks) {
            objectStack.remove(obj);
        }
    }
});

class ObjectStack {
    /**
     * @type {Array<gdjs.RuntimeObject>}
     */
    stack = [];

    /**
     * Make contains(), remove() and unicity checks more efficients.
     * @type {Set<gdjs.RuntimeObject>}
     */
    objectSet = new Set();

    /**
     * @param {gdjs.RuntimeObject} object
     */
    addOnTop(object) {
        if (this.objectSet.has(object)) {
            return false;
        }
        this.stack.push(object);
        this.objectSet.add(object);
        return true;
    }

    /**
     * @param {gdjs.RuntimeObject} object
     * @param {number} height
     */
    insert(object, height) {
        if (this.objectSet.has(object)) {
            return false;
        }
        this.stack.splice(height, 0, object);
        this.objectSet.add(object);
        return true;
    }

    /**
     * @param {gdjs.RuntimeObject} object
     */
    remove(object) {
        if (this.objectSet.has(object)) {
            // The top element is likely to be removed from the stack.
            // Make its removal O(1)
            if (object === this.stack[this.stack.length - 1]) {
                this.stack.pop();
            }
            else {
                const index = this.stack.indexOf(object);
                if (index >= 0) {
                    this.stack.splice(index, 1);
                }
            }
            this.objectSet.delete(object);
        }
    }

    clear() {
        this.stack.length = 0;
        this.objectSet.clear();
    }

    /**
     * @param {number} insertHeight
     * @param {ObjectStack} other
     * @param {number} lowerBound
     * @param {number} upperBound
     */
    takeInto(insertHeight, other, lowerBound, upperBound) {
        upperBound = Math.min(upperBound, other.stack.length - 1);
        for (let height = lowerBound; height <= upperBound; height++) {
            const insertedObject = other.stack[height];
            this.stack.splice(insertHeight, 0, insertedObject);
            this.objectSet.add(insertedObject);
            insertHeight++;
        }
        if (lowerBound <= upperBound) {
            for (let height = lowerBound; height <= upperBound; height++) {
                other.objectSet.delete(other.stack[height]);
            }
            other.stack.splice(lowerBound, upperBound - lowerBound + 1);
        }
    }

    shuffle() {
        // Fisher–Yates shuffle
        for (let i = this.stack.length - 1; i >= 1; i--) {
            // TODO use a seed
            const j = Math.floor(Math.random() * (i + 1));
            const swap = this.stack[i];
            this.stack[i] = this.stack[j]
            this.stack[j] = swap;
        }
    }

    /**
     * @param {gdjs.RuntimeObject} object
     */
    heightOf(object) {
        return this.stack.indexOf(object);
    }

    height() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    /**
     * @param {gdjs.RuntimeObject} object
     * @param {number} lowerBound
     * @param {number} upperBound
     */
    containsBetween(object, lowerBound, upperBound) {
        upperBound = Math.min(upperBound, this.stack.length - 1);
        for (let i = lowerBound; i <= upperBound; i++) {
            if (this.stack[i] === object) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param {gdjs.RuntimeObject} object
     * @param {number} height
     */
    containsAt(object, height) {
        return this.stack[height] === object;
    }

    /**
     * @param {gdjs.RuntimeObject} object
     */
    hasOnTop(object) {
        return this.stack.length > 0 && this.stack[this.stack.length - 1] === object;
    }

    /**
     * @param {gdjs.RuntimeObject} object
     */
    contains(object) {
        return this.objectSet.has(object);
    }
}

gdjs._objectStackExtension = {
    ObjectStack
}
};
gdjs.evtsExt__ObjectStack__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectStack__DefineHelperClasses.userFunc0xbd0368(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ObjectStack__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ObjectStack__DefineHelperClasses.registeredGdjsCallbacks = [];