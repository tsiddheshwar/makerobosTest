import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainYourBotComponent } from './train-your-bot.component';

describe('TrainYourBotComponent', () => {
  let component: TrainYourBotComponent;
  let fixture: ComponentFixture<TrainYourBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainYourBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainYourBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
