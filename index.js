var script_inj = document.createElement('script')
script_inj.src = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867';
script_inj.type = 'text/javascript';
// input the script into head in html
document.getElementsByTagName('head')[0].appendChild(script_inj);
console.log(document.getElementsByTagName('head')[0]); 