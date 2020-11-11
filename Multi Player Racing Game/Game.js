class Game{
  constructor(){

  }
   async Game_State_Listener(){
    var refer = DB.ref("Game_State")
    await refer.on('value', (data)=>{
      gameState = data.val();
    })
  }
  Game_State_Writer(State){
    DB.ref().update({
      Game_State : State
    })
  }
   Start(){
    if(gameState===0){
    player = new Player();
    var refer =  DB.ref('Player_Count')
    refer.once('value').then((snapshot)=>{
      var a = snapshot.exists();
      if(a == true){
          Player_Count = snapshot.val();
          player.Count_Listener();
        }
    })
    form_obj = new Form();
    form_obj.display();
    }
  }
}