import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial) {
    this.connect();
  }

  connect() {
    this.bluetoothSerial.connect("20:91:48:AA:AC:56", this.connectSuccess, this.connectFailure);
  }

  connectSuccess() {
    console.log("Bluetooth connection success");
    this.bluetoothSerial.read().then((data) => {this.data = data});

  }

  connectFailure() {
    console.log("Bluetooth connection failure");
    this.data = "Bluetooth connection failed";
  }
}
