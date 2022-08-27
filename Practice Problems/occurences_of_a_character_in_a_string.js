function occurence(s) {
    var map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    console.log(map);
}
occurence("chocolateeeeeehhttfervtfy");
/*
Map(11) {
  'c' => 2,
  'h' => 3,
  'o' => 2,
  'l' => 1,
  'a' => 1,
  't' => 4,
  'e' => 7,
  'f' => 2,
  'r' => 1,
  'v' => 1,
  'y' => 1
}

*/