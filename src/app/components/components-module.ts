import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { PhrasesComponent } from './phrases/phrases.component';

@NgModule({
  declarations: [MapComponent, TypewriterComponent, PhrasesComponent],
  imports: [CommonModule],
  exports: [MapComponent, TypewriterComponent, PhrasesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
