export interface IExpertProfileDTO {
  id: null | number;
  name: null | string;
  description: string;
}

export class ExpertProfileDTO {
  id: null | number;
  name: null | string;
  description: string;

  constructor(data: IExpertProfileDTO) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
  }
}
