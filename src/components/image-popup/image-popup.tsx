import { Component, h, State, Event, EventEmitter,Listen,Prop } from "@stencil/core";
import data from "../../assets/carData/carImgSrc.json"

@Component({
  tag: "image-popup",
  styleUrl: 'image-popup.css',
  shadow: true,
  assetsDirs:['../../assets'],
})
export class ImagePopup {
  @State() isVisible: boolean = true;
  @State() selectedItem:{id: number,images: {left: string,right: string,studio: string},name: string }
  @State() altValue:string = 'studio';

  @Prop({reflect:true}) moduleDataObj:{id:number,name:string,details:string,price:number,image:string};

  @Event() triggerFunction: EventEmitter;

  hideModule() {
    this.isVisible = false;
  }

  emitHideModule() {
    this.triggerFunction.emit();
  }

  @Listen('passToModule')
  handleModuleData(event: CustomEvent<{id:number,name:string,details:string,price:number,image:string}>) {
    this.moduleDataObj = event.detail;
    console.log(this.moduleDataObj);
  }

  multipleFunc() {
    this.hideModule();
    this.emitHideModule();
  }

  triggerControls(event: CustomEvent<any>) {
    const checkValue = (event.target as HTMLImageElement).getAttribute('alt');
    if (checkValue !== null) {
      this.altValue = (event.target as HTMLImageElement).getAttribute('alt');
    } else {
      this.altValue = 'studio';
    }
  }

  render() {
    this.selectedItem = data.find(item => item.id === this.moduleDataObj.id);

    return this.isVisible ? (
      <div>
        <div class='backdrop' onClick={this.multipleFunc.bind(this)}></div>
        <div class="modal">
          <div class="img-part">
            <button class='exit-btn' onClick={this.multipleFunc.bind(this)}>X</button>
            <img src={this.selectedItem.images[this.altValue]} alt={this.selectedItem.name}/>
            <div class='controls' onClick={this.triggerControls.bind(this)}>
              <button id='left'>
                <img src="../../assets/arrows/arrow-left.png" alt="left"/>
              </button>
              <button id='right'>
                <img src="../../assets/arrows/arrow-right.png" alt="right"/>
              </button>
              <button id='top'>
                <img src="../../assets/arrows/arrow-top.png" alt="studio"/>
              </button>
            </div>
          </div>
          <div class='text-part'>
            <header>
              <h1>{this.moduleDataObj.name}</h1>
            </header>
            <hr />
            <main>
              <p>{this.moduleDataObj.details}</p>
            </main>
            <hr />
            <footer>
              <h5>{this.moduleDataObj.price} $</h5>
              <button>Get One!</button>
            </footer>
          </div>
        </div>
      </div>
    ) : null;
  }
}
