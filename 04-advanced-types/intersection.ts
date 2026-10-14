//  intersection types

type FileData = {
  path: string;
  content: string;
};

type DataBaseData = {
  connectionUrl: string;
  cred: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDataBaseData = Status & DataBaseData;
