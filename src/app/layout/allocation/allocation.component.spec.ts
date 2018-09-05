import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AllocationComponent } from './allocation.component'
import { AllocationModule } from './allocation.module'

describe('AllocationComponent', () => {
  let component: AllocationComponent
  let fixture: ComponentFixture<AllocationComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          AllocationModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
