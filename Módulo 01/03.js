function temHabilidade(skills) {
  x = skills.indexOf("Javascript");
	if(x > 0) {
		return true
	} else {
		return false
	}
}

var skills = ["ReactJS", "React Native", "Javascript"];

temHabilidade(skills);
