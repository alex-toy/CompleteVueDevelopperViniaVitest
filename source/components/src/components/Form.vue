<template>
    <slot>Nothing to render</slot>

    
    <div class="help">
        <slot name="help"></slot>
    </div>

    <div class="fields">
        <slot name="fields"></slot>
    </div>

    <div class="buttons">
        <slot name="buttons"></slot>
    </div>

</template>