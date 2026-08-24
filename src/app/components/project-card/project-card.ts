import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  host: {
    '[class.is-featured]': 'featured()',
  },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly featured = input(false);
}
