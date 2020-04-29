---
"layout": "page"
---
# g2 &ndash; Strong Constrained Triangle Geometry

These are mostly `g2` features shown here. The vector graphics n this markdown preview is interactive. You can select and move the two orange circular handles below.

<figure>
    <g-2 id='g' width="401" height="301" x0="100" y0="100" darkmode 
         grid cartesian interactive></g-2>
  <figcaption>Fig.: Strong constrained triangle geometry</figcaption>
</figure>

In case, you see incomplete graphics inside of  VSCode this ![security-warning.png](./media/security-warning.png) security warning, you want to click on it. Select `Disable` and thus allow our embedded script to run.
<figure>
    <img src="./media/security-settings.png">
</figure>

We use an empty `<g-2>` element here and later fill the graphics content via script.

```xml
<g-2 id='g' width="401" height="301" x0="100" y0="100" darkmode 
         grid cartesian interactive></g-2>

<!-- some code lines later -->

<script src="./js/triangle.js"></script>
```
The script `triangle.js` is located relative to the markdown content document and contains the code:

```js
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
    if (document.readyState === 'loading')
        document.getElementById('g').addEventListener("init", init, false);
    else
        init({currentTarget: document.getElementById('g')})
});
```


<script src="./js/triangle.js"></script>

