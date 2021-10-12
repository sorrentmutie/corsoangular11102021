import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTemplatePageComponent } from './hero-template-page.component';

describe('HeroTemplatePageComponent', () => {
  let component: HeroTemplatePageComponent;
  let fixture: ComponentFixture<HeroTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTemplatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
