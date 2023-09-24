import { ComputedRef } from "vue";
export type  Store = { [key: string]: any };

export declare function createEasyStore<T extends Store>(initialStore: T):{
    useSelector<V>(selectorCallback: (store: T)=> V): ComputedRef<V>,
    subscribe<V>(selectorCallback: (store: T)=> V, onChangeCallback: ()=>void ):{
        unSubscribe():void,
        getStore():V,
    },
    updateStore(mutateCallback: (copy:T)=> void),
    getStore():T,
}