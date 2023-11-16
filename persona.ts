import { IBusinessProcessUsecase } from ".";

abstract class Persona implements IBusinessProcessUsecase {
  private regional: string;
  private witel: string;
  private division: string;
  private segment: string;

  constructor(regional: string, witel: string, division: string, segment: string) {
    this.regional = regional;
    this.witel = witel;
    this.division = division;
    this.segment = segment;
  }

  abstract getQueryAssisted(): string

  abstract getQuerySelfService(): string 
  
  getRegional(): string {
    return this.regional;
  }
  
  getWitel(): string {
    return this.witel;
  }
  
  getDivision(): string {
    return this.division;
  }
  
  getSegment(): string {
    return this.segment;
  }

}

export { Persona }