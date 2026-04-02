import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call pathTraverse on keydown', () => {
    const spy = jest.spyOn(component.movementService, 'pathTraverse').mockReturnValue({
      row: 1,
      column: 1,
    });

    (component.grid as any).set([
      [0, 1],
      [2, 3],
    ]);
    component.position.set({ row: 0, column: 0 });

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    window.dispatchEvent(event);

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
