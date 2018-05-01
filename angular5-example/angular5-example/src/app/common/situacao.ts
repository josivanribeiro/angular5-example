/* Copyright Caixa Econômica Federal 2018 */
/**
 * Class that represents Situacao.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class Situacao {
    
    value: string;
    description: string;    

    public constructor (value: string, description: string) {
      this.value =  value;
      this.description =  description;   
    }    

}