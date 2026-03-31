import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { TypewriterComponent } from './typewriter/typewriter.component';

@NgModule({
  declarations: [MapComponent, TypewriterComponent],
  imports: [CommonModule],
  exports: [MapComponent, TypewriterComponent],
})
export class ComponentsModule {}
