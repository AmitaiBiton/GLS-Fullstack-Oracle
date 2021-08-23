injectJquery();

var script2 = document.createElement('script');
script2.src = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867&callback=GET_RESPONSE';
script2.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script2);

function injectJquery() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function GET_RESPONSE(response) {
    
    inject_css(response.data.css);
    let num_of_steps = response.data.structure.steps.length;

      for (i = 0; i < 5; i++) {
        let stepType = response.data.tiplates[response.data.structure.steps[i].action.type];
         let item = createTipElement(stepType ,i);
         $(response.data.structure.steps[i].action.selector).after(item);
         $('.SN'+i+' .steps-count [data-iridize-role="stepCount"]').html("<span>"+(i+1)+"</span>");
          $('.SN'+i+' .steps-count [data-iridize-role="stepsCount"]').html('<span>'+num_of_steps+'</span>');
       
          $('.SN'+i+' .popover-content [data-iridize-id="content"]').html(response.data.structure.steps[i].action.contents["#content"]);
     
          $("[class='tooltip in']").removeClass('tooltip in').addClass("tooltip in "+response.data.structure.steps[i].action.placement+" "+response.data.structure.steps[i].action.classes);
        
        if (i <4){       
            $('.SN'+i+' .popover-content [data-iridize-id="content"]').html(response.data.structure.steps[i].action.contents["#content"]);
     
        }
       }
        

        

}

function inject_css(css_file){
    $('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />').appendTo('head');
    $('<style type="text/css"> ' + css_file + '</style>').appendTo('head');
}
function createTipElement(htmlString, stepIndex) {
    let WP ='<div  class="sttip">   	<div class="tooltip in"> <div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner">';
    let WS ='</div></div></div>';
    var div = document.createElement('div');
    div.innerHTML ='<div class=SN'+stepIndex+'> '+ WP+ htmlString + WS +' </div>';
    return div.firstChild;
}