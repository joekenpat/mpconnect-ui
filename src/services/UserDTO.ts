export interface ILanguageWithFluency {
  name: string;
  fluency: string;
}

export interface IAuthUserDTO {
  email: string;
  auth_token: string;
}

export class AuthUserDTO implements IAuthUserDTO {
  email: string;
  auth_token: string;

  constructor(data: IAuthUserDTO) {
    this.email = data.email;
    this.auth_token = data.auth_token;
  }
}

export interface IUserPersonalInfoDTO {
  id: number;
  first_name: null | string;
  last_name: null | string;
  profile_image: null | string;
  gender: null | string;
  nationality: null | string;
  current_address: null | string;
  mobile_phone: null | string;
  fixed_phone: null | string;
  years_of_work_experience: null | string;
  countries_of_work_experience: null | string;
  hands_on_technology: string[];
  utm_medium: null | string;
  name_of_professional: null | string;
  languages: ILanguageWithFluency[];
  date_of_birth: null | string;
}

export class UserPersonalInfoDTO implements IUserPersonalInfoDTO {
  id: number;
  first_name: null | string;
  last_name: null | string;
  profile_image: null | string;
  gender: null | string;
  nationality: null | string;
  current_address: null | string;
  mobile_phone: null | string;
  fixed_phone: null | string;
  years_of_work_experience: null | string;
  countries_of_work_experience: null | string;
  hands_on_technology: string[] = [];
  utm_medium: null | string;
  name_of_professional: null | string;
  languages: ILanguageWithFluency[];
  date_of_birth: null | string;
  constructor(data: IUserPersonalInfoDTO) {
    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.profile_image = data.profile_image;
    this.gender = data.gender;
    this.nationality = data.nationality;
    this.current_address = data.current_address;
    this.mobile_phone = data.mobile_phone;
    this.fixed_phone = data.fixed_phone;
    this.years_of_work_experience = data.years_of_work_experience;
    this.countries_of_work_experience = data.countries_of_work_experience;
    this.hands_on_technology = data.hands_on_technology
      ? data.hands_on_technology
      : [];
    this.utm_medium = data.utm_medium;
    this.name_of_professional = data.name_of_professional;
    this.languages = data.languages ? data.languages : [];
    this.date_of_birth = data.date_of_birth;
  }
}

export interface IUserShortBioDTO {
  id: number;
  short_bio: string;
}

export class UserShortBioDTO implements IUserShortBioDTO {
  id: number;
  short_bio: string;
  constructor(data: IUserShortBioDTO) {
    this.id = data.id;
    this.short_bio = data.short_bio;
  }
}

export interface IUserInterestDTO {
  areas_of_contribution: string[];
  topic_of_interests: string[];
}

export class UserInterestDTO implements IUserInterestDTO {
  areas_of_contribution: string[];
  topic_of_interests: string[];

  constructor(data: IUserInterestDTO) {
    this.areas_of_contribution = data.areas_of_contribution
      ? data.areas_of_contribution
      : [];
    this.topic_of_interests = data.topic_of_interests
      ? data.topic_of_interests
      : [];
  }
}
