var gameState = 0;
var gameState_obj;
var Player_Count;
var DB = firebase.database();
var all_players;
var player;
var form_obj;

function setup(){
var canvas = createCanvas(displayWidth, displayHeight,)
gameState_obj = new Game();
gameState_obj.Game_State_Listener();
gameState_obj.Start()
}

function draw(){
}