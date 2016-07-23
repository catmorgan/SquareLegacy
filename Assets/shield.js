#pragma strict
var defense = 0;
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
          GameObject.Find("Player").GetComponent(skills).defense =   GameObject.Find("Player").GetComponent(skills).initDefense + defense;  
          Destroy(gameObject);     
	}
}

function OnGUI() {

if (show) {
	 GUI.skin.box.alignment = TextAnchor.UpperLeft;
	 GUI.skin.box.fontSize = 18;
	 GUI.skin.box.normal.textColor = Color.blue;
	  
	 GUI.Box(Rect(GameObject.Find("Main Camera").camera.WorldToScreenPoint(gameObject.transform.position).x + 25,
	 Screen.height - GameObject.Find("Main Camera").camera.WorldToScreenPoint(gameObject.transform.position).y, 115, 30),
	  "Defense: " + defense);
	 
	}

}