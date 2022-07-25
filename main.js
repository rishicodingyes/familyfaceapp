https://teachablemachine.withgoogle.com/models/igGAy_T7N/
Webcam.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png_quality: 90
});
camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.iageClassifier('https://teachablemachine.withgoogle.com/models/igGAy_T7N/model.json',modelLoaded);
