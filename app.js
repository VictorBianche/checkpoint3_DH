// função construtora alunos

function Aluno(nome,faltas,notas){
    this._nome = nome;
    this._faltas = faltas;
    this._notas = notas;
};
// crição de arrays para armazenamento
let totalNotas = [];
let infoTotal = [];
let boleanoResult= [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// objeto aluno para aplicação de metodos
const infoAluno = {
    Aluno:Aluno,
    novoAluno:function(nome,faltas,notas){
        const novoAluno = new Aluno(nome,faltas,notas);
        totalNotas.push(notas);
        infoTotal.push(novoAluno);
        return novoAluno;
    },
    calculaMedia:function(){
        return totalNotas.reduce(reducer)/totalNotas.length
    },
    aumentaFalta:function(aluno){
        aluno._faltas += 1; 
        return aluno._faltas
    },   
}

const aluno1 = new infoAluno.novoAluno('aluno1',5,10);
const aluno2 = new infoAluno.novoAluno('aluno2',6,20);

// informações curso

const curso = {
    nomeCurso:"DH",
    notaAprovacao:7,
    faltasMaximas:10,
    listaAlunos:infoTotal,
    adicionaAluno:infoAluno.novoAluno,
    verificaMedia:function(aluno){
        return aluno._notas > this.notaAprovacao ? "aluno aprovado" : "aluno reprovado"
    },
    // grade media
    gradeMedia:function(){
        this.listaAlunos.map((aluno) => {
            if (aluno._notas > curso.notaAprovacao){
                boleanoResult.push("aprovado");
            }else{
                boleanoResult.push("reprovado");
            }
        })       
    },
};

const aluno3 = new curso.adicionaAluno('aluno3',1,1);

// testes funcionalidades

curso.gradeMedia();
console.log(curso.listaAlunos);
console.log(curso.verificaMedia(aluno3))
console.log(boleanoResult);
