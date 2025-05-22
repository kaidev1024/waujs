const isZeroArray = (arr: any): boolean => !Array.isArray(arr) || arr.length === 0;

class ArrayUtil {
  static IsZeroArray = (arr: any): boolean => isZeroArray(arr);

  static RemoveItem = <T>(arr: undefined | T[], itemToDelete: T) => {
    if (this.IsZeroArray(arr)) return [];
    return arr!.filter(
      (item) => item !== itemToDelete,
    );
  };

  static RemoveItemByID = <T extends { id: string; }>(arr: undefined | T[], id: string) => {
    if (this.IsZeroArray(arr)) return [];
    return arr!.filter(
      (item) => item.id !== id,
    );
  };

  static UpdateItem = <T extends { id: string; }>(arr: undefined | T[], newItem: T) => {
    if (this.IsZeroArray(arr)) return [];
    arr!.forEach(
      (item, i) => {
        if (item.id === newItem.id) arr![i] = newItem;
      },
    );
    return arr!;
  };

  static PrependItem = <T>(arr: undefined | T[], newItem: T) => {
    if (this.IsZeroArray(arr)) return [newItem];
    return [newItem, ...arr!];
  };

  static AppendArray = <T>(arr: undefined | T[], newArr: T[]) => {
    if (this.IsZeroArray(arr)) return newArr;
    return [...arr!, ...newArr];
  };

  static Union = <T>(a: T[], b: T[]) => a.concat(b.filter((item) => a.indexOf(item) < 0));
}

export default ArrayUtil;
