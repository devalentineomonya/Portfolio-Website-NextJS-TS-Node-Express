import {   PiXLogoFill } from "react-icons/pi"
import {  RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill, RiYoutubeFill,RiGithubFill } from "react-icons/ri"
import { TbWorldWww } from "react-icons/tb";

const socialLinksList = [
    {
        name:"X (formally twitter)",
        color:"#00000e",
        href:"https://x.com/devalenthcohen",
        icon:<PiXLogoFill size={28}/>
    },
    {
        name:"Facebook",
        color:"#1877f2",
        href:"https://facebook.com/devalentineomonya",
        icon:<RiFacebookFill size={28}/>
    },
    {
        name:"Instagram",
        color:"#c32aa3",
        href:"https://www.instagram.com/devalentineomonya/",
        icon:<RiInstagramFill size={28}/>
    },
    {
        name:"Whatsapp",
        color:"#25d366",
        href:"https://api.whatsapp.com/send?phone=254768133220&text=Hello%2C%20I%20recently%20had%20the%20opportunity%20to%20visit%20your%20portfolio%20website%2C%20and%20I%20was%20highly%20impressed%20by%20your%20work.%20I%20would%20like%20to%20connect%20and%20explore%20potential%20collaboration%20opportunities.%20Looking%20forward%20to%20your%20response",
        icon:<RiWhatsappFill size={28}/>
    },
    {
        name:"Portfolio",
        color:"#e9204f",
        href:"http://devalentine.me",
        icon:<TbWorldWww size={28}/>
    },
    {
        name:"LinkedIn",
        color:" #0966c2",
        href:"https://www.linkedin.com/in/devalentineomonya/",
        icon:<RiLinkedinFill size={28}/>
    },
    {
        name:"Youtube",
        color:"#ff0000",
        href:"htps://www.youtube.com/@devalentineomonya",
        icon:<RiYoutubeFill size={28}/>
    },
    {
       name:"Github",
       color:"#000000",
       href:"https://github.com/devalentineomonya",
       icon:<RiGithubFill size={28}/>
    },
    
]
export default socialLinksList