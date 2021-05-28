<template>
<div>
    <nav-menu></nav-menu>
    <router-view/>
</div>
</template>

<script>
/*eslint-disable*/
import NavMenu from './common/NavMenu'
export default {
    name: 'Home',
    components:{NavMenu},
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    created() {
        
    }
}
</script>

<style scoped>

</style>
