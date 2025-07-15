import {
  BarraSuperiorComponent,
  MenuDesplegableComponent
} from "./chunk-CXIZGAJW.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-LD5KS7JM.js";
import "./chunk-NUWPPFEP.js";

// src/app/views/inicio-control-pagos/inicio-control-pagos.component.ts
var InicioControlPagosComponent = class _InicioControlPagosComponent {
  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
  static \u0275fac = function InicioControlPagosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InicioControlPagosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InicioControlPagosComponent, selectors: [["app-inicio-control-pagos"]], decls: 28, vars: 0, consts: [[1, "contenedor", "w-full", "h-screen", "overflow-hidden", "relative"], [1, "flex"], [1, "flex", "h-screen", "w-full", "bg-[#DBE0E6]", "flex", "items-center", "justify-center"], [1, "bg-[#F6F5FF]", "w-[750px]"], [1, "m-[20px]"], [1, "border-b-4", "divide-[#434054]", "text-[48px]", "font-bold"], [1, "flex", "justify-center", "mt-[40px]"], [1, "text-[20px]", "text-center"], [1, "flex", "justify-between", "mt-[40px]", "mb-[40px]"], ["href", "", 1, "flex", "bg-[#5F4BD8]", "rounded-xl", "w-[200px]", "h-[200px]", "grid", "justify-center", "items-center"], [1, "flex", "justify-center", "items-center", "h-full", "mt-[15px]"], ["src", "assets/img/estudiantes.png", 1, "w-[110px]"], [1, "flex", "justify-center", "text-[20px]", "text-white"], ["href", "", 1, "flex", "bg-[#4070F4]", "rounded-xl", "w-[200px]", "h-[200px]", "grid", "justify-center", "items-center"], ["src", "assets/img/pensiones.png", 1, ""], ["href", "", 1, "flex", "bg-[#90A4FB]", "rounded-xl", "w-[200px]", "h-[200px]", "grid", "justify-center", "items-center"], ["src", "assets/img/reportes.png", 1, "w-[70px]"]], template: function InicioControlPagosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "app-barra-superior");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-menu-desplegable");
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "p", 5);
      \u0275\u0275text(8, "PANEL DE CONTROL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
      \u0275\u0275text(11, " Bienvenido! Accediste al Sistema Control de pagos de matr\xEDculas y mensualidades ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "a", 9)(14, "div", 10);
      \u0275\u0275element(15, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 12);
      \u0275\u0275text(17, " Estudiantes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "a", 13)(19, "div", 10);
      \u0275\u0275element(20, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p", 12);
      \u0275\u0275text(22, " Pensiones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "a", 15)(24, "div", 10);
      \u0275\u0275element(25, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 12);
      \u0275\u0275text(27, " Reportes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [MenuDesplegableComponent, BarraSuperiorComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InicioControlPagosComponent, [{
    type: Component,
    args: [{ selector: "app-inicio-control-pagos", imports: [MenuDesplegableComponent, BarraSuperiorComponent], template: '<section class="contenedor w-full h-screen overflow-hidden relative">\r\n    <app-barra-superior></app-barra-superior>\r\n\r\n    <div class="flex">\r\n        <app-menu-desplegable>\r\n        </app-menu-desplegable>\r\n\r\n        <div class="flex h-screen w-full bg-[#DBE0E6]  flex items-center justify-center">\r\n            <div class=" bg-[#F6F5FF] w-[750px]">\r\n                <div class="m-[20px]">\r\n                    <p class="border-b-4 divide-[#434054] text-[48px] font-bold">PANEL DE CONTROL</p>\r\n                    <div class="flex justify-center mt-[40px]">\r\n                        <p class="text-[20px] text-center">\r\n                            Bienvenido! Accediste al Sistema Control\r\n                            de pagos de matr\xEDculas y mensualidades\r\n                        </p>\r\n\r\n                    </div>\r\n\r\n                    <div class="flex justify-between mt-[40px] mb-[40px]">\r\n\r\n                        <a href=""\r\n                            class="flex bg-[#5F4BD8] rounded-xl w-[200px] h-[200px] grid justify-center items-center">\r\n                            <div class="flex justify-center items-center h-full mt-[15px]">\r\n                                <img src="assets/img/estudiantes.png" class="w-[110px]">\r\n                            </div>\r\n                            <p class="flex justify-center text-[20px] text-white"> Estudiantes</p>\r\n\r\n                        </a>\r\n\r\n                        <a href=""\r\n                            class="flex bg-[#4070F4] rounded-xl w-[200px] h-[200px] grid justify-center items-center">\r\n                            <div class="flex justify-center items-center h-full mt-[15px]">\r\n                                <img src="assets/img/pensiones.png" class="">\r\n                            </div>\r\n                            <p class="flex justify-center text-[20px] text-white"> Pensiones</p>\r\n\r\n                        </a>\r\n\r\n                        <a href=""\r\n                            class="flex bg-[#90A4FB] rounded-xl w-[200px] h-[200px] grid justify-center items-center">\r\n                            <div class="flex justify-center items-center h-full mt-[15px]">\r\n                                <img src="assets/img/reportes.png" class="w-[70px]">\r\n                            </div>\r\n                            <p class="flex justify-center text-[20px] text-white"> Reportes</p>\r\n\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</section>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InicioControlPagosComponent, { className: "InicioControlPagosComponent", filePath: "src/app/views/inicio-control-pagos/inicio-control-pagos.component.ts", lineNumber: 11 });
})();
export {
  InicioControlPagosComponent
};
//# sourceMappingURL=chunk-OUJPHC3N.js.map
