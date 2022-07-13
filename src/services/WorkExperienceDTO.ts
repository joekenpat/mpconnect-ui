export interface IUserWorkExperienceDTO {
  id: null | number;
  job_title: null | string;
  employer_name: null | string;
  industry: null | string;
  hands_on_technology: string[];
  start_month: null | string;
  start_year: null | string;
  end_month: null | string;
  end_year: null | string;
  is_current_role: false ;
  description: string;
}

export interface IUserWorkExperienceErrorsDTO {
  id: string[];
  job_title: string[];
  employer_name: string[];
  industry: string[];
  hands_on_technology: string[];
  start_month: string[];
  start_year: string[];
  end_month: string[];
  end_year: string[];
  is_current_role: string[];
  description: string[];
}

export class UserWorkExperienceDTO implements IUserWorkExperienceDTO {
  id: null | number;
  job_title: null | string;
  employer_name: null | string;
  industry: null | string;
  hands_on_technology: string[] = [];
  start_month: null | string;
  start_year: null | string;
  end_month: null | string;
  end_year: null | string;
  is_current_role: false ;
  description: string;

  constructor(data: IUserWorkExperienceDTO) {
    this.id = data.id;
    this.job_title = data.job_title;
    this.employer_name = data.employer_name;
    this.industry = data.industry;
    this.hands_on_technology = data.hands_on_technology
      ? data.hands_on_technology
      : [];
    this.start_month = data.start_month;
    this.start_year = data.start_year;
    this.end_month = data.end_month;
    this.end_year = data.end_year;
    this.is_current_role = data.is_current_role;
    this.description = data.description;
  }
}

export const EmptyUserWorkExperienceDTO = () => new UserWorkExperienceDTO({
  id: null,
  job_title: "",
  employer_name: "",
  industry: "",
  hands_on_technology: [],
  start_month: "",
  start_year: "",
  end_month: "",
  end_year: "",
  is_current_role: false,
  description: "",
});
