gdjs.LevelSelectionCode = {};
gdjs.LevelSelectionCode.forEachIndex2 = 0;

gdjs.LevelSelectionCode.forEachObjects2 = [];

gdjs.LevelSelectionCode.forEachTemporary2 = null;

gdjs.LevelSelectionCode.forEachTotalCount2 = 0;

gdjs.LevelSelectionCode.GDLevelObjects1= [];
gdjs.LevelSelectionCode.GDLevelObjects2= [];
gdjs.LevelSelectionCode.GDLevelObjects3= [];
gdjs.LevelSelectionCode.GDLevelObjects4= [];
gdjs.LevelSelectionCode.GDLevelObjects5= [];
gdjs.LevelSelectionCode.GDLevelObjects6= [];
gdjs.LevelSelectionCode.GDLauncherObjects1= [];
gdjs.LevelSelectionCode.GDLauncherObjects2= [];
gdjs.LevelSelectionCode.GDLauncherObjects3= [];
gdjs.LevelSelectionCode.GDLauncherObjects4= [];
gdjs.LevelSelectionCode.GDLauncherObjects5= [];
gdjs.LevelSelectionCode.GDLauncherObjects6= [];
gdjs.LevelSelectionCode.GDGutterPainterObjects1= [];
gdjs.LevelSelectionCode.GDGutterPainterObjects2= [];
gdjs.LevelSelectionCode.GDGutterPainterObjects3= [];
gdjs.LevelSelectionCode.GDGutterPainterObjects4= [];
gdjs.LevelSelectionCode.GDGutterPainterObjects5= [];
gdjs.LevelSelectionCode.GDGutterPainterObjects6= [];
gdjs.LevelSelectionCode.GDStartLocationObjects1= [];
gdjs.LevelSelectionCode.GDStartLocationObjects2= [];
gdjs.LevelSelectionCode.GDStartLocationObjects3= [];
gdjs.LevelSelectionCode.GDStartLocationObjects4= [];
gdjs.LevelSelectionCode.GDStartLocationObjects5= [];
gdjs.LevelSelectionCode.GDStartLocationObjects6= [];
gdjs.LevelSelectionCode.GDHoleObjects1= [];
gdjs.LevelSelectionCode.GDHoleObjects2= [];
gdjs.LevelSelectionCode.GDHoleObjects3= [];
gdjs.LevelSelectionCode.GDHoleObjects4= [];
gdjs.LevelSelectionCode.GDHoleObjects5= [];
gdjs.LevelSelectionCode.GDHoleObjects6= [];


gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDGutterPainterObjects2Objects = Hashtable.newFrom({"GutterPainter": gdjs.LevelSelectionCode.GDGutterPainterObjects2});
gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDLauncherObjects2Objects = Hashtable.newFrom({"Launcher": gdjs.LevelSelectionCode.GDLauncherObjects2});
gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDStartLocationObjects4Objects = Hashtable.newFrom({"StartLocation": gdjs.LevelSelectionCode.GDStartLocationObjects4});
gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDGutterPainterObjects4Objects = Hashtable.newFrom({"GutterPainter": gdjs.LevelSelectionCode.GDGutterPainterObjects4});
gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDHoleObjects4Objects = Hashtable.newFrom({"Hole": gdjs.LevelSelectionCode.GDHoleObjects4});
gdjs.LevelSelectionCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("index").add(1);
}}

}


};gdjs.LevelSelectionCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("index").setNumber(0);
}}

}


{

gdjs.copyArray(gdjs.LevelSelectionCode.GDLevelObjects2, gdjs.LevelSelectionCode.GDLevelObjects3);


const repeatCount4 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects3[0].getVariables()).getFromIndex(0)))).getChild("Gutters"));
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.LevelSelectionCode.GDGutterPainterObjects2, gdjs.LevelSelectionCode.GDGutterPainterObjects4);

gdjs.copyArray(gdjs.LevelSelectionCode.GDLevelObjects3, gdjs.LevelSelectionCode.GDLevelObjects4);

