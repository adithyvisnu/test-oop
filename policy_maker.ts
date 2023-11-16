import { IBusinessProcessUsecase } from ".";
import { Persona } from "./persona";

class PolicyMaker extends Persona implements IBusinessProcessUsecase {

  constructor(regional: string, witel: string, division: string, segment: string) {
    super(regional, witel, division, segment);
  }
  getQueryAssisted(): string {
    return "query assisted policy maker"
  }
  getQuerySelfService(): string {
    return "query self services policy maker"
  }

}

export { PolicyMaker }