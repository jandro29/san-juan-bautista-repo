import './polyfills.server.mjs';
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CXI63PX7.mjs";

// src/app/views/menu-desplegable/menu-desplegable.component.ts
var MenuDesplegableComponent = class _MenuDesplegableComponent {
  static \u0275fac = function MenuDesplegableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuDesplegableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuDesplegableComponent, selectors: [["app-menu-desplegable"]], decls: 33, vars: 0, consts: [[1, "flex", "top-0", "left-0", "h-screen", "w-64", "bg-[#1E1B44]", "text-white", "shadow-lg", "transform", "transition-transform", "duration-300", "ease-in-out", "z-10"], [1, "p-4", "w-[100%]"], [1, "space-y-2"], ["href", "/inicio-control-de-pagos", 1, "flex", "block", "hover:bg-[#302C54]", "p-2", "rounded"], [1, "mr-[10px]", "flex", "items-center"], ["src", "assets/img/panel.png", "alt", ""], ["href", "/estudiantes", 1, "flex", "block", "hover:bg-[#302C54]", "p-2", "rounded"], ["src", "assets/img/estudiantes-menu.png", "alt", ""], ["href", "/mensualidades", 1, "flex", "block", "hover:bg-[#302C54]", "p-2", "rounded"], ["src", "assets/img/pagos-mensulidades.png", "alt", ""], ["href", "/matriculas", 1, "flex", "block", "hover:bg-[#302C54]", "p-2", "rounded"], ["src", "assets/img/pagos.png", "alt", ""], ["href", "/reportes", 1, "flex", "block", "hover:bg-[#302C54]", "p-2", "rounded"], ["src", "assets/img/reportes-menu.png", "alt", ""], ["href", "/", 1, "flex", "block", "hover:bg-[#302C54]", "p-2", "rounded"], ["src", "assets/img/cerrar-sesion.png", "alt", ""]], template: function MenuDesplegableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li")(4, "a", 3)(5, "i", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Panel de Control");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "li")(9, "a", 6)(10, "i", 4);
      \u0275\u0275element(11, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Estudiantes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 8)(15, "i", 4);
      \u0275\u0275element(16, "img", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Pagos Mensualidades");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 10)(20, "i", 4);
      \u0275\u0275element(21, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Pagos Matr\xEDculas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 12)(25, "i", 4);
      \u0275\u0275element(26, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Reportes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 14)(30, "i", 4);
      \u0275\u0275element(31, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Cerrar sesion");
      \u0275\u0275elementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuDesplegableComponent, [{
    type: Component,
    args: [{ selector: "app-menu-desplegable", imports: [], standalone: true, template: '\r\n  \r\n    <!-- Men\xFA lateral -->\r\n    <div\r\n      class="flex  top-0 left-0 h-screen w-64 bg-[#1E1B44] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-10">\r\n      <div class="p-4 w-[100%]">\r\n        <!--<h2 class="text-lg font-semibold mb-4">Men\xFA</h2> -->\r\n        <ul class="space-y-2">\r\n            <li><a href="/inicio-control-de-pagos" class="flex block hover:bg-[#302C54] p-2 rounded"> <i class="mr-[10px] flex items-center"><img src="assets/img/panel.png"             alt=""></i> Panel de Control</a></li>\r\n            <li><a href="/estudiantes"             class="flex block hover:bg-[#302C54] p-2 rounded"><i class="mr-[10px] flex items-center"><img src="assets/img/estudiantes-menu.png"   alt=""></i> Estudiantes</a></li>\r\n            <li><a href="/mensualidades"           class="flex block hover:bg-[#302C54] p-2 rounded"><i class="mr-[10px] flex items-center"><img src="assets/img/pagos-mensulidades.png" alt=""></i> Pagos Mensualidades</a></li>\r\n            <li><a href="/matriculas"              class="flex block hover:bg-[#302C54] p-2 rounded"><i class="mr-[10px] flex items-center"><img src="assets/img/pagos.png"              alt=""></i> Pagos Matr\xEDculas</a></li>\r\n            <li><a href="/reportes"                class="flex block hover:bg-[#302C54] p-2 rounded"><i class="mr-[10px] flex items-center"><img src="assets/img/reportes-menu.png"      alt=""></i> Reportes</a></li>\r\n            <li><a href="/"                                     class="flex block hover:bg-[#302C54] p-2 rounded"><i class="mr-[10px] flex items-center"><img src="assets/img/cerrar-sesion.png"      alt=""></i> Cerrar sesion</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuDesplegableComponent, { className: "MenuDesplegableComponent", filePath: "src/app/views/menu-desplegable/menu-desplegable.component.ts", lineNumber: 10 });
})();

// src/app/views/barra-superior/barra-superior.component.ts
var BarraSuperiorComponent = class _BarraSuperiorComponent {
  static \u0275fac = function BarraSuperiorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarraSuperiorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarraSuperiorComponent, selectors: [["app-barra-superior"]], decls: 8, vars: 0, consts: [[1, "h-[80px]", "w-full", "bg-[#302C54]", "z-20", "relative"], [1, "grid", "grid-cols-2", "h-full", "mx-[20px]", "text-white"], [1, "flex", "items-center"], [1, "ml-2", "text-white", "text-[48px]", "font-bold"], [1, "flex", "items-center", "justify-end"]], template: function BarraSuperiorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4, "S.J.B");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Usuario");
      \u0275\u0275elementEnd()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarraSuperiorComponent, [{
    type: Component,
    args: [{ selector: "app-barra-superior", imports: [], template: '  <!--  --> <!--  --> <!--  --> <!--  -->\r\n    <!--  --> <!--  --> <!--  --> <!--  -->\r\n    <!-- Barra superior -->\r\n    <!--  --> <!--  --> <!--  --> <!--  -->\r\n    <!--  --> <!--  --> <!--  --> <!--  -->\r\n    <div class="h-[80px] w-full bg-[#302C54] z-20 relative">\r\n        <div class="grid grid-cols-2 h-full mx-[20px] text-white">\r\n            <!-- Bot\xF3n men\xFA hamburguesa -->\r\n            <div class="flex items-center">\r\n                <!--<button (click)="toggleMenu()" class="focus:outline-none">\r\n            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"\r\n              viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round"\r\n                d="M4 6h16M4 12h16M4 18h16" />\r\n            </svg>\r\n          </button>-->\r\n                <p class="ml-2 text-white text-[48px] font-bold">S.J.B</p>\r\n            </div>\r\n            <div class="flex items-center justify-end">\r\n                <p>Usuario</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarraSuperiorComponent, { className: "BarraSuperiorComponent", filePath: "src/app/views/barra-superior/barra-superior.component.ts", lineNumber: 9 });
})();

export {
  MenuDesplegableComponent,
  BarraSuperiorComponent
};
//# sourceMappingURL=chunk-RBLOAEOH.mjs.map
