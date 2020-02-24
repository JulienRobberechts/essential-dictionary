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
  it("should return an error for null data", () => {
    const data = null;
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ error: true, errorMessage: 'no data' });
  })
  it("should return an error for non array data", () => {
    const data = {};
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ error: true, errorMessage: 'no data' });
  })
  it("should return an error for empty array data", () => {
    const data = [];
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ error: true, errorMessage: 'no data' });
  })
  it("should return suggestions for invalid data", () => {
    const data = ["suggestion1"];
    const dicoData = formatDefinitionData(data);
    expect(dicoData).toEqual({ suggestions: data });
  })
})