let validateForm = function(selector, rules, sucessModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form){
            let formData = new FormData(form);
            let xhr  = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
                if (xhr.readyState === 4) {
                    if ( xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }
            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
        }

    });
}
validateForm('.form',{email:{required:true, email:true}}, '.sucess-popup', 'send goal');