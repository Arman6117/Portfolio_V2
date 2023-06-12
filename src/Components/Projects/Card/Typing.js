export const typeWrite = (elementId,text,speed) =>{
    let i = 0;
    const tag = document.getElementById(elementId);
    const html = tag.innerHTML;
    const attr = tag.setAttribute("data",html);
    const txt = tag.getAttribute("data");

    const type = () =>
    {
        if(i <= txt.length)
        {
            document.getElementById(elementId).innerHTML = txt.slice(0,i+1);
            i++;
            setTimeout(type,speed);
        }
    }

    type();
}