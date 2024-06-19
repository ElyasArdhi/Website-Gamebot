
if (typeof gdjs.evtsExt__Smoothy__MatchBubbles !== "undefined") {
  gdjs.evtsExt__Smoothy__MatchBubbles.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Smoothy__MatchBubbles = {};
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects3= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects4= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects5= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects3= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects4= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects5= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects3= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects5= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects2= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects3= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects4= [];
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects5= [];


gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects4Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects4});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects4Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4});
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4);
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects4Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("_SmoothyExtension").getChild("BubbleColor"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4[k] = gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), true);
}{runtimeScene.getScene().getVariables().get("lowerIndex").add(1);
}}

}


};gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects4Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects4});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects4Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4});
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4);
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects3, gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects4Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("_SmoothyExtension").getChild("BubbleColor"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4[k] = gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), true);
}{runtimeScene.getScene().getVariables().get("upperIndex").sub(1);
}}

}


};gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.userFunc0x8562c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Pick the the matched BoardBubble to handle them in the event sheet. 
for (const object of objects) {
    object.pick = true;
}
const pickedObjectsLists = eventsFunctionContext.getObjectsLists("BoardBubble");
/** @type {Array<String>} */
const objectNames = [];
pickedObjectsLists.keys(objectNames);
for (const objectName of objectNames)
{
    const pickedObjectsList = pickedObjectsLists.get(objectName);
    gdjs.evtTools.object.filterPickedObjectsList(pickedObjectsList);
}

};
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[i].getTimerElapsedTimeInSecondsOrNaN("HeadSplit") >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[k] = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("headSplitTimerExists"), true);
}{runtimeScene.getScene().getVariables().get("headSplitTimerValue").setNumber((( gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[0].getTimerElapsedTimeInSeconds("HeadSplit")));
}}

}


};gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__MatchBubbles.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects1, gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2);
gdjs.evtsExt__Smoothy__MatchBubbles.userFunc0x8562c8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2);

{runtimeScene.getScene().getVariables().get("headState").setString((( gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).HeadState((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getScene().getVariables().get("headComboLevel").setNumber((( gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).HeadComboLevel((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("headSplitTimerExists"), false);
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1[k] = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects, 0, (( gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__MatchBubbles.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2);
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("InsertedBubbleIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2 */
{runtimeScene.getScene().getVariables().get("_SmoothyExtension").getChild("BubbleColor").setString((( gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2[0].getAnimationName()));
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("lowerIndex").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("InsertedBubbleIndex")) || 0 : 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), false);
}}

}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")) > 0;
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().get("lowerIndex").sub(1);
}
{ //Subevents: 
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("upperIndex").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("InsertedBubbleIndex")) || 0 : 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), false);
}}

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")) < (( gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1;
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().get("upperIndex").add(1);
}
{ //Subevents: 
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects1);
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects1Objects) >= 3;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleClipboard"), gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1);
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).MoveInto(0, gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetHeadJustSplit((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleClipboardObjects1Objects = Hashtable.newFrom({"BubbleClipboard": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1});
gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("headSplitTimerExists"), true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2 */
{gdjs.evtsExt__AdvancedTimer__SetObjectTimerElapsedTime.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("headSplitTimerValue")), gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects2Objects, "HeadSplit", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__Smoothy__MatchBubbles.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2);

{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetHeadState(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("headState")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetHeadComboLevel(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("headComboLevel")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2[i].removeTimer("HeadSplit");
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


};gdjs.evtsExt__Smoothy__MatchBubbles.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("InsertedBubbleQueueIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleClipboard"), gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1[k] = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1);
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects, -(64), -(64), "");
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Insert(gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("InsertedBubbleQueueIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).MoveAllInto(0, gdjs.evtsExt__Smoothy__MatchBubbles.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubbles_9546GDBubbleClipboardObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetTailJustSplit((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubbles.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__MatchBubbles.func = function(runtimeScene, Gutter, ObjectStack, BubbleQueue, BubbleQueueBehavior, ObjectStack, BoardBubble, InsertedBubbleQueueIndex, InsertedBubbleIndex, BubbleClipboard, ObjectStack, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
, "BubbleClipboard": BubbleClipboard
},
  _objectArraysMap: {
"Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
, "BubbleClipboard": gdjs.objectsListsToArray(BubbleClipboard)
},
  _behaviorNamesMap: {
"ObjectStack": ObjectStack
, "BubbleQueueBehavior": BubbleQueueBehavior
, "ObjectStack": ObjectStack
, "ObjectStack": ObjectStack
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
if (argName === "InsertedBubbleQueueIndex") return InsertedBubbleQueueIndex;
if (argName === "InsertedBubbleIndex") return InsertedBubbleIndex;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects4.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDGutterObjects5.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects4.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleQueueObjects5.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects3.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects4.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBoardBubbleObjects5.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects1.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects2.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects3.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects4.length = 0;
gdjs.evtsExt__Smoothy__MatchBubbles.GDBubbleClipboardObjects5.length = 0;

gdjs.evtsExt__Smoothy__MatchBubbles.eventsList9(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Smoothy__MatchBubbles.registeredGdjsCallbacks = [];