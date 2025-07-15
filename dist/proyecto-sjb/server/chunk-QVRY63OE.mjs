import './polyfills.server.mjs';
import {
  Router
} from "./chunk-WBUDT5E6.mjs";
import {
  MatIcon,
  MatIconModule
} from "./chunk-WGNNXXNP.mjs";
import "./chunk-VCVAT64W.mjs";
import {
  createClient,
  module_exports
} from "./chunk-E6O6SMPR.mjs";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RS6UHU6O.mjs";
import {
  CommonModule,
  NgIf
} from "./chunk-4QA35CCS.mjs";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CXI63PX7.mjs";
import "./chunk-T7QLZL5O.mjs";
import {
  __async
} from "./chunk-DFQCVRK3.mjs";

// src/app/views/registrate/registrate.component.ts
function RegistrateComponent_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Correo inv\xE1lido (debe contener @ y .com) ");
    \u0275\u0275elementEnd();
  }
}
function RegistrateComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " La contrase\xF1a debe tener al menos 8 caracteres, una may\xFAscula y un car\xE1cter especial. ");
    \u0275\u0275elementEnd();
  }
}
function RegistrateComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Las contrase\xF1as no coinciden. ");
    \u0275\u0275elementEnd();
  }
}
var supabase = createClient("https://fgfmtlvmpmiudjbufrjb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA");
var RegistrateComponent = class _RegistrateComponent {
  fb;
  hidePassword = true;
  hideConfirm = true;
  registerForm;
  router = inject(Router);
  constructor(fb) {
    this.fb = fb;
    this.registerForm = this.fb.group({
      correo: ["", [Validators.required, Validators.email, Validators.pattern(/@.*\.com$/)]],
      contrase\u00F1a: ["", [Validators.required, this.passwordValidator]],
      confirmarContrase\u00F1a: ["", Validators.required]
    }, { validators: this.matchPasswords });
  }
  passwordValidator(control) {
    const value = control.value || "";
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasMinLength = value.length >= 8;
    return hasUpperCase && hasSpecialChar && hasMinLength ? null : { passwordStrength: true };
  }
  matchPasswords(group) {
    const pass = group.get("contrase\xF1a")?.value;
    const confirm = group.get("confirmarContrase\xF1a")?.value;
    return pass === confirm ? null : { passwordsDontMatch: true };
  }
  registrarUsuario() {
    return __async(this, null, function* () {
      if (this.registerForm.invalid) {
        alert("#########Formulario inv\xE1lido");
        return;
      }
      const { correo, contrase\u00F1a } = this.registerForm.value;
      const { error } = yield supabase.from("usuarios").insert([
        {
          email: correo,
          password_hash: contrase\u00F1a
        }
      ]);
      if (error) {
        alert("#########Error al registrar: " + error.message);
      } else {
        alert("#########Usuario registrado correctamente");
        this.registerForm.reset();
        Object.keys(this.registerForm.controls).forEach((key) => {
          this.registerForm.get(key)?.setErrors(null);
        });
        this.router.navigateByUrl("/");
      }
    });
  }
  static \u0275fac = function RegistrateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrateComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrateComponent, selectors: [["app-registrate"]], decls: 26, vars: 9, consts: [[1, "h-screen", "flex", "items-center", "justify-center", "bg-gray-100"], [1, "w-full", "max-w-md", "p-8", "bg-white", "rounded-xl", "shadow-lg"], ["autocomplete", "off", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-full", "mb-6"], ["matInput", "", "formControlName", "correo", "autocomplete", "off"], [4, "ngIf"], ["matInput", "", "formControlName", "contrase\xF1a", "autocomplete", "new-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "confirmarContrase\xF1a", "autocomplete", "new-password", 3, "type"], ["mat-raised-button", "", "color", "primary", 1, "w-full", "py-3", "text-lg", "font-semibold", 3, "disabled"]], template: function RegistrateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "form", 2);
      \u0275\u0275listener("ngSubmit", function RegistrateComponent_Template_form_ngSubmit_2_listener() {
        return ctx.registrarUsuario();
      });
      \u0275\u0275elementStart(3, "mat-label");
      \u0275\u0275text(4, "Correo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-form-field", 3);
      \u0275\u0275element(6, "input", 4);
      \u0275\u0275template(7, RegistrateComponent_mat_error_7_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-label");
      \u0275\u0275text(9, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-form-field", 3);
      \u0275\u0275element(11, "input", 6);
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function RegistrateComponent_Template_button_click_12_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementStart(13, "mat-icon");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, RegistrateComponent_mat_error_15_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-label");
      \u0275\u0275text(17, "Confirmar contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-form-field", 3);
      \u0275\u0275element(19, "input", 8);
      \u0275\u0275elementStart(20, "button", 7);
      \u0275\u0275listener("click", function RegistrateComponent_Template_button_click_20_listener() {
        return ctx.hideConfirm = !ctx.hideConfirm;
      });
      \u0275\u0275elementStart(21, "mat-icon");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, RegistrateComponent_mat_error_23_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 9);
      \u0275\u0275text(25, " Registrarse ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_4_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_1_0 = ctx.registerForm.get("correo")) == null ? null : tmp_1_0.hasError("pattern"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.registerForm.get("contrase\xF1a")) == null ? null : tmp_4_0.hasError("passwordStrength"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hideConfirm ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hideConfirm ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordsDontMatch"]);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.registerForm.invalid);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatIconModule, MatIcon, MatButtonModule, MatButton, MatIconButton], styles: ["\n\n.mat-input-element[_ngcontent-%COMP%] {\n  padding: 1rem 0 !important;\n  font-size: 1.1rem;\n}\n.mat-form-field-infix[_ngcontent-%COMP%] {\n  min-height: 3.5rem !important;\n}\n/*# sourceMappingURL=registrate.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrateComponent, [{
    type: Component,
    args: [{ selector: "app-registrate", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule
    ], template: `<div class="h-screen flex items-center justify-center bg-gray-100">\r
    <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">\r
        <form [formGroup]="registerForm" (ngSubmit)="registrarUsuario()" autocomplete="off">\r
\r
            <!-- Correo -->\r
            <mat-label>Correo</mat-label>\r
            <mat-form-field appearance="outline" class="w-full mb-6">\r
\r
                <input matInput formControlName="correo" autocomplete="off" />\r
                <mat-error *ngIf="registerForm.get('correo')?.hasError('pattern')">\r
                    Correo inv\xE1lido (debe contener &#64; y .com)\r
                </mat-error>\r
            </mat-form-field>\r
\r
            <!-- Contrase\xF1a -->\r
            <mat-label>Contrase\xF1a</mat-label>\r
            <mat-form-field appearance="outline" class="w-full mb-6">\r
\r
                <input matInput [type]="hidePassword ? 'password' : 'text'" formControlName="contrase\xF1a"\r
                    autocomplete="new-password" />\r
                <button mat-icon-button matSuffix type="button" (click)="hidePassword = !hidePassword">\r
                    <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>\r
                </button>\r
                <mat-error *ngIf="registerForm.get('contrase\xF1a')?.hasError('passwordStrength')">\r
                    La contrase\xF1a debe tener al menos 8 caracteres, una may\xFAscula y un car\xE1cter especial.\r
                </mat-error>\r
            </mat-form-field>\r
\r
            <!-- Confirmar contrase\xF1a -->\r
            <mat-label>Confirmar contrase\xF1a</mat-label>\r
            <mat-form-field appearance="outline" class="w-full mb-6">\r
\r
                <input matInput [type]="hideConfirm ? 'password' : 'text'" formControlName="confirmarContrase\xF1a"\r
                    autocomplete="new-password" />\r
                <button mat-icon-button matSuffix type="button" (click)="hideConfirm = !hideConfirm">\r
                    <mat-icon>{{ hideConfirm ? 'visibility_off' : 'visibility' }}</mat-icon>\r
                </button>\r
                <mat-error *ngIf="registerForm.errors?.['passwordsDontMatch']">\r
                    Las contrase\xF1as no coinciden.\r
                </mat-error>\r
            </mat-form-field>\r
\r
            <!-- Bot\xF3n -->\r
            <button mat-raised-button color="primary" class="w-full py-3 text-lg font-semibold"\r
                [disabled]="registerForm.invalid">\r
                Registrarse\r
            </button>\r
        </form>\r
    </div>\r
</div>`, styles: ["/* src/app/views/registrate/registrate.component.css */\n.mat-input-element {\n  padding: 1rem 0 !important;\n  font-size: 1.1rem;\n}\n.mat-form-field-infix {\n  min-height: 3.5rem !important;\n}\n/*# sourceMappingURL=registrate.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrateComponent, { className: "RegistrateComponent", filePath: "src/app/views/registrate/registrate.component.ts", lineNumber: 38 });
})();
export {
  RegistrateComponent
};
//# sourceMappingURL=chunk-QVRY63OE.mjs.map
