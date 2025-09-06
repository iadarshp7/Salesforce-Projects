import { LightningElement, wire } from 'lwc';
import lwcTolwc from '@salesforce/messageChannel/LwcToLwc__c';
import { publish, MessageContext } from 'lightning/messageService';


export default class ComponentA extends LightningElement {

    message
    @wire(MessageContext)
    context
    handleMessage(event) {
        this.message = event.target.value;
    }
    publishMessage() {
        const msg = {
            lmsData: {
                value: this.message
            }
        }
        publish(this.context, lwcTolwc, msg);
    }
}