injectJquery();

var script2 = document.createElement('script');
script2.src = 'http://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867&callback=GET_RESPONSE';
script2.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script2);

function injectJquery() {
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery-3.1.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function GET_RESPONSE(response) {
    
    console.log(response);
    

}

function inject_css(JsonsCss){
    $('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />').appendTo('head');
    $('<style type="text/css"> ' + "https://guidedlearning.oracle.com/player/edge/static/fonts/ir-lato.css" + '</style>').appendTo('head');
}
function createTipElement(htmlString, stepIndex) {
    let wrapperPrefix ='<div  class="sttip">   	<div class="tooltip in"> <div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner">';
    let wrapperSuffix ='</div></div></div>';
    var div = document.createElement('div');
    div.innerHTML ='<div class=stepNumber'+stepIndex+'> '+ wrapperPrefix+ htmlString + wrapperSuffix +' </div>';
    return div.firstChild;
}