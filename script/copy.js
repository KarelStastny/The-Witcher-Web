//===========Copy function

    document.querySelector(".copy-button").addEventListener("click", function(){
        // vybere input hesla a označí
        let copyPasword = document.querySelector(".link-url")
            copyPasword.select()

        // označené zkpíruje do paměti    
        document.execCommand("copy") 
    })
