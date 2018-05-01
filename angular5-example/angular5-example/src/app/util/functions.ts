/* Copyright Caixa Econômica Federal 2018 */
/**
 * Class with useful methods.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class Functions {
    
    static readonly sigla:string = "sigde"    
    private baseUrl:string;

    /**
    * Checks if a url contains a specific path.
    * @param {string} path - The path.
    */
    public static  urlContainsPath (path) {
        var location = window.location.href;
        if (location.indexOf(path) !== -1) {
          return true;
        } else {
          return false;
        }    
    }

    /**
    * Checks if a url contains a specific path by regex.
    * @param {string} regex - The regex.
    */
    public static urlContainsPathByRegex (regex) {
      var location = window.location.href;
      if (location.match (regex) != null) {
        return true;
      } else {
        return false;
      }
    }

    /**
    * Creates a success modal.
    * @param {Modal} Modal - The modal.
    * @param {string} successMessage - The success message.
    */
    public static createModalSuccess (modal, successMessage) {
      modal.alert()
      .size('sm')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .headerClass('modal-header-blue')
      .title(successMessage)
      .okBtn('Voltar')
      .open();
    }

    /**
    * Creates a alert modal.
    * @param {Modal} Modal - The modal.
    * @param {string} alertMessage - The alert message.
    */
    public static createModalAlert (modal, alertMessage) {
      modal.alert()
      .size('sm')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .headerClass('modal-header-yellow')      
      .title(alertMessage)
      .okBtn('Voltar')
      .okBtnClass('btn btn-warning')
      .open();
    }

    /**
    * Creates an error modal.
    * @param {Modal} Modal - The modal.
    * @param {string} errorMessage - The error message.
    */
    public static createModalError (modal, errorMessage) {
      modal.alert()
      .size('sm')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .headerClass('modal-header-red')
      .title(errorMessage)
      .okBtn('Voltar')
      .okBtnClass('btn btn-danger')
      .open();
    }

    public static getBaseUrl () {
      let baseUrl = window.location.hostname;
        if(baseUrl.endsWith(this.sigla + ".caixa")) {
            baseUrl = window.location.protocol + "//" + baseUrl + "/api";
        } if(window.location.port === "4200") {
            baseUrl = "http://10.11.21.160:8080/api";
        } else {
            baseUrl = "http://des." + this.sigla + ".caixa/api";
        }
        return baseUrl;
    }
    
}