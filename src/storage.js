//Default data
export const data = [
    {sno:"1", name :"Thara",date:"001", Gender :"Female", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
    {sno:"2", name :"John",date:"002", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
    {sno:"3", name :"Smith",date:"003", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
    {sno:"4", name :"Eswar",date:"004", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"Tamil" },
    {sno:"5", name :"David",date:"005", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
    {sno:"6", name :"Kumar",date:"006", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
];

export const validateLanguage=(languages)=>{
    const English = languages.english ? "English " : "";
    const Tamil = languages.tamil ? "Tamil " : "";
    const Telugu = languages.telugu ? "Telugu " : "";
    const Hindi = languages.hindi ? "Hindi " : "";
    const Malayalam = languages.malayalam ? "Malaiyalam " : "";
    var lang = English + Tamil + Telugu + Hindi +Malayalam;
    const langsplitter = lang.split(" "); // splitting languages
    console.log(langsplitter);
    if(langsplitter.length>2){
    lang= langsplitter.join(", "); // merging languages
    }
    return lang.substr(0,lang.length-2)
}
