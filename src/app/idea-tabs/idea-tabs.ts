import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; 
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-idea-tabs',
  imports: [MatTableModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './idea-tabs.html',
  styleUrl: './idea-tabs.scss',
})
export class IdeaTabs {
  displayedColumns = [
    'rtiUid',
    'uid',
    'franchise',
    'ta',
    'brand',
    'productType',
    'project',
    'claim',
    'status',
    'actions',
  ];
  data = [
    {
      rtiUid: '26-CL002',
      uid: 'CL01',
      franchise: 'Contact Lens',
      ta: 'VC - Contact lens',
      brand: 'DAILIES',
      productType: 'Strategic Existing Product',
      project: 'DAILIES TOTAL1 Sphere',
      claim: 'TAC: Max wearers agree they could wear DTI lenses...',
      status: 'Need Info',
    },
    {
      rtiUid: '26-CL002',
      uid: 'CL01',
      franchise: 'Contact Lens',
      ta: 'VC - Contact lens',
      brand: 'DAILIES',
      productType: 'Strategic Existing Product',
      project: 'DAILIES TOTAL1 Sphere',
      claim: 'TAC: Max wearers agree they could wear DTI lenses...',
      status: 'Need Info',
    },
    {
      rtiUid: '26-CL002',
      uid: 'CL01',
      franchise: 'Contact Lens',
      ta: 'VC - Contact lens',
      brand: 'DAILIES',
      productType: 'Strategic Existing Product',
      project: 'DAILIES TOTAL1 Sphere',
      claim: 'TAC: Max wearers agree they could wear DTI lenses...',
      status: 'Need Info',
    },
    {
      rtiUid: '26-CL002',
      uid: 'CL01',
      franchise: 'Contact Lens',
      ta: 'VC - Contact lens',
      brand: 'DAILIES',
      productType: 'Strategic Existing Product',
      project: 'DAILIES TOTAL1 Sphere',
      claim: 'TAC: Max wearers agree they could wear DTI lenses...',
      status: 'Need Info',
    },
    {
      rtiUid: '26-CL002',
      uid: 'CL01',
      franchise: 'Contact Lens',
      ta: 'VC - Contact lens',
      brand: 'DAILIES',
      productType: 'Strategic Existing Product',
      project: 'DAILIES TOTAL1 Sphere',
      claim: 'TAC: Max wearers agree they could wear DTI lenses...',
      status: 'Need Info',
    },
    {
      rtiUid: '26-CL002',
      uid: 'CL01',
      franchise: 'Contact Lens',
      ta: 'VC - Contact lens',
      brand: 'DAILIES',
      productType: 'Strategic Existing Product',
      project: 'DAILIES TOTAL1 Sphere',
      claim: 'TAC: Max wearers agree they could wear DTI lenses...',
      status: 'Need Info',
    },
    // more rows...
  ];
}
