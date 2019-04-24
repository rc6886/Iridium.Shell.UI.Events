export default abstract class Event {
  abstract toCustomEvent(): CustomEvent;
};