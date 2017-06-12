export class Utils {

  public static setFirstInArray(arrayOfData: string[], element: string): string[] {
    const first = arrayOfData[0];
    arrayOfData[0] = arrayOfData[arrayOfData.indexOf(element)];
    arrayOfData[arrayOfData.indexOf(element)] = first;
    return arrayOfData;
  }
}
