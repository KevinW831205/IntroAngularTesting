import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';


describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([])
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have a router outlet', () => {
        const fixture = TestBed.createComponent(AppComponent);
        let de = fixture.debugElement.query(By.directive(RouterOutlet));

        expect(de).not.toBeNull();
    })

    it('should have a link that points to todos page', () => {

        const fixture = TestBed.createComponent(AppComponent);
        let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

        let hasRouterLink: boolean;
        let index = debugElements.findIndex(de => {
            console.log(de.attributes.routerLink === 'todos')

            hasRouterLink = de.attributes.routerLink === 'todos'
        });

        expect(hasRouterLink).toBeTruthy();

    })

});
