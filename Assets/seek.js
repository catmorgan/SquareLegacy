#pragma strict
var player : GameObject; 
var speed : float = 5;

function Start () {
 player = GameObject.Find("Player");

} 


function Update() {


var distance = Vector3.Distance( player.transform.position, transform.position);

if ( distance < 10 ) { 

var delta = player.transform.position - transform.position; 
delta.Normalize();

var moveSpeed = speed * Time.deltaTime;

transform.position = transform.position + (delta * moveSpeed); 
} else {
}
}