export const isZeroObject = (obj: any) => !obj || Object.keys(obj).length === 0;
export const getVariableName = (v: any) => Object.keys({ v })[0];
export const isUndefined = (v: any) => typeof v === 'undefined';
