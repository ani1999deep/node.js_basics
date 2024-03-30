const buff = Buffer.alloc(5);
/*Dynamic*/
const buff1 = Buffer.from("Hi");
buff.write("Hi");
console.log(buff);
console.log(buff1);

/*Example-2*/
const buff2 = Buffer.alloc(5);
/*Dynamic*/
const buff3 = Buffer.from("Anidep");
buff.write("Anideep");
console.log(buff2);
console.log(buff3);
