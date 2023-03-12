import { Tech } from './Tech';

export interface Project {
  name: string;
  path: string;
  live: string;
  repo: string;
  desc: string;
  laptopIMG: string;
  phoneIMG?: string;
  tabletIMG?: string;
  tech: Tech;
}