gdjs.LevelSelectionCode.GDHoleObjects4.length = 0;

gdjs.LevelSelectionCode.GDStartLocationObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDStartLocationObjects4Objects, (( gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects4[0].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects4[0].getVariables()).getFromIndex(0)))).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))).getChild("StartX")) / 3, (( gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects4[0].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects4[0].getVariables()).getFromIndex(0)))).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))).getChild("StartY")) / 3, "");
}{for(var i = 0, len = gdjs.LevelSelectionCode.GDStartLocationObjects4.length ;i < len;++i) {
    gdjs.LevelSelectionCode.GDStartLocationObjects4[i].hide();
}
}{runtimeScene.getScene().getVariables().get("pathName").setString((gdjs.RuntimeObject.getVariableString(((gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects4[0].getVariables()).getFromIndex(0))) + "-" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("index")));
}{gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("pathName")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects4[0].getVariables()).getFromIndex(0)))).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))).getChild("Path")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.LevelSelectionCode.GDStartLocationObjects4.length ;i < len;++i) {
    gdjs.LevelSelectionCode.GDStartLocationObjects4[i].getBehavior("SpeedPathMovement").SetPathTo(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("pathName")), 1, false, (( gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects4[0].getPointX("")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects4[0].getVariables()).getFromIndex(0)))).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))).getChild("StartX")) + gdjs.evtsExt__CurvedMovement__PathEndX.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("pathName")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 3, (( gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects4[0].getPointY("")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects4[0].getVariables()).getFromIndex(0)))).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))).getChild("StartY")) + gdjs.evtsExt__CurvedMovement__PathEndY.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("pathName")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LevelSelectionCode.GDStartLocationObjects4.length ;i < len;++i) {
    gdjs.LevelSelectionCode.GDStartLocationObjects4[i].getBehavior("SpeedPathMovement").DrawDebug(gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDGutterPainterObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDHoleObjects4Objects, (( gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects4[0].getPointX("")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects4[0].getVariables()).getFromIndex(0)))).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))).getChild("StartX")) + gdjs.evtsExt__CurvedMovement__PathEndX.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("pathName")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 3, (( gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects4[0].getPointY("")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects4[0].getVariables()).getFromIndex(0)))).getChild("Gutters").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("index"))).getChild("StartY")) + gdjs.evtsExt__CurvedMovement__PathEndY.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("pathName")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 3, "");
}{for(var i = 0, len = gdjs.LevelSelectionCode.GDHoleObjects4.length ;i < len;++i) {
    gdjs.LevelSelectionCode.GDHoleObjects4[i].getBehavior("Scale").setScale(1 / 3);
}
}
{ //Subevents: 
gdjs.LevelSelectionCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


};gdjs.LevelSelectionCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.LevelSelectionCode.GDLevelObjects1);

