import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionEditorComponent } from './election-editor.component';

describe('ElectionEditorComponent', () => {
  let component: ElectionEditorComponent;
  let fixture: ComponentFixture<ElectionEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectionEditorComponent]
    });
    fixture = TestBed.createComponent(ElectionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
