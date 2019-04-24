var TitleUpdatedEvent = /** @class */ (function () {
    function TitleUpdatedEvent(title) {
        this.title = title;
    }
    TitleUpdatedEvent.prototype.toCustomEvent = function () {
        return new CustomEvent("TitleUpdatedEvent", {
            detail: this,
            bubbles: true,
        });
    };
    return TitleUpdatedEvent;
}());
export default TitleUpdatedEvent;
