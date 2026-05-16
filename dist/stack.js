export class Stack {
    constructor() {
        this.dados = [];
    }
    push(valor) {
        this.dados.push(valor);
    }
    pop() {
        return this.dados.pop();
    }
    topo() {
        return this.dados[this.dados.length - 1];
    }
    vazia() {
        return this.dados.length === 0;
    }
}
