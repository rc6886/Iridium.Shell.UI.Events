import Event from "../Event";

export default class TitleUpdatedEvent implements Event {
  constructor(title: string) {
    this.title = title;
  }

  title: string;

  toCustomEvent(): CustomEvent<TitleUpdatedEvent> {
    return new CustomEvent("TitleUpdatedEvent", {
      detail: this,
      bubbles: true,
    });
  }
}