// Chameleon
import { defineCustomElements } from '@genexus/chameleon-controls-library/loader';
import { registryProperty } from '@genexus/chameleon-controls-library/dist/collection';
// Mercury
import { getImagePathCallbackDefinitions } from '@genexus/mercury/assets-manager.js';
import { registerMercury } from '@genexus/mercury/register-mercury.js';

// Register the default value for the getImagePathCallback property in all Chameleon
// components. This implementation allows us to remove the need for binding the
// getImagePathCallback property in all Chameleon controls that must render icons.
registryProperty('getImagePathCallback', getImagePathCallbackDefinitions);

// It registers a mapping between the icons metadata and its path.
registerMercury();
defineCustomElements(window); // ?

// Angular
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
