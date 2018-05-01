/* Copyright Caixa Econômica Federal 2018 */
/**
 * Class that represents Historico Content.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class HistoricoContent {
    
    id:number;
    dhHistorico: Date;
    usuario: string;
    tabela: string;
    coluna: string;
    operacao: string;
    valorAnterior:string;
    valorAtual:string;

    public constructor (id:number, dhHistorico: Date, usuario: string, tabela: string, coluna: string,
      operacao: string, valorAnterior: string, valorAtual: string) {
      this.id =  id;
      this.dhHistorico =  dhHistorico;
      this.usuario = usuario;
      this.tabela = tabela;
      this.coluna = coluna;
      this.operacao = operacao;
      this.valorAnterior = valorAnterior;
      this.valorAtual = valorAtual;
    }    

  }