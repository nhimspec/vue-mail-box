<template>
    <div class="container">
        <div class="mail-box">
            <app-sidebar :messages="messages"></app-sidebar>
            <app-content :messages="messages"></app-content>
        </div>
    </div>
</template>

<script>
import SidebarVue from "./components/Sidebar.vue";
import ContentVue from "./components/Content.vue";
import messages from "./data/messages.js";
import randomMessages from "./data/random-messages.js";
import { eventBus } from "./main";

export default {
    created() {
        eventBus.$on("sendMessage", data => {
            let temp = [data.message];
            this.messages = temp.concat(this.messages.slice(0));
        });

        eventBus.$on("refeshMessages", () => {
            let randomIndex = Math.floor(Math.random() * randomMessages.length),
                temp = [randomMessages[randomIndex]];
            this.messages = temp.concat(this.messages.slice(0));
        });
    },
    data() {
        return {
            messages
        };
    },
    components: {
        appSidebar: SidebarVue,
        appContent: ContentVue
    }
};
</script>
