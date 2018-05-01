/* Copyright Caixa Econômica Federal 2018 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApontamentosComponent } from './apontamentos/apontamentos.component';
import { ApontamentoComponent } from './apontamentos/apontamento.component';
import { ApontamentoHistoricoComponent } from './apontamento-historico/apontamento-historico.component';
import { BlocoHistoricoComponent } from './bloco-historico/bloco-historico.component';
import { BlocosComponent } from './blocos/blocos.component';
import { BlocoComponent } from './blocos/bloco.component';
import { FilasComponent } from './filas/filas.component';
import { FilaComponent } from './filas/fila.component';
import { FilaHistoricoComponent } from './fila-historico/fila-historico.component';
import { AvisoComponent } from './avisos/aviso.component';
import { AvisosComponent } from './avisos/avisos.component';
import { ProcessosComponent } from './processos/processos.component';
import { ProcessoComponent } from './processos/processo.component';
import { ProcessoHistoricoComponent } from './processo-historico/processo-historico.component';
import { UsuariosFilaComponent } from './usuarios-fila/usuarios-fila.component';
import { UsuarioFilaHistoricoComponent } from './usuario-fila-historico/usuario-fila-historico.component';
import { UsuarioFilaComponent } from './usuarios-fila/usuario-fila.component';

const routes: Routes = [
  {
    path: '',
    component: AvisosComponent,
    data: {
      breadcrumb: 'Início'
    }
  },
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Administração'
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          breadcrumb: ''
        },
      },
      {
        path: 'apontamentos',
        data: {
          breadcrumb: 'Apontamento'
        },
        children: [
          {
            path: '',
            component: ApontamentosComponent,
            data: {
              breadcrumb: ''
            }
          },
          {
            path: "add",
            component: ApontamentoComponent,
            data: {
              breadcrumb: "Incluir"
            }
          },
          {
            path: "details/:id",
            data: {
              breadcrumb: "Exibir"
            },
            children: [
              {
                path: "",
                component: ApontamentoComponent,
                data: {
                  breadcrumb: ""
                }
              },
              {
                path: "edit/:id",
                component: ApontamentoComponent,
                data: {
                  breadcrumb: "Alterar"
                }
              },
              {
                path: "historico/:tabela/:identificadorRegistro/:nomeApontamento",
                component: ApontamentoHistoricoComponent,
                data: {
                  breadcrumb: "Histórico"
                }
              }
            ]
          }
        ]
      },
      {
        path: 'blocos',
        data: {
          breadcrumb: 'Bloco'
        },
        children: [
          {
            path: '',
            component: BlocosComponent,
            data: {
              breadcrumb: ''
            }
          },
          {
            path: "add",
            component: BlocoComponent,
            data: {
              breadcrumb: "Incluir"
            }
          },
          {
            path: "details/:id",
            data: {
              breadcrumb: "Exibir"
            },
            children: [
              {
                path: "",
                component: BlocoComponent,
                data: {
                  breadcrumb: ""
                }
              },
              {
                path: "edit/:id",
                component: BlocoComponent,
                data: {
                  breadcrumb: "Alterar"
                }
              },
              {
                path: "historico/:tabela/:identificadorRegistro/:nomeBloco",
                component: BlocoHistoricoComponent,
                data: {
                  breadcrumb: "Histórico"
                }
              }
            ]
          }
        ]
      },
      {
        path: 'filas',
        data: {
          breadcrumb: 'Fila'
        },
        children: [
          {
            path: '',
            component: FilasComponent,
            data: {
              breadcrumb: ''
            }
          },
          {
            path: "add",
            component: FilaComponent,
            data: {
              breadcrumb: "Incluir"
            }
          },
          {
            path: "details/:id",
            data: {
              breadcrumb: "Exibir"
            },
            children: [
              {
                path: "",
                component: FilaComponent,
                data: {
                  breadcrumb: ""
                }
              },
              {
                path: "edit/:id",
                component: FilaComponent,
                data: {
                  breadcrumb: "Alterar"
                }
              },
              {
                path: "historico/:tabela/:identificadorRegistro/:nomeFila",
                component: FilaHistoricoComponent,
                data: {
                  breadcrumb: "Histórico"
                }
              }
            ]
          }
        ]
      },
      {
        path: 'aviso',
        data: {
          breadcrumb: 'Mensageria'
        },
        children: [
          {
            path: "",
            component: AvisoComponent,
            data: {
              breadcrumb: ""
            }
          }
        ]
      },
      {
        path: 'processos',
        data: {
          breadcrumb: 'Processo'
        },
        children: [
          {
            path: '',
            component: ProcessosComponent,
            data: {
              breadcrumb: ''
            }
          },
          {
            path: "add",
            component: ProcessoComponent,
            data: {
              breadcrumb: "Incluir"
            }
          },
          {
            path: "details/:id",
            data: {
              breadcrumb: "Exibir"
            },
            children: [
              {
                path: "",
                component: ProcessoComponent,
                data: {
                  breadcrumb: ""
                }
              },
              {
                path: "edit/:id",
                component: ProcessoComponent,
                data: {
                  breadcrumb: "Alterar"
                }
              },
              {
                path: "historico/:tabela/:identificadorRegistro/:nomeProcesso",
                component: ProcessoHistoricoComponent,
                data: {
                  breadcrumb: "Histórico"
                }
              }
            ]
          }
        ]
      },
      {
        path: 'usuarios_fila',
        data: {
          breadcrumb: 'Usuários Por Fila'
        },
        children: [
          {
            path: '',
            component: UsuariosFilaComponent,
            data: {
              breadcrumb: ''
            }
          },
          {
            path: 'details/:idUnidade/:idProcesso',
            data: {
              breadcrumb: 'Exibir'
            },
            children: [
              {
                path: '',
                component: UsuarioFilaComponent,
                data: {
                  breadcrumb: ''
                }
              },
              {
                path: 'edit/:idUnidade/:idProcesso',
                component: UsuarioFilaComponent,
                data: {
                  breadcrumb: 'Alterar'
                }
              },
              {
                path: 'historico/:tabela',
                component: UsuarioFilaHistoricoComponent,
                data: {
                  breadcrumb: 'Histórico'
                }
              }
            ]
          },
        ]
      },
    ]
  },

  {
    path: '**',
    component: NotfoundComponent,
    data: {
      breadcrumb: 'Não Encontrado'
    }
  },
];

/**
 * AppRoutingModule module class.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }