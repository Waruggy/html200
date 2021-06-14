let arr = ['orc', 'troll', 'tauren', 'undead', 'blood elf'];

arr.push('goblin');
console.log(arr);

arr.splice(2,1);
console.log(arr);

let str = arr.join(', ');
console.log(str);
