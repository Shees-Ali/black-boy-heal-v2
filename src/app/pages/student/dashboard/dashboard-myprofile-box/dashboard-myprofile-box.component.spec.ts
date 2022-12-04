import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardMyprofileBoxComponent } from './dashboard-myprofile-box.component';

describe('DashboardMyprofileBoxComponent', () => {
  let component: DashboardMyprofileBoxComponent;
  let fixture: ComponentFixture<DashboardMyprofileBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMyprofileBoxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMyprofileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
