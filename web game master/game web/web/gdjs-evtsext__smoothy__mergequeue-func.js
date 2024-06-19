
if (typeof gdjs.evtsExt__Smoothy__MergeQueue !== "undefined") {
  gdjs.evtsExt__Smoothy__MergeQueue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Smoothy__MergeQueue = {};
gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects3= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects3= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects3= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects1= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects2= [];
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects3= [];


gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDGutterObjects2Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects1});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__MergeQueue.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2);
gdjs.copyArray(gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBoardBubbleObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2 */
{runtimeScene.getScene().getVariables().get("lastBubblePathPosition").setNumber((( gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1);
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__Contains.func(runtimeScene, gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBoardBubbleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPositionOnPath(gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("firstBubblePathPosition")) + (gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("BoardBubbleBehavior")).BubbleSize((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lastBubblePathPosition"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("firstBubbleSpeed")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__MergeQueue.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDGutterObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBoardBubbleObjects2Objects, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2 */
{runtimeScene.getScene().getVariables().get("firstBubblePathPosition").setNumber((( gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getScene().getVariables().get("firstBubbleSpeed").setNumber((( gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
{ //Subevents
gdjs.evtsExt__Smoothy__MergeQueue.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__MergeQueue.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDGutterObjects2Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__MergeQueue.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2[i].getTimerElapsedTimeInSecondsOrNaN("TimeFromTailImpact") >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2[k] = gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2 */
{runtimeScene.getScene().getVariables().get("tailSplitTimerValue").setNumber((( gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2[0].getTimerElapsedTimeInSeconds("TimeFromTailImpact")));
}}

}


};gdjs.evtsExt__Smoothy__MergeQueue.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2 */
{runtimeScene.getScene().getVariables().get("tailState").setString((( gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).TailState((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getScene().getVariables().get("tailComboLevel").setNumber((( gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).TailComboLevel((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getScene().getVariables().get("tailSplitTimerValue").setNumber(-(1));
}
{ //Subevents
gdjs.evtsExt__Smoothy__MergeQueue.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects1});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleClipboardObjects1Objects = Hashtable.newFrom({"BubbleClipboard": gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects1});
gdjs.evtsExt__Smoothy__MergeQueue.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDGutterObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleClipboard"), gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects2);
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2 */
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).MoveAllOnTop(gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.evtsExt__Smoothy__MergeQueue.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__ContainsAt.func(runtimeScene, gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleQueueObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TaillingQueueIndex")) || 0 : 0) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleClipboard"), gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects1);
/* Reuse gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).MoveAllOnTop(gdjs.evtsExt__Smoothy__MergeQueue.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595MergeQueue_9546GDBubbleClipboardObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("BubbleQueueBehavior")).SetJustMerged(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("tailState")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tailComboLevel")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tailSplitTimerValue")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Smoothy__MergeQueue.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Smoothy__MergeQueue.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Smoothy__MergeQueue.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Smoothy__MergeQueue.func = function(runtimeScene, Gutter, ObjectStack, BubbleQueue, BubbleQueueBehavior, ObjectStack, BoardBubble, BoardBubbleBehavior, SpeedPathMovement, TaillingQueueIndex, BubbleClipboard, ObjectStack, parentEventsFunctionContext) {
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
, "BoardBubbleBehavior": BoardBubbleBehavior
, "SpeedPathMovement": SpeedPathMovement
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

gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBoardBubbleObjects3.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects1.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects2.length = 0;
gdjs.evtsExt__Smoothy__MergeQueue.GDBubbleClipboardObjects3.length = 0;

gdjs.evtsExt__Smoothy__MergeQueue.eventsList6(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Smoothy__MergeQueue.registeredGdjsCallbacks = [];