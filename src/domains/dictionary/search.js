import { getDefinitions } from "./dictionary-api";
import { formatDefinitionData } from "./formatter";

const searchWordDefinition = async word =>
  formatDefinitionData(await getDefinitions(word));

export { searchWordDefinition };