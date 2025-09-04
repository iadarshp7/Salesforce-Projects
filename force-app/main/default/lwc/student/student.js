import { LightningElement, api } from 'lwc';

export default class Student extends LightningElement {
    @api name;
    @api carouselData;
    @api progressBar;
    @api resetBar() {
        this.progressBar = 0;
    }
}