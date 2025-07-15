import {
  RouterOutlet,
  provideRouter
} from "./chunk-PJSLU5CN.js";
import {
  bootstrapApplication
} from "./chunk-ZQUYWEGM.js";
import "./chunk-ZY6ND4LP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-LD5KS7JM.js";
import {
  __spreadValues
} from "./chunk-NUWPPFEP.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet></router-outlet>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 25 });
})();

// src/app/app.routes.ts
var routes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-CXBQ7JUC.js").then((m) => m.LoginComponent)
  }, false ? { \u0275entryName: "src/app/views/login/login.component.ts" } : {}),
  __spreadValues({
    path: "inicio-control-de-pagos",
    loadComponent: () => import("./chunk-OUJPHC3N.js").then((m) => m.InicioControlPagosComponent)
  }, false ? { \u0275entryName: "src/app/views/inicio-control-pagos/inicio-control-pagos.component.ts" } : {}),
  __spreadValues({
    path: "estudiantes",
    loadComponent: () => import("./chunk-7IGRB5ZR.js").then((m) => m.InternaEstudiantesComponent)
  }, false ? { \u0275entryName: "src/app/views/interna-estudiantes/interna-estudiantes.component.ts" } : {}),
  __spreadValues({
    path: "mensualidades",
    loadComponent: () => import("./chunk-CLU5KZC5.js").then((m) => m.PagoMensualidadesComponent)
  }, false ? { \u0275entryName: "src/app/views/pago-mensualidades/pago-mensualidades.component.ts" } : {}),
  __spreadValues({
    path: "matriculas",
    loadComponent: () => import("./chunk-CLTCLQKY.js").then((m) => m.PagoMatriculasComponent)
  }, false ? { \u0275entryName: "src/app/views/pago-matriculas/pago-matriculas.component.ts" } : {}),
  __spreadValues({
    path: "reportes",
    loadComponent: () => import("./chunk-QW4TX5KY.js").then((m) => m.ReportesComponent)
  }, false ? { \u0275entryName: "src/app/views/reportes/reportes.component.ts" } : {}),
  __spreadValues({
    path: "registrate",
    loadComponent: () => import("./chunk-LPNSFTU7.js").then((m) => m.RegistrateComponent)
  }, false ? { \u0275entryName: "src/app/views/registrate/registrate.component.ts" } : {}),
  __spreadValues({
    path: "registrar-alumno",
    loadComponent: () => import("./chunk-CSOQ62T3.js").then((m) => m.EstudiantesComponent)
  }, false ? { \u0275entryName: "src/app/views/registros-tablas/estudiantes/estudiantes.component.ts" } : {})
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
//# sourceMappingURL=main.js.map
