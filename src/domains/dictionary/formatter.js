const formatDefinitionData = data => {
  if (!data || !Array.isArray(data) || !data.length)
    return { error: true, errorMessage: 'no data' };

  if (!data[0].meta || !data[0].def)
    return { suggestions: data };

  return { definitions: data };
};

export { formatDefinitionData };