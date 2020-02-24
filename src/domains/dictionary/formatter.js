const formatDefinitionData = data => {
  if (!data || !Array.isArray(data) || !data.length)
    return { suggestions: [], definitions: [] };

  if (!data[0].meta || !data[0].def)
    return { suggestions: data, definitions: [] };

  return { definitions: data };
};

export { formatDefinitionData };