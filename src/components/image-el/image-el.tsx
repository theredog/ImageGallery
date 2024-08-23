import { Component, h, Prop, State, Listen,Event, EventEmitter } from "@stencil/core";
import { lookupIconSrc1 } from "../../global/global";
import carData from "../../assets/carData/carData.json"

@Component({
  tag: 'image-el',
  styleUrl: 'image-el.css',
  shadow: true,
})
export class ImageEl {
  constructor() {
    this.showModule();
  }
  @Prop({ reflect: true }) imgSrc: string;
  @Prop() imgAlt: string;
  @Prop({ reflect: true,mutable:true }) elementId: string;

  @State() carDataEl: any;
  @State() isModuleVisible: boolean = false;

  @Event() passToModule:EventEmitter<{id:number,name:string,details:string,price:number,image:string}>;

  emitModuleData(){
    this.passToModule.emit(this.carDataEl as {id:number,name:string,details:string,price:number,image:string});
  }

  showModule = () => {
    this.isModuleVisible = !this.isModuleVisible;

    this.carDataEl = carData.find(item => item.id === +this.elementId);

    this.emitModuleData();
  }



  @Listen('triggerFunction')
  handleTriggerFunction() {
    this.showModule();
  }

  render() {
    return (
      <li>
        <figure>
          <img src={this.imgSrc} alt={this.imgAlt} />
          <figcaption>{this.carDataEl.name}</figcaption>
          <button class='lookup-icon' onClick={this.showModule}>
            <img src={lookupIconSrc1} alt="A lookup icon" />
          </button>
        </figure>
        {this.isModuleVisible && <image-popup moduleDataObj={this.carDataEl}></image-popup>}
      </li>
    );
  }
}
