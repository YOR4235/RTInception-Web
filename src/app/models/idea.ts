export interface Idea {
  idea_id: string;                // uuid or custom ID
  research_pathway: string;
  rti_year: number;
  product_type: 'ATP' | 'Key Product';
  product_project: string;
  product_family: string;
  therapeutic_area: string;
  franchise: string;
  origin_request: string;
  strategic_rationale: number;
  monadic_or_comparative: string;
  target_aspirational_claim: string;
  research_proposal: string;
  launch_claim: boolean;
  ideation_comments: string;

  // Stage flags & comments
  flag_validation: boolean;
  validation_comments: string;
  flag_assessment: boolean;
  study_recommended: boolean;
  pos: number;
  pos_reasons: string;
  assessment_comments: string;
  flag_harmonization: boolean;
  rti_unique_id: string;
  harmonization_comments: string;
  flag_sear_prio: boolean;
  ranking_sear: number;
  ranking_brand: number;
  prioritization_comments_sear: string;
  prioritization_comments_brand: string;
  flag_soft_lock: boolean;
  funding_status: string;
  funding_source: string;
  flag_unlock: boolean;

  status: 'Open' | 'Pending' | 'Closed' | 'Draft' | 'Created' | 'On Hold';

  created_by: string;             // uuid
  updated_by: string;             // uuid
  created_at: string;             // ISO timestamp
  updated_at: string;             // ISO timestamp
}
