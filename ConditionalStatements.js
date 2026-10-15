function launchBrowser(){
    const browserName = 'FireFox';

    if(browserName == 'Chrome'){
        console.log(browserName);
        
    }else{
        console.log('Entered a browser other than chrome');
        
    }
}
launchBrowser();

//Displays Chrome when the browserName is Chrome
//Displays "Entered a browser other than chrome" when the browserName is set a FireFox

function runTests(){
    let testType = 'smoke';

    switch (testType) {
        case 'Smoke':
            console.log('The testType is Smoke');
             break;
        case 'Sanity':
            console.log('The testType is Sanity');
             break;
        case 'Regression':
            console.log('The testType is Regression');
             break;
    
        default:
            console.log('The testType is smoke from default case');
            break;
    }
}
runTests();