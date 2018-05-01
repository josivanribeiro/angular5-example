/* Copyright Caixa Econômica Federal 2018 */
/**
 * Class with useful constants.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class Constants {
    /* Limit byte size file */
    static readonly MAX_FILE_SIZE = 2000000;

    /* HTTP Status Codes */
    static readonly HTTP_STATUS_CODE_CREATED = 201;
    static readonly HTTP_STATUS_CODE_NO_CONTENT = 204;    
    static readonly HTTP_STATUS_CODE_BAD_REQUEST = 400;

    /* Apontamentos path constants */
    static readonly APONTAMENTOS_LIST_PATH = "/dashboard/apontamentos";
    static readonly APONTAMENTOS_ADD_PATH = "/dashboard/apontamentos/add";
    static readonly APONTAMENTOS_DETAILS_PATH = "/dashboard/apontamentos/details/";
    static readonly APONTAMENTOS_DETAILS_PATH_REGEX = "\/dashboard\/apontamentos\/details\/[0-9]+";
    static readonly APONTAMENTOS_EDIT_PATH_REGEX = "\/dashboard\/apontamentos\/details\/[0-9]+\/edit\/[0-9]+";

    /* Blocos path constants */
    static readonly BLOCOS_LIST_PATH = "/dashboard/blocos";
    static readonly BLOCOS_ADD_PATH = "/dashboard/blocos/add";
    static readonly BLOCOS_DETAILS_PATH = "/dashboard/blocos/details/";
    static readonly BLOCOS_DETAILS_PATH_REGEX = "\/dashboard\/blocos\/details\/[0-9]+";
    static readonly BLOCOS_EDIT_PATH_REGEX = "\/dashboard\/blocos\/details\/[0-9]+\/edit\/[0-9]+";

    /* Filas path constants */
    static readonly FILAS_LIST_PATH = "/dashboard/filas";
    static readonly FILAS_ADD_PATH = "/dashboard/filas/add";
    static readonly FILAS_DETAILS_PATH = "/dashboard/filas/details";
    static readonly FILAS_EDIT_PATH = "/dashboard/filas/edit";
    static readonly FILAS_DETAILS_PATH_REGEX = "\/dashboard\/filas\/details\/[0-9]+";
    static readonly FILAS_EDIT_PATH_REGEX = "\/dashboard\/filas\/details\/[0-9]+\/edit\/[0-9]+";

    /* Ordering constants*/
    static readonly ORDERING_DIRECTION_ASC = "ASC";
    static readonly ORDERING_DIRECTION_DESC = "DESC";

    /* Aviso path constants */
    static readonly AVISO_LIST_PATH = "/dashboard";
    static readonly AVISO_ADD_PATH = "/dashboard/aviso";

    /* Processo path constants */
    static readonly PROCESSO_LIST_PATH = "/dashboard/processos";
    static readonly PROCESSO_ADD_PATH = "/dashboard/processos/add";
    static readonly PROCESSO_EDIT_PATH = "/dashboard/processos/edit"
    static readonly PROCESSO_DETAILS_PATH = "/dashboard/processos/details";
    static readonly PROCESSO_EDIT_PATH_REGEX = "\/dashboard\/processos\/details\/[0-9]+\/edit\/[0-9]+";
    static readonly PROCESSO_DETAILS_PATH_REGEX = "\/dashboard\/processos\/details\/[0-9]+"

    /* Usuário fila path constants */
    static readonly USUARIO_FILA_LIST_PATH = "/dashboard/usuarios_fila";
    static readonly USUARIO_FILA_EDIT_PATH = "/dashboard/usuarios_fila/edit"
    static readonly USUARIO_FILA_DETAILS_PATH = "/dashboard/usuarios_fila/details";
    static readonly USUARIO_FILA_EDIT_PATH_REGEX = "\/dashboard\/usuarios_fila\/details\/[0-9]+\/[0-9]+\/edit\/[0-9]+\/[0-9]+";
    static readonly USUARIO_FILA_DETAILS_PATH_REGEX = "\/dashboard\/usuarios_fila\/details\/[0-9]+\/[0-9]+"
    
}