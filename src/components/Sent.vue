<template>
    <div class="inbox-body">
        <app-message :messages="sentMessages"></app-message>
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
        sentMessages() {
            return this.data.messages.filter(function(message) {
                return message.type == "outgoing" && !message.isDeleted;
            });
        }
    }
};
</script>