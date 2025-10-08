/********************* 
 * Exp_Grating4 *
 *********************/


// store info about the experiment session:
let expName = 'exp_grating4';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'Возраст': '',
    'Пол': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'

function replText(text, el, repl = '_') {
    let te = String(text);
    if (te.includes(el)) {
        return te.replace(new RegExp(el,'g'), repl);
    } else {
        return te;
    }
}


function makeString(arr, delim = ',', repl = '_') {

    let attrSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        for(let k of Object.keys(arr[i])) {
            attrSet.add(k);
        }
    }
    let attr = [...attrSet];

    attr.sort();

    let lineList = [attr.join(delim) + '\n'];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < attr.length; j++){
            if(!Object.hasOwn(arr[i], attr[j])){
                arr[i][attr[j]] = '';
            }
        }
    }

    let replFun = (i) => replText(replText(i, delim, repl), '\n', repl + repl);

    for (let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < attr.length; j++){
            if(!Object.hasOwn(arr[i], attr[j])){
                arr[i][attr[j]] = '';
            }
        }
      let dataList = attr.map((k) => replFun(arr[i][k]));
      let dataStr = dataList.join(delim);
      lineList.push(dataStr + '\n');
    }

    return lineList.join('');
    
};
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionRoutineBegin());
flowScheduler.add(InstructionRoutineEachFrame());
flowScheduler.add(InstructionRoutineEnd());
const trainingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trainingLoopBegin(trainingLoopScheduler));
flowScheduler.add(trainingLoopScheduler);
flowScheduler.add(trainingLoopEnd);




