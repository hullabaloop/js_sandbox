import {argv, stdout, stderr, exit} from "node:process";

if (argv[4]==null){
    stderr.write('you should enter 3 parameters a b c');
    exit(1);
} else {
    const a = argv[2];
    const b = argv[3];
    const c = argv[4];
    const D = Math.pow(b, 2)-4*a*c;
    if (D==0){
        stdout.write(`x = ${-b/(2*a)}`);
    } else if (D>0){
        stdout.write(`x1 = ${(-b+Math.sqrt(D))/(2*a)}, x2 = ${(-b-Math.sqrt(D))/(2*a)}`);
    } else {
        stderr.write('there is no x');
        exit(1);
    }
    exit(0);
}
