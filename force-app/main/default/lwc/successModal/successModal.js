import { LightningElement } from 'lwc';

export default class SuccessModal extends LightningElement {
    closeModal() {
        this.dispatchEvent(new CustomEvent('close', { detail: { msg: 'Hi I am modal response!', Name: 'Adarsh Pal' } }));
    }
}