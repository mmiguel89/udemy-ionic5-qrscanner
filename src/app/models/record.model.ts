export const TYPES = {
    http: "http",
    geo : "geo",
    notReconized: "not reconized"
}

export class Record {
    public created: Date;
    public format: string;
    public icon: string;
    public text: string;
    public type: string;

    constructor(format: string, text: string) {
        // Direct properties
        this.created = new Date();
        this.format = format;
        this.text = text;
        // icon and type calculated
        this.setIconAndType();
    }

    private setIconAndType() {
        const initText = this.text.substr(0, 4);
        let icon: string;
        let type: string;
        switch (initText) {
            case "http": {
                icon = "globe";
                type = TYPES.http;
                break;
            };
            case "geo:": {
                icon = "pin";
                type = TYPES.geo;
                break;
            };
            default: {
                icon = "create";
                type = TYPES.notReconized;
            }
        };
        this.icon = icon;
        this.type = type;
    }
}