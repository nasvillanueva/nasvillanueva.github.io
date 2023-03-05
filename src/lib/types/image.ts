export enum ImageOrientation {
  LANDSCAPE = 'landscape',
  PORTRAIT = 'portrait',
  SQUARE = 'square',
}

export interface Image {
  srcset: string;
  alt: string;
  orientation: ImageOrientation;
}
