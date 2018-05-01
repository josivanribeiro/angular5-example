/* Copyright Caixa Econômica Federal 2018 */
/**
 * Class that represents Content.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class Sort {
    
    direction: string;
    property: string;
    ignoreCase: boolean;
    nullHandling: string;
    descending: boolean;
    ascending: boolean;

    public constructor (direction: string, property: string, ignoreCase: boolean, nullHandling: string, descending: boolean, ascending: boolean) {
        this.direction = direction;
        this.property =  property;
        this.ignoreCase = ignoreCase;
        this.nullHandling = nullHandling;
        this.descending = descending;
        this.ascending = ascending;
    }  

}