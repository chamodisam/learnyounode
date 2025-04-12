const args = process.argv.slice(2);

let total = 0;

for (let i =0; i< args.length; i++) {
    total += Number(args[i]);
}

console.log(total);
