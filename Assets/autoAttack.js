#pragma strict
var auto = false;
var time = 0.0;
var t = 0.0;
var color: Color;
var canAttack = false;
var i = 0;
var player : GameObject; 

function Start () {
 player = GameObject.Find("Player");
 color = GameObject.Find("Player").renderer.material.color;
 
}

//function OnTriggerEnter() {
//auto = true;
//canAttack = true;
//}
//
//function OnTriggerExit() {
//auto = false;
//time = 0.0;
//GameObject.Find("Player").GetComponent(skills).canAttack = false;
//GameObject.Find("Player").renderer.material.color = color;
////gameObject.renderer.material.color = Color.black;
//}

function Update () {

var distance = Vector3.Distance( player.transform.position, transform.position);

if (distance < 5) {
auto = true;
canAttack = true;

if (auto) {
time += Time.fixedDeltaTime;
 
if (time > 1) {
	GameObject.Find("Player").renderer.material.color = Color.red;
	if (time > 1.4) {
	
		//D > A
	if (GameObject.Find("Player").GetComponent(skills).defense > GetComponent(Stats).attack) {
		var adamage = GetComponent(Stats).attack - (GameObject.Find("Player").GetComponent(skills).defense / 2);
		if (adamage < 0 ) {
			GameObject.Find("Player").GetComponent(skills).health -= 0;
	//add in a gui feature to tell the player to find a weapon or something
		} else {
		GameObject.Find("Player").GetComponent(skills).health -= adamage;
		}
	}
	
	//D = 0
	else {
	GameObject.Find("Player").GetComponent(skills).health -= GetComponent(Stats).attack;
	}
	
	time = 0.0;
	}
 }
	 else {
		GameObject.Find("Player").renderer.material.color = color;
	}

}
}

if (distance > 10) {
auto = false;
time = 0.0;
GameObject.Find("Player").GetComponent(skills).canAttack = false;
GameObject.Find("Player").renderer.material.color = color;
}

if (canAttack && Input.GetKeyDown(KeyCode.Space) && t == 0.0) {

	//D > A
	if (GetComponent(Stats).defense > GameObject.Find("Player").GetComponent(skills).attack) {
		var damage = GameObject.Find("Player").GetComponent(skills).attack - (GetComponent(Stats).defense / 2);
		if (damage < 0 ) {
			GetComponent(Stats).health -= 0;
		} else {
		GetComponent(Stats).health -= damage;
		}
	}
	
	//D = 0
	else {
	GetComponent(Stats).health -= GameObject.Find("Player").GetComponent(skills).attack;
	}

	i++;
	t += Time.fixedDeltaTime;
	gameObject.renderer.material.color = Color.red;
	}




if (i != 0) {
t += Time.fixedDeltaTime;
	if (t > 1) {
	gameObject.renderer.material.color = Color.black;
	t = 0.0;
	i = 0;
	}
}
}