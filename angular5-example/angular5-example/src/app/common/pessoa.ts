/* Copyright Caixa Econômica Federal 2018 */
/**
 * Class that represents Pessoa.
 * 
 *  @author odair.pereira@castgroup.com.br
 */
export class Pessoa {
    
    value: string;
    description: string;    

    public constructor (value: string, description: string) {
      this.value =  value;
      this.description =  description;   
    }    

}