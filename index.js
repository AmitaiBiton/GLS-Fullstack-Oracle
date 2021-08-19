injectJquery()
// inject Jquary and url to a head[0]
function injectJquery() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    var script_inj = document.createElement('script')
    script_inj.src = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867';
    script_inj.type = 'text/javascript';
    // input the script into head in html
    document.getElementsByTagName('head')[0].appendChild(script_inj);
    console.log(document.getElementsByTagName('head')[0]); 

}



// create a callback name -> __5szm2kaj see the url.
function __5szm2kaj(response){
    //console.log(response)
    inject_css(response.data.css);
    


}

// response.data.css contain the css that we need for the box and other.
function inject_css(css_file){
    console.log(css_file)
    $('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />').appendTo('head');
    $('<style type="text/css"> ' + css_file + '</style>').appendTo('head');
}


// create element that can hold the content 
function createTipElementFromHTML(div_String, pos_step) {
    let wrapper1 ='<div  class="sttip">   	<div class="tooltip in"> <div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner">';
    let wrapper2 ='</div></div></div>';
    var div = document.createElement('div');
    div.innerHTML ='<div class=stepNumber'+pos_step+'> '+ wrapper1+ div_String + wrapper2 +' </div>';
    return div.firstChild;
}