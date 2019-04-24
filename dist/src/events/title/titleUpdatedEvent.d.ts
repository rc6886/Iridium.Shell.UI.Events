import Event from "../Event";
export default class TitleUpdatedEvent implements Event {
    constructor(title: string);
    title: string;
    toCustomEvent(): CustomEvent<TitleUpdatedEvent>;
}
