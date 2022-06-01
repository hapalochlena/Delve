import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="test-fight"
export default class extends Controller {
  static values = { enemy: Object, player: Object}
  static targets = ["enemyHealth", "playerHealth", "playerEnergy"]
  connect() {
  }

  attackPlayer(){
    this.playerHealthTarget.innerText -= (this.enemyValue.attack_damage + Math.floor(Math.random() * 3));
  }

  attackEnemy(){
    if (Number(this.enemyHealthTarget.innerText) > 0 ){
      this.enemyHealthTarget.innerText -= (this.playerValue.attack_damage + Math.floor(Math.random() * 6));
      this.attackPlayer();
    }
  }
}