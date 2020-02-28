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
        var p=2*(w+h)
            ,a=Math.pow(w,3)*Math.pow(h,3);
        //output
        $perimeter.val(p),
        $area.val(a);
    })
})