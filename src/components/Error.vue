<script setup lang="ts">
    const props = defineProps(['prop1', 'prop2']);
    console.log(props.prop2)
    const tipo = 'alerta'
</script>

<template>
    <div class="alerta" :class='prop2' >
        {{ prop1 }}
    </div>
</template>

<style>

.alerta {
    padding: 1rem 1rem;
    max-width: 60rem;
    margin: 1rem auto 1rem auto;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 13px;
    text-align: center;
}
.alerta.error {
    background-color: #fff;
    border-left: 5px solid #b91c1c;
    color: #b91c1c;
}
.alerta.advertencia {
    background-color: #fff;
    border-left: 5px solid #cdc224;
    color: #b9ae1c;
}

</style>