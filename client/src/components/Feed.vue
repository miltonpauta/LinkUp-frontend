<template>
    <div id="feedPage">
        <!-- work on this form later, make a panel that displays all shit using data in mongodb  -->
        <!-- <PostForm></PostForm> -->

        <!-- title = title of panel -->
        <Panel sectionTitle="All User Posts">

        </Panel>
    </div>
</template>

<script>
import PostForm from '@/components/Post-Form.vue'
import Panel from '@/components/Panel.vue'

export default {
    name: 'feedPage',
    components: {
        PostForm,
        Panel
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>