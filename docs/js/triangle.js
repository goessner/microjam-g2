function init(e) {
    const g2elm = e.currentTarget;
    const A = {x:0,y:0,r:5,fs:'#ccc'}, 
          B = {x:200,y:0,r:5,fs:'orange'},
          C = {x:50,y:Math.sqrt(25*75),r:5,fs:'#ccc'};
          H = {x:50,y:0,r:5,fs:'orange'};

    g2elm.g.ply({pts:[H,A,C,H,B,C],fs:'lightgreen',lw:2,ls:'navy',lj:'round'})
           .arc({x:()=>B.x/2,y:0,r:()=>B.x/2,w:0,dw:Math.PI,lw:2,ls:'navy'})
           .cir(A)
           .cir(B)
           .cir(C)
           .cir(H)

    function constraining() {
        B.x = Math.max(B.x,0);
        C.x = H.x = Math.max(Math.min(H.x,B.x),0);
        C.y = Math.sqrt(C.x*(B.x-C.x));
        B.y = H.y = 0;
    }

    g2elm.addEventListener("tick", constraining, false);
}

document.addEventListener("DOMContentLoaded", () => {
    const g2elm = document.getElementById('g');
    if (g2elm) {
        if (g2elm.readyState)
            init({currentTarget: g2elm});
        else
            g2elm.addEventListener("init", init, false);
    }
});
