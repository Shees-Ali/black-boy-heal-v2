import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardFindTherapistBoxComponent } from './dashboard-find-therapist-box.component';

describe('DashboardFindTherapistBoxComponent', () => {
  let component: DashboardFindTherapistBoxComponent;
  let fixture: ComponentFixture<DashboardFindTherapistBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFindTherapistBoxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardFindTherapistBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
