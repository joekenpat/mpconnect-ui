export interface IUserCertificationDTO {
  id: null | number;
  title: string;
  proof_file?: File | String;
  description: string;
}

export class UserCertificationDTO implements IUserCertificationDTO {
  id: null | number;
  title: string;
  proof_file?: File | String;
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
    proof_file: undefined,
    description: "",
  });
