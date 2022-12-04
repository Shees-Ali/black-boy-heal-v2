import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardWorkbookBoxComponent } from './dashboard-workbook-box.component';

describe('DashboardWorkbookBoxComponent', () => {
  let component: DashboardWorkbookBoxComponent;
  let fixture: ComponentFixture<DashboardWorkbookBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWorkbookBoxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardWorkbookBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
