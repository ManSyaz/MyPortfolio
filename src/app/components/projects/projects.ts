import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly featured = PROJECTS.filter((project) => project.tier === 'featured');
  readonly secondary = PROJECTS.filter((project) => project.tier === 'secondary');
}
