import {
  MatDividerModule
} from "./chunk-3WUBDBKL.js";
import {
  MatIconModule
} from "./chunk-2TSWSPGZ.js";
import "./chunk-ZQUYWEGM.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatPaginator,
  MatPaginatorModule,
  MatRow,
  MatRowDef,
  MatSort,
  MatSortHeader,
  MatSortModule,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-RI4OYPUK.js";
import "./chunk-OUXDEDZO.js";
import {
  createClient
} from "./chunk-2BVJ5QC4.js";
import "./chunk-BD4MZY7C.js";
import {
  MatButton,
  MatButtonModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-7SRX2BHT.js";
import "./chunk-ZY6ND4LP.js";
import {
  BarraSuperiorComponent,
  MenuDesplegableComponent
} from "./chunk-CXIZGAJW.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-LD5KS7JM.js";
import "./chunk-DI6EMUXY.js";
import {
  __async
} from "./chunk-NUWPPFEP.js";

// src/app/views/pago-matriculas/pago-matriculas.component.ts
var _c0 = () => [5, 10, 25, 100];
function PagoMatriculasComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.id);
  }
}
function PagoMatriculasComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "a\xF1o lectivo");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.estudiante_id);
  }
}
function PagoMatriculasComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "a\xF1o lectivo");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.anio_lectivo_id);
  }
}
function PagoMatriculasComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Monto");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.monto);
  }
}
function PagoMatriculasComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Fecha de pago");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.fecha_pago);
  }
}
function PagoMatriculasComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Fecha de vencimiento");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.fecha_vencimiento);
  }
}
function PagoMatriculasComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Pagado");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.pagado);
  }
}
function PagoMatriculasComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Created at");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.created_at);
  }
}
function PagoMatriculasComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "updated at");
    \u0275\u0275elementEnd();
  }
}
function PagoMatriculasComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.updated_at);
  }
}
function PagoMatriculasComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 34);
  }
}
function PagoMatriculasComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
var supabaseUrl = "https://fgfmtlvmpmiudjbufrjb.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA";
var supabase = createClient(supabaseUrl, supabaseKey);
var PagoMatriculasComponent = class _PagoMatriculasComponent {
  displayedColumns = [
    "id",
    "estudiante_id",
    "anio_lectivo_id",
    "monto",
    "fecha_pago",
    "fecha_vencimiento",
    "pagado",
    "created_at",
    "updated_at"
  ];
  dataSource = new MatTableDataSource();
  paginator;
  sort;
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("#########ngOnInit se ejecut\xF3");
      const { data, error } = yield supabase.from("pagos_matricula").select("*");
      if (error) {
        console.error("#########Error al obtener pagos:", error.message);
      } else {
        console.log("#########Pagos recibidos desde Supabase:", data);
        this.dataSource.data = data || [];
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log("#########Paginator y Sort aplicados");
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  static \u0275fac = function PagoMatriculasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagoMatriculasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagoMatriculasComponent, selectors: [["app-pago-matriculas"]], viewQuery: function PagoMatriculasComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
      \u0275\u0275viewQuery(MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    }
  }, decls: 57, vars: 5, consts: [["input", ""], [1, "contenedor", "w-full", "h-screen", "overflow-hidden", "relative"], [1, "flex"], [1, "flex", "h-screen", "w-full", "bg-[#DBE0E6]", "flex"], [1, "bg-[#F6F5FF]", "w-[100%]"], [1, "flex", "flex-col", "h-screen", "w-full", "bg-[#DBE0E6]", "flex"], [1, "m-[20px]"], [1, "text-[20px]", "font-bold"], [1, "text-[12px]"], [1, "flex", "w-[100%]", "mt-[5px]", "grid"], [1, "flex", "w-[100%]", "flex-col"], [1, "flex", "items-center"], [1, "w-[80%]"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], [1, "flex", "items-center", "justify-center", "ml-[10px]"], ["mat-raised-button", ""], [1, "mat-elevation-z8", "flex", "w-[100%]"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "estudiante_id"], ["matColumnDef", "anio_lectivo_id"], ["matColumnDef", "monto"], ["matColumnDef", "fecha_pago"], ["matColumnDef", "fecha_vencimiento"], ["matColumnDef", "pagado"], ["matColumnDef", "created_at"], ["matColumnDef", "updated_at"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PagoMatriculasComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275element(1, "app-barra-superior");
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-menu-desplegable");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 4)(8, "div", 6)(9, "p", 7);
      \u0275\u0275text(10, "Control de Pagos de Matriculas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "p", 8);
      \u0275\u0275text(13, "Registro y seguimiento de pagos de las matriculas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "mat-form-field", 12)(18, "mat-label");
      \u0275\u0275text(19, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 13, 0);
      \u0275\u0275listener("keyup", function PagoMatriculasComponent_Template_input_keyup_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilter($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
      \u0275\u0275text(24, "Nuevo Pago");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "table", 17);
      \u0275\u0275elementContainerStart(27, 18);
      \u0275\u0275template(28, PagoMatriculasComponent_th_28_Template, 2, 0, "th", 19)(29, PagoMatriculasComponent_td_29_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(30, 21);
      \u0275\u0275template(31, PagoMatriculasComponent_th_31_Template, 2, 0, "th", 19)(32, PagoMatriculasComponent_td_32_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(33, 22);
      \u0275\u0275template(34, PagoMatriculasComponent_th_34_Template, 2, 0, "th", 19)(35, PagoMatriculasComponent_td_35_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(36, 23);
      \u0275\u0275template(37, PagoMatriculasComponent_th_37_Template, 2, 0, "th", 19)(38, PagoMatriculasComponent_td_38_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(39, 24);
      \u0275\u0275template(40, PagoMatriculasComponent_th_40_Template, 2, 0, "th", 19)(41, PagoMatriculasComponent_td_41_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(42, 25);
      \u0275\u0275template(43, PagoMatriculasComponent_th_43_Template, 2, 0, "th", 19)(44, PagoMatriculasComponent_td_44_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(45, 26);
      \u0275\u0275template(46, PagoMatriculasComponent_th_46_Template, 2, 0, "th", 19)(47, PagoMatriculasComponent_td_47_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(48, 27);
      \u0275\u0275template(49, PagoMatriculasComponent_th_49_Template, 2, 0, "th", 19)(50, PagoMatriculasComponent_td_50_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(51, 28);
      \u0275\u0275template(52, PagoMatriculasComponent_th_52_Template, 2, 0, "th", 19)(53, PagoMatriculasComponent_td_53_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(54, PagoMatriculasComponent_tr_54_Template, 1, 0, "tr", 29)(55, PagoMatriculasComponent_tr_55_Template, 1, 0, "tr", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "mat-paginator", 31);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275property("dataSource", ctx.dataSource);
      \u0275\u0275advance(28);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
    }
  }, dependencies: [
    MenuDesplegableComponent,
    BarraSuperiorComponent,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatInput,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatSortModule,
    MatSort,
    MatSortHeader,
    MatPaginatorModule,
    MatPaginator,
    MatButtonModule,
    MatButton,
    MatDividerModule,
    MatIconModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagoMatriculasComponent, [{
    type: Component,
    args: [{ selector: "app-pago-matriculas", imports: [
      MenuDesplegableComponent,
      BarraSuperiorComponent,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule
    ], template: '<section class="contenedor w-full h-screen overflow-hidden relative">\r\n    <app-barra-superior></app-barra-superior>\r\n\r\n    <div class="flex">\r\n        <app-menu-desplegable>\r\n        </app-menu-desplegable>\r\n\r\n        <div class="flex h-screen w-full bg-[#DBE0E6]  flex">\r\n            <div class=" bg-[#F6F5FF] w-[100%]">\r\n\r\n                <div class="flex flex-col h-screen w-full bg-[#DBE0E6]  flex ">\r\n                    <div class=" bg-[#F6F5FF] w-[100%]">\r\n                        <div class="m-[20px]">\r\n                            <p class=" text-[20px] font-bold">Control de Pagos de Matriculas</p>\r\n                        </div>\r\n\r\n                        <div class="m-[20px]">\r\n                            <p class=" text-[12px]">Registro y seguimiento de pagos de las matriculas</p>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class="flex w-[100%] mt-[5px] grid ">\r\n                        <div class="flex w-[100%] flex-col">\r\n                            <div class="flex items-center">\r\n                                <mat-form-field class="w-[80%]">\r\n                                    <mat-label>Filter</mat-label>\r\n                                    <input matInput (keyup)="applyFilter($event)" placeholder="Ex. Mia" #input>\r\n                                </mat-form-field>\r\n                                <div class="flex items-center justify-center ml-[10px]">\r\n                                    <button mat-raised-button>Nuevo Pago</button>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div class="mat-elevation-z8  flex w-[100%]">\r\n                                <table mat-table [dataSource]="dataSource" matSort class="w-full">\r\n\r\n                                    <ng-container matColumnDef="id">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.id }}</td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef="estudiante_id">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>a\xF1o lectivo</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.estudiante_id }}</td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef="anio_lectivo_id">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>a\xF1o lectivo</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.anio_lectivo_id }}</td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef="monto">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Monto</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.monto }}</td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef="fecha_pago">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Fecha de pago</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.fecha_pago }}</td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef="fecha_vencimiento">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Fecha de vencimiento</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.fecha_vencimiento }}</td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef="pagado">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Pagado</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.pagado }}</td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef="created_at">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Created at</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.created_at }}</td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef="updated_at">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>updated at</th>\r\n                                        <td mat-cell *matCellDef="let row">{{ row.updated_at }}</td>\r\n                                    </ng-container>\r\n\r\n\r\n                                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n                                    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n                                </table>\r\n\r\n\r\n                            </div>\r\n                            <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"\r\n                                aria-label="Select page of users"></mat-paginator>\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</section>' }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagoMatriculasComponent, { className: "PagoMatriculasComponent", filePath: "src/app/views/pago-matriculas/pago-matriculas.component.ts", lineNumber: 34 });
})();
export {
  PagoMatriculasComponent
};
//# sourceMappingURL=chunk-CLTCLQKY.js.map
