export interface Project {
  id: string
  title: string
}

export const PROJECTS: readonly Project[] = [
  { id: 'miami-shopping-mall', title: 'Miami Shopping Mall' },
  { id: 'green-residence', title: 'Green Residence' },
  { id: 'grand-theatre', title: 'Grand Theatre' },
  { id: 'villa-sevilla', title: 'Villa Sevilla' },
  { id: 'ruby-square', title: 'Ruby Square' },
  { id: 'grandre-blvd', title: 'Grandre Blvd' },
]

export const DEFAULT_PROJECT_ID = 'green-residence'
