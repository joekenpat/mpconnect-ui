export interface IUserCertificationDTO {
  id: null | number;
  title: string;
  proof_file: null | string;
  new_proof_file?: File;
  description: string;
}

export class UserCertificationDTO implements IUserCertificationDTO {
  id: null | number;
  title: string;
  proof_file: null | string;
  new_proof_file?: File;
  description: string;

  constructor(data: IUserCertificationDTO) {
    this.id = data.id;
    this.title = data.title;
    this.proof_file = data.proof_file;
    this.description = data.description;
  }
}

export const EmptyUserCertificationDTO = (): IUserCertificationDTO =>
  new UserCertificationDTO({
    id: null,
    title: "",
    proof_file: "",
    new_proof_file: undefined,
    description: "",
  });
