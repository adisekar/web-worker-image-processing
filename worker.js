addEventListener("message", (d) => {
  const imageData = d.data;
  const data = imageData.data;
  const w = imageData.width;
  const h = imageData.height;
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      let index = (x + y * w) * 4;
      // imageData[0] = red, 1 = blue, 2 = green
      data[index] = data[index] * 1.2; // red
      // imageData.data[index + 1] = imageData.data[index + 1] * 1.2; // green
      // imageData.data[index + 2] = imageData.data[index + 2] * 1.2; // blue
      imageData.data[index + 3] = 127;
    }
  }

  self.postMessage(imageData, [imageData.data.buffer]);
});
