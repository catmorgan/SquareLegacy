#pragma strict
var attack = 0;
var show = false;
var hit : RaycastHit;

function OnMouseOver() {
show = true;
}

function OnMouseExit() {
show = false;
}

function Update(){
    if(Input.GetMouseButtonDown(0) &&
       collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit,
                        Mathf.Infinity)) {
          GameObject.Find("Player").GetComponent(skills).attack =   GameObject.Find("Player").GetComponent(skills).initAttack + attack;  
          Destroy(gameObject);     
	}
}

function OnGUI() {

if (show) {
	 GUI.skin.box.alignment = TextAnchor.UpperLeft;
	 GUI.skin.box.fontSize = 18;
	 GUI.skin.box.normal.textColor = Color.yellow;
	  
	 GUI.Box(Rect(GameObject.Find("Main Camera").camera.WorldToScreenPoint(gameObject.transform.position).x + 25,
	 Screen.height - GameObject.Find("Main Camera").camera.WorldToScreenPoint(gameObject.transform.position).y, 115, 30),
	  "Attack: " + attack);
	 
	}

}