const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(exitRoutineBegin());
flowScheduler.add(exitRoutineEachFrame());
flowScheduler.add(exitRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.ERROR);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionClock;
var InstructionText;
var key_resp;
var trialClock;
var Fix;
var leftBox;
var rightBox;
var cue;
var target;
var answerClock;
var answerStim;
var leftButton;
var rightButton;
var button;
var feedBackClock;
var corrAnsStim;
var feedBackStim;
var exitClock;
var text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instruction"
  InstructionClock = new util.Clock();
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: 'Инструкция',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1, 1, 1]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  Fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'Fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  leftBox = new visual.Rect ({
    win: psychoJS.window, name: 'leftBox', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.15), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('black'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  rightBox = new visual.Rect ({
    win: psychoJS.window, name: 'rightBox', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.15, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('black'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  cue = new visual.Rect ({
    win: psychoJS.window, name: 'cue', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('white'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  target = new visual.GratingStim({
    win : psychoJS.window,
    name : 'target', units : undefined, 
    tex : undefined, mask : 'gauss',
    ori : 1.0, 
    pos : [0, 0],
    draggable: false,
    anchor : 'center',
    sf : 4.0, phase : 0.0,
    size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    contrast : 0.15, blendmode : 'avg',
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "answer"
  answerClock = new util.Clock();
  answerStim = new visual.GratingStim({
    win : psychoJS.window,
    name : 'answerStim', units : undefined, 
    tex : undefined, mask : 'gauss',
    ori : 1.0, 
    pos : [0, 0],
    draggable: false,
    anchor : 'center',
    sf : 4.0, phase : 0.0,
    size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    contrast : 1.0, blendmode : 'avg',
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  leftButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'leftButton',
    text: '<',
    font: 'Arvo',
    pos: [(- 0.25), (- 0.3)],
    size: [0.11, 0.11],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  leftButton.clock = new util.Clock();
  
  rightButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'rightButton',
    text: '>',
    font: 'Arvo',
    pos: [0.25, (- 0.3)],
    size: [0.11, 0.11],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  rightButton.clock = new util.Clock();
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'OK',
    font: 'Arvo',
    pos: [0, (- 0.3)],
    size: [0.11, 0.11],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: [(- 0.2549), 0.2392, 0.2549],
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "feedBack"
  feedBackClock = new util.Clock();
  corrAnsStim = new visual.GratingStim({
    win : psychoJS.window,
    name : 'corrAnsStim', units : undefined, 
    tex : undefined, mask : 'circle',
    ori : 1.0, 
    pos : [0, 0],
    draggable: false,
    anchor : 'center',
    sf : 4.0, phase : 0.0,
    size : [0.2, 0.2],
    color : new util.Color([0.2941, (- 0.6706), (- 0.6706)]), opacity : undefined,
    contrast : 1.0, blendmode : 'avg',
    texRes : 256.0, interpolate : true, depth : 0.0 
  });
  feedBackStim = new visual.GratingStim({
    win : psychoJS.window,
    name : 'feedBackStim', units : undefined, 
    tex : undefined, mask : 'gauss',
    ori : 1.0, 
    pos : [0, 0],
    draggable: false,
    anchor : 'center',
    sf : 4.0, phase : 0.0,
    size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    contrast : 1.0, blendmode : 'avg',
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exit"
  exitClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Пожалуйста, подождите, данные сохраняются',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  psychoJS._saveResults = 0;
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructionMaxDurationReached;
var _key_resp_allKeys;
var InstructionMaxDuration;
var InstructionComponents;
function InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionClock.reset();
    routineTimer.reset();
    InstructionMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    InstructionMaxDuration = null
    // keep track of which components have finished
    InstructionComponents = [];
    InstructionComponents.push(InstructionText);
    InstructionComponents.push(key_resp);
    
    InstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction' ---
    // get current time
    t = InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionText* updates
    if (t >= 0.0 && InstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionText.tStart = t;  // (not accounting for frame time here)
      InstructionText.frameNStart = frameN;  // exact frame index
      
      InstructionText.setAutoDraw(true);
    }
    
    
    // if InstructionText is active this frame...
    if (InstructionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
      key_resp.clearEvents();
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction' ---
    InstructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp.stop();
    // the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training;
function trainingLoopBegin(trainingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    training = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'training'
    });
    psychoJS.experiment.addLoop(training); // add the loop to the experiment
    currentLoop = training;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    training.forEach(function() {
      snapshot = training.getSnapshot();
    
      trainingLoopScheduler.add(importConditions(snapshot));
      trainingLoopScheduler.add(trialRoutineBegin(snapshot));
      trainingLoopScheduler.add(trialRoutineEachFrame());
      trainingLoopScheduler.add(trialRoutineEnd(snapshot));
      trainingLoopScheduler.add(answerRoutineBegin(snapshot));
      trainingLoopScheduler.add(answerRoutineEachFrame());
      trainingLoopScheduler.add(answerRoutineEnd(snapshot));
      trainingLoopScheduler.add(feedBackRoutineBegin(snapshot));
      trainingLoopScheduler.add(feedBackRoutineEachFrame());
      trainingLoopScheduler.add(feedBackRoutineEnd(snapshot));
      trainingLoopScheduler.add(trainingLoopEndIteration(trainingLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trainingLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(training);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trainingLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 0, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(answerRoutineBegin(snapshot));
      trialsLoopScheduler.add(answerRoutineEachFrame());
      trialsLoopScheduler.add(answerRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var TargOri;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    TargOri = util.round((Math.random() * 180), 2);
    
    cue.setPos([CuePos, 0]);
    target.setPos([TargetPos, 0]);
    target.setOri(TargOri);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = 2.1
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(Fix);
    trialComponents.push(leftBox);
    trialComponents.push(rightBox);
    trialComponents.push(cue);
    trialComponents.push(target);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > trialMaxDuration) {
        trialMaxDurationReached = true
        continueRoutine = false
    }
    
    // *Fix* updates
    if (t >= 0.0 && Fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fix.tStart = t;  // (not accounting for frame time here)
      Fix.frameNStart = frameN;  // exact frame index
      
      Fix.setAutoDraw(true);
    }
    
    
    // if Fix is active this frame...
    if (Fix.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *leftBox* updates
    if (t >= 0.0 && leftBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftBox.tStart = t;  // (not accounting for frame time here)
      leftBox.frameNStart = frameN;  // exact frame index
      
      leftBox.setAutoDraw(true);
    }
    
    
    // if leftBox is active this frame...
    if (leftBox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rightBox* updates
    if (t >= 0.0 && rightBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightBox.tStart = t;  // (not accounting for frame time here)
      rightBox.frameNStart = frameN;  // exact frame index
      
      rightBox.setAutoDraw(true);
    }
    
    
    // if rightBox is active this frame...
    if (rightBox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *cue* updates
    if (t >= 1 && cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue.tStart = t;  // (not accounting for frame time here)
      cue.frameNStart = frameN;  // exact frame index
      
      cue.setAutoDraw(true);
    }
    
    
    // if cue is active this frame...
    if (cue.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue.tStop = t;  // not accounting for scr refresh
      cue.frameNStop = frameN;  // exact frame index
      // update status
      cue.status = PsychoJS.Status.FINISHED;
      cue.setAutoDraw(false);
    }
    
    
    // *target* updates
    if (t >= 1.1 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }
    
    
    // if target is active this frame...
    if (target.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.1 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      target.tStop = t;  // not accounting for scr refresh
      target.frameNStop = frameN;  // exact frame index
      // update status
      target.status = PsychoJS.Status.FINISHED;
      target.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    currentLoop.addData("TargOri", TargOri);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var answerMaxDurationReached;
var AnsOri;
var answerMaxDuration;
var answerComponents;
function answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'answer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    answerClock.reset();
    routineTimer.reset();
    answerMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    AnsOri = util.round((Math.random() * 180), 2);
    currentLoop.addData("startAnsOri", AnsOri);
    
    answerStim.setPos([0, 0]);
    // reset leftButton to account for continued clicks & clear times on/off
    leftButton.reset()
    // reset rightButton to account for continued clicks & clear times on/off
    rightButton.reset()
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    psychoJS.experiment.addData('answer.started', globalClock.getTime());
    answerMaxDuration = null
    // keep track of which components have finished
    answerComponents = [];
    answerComponents.push(answerStim);
    answerComponents.push(leftButton);
    answerComponents.push(rightButton);
    answerComponents.push(button);
    
    answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var stopRecording;
function answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'answer' ---
    // get current time
    t = answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *answerStim* updates
    if (t >= 0 && answerStim.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      answerStim.setOri(AnsOri, false);
      // keep track of start time/frame for later
      answerStim.tStart = t;  // (not accounting for frame time here)
      answerStim.frameNStart = frameN;  // exact frame index
      
      answerStim.setAutoDraw(true);
    }
    
    
    // if answerStim is active this frame...
    if (answerStim.status === PsychoJS.Status.STARTED) {
      // update params
      answerStim.setOri(AnsOri, false);
    }
    
    
    // *leftButton* updates
    if (t >= 0 && leftButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftButton.tStart = t;  // (not accounting for frame time here)
      leftButton.frameNStart = frameN;  // exact frame index
      
      leftButton.setAutoDraw(true);
    }
    
    
    // if leftButton is active this frame...
    if (leftButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (leftButton.status === PsychoJS.Status.STARTED) {
      // check whether leftButton has been pressed
      if (leftButton.isClicked) {
        if (!leftButton.wasClicked) {
          // store time of first click
          leftButton.timesOn.push(leftButton.clock.getTime());
          // store time clicked until
          leftButton.timesOff.push(leftButton.clock.getTime());
        } else {
          // update time clicked until;
          leftButton.timesOff[leftButton.timesOff.length - 1] = leftButton.clock.getTime();
        }
        AnsOri -= 1;
        // if leftButton is still clicked next frame, it is not a new click
        leftButton.wasClicked = true;
      } else {
        // if leftButton is clicked next frame, it is a new click
        leftButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if leftButton hasn't started / has finished
      leftButton.clock.reset();
      // if leftButton is clicked next frame, it is a new click
      leftButton.wasClicked = false;
    }
    
    // *rightButton* updates
    if (t >= 0 && rightButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightButton.tStart = t;  // (not accounting for frame time here)
      rightButton.frameNStart = frameN;  // exact frame index
      
      rightButton.setAutoDraw(true);
    }
    
    
    // if rightButton is active this frame...
    if (rightButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (rightButton.status === PsychoJS.Status.STARTED) {
      // check whether rightButton has been pressed
      if (rightButton.isClicked) {
        if (!rightButton.wasClicked) {
          // store time of first click
          rightButton.timesOn.push(rightButton.clock.getTime());
          // store time clicked until
          rightButton.timesOff.push(rightButton.clock.getTime());
        } else {
          // update time clicked until;
          rightButton.timesOff[rightButton.timesOff.length - 1] = rightButton.clock.getTime();
        }
        AnsOri += 1;
        // if rightButton is still clicked next frame, it is not a new click
        rightButton.wasClicked = true;
      } else {
        // if rightButton is clicked next frame, it is a new click
        rightButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if rightButton hasn't started / has finished
      rightButton.clock.reset();
      // if rightButton is clicked next frame, it is a new click
      rightButton.wasClicked = false;
    }
    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    
    // if button is active this frame...
    if (button.status === PsychoJS.Status.STARTED) {
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          stopRecording = true;
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var answer;
var error;
function answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'answer' ---
    answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('answer.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    answer = (AnsOri % 180);
    currentLoop.addData("answer", answer);
    error = Math.abs((answer - TargOri));
    currentLoop.addData("error", error);
    
    psychoJS.experiment.addData('leftButton.numClicks', leftButton.numClicks);
    psychoJS.experiment.addData('leftButton.timesOn', leftButton.timesOn);
    psychoJS.experiment.addData('leftButton.timesOff', leftButton.timesOff);
    psychoJS.experiment.addData('rightButton.numClicks', rightButton.numClicks);
    psychoJS.experiment.addData('rightButton.timesOn', rightButton.timesOn);
    psychoJS.experiment.addData('rightButton.timesOff', rightButton.timesOff);
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedBackMaxDurationReached;
var feedBackMaxDuration;
var feedBackComponents;
function feedBackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedBack' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedBackClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    feedBackMaxDurationReached = false;
    // update component parameters for each repeat
    corrAnsStim.setOri(TargOri);
    feedBackStim.setPos([0, 0]);
    feedBackStim.setOri(AnsOri);
    psychoJS.experiment.addData('feedBack.started', globalClock.getTime());
    feedBackMaxDuration = null
    // keep track of which components have finished
    feedBackComponents = [];
    feedBackComponents.push(corrAnsStim);
    feedBackComponents.push(feedBackStim);
    
    feedBackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedBackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedBack' ---
    // get current time
    t = feedBackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *corrAnsStim* updates
    if (t >= 0 && corrAnsStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corrAnsStim.tStart = t;  // (not accounting for frame time here)
      corrAnsStim.frameNStart = frameN;  // exact frame index
      
      corrAnsStim.setAutoDraw(true);
    }
    
    
    // if corrAnsStim is active this frame...
    if (corrAnsStim.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (corrAnsStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      corrAnsStim.tStop = t;  // not accounting for scr refresh
      corrAnsStim.frameNStop = frameN;  // exact frame index
      // update status
      corrAnsStim.status = PsychoJS.Status.FINISHED;
      corrAnsStim.setAutoDraw(false);
    }
    
    
    // *feedBackStim* updates
    if (t >= 0 && feedBackStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedBackStim.tStart = t;  // (not accounting for frame time here)
      feedBackStim.frameNStart = frameN;  // exact frame index
      
      feedBackStim.setAutoDraw(true);
    }
    
    
    // if feedBackStim is active this frame...
    if (feedBackStim.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedBackStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feedBackStim.tStop = t;  // not accounting for scr refresh
      feedBackStim.frameNStop = frameN;  // exact frame index
      // update status
      feedBackStim.status = PsychoJS.Status.FINISHED;
      feedBackStim.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedBackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedBackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedBack' ---
    feedBackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedBack.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedBackMaxDurationReached) {
        feedBackClock.add(feedBackMaxDuration);
    } else {
        feedBackClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exitMaxDurationReached;
var exitMaxDuration;
var exitComponents;
function exitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exit' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    exitClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    exitMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS._saveResults = 0;
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    let dataObj = psychoJS._experiment._trialsData;
    
    let data = makeString(dataObj);
    
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',   
        },
        body: JSON.stringify({
            experimentID: 'xxxxxxxxxx',
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('exit.started', globalClock.getTime());
    exitMaxDuration = null
    // keep track of which components have finished
    exitComponents = [];
    exitComponents.push(text);
    
    exitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exit' ---
    // get current time
    t = exitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exit' ---
    exitComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exit.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (exitMaxDurationReached) {
        exitClock.add(exitMaxDuration);
    } else {
        exitClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
