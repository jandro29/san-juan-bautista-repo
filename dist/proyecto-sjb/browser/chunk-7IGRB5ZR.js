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
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-LD5KS7JM.js";
import "./chunk-DI6EMUXY.js";
import {
  __async
} from "./chunk-NUWPPFEP.js";

// src/app/views/interna-estudiantes/interna-estudiantes.component.ts
var _c0 = () => [5, 10, 25, 100];
function InternaEstudiantesComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " ID ");
    \u0275\u0275elementEnd();
  }
}
function InternaEstudiantesComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function InternaEstudiantesComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Nombre ");
    \u0275\u0275elementEnd();
  }
}
function InternaEstudiantesComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.nombre, " ");
  }
}
function InternaEstudiantesComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Apellidos ");
    \u0275\u0275elementEnd();
  }
}
function InternaEstudiantesComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.apellidos, " ");
  }
}
function InternaEstudiantesComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " DNI ");
    \u0275\u0275elementEnd();
  }
}
function InternaEstudiantesComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.dni, " ");
  }
}
function InternaEstudiantesComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Fecha Nacimiento ");
    \u0275\u0275elementEnd();
  }
}
function InternaEstudiantesComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.fecha_nacimiento, " ");
  }
}
function InternaEstudiantesComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Grado ");
    \u0275\u0275elementEnd();
  }
}
function InternaEstudiantesComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.grado, " ");
  }
}
function InternaEstudiantesComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Apoderado ");
    \u0275\u0275elementEnd();
  }
}
function InternaEstudiantesComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.apoderado, " ");
  }
}
function InternaEstudiantesComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function InternaEstudiantesComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
var supabaseUrl = "https://fgfmtlvmpmiudjbufrjb.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA";
var supabase = createClient(supabaseUrl, supabaseKey);
var InternaEstudiantesComponent = class _InternaEstudiantesComponent {
  displayedColumns = ["id", "nombre", "apellidos", "dni", "fecha_nacimiento", "grado", "apoderado"];
  dataSource = new MatTableDataSource();
  paginator;
  sort;
  ngOnInit() {
    return __async(this, null, function* () {
      console.log(" ngOnInit se ejecut\xF3");
      const { data, error } = yield supabase.from("estudiantes").select("*");
      if (error) {
        console.error("#########Error al obtener estudiantes:", error.message);
      } else {
        console.log("#########Estudiantes recibidos desde Supabase:", data);
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
  static \u0275fac = function InternaEstudiantesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InternaEstudiantesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InternaEstudiantesComponent, selectors: [["app-interna-estudiantes"]], viewQuery: function InternaEstudiantesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
      \u0275\u0275viewQuery(MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    }
  }, decls: 48, vars: 5, consts: [["input", ""], [1, "contenedor", "w-full", "h-screen", "overflow-hidden", "relative"], [1, "flex"], [1, "flex", "h-screen", "w-full", "bg-[#DBE0E6]", "flex", "items-center", "justify-center"], [1, "bg-[#F6F5FF]", "w-[950px]"], [1, "m-[20px]"], [1, "flex", "flex-row"], [1, "grid", "grid-cols-6", "gap-4"], [1, "text-[48px]", "font-bold", "col-start-1", "col-end-3"], ["href", "/registrar-alumno", 1, "col-span-2", "col-end-7", "bg-[#1E1B44]", "flex", "items-center", "justify-center"], [1, "cursor-pointer", "text-white"], [1, "flex", "w-[100%]", "mt-[40px]", "grid"], [1, "flex", "w-[100%]", "flex-col"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], [1, "h-[370px]", "overflow-y-auto"], [1, "mat-elevation-z8", "flex", "w-[100%]"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "apellidos"], ["matColumnDef", "dni"], ["matColumnDef", "fecha_nacimiento"], ["matColumnDef", "grado"], ["matColumnDef", "apoderado"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function InternaEstudiantesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275element(1, "app-barra-superior");
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-menu-desplegable");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
      \u0275\u0275text(10, "ESTUDIANTES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 9)(12, "button", 10);
      \u0275\u0275text(13, "Registrar Estudiante");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "mat-form-field")(17, "mat-label");
      \u0275\u0275text(18, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 13, 0);
      \u0275\u0275listener("keyup", function InternaEstudiantesComponent_Template_input_keyup_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilter($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "mat-paginator", 14);
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "table", 17);
      \u0275\u0275elementContainerStart(25, 18);
      \u0275\u0275template(26, InternaEstudiantesComponent_th_26_Template, 2, 0, "th", 19)(27, InternaEstudiantesComponent_td_27_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(28, 21);
      \u0275\u0275template(29, InternaEstudiantesComponent_th_29_Template, 2, 0, "th", 19)(30, InternaEstudiantesComponent_td_30_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(31, 22);
      \u0275\u0275template(32, InternaEstudiantesComponent_th_32_Template, 2, 0, "th", 19)(33, InternaEstudiantesComponent_td_33_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(34, 23);
      \u0275\u0275template(35, InternaEstudiantesComponent_th_35_Template, 2, 0, "th", 19)(36, InternaEstudiantesComponent_td_36_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(37, 24);
      \u0275\u0275template(38, InternaEstudiantesComponent_th_38_Template, 2, 0, "th", 19)(39, InternaEstudiantesComponent_td_39_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(40, 25);
      \u0275\u0275template(41, InternaEstudiantesComponent_th_41_Template, 2, 0, "th", 19)(42, InternaEstudiantesComponent_td_42_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(43, 26);
      \u0275\u0275template(44, InternaEstudiantesComponent_th_44_Template, 2, 0, "th", 19)(45, InternaEstudiantesComponent_td_45_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(46, InternaEstudiantesComponent_tr_46_Template, 1, 0, "tr", 27)(47, InternaEstudiantesComponent_tr_47_Template, 1, 0, "tr", 28);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("dataSource", ctx.dataSource);
      \u0275\u0275advance(22);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
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
    MatPaginatorModule,
    MatPaginator
  ], styles: ["\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%] {\n  width: 25%;\n}\n/*# sourceMappingURL=interna-estudiantes.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternaEstudiantesComponent, [{
    type: Component,
    args: [{ selector: "app-interna-estudiantes", standalone: true, imports: [
      MenuDesplegableComponent,
      BarraSuperiorComponent,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule
    ], template: '<section class="contenedor w-full h-screen overflow-hidden relative">\r\n    <app-barra-superior></app-barra-superior>\r\n\r\n    <div class="flex">\r\n        <app-menu-desplegable>\r\n        </app-menu-desplegable>\r\n\r\n        <div class="flex h-screen w-full bg-[#DBE0E6]  flex items-center justify-center">\r\n            <div class=" bg-[#F6F5FF] w-[950px]">\r\n                <div class="m-[20px]">\r\n                    <div class="flex flex-row">\r\n                        <div class="grid grid-cols-6 gap-4">\r\n                    <p class=" text-[48px] font-bold col-start-1 col-end-3">ESTUDIANTES</p>\r\n                    <a href="/registrar-alumno" class="col-span-2 col-end-7 bg-[#1E1B44] flex items-center justify-center">\r\n                        <button class="cursor-pointer text-white">Registrar Estudiante</button>\r\n                    </a>\r\n                    </div>\r\n                    </div>\r\n                    <div class="flex w-[100%] mt-[40px] grid ">\r\n                        <div class="flex w-[100%] flex-col">\r\n                            <mat-form-field>\r\n                                <mat-label>Filter</mat-label>\r\n                                <input matInput (keyup)="applyFilter($event)" placeholder="Ex. Mia" #input>\r\n                            </mat-form-field>\r\n\r\n                            <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"\r\n                                aria-label="Select page of users"></mat-paginator>\r\n                            <div class="h-[370px] overflow-y-auto">\r\n                                <div class="mat-elevation-z8  flex w-[100%]">\r\n                                    <table mat-table [dataSource]="dataSource" matSort>\r\n\r\n                                        <ng-container matColumnDef="id">\r\n                                            <th mat-header-cell *matHeaderCellDef> ID </th>\r\n                                            <td mat-cell *matCellDef="let row"> {{ row.id }} </td>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container matColumnDef="nombre">\r\n                                            <th mat-header-cell *matHeaderCellDef> Nombre </th>\r\n                                            <td mat-cell *matCellDef="let row"> {{ row.nombre }} </td>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container matColumnDef="apellidos">\r\n                                            <th mat-header-cell *matHeaderCellDef> Apellidos </th>\r\n                                            <td mat-cell *matCellDef="let row"> {{ row.apellidos }} </td>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container matColumnDef="dni">\r\n                                            <th mat-header-cell *matHeaderCellDef> DNI </th>\r\n                                            <td mat-cell *matCellDef="let row"> {{ row.dni }} </td>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container matColumnDef="fecha_nacimiento">\r\n                                            <th mat-header-cell *matHeaderCellDef> Fecha Nacimiento </th>\r\n                                            <td mat-cell *matCellDef="let row"> {{ row.fecha_nacimiento }} </td>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container matColumnDef="grado">\r\n                                            <th mat-header-cell *matHeaderCellDef> Grado </th>\r\n                                            <td mat-cell *matCellDef="let row"> {{ row.grado }} </td>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container matColumnDef="apoderado">\r\n                                            <th mat-header-cell *matHeaderCellDef> Apoderado </th>\r\n                                            <td mat-cell *matCellDef="let row"> {{ row.apoderado }} </td>\r\n                                        </ng-container>\r\n\r\n                                        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n                                        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n\r\n\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</section>', styles: ["/* src/app/views/interna-estudiantes/interna-estudiantes.component.css */\ntable {\n  width: 100%;\n}\n.mat-mdc-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ntd,\nth {\n  width: 25%;\n}\n/*# sourceMappingURL=interna-estudiantes.component.css.map */\n"] }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternaEstudiantesComponent, { className: "InternaEstudiantesComponent", filePath: "src/app/views/interna-estudiantes/interna-estudiantes.component.ts", lineNumber: 33 });
})();
export {
  InternaEstudiantesComponent
};
//# sourceMappingURL=chunk-7IGRB5ZR.js.map
