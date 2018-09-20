<template>
    <div class="inbox-body">
        <app-message :messages="importantMessages"></app-message>
    </div>
</template>

<script>
import MessagesVue from "./Messages.vue";
export default {
    components: {
        appMessage: MessagesVue
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        importantMessages() {
            return this.data.messages.filter(function(message) {
                return message.isImportant && !message.isDeleted;
            });
        }
    }
};
</script>