function randomRoto(x:number){
    switch(x){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log(`${x}:一桁ですね！`);
            break;
        case 11:
        case 22:
        case 33:
        case 44:
        case 55:
            console.log(`${x}:キリ番ですね！`);
            break;
        default:
            console.log(`${x}ハズレ`)
            break;
    }
}

let a = Math.floor(Math.random()*60)
randomRoto(a);