#pragma strict
var time = 0.0;

function Update() {

if (GameObject.Find("Player").GetComponent(skills).canAttack && Input.GetKeyDown(KeyCode.Space) && time == 0.0) {
	this.gameObject.GetComponent(Stats).health -= GameObject.Find("Player").GetComponent(skills).attack;
	time += Time.fixedDeltaTime;
	if (time >= 0.02) {
	time = 0.0;
	}
}

}
