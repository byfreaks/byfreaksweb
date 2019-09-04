hoverLanguages();
switchMode();


function hoverLanguages(){
    $('.selectLanguages,.iconLanguages').on('mouseenter',function(){
        $('#fc').removeClass('selectLanguages');
        $('#fc').addClass('selectLanguagesHover');
        $('.iconLanguages').addClass('iconLanguagesHover');
    });
    
    $('.selectLanguages,.iconLanguages').on('mouseout',function(){
        $('#fc').removeClass('selectLanguagesHover');
        $('#fc').addClass('selectLanguages');
        $('.iconLanguages').removeClass('iconLanguagesHover');
        $('#fc').trigger('click');
    });
}


function switchMode(){
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
}
