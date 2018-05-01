import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {
 
    itemsmenu = [
        {
            "id": "li_fila_trabalho",
            "label": "Fila de Trabalho",
            "iclass": "fa fa-th-list fa-2x",            
            "routerLink": "",
            "hasdownarrow": true,
            "subitemsmenu": []
        },
        {
            "id": "li_pesquisa",
            "label": "Pesquisa",
            "iclass": "fa fa-search fa-2x",            
            "routerLink": "",
            "hasdownarrow": true,
            "subitemsmenu": []
        },
        {
            "id": "li_relatorios",
            "label": "Relatórios",
            "iclass": "fa fa-file-text-o fa-2x",            
            "routerLink": "",
            "hasdownarrow": true,
            "subitemsmenu": []
        },
        {
            "id": "li_administracao",
            "label": "Administração",
            "ulclass": "",
            "iclass": "fa fa-university fa-2x",
            "routerLink": "dashboard",            
            "hasdownarrow": false,
            "subitemsmenu": []
        }
    ];


    
    itemsaccount = [
        {
            "id": "a_unidade_trabalho",
            "label": "Unidade Trabalho",
            "iclass": "fa fa-home",
            "textbottom": "(UNDDE_#110)",
            "subitemsaccount": [{
                "isheader": true,
                "id": "li_permissao",
                "label": "Permissão: UNDDE_#120",
                "liclass": "dropdown-header",
                "iclass": "",
                "routerLink": "",
                "textbottom": "",
                "subsubitemsaccount": []
            }, {
                "isheader": false,
                "id": "li_solicitar_vinculo",
                "label": "Solicitar vinculo",
                "liclass": "",
                "iclass": "fa fa-plus",
                "routerLink": "",
                "textbottom": "(UNDDE_#110)",
                "subsubitemsaccount": []
            }, {
                "isheader": false,
                "id": "li_trocar_vinculo",
                "label": "Trocar vinculo",
                "liclass": "dropdown-submenu",
                "iclass": "fa fa-retweet",
                "routerLink": "",
                "textbottom": "(UNDDE_#110)",
                "subsubitemsaccount": [{
                        "id": "li_praca_alfandega",
                        "label": "0428 - Praça da Alfandega",
                        "routerLink": ""
                },
                {
                        "id": "li_menino_deus",
                        "label": "0428 - Praça da Alfandega",
                        "routerLink": ""
                }]
            }]
    }]
    
    //constructor(private menuService: MenuService) { }

    ngOnInit() {
        //this.menuService.getJSON().then(data => this.items = data);        
    }

}