import { IBusinessProcessUsecase } from ".";
import { Persona } from "./persona";

class SegmentLeader extends Persona implements IBusinessProcessUsecase {

  constructor(regional: string, witel: string, division: string, segment: string) {
    super(regional, witel, division, segment);
  }
  getQueryAssisted(): string {
    return "query assisted segment leader"
  }
  getQuerySelfService(): string {
    return "query self services segment leader"
  }

}

export { SegmentLeader }