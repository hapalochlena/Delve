import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="test-fight"
export default class extends Controller {
  static values = { enemy: Object, player: Object, disorder: Object}
  static targets = ["enemyHealth", "playerHealth", "playerEnergy"]
  connect() {
  }

  playerLose(){
    alert(this.disorderValue.meltdown_text);
  }

  attackPlayer(){
    if(this.enemyValue.boss){
      this.playerHealthTarget.innerText -= (this.enemyValue.attack_damage + Math.floor(Math.random() * 6));
    }else{
      this.playerHealthTarget.innerText -= (this.enemyValue.attack_damage + Math.floor(Math.random() * 3));
    }
  }

  attackEnemy(){
    if (Number(this.enemyHealthTarget.innerText) > 0 ){
      this.enemyHealthTarget.innerText -= (this.playerValue.attack_damage + Math.floor(Math.random() * 6));
      if (Number(this.enemyHealthTarget.innerText) > 0 ){
        this.attackPlayer();
      }else if (Number(this.playerHealthTarget.innerText) <= 0) {
        this.playerLose();
      }else{
        alert(`You have overcome ${this.enemyValue.name}`);
      }
    }else{
      alert(`You have overcome ${this.enemyValue.name}`);
    }
  }
}
