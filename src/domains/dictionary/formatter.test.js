import { formatDefinitionData } from "./formatter";

describe("Dictionary data formatter", () => {
  it("should return definitions for valid data", () => {
    const data = [{
      meta: {},
      def: {}
    }];
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ definitions: data });
  })
  it("should return empty fields for null data", () => {
    const data = null;
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ suggestions: [], definitions: [] });
  })
  it("should return empty fields for non array data", () => {
    const data = {};
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ suggestions: [], definitions: [] });
  })
  it("should return empty fields for empty array data", () => {
    const data = [];
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ suggestions: [], definitions: [] });
  })
  it("should return suggestions for invalid data", () => {
    const data = ["suggestion1"];
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ suggestions: data, definitions: [] });
  })
})