export interface IFile {
    type: string;
    size?: string;
    modifiedDate: string;
    children?: Record<string, File>;
  }