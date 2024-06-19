
if (typeof gdjs.evtsExt__Smoothy__CreateLevel !== "undefined") {
  gdjs.evtsExt__Smoothy__CreateLevel.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Smoothy__CreateLevel = {};
gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects1= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects2= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects3= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects4= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects3= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects4= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects3= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects4= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects1= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects2= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects3= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects4= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects1= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects2= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects3= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects4= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects1= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects3= [];
gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects4= [];


gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDLauncherObjects1Objects = Hashtable.newFrom({"Launcher": gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects1});
gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDGutterObjects2Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2});
gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDSpawnerObjects2Objects = Hashtable.newFrom({"Spawner": gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2});
gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDGutterPainterObjects3Objects = Hashtable.newFrom({"GutterPainter": gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects3});
gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDHoleObjects3Objects = Hashtable.newFrom({"Hole": gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects3});
gdjs.evtsExt__Smoothy__CreateLevel.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2, gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("GutterPainter"), gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects3);
gdjs.copyArray(gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2, gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects3);

gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects3.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).DrawDebug(gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDGutterPainterObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDHoleObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Levels").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Level")) || 0 : 0)).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("index"))).getChild("StartX")) + gdjs.evtsExt__CurvedMovement__PathEndX.func(runtimeScene, (( gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects3.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Levels").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Level")) || 0 : 0)).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("index"))).getChild("StartY")) + gdjs.evtsExt__CurvedMovement__PathEndY.func(runtimeScene, (( gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects3.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("index").add(1);
}}

}


};gdjs.evtsExt__Smoothy__CreateLevel.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDLauncherObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Levels").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Level")) || 0 : 0)).getChild("LauncherX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Levels").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Level")) || 0 : 0)).getChild("LauncherY")), "");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("index").setNumber(0);
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().get("Levels").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Level")) || 0 : 0)).getChild("Gutters"));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects2.length = 0;

gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length = 0;

gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDGutterObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Levels").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Level")) || 0 : 0)).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("index"))).getChild("StartX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Levels").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Level")) || 0 : 0)).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("index"))).getChild("StartY")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDBubbleQueueObjects2Objects, -(100), -(100), "");
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).AddOnTop(gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDBubbleQueueObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).SetPathName("Gutter" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("index")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).SetIdentifier(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.func(runtimeScene, (( gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Levels").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Level")) || 0 : 0)).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("index"))).getChild("Path")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__CreateLevel.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595CreateLevel_9546GDSpawnerObjects2Objects, (( gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[0].getPointX("")), (( gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[0].getPointY("")), "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2.length !== 0 ? gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2[0] : null), (gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length !== 0 ? gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpwanerBehavior")).SetPathName((( gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPath((( gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects2[i].hide();
}
}
{ //Subevents: 
gdjs.evtsExt__Smoothy__CreateLevel.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Smoothy__CreateLevel.func = function(runtimeScene, Level, Launcher, Gutter, GutterBehavior, ObjectStack, BubbleQueue, GutterPainter, Hole, Spawner, SpwanerBehavior, ObjectStack, SpeedPathMovement, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Launcher": Launcher
, "Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "GutterPainter": GutterPainter
, "Hole": Hole
, "Spawner": Spawner
},
  _objectArraysMap: {
"Launcher": gdjs.objectsListsToArray(Launcher)
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "GutterPainter": gdjs.objectsListsToArray(GutterPainter)
, "Hole": gdjs.objectsListsToArray(Hole)
, "Spawner": gdjs.objectsListsToArray(Spawner)
},
  _behaviorNamesMap: {
"GutterBehavior": GutterBehavior
, "ObjectStack": ObjectStack
, "SpwanerBehavior": SpwanerBehavior
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
if (argName === "Level") return Level;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects1.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects2.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects3.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDLauncherObjects4.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterObjects4.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDBubbleQueueObjects4.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects1.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects2.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects3.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDGutterPainterObjects4.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects1.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects2.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects3.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDHoleObjects4.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects1.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects2.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects3.length = 0;
gdjs.evtsExt__Smoothy__CreateLevel.GDSpawnerObjects4.length = 0;

gdjs.evtsExt__Smoothy__CreateLevel.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Smoothy__CreateLevel.registeredGdjsCallbacks = [];