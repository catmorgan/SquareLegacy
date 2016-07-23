#pragma strict
var attack = 0;
var health = 0;
var defense = 0;
var limit = 14;

function Start () {

attack = Random.Range(2, limit);
health = Random.Range(2, limit);
defense = Random.Range(2, limit);
}