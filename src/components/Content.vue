<template>
    <aside class="lg-side">
        <div class="inbox-head">
            <h3>{{ currentView.title }}</h3>
        </div>
        <keep-alive>
            <component :is="currentView.tag" :data="currentView.data"></component>
        </keep-alive>
    </aside>
</template>

<script>
import InboxVue from "./Inbox.vue";
import SentVue from "./Sent.vue";
import ImportantVue from "./Important.vue";
import TrashVue from "./Trash.vue";
import ViewMessageVue from "./ViewMessage.vue";
import { eventBus } from "./../main.js";

export default {
    components: {
        appInbox: InboxVue,
        appSent: SentVue,
        appImportant: ImportantVue,
        appTrash: TrashVue,
        appViewMessage: ViewMessageVue
    },
    props: {
        messages: {
            type: Array,
            required: true
        }
    },
    created() {
        eventBus.$on("changeView", data => {
            let temp = [
                {
                    tag: data.tag,
                    title: data.title,
                    data: data.data || {}
                }
            ];
            this.history = temp.concat(this.history.splice(0));
        });
    },
    data() {
        return {
            history: [
                {
                    tag: "app-inbox",
                    title: "Inbox",
                    data: {
                        messages: []
                    }
                }
            ]
        };
    },
    computed: {
        currentView() {
            let current = this.history[0];
            current.data.messages = this.messages;
            return current;
        },
        previousView() {
            return typeof this.history[1] !== "undefined" ? this.history[1] : null;
        }
    }
};
</script>