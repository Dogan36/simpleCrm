import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-58224","appId":"1:205777847828:web:049320092ba0c2b88f4901","storageBucket":"simple-crm-58224.appspot.com","apiKey":"AIzaSyCwfwFfv2iH_5zFHl5xBgsrZZD_tPAJygA","authDomain":"simple-crm-58224.firebaseapp.com","messagingSenderId":"205777847828"}))), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
