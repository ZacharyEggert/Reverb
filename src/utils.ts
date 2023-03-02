export const makeURLParams = (params: Record<string, string | number>) => {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    urlParams.append(key, value.toString());
  });
  return urlParams.toString();
};
