import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});