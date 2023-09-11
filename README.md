## Simple state meneger for Vue
##### Install
```
npm i easy-state-meneger-vue
```
##### Install for React (https://github.com/Senails/easy-state-meneger/tree/React)
```
npm i easy-state-meneger-react
```

##### Example for vue
```ts  
const initState = {
    count: 0
}

export const {useSelector, updateStore} = createEasyStore(initState);

export function Action(){
    updateStore((state)=>{
        state.count++;
        return state;
    });
}
```
```Vue
<script setup lang="ts">
import { CreateStore } from "easy-state-meneger-vue";

    const count = useSelector((s)=>s.count);

</script>
<template>
    <button @click="Action">{{ count }}</button>
</template>
```
