export class Stack {
    private dados: string[];

    constructor() {
        this.dados = [];
    }

    push(valor: string): void {
        this.dados.push(valor);
    }

    pop(): string | undefined {
        return this.dados.pop();
    }

    topo(): string | undefined {
        return this.dados[this.dados.length - 1];
    }

    vazia(): boolean {
        return this.dados.length === 0;
    }
}
