$(function(){
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');

    $btnCal.click(function(){
        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=Math.round(2*(w+h)*Math.pow(10,3))/Math.pow(10,3)
            ,a=Math.round(w*h*Math.pow(10,3))/Math.pow(10,3);
        //output
        $perimeter.val(p),
        $area.val(a);
    })
})