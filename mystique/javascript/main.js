/**
 * Created by San on 1/24/2017.
 */

// =====================================================================================================================
// Exercises Solutions are loaded here
var exercises = [];
var currentExerciseId=1;
var currentConceptId=1;
var fireworks = false;
function Exercise(concept_id, exercise_id, array_length, exerciseDetails, solution, solutionLoaded){
    this.concept_id = concept_id;
    this.exercise_id = exercise_id;
    this.array_length = array_length;
    this.exerciseDetails = exerciseDetails;
    this.solution = solution;
    this.solutionLoaded = solutionLoaded;
}
function SolutionCell(x,y,lego){
    this.x = x;
    this.y = y;
    this.lego = lego;
}

// Concept 1
exercises.push(new Exercise(1,1,4,
    "<h3>Reflect Vertical Demo 1</h3>" +
    "<p>Reflect the following artifact vertically:</p>" +
    "<img src ='images/pixelArt-4.jpg' height = '500' width = '500'>",
    [  {"row":0,"column":3,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":0,"column":2,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":0,"column":1,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":0,"column":0,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":1,"column":3,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":1,"column":1,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":2,"column":3,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":2,"column":2,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":3,"column":3,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"}],
    false
));
exercises.push(new Exercise(2,1,4,
    "<h3>Reflect Horizontal Demo 1</h3>" +
    "<p>Reflect the following artifact horizontally:</p>" +
    "<img src ='images/pixelArt-4.jpg' height = '500' width = '500'>",
    [   {"row":3,"column":0,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":3,"column":1,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":3,"column":2,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":3,"column":3,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":2,"column":0,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":1,"column":0,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":0,"column":0,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":2,"column":2,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"},{"row":1,"column":1,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png"}],
    false
));
exercises.push(new Exercise(3,1,7,
    "<h3>Rotate 90 Demo 1</h3>" +
    "<p>Rotate the below artifact 90 degrees:</p>" +
    "<img src = 'images/Triangle_Top.jpg' height = '500' width = '500'>",
    [   new SolutionCell(0,1,"GRAY"),
        new SolutionCell(0,2,"GRAY"),
        new SolutionCell(0,3,"GRAY"),
        new SolutionCell(0,4,"GRAY"),
        new SolutionCell(0,5,"GRAY"),
        new SolutionCell(0,6,"GRAY"),
        new SolutionCell(0,0,"GRAY"),
        new SolutionCell(1,1,"GRAY"),
        new SolutionCell(1,5,"GRAY"),
        new SolutionCell(2,2,"GRAY"),
        new SolutionCell(2,4,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(1,3,"WHITE"),
        new SolutionCell(1,4,"WHITE"),
        new SolutionCell(2,3,"WHITE")]
));
exercises.push(new Exercise(4,1,7,
    "<h3>Rotate 90 counter clockwise Demo 1</h3>" +
    "<p>Rotate the below artifact 90 degrees counter clockwise:</p>" +
    "<img src = 'images/Triangle_Top.jpg' height = '500' width = '500'>",
    [   new SolutionCell(6,1,"GRAY"),
        new SolutionCell(6,2,"GRAY"),
        new SolutionCell(6,3,"GRAY"),
        new SolutionCell(6,4,"GRAY"),
        new SolutionCell(6,5,"GRAY"),
        new SolutionCell(6,6,"GRAY"),
        new SolutionCell(6,0,"GRAY"),
        new SolutionCell(5,1,"GRAY"),
        new SolutionCell(5,5,"GRAY"),
        new SolutionCell(4,2,"GRAY"),
        new SolutionCell(4,4,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(5,2,"WHITE"),
        new SolutionCell(5,3,"WHITE"),
        new SolutionCell(5,4,"WHITE"),
        new SolutionCell(4,3,"WHITE")]
));
exercises.push(new Exercise(5,1,7,
    "<h3>Rotate 180 Demo 1</h3>" +
    "<p>Rotate the below artifact 180 degrees:</p>" +
    "<img src = 'images/Triangle_Top.jpg' height = '500' width = '500'>",
     [   new SolutionCell(0,3,"GRAY"),
         new SolutionCell(1,3,"GRAY"),
         new SolutionCell(2,3,"GRAY"),
         new SolutionCell(3,3,"GRAY"),
         new SolutionCell(4,3,"GRAY"),
         new SolutionCell(5,3,"GRAY"),
         new SolutionCell(6,3,"GRAY"),
         new SolutionCell(1,2,"GRAY"),
         new SolutionCell(5,2,"GRAY"),
         new SolutionCell(2,1,"GRAY"),
         new SolutionCell(4,1,"GRAY"),
         new SolutionCell(3,0,"GRAY"),
         new SolutionCell(2,2,"WHITE"),
         new SolutionCell(3,2,"WHITE"),
         new SolutionCell(4,2,"WHITE"),
         new SolutionCell(3,1,"WHITE")]
));
exercises.push(new Exercise(6,1,4,
    "<h3>Test</h3>" ,
    [{"row":0,"column":0,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/black_02.png"},
        {"row":0,"column":1,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/black_02.png"},
        {"row":0,"column":2,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/black_02.png"},
        {"row":0,"column":3,"color":"http://localhost:63342/grid_lite/grid_lite/bricklayercolors/black_02.png"}],
    false
));


// =====================================================================================================================
function imageToLego(data) {
    console.log(data);
    switch (data){
        case "http://localhost:63342/grid_lite/grid_lite/bricklayercolors/black_02.png":
            return "BLACK";
            break;
        case "http://localhost:63342/grid_lite/grid_lite/bricklayercolors/blue_02.png":
            return "BLUE";
            break;
        case "http://localhost:63342/grid_lite/grid_lite/bricklayercolors/red_02.png":
            return "RED";
            break;
        case "http://localhost:63342/grid_lite/grid_lite/bricklayercolors/green_02.png":
            return "GREEN";
            break;
        case "http://localhost:63342/grid_lite/grid_lite/bricklayercolors/yellow_02.png":
            return "YELLOW";
            break;
        case "http://localhost:63342/grid_lite/grid_lite/bricklayercolors/gray_02.png":
            return "GRAY";
            break;
        case "http://localhost:63342/grid_lite/grid_lite/bricklayercolors/white_02.png":
            return "WHITE";
            break;
    }
}
// =====================================================================================================================
function updateJsonSolution(conceptId,exerciseId) {
    var tempSolution = [];
    var maxSide= 0;
    for(i=0; i<exercises.length;i++) {
        if (exercises[i].concept_id == conceptId && exercises[i].exercise_id == exerciseId) {
            for (var k = 0; k < exercises[i].solution.length; k++) {
                if (exercises[i].solution[k].row > maxSide)
                    maxSide = exercises[i].solution[k].row;
                else if (exercises[i].solution[k].column > maxSide)
                    maxSide = exercises[i].solution[k].column;
            }
            tempSolution = exercises[i].solution;
            exercises[i].solution = [];
            for (var j = 0; j < tempSolution.length; j++) {
                exercises[i].solution.push(new SolutionCell(tempSolution[j].row, maxSide - tempSolution[j].column, imageToLego(tempSolution[j].color)));
            }
            exercises[i].solutionLoaded = true;
        }
    }
}
// =====================================================================================================================
function loadExercise(concept_id,exercise_id) {
    if(fireworks){
        stopFireWorks();
    }
    currentExerciseId = parseInt(exercise_id);
    currentConceptId = parseInt(concept_id);
    for(var i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId) {
            document.getElementById("Exercise").innerHTML = exercises[i].exerciseDetails;
            if(!exercises[i].solutionLoaded)
            updateJsonSolution(currentConceptId,currentExerciseId);
            if(gameLoaded){
                updateGame(exercises[i].array_length);
            } else {
                initGame(exercises[i].array_length);
            }
        }
    }
    if(coordinates){
        toggleCoordinates(0);
    }
}
// ======================================================================================================================
function checkSolution() {
    var cellCount = 0;
    var solutionLength;
    var initialFinalLength = finalUserSolution.length;
    if(fireworks){
        stopFireWorks();
        nextExercise();
        return;
    }
    generateUserSolution();
    initialFinalLength = finalUserSolution.length;
    for (var i=initialFinalLength - 1; i>=0;i--){
        if(finalUserSolution[i].lego ==  "EMPTY"){
            finalUserSolution.splice(i,1);
        }
    }
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId) {
            solutionLength = exercises[i].solution.length;
            if(exercises[i].solution.length == finalUserSolution.length){
                for(var j=0; j<finalUserSolution.length;j++){
                    for(var k = 0; k<finalUserSolution.length; k++){
                        if (exercises[i].solution[j].x == finalUserSolution[k].x && exercises[i].solution[j].y == finalUserSolution[k].y && exercises[i].solution[j].lego == finalUserSolution[k].lego) {
                            cellCount++;
                        }
                    }
                }
            } else {
                clearCanvas();
                incorrect = true;
                gDrawingContext.font = "30px Comic Sans MS";
                gDrawingContext.fillStyle = "red";
                gDrawingContext.textAlign = "center";
                gDrawingContext.fillText("Try Again!", xEnd/2, yEnd/2);
                incorrectSound.play();
            }
        }
    }
    if (cellCount == solutionLength){
        initFireWorks();
    } else {
        clearCanvas();
        incorrect = true;
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "red";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("Try Again!", xEnd/2, yEnd/2);
        incorrectSound.play();
    }
}
// ===================================================================================================================
function toggleSolution() {
    var a = document.getElementById("toggle_solution");
    var tempLego, tempX, tempY;
    if(a.value == "Show Solution"){
        a.value = "Hide Solution";
        for(i=0; i<exercises.length;i++){
            if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId){
                drawBoard();
                for ( var k = 0 ;k<exercises[i].solution.length; k++){
                    tempLego = legoNameToImage(exercises[i].solution[k].lego);
                    tempX = exercises[i].solution[k].x;
                    tempY = exercises[i].solution[k].y;
                    tempX = tempX *kStep +1;
                    tempY = (gridSize -1 -tempY)* kStep +1;
                    gDrawingContext.drawImage(tempLego,tempX + axisDelta,tempY,kStep -1 ,kStep - 1);
                }
            }
        }
    } else {
        a.value = "Show Solution";
        drawBoard();
        for (k =0 ;k<userSolution.length;k++){
            tempLego = legoNameToImage(userSolution[k].lego);
            tempX = userSolution[k].x;
            tempY = userSolution[k].y;
            gDrawingContext.drawImage(tempLego,tempX,tempY,kStep -1 ,kStep - 1);
        }
        if(coordinates){
            toggleCoordinates(0);
        }
    }
}
// ==================================================================================================================
function nextExerciseIdExists() {
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == (currentExerciseId+1)){
            currentExerciseId++;
            return true;
        }
    }
    return false;
}
// ===================================================================================================================
function nextConceptIdExists() {
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == (currentConceptId + 1) && exercises[i].exercise_id == 1){
            currentConceptId++;
            currentExerciseId = 1;
            return true;
        }
    }
    return false;
}
// ===================================================================================================================
function nextExercise(){
    if(fireworks){
        stopFireWorks();
    }
    if(nextExerciseIdExists()){
        var tempExerciseLink = document.createElement('a');
        /*var linkText = document.createTextNode("my title text");
        a.appendChild(linkText);
        a.title = "my title text";*/
        tempExerciseLink.href = "#concepts/"+currentConceptId+"/"+currentExerciseId;
        document.body.appendChild(tempExerciseLink);
        tempExerciseLink.click();

    }else if(nextConceptIdExists()){
         tempExerciseLink = document.createElement('a');
        /*var linkText = document.createTextNode("my title text");
         a.appendChild(linkText);
         a.title = "my title text";*/
        tempExerciseLink.href = "#concepts/"+currentConceptId+"/"+currentExerciseId;
        document.body.appendChild(tempExerciseLink);
        tempExerciseLink.click();

    } else {
        clearCanvas();
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "red";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("This is the end", xEnd/2, yEnd/2);
    }
}
// ===================================================================================================================
function changeBackground(data){
    switch (data){
        case 'christmas':
            document.body.style.backgroundImage = "url('images/backgroundTheme/christmas-colour.png')";
            break;
        case 'circles':
            document.body.style.backgroundImage = "url('images/backgroundTheme/circles-dark.png')";
            break;
        case 'doodles':
            document.body.style.backgroundImage = "url('images/backgroundTheme/doodles.png')";
            break;
        case 'halftoneYellow':
            document.body.style.backgroundImage = "url('images/backgroundTheme/halftone-yellow.png')";
            break;
        case 'veneer':
            document.body.style.backgroundImage = "url('images/backgroundTheme/light-veneer.png')";
            break;
        case 'polka':
            document.body.style.backgroundImage = "url('images/backgroundTheme/polka-dots.png')";
            break;
        case 'gaming':
            document.body.style.backgroundImage = "url('images/backgroundTheme/gaming-pattern.png')";
            break;
        case 'whirlpool':
            document.body.style.backgroundImage = "url('images/backgroundTheme/whirlpool.png')";
            break;
        case 'skyscraper':
            document.body.style.backgroundImage = "url('images/backgroundTheme/skyscraper.png')";
            break;
        case 'waves':
            document.body.style.backgroundImage = "url('images/backgroundTheme/vertical-waves.png')";
            break;
        default:
            break;
    }
}