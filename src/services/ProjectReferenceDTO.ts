export interface IUserProjectReferenceDTO {
  id: null | number;
  name_of_client: null | string;
  industry: null | string;
  functional_skills: string[];
  document_file?: File | string;
  description: string;
}

export class UserProjectReferenceDTO implements IUserProjectReferenceDTO {
  id: null | number;
  name_of_client: null | string;
  industry: null | string;
  functional_skills: string[];
  document_file?: File | string;
  description: string;

  constructor(data: IUserProjectReferenceDTO) {
    this.id = data.id;
    this.name_of_client = data.name_of_client;
    this.document_file = data.document_file;
    this.industry = data.industry;
    this.functional_skills = data.functional_skills
      ? data.functional_skills
      : [];
    this.description = data.description;
  }
}

export const EmptyUserProjectReferenceDTO = (): UserProjectReferenceDTO =>
  new UserProjectReferenceDTO({
    id: null,
    name_of_client: "",
    industry: "",
    functional_skills: [],
    document_file: undefined,
    description: "",
  });
