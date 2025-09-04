import { LightningElement } from 'lwc';

export default class School extends LightningElement {
    msg;
    myName;
    progress = 0;
    showModal = false;
    handleModal() {
        this.showModal = true;
    }
    modalHandle(event) {
        this.showModal = false;
        this.msg = event.detail.msg;
        this.myName = event.detail.Name;
    }
    progressBarHandler(event) {
        this.progress = event.target.value;
    }
    resetProgressBar() {
        this.template.querySelector('c-student').resetBar();
    }
    carousedDetails = [
        {
            src: "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First Card",
            description: "First card description."
        },
        {
            src: "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header: "Second Card",
            description: "Second card description."
        },
        {
            src: "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: "Third Card",
            description: "Third card description."
        }
    ];
}