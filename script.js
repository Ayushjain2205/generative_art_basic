function setup () {
    createCanvas(windowWidth, windowHeight)
  }
  
  function draw () {
    for (let i = 0, color = 0; i < 50; i++, color += 5) {
      let randomNumber = random(windowWidth)
      strokeWeight(3)
      stroke(color, color / 2, 255)
      line(0, i * 30, 10 + randomNumber, 0)
      stroke(255, color / 2, color, color)
      line(0, i * 30, 10 + randomNumber, 0)
    }
  }