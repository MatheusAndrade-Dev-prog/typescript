//class

/**
 datas modifiers
 public
 private
 protected

 */

 //character SuperClass
class character{
    nome: string;
    strength: number;
    skill: number;

    constructor(nome: string, strength: number, skill: number){
        this.nome = nome;
        this.strength = strength;
        this.skill = skill;
    }
    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }

}

//Maginian: supClass
class magician extends character{
    magicPoints: number;    
    constructor(nome: string, strength: number, skill: number, magicPoints: number){
        super(nome, strength, skill);
        this.magicPoints = magicPoints;
    }
    attack(): void {
        console.log(`Attack with ${this.strength + this.magicPoints} points`);
    }

}

const p1 = new character("Matheus", 10, 98);
const p2 = new magician("Mago",89,30,100)

p1.attack();
p2.attack();
console.log(p1, p2);    