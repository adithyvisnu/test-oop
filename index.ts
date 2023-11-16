import { TerritoryLeader } from "./territory_leader";
import { BusinessSupporter } from "./business_supporter";
import { PolicyMaker } from "./policy_maker";
import { SegmentLeader } from "./segment_leader";
import { Persona } from "./persona";

export interface IBusinessProcessUsecase {
  getQueryAssisted(): string;
  getQuerySelfService(): string;
}

class BusinessProcess implements IBusinessProcessUsecase {

  private persona: Persona;

  constructor(persona: string, regional: string, witel: string, division: string, segment: string ) {
    if(persona === 'a') {
      this.persona = new BusinessSupporter(regional, witel, division, segment);
    } else if (persona === 'b') {
      this.persona = new PolicyMaker(regional, witel, division, segment);
    } else if (persona === 'c') {
      this.persona = new TerritoryLeader(regional, witel, division, segment);
    } else if (persona === 'd') {
      this.persona = new SegmentLeader(regional, witel, division, segment);
    } else {
      throw new Error("persona not found");
    }
  }

  getQueryAssisted(): string {
    return this.persona.getQueryAssisted();
  }
  getQuerySelfService(): string {
    return this.persona.getQuerySelfService();
  }
}




export { BusinessProcess };