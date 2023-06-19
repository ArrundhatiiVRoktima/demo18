$(function(){

    $(".toggle").on("click", function(){

        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }
    });
});   

function submit(){
    var first_name_input = document.getElementById("first_name_input").value;
    var last_name_input = document.getElementById("last_name_input").value;
    var gender = document.getElementById("gender_input").value;
    var full_dob = document.getElementById("dob_input").value;
    
    if (first_name_input == "" || last_name_input == "" || gender == "" || full_dob=="") {
        alert("Please fill out all the input fields!");
    }
    else {
        console.log("Loading") 
        var dob_components = full_dob.split("-");
        var date = dob_components[2];
        var month = dob_components[1];
        var year = dob_components[0];
        console.log(date);
        console.log(month);
        console.log(year);
        
        //Psychic Number

        let date_1 = String(date).charAt(0);
        let date_2 = String(date).charAt(1);
        date_1_no = parseInt(date_1);
        date_2_no = parseInt(date_2);
        let p = date_1_no + date_2_no;
        console.log("p = " + p);
        if (p.toString().length > 1){
            let p_1 = String(p).charAt(0);
            let p_2 = String(p).charAt(1);
            p_1_no = parseInt(p_1);
            p_2_no = parseInt(p_2)
            let psychic_number = p_1_no + p_2_no;
            console.log("Psychic Number : " + psychic_number);
            document.getElementById("psychic_number").innerHTML = "Psychic Number : " + psychic_number;
        }
        else{
            psychic_number = p;
            console.log("Psychic Number : " + psychic_number);
            document.getElementById("psychic_number").innerHTML = "Psychic Number : " + psychic_number;
        }
        

        if (date_1_no == 0 || date == 10 || date == 20 || date == 30){
            console.log("Psychic Number will not be printed.")
        }

        else {
            console.log("Psychic Number will be printed.")
        }

        //Destiny Number

        let month_1 = String(month).charAt(0);
        let month_2 = String(month).charAt(1);
        month_1_no = parseInt(month_1);
        month_2_no = parseInt(month_2);  
        
        let year_1 = String(year).charAt(0);
        let year_2 = String(year).charAt(1);
        let year_3 = String(year).charAt(2);
        let year_4 = String(year).charAt(3);
        year_1_no = parseInt(year_1);
        year_2_no = parseInt(year_2);
        year_3_no = parseInt(year_3);
        year_4_no = parseInt(year_4);

        let d = date_1_no + date_2_no + month_1_no + month_2_no + year_1_no + year_2_no + year_3_no + year_4_no;
        console.log("d = " + d);

        if (d.toString().length > 1){
            let d_1 = String(d).charAt(0);
            let d_2 = String(d).charAt(1);
            d_1_no = parseInt(d_1);
            d_2_no = parseInt(d_2);
            d2 = d_1_no + d_2_no;
            console.log("d2 = " + d2);
            if (d2.toString().length > 1){
                let d2_1 = String(d2).charAt(0);
                let d2_2 = String(d2).charAt(1);
                d2_1_no = parseInt(d2_1);
                d2_2_no = parseInt(d2_2);
                let destiny_number = d2_1_no + d2_2_no;
                console.log("Destiny Number : " + destiny_number);
                console.log("Destiny Number will be printed.");
                document.getElementById("destiny_number").innerHTML = "Destiny Number : " + destiny_number;
            }
    
            else{
                destiny_number = d2;
                console.log("Destiny Number : " + destiny_number);
                console.log("Destiny Number will be printed.");
                document.getElementById("destiny_number").innerHTML = "Destiny Number : " + destiny_number;
            }
        }
        else{
            destiny_number = d;
            console.log("Destiny Number : " + destiny_number);
            console.log("Destiny Number will be printed.");
            document.getElementById("destiny_number").innerHTML = "Destiny Number : " + destiny_number;
        }


        //Kua Number

        ky = year_1_no + year_2_no + year_3_no + year_4_no;
        kyn = parseInt(ky);
        console.log("ky = " + kyn)
        if (kyn.toString().length > 1){
            let ky_1 = String(kyn).charAt(0);
            let ky_2 = String(kyn).charAt(1);
            kyn_1 = parseInt(ky_1);
            kyn_2 = parseInt(ky_2);
            ky2 = kyn_1 + kyn_2;
            console.log("ky2 = " + ky2);
            if (ky2.toString().length > 1){
                let ky2_1 = String(ky2).charAt(0);
                let ky2_2 = String(ky2).charAt(1);
                kyn2_1 = parseInt(ky2_1);
                kyn2_2 = parseInt(ky2_2);
                let year_total = kyn2_1 + kyn2_2;
                console.log("Year Total : " + year_total);
            }
    
            else{
                year_total = ky2;
                console.log("Year Total : " + year_total);
            }
        }

        else{
            year_total = kyn;
            console.log("Year Total : " + year_total);
        }

        if(gender == "male"){
            k_number = 11 - year_total;

            if (k_number.toString().length > 1){
                let k_1 = String(k_number).charAt(0);
                let k_2 = String(k_number).charAt(1);
                k_1_no = parseInt(k_1);
                k_2_no = parseInt(k_2)
                let kua_number = k_1_no + k_2_no;
                console.log("Kua Number : " + kua_number);
                console.log("Kua Number will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua Number : " + kua_number;
            }
            else{
                kua_number = k_number;
                console.log("Kua Number : " + kua_number);
                console.log("Kua Number will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua Number : " + kua_number;
            }
            

        }
        else if(gender == "female"){
            k_number = year_total + 4;

            if (k_number.toString().length > 1){
                let k_1 = String(k_number).charAt(0);
                let k_2 = String(k_number).charAt(1);
                k_1_no = parseInt(k_1);
                k_2_no = parseInt(k_2)
                let kua_number = k_1_no + k_2_no;
                console.log("Kua Number : " + kua_number);
                console.log("Kua Number will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua Number : " + kua_number;
            }
            else{
                kua_number = k_number;
                console.log("Kua Number : " + kua_number);
                console.log("Kua Number will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua Number : " + kua_number;
            }}
    }
} 
