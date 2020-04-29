---
"layout": "page"
---
# g2 &ndash; Interactiv Weak Contrained Geometry

This are mostly `g2` features shown here. You can select and move the three circular handles in the vector graphics below.

<figure>
<g-2 id='g' width="400" height="300" x0="100" y0="100" cartesian grid darkmode interactive>
{ "main":[
    {"c":"lin","a":{"x1":"@A.x","y1":"@A.y","x2":"@B.x","y2":"@B.y","lw":3,"ls":"navy"}},
    {"c":"cir","a":{"id":"A","x":150,"y":100,"r":5,"fs":"orange"}},
    {"c":"cir","a":{"id":"B","x":-50,"y":100,"r":5,"fs":"orange"}}
  ]
}
</g-2>
  <figcaption>Fig.: Weak constrained geometry</figcaption>
</figure>

The custom `g-2` element used is ...

```xml
<g-2 id='g' width="400" height="300" x0="100" y0="100" cartesian grid darkmode interactive>
  <!-- g2 graphics data -->
</g-2>
```
... and `g2` graphics data embedded are:

```json
{ "main":[
    {"c":"lin","a":{ "x1":"@A.x","y1":"@A.y",
                     "x2":"@B.x","y2":"@B.y",
                     "lw":3, "ls":"navy"} },
    {"c":"cir","a":{ "id":"A",
                     "x":150,"y":100,"r":5,
                     "fs":"orange"} },
    {"c":"cir","a":{ "id":"B",
                     "x":-50,"y":100,"r":5,
                     "fs":"orange"} }
  ]
}
```