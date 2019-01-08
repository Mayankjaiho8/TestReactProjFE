import { add, arr, arrayAdd, drinkAll, drink, returningFn } from './../StateFunctions/statefunctions'

xdescribe("test the state functions", () => {
    test('test the add function for NULL', ()=>{
        expect(add(3)).toBeNull();
    })


    test('test the add function to not be undefined', () => {
        expect(add(4)).not.toBeUndefined();
    })

    test('test the add function for proper result', () => {
        expect(add(4,5)).toBe(9);
    })

    test('test addArr Function for null item', () => {
        const initialLength = arr.length;
        arrayAdd();
        const finalLength = arr.length;
        expect(finalLength).toBe(initialLength);
    })

    test('test addArr Function for null return', () => {
        expect(arrayAdd()).toBeNull();
    })

    test('test addArr Function for new item', () => {
        let item = 'orange';
        arrayAdd(item);
        expect(arr).toContain(item);
    })

    test('test for drinkAll function', () => {
        const drink1 = jest.fn(drink);
        drinkAll(drink1, 'orange')
        expect(drink1).toHaveBeenCalled();
    })

    test('test drinkAll function to check if drink funtion is not called', () => {
        const drink1 = jest.fn(drink);
        drinkAll(drink1, 'mango');
        expect(drink1).not.toHaveBeenCalled();
    })

    test('test drinkAll function to check if drink funtion is called twice', () => {
        const drink1 = jest.fn(drink);
        drinkAll(drink1, 'orange');
        drinkAll(drink1, 'orange');
        drinkAll(drink1, 'mango');

        expect(drink1).toHaveBeenCalledTimes(2);
    })

    xtest('test returningFn to have successfully returned', () => {
        const returningFn1 = jest.fn(returningFn);
        expect(returningFn1(6)).toThrow();
    })
})