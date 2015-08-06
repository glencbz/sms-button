
$(function(){
    var el = $(".animated-button svg")[0];
    console.log(el);
    function animate1() {
        dynamics.animate(el, {
            rotateZ: 180,
            scale: 1.5,
            borderBottomColor: '#43F086'
        }, {
            type: dynamics.spring,
            friction: 400,
            duration: 1300,
        });
    }
    $(".animated-button").click(animate1);
});