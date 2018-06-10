export class MenuItem {
    public id;
    public display;
    public isSelected = false;

    constructor({id = '', display = '', isSelected = false}) {
        this.id = id;
        this.display = display;
        this.isSelected = isSelected;
    }
}
