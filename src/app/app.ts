import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Achievements } from './components/achievements/achievements';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { CvPreviewModal } from './components/cv-preview-modal/cv-preview-modal';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Experience, Projects, Achievements, Contact, Footer, CvPreviewModal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
