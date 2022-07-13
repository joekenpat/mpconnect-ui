export interface IUserIndustryOrSkillDTO {
  id: null | number;
  name: string;
  type: string;
}

export class UserIndustryOrSkillDTO implements IUserIndustryOrSkillDTO {
  id: null | number;
  name: string;
  type: string;

  constructor(data: IUserIndustryOrSkillDTO) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
  }
}

export const EmptyUserIndustryOrSkillDTO = (
  type: string = ""
): UserIndustryOrSkillDTO =>
  new UserIndustryOrSkillDTO({
    id: null,
    name: "",
    type,
  });
