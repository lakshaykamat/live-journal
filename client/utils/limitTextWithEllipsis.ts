export function limitTextWithEllipsis(text:String, maxLength=50):String {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.substring(0, maxLength) + "...";
    }
}