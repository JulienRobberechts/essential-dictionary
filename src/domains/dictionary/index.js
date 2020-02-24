import { getDefinitions } from "../../adapters/dictionary";
import { formatDefinitionData } from "./formatter";

const searchWordDefinition = async word =>
  formatDefinitionData(await getDefinitions(word));

export { searchWordDefinition };