<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', 'inter', sans-serif;
}

h1 {
    font-size: 50px;
    line-height: 64px;
    color: #ffffff;
}

h2 {
    font-size: 46px;
    line-height: 54px;
    color: #ffffff;
}

h4 {
    font-size: 20px;
    color: #ffffff;
}

h6 {
    font-size: 12px;
    font-weight: 700;
}

p {
    font-size: 16px;
    color: #ffffff;
    margin: 15px 0 20px 0;
}

.section-p1 {
    padding: 40px 80px;
}

body{
    width: 100%;
}

/*header*/

#header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    background: #ffb13b;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
}

.logo{
    width: 70px;
    height: 70px;
}

#navbar{
    display: flex;
    align-items: center;
    justify-content: right;
}

#navbar li{
    list-style: none;
    padding: 0 20px;
}

#navbar li a{
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    transition: 0.3s ease;
}

#navbar li a:hover,
#navbar li a.active{
    color: #7a2e02;
}

#mobile{
    display: none;
    align-items: center;
}
#close{
    display: none;
}


#navbar li a.active::after{
    content: "";
    width: 30%;
    height: 2px;
    background: #7a2e02;
    position: absolute;
    bottom: -4px;
    left: 20px;
}


#hero{
    background-image: url("../Components/Assets/cover/pic.jpg");
    height: 75vh;
    width: 100%;
    background-size: cover;
    background-position: top 25% right 0;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

#hero h2{
    padding-bottom: 20px;
}

#hero h1{
    padding-bottom: 20px;
}

#hero button{
    background-color: #ffb13b;
    border-radius: 40px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    padding: 14px 20px 14px 20px;
    background-repeat: no-repeat;
    cursor: pointer;
}

#desc p{
    color: black;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    padding: 20px 20px;
}

#banner img{
    width: 100%;
    height: auto;
}

#fe-topic{
    text-align: center;
}

#fe-topic h2{
    color: black;
    font-size: 35px;
    
}

#fe-topic p{
    color: #7a2e02;

}

#feature{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

#feature .fe-box{
    width: 180px;
    text-align: center;
    padding: 25px 15px;
    box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
    border: 1px solid #ffffff;
    border-radius: 4px;
    margin: 15px 0;
}

#feature .fe-box img{
    width: 100px;
    height: auto;

}

#feature .fe-box h6{
    padding: 10px;
}

#signup{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f8d32e;
}

.signtext h4{
    color: black;
    font-size: 25px;
    font-weight: 400;
}
.signtext p{
    color: black;
    font-size: 15px;
}
.signtext p span{
    color: rgb(255, 255, 255);
}

#signup .form{
    display: flex;
    width: 40%;
}

#signup input{
    height: 3.125ram;
    padding: 0 1.25em;
    font-size: 14px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
}
#signup button{
    background-color: #7a2e02;
    color: #ffffff;
    white-space: nowrap;
    border-radius: 4px;
    width: auto;
    height: 25px;
}

footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: black;
}
footer .col{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
}
footer h3{
    color: rgb(255, 255, 255);
    padding-bottom: 20px;
}
footer h4{
    font-size: 14px;
    color: rgb(255, 255, 255);
    padding-bottom: 20px;
}
footer p{
    font-size: 12px;
    color: rgb(255, 255, 255);
    margin: 0 0 8px 0;
}
footer a{
    font-size: 12px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
}
footer .follow{
    margin-top: 20px;
}
footer .follow img{
    height: 20px;
    width: auto;
    border: 1px solid #ffffff;
    padding-right: 4px;
    cursor: pointer;
}
footer .copyright{
    width: 100%;
    text-align: center;
}


@media(max-width:799px){
    #navbar {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: fixed;
        top: 0;
        right: -300px;
        height: 100vh;
        width: 300px;
        background-color: #ffb13b;
        box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
        padding: 60px 0 0 10px;
        transition: 0.3ms;
    }
    #navbar.active{
        right: 0px;
    }
    #navbar li{
        margin-bottom: 25px;
    }
    #mobile{
        display: flex;
        align-items: center;
    }
    #mobile img{
        padding-left: 30px;

    }
    #close{
        display: initial;
        position: absolute;
        top: 30px;
        left: 30px;
    }
    #cart{
        display: none;
    }
    #hero{
        height: 70vh;
        background-position: top 30% right 30%;
        padding: 0 80px;
        display: flex;
    }
    #feature{
        justify-content: center;
    }
    #feature .fe-box{
        margin: 15px 15px;
    }
    #Ab-img img{
        width: 100%;
        height: auto;
    }

}

@media(max-width: 477px){

    #header{
        padding: 10px 30px;
    }
    h1{
        font-size: 38px;
        
    }
    h2{
        font-size: 32px;

    }
    #hero{
        background-position: 55%;
        padding: 0 20px;
    }
    #Ab-img img{
        width: 100%;
        height: auto;
    }
}
</style>
