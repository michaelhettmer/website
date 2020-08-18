/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const objectMap = (object: any, mapFn: (p: any) => any): any => {
    return Object.keys(object).reduce((result: any, key: any) => {
        result[key] = mapFn(object[key]);
        return result;
    }, {});
};
