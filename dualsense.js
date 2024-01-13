const HID = require('node-hid');

const targetVendorId = 0x054C;
const targetProductId = 0x0CE6;

const devices = HID.devices();
const targetDevice = devices.find(device => device.vendorId === targetVendorId && device.productId === targetProductId);

if (targetDevice) {
    const controller = new HID.HID(targetDevice.path);
    controller.write([0x05]);
    controller.on('data', data => {
        const collectionValue1 = data[54];
        const battery_level = Math.min((collectionValue1 & 0x0f) * 100 / 8, 100);
        const charging = data[55] & 0x08;
        const is_charging = Boolean(charging);
        const arrowSymbol = is_charging ? '↑' : '↓';
        console.log('Battery %:', battery_level, arrowSymbol);
    });

} else {
    console.error('Target device not found.');
}
