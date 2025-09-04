import { LightningElement } from 'lwc';

export default class SuccessModal extends LightningElement {
    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}