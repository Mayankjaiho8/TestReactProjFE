export const arr = ['root', 'carrot', 'mango', 'apple'];

export function add(a,b){
    if(!a || !b){
        return null
    }

    return a+b;
}

export const arrayAdd = (item) => {
    if(!item){
        return null
    }

    arr.push(item);
}

export const drinkAll = (drink, flavor) => {
    if(flavor === 'orange'){
        drink('orange')
    }
}

export const drink = () => {
    console.log('orange flavor is good')
}

export const returningFn = (val)=> {
    if(val <= 5){
        return 'success';
    }
    throw 'error';
}