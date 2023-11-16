import { IBusinessProcessUsecase } from ".";
import { Persona } from "./persona";

class TerritoryLeader extends Persona implements IBusinessProcessUsecase {

  constructor(regional: string, witel: string, division: string, segment: string) {
    super(regional, witel, division, segment);
  }
  
  getQueryAssisted(): string {
    return "query assisted teritori leader"
  }
  getQuerySelfService(): string {
    return "query self services teritori leader"
  }

}

export { TerritoryLeader }