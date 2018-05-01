import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
    systemLabel: string;
    systemVersion: string;    

    ngOnInit() {
        this.systemLabel = "Caixa Econômica Federal | Sistema de Gerenciamento de Demandas";
        this.systemVersion = "v.1.0.0.3618";
    }

}