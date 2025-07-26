//fuções
function addNumber(x: number, y: number): number {
    return x + y;
}   
let soma: number = addNumber(4,7);

function addToHello(name: string): string {
    return `Hello ${name}`;
}
console.log(addToHello("Matheus"));     

function callToPhone(phone: number | string): number | string {
    return phone;
}
console.log(callToPhone(123456789));
console.log(callToPhone("123456789"));

async function getDatabase(id: number): Promise<string> {
    return "Matheus";
}
getDatabase(1);
