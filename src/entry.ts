import 'zone.js/dist/zone';
import {platformBrowser} from '@angular/platform-browser';
import {HelloWorldModule} from './hello-world.module';

platformBrowser().bootstrapModule(HelloWorldModule, {useJit: false});