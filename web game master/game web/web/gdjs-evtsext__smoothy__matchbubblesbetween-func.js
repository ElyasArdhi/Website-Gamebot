
if (typeof gdjs.evtsExt__Smoothy__MatchBubblesBetween !== "undefined") {
  gdjs.evtsExt__Smoothy__MatchBubblesBetween.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Smoothy__MatchBubblesBetween = {};
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects3= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects4= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects5= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects6= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects4= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects5= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects6= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects3= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5= [];
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects6= [];


gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects2Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects3Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects3Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects3});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects5Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects5});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects5Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5);
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2, gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects5Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects5Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("bubbleColor"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5[k] = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), true);
}{runtimeScene.getScene().getVariables().get("lowerIndex").add(1);
}}

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects3);
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2, gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects3Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects3 */
{runtimeScene.getScene().getVariables().get("bubbleColor").setString((( gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects3.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects3[0].getAnimationName()));
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2, gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3);

{runtimeScene.getScene().getVariables().get("lowerIndex").setNumber((( gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
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
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2 */
{runtimeScene.getScene().getVariables().get("headMatchingBubbleCount").setNumber((( gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")));
}}

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects4Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects4});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects4Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4);
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3, gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects4Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("bubbleColor"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4[k] = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), true);
}{runtimeScene.getScene().getVariables().get("upperIndex").sub(1);
}}

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("upperIndex").setNumber(-(1));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), false);
}}

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("foundOtherColor"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")) < (( gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1;
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().get("upperIndex").add(1);
}
{ //Subevents: 
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList3(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("tailMatchingBubbleCount").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")) + 1);
}}

}


{



}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects2Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.userFunc0x8562c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Pick the the matched BoardBubble to handle them in the event sheet.
gdjs.__SmoothyExtension = gdjs.__SmoothyExtension || {};
gdjs.__SmoothyExtension.pickedBubbles = [...objects];

};
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2);
gdjs.evtsExt__Smoothy__MatchBubblesBetween.userFunc0x8562c8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2);
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lowerIndex")), (( gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2 */
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects2Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.userFunc0xa819f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Pick the the matched BoardBubble to handle them in the event sheet.
for (const object of gdjs.__SmoothyExtension.pickedBubbles) {
    object.pick = true;
}
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
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2);
gdjs.evtsExt__Smoothy__MatchBubblesBetween.userFunc0xa819f0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2);
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects2Objects, 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("upperIndex")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2 */
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBoardBubbleObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetTailJustHit((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetHeadJustHit((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1[k] = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsBetween.func(runtimeScene, gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects1Objects, 0, (( gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__MatchBubblesBetween.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MatchBubblesBetween_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("headMatchingBubbleCount")) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tailMatchingBubbleCount")) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("headMatchingBubbleCount")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tailMatchingBubbleCount")) >= 3);
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}
{ //Subevents
gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList11(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Smoothy__MatchBubblesBetween.func = function(runtimeScene, Gutter, ObjectStack, BubbleQueue, BubbleQueueBehavior, ObjectStack, BoardBubble, TaillingQueueIndex, parentEventsFunctionContext) {
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
, "BubbleQueueBehavior": BubbleQueueBehavior
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
if (argName === "TaillingQueueIndex") return TaillingQueueIndex;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects4.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects5.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDGutterObjects6.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects4.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects5.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBubbleQueueObjects6.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects3.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects4.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects5.length = 0;
gdjs.evtsExt__Smoothy__MatchBubblesBetween.GDBoardBubbleObjects6.length = 0;

gdjs.evtsExt__Smoothy__MatchBubblesBetween.eventsList12(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Smoothy__MatchBubblesBetween.registeredGdjsCallbacks = [];