function string_palindrom(s) {
    let pointer = s.length - 1;
    for (let i = 0; i < s.length / 2; i++, pointer--) {
        if (s[i] != s[pointer]) {
            return false;
        }
    }
    return true;
}
console.log(string_palindrom("MOM"))