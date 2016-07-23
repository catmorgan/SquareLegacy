#pragma strict
var attack = 0;
var defense = 0;
var health = 0;
var inithealth = 0;
var k = false;
var state = 0;
var limit = 14;
var canAttack = false;
var time = 0.0;
var initAttack = 0;
var initDefense = 0;

function Start() {
attack = Random.Range(3, limit);
health = Random.Range(5, limit + 2);
defense = Random.Range(3, limit);
inithealth = health;
initAttack = attack;
initDefense = defense;
}

function Update () {

if (health < inithealth) {
time += Time.fixedDeltaTime;
if (time > 5) {
health ++;
time = 0.0;
}
}

if (Input.GetKeyDown(KeyCode.K)) {
	k = !k;
}

}

function OnGUI () {


if (k) {
	 GUI.skin.box.alignment = TextAnchor.UpperLeft;
	 GUI.skin.box.fontSize = 18;
	 GUI.skin.box.normal.textColor = Color.white;
	  
	 GUI.Box(Rect(Screen.width / 2 - 20,
	 Screen.height / 2 - 20, 115, 75), "Health: " + health +
	  "\nAttack: " + attack + "\nDefense: " + defense);
	 
}

if (Input.GetKeyDown(KeyCode.K)) {
	state = 1;
}

switch(state) {
	case 1:
	 i1();
	 	break;
	 default: 
	 	break;
	 }



}

function i1() {
state = 0;
k = !k;
}