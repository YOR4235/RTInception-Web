import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Idea } from '../models/idea';   
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { AddIdea } from '../ideas/idea.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addidea',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addidea.html',
  styleUrl: './addidea.scss',
})
export class Addidea implements OnInit {

  private fb = inject(FormBuilder);

  ideaForm!: FormGroup;

  products = ['DAILIES TOTAL1 Sphere', 'DAILIES TOTAL1 Multifocal'];
  researchPathways = ['Market Research', 'Clinical Study', 'Feasibility'];
  monadicOptions = ['Monadic', 'Comparative'];
  productTypes = ['ATP', 'Key Product']; 

  constructor(private store: Store<AppState>, private router: Router) {

  }


  ngOnInit(): void {
    this.ideaForm = this.fb.group({
      product: [this.products[0], Validators.required],
      researchPathway: [this.researchPathways[0], Validators.required],
      franchise: ['Contact Lens', Validators.required],
      rationale: ['Competitive Response: Deposition 1D Max Sphere', Validators.required],
      therapeutic: ['VC - Contact lens', Validators.required],
      productFamily: ['DAILIES', Validators.required],
      monadicComparative: [this.monadicOptions[0], Validators.required],
      targetClaim: ['Max wearers agree they could wear DT1 lenses X hours more and they still felt comfortable', Validators.required],
      productType: [this.productTypes[0], Validators.required],
      rtiYear: [2026, [Validators.required, Validators.min(2000)]],
      origin: ['Franchise', Validators.required],
      launchClaim: [false, Validators.required],
    });
  }

  private buildIdea(): Idea {
    const formValue = this.ideaForm.value;

    const now = new Date().toISOString();

    const idea: Idea = {
      idea_id: '8f1c2d7a-4b9e-4f3a-9d2a-7c6e1a5b3f42',
      research_pathway: formValue.researchPathway,
      rti_year: formValue.rtiYear,
      product_type: formValue.productType, // must be 'ATP' | 'Key Product'
      product_project: formValue.product,
      product_family: formValue.productFamily,
      therapeutic_area: formValue.therapeutic,
      franchise: formValue.franchise,
      origin_request: formValue.origin,
      strategic_rationale: 0, // placeholder, adjust as needed
      monadic_or_comparative: formValue.monadicComparative,
      target_aspirational_claim: formValue.targetClaim,
      research_proposal: '', // placeholder
      launch_claim: formValue.launchClaim,
      ideation_comments: '',

      // Stage flags & comments defaults
      flag_validation: false,
      validation_comments: '',
      flag_assessment: false,
      study_recommended: false,
      pos: 0,
      pos_reasons: '',
      assessment_comments: '',
      flag_harmonization: false,
      rti_unique_id: '',
      harmonization_comments: '',
      flag_sear_prio: false,
      ranking_sear: 0,
      ranking_brand: 0,
      prioritization_comments_sear: '',
      prioritization_comments_brand: '',
      flag_soft_lock: false,
      funding_status: '',
      funding_source: '',
      flag_unlock: false,

      status: 'Open',

      created_by: 'user-uuid-placeholder',
      updated_by: 'user-uuid-placeholder',
      created_at: now,
      updated_at: now,
    };

    return idea;
  }

  onSaveDraft() {
    const idea = this.buildIdea();
    idea.status = 'Draft';
    alert('Draft saved (preview):\n' + JSON.stringify(idea, null, 2));
    this.store.dispatch(AddIdea({ idea }) );
  }

  onSubmit() {
    if (this.ideaForm.invalid) {
      this.ideaForm.markAllAsTouched();
      alert('Please fill required fields');
      return;
    }
    const idea = this.buildIdea();
    idea.status = 'Created';
    console.log('Submitting idea:', idea);
    alert('Create idea submitted:\n' + JSON.stringify(idea, null, 2));
    this.store.dispatch(AddIdea({ idea }) );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
