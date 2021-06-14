let arr = ['orc', 'troll', 'tauren', 'undead', 'blood elf'];

arr.push('goblin');
console.log(arr);

arr.splice(2,1);
console.log(arr);

let str = arr.join(', ');
console.log(str);

// [object Array] (6)
["orc","troll","tauren","undead","blood elf","goblin"]
// [object Array] (5)
["orc","troll","undead","blood elf","goblin"]
"orc, troll, undead, blood elf, goblin"
