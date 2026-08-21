export interface DownloadPlatform {
  id: string;
  name: string;
  architecture: string;
  platformCategory: 'macos-m' | 'macos-intel' | 'windows' | 'chrome';
  fileFormat: string;
  fileSize?: string;
  version: string;
  status: 'available' | 'coming_soon';
  releaseDate?: string;
  requirements: string;
  checksum?: string;
  downloadUrl?: string;
  iconType: 'apple' | 'windows' | 'chrome';
  features: string[];
}

export interface UpcomingFeature {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconName: string;
  supportedFormats: string[];
  status: 'In Development' | 'Planned' | 'Alpha Testing';
  highlight?: boolean;
}

export interface SampleVideo {
  id: string;
  title: string;
  platform: 'Instagram' | 'Facebook' | 'Pinterest' | 'Universal Web' | 'Vimeo' | 'TikTok';
  originalUrl: string;
  duration: string;
  thumbnail: string;
  resolution: string;
  fileSize: string;
  streams: {
    quality: string;
    format: string;
    size: string;
    bitrate: string;
    hasAudio: boolean;
  }[];
}
