import { IBusinessProcessUsecase } from ".";
import { Persona } from "./persona";

class BusinessSupporter extends Persona implements IBusinessProcessUsecase {

  constructor(regional: string, witel: string, division: string, segment: string) {
    super(regional, witel, division, segment);
  }
  getQueryAssisted(): string {
    console.log(this.getDivision())
    console.log(this.getRegional())
    console.log(this.getWitel())
    console.log(this.getSegment())
    return "query assisted bisnis supporter"
  }
  getQuerySelfService(): string {
    return "query self services bisnis supporter"
  }

}

export { BusinessSupporter }