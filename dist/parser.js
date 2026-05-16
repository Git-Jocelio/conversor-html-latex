import { Stack } from "./stack.js";
function limparTag(tag) {
    let novaTag = "";
    let i = 0;
    while (i < tag.length && tag[i] !== " ") {
        novaTag += tag[i];
        i++;
    }
    return novaTag.toLowerCase();
}
function escaparLatex(caractere) {
    if (caractere === "&") {
        return "\\&";
    }
    if (caractere === "%") {
        return "\\%";
    }
    if (caractere === "$") {
        return "\\$";
    }
    if (caractere === "#") {
        return "\\#";
    }
    if (caractere === "_") {
        return "\\_";
    }
    return caractere;
}
export function converter(html) {
    let resultado = "";
    let pilha = new Stack();
    let i = 0;
    while (i < html.length) {
        if (html[i] === "<") {
            let j = i + 1;
            let tag = "";
            while (j < html.length && html[j] !== ">") {
                tag += html[j];
                j++;
            }
            tag = limparTag(tag);
            if (j >= html.length) {
                resultado += html[i];
            }
            else if (tag === "p") {
                pilha.push("p");
            }
            else if (tag === "/p") {
                resultado += "\n\n";
                pilha.pop();
            }
            else if (tag === "b" || tag === "strong") {
                resultado += "\\textbf{";
                pilha.push("b");
            }
            else if (tag === "/b" || tag === "/strong") {
                resultado += "}";
                pilha.pop();
            }
            else if (tag === "i" || tag === "em") {
                resultado += "\\textit{";
                pilha.push("i");
            }
            else if (tag === "/i" || tag === "/em") {
                resultado += "}";
                pilha.pop();
            }
            else if (tag === "ul") {
                resultado += "\\begin{itemize}\n";
                pilha.push("ul");
            }
            else if (tag === "/ul") {
                resultado += "\\end{itemize}\n";
                pilha.pop();
            }
            else if (tag === "ol") {
                resultado += "\\begin{enumerate}\n";
                pilha.push("ol");
            }
            else if (tag === "/ol") {
                resultado += "\\end{enumerate}\n";
                pilha.pop();
            }
            else if (tag === "li") {
                resultado += "\\item ";
                pilha.push("li");
            }
            else if (tag === "/li") {
                resultado += "\n";
                pilha.pop();
            }
            else if (tag === "br" || tag === "br/") {
                resultado += "\\\\\n";
            }
            else if (tag === "h1") {
                resultado += "\\section{";
                pilha.push("h1");
            }
            else if (tag === "/h1") {
                resultado += "}\n";
                pilha.pop();
            }
            else if (tag === "h2") {
                resultado += "\\subsection{";
                pilha.push("h2");
            }
            else if (tag === "/h2") {
                resultado += "}\n";
                pilha.pop();
            }
            i = j;
        }
        else {
            resultado += escaparLatex(html[i]);
        }
        i++;
    }
    return resultado.trim();
}
