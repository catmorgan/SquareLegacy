#pragma strict
var attack = 0;
var health = 0;
var defense = 0;
var limit = 14;
var show = false;
var stay = false;
var hit : RaycastHit;

function Start () {
gameObject.renderer.material.color = Color.black;

attack = Random.Range(2, limit - 5);
health = Random.Range(10, limit * 2);
defense = Random.Range(2, limit);
}

function OnMouseOver() {
	show = true;
}

function OnMouseExit() {
show = false;
}

function Update() {
if (health < 0 ) {
GameObject.Find("Player").renderer.material.color = GetComponent(autoAttack).color;
Destroy(gameObject);
}

    if(Input.GetMouseButtonDown(0) &&
       collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit,
                        Mathf.Infinity)) {
          stay = true;    
	}

}


function OnGUI() {

if (show && !stay) {
	 GUI.skin.box.alignment = TextAnchor.UpperLeft;
	 GUI.skin.box.fontSize = 18;
	 GUI.skin.box.normal.textColor = Color.red;
	  
	 GUI.Box(Rect(GameObject.Find("Main Camera").camera.WorldToScreenPoint(gameObject.transform.position).x + 25,
	 Screen.height - GameObject.Find("Main Camera").camera.WorldToScreenPoint(gameObject.transform.position).y, 115, 75), "Health: " + health +
	  "\nAttack: " + attack + "\nDefense: " + defense);
	 
	}
	
if (stay) {
	 GUI.skin.box.alignment = TextAnchor.UpperLeft;
	 GUI.skin.box.fontSize = 18;
	 GUI.skin.box.normal.textColor = Color.red;
	  
	 GUI.Box(Rect(GameObject.Find("Main Camera").camera.WorldToScreenPoint(gameObject.transform.position).x + 25,
	 Screen.height - GameObject.Find("Main Camera").camera.WorldToScreenPoint(gameObject.transform.position).y, 115, 75), "Health: " + health +
	  "\nAttack: " + attack + "\nDefense: " + defense);
	  
	  if(Input.GetMouseButtonDown(0) &&
       !collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit,
                        Mathf.Infinity)) {
                        stay = false;
                        }

}
}