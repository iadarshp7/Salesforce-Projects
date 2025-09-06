import { LightningElement, wire } from 'lwc';
import lwcTolwc from '@salesforce/messageChannel/LwcToLwc__c';
import { MessageContext, subscribe, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';

export default class ComponentB extends LightningElement {
    message;
    subscription
    @wire(MessageContext)
    context;
    connectedCallback() {
        this.subscribeMesaage();
    }
    subscribeMesaage() {
        this.subscription = subscribe(this.context, lwcTolwc, (msg) => { this.handleMessage(msg) }, { scope: APPLICATION_SCOPE })
    }
    handleMessage(msg) {
        this.message = msg.lmsData.value ? msg.lmsData.value : "No Message"
    }
    unsubscribeMessage() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}