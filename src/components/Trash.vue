<template>
    <div class="inbox-body">
        <app-message :messages="trashedMessages"></app-message>
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
        trashedMessages() {
            return this.data.messages.filter(function(message) {
                return message.isDeleted;
            });
        }
    }
};
</script>