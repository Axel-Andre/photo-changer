export function setPhoto(url: string): void {
    if (chrome && chrome.tabs) {
        chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
            const tab = tabs[0];
            chrome.tabs.sendMessage(tab.id || 0, { from: 'popup', subject: 'setPhoto', url: url })
        })
    }
}
export function getPhoto(callback: (url: string)=>void) {
    let url: string;
    if (chrome && chrome.tabs) {
        chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
            const tab = tabs[0];
            chrome.tabs.sendMessage(tab.id || 0, { from: "popup", subject: "getPicture" }, response => {
                callback(response);
            });
        });
    }
    return url;
}