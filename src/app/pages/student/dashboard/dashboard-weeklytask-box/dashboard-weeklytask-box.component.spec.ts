import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardWeeklytaskBoxComponent } from './dashboard-weeklytask-box.component';

describe('DashboardWeeklytaskBoxComponent', () => {
  let component: DashboardWeeklytaskBoxComponent;
  let fixture: ComponentFixture<DashboardWeeklytaskBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWeeklytaskBoxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardWeeklytaskBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
