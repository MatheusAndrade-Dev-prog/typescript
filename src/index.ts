// tipos primitivos: boolean, number,string
let ligado: boolean = false;
let nome: string = "Matheus";
let idade:number = 5;
let altura: Number = 1.72;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void   
let retorno: void;
let retornoView: any = false;

//obejtos sem-previsibilidade 
let produto: object = {
    nome: "matheus",
    cidade: "São Paulo",
    idade: 20,
};

//obejtos com-previsibilidade 
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};

//arrays 
let dados: string[] = ["Matheus","Carlos","João"];
let dados2: Array<string> = ["Matheus","Carlos","João"];
let infos: (string | number)[] = ["Matheus",20,"carlos",30];

//tuplas
let boleto: [string, number, number] = ["agua conta", 199.90, 32];

//dados
dados.pop();
dados.concat;
dados.length;
dados.filter;

//datas
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
console.log(aniversario.toString());


function apiVersion(version: string) {     
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Matheus"});
        }
}

@apiVersion("1.10")
class Api {
  
    name: string;
    constructor(name: string) {
        this.name = name;
    }

}

const api = new Api("Matheus");
console.log(api.name);