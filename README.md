## Simple state meneger for Vue
### Install
```
npm i easy-state-meneger-vue
```
##### State meneger for React (https://github.com/Senails/easy-state-meneger/tree/React)

### Example for Vue
```ts
import { createEasyStore } from "easy-state-meneger-vue";

const initState = {
    count: 0
}

export const {useSelector, updateStore} = createEasyStore(initState);

export function Action(){
    updateStore((state)=>{
        state.count++;
    });
}
```
```Vue
<script setup lang="ts">
    import { useSelector } from ".state";

    const count = useSelector((s)=>s.count);

</script>
<template>
    <button @click="Action">{{ count }}</button>
</template>
```
