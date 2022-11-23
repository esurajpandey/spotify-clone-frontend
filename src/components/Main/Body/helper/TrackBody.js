export const listenForOutsideClicks=(listening,setListening,menuRef,setOpen)=>{
    if(listening) return;
    if(!menuRef.current) return;
    setListening(true);

    ['click','touchstart'].forEach((type)=>{
        document.addEventListener('click',(evt) =>{
            const cur = menuRef.current;
            const node = evt.target;
            if(cur.contains(node)) return;
            setOpen(false);
        })
    })
}