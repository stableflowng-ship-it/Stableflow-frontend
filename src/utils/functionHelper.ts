/* eslint-disable @typescript-eslint/no-explicit-any */
// 


export const getNestedValue = (obj: any, path: string) => {
  // console.log(path)
  return path.split(/[\.\[\]]+/).filter(Boolean).reduce((acc, part) => acc && acc[part], obj);
};