for (gdjs.LevelSelectionCode.forEachIndex2 = 0;gdjs.LevelSelectionCode.forEachIndex2 < gdjs.LevelSelectionCode.GDLevelObjects1.length;++gdjs.LevelSelectionCode.forEachIndex2) {
gdjs.LevelSelectionCode.GDGutterPainterObjects2.length = 0;

gdjs.LevelSelectionCode.GDLauncherObjects2.length = 0;

gdjs.LevelSelectionCode.GDLevelObjects2.length = 0;


gdjs.LevelSelectionCode.forEachTemporary2 = gdjs.LevelSelectionCode.GDLevelObjects1[gdjs.LevelSelectionCode.forEachIndex2];
gdjs.LevelSelectionCode.GDLevelObjects2.push(gdjs.LevelSelectionCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDGutterPainterObjects2Objects, (( gdjs.LevelSelectionCode.GDLevelObjects2.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects2[0].getPointX("")), (( gdjs.LevelSelectionCode.GDLevelObjects2.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects2[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelSelectionCode.mapOfGDgdjs_9546LevelSelectionCode_9546GDLauncherObjects2Objects, (( gdjs.LevelSelectionCode.GDLevelObjects2.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects2[0].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects2[0].getVariables()).getFromIndex(0)))).getChild("LauncherX")) / 3, (( gdjs.LevelSelectionCode.GDLevelObjects2.length === 0 ) ? 0 :gdjs.LevelSelectionCode.GDLevelObjects2[0].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects2[0].getVariables()).getFromIndex(0)))).getChild("LauncherY")) / 3, "");
}{for(var i = 0, len = gdjs.LevelSelectionCode.GDLauncherObjects2.length ;i < len;++i) {
    gdjs.LevelSelectionCode.GDLauncherObjects2[i].getBehavior("Scale").setScale(1 / 3);
}
}
{ //Subevents: 
gdjs.LevelSelectionCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


};gdjs.LevelSelectionCode.eventsList3 = function(runtimeScene) {

{


gdjs.LevelSelectionCode.eventsList2(runtimeScene);
}


};gdjs.LevelSelectionCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.LevelSelectionCode.GDLevelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectionCode.GDLevelObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectionCode.GDLevelObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectionCode.GDLevelObjects1[k] = gdjs.LevelSelectionCode.GDLevelObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectionCode.GDLevelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectionCode.GDLevelObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelObjects1[0].getVariables()).getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.LevelSelectionCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelSelectionCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.LevelSelectionCode.eventsList4(runtimeScene);
}


};

gdjs.LevelSelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectionCode.GDLevelObjects1.length = 0;
gdjs.LevelSelectionCode.GDLevelObjects2.length = 0;
gdjs.LevelSelectionCode.GDLevelObjects3.length = 0;
gdjs.LevelSelectionCode.GDLevelObjects4.length = 0;
gdjs.LevelSelectionCode.GDLevelObjects5.length = 0;
gdjs.LevelSelectionCode.GDLevelObjects6.length = 0;
gdjs.LevelSelectionCode.GDLauncherObjects1.length = 0;
gdjs.LevelSelectionCode.GDLauncherObjects2.length = 0;
gdjs.LevelSelectionCode.GDLauncherObjects3.length = 0;
gdjs.LevelSelectionCode.GDLauncherObjects4.length = 0;
gdjs.LevelSelectionCode.GDLauncherObjects5.length = 0;
gdjs.LevelSelectionCode.GDLauncherObjects6.length = 0;
gdjs.LevelSelectionCode.GDGutterPainterObjects1.length = 0;
gdjs.LevelSelectionCode.GDGutterPainterObjects2.length = 0;
gdjs.LevelSelectionCode.GDGutterPainterObjects3.length = 0;
gdjs.LevelSelectionCode.GDGutterPainterObjects4.length = 0;
gdjs.LevelSelectionCode.GDGutterPainterObjects5.length = 0;
gdjs.LevelSelectionCode.GDGutterPainterObjects6.length = 0;
gdjs.LevelSelectionCode.GDStartLocationObjects1.length = 0;
gdjs.LevelSelectionCode.GDStartLocationObjects2.length = 0;
gdjs.LevelSelectionCode.GDStartLocationObjects3.length = 0;
gdjs.LevelSelectionCode.GDStartLocationObjects4.length = 0;
gdjs.LevelSelectionCode.GDStartLocationObjects5.length = 0;
gdjs.LevelSelectionCode.GDStartLocationObjects6.length = 0;
gdjs.LevelSelectionCode.GDHoleObjects1.length = 0;
gdjs.LevelSelectionCode.GDHoleObjects2.length = 0;
gdjs.LevelSelectionCode.GDHoleObjects3.length = 0;
gdjs.LevelSelectionCode.GDHoleObjects4.length = 0;
gdjs.LevelSelectionCode.GDHoleObjects5.length = 0;
gdjs.LevelSelectionCode.GDHoleObjects6.length = 0;

gdjs.LevelSelectionCode.eventsList5(runtimeScene);

return;

}

gdjs['LevelSelectionCode'] = gdjs.LevelSelectionCode;
