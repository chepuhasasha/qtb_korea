import { defineStore } from "pinia";
import { ref } from "vue";

export interface IMessage {
  type: "ok" | "error" | "warn";
  message: string;
  code: number | null;
}
export interface IMessageWidthTime extends IMessage {
  time: number;
}

export const useServerMessagesStore = defineStore("messages", () => {
  const messages = ref<Record<number, IMessageWidthTime>>({});

  function addMessage(message: IMessage) {
    const time = Date.now();
    messages.value[time] = { ...message, time: time };
    setTimeout(() => {
      delete messages.value[time];
    }, 1000 * 5);
  }

  return { messages, addMessage };
});
