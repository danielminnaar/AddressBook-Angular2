import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import 'rxjs/add/operator/do';
platformBrowserDynamic().bootstrapModule(AppModule);
