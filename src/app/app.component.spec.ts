import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([])
            ],
            declarations: [
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
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



});
