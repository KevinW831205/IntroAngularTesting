import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';


import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [NavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a link that points to todos page', () => {

    const fixture = TestBed.createComponent(NavComponent);
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let hasRouterLink: boolean;
    debugElements.findIndex(de => {
      console.log(de)

      console.log(de.attributes.routerLink === 'todos')
      hasRouterLink = de.attributes.routerLink === 'todos'
    });

    expect(hasRouterLink).toBeTruthy();

  })
});
