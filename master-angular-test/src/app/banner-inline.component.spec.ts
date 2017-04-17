import {ComponentFixture, TestBed, ComponentFixtureAutoDetect, async} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {BannerComponent} from './banner-inline.component';

describe('BannerComponent', () => {
    let comp: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent],
            providers: [
                {
                    provide: ComponentFixtureAutoDetect,
                    useValue: true
                }
            ]
        }).compileComponents();



    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);
        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    })

    it('should display original title', () => {
        // fixture.detectChanges();
        expect(el.textContent).toContain(comp.title)
    })

    it("should display a different test title", () => {
        comp.title = 'Test title';
        //cannot fire auto change detect if modify component attribute directly
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    })

})
