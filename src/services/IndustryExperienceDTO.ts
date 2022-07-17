export interface IUserIndustryOrSkillDTO {
  id: null | number;
  name: string;
  type: string;
}

export interface IExpertIndustryOrSkillDTO extends IUserIndustryOrSkillDTO {
  expert_profile_id: number;
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

export class ExpertIndustryOrSkillDTO implements IExpertIndustryOrSkillDTO {
  id: null | number;
  name: string;
  type: string;
  expert_profile_id: number;

  constructor(data: IExpertIndustryOrSkillDTO) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.expert_profile_id = data.expert_profile_id;
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

export const EmptyExpertIndustryOrSkillDTO = (
  type: string = ""
): ExpertIndustryOrSkillDTO =>
  new ExpertIndustryOrSkillDTO({
    id: null,
    name: "",
    type,
    expert_profile_id: 0,
  });
