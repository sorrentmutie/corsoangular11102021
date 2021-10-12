import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroReactiveTemplatePageComponent } from './hero-reactive-template-page.component';

describe('HeroReactiveTemplatePageComponent', () => {
  let component: HeroReactiveTemplatePageComponent;
  let fixture: ComponentFixture<HeroReactiveTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroReactiveTemplatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroReactiveTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
