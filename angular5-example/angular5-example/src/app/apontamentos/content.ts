/* Copyright Caixa Econômica Federal 2018 */
/**
 * Class that represents Content.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class Content {
    
    nuApontamento: string;
    noApontamento: string;
    deApontamento: string;
    icAtivo: string;
    icExcluido: string;

    public constructor (nuApontamento: string, noApontamento: string, deApontamento: string, icAtivo: string, icExcluido: string) {
      this.nuApontamento =  nuApontamento;
      this.noApontamento =  noApontamento;
      this.deApontamento = deApontamento;
      this.icAtivo = icAtivo;
      this.icExcluido = icExcluido;
    }    

  }