let classifier;
window.onload = function() {
  classifier = ml5.imageClassifier('MobileNet', modelReady)
  // image = document.getElementById("baseImage")
}

function imageAdded(event) {
  let file = window.URL.createObjectURL(event.target.files[0])
  let image = document.getElementById("baseImage")
  image.src = file
  image.onload = function() {
    classifier.classify(image, gotResults)
  }
}

function modelReady() {
  console.log("Model is read!")
}

function gotResults(error, data) {
  if(error) console.log(error)
  if(data) {
    label = document.getElementById("imageLabel")
    conf = document.getElementById("confidence")
    label.innerHTML = data[0].label
    conf.innerHTML = `${(data[0].confidence * 100).toFixed(2)}%`
  }
}