<template>
    <div class="inbox-body">
        <div class="mail-option">
            <div class="btn-group">
                <a href="#" class="btn" @click="refresh">
                    <i class="fa fa-refresh"></i>&nbsp; Refresh
                </a>
            </div>
        </div>
        <app-messages :messages="incomingMessages"></app-messages>
    </div>
</template>

<script>
import MessagesVue from "./Messages.vue";
import { eventBus } from "./../main.js";

export default {
    components: {
        appMessages: MessagesVue
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        refresh() {
            eventBus.$emit("refeshMessages");
        }
    },
    computed: {
        incomingMessages() {
            return this.data.messages.filter(function(message) {
                return message.type == "incoming" && !message.isDeleted;
            });
        }
    }
};
</script>